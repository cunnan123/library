// 1.箭头函数相当于匿名函数，是不能作为构造函数的，不能使用new
// var a=()=>{
//     console.log('ddd')
// }
//  var b=new a()

// 2.箭头函数不绑定arguments,取而代之用rest参数…解决
// var a=function(...b){
//     console.log(b)  //["dd", "cc", "ee"]
// }
// a('dd','cc','ee')
// 3.箭头函数没有函数原型
// var a = ()=>{
//     return 1;
//   }
//   console.log(a.prototype);//undefined;
   
// 4.箭头函数不能换行
// var a = () 
//           => 1;//SyntaxError:Unexpected token

// 5.箭头函数不能当做Generator函数，不能使用yield关键字 
// 6.this指向    函数、对象方法中this都指向window  对象方法中的函数中都指向直接调用者
    // 函数
    // var a=()=>{
    //     console.log('函数',this)
    // }
    // a()
    // 对象方法
    // var b={
    //     c:10,
    //     b:()=>{
    //         console.log('对象方法',this)
    //     }
    // }
    // b.b()
    // 对象方法中的函数
    // var d={
    //     d:20,
    //     e:function(){
    //         var r=()=>{
    //             console.log('对象方法中的函数',this)
    //         }
    //         r()
    //     }
    // }
    // d.e()
// 7.使用call()和apply()调用 
// 通过call()或者apply()调用一个函数时，只是传入参数而已，对this并没有影响
    // var obj = {
    // a:10,
    // b:function(n){
    // var f = (v) => v + this.a;
    // var c = {a:20};
    // return f.call(c,n);
    // }
    // }
    // console.log(obj.b(1));//11