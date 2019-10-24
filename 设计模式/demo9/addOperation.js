class addOperation extends operation{
    constructor(num1,num2){
        super(num1,num2)
    }
    getResult(){
        return this.num1+this.num2;
    }
}