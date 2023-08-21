import { useEffect } from 'react';
import { IconLayer } from 'deck.gl';
import shenghui from '@/assets/huangshi/quanjugailan/shenghui.png'
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;
const Index = ({ globalMapModel }) =>
{

    useEffect(() =>
    {
        // dispatch({
        //     type: 'globalMapModel/setDeckLayerArr',
        //     payload: []
        // })
        dispatch({
            type: 'zhongdianqiyeModal/getPointData',
            payload: {
                params: {
                    catalog: 'ce3382a0ae80407294b507a52a897cf4',
                    features: '0a11d948f150497a8ceaa8874c46eb08',
                    max_feature: 10000,
                    search_type: 2,
                },
                // 撒点暂时取消
                // callback: getData
            }
        })
    }, [])
    const getData = (geoJson) =>
    {
        let layerobj = new IconLayer({
            id: '重点项目-icon',
            data: geoJson.features,
            pickable: true,
            getIcon: d =>
            {
                return {
                    url: shenghui,
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
                    url: shenghui,
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
                return [117.834538, 30.068635]
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
        <div>
        </div>

    );
}



function mapStateToProps ({ globalMapModel })
{
    return {
        globalMapModel: globalMapModel
    }
}
export default connect(mapStateToProps)(Index);