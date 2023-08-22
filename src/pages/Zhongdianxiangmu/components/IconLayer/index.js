import { useState, useEffect, Fragment, memo } from 'react';
import styles from './styles.less'
import { IconLayer } from 'deck.gl';
import { connect } from 'dva';
import params from './prmasr.json'
import icon from '@/assets/huangshi/zhongdianxiangmu/Ellipseg.png';
import { shiGeoJson } from '@/utils/publickPage/geoJson';
import { upLayerData, flyTo } from '../../../../utils/commonFun';
import activePoint from '../../../../assets/huangshi/zhongdianqiye/point1.png';

const dispatch = window.g_app._store.dispatch;
let timeActive = null;
const Index = ({ globalMapModel, menuName, mapHandler, projectName }) => {
    const [leary, setLeary] = useState(null)

    // 检测 projectName 改变 展示高亮点位
    useEffect(() => {
        if (projectName) {
            const newData = {
                ...params, where: {
                    "mode": 1,
                    "conditions": [
                        {
                            "unit": null,
                            "des": null,
                            "name": "f0003",
                            "index": 3,
                            "alias": "项目名称",
                            "anotherName": null,
                            "key": "f0003",
                            "operator": 14,
                            "value": projectName
                        }
                    ]
                }
            }
            // 筛选数据
            dispatch({
                type: 'globalMapModel/getDoCloudEffects',
                payload: {
                    params: newData,
                    callback: projectNameLayer
                }
            })
        }
    }, [projectName])

    useEffect(() => {
        // 在此处执行组件加载时的操作
        return () => {
            let obj = null;
            obj = {
                zoom: 9.609038392496105,
                altitude: 1.5,
                longitude: 114.92890480618951,
                latitude: 29.927812972485757,
            }
            dispatch({
                type: 'globalMapModel/setViewState',
                payload: obj
            })
            // 在此处执行组件卸载时的操作
        };
    }, []);
    useEffect(() => {
        const newData = {
            ...params, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0004",
                        "index": 4,
                        "alias": "类型",
                        "anotherName": null,
                        "key": "f0004",
                        "operator": 14,
                        "value": menuName
                    }
                ]
            }
        }
        // 筛选数据
        dispatch({
            type: 'globalMapModel/getDoCloudEffects',
            payload: {
                params: newData,
                callback: getData
            }
        })
    }, [menuName])

    useEffect(() => {
        return () => {
            clearInterval(timeActive);
        }
    }, []);
    // 每次点击 把之前的清除
    useEffect(() => {
        let { deckLayerArr, mapObj } = globalMapModel;
        let layerobj = new IconLayer({
            id: '市区-icon',
            data: shiGeoJson.features,
            opacity: 1,
            pickable: true,
            billboard: true,
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
            let { deckLayerArr } = globalMapModel;
            deckLayerArr = upLayerData(deckLayerArr, layerobj);
            dispatch({ type: 'globalMapModel/setDeckLayerArr', payload: deckLayerArr });
            // dispatch({
            //     type: 'globalMapModel/setDeckLayerArr',
            //     // payload: [layerobj],
            //     payload: [layerobj]
            // })
        }
        return () => {
            // dispatch({
            //     type: 'globalMapModel/setDeckLayerArr',
            //     payload: []
            // })
        }
    }, [menuName])

    const projectNameLayer = (geoJson) => {
        if (!geoJson) {
            return;
        }
        let obj = null;
        obj = {
            zoom: 13,
            altitude: 1.5,
            pitch: 17.0076278087693,
            longitude: geoJson?.features[0]?.geometry?.coordinates[0],
            latitude: geoJson?.features[0]?.geometry?.coordinates[1],
            transitionDuration: 2000,
        };
        flyTo(obj, fly);
        if (timeActive) {
            clearInterval(timeActive)
        }
        let active = true;
        timeActive = setInterval(() => {
            let newGeojson = [];
            const z = active ? 0 : 1000
            for (let i in geoJson.features) {
                newGeojson.push({ type: 'Feature', ...geoJson.features[i], geometry: { ...geoJson.features[i].geometry, coordinates: [geoJson.features[i].geometry.coordinates[0], geoJson.features[i].geometry.coordinates[1], z] } })
            }
            geoJson.features = newGeojson;
            let layerObj = new IconLayer({
                id: `项目名称-icon`,
                data: geoJson.features || [],
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
                // sizeScale: 0.1,
                getPosition: d => {
                    return d.geometry.coordinates;
                },
                onClick: d => {
                    let { object } = d
                    let obj = null;
                    obj = {
                        zoom: 13,
                        altitude: 1.5,
                        pitch: 17.0076278087693,
                        longitude: object?.geometry?.coordinates[0],
                        latitude: object?.geometry?.coordinates[1],
                        transitionDuration: 2000,
                    };
                    flyTo(obj, fly);
                    mapHandler(object)
                }
            })
            let { deckLayerArr } = globalMapModel;
            deckLayerArr = upLayerData(deckLayerArr, layerObj);
            dispatch({ type: 'globalMapModel/setDeckLayerArr', payload: deckLayerArr });
            active = !active
        }, 500)

    }
    const fly = (viewState) => {
        dispatch({
            type: 'globalMapModel/setViewState',
            payload: viewState,
        });
    }
    const getData = (geoJson) => {
        iconInfo(geoJson)
    }
    const iconInfo = (geoJson) => {
        let layerObj = new IconLayer({
            id: '重点项目-icon',
            data: geoJson.features,
            pickable: true,
            billboard: false,
            getIcon: d => {
                return {
                    url: icon,
                    width: 100,
                    height: 100,
                    x: 50,
                    y: 50,
                }
            },
            sizeMinPixels: 20,
            sizeMaxPixels: 200,
            sizeUnits: 'meters',
            getSize: d => 1,
            sizeScale: 200,
            getPosition: d => {
                // console.log(d);
                return d.geometry.coordinates;
            },
            onClick: d => {
                let { object } = d
                addActiveLaye(object)
                let obj = null;
                obj = {
                    zoom: 13,
                    altitude: 1.5,
                    pitch: 17.0076278087693,
                    longitude: object?.geometry?.coordinates[0],
                    latitude: object?.geometry?.coordinates[1],
                    transitionDuration: 2000,
                };
                flyTo(obj, fly);
                mapHandler(object)
            }
        })
        let { deckLayerArr } = globalMapModel;
        deckLayerArr = upLayerData(deckLayerArr, layerObj);
        dispatch({ type: 'globalMapModel/setDeckLayerArr', payload: deckLayerArr });
    }
    const addActiveLaye = (geoJson) => {
        if (timeActive) {
            clearInterval(timeActive)
        }
        let active = true;
        timeActive = setInterval(() => {
            const z = active ? 0 : 1000
            let data = { ...geoJson, geometry: { ...geoJson.geometry, coordinates: [geoJson.geometry?.coordinates[0], geoJson.geometry?.coordinates[1], z] } }
            let layerObj = new IconLayer({
                id: `项目名称-icon`,
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
                // sizeScale: 0.1,
                getPosition: d => {
                    // console.log(d);
                    return d.geometry.coordinates;
                },
                onClick: d => {
                    let { object } = d
                    mapHandler(object)
                }
            })
            let { deckLayerArr } = globalMapModel;
            deckLayerArr = upLayerData(deckLayerArr, layerObj);
            dispatch({ type: 'globalMapModel/setDeckLayerArr', payload: deckLayerArr });
            active = !active
        }, 500);
    }
    // 更新点位
    useEffect(() => {
        // let { deckLayerArr, mapObj } = globalMapModel;
        // console.log(deckLayerArr, deckLayerArr.filter(item => !item.id.includes('项目名称')), 'deckLayerArrdeckLayerArr');
        // if (mapObj && leary !== null) {
        //     dispatch({
        //         type: 'globalMapModel/setDeckLayerArr',
        //         // 点击某个项目高亮 干掉所有高亮的 留下我自己
        //         payload: [...deckLayerArr.filter(item => !item.id.includes('项目名称')), leary]
        //     })
        // }
    }, [leary])
    return (
        <Fragment>  </Fragment>
    );
};
function mapStateToProps ({ globalMapModel }) {
    return {
        globalMapModel: globalMapModel
    }
}

export default connect(mapStateToProps)(memo(Index));