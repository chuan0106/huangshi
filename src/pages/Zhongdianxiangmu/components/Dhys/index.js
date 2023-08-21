import React, { useState, useEffect } from 'react';
import styles from './styles.less';
import x from '@/assets/window/x.png';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message } from 'antd';
const Index = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '1st menu item',
          key: '1',
          icon: <UserOutlined />,
        },
      ]}
    />
  );
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
              <img src={x} />
            </span>
          </div>
          <div className={styles.nr2}>
            <div className={styles.bigBox}>
              <span className={styles.nr}>空间尺寸</span>
              <span className={styles.nr1} style={{ color: 'red' }}>
                32 ㎡
              </span>
            </div>
            <div className={styles.bigBox}>
              <span className={styles.nr}>空间情况</span>
              <span className={styles.nr1} style={{ color: 'red' }}>
                使用中
              </span>
            </div>
            <div className={styles.bigBox}>
              <span className={styles.nr}>空间情况</span>
              <span className={styles.nr1}></span>
            </div>
            {/* <div style={{marginLeft:'150px'}}>
                <Dropdown overlay={menu}>
              <Button>
                本日 <DownOutlined />
              </Button>
            </Dropdown>
            </div> */}
            <div className={styles.zh}> 
            {/* <iframe width="210px" height="180px" src='https://www.dataojo.com/docloud/#/report?f7f9d7439cd142ff8ee96c9768539fe4'></iframe>  */}
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
