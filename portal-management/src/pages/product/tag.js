import React from 'react';
import ZEle from 'zero-element';
import config from './config/Tag';

export default function Tag() {
  return <ZEle namespace='product' config={config} />;
}