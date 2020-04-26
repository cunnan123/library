// 非严格模式
// 全局
// 非严格模式   this指向window
console.log('全局',this)
// 函数
// 非严格模式   this指向window
var a=function(){
    console.log('函数',this)
}
a()
// 对象方法
// 非严格模式   指向它的直接调用者
var b={
    c:10,
    b:function(){
        console.log('对象方法',this)
    }
}
b.b()
// 对象方法中的函数
// 非严格模式   this指向window
var d={
    d:20,
    e:function(){
        function r(){
            console.log('对象方法中的函数',this)
        }
        r()
    }
}
d.e()
// 构造函数
// 非严格模式   this指向新new 出来的对象
        function aa(){
            console.log('构造函数', this)
            this.cc=function(){

            }

        }
        aa.ddd=function(){

        }
        new aa();

