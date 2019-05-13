; (function (window) {
  var Items = function () {
    this.itemsData = [];
    this.index = -1;
  }
  Items.prototype.init = function () {
    $('.items-list').on('click', 'li', this.onClick.bind(this));
    $('.items-list').on('mouseover', 'li', this.onClick.bind(this));
    $('.items-list').on('focus', 'li', this.onClick.bind(this));
    $('.items-prev').on('click', this.onPrev.bind(this));
    $('.items-next').on('click', this.onNext.bind(this));

    this.queryData();
  }
  Items.prototype.queryData = function () {
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/ow/elements',
      type: 'get',
      context: this,
    });

		request.done(function (response) {
      var data = response.data;
      this.itemsData = data.records;
      this.renderItems();
		});
	}
  Items.prototype.renderItems = function () {
    var html = [];
    $('.items-list').css('width', this.itemsData.length * 223 + 'px');
    this.itemsData.forEach(function (item, i) {
      html.push([
        '<li>',
        ' <div style="background-image:url(img/images/ingredient_2.jpg)">',
          '<span id="item-index-' + i + '">' + item.name + '</span>',
        '</div>',
        '</li>',
      ].join(''));
    })
    $('.items-list').html(html.join(''));
  }

  Items.prototype.onClick = function (e) {
    console.log('OOOO ',this,e);
    var index = Number(e.target.id.replace('item-index-', ''));
    this.onChangeIndex(this.index, index);
    console.log('AAAA this',$(this),this,e.target);
    // this.setArrowPosition(e)
    var screenX = e.screenX;
    $('.items-description-arrow').css('left',screenX);
  }
  Items.prototype.onPrev = function () {
    if(this.index > 0) {
      this.onChangeIndex(this.index, this.index - 1);
    }
  }
  Items.prototype.onNext = function () {
    if(this.index + 1 < this.itemsData.length) {
      this.onChangeIndex(this.index, this.index + 1);
    }
  }

  Items.prototype.onChangeIndex = function (prevIndex, nextIndex) {
    $('.items-list span').eq(prevIndex).removeClass('active');
    this.index = nextIndex;
    $('.items-list span').eq(nextIndex).addClass('active');
    $('.items-description').html('');
    $('.items-description').removeClass('hidden');
    if (this.index < this.itemsData.length) {
      this.onAnimation();
    }
    this.onRenderHTML();
  }

  Items.prototype.onMuneClick = function (id) {
    var rst = this.itemsData.findIndex(function(item){
      return item.id == id;
    });
    if(rst > -1){
      this.onClick({
        target: {
          id: 'item-index-' + rst,
        }
      });
    }
  }
  Items.prototype.onAnimation = function () {
    $('.items-list').stop().animate({
        'marginLeft': limit(this.index) + 'px',
    }, 300);
    // $('.items-list').css('margin-left', limit(this.index) + 'px');
  }
  Items.prototype.onRenderHTML = function () {
    var item = this.itemsData[this.index];
    var pageId = item.pageId;
    if(pageId){
      var request = $.ajax({
        url: window.MC.HOST + '/api/pub/ow/pages/' + pageId,
        type: 'get',
        context: this,
      });

      request.done(function (response) {
        var data = response.data;
        $('.items-description').html(data.content);
      });
    }
  }

  function limit(index) {
    var rst = - (index - 3) * 200;
    if(rst > 0) rst = 0;
    return rst;
  }

  //设置详情箭头的初始
  $(function(){
    $('.items-description-arrow').css('left',$('.items-box').offset().left + 98)
  })

  window.Items = Items;
})(window);
