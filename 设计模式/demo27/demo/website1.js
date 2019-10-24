class website1 extends website{
    constructor(name){
        super()
        this.name=name
    }
    use(){
        console.log('网站分类',this.name)
    }
}