class  waiter{
    constructor(){
        this.list=new list()
    }
    setOrder(command){

        if(command.name=='烤鸡腿'){
            console.log('烤鸡腿没有了')
        }else{
            this.list.add(command)
            console.log('增加订单',command.name,'时间',new Date().toLocaleString())
        }
    }
    cancelOrder(command){
        this.list.remove(command)
        console.log('取消订单',command.name,'时间',new Date().toLocaleString())
    }
    notify(){
        this.list.list.forEach(function(e){
            e.excuteCommand()
        })
    }
}