// import * as exampleService from '../services/exampleService';
import * as zhongdianqiyeServer from '../services/homeService';
export default {
    namespace: 'zhongdianqiyeModal',

    state: {
        menuActive: '重点企业',
        point: [],
        testData: null,
        themeShow: false,
        camera: {
            zoom: 15.878895443604712,
            pitch: 75,
            longitude: 118.637475,
            latitude: 32.0637,
        },
        activeTheme: null,
        map: null,
        geoWhere: [],
        drawIsShow: false,
        drawActive: '',
        searchList: []
    },

    subscriptions: {
        setup ({ dispatch, history }) { },
    },

    effects: {
        /**
         * @method testEffect 测试服务请求
         *
         */
        *getPointData ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(zhongdianqiyeServer.getPointData, params);
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
        getSocketReducers (state, { payload })
        {
            state.point = payload;
            return { ...state, ...payload };
        },
    },
};
