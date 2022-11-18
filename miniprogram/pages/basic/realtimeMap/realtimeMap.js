// pages/basic/realtimeMap/realtimeMap.js

var amapFile = require('../../utils/amap-wx.130.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers : [],
    mapCenter_long : 114.133095,
    mapCenter_la : 30.677372,
    pinfo : {}
  },

  getUserList (){
    wx.request({
      url: getApp().globalData.server + '/GetUserList',
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success: (res) =>{
        this.setMarker(res.data.result)
      }
    })
  },

  setMarker :function(marker_data){
    var markers = [];
    for(var j = 0; j < marker_data.length; j++){
      console.log(marker_data[j])
      markers.push({
        id : j,
        name : marker_data[j].name,
        userId: marker_data[j].userId,
        doornum : marker_data[j].doornum,
        tel : marker_data[j].tel,
        latitude: marker_data[j].position.latitude,
        longitude: marker_data[j].position.longitude,
        iconPath: "../../../images/marker.png",
        width: 22,
        height: 32
      })
    }
    this.setData({
      markers: markers
    });
    this.showMarkerInfo(this.data.markers , 0);
    this.changeMarkerStyle(this.data.markers , 0);

        // console.log(this.data.markers)
  },

  makertap : function(e) {
    var index = e.detail.markerId;
    var that = this;
    console.log(index);
    this.showMarkerInfo(that.data.markers , index);
    this.changeMarkerStyle(that.data.markers , index);

  },

  showMarkerInfo : function(data,index){
    console.log('data',data)
    console.log('index',index)
    console.log(data[index])
    this.setData({
      pinfo : data[index]
    })
  },

  changeMarkerStyle: function(data,i){
    var that = this;
    var markers = [];
    for(var j = 0; j < data.length; j++){
      if(j==i){
        data[j].iconPath = "../../../images/marker_checked.png";
      }else{
        data[j].iconPath = "../../../images/marker.png";
      }
      console.log(data[j])
      markers.push({
        id : j,
        name : data[j].name,
        userId: data[j].userId,
        doornum : data[j].doornum,
        tel : data[j].tel,
        latitude: data[j].latitude,
        longitude: data[j].longitude,
        width: 22,
        height: 32,
        iconPath: data[j].iconPath,
      })
    }
    that.setData({
      markers: markers
    })
  },

  naviIndex : function(e){
    wx.requestSubscribeMessage({
      tmplIds: ['4Vm-9PQ974jtaMO-2uhu8MD3VPFHp4FU8oFM6yzmdqM'],
      success (res) { 
        console.log('Success!!!!')
      }
})

    wx.navigateTo({
      url: '../index/index?userId=' + this.data.pinfo.userId
    });


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取用户列表
    this.getUserList();

    // var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'b6b6b7ff82e5c7ab8cc1eed37a05eb98'});
    var that = this
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