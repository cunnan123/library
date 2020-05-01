工作原理 
    浏览器加载 JavaScript 脚本，主要通过<script>元素完成。正常的网页加载流程是这样的。
        1.浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
        2.解析过程中，浏览器发现<script>元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
        3.如果<script>元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
        4.JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。
    加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题。

    如果外部脚本加载时间很长（一直无法完成下载），那么浏览器就会一直等待脚本下载完成，造成网页长时间失去响应，浏览器就会呈现“假死”状态，这被称为“阻塞效应”。

    为了避免这种情况，较好的做法是将<script>标签都放在页面底部，而不是头部。这样即使遇到脚本失去响应，网页主体的渲染也已经完成了，用户至少可以看到内容，而不是面对一张空白的页面。如果某些脚本代码非常重要，一定要放在页面头部的话，最好直接将代码写入页面，而不是连接外部脚本文件，这样能缩短加载时间。

    脚本文件都放在网页尾部加载，还有一个好处。因为在 DOM 结构生成之前就调用 DOM 节点，JavaScript 会报错，如果脚本都在网页尾部加载，就不存在这个问题，因为这时 DOM 肯定已经生成了。
defer 属性 
    为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对<script>元素加入defer属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。
        <script src="a.js" defer></script>
        <script src="b.js" defer></script>
        上面代码中，只有等到 DOM 加载完成后，才会执行a.js和b.js。

    defer属性的运行流程如下。
        1.浏览器开始解析 HTML 网页。
        2.解析过程中，发现带有defer属性的<script>元素。
        3.浏览器继续往下解析 HTML 网页，同时并行下载<script>元素加载的外部脚本。
        4.浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。
        
        有了defer属性，浏览器下载脚本文件的时候，不会阻塞页面渲染。下载的脚本文件在DOMContentLoaded事件触发前执行（即刚刚读取完</html>标签），而且可以保证执行顺序就是它们在页面上出现的顺序。
        对于内置而不是加载外部脚本的script标签，以及动态生成的script标签，defer属性不起作用。另外，使用defer加载的外部脚本不应该使用document.write方法。
async 属性
    解决“阻塞效应”的另一个方法是对<script>元素加入async属性。
    <script src="a.js" async></script>
    <script src="b.js" async></script>
    async属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。

    浏览器开始解析 HTML 网页。
        1.解析过程中，发现带有async属性的script标签。
        2.浏览器继续往下解析 HTML 网页，同时并行下载<script>标签中的外部脚本。
        3.脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
        4.脚本执行完毕，浏览器恢复解析 HTML 网页。
        5.async属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。另外，使用async属性的脚本文件里面的代码，不应该使用document.write方法。

        defer属性和async属性到底应该使用哪一个？
            一般来说，如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，就使用defer属性。如果同时使用async和defer属性，后者不起作用，浏览器行为由async属性决定。
脚本的动态加载 
    <script>元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载。
        ['a.js', 'b.js'].forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
        });
    这种方法的好处是，动态生成的script标签不会阻塞页面渲染，也就不会造成浏览器假死。但是问题在于，这种方法无法保证脚本的执行顺序，哪个脚本文件先下载完成，就先执行哪个。

    如果想避免这个问题，可以设置async属性为false。
        ['a.js', 'b.js'].forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
        });
    上面的代码不会阻塞页面渲染，而且可以保证b.js在a.js后面执行。不过需要注意的是，在这段代码后面加载的脚本文件，会因此都等待b.js执行完成后再执行。

    如果想为动态加载的脚本指定回调函数，可以使用下面的写法。
        function loadScript(src, done) {
        var js = document.createElement('script');
        js.src = src;
        js.onload = function() {
            done();
        };
        js.onerror = function() {
            done(new Error('Failed to load script ' + src));
        };
        document.head.appendChild(js);
        }
加载使用的协议 
    如果不指定协议，浏览器默认采用 HTTP 协议下载。
        <script src="example.js"></script>
    上面的example.js默认就是采用 HTTP 协议下载，如果要采用 HTTPS 协议下载，必需写明。
        <script src="https://example.js"></script>
    但是有时我们会希望，根据页面本身的协议来决定加载协议，这时可以采用下面的写法。
        <script src="//example.js"></script>