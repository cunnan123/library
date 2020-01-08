class speed extends expression{
    excute(index,value){
        var speed=''
        if(value<500){
            speed='快速'
        }else if(value>=1000){
            speed='慢速'
        }else{
            speed='中速'
        }
        console.log(speed)
    }
}