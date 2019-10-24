class statusA extends status{
    handle(context){
        console.log('statusA')
        context.status=new statusB()
    }
}   