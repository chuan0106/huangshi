/**
 *
 */
import React from 'react';
import { connect } from 'dva';
import styles from './styles.less';
import three from 'three-full';
import * as spaceojogl from 'spaceojogl';


function mapStateToProps(state) {
  return {};
}

@connect(mapStateToProps)

class BaseMap extends React.Component {
  constructor(props) {
    super(props);
    this.baseScene=null;
    this.threeBox=null;
  }

  //在生命周期中当render完以后  运行一次  可以做一些dom加载完的初始化操作
  componentDidMount() {
    this.initMap();
    this.animation();
  }

  UNSAFE_componentWillReceiveProps() {

  }


  animation=()=> {
      requestAnimationFrame(this.animation);
      if (this.threeBox) {
        this.threeBox.render();
      }
  }

  initMap = () => {
    this.baseScene = new spaceojogl.Scene(null, 'mapContainer');
    let sid = 'ab45c6cd01c6451ea19e8f1d9d7bd34a';
    this.baseScene.sceneOpened =this.SceneOpenedCallback;
    this.baseScene.openScene(sid);
  }


  //打开场景成功的回调
  SceneOpenedCallback =(id)=> {
    this.threeBox = this.baseScene.threeBox;
    this.props.dispatch({
      type: 'globalModel/setBaseScene',
      payload: this.baseScene,
    });

  }
  render() {
    return (
      <div id='mapContainer' className={styles.map}>
      </div>
    );
  }
}

export default BaseMap;

