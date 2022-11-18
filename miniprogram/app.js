// app.js
// let app = getApp();


App({

  getTodayEvent : function (){
    wx.request({
      url: this.globalData.server + '/wxEventsAnalysis',
      data:{
      },
      method:"POST",
      header:{
        'content-type' : 'application/json'
      },
      success : (res) => {
        this.globalData.eventsResultLoaded = true;
        if(res.data.result.length == 0){
          // 没检测到声音事件
          // console.log(res.data.result.length);
          this.globalData.eventsResultLoaded = true;
          this.globalData.today = res.data.date;
          this.globalData.eventsResultNotEmpty = false;
          this.globalData.eventsResultData = {
            'eventsResultLoaded' : true,
            'eventsResultNotEmpty' : false,
            'today': res.data.date
          }
          // this.globalData.eventsResultNotEmpty = false;
          // this.globalData.today = res.data.date;
          // console.log(this.globalData.eventsResultNotEmpty);
        }else{
          // 检测到了声音事件
          // console.log(res.data);
          this.globalData.eventsResultLoaded = true;
          this.globalData.eventsResult = [res.data];
          this.globalData.eventsResultNotEmpty = true;
          this.globalData.eventsResultData = {
            'eventsResultLoaded' : true,
            'eventsResultNotEmpty' : true,
            'eventsResult': [res.data]
          }
          // this.globalData.eventsResultNotEmpty = true;
          // this.globalData.eventsResult = [res.data];
          // console.log('globalData.eventsResult',this.globalData)
        }
      }
    })
  },

  watchLoaded : function(method){
    var obj = this.globalData;
    Object.defineProperty(
      obj, "eventsResultData",{
        configurable : true,
        enumerable : true,
        set : function(value){
          this.eventsResultLoaded = value.eventsResultLoaded;
          this.eventsResult = value.eventsResult;
          this.eventsResultNotEmpty = value.eventsResultNotEmpty;
          this.today = value.today;
          // console.log('value...',value);
          method(value);
        },
        get : function(){
          console.log('Loaded   ',this.globalData);
          return this.globalData;
        }
      }
    )
  },

  getTaskList : function() {
    var that = this
    setInterval(function () {
      wx.request({
        url: getApp().globalData.server + '/AssignmentList',
        method:"POST",
        header:{
          'content-type' : 'application/json'
        },
        success: (res) =>{
          // console.log(res)
          that.globalData.taskList = res
        }
      })
      }, 10000);
  },

  watchTaskList : function(method){
    console.log('watchTaskList executed')
    var obj = this.globalData
    Object.defineProperty(
      obj, 'g_taskList',{
      configurable : true,
      enumerable : true,
      set : function (value) {
        console.log('set ',value)
        this.taskList = value.taskList;
        method(value);
      },
      get : function(){
        // console.log('get',value)
        return this.globalData;
      }
    });
  },


  onLaunch: function () {


    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    // } else {
    //   wx.cloud.init({
    //     // env 参数说明：
    //     //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
    //     //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
    //     //   如不填则使用默认环境（第一个创建的环境）
    //     // env: 'cloud1-1gcygyr3bab90a48',
    //     traceUser: true,
    //   });
    // };

    
    this.getTodayEvent();

    wx.login({
      success: function (res) {
        const app = getApp()
        app.globalData.code = res.code
        console.log("code："+app.globalData.code)
        //这里获取code以后，可以向服务器发起请求获取用户的openid

        wx.request({
          url: app.globalData.server + '/wx_register',
          data:{
            'code' : app.globalData.code
          },
          method:"POST",
          header:{
            'content-type' : 'application/json'
          },
          success: (res) =>{
            console.log(res)
            // that.globalData.taskList = res
            // console.log('gb',that.globalData.taskList)
          }
        })

      }
    });

    this.getTaskList();

  },


  globalData : {
    server: "http://192.168.31.240:8010",
    today : "",
    eventsResultNotEmpty : false,
    eventsResult : null,
    eventsResultLoaded : false,
    eventsResultData :{},
    code : '',
    taskList : [],
    g_taskList: {}
  }
});
