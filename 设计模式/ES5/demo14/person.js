class person{
    constructor(){
        this.list=[]
    }
    add(item){
        this.list.push(item)
    }
    show(){
        this.list.forEach(function(e){
            console.log('item',e)
        })
    }
}