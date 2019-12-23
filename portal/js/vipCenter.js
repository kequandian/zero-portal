; (function (window) {

  $(function () {
		var item = new Items();
		item.init();
	});

  var Items = function () {
    this.itemsData = {};
  }

  Items.prototype.init = function () {
    // this.queryData();
    // this.renderRichHtml();
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
