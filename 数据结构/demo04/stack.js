class stack{
    constructor(){
        this.init()
    }
    dataType(value){
        return value
    }
    init(){
        this.stack=[]
        this.length=5
    }
    reset(){
        this.stack=[]
        this.length=5
    }
    destory(){
        this.stack=null
        this.length=null
    }
    getLength(){
        return this.stack.length
    }
    isEmpty(){
        if(this.stack.length==0){
            return true
        }else{
            return false
        }
    }
    push(value){
        if(this.stack.length>=this.length||this.stack==null){
            return 'error'
        }
        this.stack[this.stack.length]=this.dataType(value)
    }
    pop(){
        if(this.stack.length<=0||this.stack==null){
            return 'error'
        }
        var tmp=this.stack[this.stack.length-1]
        this.stack.length--
        return tmp
    }
}