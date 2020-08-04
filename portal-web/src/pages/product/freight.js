import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/Freight';

export default function Freight(props) {
  useBreadcrumb([
    { title: '首页', path: '/' },
    { title: '产品管理' },
    { title: '运费模板' },
  ]);

  return <ZEle namespace='product' config={config} />;
}