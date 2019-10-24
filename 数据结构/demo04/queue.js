class queue{
    constructor(){
        this.init()
    }
    dataType(value){
        return value
    }
    init(){
       this.queue=[]
       this.length=5
    }
    reset(){
        this.queue=[]
        this.length=5
    }
    destory(){
        this.queue=null
        this.length=null
    }
    getLength(){
        return this.queue.length
    }
    isEmpty(){
        if(this.queue.length==0){
            return true
        }else{
            return false
        }
    }
    enterQue(value){
        if(this.queue==null){
            return 'error'
        }
        var tmp=this.dataType(value)
        if(this.queue.length>=this.length){
            for(var i=0;i<this.length-1;i++){
                this.queue[i]=this.queue[i+1]
            }
            this.queue[this.length-1]=tmp
        }else{
            this.queue[this.queue.length]=tmp
        }
        return tmp+' is enter'
    }
    leaveQue(){
        if(this.queue.length<=0||this.queue==null){
            return 'error'
        }
        var tmp=this.queue[0]
        for(var i=1;i<this.queue.length;i++){
            this.queue[i-1]=this.queue[i]
        }
        this.queue.length--
        return tmp+' is leave'
    }
}