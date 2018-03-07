用于测试这该死的 webpack！！！每次 build 输出与上次的变化对比！

玄学配置，从测试做起！！

从测试结果观察每项配置的效果！！！

## 结论

1.  如果抽取成单独的模块，建议加上 minChunks: Infinity,
2.  output 请加上 `chunkFilename: '[name].[chunkhash:8].chunk.js'`,可以保证异步加载的 chunk 稳定
3.  `new webpack.NamedModulesPlugin()` 可以保证第三方的模块 id 不变

## 命令

* `npm run stats` 生成依赖关系的 json 文件，可上传至 http://webpack.github.io/analyse/ 生成图形化界面
