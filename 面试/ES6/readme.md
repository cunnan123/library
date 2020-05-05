let
    let声明变量
        新特点
            1.声明的变量仅在块级作用域有效
                外层作用域无法读取内层作用域中的变量
                内层作用域可以定义外层作用域中的同名变量
            2.不存在变量提升
            3.暂时性死区
                ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。
            4.不允许重复声明
        解决ES5的痛点
            块级作用域 
                内层变量不再覆盖外层变量
                防止循环变量泄露为全局变量
            暂时性死区和不存在变量提升
                减少运行时错误
                防止变量声明前就使用这个变量
const
    const声明常量
        声明基本类型
            一旦声明，值不可改变
            声明时必须赋值，否则报错
            只在块级作用域有效
            存在暂时性死区
            不可重复声明
        声明对象
            变量名指向数据所在的地址
                只保证变量名指向的地址不变
            不可重新赋值
                不能让变量名指向另外一个地址
            对象本身是可变的，依然可以添加新属性
解构赋值
    数组的解构赋值
        用法
            var [a,b,c]=[1,2,3] 属于一种模式匹配
            解构不成功，变量值为undefined
            等号右边不是数组，报错
        默认值
            [x=1,y]=[2]  //x=1,y=2
            注意：
                等号右边数组成员严格等于undefined,默认值才会生效
                默认值可以引用解构赋值的其他变量，但该变量必须已经声明
    对象的解构赋值
        变量名与属性名一样
            var {bar,foo}={foo:'a',bar:'b'}  
            foo  //'a'
            bar  //'b'
            注意：
                var {foo}={foo:'a'}是var {foo=foo}={foo:'a'}的简写
        变量名与属性名不一样
            先找到同名属性，再给对应变量赋值，真正被赋值的是后者，不是前者
                var {foo:bar}={foo:'aa'}
                bar //'aa'
                foo //error:foo is not defined
        默认值
            默认值生效的条件
                对象的属性值严格等于undefined
        注意
            解构赋值的变量都会重新声明
    字符串的解构赋值
        字符串被转换成了一个类似数组的对象
            var [a,b,c,d,e]='hello'
            a //h
            b //e
            ...
        类数组对象都有length属性，可以对其解构赋值
            let {length:len}='hello'
            len //5
    用途    
        交换变量的值
            [x,y]=[y,x]
        从函数返回多个值
        函数参数的定义，参数的默认值
        提取JSON数据
        遍历Map结构
数值的扩展
    Number.isNan() 
        检查一个值是否为NaN
            Number.isNaN(2)  //false
    Number.parseInt(),Number.parseFloat()   
        ES6将这两个全局方法移植到了Number对象上
        目的：
            逐步去除全局性方法，使语言逐步模块化
    Number.isInteger()
        判断一个值是否为整数
    Number.isSafeInterger()
        判断一个整数是否落在安全范围内
        安全范围：
            Number.MIN_SAFE_INTEGER
            Number.MAX_SAFE_INTEGER
    Math对象的扩展
        Math.trunc()
            返回一个数的整数部分
        Math.sign()
            判断一个数是正数负数还是0
        Math.cbrt()
            计算立方根
        Math.hypot()
            计算勾股数
        三角函数方法
数组的扩展
    数组的转换
        Array.from()    
            用途：用于将类数组对象和可遍历对象转化为数组
            用法：Array.from(arrLike)
            另一种实现方式：Array.prototype.slice()
        Array.of()
            用途：将一组数转换为数组
            用法：Array.of(1,2,3) //[1,2,3]
    成员复制
        copyWithin()
            Array.prototype.copyWithin(target,start,end)
            target：目的起始位置。
            start：复制源的起始位置，可以省略，可以是负数。
            end：复制源的结束位置，可以省略，可以是负数
            例子
                const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                arr1.copyWithin(1, 3, 6)
                console.log(arr1)
                结果：[1,4,5,6,5,6,7,8,9,10,11]
    查找数组成员
        find()
            找出第一个符合条件的数组成员
            例子
                var ages = [3, 10, 18, 20];
                var a=ages.find(function (age) {
                    return age >= 18;
                });
        findIndex()
            返回第一个符合条件成员的位置
            解决痛点：弥补了ES5的indexOf不能发现NaN的不足
            例子
                var ages = [3, 10, 18, 20];
                function checkAdult(age) {
                    return age >= 18;
                }
                var a= ages.findIndex(checkAdult);
    遍历数组，返回可遍历对象
        entries()
            返回键值对
        keys()
            返回键名
        values()
            返回键值
        例子
            var fruits = ["Banana", "Orange", "Apple", "Mango"];
            var x = fruits.entries().next().value
            var y = fruits.keys().next().value
            var z = fruits.values().next().value
    空位
        是指数组的某一个位置没有任何值，要尽量避免出现空位
        例子
            var fruits = ["Banana", , "Apple", "Mango"];
            console.log(fruits) //["Banana", empty, "Apple", "Mango"]
