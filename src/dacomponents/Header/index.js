/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月15日
 * @author lqq
 * @desc
 *
 */
import React, { PureComponent } from 'react';
import styles from './styles.less';
import { Menu, Dropdown, Icon } from 'antd';
import { router } from 'umi';
import pathToRegexp from 'path-to-regexp';
import { withTheme } from '@/utils/theme/customTheme';
import { dUserName } from '@/constants/localization';
import { logoSource } from '@/constants/projectConfig';

class Header extends PureComponent {
  state = {
    currentPage: '',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.activeMenuFun();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps?.location?.pathname !== this.props?.location?.pathname) {
    //   // 高亮公共方法
    //   this.activeMenuFun(nextProps);
    // }
  }

  // 高亮公共方法
  activeMenuFun = () => {
    const {
      route: { routes },
      location,
    } = this.props;
    const { pathname } = location;
    for (const elem of routes) {
      if (elem.path && pathToRegexp(elem.path).test(pathname)) {
        this.setState({
          currentPage: elem.name,
        });
      }
    }
  };

  //退出登录
  loginOutHandle = value => {
    switch (value.key) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        router.push('/user/login');
        break;
      case '5':
        break;
      default:
    }
  };

  handleClick = e => {
    this.setState({
      currentPage: e.key,
    });
    const { label } = e.item.props.data;
    if (label === '首页') {
      router.push({ pathname: '/home' });
    }
  };

  pageMenu = () => {
    let currentPage = this.state.currentPage;
    let routesArray = ['/example', '/home'];
    if (routesArray.indexOf(this.props.location.pathname) < 0) {
      currentPage = '';
    }
    let array = [
      {
        label: '首页',
      },
    ];

    let listView =
      array &&
      array.map((elem, index) => {
        // console.log(elem, '菜单')
        return (
          <Menu.Item key={elem.label} data={elem}>
            {elem.label}
          </Menu.Item>
        );
      });
    return (
      <Menu onClick={this.handleClick} selectedKeys={[currentPage]} mode="horizontal">
        {listView}
      </Menu>
    );
  };

  baseInfo = () => (
    <Menu onClick={this.loginOutHandle}>
      <Menu.Item key="1">
        <Icon type="user" />
        版本1.0
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="transaction" />
        标准版购买
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="setting" />
        功能介绍
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="close-circle" />
        使用手册
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  );

  render() {
    // let userParams = JSON.parse(localStorage.getItem('userParams'));
    return (
      // <div className={styles.background} style={{...this.props.theme.headerStyle}}>
      <div className={styles.normal}>
        {/* <div className={styles.logo}> */}
        {/* <DBreadcrumb {...this.props} /> */}
        {/* <img src={logoSource.logo} alt="" /> */}
        {/* </div> */}
        <span className={styles.projectName}>DAFrameWork</span>
        <div className={styles.page}>{this.pageMenu()}</div>
        <div className={styles.user}>
          <div className={styles.userName}>
            {
              // dUserName()
              '相数科技'
            }
          </div>
          <div className={styles.loginout}>
            <Dropdown overlay={this.baseInfo()}>
              <div className={styles.versions}>退出</div>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default withTheme(Header);
