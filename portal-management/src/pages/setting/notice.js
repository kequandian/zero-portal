import React from 'react';
import ZEle from 'zero-element';
import config from './config/Notice/index.config';

export default function Eav() {
  return <ZEle namespace='notice' config={config} />;
}
