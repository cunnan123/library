class invoker{
    setCommand(command){
        this.command=command
    }
    execute(){
        this.command.execute()
    }
}