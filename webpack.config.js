const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSass = new ExtractTextPlugin('css/all.css');

const pathSRC = './';
const pathBuild = './';

module.exports = {
  entry: {
    index: './' + pathSRC + '/js/index.js'
  },

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, pathBuild)
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: extractSass.extract({
          use: [
            {loader: 'css-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true}}
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=images/[name].[ext]'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=fonts/[name].[ext]'
        ]
      }
    ]
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'js/commons.bundle.js'
    }),

    extractSass ,
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: 'jquery',
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      SE: path.resolve(__dirname, pathSRC + '/js/_main.js'),
    })

  ],
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map'
};
