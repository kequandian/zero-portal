; (function (window) {

  $(function(){

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


		//取得浏览器的userAgent字符串
		var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf("Opera") > -1;
    console.log('@@@@@@@@@@@ ',userAgent);
    // if(userAgent.indexOf("Firefox") == -1 && userAgent.indexOf("Chrome") == -1
    //    && userAgent.indexOf("Safari") == -1 && userAgent.indexOf("360") == -1
    //    && userAgent.indexOf("se 2.x") == -1 && IEVersion() < 0){
    //   alert('请更换浏览器访问!');
    // }

    if(IEVersion() > 0 && IEVersion() < 11){
      // alert('请更换浏览器访问!');
      $('.version_update').text('为了让您有更好的体验，请升级到IE11！');
      $('.version_update').css({
        position:'fixed',
        display:'block',
        zIndex:'999'
      })
      $('#body header').css({
        position:"relative",
        top:'50px',
        marginTop:'50px'
      })


      //控制导航栏固定
    	$(window).scroll(function(){
        console.log('IE11 ',$('.roof-text').height() + $('.version_update').height());
    		if($(document).scrollTop() > $('.roof-text').height() + 50){
    			console.log('A');
    			$('.nav-menu').css({
    				top: '64px'
    			})
    			$('.nav_line').css({
    				marginTop:'0'
    			})
    			$('.roof-text').css({
    				display:'none'
    			})
    			$('.nav>ul').css({
    				padding:'0'
    			})
    			$('.nav').css({
    				position:'fixed',
    				zIndex:'999',
    				top: '50px'
    			});
    			$('header').css({
    				marginTop: $('.nav').outerHeight() + $('.roof-text').outerHeight() + 50 + 'px'
    			});
    		} else {
    			console.log('BBBBB');
    			$('.nav-menu').css({
    				top: '88px'
    			})
    			$('.nav_line').css({
    				marginTop:'12px'
    			})
    			$('.roof-text').css({
    				display:'block'
    			})
    			$('.nav>ul').css({
    				padding:'12px 0'
    			})
    			$('.nav').css({
    				position:'relative',
            top: '0px'
    			})
    			$('header').css({
    				marginTop: '0px'
    			});
    		}
    	})
    }

    if(IEVersion() > 0 && IEVersion() < 11 && IEVersion() != 'edge'){
      // alert('请升级到IE11再访问!');

    }

    if(IEVersion == -1){
      $('#section_content').css({
          flex:'1',
      })
    }

    //判断是否Opera浏览器
    if (isOpera) {
      console.log('88887');
      $('#section_content').css({
          flex:'1',
      })
    };
    //判断是否Firefox浏览器
    if (userAgent.indexOf("Firefox") > -1) {
      $('#section_content').css({
          flex:'1',
      })
    }
    //判断是否chorme浏览器
    if (userAgent.indexOf("Chrome") > -1){
			$('#section_content').css({
					flex:'1',
			})
    }
    //判断是否Safari浏览器
    if (userAgent.indexOf("Safari") > -1) {
      $('#section_content').css({
          flex:'1',
      })
    }
    //判断是否IE11浏览器
    if (IEVersion() == 11) {
      //解决CSS3 transform翻转问题
      $('#section_content').css({
          MsFlex:'1 0 0',
      })

      $('#section_content').css({
        marginTop:'-9px'
      })
      $('.flipper .back').css({
        transform: 'rotateY(0deg)',
      })
      $('#flip-container1').on({
        mouseover:function(){
          $('#flip-container1 .flipper').css({
            transform: 'rotateY(180deg)',
            transition: '1s',
          })

          $('#flip-container1 .front').css({
            backfaceVisibility:'hidden',
            visibility:'hidden',
            transition: 'all 0.5s',
          })
          $('#flip-container1 .back').css({
            backfaceVisibility:'visible',
            visibility:'visible',
            transform: 'rotateY(180deg)',
            transition: 'all 0.5s',
          })

       },
       mouseout:function(){
         $('#flip-container1 .flipper').css({
           transform: 'rotateY(0deg)',
         })
         $('#flip-container1 .front').css({
           backfaceVisibility:'visible',
           visibility:'visible',
           transition: 'all 0.5s',
         })
         $('#flip-container1 .back').css({
           backfaceVisibility:'hidden',
           visibility:'hidden',
           transition: 'all 0.5s',
         })
       }
      })

      $('#flip-container2').on({
        mouseover:function(){
          $('#flip-container2 .flipper').css({
            transform: 'rotateY(180deg)',
            transition: '1s',
          })

          $('#flip-container2 .front').css({
            backfaceVisibility:'hidden',
            visibility:'hidden',
            transition: 'all 0.5s',
          })
          $('#flip-container2 .back').css({
            backfaceVisibility:'visible',
            visibility:'visible',
            transition: 'all 0.5s',
            transform: 'rotateY(180deg)',
          })

       },
       mouseout:function(){
         $('#flip-container2 .flipper').css({
           transform: 'rotateY(0deg)',
         })
         $('#flip-container2 .front').css({
           backfaceVisibility:'visible',
           visibility:'visible',
           transition: 'all 0.5s',
         })
         $('#flip-container2 .back').css({
           backfaceVisibility:'hidden',
           visibility:'hidden',
           transition: 'all 0.5s',
         })
       }
      })

      $('#flip-container3').on({
        mouseover:function(){
          $('#flip-container3 .flipper').css({
            transform: 'rotateY(180deg)',
            transition: '1s',
          })

          $('#flip-container3 .front').css({
            backfaceVisibility:'hidden',
            visibility:'hidden',
            transition: 'all 0.5s',
          })
          $('#flip-container3 .back').css({
            backfaceVisibility:'visible',
            visibility:'visible',
            transition: 'all 0.5s',
            transform: 'rotateY(180deg)',
          })

       },
       mouseout:function(){
         $('#flip-container3 .flipper').css({
           transform: 'rotateY(0deg)',
         })
         $('#flip-container3 .front').css({
           backfaceVisibility:'visible',
           visibility:'visible',
           transition: 'all 0.5s',
         })
         $('#flip-container3 .back').css({
           backfaceVisibility:'hidden',
           visibility:'hidden',
           transition: 'all 0.5s',
         })
       }
      })
    }
    //判断是否Edge浏览器
    if (IEVersion() == 11) {
      $('.index_trilogy_three_item a').css({
        top:'14.5%',
        left:'16%'
      })
    };

	})





})(window);
