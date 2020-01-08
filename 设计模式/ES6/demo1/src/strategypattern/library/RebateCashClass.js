class RebateCashClass extends CashClass{
    constructor(rebate){
        super();
        this.rebate= Number(rebate);
    }
    acceptCash(money){
        return money*this.rebate;
    }
}