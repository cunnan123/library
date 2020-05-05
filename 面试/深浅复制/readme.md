深浅拷贝
    解决问题
        给变量赋值一个对象,赋值的是对象的引用，并不是对象的值。当操作变量或这个对象时，会同时改变变量或对象的值
    浅拷贝(浅拷贝只解决了对象第一层键值对的复制)
        通过 Object.assign 
            let a = {
                age: 1
            }
            let b = Object.assign({}, a)
            a.age = 2
            console.log(b.age) // 1
        通过展开运算符（…）
            let a = {
                age: 1
            }
            let b = {...a}
            a.age = 2
            console.log(b.age) // 1
    深拷贝
        通过 JSON.parse(JSON.stringify(object)) 
            let a = {
                age: 1,
                jobs: {
                    first: 'FE'
                }
            }
            let b = JSON.parse(JSON.stringify(a))
            a.jobs.first = 'native'
            console.log(b.jobs.first) // FE
            局限性
                会忽略 undefined，symbol
                不能序列化函数
                不能解决循环引用的对象
                    例子
                        let a = {
                            age: undefined,
                            sex: Symbol('male'),
                            jobs: function() {},
                            name: 'yck'
                        }
                        let b = JSON.parse(JSON.stringify(a))
                        console.log(b) // {name: "yck"}
        如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel
            function structuralClone(obj) {
            return new Promise(resolve => {
                const {port1, port2} = new MessageChannel();
                port2.onmessage = ev => resolve(ev.data);
                port1.postMessage(obj);
            });
            }
            var obj = {a: 1, b: {
                c: b
            }}
            // 注意该方法是异步的
            // 可以处理 undefined 和循环引用对象
            (async () => {
            const clone = await structuralClone(obj)
            })()