export default {
  layout: 'Content',
  title: '试用装申请',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Search',
      config: {

        fields: [
          {
            field: 'status', label: '状态', type: 'select',
            options: [
              { label: '申请中', value: 'APPLYING' },
              { label: '审核中', value: 'AUDITING' },
              { label: '发货中', value: 'DELIVERING' },
              { label: '发货完毕', value: 'DELIVERED' },
              { label: '未获得申请资格', value: 'REJECTED' },
            ]
          },
          { field: 'startTime', label: '开始时间', type: 'date' },
          { field: 'endTime', label: '结束时间', type: 'date' },
        ]
      }
    },
    {
      span: 24,
      layout: 'Empty',
      component: 'Table',
      config: {

        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/order/trialApplications',
          deleteAPI: '/api/crud/order/trialApplications/(id)'
        },
        fields: [
          { field: 'name', label: '试用名称' },
          { field: 'orderNumber', label: '订单号' },
          {
            field: 'status', label: '状态', valueType: 'map',
            options: {
              map: {

              }
            }
          },
          { field: 'createdTime', label: '申请时间' },
          { field: 'message', label: '用户信息' },
          { field: 'operation' }
        ],
        operation: [
          {
            title: '查看', action: 'path',
            options: {
              path: '/subsysManage-view',
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
              path: '/subsysManage-edit',
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
