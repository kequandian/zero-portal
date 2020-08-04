const formFields = require('./form.config');
const editFormFields = require('./edit.form.config');

module.exports = {
  layout: 'Content',
  title: '用户管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {

        fields: [
          {
            field: 'search', label: '搜索', type: 'input',
            props: {
              placeholder: '姓名, 电话, email,账号',
            }
          }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {

        API: {
          listAPI: '/api/adm/users',
          deleteAPI: '/api/adm/users/(id)'
        },
        actions: [
          {
            title: '添加', type: 'modal',
            options: {
              modalTitle: '添加用户',
              modalWidth: 900,
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      createAPI: '/api/adm/users'
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          }
        ],
        fields: [
          { field: 'name', label: '用户名' },
          { field: 'account', label: '登录账号' },
          { field: 'phone', label: '电话' },
          { field: 'orgName', label: '部门' },
          // { field: 'f2', label: '附属部门' },
          { field: 'positionName', label: '职位' },
          // {
          //   field: 'platformRoles', label: '角色', valueType: 'status',
          //   options: {
          //     statusMap: {
          //       'SUBSYS_OWNER': '子系统持有者',
          //       'MODULE_OWNER': '模块持有者',
          //       'TENANT': '租户',
          //       'AGENT': '代理'
          //     }
          //   }
          // },

          { field: 'email', label: 'Email' },
          {
            field: 'status', label: '状态', valueType: 'tag',
            options: {
              map: {
                '0': '停用',
                '1': '正常',
              },
              colorMap: {
                '0': '#ff2233',
                // '1': '',
              }
            }
          },
        ],
        operation: [
          {
            title: '编辑', action: 'modal',
            options: {
              modalTitle: '编辑用户',
              modalWidth: 800,

              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/adm/users/(id)',
                      updateAPI: '/api/adm/users/(id)',
                    },
                    fields: editFormFields,
                  }
                }
              ]
            }
          },
          {
            title: '停用', action: 'request',
            options: {
              expectedField: 'status',
              expectedValue: 1,
              API: '/api/adm/users/(id)/status',
              method: 'put',
            }
          },
          {
            title: '启用', action: 'request',
            options: {
              expectedField: 'status',
              expectedValue: 0,
              API: '/api/adm/users/(id)/status',
              method: 'put',
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
