module.exports = [
  {
    field: 'name', label: '页面名称', type: 'input',
  },
  {
    field: 'seq', label: '排序', type: 'number',
  },
  {
    field: 'display', label: '用户可见', type: 'radio',
    value: 1,
    options: [
      { label: '显示', value: 1 },
      { label: '隐藏', value: 0 },
    ]
  },
  // {
  //   field: 'pageId', label: '关联的页面', type: 'modal-radio',
  //   options: {
  //     API: '/api/pub/ow/pages?type=rtf',
  //     label: 'name',
  //     editLabel: 'pageName',
  //     pagination: true, // 允许分页
  //     fields: [
  //       { label: '页面名称', field: 'name' },
  //     ],
  //   }
  // },
];