const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const config = require('./config')
const path = require('path')
const portfinder = require('portfinder')
const createNotifierCallback = require('./cell/createNotifierCallback')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const devWebpackConfig = merge(baseWebpackConfig, {
  output: config.dev.output,
  devtool: config.dev.devtool,
  devServer:config.dev.devServer,
  module: {
    rules: config.dev.styleLoaders
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),

  ]
})
module.exports = new Promise((resolve, reject) => {
    portfinder.getPort((err, port) => {
      if (err) {
        reject(err)
      } else {  
        devWebpackConfig.devServer.port=port
     
        devWebpackConfig.plugins.push(   new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`点击运行应用: http://${devWebpackConfig.devServer.host}:${port}`],
          },
          // onErrors:createNotifierCallback.createNotifierCallback()
          onErrors:undefined
        }))
        resolve(devWebpackConfig)
      }
    })
  })
  