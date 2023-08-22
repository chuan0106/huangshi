import React, { useState } from 'react';
import styles from './styles.less';
import x from '@/assets/window/x.png';

const Index = ({callback}) => {
  const handleClick = (event) => {
    if (callback) {
      callback(false);
    }
  };
  return (
        <div className={styles.normal}>
          <div className={styles.heard}>
            <span style={{ marginLeft: '10px' }}>刘村19-共享空间</span>
            <span
              style={{ marginRight: '10px', cursor: 'pointer' }}
              onClick={() => {
                handleClick();
              }}
            >
              <img src={x} />
            </span>
          </div>
          <div className={styles.nr2}>
            <div className={styles.yi}>
              <div className={styles.san}>
                <span className={styles.wu}>空间名称</span>
                <span className={styles.liu}>共享厨房</span>
              </div>
              <div className={styles.san}>
                <span className={styles.wu}>容纳人数</span>
                <span className={styles.liu}>10人</span>
              </div>
            </div>

            <div className={styles.yi}>
              <div className={styles.san}>
                <span className={styles.wu}>空间名称</span>
                <span className={styles.liu}>洗衣房</span>
              </div>
              <div className={styles.san}>
                <span className={styles.wu}>容纳人数</span>
                <span className={styles.liu}>10人</span>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Index;
