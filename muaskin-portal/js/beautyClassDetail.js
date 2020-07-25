; (function (window) {

  $(function () {
		var items = new Items();
		items.init();
	});

  var Items = function () {
    this.itemData = {};
  }

  Items.prototype.init = function () {
    this.queryData();
  }

  Items.prototype.queryData = function () {
    var id = '';
    var type = '';
    if(location.search){
      id = location.search.split('&')[0].toString().split('=')[1];
      type = location.search.split('&')[1].toString().split('=')[1];
    }

    var request = $.ajax({
      url: window.MC.HOST + '/api/cms/articles/' + id,
      type: 'get',
      context: this,
    });
		request.done(function (response) {
      console.log('TTTTT response = ',response);
      var itemData = { };
      if(response.code == 200) {
        itemData = {
          title: response.data.title,
          createdTime: response.data.createdTime,
          summary: response.data.summary,
          cover:response.data.cover ? JSON.parse(response.data.cover)[0].url : '',
        }
        $('.beauty_knowledge_item_content .detail_title').html(itemData.title);
        $('.beauty_knowledge_item_content .detail_time').html(itemData.time);
        $('.beauty_detail .item_content').html(itemData.summary);
        $('.beauty_knowledge_item_image').attr('src',itemData.cover)
      }
    })
  }

})(window);
