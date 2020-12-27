// pages/adminlist/adminlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adminList:[], 
    statusBarHeight:getApp().globalData.statusBarHeight
  },

  backadminmine:function(e){
    wx.navigateTo({
      url: '../adminmine/adminmine',
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
    var that=this;
    wx.request({
      // url: 'http://localhost:8080/drug/api/admin/0/100',
      // url:'http://192.168.43.29:8080/drug/api/admin/0/100',
      // url:'http://172.81.245.195:8080/drug/api/admin/0/100',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/admin/0/100',
      success:function(res){
        console.log(res);
        that.setData({
          adminList:res.data.content
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})