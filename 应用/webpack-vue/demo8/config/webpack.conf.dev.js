const webpackconfbase = require('./webpack.conf.base')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack');
module.exports = merge(webpackconfbase, {
    mode: 'development',
    // source map
    devtool: 'inline-source-map',
    // webpack-dev-Server
    devServer: {
        contentBase: '../dist',
        hot: true, //热替换
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            
        ]
    },
    plugins: [
        // 热替换
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
})