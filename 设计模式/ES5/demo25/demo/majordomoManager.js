class majordomoManager extends manager{
    requestApplications(request){
        if(request.requestType=='请假'&&request.requestNumber<=5){
            console.log('被批准',this.name,request.requestContent,request.requestNumber)
        }else{
            if(this.superior!=null){
                this.superior.requestApplications(request)
            }
        }
    }
}