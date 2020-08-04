// const formFields = require('./form.config');
const editFormFields = require('./edit.form.config');

module.exports = {
  layout: 'Content',
  title: '广告组配置',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        fields: [
          {
            "field": "search",
            "label": "搜索",
            "type": "input",
            placeholder: '广告组名',
          },

        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {
        API: {
          //banner 轮播页

          listAPI: '/api/cms/pub/ad/groups',
         deleteAPI: '/api/cms/adm/ad/groups/(id)',
        },

       /* actions: [
          {
            title: '添加', type: 'modal',
            options: {
              modalTitle: '添加广告组',
              modalWidth: 900,
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      createAPI: '/api/cms/adm/ad/groups'
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          }
        ],*/
        fields: [


          {
            "field": "name",
            "label": "广告组",
          },



        ],
        operation: [
          /*查看该组所有广告，查看该组在播广告*/
          {
            title: '查看该组广告', action: 'path',
            options: {
              outside:true,
              path: '/setting/ad',
              // permission:'apply.view',
              // location:true
              query: {
                id: "id",
                name: "name",
              }
            }
          },

          {
            title: '编辑', action: 'modal',
            options: {
              modalTitle: '编辑广告组',
              modalWidth: 800,
              outside: true,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/cms/pub/ad/groups/(id)',
                      updateAPI: '/api/cms/adm/ad/groups/(id)',
                    },
                    fields: editFormFields,
                  }
                }
                ]
            }
          },

         /* {
            title: '删除', action: 'delete',
            options: {
              outside: true,

            }
          }*/


        ]
      },
    },
  ],
};
