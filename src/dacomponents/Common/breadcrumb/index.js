/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年11月14日
 * @author lqq
 * @desc
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
// import pathToRegexp from 'path-to-regexp';
import { Icon, Breadcrumb } from 'antd';
import styles from './styles.less';

function DBreadcrumb({ array = [] }) {
  function addCrumbList() {
    const {
      location: { pathname },
    } = this.props;
    if (pathname === '/test') {
      array = [
        {
          pathname: {
            pathname: '/test1',
            query: null,
          },
          key: 1,
          name: '面包屑名称1',
        },
        {
          pathname: '/test2',
          key: 0,
          name: '面包屑名称2',
        },
      ];
    }

    let listView =
      array &&
      array.map(function(elem, index) {
        let Breadcrumb = null;
        if (!elem.key) {
          Breadcrumb = (
            <Breadcrumb.Item key={index + 'crumb'} style={{ color: 'black', fontSize: '16px' }}>
              {/*<Icon type="team" style={{fontSize:'16px'}} />&nbsp;*/}
              {elem.name}
            </Breadcrumb.Item>
          );
        } else {
          Breadcrumb = (
            <Breadcrumb.Item key={index + 'crumb'}>
              <Link replace to={elem.pathname}>
                <Icon type="home" style={{ fontSize: '16px' }} />
                &nbsp;
                <span style={{ fontSize: '16px' }}>{elem.name}</span>
              </Link>
            </Breadcrumb.Item>
          );
        }
        return Breadcrumb;
      });

    return listView;
  }
  return (
    <div className={styles.normal}>
      <Breadcrumb>{addCrumbList()}</Breadcrumb>
    </div>
  );
}

export default DBreadcrumb;
