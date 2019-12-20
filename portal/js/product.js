; (function (window) {
  var Product = function () {
    this.categoryId = null;
    this.categoryData = [];
    this.itemsData = [];
    this.itemDetails = {};
    this.showProductList = [];
    this.current = 1;
    this.tag = '';
  };

  Product.prototype.init = function () {
    this.getCategory();
    // $('.product-nav-list').on('click', 'li', this.onChange.bind(this));
    $('.product_category_select').on('click',this.onChange.bind(this));
    $('.product-search input').blur(this.onSearch.bind(this));
    $('.product-list').on('click', '.product-list-item', this.onClick.bind(this));
    this.queryProduct();  //根据tag查询相应产品
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
      url: window.MC.HOST + '/openapi/crud/productCategoryies?promoted=true',
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
      this.renderCategory();
      this.getItems();
    });
  };
  Product.prototype.renderCategory = function () {
    var html = [
      ['<option value="" disabled selected style="display:none">产品类别</option>']
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
    var request = $.ajax({
      url: window.MC.HOST + '/openapi/crud/productCategoryies/' + this.categoryId + '?tag=' + this.tag,
      type: 'get',
      context: this,
    });
    request.done(function (response) {
      var data = response.data;
      this.itemsData = data.products;
      if(data.products.length > 0 && data.products.length > 11){
        this.showProductList = data.products.slice(0,12);
      } else {
        this.showProductList = data.products.slice(0)
      }
      this.renderItems();
    });
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
    //清空表单域的值
    $('input').val('');
    // var number = Number(e.target.id.replace('product-category-', ''));
    var number = $(".product_category_select").find("option:selected").val();
    if (number) {
      this.categoryId = number;
      this.renderCategory();
      this.getItems();
    }
  };
  Product.prototype.onSearch = function (e) {
    console.log('HHHHHH e = ',e);
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
      this.renderCategory();
      this.getItems();
    }
  };
  Product.prototype.onClick = function (e) {
    var id = Number(e.target.id.replace('product-item-', ''));
    if (id) {
      window.location.href = 'productDetails.html?id=' + id;
    }
  };
  Product.prototype.getProductDetails = function (func) {
   // var id = SearchObject('id');
   var id = SearchObject().id;
    if (id) {
      var request = $.ajax({
        url: window.MC.HOST + '/rest/product/' + id,
        type: 'get',
        context: this,
      });
      request.done(function (response) {
        var data = response.data;

        this.itemDetails = data;

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
