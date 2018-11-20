//index.js
const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
  },

  formSubmit: function (e) {
    var name = e.detail.value.name
    var num = e.detail.value.num
    var blessings = e.detail.value.blessings
    var phone = e.detail.value.phone
    if (name === '' || num === '' || phone === '') {
      wx.showModal({
        title: '注意',
        content: '你的数据没有填完唷',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return
    }

    db.collection('guests').add({
      data: {
        name: name,
        num: num,
        blessings: blessings,
        phone: phone
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        wx.showToast({
          title: '参加成功！',
          duration: 500000,
          complete: function () {
            wx.redirectTo({
              url: '/pages/index/index',
            })
          }
        })

        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '参加失败～赶紧问一下新娘小姊姊唷'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })

  },
  notComeBtn: function () {
    wx.showToast({
      icon: 'none',
      title: '好吧～我知道了 哭哭'
    })
  },
})
