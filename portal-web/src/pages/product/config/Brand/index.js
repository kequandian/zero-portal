
module.exports = {
  layout: 'Content',
  title: '品牌管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {

        fields: [
          { field: 'name', label: '名称', type: 'input' }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {

        API: {
          listAPI: '/api/crud/product/productBrands',
          deleteAPI: '/api/crud/product/productBrands/(id)'
        },
        actions: [
          {
            title: '添加', type: 'modal',
            options: {
              modalTitle: '添加品牌',
              modalWidth: 900,
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
                      createAPI: '/api/crud/product/productBrands'
                    },
                    fields: [
                      { field: 'name', label: '名称', type: 'input', rules: ['required'] },
                      {
                        field: 'image', label: 'logo', type: 'upload-image',
                        options: {
                          API: `/api/fs/uploadx`,
                          max: 1,
                        }
                      },
                      { field: 'description', label: '描述', type: 'text-area', span: 24 },
                    ]
                  }
                }
              ]
            }
          }
        ],
        fields: [
          { field: 'logo', label: 'logo', valueType: 'image' },
          { field: 'name', label: '名称' },
          { field: 'description', label: '描述' },
          { field: 'operation' }
        ],
        operation: [
          {
            title: '编辑', action: 'modal',
            options: {
              outside: true,
              modalTitle: '编辑品牌',
              modalWidth: 800,

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
                      getAPI: '/api/crud/product/productBrands/(id)',
                      updateAPI: '/api/crud/product/productBrands/(id)',
                    },
                    fields: [
                      { field: 'name', label: '名称', type: 'input', rules: ['required'] },
                      {
                        field: 'image', label: 'logo', type: 'upload-image',
                        options: {
                          API: `/api/fs/uploadx`,
                          max: 1,
                        }
                      },
                      { field: 'description', label: '描述', type: 'text-area', span: 24 },
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
