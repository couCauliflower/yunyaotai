// pages/login/login.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  usernameInput:function(e){
    let username=e.detail.value;
    this.setData({
      username:username
    })
  },
  passwordInput:function(e){
    let password=e.detail.value;
    this.setData({
      password:password
    }) 
  },
  tohome:function(e){
    let username=e.currentTarget.dataset.username;
    let password=e.currentTarget.dataset.pwd;

    if(username==''||password==''){
     wx.showModal({
       content:'账号或密码不能为空',
       showCancel:false,
       success(res){
         if(res.confirm){
           wx.navigateTo({
             url: '../login/login',
           })
         }
       }
     })
    }else{
      wx.request({
        // url: 'http://localhost:8080/drug/api/admin/search',
        // url:'http://192.168.43.29:8080/drug/api/admin/search',
        // url:'http://172.81.245.195:8080/drug/api/admin/search',
        // url:'https://www.cauliflowerlucky.com/drug/api/admin/search',
        url:'https://www.cauliflowerlucky.com:8080/drug/api/admin/search',
        data:{
          name:username
        },
        success:function(res){
          console.log(res);          
          app.globalData.infoMessage=res.data;
          app.globalData.adminfaceimg=res.data.faceimg;
          app.globalData.adminname=res.data.name;
          console.log(app.globalData.infoMessage);
          if(res.data.type=="admin"&&res.data.password==password){
            wx.navigateTo({
              url: '../adminhome/adminhome',
            }),
            wx.showToast({
              title: "登录成功",
            })
          }
        },
       
      })


      wx.request({
        // url: 'http://localhost:8080/drug/api/user/search',
        // url:'http://192.168.43.29:8080/drug/api/user/search',
        // url:'http://172.81.245.195:8080/drug/api/user/search',
        // url:'https://www.cauliflowerlucky.com/drug/api/user/search',
        url:'https://www.cauliflowerlucky.com:8080/drug/api/user/search',
        data:{
          name:username
        },
        success:function(res){
          console.log(res);
          app.globalData.userMessage=res.data;
          console.log(app.globalData.userMessage);
          if(res.data.type=="user"&&res.data.password==password){
            wx.navigateTo({
              url: '../userhome/userhome',
            }),
            wx.showToast({
              title: "登录成功",
            })
          }
        },
      
      })
    }
    // else if(username=='admin'){
    //   wx.navigateTo({
    //     url: '../adminhome/adminhome',
    //   })
    // }else{
    //   wx.navigateTo({
    //     url: '../userhome/userhome',
    //   })
    // }
  },
  tosign:function(){
    wx.redirectTo({
      url: '../sign/sign',
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