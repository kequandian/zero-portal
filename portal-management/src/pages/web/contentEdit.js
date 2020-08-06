import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/ContentEdit';

export default function ContentEdit(props) {
  useBreadcrumb([
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: '文章管理', path: '/web/content' },
    { title: '编辑文章' },
  ]);

  return <ZEle namespace='webContent' config={config} />;
}