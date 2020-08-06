import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Details, { useDetails } from '@/components/Details';
import Content from '@/layouts/Content';

export default function FreightView(props) {
  const [details, loading] = useDetails('product', props);

  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '产品管理' },
    { title: '运费模板', path: '/product/freight' },
    { title: '运费模板详情' },
  ]);

  return <Content>
    <Details
      goBack
      loading={loading}
      data={details}
      fields={[
        { title: '基本信息' },
        { label: '模板名称', field: 'name' },
        { label: '标题', field: 'title' },
        { label: '内容', field: 'content' },
        { label: '销售类别', field: 'messageFormat' },
        { label: '发货时间', field: 'dispatchTime' },
        { label: '地址', field: 'shopAddr' },
        { field: 'lastModifiedDate', label: '最后编辑时间' },

        {
          label: '是否包邮', field: 'isInclPostage',
          map: {
            '1': '卖家承担运费',
            '0': '自定义运费',
          }
        },
        {
          label: '计价方式', field: 'valuationModel',
          map: {
            '0': '按件数',
            '1': '按重量',
            '2': '按体积',
          }
        },
        {
          label: '是否指定条件包邮', field: 'isInclPostageByIf',
          map: {
            '1': '是',
            '0': '否',
          }
        },
        {
          label: '运送方式', field: 'items',
          columns: [
            {
              label: '类型', field: 'carryWay', valueType: 'map',
              options: {
                map: {
                  0: '快递',
                  1: 'EMS',
                  2: '平邮'
                }
              }
            },
            { label: '地区', field: 'region' },
            { label: '首件数量', field: 'firstPiece' },
            { label: '首费', field: 'firstAmount', rules: ['required'] },
            { label: '续件', field: 'secondPiece' },
            { label: '续费', field: 'secondAmount', rules: ['required'] },
          ]
        },
      ]}
    />
  </Content>;
}
