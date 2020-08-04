const formField = require('./formFields');

module.exports = {
  layout: 'Empty',
  title: '',
  items: [
    {
      layout: 'Empty',
      component: 'Table',
      config: {
        API: {
          listAPI: '/api/pub/banner/records/[id]',
          deleteAPI: '/api/banner/(id)',
        },
        actions: [
          {
            title: '新增', type: 'modal',
            options: {
              modalTitle: '新增轮播图',
              items: [
                {
                  layout: 'Grid',
                  component: 'Form',
                  config: {
                    API: {
                      createAPI: '/api/banner/id/[id]',
                    },
                    fields: formField,
                  },
                }
              ],
            },
          }
        ],
        fields: [
          { field: 'image', label: '图片' , valueType: 'image'},
          { field: 'name', label: '名称' },
          {
            field: 'enabled', label: '启用', valueType: 'tag',
            options: {
              map: {
                1: '是',
                0: '否',
              },
              colorMap: {
                1: '#135200',
                0: '#9E9E9E',
              }
            }
          },
        ],
        operation: [
          {
            title: '编辑', action: 'modal',
            options: {
              icon: 'setting',
              modalTitle: '编辑轮播图',
              layout: 'Empty',
              items: [
                {
                  layout: 'Grid',
                  component: 'Form',
                  config: {
                    API: {
                      getAPI: '/api/pub/banner/(id)',
                      updateAPI: '/api/banner/(id)',
                    },
                    fields: formField,
                  },
                }
              ],
            },
          }
        ]
      }
    }
  ]
};
