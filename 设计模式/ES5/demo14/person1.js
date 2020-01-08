class person1 extends personBuilder{
    constructor(){
        super()
        this.list=new person()
    }
    step1(){
        this.list.add('person1 step1')
    }
    step2(){
        this.list.add('person1 step2')
    }
    step3(){
        this.list.add('person1 step3')
    }
    step4(){
        this.list.add('person1 step4')
    }
    step5(){
        this.list.add('person1 step5')
    }
    getList(){
        return this.list.show()
    }
}