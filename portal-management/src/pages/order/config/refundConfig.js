export default {
  layout: 'Content',
  title: '退货处理',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Search',
      config: {

        layoutConfig: {
          buttonSpan: 4,
          value: [6, 5, 9, 4],
          collapse: 3
        },
        fields: [
          { field: 'search', label: '搜索', type: 'input', placeholder: '订单号/产品名称/用户名' },
          {
            field: 'status', label: '状态', type: 'select',
            options: [
              { label: '待退货', value: 'CANCELED_RETURN_PENDING' },
              { label: '待退款', value: 'CANCELED_REFUND_PENDING' },
              { label: '已退款', value: 'CLOSED_REFUNDED' },
            ]
          },
          {
            field: 'time', label: '下单时间', type: 'range',
          },
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
          listAPI: '/api/crud/order/orders/refunds',
          deleteAPI: '/api/crud/order/orders/(id)'
        },
        fields: [
          { field: 'cover', label: '封面', valueType: 'image' },
          { label: '退货用户', field: 'userName' },
          {
            field: 'orderNumber', label: '订单号',
            valueType: 'path',
            options: {
              path: '/order/orderView',
            }
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
                'CANCELED_REFUND_PENDING': '#ff2233',
                'CLOSED_REFUNDED': '#777',
                'CONFIRMED_PICK_PENDING': '#777'
              }
            }
          },
          {
            field: 'refundFee', label: '退款金额',
            align: 'right', valueType: 'currency',
            options: {
              color: '#ff2233',
            },
          },
          {
            field: 'paymentType', label: '支付类型', valueType: 'map',
            options: {
              map: {
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
            field: 'deliveryType', label: '配送方式', valueType: 'map',
            options: {
              map: {
                'EXPRESS': '快递',
                'SELF_PICK': '自提',
                'FLASH': '极速送达'
              }
            }
          },
          {
            field: 'origin', label: '来源', valueType: 'map',
            options: {
              map: {
                'WPA': '微信公众号',
                'MINI_PROGRAM': '小程序',
                'APP_ANDROID': '手机应用程序',
                'APP_IOS': '手机应用程序',
                'IPAD': '手机应用程序',
                'OTHER': '其他'
              }
            }
          },
          {
            field: 'totalPrice', label: '价格',
            align: 'right', valueType: 'currency',
          },
          { field: 'createdDate', label: '下单时间' },

          { field: 'operation' }
        ],
        operation: [
          {
            title: '详情', action: 'path',
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
          /* {
             title: '删除', action: 'delete'
           }*/
        ],
      },
    },
  ]
}
