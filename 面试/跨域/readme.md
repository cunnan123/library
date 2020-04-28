1、JSONP
    JSONP 的原理很简单，就是利用 <script> 标签没有跨域限制的漏洞。当前后端需要通讯时前端通过 <script> 标签指向一个需要访问的get地址并提供定义一个函数，后端通过调用这个函数的方式，以形参的形式将服务端数据返回给前端
    JSONP 使用简单且兼容性不错，但是只限于 get 请求。
2、CORS
    CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。
    浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。
    服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源

    Access-Control-Allow-Origin设置允许跨域的白名单，在白名单里的跨域请求是允许的。
    Access-Control-Allow-Methods设置接受的方法，这里只接受POST方法。
    Access-Control-Allow-Headers设置接受的请求头，用逗号分隔。
    Access-Control-Allow-Max-Age设置预检的有效期，单位为秒。发送正式请求前，浏览器会预先发送一个预检请求，如果服务器返回了上述信息，表明是可以跨越请求的，然后才会正式发送请求。预检成功后，在有效期内就不用再发送了。

    //设置response header，允许跨域请求
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Methods","POST");
    response.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");
    response.setHeader("Access-Control-Allow-Max-Age","1728000");//单位：秒，这里是20天

3、document.domain
    该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。
    只需要给页面添加 document.domain = 'test.com' 表示二级域名都相同就可以实现跨域
4、postMessage
    这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息
5、window.name
    在页面在浏览器端展示的时候，我们总能在控制台拿到一个全局变量window，该变量有一个name属性，其有以下 特征：
    1）每个窗口都有独立的window.name与之对应；
    2）在一个窗口的生命周期中（被关闭前），窗口载入的所有页面同时共享一个window.name，每个页面对window.name都有读写的权限；
    3）window.name一直存在与当前窗口，即使是有新的页面载入也不会改变window.name的值；
    4）window.name可以存储不超过2M的数据，数据格式按需自定义。

6、使用代理