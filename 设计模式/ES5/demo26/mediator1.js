class mediator1 extends mediator{
    get colleague1(){
        return this._colleague1
    }
    get colleague2(){
        return this._colleague2
    }
    set colleague1(value){
        this._colleague1=value
    }
    set colleague2(value){
        this._colleague2=value
    }
    send(message,colleague){
        if(this.colleague1==colleague){
            this.colleague2.notify(message)
        }else{
            this.colleague1.notify(message)
        }
    }
}