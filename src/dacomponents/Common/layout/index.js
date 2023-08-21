/**
 * Copyright(C) 2019,by lqq,All rights reserved
 * 文件功能:
 *
 * 创建日期：2019年08月20日
 *
 * 作者: lqq
 *
 */
// import { PureComponent, Component } from 'react';
import styles from './styles.less';

//菜单
const Sider = () => {
  return <div style={styles.docloud}>Sider</div>;
};
//头部
const Header = () => {
  return <div style={styles.docloud}>Header</div>;
};
//内容
const Content = () => {
  return <div style={styles.docloud}>Header</div>;
};
//底部
const Footer = () => {
  return <div style={styles.docloud}>Footer</div>;
};
//布局
const Layout = () => {
  return <div style={styles.docloud}>Layout</div>;
};

Layout.Sider = Sider;
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
