; (function (window) {

  $(function () {
		var items = new Items();
		items.init();
	});

  var Items = function () {
    this.itemData = {};
    this.allList = [];
    this.selectedIndex = -1;
    this.type = '';
  }

  Items.prototype.init = function () {
    this.queryData();
    $('.beauty_detail .item-pages .item-pages-up').on('click',this.onUpClick.bind(this));
    $('.beauty_detail .item-pages .item-pages-down').on('click',this.onDownClick.bind(this));
  }

  Items.prototype.onUpClick = function() {
    const list = this.allList;
    const index = this.selectedIndex;
    window.location.href = 'classdes-' + list[index-1].id + '.html';
  }

  Items.prototype.onDownClick = function() {
    const list = this.allList;
    const index = this.selectedIndex;
    window.location.href = 'classdes-' + list[index+1].id + '.html';
  }

  Items.prototype.queryData = function () {
    var pathname = location.pathname.split('/')[location.pathname.split('/').length - 1];
    var id = pathname.split('.')[0].split('-')[1] || ''
    if (!id) {
      window.location.href = 'beautyClass.html'
      return;
    }

    //获取知识潮流对于列表数据
    let queryType = window.localStorage.pageTitle == 'Knowledge' ? 'LORE' : 'FASHION';
    var getListRequest = $.ajax({
      url: window.MC.HOST + '/api/pub/website/info' + '?type=' + queryType + '&pageSize=1000000000',
      type: 'get',
      context: this,
    })
    getListRequest.done(function (response) {
      if (response.code === 200) {
        this.allList = response.data.records;
      }
    })

    //获取详情信息
    var request = $.ajax({
      url: window.MC.HOST + '/api/cms/articles/' + id,
      type: 'get',
      context: this,
    });
		request.done(function (response) {
      var itemData = { };
      if(response.code == 200) {
        itemData = {
          title: response.data.title,
          createdTime: response.data.createdTime,
          summary: response.data.summary,
          cover:response.data.cover ? JSON.parse(response.data.cover)[0].url : '',
        }

        let index = -1;
        for (var i = 0; i < this.allList.length; i++) {
          if (response.data.id == this.allList[i].id) {
            index = i;
            this.selectedIndex = i
          }
        }
        $('.beauty_knowledge_item_content .detail_title').html(itemData.title);
        $('.beauty_knowledge_item_content .detail_time').html(itemData.time);
        $('.beauty_detail .item_content').html(itemData.summary);
        $('.beauty_knowledge_item_image').attr('src',itemData.cover)
        if (index > -1) {
          if (index != 0) {
            $('.beauty_detail .item-pages .item-pages-up').html('上一篇')
          }
          if (index != this.allList.length -1) {
            $('.beauty_detail .item-pages .item-pages-down').html('下一篇')
          }
        }
      }
    })
  }

})(window);
