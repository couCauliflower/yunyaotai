// pages/userhome/userhome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    entryIcon:[
      {
        title:"心脑用药",
        tag:"tag1",
        imgUrl:"../../images/userhomeimgs/icon1.png",
        type:"c1"
      },
      {
        title:"清热解毒",
        tag:"tag2",
        imgUrl:"../../images/userhomeimgs/icon2.png",
        type:"c2"
      },
      {
        title:"儿科用药",
        tag:"tag3",
        imgUrl:"../../images/userhomeimgs/icon3.png",
        type:"c3"
      },
      {
        title:"胃肠用药",
        tag:"tag4",
        imgUrl:"../../images/userhomeimgs/icon4.png",
        type:"c4"
      },
      {
        title:"皮肤用药",
        tag:"tag5",
        imgUrl:"../../images/userhomeimgs/icon8.png",
        type:"c5"
      },
      {
        title:"补益安神",
        tag:"tag6",
        imgUrl:"../../images/userhomeimgs/icon5.png",
        type:"c6"
      },
      {
        title:"风湿骨痛",
        tag:"tag7",
        imgUrl:"../../images/userhomeimgs/icon6.png",
        type:"c7"
      },
      {
        title:"家用常备",
        tag:"tag8",
        imgUrl:"../../images/userhomeimgs/icon7.png",
        type:"c8"
      }
    ],
    drugList:[
    ],
    count:0,
    drugid:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      // url: "http://localhost:8080/drug/api/drug/find",
      // url:"http://192.168.43.29:8080/drug/api/drug/find",
      // url:'http://172.81.245.195:8080/drug/api/drug/find',
      // url:'http://172.81.245.195:8080/drug/api/drug/find',
      // url:'https://www.cauliflowerlucky.com/drug/api/drug/find',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/find',
      data:{
        page:that.data.count,
        size:100
      },
      success:function(res){
        console.log(res);
        that.setData({
          drugList:res.data. content,
        })
      }
    })

  },
  tomine:function(){
    wx.reLaunch({
      url:"../mine/mine"
    })
  },
  toDrugCategory:function(e){
    let tag=e.currentTarget.dataset.tag;
    let type=e.currentTarget.dataset.type;
    console.log(tag);
    wx.navigateTo({
      // url:"../category/category?bindtag="+tag+"&message="+message 多值传法
      url:"../category/category?bindtag="+tag+"&bindtype="+type
    })
  },
  toDrugDetail:function(e){
    console.log(e);
    var drugid=e.currentTarget.dataset.drugid;
    wx.navigateTo({
      url:"../drugdetail/drugdetail?id="+drugid
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