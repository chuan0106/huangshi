import { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import mapboxgl from 'mapbox-gl';
import { Deck } from '@deck.gl/core';
import { MAPBOX_STYLE, initialViewState, mapLayerName, FlyToCamera, layerType } from './mapConst';

//弹窗
import Popup from './Pop/MapBoxPop/Popup';
//弹窗
import PopView from './Pop';
//工具
import NavgationControl from './MapControl';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import BaseLayer from './lib/spaceojo-gl-base-layers';
import MapLayers from './lib/spaceojo-gl-layers';
import { getMapboxLayerProps } from './transform-props';
import { flyToCamera, flightType3, flightType1, flightType0 } from './mapCamera';
import { createMapboxDraw, createArea, updateArea, deleteArea, selectMapDelete } from './mapTools';
import { mapEvent } from './mapInteractiveEvent';

// import mapbg from '@/assets/map/mapbg.png';
// import zibo_county_R from '@/../public/json/pukou/zibo_county_R.json';

class DMap extends PureComponent
{
    /**
     * 属性说明
     * @property {object} mapbox
     * @property {object} viewState
     * @property {array} mapboxLayers
     * @property {array} deckglLayers
     */

    state = {
        mapbox: null,
        iviewState: {
            zoom: 15.878895443604712,
            pitch: 75,
            longitude: 118.637475,
            latitude: 32.0637,
            minZoom: 1,
            maxZoom: 18,
        },
        mapboxLayers: [],
        deckglLayers: [],
        dlayers: [],
        timers: [],
        animate: true,
        info: null,
        tkContent: null,
        zoom: null,
        popShow: 1,
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

    constructor(props)
    {
        super(props);
        this.time = null;
        this.timers = [];
        this.allLayers = []; // 全部图层

        this.setStateP = function (state)
        {
            return new Promise(resolve => this.setState(state, resolve));
        };

        this.popup = new Popup();

        props?.dref && props.dref(this);

        this.timestamp = new Date().getTime();

        // 导览
        this.flyToCamera = flyToCamera;
        this.flightType0 = flightType0;
        this.flightType1 = flightType1;
        this.flightType3 = flightType3;

        // 框选工具
        this.createMapboxDraw = createMapboxDraw;
        this.createArea = createArea;
        this.updateArea = updateArea;
        this.deleteArea = deleteArea;
        this.selectMapDelete = selectMapDelete;

        // 交互事件
        this.mapEvent = mapEvent;
    }

    // 图层信息
    get layersInfo ()
    {
        if (this.mapLayers?.layers)
        {
            return Object.values(this.mapLayers.layers).map(item => item.style);
        }
        return [];
    }

    setMapStyle (spaceojoMapStyle, callBack)
    {
        console.log(spaceojoMapStyle, 'spaceojoMapStyle');
        if (!spaceojoMapStyle) return;
        // 获取底图样式文件并初始化
        fetch('./json/spaceojoStyle.json?' + new Date().getTime())
            .then(res => res.json())
            .then(json =>
            {
                console.log(json, '--jsonjsonjsonjsonjson--');
                const baseLayer = new BaseLayer(this.map, { isFly: false });
                baseLayer.init(json, () =>
                {
                    this.baseLayersReady = true;
                    console.log(this.baseLayersReady, 'init this.baseLayersReady');
                    if (this.baseLayersCallBack)
                    {
                        this.baseLayersCallBack();
                        this.baseLayersCallBack = null;
                    } else
                    {
                        this.addLayer(this.allLayers.length > 0 ? this.allLayers : this.props.layers);
                    }

                    baseLayer.logo({
                        url: './logo/logo.jpg',
                        width: 94,
                        height: 23,
                        position: 'right',
                    });

                    callBack && callBack(this.map);
                });

                // this.map.loadImage(mapbg, (error, image) => {
                //   if (error) throw error;
                //   this.map.addImage('mapbg', image);
                //   this.map.setPaintProperty('background', 'background-pattern', 'mapbg');
                //   this.map.addSource('zibo_county_R', {
                //     type: 'geojson',
                //     data: zibo_county_R,
                //   });
                //   this.map.addLayer({
                //     id: 'state-borders-bg',
                //     type: 'line',
                //     source: 'zibo_county_R',
                //     layout: {},
                //     paint: {
                //       'line-color': 'rgba(98,123,193,0.7)',
                //       'line-width': 2,
                //     },
                //   });
                // });
            })
            .catch(error =>
            {
                console.error(error);
            });
    }

    componentDidMount ()
    {
        const {
            iviewState,
            spaceojoMapStyle,
            interactiveData,
            mapController,
            getMapBox,
            onViewStateChange,
            onClick,
            onHover,
            defineClick,
        } = this.props;

        this.setStateP({
            iviewState: iviewState,
            interactiveData: interactiveData,
            mapController: mapController,
        });

        // mapbox token
        mapboxgl.accessToken =
            'pk.eyJ1Ijoid2VpemhpbWluMjAwNyIsImEiOiJjajkzeHRhcWkyaWtsMzNucmZkZHBsbWtsIn0.Roa71zaPUY1M00OQ0X1WzA';

        this.map = new mapboxgl.Map({
            container: this.timestamp.toString(),
            // style: './json/initStyle.json?' + new Date().getTime(),
            center: [iviewState?.longitude, iviewState?.latitude],
            // antialias: true,
            pitch: 60,
            maxZoom: 17.7,
            minZoom: 8,
            zoom: iviewState?.zoom,
            // trackResize: false,
        });

        getMapBox && getMapBox(this.map);

        this.setState({
            mapbox: this.map,
        });

        this.deck = new Deck({
            gl: this.map.painter.context.gl,
            initialViewState: initialViewState,
            // 动态视角
            viewState: iviewState,
            style: { position: 'relative', zIndex: 0, height: '100%', width: '100%' },
            // onHover: debounce(this.layerHover.bind(this, 'hover'), 100),
            onHover: info =>
            {
                onHover && onHover(info);
                // if (info.layer && info.picked) {
                //   if (this.mapLayerHoverPicked) return;
                //   if (this.mapLayerHoverTimer) {
                //     clearTimeout(this.mapLayerHoverTimer);
                //   }
                //   this.mapLayerHoverTimer = setTimeout(() => {
                //     onHover && onHover(info);
                //     this.mapLayerHoverTimer = null;
                //   }, 300);
                // }
                // this.mapLayerHoverPicked = info.picked;
            },
            onClick: (info, event) =>
            {
                this.layerClick('click', info, event);
                onClick && onClick(info, event);
                if (defineClick)
                {
                    defineClick(a, b, 'deck');
                }
            },
        });

        // 重写 deck 的 setProps 方法，创建、更新图层时保留底图的图层

        const setProps = this.deck.setProps.bind(this.deck);

        this.deck.setProps = p =>
        {
            const deckLayers = this.map.deckLayers || [];
            const props = { ...p };
            if (props.layers)
            {
                props.layers = [...deckLayers, ...props.layers];
            }
            setProps(props);
        };

        this.map.deck = this.deck;

        // this.map.on('load', () => {
        //   this.setMapStyle(spaceojoMapStyle, getMapBox);
        // });

        this.setMapStyle(spaceojoMapStyle, getMapBox);

        this.map.on('move', e =>
        {
            onViewStateChange && onViewStateChange(viewState);
            let viewState = {
                longitude: this.map.getCenter().lng,
                latitude: this.map.getCenter().lat,
                pitch: this.map.getPitch(),
                bearing: this.map.getBearing(),
                zoom: this.map.getZoom(),
            };
            localStorage.setItem('viewport', JSON.stringify(viewState));
            this.cameraSc(viewState);
            if (this.props?.mapMoveChange)
            {
                mapMoveChange(this.map.__deck.viewState);
            }
        });

        this.map.on('moveend', e =>
        {
            let viewState = {
                longitude: this.map.getCenter().lng,
                latitude: this.map.getCenter().lat,
                pitch: this.map.getPitch(),
                bearing: this.map.getBearing(),
                zoom: this.map.getZoom(),
            };
            this.deck.setProps({
                viewState: viewState,
            });
        });

        this.mapLayers = new MapLayers({
            map: this.map,
            deck: this.deck,
            excute: () => { },
        });

        this.map.on('zoom', (e, e1) =>
        {
            Object.values(this.mapLayers.layers).forEach(layer =>
            {
                layer.setVisibleByZoom && layer.setVisibleByZoom(this.map.getZoom());
            });
        });

        // 当容器大小发生变化时，重新设置地图大小
        const resizeObserver = new ResizeObserver(entries =>
        {
            if (this.resizeTimer)
            {
                clearTimeout(this.resizeTimer);
            }
            this.resizeTimer = setTimeout(() =>
            {
                this.map.resize();
            }, 300);
        });
        resizeObserver.observe(document.getElementById(this.timestamp.toString()));
    }

    componentWillUnmount ()
    {
        const { layers } = this.props;

        // 用于退出删除图层
        this.removeAllLayer(layers);

        this.setStateP({
            mapbox: null,
            iviewState: initialViewState,
            mapboxLayers: [],
            deckglLayers: [],
            dlayers: [],
            timers: [],
            animate: true,
            info: null,
            tkContent: null,
            zoom: null,
            popShow: 1,
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

        if (this.popup)
        {
            this.popup.removeMapLayer();
        }
    }

    /**
     * 添加图层
     * 之前热力是mapbox的图层，新版使用SDK的热力是deckgl的图层
     */
    addLayer = layers =>
    {
        // 过滤掉楼面
        layers = layers.filter(item => 'polygonlayer@11036' !== item.id);
        console.log(layers, '--layers--');
        // 删除数据（dataid）相同的图层
        this.removeAllLayer(layers);

        this.allLayers.push(...layers);

        const changePropsLayers = [
            mapLayerName.TEXT_LABEL,
            mapLayerName.HEARTBEATLAYER,
            mapLayerName.FLYINGLINELAYER,
            mapLayerName.SIZESCATTERLAYER,
            mapLayerName.WARNIMAGELAYER,
            mapLayerName.HEAT_LAYER,
        ];

        for (const layer of layers)
        {
            let layerProps = layer;
            if (changePropsLayers.includes(layerProps.mapType))
            {
                layerProps = getMapboxLayerProps(layer);
            }
            this.mapLayers.addLayer(
                layerType[layerProps.mapType],
                layerProps.id,
                layerProps,
                layerProps.data,
            );
        }

        // 用于暂时解决项目中的问题
        if (this.allLayers.length > 1)
        {
            const icons = this.allLayers.filter((item, index) => item.mapType === 'IconLayer');
            if (icons.length > 1)
            {
                icons.forEach(icon =>
                {
                    // 重新添加icon图层, 保证图层在最上面
                    this.mapLayers.removeLayer(icon.id);
                    icon.height = 600;
                    icon.parameters = {
                        depthTest: false,
                    };
                    this.mapLayers.addLayer(layerType[icon.mapType], icon.id, icon, icon.data);
                });
            }
        }
    };

    UNSAFE_componentWillReceiveProps (nextProps)
    {
        const {
            layers,
            cameraList,
            flyState,
            spaceojoMapStyle,
            deleteMapLayers,
            interactiveData,
            mapController,
            iviewState,
        } = this.props;

        const { mapbox } = this.state;

        // 控制底图的缩放 平移 拖拽
        if (mapController !== nextProps?.mapController)
        {
            if (nextProps?.mapController)
            {
                this.setState({
                    mapController: nextProps?.mapController,
                });
            }
            //控制相机视角的方法
            let { cameraLock, cameraLockType } = nextProps?.mapController;

            if (!cameraLock)
            {
                this.map.dragRotate.enable(); //禁止拖拽旋转
                this.map.dragPan.enable(); //开启拖拽平移
                this.map.scrollZoom.enable(); //禁止滚轮缩放
            }
            if (this?.map && cameraLock)
            {
                if (cameraLock)
                {
                    this.map.dragRotate.disable(); //禁止拖拽旋转
                    this.map.dragPan.disable(); //开启拖拽平移
                    this.map.scrollZoom.disable(); //禁止滚轮缩放
                } else if (cameraLockType === 1)
                {
                    this.map.dragRotate.disable(); //禁止拖拽旋转
                    this.map.dragPan.disable(); //开启拖拽平移
                    this.map.scrollZoom.disable(); //禁止滚轮缩放
                } else if (cameraLockType === 2)
                {
                    this.map.dragRotate.enable(); //禁止拖拽旋转
                    this.map.dragPan.enable(); //开启拖拽平移
                    this.map.scrollZoom.disable(); //禁止滚轮缩放
                } else if (cameraLockType === 3)
                {
                    this.map.dragRotate.disable(); //禁止拖拽旋转
                    this.map.dragPan.enable(); //开启拖拽平移
                    this.map.scrollZoom.enable(); //禁止滚轮缩放
                }
            }
        }

        // 改变底图样式
        if (spaceojoMapStyle !== nextProps?.spaceojoMapStyle)
        {
            if (mapbox)
            {
                this.setMapStyle(nextProps?.spaceojoMapStyle);
            }
        }

        // 飞行动画
        if (flyState !== nextProps?.flyState)
        {
            this.setState({
                animate: nextProps?.flyState,
            });
        }

        if (cameraList !== nextProps?.cameraList)
        {
            this.flyToCamera(nextProps?.cameraList);
        }

        // 更新视口状态
        if (iviewState !== nextProps.iviewState)
        {
            if (nextProps.iviewState && nextProps.iviewState?.longitude)
            {
                this.setStateP({
                    iviewState: { ...nextProps.iviewState, ...FlyToCamera },
                    defaultCamera: nextProps.iviewState,
                }).then(() =>
                {
                    this.deck.setProps({
                        viewState: this.state.iviewState,
                    });
                    if (this?.map)
                    {
                        this.map.flyTo({
                            center: [this.state.iviewState?.longitude, this.state.iviewState?.latitude],
                            zoom: this.state.iviewState?.zoom,
                            bearing: this.state.iviewState?.bearing,
                            pitch: this.state.iviewState?.pitch,
                            speed: 2,
                            curve: 1,
                            essential: true,
                            easing (t)
                            {
                                return t;
                            },
                        });
                    }
                });
            }
        }

        // 删除图层
        if (deleteMapLayers !== nextProps?.deleteMapLayers)
        {
            if (nextProps?.deleteMapLayers?.length > 0)
            {
                this.removeAllLayer(nextProps?.deleteMapLayers, 'id');
            }
        }

        // 添加图层
        if (layers !== nextProps?.layers)
        {
            console.log(layers, this.baseLayersReady, 'this.baseLayersReady');
            if (this.baseLayersReady)
            {
                this.addLayer(nextProps?.layers);
            } else
            {
                this.baseLayersCallBack = () =>
                {
                    this.addLayer(nextProps?.layers);
                };
            }
        }

        // 交互事件
        if (interactiveData !== nextProps?.interactiveData)
        {
            this.setState({
                interactiveData: nextProps?.interactiveData,
            });

            this.mapEvent(this.state.eventInfo, nextProps?.interactiveData, this.state.eventState, 2);
        }
    }

    /**
     * 提供给外部使用的方法
     * 删除 baseLayer 以外的 sdk 中缓存的图层
     * baseLayer 是外部传递进来的图层数组或对象
     */
    clearMapAllLayer ()
    {
        const { baseLayer } = this.props;
        const currentLayers = Object.keys(this.mapLayers.layers);

        this.setState({
            popShow: false,
        });

        if (this.popup)
        {
            this.popup.removeMapLayer();
        }

        if (Array.isArray(baseLayer))
        {
            currentLayers.forEach(key =>
            {
                if (baseLayer.find(item => item.layerId !== key && item.id !== key))
                {
                    this.mapLayers.removeLayer(key);
                    this.allLayers = this.allLayers.filter(item => item.id !== key);
                }
            });
        } else
        {
            currentLayers.forEach(key =>
            {
                if (baseLayer?.layerId !== key && baseLayer?.id !== key)
                {
                    this.mapLayers.removeLayer(key);
                    this.allLayers = this.allLayers.filter(item => item.id !== key);
                }
            });
        }
    }

    /**
     * 删除通过属性传递过来的图层
     * 删除条件是等于 dataid
     * @param {*} allMaplayer
     */
    removeAllLayer = (allMaplayer, key = 'dataid') =>
    {
        const currentLayers = Object.values(this.mapLayers.layers);

        // 删除数据（dataid）相同的图层
        allMaplayer.forEach(item =>
        {
            const dataid = item[key];
            this.allLayers = this.allLayers.filter(item => item.dataid !== dataid);
            const currentLayer = currentLayers.find(item => item.style.dataid === dataid);
            if (currentLayer)
            {
                this.mapLayers.removeLayer(currentLayer.id);
            }
        });
    };

    onViewStateChange = ({ viewState }) =>
    {
        localStorage.setItem('viewport', JSON.stringify(viewState));
        this.cameraSc(viewState);
    };

    cameraSc = viewState =>
    {
        if (!viewState)
        {
            return false;
        }

        this.setStateP({
            iviewState: viewState,
        });

        this.deck.setProps({
            viewState: viewState,
        });
    };

    layerClick = (value, info, event) =>
    {
        const { mapbox, interactiveData, selectLayerDataId } = this.state;

        this.mapEvent(info, interactiveData, value, 1);
    };

    layerHover = (value, info, event) =>
    {
        const { mapbox, interactiveData } = this.state;

        this.mapEvent(info, interactiveData, value, 2);
    };

    clearCommon = () =>
    {
        if (this.state.popShow)
        {
            this.setState({
                popShow: false,
            });
        }
        if (this.popup)
        {
            this.popup.removeMapLayer();
        }
    };

    //交互事件
    onInteractionStateChange = interactionState =>
    {
        if (
            interactionState?.isDragging ||
            interactionState?.isRotating ||
            interactionState?.isZooming
        )
        {
            this.setState({
                animate: false,
            });
        }
    };

    getMapController = () =>
    {
        const { mapController } = this.state;
        if (!mapController)
        {
            return false;
        }
        //控制相机视角的方法
        let { cameraLock, cameraLockType } = mapController;
        if (!cameraLock)
        {
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
        if (cameraLockType === 1)
        {
        }
        if (cameraLockType === 2)
        {
            newMapController.dragRotate = true;
            newMapController.dragPan = true;
            newMapController.touchRotate = true;
        }
        if (cameraLockType === 3)
        {
            newMapController.dragPan = true;
            newMapController.scrollZoom = true;
            newMapController.doubleClickZoom = true;
            newMapController.touchRotate = true;
        }
        return {
            ...newMapController,
        };
    };

    viewStateHandle = viewState =>
    {
        if (viewState?.longitude)
        {
            if (this.props.setIviewStateProps)
            {
                this.props.setIviewStateProps(viewState);
            } else
            {
                this.setState({
                    iviewState: viewState,
                });
            }
        }
    };

    render ()
    {
        const { iviewState, mapController, defaultCamera } = this.state;

        return (
            <>
                <div
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                    id={this.timestamp.toString()}
                />
                <PopView
                    popType={this.state.popType}
                    boxType={this.state.boxType}
                    show={this.state.popShow}
                    info={this.state.info}
                    content={this.state.tkContent}
                    contentStyle={this.state.popContentStyle}
                    allFeild={this.state.allFeild}
                    closePop={() =>
                    {
                        this.setState({
                            popShow: false,
                        });
                    }}
                />
                {mapController?.mapdirectionVisible && (
                    <NavgationControl
                        viewState={{ ...mapController, ...iviewState }}
                        viewStateHandle={this.viewStateHandle}
                        viewCamera={{ ...defaultCamera, ...mapController }}
                    />
                )}
            </>
        );
    }
}
export default DMap;
