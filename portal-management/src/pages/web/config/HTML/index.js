
module.exports = {
  layout: 'Content',
  title: 'HTML 管理',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Table',
      config: {
        API: {
          listAPI: '/api/gw/portal/html',
        },
        actions: [],
        fields: [
          { label: '文件名', field: 'name' },
        ],
        operation: [
          {
            title: '编辑', action: 'path',
            options: {
              outside: true,
              path: '/web/htmlEdit',
            }
          },
        ],
      },
    },
  ]
}
