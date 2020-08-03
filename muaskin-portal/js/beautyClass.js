; (function (window) {

  var flag = true //是否完成网络范围标识
  $(function () {
		var items = new Items();
		items.init();
	});

  var Items = function () {
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


 //获取美丽知识详情
 Items.prototype.getKnowledgeDetail = function (e) {
   var id = this.id.length > 0 && this.id.split('-').length > 1 ? this.id.split('-')[1] : '';
   window.location.href = 'classdes-' + id + '.html';
   window.localStorage.pageTitle = 'Knowledge'
 }
//获取潮流资讯详情
 Items.prototype.getTrendDetail = function () {
   var id = this.id.length > 0 && this.id.split('-').length > 1 ? this.id.split('-')[1] : '';
   window.location.href = 'classdes-' + id + '.html';
   window.localStorage.pageTitle = 'trend'
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
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/website/info?type=FASHION&pageSize=3&pageNum=' + this.infomationCurrent,
      type: 'get',
      context: this,
    });

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
    this.infomationCurrent = Number(e.target.title);
    this.getTrendInfomation()
  }

  Items.prototype.trendInfomationPageChange = function (e) {
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
    let listData = [];
    var request = $.ajax({
      url: window.MC.HOST + '/api/pub/ow/images/owner?ownerId=1&ownerType=website',
      type: 'get',
      context: this,
    })
    request.done(function (response) {
      if(response.code == 200){
        flag = true;
        if(response.data && response.data.length > 0){
          for(var i = 0; i < response.data.length; i++){
            response.data[i] = {
              // id:response.data[i].id,
              id:i,
              url: response.data[i].url ? JSON.parse(response.data[i].url)[0].url : ''
            }
          }
        }
        this.videoList = response.data;
        this.renderBeautyVideoPage(response.data);
        // listData = response.data;
      }else{
        flag = false;
      }
		});

    var responseData = {
      code:200,
      records:[{
          id:1,
          name:'视频1',
          url:'mp4/3.mp4',
          videoImgUrl:'img/beautyClass/video_2.jpg'
        },{
          id:2,
          name:'视频2',
          url:'mp4/2.mp4',
          videoImgUrl:'img/beautyClass/video_1.png'
        },{
          id:3,
          name:'视频3',
          url:'mp4/1.mp4',
          videoImgUrl:'img/beautyClass/video_3.png'
        },
        {
            id:4,
            name:'视频1',
            url:'mp4/3.mp4',
            videoImgUrl:'img/beautyClass/video_2.jpg'
          },{
            id:5,
            name:'视频2',
            url:'mp4/2.mp4',
            videoImgUrl:'img/beautyClass/video_1.png'
          },
      ]
    }
    // listData = responseData.records;
    // this.videoList = responseData.records;
    // this.renderBeautyVideoPage(responseData.records);
    // var dataList = responseData.records;
    // previewListCssHandle(dataList);
    // this.renderBeautyVideoPage(listData);
  }

  Items.prototype.renderBeautyVideoPage = function(list){
    $('.preview .swiper-wrapper').css({
      width:list.length > 0 ? list.length*160 + 'px' : 0
    })

    var videoHtml = [];
    var tabHtml = [];
    list.forEach(function(item, index){
      var i = index + 1;
      //视频
      videoHtml.push(
        "<div class='swiper-slide'>",
          "<video controls id='js_videoCon_"+ i +"' class='js_videoCon' src='"+ item.url +"' display='block' height='460px' type='video/mp4' ></video>",
        "</div>"
      )

      //视频导航列表
      if(i == 1){
        tabHtml.push([
          "<div class='swiper-slide active-nav' vid='"+ (i-1) +"'>",
              "<video src='"+item.url+"'></video>",
              "<span>" + item.id + "</span>",
              "<div id='js_time_"+ i +"'></div>",
          "</div>"
        ].join(''));
      }else{
        tabHtml.push([
          "<div class='swiper-slide' vid='"+ (i-1) +"'>",
            "<video src='"+item.url+"'></video>",
             "<span>" + item.id + "</span>",
             "<div id='js_time_"+ i +"'></div>",
          "</div>"
        ].join(''));
      }
    })
    if(list.length > 0){
      $('.view .swiper-wrapper').html(videoHtml.join(''));
      $('.preview .swiper-wrapper').html(tabHtml.join(''));
      $('.preview').css('display','block')
    } else {
      $('.preview').css('display','none')
    }

    // this.getVideoTime(list)
  }

  Items.prototype.getVideoTime = function(data) {
    for(var i = 1; i <= data.length; i++){
      var index = '#js_videoCon_' + i;
      var timeIndex = '#js_time_' + i;
      var myTimer = function (callback) {
        setInterval(function () {
          var time = parseInt($(index).get(0).duration);
          var sec_to_time = function(s) {
               var t;
               if(s > -1){
                   var hour = Math.floor(s/3600);
                   var min = Math.floor(s/60) % 60;
                   var sec = s % 60;
                   if(hour < 10) {
                       t = '0'+ hour + ":";
                   } else {
                       t = hour + ":";
                   }

                   if(min < 10){t += "0";}
                   t += min + ":";
                   if(sec < 10){t += "0";}
                   t += sec;
               }
               return t;
           }
           var getTime = sec_to_time(time.toString()) || '';
           var hour = getTime ? getTime.split(':')[0] : 0;
           var minute = getTime ? getTime.split(':')[1] : 0;
           var str = '';
           if(getTime && parseInt(hour) == 0){
             str = getTime.split(':')[1] + ':' +  getTime.split(':')[2]
           } else {
             str = getTime
           }
          callback(str);
          if(str){
            clearTimeout()
          }
        }, 10);

      };

      myTimer(function (val) {
        $(timeIndex).text(val)
      });

    }
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
