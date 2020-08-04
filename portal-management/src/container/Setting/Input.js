import React from 'react';
import { Input } from 'antd';

export default function InputWarpped({
  value, data, index,
  editID,
  onSaveChange,
}) {
  const isThisEdit = data.id === editID;
  return isThisEdit ?
    <Input defaultValue={value} onChange={onSaveChange} />
    : value;
}