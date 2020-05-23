import userInfoItemController from './userInfoItemController';
import baseUserInfoItemModel from '../../../model/item/userInfoItem/baseUserInfoItemModel';
export default class baseUserInfoItemController extends userInfoItemController {
  constructor() {
    super()
    this.init();
  }
  init() {
    this.item = new baseUserInfoItemModel()
    this.item.name='吕博'
    this.item.sex='男'
    this.item.age='28'
    this.item.address=null
  
  }
  show() {
    return this.item
  }
}