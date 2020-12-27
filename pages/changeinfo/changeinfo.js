// pages/changeinfo/changeinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drugid:null,
    drugimg:null
  },
  updatedrugpic:function(e){
    console.log(e);
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
            that.setData({
              drugimg:res.data
            })
            wx.request({
              // url: 'http://localhost:8080/drug/api/drug/updatedrugimg',
              // url:'http://192.168.43.29:8080/drug/api/drug/updatedrugimg',
              // url:'http://172.81.245.195:8080/drug/api/drug/updatedrugimg',
              url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/updatedrugimg',
              data:{
                id:that.data.drugid,
                img1:res.data,
              },
              success:function(res){
                console.log(res)
              }
            })
          }
        })
      }
    })
  },
  changedrug:function(e){
    console.log(e);
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug/update',
      // url:'http://192.168.43.29:8080/drug/api/drug/update',
      // url:'http://172.81.245.195:8080/drug/api/drug/update',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/update',
      data:{
        id:e.detail.id,
        name:e.detail.name,
        info:e.detail.info,
        price:e.detail.price,
        productTime:e.detail.productTime,
        storageMonth:e.detail.storageMonth,
        storageNumber:e.detail.storageNumber,
        used:e.detail.used
      },
      success:function(res){
        console.log(res);
        wx.navigateTo({
          url: '../admindrug/admindrug?bindid='+e.detail.id,
        })
        wx.showToast({
          title: '修改成功',
        });
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var drugid=options.bindid;
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
          druginfo:res.data,
          drugid:res.data.id,
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