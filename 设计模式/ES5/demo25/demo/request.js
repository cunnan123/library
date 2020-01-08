class request{
    get requestType(){
        return this._requestType
    }
    get requestContent(){
        return this._requestContent
    }
    get number(){
        return this._number
    }
    set requestType(value){
        this._requestType=value
    }
    set requestContent(value){
        this._requestContent=value
    }
    set number(value){
        this._number=value
    }
}