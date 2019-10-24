class websiteFactory{
    constructor(){
        this.list=new list()
    }
    getWebsiteCatogary(index){
        if(!this.list.getItem(index)){
            this.list.add(index,new website1(index))
        }
        return this.list.list[index]
    }
    getCount(){
        return Object.getOwnPropertyNames(this.list.list).length
    }
}