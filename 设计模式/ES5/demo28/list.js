class list{
    constructor(){
        this.list=[]
    }
   add(item){
       this.list.push(item)
   }
   remove(item){
       this.list.forEach(function(e,i,arr){
           if(e==item){
               arr.splice(i,1)
           }
       })
   }
}