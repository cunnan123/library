const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  // 基础路基
  context: path.resolve(__dirname, '../'),
  //入口
  entry: {
    polyfills: './src/polyfills.js',
    app: './src/index.js'
  },
  module: {
    rules: [

      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            transformAssetUrls: {
              video: ['src', 'poster'],
              source: 'src',
              img: 'src',
              image: ['xlink:href', 'href'],
              use: ['xlink:href', 'href']
            }
          }
        }

      },
      {
        test: /\.js$/,
        include: [path.join(__dirname, '../src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],

          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          // 'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:7].[ext]',
            esModule: false
          },
        }, ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'media/[name].[hash:7].[ext]',
          },
        }, ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'font/[name].[hash:7].[ext]',
          },
        }, ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      // // 将this指向window
      // {
      //   test: require.resolve(path.join(__dirname, '../src/index.js')),
      //   use: "imports-loader?this=>window"
      // },
      // 将一个全局变量作为一个普通的模块来导出
      {
        test: require.resolve(path.join(__dirname, '../src/globals.js')),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '../src/alias'), //公用数据
    }
  },
  plugins: [
    // 清空dist
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    // 模板文件
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    }),
    // 全局变量
    new webpack.ProvidePlugin({
      _: 'lodash',
      join: ['lodash', 'join']
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }]),
    //  将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin(),

  ]
};