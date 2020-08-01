; (function (window) {

  $(function () {
		var item = new Items();
		item.init();
	});

  var Items = function () {
    this.itemsData = [];
    this.current = 1;
    this.pages = 1;
    this.total = 0;
    this.currentNumber = 1;
  }

  Items.prototype.init = function () {
    this.queryData();
    $('.pagenation').on('click','.pagenation-number li',this.onChange.bind(this));
    $('.pagenation').on('click','.backNumber',this.onBackChange.bind(this));
    $('.pagenation').on('click','.forwordNumber',this.onForwordChange.bind(this));
    $('.dynamic-list').on('click','.dynamic-list-item',this.onClick.bind(this));
  }

  Items.prototype.queryData = function () {
    var pages = window.location.search ? Number(window.location.search.toString().split('=')[1]) : 1;
    var pageNum = this.current;
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/cms/trends?pageSize=5' + '&pageNum=' + pages,
      type: 'get',
      context: this,
    });
		request.done(function (response) {
      var data = response.data.records;
      for(var i = 0; i < data.length ; i++ ){
        data[i] = {
          image: data[i].cover || 'img/logo.png',
          title: data[i].title || '',
          content: data[i].content || '',
          time: data[i].createdTime || '',
          id: data[i].id
        }
      }
      this.itemsData = data;
      this.pages = response.data.pages;
      this.current = response.data.current;
      this.total = response.data.total;
      this.currentNumber = this.current;
      this.renderItems();
      this.renderPageNumber();
		});

    Items.prototype.renderItems = function () {
      var html = [];
      var pagesHtml = new Array(this.pages);
      $('.dynamic-list').addClass('dynamic-list');
      this.itemsData.forEach(function (item, i) {
        html.push([
          '<div class="dynamic-list-item" id="nav-memu-' + item.id + '">',
            '<div class="item-img" id="nav-memu-' + item.id + '" style="background-image: url( '+ item.image +' )"></div>',
            '<div class="item-continer" id="nav-memu-' + item.id + '">',
              '<div class="item-continer-title" id="nav-memu-' + item.id + '">'+ item.title + '</div>',
              '<div class="item-continer-content" id="nav-memu-' + item.id + '">'+ item.content + '</div>',
              '<div class="item-continer-time" id="nav-memu-' + item.id + '">'+ item.time + '</div>',
            '</div>',
            '<div class="item-icon" id="nav-memu-' + item.id + '">&gt;</div>',
          '</div>',
        ].join(''));
      })
      $('.dynamic-list').html(html.join(''));
      $('.pagenation-total').text('共' + ' '  + this.total + ' ' + '条记录')

      if(this.pages == 1){
        $('.pagenation-continer span').addClass('disabled');
        $('.pagenation-continer ul li').addClass('disabled');
      } else {
        if(this.current == 1){
          $('.backNumber').addClass('disabled');
          $('.forwordNumber').removeClass('disabled');
        }
        if(this.current != 1){
          $('.backNumber').removeClass('disabled');
        }
        if(this.current != this.pages){
          $('.forwordNumber').removeClass('disabled');
        }
        if(this.current == this.pages){
          $('.backNumber').removeClass('disabled');
          $('.forwordNumber').addClass('disabled');
        }
      }
    }

    Items.prototype.getPrevPageNumber = function (count, array) {
  		for (var index = count; index > 0; index--) {
  			var number = this.current - index;
  			if (number < 1) break;
  			array.push(number);
  		}
  	}
  	Items.prototype.getNextPageNumber = function (count, array) {
  		for (var index = 0; index < count; index++) {
  			var number = this.current + (index + 1);
  			if (number > this.pages) break;
  			array.push(number);
  		}
  	}

    Items.prototype.renderPageNumber = function () {
      var data = [];
      var html = [];
      var prevCount = 0;
      if (this.current - 2 > 0) {
        prevCount = Math.max(2, 4 - (this.pages - this.current));
      } else {
        prevCount = Math.max(0, this.current - 1, this.current - 2);
      }
      this.getPrevPageNumber(prevCount, data);
      data.push(this.current);
      this.getNextPageNumber(Math.max((4 - prevCount), 2), data);
      var current = this.current;
      data.forEach(function (number) {
        if(current == number){
          html.push([
            '<li class="currentNumber" title="'+ number +'"> '+ number +' </li>'
          ].join(''));
        } else {
          html.push([
            '<li title="'+ number +'">' + number + '</li>'
          ].join(''));
        }
      });
      $('.pagenation-number').html(html.join(''));
    }

    Items.prototype.onChange = function (e) {
      var number = Number(e.target.title);
      if(number){
        window.location.href = 'dynamic.html?pages=' + number;
        this.current = number;
        this.queryData();
      }
    }

    //上一页
    Items.prototype.onBackChange = function (e) {
      if(this.currentNumber <= this.pages){
        this.current = this.currentNumber - 1;
        var number = this.currentNumber - 1;
        window.location.href = 'dynamic.html?pages=' + number;
        this.queryData();
      }
    }

    //下一页
    Items.prototype.onForwordChange = function (e) {
      if(this.currentNumber < this.pages){
        this.current = this.currentNumber + 1;
        var number = this.currentNumber + 1;
        window.location.href = 'dynamic.html?pages=' + number;
        this.queryData();
      }
    }

    //进入详情页
    Items.prototype.onClick = function (e) {
      var index = Number(e.target.id.toString().split('-')[2]);
      if(index){
        window.location.href = 'dynamicDetail.html?id=' + index + 'title=动态详情';
      }
    }

	}

})(window);
