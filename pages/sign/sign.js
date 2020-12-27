// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null,
    cpassword:null
  },
  usernameinput:function(e){
    console.log(e);
    var username=e.detail.value;
    this.setData({
      username:username
    })
  },
  passwordinput:function(e){
    console.log(e);
    var password=e.detail.value;
    this.setData({
      password:password
    })
  },
  confirminput:function(e){
    console.log(e);
    var cpassword=e.detail.value;
    this.setData({
      cpassword:cpassword
    })
  },
  tosign:function(e){
    var that=this;
    wx.request({
      url: 'https://www.cauliflowerlucky.com:8080/drug/api/user',
      data:{
        name:that.data.username,
        password:that.data.password,
        confirmPassword:that.data.cpassword,
        type:'user'
      },
      method:'POST',
      success:function(res){
        console.log(res);
        console.log(that.data.username);
        wx.request({
          url: 'https://www.cauliflowerlucky.com:8080/drug/api/user/search',
          data:{
            name:that.data.username
          },
          success:function(res){
            console.log(res);
            getApp().globalData.userMessage=res.data;
            wx.redirectTo({
              url: '../userhome/userhome',
            })
            wx.showToast({
              title: '登录成功',
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