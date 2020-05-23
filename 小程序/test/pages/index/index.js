import hotProductListController from '../../js/controller/list/productList/hotProductListController';
var hotProductList = new hotProductListController().show()
import  baseUserInfoItemController from '../../js/controller/item/userInfoItem/baseUserInfoItemController'
import  listController from '../../js/controller/item/addressItem/listController'
import  noAutoAddressItemController from '../../js/controller/item/addressItem/noAutoAddressItemController'
var userinfo=new baseUserInfoItemController().show()
var list=new listController()
var address=new noAutoAddressItemController().show()
list.insert(userinfo)
userinfo.addr(address)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotProductList: hotProductList,
    userinfo,
    address
  },
  openPro(e) {
    var item = hotProductList[e.currentTarget.dataset.index]
    console.log(item)
    item.operate()
  },
  changeAddress(){
    address.address='北京市丰台区五里店'+Math.floor(Math.random()*100)
    address.notify(list)
    this.setData({
      address,
      userinfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.changeAddress()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  http1() {
    wx.request({
      url: 'http://localhost:3000/res/post', //仅为示例，并非真实的接口地址
      data: {
        a: 10
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  http2() {
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'http://localhost:3000/res/post', //仅为示例，并非真实的接口地址
        data: {
          a: 10
        },
        method: 'post',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          resolve(res)
        },
        fail(res) {
          reject(res)
        }
      })
    })

  },
  async http() {
    var res = await this.http2()
    console.log(res)
    console.log('aaaaaaaaa')
  }
})