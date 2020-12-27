// pages/addadmin/addadmin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"../../images/adminhome/addpic.png",
    faceimg:null
  },
  addadmin:function(e){
    var that=this;
    console.log(e);
    wx.request({
      // url: 'http://localhost:8080/drug/api/admin',
      // url:'http://192.168.43.29:8080/drug/api/admin',
      // url:'http://172.81.245.195:8080/drug/api/admin',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/admin',
      data:{
        name:e.detail.name,
        password:e.detail.password,
        confirmPassword:e.detail.confirmPassword,
        info:e.detail.info,
        type:"admin",
        faceimg:that.data.faceimg

      },
      method:"POST",
      success:function(res){
        console.log(res);
        wx.redirectTo({
          url: '../adminlist/adminlist',
        }),
        wx.showToast({
          title: '添加成功',
        })
      }

    })
  },
  addadminpic:function(e){
    var that=this;
    console.log(e);
    wx.chooseImage({
      success:function(res){
        console.log(res);
        wx.uploadFile({
          filePath:res.tempFilePaths[0],
          name: 'file',
          // url: 'http://localhost:8080/drug/file/upload',
          // url:'http://192.168.43.29:8080/drug/file/upload',
          // url:'http://172.81.245.195:8080/drug/file/upload',
          url:'https://www.cauliflowerlucky.com:8080/drug/file/upload',
          success:function(res){
            console.log(res);
            that.setData({
              url:res.data,
              faceimg:res.data
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