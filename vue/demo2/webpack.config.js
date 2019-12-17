const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
     
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
     
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              // limit: 200,
              esModule :false
            },
          }
        ],
      }   
    ]
  },
  plugins: [
   
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
}