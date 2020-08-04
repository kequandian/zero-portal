const formFields = require('./formFields');

module.exports = {
  layout: 'Content',
  title: '菜单管理',
  items: [
    {
      layout: 'Empty',
      component: 'TreeTable',
      config: {
        API: {
          listAPI: '/api/crud/ow/menus',
          deleteAPI: '/api/ow/menus/(id)',
        },
        actions: [
        ],
        fields: [
          { field: 'name', label: '页面名称' },
          {
            field: 'display', label: '用户可见',
            valueType: 'tag',
            options: {
              map: {
                0: '隐藏',
                1: '显示',
              },
              colorMap: {
                0: '#9E9E9E',
                1: '#135200',
              }
            }
          },
          { field: 'seq', label: '排序' },
        ],
        operation: [
          {
            title: '编辑菜单', action: 'modal',
            options: {
              outside: true,
              icon: 'setting',
              modalTitle: '编辑菜单配置',
              layout: 'Empty',
              items: [
                {
                  layout: 'Grid',
                  component: 'Form',
                  config: {
                    API: {
                      getAPI: '/api/pub/ow/menus/(id)',
                      updateAPI: '/api/ow/menus/(id)',
                    },
                    fields: formFields,
                  },
                }
              ],
            },
            expect: {
              expectedField: 'constant',
              expectedValue: 0,
            }
          },
          {
            title: '编辑内容',
            action: 'path',
            options: {
              path: '/web/rtfEdit',
              query: {
                id: 'pageId',
              }
            },
            expect: {
              expectedField: 'pageId',
              expectedValue: 'IS_NOT_NULL',
            }
          },
          {
            title: '编辑轮播图',
            action: 'path',
            options: {
              icon: 'picture',
              path: '/web/carousels',
              query: {
                id: 'adIdentifier',
              }
            },
            expect: {
              expectedField: 'adIdentifier',
              expectedValue: 'IS_NOT_NULL',
            }
          },
          {
            title: '编辑 HTML',
            action: 'path',
            options: {
              icon: 'code',
              path: '/web/htmlEdit',
              query: {
                id: 'html',
              }
            },
            expect: {
              expectedField: 'html',
              expectedValue: 'IS_NOT_NULL',
            }
          },
          {
            title: '新增子菜单', action: 'modal', options: {
              outside: true,
              modalTitle: '新增子菜单',
              layout: 'Empty',
              items: [
                {
                  layout: 'Grid',
                  component: 'Form',
                  config: {
                    API: {
                      createAPI: '/api/ow/menus/(id)',
                    },
                    fields: formFields,
                  },
                }
              ],
            },
            expect: {
              expectedField: 'lowest',
              expectedValue: '/^(?!1$)/',
            }
          },
          {
            title: '删除', action: 'delete',
            expect: {
              expectedField: 'constant',
              expectedValue: '/^(?!1$)/',
            }
          },
        ]
      },
    },
  ],
};
