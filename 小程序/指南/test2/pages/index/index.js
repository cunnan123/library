//index.js
//获取应用实例
const app = getApp()
import {JsUtilsApi, ArrayUtils, Base64, TimeUtils,StringUtils } from "great-jsutils/index";

Page({

  
testArray(){
  let arr=["a","b","c"];
  ArrayUtils.remove(arr,"b");
  console.log(arr.join(","));//a,c
},

  onLoad: function () {
   
  },
  getUserInfo: function(e) {
    
  }
})
