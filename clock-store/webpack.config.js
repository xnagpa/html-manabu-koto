const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/views/product.html',
    './src/views/catalog.html',
    './src/views/index.html',
    './src/styles/style.scss',
    './src/javascripts/app.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/build.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/views/catalog.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/views/product.html'
    }),
    new SvgSpriteHtmlWebpackPlugin({
      includeFiles: [
        'src/svg/*.svg',
      ]}
    ),
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
        test: /\.svg$/,
        exclude: /node_modules/,
        use: SvgSpriteHtmlWebpackPlugin.getLoader(),
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          esModule: false,
        },
      },
    ],
  },
};
