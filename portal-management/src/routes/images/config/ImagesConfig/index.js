import formConfig from './formConfig';

export default {
  layout: 'Grid',
  title: '图片资源管理',
  items: [
    {
      span: 24,
      layout: 'ImagesManage',
      component: 'BaseSearch',
      config: {
        fields: [],
        actions: [
          // {
          //   title: '生成HTML', type: 'path',
          //   options: {
          //   },
          // },
          {
            title: '新增图片', type: 'modal',
            options: {
              // permission: 'portal.carousel.add',
              // localtion: true,
              modalTitle: '新增图片',
              items: [
                {
                  span: 24,
                  layout: 'DefaultForm',
                  component: 'BaseForm',
                  config: {
                    ACTIONTYPE: 'create',
                    API: {
                      createAPI: '/api/resource/images',
                    },
                    ...formConfig,
                  },
                }
              ],
            },
          }
        ],
      },
    },
    {
      span: 24,
      layout: 'DefaultList',
      component: 'BaseList',
      config: {
        API: {
          listAPI: '/api/resource/images',
          deleteAPI: '/api/resource/images/(id)',
        },
        fields: [
          { field: 'name', label: '位置' },
          {
            field: 'url', label: '图片',
            valueType: 'images'
          },
        ],
        operation: [
          {
            title: '编辑', action: 'modal',
            options: {
              outside: true,
              permission: 'portal.carousel.edit',
              localtion: true,
              modalTitle: '编辑图片',
              ACTIONTYPE: 'edit',
              items: [
                {
                  layout: 'DefaultForm',
                  component: 'BaseForm',
                  config: {
                    API: {
                      getAPI: '/api/resource/images/(id)',
                      updateAPI: '/api/resource/images/(id)',
                    },
                    ...formConfig,
                  },
                }
              ],
            },
          },
          {
            title: '删除', action: 'delete',
            options: {
              permission: 'portal.carousel.delete',
              localtion: true,
            }
          },
        ],
      },
    },
  ],
}