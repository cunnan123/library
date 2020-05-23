import userInfoItemModel from './userInfoItemModel'
// 热销产品信息类
export default class baseUserInfoItemModel extends userInfoItemModel {
  constructor() {
    super()
    this.init()
  }
  init() {
    this.name = null; //姓名
    this.sex = null; //性别
    this.age = null; //年龄
    this.address = null; //地址
  }
  addr(address){
    this.addr=address
  }
  update(){
    this.address=this.addr.address
  }
}