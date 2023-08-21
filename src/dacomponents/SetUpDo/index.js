/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年04月24日
 * @author lqq
 * @desc
 *
 */
import React, { Fragment, useState } from 'react';
import { router } from 'umi';
import styles from './styles.less';

/**
 *插件
 *@param {classNames}
 */
import { connect } from 'dva';
import classNames from 'classnames';

/**
 * UI组件
 */
import { message, Button } from 'antd';

/**
 * 业务组件
 * @param {xxxx} 异常页面
 */
import Author from '../Author';

/**
 * 本地资源
 */

const dispatch = window.g_app._store.dispatch;

function mapStateToProps({ setUp }) {
  return {
    setUp: setUp,
  };
}

function SetUpDo() {
  const [visiable, setVisiable] = useState(false);
  function setUpDoHandleClick() {
    setVisiable(!visiable);
  }
  function handleClick(value) {
    switch (value) {
      case 1:
        router.push({ pathname: '/dodesign/one' });
        break;
      case 2:
        router.push({ pathname: '/docase/list' });
        break;
      case 3:
        router.push({ pathname: '/example/one' });
        break;
      case 4:
        router.push({ pathname: '/dwarehouse/one' });
        break;
      case 5:
        router.push({ pathname: '/home' });
        break;
      case 6:
        router.push({ pathname: '/udcomponents' });
        break;
      default:
    }
  }

  function menuHandleClick(value) {
    switch (value) {
      case 1:
        dispatch({ type: 'sysModel/changeMenuTypeReducer', payload: 1 });
        break;
      case 2:
        dispatch({ type: 'sysModel/changeMenuTypeReducer', payload: 2 });
        break;
      case 3:
        dispatch({ type: 'sysModel/changeMenuTypeReducer', payload: 3 });
        break;
      default:
    }
  }

  function phandleClick(value) {
    switch (value) {
      case 1:
        router.push({ pathname: '/productdesign/product' });
        break;
      case 2:
        router.push({ pathname: '/productdesign/design' });
        break;
      default:
    }
  }

  function ahandleClick(value) {
    switch (value) {
      case 1:
        dispatch({
          type: 'setUpDoModel/changeAuthorVisiablyReducer',
          payload: true,
        });
        break;
      case 2:
        break;
      default:
    }
  }

  function dhandleClick(value) {
    switch (value) {
      case 1:
        break;
      case 2:
        break;
      default:
    }
  }

  // changeMenuTypeReducer
  return (
    <div className={visiable ? styles.normalShow : styles.normalHidden}>
      <div className={styles.buttonView} onClick={setUpDoHandleClick}>
        Do
      </div>
      <div className={styles.contentView}>
        <div>
          <Button type="primary" onClick={() => handleClick(5)}>
            返回应用
          </Button>
        </div>
        <Fragment>
          <span style={{ fontSize: 18 }}>DAF</span>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => ahandleClick(1)}>
            作者
          </div>
        </Fragment>
        <Fragment>
          <span style={{ fontSize: 18 }}>产品设计</span>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => phandleClick(1)}>
            产品要素
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => phandleClick(2)}>
            设计要素
          </div>
        </Fragment>
        <Fragment>
          <span style={{ fontSize: 18 }}>服务支撑</span>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => dhandleClick(1)}>
            存储
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => dhandleClick(2)}>
            应用提供
          </div>
        </Fragment>
        <Fragment>
          <span style={{ fontSize: 18 }}>项目切换</span>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => handleClick(1)}>
            DoDesign
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => handleClick(2)}>
            DoCase
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => handleClick(6)}>
            用户自定义组件
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => handleClick(3)}>
            应用示例
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => handleClick(4)}>
            仓库
          </div>
        </Fragment>
        {/* 菜单样式 */}
        <div className={styles.line}></div>
        <Fragment>
          <span style={{ fontSize: 18 }}>菜单类型</span>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => menuHandleClick(1)}>
            导航栏
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => menuHandleClick(2)}>
            左侧菜单
          </div>
          <div className={styles.name} style={{ marginTop: 20 }} onClick={() => menuHandleClick(3)}>
            导航栏+左侧菜单
          </div>
        </Fragment>
        <Author></Author>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(SetUpDo);
