import React, { PureComponent } from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { Popover, Switch, Tooltip } from 'antd';
import { FlyToInterpolator } from 'deck.gl';
import icon1 from './img/compass.png';
import icon2 from './img/in.png';
import icon3 from './img/out.png';
import icon4 from './img/compass1.png';
import icon5 from './img/in1.png';
import icon6 from './img/out1.png';
import icon7 from './img/compass2.png';
import icon8 from './img/in2.png';
import icon9 from './img/out2.png';
import icon10 from './img/compass3.png';
import icon11 from './img/in3.png';
import icon12 from './img/out3.png';
import icon13 from './img/compass4.png';
import icon14 from './img/in4.png';
import icon15 from './img/out4.png';
//图层控制器
import icon16 from './img/mapControl.png';
import icon17 from './img/mapControl1.png';
import icon18 from './img/mapControl2.png';
import icon19 from './img/mapControl3.png';
import icon20 from './img/mapControl4.png';

//归位控制器
import icon21 from './img/reset.png';
import icon22 from './img/reset1.png';
import icon23 from './img/reset2.png';
import icon24 from './img/reset3.png';
class MapControl extends PureComponent {
  constructor(props) {
    super(props);
    this.lock = true;
    this.iconobj = {
      '1': {
        compass: icon13,
        zoomIn: icon14,
        zoomOut: icon15,
        mapControl: icon20,
        reset: icon24,
      },
      '2': {
        compass: icon10,
        zoomIn: icon11,
        zoomOut: icon12,
        mapControl: icon19,
        reset: icon21,
      },
      '3': {
        compass: icon4,
        zoomIn: icon5,
        zoomOut: icon6,
        mapControl: icon17,
        reset: icon22,
      },
      '4': {
        compass: icon1,
        zoomIn: icon2,
        zoomOut: icon3,
        mapControl: icon16,
        reset: icon21,
      },
      '5': {
        compass: icon7,
        zoomIn: icon8,
        zoomOut: icon9,
        mapControl: icon18,
        reset: icon23,
      },
      '20': {
        compass: icon1,
        zoomIn: icon2,
        zoomOut: icon3,
        mapControl: icon16,
        reset: icon21,
      },
      '21': {
        compass: icon13,
        zoomIn: icon14,
        zoomOut: icon15,
        mapControl: icon20,
        reset: icon24,
      },
    };
  }
  //指南针的回调函数
  compassCilck = () => {
    let { viewState, viewStateHandle } = this.props;
    let { cameraLock, cameraLockType } = viewState;
    if (cameraLock && (cameraLockType === 3 || cameraLockType === 1 || !cameraLockType)) {
      return;
    }
    if (viewState.bearing !== 0) {
      viewState = {
        ...viewState,
        bearing: 0,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 1000,
      };
      viewStateHandle(viewState);
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
        <img src={this.iconobj[styleId]?.compass || this.iconobj['1']?.compass} alt={'图片路径'} />
      </div>
    );
    return Dom;
  };
  //加号的回调函数
  zoomInCilck = () => {
    let { viewState, viewStateHandle } = this.props;
    let { zoom, minZoom, maxZoom, cameraLock, cameraLockType } = viewState;
    if (cameraLock) {
      return;
    }
    console.log(viewState, 'adfadfadafad');
    zoom += 0.3;
    // if (zoom >= minZoom && zoom <= maxZoom) {
    viewState = {
      ...viewState,
      zoom: zoom,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1000,
    };
    viewStateHandle(viewState);
    // }
  };
  //创建zoom加的方法increase
  zoomIn = () => {
    let { styleId } = this.props;
    let Dom = (
      <div className={styles.zoomIn} onClick={this.zoomInCilck}>
        <img src={this.iconobj[styleId]?.zoomIn || this.iconobj['1']?.zoomIn} alt={'图片路径'} />
      </div>
    );
    return Dom;
  };
  //减号的回调函数
  zoomOutCilck = () => {
    let { viewState, viewStateHandle } = this.props;
    let { zoom, minZoom, maxZoom, cameraLock, cameraLockType } = viewState;
    if (cameraLock) {
      return;
    }
    zoom -= 0.3;
    // if (zoom >= minZoom && zoom <= maxZoom) {
    viewState = {
      ...viewState,
      zoom: zoom,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1000,
    };
    console.log(viewState, 'viewState');
    viewStateHandle(viewState);
    // }
  };
  //创建zoom减的DOM节点
  zoomOut = () => {
    let { styleId } = this.props;
    let Dom = (
      <div className={styles.zoomOut} onClick={this.zoomOutCilck}>
        <img src={this.iconobj[styleId]?.zoomOut || this.iconobj['1']?.zoomOut} alt={'图片路径'} />
      </div>
    );
    return Dom;
  };
  //图层控制模块
  layerControl = () => {
    let { option } = this.props;
    if (!option) {
      return;
    }
    let { styleId } = this.props;
    let Dom = (
      <React.Fragment>
        <Popover
          content={this.getAllLayer()}
          placement="leftTop"
          title={'图层控制'}
          trigger="click"
          overlayStyle={{ zIndex: 20000 }}
        >
          <div className={styles.mapControl}>
            <Tooltip placement="top" title={'图层控制'}>
              <img
                src={this.iconobj[styleId]?.mapControl || this.iconobj['1']?.mapControl}
                alt={'图片路径'}
              />
            </Tooltip>
          </div>
        </Popover>
      </React.Fragment>
    );
    return Dom;
  };
  //获取各个图层控制权
  getAllLayer = () => {
    let { mapAllLayerOption, mapControlFun } = this.props;
    let option = mapAllLayerOption?.map((val, key) => {
      let { visibility, name } = val;
      visibility = visibility === 1 ? false : true;
      let Dom = (
        <React.Fragment>
          <div className={styles.addMapLayer} key={'layerControl' + key}>
            <div className={styles.mapControlBut} key={'layerControl' + key}>
              <span className={styles.title}>{name}</span>
              <div className={styles.switch}>
                <Switch
                  size="small"
                  defaultChecked={visibility}
                  onChange={visibility => mapControlFun(val, visibility)}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
      return Dom;
    });
    return option;
  };

  //图层归位的回调函数
  ClassifiedAsCilck = () => {
    let { viewCamera, viewStateHandle } = this.props;
    let viewState = {
      ...viewCamera,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1000,
    };
    viewStateHandle(viewState);
  };
  //图层归位模块
  ClassifiedAsControl = () => {
    let { styleId } = this.props;
    let Dom = (
      <React.Fragment>
        <div className={styles.mapControl} onClick={this.ClassifiedAsCilck}>
          <Tooltip placement="top" title={'图层归位'}>
            <img src={this.iconobj[styleId]?.reset || this.iconobj['1']?.reset} alt={'图片路径'} />
          </Tooltip>
        </div>
      </React.Fragment>
    );
    return Dom;
  };
  render() {
    return (
      <div className={styles.normal}>
        {this.compassDom()}
        {this.zoomIn()}
        {this.zoomOut()}
        {/* {this.layerControl()} */}
        {this.ClassifiedAsControl()}
      </div>
    );
  }
}

export default MapControl;
