/* eslint-disable no-useless-constructor */
//deck.lg基础地图模块
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import DeckGL from 'deck.gl';
import { WebMercatorViewport, View, MapView, GlobeView } from '@deck.gl/core';
import { IconLayer, ScatterplotLayer } from '@deck.gl/layers';
import MapGL, { StaticMap } from 'react-map-gl';
import { INITIAL_VIEW_STATE, MAPBOX_TOKEN, MAP_STYLE } from '@/utils/publickPage';
import GL from '@luma.gl/constants';
import ImgageLayer from './MapBoxLayer/ImageLayer';
import wuhai from '../../assets/home/wuhai1.png'
// import huangshi from '../../assets/home/huangshi.png'
import huangshi from '../../assets/huangshi/common/huangshi.png'
// import North from '@/components/North';
import { geoJson, shiGeoJson } from '@/utils/publickPage/geoJson'
function mapStateToProps ({ globalModel, globalMapModel, zhongdianqiyeModal }) {
    return {
        globalModel: globalModel,
        globalMapModel: globalMapModel,
        zhongdianqiyePoint: zhongdianqiyeModal.point,
    };
}
@connect(mapStateToProps)
class MapModel extends React.Component {
    constructor(props) {
        super(props);
    }
    //初次渲染完成之后调用
    componentDidMount () {
        document.oncontextmenu = function (e) {
            e.preventDefault();
        };
    }
    //初次加载完成的回调函数
    initMapCallback = event => {
        let { dispatch, initCallback } = this.props;
        let mapObj = null;
        if (event) {
            mapObj = event.getMap();
            dispatch({ type: 'globalMapModel/setMapObj', payload: mapObj });
            if (initCallback && mapObj) {
                if (mapObj.loaded()) {
                    mapObj.on('load', () => {
                        // initCallback(mapObj);
                        this.onLoadFun(mapObj, initCallback);
                    });
                } else {
                    this.onLoadFun(mapObj, initCallback);
                    // initCallback(mapObj);
                }
            }
        }
    };
    //地图对象实例化之后加载对应方法
    onLoadFun = (mapObj, initCallback) => {


        let layerobj = new IconLayer({
            id: '市区-icon',
            data: shiGeoJson.features,
            pickable: true,
            getIcon: d => {
                let obj = {
                    url: d.geometry.img,
                    width: d.geometry.width,
                    height: d.geometry.height,
                    anchorX: d.geometry.width / 2,
                    anchorY: d.geometry.height,
                };
                return obj;
            },
            sizeMinPixels: 80,
            sizeMaxPixels: 150,
            getSize: d => 1,
            sizeUnits: 'meters',
            getPosition: d => {
                return d.geometry.coordinates
            },

        })
        if (mapObj) {
            this.props.dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                // payload: [...this.props.globalMapModel.deckLayerArr, layerobj]
                payload: [layerobj]

            })
        }
        // console.log(mapObj,'mapObjmapObjmapObj')
        mapObj.on('styledata', function () {
            let option = {
                coordinates: [
                    [114.526517, 30.332979],
                    [115.505685, 30.332979],
                    [115.505685, 29.509487],
                    [114.526517, 29.509487]
                ],
                url: huangshi
            }
            let imageLayer = new ImgageLayer(mapObj, 'imglayer', option)
            imageLayer.addMapLayer()
        });

        mapObj.on('Click', (e) => {
            console.log(e, 'dsafadasdw');
        })
        mapObj.on('move', function (e) {
            console.log(e, 'mapdsacclick');
            // console.log(e.target._easeOptions, 'eeqw3213');
            // const newVive = {
            //     latiude
            // }
            // this.props.dispatch({
            //     type: 'globalMapModel/setViewState',
            //     payload: viewState,
            // });
        });


        this.getIconLayer(mapObj)
        // mapObj.addLayer({
        //   type: 'line',
        //   "source": "beijing",
        //   "source-layer": "china_boundary_province_L_2",
        //   id: 'china_L_city_line',
        //   "minzoom": 0,
        //   "maxzoom": 24,
        //   paint: {
        //     'line-color': '#1a2131',
        //     "line-width": 2
        //   },
        //   layout: {
        //     'line-cap': 'round',
        //     'line-join': 'round'
        //   }
        // });
        // mapObj.addLayer({
        //   type: 'line',
        //   "source": "beijing",
        //   "source-layer": "china_boundary_province_L",
        //   id: 'china_L_city_lineTwo',
        //   "minzoom": 0,
        //   "maxzoom": 24,
        //   paint: {
        //     'line-color': '#1a2131',
        //     "line-width": 2
        //   },
        //   layout: {
        //     'line-cap': 'round',
        //     'line-join': 'round'
        //   }
        // });
        // mapObj.addLayer({
        //   type: 'line',
        //   "source": "beijing",
        //   "source-layer": "china_boundary_city_L_2",
        //   id: 'china_L_city_lineThree',
        //   "minzoom": 0,
        //   "maxzoom": 24,
        //   paint: {
        //     'line-color': '#1a2131',
        //     "line-width": 2
        //   },
        //   layout: {
        //     'line-cap': 'round',
        //     'line-join': 'round'
        //   }
        // });
        // mapObj.addLayer({
        //   type: 'line',
        //   "source": "beijing",
        //   "source-layer": "china_coastline",
        //   id: 'china_L_city_lineFour',
        //   "minzoom": 0,
        //   "maxzoom": 24,
        //   paint: {
        //     'line-color': '#1a2131',
        //     "line-width": 2
        //   },
        //   layout: {
        //     'line-cap': 'round',
        //     'line-join': 'round'
        //   }
        // });



        if (initCallback) {
            initCallback(mapObj);
        }

    }
    getIconLayer (mapObj) {
        const { zhongdianqiyePoint } = this.props
        // mapObj.flyTo({ zoom: 18, center: [115.09275817871094, 30.21311378479004], speed: 2.4 },);
        let geoJson = {
            type: 'FeatureCollection',
            features: [
                {
                    "type": "Feature",
                    "properties": '',
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.834538, 30.068635]
                    }
                }
            ],
        };
    }
    //滑动
    _onViewStateChange ({ viewState }) {
        // 地图限制层级
        if (viewState.zoom <= 9.706531408747953 && viewState.zoom >= 8.462354657997096) {
            let { activeLayerObj } = this.props.globalMapModel;
            console.log(activeLayerObj, 'activeLayerObjactiveLayerObjactiveLayerObj');
            let { x, y, object, lngLat } = activeLayerObj;
            if (x || y || object) {
                let viewObj = new WebMercatorViewport(viewState);
                console.log(viewObj, 'viewObjviewObjviewObjviewObj');
                let arr = viewObj.project(lngLat);
                console.log(arr, 'viewObjviewObjviewObjviewObj');
                activeLayerObj = { ...activeLayerObj, x: arr[0], y: arr[1] };
                this.props.dispatch({
                    type: 'globalMapModel/setActiveLayerObj',
                    payload: activeLayerObj,
                });
            }
            console.log(viewState, 'dsadafwewq');
            // 取消拖拽
            this.props.dispatch({
                type: 'globalMapModel/setViewState',
                payload: viewState,
            });
        }


    }
    //deckgl底图的滑动提示
    _onHover = data => {
        let { object, layer } = data;
        let obj = {
            lngLat: [0, 0],
            x: null,
            y: null,
            object: null,
            layer: layer
        };
        if (object) {
            let { viewState } = this.props.globalMapModel;
            let viewObj = new WebMercatorViewport(viewState);
            let { geometry } = object;
            let { coordinates } = geometry;
            let { type } = geometry;
            if (type === 'Point' || type === 'MultiPoint') {
                let arr = viewObj.project(coordinates);
                obj = {
                    lngLat: coordinates,
                    x: arr[0],
                    y: arr[1],
                    object: object,
                    layer: layer
                };
                console.log(obj, 'objobjdsadaobj', object);
                // this.props.dispatch({ type: 'globalMapModel/setActiveLayerObj', payload: obj });
            } else if (
                type === 'LineString' ||
                type === 'MultiLineString' ||
                type === 'Polygon' ||
                type === 'MultiPolygon'
            ) {
                // let { x, y, lngLat } = data;
                // console.log(obj, 'obj2')
                // obj = {
                //     lngLat: lngLat,
                //     x: x,
                //     y: y,
                //     object: object
                // }
            }
        }
    };
    //点击调用的函Click数
    //滑动点击提示框
    onClickFun = data => {
        console.log(data, 'dsadasfwewqedas');
        console.log(data, 'dsadawewqdacza');
        let { object, layer } = data;
        let obj = {
            lngLat: [0, 0],
            x: null,
            y: null,
            object: null,
            layer: layer
        };
        if (object) {
            let { viewState } = this.props.globalMapModel;
            let viewObj = new WebMercatorViewport(viewState);
            let { geometry } = object;
            let { coordinates } = geometry;
            let { type } = geometry;
            if (type === 'Point' || type === 'MultiPoint') {
                let arr = viewObj.project(coordinates);
                obj = {
                    lngLat: coordinates,
                    x: arr[0],
                    y: arr[1],
                    object: object,
                    layer: layer
                };
                console.log(obj, 'objobjdsadaobj', object);
                this.props.dispatch({ type: 'globalMapModel/setActiveLayerObj', payload: obj });
            } else if (
                type === 'LineString' ||
                type === 'MultiLineString' ||
                type === 'Polygon' ||
                type === 'MultiPolygon'
            ) {
                // let { x, y, lngLat } = data;
                // console.log(obj, 'obj2')
                // obj = {
                //     lngLat: lngLat,
                //     x: x,
                //     y: y,
                //     object: object
                // }
            }
        } else {
            // 具体做什么的我也不太清楚 但是有弹窗是点击 弹窗回移动
            // this.props.dispatch({ type: 'globalMapModel/setactiveLayerArr', payload: [] });
            // this.props.dispatch({ type: 'globalMapModel/setActiveLayerObj', payload: obj });
        }
    };
    northCallBack = viewState => {
        this.props.dispatch({
            type: 'globalMapModel/setViewState',
            payload: viewState,
        });
    };
    render () {
        const { viewState, deckLayerArr, trackingLayerArr, activeLayerArr, newViewState, newLayerThreeArr, parameters } = this.props.globalMapModel;
        let { mapStyle, initialViewState, northStyle, views } = this.props;
        return (
            <React.Fragment>
                <DeckGL
                    initialViewState={INITIAL_VIEW_STATE}
                    layers={[...deckLayerArr, ...newLayerThreeArr, ...trackingLayerArr, ...activeLayerArr]}
                    controller={true}
                    id={''}
                    viewState={{ ...viewState }}
                    onViewStateChange={this._onViewStateChange.bind(this)}
                    onHover={this._onHover}
                    onClick={this.onClickFun}
                    parameters={parameters ? {
                        blendFunc: [GL.SRC_ALPHA, GL.ONE, GL.ONE_MINUS_DST_ALPHA, GL.ONE],
                        blendEquation: GL.FUNC_ADD
                    } : {
                        blendFunc: [GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA],
                        blendEquation: [GL.FUNC_ADD, GL.FUNC_ADD]
                    }}

                >
                    <StaticMap
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        mapStyle={mapStyle ? mapStyle : MAP_STYLE}
                        ref={this.initMapCallback}
                        preventStyleDiffing
                        srid={4326}
                    />
                </DeckGL>
                {/* {northStyle ? (
          <div className={styles.north}>
            <North viewState={viewState} callback={this.northCallBack} />
          </div>
        ):null} */}
            </React.Fragment>
        );
    }
}
export default MapModel;
