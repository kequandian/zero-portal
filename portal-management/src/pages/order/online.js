import React from 'react';
import ZEle from 'zero-element';
import config from './config/onlineConfig';

export default function Online() {
  return <ZEle namespace='order' config={config} />;
}
