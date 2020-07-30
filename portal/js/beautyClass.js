; (function (window) {

  var flag = true //是否完成网络范围标识
  $(function () {
		var items = new Items();
		items.init();
	});

  var Items = function () {
    this.tabIndex = 7; //头部导航索引
    this.itemsData = {};
    this.knowledgeTotal = 0;  //美丽知识列表总条数
    this.knowledgeCurrent = 1;  //美丽知识当前页
    this.knowledgePages = 1;  //美丽知识总页数
    this.knowledgeList = []; //美丽知识列表
    this.videoList = []; //视频信息列表
    this.infomationList = []; //潮流资讯列表
    this.infomationTotal = 0;  //潮流资讯总数
    this.infomationCurrent = 1;  //潮流资讯当前页
    this.imfomationPages = 1;  //潮流资讯总页数
  }

  Items.prototype.init = function () {
    this.tabListDataJson();
    this.queryData();
    this.getBeautyKnowledge();
    this.getTrendInfomation();
    this.getVideoList();
    $('.knowledge_pagenation_number').on('click','li',this.KnowledgePageChange.bind(this));
    $('.knowledge_pagenation_continer').on('click','span',this.KnowledgePagePageChange.bind(this));
    $('.beauty_knowledge_list').on('click','.beauty_knowledge_item',this.getKnowledgeDetail);


    $('.trend_infomation_number').on('click','li',this.trendInfomationChange.bind(this));
    $('.trend_pagenation_continer').on('click','span',this.trendInfomationPageChange.bind(this));
    $('.trend_infomation_list').on('click','.beauty_knowledge_item',this.getTrendDetail);
 }


 // 加载头部tab
 Items.prototype.tabListDataJson = function () {
   var that = this;
   //mall.smallsaas.cn
   $.getJSON(window.MC.HOST+"/api/pub/ow/father", "", function (data){
     // console.log("json data = ", data);
     if(data.code != 200){
       console.log("tab list api error");
       return;
     }
     var tabList = data.data;
     var html = [];
     // $('.head_tabs').addClass('head_tabs');
     tabList.forEach(function (item, i) {
       if(tabIndex == item.id){
         html.push([
           '<a href='+ item.html + '>'+
     				'<li id="nav-'+ item.id +'" class="active" ><span>'+ item.name+'</span></li>'+
     				'<div class="nav_line"></div>'+
     			'</a>'
         ].join(''));
       }else{
         html.push([
           '<a href='+ item.html + '>'+
     				'<li id="nav-'+ item.id +'" ><span>'+ item.name+'</span></li>'+
     				'<div class="nav_line"></div>'+
     			'</a>'
         ].join(''));
       }

     })
     $('.head_tabs').html(html.join(''));
     $.getScript("js/tabBar.js",function(){  //加载test.js,成功后，并执行回调函数
       console.log("加载tabbar");
     });
   })
	}


 //获取美丽知识详情
 Items.prototype.getKnowledgeDetail = function (e) {
   var id = this.id.length > 0 && this.id.split('-').length > 1 ? this.id.split('-')[1] : '';
   window.location.href = 'beautyClassDetail.html?id=' + id + '&type=Knowledge'
 }
//获取潮流资讯详情
 Items.prototype.getTrendDetail = function () {
   console.log('GGGFF ',this);
   var id = this.id.length > 0 && this.id.split('-').length > 1 ? this.id.split('-')[1] : '';
   window.location.href = 'beautyClassDetail.html?id=' + id + '&type=trend'
 }

  //获取美丽知识数据
  Items.prototype.getBeautyKnowledge = function () {
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/website/info?type=LORE&pageSize=3&pageNum=' + this.knowledgeCurrent,
      type: 'get',
      context: this,
    });

    request.done(function (response) {
      this.knowledgeList = response.data.records;
      this.knowledgeTotal = response.data.total;
      this.knowledgePages = response.data.pages;
      this.knowledgeCurrent = response.data.current;

      var optionData = {
        pages: response.data.pages,
      }

      this.renderBeautyKnowledge(optionData)
		});

    // var responseData = {
    //   code:200,
    //   data:{
    //     records:[
    //       {
    //         icon:'./img/images/product_1.png',
    //         title:'致我们单纯的小美好,这部校园青春网络剧，想必大家都不会陌生致我们单纯的小美好,这部校园青春网络剧，想必大家都不会陌生致我们单纯的小美好,这部校园青春网络剧，想必',
    //         content:'	剧中主演人员胡一天、沈月等相继走红，冷酷帅气学霸男主与呆萌可爱学渣女主永远是标配呀。尤其是胡一，\
    //           他成为了新一代“国民男神”，被誉为新版“江直树”，各种媒体通告邀约不断，真可谓是一夜成名。他成为了新一代“国民男神”，被誉为新版“江直树”，各种媒体通告邀约不断，真可谓',
    //         time:'2019/3/12'
    //       },
    //       {
    //         icon:'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
    //         title:'22222',
    //         content:'bbbbbbbbbbbbbbbbbbb',
    //         time:'2019/3/12'
    //       },
    //     ],
    //     current:1,
    //     total:2,
    //     pages:1,
    //   }
    // }
  }

  //渲染美丽知识列表
  Items.prototype.renderBeautyKnowledge = function (optionData) {
    // console.log('HHHHHH optionData = ',optionData);
    var currentPage = this.knowledgeCurrent;
    var html = [];
    var listData = [];
    if(this.knowledgeList.length > 0){
      for(var i = 0;i < this.knowledgeList.length; i++){
        var data = {
          cover: this.knowledgeList[i].cover ? JSON.parse(this.knowledgeList[i].cover)[0].url : '',
          summary: this.knowledgeList[i].summary || '',
          title:this.knowledgeList[i].title || '',
          createdTime:this.knowledgeList[i].createdTime || '',
          id:this.knowledgeList[i].id || ''
        }
        listData.push(data)
      }
    }

    console.log('listData ==== ',listData);
    listData.forEach(function (item) {
      html.push([
            "<div class='beauty_knowledge_item' id='knowledge-" + item.id + "'>",
              "<div class='beauty_knowledge_item_left'>",
                "<div class='beauty_knowledge_item_image' style='background-image:url("+ item.cover +")'></div>",
              "</div>",
              "<div class='beauty_knowledge_item_content'>",
                "<div>"+ item.title +"</div>",
                "<div class='item_content'>"+ item.summary +"</div>",
                "<div>"+ item.createdTime +"</div>",
              "</div>",
            "</div>",
      ].join(''));
    })
    $('.beauty_knowledge_list').html(html.join(''));
    // $('.knowledge_pagenation_total').text('共'  + this.knowledgeTotal + ' ' + '条记录');

    //渲染页码
    var pageList = [];
    var pagesHtml = [];
    if(optionData.pages > 1){
      for(var i = 1; i <= optionData.pages; i++){
        pageList.push(i);
      }
    } else {
      pageList = [1]
    }
console.log('WWWW pageList = ',pageList);
    pageList.forEach(function (item) {
      if(currentPage == item){
        pagesHtml.push([
          '<li title='+item+' class="current_page">'+ item +'</li>',
        ])
      } else {
        pagesHtml.push([
          '<li title='+item+'>'+ item +'</li>',
        ])
      }
    })
    $('.knowledge_pagenation_number').html(pagesHtml.join(''));
  }

  //对美丽知识分页
  Items.prototype.KnowledgePageChange = function (e) {
    console.log('kkjjj ',e.target.title);
    this.knowledgeCurrent = Number(e.target.title);
    this.getBeautyKnowledge()
  }

  Items.prototype.KnowledgePagePageChange = function (e) {
    if(e.target.title == 'left' && this.knowledgeCurrent == 1) {
      return;
    }
    if(e.target.title == 'right' && this.knowledgeCurrent == this.knowledgePages) {
      return;
    }
    if(e.target.title == 'left' && this.knowledgeCurrent > 1){
      this.knowledgeCurrent --
    }
    if(e.target.title == 'right' && this.knowledgeCurrent < this.knowledgePages){
      this.knowledgeCurrent ++
    }
    this.getBeautyKnowledge()
  }

  //获取潮流资讯
    Items.prototype.getTrendInfomation = function () {
      console.log('77777');
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/website/info?type=FASHION&pageSize=3&pageNum=' + this.infomationCurrent,
      type: 'get',
      context: this,
    });
    // var responseData = {
    //   code:200,
    //   data:{
    //     records:[
    //       {
    //         icon:'./img/images/product_1.png',
    //         title:'致我们单纯的小美好,这部校园青春网络剧，想必大家都不会陌生致我们单纯的小美好,这部校园青春网络剧，想必大家都不会陌生致我们单纯的小美好,这部校园青春网络剧，想必',
    //         content:'	剧中主演人员胡一天、沈月等相继走红，冷酷帅气学霸男主与呆萌可爱学渣女主永远是标配呀。尤其是胡一，\
    //           他成为了新一代“国民男神”，被誉为新版“江直树”，各种媒体通告邀约不断，真可谓是一夜成名。他成为了新一代“国民男神”，被誉为新版“江直树”，各种媒体通告邀约不断，真可谓',
    //         time:'2019/3/12'
    //       },
    //       {
    //         icon:'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
    //         title:'33333',
    //         content:'bbbbbbbbbbbbbbbbbbb',
    //         time:'2019/3/12'
    //       },
    //     ],
    //     current:1,
    //     total:2,
    //     pages:1,
    //   }
    // }

    request.done(function (response) {
      this.infomationList = response.data.records;
      this.infomationTotal = response.data.total;
      this.imfomationPages = response.data.pages;
      this.infomationCurrent = response.data.current;
      var optionData = {
        pages: response.data.pages,
      }
      this.renderTrendInfomation(optionData)
    });
  }

  //渲染潮流资讯列表
  Items.prototype.renderTrendInfomation = function (optionData) {
    var currentPage = this.infomationCurrent;
    var html = [];
    var listData = [];
    if(this.infomationList.length > 0){
      for(var i = 0;i < this.infomationList.length; i++){
        var data = {
          cover: this.infomationList[i].cover ? JSON.parse(this.infomationList[i].cover)[0].url : '',
          summary: this.infomationList[i].summary || '',
          title:this.infomationList[i].title || '',
          createdTime:this.infomationList[i].createdTime || '',
          id:this.infomationList[i].id || ''
        }
        listData.push(data)
      }
    }
    listData.forEach(function (item) {
      html.push([
          "<div class='beauty_knowledge_item' id='trend-" + item.id + "'>",
            "<div class='beauty_knowledge_item_left'>",
              "<div class='beauty_knowledge_item_image' style='background-image:url("+ item.cover +")'></div>",
            "</div>",
            "<div class='beauty_knowledge_item_content'>",
              "<div>"+ item.title +"</div>",
              "<div class='item_content'>"+ item.summary +"</div>",
              "<div>"+ item.createdTime +"</div>",
            "</div>",
          "</div>",
      ].join(''));
    })
    $('.trend_infomation_list').html(html.join(''));
    // $('.knowledge_pagenation_total').text('共'  + this.infomationTotal + ' ' + '条记录');

    //渲染页码
    var pageList = [];
    var pagesHtml = [];
    for(var i = 1; i <= optionData.pages; i++){
      pageList.push(i);
    }
    pageList.forEach(function (item) {
      if(currentPage == item){
        pagesHtml.push([
          '<li title='+item+' class="current_page">'+ item +'</li>',
        ])
      } else {
        pagesHtml.push([
          '<li title='+item+'>'+ item +'</li>',
        ])
      }
    })
    $('.trend_infomation_number').html(pagesHtml.join(''));
  }

  //对潮流资讯分页
  Items.prototype.trendInfomationChange = function (e) {
    console.log('333 ',e.target.title);
    this.infomationCurrent = Number(e.target.title);
    this.getTrendInfomation()
  }

  Items.prototype.trendInfomationPageChange = function (e) {
    console.log('TRRRR e = ',e.target.title,this.infomationCurrent);
    if(e.target.title == 'left' && this.infomationCurrent == 1) {
      return;
    }
    if(e.target.title == 'right' && this.infomationCurrent == this.imfomationPages) {
      return;
    }
    if(e.target.title == 'left' && this.infomationCurrent > 1){
      this.infomationCurrent --
    }
    if(e.target.title == 'right' && this.infomationCurrent < this.imfomationPages){
      this.infomationCurrent ++
    }
    console.log('uuuuuuu ',this.infomationCurrent);
    this.getTrendInfomation()
  }


  Items.prototype.queryData = function () {
    var id = 1;
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/ow/pages/one/account',
      type: 'get',
      context: this,
    });
		request.done(function (response) {
      $('#renderHTML').html(response.data.content || '')
		});
	}

  // 获取视频
  Items.prototype.getVideoList = function(){
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/stock/images/owner?ownerId=1&ownerType=website',
      type: 'get',
      context: this,
    })
    request.done(function (response) {
      console.log('******** response = ',response);
      if(response.code == 200){
        flag = true;
        this.videoList = response.data;
        // this.renderBeautyVideoPage(this.videoList);
      }else{
        flag = false;
      }
		});

    var responseData = {
      code:200,
      records:[{
          id:1,
          name:'视频1',
          videoUrl:'mp4/3.mp4',
          videoImgUrl:'img/beautyClass/video_2.jpg'
        },{
          id:2,
          name:'视频2',
          videoUrl:'mp4/2.mp4',
          videoImgUrl:'img/beautyClass/video_1.png'
        },{
          id:3,
          name:'视频3',
          videoUrl:'mp4/1.mp4',
          videoImgUrl:'img/beautyClass/video_3.png'
        },
        {
            id:4,
            name:'视频1',
            videoUrl:'mp4/3.mp4',
            videoImgUrl:'img/beautyClass/video_2.jpg'
          },{
            id:5,
            name:'视频2',
            videoUrl:'mp4/2.mp4',
            videoImgUrl:'img/beautyClass/video_1.png'
          }
      ]
    }

    // this.videoList = responseData.records;
    // this.renderBeautyVideoPage(responseData.records);
    var dataList = responseData.records;
    // previewListCssHandle(dataList);
    this.renderBeautyVideoPage(dataList);
  }

  Items.prototype.renderBeautyVideoPage = function(list){
    // console.log('list===',list);
    var videoHtml = [];
    var tabHtml = [];
    list.forEach(function(item, index){

      var i = index + 1;
      //视频
      videoHtml.push(
        "<div class='swiper-slide'>" +
          "<video controls id='js_videoCon_"+ i +"' class='js_videoCon' src='"+ item.videoUrl +"' height='400px' type='video/mp4' />" +
        "</div>"
      )

      //视频导航列表
      if(i == 1){
        tabHtml.push([
          "<div class='swiper-slide active-nav' vid='"+ (i-1) +"'>",
            "<img src='"+ item.videoImgUrl +"' alt=''>",
            "<span>" + item.id + "</span>",
          "</div>"
        ].join(''));
      }else{
        tabHtml.push([
          "<div class='swiper-slide' vid='"+ (i-1) +"'>",
            "<img src='"+ item.videoImgUrl +"' alt=''>",
            "<span>" + item.id + "</span>",
          "</div>"
        ].join(''));
      }
    })

    $('.view .swiper-wrapper').html(videoHtml.join(''));
    $('.preview .swiper-wrapper').html(tabHtml.join(''));
  }

  var loadSwiperPlugin;
  loadSwiperPlugin = setInterval(function() {//定时检测

    if(flag) {//如果数据已经处理完毕
      //加载你的js文件,或者想原生控制的js代码。
      runSwiperPlugin();
      clearTimeout(loadSwiperPlugin);//取消定时检测节省开销
    }
  },300);

  //swiper jq
  var runSwiperPlugin = function(){

    var viewSwiper = new Swiper('.view .swiper-container', {
      onSlideChangeStart: function() {
        updateNavPosition()
      }
    })

    $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
      e.preventDefault()
      if (viewSwiper.activeIndex == 0) {
        viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
        return
      }
      viewSwiper.slidePrev()
    })
    $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
      e.preventDefault()
      if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
        viewSwiper.slideTo(0, 1000);
        return
      }
      viewSwiper.slideNext()
    })

    var previewSwiper = new Swiper('.preview .swiper-container', {
      //visibilityFullFit: true,
      slidesPerView: 'auto',
      allowTouchMove: false,
      onTap: function() {
        viewSwiper.slideTo(previewSwiper.clickedIndex)
      }
    })

    function updateNavPosition() {

      $('.preview .active-nav').removeClass('active-nav')
      var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')

      // var vid = activeNav.attr("vid");
      // $(".js_videoCon").hide();
      // if(vid > 0){
      //   $("#js_videoCon_"+vid).show();
      // }

      if (!activeNav.hasClass('swiper-slide-visible')) {
        if (activeNav.index() > previewSwiper.activeIndex) {
          var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
          previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
        } else {
          previewSwiper.slideTo(activeNav.index())
        }
      }
    }

  }

  // 处理视频列表宽度
  function previewListCssHandle(list){
    var pWidth = $('.previewContent .swiper-wrapper').width();
    var listCount = 87 * list.length;
    if(listCount < pWidth){
      $('.previewContent .swiper-wrapper').css('justify-content','center');
    }
  }

})(window);
