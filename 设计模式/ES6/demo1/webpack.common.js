 const path = require('path');
 const {
     CleanWebpackPlugin
 } = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
     entry: {
         app: './src/index.js'
     },
     output: {
         filename: 'common/js/[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         publicPath: './'
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/preset-env'],
                     plugins: ['@babel/transform-runtime']
                 }
             }
         }]
     },
     resolve: {
        extensions: ['.js', '.json'],
        alias: {
          lvbo: path.resolve(__dirname, 'src/')
        }
      },
     plugins: [
         new CleanWebpackPlugin({
             cleanAfterEveryBuildPatterns: ['dist'],
             // cleanOnceBeforeBuildPatterns: ['dist']
         }),
         new HtmlWebpackPlugin({
             title: 'Production'
         })
     ],
 };