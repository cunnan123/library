class concreteHandler1 extends handler{
    constructor(){
        super()
        this.name='concreteHandler1'
    }
    handlerRequest(request){
        if(0<=request && 10>request){
            console.log(this.name,'处理请求',request)
        }else if(this.successor!=null){
            this.successor.handlerRequest(request)
        }
    }
}