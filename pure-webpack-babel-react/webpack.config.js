const path= require('path');

// 导入 `html-webpack-plugin` 插件
const HtmlWebPackPlugin= require('html-webpack-plugin');

// 创建一个插件的实例对象
const htmlPlugin= new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})

module.exports = {
  mode: "development", // development production
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名可以省略不写
    alias: {
      '@':path.join(__dirname, './src') // 这样 @ 符号就表示根目录中src的这一层
    }
  }
}