class fail extends action{
    getManConclusion(man){
        console.log(man.constructor.name,this.constructor.name,'喝酒1')
    }
    getWomanConclusion(woman){
        console.log(woman.constructor.name,this.constructor.name,'喝酒2')
    }
}