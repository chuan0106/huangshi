// import * as exampleService from '../services/exampleService';
import * as zhongdianxiangmuService from '../services/homeService';
export default {
    namespace: 'zhongdianxiangmuModel',
    state: {
        menuActive: '重点项目',
    },
    subscriptions: {
        setup ({ dispatch, history }) { },
    },
    effects: {
        // 左侧菜单数据
        *getMenuTable ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(zhongdianxiangmuService.getMenuTableService, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 点位数据
        *getPointData ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(zhongdianxiangmuService.getPointData, params);
            let data = res.data.data
            let newgeojson = {
                type: 'FeatureCollection',
                features: []
            }
            for (let i in data)
            {
                let geojsonparams = {
                    "type": "Feature",
                    "properties": data[i],
                    "geometry": {
                        "type": "Point",
                        "data": data[i],
                        "coordinates": [Number(data[i].f0016), Number(data[i].f0015)],
                    }
                }
                newgeojson.features.push(geojsonparams)
            }
            if (callback)
            {
                callback(newgeojson,)
            }
            // yield put({ type: 'getSocketReducers', payload: newgeojson });
            console.log(res.data.data, 'datadatadatadatadata', payload);
        },
    },

    reducers: {
        //   当前主题ID
        setActiveThemeReducer (state, action)
        {
            state.activeTheme = action.payload;
            return { ...state };
        },

    },
};
