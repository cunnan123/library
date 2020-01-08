class context{
    constructor(status){
        this.status=status
    }
    get status(){
        return this._status
    }
    set status(value){
        this._status=value
    }
    request(){
        this.status.handle(this)
    }
}