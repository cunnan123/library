class CashFactory{
    createAcceptCash(type){
        var types=null;
        switch(type){
            case "正常收费":{
                types=new NormalCashClass();
                break;
            };
            case "满500反100":{
                types=new ReturnCashClass("500","100");
                break;
            };
            case "打8折":{
                types=new RebateCashClass("0.8");
                break;
            };
        }
        return types;
    }
}