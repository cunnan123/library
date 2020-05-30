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
import xcxHttp from '../../js/utils/xcx/xcxHttpclass'
var xhr=new xcxHttp().http
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
    this.http()
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
  async http() {
    var res = await xhr({
      url: 'http://localhost:3000/res/post',
      data: {
        a: 10
      },
      method: 'post'
    })
    console.log(res)
    console.log('aaaaaaaaa')
  }
})