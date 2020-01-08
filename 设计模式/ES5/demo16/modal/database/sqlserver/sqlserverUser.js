class sqlserverUser extends iUser{
    insert(user){
        console.log('sqlserverUser用户表新添加一条记录')
    }
    getUser(id){
        console.log('根据id得到sqlserverUser用户表中一条记录')
        return null
    }
}