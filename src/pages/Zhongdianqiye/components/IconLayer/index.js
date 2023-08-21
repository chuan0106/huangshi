/*
 * @version: V1.0.0
 * @Author: dengtao
 * @Date: 2023-03-03 20:02:58
 * @LastEditors: yuchang
 * @LastEditTime: 2023-07-18 15:54:20
 * @FilePath: \cloud\src\pages\Home\components\IconLayer\index.js
 * @Descripttion: 
 */
import React from "react";
import styles from './styles.less';
import { IconLayer } from 'deck.gl';
import { connect } from 'dva';
import { upLayerData, flyTo } from '@/utils/commonFun/index.js'
import point from '../../../../assets/huangshi/zhongdianqiye/Ellipsey.png';
import activePoint from '../../../../assets/huangshi/zhongdianqiye/point1.png';

import huangshi from '@/assets/huangshi/common/hubei/huangshi.png'  // 黄石

function mapStateToProps ({ globalModel, globalMapModel, zhongdianqiyeModal }) {
    return {
        globalModel: globalModel,
        globalMapModel: globalMapModel,
        zhongdianqiyeModal: zhongdianqiyeModal,
    };
}
@connect(mapStateToProps)
class NewIconLayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comInfo: props.compData,
            pointData: [],
        }
    }

    //渲染之前
    componentWillMount () {

    }
    //渲染之后
    componentDidMount () {
        // let geoJson = {
        //     type: 'FeatureCollection',
        //     features: [
        //         {
        //             "type": "Feature",
        //             "properties": '',
        //             "geometry": {
        //                 "type": "Point",
        //                 "coordinates": [114.834538, 30.068635]
        //             }
        //         }
        //     ],
        // };
        // this.setLayer(geoJson)

        this.props.dispatch({
            type: 'zhongdianqiyeModal/getPointData',
            payload: {
                params: {
                    catalog: 'ce3382a0ae80407294b507a52a897cf4',
                    features: '07c1ddd3c10146e6b0d56edb127b00f5',
                    max_feature: 10000,
                    search_type: 2,
                },
                callback: this.getdata.bind(this)
            }
        });
        this.iconInfo(this.state.comInfo)

    }
    getdata = (data) => {
        this.setState({
            pointData: data
        })
        this.setLayer(data)
    }
    //卸载
    componentWillUnmount () {
        clearInterval(this.timeActive)
        this.props.dispatch({
            type: 'globalMapModel/setDeckLayerArr',
            payload: []
        })
        let obj = null;
        obj = {
            zoom: 9.609038392496105,
            altitude: 1.5,
            longitude: 114.92890480618951,
            latitude: 29.927812972485757,
        }
        this.props.dispatch({
            type: 'globalMapModel/setViewState',
            payload: obj
        })
    }
    componentDidUpdate (prevProps) {
        const { comInfo } = this.state;
        if (comInfo !== prevProps.compData) {
            this.setState({
                comInfo: prevProps.compData,
            });
            const { pointData } = this.state;
            // let pointJson = {
            //     type: 'FeatureCollection',
            //     features: []
            // }
            let ActivePoint = {
                type: 'FeatureCollection',
                features: []
            }
            for (let i in pointData.features) {
                if (pointData.features[i]?.properties?.f0014 !== prevProps.compData.features[0]?.properties?.f0001) {
                    // pointJson.features.push(pointData.features[i])
                } else {
                    ActivePoint.features.push(pointData.features[i])
                }
            }
            this.iconInfo(ActivePoint)
            // this.setLayer(pointJson)
        }
    }
    iconInfo = (geoJson) => {
        if (!geoJson) {
            return;
        }
        if (this.timeActive) {
            clearInterval(this.timeActive)
        }
        let active = true;
        this.timeActive = setInterval(() => {
            let newGeojson = [];
            const z = active ? 0 : 1000
            for (let i in geoJson.features) {
                newGeojson.push({ type: 'Feature', ...geoJson.features[i], geometry: { ...geoJson.features[i].geometry, coordinates: [geoJson.features[i].geometry.coordinates[0], geoJson.features[i].geometry.coordinates[1], z] } })
            }
            geoJson.features = newGeojson;
            let layerObj = new IconLayer({
                id: '重点企业-icon-active',
                data: geoJson?.features || [],
                pickable: true,
                billboard: true,
                getIcon: d => {
                    return {
                        url: activePoint,
                        width: 200,
                        height: 200,
                        anchorX: 200 / 2,
                        anchorY: 200,
                    }
                },
                sizeMinPixels: 80,
                sizeMaxPixels: 150,
                sizeUnits: 'meters',
                getSize: d => 1,
                getPosition: d => {
                    return d.geometry.coordinates;
                },
                onClick: d => {
                    const { mapHandler } = this.props
                    const { object } = d
                    let obj = null;
                    obj = {
                        zoom: 13,
                        altitude: 1.5,
                        bearing: 2.838709528377591,
                        pitch: 17.0076278087693,
                        longitude: object?.geometry?.coordinates[0],
                        latitude: object?.geometry?.coordinates[1],
                        transitionDuration: 2000,
                    };
                    flyTo(obj, this.fly);
                    mapHandler(d, object.properties)
                }
            })
            let { deckLayerArr, mapObj } = this.props.globalMapModel;
            if (mapObj) {
                this.props.dispatch({
                    type: 'globalMapModel/setDeckLayerArr',
                    payload: upLayerData(deckLayerArr, layerObj)
                })
            }
            active = !active
        }, 500)
    }
    //创建企业党建点图层
    setLayer = (geojson) => {
        this.layerobj = new IconLayer({
            id: '重点企业-Icon',
            data: geojson.features,
            pickable: true,
            billboard: false,
            getIcon: d => {
                return {
                    url: point,
                    width: 100,
                    height: 100,
                }
            },
            sizeMinPixels: 20,
            sizeMaxPixels: 200,
            sizeUnits: 'meters',
            getSize: d => 1,
            // sizeScale: 1,
            getPosition: d => {
                return d.geometry.coordinates;
            },
            onClick: d => {
                const { mapHandler } = this.props
                const { object } = d;
                // const { pointData } = this.state;
                // let pointJson = {
                //     type: 'FeatureCollection',
                //     features: []
                // }
                // for (let i in pointData.features) {
                //     if (pointData.features[i] !== object) {
                //         pointJson.features.push(pointData.features[i])
                //     }
                // }
                // this.setLayer(pointJson)
                this.addActiveLaye(object)
                let obj = null;
                obj = {
                    zoom: 13,
                    altitude: 1.5,
                    bearing: 2.838709528377591,
                    pitch: 17.0076278087693,
                    longitude: object?.geometry?.coordinates[0],
                    latitude: object?.geometry?.coordinates[1],
                    transitionDuration: 2000,
                };
                flyTo(obj, this.fly);
                mapHandler(d, object.properties)
            }

        })
        let { deckLayerArr, mapObj } = this.props.globalMapModel;
        if (mapObj) {
            this.props.dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: upLayerData(deckLayerArr, this.layerobj)
            })
        }
    }
    fly = (viewState) => {
        this.props.dispatch({
            type: 'globalMapModel/setViewState',
            payload: viewState,
        });
    }
    addActiveLaye = (geoJson) => {
        if (this.timeActive) {
            clearInterval(this.timeActive)
        }
        let active = true;
        this.timeActive = setInterval(() => {
            const z = active ? 0 : 1000
            let data = { ...geoJson, geometry: { ...geoJson.geometry, coordinates: [geoJson.geometry.coordinates[0], geoJson.geometry.coordinates[1], z] } }
            let layerObj = new IconLayer({
                id: '重点企业-icon-active',
                data: [data],
                pickable: true,
                getIcon: d => {
                    return {
                        url: activePoint,
                        width: 200,
                        height: 200,
                        anchorX: 200 / 2,
                        anchorY: 200,
                    }
                },
                sizeMinPixels: 80,
                sizeMaxPixels: 150,
                sizeUnits: 'meters',
                getSize: d => 1,
                getPosition: d => {
                    return d.geometry.coordinates;
                },
                onClick: d => {
                    const { mapHandler } = this.props
                    const { object } = d
                    let obj = null;
                    obj = {
                        zoom: 13,
                        altitude: 1.5,
                        pitch: 17.0076278087693,
                        bearing: 2.838709528377591,
                        longitude: object?.geometry?.coordinates[0],
                        latitude: object?.geometry?.coordinates[1],
                        transitionDuration: 2000,
                    };
                    flyTo(obj, this.fly);
                    mapHandler(d, object.properties)
                }
            })
            let { deckLayerArr, mapObj } = this.props.globalMapModel;
            if (mapObj) {
                this.props.dispatch({
                    type: 'globalMapModel/setDeckLayerArr',
                    payload: upLayerData(deckLayerArr, layerObj)
                })
            }
            active = !active
        }, 500);

    }
    render () {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}
export default NewIconLayer