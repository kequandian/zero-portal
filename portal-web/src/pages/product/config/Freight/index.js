export default {
  layout: 'Content',
  title: '运费模板',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Search',
      config: {

        fields: [
          {
            field: 'search', label: '搜索', type: 'input',
            placeholder: '模板名称/模板标题',
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
          listAPI: '/api/crud/product/fareTemplates',
          deleteAPI: '/api/crud/product/fareTemplates/(id)'
        },
        actions: [
          {
            title: '新增运费模板', type: 'path',
            options: {
              path: '/product/freightAdd'
            }
          }
        ],
        fields: [
          { field: 'name', label: '模板名称' },
          {
            field: 'title', label: '模板标题'
          },

          {
            field: 'isInclPostage', label: '是否包邮', valueType: 'tag',
            options: {
              map: {
                1: '卖家承担运费',
                0: '自定义运费'
              },
              colorMap: {
                1: '#ff2233',
                0: '#885110',
              }
            }
          },

          {
            field: 'valuationModel', label: '计价方式', valueType: 'tag',
            options: {
              map: {
                0: '按件数',
                1: '按重量',
                2: '按体积'
              },
              colorMap: {
                0: '#d49633',
                1: '#777',
                2: '#711717'
              }
            }
          },
          {
            field: 'isInclPostageByIf', label: '是否指定条件包邮', valueType: 'tag',
            options: {
              map: {
                1: '是',
                0: '否'
              },
              colorMap: {
                1: '#135200',
                0: '#777'
              }
            }
          },

          { field: 'lastModifiedDate', label: '最后编辑时间' },
          { field: 'operation' }

        ],
        operation: [
          {
            title: '查看', action: 'path',
            options: {
              outside: true,
              path: '/product/freightView',
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
          {
            title: '编辑', action: 'path',
            options: {
              outside: true,
              path: '/product/freightEdit',
              queryData: (records) => {
                const data = {
                  id: records.id,
                }
                return data
              }
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
