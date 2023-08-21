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
function mapStateToProps ({ globalModel, globalMapModel, zhongdianqiyeModal })
{
    return {
        globalModel: globalModel,
        globalMapModel: globalMapModel,
        zhongdianqiyePoint: zhongdianqiyeModal.point
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
        this.setLayer(geoJson)
    }
    //卸载
    componentWillUnmount ()
    {

    }
    //创建企业党建点图层
    setLayer = (geojson) =>
    {
        const { zhongdianqiyePoint } = this.props
        this.layerobj = new IconLayer({
            id: '111111',
            data: zhongdianqiyePoint,
            pickable: true,
            getIcon: d =>
            {
                return {
                    url: 'http://223.243.100.141:35919/djtb/djtb1.png',
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
                console.log(d, 'zhongdianqiyePoint.f0016, zhongdianqiyePoint.f0015');
                return [d.f0016, d.f0015];
            },
            onClick: d =>
            {
                let { object } = d
                alert(321)
                // console.log(d,'okookokokokok')
            }

        })
        console.log(this.layerobj, 'this.layerobjthis.layerobj')
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