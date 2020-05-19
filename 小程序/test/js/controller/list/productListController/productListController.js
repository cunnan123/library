import hotProductsConf from '../../../config/hotProductsConf';
import hotProductModel from '../../../model/item/productModel/hotProductModel';
import productListModel from '../../../model/list/productListModel/productListModel';
export default class productListController{
  constructor(){
    this.proList=new productListModel();
    this.initProduct();
  }
  //初始化产品并生产产品列表
  initProduct(){
    var that=this;
    hotProductsConf.forEach(function(e){
      var pro=new hotProductModel();
      pro.name=e.nanme;
      pro.description=e.description;
      pro.price=e.price;
      pro.picture=e.picture;
      pro.classify=e.classify;
      pro.link=e.link;
      that.proList.insert(pro)
    })
  }
  show(){
    return this.proList.show();
  }
}