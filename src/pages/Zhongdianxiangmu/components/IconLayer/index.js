import { useState, useEffect, Fragment, memo } from 'react';
import styles from './styles.less'
import { IconLayer } from 'deck.gl';
import { connect } from 'dva';
import params from './prmasr.json'
import icon from '@/assets/huangshi/zhongdianxiangmu/icon.png'
import { shiGeoJson } from '@/utils/publickPage/geoJson'
const dispatch = window.g_app._store.dispatch;
const Index = ({ globalMapModel, menuName, mapHandler, projectName }) =>
{
    const [leary, setLeary] = useState(null)

    // 检测 projectName 改变 展示高亮点位
    useEffect(() =>
    {
        if (projectName)
        {
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


    useEffect(() =>
    {
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

    // 每次点击 把之前的清除
    useEffect(() =>
    {
        let { deckLayerArr, mapObj } = globalMapModel;
        let layerobj = new IconLayer({
            id: '市区-icon',
            data: shiGeoJson.features,
            pickable: true,
            billboard: true,
            getIcon: d =>
            {
                let obj = {
                    url: d.geometry.img,
                    width: d.geometry.width,
                    height: d.geometry.height,
                    anchorX: (d.geometry.name === '开发区·铁山区'
                        ? d.geometry.width * 0.9
                        : d.geometry.width / 2),
                    anchorY: d.geometry.height,
                };
                return obj;
            },
            sizeMinPixels: 80,
            sizeMaxPixels: 150,
            getSize: d => 1,
            sizeUnits: 'meters',
            getPosition: d =>
            {
                return d.geometry.coordinates
            },

        })
        if (mapObj)
        {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                // payload: [layerobj],
                payload: [layerobj]
            })
        }
        return () =>
        {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: []
            })
        }
    }, [menuName])

    const projectNameLayer = (geoJson) =>
    {
        let layerObj = new IconLayer({
            id: `项目名称：${projectName}-icon`,
            data: geoJson.features,
            pickable: true,
            getIcon: d =>
            {
                return {
                    // url: 'https://www.dataojocloud.com/dataeye/v1/data/image/get?imageid=62eb5d7fb5b1ce25da65718d',
                    // width: 95,
                    // height: 119,
                    url: icon,
                    width: 295,
                    height: 319,
                }
            },
            sizeMinPixels: 55,
            sizeMaxPixels: 300,
            sizeUnits: 'meters',
            getSize: d => 300,
            sizeScale: 0.1,
            getColor: [255, 255, 255, 10000], // 所有图标都是红色
            getPosition: d =>
            {
                console.log(d);
                return d.geometry.coordinates;
            },
            onClick: d =>
            {
                let { object } = d

                mapHandler(object)
            }
        })
        setLeary(layerObj)
    }
    const getData = (geoJson) =>
    {
        iconInfo(geoJson)
    }
    const iconInfo = (geoJson) =>
    {
        let layerObj = new IconLayer({
            id: '重点项目-icon',
            data: geoJson.features,
            pickable: true,
            getIcon: d =>
            {
                return {
                    url: icon,
                    width: 95,
                    height: 119,
                }
            },
            sizeMinPixels: 40,
            sizeMaxPixels: 300,
            sizeUnits: 'meters',
            getSize: d => 300,
            sizeScale: 0.1,
            getPosition: d =>
            {
                console.log(d);
                return d.geometry.coordinates;
            },
            onClick: d =>
            {
                let { object } = d

                mapHandler(object)
            }
        })
        setLeary(layerObj)
    }
    // 更新点位
    useEffect(() =>
    {
        let { deckLayerArr, mapObj } = globalMapModel;

        console.log(deckLayerArr, 'deckLayerArrdeckLayerArr');
        if (mapObj && leary !== null)
        {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                // 点击某个项目高亮 干掉所有高亮的 留下我自己
                payload: [...deckLayerArr.filter(item => !item.id.includes('项目名称')), leary]
            })
        }
    }, [leary])
    return (
        <Fragment>  </Fragment>
    );
};
function mapStateToProps ({ globalMapModel })
{
    return {
        globalMapModel: globalMapModel
    }
}

export default connect(mapStateToProps)(memo(Index));