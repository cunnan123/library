class success extends action{
    getManConclusion(man){
        console.log(man.constructor.name,this.constructor.name,'后面1')
    }
    getWomanConclusion(woman){
        console.log(woman.constructor.name,this.constructor.name,'后面2')
    }
}