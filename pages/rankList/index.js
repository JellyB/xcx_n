// pages/rankList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
// // 增加
//     loading: true,
//     total: 0,
//     score: 0,
//     average: 0,


    rankList:{},
    loading: true,
  },


// // 修改
//   onLoad(options) {
//     var objectId = options.id
//     wx.u.getHistory(objectId).then(res => {
//       wx.u.getBeatNum(res.result.menu, res.result.score).then(res1 => {
//         wx.u.getAverage(res.result.menu).then(res2 => {
//           this.setData({
//             objectId: objectId,
//             loading: false,
//             total: res.result.questionList.length,
//             score: res.result.score,
//             questions: res.result.questionList,
//             beatNum: res1.result,
//             average: parseInt(res2.result[0].allScore / res2.result[0].peopleNum)
//           })
//         })
//       })
//     })
//   },
//   back() {
//     wx.reLaunch({
//       url: '/pages/select/index',
//     })
//   },
//   analysis() {
//     wx.navigateTo({
//       url: '/pages/analysis/index?objectId=' + this.data.objectId,
//     })
//   }
// })


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var menu = options.menu

    wx.u.getSettingByKey('limit').then(res3 => {
     
      var strLimit = res3.result[0]['value'];

      var arr = strLimit.split(';');
      console.log(arr);
      
      var gscore = parseInt(arr[0]);
      var limit = parseInt(arr[1]);
      wx.u.getRankRe(menu, gscore, limit).then(res => {
        console.log(res)
        this.setData({
          rankList: res.data,
          loading: false
        })
      })



      });





  
  },

})