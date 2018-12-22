var app = getApp()
Page({

  data: {
    phone: [],
    password:[],
    userInfo: {},
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']

  },
  onLoad: function () {

    var that = this

    //调用应用实例的方法获取全局数据

    app.getUserInfo(function (userInfo) {


      //更新数据

      that.setData({

        userInfo: userInfo


      })
    })
  },

  // 获取输入账号


  phoneInput: function (e) {

    this.setData({
      phone: e.detail.value

    })
  },

  // 获取输入密码


  passwordInput: function (e) {
    this.setData({
      password: e.detail.value

    })
  },


  // 登录

  login: function ()
   {

    if (this.data.phone.length == null || this.data.password.length == null) {

      wx.showToast({

        title: '用户名和密码不能为空',

        icon: 'none',/*
        显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值

loading
显示加载图标，此时 title 文本最多显示 7 个汉字长度。

        none
不显示图标，此时 title 文本最多可显示两行*/

        duration: 2000

      })

    } else if (this.data.phone == "7758521" && this.data.password == "C110") {


      // 这里修改成跳转的页面

      wx.showToast({

        title: '登录成功',

        icon: 'success',

        duration: 2000,

        success: function () {
         
          wx.navigateTo({
            url: '../wifi_station/ams/ams',
          })

          
        }
      })

    } 
  
      else {
      wx.showToast({
  
        title: '密码错啦~',
        icon: 'false',
        duration: 2000
      })
    }
  }
})
