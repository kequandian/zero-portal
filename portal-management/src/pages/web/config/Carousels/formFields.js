module.exports = [
  {
    field: 'name', label: '名称', type: 'input',
  },
  {
    field: 'enabled', label: '启用', type: 'radio',
    value: 1,
    options: [
      { label: '是', value: 1 },
      { label: '否', value: 0 },
    ]
  },
  {
    field: 'images', label: '图片', type: 'upload-image',
    options: {
      API: `/api/fs/uploadx`,
      max: 1,
    }
  },
  {
    field: 'targetUrl',
    label: '跳转链接',
    type: 'text-area',
  }
];
