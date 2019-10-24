class composite extends component{
    constructor(name){
        super(name)
        this.list=new list()
    }
    add(component){
        this.list.add(component)
    }
    remove(component){
        this.list.remove(component)
    }
    display(depth){
        for(var i=0,mark='';i<depth;i++){
            mark+='-->'
        }
        console.log(mark,this.name)
        this.list.list.forEach(function(e){
            e.display(depth+1)
        })
    }
}