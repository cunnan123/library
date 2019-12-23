const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: false // 关闭热重载
        }
      },
      // {
      //   test: /\.ts$/,
      //   loader: 'ts-loader',
      //   options: { appendTsSuffixTo: [/\.vue$/] }
      // },
      {
        test: /\.pug$/,
        oneOf: [
          // 这条规则应用到 Vue 组件内的 `<template lang="pug">`
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // 这条规则应用到 JavaScript 内的 pug 导入
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              // 'vue-style-loader',
              process.env.NODE_ENV === 'production'? 'vue-style-loader': MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,      
                  modules:{
                    localIdentName: '[local]_[hash:base64:5]'
                  }           
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    require('autoprefixer')
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  // 你也可以从一个文件读取，例如 `variables.scss`
                  // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
                  prependData: `$color: red;`
                }
              }
            ]
          },
          {
            use: [
              // 'vue-style-loader',
              process.env.NODE_ENV === 'production'? 'vue-style-loader': MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2         
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    require('autoprefixer')
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  // 你也可以从一个文件读取，例如 `variables.scss`
                  // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
                  prependData: `$color: red;`
                }
              }
            ]
          }
        ]
      },
      // {
      //   test: /\.scss$/,
      //   oneOf: [
      //     {
      //       resourceQuery: /module/,
      //       use: [
      //         'vue-style-loader',
      //         {
      //           loader: 'css-loader',
      //           options: {
      //             importLoaders: 2,      
      //             modules:{
      //               localIdentName: '[local]_[hash:base64:5]'
      //             }           
      //           }
      //         },
      //         {
      //           loader: 'postcss-loader',
      //           options: {
      //             plugins: [
      //               require('autoprefixer')
      //             ]
      //           }
      //         },
      //         {
      //           loader: 'sass-loader',
      //           options: {
      //             // 你也可以从一个文件读取，例如 `variables.scss`
      //             // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
      //             prependData: `$color: red;`
      //           }
      //         }
      //       ]
      //     },
      //     {
      //       use: [
      //         'vue-style-loader',
      //         {
      //           loader: 'css-loader',
      //           options: {
      //             importLoaders: 2         
      //           }
      //         },
      //         {
      //           loader: 'postcss-loader',
      //           options: {
      //             plugins: [
      //               require('autoprefixer')
      //             ]
      //           }
      //         },
      //         {
      //           loader: 'sass-loader',
      //           options: {
      //             // 你也可以从一个文件读取，例如 `variables.scss`
      //             // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
      //             prependData: `$color: red;`
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 20000,
            // limit: 200,
            esModule: false
          },
        }],
      }
    ]
  },
  // resolve: {
  //   // 将 `.ts` 添加为一个可解析的扩展名。
  //   extensions: ['.ts', '.js']
  // },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}