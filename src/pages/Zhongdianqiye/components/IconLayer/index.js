/*
 * @version: V1.0.0
 * @Author: dengtao
 * @Date: 2023-03-03 20:02:58
 * @LastEditors: dengtao
 * @LastEditTime: 2023-03-04 15:14:58
 * @FilePath: \cloud\src\pages\Home\components\IconLayer\index.js
 * @Descripttion: 
 */
import React from "react";
import styles from './styles.less';
import { IconLayer } from 'deck.gl';
import { connect } from 'dva';
import point from '../../../../assets/huangshi/zhongdianqiye/point.png'
function mapStateToProps ({ globalModel, globalMapModel, zhongdianqiyeModal })
{
    return {
        globalModel: globalModel,
        globalMapModel: globalMapModel,
        zhongdianqiyeModal: zhongdianqiyeModal,
    };
}
@connect(mapStateToProps)
class NewIconLayer extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    //渲染之前
    componentWillMount ()
    {

    }
    //渲染之后
    componentDidMount ()
    {
        console.log(this, 'dsafawewqe');
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
                    features: '0a11d948f150497a8ceaa8874c46eb08',
                    max_feature: 10000,
                    search_type: 2,
                },
                callback: this.getdata.bind(this)
            }
        })
    }
    getdata = (data) =>
    {
        // console.log(data, '6666666666666')
        this.setLayer(data)
    }
    //卸载
    componentWillUnmount ()
    {

        this.props.dispatch({
            type: 'globalMapModel/setDeckLayerArr',
            payload: []
        })
    }
    //创建企业党建点图层
    setLayer = (geojson) =>
    {
        console.log(geojson, 'geojson');

        this.layerobj = new IconLayer({
            id: '重点企业-Icon',
            data: geojson.features,
            pickable: true,
            getIcon: d =>
            {
                return {
                    url: point,
                    width: 95,
                    height: 119,
                }
            },
            sizeMinPixels: 80,
            sizeMaxPixels: 400,
            sizeUnits: 'meters',
            getSize: d => 400,
            sizeScale: 0.1,
            getPosition: d =>
            {
                return d.geometry.coordinates;
            },
            onClick: d =>
            {
                const { mapHandler } = this.props
                const { object } = d
                mapHandler(d, object.properties)
            }

        })
        let { deckLayerArr, mapObj } = this.props.globalMapModel;
        if (mapObj)
        {
            this.props.dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: [...deckLayerArr, this.layerobj]
            })
        }

    }
    render ()
    {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}
export default NewIconLayer