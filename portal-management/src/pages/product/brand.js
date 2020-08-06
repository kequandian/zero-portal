import React from 'react';
import ZEle from 'zero-element';
import config from './config/Brand';

export default function Brand(props) {
  return <ZEle namespace='product' config={config} />;
}