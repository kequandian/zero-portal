import React from 'react';
import ZEle from 'zero-element';
import config from './config/AdGroup/index.config';

export default function Eav() {
  return <ZEle namespace='adGroup' config={config} />;
}
