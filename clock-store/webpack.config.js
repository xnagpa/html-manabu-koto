const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/views/index.pug',
    './src/styles/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'js/build.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.pug'
    }),
    new ExtractTextPlugin({filename: 'style.css'}),
  ],
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
};