; (function (window) {

  $(function () {
		var item = new Items();
		item.init();
	});

  var Items = function () {
    this.tabIndex = 6; //头部导航索引
    this.itemsData = {};
  }

  Items.prototype.init = function () {
    // this.queryData();
    // this.renderRichHtml();
    this.tabListDataJson()
  }
  
  // 加载头部tab
  Items.prototype.tabListDataJson = function () {
    var that = this;
    //mall.smallsaas.cn
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

//   Items.prototype.renderRichHtml = function () {
//     function renderRichText() {
//   		var request = $.ajax({
//   			url: window.MC.HOST + '/api/pub/ow/pages/6',
//   			type: 'get',
//   		});
//
//   		request.done(function ({ code, data }) {
//   			if (code === 200) {
//   				console.log('&&&&&&&&&&&&7 data = ',data);
//   				$('#renderHTML').html(data.content);
//   			}
//   		});
//   }
// }

  Items.prototype.queryData = function () {
    var id = 1;
    var request = $.ajax({
      url: window.MC.HOST + '/api/ow/pages/6',
      type: 'get',
      context: this,
    });
		request.done(function (response) {
      console.log('新闻中心富文本', response);
      // $('#renderHTML').html(response.data.content || '')
		});

    var responseData = {
      code:200,
      records:"<img src='img/vipCetner/vipcentet_vip.jpg'/>"
    }
    $('#section_content .adContent').html(responseData.records)

	}

})(window);
