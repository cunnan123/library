hash模式
    hash模式背后的原理是onhashchange事件
        window.onhashchange=function(){
        let hash=location.hash.slice(1);
        document.body.style.color=hash;
        } 
    由于hash发生变化的url都会被浏览器记录下来，使得浏览器的前进后退都可以使用了，尽管浏览器没有请求服务器，但是页面状态和url关联起来。后来人们称其为前端路由，成为单页应用标配。
    比如http://www.abc.com/#/index，hash值为#/index。hash模式的特点在于hash出现在url中，但是不会被包括在HTTP请求中，对后端没有影响，不会重新加载页面。

history模式（默认模式）
    history模式利用了HTML5 History Interface中新增的pushState()和replaceState()方法。这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了url，但浏览器不会立即向后端发送请求。 
    当使用history模式时，url就像正常的url,例如http://abc.com/user/id相比hash模式更加好看。特别注意，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。 
    通过history api，我们丢弃了丑陋的#，但是有一个缺点，当刷新时，如果服务器中没有相应的响应或者资源，会分分钟刷出一个404来（刷新需要请求服务器）。所以history模式不怕前进，不怕后退，就怕刷新

hash模式和history模式对比
    pushState()设置新的url可以是和当前url**同源的任意url;
    hash只可修改#后面的部分，只能设置当前url同文档**的url。
    pushState()设置的新url可与当前url一致，这样也会把记录添加到栈中；
    hash必须设置与当前url不同的url的，才会触发动作将记录添加到栈中。
    pushState()通过stateObject参数可以添加任意类型的数据到记录中；
    hash只可添加短字符串。
    pushState()可额外设置title属性供后续使用。
    不过，hash模式也有比history模式优势的地方。
        hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误。
        history模式下，前端的url必须和实际向后端发起请求的url一致，如http://abc.com/user/id,后端如果没有对user/id的路由处理，将返回404错误。 
