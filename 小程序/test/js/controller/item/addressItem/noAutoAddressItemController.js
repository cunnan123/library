import addressItemController from './addressItemController';
import noAutoAddressItemModel from '../../../model/item/addressItem/noAutoAddressItemModel';
export default class noAutoAddressItemController extends addressItemController {
  constructor() {
    super()
    this.init();
  }
  init() {
    this.item = new noAutoAddressItemModel()
  }
  show() {
    return this.item
  }
}