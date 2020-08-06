import React from 'react';
import ZEle from 'zero-element';
import config from './config/userConfig';

export default function User() {
  return <ZEle namespace='setting' config={config} />;
}