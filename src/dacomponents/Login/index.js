/**
 * Copyright(C) 2021,by wx,All rights reserved
 * 文件功能: 测试正则
 *
 * 创建日期：2021年2月22日
 *
 * 作者: wx
 *
 */
import { useEffect } from 'react';
// import styles from './styles.less';
import { connect } from 'dva';

import { Modal } from 'antd';

const dispatch = window.g_app._store.dispatch;

function DLogin({ loginVisiablely }) {
  useEffect(() => {}, [loginVisiablely]);
  function _okModal() {
    dispatch({
      type: 'global/loginVisiablelyReducer',
      payload: false,
    });
  }

  function _cancelModal() {
    dispatch({
      type: 'global/loginVisiablelyReducer',
      payload: false,
    });
  }
  return (
    <Modal
      centered
      title=""
      visible={loginVisiablely}
      onOk={_okModal}
      onCancel={_cancelModal}
      width={400}
      footer={null}
      // zIndex={1000}
      bodyStyle={{ height: 600 }}
      // maskStyle={{ background: 'rgba(255,255,255,0)' }}
    ></Modal>
  );
}
function mapStateToProps({ global }) {
  return {
    loginVisiablely: global.loginVisiablely,
  };
}

export default connect(mapStateToProps)(DLogin);
