class bakeChickenWingCommand extends command{
    constructor(receiver){
        super(receiver)
        this.name='烤鸡腿'
    }
    excuteCommand(){
        this.receiver.bakeChickenWing()
    }
}