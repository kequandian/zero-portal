
module.exports = {
  layout: 'Content',
  title: '标签管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {

        fields: [
          { field: 'name', label: '标签名', type: 'input' }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {

        API: {
          listAPI: '/api/crud/product/productTags',
          deleteAPI: '/api/crud/product/productTags/(id)'
        },
        actions: [
          {
            title: '添加', type: 'modal',
            options: {
              modalTitle: '添加标签',
              modalWidth: 600,
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    layoutConfig: {
                      value: [12, 12],
                    },
                    API: {
                      createAPI: '/api/crud/product/productTags'
                    },
                    fields: [
                      { field: 'identifier', label: '标记', type: 'input', rules: ['required'] },
                      { field: 'name', label: '名称', type: 'input', rules: ['required'] },
                      { field: 'sortOrder', label: '排序号', type: 'number' },
                    ]
                  }
                }
              ]
            }
          }
        ],
        fields: [
          { field: 'identifier', label: '标记' },
          { field: 'name', label: '名称' },
          {
            field: 'sortOrder', label: '排序号',
            align: 'right',
          },
          { field: 'operation' }
        ],
        operation: [
          /*{
            title: '排序', action: 'sort',
            options: {
              entity: 'productTag',
            }
          },*/
          {
            title: '编辑', action: 'modal',
            options: {
              outside: true,
              modalTitle: '编辑标签',
              modalWidth: 600,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    layoutConfig: {
                      value: [12, 12]
                    },
                    API: {
                      getAPI: '/api/crud/product/productTags/(id)',
                      updateAPI: '/api/crud/product/productTags/(id)',
                    },
                    fields: [
                      { field: 'identifier', label: '标记', type: 'input', rules: ['required'] },
                      { field: 'name', label: '名称', type: 'input', rules: ['required'] },
                      { field: 'sortOrder', label: '排序号', type: 'number' },
                    ]
                  }
                }
              ]
            }
          },
          {
            title: '删除', action: 'delete'
          }
        ]
      },
    },
  ],
};
