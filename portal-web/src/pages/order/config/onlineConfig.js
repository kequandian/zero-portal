export default {
  layout: 'Content',
  title: '线上订单',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {

        layoutConfig: {
          buttonSpan: 4,
          value: null,
          collapse: 3
        },
        fields: [
          { field: 'search', label: '搜索', type: 'input', span: 6, placeholder: '订单号/产品名称/购买用户' },
          /* { field: 'orderNumber', label: '订单号', type: 'input' },*/
          {
            field: 'status', label: '状态', type: 'select', span: 6,
            options: [
              { label: '待支付', value: 'CREATED_PAY_PENDING' },
              { label: '支付超时关闭', value: 'CLOSED_PAY_TIMEOUT' },
              { label: '已取消', value: 'CLOSED_CANCELED' },
              { label: '已支付', value: 'PAID_CONFIRM_PENDING' },
              { label: '待发货', value: 'CONFIRMED_DELIVER_PENDING' },
              { label: '发货中', value: 'DELIVERING' },
              { label: '已发货', value: 'DELIVERED_CONFIRM_PENDING' },
              { label: '待退货', value: 'CANCELED_RETURN_PENDING' },
              { label: '已确认收货', value: 'CLOSED_CONFIRMED' },
              { label: '待退款', value: 'CANCELED_REFUND_PENDING' },
              { label: '已退款', value: 'CLOSED_REFUNDED' },
              { label: '待取货', value: 'CONFIRMED_PICK_PENDING' },
            ]
          },
          /*  { field: 'pName', label: '产品名称', type: 'input' },
            { field: 'barcode', label: '条形码', type: 'input' },
            { field: 'contactUser', label: '收货人', type: 'input' },*/
          /*  { field: 'phone', label: '联系电话', type: 'input' },*/

          {
            field: 'paymentType', label: '支付类型', type: 'select', span: 6,
            options: [
              { label: '微信支付', value: 'WECHAT' },
              { label: '积分支付', value: 'POINT' },
              { label: '线下支付', value: 'STORE' },
              { label: '零钱钱包', value: 'WALLET' },
              { label: '现金', value: 'CASH' },
              { label: '支付宝', value: 'ALIPAY' },
              { label: '银行卡', value: 'CARD' },
            ]
          },
          {
            field: 'time', label: '下单时间', type: 'range',
            span: 10,
          },
          {
            field: 'searchMoney', label: '价格', type: 'number-range',
            span: 6,
          },

          /* { field: 'startTime', label: '开始时间', type: 'date' },
           { field: 'endTime', label: '结束时间', type: 'date' },*/
        ]
      }
    },
    {
      span: 24,
      layout: 'Empty',
      component: 'Table',
      config: {

        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/order/orders?type=ORDER',
          deleteAPI: '/api/crud/order/orders/(id)'
        },
        fields: [
          { field: 'cover', label: '封面', valueType: 'image' },
          {
            field: 'orderNumber', label: '订单号',
            valueType: 'path',
            options: {
              path: '/order/orderView',
            }
          },
          { label: '购买用户', field: 'userName' },

          {
            field: 'totalPrice', label: '价格',
            align: 'right', valueType: 'currency',
          },
          {
            field: 'couponPrice', label: '优惠券价格',
            align: 'right', valueType: 'currency',
          },
          {
            field: 'status', label: '状态', valueType: 'tag',
            options: {
              map: {
                'CREATED_PAY_PENDING': '待支付',
                'CLOSED_PAY_TIMEOUT': '支付超时关闭',
                'CLOSED_CANCELED': '已取消',
                'PAID_CONFIRM_PENDING': '已支付',
                'CONFIRMED_DELIVER_PENDING': '待发货',
                'DELIVERING': '发货中',
                'DELIVERED_CONFIRM_PENDING': '已发货',
                'CANCELED_RETURN_PENDING': '待退货',
                'CLOSED_CONFIRMED': '已确认收货',
                'CANCELED_REFUND_PENDING': '待退款',
                'CLOSED_REFUNDED': '已退款',
                'CONFIRMED_PICK_PENDING': '待取货'
              },
              colorMap: {
                'CREATED_PAY_PENDING': '#5bc0de',
                'CLOSED_PAY_TIMEOUT': '#777',
                'CLOSED_CANCELED': '#777',
                'PAID_CONFIRM_PENDING': '#777',
                'CONFIRMED_DELIVER_PENDING': '#5cb85c',
                'DELIVERING': '#777',
                'DELIVERED_CONFIRM_PENDING': '#428bca',
                'CANCELED_RETURN_PENDING': '#777',
                'CLOSED_CONFIRMED': '#f0ad4e',
                'CANCELED_REFUND_PENDING': '#777',
                'CLOSED_REFUNDED': '#777',
                'CONFIRMED_PICK_PENDING': '#777'
              }
            }
          },


          {
            field: 'paymentType', label: '支付类型', valueType: 'status',
            options: {
              statusMap: {
                'WECHAT': '微信支付',
                'ALIPAY': '支付宝',
                'POINT': '积分支付',
                'STORE': '线下支付',
                'WALLET': '零钱钱包',
                'CASH': '现金',
                'CARD': '银行卡'
              }
            }
          },
          {
            field: 'deliveryType', label: '配送方式', valueType: 'status',
            options: {
              statusMap: {
                'EXPRESS': '快递',
                'SELF_PICK': '自提',
                'FLASH': '极速送达'
              }
            }
          },
          {
            field: 'origin', label: '来源', valueType: 'status',
            options: {
              statusMap: {
                'WPA': '微信公众号',
                'MINI_PROGRAM': '小程序',
                'APP_ANDROID': '手机应用程序',
                'APP_IOS': '手机应用程序',
                'IPAD': '手机应用程序',
                'OTHER': '其他'
              }
            }
          },


          { field: 'createdDate', label: '下单时间' },

          { field: 'operation' }
        ],
        operation: [
          {
            title: '查看', action: 'path',
            options: {
              outside: true,
              path: '/order/orderView',
              // permission:'apply.view',
              // location:true
              queryData: (records) => {
                const data = {
                  id: records.id,
                }
                return data
              }
            }
          },
          {
            title: '取消订单', action: 'request',
            options: {

              expectedField: ['status'],
              expectedValue: ['CREATED_PAY_PENDING'],
              API: '/api/crud/order/orders/(id)/CLOSED_CANCELED',
              method: 'post',
              tips: '确定要取消该订单吗?',
            }
          },
          {
            title: '发货', action: 'request',
            options: {
              outside: true,
              expectedField: ['status'],
              expectedValue: ['CONFIRMED_DELIVER_PENDING'],
              API: '/api/crud/order/orders/(id)/DELIVERED_CONFIRM_PENDING',
              method: 'post',
              tips: '确定货物已发送吗?',
            }
          },
        ],
      },
    },
  ]
}
