class stack2{
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
       this.stack=this.dataType(null,null)
       this.length=5
       this.stackLength=0
    }
    reset(){
        this.stack=this.dataType(null,null)
        this.length=5
        this.stackLength=0
    }
    destory(){
        this.stack=null
        this.length=null
        this.stackLength=null
    }
    getLength(){
       return this.stackLength
    }
    isEmpty(){
       if(this.stackLength==0){
        return true
       }else{
        return false
       }
    }
    push(value){
        if(this.stackLength>=this.length||this.stack==null){
            return 'error'
        }
        var node=this.dataType(value,this.stack)
        this.stack=node
        this.stackLength++
        return node.value+' is push'
    }
    pop(){
        if(this.stackLength<=0||this.stack==null){
            return 'error'
        }
        var node=this.stack
        this.stack=this.stack.next
        this.stackLength--
        return node.value+' is pop'
    }
}