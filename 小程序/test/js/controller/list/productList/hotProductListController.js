import productListController from './productListController';
import hotProductItemController from './../../item/productItem/hotProductItemController'
import hotProductListModel from '../../../model/list/productList/hotProductListModel'
import hotProductsConf from '../../../config/hotProductsConf';

export default class hotProductListController extends productListController {
  constructor() {
    super();
    this.init();
  }
  init() {
    var that = this;
    that.list = new hotProductListModel();
    hotProductsConf.forEach(function (e) {
      var item = new hotProductItemController().show();
      item.name = e.nanme;
      item.description = e.description;
      item.price = e.price;
      item.picture = e.picture;
      item.classify = e.classify;
      item.link = e.link;
      that.list.insert(item)
    })
  }
  show() {
    return this.list.show();
  }
}