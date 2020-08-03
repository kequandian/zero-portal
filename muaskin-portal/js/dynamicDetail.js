; (function (window) {

  $(function () {
		var item = new Items();
		item.init();
	});

  var Items = function () {
    this.itemsData = {};
  }

  Items.prototype.init = function () {
    this.queryData();
  }

  Items.prototype.queryData = function () {
    var id = Number(window.location.search.toString().split('=')[1]);
    var request = $.ajax({
      url: window.MC.HOST + '/api/cms/articles/' + id,
      type: 'get',
      context: this,
    });
		request.done(function (response) {
      this.itemsData = {
        title: response.data.title || '',
        lookNumber: response.data.visitCount || 0,
        time: response.data.createdTime || '',
        content: response.data.content || ''
      }
      $('.dynamic-detail-title').text(this.itemsData.title);
      $('.dynamic-detail-subContent').children('span:first-child').text('浏览：' + '' + this.itemsData.lookNumber + '次');
      $('.dynamic-detail-subContent').children('span:last-child').text(this.itemsData.time);
      $('.dynamic-detail-content').html(this.itemsData.content)
		});
	}

})(window);
