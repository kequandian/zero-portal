;
(function (window) {
	$.ajaxSetup({
		xhrFields: {
			'Access-Control-Allow-Origin': '*',
			// withCredentials: true,
		}
	});

	// const hrefList = location.href.split('/');
	// let pathname = '';
	// if (hrefList[hrefList.length - 1].indexOf('?') == -1) {
	// 	pathname = hrefList[hrefList.length - 1]
	// } else {
	// 	pathname = hrefList[hrefList.length - 1].split('?')[0]
	// }
	// if (pathname.indexOf('#') > -1) {
	// 	pathname = pathname.split('#')[0]
	// }
	// if (pathname != 'index.html' && pathname != 'about.html' && pathname != 'test.html'
	// 		&& pathname != 'product.html' && pathname != 'ingredient.html' && pathname != 'beautyClass.html'
	// 		&& pathname != 'vipCenter.html' && pathname != 'addIndex.html' && pathname != 'productDetails.html'
	// 		&& pathname != 'page.html' && pathname != 'beautyClassDetail.html') {
	// 			console.log('AAA');
	// 			window.location.href = '404.html'
	// }

	window.parentTitle = '';

	window.SearchObject = function (name) {
		var searchString = window.location.search.replace('?', '');
		var searchArray = searchString.split('=');

		// var index = searchArray.findIndex(function (item) {
		// 	return item === name;
		// });

		var index = -1;
		for(var i = 0; i < searchArray.length; i++){
			if(searchArray[i] == 2){
				if(index == -1){
					index = i
				}
			}
		}
		return searchArray[index + 1];
	}

	//当设备屏幕小于1800时
	$(function(){
		if($(window).width() >= 1920){
			$('.roof-text').css({
				paddingLeft:'18vw',
			})
			$('.stern-dec').css({
				paddingLeft:'18vw',
			})
			$('.stern-backtop').css({
				paddingRight:'18vw'
			})

			$('.fixed-content-item').css({
				padding:'16px',
			})
		}
	})

	//控制导航栏固定
	$(window).scroll(function(){
		//识别是否为IE浏览器及版本
		function IEVersion() {
			 var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
			 var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
			 var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
			 var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
			 if(isIE) {
					 var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
					 reIE.test(userAgent);
					 var fIEVersion = parseFloat(RegExp["$1"]);
					 if(fIEVersion == 7) {
							 return 7;
					 } else if(fIEVersion == 8) {
							 return 8;
					 } else if(fIEVersion == 9) {
							 return 9;
					 } else if(fIEVersion == 10) {
							 return 10;
					 } else {
							 return 6;//IE版本<=7
					 }
			 } else if(isEdge) {
					 return 'edge';//edge
			 } else if(isIE11) {
					 return 11; //IE11
			 }else{
					 return -1;//不是ie浏览器
			 }
		}

		// if($(document).scrollTop() > $('.roof-text').outerHeight()){

		if($(document).scrollTop() > $('.roof-text').outerHeight()){
			var headerHight = $('#header').height();
			// console.log('((((()))))',$('#section_content').height(),headerHight);

			$('.body').css({
				minHeight:'100vh'
			})
			$('.body_content').css({
				paddingTop:headerHight
			})
			$('.nav>ul').css({
				height:headerHight
			})
			$('.nav-menu').css({
				top: '64px'
			})
			$('.nav_line').css({
				marginTop:'0'
			})
			// $('.roof-text').css({
			// 	display:'none',
			// })
			$('#header').css({
				padding:'0',
				position:'fixed',
				zIndex:'999',
				top:0,
			})
		}
		if($(document).scrollTop() == 0) {
			$('.body').css({
				minHeight:'100vh'
			})
			$('.nav').css({
				position:'relative',
			})
			$('header').css({
				marginTop: '0px'
			});
			$('.nav>ul').css({
				height:headerHight
			})
			$('.roof-text').css({
				display:'block'
			})

			$('#header').css({
				padding:'12px 0',
				position:'relative',
			})
			$('.nav-menu').css({
				top: '75px'
			})
			$('.nav_line').css({
				marginTop:'12px'
			})
			$('.body_content').css({
				paddingTop:0
			})
		}
	})

	$(function () {
		var topNav = new Nav();
		topNav.init();
		if (window.OsSlider && window.CarouselUrl) {
			getCarouselList(window.CarouselUrl);
		}
		if (window.OsSlider && window.CarouselList) {
			initCarousel(window.CarouselList);
		}
		if (window.RichTextUrl) {
			renderRichText(window.RichTextUrl);
		}

		initFooter()
		renderCommom();
	});

	function renderCommom(){
		//首页鼠标移动到app下载、预约门店时
		 $('.fixed-content .fixed-content-item').on({
			 mouseover:function(){
				 var text = $(this).find('span').text();
				 var url = $(this).find('img').attr('src');
				 if(text == '在线咨询'){
					 $(".qrcode-content").css("display","none")
				 } else {
					 $('.qrcode-content .qrcode').empty();
					 var textUrl = text == '预约门店' ? 'https://www.muaskin.com/wx/?fallback=L3NraW5Ib3VzZWtlZXBlci9yZXNlcnZhdGlvbg%3D%3D&invite_code=7db1c97ffcf6ae7028bc8bcc530bafb9' : 'https://www.muaskin.com/download/';
					 $('.qrcode-content .qrcode').qrcode({
						 render:'canvas',
						 text: textUrl,
						 width:100,
						 height:100
					 });
					 $(".qrcode-content").css({
						 display:"block",
						 padding:"0.5em 0.2em",
					 })
					 $(".qrcode-content .qrcode").css({
						 marginLeft:"0.6em",
					 })
					 if(text == 'APP下载'){
						 if($(window).width() >= 1920){
							 $(".qrcode-content").css({
								 top:'55vh',
								 marginTop:'70px',
								 marginRight:'10px'
							 })
						 } else {
							 $(".qrcode-content").css({
								 top:'55vh',
								 marginTop:'42px'
							 })
						 }
					 } else {
						 if($(window).width() >= 1920){
							 $(".qrcode-content").css({
								 top:'55vh',
								 marginTop:'-28px',
								 marginRight:'10px'
							 })
						 } else {
							 $(".qrcode-content").css({
								 top:'55vh',
								 marginTop:'-35px'
							 })
						 }
					 }
				 }
			},
			mouseout:function(){
				$(".qrcode-content").css({
					display:"none",
					marginTop:'0'
				})
			}
		 })

		 //底部图标获取焦点
		$('.imfomation-icon>div').on({
			mouseover:function(){
				var bottomLength = document.documentElement.clientHeight - $(this).offset().top;
				var text = $(this).find('span').text();
				if(text == '服务号'){
					$('.icon_hover_show .qrcode_public').css({
						display:'none',
					})
					$('.icon_hover_show .qrcode_servers').css({
						display:'inline-block',
					})
				}
				if(text == '公众号'){
					$('.icon_hover_show .qrcode_servers').css({
						display:'none',
					})
					$('.icon_hover_show .qrcode_public').css({
						display:'inline-block',
					})
				}
				$('.icon_hover_show').css({
					display:"block",
					left:$(this).position().left - 30,
					bottom:bottomLength + 20,
				})
		 },
		 mouseout:function(){
			  $(".icon_hover_show").css("display","none");
		 }
		})
	}

	function initFooter(){
		var request = $.ajax({
			url: window.MC.HOST + '/api/pub/ow/pages/one/footer',
			type: 'get',
		});

		request.done(function (response) {
			if (response.code === 200) {
				$('#footer').html(response.data.content);
			}
		});
	}

	function hoverAlign(data,b){
		var length = $('.carousel_origin_list>span').length; // 4

		if(b == 'right'){
			if(data == 0){
				$('.carousel_origin_list>span').eq(0).css({
					backgroundColor:'#b99c56'
				})
				$('.carousel_origin_list>span').eq(length-1).css({
					backgroundColor:'#fff'
				})
			}
			if(data > 0 && data < length-1){
				$('.carousel_origin_list>span').eq(data).css({
					backgroundColor:'#b99c56'
				})
				$('.carousel_origin_list>span').eq(data-1).css({
					backgroundColor:'#fff'
				})
			}
			if(data == length-1){
				$('.carousel_origin_list>span').eq(length-1).css({
					backgroundColor:'#b99c56'
				})
				$('.carousel_origin_list>span').eq(length-2).css({
					backgroundColor:'#fff'
				})
			}
		}
		if(b == 'left'){
			if(data == 0){
				$('.carousel_origin_list>span').eq(0).css({
					backgroundColor:'#b99c56'
				})
				$('.carousel_origin_list>span').eq(1).css({
					backgroundColor:'#fff'
				})
			}
			if(data > 0 && data < length-1){
				$('.carousel_origin_list>span').eq(data).css({
					backgroundColor:'#b99c56'
				})
				$('.carousel_origin_list>span').eq(data+1).css({
					backgroundColor:'#fff'
				})
			}
			if(data == length-1){
				$('.carousel_origin_list>span').eq(data).css({
					backgroundColor:'#b99c56'
				})
				$('.carousel_origin_list>span').eq(data-1).css({
					backgroundColor:'#fff'
				})
				$('.carousel_origin_list>span').eq(0).css({
					backgroundColor:'#fff'
				})
			}
		}


	}


	function getCarouselList(api) {
		var request = $.ajax({
			url: window.MC.HOST + api,
			type: 'get',
		});

		request.done(function (response) {
			if (response.code === 200) {
				var urlList = response.data.map(function (item) {
					var url = '';
					try {
						url = JSON.parse(item.image)[0].url;
					} catch (error) { }
					return {
						url:url,
						targetUrl: item.targetUrl,
					};
				});
				initCarousel(urlList);
			}
		});
	}
	function initCarousel(list) {
		var urlList = list.filter(function (item) {
			return item.url;
		});

		var html = [];
		var originHtml = [];
		var img = new Image();
		img.src = urlList.length > 0 ? urlList[0].url : '';

		img.onload = function () {
			$('.imgItem').css({
				height: 'auto',
				width: '100%',
			});

			var carousel = new OsSlider({
				container: $('.carousel'),
				main: $('.carousel ul'),
				item: $('.carousel li'),
				prev: $('.carousel-prev'),
				next: $('.carousel-next'),
				width: $('.body_content').width(),
				// height: img.height,
				auto: true,
				loop: true,
				afterSlideCallback: function(data,b) {
					 hoverAlign(data,b)
				}
			});
			carousel.init();
		}

		urlList.forEach(function (item, index) {
			html.push([
				'<li>',
				// '<div class="imgItem" style="height:'+ img.height +',background-image:url(' + item.url + ')"></div>',
				'<img class="imgItem" src="' + item.url + '"/>',
				'</li>',
			].join(''));
			originHtml.push([
				'<span class="carousel_align_'+index+'"></span>'
			])
		})

		$('.carousel-list').html(html.join(''));
		$('.carousel_origin_list').html(originHtml.join(''))
	}

	//定位轮播图的图标位置
	$(function(){
		var imageHeight = 0;
		var setArraw = setInterval(function(){
			// var toTopHeight = $('.carousel-list').offset().top;  //轮播图距离顶部的高度
			var topHeight = $('.carousel-list li').height();  //轮播图每张的高度
			if($('.carousel-list li').length > 1 && topHeight > 0){
				getHeight(topHeight)
				//设置轮播图的点的位置
			}
			if($('.carousel-list li').length < 1){
				$('.carousel_arrows').css({
					display:'none'
				})
				$('.carousel_origin_list').css({
					display:'none'
				})
			}
			if(topHeight > 0){
				clearInterval(setArraw)
			}
		},1000)
		//设置轮播图左右箭头的位置
		function getHeight(data) {
			$('.carousel_arrows').css({
				top:data/2 - 40,
			})
			$('.carousel_origin').css({
				top:$('.carousel-list li').height() - 50,
			})
		}
	})

	$(function(){
		//最顶部距离左边的距离
		var offsetLeft = parseInt($(".roof-text").css("paddingLeft"));
		var logoLeft = $('.nav-logo').offset().left;

		$('.nav-logo').css({
			marginLeft: offsetLeft-logoLeft,
		})

		//设置page页富文本的对齐方式
		if($(window).width() <= 1920){
			$('#renderHTML.page').css({
				paddingLeft: offsetLeft,
				paddingRight:offsetLeft,
			})
			$('.beauty_detail').css({
				marginLeft: offsetLeft,
				marginRight:offsetLeft,
			})
		}

		if(location.pathname.indexOf('index.html') == -1){
			var leftLength = offsetLeft - logoLeft;
			$('.common_crumbs').css({
				marginLeft:offsetLeft,
			})
		}

		$('.carousel_arrows').on({
			mouseover:function(){
				$('.carousel-prev img').css({
					display:'inline-block'
				})
				$('.carousel-next img').css({
					display:'inline-block'
				})
				if($(window).width() > 1920 + 300){
					// var leftLength = $('.carousel-prev').width();
					var allWidth = $('.nav').width();
					$('.carousel_arrows').css({
						width:allWidth + 300,
						left: '-150px'
					})
				}
			},
			mouseout:function(){
				$('.carousel-prev img').css({
					 display:'none'
				})
				$('.carousel-next img').css({
					 display:'none'
				})
				if($(window).width() > 1920 + 300){
					var leftLength = $('.carousel-prev').width();
					var allWidth = $('.nav').width();
					$('.carousel_arrows').css({
						width:allWidth + 300,
						left: '-150px'
					})
				}
			}
		})
	})

	function renderRichText(api) {

		var request = $.ajax({
			url: window.MC.HOST + api,
			type: 'get',
		});

		request.done(function (response) {
			if (response.code === 200) {
				$('#renderHTML').html(response.data.content);
				// if(location.pathname.indexOf(about.html != -1)){
				// 	if(!response.data.content){
				// 		$('.about_vedio_back').css({
				// 			padding:'0'
				// 		})
				// 	}
				// }
			}
		});
		//APP下载与咨询
	 $('.index_consult_item_left a').on({
		 mouseover:function(){
			 var bottomLength = document.documentElement.clientHeight - $(this).offset().top;
			 var text = $(this).find('span').text();
			 var textUrl = 'https://www.muaskin.com/wx/';
			 $('.icon_hover_show_left .icon_hover_qrcode_left').empty();

			 $('.icon_hover_show_left .icon_hover_qrcode_left').qrcode({
				 render:'canvas',
				 text: textUrl,
				 width:100,
				 height:100
			 });

			 $('.icon_hover_show_left').css({
				 display:"block",
				 bottom:50,
			 })

		},
		mouseout:function(){
			$(".icon_hover_show_left").css("display","none");
		}
	 })

	 $('.index_consult_item_right a').on({
		 mouseover:function(){
			 var bottomLength = document.documentElement.clientHeight - $(this).offset().top;
			 var text = $(this).find('span').text();
			 var textUrl = 'https://www.muaskin.com/wx/';
			 $('.icon_hover_show_right .icon_hover_qrcode_right').empty();

			 $('.icon_hover_show_right .icon_hover_qrcode_right').qrcode({
				 render:'canvas',
				 text: textUrl,
				 width:100,
				 height:100
			 });

			 $('.icon_hover_show_right').css({
				 display:"block",
				 bottom:50,
			 })
		},
		mouseout:function(){
			$(".icon_hover_show_right").css("display","none");
		}
	 })

	}



	//面包屑处理
	$(function() {
		const data = {
			index:'首页',
			about:'关于i-Softto',
			test:'智慧测肤',
			product:'产品中心',
			ingredient: '成分天地',
			vipCenter: '会员中心',
			beautyClass: '精准护肤课堂',
			dynamic:'最新动态',
		}

		const secondData = {
			'品牌介绍':'关于i-Softto&about.html',
			'品牌故事':'关于i-Softto&about.html',
			'品牌特色':'关于i-Softto&about.html',
			'加入会员':'会员中心&vipCenter.html',
			'会员臻享':'会员中心&vipCenter.html',
			'在线测试':'会员中心&vipCenter.html',
			'检测报告':'会员中心&vipCenter.html',
			'我的美肤方案':'会员中心&vipCenter.html',
			'我的美肤方案':'会员中心&vipCenter.html',
			'Knowledge':'精准护肤课堂&beautyClass.html',
			'trend':'精准护肤课堂&beautyClass.html',
			'动态详情':'最新动态&dynamic.html',
		}

		//获取一级索引
		var title = location.pathname ? location.pathname.split('.') : [];
		title = title.length > 0 ? title[0].split('/') : [];
		title = title.length > 0 ? title[title.length-1] : '';

		//获取二级索引
		var parameterTitle = location.search ? location.search.split('=') : [];
		parameterTitle = parameterTitle.length > 0 ? parameterTitle[parameterTitle.length-1] : '';
		parameterTitle = parameterTitle ? decodeURIComponent(parameterTitle) : '';

		if(data[title]){
			$('.common_crumbs .crumbs_two').text(' > ' + data[title]);
			if(title == 'test' || title == 'ingredient'){
				$('.storeMapAndList').addClass('expend_margin');
				$('.items-list').addClass('expend_margin');
			}
		}

		if(secondData[parameterTitle]){
			$('.common_crumbs .crumbs_two').text(' > ' + secondData[parameterTitle].split('&')[0]);
			$('.common_crumbs .crumbs_three').text(' > ' + parameterTitle);
			$('.common_crumbs .crumbs_two').click(function(){
				$('.common_crumbs .crumbs_two').attr("href",secondData[parameterTitle].split('&')[1])
				window.location.href = secondData[parameterTitle].split('&')[1]
			})
		}

		if(location.href.indexOf('addIndex') > -1){
			$('.common_crumbs .crumbs_two').text(' > ' + '精准护肤');
		}

		if(location.pathname.indexOf('classdes') > -1){
			// var type = location.search.split('&')[1].toString().split('=')[1];
			var text = '';
			if(window.localStorage.pageTitle == 'Knowledge'){
				text = '美丽知识详情'
			}
			if(window.localStorage.pageTitle == 'trend'){
				text = '潮流资讯详情'
			}
			if(text){
				$('.common_crumbs .crumbs_two').text(' > ' + '精准护肤课堂');
				$('.common_crumbs .crumbs_three').text(' > ' + text);
				$('.common_crumbs .crumbs_two').css({
	        cursor:'pointer'
	      })
				$('.common_crumbs .crumbs_two').click(function(){
					$('.common_crumbs .crumbs_two').attr("href",'beautyClass.html')
					window.location.href = 'beautyClass.html'
				})
			}
		}
	})

	//回到顶部操作
	$(function(){
		 $('.fixed-content-item-goTop').click(function(){
         $('html , body').animate({scrollTop: 0},'slow');
     });
     $('.stern-backtop a').click(function(){
         $('html , body').animate({scrollTop: 0},'slow');
     });
  });

	//搜索框操作
	$(function(){
		$('.search input').focus(function(){
			$('.search').css('border','none')
		})
		$('.search input').blur(function(){
			$('.search').css('borderBottom','1px solid #000');
			$(this).val('');
		})

		// $('.search input').change(function(e){
		// 	var request = $.ajax({
		// 		url: window.MC.HOST + '/api/pub/ow/pages/one/footer?searchText=' + e.target.value,
		// 		type: 'get',
		// 	});
		//
		// 	request.done(function (response) {
		// 		if (response.code === 200) {
		//
		// 		}
		// 	});
		// })

	})

	var Nav = function () {
		this.nav = $('.nav');
		this.navMenu = $('.nav-menu');
		this.navItem = $('.nav-2');
		this.data = [];
		this.id = null; //当前激活的 一级导航
		this.hover = false;
	}
	Nav.prototype.init = function () {
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
			window.parentTitle = $(this).find('span').text();
			var lineWidth = $(this).children().width();
			var left = $(this).position().left;
			var width = $(this).outerWidth();
			_this.renderContainer(left, width,false,lineWidth);
		}, function () {
			setTimeout(function () {
				_this.renderContainer(0, 0, true);
			}, 200);
		});

		$('.nav-menu').hover(function () {
			_this.hover = true;
		}, function () {
			_this.hover = false;
			_this.renderContainer(0, 0);
		});
		$('.nav-menu').on('click', 'li', this.onClick);

		this.fetch();

	}
	Nav.prototype.fetch = function () {
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

	Nav.prototype.renderContainer = function (left, width, boolean,lineWidth) {

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
		if(left != 0){
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
						var id = SearchObject('id') || -2;
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
	Nav.prototype.onClick = function () {
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
			// window.location.href = 'page.html?id=' + pageId + '&parent=' + 'ing';
			window.localStorage.pageTitle = $(this).text();
			// window.location.href = 'page.html?id=' + pageId + '&title=' + $(this).text() + '&parent=' + window.parentTitle;
			window.location.href = 'page' + '-' +  pageId + '.html'
		} else {
			if (hrefMap[menuText]){
				window.location.href = hrefMap[menuText];
			}

		}
	}

})(window);
