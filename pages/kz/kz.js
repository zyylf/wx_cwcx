

import {DBPost} from '../../db/DBPost.js';



//所有仓位数据合并
var listnumber = ['list1', 'list2', 'list3', 'list4', 'list5'];
var dataobj1 = new DBPost(listnumber[0]).getAllPostData();   
var dataobj2 = new DBPost(listnumber[1]).getAllPostData();  
var dataobj3 = new DBPost(listnumber[2]).getAllPostData();
var dataobj4 = new DBPost(listnumber[3]).getAllPostData();
var dataobj5 = new DBPost(listnumber[4]).getAllPostData(); 
var dataobj = [];
dataobj = dataobj.concat(dataobj1, dataobj2, dataobj3, dataobj4, dataobj5)   


Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    dongshu:'所有仓位'
    },

    bindKeyInput: function (e) {       
      //本行用e.detail.value直接取得输入值，并进行查询
     
      var len = listnumber.length;
      for (var i=0;i<len;i++){
        this.area = new DBPost(listnumber[i],e.detail.value);
        this.areaid = this.area.getAreaById();
                   
      if(e.detail.value){
        this.setData({                 
          datalist : this.areaid     
      })
      }
      else{
        this.setData({
          datalist:dataobj
        })
      }}

      


    },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {     
      this.setData({
        datalist:dataobj        
      })


      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})