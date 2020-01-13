class DBPost {
  //本行用于构造初始函数,后面的字符必须与缓存中设置的KEY一致。
  constructor(listnumber,id,state){
    this.storageKeyName=listnumber;
    this.id = id;
    this.state = state;
    
  }

  getAllPostData(){
    var res=wx.getStorageSync(this.storageKeyName);    //获取缓存；
    return res;      
      }
       
  getAreaById(){
    var ss = this.getAllPostData();
    var len = ss.length;
    for (var i=0; i<len;i++){
      if (ss[i].id == this.id){
        return {
          // index:i,
          data:ss[i]
        }
      }
    }
  }


 



  execSetStorageSync(data){
    wx.setStorageSync(this.storageKeyName, data);  //设置缓存；
  }


};

export {DBPost}