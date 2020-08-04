module.exports = [
  {
    field: 'name', label: '部门', type: 'input',
    rules: ['required'],
  },
  {
    field: 'fullName', label: '部门名称', type: 'input',
    rules: ['required'],
  },
  {
    field: 'orgCode', label: '编号', type: 'input',
    rules: ['required'],
  },
  {
    field: 'orgType', label: '分类', type: 'select',
    options: [
      { label: '集团', value: 1 },
      { label: '公司', value: 2 },
      { label: '分公司', value: 3 },
      { label: '部门', value: 4 },
      { label: '工作组', value: 5 },
    ],
  },
  {
    field: 'userId', label: '负责人', type: 'modal-radio',
    options: {
      title: '选择负责人',
      API: '/api/sys/org/allSysUser',
      label: 'name',
      editLabel: 'userName',
      saveData: {
        phone: 'phone',
      },
      fields: [
        { label: '名字', field: 'name' },
        { label: '联系电话', field: 'phone' },
      ],
    },
    rules: ['required'],
  },
  { field: 'phone', label: '负责人电话', type: 'plain' },
  {
    field: 'note', label: '备注', type: 'text-area',
    span: 24,
    props: {
      autoSize: {
        minRows: 3,
      }
    }
  },
]