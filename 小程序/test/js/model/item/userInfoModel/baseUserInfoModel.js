import userInfoModel from './userInfoModel';
// 用户基本信息类
export default class baseUserInfoModel extends userInfoModel{
  constructor(){
    super();
    this.name=null;//姓名
    this.age=null;//年龄
    this.sex=null;//性别
    this.address=null;//地址
    this.openid=null;//小程序openid
    this.avatar=null;//头像
    this.nickname=null;//昵称
  }
  //获取用户信息
  getUserInfo(){  
    return {
      nanme:this.name||null,
      age:this.age||null,
      sex:this.sex||null,
      address:this.address||null,
      openid:this.openid||null,
      avatar:this.avatar||null,
      nickname:this.nickname||null,
    }
  }
}

// 测试
var userA=new baseUserInfoModel()
var info=userA.getUserInfo();
console.log(info)