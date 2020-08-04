import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/Content';

export default function Content(props) {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: '产品类别' },
  ]);

  return <ZEle namespace='webContent' config={config} />;
}