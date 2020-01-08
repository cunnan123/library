class reflection{
    constructor(){
        this.relect={
            sqlserver:{
                user:new sqlserverUser(),
                department:new sqlserverDepartment(),
            },
            access:{
                user:new accessUser(),
                department:new accessDepartment(),
            }
        }
    }
    getDatabase(database){
        return this.relect[database]
    }
}