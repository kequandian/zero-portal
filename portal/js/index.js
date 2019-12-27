; (function (window) {

  $(function () {
		var item = new Items();
		item.init();
	});

  var Items = function () {
    this.tabIndex = 1;
    this.tabList = [
      {"id": 1, "name":"首页", "path":"index.html"},
      {"id": 2, "name":"关于我们", "path":"about.html"},
      {"id": 3, "name":"产品中心", "path":"product.html"},
      {"id": 4, "name":"服务优势", "path":"test.html"},
      {"id": 5, "name":"合作方式", "path":"ingredient.html"},
      {"id": 6, "name":"新闻中心", "path":"vipCenter.html"},
      {"id": 7, "name":"人才招聘", "path":"beautyClass.html"},
    ]
  }

  Items.prototype.init = function () {
    this.tabListDataJson();
  }

  // 加载头部tab
  Items.prototype.tabListDataJson = function () {
    var that = this;

    $.getJSON("https://mall.smallsaas.cn/api/pub/ow/father", "", function (data){
      // console.log("json data = ", data);
      if(data.code != 200){
        console.log("tab list api error");
        return;
      }
      var tabList = data.data;

      var html = [];
      // $('.head_tabs').addClass('head_tabs');
      tabList.forEach(function (item, i) {
        if(tabList == item.id){
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


  // 头部导航
  // $(function(){
  //   $(".headTabBar").load("../common/headTabBar/headTabBar.html");
  // })

  $(function(){
    if(location.pathname.indexOf('addIndex') == -1){
      var setArraw = setInterval(function(){
        var height = $('.index_photo_gallery_right_first .right_top_item1 img').height();
        var width = $('.index_photo_gallery_right_first .right_top_item1 img').width();
        $('.index_photo_gallery_right_first .right_top_item1').css({
          maxHeight:height + 'px',
        })
        $('.index_photo_gallery_right_first .right_top_item2').css({
          maxHeight:height + 'px',
        })
        if(height > 0){
          clearInterval(setArraw)
        }
      },100)
    }
  })

 //控制首页产品三个类型图的高度
  $(function(){
    if(location.pathname.indexOf('addIndex') == -1){
      var setArraw = setInterval(function(){
        var height = $('.index_three_wrap img').height();
        $('.index_three_image').css({
          height:height
        })
        $('.index_three_container').css({
          minHeight:height + 20
        })
        if(height > 0){
          clearInterval(setArraw)
        }
      },100)
    }
    //IE11下的样式
    if(/*@cc_on!@*/true){

    }
  })

  //设置
  $(function(){
    console.log('hh',$('.index_three_image img').height());
    $('.index_three_image').css({
      height:$('.index_three_image img').height()
    })
  })


  $(function(){
    $('.addindex_first_img a').on({
      mouseover:function(){
        $('.addindex_first_qrcode').css({
          display:'block'
        })
        $('.addindex_first_qrcode .show_qrcode').empty();
        $('.addindex_first_qrcode .show_qrcode').qrcode({
          render:'canvas',
          text: 'https://www.muaskin.com/wx/?fallback=L3NraW5Ib3VzZWtlZXBlci9yZXNlcnZhdGlvbg%3D%3D&invite_code=7db1c97ffcf6ae7028bc8bcc530bafb9',
          width:100,
          height:100
        });
        $('.addindex_first_qrcode .show_qrcode').css({
          marginLeft:'0.5em'
        })
     },
     mouseout:function(){
       $(".addindex_first_qrcode").css("display","none")
     }
    })
  });
})(window);
