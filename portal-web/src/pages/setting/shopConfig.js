import React from 'react';
import ZEle from 'zero-element';
import config from './config/shopConfig';

export default function ShopConfig() {
  return <ZEle namespace='shopConfig' config={config} />;
}