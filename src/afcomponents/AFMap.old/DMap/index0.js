import { PureComponent } from 'react';
// import styles from './styles.less';
import DeckGL, { MapController } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import {
  MAPBOX_STYLE,
  MAPBOX_TOKEN,
  initialViewState,
  mapLayerName,
  layerTypeFiltter,
} from './mapConst';
import { layerError } from './messageConstant';
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
// mapbox图层
import TextLabel from '@/components/DCMap/ReactDeckGL/Mapbox/TextLabel';
// import HeatLayer from '@/components/DCMap/ReactDeckGL/Mapbox/HeatLayer';
import HeartbeatLayer from '@/components/DCMap/ReactDeckGL/Mapbox/HeartbeatLayer';
import FlyingLineLayer from '@/components/DCMap/ReactDeckGL/Mapbox/FlyingLineLayer';
import ClusterLayer from '@/components/DCMap/ReactDeckGL/Mapbox/ClusterLayer';

// function isArray(array) {}
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
function arrayUniqueData(arr, key = 'dataid') {
  let hash = {};
  return arr.reduce(function(tarr, cru, index) {
    if (!hash[cru['props'][key]]) {
      hash[cru['props'][key]] = { index: index };
      tarr.push(cru);
    } else {
      tarr.splice(hash[cru['props'][key]]['index'], 1, cru);
    }
    // console.log("tarrtarrtarr", tarr)
    return tarr;
  }, []);
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
        let newData = JSON.parse(JSON.stringify(deckglLayers[k].props?.data));
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
        elem?.type === mapLayerName.SCATTERPLOT_LAYER ||
        elem?.type === mapLayerName.TRIPS_LAYER ||
        elem?.type === mapLayerName.ARC_LAYER ||
        elem?.type === mapLayerName.BITMAP_LAYER ||
        elem?.type === mapLayerName.COLUMN_LAYER ||
        elem?.type === mapLayerName.CPUGRID_LAYER ||
        elem?.type === mapLayerName.CONTOUR_LAYER ||
        elem?.type === mapLayerName.GEOJSON_LAYER ||
        elem?.type === mapLayerName.GPUGRID_LAYER ||
        elem?.type === mapLayerName.GREATCIRCLE_LAYER ||
        elem?.type === mapLayerName.TEXT_LAYER ||
        elem?.type === mapLayerName.PATH_LAYER ||
        elem?.type === mapLayerName.LINE_LAYER ||
        elem?.type === mapLayerName.ICON_LAYER ||
        elem?.type === mapLayerName.HEATMAP_LAYER ||
        elem?.type === mapLayerName.DTERRAIN_LAYER ||
        elem?.type === mapLayerName.SOLIDPOLYGON_LAYER ||
        elem?.type === mapLayerName.SCREENGRID_LAYER ||
        elem?.type === mapLayerName.POLYGON_LAYER ||
        elem?.type === mapLayerName.GRIDCELL_LAYER ||
        elem?.type === mapLayerName.GRID_LAYER ||
        elem?.type === mapLayerName.HEXAGON_LAYER ||
        elem?.type === mapLayerName.H3CLUSTER_LAYER ||
        elem?.type === mapLayerName.H3HEXAGON_LAYER
      );
    });
  } else {
    return layers.filter(elem => {
      return (
        elem?.type === mapLayerName.TEXT_LABEL ||
        elem?.type === mapLayerName.HEAT_LAYER ||
        elem?.type === mapLayerName.HEARTBEATLAYER ||
        elem?.type === mapLayerName.FLYINGLINELAYER ||
        elem?.type === mapLayerName.SIZESCATTERLAYER
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
  };
  constructor(props) {
    super(props);
    this.time = null;
    this.setStateP = function(state) {
      return new Promise(resolve => this.setState(state, resolve));
    };
  }

  componentDidMount() {
    const { layers } = this.props;
    //添加deckgl图层
    this._addDeckLayer(layers);
  }
  componentWillUnmount() {
    if (this.time) {
      clearInterval(this.time);
    }
    this.setStateP({
      mapbox: null,
      iviewState: initialViewState,
      mapboxLayers: [],
      deckglLayers: [],
      dlayers: [],
    });
  }

  /**
   * 通过id查找deck的trips图层
   * @method {addDeckLayer}
   */
  _findTripsLayer = () => {
    const { deckglLayers } = this.state;
    let deckglLayers1 = [];
    for (const key in deckglLayers) {
      if (deckglLayers.hasOwnProperty(key)) {
        if (deckglLayers[key]?.props?.type === 'TripsLayer') {
          let { frequencyTime, currentTime, addtime, timeArr } = deckglLayers[key]?.props;
          addtime = isNaN(Number(addtime)) ? 1 : addtime;
          let maxnumber = Math.max.apply(null, timeArr) - Math.min.apply(null, timeArr);
          if (!this.time) {
            this.time = null;
            this.time = setInterval(() => {
              if (currentTime >= maxnumber) {
                currentTime = 0;
              } else {
                currentTime += addtime;
              }
              let tripsLayer = DTripsLayer({
                ...deckglLayers[key]?.props,
                data: deckglLayers[key]?.props?.data,
                currentTime: currentTime,
              });
              deckglLayers1.push(tripsLayer);
              this.setStateP({
                deckglLayers: arrayUnique([...deckglLayers, ...deckglLayers1]),
              });
            }, 1000 / frequencyTime);
          } else {
            clearInterval(this.time);
          }
        }
      }
    }
  };

  /**
   * 添加deck图层
   * @method {addDeckLayer}
   */
  _addDeckLayer = layers => {
    const { deckglLayers } = this.state;
    let deckglLayersNew1 = deckglLayers;
    // console.log('asdfasd34fsdf', deckglLayers, 'll', layers);
    for (const i in deckglLayersNew1) {
      if (deckglLayersNew1.hasOwnProperty(i)) {
        for (const j in layers) {
          if (layers.hasOwnProperty(j)) {
            if (Number(deckglLayersNew1[i]?.props?.dataid) === Number(layers[j]?.dataid)) {
              if (
                layers[j]?.type === mapLayerName.TEXT_LABEL ||
                layers[j]?.type === mapLayerName.HEAT_LAYER ||
                layers[j]?.type === mapLayerName.HEARTBEATLAYER ||
                layers[j]?.type === mapLayerName.FLYINGLINELAYER ||
                layers[j]?.type === mapLayerName.SIZESCATTERLAYER
              ) {
                deckglLayersNew1 = deckglLayersNew1.filter(elem => {
                  return elem?.props?.type !== deckglLayersNew1[i]?.props?.type;
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
        if (deckArr[i]?.type === mapLayerName.SCATTERPLOT_LAYER) {
          const dScatterplotLayer = DScatterplotLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(dScatterplotLayer);
        }
        if (deckArr[i]?.type === mapLayerName.TRIPS_LAYER) {
          const dTripsLayer = DTripsLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(dTripsLayer);
        }
        if (deckArr[i]?.type === mapLayerName.ARC_LAYER) {
          const dArcLayer = DArcLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(dArcLayer);
        }
        if (deckArr[i]?.type === mapLayerName.BITMAP_LAYER) {
          const bitmapLayer = DBitmapLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(bitmapLayer);
        }
        if (deckArr[i]?.type === mapLayerName.COLUMN_LAYER) {
          const columnLayer = DColumnLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(columnLayer);
        }
        if (deckArr[i]?.type === mapLayerName.CPUGRID_LAYER) {
          const cpugridLayer = DCPUGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(cpugridLayer);
        }
        if (deckArr[i]?.type === mapLayerName.CONTOUR_LAYER) {
          const contourLayer = DContourLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(contourLayer);
        }
        if (deckArr[i]?.type === mapLayerName.GEOJSON_LAYER) {
          const geojsonLayer = DGeoJsonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(geojsonLayer);
        }
        if (deckArr[i]?.type === mapLayerName.GPUGRID_LAYER) {
          const gpugridLayer = DGPUGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(gpugridLayer);
        }
        if (deckArr[i]?.type === mapLayerName.GREATCIRCLE_LAYER) {
          //const greatcircleLayer = DGreatCircleLayer(getProps(deckglLayers, deckArr[i]));
          //arrLay.push(greatcircleLayer);
        }
        if (deckArr[i]?.type === mapLayerName.TEXT_LAYER) {
          const textLayer = DTextLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(textLayer);
        }
        if (deckArr[i]?.type === mapLayerName.PATH_LAYER) {
          const pathLayer = DPathLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(pathLayer);
        }
        if (deckArr[i]?.type === mapLayerName.LINE_LAYER) {
          const lineLayer = DLineLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(lineLayer);
        }
        if (deckArr[i]?.type === mapLayerName.ICON_LAYER) {
          const iconLayer = DIconLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(iconLayer);
        }
        if (deckArr[i]?.type === mapLayerName.HEATMAP_LAYER) {
          const heatmapLayer = DHeatmapLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(heatmapLayer);
        }
        if (deckArr[i]?.type === mapLayerName.DTERRAIN_LAYER) {
          const terrainLayer = DTerrainLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(terrainLayer);
        }
        if (deckArr[i]?.type === mapLayerName.SOLIDPOLYGON_LAYER) {
          const solidPolygonLayer = DSolidPolygonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(solidPolygonLayer);
        }
        if (deckArr[i]?.type === mapLayerName.SCREENGRID_LAYER) {
          const screenGridLayer = DScreenGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(screenGridLayer);
        }
        if (deckArr[i]?.type === mapLayerName.POLYGON_LAYER) {
          const polygonLayer = DPolygonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(polygonLayer);
        }
        if (deckArr[i]?.type === mapLayerName.GRIDCELL_LAYER) {
          const gridCellLayer = DGridCellLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(gridCellLayer);
        }
        if (deckArr[i]?.type === mapLayerName.GRID_LAYER) {
          const gridLayer = DGridLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(gridLayer);
        }
        if (deckArr[i]?.type === mapLayerName.HEXAGON_LAYER) {
          const hexagonLayer = DHexagonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(hexagonLayer);
        }
        if (deckArr[i]?.type === mapLayerName.H3CLUSTER_LAYER) {
          const h3ClusterLayer = DH3ClusterLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(h3ClusterLayer);
        }
        if (deckArr[i]?.type === mapLayerName.H3HEXAGON_LAYER) {
          const h3HexagonLayer = DH3HexagonLayer(getProps(deckglLayersNew1, deckArr[i]));
          arrLay.push(h3HexagonLayer);
        }
      }
    }
    let arrBw = [...deckglLayersNew1, ...arrLay];
    let newDeckglLayers = arrayUnique(arrBw);
    let newDeckglLayers1 = arrayUniqueData(newDeckglLayers);

    // console.log('ASDFASDFASDF', layers);
    // for (const i in newDeckglLayers1) {
    //   if (newDeckglLayers1.hasOwnProperty(i)) {
    //     for (const j in layers) {
    //       if (layers.hasOwnProperty(j)) {
    //         if (Number(newDeckglLayers1[i]?.props?.dataid) === Number(layers[i]?.dataid)) {
    //           if (
    //             newDeckglLayers1[i]?.props?.type !== 'HeatLayer' ||
    //             newDeckglLayers1[i]?.props?.type !== 'HeartBeatLayer' ||
    //             newDeckglLayers1[i]?.props?.type !== 'SizeScatterLayer'
    //           ) {
    //             newDeckglLayers1 = newDeckglLayers1.filter(elem => {
    //               return Number(elem[i]?.props?.dataid) === Number(layers[i]?.dataid);
    //             });
    //             console.log('asdfasfasdfasdf', newDeckglLayers1);
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // this.setStateP({
    //   deckglLayers: [],
    // }).then(() => {
    //
    // });
    // setDeckglLayers([...arr1]);
    // console.log('newDeckglLayers', newDeckglLayers1);
    this.setStateP({
      deckglLayers: newDeckglLayers1,
    }).then(() => {
      this._findTripsLayer();
    });
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
    const { mapboxLayers, mapbox } = this.state;
    let mapboxLayersNew1 = mapboxLayers;
    // console.log('asdfasd34fsdf', deckglLayers, 'll', layers);
    for (const i in mapboxLayersNew1) {
      if (mapboxLayersNew1.hasOwnProperty(i)) {
        for (const j in layers) {
          if (layers.hasOwnProperty(j)) {
            if (Number(mapboxLayersNew1[i]?.props?.dataid) === Number(layers[j]?.dataid)) {
              if (
                layers[j]?.type === mapLayerName.SCATTERPLOT_LAYER ||
                layers[j]?.type === mapLayerName.TRIPS_LAYER ||
                layers[j]?.type === mapLayerName.ARC_LAYER ||
                layers[j]?.type === mapLayerName.BITMAP_LAYER ||
                layers[j]?.type === mapLayerName.COLUMN_LAYER ||
                layers[j]?.type === mapLayerName.CPUGRID_LAYER ||
                layers[j]?.type === mapLayerName.CONTOUR_LAYER ||
                layers[j]?.type === mapLayerName.GEOJSON_LAYER ||
                layers[j]?.type === mapLayerName.GPUGRID_LAYER ||
                layers[j]?.type === mapLayerName.GREATCIRCLE_LAYER ||
                layers[j]?.type === mapLayerName.TEXT_LAYER ||
                layers[j]?.type === mapLayerName.PATH_LAYER ||
                layers[j]?.type === mapLayerName.LINE_LAYER ||
                layers[j]?.type === mapLayerName.ICON_LAYER ||
                layers[j]?.type === mapLayerName.HEATMAP_LAYER ||
                layers[j]?.type === mapLayerName.DTERRAIN_LAYER ||
                layers[j]?.type === mapLayerName.SOLIDPOLYGON_LAYER ||
                layers[j]?.type === mapLayerName.SCREENGRID_LAYER ||
                layers[j]?.type === mapLayerName.POLYGON_LAYER ||
                layers[j]?.type === mapLayerName.GRIDCELL_LAYER ||
                layers[j]?.type === mapLayerName.GRID_LAYER ||
                layers[j]?.type === mapLayerName.HEXAGON_LAYER ||
                layers[j]?.type === mapLayerName.H3CLUSTER_LAYER ||
                layers[j]?.type === mapLayerName.H3HEXAGON_LAYER
              ) {
                // console.log('mapboxLayersNew1[i]', mapboxLayersNew1[i]);
                //删除图层
                // this.removeMapboxLayer([])
                // mapboxLayersNew1 = mapboxLayersNew1.filter(elem => {
                //   return elem?.props?.type !== mapboxLayersNew1[i]?.props?.type;
                // });
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
    // console.log('mapboxArr', mArr);
    // console.log("mArrmArr", mArr)
    //移除原有id相同的图层或者进行更新
    this._updateMapboxLayer(mapboxArr, mArr);
    // console.log('mapboxLayers444', mapboxLayers);
    let mapboxArrNew = [];
    for (const i in mArr) {
      if (mArr.hasOwnProperty(i)) {
        if (mArr[i]?.type === mapLayerName.TEXT_LABEL) {
          const textLabel = new TextLabel(mapbox, mArr[i]);
          textLabel.addMapLayer(mArr[i]?.data);
          mapboxArrNew.push(textLabel);
        }
        // 判断图层是否存在
        if (this._isMapboxExist(mapboxLayersNew1, mArr[i])) {
          if (mArr[i]?.type === mapLayerName.HEAT_LAYER) {
            // const heatLayer = new HeatLayer(mapbox, mArr[i]);
            // heatLayer.addMapLayer(mArr[i]?.data);
            // mapboxArrNew.push(heatLayer);
          }
          if (mArr[i]?.type === mapLayerName.HEARTBEATLAYER) {
            const aimatedIcon = new HeartbeatLayer(mapbox, mArr[i]);
            aimatedIcon.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(aimatedIcon);
          }
          if (mArr[i]?.type === mapLayerName.FLYINGLINELAYER) {
            const aimatedLine = new FlyingLineLayer(mapbox, mArr[i]);
            aimatedLine.addMapLayer(mArr[i]?.data);
            mapboxArrNew.push(aimatedLine);
          }
          if (mArr[i]?.type === mapLayerName.SIZESCATTERLAYER) {
            const clusterLayer = new ClusterLayer(mapbox, mArr[i]);
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
  removeMapboxLayer = mArr => {
    const { mapboxLayers } = this.state;
    // alert(JSON.stringify(mapboxLayers));
    for (const i in mapboxLayers) {
      if (mapboxLayers.hasOwnProperty(i)) {
        if (mapboxLayers[i]?.type === mapLayerName.TEXT_LABEL) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].removeMapLayer();
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.HEAT_LAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.HEARTBEATLAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.FLYINGLINELAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.SIZESCATTERLAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
      }
    }
  };

  /**
   * 删除mapbox的marker|popup图层,更新其余图层
   * @method {removeMapboxLayer}
   * @param {array} mapboxArr 历史图层
   * @param {array} mArr 传入图层
   */
  _updateMapboxLayer = (mapboxArr, mArr) => {
    const { mapboxLayers } = this.state;
    // alert(JSON.stringify(mapboxLayers));
    for (const i in mapboxLayers) {
      if (mapboxLayers.hasOwnProperty(i)) {
        if (mapboxLayers[i]?.type === mapLayerName.TEXT_LABEL) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].removeMapLayer();
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.HEAT_LAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.HEARTBEATLAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.FLYINGLINELAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
        if (mapboxLayers[i]?.type === mapLayerName.SIZESCATTERLAYER) {
          for (const j in mArr) {
            if (mArr.hasOwnProperty(j)) {
              if (mapboxLayers[i]?.id === mArr[j]?.id) {
                mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j]);
              }
            }
          }
        }
      }
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { layers } = this.props;
    const {
      dlayers,
      mapbox,
      // deckglLayers, mapboxLayers
    } = this.state;
    if (layers !== nextProps?.layers) {
      // console.log('asdfsadfsadfa', nextProps);
      // console.log('deckglLayers111', dlayers);
      // console.log("nextProps?.layers", nextProps?.layers)
      this._addDeckLayer(nextProps?.layers);
      if (mapbox) {
        this._addMapboxLayer(nextProps?.layers);
      }
      this.setStateP({
        dlayers: [...dlayers, ...nextProps?.layers],
      });
      // this._addMapboxLayer(nextProps?.layers);

      // if (this.state.mapbox) {
      //   this._addMapboxLayer(nextProps?.layers);
      // }
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.mapbox) {
  //     console.log('prevState', nextState.mapbox);
  //     return false;
  //   }
  //   // return nextState.someData !== this.state.someData;
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState', prevState.mapbox);
    if (this.state.mapbox !== prevState.mapbox) {
      console.log('prevState', this.state.mapbox);
      // this._addMapboxLayer(this.props.layers);
    }
    // if (this.state.dlayers !== prevState.dlayers) {
    //   if (this.state.mapbox) {
    //     this._addMapboxLayer(prevState.dlayers);
    //   }
    // }
    // if (prevProps.layers !== this.props.layers) {
    // }
  }

  _onViewStateChange = (a, b) => {
    this.setState({
      iviewState: a.viewState,
    });
  };

  onAfterRender = (a, b) => {
    // this._addMapboxLayer(this.props.layers);
  };

  _onWebGLInitialized = () => {
    // this._addMapboxLayer(this.props.layers);
  };
  layerClick = (a, b) => {
    // console.log('aaaaa', a, 'bbbb', b);
  };

  render() {
    const { deckglLayers, iviewState } = this.state;
    return (
      <DeckGL
        layers={[...deckglLayers]}
        //地图视角相关配置
        initialViewState={initialViewState}
        viewState={iviewState}
        //控制器
        controller={{ type: MapController }}
        //视角变化
        onViewStateChange={this._onViewStateChange}
        onWebGLInitialized={this._onWebGLInitialized}
        // onBeforeRender={this._onBeforeRender}
        style={{ position: 'absolute', zIndex: 0 }}
        onClick={(a, b) => this.layerClick(a, b)}
        // onHover={(a, b) => this.layerHover(a, b)}
        onAfterRender={this.onAfterRender}
      >
        <StaticMap
          ref={ref => {
            if (ref) {
              // let map = ref.getMap();
              // setMapbox(map);
            }
          }}
          //地图样式
          mapStyle={MAPBOX_STYLE}
          preventStyleDiffing={true}
          renderWorldCopies={false}
          preserveDrawingBuffer={true}
          //加载地图
          onLoad={e => {
            // const { layers } = this.props;
            // const { dlayers } = this.state;
            this.setStateP({
              mapbox: e?.target,
            }).then(() => {
              // if (dlayers?.length > 0) {
              //   this._addMapboxLayer(dlayers);
              // }
            });
          }}
          //Token
          mapboxApiAccessToken={MAPBOX_TOKEN}
          reuseMaps={true}
          asyncRender={false}
        ></StaticMap>
      </DeckGL>
    );
  }
}

export default DMap;
