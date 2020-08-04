import React from 'react';
import ZEle from 'zero-element';
import config from './config/setExpressConfig';

export default function SetExpress() {
  return <ZEle namespace='order' config={config} />;
}
