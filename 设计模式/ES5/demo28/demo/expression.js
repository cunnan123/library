class expression{
    interpret(context){
        if(context.text.length==0){
            return
        }else{
            var index=context.text.substring(0,1)
            context.text=context.text.substring(2)
            var value=context.text.substring(0,context.text.indexOf(' '))
            context.text=context.text.substring(context.text.indexOf(' ')+1)
            // console.log(index,value)
            this.excute(index,value)
        }
    }
    excute(index,value){}
}