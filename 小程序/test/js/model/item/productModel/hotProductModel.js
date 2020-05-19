import productModel from './productModel';
// 热销产品信息类
export default class hotProductModel extends productModel{
  constructor(){
    super();
    this.name=null;//名称
    this.description=null;//描述
    this.price=null;//价格
    this.picture=null;//图片
    this.classify=null;//分类
    this.link=null;//链接
  
  }
  //获取热销产品信息
  getProduct(){  
    return {
      nanme:this.name||null,
      description:this.description||null,
      price:this.price||null,
      picture:this.picture||null,
      classify:this.classify||null,
      link:this.link||null,
    }
  }
  //打开热销产品
  openProduct(){
    console.log('打开热销产品')
    console.log('名称：',this.name)
  }
}

// 测试
// var proA=new hotProductModel()
// var info=proA.getProduct();
// console.log(info)