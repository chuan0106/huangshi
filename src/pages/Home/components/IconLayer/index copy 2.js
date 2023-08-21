import { useEffect, Fragment } from 'react';
import { IconLayer, } from 'deck.gl';
import { geoJson, } from '../../aaa.js'
import shiqu from '@/assets/huangshi/quanjugailan/shiqu.png'
import commonIcon from '../../../../assets/huangshi/common/commonIcon.png'
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;
const Index = ({ globalMapModel, modalHandler }) =>
{
    useEffect(() =>
    {
        // getIconData()
        // getTextIcon(geoJson)
    }, [])
    const getIconData = () =>
    {
        let layerobj = new IconLayer({
            id: '111市区-icon',
            data: geoJson.features,
            pickable: true,
            getIcon: d =>
            {
                return {
                    url: commonIcon,
                    width: 95,
                    height: 119,
                }
            },
            sizeMinPixels: 120,
            sizeMaxPixels: 300,
            getSize: d => 300,
            sizeUnits: 'meters',
            // getSize: d => Math.max(2, Math.min(d.contributions / 1000 * 25, 25)),
            // iconMapping: { width: 1208, height: 1208, mask: true },
            // sizeScale: 1,
            // getColor:[0,0,0,0],
            getPosition: d =>
            {
                return d.geometry.coordinates;
            },
            onClick: d =>
            {
                modalHandler(d?.object)
                // alert('点击了')
                // console.log(d,'okookokokokok')
            },
            // onHover: d =>
            // {
            //     let { object } = d
            //     // alert('进来了')
            //     // modalHandler(object)
            // }
        })

        let { deckLayerArr, mapObj } = globalMapModel;
        if (mapObj)
        {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: [...deckLayerArr, layerobj]
            })
        }
    }
    const getTextIcon = (data) =>
    {
        // const layer = new TextLayer({
        //     id: 'text-layer',
        //     data,
        //     pickable: true,
        //     getPosition: d => d.coordinates,
        //     getText: d => d.name,
        //     getSize: 3200,
        //     getAngle: 200,
        //     getTextAnchor: 'middle',
        //     getAlignmentBaseline: 'center'
        // });
        // let { deckLayerArr, mapObj } = globalMapModel;
        // if (mapObj)
        // {
        //     dispatch({
        //         type: 'globalMapModel/setDeckLayerArr',
        //         payload: [...deckLayerArr, layer]
        //     })
        // }
    }




    // ! 目前用的其他数据 真是数据还没接入
    useEffect(() =>
    {
        dispatch({
            type: 'globalMapModel/setDeckLayerArr',
            payload: []
        })
        dispatch({
            type: 'zhongdianxiangmuModel/getPointData',
            payload: {
                params: {
                    catalog: 'ce3382a0ae80407294b507a52a897cf4',
                    features: 'ec14732a8d3e4b7e9a9101b03d83d9ef',
                    max_feature: 10000,
                    search_type: 2,
                },
                callback: getData
            }
        })
    }, [])
    const getData = (geoJson) =>
    {
        iconInfo(geoJson)
    }
    const iconInfo = (geoJson) =>
    {
        // const geoJson = {
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
        console.log(geoJson, 'geoJsongeoJsondsa');
        let layerobj = new IconLayer({
            id: '首页市区-icon',
            data: geoJson.features,
            pickable: true,
            getIcon: d =>
            {
                return {
                    url: shiqu,
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
                // 暂时没数据 发个空过去
                // modalHandler(1)
                // console.log(d,'okookokokokok')
            },
            onHover: d =>
            {
                console.log(d, 'dsadasfwewqedas');
                if (d.color)
                {
                    modalHandler(1)
                } else
                {
                    modalHandler(null)
                }

            }
        })
        let { deckLayerArr, mapObj } = globalMapModel;
        if (mapObj)
        {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: [...deckLayerArr, layerobj]
            })
        }
    }



    useEffect(() =>
    {
        const geoJson = {
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
        // getIcon(geoJson)

    }, [])
    const getIcon = (data) =>
    {
        let layerObj = new IconLayer({
            id: '本市区县-icon',
            data: data.features,
            pickable: true,
            getIcon: d =>
            {
                return {
                    url: shiqu,
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
                return d.geometry.coordinates
            },
            onClick: d =>
            {
                let { object } = d
            }
        })
        let { deckLayerArr, mapObj } = globalMapModel;
        if (mapObj)
        {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: [...deckLayerArr, layerObj]
            })
        }
    }
    return (
        <Fragment>
        </Fragment>

    );
}



function mapStateToProps ({ globalMapModel })
{
    return {
        globalMapModel: globalMapModel
    }
}
export default connect(mapStateToProps)(Index);