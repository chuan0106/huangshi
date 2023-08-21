import React, { useState, useEffect } from 'react';
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
          <span style={{ marginLeft: '10px' }}>刘村19-1</span>
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
          <div className={styles.bigBox}>
            <span className={styles.nr}>居住总人数</span>
            <span className={styles.nr1} style={{ color: 'red' }}>
              2人
            </span>
          </div>
          <div className={styles.bigBox}>
            <span className={styles.nr}>年龄：27 岁</span>
            <span className={styles.nr1}>性别：男</span>
          </div>
          <div className={styles.bigBox}>
            <span className={styles.nr}>婚姻：未婚</span>
            <span className={styles.nr1}>同住人：1人</span>
          </div>
          <div className={styles.bigBox}>
            <span className={styles.nr}>职业：外卖骑手</span>
          </div>
        </div>
      </div>
  );
};

export default Index;
