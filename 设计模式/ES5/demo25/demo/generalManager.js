class generalManager extends manager{
    requestApplications(request){
        if(request.requestType=='请假'){
            console.log('被批准',this.name,request.requestContent,request.requestNumber)
        }else if(request.requestType=='加薪'&&request.requestNumber<=500){
            console.log('被批准',this.name,request.requestContent,request.requestNumber)
        }else if(request.requestType=='加薪'&&request.requestNumber>500){
            console.log('再说吧',this.name,request.requestContent,request.requestNumber)
        }
    }
}