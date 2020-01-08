class decrator extends person{
    setComponent(component){
        this.component=component;
    }
    operate(){
        this.component.operate();
        console.log("this is decrator")
    }
}