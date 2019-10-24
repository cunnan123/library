class unitedNationsSecurityCouncil extends unitedNations{
    set USA(value){
        this._USA=value
    }
    get USA(){
        return this._USA
    }
    set Iraq(value){
        this._Iraq=value
    }
    get Iraq(){
        return this._Iraq
    }
    declare(message,colleague){
        if(this.USA==colleague){
            this.Iraq.getMessage(message)
        }else{
            this.USA.getMessage(message)
        }
    }
}