; (function (window) {
  var Product = function () {
    this.categoryId = -1;
    this.categoryData = [];
    this.itemsData = [];
    this.itemDetails = {};
    this.showProductList = [];
    this.current = 1;
    this.tag = '';
    this.categoryName = '产品类别';
    this.recommendList = []; //推荐产品
  };

  Product.prototype.init = function () {
    this.getCategory();
    // $('.product-nav-list').on('click', 'li', this.onChange.bind(this));
    $('.product_category_select').on('click',this.onChange.bind(this));
    $('.product-search input').blur(this.onSearch.bind(this));
    $('.product-list').on('click', '.product-list-item', this.onClick.bind(this));
    // this.queryProduct();  //根据tag查询相应产品
  };

  Product.prototype.queryProduct = function () {
    var tag = '';
    if(location.search){
      tag = decodeURIComponent(location.search.split('=')[1])
    }
    this.tag = tag;
    if(tag){
      this.getItems()
    }
  }

  Product.prototype.getCategory = function () {
    var request = $.ajax({
      url: window.MC.HOST + '/rest/product_category?promoted=true',
      type: 'get',
      context: this,
    });

    request.done(function (response) {
      var data = response.data;

      this.categoryData = data;
      if (this.categoryId === null) {
        // this.categoryId = this.categoryData[0].id;
        this.categoryId = -1
      }
      this.renderCategory('产品类别');
      this.getItems();
    });
  };
  Product.prototype.renderCategory = function (text) {
    var html = [
      ['<option value="" disabled selected style="display:none">"'+text+'"</option>']
    ];

    var _this = this;
    this.categoryData.forEach(function (item) {
      var active = item.id === _this.categoryId;
      if (active) {
        $('.product-list-title').html(item.name);
      }
      html.push([
        '<option value="'+ item.id+'" class="' + (active ? 'active' : '') + '" id="product-category-' + item.id + '">'+item.name+'</option>',
      ])
    })
    // $('.product-nav-list').html(html.join(''));
    $('.product_category_select').html(html.join(''));
    $('.product_category_select').css({
      display:'inline-block'
    })
  };



  Product.prototype.getItems = function () {
    $('.product-list').html('<div class="product-empty">Loading...</div>');
    if (location.search && this.categoryName == '产品类别') {
      var tag = decodeURIComponent(location.search.split('=')[1]);
      var request = $.ajax({
        url: window.MC.HOST + '/rest/product?promoted=-1&tag=' + tag,
        type: 'get',
        context: this,
      });
      request.done(function (response) {
        if (response.code == 200 && response.data && response.data) {
          this.itemsData = response.data;
          if (response.data.length > 0) {
            if(response.data.length > 11){
              this.showProductList = response.data.slice(0,12);
            } else {
              this.showProductList = response.data.slice(0)
            }
          }
          this.renderItems();
        }
      });

    } else {
      var request1 = $.ajax({
        url: window.MC.HOST + '/rest/product_category/' + this.categoryId,
        type: 'get',
        context: this,
      });
      request1.done(function (response) {
        var data = response.data;
        this.itemsData = data.products;
        if (data.products.length > 0) {
          if(data.products.length > 11){
            this.showProductList = data.products.slice(0,12);
          } else {
            this.showProductList = data.products.slice(0)
          }
        }
        this.renderItems();
      });
    }
  };

  Product.prototype.setState = function() {
    var number = (this.current + 1)*12;
    if(this.itemsData.length > number) {
      this.showProductList = this.itemsData.slice(0,number);
    } else {
      this.showProductList = this.itemsData.slice(0);
    }
    this.current ++
    this.renderItems()
  };

  Product.prototype.renderItems = function () {
    $('.product_number').text('共' + this.itemsData.length + '条结果');
    if(this.itemsData.length > this.current*12){
      $('.product_view_more').text('加载更多');
      $('.product_view_more').on('click',this.setState.bind(this));
    } else {
      $('.product_view_more').css({
        'display':'none'
      });
    }
    var html = [];
    this.showProductList.forEach(function (item) {
      html.push([
        '<div class="product-list-item" id="product-item-' + item.id + '" title="' + item.name + '">',
        '<div class="product-list-item-imgBox">',
        '<div style="background-image: url(' + item.cover + ')" id="product-item-' + item.id + '"></div>',
        '</div>',
        '<div class="product-list-item-title">' + item.name + '</div>',
        '<div class="product-list-item-price">￥' + item.price + '</div>',
        '</div>',
      ].join(''));
    });
    if (html.length === 0) {
      html.push('<div class="product-empty">暂无数据</div>');
    } else {
      $('.product_view_more').css({
        border:'1px solid #857a7a'
      })
    }
    $('.product-list').html(html.join(''));
  };
  Product.prototype.onChange = function (e) {
    var text = '产品类别';
    for (var i = 0; i < this.categoryData.length; i++) {
      if (this.categoryData[i].id == e.target.value) {
        text = this.categoryData[i].name
      }
    }
    this.categoryName = text;
    //清空表单域的值
    // $('input').val('');
    // var number = Number(e.target.id.replace('product-category-', ''));
    var number = $(".product_category_select").find("option:selected").val();
    if (number) {
      this.categoryId = number;
      this.renderCategory(text);
      this.getItems();
    }
  };
  Product.prototype.onSearch = function (e) {
    var value = e.target.value.replace(/\s*/g, '');
    if (value) {
      $('.product-list-title').html('搜索: ' + value);
      $('.product-list').html('<div class="product-empty">搜索中...</div>');
      var request = $.ajax({
        url: window.MC.HOST + '/rest/product_search?name=' + value,
        type: 'get',
        context: this,
      });
      request.done(function (response) {
        var data = response.data;

        this.itemsData = data;

        this.renderItems();
      });
    } else {
      this.renderCategory('产品类别');
      this.getItems();
    }
  };
  Product.prototype.onClick = function (e) {
    var id = Number(e.target.id.replace('product-item-', ''));
    if (id) {
      window.location.href = 'productdes-' + id +  '.html'
    }
  };
  Product.prototype.getProductDetails = function (func) {
    var pathname = location.pathname.split('/')[location.pathname.split('/').length - 1];
    var id = pathname.split('.')[0].split('-')[1] || ''
    if (!id) {
      window.location.href = 'product.html';
      return;
    }
    if (id) {
      var request = $.ajax({
        url: window.MC.HOST + '/rest/product/' + id,
        type: 'get',
        context: this,
      });
      request.done(function (response) {
        var data = response.data;

        this.itemDetails = data;
        // this.recommendList = [
        //   {
        //     cover: "https://www.muaskin.com/images/p/8b1cfe69a337cb2bf6d436cf8dd5841e.png",
        //     name: "i-Softto乙基VC 30ml 精华液B02",
        //     id:1,
        //     price: 350
        //   },
        //   {
        //     cover: "https://www.muaskin.com/images/p/faf6d9986913d2ec4ba521f8766d7119.jpg",
        //     name: "i-Softto玻尿酸保湿面膜贴M01",
        //     id:42,
        //     price: 350
        //   },
        //   {
        //     cover: "https://www.muaskin.com/images/p/058c92a02274ecd5453c2f8459149c41.png",
        //     name: "i-Softto神经酰胺50g保湿霜S01",
        //     id: 38,
        //     price: 350
        //   },
        //   {
        //     cover: "https://www.muaskin.com/images/p/8b1cfe69a337cb2bf6d436cf8dd5841e.png",
        //     name: "i-Softto乙基VC 30ml 精华液B02",
        //     id:1,
        //     price: 350
        //   },
        //   {
        //     cover: "https://www.muaskin.com/images/p/faf6d9986913d2ec4ba521f8766d7119.jpg",
        //     name: "i-Softto玻尿酸保湿面膜贴M01",
        //     id:42,
        //     price: 350
        //   }
        // ]
        this.renderItemDetails(func);
      });
    }
  };
  Product.prototype.renderItemDetails = function (func) {
    var imgList = [];
    this.itemDetails.covers.forEach(function (item) {
      imgList.push('<li><img src="' + item.url + '" alt=""></li>')
    });

    $('.middle').html(imgList.join(''));
    $('.firstImage').attr('src', this.itemDetails.cover);
    $('.product-info-title').html(this.itemDetails.name);
    $('.product-info-shortTitle').html(this.itemDetails.short_name);
    $('.product-info-price').html('￥' + this.itemDetails.price);
    $('.product-description').html(this.itemDetails.description);

    //展示推荐产品
    var html = [];
    this.recommendList.length > 0 && this.recommendList.forEach(function (item) {
      html.push([
        '<div class="product-list-item" id="product-item-' + item.id + '" title="' + item.name + '">',
        '<div class="product-list-item-imgBox">',
        '<div style="background-image: url(' + item.cover + ')" id="product-item-' + item.id + '"></div>',
        '</div>',
        '<div class="product-list-item-title">' + item.name + '</div>',
        '<div class="product-list-item-price">￥' + item.price + '</div>',
        '</div>',
      ].join(''));
    });
    if (this.recommendList.length > 0) {
      $('.product-recommend-text').html('推荐产品')
    }
    $('.product-recommend-list').html(html.join(''));
    $('.product-recommend-list').on('click', '.product-list-item', this.onClick.bind(this));


    var url = this.itemDetails.wx_url;
    $(".product-info-button").on({
				mouseover : function(){
          $('.qrcode').empty()
          $('.qrcode').qrcode(url);
          $(".product-info-code").css("display","block")
				} ,
				mouseout : function(){
					$(".product-info-code").css("display","none")
				}
			})
    if(func){
      func();
    }
  };
  window.Product = Product;
})(window);
