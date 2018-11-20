//index.js
Page({
  data: {
  },
  callingGirl:function(){
    wx.makePhoneCall({
      phoneNumber: '11111111111',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  callingBoy: function () {
    wx.makePhoneCall({
      phoneNumber: '11111111111',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})
