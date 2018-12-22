var myCharts = require("../../../utils/wxcharts.js")//引入一个绘图的插件
var lineChart_a = null
var app = getApp()

Page({
  data: {
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())//下拉刷新函数，获取当前时间戳
  },
  onShareAppMessage: function () {

  return {

      title: 'C110的闯红灯数据',

      desc: '快来看我们的提醒装置有没有效果！！!',

      path: '/page/user?id=123'

    }

  },





  //把拿到的数据转换成绘图插件需要的输入格式
  convert: function () {
    var categories = [];
    var a = [];

    var length = app.globalData.a.datapoints.length
    for (var i = 0; i < length; i++) {
      categories.push(app.globalData.a.datapoints[i].at.slice(11, 19));
      a.push(app.globalData.a.datapoints[i].value);
    }
    return {
      categories: categories,
      a: a
    }
  },

  onLoad: function () {
    var TimeData = this.convert();

    //得到屏幕宽度
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();//获取用户信息接口
      windowWidth = res.windowWidth;//得到屏幕宽度
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var TimeData = this.convert();

    //新建次数图表
    lineChart_a = new myCharts({/**创建了一个新对象lineChart_a,将myCharts里面的this关键字指向linechart */
      canvasId: 'a',
      type: 'line',
      categories: TimeData.categories,
      animation: true,
      background: '#f5f5f5',
      series: [{
        name: 'a',
        data: TimeData.a,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: false//是否禁用格子
      },
      yAxis: {
        title: 'a (n)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 55
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    })
  },
})
