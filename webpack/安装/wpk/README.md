在开始之前，请确保安装了 Node.js 的最新版本。

本地安装
    npm install --save-dev webpack
    如果你使用 webpack 4+ 版本，你还需要安装 CLI。
    npm install --save-dev webpack-cli
    通常，webpack 通过运行一个或多个 npm scripts，会在本地 node_modules 目录中查找安装的 webpack
        "scripts": {
            "start": "webpack --config webpack.config.js"
        }