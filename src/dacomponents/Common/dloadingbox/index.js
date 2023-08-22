/**
 * Copyright(C) 2020,by lqq,All rights reserved
 * 文件功能:
 *
 * 创建日期：2020年07月08日
 *
 * 作者: lqq
 *
 */
import React from 'react';
import styles from './styles.less';

// import XIcon from '../xIcon';
const DLoadBox = ({ noDataImage, toLink = () => {} }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.noData} onClick={toLink}>
        <div className={styles.box}>
          <div className={styles.icon}>
            {/* <XIcon src={noDataImage} style={{ width: 60, height: 60 }} /> */}
          </div>
          <div className={styles.tit}>即刻开始您的大屏吧~</div>
        </div>
      </div>
    </div>
  );
};
export default DLoadBox;
