class dataAccess{
    constructor(){
       this.db=new reflection().getDatabase(config.database)
    }
    createUser(){
        return this.db['user']
    }
    createDepartment(){
       return this.db['department']
    }
}