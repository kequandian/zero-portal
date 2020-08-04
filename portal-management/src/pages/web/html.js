import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/HTML';

export default function WebHtml(props) {
  useBreadcrumb([
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: 'HTML 管理' },
  ]);

  return <ZEle
    namespace='webHTML'
    config={config}
  />;
}