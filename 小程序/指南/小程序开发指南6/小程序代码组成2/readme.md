JSON 配置
    JSON 是一种数据格式，并不是编程语言，在小程序中，JSON扮演的静态配置的角色
    JSON文件在小程序代码中扮演静态配置的作用，在小程序运行之前就决定了小程序一些表现，需要注意的是小程序是无法在运行过程中去动态更新JSON 配置文件从而发生对应的变化的。
    JSON的值只能是以下几种数据格式：
        数字，包含浮点数和整数
        字符串，需要包裹在双引号中
        Bool值，true 或者 false
        数组，需要包裹在方括号中 []
        对象，需要包裹在大括号中 {}
        Null
WXML 模板
    数据绑定
    没有被定义的变量的或者是被设置为 undefined 的变量不会被同步到 wxml 中

    WXML 提供两种文件引用方式import和include。
        import 可以在该文件中使用目标文件定义的 template
        include 可以将目标文件中除了 <template/> <wxs/> 外的整个代码引入，相当于是拷贝到 include 位置
WXSS 样式
    公共样式、页面样式、其他样式
    WXSS引用
        @import './test_0.wxss'
        由于WXSS最终会被编译打包到目标文件中，用户只需要下载一次，
        在使用过程中不会因为样式的引用而产生多余的文件请求

        伪元素选择器	::after	    view::after	    在 view 组件后边插入内容
        伪元素选择器	::before	view::before	在 view 组件前边插入内容
JavaScript 脚本
    