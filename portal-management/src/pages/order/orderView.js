import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Details, { useDetails } from '@/components/Details';
import Content from '@/layouts/Content';

export default function OrderView(props) {
  const [details, loading] = useDetails('order', props);

  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '订单管理' },
    { title: '订单' },
    { title: '订单详情' },
  ]);

  return <Content>
    <Details
      goBack
      loading={loading}
      data={details}
      fields={[
        { title: '基本信息' },
        { label: '订单号', field: 'orderNumber' },
        { label: '交易号', field: 'tradeNumber' },
        {
          label: '状态', field: 'status',
          map: {
            'CREATED_PAY_PENDING': '待支付',
            'CLOSED_PAY_TIMEOUT': '支付超时关闭',
            'CLOSED_CANCELED': '已取消',
            'PAID_CONFIRM_PENDING': '已支付',
            'CONFIRMED_DELIVER_PENDING': '待发货',
            'DELIVERING': '发货中',
            'DELIVERED_CONFIRM_PENDING': '已发货',
            'CANCELED_RETURN_PENDING': '待退货',
            'CLOSED_CONFIRMED': '已确认收货',
            'CANCELED_REFUND_PENDING': '待退款',
            'CLOSED_REFUNDED': '已退款',
            'CONFIRMED_PICK_PENDING': '待取货',
          }
        },
        {
          label: '支付类型', field: 'paymentType',
          map: {
            'WECHAT': '微信支付',
            'ALIPAY': '支付宝',
            'POINT': '积分支付',
            'STORE': '线下支付',
            'WALLET': '零钱钱包',
            'CASH': '现金',
            'CARD': '银行卡',
          }
        },
        {
          label: '配送方式', field: 'deliveryType',
          map: {
            'EXPRESS': '快递',
            'SELF_PICK': '自提',
            'FLASH': '极速送达',
          }
        },
        {
          label: '来源', field: 'origin',
          map: {
            'WPA': '微信公众号',
            'MINI_PROGRAM': '小程序',
            'APP_ANDROID': '手机应用程序',
            'APP_IOS': '手机应用程序',
            'IPAD': '手机应用程序',
            'OTHER': '其他',
          }
        },
        { label: '下单时间', field: 'createdDate' },
        { label: '支付时间', field: 'payDate' },
        { label: '确认时间', field: 'confirmDate' },
        { label: '成交时间', field: 'dealDate' },
        { label: '购买用户', field: 'userName' },

        { label: '邀请人', field: 'inviterUserName' },

        { title: '价格信息' },
        { label: '总价', field: 'totalPrice' },
        { label: '原价', field: 'originPrice' },
        { label: '优惠券价钱', field: 'couponPrice' },
        { label: '运费', field: 'freight' },
        { label: '积分抵扣价钱', field: 'creditPrice' },
        { label: '积分', field: 'payCredit' },
        { label: '退款金额', field: 'refundFee' },
        { label: '补交金额', field: 'supplementaryFee' },
        { label: '优惠券信息', field: 'couponInfo' },

        { title: '快递信息' },
        { label: '快递公司', field: 'expressCompany' },
        { label: '快递单号', field: 'expressNumber' },
        { label: '开始发货时间', field: 'deliverDate' },
        { label: '完成发货时间', field: 'deliveredDate' },

        { title: '联系人信息' },
        { label: '收货用户', field: 'contactUser' },
        { label: '电话', field: 'phone' },
       /* { label: '省', field: 'province' ,span:24},
        { label: '市', field: 'city' ,span:24},
        { label: '区', field: 'district' ,span:24},*/
        { label: '地址', field: 'detail' },

        { group: '订单项' },
        {
          label: '', field: 'orderItemList',
          columns: [
            { label: '产品封面', field: 'cover', valueType: 'image' },
            {
              label: '产品名称', field: 'productName',
              valueType: 'path',
              options: {
                path: '/product/productView',
                query: {
                  id: 'productId'
                },
              }
            },
            { label: '条码', field: 'barcode' },
            {
              label: '价格', field: 'price',
              align: 'right', valueType: 'currency',
            },
            {
              label: '成本价', field: 'costPrice',
              align: 'right', valueType: 'currency',
            },
            {
              label: '数量', field: 'quantity',
              align: 'right'
            },
            {
              label: '总价', field: 'finalPrice',
              align: 'right', valueType: 'currency',
            },
          ]
        },

        { group: '处理记录' },
        {
          label: '', field: 'orderProcessLogList',
          columns: [
            { label: '时间', field: 'processDate', },
            { label: '内容', field: 'content' },
          ]
        },
      ]}
    />
  </Content>;
}
