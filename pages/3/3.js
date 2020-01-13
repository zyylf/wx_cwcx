

// var dataobj = require('../../data/data.js');
import {DBPost} from '../../db/DBPost.js';

var listnumber = 'list3';


Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    dongshu:'3栋'
    },

    bindKeyInput: function (e) {       
      //本行用e.detail.value直接取得输入值，并进行查询
     this.area = new DBPost(listnumber,e.detail.value);
      this.areaid = this.area.getAreaById();
      var dataobj = new DBPost(listnumber); 
      if(e.detail.value){
        this.setData({                 
          datalist : this.areaid     
      })
      }
      else{
        this.setData({
          datalist:dataobj.getAllPostData()
        })
      }

      


    },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      var dataobj = new DBPost(listnumber);      
      this.setData({
        datalist:dataobj.getAllPostData()        
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