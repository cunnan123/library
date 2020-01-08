class concreteHandler3 extends handler{
    constructor(){
        super()
        this.name='concreteHandler3'
    }
    handlerRequest(request){
        if(20<=request && 30>request){
            console.log(this.name,'处理请求',request)
        }else if(this.successor!=null){
            this.successor.handlerRequest(request)
        }
    }
}