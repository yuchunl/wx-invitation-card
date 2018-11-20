Page({
  data: {
    markers: [{
      iconPath: "/images/map_1.png",
      id: 0,
      latitude: 30.25175,
      longitude: 120.054557,
      width: 33,
      height: 33
    }],
  },
  intoMap: function () {
    wx.openLocation({
      latitude: 30.25175,
      longitude: 120.054557,
      name: "杭州西溪花間堂",
      address: "杭州市余杭区天目山路五常大道西溪濕地龙舌嘴入口",
      scale: 28
    })
  }
})