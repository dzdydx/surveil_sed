// pages/basic/realtimePage/realtimePage.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    unitLocation: "淄博市张店区联通路318号",
    unitManager: "张三",

    plzBtn: [4,1,4,3,7,5],
    index2img : ['左上','向上','右上','向左','','向右','左下','向下','右下'],
    calling_state : false,

    isCallCollapsed: true,
    isGimbalCollapsed: true,

    callBtnColor: "green",
    callLoadingState: '',
    callText: "开始通话"

  },

  plzControl(e){
    // 现在的对应关系：
    // 方向：上左下右 <--> index: 1345
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
  },

  callCollapse(e){
    if (this.data.isCallCollapsed) {
        this.setData({isCallCollapsed: false})
    } else {
        this.setData({isCallCollapsed: true})
    }
  },

  gimbalCollapse(){
    if (this.data.isGimbalCollapsed) {
        this.setData({isGimbalCollapsed: false})
    } else {
        this.setData({isGimbalCollapsed: true})
    }
  },

  btnCall(){
    // console.log(getApp().globalData.code);
    // 保留了calling_state
    if (!this.data.calling_state) {
        this.setData({
            callBtnColor: "blue",
            callLoadingState: 'loading',
            callText: "连接中……"
        })
        wx.request({
          url: getApp().globalData.server + '/CallControl',
          data:{
            'calling' : this.data.calling_state
          },
          method:"POST",
          header:{
            'content-type' : 'application/json'
          },
          success: (res) => {
            console.log("Call end")
            console.log(res.result)
            this.setData({
              calling_state : res.result,
              callBtnColor: "red",
              callLoadingState: 'calling',
              callText: "挂断"
            })
          }
        })
        // 以下仅供无后端演示
        var that = this
        setTimeout(function() {
            that.setData({
                calling_state: true,
                callBtnColor: "red",
                callLoadingState: 'calling',
                callText: "挂断"
            })
        }, 2000)
    } 

    else {
        this.setData({
            calling_state: false,
            callBtnColor: "green",
            callLoadingState: '',
            callText: "开始通话"
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 首先，应该是获取进入小程序的链接，其中就包含了监控点的信息（比如id）
    // 接着，获取用户信息，理论上只有监控点负责人才能查看监控点详情、操作实时监控
    // 然后，根据监控点id获取其他信息，比如视频流地址、语音通话地址、监控点位置、负责人信息等。
    // 最后，更新页面data
    wx.request({
      url: 'url',
      data:{
        'unitID' : "1"
      },
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success: (res) => {
        this.setData({
            unitLocation: "淄博市张店区联通路318号",
            unitManager: "张三",
        })
      }
    })
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