Component({
  properties:{
    title:String,
    url:{
      type:String,
      value:"../../images/adminhome/addpic.png",
    },
    btntext:String,
    infos:Object
  },
  data:{
    name:'',
    password:'',
    confirmpassword:'',
    info:''
  },
  methods:{
    nameinput(e){
      let name=e.detail.value;
      this.setData({
        name:name,
      })
    },
    passwordinput:function(e){
      let password=e.detail.value;
      this.setData({
        password:password
      })
    },
    cpasswordinput:function(e){
      let cpassword=e.detail.value;
      this.setData({
        confirmpassword:cpassword
      })
    },
    infoinput(e){
      let info=e.detail.value;
      this.setData({
        info:info
      })
    },
    buttontap:function(e){
      var admin={
        name:e.currentTarget.dataset.name,
        password:e.currentTarget.dataset.pwd,
        confirmPassword:e.currentTarget.dataset.cpwd,
        info:e.currentTarget.dataset.info
      }
      this.triggerEvent("toaddadmin",admin);
      this.triggerEvent("tochangeadmin",admin);
    },
    adddrugpic:function(e){
      this.triggerEvent("toadddrugpic");
      this.triggerEvent("toupdateadminpic");
    }


  }
})