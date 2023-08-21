import { useEffect, Fragment } from 'react';
import { IconLayer, TextLayer } from 'deck.gl';
import { WebMercatorViewport } from '@deck.gl/core';
import { geoJson } from '../../aaa.js'
import shiqu from '@/assets/huangshi/quanjugailan/shiqu.png'
import commonIcon from '@/assets/huangshi/common/commonIcon.png'
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;
const Index = ({ globalMapModel, modalHandler }) =>
{
    useEffect(() =>
    {
        setTimeout(() =>
        {
            // getIconData()
        }, 500)

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
                console.log(d, 'dsalkjlkcxz');
                return {
                    url: d.geometry.img,
                    // url: commonIcon,
                    width: d.geometry.width,
                    height: d.geometry.height,
                }
            },
            sizeMinPixels: 80,
            sizeMaxPixels: 150,
            getSize: d => 1,
            sizeUnits: 'meters',
            getPosition: d =>
            {
                return d.geometry.coordinates
                console.log(d.geometry.coordinates, 'dsakjklcxz');
            },
            // {
            //     console.log(d, 'dsakljlkcxzioa');
            //     return d.geometry.coordinates;
            // },
            // getColor: [0, 0, 0, 20],
            // mask: true,
            onClick: d =>
            {
                // modalHandler(d?.object)
            },
            onHover: data =>
            {

                // let { object, layer, color } = data;
                // console.log(object, 'objectobjectdsad');
                // if (color)
                // {
                //     const { geometry } = object
                //     const newDataObj = {
                //         name: geometry.name,
                //         number: geometry.number,
                //     }
                //     modalHandler(newDataObj)
                // } else
                // {
                //     modalHandler(null)
                // }
            }
        })

        let characterSet = [];
        let features = geoJson.features;
        for (let i in features)
        {
            let text = features[i].geometry.name;
            for (let j = 0; j <= text.length; j++)
            {
                if (characterSet.indexOf(text[j]) < 0)
                {
                    characterSet.push(text[j]);
                }
            }
        }
        // const layer = new TextLayer({
        //     id: 'text-laye222r',
        //     fontFamily: 'Material Icons',
        //     data: geoJson.features,
        //     pickable: true,
        //     getText: d => d.geometry.name,
        //     // background: true,
        //     // backgroundPadding: [30, 20, 0, 0],
        //     getPosition: d => d.geometry.coordinates,
        //     characterSet: characterSet,
        //     getColor: d => [255, 255, 255, 255],
        //     getSize: 24,
        //     getPixelOffset: [50, 5],
        //     sizeMinPixels: 20,
        //     sizeMaxPixels: 60,
        //     billboard: false,
        //     // background: true,
        //     getBackgroundColor: [0, 0, 255],
        //     // backgroundPadding: [255, 20],
        //     outlineColor: [255, 255, 255, 100],
        //     // getAngle: 10,
        //     getTextAnchor: 'middle',
        //     getAlignmentBaseline: 'center'
        // });

        let { deckLayerArr, mapObj } = globalMapModel;
        // if (mapObj)
        // {
        //     dispatch({
        //         type: 'globalMapModel/setDeckLayerArr',
        //         payload: [layerobj]
        //     })
        // }
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
        // dispatch({
        //     type: 'globalMapModel/setDeckLayerArr',
        //     payload: []
        // })
        // dispatch({
        //     type: 'zhongdianxiangmuModel/getPointData',
        //     payload: {
        //         params: {
        //             catalog: 'ce3382a0ae80407294b507a52a897cf4',
        //             features: 'ec14732a8d3e4b7e9a9101b03d83d9ef',
        //             max_feature: 10000,
        //             search_type: 2,
        //         },
        //         callback: getData
        //     }
        // })
    }, [])
    const getData = (geoJson) =>
    {
        iconInfo(geoJson)
    }
    const iconInfo = (geoJson) =>
    {
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
                modalHandler(1)
                // console.log(d,'okookokokokok')
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