import React, { PureComponent } from 'react';
import styles from './styles.less';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Popover, Switch, Tooltip } from 'antd';
import { FlyToInterpolator } from 'deck.gl';
import icon1 from '@/assets/NavgationControl/compass.png';
import icon2 from '@/assets/NavgationControl/in.png';
import icon3 from '@/assets/NavgationControl/out.png';
import icon4 from '@/assets/NavgationControl/compass1.png';
import icon5 from '@/assets/NavgationControl/in1.png';
import icon6 from '@/assets/NavgationControl/out1.png';
import icon7 from '@/assets/NavgationControl/compass2.png';
import icon8 from '@/assets/NavgationControl/in2.png';
import icon9 from '@/assets/NavgationControl/out2.png';
import icon10 from '@/assets/NavgationControl/compass3.png';
import icon11 from '@/assets/NavgationControl/in3.png';
import icon12 from '@/assets/NavgationControl/out3.png';
import icon13 from '@/assets/NavgationControl/compass4.png';
import icon14 from '@/assets/NavgationControl/in4.png';
import icon15 from '@/assets/NavgationControl/out4.png';
//图层控制器
import icon16 from '@/assets/NavgationControl/mapControl.png';
import icon17 from '@/assets/NavgationControl/mapControl1.png';
import icon18 from '@/assets/NavgationControl/mapControl2.png';
import icon19 from '@/assets/NavgationControl/mapControl3.png';
import icon20 from '@/assets/NavgationControl/mapControl4.png';
class XSNavgationControl extends PureComponent {
  constructor(props) {
    super(props);
    this.lock = true;
    this.iconobj = {
      '1': {
        compass: icon13,
        zoomIn: icon14,
        zoomOut: icon15,
        mapControl: icon20,
      },
      '2': {
        compass: icon10,
        zoomIn: icon11,
        zoomOut: icon12,
        mapControl: icon19,
      },
      '3': {
        compass: icon4,
        zoomIn: icon5,
        zoomOut: icon6,
        mapControl: icon17,
      },
      '4': {
        compass: icon1,
        zoomIn: icon2,
        zoomOut: icon3,
        mapControl: icon16,
      },
      '5': {
        compass: icon7,
        zoomIn: icon8,
        zoomOut: icon9,
        mapControl: icon18,
      },
      '20': {
        compass: icon1,
        zoomIn: icon2,
        zoomOut: icon3,
        mapControl: icon16,
      },
      '21': {
        compass: icon13,
        zoomIn: icon14,
        zoomOut: icon15,
        mapControl: icon20,
      },
    };
    // [{mapId:'1',compass:icon1,zoomIn:icon2,zoomOut:icon3},{mapId:'1',compass:icon1,zoomIn:icon2,zoomOut:icon3},{mapId:'1',compass:icon1,zoomIn:icon2,zoomOut:icon3}]
  }
  //指南针的回调函数
  compassCilck = () => {
    let { viewState, callback } = this.props;
    let { cameraLock, cameraLockType } = viewState;
    if (cameraLock && (cameraLockType === 3 || cameraLockType === 1 || !cameraLockType)) {
      return;
    }
    if (viewState.bearing !== 0) {
      viewState = {
        ...viewState,
        bearing: 0,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 3000,
      };
      callback(viewState);
    }
  };
  //创建指南针的Dom节点
  compassDom = () => {
    let { viewState, styleId } = this.props;
    let Dom = (
      <div
        className={styles.compassDom}
        onClick={this.compassCilck}
        style={{ transform: `rotate(${-viewState.bearing}deg)` }}
      >
        <img src={this.iconobj[styleId]?.compass || this.iconobj['1']?.compass} />
      </div>
    );
    return Dom;
  };
  //加号的回调函数
  zoomInCilck = () => {
    let { viewState, callback } = this.props;
    let { zoom, minZoom, maxZoom, cameraLock, cameraLockType } = viewState;
    if (cameraLock && (cameraLockType === 2 || cameraLockType === 1 || !cameraLockType)) {
      return;
    }
    zoom += 0.3;
    if (zoom >= minZoom && zoom <= maxZoom) {
      viewState = {
        ...viewState,
        zoom: zoom,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 1000,
      };
      callback(viewState);
    }
  };
  //创建zoom加的方法increase
  zoomIn = () => {
    let { styleId } = this.props;
    let Dom = (
      <div className={styles.zoomIn} onClick={this.zoomInCilck}>
        <img src={this.iconobj[styleId]?.zoomIn || this.iconobj['1']?.zoomIn} />
      </div>
    );
    return Dom;
  };
  //减号的回调函数
  zoomOutCilck = () => {
    let { viewState, callback } = this.props;
    let { zoom, minZoom, maxZoom, cameraLock, cameraLockType } = viewState;
    if (cameraLock && (cameraLockType === 2 || cameraLockType === 1 || !cameraLockType)) {
      return;
    }
    zoom -= 0.3;
    if (zoom >= minZoom && zoom <= maxZoom) {
      viewState = {
        ...viewState,
        zoom: zoom,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 1000,
      };
      callback(viewState);
    }
  };
  //创建zoom减的DOM节点
  zoomOut = () => {
    let { styleId } = this.props;
    let Dom = (
      <div className={styles.zoomOut} onClick={this.zoomOutCilck}>
        <img src={this.iconobj[styleId]?.zoomOut || this.iconobj['1']?.zoomOut} />
      </div>
    );
    return Dom;
  };
  render() {
    return (
      <div className={styles.normal}>
        {this.compassDom()}
        {this.zoomIn()}
        {this.zoomOut()}
      </div>
    );
  }
}
XSNavgationControl.defaultProps = {};
XSNavgationControl.propTypes = {};

function mapStateToProps({}) {
  return {};
}

export default connect(mapStateToProps)(XSNavgationControl);
