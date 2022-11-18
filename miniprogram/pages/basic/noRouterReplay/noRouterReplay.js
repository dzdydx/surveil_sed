// pages/basic/noRouterReplay/noRouterReplay.js
let util = require('../../utils/utils');

Page({

  /**
   * 页面的初始数据
   */
  data: {

    time : '',
    videoSource : ''

  },

  getReplayFile(){
    // let fileName = "";
    let userId = '0001'
    let fileHour= this.data.time.split(':')[0];
    let fileMinute = this.data.time.split(':')[1];
    let today_date = util.formatTime(new Date());
    let fileName = userId + today_date + '_' + fileHour + '_' + fileMinute + '_00.mp4'

    console.log(fileName);

    this.setData({
      videoSource : "http://192.168.31.240:8888//dailyreplay//" + fileName
    })
    // console.log('util time', time)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('page   ',options.time);
    this.setData({
      time : options.time
    });

    this.getReplayFile();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})