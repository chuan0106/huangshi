import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.less';

function popMapbox(marker, node) {
  console.log('lksjdfklsnodendf', node);
  function labelDom() {
    return (
      <div
        className={styles.normal}
        style={{ width: 300, height: 200, background: 'orange' }}
      ></div>
    );
  }
  return ReactDOM.render(labelDom(), node);
}

export default popMapbox;
