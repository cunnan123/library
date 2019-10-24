初始化 npm
    npm init -y
本地安装 webpack 安装 webpack-cli（此工具用于在命令行中运行 webpack）
    npm install webpack webpack-cli --save-dev
调整 package.json 文件，以便确保我们安装包是私有的(private)，并且移除 main 入口。这可以防止意外发布你的代码
    添加 "private": true,
    删除  "main": "index.js",
要在 index.js 中打包 lodash 依赖，我们需要在本地安装 library：
    npm install --save lodash