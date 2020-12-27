Component({
  properties:{
    text:String,
    backUrl:String
  },
  data:{
    // statusBarHeight:0,
    statusBarHeight:getApp().globalData.statusBarHeight
  },
  // lifetimes:{
  //   created(){
  //   },
  //   //为什么不起作用？
  //   attached(){
  //    let statusBarHeight=getApp().globalData.statusBarHeight;
  //    this.setData({
  //      statusBarHeight:statusBarHeight
  //    })
  //    console.log(getApp().globalData.statusBarHeight)
  //   }
  // },
  // attached(){
  //   let statusBarHeight=getApp().globalData.statusBarHeight;
  //   this.setData({
  //     statusBarHeight:statusBarHeight
  //   })
  //   console.log(getApp().globalData.statusBarHeight)
  //  }
  //拿不到值  下面是废代码
  // created(){
  //   let data=this.statusBarHeight;
  //   console.log(data)
  // },
  // attached(){
  //   console.log(this.statusBarHeight)
  //   let data=this.statusBarHeight;
  //   console.log(data)
  // },
  // detached(){
  //   console.log(this.statusBarHeight)
  //   let data=this.statusBarHeight;
  //   console.log(data)
  // },
  methods:{
    backUserHome(e){
      let backurl=e.currentTarget.dataset.backurl;
      wx.navigateBack({
        delta:1
      })
    }
  }
})