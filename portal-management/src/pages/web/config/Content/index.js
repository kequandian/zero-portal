export default {
  layout: 'Content',
  title: '文章管理',
  items: [
    {
      component: 'Search',
      config: {
        fields: [
          { field: 'title', label: '文章名称', type: 'input' },
          { field: 'type', label: '', type: 'empty', value: 'FASHION' },
        ]
      }
    },
    {
      component: 'TreeList',
      config: {
        field: 'subCategoryList',
        API: {
          listAPI: '/api/cms/articles',
          deleteAPI: '/api/cms/articles/(id)'
        },
        actions: [
          {
            title: '添加', type: 'path',
            options: {
              path: '/web/contentAdd'
            }
          }
        ],
        fields: [
          {
            "field": "cover",
            "label": "封面",
            valueType: 'image',
          },
          { field: 'title', label: '文章名称' },
          { field: 'sticky', label: '排序', align: 'right' },
          { field: 'createdTime', label: '创建时间' },

        ],
        operation: [
          {
            title: '编辑', action: 'path',
            options: {
              outside: true,
              path: '/web/contentEdit',
              queryData: (records) => {
                const data = {
                  id: records.id,
                }
                return data
              }
            }
          },
          {
            title: '删除', action: 'delete',
            expect: {
              expectedField: 'constant',
              expectedValue: '/^(?!1$)/',
            }
          }
        ],
      },
    },
  ]
}
