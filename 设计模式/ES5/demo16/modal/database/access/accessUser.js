class accessUser extends iUser{
    insert(user){
        console.log('accessUser用户表新添加一条记录')
    }
    getUser(id){
        console.log('根据id得到accessUser用户表中一条记录')
        return null
    }
}