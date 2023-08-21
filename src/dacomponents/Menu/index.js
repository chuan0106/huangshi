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
import { connect } from 'dva';
import { Menu } from 'antd';
const { SubMenu } = Menu;

function mapStateToProps({ global }) {
  return {
    global: global,
  };
}
@connect(mapStateToProps)
class Index extends PureComponent {
  state = {};
  constructor(props) {
    super(props);
    this.dom = null;
    this.myRef = React.createRef();
  }

  handleClick = () => {};
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.left}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 120, height: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title="菜单">
              <Menu.Item key="1">菜单一</Menu.Item>
              <Menu.Item key="2">菜单二</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}
export default Index;
