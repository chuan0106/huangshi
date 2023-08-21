/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-05-18 15:05:56
 * @LastEditors: yuchang
 * @LastEditTime: 2023-05-25 15:57:39
 * @Description: 
 */
import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { PolygonLayer } from 'deck.gl';
import huangshiTown from '../../../../../public/huangshi.json';
import { flyTo, upLayerData } from '../../../../utils/commonFun';

function mapStateToProps ({ globalModel, globalMapModel }) {
    return {
        globalModel: globalModel,
        globalMapModel: globalMapModel,
    };
}
@connect(mapStateToProps)
class XzPolygonLayer extends React.Component {
    constructor(props) {
        super(props);
        // this.dimension = params1.dimension;
        this.time = 0;
        this.interval = null;
        this.state = {
            time: 0,
            iconData: [],
            showLayer: true,
            Starttherotation: null,
        };
    }
    //渲染前调用
    componentWillMount () {
        this.inintFun();
    }
    //初始化
    inintFun = () => {
        this.getdata(huangshiTown)

    };

    //处理数据
    getdata = (data) => {
        data = data.features;
        let arrayData = [];
        for (let i = 0; i < data?.length; i++) {
            let geoData = data[i].geometry;
            if (geoData.type === 'MultiPolygon') {
                for (let j in geoData.coordinates) {
                    arrayData.push({
                        ...data[i],
                        lonlat: geoData.coordinates[j],
                    });
                }
            } else {
                arrayData.push({
                    ...data[i],
                    lonlat: geoData.coordinates[0],
                });
            }
        }
        this.newaddlayer(arrayData);
    }

    newaddlayer = data => {
        let { dispatch } = this.props;
        this.layerObj = new PolygonLayer({
            id: 'polygonLayer',
            data: data,
            stroked: true,
            filled: true,
            wireframe: true,
            lineWidthMinPixels: 2,
            pickable: true,
            getPolygon: d => {
                return d.lonlat;
            },
            autoHighlight: true,
            highlightColor: [95, 195, 255, 80],
            getFillColor: d => {
                //let inx = addresName.indexOf(d.properties.name);
                let colors = [6, 68, 123, 0];
                // if(inx>-1){
                //   colors = cityColor[inx];
                // }
                return colors;
            },
            getLineColor: [110, 234, 255, 0],
            getLineWidth: 1,
        });
        let { deckLayerArr } = this.props.globalMapModel;
        deckLayerArr = upLayerData(deckLayerArr, this.layerObj);
        dispatch({ type: 'globalMapModel/setDeckLayerArr', payload: deckLayerArr });
    };
    //渲染后调用
    componentDidMount () { }

    //卸载时调用
    componentWillUnmount () {
        this.props.dispatch({ type: 'globalMapModel/setDeckLayerArr', payload: [] });
    }

    render () {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}
export default XzPolygonLayer;
