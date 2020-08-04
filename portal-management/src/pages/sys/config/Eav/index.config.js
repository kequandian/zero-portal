
module.exports = {
  layout: 'Content',
  title: '表单附加字段管理',
  items: [
    {
      layout: 'Empty',
      component: 'Eav',
      config: {
        API: {
          listAPI: '/api/eav/entities',
          getAPI: '/api/eav/entities/<id>/attributes',
        },
      },
    },
  ],
};
