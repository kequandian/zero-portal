import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/HTMLEdit';

export default function WebHTMLEdit(props) {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: 'HTML 管理', path: '/web/html' },
    { title: 'HTML 编辑' },
  ]);

  return <ZEle
    namespace='webHTML'
    config={config}
  />;
}