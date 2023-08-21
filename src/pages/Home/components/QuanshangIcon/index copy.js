import { useEffect } from 'react';
import { IconLayer } from 'deck.gl';
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;
const Index = ({ active, globalMapModel }) =>
{
    const map = {
        1: data =>
        {
            let layerObj = new IconLayer({
                id: '本市区县-icon',
                data: data.features,
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
        },
        2: data =>
        {
            let layerObj = new IconLayer({
                id: '本市区县-icon',
                data: data.features,
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

        const { id } = active
        if (map[id])
        {
            map[id](geoJson)
        }
    }, [])
    return (
        <div>
        </div>

    );
};

function mapStateToProps ({ globalMapModel })
{
    return {
        globalMapModel: globalMapModel
    }
}
export default connect(mapStateToProps)(Index);