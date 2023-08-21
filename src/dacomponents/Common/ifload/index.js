/**
 * Copyright(C) 2020,by lqq,All rights reserved
 * 文件功能: 全局提示信息
 *
 * 创建日期：2020年9月7日
 *
 * 作者: lqq
 *
 */
// import { Component } from 'react';
const IFLoad = ({ visiable, showValue, children }) => {
  if (visiable === showValue) {
    return children;
  } else {
    return null;
  }
};
export default IFLoad;
