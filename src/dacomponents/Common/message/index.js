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
import ReactDOM, { createPortal } from 'react-dom';
import styles from './styles.less';

// class DMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     const doc = window.document;
//     this.node = doc.createElement("div");
//     doc.body.appendChild(this.node);
//   }
//
//   render() {
//     return createPortal(
//       // this.props.children,
//       <div className={styles.normal}>啊哈哈哈哈哈哈哈哈哈哈，我来啦</div>,
//       this.node //传送门的另一端DOM node
//     );
//   }
//
//   componentWillUnmount() {
//     window.document.body.removeChild(this.node);
//   }
// }

// export  DMessage;
class DMessage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return createPortal(
      // this.props.children,
      <div className={styles.normal}>
        <div>北京相数科技</div>
        <div>因为性能问题导致组件加载失败，网速太慢了</div>
      </div>,
      node,
    );
  }
}
const doc = window.document;
let node = doc.createElement('div');
doc.body.appendChild(node);

//销毁
function ddestroy() {
  window.document.body.removeChild(node);
}
dxMessage.ddestroy = ddestroy;
export default function dxMessage() {
  return ReactDOM.render(<DMessage></DMessage>, node);
}
