// index.js
// const app = getApp()
// const { envList } = require('../../envList.js');

Page({
  data: {
    elements: [{
      title: '实时监控',
      name: 'Camera',
      color: 'cyan',
      icon: 'camera',
      url:'realtimePage'
    },
    {
      title: '预警事件',
      name: 'Events',
      color: 'blue',
      icon: 'list',
      url:'realtimeEvent'
    },
    {
      title: '监控回放',
      name: 'Replay',
      color: 'purple',
      icon: 'playfill',
      url : 'realtimeReplay'
    },
    {
      title: '异常响度',
      name: 'Volume',
      color: 'orange',
      icon: 'activity',
      url : 'realtimeVolume'
    },
    {
      title: '个人信息 ',
      name: 'Information',
      color: 'mauve',
      icon: 'myfill',
      url : 'realtimeInfo'
    },
    {
      title: '任务调度',
      name: 'Assignment',
      color : 'red',
      icon : 'messagefill',
      url : 'realtimeTask'
    },
    {
      title: '返回控制台',
      name : 'Console',
      color: 'brown',
      icon : 'newsfill',
      url : 'realtimeMap'
    }
  ],
  },
  onLoad : function(options){
    var userId = options.userId;
    console.log(userId);
  }



  // testRequest(){
  //   wx.request({
  //     url: getApp().globalData.server + '/wxtest',
  //     data:{
  //     },
  //     method:"POST",
  //     header:{
  //       'content-type' : 'application/json'
  //     },
  //     success(res){
  //       console.log(res)
  //     }
  //   })
  // }
});
