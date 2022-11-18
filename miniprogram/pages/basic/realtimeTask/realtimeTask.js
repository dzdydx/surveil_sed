// pages/basic/realtimeTask/realtimeTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    p_taskList : [],
    clickedIndex : [1]

  },


  tasklis : function(value){
    this.setData({
      p_taskList : getApp().globalData.taskList
    })
    console.log('this data', this.data.p_taskList)
  },

  handleEvent : function(e){
    let event = e.currentTarget.dataset.event;
    console.log(getApp().globalData.taskList.data.result);
    wx.request({
      url: getApp().globalData.server + '/HandleAssign',
      data: event,
      method : 'POST',
      header:{
        'content-type' : 'application/json'
      },
      success: (res) =>{
        // console.log(res)
        console.log(e);
        let clickedList = this.data.clickedIndex
        clickedList.push(e.currentTarget.dataset.index)
        this.setData({
          clickedIndex : clickedList
        })

        // this.data.clickedIndex.push(e.currentTarget.dataset.index)
        console.log(this.data.clickedIndex)
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.getTaskList();
    // console.log('global',getApp().globalData)
    this.setData({
      p_taskList : getApp().globalData.taskList.data.result
    });
    // console.log('data',watch)
    // console.log('p_tasklist' , this.data.p_taskList);
    
    getApp().watchTaskList(this.tasklis);
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