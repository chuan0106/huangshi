/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date new Date()
 * @author handsome WenQi.Wang
 * @desc 弹框样式1
 *
 */
import React from 'react';
import styles from './styles.less';
import Iframe from 'react-iframe';
// 内部组件
// import DINWidget from '@/components/DCBCommon/dinwidget';
function EFrame({ contentStyle }) {
  console.log(contentStyle, 'contentStylemiowm');
  if (!contentStyle) return null;
  const { fixedSize, interactionExternal } = contentStyle;
  //   -------- 弹框固定宽高 --------
  const screenBoxObj = {};
  if (fixedSize.status) {
    screenBoxObj.width = fixedSize.width;
    screenBoxObj.height = fixedSize.height;
  }
  return (
    <div className={styles.normal} style={screenBoxObj}>
      <Iframe
        url={interactionExternal?.url}
        width="100%"
        height="100%"
        loading="加载中..."
        id={`diframe`}
      />
    </div>
  );
}

export default EFrame;
