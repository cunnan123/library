class USA extends country{
    constructor(mediator) {
        super(mediator)
    }
    declare(message){
        this.mediator.declare(message,this)
    }
    getMessage(message){
        console.log('美国获得对方消息',message)
    }
}