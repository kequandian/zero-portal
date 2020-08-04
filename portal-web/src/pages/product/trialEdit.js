import React from 'react';
import ZEle from 'zero-element';
import config from './config/TrialEdit';

export default function TrialEdit(props) {
  return <ZEle namespace='product' config={config} />;
}