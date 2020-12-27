// pages/changeadmininfo/changeadmininfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoMessage:null,
    url:null,
    adminid:null
  },
  changeinfo:function(e){

    console.log(e);
    let id=e.currentTarget.dataset.info.id;
    console.log(id);
    wx.request({
      // url: 'http://localhost:8080/drug/api/admin/update',
      // url:'http://192.168.43.29:8080/drug/api/admin/update',
      // url:'http://172.81.245.195:8080/drug/api/admin/update',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/admin/update',
      data:{
        id:id,
        name:e.detail.name,
        password:e.detail.password,
        confirmPassword:e.detail.confirmPassword,
        info:e.detail.info
      },
      success:function(res){
        console.log(e.detail.name);
        getApp().globalData.adminname=e.detail.name;
        console.log(getApp().globalData.adminname);
        
        wx.redirectTo({
          url: '../adminlist/adminlist',
        }),
        wx.showToast({
          title: "修改成功",
        })
      }
    })
  },
  updateadminpic:function(res){
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
              url:res.data
            })
            wx.request({
              // url: 'http://localhost:8080/drug/api/admin/updatefaceimg',
              // url:'http://192.168.43.29:8080/drug/api/admin/updatefaceimg',
              // url:'http://172.81.245.195:8080/drug/api/admin/updatefaceimg',
              url:'https://www.cauliflowerlucky.com:8080/drug/api/admin/updatefaceimg',
              data:{
                id:that.data.adminid,
                faceimg:res.data
              },
              success:function(res){
                console.log(res);
                getApp().globalData.adminfaceimg=that.data.url;
             
              }
            })
          }
        })
      }
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
    console.log(getApp().globalData.infoMessage);
    var info=getApp().globalData.infoMessage;
    var adminfaceimg=getApp().globalData.adminfaceimg;
    that.setData({
      infoMessage:info,
      adminid:info.id,
      url:adminfaceimg
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