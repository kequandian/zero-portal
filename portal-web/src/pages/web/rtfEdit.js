import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/RftEdit';

export default function RftEditEdit(props) {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: '菜单管理', path: '/web/menu' },
    { title: '编辑页面内容' },
  ]);

  return <ZEle
    namespace='web_rftEdit'
    config={config}
  />;
}