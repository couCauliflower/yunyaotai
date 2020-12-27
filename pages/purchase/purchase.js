// pages/purchase/purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    druglist:[
  ],
  showready:true,
  showcomment:false,
  showslide:true,
  shownoslide:false,
  showactive:1,
  showMessage:false,
  showToast:false,
  drugname:'',
  drugid:null,
  userid:null,
  message:null,
  id:null

  },
  backmine:function(){
    wx.reLaunch({
      url: '../mine/mine',
    })
  },
  deleteback:function(){
    this.setData({
      showMessage:false
    })
  },
  toComment:function(e){
    console.log(e);
    let name=e.currentTarget.dataset.name;
    let userid=e.currentTarget.dataset.userid;
    let drugid=e.currentTarget.dataset.drugid;
    let id=e.currentTarget.dataset.id;

    this.setData({
      showMessage:true,
      drugname:name,
      drugid:drugid,
      userid:userid,
      id:id
    })
  },
  deletedrug(e){
    var id=e.currentTarget.dataset.id;
    console.log(id);
    wx.request({
      // url: "http://localhost:8080/drug/api/purchase/"+id,
      // url:'http://192.168.43.29:8080/drug/api/purchase/'+id,
      // url:'http://172.81.245.195:8080/drug/api/purchase/'+id,
      url:'https://www.cauliflowerlucky.com:8080/drug/api/purchase/'+id,
      method:"DELETE",
      success:function(res){
        console.log(res);
        wx.navigateTo({
          url: '../purchase/purchase',
        }),
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  },
  messageinput(e){
    this.setData({
      message:e.detail.value
    })
  },
  sendMessage:function(){
    var that=this;
    wx.request({
      // url: 'http://localhost:8080/drug/api/evaluate',
      // url:'http://192.168.43.29:8080/drug/api/evaluate',
      // url:'http://172.81.245.195:8080/drug/api/evaluate',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/evaluate',
      data:{
        userid:that.data.userid,
        drugid:that.data.drugid,
        message:that.data.message
      },
      method:"POST",
      success:function(res){
        console.log(res);
        wx.request({
          // url: 'http://localhost:8080/drug/api/purchase/update',
          // url:'http://192.168.43.29:8080/drug/api/purchase/update',
          // url:'http://172.81.245.195:8080/drug/api/purchase/update',
          url:'https://www.cauliflowerlucky.com:8080/drug/api/purchase/update',
          data:{
            id:that.data.id
          },
          success:function(res){
            console.log(res);
            wx.navigateTo({
              url: '../purchase/purchase',
            })
          }
        })
      }
    })
    that.setData({
      showToast:true,
      showMessage:false,
    })
    setTimeout(()=>{
      that.setData({
        showToast:false,
      })
    },1500)
  },
  toalready:function(){
    var that=this;
    wx.request({
      // url: 'http://localhost:8080/drug/api/purchase/search',
      // url:'http://192.168.43.29:8080/drug/api/purchase/search',
      // url:'http://172.81.245.195:8080/drug/api/purchase/search',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/purchase/search',
      data:{
        type:"remark",
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        that.setData({
          druglist:res.data.content,
        })
      }
    })
    that.setData({
      showactive:1,
      showslide:true,
      shownoslide:false,
      showready:true,
      showcomment:false
    })
  },
  tonoready:function(){
    var that=this;
    wx.request({
      // url: 'http://localhost:8080/drug/api/purchase/search',
      // url:'http://192.168.43.29:8080/drug/api/purchase/search',
      // url:'http://172.81.245.195:8080/drug/api/purchase/search',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/purchase/search',
      data:{
        type:"nomark",
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        that.setData({
          druglist:res.data.content,
        })
      }
    })
    that.setData({
      showactive:2,
      showslide:false,
      shownoslide:true,
      showready:false,
      showcomment:true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      // url: 'http://localhost:8080/drug/api/purchase/search',
      // url:'http://192.168.43.29:8080/drug/api/purchase/search',
      // url:'http://172.81.245.195:8080/drug/api/purchase/search',
      url:"https://www.cauliflowerlucky.com:8080/drug/api/purchase/search",
      data:{
        type:"remark",
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        that.setData({
          druglist:res.data.content,
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