; (function (window) {

  $(function () {
		var items = new Items();
		items.init();
	});

  var Items = function () {
    this.tabIndex = 4; //头部导航索引
  }

  Items.prototype.init = function () {
    this.tabListDataJson();
  }

  // 加载头部tab
  Items.prototype.tabListDataJson = function () {
    var that = this;
    $.getJSON(window.MC.HOST+"/api/pub/ow/father", "", function (data){
      // console.log("json data = ", data);
      if(data.code != 200){
        console.log("tab list api error");
        return;
      }
      var tabList = data.data;
      var html = [];
      // $('.head_tabs').addClass('head_tabs');
      tabList.forEach(function (item, i) {
        if(that.tabIndex == item.id){
          html.push([
            '<a href='+ item.html + '>'+
      				'<li id="nav-'+ item.id +'" class="active" ><span>'+ item.name+'</span></li>'+
      				'<div class="nav_line"></div>'+
      			'</a>'
          ].join(''));
        }else{
          html.push([
            '<a href='+ item.html + '>'+
      				'<li id="nav-'+ item.id +'" ><span>'+ item.name+'</span></li>'+
      				'<div class="nav_line"></div>'+
      			'</a>'
          ].join(''));
        }

      })
      $('.head_tabs').html(html.join(''));
      $.getScript("js/tabBar.js",function(){  //加载test.js,成功后，并执行回调函数
        console.log("加载tabbar");
      });
    })
	}

})(window);
