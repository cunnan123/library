作用域的角度
    全局
        非严格模式   this指向window
        严格模式     this指向window
    函数
        非严格模式   this指向window
        严格模式     this指向undefined
    对象方法
        非严格模式   指向它的直接调用者
        严格模式     指向它的直接调用者
    对象方法中的函数
        非严格模式   this指向window
        严格模式    this指向undefined
    构造函数
        非严格模式   this指向新new 出来的对象
        严格模式     this指向新new 出来的对象


严格模式和非严格模式的this指向的区别 
    在函数或对象方法中的函数中，非严格模式 this指向window  严格模式 this 指向undefined