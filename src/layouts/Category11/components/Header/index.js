//项目中心通用项目表头
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import moment from "moment";
import user from '@/assets/header/logoout.png';
import Menu from '../Menu'
import Time from '../../../../components/Time';
const currentRouterArr = ['111', '222', '33','44'];
function mapStateToProps({ globalModel }) {
  return { globalModel: globalModel };
}
@connect(mapStateToProps)
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // time: moment().format('YYYY-MM-DD HH:mm:ss')
      userShow: false
    }
  }
  //渲染前调用
  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     time: this.getTime()
    //   })
    // }, 1000);
  }
  //获取当前时间
  // getTime = () => {
  //   return moment().format('YYYY-MM-DD HH:mm:ss');
  // }
    // 顶部打开侧边栏按钮
    clickFun = data => {
      if (this.props.globalModel.showSlider == 'block') {
        this.props.dispatch({ type: 'globalModel/setMenuShow', payload: 'none' });
      } else {
        this.props.dispatch({ type: 'globalModel/setMenuShow', payload: 'block' });
      }
    };
  //用户点击
  userClickFun = () => {
    let { userShow } = this.state;
    this.setState({ userShow: !userShow })
  }
  delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
  //退出登录
  quitLogin = () => {
    this.delCookie('cname');
    this.props.dispatch({ type: 'globalModel/getLogoutEffects' })
    // console.log('退出登录啦');

  }


  render() {
    let { activeMenuItemName, modelID } = this.props.globalModel;
    let { userShow } = this.state;
    return (
      <div className={styles.normal} >
        <div className={styles.top}>
          <div className={styles.headerMenu}>
          {/*<Menu />*/}
          {/* 项目示例 */}
          <div className={styles.des}>
            {/* <span className={`${styles.ponit} ${currentRouter ? currentRouterArr.indexOf(currentRouter) > -1 ? null : styles.ponit1 : styles.ponit1}`}>
              {currentRouterArr.indexOf(currentRouter) > -1 ? '黄骅智慧渔港综合信息服务平台' : '黄骅智慧渔港综合信息服务平台'}
            </span> */}
          </div>
          </div>
          {/* <div className={styles.center}> */}
          <div className={styles.headerTitle}>
            {/*<span className={styles.title}> 黄骅智慧渔港综合信息服务平台</span>*/}
            {/*<span className={styles.titleEnglish}>Integrated information service system of Huanghua intelligent fishing port</span>*/}
          </div>
          {/*<div className={styles.headerTime}>*/}
          {/*  <Time />*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}
export default Header;
