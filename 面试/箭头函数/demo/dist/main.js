    // 函数
    var a=()=>{
        console.log('函数',this)
    }
    a()
    // 对象方法
    var b={
        c:10,
        b:()=>{
            console.log('对象方法',this)
        }
    }
    b.b()
    // 对象方法中的函数
    var d={
        d:20,
        e:function(){
            var r=()=>{
                console.log('对象方法中的函数',this)
            }
            r()
        }
    }
    d.e()