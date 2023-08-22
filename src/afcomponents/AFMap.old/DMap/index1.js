import { PureComponent } from 'react';
// import styles from './styles.less';
import { connect } from 'dva';
import DeckGL, {
  MapController,
  PointLight,
  _CameraLight,
  DirectionalLight,
  LightingEffect,
  AmbientLight,
} from 'deck.gl';
import { SphereGeometry } from '@luma.gl/core';
import { StaticMap } from 'react-map-gl';
import debounce from 'lodash.debounce';
import { CesiumIonLoader } from '@loaders.gl/3d-tiles';
import { Tile3DLayer } from '@deck.gl/geo-layers';

import {
  MAPBOX_STYLE,
  MAPBOX_TOKEN,
  initialViewState,
  mapLayerName,
  layerTypeFiltter,
  FlyToCamera,
} from './mapConst';
import { layerError } from './messageConstant';
// import mapboxgl from 'mapbox-gl';
// import { looseEqual, visible } from '../SpaceojoMap/mapUtils';
// import GL from '@luma.gl/constants';
import { GetFps } from './fps';
// deck.gl图层
import { DScatterplotLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/ScatterplotLayer';
import { DTripsLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/TripsLayer';
import { DBitmapLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/BitmapLayer';
import { DArcLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/ArcLayer';
import { DColumnLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/ColumnLayer';
import { DCPUGridLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/CPUGridLayer';
import { DContourLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/ContourLayer';
import { DGeoJsonLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/GeoJsonLayer';
import { DGPUGridLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/GPUGridLayer';
import { DTextLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/TextLayer';
import { DPathLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/PathLayer';
import { DLineLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/LineLayer';
import { DIconLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/IconLayer';
import { DHeatmapLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/HeatmapLayer';
import { DTerrainLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/TerrainLayer';
import { DSolidPolygonLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/SolidPolygonLayer';
import { DScreenGridLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/ScreenGridLayer';
import { DPolygonLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/PolygonLayer';
import { DGridCellLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/GridCellLayer';
import { DGridLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/GridLayer';
import { DHexagonLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/HexagonLayer';
import { DH3ClusterLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/H3ClusterLayer';
import { DH3HexagonLayer } from '@/components/DCMap/ReactDeckGL/DeckGL/H3HexagonLayer';
import { DScenegraphLayerConfig } from '@/components/DCMap/ReactDeckGL/DeckGL/ScenegraphLayer';
// mapbox图层
import TextLabelLayers from '@/components/DCMap/ReactDeckGL/Mapbox/TextLabel';
import HeatLayer from '@/components/DCMap/ReactDeckGL/Mapbox/HeatLayer';
import HeartbeatLayer from '@/components/DCMap/ReactDeckGL/Mapbox/HeartbeatLayer';
import FlyingLineLayer from '@/components/DCMap/ReactDeckGL/Mapbox/FlyingLineLayer';
import WarnImageLayer from '@/components/DCMap/ReactDeckGL/Mapbox/WarnImageLayer';
import ClusterLayer from '@/components/DCMap/ReactDeckGL/Mapbox/ClusterLayer';
//弹窗
import Popup from '../Pop/MapBoxPop/Popup';
//弹窗
import PopView from '../Pop';
//工具
import NavgationControl from '@/components/DCMap/MapControl';

const sphereLayoutData = [{ position: [-25, 0, 0] }, { position: [25, 0, 0] }];
const sphereMesh = new SphereGeometry({
  radius: 20,
  nlat: 100,
  nlong: 100,
});
const ambientLight = new AmbientLight({
  color: [112, 168, 220],
  intensity: 1,
});
const pointLight1 = new PointLight({
  color: [243, 229, 215],
  intensity: 1,
  position: [50, 50, 30],
});
const pointLight2 = new PointLight({
  color: [228, 237, 245],
  intensity: 1,
  position: [50, 50, 50],
});
// const cameraLight = new _CameraLight({
//   color: [255, 255, 255],
//   intensity: 0.2,
// });
const directionalLight = new DirectionalLight({
  color: [104, 146, 209],
  direction: [0, 0, -1],
  intensity: 1,
});
// import {
//   onWebGLInitialized,
//   setLayerBlending,
// } from '@/utils/layerutils/gl-utils.js';
// function isArray(array) {}
// arr为删除前的数组，key为要删除的元素对象。
//删除数组中某元素，返回含有剩余元素的数组------------------------------------
function arrMove(arr, dataid) {
  let temp = [];
  for (const key in arr) {
    if (Number(arr[key]?.dataid) !== Number(dataid)) {
      temp.push(arr[key]);
    }
  }
  return temp;
}
/**
 * 克隆对象
 * @method {clone}
 * @param {object}  origin
 */
// function clone(origin) {
//   let originProto = Object.getPrototypeOf(origin);
//   return Object.assign(Object.create(originProto), origin);
// }
/**
 * 判断为空
 * @method {isEmpty}
 * @param {object}  obj
 */
// function isEmpty(obj) {
//   if (obj) {
//     return !Object.getOwnPropertyNames(obj).length && !Object.getOwnPropertySymbols(obj).length;
//   }
//   return true;
// }

/**
 * 数组去重
 * @method {arrayUnique}
 * @param {array}  arr 目标数组
 * @param {string} name 去重字段
 */
function arrayUnique(arr, key = 'id') {
  // console.log("arrarr", arr)
  let hash = {};
  return arr.reduce(function(tarr, cru, index) {
    if (!hash[cru[key]]) {
      hash[cru[key]] = { index: index };
      tarr.push(cru);
    } else {
      tarr.splice(hash[cru[key]]['index'], 1, cru);
    }
    // console.log("tarrtarrtarr", tarr)
    return tarr;
  }, []);
}
function arrayUniqueData(arr, timers, callBack, key = 'dataid') {
  let hash = {};
  let index_trips = null;
  return arr.reduce(function(tarr, cru, index) {
    if (!hash[cru['props'][key]]) {
      hash[cru['props'][key]] = { index: index };
      tarr.push(cru);
    } else {
      // 该判断用于切换图层时，清除trips图层
      index_trips = hash[cru['props'][key]]['index'];
      if (tarr[index_trips]?.props?.mapType === 'TripsLayer') {
        for (const time in timers) {
          if (timers.hasOwnProperty(time)) {
            if (timers[time]?.dataid === tarr[index_trips]?.props?.dataid) {
              clearInterval(timers[time]?.timer);
              let timeNew = arrMove(timers, Number(timers[time]?.dataid));
              callBack(timeNew);
            }
          }
        }
      }
      tarr.splice(hash[cru['props'][key]]['index'], 1, cru);
    }
    // console.log("tarrtarrtarr", tarr)
    return tarr;
  }, []);
}
function arrayUniqueDataM(arr, key = 'dataid') {
  // console.log("arrarr", arr)
  let hash = {};
  return arr.reduce(function(tarr, cru, index) {
    if (!hash[cru[key]]) {
      hash[cru[key]] = { index: index };
      tarr.push(cru);
    } else {
      tarr.splice(hash[cru[key]]['index'], 1, cru);
    }
    // console.log("tarrtarrtarr", tarr)
    return tarr;
  }, []);
}
/**
 * 深拷贝(用于处理数据array and object)
 * @method {deepClone}
 * @param {array}  data 原数组
 * @param {hash} array WeakMap
 */
function deepClone(data, hash = new WeakMap()) {
  if (data === undefined || data === null) return data;
  if (typeof data !== 'object') return data;
  if (data instanceof RegExp) return new RegExp(data);
  if (data instanceof Date) return new Date(data);
  let v = hash.get(data);
  if (v) return v;
  let instance = new data.constructor();
  hash.set(data, instance);
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      instance[key] = deepClone(data[key], hash);
    }
  }
  return instance;
}
/**
 * 合并对象(用于处理图层属性)
 * @method {getProps}
 * @param {array}  deckglLayers 原数组
 * @param {array} array 新数组
 */
function getProps(deckglLayers, array) {
  let layerProps = array;
  for (const k in deckglLayers) {
    if (deckglLayers.hasOwnProperty(k)) {
      if (deckglLayers[k]?.id === array?.id) {
        // data
        let newData = deepClone(deckglLayers[k].props?.data);
        layerProps = {
          ...deckglLayers[k]?.props,
          data: newData,
          ...array,
        };
        // console.log('layerProps', layerProps);
      }
    }
  }
  return layerProps;
}

/**
 * 过滤图层
 * @method {filterLayer}
 * @param {number}  type 类型
 * @param {array} array 所有图层
 */
function filterLayer(type, layers) {
  //入口校验也是可以添加的
  if (!Array.isArray(layers)) {
    layerError(layers);
    return [];
  }
  if (type === layerTypeFiltter.deckgl) {
    return layers.filter(elem => {
      return (
        elem?.mapType === mapLayerName.SCATTERPLOT_LAYER ||
        elem?.mapType === mapLayerName.TRIPS_LAYER ||
        elem?.mapType === mapLayerName.ARC_LAYER ||
        elem?.mapType === mapLayerName.BITMAP_LAYER ||
        elem?.mapType === mapLayerName.COLUMN_LAYER ||
        elem?.mapType === mapLayerName.CPUGRID_LAYER ||
        elem?.mapType === mapLayerName.CONTOUR_LAYER ||
        elem?.mapType === mapLayerName.GEOJSON_LAYER ||
        elem?.mapType === mapLayerName.GPUGRID_LAYER ||
        elem?.mapType === mapLayerName.GREATCIRCLE_LAYER ||
        elem?.mapType === mapLayerName.TEXT_LAYER ||
        elem?.mapType === mapLayerName.PATH_LAYER ||
        elem?.mapType === mapLayerName.LINE_LAYER ||
        elem?.mapType === mapLayerName.ICON_LAYER ||
        elem?.mapType === mapLayerName.HEATMAP_LAYER ||
        elem?.mapType === mapLayerName.DTERRAIN_LAYER ||
        elem?.mapType === mapLayerName.SOLIDPOLYGON_LAYER ||
        elem?.mapType === mapLayerName.SCREENGRID_LAYER ||
        elem?.mapType === mapLayerName.POLYGON_LAYER ||
        elem?.mapType === mapLayerName.GRIDCELL_LAYER ||
        elem?.mapType === mapLayerName.GRID_LAYER ||
        elem?.mapType === mapLayerName.HEXAGON_LAYER ||
        elem?.mapType === mapLayerName.H3CLUSTER_LAYER ||
        elem?.mapType === mapLayerName.H3HEXAGON_LAYER ||
        elem?.mapType === mapLayerName.SCENEGRAPH_LAYER
      );
    });
  } else {
    return layers.filter(elem => {
      return (
        elem?.mapType === mapLayerName.TEXT_LABEL ||
        elem?.mapType === mapLayerName.HEAT_LAYER ||
        elem?.mapType === mapLayerName.HEARTBEATLAYER ||
        elem?.mapType === mapLayerName.FLYINGLINELAYER ||
        elem?.mapType === mapLayerName.SIZESCATTERLAYER ||
        elem?.mapType === mapLayerName.WARNIMAGELAYER
      );
    });
  }
}

class DMap extends PureComponent {
  /**
   * 属性说明
   * @property {object} mapbox
   * @property {object} viewState
   * @property {array} mapboxLayers
   * @property {array} deckglLayers
   */

  state = {
    mapbox: null,
    iviewState: initialViewState,
    mapboxLayers: [],
    deckglLayers: [],
    dlayers: [],
    timers: [],
    animate: true,
    spaceojoMapStyle: MAPBOX_STYLE,
    info: null,
    tkContent: null,
    zoom: null,
    popShow: false,
    popContentStyle: null,
    interactiveData: [],
    eventInfo: null,
    popType: 0,
    boxType: 1,
    mapController: null,
    defaultCamera: null,
    eventState: 'click',
    allFeild: null,
    baseLayer: null,
  };
  constructor(props) {
    super(props);
    this.time = null;
    this.newDeckglLayersTrips = [];
    this.timers = [];
    this.setStateP = function(state) {
      return new Promise(resolve => this.setState(state, resolve));
    };
    this.popup = new Popup();
    console.log('PointLight', SphereGeometry);
    props?.dref && props.dref(this);
  }

  componentDidMount() {
    const { layers, iviewState, spaceojoMapStyle, interactiveData, mapController } = this.props;
    //添加deckgl图层
    this._addDeckLayer(layers);
    this.setStateP({
      iviewState: iviewState,
      spaceojoMapStyle: spaceojoMapStyle,
      interactiveData: interactiveData,
      mapController: mapController,
    });
  }
  componentWillUnmount() {
    const { mapboxLayers } = this.state;
    if (this.time) {
      clearInterval(this.time);
    }
    if (this.timers.length > 0) {
      for (let i = 0; i < this.timers.length; i++) {
        clearInterval(this.timers[i]);
      }
    }
    // 用于退出清掉marker点
    for (const key in mapboxLayers) {
      if (mapboxLayers.hasOwnProperty(key)) {
        // if (mapboxLayers[key]?.mapType === 'textLabelLayer') {
        mapboxLayers[key] && mapboxLayers[key].removeMapLayer();
        // }
      }
    }
    this.setStateP({
      mapbox: null,
      iviewState: initialViewState,
      mapboxLayers: [],
      deckglLayers: [],
      dlayers: [],
      timers: [],
      animate: true,
      spaceojoMapStyle: MAPBOX_STYLE,
      info: null,
      tkContent: null,
      zoom: null,
      popShow: false,
      popContentStyle: null,
      interactiveData: [],
      eventInfo: null,
      popType: 0,
      boxType: 1,
      mapController: null,
      defaultCamera: null,
      eventState: 'click',
      allFeild: null,
    });
    if (this.popup) {
      this.popup.removeMapLayer();
    }
  }
  /**
   * 通过id查找deck的trips图层,启动定时器
   * @method {_findTripsLayer}
   * @params {dTripsLayer} 每一个trips图层
   */

  _findTripsLayer = dTripsLayer => {
    this._tripsClearTime(dTripsLayer);
    if (dTripsLayer?.props?.trips?.feild !== '') {
      let timerSave = [];
      let { frequencyTime, currentTime, addtime, timeArr } = dTripsLayer?.props;
      addtime = isNaN(Number(addtime)) ? 1 : addtime;
      let maxnumber = Math.max.apply(null, timeArr) - Math.min.apply(null, timeArr);
      if (!this.time) {
        this.time = setInterval(() => {
          if (currentTime >= maxnumber) {
            currentTime = 0;
          } else {
            currentTime += addtime;
          }
          let tripsLayer = dTripsLayer.props?.updateLayer({
            ...dTripsLayer?.props,
            data: dTripsLayer?.props?.data,
            currentTime: currentTime,
          });
          // this.newDeckglLayersTrips.push(tripsLayer);
          // this.newDeckglLayersTrips = arrayUnique(this.newDeckglLayersTrips);
          this.setStateP({
            deckglLayers: arrayUnique([...this.state.deckglLayers, tripsLayer]),
          });
        }, 1000 / frequencyTime);
        timerSave.push({
          id: dTripsLayer?.props?.id,
          dataid: dTripsLayer?.props?.dataid,
          timer: this.time,
        });
        this.time = null;
        // this.setStateP({ timers: [...this.state.timers, ...timerSave] });
        this.timers = [...this.timers, ...timerSave];
      } else {
        clearInterval(this.time);
      }
    }
  };
  /**
   * 清除定时器（用于属性更改，层级显隐）
   * @method {_tripsClearTime}
   * @params {dTripsLayer} 每一个trips图层
   */
  _tripsClearTime = dTripsLayer => {
    let timers = this.timers;
    let time = null;
    if (timers?.length > 0) {
      time = timers.filter((ele, index) => {
        return (
          Number(ele?.dataid) ===
          Number(dTripsLayer?.props?.dataid ? dTripsLayer?.props?.dataid : dTripsLayer?.dataid)
        );
      });
      if (time) {
        for (const key in timers) {
          if (timers.hasOwnProperty(key)) {
            if (Number(timers[key]?.dataid) === Number(time[0]?.dataid)) {
              clearInterval(timers[key]?.timer);
            }
          }
        }
        let newTimers = arrMove(timers, time[0]?.dataid);
        this.timers = newTimers;
      }
    }
  };

  /**
   * 清除定时器（删除所有轨迹图层）
   * @method {_clearAllTripsdeleteTime}
   * @params {deckglLayers} 所有图层
   */
  _clearAllTripsdeleteTime = deckglLayers => {
    let timers = this.timers;
    let isTrips = [];
    if (timers.length > 0 && deckglLayers.length > 0) {
      for (const key in deckglLayers) {
        if (deckglLayers.hasOwnProperty(key)) {
          isTrips.push(
            Number(
              deckglLayers[key]?.props?.dataid
                ? deckglLayers[key]?.props?.dataid
                : deckglLayers[key]?.dataid,
            ),
          );
        }
      }
      for (const key1 in timers) {
        if (timers.hasOwnProperty(key1)) {
          if (isTrips.indexOf(Number(timers[key1]?.dataid)) > -1) {
            clearInterval(timers[key1]?.timer);
            let timers11 = arrMove(timers, timers[key1]?.dataid);
            this.timers = timers11;
          }
        }
      }
    }
  };
  /**
   * 清除定时器（删除图层）
   * @method {_tripsdeleteTime}
   * @params {deckglLayers} 所有图层
   */
  _tripsdeleteTime = deckglLayers => {
    let timers = this.timers;
    let isTrips = [];
    if (timers.length > 0 && deckglLayers.length > 0) {
      for (const key in deckglLayers) {
        if (deckglLayers.hasOwnProperty(key)) {
          isTrips.push(
            Number(
              deckglLayers[key]?.props?.dataid
                ? deckglLayers[key]?.props?.dataid
                : deckglLayers[key]?.dataid,
            ),
          );
        }
      }
      for (const key1 in timers) {
        if (timers.hasOwnProperty(key1)) {
          if (isTrips.indexOf(Number(timers[key1]?.dataid)) > -1) {
            clearInterval(timers[key1]?.timer);
            let timers11 = arrMove(timers, timers[key1]?.dataid);
            this.timers = timers11;
          }
        }
      }
    } else {
      for (const key in timers) {
        if (timers.hasOwnProperty(key)) {
          clearInterval(timers[key]?.timer);
          let timers22 = arrMove(timers, timers[key]?.dataid);
          this.timers = timers22;
        }
      }
    }
  };

  /**
   * 更新定时器数组
   * @method {_callBackTimers}
   * @params {timers} 新的定时器数组
   */
  _callBackTimers = timers => {
    this.timers = timers;
  };

  /**
   * 添加deck图层
   * @method {addDeckLayer}
   */
  _addDeckLayer = layers => {
    const { deckglLayers } = this.state;
    let deckglLayersNew1 = deckglLayers;
    // console.log('asdfas232d34fsdf', deckglLayersNew1, '2323232', layers);
    for (const i in deckglLayersNew1) {
      if (deckglLayersNew1.hasOwnProperty(i)) {
        for (const j in layers) {
          if (layers.hasOwnProperty(j)) {
            if (Number(deckglLayersNew1[i]?.props?.dataid) === Number(layers[j]?.dataid)) {
              if (
                layers[j]?.mapType === mapLayerName.TEXT_LABEL ||
                layers[j]?.mapType === mapLayerName.HEAT_LAYER ||
                layers[j]?.mapType === mapLayerName.HEARTBEATLAYER ||
                layers[j]?.mapType === mapLayerName.FLYINGLINELAYER ||
                layers[j]?.mapType === mapLayerName.SIZESCATTERLAYER ||
                layers[j]?.mapType === mapLayerName.WARNIMAGELAYER
              ) {
                deckglLayersNew1 = deckglLayersNew1.filter(elem => {
                  return Number(elem?.props?.dataid) !== Number(deckglLayersNew1[i]?.props?.dataid);
                });
              }
            }
          }
        }
      }
    }

    // const { layers } = this.props;
    let arrLay = [];
    let deckArr = filterLayer(layerTypeFiltter.deckgl, layers);
    for (const i in deckArr) {
      if (deckArr.hasOwnProperty(i)) {
        if (deckArr[i]?.mapType === mapLayerName.SCATTERPLOT_LAYER) {
          const dScatterplotLayer = DScatterplotLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(dScatterplotLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.TRIPS_LAYER) {
          const dTripsLayer = DTripsLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(dTripsLayer);
          this._findTripsLayer(dTripsLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.ARC_LAYER) {
          const dArcLayer = DArcLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(dArcLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.BITMAP_LAYER) {
          const bitmapLayer = DBitmapLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(bitmapLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.COLUMN_LAYER) {
          const columnLayer = DColumnLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(columnLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.CPUGRID_LAYER) {
          const cpugridLayer = DCPUGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(cpugridLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.CONTOUR_LAYER) {
          const contourLayer = DContourLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(contourLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.GEOJSON_LAYER) {
          const geojsonLayer = DGeoJsonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(geojsonLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.GPUGRID_LAYER) {
          const gpugridLayer = DGPUGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(gpugridLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.GREATCIRCLE_LAYER) {
          //const greatcircleLayer = DGreatCircleLayer(getProps(deckglLayers, deckArr[i]));
          //arrLay.push(greatcircleLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.TEXT_LAYER) {
          const textLayer = DTextLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(textLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.PATH_LAYER) {
          const pathLayer = DPathLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(pathLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.LINE_LAYER) {
          const lineLayer = DLineLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(lineLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.SCENEGRAPH_LAYER) {
          const scenegraphLayer = DScenegraphLayerConfig(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(scenegraphLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.ICON_LAYER) {
          const iconLayer = DIconLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(iconLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.HEATMAP_LAYER) {
          const heatmapLayer = DHeatmapLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(heatmapLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.DTERRAIN_LAYER) {
          const terrainLayer = DTerrainLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(terrainLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.SOLIDPOLYGON_LAYER) {
          const solidPolygonLayer = DSolidPolygonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(solidPolygonLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.SCREENGRID_LAYER) {
          const screenGridLayer = DScreenGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(screenGridLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.POLYGON_LAYER) {
          const polygonLayer = DPolygonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(polygonLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.GRIDCELL_LAYER) {
          const gridCellLayer = DGridCellLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(gridCellLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.GRID_LAYER) {
          const gridLayer = DGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(gridLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.HEXAGON_LAYER) {
          const hexagonLayer = DHexagonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(hexagonLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.H3CLUSTER_LAYER) {
          const h3ClusterLayer = DH3ClusterLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(h3ClusterLayer);
        }
        if (deckArr[i]?.mapType === mapLayerName.H3HEXAGON_LAYER) {
          const h3HexagonLayer = DH3HexagonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(h3HexagonLayer);
        }
      }
    }
    let arrBw = [...deckglLayersNew1, ...arrLay];
    let newDeckglLayers = arrayUnique(arrBw);
    let newDeckglLayers1 = arrayUniqueData(
      newDeckglLayers,
      this.timers,
      this._callBackTimers.bind(this),
    );

    newDeckglLayers1 = newDeckglLayers1.sort((a, b) => {
      return a?.props.zOrder - b?.props.zOrder;
    });

    // this.setStateP({
    //   deckglLayers: [],
    // }).then(() => {
    console.log('newDeckglLayers1', newDeckglLayers1);
    this.setStateP({
      deckglLayers: newDeckglLayers1,
    });
    // });
  };

  /**
   * 判断mapbox图层是否存在
   * @method {_isMapboxExist}
   */
  _isMapboxExist = (oldMapboxLayer, everyMArr) => {
    if (oldMapboxLayer.length > 0) {
      for (const i in oldMapboxLayer) {
        if (oldMapboxLayer.hasOwnProperty(i)) {
          if (oldMapboxLayer[i]?.id === everyMArr.id) {
            return false;
          }
        }
      }
    }
    return true;
  };

  /**
   * 添加mapbox图层
   * @method {addMapboxLayer}
   */
  _addMapboxLayer = layers => {
    // const { layers } = this.props;
    const { mapboxLayers, mapbox, spaceojoMapStyle } = this.state;
    let mapboxLayersNew1 = mapboxLayers;
    // console.log('asdfasd34fsdf', mapboxLayersNew1, 'll', layers);
    for (const i in mapboxLayersNew1) {
      if (mapboxLayersNew1.hasOwnProperty(i)) {
        for (const j in layers) {
          if (layers.hasOwnProperty(j)) {
            if (Number(mapboxLayersNew1[i]?.dataid) === Number(layers[j]?.dataid)) {
              if (mapboxLayersNew1[i]?.mapType !== layers[j]?.mapType) {
                mapboxLayersNew1[i].removeMapLayer();
                mapboxLayersNew1 = mapboxLayersNew1.filter(elem => {
                  return Number(elem?.dataid) !== Number(mapboxLayersNew1[i]?.dataid);
                });
              }
            }
          }
        }
      }
    }

    //过滤出mapbox图层
    let mapboxArr = filterLayer(layerTypeFiltter.mapbox, layers);
    //对图层对象去重
    let mArr = arrayUnique(mapboxArr);
    // mArr = arrayUniqueDataM(mArr);
    // console.log('mapbo222Arr', mArr);
    // console.log("mArrmArr", mArr)
    //移除原有id相同的图层或者进行更新
    this._updateMapboxLayer(mapboxArr, mArr, mapboxLayersNew1);
    // console.log('mapboxLayers444', mapboxLayers);
    let mapboxArrNew = [];
    for (const i in mArr) {
      if (mArr.hasOwnProperty(i)) {
        this._tripsClearTime(mArr[i]);
        // 判断图层是否存在
        if (this._isMapboxExist(mapboxLayersNew1, mArr[i])) {
          if (mArr[i]?.mapType === mapLayerName.TEXT_LABEL) {
            const textLabel = new TextLabelLayers(mapbox, mArr[i]);
            textLabel.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(textLabel);
          }
          if (mArr[i]?.mapType === mapLayerName.HEAT_LAYER) {
            const heatLayer = new HeatLayer(mapbox, mArr[i], spaceojoMapStyle || MAPBOX_STYLE);
            heatLayer.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(heatLayer);
          }
          if (mArr[i]?.mapType === mapLayerName.HEARTBEATLAYER) {
            const aimatedIcon = new HeartbeatLayer(mapbox, mArr[i]);
            aimatedIcon.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(aimatedIcon);
          }
          if (mArr[i]?.mapType === mapLayerName.FLYINGLINELAYER) {
            const aimatedLine = new FlyingLineLayer(mapbox, mArr[i]);
            aimatedLine.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(aimatedLine);
          }
          if (mArr[i]?.mapType === mapLayerName.WARNIMAGELAYER) {
            const aimatedImage = new WarnImageLayer(mapbox, mArr[i]);
            aimatedImage.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(aimatedImage);
          }
          if (mArr[i]?.mapType === mapLayerName.SIZESCATTERLAYER) {
            const clusterLayer = new ClusterLayer(
              mapbox,
              mArr[i],
              spaceojoMapStyle || MAPBOX_STYLE,
            );
            clusterLayer.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(clusterLayer);
          }
        }
      }
    }
    // console.log('mapboxArrNew', mapboxArrNew);
    // setMapboxLayers([...mapboxLayers, ...mapboxArrNew]);
    let newArr = [...mapboxLayersNew1, ...mapboxArrNew];
    this.setState({
      mapboxLayers: newArr,
    });
  };

  /**
   * 删除mapbox的marker|popup图层,更新其余图层
   * @method {removeMapboxLayer}
   * @param {array} mapboxArr 历史图层
   * @param {array} mArr 传入图层
   */
  _updateMapboxLayer = (mapboxArr, mArr, mapboxLayers) => {
    const { spaceojoMapStyle } = this.state;
    // alert(JSON.stringify(mapboxLayers));
    for (const i in mapboxLayers) {
      if (mapboxLayers.hasOwnProperty(i)) {
        if (mapboxLayers[i]?.mapType === mapLayerName.TEXT_LABEL) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (Number(mapboxLayers[i]?.dataid) === Number(mArr[j]?.dataid)) {
                let visibility = mArr[j].visible;
                let newVisible =
                  this.state.iviewState?.zoom > mArr[j]?.option?.maxZoom ||
                  this.state.iviewState?.zoom < mArr[j]?.option?.minZoom
                    ? false
                    : true;
                newVisible = !visibility ? visibility : newVisible;
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j], newVisible);
              }
            }
          }
        }
        if (mapboxLayers[i]?.mapType === mapLayerName.HEAT_LAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (Number(mapboxLayers[i]?.dataid) === Number(mArr[j]?.dataid)) {
                mapboxLayers[i] &&
                  mapboxLayers[i].updateMapboxLayer(mArr[j], spaceojoMapStyle || MAPBOX_STYLE);
              }
            }
          }
        }
        if (mapboxLayers[i]?.mapType === mapLayerName.HEARTBEATLAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (Number(mapboxLayers[i]?.dataid) === Number(mArr[j]?.dataid)) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.mapType === mapLayerName.FLYINGLINELAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (Number(mapboxLayers[i]?.dataid) === Number(mArr[j]?.dataid)) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.mapType === mapLayerName.SIZESCATTERLAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (Number(mapboxLayers[i]?.dataid) === Number(mArr[j]?.dataid)) {
                mapboxLayers[i] &&
                  mapboxLayers[i].updateMapboxLayer(mArr[j], spaceojoMapStyle || MAPBOX_STYLE);
              }
            }
          }
        }
        if (mapboxLayers[i]?.mapType === mapLayerName.WARNIMAGELAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (Number(mapboxLayers[i]?.dataid) === Number(mArr[j]?.dataid)) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
      }
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      layers,
      cameraList,
      flyState,
      spaceojoMapStyle,
      deleteMapLayers,
      interactiveData,
      mapController,
      iviewState,
      baseLayer,
    } = this.props;
    const {
      dlayers,
      mapbox,
      // deckglLayers, mapboxLayers
    } = this.state;
    console.log('asdfasdfmmsadfasdf', nextProps?.mapController);
    if (mapController !== nextProps?.mapController) {
      console.log('asdfasfsdfsdf', iviewState);
      if (nextProps?.mapController) {
        this.setState({
          mapController: nextProps?.mapController,
        });
      }
    }

    if (spaceojoMapStyle !== nextProps?.spaceojoMapStyle) {
      console.log('asfdad789fsadfsadf', nextProps?.spaceojoMapStyle);
      this.setState({
        spaceojoMapStyle: nextProps?.spaceojoMapStyle,
      });
      if (mapbox) {
        mapbox.on('style.load', e => {
          //   console.log('style.load', e);
          // if (dlayers?.length > 0) {
          this._addMapboxLayer(dlayers);
          // }
        });
      }
    }
    // if (flyState !== nextProps?.flyState) {
    //   console.log('asfsadfffffsdaf', flyState, nextProps?.flyState);
    //   this.setState({
    //     animate: nextProps?.flyState,
    //   });
    // }
    if (cameraList !== nextProps?.cameraList) {
      console.log('sadfasdfsadfsad', nextProps?.cameraList);
      this.flyToCamera(nextProps?.cameraList);
    }
    if (iviewState !== nextProps.iviewState) {
      console.log('sadfasdfsadfsad222', nextProps.iviewState);
      if (nextProps.iviewState && nextProps.iviewState?.longitude) {
        this.setStateP({
          iviewState: { ...nextProps.iviewState, ...FlyToCamera },
          defaultCamera: nextProps.iviewState,
        });
      }
    }
    if (deleteMapLayers !== nextProps?.deleteMapLayers) {
      if (nextProps?.deleteMapLayers?.length > 0) {
        this.removeAllLayer(nextProps?.deleteMapLayers);
      }
    }
    if (layers !== nextProps?.layers) {
      // this.cameraSc(this.state.iviewState);
      let allLayers = arrayUniqueDataM([...dlayers, ...nextProps?.layers]);
      // console.log('allLayers', allLayers);
      this.setStateP({
        dlayers: allLayers,
        // 此处置空有问题, 会导致图层显隐
      });
      let timer = setTimeout(() => {
        this._addDeckLayer(nextProps?.layers);
        clearTimeout(timer);
      }, 0);
      if (mapbox) {
        this._addMapboxLayer(allLayers);
      }
    }
    if (interactiveData !== nextProps?.interactiveData) {
      console.log('asdfsafasdfasdf', nextProps?.interactiveData);
      this.setState({
        interactiveData: nextProps?.interactiveData,
      });
      // if (nextProps.interactiveData[0]?.defaultInteraction?.eventOption) {
      //   let eventOptionNext = JSON.parse(
      //     nextProps.interactiveData[0]?.defaultInteraction?.eventOption,
      //   );
      //   防止切换到跳转，间接触发跳转
      // if (!(eventOptionNext.eventCondition === 'click' && eventOptionNext.eventAction === '4')) {
      this.mapEvent(this.state.eventInfo, nextProps?.interactiveData, this.state.eventState, 2);
      // }
      // }
    }
    if (baseLayer !== nextProps?.baseLayer) {
      this.setState({
        baseLayer: nextProps?.baseLayer,
      });
    }
  }

  //相机飞行
  flyToCamera = cameraList => {
    this.setStateP({
      animate: true,
    }).then(() => {
      if (cameraList[0]?.length < 1) {
        return false;
      }
      let frames = cameraList[0]?.frames;
      if (frames?.length < 2) {
        return false;
      }
      // console.log('cameraList', cameraList[0]);
      let flyOption = cameraList[0]?.option;
      if (flyOption?.flightSetIsTrue) {
        if (flyOption?.flightType === 0) {
          let allTime = flyOption?.flightTime;
          this.flightType0(cameraList[0], frames, allTime);
        } else if (flyOption?.flightType === 1) {
          let allTime = flyOption?.flightTime;
          this.flightType1(cameraList[0], frames, allTime);
        } else if (flyOption?.flightType === 2) {
          let allTime = flyOption?.flightTime;
          this.flightType2(cameraList[0], frames, allTime);
        } else if (flyOption?.flightType === 3) {
          let allTime = flyOption?.flightTime;
          this.flightType3(cameraList[0], frames, allTime);
        }
      }
    });
  };

  flightType3 = (camera, frames, allTime) => {
    console.log('hgjasdfhjbnsaas', camera, frames, allTime);
    frames = frames.sort((a, b) => {
      return a?.id - b?.id;
    });
    let lonlatArr = [];
    for (const i in frames) {
      if (frames.hasOwnProperty(i)) {
        let camrea = frames[i]?.option?.viewCamera;
        if (camrea) {
          lonlatArr.push({
            ...camrea,
            flightTime: frames[i]?.option?.flightTime,
            stayTime: frames[i]?.option?.stayTime,
            id: frames[i]?.id,
          });
        } else {
          return false;
        }
      }
    }
    //回到原点
    if (camera?.option?.backToStart) {
      lonlatArr.push(frames[0]?.option.viewCamera);
    }
    // FlyToCamera
  };

  //沿线飞行
  flightType1 = (camera, frames, allTime) => {
    console.log('asfscameradfsda', camera);
    frames = frames.sort((a, b) => {
      return a?.id - b?.id;
    });
    let lonlatArr = [];
    for (const i in frames) {
      if (frames.hasOwnProperty(i)) {
        let camrea = frames[i]?.option?.viewCamera;
        if (camrea) {
          lonlatArr.push({
            ...camrea,
            flightTime: frames[i]?.option?.flightTime,
            stayTime: frames[i]?.option?.stayTime,
            id: frames[i]?.id,
          });
        } else {
          return false;
        }
      }
    }
    //回到原点
    if (camera?.option?.backToStart) {
      lonlatArr.push(frames[0]?.option.viewCamera);
    }

    GetFps(fps => {
      let that = this;
      // console.log('GetFps', fps, allTime);
      flyTo();
      function flyTo() {
        // let trend = (allTime / (frames?.length - 1)) * fps;
        let arrNew = [];
        for (let i = 0; i < lonlatArr.length; i++) {
          if (i < lonlatArr.length - 1) {
            // console.log('asdflonlatArrasdfad', lonlatArr[i]);
            let trend = lonlatArr[i]?.flightTime * fps;
            let trendStay = lonlatArr[i]?.stayTime * fps;
            let y = (lonlatArr[i + 1]?.longitude - lonlatArr[i]?.longitude) / trend;
            let x = (lonlatArr[i + 1]?.latitude - lonlatArr[i]?.latitude) / trend;
            let bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
            if (
              lonlatArr[i]?.bearing < 0 &&
              lonlatArr[i + 1]?.bearing < 0 &&
              lonlatArr[i + 1]?.bearing < lonlatArr[i]?.bearing
            ) {
              bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
            }

            if (
              lonlatArr[i]?.bearing < 0 &&
              lonlatArr[i + 1]?.bearing > 0 &&
              lonlatArr[i + 1]?.bearing > lonlatArr[i]?.bearing
            ) {
              bearing = (360 - (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing)) / trend;
            }

            let pitch = (lonlatArr[i + 1]?.pitch - lonlatArr[i]?.pitch) / trend;
            let zoom = (lonlatArr[i + 1]?.zoom - lonlatArr[i]?.zoom) / trend;

            for (let j = 0; j < trend; j++) {
              arrNew.push({
                longitude: lonlatArr[i]?.longitude + y * j,
                latitude: lonlatArr[i]?.latitude + x * j,
                bearing: Math.abs(bearing),
                pitch: lonlatArr[i]?.pitch + pitch * j,
                zoom: lonlatArr[i]?.zoom + zoom * j,
              });
            }
            for (let j = 0; j < trendStay; j++) {
              arrNew.push({});
            }
          }
        }

        // console.log('arrNew', arrNew);
        let n = 0;
        let animation = null; // eslint-disable-line no-unused-vars
        // let { animate } = this.state;
        let bearing = 0;
        function animateFly() {
          let viewport = arrNew[n++];
          // const { iviewState } = that.state;
          if (viewport && arrNew?.length > 0) {
            if (that.state.animate) {
              if (viewport?.longitude) {
                that.setState({
                  iviewState: {
                    ...camera?.option.viewCamera,
                    longitude: viewport?.longitude,
                    latitude: viewport?.latitude,
                    pitch: viewport?.pitch,
                    zoom: viewport?.zoom,
                    bearing: 0 - bearing,
                    cameraLock: viewport?.cameraLock,
                    cameraLockType: viewport?.cameraLockType,
                  },
                });
                that.cameraSc({
                  ...camera?.option.viewCamera,
                  longitude: viewport?.longitude,
                  latitude: viewport?.latitude,
                  bearing: 0 - bearing,
                  pitch: viewport?.pitch,
                  zoom: viewport?.zoom,
                  cameraLock: viewport?.cameraLock,
                  cameraLockType: viewport?.cameraLockType,
                });
                bearing = bearing + viewport?.bearing;
              } else {
              }
              animation = requestAnimationFrame(animateFly);
            } else {
              n = 0;
            }
          } else {
            // console.log('jieshu', 111111111111);
            if (camera?.option?.loopFlight) {
              flyTo();
            }
            // n = 0;
            // animation = requestAnimationFrame(animateFly);
            cancelAnimationFrame(animateFly);
          }
        }
        animateFly();
      }
    });
  };

  //沿线飞行
  flightType0 = (camera, frames, allTime) => {
    frames = frames.sort((a, b) => {
      return a?.id - b?.id;
    });
    let lonlatArr = [];
    for (const i in frames) {
      if (frames.hasOwnProperty(i)) {
        let camrea = frames[i]?.option?.viewCamera;
        if (camrea) {
          lonlatArr.push(camrea);
        } else {
          return false;
        }
      }
    }

    //回到原点
    if (camera?.option?.backToStart) {
      lonlatArr.push(frames[0]?.option.viewCamera);
    }

    GetFps(fps => {
      let that = this;
      // console.log('GetFps', fps, allTime);
      flyTo();
      function flyTo() {
        let trend = (allTime / (frames?.length - 1)) * fps;
        let arrNew = [];
        for (let i = 0; i < lonlatArr.length; i++) {
          if (i < lonlatArr.length - 1) {
            let y = (lonlatArr[i + 1]?.longitude - lonlatArr[i]?.longitude) / trend;
            let x = (lonlatArr[i + 1]?.latitude - lonlatArr[i]?.latitude) / trend;
            let bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
            if (
              lonlatArr[i]?.bearing < 0 &&
              lonlatArr[i + 1]?.bearing < 0 &&
              lonlatArr[i + 1]?.bearing < lonlatArr[i]?.bearing
            ) {
              bearing = (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing) / trend;
            }

            if (
              lonlatArr[i]?.bearing < 0 &&
              lonlatArr[i + 1]?.bearing > 0 &&
              lonlatArr[i + 1]?.bearing > lonlatArr[i]?.bearing
            ) {
              bearing = (360 - (lonlatArr[i + 1]?.bearing - lonlatArr[i]?.bearing)) / trend;
            }

            let pitch = (lonlatArr[i + 1]?.pitch - lonlatArr[i]?.pitch) / trend;
            let zoom = (lonlatArr[i + 1]?.zoom - lonlatArr[i]?.zoom) / trend;
            for (let j = 0; j < trend; j++) {
              arrNew.push({
                longitude: lonlatArr[i]?.longitude + y * j,
                latitude: lonlatArr[i]?.latitude + x * j,
                bearing: Math.abs(bearing),
                pitch: lonlatArr[i]?.pitch + pitch * j,
                zoom: lonlatArr[i]?.zoom + zoom * j,
              });
            }
          }
        }
        // console.log('arrNew', arrNew);
        let n = 0;
        let animation; // eslint-disable-line no-unused-vars
        // let { animate } = this.state;
        let bearing = 0;
        function animateFly() {
          let viewport = arrNew[n++];
          // console.log('asdfsadfasdfsdfa', 111111);

          // const { iviewState } = that.state;
          if (viewport && arrNew?.length > 0) {
            if (that.state.animate) {
              that.setState({
                iviewState: {
                  ...camera?.option.viewCamera,
                  longitude: viewport?.longitude,
                  latitude: viewport?.latitude,
                  pitch: viewport?.pitch,
                  zoom: viewport?.zoom,
                  bearing: 0 - bearing,
                  cameraLock: viewport?.cameraLock,
                  cameraLockType: viewport?.cameraLockType,
                },
              });
              that.cameraSc({
                ...camera?.option.viewCamera,
                longitude: viewport?.longitude,
                latitude: viewport?.latitude,
                bearing: 0 - bearing,
                pitch: viewport?.pitch,
                zoom: viewport?.zoom,
                cameraLock: viewport?.cameraLock,
                cameraLockType: viewport?.cameraLockType,
              });
            } else {
              cancelAnimationFrame(animateFly);
              return;
            }
            bearing = bearing + viewport?.bearing;
            animation = requestAnimationFrame(animateFly);
          } else {
            // console.log('jieshu', 111111111111);
            if (camera?.option?.loopFlight) {
              flyTo();
            }
            // n = 0;
            // animation = requestAnimationFrame(animateFly);
            cancelAnimationFrame(animateFly);
          }
        }
        animateFly();
      }
    });
  };

  //中心点旋转
  flightType2 = (camera, frames, allTime) => {
    // let count = 0;
    // let count1 = 0;
    // this.setState({
    //   initialViewState: {
    //     bearing: count === 0 ? 180 - count1 : 0 - count1,
    //   },
    // });
    // count = count + 1;
    // count1 = count1 + 1;
    // // setTimeout(() => {
    // if (!this.interval) {
    //   this.interval = setInterval(() => {
    //     if (count === 2) {
    //       count = 0;
    //     }
    //     if (count1 === 180) {
    //       count1 = 0;
    //     }
    //     this.setState({
    //       initialViewState: {
    //         bearing: count === 0 ? 180 - count1 : 0 - count1,
    //       },
    //     });
    //     count = count + 1;
    //     count1 = count1 + 1;
    //   }, 10 * 60000);
    // }
  };

  removeAllLayer = allMaplayer => {
    let { deckglLayers, mapboxLayers, dlayers } = this.state;
    // console.log('asdfasdfsd', deckglLayers);
    for (const i in deckglLayers) {
      if (deckglLayers.hasOwnProperty(i)) {
        for (const j in allMaplayer) {
          if (allMaplayer.hasOwnProperty(j)) {
            if (Number(deckglLayers[i]?.props?.dataid) === Number(allMaplayer[j]?.id)) {
              // console.log('allMaplayer', allMaplayer[j]);
              deckglLayers = deckglLayers.filter(elem => {
                return Number(elem.props.dataid) !== Number(allMaplayer[j]?.id);
              });
            }
          }
        }
      }
    }
    for (const i in mapboxLayers) {
      if (mapboxLayers.hasOwnProperty(i)) {
        for (const j in allMaplayer) {
          if (allMaplayer.hasOwnProperty(j)) {
            if (Number(mapboxLayers[i]?.dataid) === Number(allMaplayer[j]?.id)) {
              mapboxLayers[i].removeMapLayer();
              // console.log('allMaplayer', allMaplayer[j]);
              mapboxLayers = mapboxLayers.filter(elem => {
                return Number(elem?.dataid) !== Number(allMaplayer[j]?.id);
              });
              dlayers = dlayers.filter(elem => {
                return Number(elem?.dataid) !== Number(allMaplayer[j]?.id);
              });
            }
          }
        }
      }
    }
    this._tripsdeleteTime(deckglLayers);
    this.setStateP({
      deckglLayers: deckglLayers,
      mapboxLayers: mapboxLayers,
      dlayers: dlayers,
    }).then(() => {
      // this._findTripsLayer();
    });
    // deckglLayers = deckglLayers.filter((elem)=>{
    //   return elem?.props.dataid !==
    // })
  };

  clearMapAllLayer = () => {
    let { deckglLayers, mapboxLayers, dlayers, baseLayer } = this.state;
    setTimeout(() => {
      console.log('1111aSFASDFSDF', deckglLayers);
      for (const i in mapboxLayers) {
        if (mapboxLayers.hasOwnProperty(i)) {
          mapboxLayers[i] && mapboxLayers[i].removeMapLayer();
        }
      }
      this._clearAllTripsdeleteTime(deckglLayers);
      let deckglLayersbuild = deckglLayers.filter(elem => {
        return elem?.id === baseLayer?.id || elem?.id === baseLayer?.layerId;
      });
      this.setStateP({
        deckglLayers: deckglLayersbuild,
        mapboxLayers: [],
        dlayers: [],
        animate: false,
        popShow: false,
      }).then(() => {
        // this._findTripsLayer();
      });
      // deckglLayers = deckglLayers.filter((elem)=>{
      //   return elem?.props.dataid !==
      // })
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  _onViewStateChange = ({ viewState }) => {
    // console.log('viewState', viewState);
    localStorage.setItem('viewport', JSON.stringify(viewState));
    this.cameraSc(viewState);
  };

  cameraSc = viewState => {
    if (!viewState) {
      return false;
    }
    const { zoom } = viewState;
    let deckglLayersNew = [];
    let changeLayerType = false;
    const { deckglLayers, mapboxLayers } = this.state;
    // console.log('asdfasdfasdfsd', deckglLayers);
    for (let i in deckglLayers) {
      if (
        deckglLayers[i].props?.updateLayer &&
        deckglLayers[i].props?.visibility === 2 &&
        deckglLayers[i].props?.dataVisiably === 2
      ) {
        let deckglLayersTrip = null;
        const { minZoom, maxZoom, visible } = deckglLayers[i].props;
        let newVisible = zoom > maxZoom || zoom < minZoom ? false : true;
        if (newVisible !== visible) {
          changeLayerType = true;
        }
        deckglLayersNew.push(
          deckglLayers[i].props.updateLayer({
            visible: newVisible,
          }),
        );
        deckglLayersTrip = deckglLayers[i].props.updateLayer({
          visible: newVisible,
        });
        if (deckglLayersTrip?.props?.mapType === 'TripsLayer') {
          if (changeLayerType) {
            this._findTripsLayer(deckglLayersTrip);
          }
          if (!newVisible) {
            this._tripsClearTime(deckglLayersTrip);
          }
        }
      } else {
        deckglLayersNew.push(deckglLayers[i]);
      }
    }
    for (const j in mapboxLayers) {
      if (mapboxLayers[j]?.mapType === 'textLabelLayer') {
        const { minZoom, maxZoom } = mapboxLayers[j].option;
        let visibility = mapboxLayers[j].visibility;
        let newVisible = zoom > maxZoom || zoom < minZoom ? false : true;
        newVisible = !visibility ? visibility : newVisible;
        mapboxLayers[j].setLayerVisible(newVisible);
      }
    }
    if (changeLayerType) {
      this.setStateP({
        iviewState: viewState,
        deckglLayers: deckglLayersNew,
      });
    }
    this.setStateP({
      iviewState: viewState,
    });
  };

  // _onWebGLInitialized = () => {
  //   // this._addMapboxLayer(this.props.layers);
  // };
  // _onWebGLInitialized = onWebGLInitialized;
  onAfterRender = ({ gl }) => {
    this.cameraSc(this.state.iviewState);
  };

  layerClick = (value, info, event) => {
    const { mapbox, interactiveData, selectLayerDataId } = this.state;
    console.log('interac34tiveData', value, '----------', info, '----------', event);
    this.mapEvent(info, interactiveData, value, 1);
  };

  layerHover = (value, info, event) => {
    const { mapbox, interactiveData } = this.state;
    console.log('interac34tiveData', info, event);
    this.mapEvent(info, interactiveData, value, 2);
  };

  clearCommon = () => {
    if (this.state.popShow) {
      this.setState({
        popShow: false,
      });
    }
    if (this.popup) {
      this.popup.removeMapLayer();
    }
  };

  //layerHover  layerClick
  mapEvent = (info, interactiveData, value, jumpState) => {
    const { mapbox, iviewState } = this.state;
    if (info?.object) {
      let content = info?.object?.properties;
      // console.log(info.layer?.props?.dataid.replace(/[^0-9]/gi, ''), 'dsfadsf');
      console.log(interactiveData, 'dsfadsf', info);
      for (const variable in interactiveData) {
        if (interactiveData.hasOwnProperty(variable)) {
          if (
            info.layer?.props?.mapType === 'ScatterplotLayer' ||
            info.layer?.props?.mapType === 'TextLayer' ||
            info.layer?.props?.mapType === 'IconLayer' ||
            info.layer?.props?.mapType === 'ScenegraphLayer' ||
            info.layer?.props?.mapType === 'PolygonLayer'
          ) {
            if (Number(info.layer?.props?.dataid) === Number(interactiveData[variable]?.id)) {
              console.log('asfdas098dfasdfsdf', interactiveData[variable]);
              if (interactiveData[variable]?.defaultInteraction?.eventOption) {
                let allFeildetails = info?.object?.properties?.table_head;
                let allFeild = info?.object?.properties;
                let eventOption = JSON.parse(
                  interactiveData[variable]?.defaultInteraction?.eventOption,
                );
                console.log(eventOption, 'eventOption');
                if (value === eventOption?.eventCondition) {
                  //   alert(2);

                  // ( 如果不是弹框) {隐藏弹框}
                  if (eventOption?.eventAction !== '1') {
                    this.clearCommon();
                  }
                  if (eventOption?.isShow) {
                    // coordinate 飞行
                    let activeStyle = eventOption?.activeStyle;
                    let flyTime = 0;
                    console.log('safmapTypeasfad', info.layer?.props?.mapType);
                    // 暂时去除面图层的点击飞行
                    if (
                      activeStyle?.flightCamera?.status &&
                      info.layer?.props?.mapType !== 'PolygonLayer'
                    ) {
                      let zoom = activeStyle?.flightCamera?.zoom;
                      flyTime = activeStyle?.flightCamera?.time;
                      this.setStateP({
                        iviewState: {
                          longitude: info?.object?.geometry?.coordinates[0],
                          latitude: info?.object?.geometry?.coordinates[1],
                          zoom: zoom,
                          ...FlyToCamera,
                          bearing: iviewState?.bearing,
                          pitch: iviewState?.pitch,
                          transitionDuration: flyTime * 1000,
                        },
                      });
                    }
                    setTimeout(() => {
                      // ------ 固定位置 ------
                      if (
                        !eventOption?.interactionBoxPosition?.positionType ||
                        eventOption?.interactionBoxPosition?.positionType === 2
                      ) {
                        if (this.popup) {
                          this.popup.removeMapLayer();
                        }
                        if (!eventOption?.popType) {
                          //   弹框字段为空
                          if (eventOption.interactionDefault.selectField.length === 0) {
                            this.clearCommon();
                          } else {
                            console.log('adfsds378adfsadf', allFeild);
                            let selectField = eventOption?.interactionDefault?.selectField;
                            console.log(selectField, 'dfaselectFielddsfads');
                            let boxType = eventOption?.interactionDefault?.boxType;
                            let arrayFeild = [];
                            for (let i in selectField) {
                              let keyObj = allFeildetails.filter(e => e.key === selectField[i]);
                              arrayFeild.push({
                                key: keyObj[0].alias,
                                value: allFeild[selectField[i]],
                              });
                            }
                            this.setState({
                              popType: eventOption?.popType,
                              boxType: boxType,
                              popShow: true,
                              info: info,
                              tkContent: arrayFeild,
                              popContentStyle: eventOption,
                              eventInfo: info,
                              eventState: value,
                            });
                          }
                        } else if (eventOption?.popType === 1) {
                          this.setState({
                            popType: eventOption?.popType,
                            popShow: true,
                            info: info,
                            eventInfo: info,
                            popContentStyle: eventOption,
                            eventState: value,
                            allFeild,
                          });
                          //跟随
                          // this.popup.addMapLayer(mapbox, info);
                        } else {
                          this.setState({
                            popType: eventOption?.popType,
                            popShow: true,
                            info: info,
                            eventInfo: info,
                            popContentStyle: eventOption,
                            eventState: value,
                          });
                        }
                      } else {
                        let tempIsTrue = true;
                        // 默认类型
                        if (!eventOption?.popType) {
                          //   弹框字段为空
                          if (eventOption.interactionDefault.selectField.length === 0) {
                            this.clearCommon();
                            tempIsTrue = false;
                          }
                        }
                        if (tempIsTrue) {
                          // ------ 跟随对齐 ------
                          this.setState({
                            info: info,
                            eventInfo: info,
                            popContentStyle: eventOption,
                            eventState: value,
                            allFeild,
                          });
                          if (this.state.popShow) {
                            this.setState({
                              popShow: false,
                            });
                          }
                          console.log('adfsds378adfsadf', eventOption);
                          let selectField = eventOption?.interactionDefault?.selectField;
                          console.log(selectField, 'dfaselectFielddsfads');
                          let boxType = eventOption?.interactionDefault?.boxType;
                          let arrayFeild = [];
                          for (let i in selectField) {
                            let keyObj = allFeildetails.filter(e => e.key === selectField[i]);
                            arrayFeild.push({
                              key: keyObj[0].alias,
                              value: allFeild[selectField[i]],
                            });
                          }
                          let popType = eventOption?.popType;
                          let popShow = this.state.popShow;
                          this.popup.addMapLayer(mapbox, {
                            popType,
                            boxType,
                            show: popShow,
                            info,
                            content: arrayFeild,
                            contentStyle: eventOption,
                            allFeild,
                          });
                        }
                      }
                    }, flyTime * 1000);
                  } else {
                    if (this.state.popShow) {
                      this.setState({
                        popShow: false,
                      });
                    }
                    if (this.popup) {
                      this.popup.removeMapLayer();
                    }
                  }

                  if (eventOption?.eventCondition === 'click' && eventOption?.eventAction === '4') {
                    // 跳转
                    if (jumpState === 1) {
                      window.open(eventOption.openNewPage.url);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (this.state.eventState === value) {
        this.setState({
          popShow: false,
        });
        if (this.popup) {
          this.popup.removeMapLayer();
        }
      }
    }
  };

  //交互事件
  onInteractionStateChange = interactionState => {
    if (
      interactionState?.isDragging ||
      interactionState?.isRotating ||
      interactionState?.isZooming
    ) {
      this.setState({
        animate: false,
      });
      // this.props.flyToHandle(false);
    }
  };

  getMapController = () => {
    const { mapController } = this.state;
    if (!mapController) {
      return false;
    }
    //控制相机视角的方法
    let { cameraLock, cameraLockType } = mapController;
    if (!cameraLock) {
      return null;
    }
    let newMapController = {
      //鼠标旋转
      dragRotate: false,
      //鼠标平移
      dragPan: false,
      //滚动缩放
      scrollZoom: false,
      //双击缩放
      doubleClickZoom: false,
      //多点触摸缩放
      touchZoom: false,
      //多点旋转
      touchRotate: false,
      //启用键盘交互
      keyboard: false,
    };
    if (cameraLockType === 1) {
    }
    if (cameraLockType === 2) {
      newMapController.dragRotate = true;
      newMapController.dragPan = true;
      newMapController.touchRotate = true;
    }
    if (cameraLockType === 3) {
      newMapController.dragPan = true;
      newMapController.scrollZoom = true;
      newMapController.doubleClickZoom = true;
      newMapController.touchRotate = true;
    }
    return {
      ...newMapController,
    };
  };

  viewStateHandle = viewState => {
    if (viewState?.longitude) {
      if (this.props.setIviewStateProps) {
        this.props.setIviewStateProps(viewState);
      } else {
        this.setState({
          iviewState: viewState,
        });
      }
    }
  };

  render() {
    const { deckglLayers, iviewState, spaceojoMapStyle, mapController, defaultCamera } = this.state;
    // console.log('adsdfa987sfasdfd', iviewState);
    return (
      <DeckGL
        layers={[...deckglLayers]}
        //地图视角相关配置
        initialViewState={initialViewState}
        //动态视角
        viewState={iviewState}
        //控制器
        controller={{ type: MapController, ...this.getMapController() }}
        //视角变化
        onViewStateChange={this._onViewStateChange}
        // onWebGLInitialized={this._onWebGLInitialized}
        onAfterRender={this.onAfterRender}
        style={{ position: 'absolute', zIndex: 0 }}
        onClick={this.layerClick.bind(this, 'click')}
        // onHover={this.layerHover.bind(this, 'hover')}
        onHover={debounce(this.layerHover.bind(this, 'hover'), 100)}
        onInteractionStateChange={this.onInteractionStateChange}
        effects={[
          new LightingEffect({
            ambientLight,
            pointLight1,
            pointLight2,
            directionalLight,
          }),
        ]}
        // map={mapboxgl}
        // parameters={((blendFunc = [GL.ONE, GL.ONE, GL.ONE, GL.ONE]), (depthTest = false))}
      >
        <StaticMap
          ref={ref => {
            if (ref) {
              // let map = ref.getMap();
            }
          }}
          //地图样式
          //mapStyle={'http://114.255.136.222:8800/styles/beijing_3d_scene/style.json'}
          mapStyle={spaceojoMapStyle || MAPBOX_STYLE}
          preventStyleDiffing={true}
          renderWorldCopies={false}
          preserveDrawingBuffer={true}
          //加载地图
          onLoad={e => {
            const { layers, getMapBox } = this.props;
            const { dlayers } = this.state;
            let map = e?.target;
            getMapBox && getMapBox(map);
            this.setStateP({
              mapbox: map,
              dlayer: [...dlayers, ...layers],
            }).then(() => {
              this._addMapboxLayer(dlayers);
            });
          }}
          //Token
          mapboxApiAccessToken={MAPBOX_TOKEN}
          reuseMaps={true}
          asyncRender={false}
        ></StaticMap>
        <PopView
          popType={this.state.popType}
          boxType={this.state.boxType}
          show={this.state.popShow}
          info={this.state.info}
          content={this.state.tkContent}
          contentStyle={this.state.popContentStyle}
          allFeild={this.state.allFeild}
          closePop={() => {
            this.setState({
              popShow: false,
            });
          }}
        ></PopView>
        {mapController?.mapdirectionVisible && (
          <NavgationControl
            viewState={{ ...mapController, ...iviewState }}
            viewStateHandle={this.viewStateHandle}
            viewCamera={{ ...defaultCamera, ...mapController }}
          ></NavgationControl>
        )}
      </DeckGL>
    );
  }
}
export default DMap;
