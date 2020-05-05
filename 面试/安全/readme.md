XSS
    是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响
    例如通过 URL 获取某些参数
    攻击
        http://www.domain.com?name=<script>alert(1)</script> 
        <div>{{name}}</div>
    防御
        最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义
            function escape(str) {
            str = str.replace(/&/g, '&amp;')
            str = str.replace(/</g, '&lt;')
            str = str.replace(/>/g, '&gt;')
            str = str.replace(/"/g, '&quto;')
            str = str.replace(/'/g, '&#39;')
            str = str.replace(/`/g, '&#96;')
            str = str.replace(/\//g, '&#x2F;')
            return str
            }
            escape('<script>alert(1)</script>') // -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;
        通常采用白名单过滤的办法 使用js-xss 来实现
            var xss = require('xss')
            var html = xss('<h1 id="title">XSS Demo</h1><script>alert("xss");</script>')
            // -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;
            console.log(html) //在输出中保留了 h1 标签且过滤了 script 标签
        CSP
        内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。
        CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。
        通常可以通过 HTTP Header 中的 Content-Security-Policy 来开启 CSP
            只允许加载本站资源
                 Content-Security-Policy: default-src ‘self’
            只允许加载 HTTPS 协议图片
                Content-Security-Policy: img-src https://*
            允许加载任何来源框架
                Content-Security-Policy: child-src 'none'
CSRF
    跨站请求伪造 利用用户的登录态发起恶意请求
    攻击
        假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口
            <img src="http://www.domain.com/xxx?comment='attack'" />
        如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口
            <form action="http://www.domain.com/xxx" id="CSRF" method="post">
            <input name="comment" value="attack" type="hidden" />
            </form>
    防御
        防御
            防范 CSRF 可以遵循以下几种规则：
                Get 请求不对数据进行修改
                不让第三方网站访问到用户 Cookie
                阻止第三方网站请求接口
                请求时附带验证信息，比如验证码或者 token
            SameSite
                可以对 Cookie 设置 SameSite 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。
            验证 Referer
                对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。
            Token
                服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。
密码安全
    加盐
        对于密码存储来说，必然是不能明文存储在数据库中的，否则一旦数据库泄露，会对用户造成很大的损失。并且不建议只对密码单纯通过加密算法加密，因为存在彩虹表的关系。
        通常需要对密码加盐，然后进行几次不同加密算法的加密。
            // 加盐也就是给原密码添加字符串，增加原密码长度
            sha256(sha1(md5(salt + password + salt)))
            但是加盐并不能阻止别人盗取账号，只能确保即使数据库泄露，也不会暴露用户的真实密码。一旦攻击者得到了用户的账号，可以通过暴力破解的方式破解密码。对于这种情况，通常使用验证码增加延时或者限制尝试次数的方式。并且一旦用户输入了错误的密码，也不能直接提示用户输错密码，而应该提示账号或密码错误。