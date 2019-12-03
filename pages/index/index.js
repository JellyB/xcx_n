// pages/start/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },
  onLoad(e) {
    var that = this;
    wx.getUserInfo({
      success(res) {

        console.log('onload');
        wx.u.getUserInfo().then(res1 => {
          var bmobUser = res1.result;
          if (bmobUser.avatarUrl == '' || bmobUser.avatarUrl == undefined) {
            wx.u.changeUserInfo(res.userInfo.avatarUrl, res.userInfo.nickName).then(res2 => { });
          }
        })
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  bindgetuserinfo() {
    var that = this;
    wx.getUserInfo({
      success(res) {
        wx.u.getUserInfo().then(res1 => {
          var bmobUser = res1.result;
          if (bmobUser.avatarUrl == '' || bmobUser.avatarUrl == undefined) {
            wx.u.changeUserInfo(res.userInfo.avatarUrl, res.userInfo.nickName).then(res2 => { });

            //console.log(res.userInfo);
            //wx.u.saveOpenid(res.userInfo.avatarUrl, res.userInfo.nickName).then(res2 => { });
          }
        })
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  goSign() {

    wx.u.getTelName().then(res2 => {
      console.log(res2.result);
      console.log(res2.result.mobilePhoneNumber);

      if (res2.result.mobilePhoneNumber && res2.result.mobilePhoneNumber.length ==11 ){
    
       wx.reLaunch({
         url: '/pages/select/index',
        })
      }else{
        wx.reLaunch({
          url: '/pages/userdata/index',
        })
      }

      //
     });


    // wx.reLaunch({
    // // url: '/pages/select/index',
    //   url: '/pages/userdata/index',
    // })
  }
})