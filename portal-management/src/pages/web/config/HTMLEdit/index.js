
export default {
  layout: 'BaseTitle',
  title: '编辑 HTML',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        layout: 'Grid',
        layoutConfig: {
          value: [12, 12],
        },
        API: {
          getAPI: '/api/gw/portal/html/[id]',
          updateAPI: '/api/gw/portal/html/[id]',
        },
        fields: [
          { field: 'name', label: '文件名', type: 'plain', span: 24 },
          { field: 'content', label: '', type: 'text-area', span: 24 },
        ],
      },
    },
  ]
}
