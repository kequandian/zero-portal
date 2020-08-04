module.exports = [
  {
    field: 'account', label: '登录账号', type: 'plain', span: 12,
  },
  {
    field: 'hidden_1', label: '', type: 'hidden', value: '',
  },
  {
    field: 'roleIds', label: '角色', type: 'modal-checkbox', span: 12,
    options: {
      API: '/api/adm/roles',
      title: '选择角色',
      field: 'roles',
      fields: [
        { label: '名称', field: 'name' },
        { label: '备注', field: 'tips' },
      ]
    },
    rules: ['required'],
  },
  {
    field: 'email', label: '邮箱', type: 'input',
    // rules: ['required'],
    span: 12
  },
  {
    field: 'avatar', label: '头像', type: 'upload-image',
    options: {
      API: `/api/fs/uploadx`,
      max: 1,
    },
    span: 12
  },
  {
    field: 'name', label: '用户名', type: 'input',
    span: 12
  },
  {
    field: 'phone', label: '电话', type: 'input',
    span: 12
  },
  {
    field: 'sex', label: '性别', type: 'radio',
    options: [
      { label: '男', value: '0' },
      { label: '女', value: '1' }
    ],
    span: 12
  },
  {
    field: 'birthday', label: '出生年月', type: 'date',
    options: {
      nowTime: false,
      format: 'YYYY-MM-DD'
    },
    span: 24
  },
];
