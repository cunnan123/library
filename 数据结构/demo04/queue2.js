class queue2{
    constructor(){
        this.init()
    }
    dataType(value,next){
        return Object.create(null,{
            value:{
               value:value,
               writable:true,
               configurable:true,
               enumerable:true 
            },
            next:{
              value:next,
              writable:true,
              configurable:true,
              enumerable:true 
            }
        })
    }
    init(){
     this.queue=this.dataType(null,null)
     this.length=5
     this.queueLength=0
    }
    reset(){
        this.queue=this.dataType(null,null)
        this.length=5
        this.queueLength=0
    }
    destory(){
     this.queue=null
     this.length=null
     this.queueLength=null
    }
    getLength(){
        return this.queueLength
    }
    isEmpty(){
      if(this.queueLength==0){
          return true
      }else{
          return false
      }
    }
    enterQue(value){
       if(this.queue==null){
           return 'error'
       }
       var node=this.queue
       if(this.queueLength>=this.length){
           for(var i=1;i<this.length;i++){
            node=node.next
           }
           node.next=null
           node.value=null
           this.queueLength--
       }
       var tmp=this.dataType(value,this.queue)
       this.queue=tmp
       this.queueLength++
       return tmp.value+' is enterQue'
    }
    leaveQue(){
        if(this.queue==null||this.queueLength<=0){
            return 'error'
        }
        var node=this.queue
        for(var i=1;i<this.queueLength;i++){
            node=node.next
        }
        var tmp=node.value
        node.value=null
        node.next=null
        this.queueLength--
        return tmp+' is leaveQue'
    }   
}