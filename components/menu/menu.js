// components/menu/menu.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    toContactTab: function () {
      wx.redirectTo({
        url: '/pages/contactPage/contactPage',
      })
    },
    toMapTab: function () {
      wx.redirectTo({
        url: '/pages/mapPage/mapPage',
      })
    },
    toPhotoTab: function () {
      wx.redirectTo({
        url: '/pages/photoPage/photoPage',
      })
    },
    toStoryTab: function () {
      wx.redirectTo({
        url: '/pages/cardPage/cardPage',
      })
    },
    toIndexTab: function () {
      wx.redirectTo({
        url: '/pages/index/index',
      })
    },
  }
})
