import { useState, useEffect, Fragment, memo } from 'react';
import { IconLayer } from 'deck.gl';
import { connect } from 'dva';
import icon from '@/assets/huangshi/zhongdianchanye/icon.png'
const dispatch = window.g_app._store.dispatch;

const Index = ({ globalMapModel, mapHandler }) =>
{
    const [leary, setLeary] = useState(null)
    useEffect(() =>
    {
        dispatch({
            type: 'zhongdianxiangmuModel/getPointData',
            payload: {
                params: {
                    catalog: 'ce3382a0ae80407294b507a52a897cf4',
                    features: 'ec14732a8d3e4b7e9a9101b03d83d9ef',
                    max_feature: 10000,
                    search_type: 2,
                },
                callback: iconInfo
            }
        })

        return () =>
        {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: []
            })
        }
    }, [])
    const iconInfo = (geoJson) =>
    {
        let layerObj = new IconLayer({
            id: '重点产业-icon',
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
                return d.geometry.coordinates;
            },
            onClick: d =>
            {
                let { object } = d

                mapHandler(d, object.properties)
            }
        })

        let { deckLayerArr, mapObj } = globalMapModel;
        dispatch({
            type: 'globalMapModel/setDeckLayerArr',
            payload: [...deckLayerArr, leary]
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
                payload: [...deckLayerArr, leary]
            })
        }
    }, [leary])  // 检测数组内变量 如果为空 则监控全局
    return (
        <Fragment></Fragment>
    );
};
function mapStateToProps ({ globalMapModel })
{
    return {
        globalMapModel: globalMapModel
    }
}

export default connect(mapStateToProps)(memo(Index));


// import React from "react";
// import { IconLayer } from 'deck.gl';
// import { connect } from 'dva';

// import icon from '@/assets/huangshi/zhongdianchanye/icon.png'
// function mapStateToProps ({ globalModel, globalMapModel, zhongdianqiyeModal })
// {
//     return {
//         globalModel: globalModel,
//         globalMapModel: globalMapModel,
//         zhongdianqiyeModal: zhongdianqiyeModal,
//     };
// }
// @connect(mapStateToProps)
// class NewIconLayer extends React.Component
// {
//     //渲染之后
//     componentDidMount ()
//     {
//         this.props.dispatch({
//             type: 'zhongdianqiyeModal/getPointData',
//             payload: {
//                 params: {
//                     catalog: 'ce3382a0ae80407294b507a52a897cf4',
//                     features: '0a11d948f150497a8ceaa8874c46eb08',
//                     max_feature: 10000,
//                     search_type: 2,
//                 },
//                 callback: this.setLayer.bind(this)
//             }
//         })
//     }
//     //卸载
//     componentWillUnmount ()
//     {

//         this.props.dispatch({
//             type: 'globalMapModel/setDeckLayerArr',
//             payload: []
//         })
//     }
//     //创建企业党建点图层
//     setLayer = (geoJson) =>
//     {
//         this.layerObj = new IconLayer({
//             id: '重点产业-icon',
//             data: geoJson.features,
//             pickable: true,
//             getIcon: d =>
//             {
//                 return {
//                     url: icon,
//                     width: 95,
//                     height: 119,
//                 }
//             },
//             sizeMinPixels: 40,
//             sizeMaxPixels: 300,
//             sizeUnits: 'meters',
//             getSize: d => 300,
//             sizeScale: 0.1,
//             getPosition: d =>
//             {
//                 return d.geometry.coordinates;
//             },
//             onClick: d =>
//             {
//                 let { object } = d

//                 // mapHandler(d, object.properties)
//             }
//         })
//         let { deckLayerArr, mapObj } = this.props.globalMapModel;
//         if (mapObj)
//         {
//             this.props.dispatch({
//                 type: 'globalMapModel/setDeckLayerArr',
//                 payload: [...deckLayerArr, this.layerObj]
//             })
//         }
//     }
//     render ()
//     {
//         return (
//             <React.Fragment>

//             </React.Fragment>
//         )
//     }
// }
// export default NewIconLayer