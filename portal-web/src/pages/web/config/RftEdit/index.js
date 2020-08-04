
export default {
  layout: 'EmptyTitle',
  title: '编辑页面内容',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        API: {
          getAPI: '/api/pub/ow/pages/[id]',
          updateAPI: '/api/ow/pages/[id]',
        },
        fields: [
          {
            label: '',
            field: 'content',
            type: 'rich-text',
          }
        ]
      }
    }
  ]
}
