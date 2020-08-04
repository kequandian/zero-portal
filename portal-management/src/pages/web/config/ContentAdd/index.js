
export default {
  layout: 'BaseTitle',
  title: '添加文章',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        layout: 'Grid',
        layoutConfig: {
          value: false,
        },
        API: {
          createAPI: '/api/cms/website/fashion',
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
            field: 'sticky', label: '排序', type: 'number', value: 10,
            span: 12,
          },
          { field: 'summary', label: '', type: 'rich-text', span: 24 },
          { field: 'type', label: '', type: 'hidden', value: 'FASHION' },
        ],
      },
    }
  ]
}
