class prototype1 extends prototype {
    //浅复制--对象属性值是引用类型时，拷贝的是地址，不是引用类型本身
    constructor(name) {
        super(name)
    }
    setinfo(sex, age) {
        this.sex = sex;
        this.age = age;
    }
    setexperience(area, company) {
        this.area = area;
        this.company = company;
    }
    show() {
        console.log("个人信息：", this.name, this.sex, this.age)
        console.log("工作经历：", this.area, this.company)
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
        Object.getOwnPropertyNames(source) //获取对象本身所有的属性的键值
            .forEach(function (propKey) {
                var desc = Object.getOwnPropertyDescriptor(source, propKey); //获取对象的属性描述对象
                Object.defineProperty(target, propKey, desc); //定义对象的属性的属性描述对象
            });
        return target;
    }
}