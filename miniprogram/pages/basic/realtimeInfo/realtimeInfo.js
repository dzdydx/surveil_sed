// pages/basic/realtimeInfo/realtimeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "张三",
    age : 65,
    sex: '0',
    sex_picker: ['男', '女', '不填'],
    telNum : '158XXXX3359',
    supTel : '139XXXX0456',
    supName : '张三爹',
    remark : "asasa",
    host : "",
    door_num : "101"
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      sex: e.detail.value
    })
    console.log(this.data.sex)
  },

  getUserInfo(){
    wx.request({
      url: getApp().globalData.server + '/wxUserInfo',
      data:{
        'userId' : '0001'
      },
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success : (res) => {
        console.log(res.data)
        this.setData({
          name : res.data.name,
          age : res.data.age,
          sex : res.data.sex,
          host : res.data.host,
          door_num : res.data.door_num,
          telNum : res.data.tel,
          supName : res.data.sup_name,
          sup_tel : res.data.sup_tel,
          remark : res.data.remark
        })
      }
    })
  },

  submitUserInfo : function(e){
    console.log(e.detail.value);

    wx.request({
      url: getApp().globalData.server + '/wxSaveUserInfo',
      data:{
        'result':{
          'name' : e.detail.value.name,
          'age' : e.detail.value.age,
          'sex' : e.detail.value.sex,
          'host' : e.detail.value.host,
          'door_num' : e.detail.value.door_num,
          'tel' : e.detail.value.tel,
          'supname' : e.detail.value.supname,
          'suptel' : e.detail.value.suptel,
          'remark' : e.detail.value.remark
        },
        'userId' : '0001'
      },
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success : (res) => {
        console.log(res.data);
      }
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserInfo();
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