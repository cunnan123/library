const express = require('express')
const path = require('path')
const router = require('./router/routes')
const app = express()
const http2 = require('spdy');
const fs = require('fs');
// 配置静态资源
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'files')))
//配置全局中间件
app.use(function (req, res, next) {
    //cors设置
    res.header('Access-Control-Allow-Origin', '*');
    next()
});
//配置路由
app.use('/res', router)

// http2配置
const port = 3000
var options = {
    key: fs.readFileSync('./http2.key'), //读取key
    cert: fs.readFileSync('./http2.crt') //读取crt
};
http2.createServer(options, app).listen(port, (error) => {
    if (error) {
        console.error(error)
        return process.exit(1)
    } else {
        console.log('Listening on port: ' + port)
    }
})