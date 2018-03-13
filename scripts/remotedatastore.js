(function(window){
  
  'use strict'
  var App = window.App || {};
  var $ = window.jQuery;
  function RemoteDataStore(url){
    if(!url){
      throw new Error('No remote URL supplied.');
    }

    this.serverURL = url;
   }

  RemoteDataStore.prototype.add = function(key,val){
    $.post(this.serverURL,val,function(serverResponse){
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function(cb){
      $.get(this.serverURL, function(serverResponse){
        console.log(serverResponse);
        cb(serverResponse);
      });
  };

  RemoteDataStore.prototype.get = function(key,cb){
    /*
    $.get(this.serverURL + '/' +key,function(serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    })*/
    $.ajax({
      url:this.serverURL,
      type:'GET',
      data:{emailAddress:key},
      dataType:'json',
      cache:'false',
      success:function(a){
        //console.log(a[0]);
         
      },
    });
   
  };
  
  RemoteDataStore.prototype.remove = function(key){
      $.ajax({
      url:this.serverURL,
      type:'GET',
      data:{emailAddress:key},
      dataType:'json',
      cache:'false',
      success:function(a){
        var myid = a[0].id;
        $.ajax("http://localhost:2403/coffeeorders/"+myid,{type: 'DELETE'}); //this.serverURL does not work
        console.log(myid);
      },
    });
     
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
