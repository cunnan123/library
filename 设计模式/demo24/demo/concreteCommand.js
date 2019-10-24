class concreteCommand extends command{
    constructor(receiver){
        super(receiver)
        this.name=''
    }
    execute(){
        this.receiver.action()
    }
}