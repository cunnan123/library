class sqlserverDepartment extends IDepartment{
    insert(department){
        console.log('sqlserver中department表新添加一条记录')
    }
    getDepartment(id){
        console.log('根据id得到department用户表中一条记录')
        return null
    }
}