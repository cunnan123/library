class NBAObserver {
    constructor(name,sub){
        this.name=name
        this.sub=sub
    }
    closeNBA(){
        console.log('关闭籃球',this.name,this.sub.state)
    }
}