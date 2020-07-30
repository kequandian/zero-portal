; (function (window) {

  $(function () {

  var Items = function () {
    this.nav = $('.nav');
    this.navMenu = $('.nav-menu');
    this.navItem = $('.nav-2');
    this.data = [];
    this.id = null; //当前激活的 一级导航
    this.hover = false;
  }

  Items.prototype.init = function () {
    this.initNav();
  }


  Items.prototype.initNav = function () {
    var _this = this;
    $('.nav>ul li').hover(function () {
      _this.hover = true;
      var id = $(this)[0].id && $(this)[0].id.replace('nav-', '');
      if (!id) {
        _this.id = null;
        return false;
      }
      _this.id = id;
    }, function () {
      _this.hover = false;
      // _this.id = null;
    });

    $('.nav>ul li').hover(function () {
      var lineWidth = $(this).children().width();
      var left = $(this).position().left;
      var width = $(this).outerWidth();
      _this.navRenderContainer(left, width,false,lineWidth);
    }, function () {
      setTimeout(function () {
        _this.navRenderContainer(0, 0, true);
      }, 200);
    });
    $('.nav-menu').hover(function () {
      _this.hover = true;
    }, function () {
      _this.hover = false;
      _this.navRenderContainer(0, 0);
    });
    $('.nav-menu').on('click', 'li', this.navOnClick);

    this.fetchNav();

  }
  Items.prototype.fetchNav = function () {
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/ow/menus',
      type: 'get',
    });

    var _this = this;
    request.done(function (response) {
      _this.data = response.data;
    });
  }
  /**
   * left
   * width
   * boolean  在 hover 的情况下，忽略这次 renderContainer 的调用
   */

  Items.prototype.navRenderContainer = function (left, width, boolean,lineWidth) {
    if (this.hover && boolean){
      return false;
    }

    //设置导航栏下面线条的动画
    $('.nav_line').css({
      'height': '2px',
      'width': lineWidth,
      'position': 'absolute',
      'backgroundColor': '#b99c56',
      'display':'block',
    })
    if(left > 0){
      $('.nav_line').stop().animate({
          'left': this.hover ? left + (width-lineWidth)/2 : 0,
      }, 300);
    }
    if(left == 0 && boolean == true){
      $('.nav_line').css({
        'display':'none'
      })
    }

    if (this.hover && this.id) {
      var _this = this;
      this.navMenu.css({
        'width': width,
      }).html([
        '<ul>',
        '</ul>',
      ].join(''));

      var match = $('.nav-menu ul');
      // var data = this.data.length > 0 && this.data[this.id - 1].items || [{ name: 'Loading……' }];
      var data = this.data.length > 0 && this.data[this.id - 1].items || [];

      this.navMenu.velocity({
        left: left,
        height: data.length * 30,
        marginTop:19,
      }, {
          duration: 100,
          queue: false,
          complete: function () {
            var html = [];
            if (_this.id) {
              data.forEach(function (item, i) {
                var active = window.currentActivePageId == item.id ? 'active' : '';
                html.push([
                  '<li id="nav-memu-' + item.id + '" class="' + active + '" data-pageId="' + item.pageId + '">',
                  item.name,
                  '</li>',
                ].join(''));
              });
            }

            match.append(html.join(''));

            // 高亮对应的富文本页导航条目
            //var id = SearchObject('id') || -2;
            var id = SearchObject().id || -2;
            $('.nav-menu [data-pageId="' + id + '"]').addClass('active');
          }
        });
    } else {
      this.navMenu.empty();
      this.navMenu.velocity({
        height: 0,
      }, {
          duration: 100,
          queue: false,
        })
    }
  }
  Items.prototype.navOnClick = function () {

    var id = Number($(this)[0].id.replace('nav-memu-', ''));
    var pageId = Number($(this).attr('data-pageId'));
    var hrefMap = {
      // '线下门店': 'test.html',
      '最新动态':'dynamic.html',
    }
    var menuText = $(this).text();

    window.currentActivePageId = id;
    $('.nav-menu .active').removeClass('active');
    $(this).addClass('active');

    if (window.onNavMenuChange) {
      onNavMenuChange(id, pageId);
    }

    if (pageId) {
      window.location.href = 'page.html?id=' + pageId + '&title=' + $(this).text();
    } else {
      if (hrefMap[menuText]){
        window.location.href = hrefMap[menuText];
      }

    }
  }

	var item = new Items();
	item.init();

});

})(window);
