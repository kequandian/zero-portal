import React from 'react';
// import { Card } from 'antd';
import ImageView from 'zero-element-antd/lib/components/ImageView';
import { Flex } from 'layout-flex';

const { FlexItem } = Flex;

const ImageItem = ({ index, columns, data, ...rest }) => {
  return <div
    style={{
      width: 200,
      height: 130,
      padding: 8,
      boxShadow: '1px 1px 2px 0px #666666',
    }}
  >
    <ImageView
      value={data.url}
      width={180}
      height={90}
    />
    <Flex>
      <FlexItem
        // flex={1}
        style={{
          overflow: 'hidden',
          width: 130,
          whiteSpace: 'nowrap'
        }}
      >
        {data.name}
      </FlexItem>
      <FlexItem>
        {columns[0].render('', data, index)}
      </FlexItem>
    </Flex>
  </div>
}

export default ImageItem;
