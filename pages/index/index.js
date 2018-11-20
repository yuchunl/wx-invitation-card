//index.js
const app = getApp()
const db = wx.cloud.database()
const now = new Date()
const weddingDate = new Date(2018, 11-1, 10) //2018年11月10日

Page({
  data: {
    clock: {},
    userInfo: {},
    auth: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  onLoad: function() {
    const _this = this
    let auth = false
    wx.getSetting({
      success: function (res) {       
        if (res.authSetting['scope.userInfo']) {
          auth = true
          _this.setData({
            auth
          })
        }
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }

    // 倒计时活动开始
    let tm = new Date();
    // let tm = this.getnow();
    if (tm > weddingDate) { //活动结束
      console.log('活动结束')
      _this.setData({
        clock: {}
      })
    } else { //活动正在进行
      console.log('活动正在进行')
      let cd2 = setInterval(() => {
        let watch = this.countDown(weddingDate);
        if (watch == '00:00:00') {
          clearInterval(cd2)
          _this.setData({
            clock: {}
          })
        } else {
          _this.setData({
            clock: watch
          })
        }
      }, 1000)
    }
    // 倒计时活动结束
  },
  getnow: function () { //获取当前时间戳
    let timenow = new Date();
    let timestamp = timenow.getTime();
    return timestamp;
  },
  timeFormat(param) {//小于10的格式化函数
    return param < 10 ? '0' + param : param;
  },
  countDown: function (time) { //倒计时时间计算
    let nt = this.getnow();
    let obj = null;
    if (time <= nt) {
      return '00:00:00'
    }
    let intervalTime = (time - nt) / 1000;
    let day = parseInt(intervalTime / (60 * 60 * 24));
    let hou = parseInt(intervalTime % (60 * 60 * 24) / 3600);
    let min = parseInt(intervalTime % (60 * 60 * 24) % 3600 / 60);
    let sec = parseInt(intervalTime % (60 * 60 * 24) % 3600 % 60);
    obj = {
      day: this.timeFormat(day),
      hou: this.timeFormat(hou),
      min: this.timeFormat(min),
      sec: this.timeFormat(sec)
    }
    this.setData({
      clock: obj
    })
  },
  toFormPage: function () {
    wx.redirectTo({
      url: '/pages/formPage/formPage',
    })
  },
  notComeBtn: function() {
    wx.showToast({
      icon: 'none',
      title: '好吧～我知道了 哭哭'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '打开看一下啦～我辛辛苦苦做的喜帖',
      path: '/pages/index/index'
    }
  },
  getUserInfo: function (e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        auth: true
      })
    }
  },
})