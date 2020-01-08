class scale extends expression{
    excute(index,value){
        var scale=''
        switch(value){
            case '1':{
                scale='低音'
                break
            }
            case '2':{
                scale='中音'
                break
            }
            case '3':{
                scale='高音'
                break
            }
        }
        console.log(scale)
    }
}