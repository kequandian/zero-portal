const formFields = require('./withdrawalform.config');
export default {
  layout: 'Content',
  title: '线下提现',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Search',
      config: {

        fields: [
         /* { field: 'orderNumber', label: '订单号', type: 'input' },
          { field: 'contactUser', label: '收货人', type: 'input' },*/
          { field: 'search', label: '搜索', type: 'input',placeholder: '盟友名' },
          {
            field: 'searchMoney', label: '可提现金额', type: 'number-range',
            span: 6,
          },


        ]
      }
    },
    {
      span: 24,
      layout: 'Empty',
      component: 'Table',
      config: {

        API: {
          listAPI: '/api/alliance/ownerBalances',
         /* deleteAPI: '/api/alliance/ownerBalances/(id)'*/
        },
        actions: [
          /*{
            title: '添加订单', type: 'path',
            options: {
              icon: 'plus',
              path: 'order-add',
            }
          }*/
        ],
        fields: [

          { label: '盟友', field: 'userName' ,
            },

          {
            field: 'balance', label: '可提现金额',
            align: 'right', valueType: 'currency',

          },


          { field: 'operation' }
        ],
        operation: [
          {
            title: '提现', action: 'modal',
            options: {
              modalTitle: '提现',
              modalWidth: 640,
              outside: true,
              layout: 'Empty',
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
                      getAPI: '/api/alliance/ownerBalances/(id)',
                      createAPI: '/api/alliance/ownerBalances/(id)',
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          },

         /* {
            title: '删除', action: 'delete'
          }*/
        ],
      },
    },

  ]
}
