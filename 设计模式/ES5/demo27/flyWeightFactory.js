class flyWeightFactory {
    constructor(){
        this.list=new list()
        this.list.add('x',new concreteFlyweight())
        this.list.add('y',new concreteFlyweight())
        this.list.add('z',new concreteFlyweight())
    }
    getFlyweight(index){
        return this.list.list[index]
    }
}