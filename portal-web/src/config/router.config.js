module.exports = [

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
     /* {
        name: '商城配置',
        path: '/setting/shopConfig',
      },*/
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
