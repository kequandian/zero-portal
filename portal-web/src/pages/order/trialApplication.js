import React from 'react';
import ZEle from 'zero-element';
import config from './config/trialApplicationConfig';

export default function TrialApplication() {
  return <ZEle namespace='order' config={config} />;
}