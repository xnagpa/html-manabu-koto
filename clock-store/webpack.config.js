const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/views/index.html',
    './src/styles/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/build.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html'
    }),
    new ExtractTextPlugin({filename: 'style.css'}),
  ],
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      // {
      //   test: /\.(woff2?|ttf|otf|eot|svg)$/,
      //   exclude: /node_modules/,
      //   loader: 'file-loader',
      //   options: {
      //       name: '[path][name].[ext]'
      //   }
      // },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter()
              }
            }
          }]
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
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