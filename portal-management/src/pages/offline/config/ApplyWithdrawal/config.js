const setting = require('./.setting/applyWithdrawal.js');

module.exports = {
  layout: 'Content',
  title: setting.pageName,
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        fields: [
          {
            "field": "search",
            "label": "搜索",
            "type": "input"
          }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {
        API: {
          listAPI: setting.listAPI,
          deleteAPI: setting.deleteAPI,
        },
        actions: [],
        fields: [
          {
            "options": {},
            "className": "",
            "field": "allianceName",
            "label": "盟友名称"
          },
          {
            "options": {},
            "className": "",
            "field": "balance",
            "label": "申请提现金额",
            valueType: 'currency',
            align: 'right',
          },
          {
            "options": {
              "map": {
                "0": "等待审批",
                "1": "审批通过"
              },
              "colorMap": {
                "0": "#ff2233",
                "1": "#135200"
              }
            },
            "className": "",
            "valueType": "tag",
            "field": "status",
            "label": "审批状态"
          },
          {
            "options": {},
            "className": "",
            "field": "createTime",
            "label": "申请时间"
          },
          {
            "options": {},
            "className": "",
            "field": "note",
            "label": "备注"
          }
        ],
        operation: [
          {
            "title": "删除",
            "action": "delete",
            "options": {
              "outside": false,
              "API": "/api/crud/bonus/offlineWithdrawals/(id)"
            },
          },
          {
            "title": "通过审批",
            "action": "request",
            "options": {
              "outside": true,
              "API": "/api/crud/bonus/offlineWithdrawals/pass/(id)",
              "method": "post"
            },
            "expect": {
              "expectedField": "status",
              "expectedValue": 0,
            }
          }
        ],
      },
    },
  ],
};
