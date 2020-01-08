class ReturnCashClass extends CashClass{
    constructor(moneyCondition,moneyReturn){
        super();
        this.moneyCondition=Number(moneyCondition);
        this.moneyReturn=Number(moneyReturn);
    }
    acceptCash(money){
        return money-Math.floor(money/this.moneyCondition)*this.moneyReturn;
    }
}