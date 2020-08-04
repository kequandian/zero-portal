import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Menu from './config/Menu';

export default (props) => {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: '菜单管理' },
  ]);

  return <Menu />;
}
