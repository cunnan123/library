class stockObserver {
    constructor(name,sub){
        this.name=name
        this.sub=sub
    }
    closeStock(){
        console.log('关闭股票',this.name,this.sub.state)
    }
}