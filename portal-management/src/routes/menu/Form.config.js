module.exports = {
  "fields": [
    {
      "field": "name",
      "label": "名称"
    },
    {
      "field": "seq",
      "label": "排序",
      "type": "number"
    },
    { field: 'pageId', label: '关联的页面', type: 'select-fetch',
    options: {
      API: '/api/pub/ow/pages?type=rtf',
      title: 'name',
      value: 'id',
    }
   }
  ]
}