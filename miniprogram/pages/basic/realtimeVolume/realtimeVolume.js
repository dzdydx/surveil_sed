// pages/basic/realtimeVolume/realtimeVolume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    volumeResult : [],
    today : '',
    volumeResultLoaded : false,
    volumeResultEmpty : true
  },

  getTodayEvent : function (){
    wx.request({
      url: getApp().globalData.server + '/wxGetVolumeTimestamp',
      data:{
      },
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success : (res) => {

        let today = res.data.date;
        let value = res.data.result;
        if (value.length == 0){
          this.setData({
            volumeResultLoaded : true,
            volumeResultEmpty : true,
            today : today
          })
        }
        else{
          this.setData({
            volumeResultLoaded : true,
            volumeResultEmpty : false,
            today : today,
            volumeResult : value
          });
        }
        

        console.log(this.data);

        
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTodayEvent();
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