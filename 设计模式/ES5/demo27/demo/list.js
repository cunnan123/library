class list{
    constructor(){
        this.list={}
    }
   add(index,value){
       this.list[index]=value
   }
   getItem(index){
       return this.list[index]
   }
}