函数的扩展
    参数的默认值
        基本用法
            直接写在参数定义的后面
                function aa(a=10){
                    console.log(a)
                }
                aa()
            与解构赋值默认值结合使用
                function aaa({a,b}){
                    console.log(a,b)
                }
                aaa({a:10,b:20})
        注意
            1.参数变量是默认声明的，不能再用let,const重新声明
            2.使用默认值后，函数的length属性值失真，返回没有指定默认值的参数个数
            3.作用域
                先是当前函数的作用域，再是全局作用域
    rest参数 ...values
        作用
            获取函数多余参数，搭配的是一个数组，将多余参数放入其中
        注意
            1.rest参数之后不能再有其他参数
            2.函数的length属性不包括rest参数
        例子
            function aa(...aaa){
                console.log(aaa)
            }
            aa(1,2,4) //[1, 2, 4]
            aa(3) //[3]
    扩展运算符 ...[1,2,3]
        含义
            将一个数组转为用逗号分隔的参数序列
        应用
            1.代替数组的apply方法
            2.合并数组  [...arr1,...arr2,...arr3]
            3.将字符串转为真正的数组 [...'hello']
            4.任何类数组对象都可用扩展运算符转为真正的数组  [...nodeLists]
    箭头函数
        用法
            var f=v=>v 等于 var f=function(v){return v;}
            注意
                如果箭头函数直接返回一个对象，则必须在对象外面加上括号
                var a=()=>({aa:1})
                console.log(a())
        优点
            1.使表达更加简洁
            2.简化回调函数
            3.this总是指向函数所在的对象
        this指向问题
            1.函数体内的this对象就是定义时所在的对象
            2.箭头函数没有自己的this ,所以内部的this就是外层代码块的this
                理解：函数所在的外部对象是window,对象方法所在的外部对象也是window,对象方法中的函数所在的外部对象是该对象
        注意事项
            1.不可以当做构造函数
            2.不可以使用arguments对象
            3.不能用作Generator函数
    尾调用
        什么是尾调用
            某个函数的最后一步是调用另一个函数
        尾调用优化
            只保留内层函数的调用帧，大大节省内存
        尾递归
            尾调用自身就叫尾递归，永远不会发生栈溢出
对象的扩展
    属性的简洁写法
        ES6允许在对象中只写属性名，不写属性值。方法也可以简写
            var o={method(){return 'hello';}}
        应用
            函数的返回值
            模块的输出变量
    Object.is()
        用来比较两个值是否严格相等，与===的行为基本一致
    Object.assign()
        用法
            Object.assign(target,source)
            将源对象的所有可枚举属性复制到目标对象
        用途
            1.为对象添加属性
                Class Point{
                    constructor(x,y){
                        Object.assign(this,{x,y})
                    }
                }
            2.为对象添加方法
                Object.assign(someFunction.prototype,{
                    someMethod(){},
                    anotherMethod(){}
                })
            3.克隆对象
            4.合并多个对象
    属性的遍历
    prototype
        Object.prototype.getPrototypeOf() 读取一个对象的原型对象
        Object.prototype.setPrototypeOf() 设置一个对象的原型对象
