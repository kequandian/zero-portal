# i-softto官网 #


## 网站描述 ##
  网站使用了HTML5+CSS3+jQuery。


### 总结网站开发时注意的事项 ###

  一、页面布局问题

    1、开发页面前，需要仔细分析页面的内容，仔细考虑页面的整体结构，使用什么样的布局，需要
       考虑周全再进行开发。

    2、使用百分比布局。这样对于不同屏幕尺寸的电脑访问时，适应的效果就会更加好，出现的问题会更少，
       需注意：使用百分比布局要时时刻刻清楚其父元素，因为子元素的百分比高度是根据父元素的高度来确定的。

    3、栅格布局。可以改变盒子模型的计算方式方便你设置宽进行自适应流式布局。

　　  ` box-sizing:border-box  `

    4、对于一些图片来说，加上`display：block；`属性来解决img的边缘空白间隙的1px像素。
       如果图片要适应不同的屏幕的话，建议设置其宽度100%。

  二、js编写

    1、编写js代码时，需要考虑浏览器对js的兼容性问题，尽量使用ES5来编写js。因为几乎所有的浏览器都兼容ES5，
       只有部分浏览器兼容了ES6或以上，如果不统一用ES5的话，后续可能要处理很多js兼容问题。比如：

       (```)
         $('.search input').change(function(e){
           var request = $.ajax({
             url: window.MC.HOST + '/api/pub/ow/pages/one/footer?searchText=' + e.target.value,
             type: 'get',
           });

           request.done(function ({data,code}) {
             if (code === 200) {

             }
           });
       (```)

       以上在IE浏览器会出现一个问题: 标识符未定义！，其实就是上面代码的data,code使用了ES6语法，在IE是不能兼容的。

       解决的办法：使用ES5语法编写。

       (```)

       $('.search input').change(function(e){
         var request = $.ajax({
           url: window.MC.HOST + '/api/pub/ow/pages/one/footer?searchText=' + e.target.value,
           type: 'get',
         });

         request.done(function (response) {
           if (response.code === 200) {

           }
         });

       (```)

    2、


  三、兼容问题

    1、DOCTYPE 申明。
      <!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器
      用什么文档标准解析这个文档。如果DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

      `<!DOCTYPE html>`

    2、CSS、JS文件引入的顺序。

       建议css文件引入的顺序要在js前，<script>标签引入js尽量放在body结尾之前。这样会避免
       一些兼容问题。


    3、针对IE11问题。相对于其他浏览器来说，IE的兼容效果是比较差的，有些设置的样式在其他浏览器中正常，
       但是到了IE，得到的效果就不是理想的。

       * 判断是否为IE浏览器及版本。

        (```)

         function IEVersion() {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            //判断是否IE<11浏览器
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;

            //判断是否IE的Edge浏览器
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
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

        (```)

        其中：IEVersion() 返回值为-1表示不是IE浏览器，反之的到的就是IE的版本。可以根据
    不同的IE版本进行样式的兼容。


      4、 CSS3 transform 3D翻转问题

         在IE11浏览器，对transform属性的兼容性不理想，我对此进行了研究和调试，还是没有
      找到合适的解决办法。因此我通过js取控制图片的翻转，但是效果不是很好。(用空在研究)。

      5、css 高度坍塌问题

        出现的原因：在文档流中，父元素的高度默认是被子元素撑开的，也就是子元素多高，父元素就多高。
    但是当为子元素设置浮动以后，子元素会完全脱离文档流，此时将会导致子元素无法撑起父元素的高度，
    导致父元素的高度塌陷。

        解决的办法：可以通过after伪类向元素的最后添加一个空白的块元素，然后对其清除浮动，
    这样做和添加一个div的原理一样，可以达到一个相同的效果，而且不会在页面中添加多余的div。

      (```)

      .clearfix:after {
          content: "";     /*添加一个内容*/
          display: block;   /*设置块元素*/
          clear: both;     /*清除两侧的浮动*/
       }

      (```)

      3、盒子布局

        标准的盒子布局和IE和盒子布局是有区别的；尽量少使用margin、padding为负值。

    四、参考网站：http://www.keyuhufu.com/
