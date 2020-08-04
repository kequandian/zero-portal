
export default {
  layout: 'BaseTitle',
  title: '编辑文章',
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
          getAPI: '/api/cms/articles/[id]',
          updateAPI: '/api/cms/articles/[id]',
        },
        fields: [
          {
            field: 'title', label: '名称', type: 'text-area',
            span: 24,
            rules: ['required'],
          },
          {
            field: 'image', label: '封面', type: 'upload-image',
            span: 12,
            options: {
              API: `/api/fs/uploadx`,
              max: 1,
            }
          },
          {
            field: 'sticky', label: '排序', type: 'number',
            span: 12,
          },
          { field: 'summary', label: '', type: 'rich-text', span: 24 },
          { field: 'type', label: '', type: 'hidden', value: 'FASHION' },
        ],
      },
    },
  ]
}
