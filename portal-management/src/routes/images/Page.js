import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { ZEle } from 'zero-element';
import ImagesConfig from './config/ImagesConfig';

@connect(({ images, loading }) => ({
  modelStatus: images,
  namespace: 'images',
  loading: loading.effects,
}))
export default class Carousels extends PureComponent {
  render() {
    return (
      <ZEle {...this.props} config={ImagesConfig} />
    );
  }
}