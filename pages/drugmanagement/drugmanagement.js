// pages/drugmanagement/drugmanagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    title:[
      {
        message:"全部",
        tag:"tag0",
        scrolltag:"tag1",
        type:"c0"
      },
      {
        message:"心脑用药",
        tag:"tag1",
        scrolltag:"tag2",
        type:"c1"
      },
      {
        message:"清热解毒",
        tag:"tag2",
        scrolltag:"tag3",
        type:"c2"
      },
      {
        message:"儿科用药",
        tag:"tag3",
        scrolltag:"tag4",
        type:"c3"
      },
      {
        message:"胃肠用药",
        tag:"tag4",
        scrolltag:"tag5",
        type:"c4"
      },
      {
        message:"皮肤用药",
        tag:"tag5",
        scrolltag:"tag6",
        type:"c5"
      },
      {
        message:"补益安神",
        tag:"tag6",
        scrolltag:"tag7",
        type:"c6"
      },
      {
        message:"风湿骨痛",
        tag:"tag7",
        scrolltag:"tag8",
        type:"c7"
      },
      {
        message:"家用常备",
        tag:"tag8",
        scrolltag:"tag0",
        type:"c8"
      }
    ],
    druglist:[

  ],
    tag:"tag0",
  },
  changeTitle:function(e){
    var that=this;
    let tag=e.currentTarget.dataset.num;
    let type=e.currentTarget.dataset.type;
    if(type=="c0"){
      wx.request({
        // url: 'http://localhost:8080/drug/api/drug/find',
        // url:'http://192.168.43.29:8080/drug/api/drug/find',
        // url:'http://172.81.245.195:8080/drug/api/drug/find',
        url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/find',
        data:{
          page:0,
          size:150
        },
        success:function(res){
          console.log(res);
          that.setData({
            druglist:res.data.content
          })
        }
      })
    }else{
      wx.request({
        // url: 'http://localhost:8080/drug/api/drug/search',
        // url:'http://192.168.43.29:8080/drug/api/drug/search',
        // url:'http://172.81.245.195:8080/drug/api/drug/search',
        url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/search',
        data:{
          type:type,
          page:0,
          size:150
        },
        success:function(res){
          console.log(res);
          that.setData({
            druglist:res.data.content
          })
        }
      })
    }
  
    that.setData({
      tag:tag
    })
  },
  backadminhome:function(e){
    wx.reLaunch({
      url: '../adminhome/adminhome',
    })
  },
  toadddrug:function(e){
    wx.navigateTo({
      url: "../adddrug/adddrug",
    })
  },
  toadmindrug:function(e){
    let id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../admindrug/admindrug?bindid='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug/find',
      // url:'http://192.168.43.29:8080/drug/api/drug/find',
      // url:'http://172.81.245.195:8080/drug/api/drug/find',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/find',
      data:{
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        that.setData({
          druglist:res.data.content
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