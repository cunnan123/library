class adapter extends target{
    constructor(){
        super()
        this.adaptee=new adaptee()
    }
    request(){
        this.adaptee.specificRequest()
    }
}