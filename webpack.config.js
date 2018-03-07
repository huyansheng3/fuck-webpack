const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const isReport = process.env.npm_config_report

const webpackConfig = {
  entry: {
    index1: './src/index.js',
    index2: './src/index2.js',
    index3: './src/index3.js',
    vendor: ['lodash', 'react'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Output Management',
      chunks: ['runtime', 'vendor', 'index1'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index2.html',
      title: 'Output Management2',
      chunks: ['runtime', 'vendor', 'index2'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index3.html',
      title: 'Output Management3',
      chunks: ['runtime', 'index3'],
    }),
    new ExtractTextPlugin({
      filename: '[name]-[contenthash].css',
      publicPath: 'http://static01.www.fiiish.cn',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity,
    }),
  ],
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          publicPath: 'http://static01.www.fiiish.cn/_next/',
        }),
      },
      {
        test: /\.(png|jpe?g|gif|ico|eot|ttf|woff|woff2)$/i,
        use: [
          // this will create image copy, that we will use,
          // output path - '/.next/static/longhash.png'
          // url - '/_next/static/longhash.png'
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'static/',
              publicPath: 'http://static01.www.fiiish.cn/_next/',
              limit: 8000,
            },
          },
        ],
      },
    ],
  },
}

// npm run build --report 增加 bundle 分析插件，相比 source-map-exploer 更加详细
isReport && webpackConfig.plugins.push(new BundleAnalyzerPlugin())

module.exports = webpackConfig
