import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Details, { useDetails } from '@/components/Details';
import Content from '@/layouts/Content';
import { Typography } from 'antd';

export default function LogsView(props) {
  const [details, loading] = useDetails('logs', props);

  useBreadcrumb(props, [
    { title: '主页', path: '/' },
    { title: '系统配置' },
    { title: '操作日志', path: '/sys/logs' },
    { title: '日志详情' },
  ]);

  return <Content>
    <Details
      goBack
      loading={loading}
      data={details}
      fields={[
        { label: '操作模块', field: 'module' },
        { label: '操作方法', field: 'method' },
        { label: '操作人员', field: 'userName' },
        { label: '操作时间', field: 'createTime' },
        { label: '操作内容', field: 'logName' },
        { title: '响应数据' },
        {
          label: '', field: 'message', alone: true,
          value: <Typography>{details.message}</Typography>
        },
      ]}
    />
  </Content>;
}