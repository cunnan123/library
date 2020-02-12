const webpackconfbase = require('./webpack.conf.base')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(webpackconfbase, {
  mode: "production",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // 控制vendors hash
    new webpack.HashedModuleIdsPlugin(),
   
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "all",
      automaticNameDelimiter: '-',
      cacheGroups: {
        commons: {
          name: "commons",
          minChunks: 2,
          priority: 10
        },
      }
    }
  }
})