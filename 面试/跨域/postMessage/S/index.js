const express = require('express')
const path = require('path')
const router = require('./router/routes')
const app = express()
// 配置静态资源
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'files')))
//配置全局中间件
// app.use(function (req, res, next) {
//     //cors设置
//     res.header('Access-Control-Allow-Origin','*');
//     next()
// });
//配置路由
app.use('/res', router)
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))