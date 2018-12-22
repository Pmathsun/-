App({
  onLaunch() {
    console.log('App.onLaunch()');
  },
  onShow: function () {
  },
  onHide: function () {
  },
  getUserInfo: function (cb) {

    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {//登录接口的调用

      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)

            }
          })
        }
      })
    }
  },

  //本应用全局数据
  globalData: {
    a:{},
    b:{},
    userinfo:null,
  }
})

