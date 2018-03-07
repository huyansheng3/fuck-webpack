'use strict'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'
process.env.REACT_APP_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const webpack = require('webpack')
const config = require('../webpack.config.js')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const printHostingInstructions = require('react-dev-utils/printHostingInstructions')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')
const printBuildError = require('react-dev-utils/printBuildError')

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild

const statsOptions = {
  // fallback value for stats options when an option is not defined (has precedence over local webpack defaults)
  all: undefined,
  // 增加资源信息
  assets: false,
  // 对资源按指定的项进行排序
  // 你可以使用 `!field` 来反转排序。
  assetsSort: 'field',
  // 增加缓存了的（但没构建）模块的信息
  cached: false,
  // Show cached assets (setting this to `false` only shows emitted files)
  cachedAssets: false,
  // 增加子级的信息
  children: false,
  // 增加包信息（设置为 `false` 能允许较少的冗长输出）
  chunks: true,
  // 将内置模块信息增加到包信息
  chunkModules: false,
  // 增加包 和 包合并 的来源信息
  chunkOrigins: false,
  // 对包按指定的项进行排序
  // 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
  chunksSort: 'field',
  // 用于缩短请求的上下文目录
  context: '../src/',
  // `webpack --colors` 等同于
  colors: false,
  // Display the distance from the entry point for each module
  depth: false,
  // Display the entry points with the corresponding bundles
  entrypoints: true,
  // 增加 --env information
  env: false,
  // 增加错误信息
  errors: false,
  // 增加错误的详细信息（就像解析日志一样）
  errorDetails: false,
  // 增加编译的哈希值
  hash: false,
  // Set the maximum number of modules to be shown
  maxModules: 15,
  // 增加内置的模块信息
  modules: false,
  // 对模块按指定的项进行排序
  // 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
  modulesSort: 'field',
  // Show dependencies and origin of warnings/errors (since webpack 2.5.0)
  moduleTrace: false,
  // Show performance hint when file size exceeds `performance.maxAssetSize`
  performance: false,
  // Show the exports of the modules
  providedExports: false,
  // 增加 public path 的信息
  publicPath: false,
  // 增加模块被引入的原因
  reasons: false,
  // 增加模块的源码
  source: false,
  // 增加时间信息
  timings: false,
  // Show which exports of a module are used
  usedExports: false,
  // 增加 webpack 版本信息
  version: true,
  // 增加提示
  warnings: false,
}

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

const resolveApp = relativePath => path.resolve(__dirname, '..', relativePath)

const paths = {
  build: resolveApp('./dist/'),
  appPackageJson: resolveApp('package.json'),
}

// "webpack --profile --json --config='./webpack.config.js' --output-filename='stats.json' > stats.json"

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.build)
  .then(previousFileSizes => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    // fs.emptyDirSync(paths.build)
    // Start the webpack build
    return build(previousFileSizes)
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      console.log('File sizes after gzip:\n')

      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        paths.build,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      )

      const appPackage = require(paths.appPackageJson)
      const publicPath = config.output.publicPath
      const buildFolder = path.relative(process.cwd(), paths.build)
      printHostingInstructions(appPackage, '/', publicPath, buildFolder, false)
    },
    err => {
      console.log(chalk.red('Failed to compile.\n'))
      printBuildError(err)
      process.exit(1)
    }
  )

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  console.log(`Creating an optimized ${process.env.REACT_APP_ENV} build...`)

  let compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }
      const messages = formatWebpackMessages(stats.toJson({}, true))

      // 输出到文件中
      fs.writeFileSync(
        './stats.json',
        JSON.stringify(stats.toJson(statsOptions, true), null, 2)
      )

      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1
        }
        return reject(new Error(messages.errors.join('\n\n')))
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        )
        return reject(new Error(messages.warnings.join('\n\n')))
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      })
    })
  })
}
