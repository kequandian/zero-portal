export default {
  layout: 'Content',
  title: '快递设置',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Search',
      config: {
        fields: [
          { field: 'name', label: '名称', type: 'input' },
        ]
      }
    },
    {
      span: 24,
      layout: 'Empty',
      component: 'Table',
      config: {

        API: {
          listAPI: '/api/crud/order/expresses',
          deleteAPI: '/api/crud/order/expresses/(id)'
        },
        actions: [
          {
            title: '添加新快递公司信息', type: 'modal',
            options: {
              modalTitle: '添加快递公司',
              modalWidth: 400,
              items: [
                {
                  layout: 'Grid',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    layoutConfig: {
                      // value: [12, 12]
                    },
                    API: {
                      createAPI: '/api/crud/order/expresses'
                    },
                    fields: [
                      {
                        field: 'name', label: '名称', type: 'input',
                        rules: ['required'],
                      },
                      {
                        field: 'code', label: '代码', type: 'input',
                        rules: ['required'],
                      },
                      {
                        field: 'isDefault', label: '是否默认', type: 'radio',
                        options: [
                          { label: '是', value: 1 },
                          { label: '否', value: 0 },
                        ]
                      },
                    ]
                  }
                }
              ]
            }
          }
        ],
        fields: [
        /*  { field: 'id', label: '编号' },*/
          { field: 'name', label: '名称' },
          { field: 'code', label: '编号' },
          {
            field: 'isDefault', label: '是否默认', valueType: 'tag',
            options: {
              map: {
                1: '是',
                0: '否'
              },
              colorMap: {
                1: '#1890ff',
                0: '#777'
              }
            }
          },
          { field: 'operation' }
        ],
        operation: [
          // {
          //   title:'查看',action:'path',
          //   options:{
          //     path:'/subsysManage-view',
          //     // permission:'apply.view',
          //     // location:true
          //     queryData:(records) => {
          //       const data = {
          //         id:records.id,
          //       }
          //       return data
          //     }
          //   }
          // },
          {
            title: '编辑', action: 'modal',
            options: {
              outside:true,
              modalTitle: '编辑快递公司',
              modalWidth: 400,

              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layoutConfig: {
                      value: [12, 12]
                    },
                    API: {
                      getAPI: '/api/crud/order/expresses/(id)',
                      updateAPI: '/api/crud/order/expresses/(id)',
                    },
                    fields: [
                      {
                        field: 'name', label: '名称', type: 'input',
                        rules: ['required'],
                      },
                      {
                        field: 'code', label: '代码', type: 'input',
                        rules: ['required'],
                      },
                      {
                        field: 'isDefault', label: '是否默认', type: 'radio',
                        options: [
                          { label: '是', value: 1 },
                          { label: '否', value: 0 },
                        ]
                      },
                    ]
                  }
                }
              ]
            }
          },
          {
            title: '删除', action: 'delete'
          }
        ],
      },
    },
  ]
}
