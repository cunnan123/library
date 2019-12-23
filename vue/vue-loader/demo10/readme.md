初始化项目
    npm init -y
安装webpack
   npm install --save-dev webpack webpack-cli
新建webpack.config.js .gitignore
安装vue 
    npm install --save-dev vue vue-loader vue-template-compiler
配置webpack.config.js
新建src index.js app.vue 
安装html-webpack-plugin
    npm install --save-dev html-webpack-plugin
安装babel-loader  vue-style-loader css-loader
npm install --save-dev babel-loader  vue-style-loader css-loader
安装@babel/core
npm install --save-dev @babel/core
运行npm run build
处理图片资源
npm install  --save-dev file-loader url-loader
预处理器sass
npm install --save-dev sass-loader node-sass
预处理器less
npm install --save-dev less less-loader
预处理器stylus
npm install --save-dev stylus stylus-loader
预处理器PostCSS
npm install --save-dev postcss-loader autoprefixer
预处理器Babel
npm install --save-dev babel-core babel-loader
预处理器 排除node_modules
exclude: file => (
    /node_modules/.test(file) &&
    !/\.vue\.js/.test(file)
)
<!-- 预处理器TypeScript
npm install --save-dev typescript ts-loader -->
预处理器Pug
npm install --save-dev pug pug-plain-loader
Scoped CSS
    深度作用选择器
CSS Modules
热重载
函数式组件
自定义块
CSS 提取
npm install --save-dev mini-css-extract-plugin
代码校验 (Linting) ESLint
npm install --save-dev eslint eslint-loader eslint-plugin-vue
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
代码校验 (Linting) stylelint
npm install --save-dev  stylelint stylelint-webpack-plugin stylelint-config-standard
安装dev-server
npm install --save-dev webpack-dev-server
