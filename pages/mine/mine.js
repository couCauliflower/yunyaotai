// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    userMessage:null,
    faceimg:null
  },
  touserhome:function(){
    wx.reLaunch({
      url:"../userhome/userhome"
    })
  },
  uploadfaceimg:function(e){
    var that=this;
    wx.chooseImage({
      success:function(res){
        // that.setData({
        //   photoOld:res.tempFilePaths[0]
        // })
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
            var user=getApp().globalData.userMessage;
            wx.request({
              // url: 'http://localhost:8080/drug/api/user/updatafaceimg',
              // url:'http://192.168.43.29:8080/drug/api/user/updatafaceimg',
              // url:'http://172.81.245.195:8080/drug/api/user/updatafaceimg',
              url:'https://www.cauliflowerlucky.com:8080/drug/api/user/updatafaceimg',
              data:{
                id:user.id,
                faceimg:res.data
              },
              success:function(res){
                console.log(res);
                var obj=getApp().globalData.userMessage;
                console.log(obj);
                obj.faceimg=that.data.faceimg;
                getApp().globalData.userMessage=obj;
                console.log(getApp().globalData.userMessage);

              }
            })
          }
        })
      }
    })
  },
  tospeakadmin:function(){
    wx.navigateTo({
      url: '../speakadmin/speakadmin',
    })
  },
  tomine:function(){
    wx.navigateTo({
      url:"../purchase/purchase"
    })
  },
  tocomment:function(){
    wx.navigateTo({
      url:"../comment/comment"
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
    var userMessage=getApp().globalData.userMessage;
    that.setData({
      userMessage:userMessage,
      faceimg:userMessage.faceimg
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