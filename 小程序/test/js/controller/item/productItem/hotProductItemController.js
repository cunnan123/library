import productItemController from './productItemController';
import hotProductItemModel from '../../../model/item/productItem/hotProductItemModel';
export default class hotProductItemController extends productItemController {
  constructor() {
    super()
    this.init();
  }
  init() {
    this.item = new hotProductItemModel()
  }
  show() {
    return this.item.show()
  }
}