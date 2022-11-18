// pages/basic/realtimeEvent/realtimeEvent.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eventResult : [],
    today: "",
    eventResultNotEmpty : false,
    eventResultLoaded : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log('here',getApp().globalData)
    this.setData({
      eventResult : getApp().globalData.eventsResult,
      eventResultNotEmpty : getApp().globalData.eventsResultNotEmpty,
      today : getApp().globalData.today,
      eventResultLoaded : getApp().globalData.eventsResultLoaded
    });

    // console.log('in onLoad', getApp().globalData);
    // console.log('inonLoad this.data',this.data)
    if (!this.data.eventResultLoaded){
      getApp().watchLoaded(this.lis);
    }


    // console.log(this.data.eventResultLoaded);

  },

  lis : function(loaded){
    // console.log('globalData    ', getApp().globalData);
    // console.log('loaded', loaded);
    this.setData({
      eventResultLoaded : getApp().globalData.eventsResultLoaded,
      eventResult : getApp().globalData.eventsResult,
      eventResultNotEmpty : getApp().globalData.eventsResultNotEmpty,
      today : getApp().globalData.today
    });
    // console.log('event results   ',getApp().globalData.eventsResult);
    console.log('this data', this.data)
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