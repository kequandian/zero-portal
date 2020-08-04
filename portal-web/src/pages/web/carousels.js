import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/Carousels';
import { Button } from 'antd';
import Content from '@/layouts/Content';
import { history } from 'umi';
import { Flex } from 'layout-flex';

const { FlexItem } = Flex;

export default function Carousels(props) {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '网站管理' },
    { title: '菜单管理', path: '/web/menu' },
    { title: '编辑轮播图' },
  ]);
  function goBack() {
    history.goBack();
  }

  return <Content>
    <Flex>
      <FlexItem>
        <h2>轮播图列表</h2>
      </FlexItem>
      <FlexItem>
        <Button onClick={goBack}>返回</Button>
      </FlexItem>
    </Flex>
    <ZEle namespace='web_carousels' config={config} />
  </Content>
}
