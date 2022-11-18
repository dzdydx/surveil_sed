// pages/basic/realtimeReplay/realtimeReplay.js

let util = require('../../utils/utils')
Page({

  /**
   * 页面需求：
   * 加载检测声音事件 -> 滚动列表显示声音事件、加载对应时段视频（本地？下载？） -> 视频播放完后自动下一事件
   */
  data: {
    eventLength : 20,
    scroll : 0,
    videoSource : '',
    eventResult : [],
    eventResultNotEmpty : true,
    eventResultLoaded : false,
    today : ''
  },
  scrollNextSteps() {

    this.setData({
      scroll: this.data.scroll == this.data.eventResult[0].result.length - 1 ? 0 : this.data.scroll + 1
    });
    this.getReplayFile();
    // console.log(this.data.scroll, ' ', this.data.eventResult[0].result[this.data.scroll].time)
  },

  scrollPrevSteps() {
    this.setData({
      scroll: this.data.scroll == 0 ? this.data.eventResult[0].result.length - 1 : this.data.scroll - 1
    })
    this.getReplayFile();
    // console.log(this.data.scroll, ' ', this.data.eventResult[0].result[this.data.scroll].time)
  },

  getReplayFile(){
    // let fileName = "";
    let userId = '0001'
    let fileHour= this.data.eventResult[0].result[this.data.scroll].time.split(':')[0];
    let fileMinute = this.data.eventResult[0].result[this.data.scroll].time.split(':')[1];
    let today_date = util.formatTime(new Date());
    let fileName = userId + today_date + '_' + fileHour + '_' + fileMinute + '_00.mp4'

    console.log(fileName);

    this.setData({
      videoSource : "http://192.168.31.240:8888//dailyreplay//" + fileName
    })
    // console.log('util time', time)
  },

  byClickEvent(e){
    this.setData({
    });

    let userId = '0001'
    let fileHour= e.currentTarget.dataset.time.split(':')[0];
    let fileMinute = e.currentTarget.dataset.time.split(':')[1];
    let today_date = util.formatTime(new Date());
    let fileName = userId + today_date + '_' + fileHour + '_' + fileMinute + '_00.mp4'

    console.log(fileName);
    this.setData({
      scroll : e.currentTarget.dataset.index,
      videoSource : "http://192.168.31.240:8080//dailyreplay//" + fileName
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      eventResult : getApp().globalData.eventsResult,
      eventResultNotEmpty : getApp().globalData.eventsResultNotEmpty,
      today : getApp().globalData.today,
      eventResultLoaded : getApp().globalData.eventsResultLoaded
    });
    if(this.data.eventResultLoaded){
      this.getReplayFile();
    }
    

    if (!this.data.eventResultLoaded){
      getApp().watchLoaded(this.lis);
    };

  },

  lis : function(loaded){
    this.setData({
      eventResultLoaded : getApp().globalData.eventsResultLoaded,
      eventResult : getApp().globalData.eventsResult,
      eventResultNotEmpty : getApp().globalData.eventsResultNotEmpty,
      today : getApp().globalData.today
    });
    this.getReplayFile();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // this.getReplayFile();

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