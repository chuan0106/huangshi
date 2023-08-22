import React from 'react';
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
        <span style={{ marginLeft: '10px' }}>漏电报警</span>
        <span
          style={{ marginRight: '10px', cursor: 'pointer' }}
          onClick={() => {
            handleClick();
          }}
        >
          <img src={x} />
        </span>
      </div>
      <div className={styles.bigBox}>
        <span className={styles.nr}>报警位置：</span>
        <span className={styles.nr1}>刘村19-1</span>
      </div>
      <div className={styles.bigBox}>
        <span className={styles.nr}>发生时间：</span>
        <span className={styles.nr1}>2022.4.12 12:15</span>
      </div>
    </div>
  );
};

export default Index;
