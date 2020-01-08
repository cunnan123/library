class single{
     constructor(name){
        this.name=name
    }
    static getInstance(name){
        if(!this.instance){
            this.instance=new single(name)
        }
        return this.instance
    }
}