/**
 * Copyright(C) 2019,by lqq,All rights reserved
 * 文件功能:
 *
 * 创建日期：2019年04月8日
 *
 * 作者: lqq
 *
 */
import React from 'react';
import styles from './styles.less';
// import docloud from "@/assets/logo/docloud.png";
const Load = ({ type = 'position', loading, loadStyle }) => {
  return (
    <div className={styles.normal} style={{ display: loading ? 'block' : 'none' }}>
      <div className={styles.load} />
    </div>
  );
};
export default Load;