Set
    基本用法
        成员的值是唯一的，没有重复的值
        可接受一个数组作为参数进行初始化
            var s=new Set([1,2,2,3])  //[1,2,3]
    属性
        构造函数
            Set.prototype.constructor
        成员总数
            Set.prototype.size
    方法
        操作方法
            add(value) 添加某个值，返回Set结构本身
            delete(value) 删除某个值，返回布尔值，表示删除是否成功
            has(value) 返回布尔值，表示参数是否为set成员
            clear() 清除所有值，没有返回值
        遍历方法
            keys() 返回键名的遍历器
            values() 返回键值的遍历器
                set键名和键值为同一个值，所有二者行为一致
            entries() 返回键值对的遍历器
            forEach() 使用回调函数遍历每个成员
    用途
        数组去重
            Array.from(new Set(arr))
            [...new Set(arr)]
        实现并、交、差
            let a = new Set([1, 2, 3]);
            let b = new Set([4, 3, 2]);
            // 并集
            let union = new Set([...a, ...b]);
            // Set {1, 2, 3, 4}
            console.log(Array.from(union));
            // 交集
            let intersect = new Set([...a].filter(x => b.has(x)));
            // set {2, 3}
            console.log(Array.from(intersect));
            // 差集
            let difference = new Set([...a].filter(x => !b.has(x)));
            // Set {1}
            console.log(Array.from(difference));
Map
    解决痛点
        Object只能用字符串作为键，Map提供了‘值-值’的对应，是一种更完善的Hash实现
    基本用法
        可以接受一个数组作为参数，该数组的成员是一个个表示键值对的数组
            var map=new Map([1,'a'],[2,'b'],[3,'c'])
        对同一个键多次赋值，后面的值将覆盖前面的
    属性
        size: 返回Map结构的成员总数
    方法
        操作方法
            set(key,value) 设置key对应的键值，返回map结构，可采用链式写法
            get(key) 读取key对应的键值，找不到返回undefined
            has(key) 返回布尔值，表示某个键是否在map中
            delete(key) 删除某个键，返回布尔值，表示删除成功否
            clear() 清除所有成员，无返回值
        遍历方法
             keys() 返回键名的遍历器
            values() 返回键值的遍历器
            entries() 返回键值对的遍历器
            forEach() 使用回调函数遍历每个成员
    与其他数据结构的转换
        数组
            Map-->arr  扩展运算符[...map]
            arr-->Map  将数组传入Map构造函数
        对象
        JSON
            /**
            *map转换为json
            */
            _strMapToObj(strMap){
                let obj= Object.create(null);
                for (let[k,v] of strMap) {
                obj[k] = v;
                }
                return obj;
            }
            _mapToJson(map) {
                return JSON.stringify(this._strMapToObj(map));
            }
            /**
            *json转换为map
            */
            _objToStrMap(obj){
                let strMap = new Map();
                for (let k of Object.keys(obj)) {
                strMap.set(k,obj[k]);
                }
                return strMap;
            }
            _jsonToMap(jsonStr){
                return this._objToStrMap(JSON.parse(jsonStr));
            }

Promise
    含义    
        用来传递异步消息，解决了回调地狱的问题
        特点
            1.只有pending/resolved/rejected三种状态
            2.状态只能从pending-->resolved,或者pending-->rejected
    用法
        var promise=new Promise(funtion(resolve,reject){

        })
        实例生成后，可用then方法分别指定resolved和rejected状态的回调函数
        resolve和reject回调方法的参数都可以为promise对象
    .then()
        返回一个promise,所以可以采用链式写法
    .catch()
        用于指定发生错误时的回调函数，其返回值也是promise对象
    包装多个Promise
        Promise.all()
            所有参数状态都变成resolved,pending的状态才变成resolved
        Promise.race() 
            参数中有一个状态发生改变，pending的状态就改变
    .resolve()
        将现有对象转为promise对象
    .reject()
        返回一个新的promise实例，状态为rejected
    应用
        Ajax
        加载图片
Symbol
    Symbol是由ES6规范引入的一项新特性，它的功能类似于一种标识唯一性的ID。通常情况下，我们可以通过调用Symbol()函数来创建一个Symbol实例：
        let s1 = Symbol()
        let s2 = Symbol('another symbol')
    应用场景
        使用Symbol来作为对象属性名(key)
        使用Symbol来替代常量
        使用Symbol定义类的私有属性/方法
        注册和获取全局Symbol
            let gs1 = Symbol.for('global_symbol_1')  //注册一个全局Symbol
            let gs2 = Symbol.for('global_symbol_1')  //获取全局Symbol
            gs1 === gs2  // true
                这样一个Symbol不光在单个window中是唯一的，在多个相关window间也是唯一的