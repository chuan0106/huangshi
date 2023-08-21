/**
 * Copyright(C) 2019,by lqq,All rights reserved
 * 文件功能: 全局提示信息
 *
 * 创建日期：2019年9月20日
 *
 * 作者: lqq
 *
 */
import React from 'react';
import { createPortal } from 'react-dom';
// import ReactDOM, { createPortal } from 'react-dom';
import styles from './styles.less';

class DModal extends React.Component {
  state = {
    visiable: false,
  };
  constructor(props) {
    super(props);
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }

  closePop = () => {
    this.setState({
      visiable: false,
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.visiable !== nextProps.visiable) {
      this.setState({
        visiable: nextProps.visiable,
      });
    }
  }

  render() {
    return createPortal(
      <div className={styles.normal} style={{ display: this.state.visiable ? 'block' : 'none' }}>
        {this.props.children}
      </div>,
      this.node,
    );
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
}

export default DModal;
