import httpClass from './httpClass'
export default class xcxHttpClass extends httpClass{
  constructor(){
    super()
  }
  http(obj){
    return new Promise(function(resole,reject){
      var {url,data,method}=obj;
      var header={
        'content-type': 'application/json' 
      };
      wx.request({
        url, 
        data,
        method,
        header,
        success (res) {
          resole(res)
        },
        fail (res) {
          reject(res)
        }
      })
    })
  }

}