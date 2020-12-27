// pages/admindrug.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drugInfo:null,
    id:null,
    statusBarHeight:getApp().globalData.statusBarHeight,
    drugimg:null
  },
  tochangeinfo:function(e){
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../changeinfo/changeinfo?bindid="+id,
    })
  },

  removedrug:function(e){
    var id=e.currentTarget.dataset.id;
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug/'+id,
      // url:'http://192.168.43.29:8080/drug/api/drug/'+id,
      // url:'http://172.81.245.195:8080/drug/api/drug/'+id,
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/'+id,
      method:"DELETE",
      success:function(res){
        console.log(res);
        wx.navigateTo({
          url: '../drugmanagement/drugmanagement',
        }),
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  },
  backdrug:function(){
    wx.redirectTo({
      url: '../drugmanagement/drugmanagement',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    let drugid=options.bindid;
    console.log(drugid);
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug',
      // url:'http://192.168.43.29:8080/drug/api/drug',
      // url:'http://172.81.245.195:8080/drug/api/drug',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug',
      data:{
        id:drugid
      },
      success:function(res){
        console.log(res);
        that.setData({
          drugInfo:res.data,
          id:res.data.id,
          drugimg:res.data.img1
        })
      }
    })
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