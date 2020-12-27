// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    druglist:[],
    drugList:[
      {
        url:"../../images/userhomeimgs/pic1.png",
        name:"脑心通胶囊",
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
        url:"../../images/userhomeimgs/pic2.png",
        name:"今天有点惨",
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
        url:"../../images/userhomeimgs/drug.png",
        name:"好痛",
        index:3
      }
    ],
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
  deletecomment:function(e){
    var id=e.currentTarget.dataset.id;
    console.log(id);
    wx.request({
      // url: 'http://localhost:8080/drug/api/evaluate/'+id,
      // url:'http://192.168.43.29:8080/drug/api/evaluate/'+id,
      // url:'http://172.81.245.195:8080/drug/api/evaluate/'+id,
      url:'https://www.cauliflowerlucky.com:8080/drug/api/evaluate/'+id,
      method:"DELETE",
      success:function(res){
        console.log(res);
        wx.redirectTo({
          url: '../comment/comment',
        }),
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var user=getApp().globalData.userMessage;
    wx.request({
      // url: 'http://localhost:8080/drug/api/evaluate/findevaluate',
      // url:'http://192.168.43.29:8080/drug/api/evaluate/findevaluate',
      // url:'http://172.81.245.195:8080/drug/api/evaluate/findevaluate',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/evaluate/findevaluate',
      data:{
        id:user.id,
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        var adminlist=[];
        var obj={};
        for(var i=0;i<res.data.content.length;i++){
          obj={
            drugname:res.data.content[i].to.name,
            druginfo:res.data.content[i].to.info,
            index:i+1,
            username:res.data.content[i].from.name,
            userinfo:res.data.content[i].from.info,
            time:res.data.content[i].time,
            message:res.data.content[i].message,
            id:res.data.content[i].id,
            img:res.data.content[i].to.img1,
            
          }
          adminlist.push(obj);
        }
        console.log(adminlist);
        that.setData({
          druglist:adminlist
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