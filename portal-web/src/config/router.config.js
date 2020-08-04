module.exports = [


  {
    name: '产品管理',
    path: '/product',
    items: [
      {
        path: '/product/categroy',
        name: '产品类别',
      },
      {
        path: '/product/items',
        name: '产品',
      },
      {
        path: '/product/tag',
        name: '产品标签',
      },
      // {
      //   path: '/product/trial',
      //   name: '试用装管理',
      // },
      // {
      //   path: '/product/evaluate',
      //   name: '评价管理',
      // },
      {
        path: '/product/freight',
        name: '运费模板',
      },
      {
        path: '/product/brand',
        name: '品牌管理',
      }
    ]
  },

  {
    name: '订单管理',
    path: '/order',
    items: [
      {
        path: '/order/online',
        name: '线上订单',
      },
      {
        path: '/order/refund',
        name: '退货处理',
      },
      // {
      //   path: '/order/trialApplication',
      //   name: '试用装申请',
      // },
      {
        path: '/order/setExpress',
        name: '快递设置',
      }
    ]
  },
  {
    name: '线下管理',
    path: '/offline',
    items: [
      {
        path: '/offline/order',
        name: '线下订单',
      },
      /* {
         path: '/offline/withdrawal',
         name: '线下提现',
       },
       {
         path: '/offline/applyWithdrawal',
         name: '提现申请',
       },*/
    ]
  },
  {
    name: '网站管理',
    path: '/web',
    items: [
      {
        path: '/web/menu',
        name: '菜单管理',
      },
      {
        path: '/web/content',
        name: '资讯管理',
      },
      {
        path: '/web/image',
        name: '图片管理',
      },
      {
        path: '/web/html',
        name: 'HTML 管理',
      },
    ]
  },
  {
    name: '商城配置',
    path: '/setting',
    items: [
      {
        name: '微信用户',
        path: '/setting/user',
      },
      {
        name: '公告管理',
        path: '/setting/notice',
      },
      {
        name: '广告配置',
        path: '/setting/adGroup',
      },
      {
        name: '规则配置',
        path: '/setting/term',
      },
      {
        name: '商城配置',
        path: '/setting/shopConfig',
      },
    ]
  },
  {
    name: '系统管理',
    path: '/sys',
    items: [
      {
        name: '组织管理',
        path: '/sys/org',
      },
      {
        name: '用户管理',
        path: '/sys/user',
      },
      {
        path: '/sys/role',
        name: '角色管理',
      },
      /*{
        path: '/sys/eav',
        name: '表单配置',
      },*/
      {
        name: '系统配置',
        path: '/sys/setting',
      },
      {
        path: '/sys/logs',
        name: '操作日志',
      },
    ]
  },

]
