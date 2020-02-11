const path = require('path')
const styleLoaders=require('./cell/styleLoaders')
module.exports = {
    base: {
        context: path.resolve(__dirname, '../'),
        entry: {
            app: './src/main.js'
        }
    },
    dev: {
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js',
            publicPath: '/'
        },
        devtool: 'cheap-module-eval-source-map',

        devServer: {
            clientLogLevel: 'warning',
            historyApiFallback: {
                rewrites: [{
                    from: /.*/,
                    to: path.posix.join('/', 'index.html')
                }, ],
            },
            hot: true,
            contentBase: false, // since we use CopyWebpackPlugin.
            compress: true,
            host: 'localhost',
            port: 8080,
            open: false,
            overlay:{
                    warnings: false,
                    errors: true
                },
            publicPath: '/',
            proxy: {},
            quiet: true, // necessary for FriendlyErrorsPlugin
            watchOptions: {
                poll: false,
            }
        },
        styleLoaders: styleLoaders.styleLoaders({ sourceMap: true, usePostCSS: true }),
        
    },
    prod: {

    },
    test: {

    }
}