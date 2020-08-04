import React from 'react';
import ZEle from 'zero-element';
import config from './config/refundConfig';

export default function Refund() {
  return <ZEle namespace='order' config={config} />;
}

