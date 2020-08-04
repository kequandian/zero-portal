import React from 'react';
import ZEle from 'zero-element';
import config from './config/withdrawalConfig';

export default function OfflineOrder() {
  return <ZEle namespace='offline_order' config={config} />;
}
