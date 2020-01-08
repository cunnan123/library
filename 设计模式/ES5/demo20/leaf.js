class leaf extends component{
    constructor(name){
        super(name)
    }
    add(component){
        console.log('can not add a leaf')
    }
    remove(component){
        console.log('can not remove a leaf')
    }
    display(depth){
        for(var i=0,mark='';i<depth;i++){
            mark+='-->'
        }
        console.log(mark,this.name)
    }
}