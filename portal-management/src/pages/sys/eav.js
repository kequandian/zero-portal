import React from 'react';
import ZEle from 'zero-element';
import config from './config/Eav/index.config';

export default function Eav() {
  return <ZEle namespace='eav' config={config} />;
}
