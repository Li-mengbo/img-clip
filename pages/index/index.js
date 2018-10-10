//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgSrc: ''
  },
  //选择图片
  getImgurl: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:  (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        //启动上传等待中...  
        wx.showToast({  
          title: '正在上传...',  
          icon: 'loading',  
          mask: true,  
          duration: 1000 
        }) 
        this.setData({
          imgSrc: res.tempFilePaths
        })
      }
    })
  },
  //点击取消
  btnNo: function () {
    this.setData({
      imgSrc: ''
    })
  },
  onLoad: function () {
  }
})
