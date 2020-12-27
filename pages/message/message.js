// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adminList:[],
    showMessage:false,
    nickname:"",
    showToast:false,
    inputvalue:'',
    userInfo:null,
    adminid:null
  },
  inputtap:function(options){
    console.log(options);
    this.setData({
      inputvalue:options.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  sendMessage:function(e){
    var that=this;
    let value=e.currentTarget.dataset.message;
    let userid=e.currentTarget.dataset.userid;
    let adminid=e.currentTarget.dataset.adminid;
    console.log(userid);
    console.log(adminid);
    console.log(value);
    wx.request({
      // url: 'http://localhost:8080/drug/api/comment',
      // url:'http://192.168.43.29:8080/drug/api/comment',
      // url:'http://172.81.245.195:8080/drug/api/comment',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/comment',
      data:{
        userId:userid,
        adminId:adminid,
        message:value
      },
      method:"POST",
      success:function(res){
        console.log(res);
        wx.redirectTo({
          url: '../message/message',
        })
      }
    })
    that.setData({
      showToast:true,
      showMessage:false
    })
    setTimeout(()=>{
      this.setData({
        showToast:false
      })
    },1500)
    
  },
  deleteback:function(){
    this.setData({
      showMessage:false
    })
  },
  clickmessage:function(e){
    let name=e.currentTarget.dataset.nickname;
    let adminid=e.currentTarget.dataset.adminid;
    this.setData({
      showMessage:true,
      nickname:name,
      adminid:adminid
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    that.setData({
      userinfo:getApp().globalData.userMessage
    })
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