npm init -y
npm install grunt --save-dev
npm install -g grunt-cli
npm install grunt-contrib-jshint grunt-contrib-nodeunit grunt-contrib-uglify --save-dev

Gruntfile由以下几部分构成：
    "wrapper" 函数
    项目与任务配置
    加载grunt插件和任务
    自定义任务