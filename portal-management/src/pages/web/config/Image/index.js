const formFields = require('./formFields');

module.exports = {
  layout: 'Content',
  title: '图片管理',
  items: [
    // {
    //   span: 24,
    //   layout: 'Empty',
    //   component: 'Search',
    //   config: {
    //     fields: [
    //       { field: 'name', label: '图片名称', type: 'input' },
    //     ]
    //   }
    // },
    {
      span: 24,
      layout: 'Empty',
      component: 'ItemList',
      config: {
        field: 'subCategoryList',
        pageSize: 28,
        API: {
          listAPI: '/api/gw/portal/images',
          deleteAPI: '/api/gw/portal/images/(id)'
        },
        actionLayout: 'Items',
        actions: [
        /*  {
            title: '添加', type: 'modal',
            options: {
              modalTitle: '添加图片',
              modalWidth: 500,
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      createAPI: '/api/gw/portal/uploadImages'
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          },*/
          // {
          //   title: '生成 HTML',
          //   type: 'request',
          //   options: {
          //     API: '/api/gw/portal/images/replace',
          //     method: 'put',
          //   },
          // }
        ],
        fields: [],
        operation: [
          {
            title: '编辑', action: 'modal',
            options: {
              outside: true,
              modalTitle: '编辑图片',
              modalWidth: 500,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/gw/portal/images/(id)',
                      updateAPI: '/api/gw/portal/images/(id)',
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          }
        ],
      },
    },
  ]
}
