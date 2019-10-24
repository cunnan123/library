class person2 extends personBuilder{
    constructor(){
        super()
        this.list=new person()
    }
    step1(){
        this.list.add('person2 step1')
    }
    step2(){
        this.list.add('person2 step2')
    }
    step3(){
        this.list.add('person2 step3')
    }
    step4(){
        this.list.add('person2 step4')
    }
    step5(){
        this.list.add('person2 step5')
    }
    getList(){
        return this.list.show()
    }
}