/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2021年9月9日
 * @author wx
 * @desc 弹框样式1
 *
 */
import React from 'react';
import styles from './styles.less';
import Iframe from 'react-iframe';
import IPConfig from '@/constants/IPConfig';

// 内部组件
// import DINWidget from '@/components/DCBCommon/dinwidget';
function PopScreen({ contentStyle, allFeild }) {
  if (!contentStyle) return null;
  const { fixedSize, interactionScreen } = contentStyle;
  //   -------- 弹框固定宽高 --------
  const screenBoxObj = {};
  if (fixedSize.status) {
    screenBoxObj.width = fixedSize.width;
    screenBoxObj.height = fixedSize.height;
  }
  let paramVal = '';
  if (interactionScreen.dataFilter) {
    for (const key in allFeild.table_head) {
      if (allFeild.table_head.hasOwnProperty(key)) {
        const element = allFeild.table_head[key];
        if (element.alias === interactionScreen.dataFilter) {
          paramVal = `&${interactionScreen.dataFilter}=${allFeild[element.key]}`;
          break;
        }
      }
    }
  }
  console.log(
    `${IPConfig.reportPath}/#/report?${interactionScreen.selectScreen}${paramVal}`,
    'iwmlxihkhsk',
  );
  return (
    <div className={styles.normal} style={screenBoxObj}>
      <Iframe
        url={`${IPConfig.reportPath}/#/report?${interactionScreen.selectScreen}${paramVal}`}
        width="100%"
        height="100%"
        loading="加载中..."
        id={`diframe`}
      />
    </div>
  );
}

export default PopScreen;
