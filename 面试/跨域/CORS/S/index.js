const express = require('express')
const path = require('path')
const router = require('./router/routes')
const app = express()
// 配置静态资源
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'files')))
//配置全局中间件
app.use(function (req, res, next) {
    //cors设置
    res.header('Access-Control-Allow-Origin','*');
    next()
});
//配置路由
app.use('/res', router)
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// //设置response header，允许跨域请求
// response.setHeader("Access-Control-Allow-Origin","*");
// response.setHeader("Access-Control-Allow-Methods","POST");
// response.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");
// response.setHeader("Access-Control-Allow-Max-Age","1728000");//单位：秒，这里是20天

// Access-Control-Allow-Origin设置允许跨域的白名单，在白名单里的跨域请求是允许的。
// Access-Control-Allow-Methods设置接受的方法，这里只接受POST方法。
// Access-Control-Allow-Headers设置接受的请求头，用逗号分隔。
// Access-Control-Allow-Max-Age设置预检的有效期，单位为秒。发送正式请求前，浏览器会预先发送一个
//     预检请求，如果服务器返回了上述信息，表明是可以跨越请求的，然后才会正式发送请求。
//     预检成功后，在有效期内就不用再发送了。
