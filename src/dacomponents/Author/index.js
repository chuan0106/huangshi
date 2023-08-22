/**
 * Copyright(C) 2021,by wx,All rights reserved
 * 文件功能:
 *
 * 创建日期：2021年2月22日
 *
 * 作者:
 *
 */
import { useEffect } from 'react';
// import styles from './styles.less';
import { connect } from 'dva';

import { Modal } from 'antd';

const dispatch = window.g_app._store.dispatch;

function Author({ authorVisiably }) {
  useEffect(() => {}, [authorVisiably]);
  function _okModal() {
    dispatch({
      type: 'setUpDoModel/changeAuthorVisiablyReducer',
      payload: false,
    });
  }

  function _cancelModal() {
    dispatch({
      type: 'setUpDoModel/changeAuthorVisiablyReducer',
      payload: false,
    });
  }
  return (
    <Modal
      centered
      title=""
      visible={authorVisiably}
      onOk={_okModal}
      onCancel={_cancelModal}
      width={400}
      footer={null}
      zIndex={9999}
      bodyStyle={{ height: 600 }}
      // maskStyle={{ background: 'rgba(255,255,255,0)' }}
    >
      <h1>总负责人：雷奇奇</h1>
      <h1>设计负责人：刘雅然</h1>
    </Modal>
  );
}
function mapStateToProps({ setUpDoModel }) {
  return {
    authorVisiably: setUpDoModel.authorVisiably,
  };
}

export default connect(mapStateToProps)(Author);
