// pages/basic/realtimePage/realtimePage.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    plzBtn: [0,1,2,3,4,5,6,7,8],
    index2img : ['左上','向上','右上','向左','','向右','左下','向下','右下'],
    calling_state : false

  },

  plzControl(e){
    // console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    wx.request({
      url: getApp().globalData.server + '/HolderControl',
      data:{
        'index' : index
      },
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success: (res) =>{
        console.log('plz controlled');
      }
    })
  },

  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  }
  ,

  btnCall (){
    // console.log(getApp().globalData.code);
    wx.request({
      url: getApp().globalData.server + '/CallControl',
      data:{
        'calling' : this.data.calling_state
      },
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success: (res) =>{
        console.log(res.result)
        this.setData({
          calling_state : res.result
        })
      }
    })

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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