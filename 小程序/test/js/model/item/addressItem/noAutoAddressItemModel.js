import addressItemModel from './addressItemModel'
// 热销产品信息类
export default class noAutoAddressItemModel extends addressItemModel {
  constructor() {
    super()
    this.init()
  }
  init() {
    this.address = null; //手动地址
  }
  notify(list) {
    list.update()
  }
}