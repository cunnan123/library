class colleague1 extends colleague{
    constructor(mediator){
        super(mediator)
    }
    send(message){
        this.mediator.send(message,this)
    }
    notify(message){
        console.log('同事1得到消息',message)
    }
}