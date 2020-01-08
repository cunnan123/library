var Interface = function(name, methods) {
    if(arguments.length != 2) {
        throw new Error("请确认要检查的接口所传的参数是否正确，例如：var Person = new Interface('Person', ['GetName','GetAge']);");
    }
    if(methods.length == 0){
        throw new Error("要检查的接口的方法名不能为空");
    }
    this.Name = name;
    this.Method = [];
    for(var i = 0; i < methods.length; i++) {
        if(typeof methods[i] !== 'string') {
            throw new Error("方法名不是字符串");
        }
        this.Method.push(methods[i]);
    }
}
/*static method in interface*/
Interface.ensureImplement = function(object) {
    console.log(arguments)
    if(arguments.length < 2) {
        throw new Error("没有接口或实例");
    }

    for(var i = 1; i < arguments.length; i++) {
        var interface1 = arguments[i];
        console.log(interface1)
        if(interface1.constructor !== Interface) {
            throw new Error("参数不是接口");
        }
        for(var j = 0; j < interface1.Method.length; j++) {
            var method = interface1.Method[j];
            if(!object[method] || typeof object[method] !== 'function') {
                throw new Error("您的实例没有实现接口:\t" + method);
            }
        }
    }
}
