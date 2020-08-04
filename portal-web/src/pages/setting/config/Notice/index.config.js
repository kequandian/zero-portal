const editFormFields = require('./edit.form.config');

module.exports = {
  layout: 'Content',
  title: '公告管理',
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
            placeholder: '内容/标题/作者/编号',
          },
          {
            field: 'enabled',
            label: '状态',
            type: 'select',
            options: [
              { label: '停用', value: 0 },
              { label: '正常', value: 1 },
            ]
          },
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {

        API: {
          listAPI: '/api/cms/notice/notices',
          deleteAPI: '/api/cms/notice/notices/(id)',
        },

        actions: [
          {
            title: '添加', type: 'modal',
            options: {
              modalTitle: '添加新的公告',
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
                      createAPI: '/api/cms/notice/notices'
                    },
                    fields: editFormFields,
                  }
                }
              ]
            }
          }
        ],
        fields: [
          /* {
             "field": "id",
             "label": "公告编号"
           },*/
          {
            "field": "author",
            "label": "作者"
          },
          {
            "field": "title",
            "label": "标题"
          },
          /* {
             "field": "sortNum",
             "label": "排序号"
           },*/
          {
            "field": "type",
            "valueType": "tag",
            "label": "公告种类",
            options: {
              map: {
                'System': '系统',
                'Internal': '内部',
                'External': '外部',
              },
              colorMap: {
                'System': '#000000',
                'Internal': '#3399CC',
                'External': '#00CCCC',
              }
            }
          },
          {
            "field": "status",
            "valueType": "tag",
            "label": "发布情况",
            options: {
              map: {
                'Draft': '草稿',
                'Publish': '发布',
                'Deprecated': '已取消',
                'Expired': '已过期',
              },
              colorMap: {
                'Draft': '#AAAAAA',
                'Publish': '#3399CC',
                'Deprecated': '#999',
                'Expired': '#666',
              }
            }
          },



          { label: '创建时间', field: 'createTime' },
          { label: '到期时间', field: 'endTime' },

          {
            "field": "enabled",
            "valueType": "tag",
            "label": "启用状况",
            options: {
              map: {
                '0': '停用',
                '1': '正常',
                '2': '已过期',
              },
              colorMap: {
                '0': '#999999',
                '2': '#666',
                // '1': '',
              }
            }
          },
          {
            "field": "endDate",

            "label": "距离过期天数",

          },

        ],
        operation: [
          {
            title: '排序', action: 'sort',
            options: {
              entity: 'notice',
            }
          },
          {
            title: '编辑', action: 'modal',
            options: {
              modalTitle: '编辑通知',
              modalWidth: 800,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/cms/notice/notices/(id)',
                      updateAPI: '/api/cms/notice/notices/(id)',
                    },
                    fields: editFormFields,
                  }
                }

              ]
            }
          },
          {
            title: '下架', action: 'request',
            options: {
              outside: true,
              expectedField: 'status',
              expectedValue: 'Publish',
              API: '/api/cms/notice/notices/(id)/deprecate',
              method: 'put',
            }
          },
          {
            title: '发布', action: 'request',
            options: {
              outside: true,
              expectedField: 'status',
              expectedValue: 'Draft',
              API: '/api/cms/notice/notices/(id)/publish',
              method: 'put',
            }
          },
          {
            title: '重新发布', action: 'request',
            options: {
              outside: true,
              expectedField: 'status',
              expectedValue: 'Deprecated',
              API: '/api/cms/notice/notices/(id)/publish',
              method: 'put',
            }
          },
          {
            title: '停用', action: 'request',
            options: {
              outside: true,
              expectedField: 'enabled',
              expectedValue: 1,
              API: '/api/cms/notice/notices/(id)/disable',
              method: 'put',
              tips: '确定要停用这条公告吗?',
            }
          },
          {
            title: '启用', action: 'request',
            options: {
              outside: true,
              expectedField: 'enabled',
              expectedValue: 0,
              API: '/api/cms/notice/notices/(id)/enable',
              method: 'put',
            }
          },
          {
            title: '删除', action: 'delete',
            options: {
              expectedField: 'enabled',
              expectedValue: '/(0|2)/',
            }
          },
        ]
      },
    },
  ],
};
