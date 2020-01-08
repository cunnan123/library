class concreteHandler2 extends handler{
    constructor(){
        super()
        this.name='concreteHandler2'
    }
    handlerRequest(request){
        if(10<=request && 20>request){
            console.log( this.name,'处理请求',request)
        }else if(this.successor!=null){
            this.successor.handlerRequest(request)
        }
    }
}