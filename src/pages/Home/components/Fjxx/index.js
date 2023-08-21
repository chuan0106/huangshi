import React, { useState, useEffect } from 'react';
import styles from './styles.less';
import x from '@/assets/window/x.png'

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
            <img src={x}/>
          </span>
        </div>
        <div className={styles.bti}>室内节能指标</div>
        <div className={styles.nr2}>
          <div className={styles.bigBox}>
            <span className={styles.nr}>热表数据</span>
            <span className={styles.nr1}>4.69 kWh</span>
          </div>
          <div className={styles.bigBox}>
            <span className={styles.nr}>电表数据</span>
            <span className={styles.nr1}>4.69 kWh</span>
          </div>
          <div className={styles.bigBox}>
            <span className={styles.nr}>水表数据</span>
            <span className={styles.nr1}>4.69 m³</span>
          </div>
    
        </div>
      </div>
  );
};

export default Index;
