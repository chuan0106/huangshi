import { useState, PureComponent } from 'react';
import styles from './styles.less';
import { connect } from 'dva';

import DMap from '@/afcomponents/AFMap/DMap/index1';
import IPConfig from '@/constants/IPConfig';

const dispatch = window.g_app._store.dispatch;
const initViewstate = {
  zoom: 8.5,
  pitch: 0,
  longitude: 116.3559,
  latitude: 40.2439,
};
class Map extends PureComponent {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //加载初始场景
    let { initLayer,getMapThis } = this.props;
    dispatch({
      type: 'buildNewMapModel/getShareAllMapLayerEffect',
      payload: '964bd519a1d0651c9191872b32b0e6af',
    });
    dispatch({
      type: 'buildNewMapModel/getShareAllMapLayerEffect',
      payload: initLayer,
    });
  }
  componentWillReceiveProps(preState, nextProps) {}

  onViewStateChange = viewport => {
    dispatch({
      type: 'buildNewMapModel/getViewportReducer',
      payload: viewport,
    });
  };

  flyToHandle = flyState => {
    dispatch({
      type: 'cameraFlightModel/changeFlyStateReducer',
      payload: false,
    });
  };
  //   切换空间视角
  setIviewStateProps = viewParam => {
    dispatch({
      type: 'buildNewMapModel/setIviewStatePropsReducer',
      payload: viewParam,
    });
  };

  onDragCallBack = param => {
    dispatch({
      type: 'homeModel/setDrawActiveReducer',
      payload: '',
    });
    dispatch({ type: 'homeModel/getConditionsReducer', payload: param });
    dispatch({
      type: 'buildNewMapModel/getShareAllMapLayerEffect',
      payload: '91970f69336b241c6b3452dbcf91ba3e',
    });
  };
  render() {
    const {
      deckLayer,
      iviewState,
      deleteMapLayers,
      cameraList,
      spaceojoMapStyle,
      flyState,
      mapController,
      interactiveData,
      defineClick,
      camera,
      mapMoveChange
    } = this.props;
    return (
      <div className={styles.normal}>
        <DMap
          layers={deckLayer}
          iviewState={iviewState || initViewstate}
          deleteMapLayers={deleteMapLayers}
          onViewStateChange={this.onViewStateChange}
          cameraList={cameraList}
          flyState={flyState}
          baseLayer={{
            id:[`scenegraphLayer@${57480}`,`polygonlayer@8209`,`scenegraphLayer@${1578}`],
            layerId:`scenegraphLayer@${1578}`
          }}
          spaceojoMapStyle={IPConfig.initMapStyle}
          interactiveData={interactiveData}
          flyToHandle={this.flyToHandle}
          mapController={mapController}
          dref={map => {
            if (map) {
              console.log(map,'mapmapmapmap')
              dispatch({
                type: 'homeModel/getMapReducer',
                payload: map,
              });
        
            }
          }}
          defineClick={defineClick}
          onDragCallBack={this.onDragCallBack}
          mapMoveChange={mapMoveChange}
          setIviewStateProps={this.setIviewStateProps}
        />
      </div>
    );
  }
}
function mapStateToProps({ buildNewMapModel, cameraFlightModel, homeModel }) {
  return {
    deckLayer: buildNewMapModel.deckLayer,
    iviewState: buildNewMapModel.iviewState,
    deleteMapLayers: buildNewMapModel.deleteMapLayers,
    selectDataType: buildNewMapModel.selectDataType,
    interactiveData: buildNewMapModel.interactiveData,
    cameraList: cameraFlightModel.cameraList,
    flyState: cameraFlightModel.flyState,
    mapController: buildNewMapModel.camera,
    camera: homeModel.camera,
    map: homeModel.map,
  };
}
Map.defaultProps = {};
Map.propTypes = {};
export default connect(mapStateToProps)(Map);
