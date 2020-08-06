import childFields from './childFields';
import ImageView from 'zero-element-antd/lib/components/ImageView';

const API = require('../.API/add.api.js');

export default {
  layout: "BaseTitle",
  title: "添加订单",
  items: [
    {
      "layout": "Content",
      "component": "Form",
      "config": {
        "layout": "Grid",
        "layoutConfig": {
          "layoutType": "horizontal",
          value: [12, 12]
        },
        "fields": [
          {
            field: 'empty_1', label: '', type: 'plain', value: '发货信息', span: 24,
            style: {
              fontSize: 21,

            },
          },



          {
            field: 'userId', label: '下单用户', type: 'modal-radio',
            options: {
              title: '选择用户',
              API: '/api/crud/order/orders/getUsers',
              label: 'name',//对应查出表中的字段 显示
              editLabel: 'userId',//对应原有表中的字段 要修改的字段
              value: 'id',    //传入数据库中的值 查出来表中的字段
              pagination: true,
              fields: [

                { label: '微信用户', field: 'name' },
                { label: '姓名', field: 'realName' },

              ],
            },
            rules: ['required'],
          },

          {
            field: 'createDate', label: '下单时间', type: 'date',
            options: {
              nowTime: false,
              format: 'YYYY-MM-DD'
            },
            span: 12,
            rules: ['required'],
          },

          {
            field: 'paymentTypes', label: '支付类型', type: 'plain',
            value: '线下支付',
          },

          /*  {
              field: 'imges', label: '订单图片', type: 'upload-image',
              options: {
                API: '/api/uploadfile',
                max: 1
              },
              span: 24
            },*/

          /*{
            "label": "条码",
            "field": "barcode",
            "type": "input",
            "props": {
              "placeholder": "请输入……"
            },
            "rules": ["required"]
          },*/


          /* {
             "label": "总价",
             "field": "totalPrice",
             "type": "number",
             "props": {
               "placeholder": "请输入……",
               "min": 0
             }
           },*/
          {
            field: 'empty_2', label: '', type: 'plain', value: '收货信息', span: 24,
            style: {
              fontSize: 21,

            },
          },


          {
            "label": "收货人",
            "field": "name",
            "type": "input",
            "props": {
              "placeholder": "请输入收货人信息"

            },
            rules: ['required'],
            span: 24
          },
          {
            "label": "收货人手机号",
            "field": "phone",
            "type": "input",
            "props": {
              "placeholder": "请输入收货人手机号"
            },
            rules: ['phone', 'required'],

          },


          { field: 'pcd', label: '省市区', type: 'pcd', span: 24, },
          { field: 'province', label: '', type: 'hidden', },
          { field: 'city', label: '', type: 'hidden', },
          { field: 'district', label: '', type: 'hidden', },

          /* { field: 'storeGuideUserName',type: "input", label: '店铺/收银员' },*/
          {
            "label": "收货地址",
            "field": "detail",
            "type": "text-area",
            span: 24,
            "props": {
              "placeholder": "请输入详细地址"
            },
            rules: ['required'],
          },



          {
            field: 'tip', label: '提示', type: 'plain',
            value: '线下订单不提供修改操作，请确认后再保存',
            size: 20,
            style: {
              color: '#CC0033',

            }

          },


          {
            field: 'items', label: '', type: 'one-mary', span: 24,
            options: {

              actions: [
                {
                  title: '新增订单项', type: 'children-modal-add', options: {
                    modalTitle: '新增订单项',
                    modalWidth: 580,
                    items: [
                      {
                        layout: 'Empty',
                        component: 'ChildrenForm',
                        config: {
                          layout: 'Grid',
                          layoutConfig: {
                            value: [12, 12],
                          },
                          API: {},
                          fields: childFields,
                        },
                      }
                    ],
                  }
                },
              ],
              fields: [
                {
                  field: 'name', label: '产品',

                },
                {
                  "label": "数量",
                  "field": "quantity",

                },
                {
                  "label": "单价",
                  "field": "price",

                },

                {
                  "label": "条形码",
                  "field": "barcode",

                },

                {
                  "label": "总价",
                  "field": "totalPrice",
                  valueType: 'math',
                  options:
                    { type: 'multiply', fields: ['price', 'quantity'] }
                },

              ],
              operation: [
                {
                  title: '移除', action: 'removeChild',
                  options: {
                    outside: true,
                  }
                },
              ],
            }
          }

        ],
        "API": {
          "createAPI": API.createAPI
        }
      }
    },
    /* {
       layout: 'Content',
       component: 'ChildrenList',
       config: {
         itemsField: 'items',
         actions: [
           {
             title: '新增订单项', type: 'children-modal-add', options: {
               modalTitle: '新增订单项',
               modalWidth: 580,
               items: [
                 {
                   layout: 'Empty',
                   component: 'ChildrenForm',
                   config: {
                     layout: 'Grid',
                     layoutConfig: {
                       value: [12, 12],
                     },
                     API: {},
                     fields: childFields,
                   },
                 }
               ],
             }
           },
         ],
         fields: [
           {
             field: 'name', label: '产品',

           },
           {
             "label": "数量",
             "field": "quantity",

           },
           {
             "label": "单价",
             "field": "price",

           },

           {
             "label": "条形码",
             "field": "barcode",

           },

           {
             "label": "总价",
             "field": "totalPrice",
             valueType: 'math',
             options:
               { type: 'multiply', fields: ['price', 'quantity'] }
           },

         ],
         operation: [
           {
             title: '移除', action: 'removeChild',
             options: {
               outside: true,
             }
           },
         ],
       },
     }*/


  ]
}
