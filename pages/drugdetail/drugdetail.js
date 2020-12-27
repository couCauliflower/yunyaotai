// pages/drugdetail/drugdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:null,
    drugid:null,
    imgList:[
    ],
    drugDetail:{
    },
    drugInfo:[
      
    ],
    commentNumber:0,
    commentList:[
      
    ],
    toView:'#',
    flag:1,
    infoOffsetTop:0,
    commentOffsetTop:0,
    swiperOffsetTop:5,
    number:1,
    showBuy:false,
    showToast:false,
    info:null,
    used:null,
    storageMonth:null,
    productTime:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      userinfo:getApp().globalData.userMessage,
      drugid:options.id
    })
    console.log(that.data.userinfo);
    console.log(that.data.drugid);
    console.log(options);
    var drugid=options.id;
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug',
      // url:'http://192.168.43.29:8080/drug/api/drug',
      // url:'http://172.81.245.195:8080/drug/api/drug',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug',
      data:{
        id:drugid,
      },

      success:function(res){
        console.log(res);
        var imglist=[];
        if(res.data.img1!=null){
          var img={};
          img.url=res.data.img1;
          imglist.push(img);
        }
        if(res.data.img2!=null){
          var img={};
          img.url=res.data.img2;
          imglist.push(img);
        }
        if(res.data.img3!=null){
          var img={};
          img.url=res.data.img3;
          imglist.push(img);
        }
        if(res.data.img4!=null){
          var img={};
          img.url=res.data.img4;
          imglist.push(img);
        }
        if(res.data.img5!=null){
          var img={};
          img.url=res.data.img5;
          imglist.push(img);
        }
        var obj={};
        obj.name=res.data.name;
        obj.restcount=res.data.storageNumber;
        obj.tosell=res.data.limitNumber;
        obj.price=res.data.price;
        obj.img=res.data.img1;
        obj.storageNumber=res.data.storageNumber;
        that.setData({
          imgList:imglist,
          drugDetail:obj,
          info:res.data.info,
          used:res.data.used,
          storageMonth:res.data.storageMonth,
          productTime:res.data.productTime
        })

      }
    })
    wx.request({
      // url: 'http://localhost:8080/drug/api/evaluate/findevaluatebydrugid',
      // url:'http://192.168.43.29:8080/drug/api/evaluate/findevaluatebydrugid',
      // url:'http://172.81.245.195:8080/drug/api/evaluate/findevaluatebydrugid',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/evaluate/findevaluatebydrugid',
      data:{
        id:that.data.drugid,
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        var obj={};
        var list=[];
        for(var i=0;i<res.data.content.length;i++){
          obj.faceurl=res.data.content[i].from.faceimg;
          obj.nickname=res.data.content[i].from.name;
          obj.detail=res.data.content[i].message;
          obj.time=res.data.content[i].time;
          list.push(obj);
        }
        console.log(list);
        that.setData({
          commentList:list,
          commentNumber:res.data.content.length
        })
      }
    })
  },
  toSwiper:function(){
    this.setData({
      toView:"swiper",
      flag:1
    })
  },
  toInfo:function(){
    this.setData({
      toView:"info",
      flag:2
    })
  },
  toComment:function(){
    this.setData({
      toView:"comment",
      flag:3
    })
  },
  purchase:function(){
    this.setData({
      showBuy:true
    })
  },
  leaveMessage:function(){
    wx.navigateTo({
      url:"../message/message"
    })
  },
  deleteBack:function(){
    this.setData({
      showBuy:false
    })
  },
  listenScroll:function(e){
    if(e.detail.scrollTop<=(e.currentTarget.dataset.infotop-e.currentTarget.dataset.swipertop)){
      this.setData({

        flag:1
      })
    }else if(e.detail.scrollTop<=(e.currentTarget.dataset.commenttop-e.currentTarget.dataset.swipertop)){
      this.setData({

        flag:2
      })
    }else{
      this.setData({

        flag:3
      })
    }
  },
  addNumber:function(e){
    let num=e.currentTarget.dataset.number;
    num=num+1;
    this.setData({
      number:num
    })
  },
  subNumber:function(e){
    let num=e.currentTarget.dataset.number;
    num=num-1;
    this.setData({
      number:num
    })
  },
  buyDrug:function(e){
    var that=this;
    wx.request({
      // url: 'http://localhost:8080/drug/api/purchase',
      // url:'http://192.168.43.29:8080/drug/api/purchase',
      // url:'http://172.81.245.195:8080/drug/api/purchase',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/purchase',
      method:"POST",
      data:{
        userid:that.data.userinfo.id,
        drugid:that.data.drugid
      },
      success:function(res){
        console.log(res);
        wx.navigateTo({
          url: '../purchase/purchase',
        })
       
      }
    })
  
    that.setData({
      showToast:true,
      showBuy:false
    })
    setTimeout(()=>{
      this.setData({
        showToast:false
      })
    },1500)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let query=wx.createSelectorQuery()
    query.select('#swiper').boundingClientRect((rect)=>{
      let top=rect.top;
      console.log(rect);
      this.setData({
        swiperOffsetTop:top
      })
    }).exec();
    query.select('#info').boundingClientRect((rect)=>{
      let top=rect.top;
      // console.log(top);
      this.setData({
        infoOffsetTop:top
      })
    }).exec();
    query.select('#comment').boundingClientRect((rect)=>{
      let top=rect.top;
      // console.log(top);
      this.setData({
        commentOffsetTop:top
      })
    }).exec();
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