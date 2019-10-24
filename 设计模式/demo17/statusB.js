class statusB extends status{
    handle(context){
        console.log('statusB')
        context.status=new statusA()
    }
}