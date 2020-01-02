const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 定义输出目录
    filename: 'index.bundle.js'  // 定义输出文件名称
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配.js文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ]
};