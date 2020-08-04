export default {
  layout: 'Content',
  title: '产品类别',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Search',
      config: {
        fields: [
          { field: 'name', label: '类别名称', type: 'input' }
        ]
      }
    },
    {
      span: 24,
      layout: 'Empty',
      component: 'TreeList',
      config: {
        field: 'subCategoryList',
        API: {
          listAPI: '/api/crud/product/productCategoryies',
          deleteAPI: '/api/crud/product/productCategoryies/(id)'
        },
        actions: [
          {
            title: '添加', type: 'path',
            options: {
              path: '/product/categroyAdd'
            }
          }
        ],
        fields: [
          /*{ field: '--', label: '',  width:200 },*/

          { field: 'name', label: '名称' },
          { field: 'cover', label: '封面', valueType: 'image'},
          { field: 'promotedProductCount', label: '首页推荐数量' },
          { field: 'sortOrder', label: '排序号' },
          { field: 'operation' }
        ],
        operation: [
          {
            title: '查看', action: 'path',
            options: {
              outside: true,
              path: '/product/categroyView',
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
              path: '/product/categroyEdit',
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
