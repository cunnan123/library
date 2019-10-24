class testA{
    constructor(){
        this.a=10;
        this.b=20;
    }
}
class testB extends testA{
    constructor(){
        super()
    }
    getResult(){
    console.log(this.a)
    console.log(this.b)

    }
}
var obj=new testB();
obj.a=100;
obj.b=200;
console.log(obj)
obj.getResult(20,30);
console.log(obj)