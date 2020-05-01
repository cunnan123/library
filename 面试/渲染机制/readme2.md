浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）。

渲染引擎
    渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档。
    不同的浏览器有不同的渲染引擎。
        Firefox：Gecko 引擎
        Safari：WebKit 引擎
        Chrome：Blink 引擎
        IE: Trident 引擎
        Edge: EdgeHTML 引擎
    渲染引擎处理网页，通常分成四个阶段。
        解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
        对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
        布局：计算出渲染树的布局（layout）。
        绘制：将渲染树绘制到屏幕。
        以上四步并非严格按顺序执行，往往第一步还没完成，第二步和第三步就已经开始了。所以，会看到这种情况：网页的 HTML 代码还没下载完，但浏览器已经显示出内容了。
重流和重绘
    渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，称为“绘制”（paint）。它们都具有阻塞效应，并且会耗费很多时间和计算资源。

    页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）。用户的互动也会触发重流和重绘，比如设置了鼠标悬停（a:hover）效果、页面滚动、在输入框中输入文本、改变窗口大小等等。

    重流和重绘并不一定一起发生，重流必然导致重绘，重绘不一定需要重流。比如改变元素颜色，只会导致重绘，而不会导致重流；改变元素的布局，则会导致重绘和重流。

    大多数情况下，浏览器会智能判断，将重流和重绘只限制到相关的子树上面，最小化所耗费的代价，而不会全局重新生成网页。

    作为开发者，应该尽量设法降低重绘的次数和成本。比如，尽量不要变动高层的 DOM 元素，而以底层 DOM 元素的变动代替；再比如，重绘table布局和flex布局，开销都会比较大。

    var foo = document.getElementById('foobar');
    foo.style.color = 'blue';
    foo.style.marginTop = '30px';
    上面的代码只会导致一次重绘，因为浏览器会累积 DOM 变动，然后一次性执行。

    下面是一些优化技巧。
        读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，然后立刻写入，接着再读取一个 DOM 节点。
        缓存 DOM 信息。
        不要一项一项地改变样式，而是使用 CSS class 一次性改变样式。
        使用documentFragment操作 DOM
        动画使用absolute定位或fixed定位，这样可以减少对其他元素的影响。
        只在必要时才显示隐藏元素。
        使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重流时执行，而不是立即要求页面重流。
        使用虚拟 DOM（virtual DOM）库。
    下面是一个window.requestAnimationFrame()对比效果的例子。
        // 重绘代价高
        function doubleHeight(element) {
        var currentHeight = element.clientHeight;
        element.style.height = (currentHeight * 2) + 'px';
        }
        all_my_elements.forEach(doubleHeight);
        // 重绘代价低
        function doubleHeight(element) {
        var currentHeight = element.clientHeight;
        window.requestAnimationFrame(function () {
            element.style.height = (currentHeight * 2) + 'px';
        });
        }
        all_my_elements.forEach(doubleHeight);
        上面的第一段代码，每读一次 DOM，就写入新的值，会造成不停的重排和重流。第二段代码把所有的写操作，都累积在一起，从而 DOM 代码变动的代价就最小化了
JavaScript 引擎 
        JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。
        JavaScript 是一种解释型语言，也就是说，它不需要编译，由解释器实时运行。这样的好处是运行和修改都比较方便，刷新页面就可以重新解释；缺点是每次运行都要调用解释器，系统开销较大，运行速度慢于编译型语言。
        为了提高运行速度，目前的浏览器都将 JavaScript 进行一定程度的编译，生成类似字节码（bytecode）的中间代码，以提高运行速度。

        早期，浏览器内部对 JavaScript 的处理过程如下：
            读取代码，进行词法分析（Lexical analysis），将代码分解成词元（token）。
            对词元进行语法分析（parsing），将代码整理成“语法树”（syntax tree）。
            使用“翻译器”（translator），将代码转为字节码（bytecode）。
            使用“字节码解释器”（bytecode interpreter），将字节码转为机器码。
        逐行解释将字节码转为机器码，是很低效的。为了提高运行速度，现代浏览器改为采用“即时编译”（Just In Time compiler，缩写 JIT），即字节码只在运行时编译，用到哪一行就编译哪一行，并且把编译结果缓存（inline cache）。通常，一个程序被经常用到的，只是其中一小部分代码，有了缓存的编译结果，整个程序的运行速度就会显著提升。

        字节码不能直接运行，而是运行在一个虚拟机（Virtual Machine）之上，一般也把虚拟机称为 JavaScript 引擎。并非所有的 JavaScript 虚拟机运行时都有字节码，有的 JavaScript 虚拟机基于源码，即只要有可能，就通过 JIT（just in time）编译器直接把源码编译成机器码运行，省略字节码步骤。这一点与其他采用虚拟机（比如 Java）的语言不尽相同。这样做的目的，是为了尽可能地优化代码、提高性能。下面是目前最常见的一些 JavaScript 虚拟机：
            Chakra (Microsoft Internet Explorer)
            Nitro/JavaScript Core (Safari)
            Carakan (Opera)
            SpiderMonkey (Firefox)
            V8 (Chrome, Chromium)