class originator{
    get status(){
        return this._status
    }
    set status(value){
        this._status=value
    }
    //创建备忘录
    createMemento(){
        return new memento(this.status)
    }
    //恢复备忘录
    setMemento(memento){
        this.status=memento.status
    }
    //打印
    show(){
        console.log('状态',this.status)
    }
}