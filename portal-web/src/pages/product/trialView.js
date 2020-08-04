import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Details, { useDetails } from '@/components/Details';
import Content from '@/layouts/Content';

export default function FreightView(props) {
  const [details, loading] = useDetails('product', props);

  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '试用装管理', path: '/product/trial' },
    { title: '试用装详情' },
  ]);

  return <Content>
    <Details
      goBack
      loading={loading}
      data={details}
      fields={[
        { label: '名称', field: 'name' },
        { label: '简短描述', field: 'shortNote' },
        { label: '排序号', field: 'sortOrder' },
        {
          label: '封面', value: (
            <a href={details.cover} rel="noopener noreferrer" target="_blank">
              {details.cover}
            </a>
          )
        },
        { label: '开始时间', field: 'endTime' },
        { label: '结束时间', field: 'endTime' },
        {
          label: '是否启用', field: 'enabled',
          map: {
            '1': '是',
            '0': '否',
          }
        },
        {
          label: '推荐产品',
          value: details.frontProduct && details.frontProduct.name
        },
        { label: '描述', field: 'description' },
      ]}
    />
  </Content>;
}
