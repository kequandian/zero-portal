"use strict";

module.exports = {
  "fields": [{
    field: 'name',
    label: '名称',
    type: 'input'
  }, {
    field: "url",
    "label": "图片",
    "type": "upload-image",
    options: {
      max: 1,
      API: '/api/upload/files'
    }
  }]
};