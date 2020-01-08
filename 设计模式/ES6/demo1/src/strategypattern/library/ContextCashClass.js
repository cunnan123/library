// 策略模式
// class ContextCashClass{
//     constructor(strategy){
//         this.strategy=strategy;
//     }
//     getResult(money){
//         return this.strategy.acceptCash(money);
//     }
// }
// 策略模式和简单工厂模式结合
class ContextCashClass {
    constructor(type) {
       this.strategy=new CashFactory().createAcceptCash(type);
    }
    getResult(money) {
        return this.strategy.acceptCash(money);
    }
}