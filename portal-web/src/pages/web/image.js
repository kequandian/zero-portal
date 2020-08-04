import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/Image';
import Item from './config/Image/Item';

export default function WebImage(props) {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: '图片管理' },
  ]);

  return <ZEle
    namespace='webImage'
    Item={Item}
    config={config}
  />;
}