import bannerModel from './bannerModel';
//广告信息类
export default class swiperBannermodel extends bannerModel{
  constructor(){
    super();
    this.name=null;//名称
    this.description=null;//描述
    this.picture=null;//图片
    this.link=null;//链接
  }
  //获取广告信息
  getBanner(){  
    return {
      nanme:this.name||null,
      description:this.description||null,
      picture:this.picture||null,
      link:this.link||null,
    }
  }
}

// 测试
var bannerA=new swiperBannermodel()
var info=bannerA.getBanner();
console.log(info)