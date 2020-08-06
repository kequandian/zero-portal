; (function (window) {
	function Pagination(options) {
		this.dom = options.dom;
		this.dom.addClass('pagination');
		this.dom.html([
			'<span id="firstPage" class="disabled" title="第一页"><</span>',
			'<ul class="pagination-pageNumber">',
			'<li>1</li>',
			'</ul>',
			'<span id="lastPage" title="最后一页">></span>',
		].join(''));

		this.API = options.API;
		this.current = 1;
		this.size = 6;
		this.pages = 0;
		this.total = 0;
		this.render = options.render;
		this.init();
	}
	Pagination.prototype.init = function () {
		this.queryData();
		$(this.dom).on('click','.pagination-pageNumber li',this.onChange.bind(this));
		$(this.dom).on('click','#lastPage',this.onAddChange.bind(this));
		$(this.dom).on('click','#firstPage',this.onReduceChange.bind(this));
	}
	Pagination.prototype.queryData = function () {
		var request = $.ajax({
			url: this.API + '&pageNum=' + this.current + '&pageSize=' + this.size,
			type: 'get',
			context: this,
		});

		request.done(function (response) {
			var data = response.data;
			this.current = data.current;
			this.pages = data.pages;
			this.total = data.total;

			if (this.render) {
				this.render(response);
			}

			this.renderPageNumber();
		});
	}
	Pagination.prototype.renderPageNumber = function () {
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
					'<li class="currentNumber" title="'+ number +'">',
					number,
					'</li>'
				].join(''));
			} else {
				html.push([
					'<li title="'+ number +'">',
					number,
					'</li>'
				].join(''));
			}
		});
		$('.pagination-pageNumber', this.dom).html(html.join(''));
	}
	Pagination.prototype.getPrevPageNumber = function (count, array) {
		for (var index = count; index > 0; index--) {
			var number = this.current - index;
			if (number < 1) break;
			array.push(number);
		}
	}
	Pagination.prototype.getNextPageNumber = function (count, array) {
		for (var index = 0; index < count; index++) {
			var number = this.current + (index + 1);
			if (number > this.pages) break;
			array.push(number);
		}
	}
	Pagination.prototype.onChange = function (e) {
		var number = Number(e.target.title);
		if(number){
			this.current = number;
			this.queryData();
		}

		if(this.current == 1) {
			$('#firstPage').addClass('disabled');
		}
		if(this.current > 1) {
			$('#firstPage').removeClass('disabled');
		}
		if(this.current < this.pages){
			$('#lastPage').removeClass('disabled');
		}
		if(this.current == this.pages){
			$('#lastPage').addClass('disabled');
		}

	}

	Pagination.prototype.onAddChange = function (e) {
		if(this.current < this.pages){
			this.current += this.current;
			this.queryData();
			$('#lastPage').removeClass('disabled')
		}
		if(this.current == this.pages){
			$('#lastPage').addClass('disabled')
		}
		if(this.current > 1){
			$('#firstPage').removeClass('disabled')
		}
	}

	Pagination.prototype.onReduceChange = function (e) {
		if(this.current > 1){
			this.current = this.current - 1;
			this.queryData();
		}
		if(this.current != this.pages){
			$('#lastPage').removeClass('disabled')
		}
		if(this.current == 1){
			$('#firstPage').addClass('disabled')
		}
	}

	//点击预约门店、VR探店
	$(function(){
		$('.test_appoinment_button').click(function(){
			let text = $(this).text();
			if(text == '预约门店 >>'){
			}
			if(text == 'VR探店 >>'){
			}
		})
  });

	$(function(){
		//首页鼠标移动到预约门店、VR探店
		 $('.test_appoinment .content1 a div').on({
			 mouseover:function(){
				 var bottomLength = document.documentElement.clientHeight - $(this).offset().top;
				 var leftLength = $('.test_appoinment .content1').width();
				 $('.test-content_appoinment .qrcode').empty();
				 $('.test-content_appoinment .qrcode').qrcode({
					 render:'canvas',
					 text: 'https://www.muaskin.com/wx/?fallback=L3NraW5Ib3VzZWtlZXBlci9yZXNlcnZhdGlvbg%3D%3D&invite_code=7db1c97ffcf6ae7028bc8bcc530bafb9',
					 width:100,
					 height:100
				 });
				 $(".test-content_appoinment").css({
					 display:"block",
					 top:'-28px',
					 left:leftLength/2 - 65
				 })
				 $(".test-content_appoinment .qrcode").css({
					 marginLeft:'0.71em',
					 marginTop:'0.5em'
				 })
			},
			mouseout:function(){
				$(".test-content_appoinment").css("display","none")
			}
		 })
	})


	$(function(){
		$('.test_appoinment .content1').on({
			mouseover:function(){
				$('.test_appoinment .content1 a').css({
					display:'inline-block',
					width:$('.test_appoinment .content1 img').width(),
					height:$('.test_appoinment .content1 img').height(),
					top:'0',
					background:'rgba(0,0,0,0.4)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				})
		 },
		 mouseout:function(){
			 	$('.test_appoinment .content1 a').css({
					display:'none'
				})
		 }
		})

		$('.test_appoinment .content2').on({
			mouseover:function(){
				$('.test_appoinment .content2 a').css({
					display:'inline-block',
					width:$('.test_appoinment .content2').width(),
					height:$('.test_appoinment .content2').height() -4,
					top:'0',
					background:'rgba(0,0,0,0.5)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				})
		 },
		 mouseout:function(){
			 	$('.test_appoinment .content2 a').css({
					display:'none'
				})
		 }
		})
	});


	//swiper轮播图
	$(function () {
		var swiper = new Swiper();
		swiper.init();
	});

	var Swiper = function () {
	}

	Swiper.prototype.init = function() {
		var request = $.ajax({
			url: window.MC.HOST + '/api/pub/banner/records/Experience?enabled=1',
			type: 'get',
		});

		request.done(function (response) {
			var list = [];
			var html = [];
			if (response.code == 200) {
				// $('#footer').html(response.data.content);
				if(response.data.length > 0) {
					for(var i = 0; i < response.data.length; i++) {
						list.push({
							url: response.data[i].image ? JSON.parse(response.data[i].image)[0].url : ''
						})
					}
				}

				list.forEach(function (item, index) {
					if(index == 0){
						html.push([
							'<div class="swiper-slide swiper-slide-center none-effect">',
								'<a href="#">',
									'<img src='+ item.url +'>',
								'</a>',
								'<div class="layer-mask"></div>',
							'</div>',
						].join(''));
					} else {
						html.push([
							'<div class="swiper-slide">',
								'<a href="#">',
									'<img src='+ item.url +'>',
								 '</a>',
								'<div class="layer-mask"></div>',
							'</div>',
						].join(''));
					}
				})
				$('.swiper-wrapper').html(html.join(''));
			}
		});
	}

	window.Pagination = Pagination;
})(window);
