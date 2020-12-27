// pages/adminmessage/adminmessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messagelist:null,
  },
  deletemessage:function(e){
    let id=e.currentTarget.dataset.id;
    let adminid=e.currentTarget.dataset.adminid;
    console.log(adminid);
    wx.request({
      // url: 'http://localhost:8080/drug/api/comment/'+id,
      // url:'http://192.168.43.29:8080/drug/api/comment/'+id,
      // url:'http://172.81.245.195:8080/drug/api/comment/'+id,
      url:'https://www.cauliflowerlucky.com:8080/drug/api/comment/'+id,
      method:"DELETE",
      success:function(res){
        console.log(res)
        wx.showToast({
          title: "删除成功",
        })
        wx.redirectTo({
          url: '../adminmessage/adminmessage?bindadminid='+adminid,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var adminid=options.bindadminid;
    wx.request({
      // url: 'http://localhost:8080/drug/api/comment/searchadmin',
      // url:'http://192.168.43.29:8080/drug/api/comment/searchadmin',
      // url:'http://172.81.245.195:8080/drug/api/comment/searchadmin',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/comment/searchadmin',
      data:{
        id:adminid,
        page:0,
        size:100
      },
      success:function(res){
        console.log(res);
        that.setData({
          messagelist:res.data.content,
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