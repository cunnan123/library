class memento {
    constructor(status) {
        this.status = status
    }
    get status() {
        return this._status
    }
    set status(value){
        this._status=value
    }
}