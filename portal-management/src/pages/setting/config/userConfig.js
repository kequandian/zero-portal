
module.exports = {
  layout: 'Content',
  title: '微信用户列表',
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
            placeholder: '昵称/编号',
          },
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {

        API: {
          listAPI: '/api/crud/user/users',
          deleteAPI: '',
        },
        actions: [],
        fields: [
          {
            "field": "avatar",
            "label": "微信头像",
            valueType: 'image',
            options: {
              circle: true,
            }
          },
          {
            "field": "name",
            "label": "微信昵称"
          },
          {
            "field": "realName",
            "label": "真实姓名"
          },


          {
            "field": "uid",
            "label": "编号",
          },
          {
            "valueType": "tag",
            "field": "status",
            "label": "状态",
          },
          /* {
             "field": "followed",
             "label": "关注公众号",
             valueType: 'tag',
             options: {
               map: {
                 '0': '未关注',
                 '1': '已关注',
               },
               colorMap: {
                 '0': '#9E9E9E',
                 '1': '#135200',
               }
             }
           },
           {
             "field": "followTime",
             "label": "关注时间",
           },*/
          {
            "field": "invitationQrcodeUrl",
            "label": "我的邀请二维码",
            valueType: 'image',
          },
        ],
        operation: []
      },
    },
  ],
};
