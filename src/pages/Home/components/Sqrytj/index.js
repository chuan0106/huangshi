/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { Modal } from 'antd';
import x from '@/assets/window/x.png';

function mapStateToProps({ globalModel }) {
  return {
    globalModel: globalModel, //通用全局模块
  };
}
const listData = [
  {
    name: 'A座2005室',
    id: 1,
  },
  {
    name: 'A座4001室',
    id: 2,
  },
  {
    name: 'B座2003室',
    id: 3,
  },
  {
    name: 'B座2003室',
    id: 4,
  },
  {
    name: 'B座2003室',
    id: 5,
  },
  {
    name: 'B座2003室',
    id: 6,
  },
  {
    name: 'B座2003室',
    id: 7,
  },
  {
    name: 'B座2003室',
    id: 8,
  },
  {
    name: 'B座2003室',
    id: 8,
  },
  {
    name: 'B座2003室',
    id: 8,
  },
  {
    name: 'B座2003室',
    id: 8,
  },
  {
    name: 'B座2003室',
    id: 8,
  },
  {
    name: 'B座2003室',
    id: 8,
  },
];
function Index({ globalModel, dispatch }) {
  const [visible, setVisible] = useState(false);
  function openSocket(params) {
    dispatch({
      type: 'globalModel/getsocketEffect',
      payload: params,
    });
  }
  const handleClick = () => {
    let params = {
      message: 'DGp',
      topic: 'cloudVision',
    };
    openSocket(params);
    setVisible(true);
  };
  const clickX = () => {
    setVisible(!visible);
  };

  const getDomByListData = () => {
    return listData.map((val, inx) => {
      let Dom = (
        <div className={styles.content}>
          <span
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '14px',
              fontWeight: '400',
              marginLeft: '42px',
            }}
          >
            {val.name}
          </span>
          <span
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '12px',
              float: 'right',
              marginRight: '20px',
              cursor: 'pointer',
            }}
            onClick={() => {
              handleClick(val.id);
            }}
          >
            详情
          </span>
        </div>
      );
      return Dom;
    });
  };
  return (
    <div className={styles.normal}>
      <div className={styles.centerBox}>{getDomByListData()}</div>
      {visible && (
        <div className={styles.modal_} style={{ width: '914px', height: '295px' }}>
          <span
            style={{ position: 'absolute', top: '18px', right: '33px', zIndex: '1000' }}
            onClick={() => {
              clickX();
            }}
          >
            <img src={x} />
          </span>
          <iframe
            className={styles.myIframe}
            src="https://www.dataojo.com/docloud/#/report?07d3665b51584c2fb27300ae6b989f42"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default connect(mapStateToProps)(Index);
