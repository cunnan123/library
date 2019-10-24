class aggregate1 extends aggregate{
    constructor(){
        super()
        this.list=new list()
    }
    createIterator(){
        return new iterator1(this)
    }
    count(){
        return this.list.list.length
    }
    add(item){
        this.list.add(item)
    }
}