import productItemModel from './productItemModel'
// 热销产品信息类
export default class hotProductItemModel extends productItemModel {
  constructor() {
    super()
    this.init()
  }
  init() {
    this.name = null; //名称
    this.description = null; //描述
    this.price = null; //价格
    this.picture = null; //图片
    this.classify = null; //分类
    this.link = null; //链接
  }

}