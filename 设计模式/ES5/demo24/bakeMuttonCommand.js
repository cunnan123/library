class bakeMuttonCommand extends command{
    constructor(receiver){
        super(receiver)
        this.name='烤羊腿'
    }
    excuteCommand(){
        this.receiver.bakeMutton()
    }
}