class list{
    constructor(){
        this.list=[]
    }
//    update(){
//        this.list.forEach(function(e){
//            e()
//        })
//    }
   add(index,value){
       this.list[index]=value
   }
   remove(item){
       this.list.forEach(function(e,i,arr){
           if(e==item){
               arr.splice(i,1)
           }
       })
   }
}