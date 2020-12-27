// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    drugList:[
      {
        url:"../../images/userhomeimgs/faceurl.png",
        name:"椰菜",
        info:"一级医师",
        index:1,
        comment:[
          {
            nickname:"拒绝再玩",
            message:"药品很有用，普遍价格 再便宜点就好了。",
            time:"2020-05-18"
          },
          {
            nickname:"拒绝再玩",
            message:"药品很有用，普遍价格 再便宜点就好了。",
            time:"2020-05-18"
          },
          {
            nickname:"拒绝再玩",
            message:"药品很有用，普遍价格 再便宜点就好了。",
            time:"2020-05-18"
          }
        ]
      },
      {
        url:"../../images/userhomeimgs/faceurl.png",
        name:"椰菜",
        info:"一级医师",
        index:2,
        comment:[
          {
            nickname:"拒绝再玩",
            message:"药品很有用，普遍价格 再便宜点就好了。",
            time:"2020-05-18"
          },
          {
            nickname:"拒绝再玩",
            message:"药品很有用，普遍价格 再便宜点就好了。",
            time:"2020-05-18"
          },
          {
            nickname:"拒绝再玩",
            message:"药品很有用，普遍价格 再便宜点就好了。",
            time:"2020-05-18"
          }
        ]
      },
      {
        url:"../../images/userhomeimgs/faceurl.png",
        name:"椰菜",
        info:"四级医师",
        index:3
      }
    ],
    adminlist:null,
    currenttag:0
  },
  backmine:function(e){
    wx.reLaunch({
      url: '../mine/mine',
    })
  },
  showmore:function(e){
    let order=e.currentTarget.dataset.index;
    this.setData({
      currenttag:order
    })
  },
  deletemessage:function(e){
    var that=this;
    let commentid=e.currentTarget.dataset.id;
    wx.request({
      // url: 'http://localhost:8080/drug/api/comment/'+commentid,
      // url:'http://192.168.43.29:8080/drug/api/comment/'+commentid,
      // url:'http://172.81.245.195:8080/drug/api/comment/'+commentid,
      url:'https://www.cauliflowerlucky.com:8080/drug/api/comment/'+commentid,
      method:"DELETE",
      success:function(res){
        console.log(res);
        wx.showToast({
          title: '删除成功',
        })
        wx.navigateTo({
          url: '../speakadmin/speakadmin',
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
    let user=getApp().globalData.userMessage;
    let id=user.id;
    wx.request({
      // url: 'http://localhost:8080/drug/api/comment/searchuser',
      // url:'http://192.168.43.29:8080/drug/api/comment/searchuser',
      // url:'http://172.81.245.195:8080/drug/api/comment/searchuser',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/comment/searchuser',
      data:{
        id:id,
        page:0,
        size:100
      },
      success:function(res){
        console.log(res);
        var adminlist=[];
        var obj={};
        for(var i=0;i<res.data.content.length;i++){
          obj={
            amminname:res.data.content[i].to.name,
            admininfo:res.data.content[i].to.info,
            index:i+1,
            username:res.data.content[i].from.name,
            userinfo:res.data.content[i].from.info,
            time:res.data.content[i].time,
            message:res.data.content[i].message,
            id:res.data.content[i].id,
            adminpic:res.data.content[i].to.faceimg,
            
          }
          adminlist.push(obj);
        }
        console.log(adminlist);
        that.setData({
          adminlist:adminlist
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