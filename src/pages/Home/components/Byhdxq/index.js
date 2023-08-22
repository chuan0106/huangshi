import React, { useState, useEffect } from 'react';
import styles from './styles.less';
import x from '@/assets/window/x.png'

const Index = () => {
    const [show, setShow] = useState(true);

    const handleClick = () => {
      setShow(!show);
    };
    return (
        <>
        {show && (
        <div className={styles.normal}>
             <div className={styles.heard}>
          <span style={{ marginLeft: '10px' }}>报警信息</span>
          <span
            style={{ marginRight: '10px', cursor: 'pointer' }}
            onClick={() => {
              handleClick();
            }}
          >
            <img src={x}/>
          </span>
        </div>
            <div className={styles.nr2}>
        <iframe width="429px" height="150px" src='https://www.dataojo.com/docloud/#/report?b0f75d47ea1648cf974d96eb76e8390a'></iframe>

            </div>
        </div>
          )}
          </>
    );
}

export default Index;
