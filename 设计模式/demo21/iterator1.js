class iterator1 extends iterator{
    constructor(aggregate){
        super()
        this.aggregate=aggregate.list.list
        this.current=0
    }
    first(){
        return this.aggregate[0]
    }
    next(){
        var res=null
        this.current++
        if(this.current<this.aggregate.length){
            res=this.aggregate[this.current]
        }
        return res
    }
    isDone(){
        return this.current>=this.aggregate.length?true:false
    }
    currentItem(){
        return this.aggregate[this.current]
    }
}