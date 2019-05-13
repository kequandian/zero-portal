import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { ZEle } from 'zero-element';
import { Tabs } from 'antd';
import BasePageConfig from './config/BasePageConfig';
import PageConfig from './config/PageConfig';
import FooterConfig from './config/FooterConfig';

const { TabPane } = Tabs;
const Wrapped = ({ children }) => {
  return <div style={{ padding: '16px', background: '#fff' }}>
    {children}
  </div>
}

@connect(({ content, loading }) => ({
  modelStatus: content,
  namespace: 'content',
  loading: loading.effects,
}))
export default class Carousels extends PureComponent {
  render() {
    return (
      <Wrapped>
        <Tabs defaultActiveKey="portal" destroyInactiveTabPane={true}>
          <TabPane tab="基础页面" key="portal">
            <Wrapped>
              <ZEle {...this.props} config={BasePageConfig} />
            </Wrapped>
          </TabPane>
          <TabPane tab="附加页面" key="Product">
            <Wrapped>
              <ZEle {...this.props} config={PageConfig} />
            </Wrapped>
          </TabPane>
          <TabPane tab="页脚" key="Element">
            <Wrapped>
              <ZEle {...this.props} config={FooterConfig} />
            </Wrapped>
          </TabPane>
        </Tabs>
      </Wrapped>
    );
  }
}