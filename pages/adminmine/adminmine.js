// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    adminInfo:null,
    adminname:null,
    faceimg:null
  },
  toadminmessage:function(e){
    let adminid=e.currentTarget.dataset.adminid;
    wx.navigateTo({
      url: "../adminmessage/adminmessage?bindadminid="+adminid,
    })
  },
  uploadfaceimg:function(e){
    var that=this;
    wx.chooseImage({
      success:function(res){
        console.log(res);
        
        wx.uploadFile({
          filePath: res.tempFilePaths[0],
          name: 'file',
          // url: 'http://localhost:8080/drug/file/upload',
          // url:'http://192.168.43.29:8080/drug/file/upload',
          // url:'http://172.81.245.195:8080/drug/file/upload',
          url:'https://www.cauliflowerlucky.com:8080/drug/file/upload',
          success:function(res){
            console.log(res);
            that.setData({
              faceimg:res.data
            })
            var user=getApp().globalData.infoMessage;
            getApp().globalData.adminfaceimg=res.data;
            wx.request({
              // url: 'http://localhost:8080/drug/api/admin/updatefaceimg',
              // url:'http://192.168.43.29:8080/drug/api/admin/updatefaceimg',
              // url:'http://172.81.245.195:8080/drug/api/admin/updatefaceimg',
              url:'https://www.cauliflowerlucky.com:8080/drug/api/admin/updatefaceimg',
              data:{
                id:user.id,
                faceimg:res.data
              },
              success:function(res){
                console.log(res);

              }
            })
          }
        })
      }
    })
  },
  toaddadmin:function(){
    wx.navigateTo({
      url: '../addadmin/addadmin',
    })
  },
  tochangeadmininfo:function(){
    wx.navigateTo({
      url: "../changeadmininfo/changeadmininfo",
    })
  },
  tochangeadminlist:function(){
    wx.navigateTo({
      url: '../adminlist/adminlist',
    })
  },
  backadminhome:function(){
    wx.reLaunch({
      url: '../adminhome/adminhome',
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
    var infoMessage=getApp().globalData.infoMessage;
    that.setData({
      adminInfo:infoMessage,
      faceimg:getApp().globalData.adminfaceimg
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    that.setData({
      adminname:getApp().globalData.adminname
    })
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