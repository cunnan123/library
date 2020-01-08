class boss extends subject{
    notify(lists){
       lists.update()
    }
    get state(){
        return this._state
    }
    set state(value){
        this._state=value
    }
}