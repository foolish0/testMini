// pages/home/home.js
// 导航栏
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['今日推荐', '时尚', '国际', '美妆', '电子', '居家'],
    currentTab: 0,
    imgUrls: [
      'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg',
      'https://a2.vimage1.com/upload/flow/2017/11/07/73/15100619325212.jpg', 'https://b.vimage1.com/upload/mst/2017/11/04/139/23b96f0e89abed2d9415e848fc3715ff_604x290_80.jpg'
    ],
    indicatorDots: true, //设置是否显示面板指示点
    autoplay: true, //设置是否自动切换
    interval: 3000, //设置自动切换时间间隔,3s
    duration: 1000, //  设置滑动动画时长1s
  },

  // 导航切换监听
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
});
