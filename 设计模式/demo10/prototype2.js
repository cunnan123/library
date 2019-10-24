class prototype2 extends prototype {
    //深复制
    constructor(name) {
        super(name)
        this.work = new experience()
    }
    setinfo(sex, age) {
        this.sex = sex;
        this.age = age;
    }
    setexperience(area, company) {
        this.work.area = area;
        this.work.company = company;
    }
    show() {
        console.log("个人信息：", this.name, this.sex, this.age)
        console.log("工作经历：", this.work.area, this.work.company)
    }

    clone() {
        return this.copyObject(this)
    }
    copyObject(orig) {
        var copy = Object.create(Object.getPrototypeOf(orig)); //获取原型对象并创建一个继承该原型对象的实例
        this.copyOwnPropertiesFrom(copy, orig);
        return copy;
    }
    copyOwnPropertiesFrom(target, source) {
        var _this = this
        Object.getOwnPropertyNames(source) //获取对象本身所有的属性的键值
            .forEach(function (propKey) {
                var desc = Object.getOwnPropertyDescriptor(source, propKey); //获取对象的属性描述对象
                if (typeof desc.value == "object" && Array.isArray(desc.value) == false) {
                    desc.value = _this.copyObject(desc.value)
                    Object.defineProperty(target, propKey, desc);
                } else {
                    Object.defineProperty(target, propKey, desc); //定义对象的属性的属性描述对象
                }
            });
        return target;
    }
}