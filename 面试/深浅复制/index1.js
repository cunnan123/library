clone() {
    return this.copyObject(this)
}
copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig)); //获取原型对象并创建一个继承该原型对象的实例
    this.copyOwnPropertiesFrom(copy, orig);
    return copy;
}
copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source) //获取对象本身所有的属性的键值
        .forEach(function (propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey); //获取对象的属性描述对象
            Object.defineProperty(target, propKey, desc); //定义对象的属性的属性描述对象
        });
    return target;
}