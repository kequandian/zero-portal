; (function (window) {

  $(function () {
		var item = new Items();
		item.init();
	});

  var Items = function () {
    this.tabList = [
      {id: 1, name:'首页', path:'index.html'},
      {id: 2, name:'关于我们', path:'about.html'},
      {id: 3, name:'产品中心', path:'product.html'},
      {id: 4, name:'服务优势', path:'test.html'},
      {id: 5, name:'合作方式', path:'ingredient.html'},
      {id: 6, name:'新闻中心', path:'vipCenter.html'},
      {id: 7, name:'人才招聘', path:'beautyClass.html'},
    ];
  }

  Items.prototype.init = function () {
    this.queryData();

  }

  Items.prototype.queryData = function () {
    var html = [];
    // $('.dynamic-list').addClass('dynamic-list');
    this.tabList.forEach(function (item, i) {
      html.push([
        '<a href='+ item.path + '>'+
  				'<li id="nav-'+ item.id +'" ><span>'+ item.name+'</span></li>'+
  				'<div class="nav_line"></div>'+
  			'</a>'
      ].join(''));
    })
    console.log("tab bar == ", html);
    $('.head_tabs').html(html.join(''));

	}

})(window);
