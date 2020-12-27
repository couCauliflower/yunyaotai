// pages/adddrug/adddrug.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drugimg:"../../images/adminhome/addpic.png",
    img1:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  adddrug(e){
    var that=this;
    console.log(e);
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug',
      // url:'http://192.168.43.29:8080/drug/api/drug',
      // url:'http://172.81.245.195:8080/drug/api/drug',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug',
      method:"POST",
      data:{
        info:e.detail.info,
        name:e.detail.name,
        price:e.detail.price,
        productTime:e.detail.productTime,
        storageMonth:e.detail.storageMonth,
        storageNumber:e.detail.storageNumber,
        used:e.detail.used,
        img1:that.data.img1
      },
      success:function(res){
        console.log(res);
        wx.navigateTo({
          url: '../drugmanagement/drugmanagement',
        }),
        wx.showToast({
          title: '添加成功',
        })
      }
    })
  },
  addpic:function(e){
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
              drugimg:res.data,
              img1:res.data
            })
          }
        })
      }
    })
  },
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