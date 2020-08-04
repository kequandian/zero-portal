import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Details, { useDetails } from '@/components/Details';
import Content from '@/layouts/Content';
import { Button } from 'antd';
import { history } from 'umi';
import ImageView from 'zero-element-antd/lib/components/ImageView';
import Panel from 'zero-element-antd/lib/components/Panel';
import { Flex } from 'layout-flex';

export default function ProductView(props) {

  const [details, loading] = useDetails('product', props);

  useBreadcrumb(props, [
    { title: '主页', path: '/' },
    { title: '产品管理' },
    { title: '产品', path: '/product/items' },
    { title: '产品详情' },
  ]);

  return <Content>
    <Details
      goBack
      loading={loading}
      data={details}
      fields={[

        {
          group: '产品详情',
        },

        { title: '基本属性', alone: true },
        { label: '产品名称', field: 'name' },
        { label: '缩略名称', field: 'shortName' },
        { label: '品牌', field: 'brandName' },
        { label: '条形码', field: 'barcode' },
        { label: '类别', field: 'categoryName' },
        { label: '排序号', field: 'sortOrder' },

        {
          label: '分区', field: 'partnerLevelZone',
          map: {
            '1': '零元区',
            '2': '精品区',
            '3': '特价区',
          }
        },
        {
          label: '推荐', field: 'promoted',
          map: {
            '1': '是',
            '0': '否',
          }
        },
        {
          label: '状态', field: 'status',
          map: {
            'DRAFT': '草稿',
            'PENDING_APPROVAL': '待审核',
            'APPROVED': '已审核',
            'ONSELL': '上架',
            'OFFSELL': '下架',
          }
        },

        { title: '规格', alone: true },
        { label: '产品单位', field: 'unit' },
        { label: '重量(克)', field: 'weight' },
        { label: '体积(立方厘米)', field: 'bulk' },

        { title: '价格与活动', alone: true },
        { label: '价格', field: 'price' },
        { label: '建议售价', field: 'suggestedPrice' },
        { label: '成本价', field: 'costPrice' },
        { label: '分销价', field: 'distributionPrice' },
        { label: '优惠活动-积分', field: 'credit' },
        {
          label: '优惠活动-优惠券', field: 'allowCoupon',
          map: {
            1: '允许使用',
            0: '不允许使用',
          }
        },

        { title: '其它信息', alone: true },
        {
          label: '产品图片', field: 'productImageList',
          align: 'middle',
          value:
            <Flex justify="flex-start">
              <ImageView
                border
                value={details.productImageList}
              />
            </Flex>
        },
        {
          label: '海报', field: 'bannerList',
          align: 'middle',
          value:
            <ImageView
              border
              value={details.banner}
            />
        },
        {
          label: '运费模板', value: (
            <Button type="link" size="small" onClick={_ => {
              history.push({
                pathname: '/product/freightView',
                query: {
                  id: details.fareId,
                }
              })
            }}>
              {details.fareName}
            </Button>
          )
        },

        // { group: '产品描述' },
        {
          label: '描述', field: 'description',
          align: 'middle',
          alone: true,
          value: <Panel
            title="产品描述"
            defaultCollapse
            delayed
          >
            <div dangerouslySetInnerHTML={{ __html: details.description }}></div>
          </Panel>
        },

       /* {
          group: '分红设置',
        },
        {
          label: '', field: 'productSettlementProportionList',
          columns: [
            { field: 'level', label: '级别' },
            { field: 'name', label: '级别名称' },
            { field: 'value', label: '每件分成', align: 'right' },
            { field: 'rewardType', label: '单位' },
          ]
        },*/
      ]}
    />
  </Content>;


}
