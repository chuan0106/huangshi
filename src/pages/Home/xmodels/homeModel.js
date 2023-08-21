// import * as exampleService from '../services/exampleService';
import * as homeService from '../services/homeService';
export default {
    namespace: 'homeModel',

    state: {
        menuActive: '工业概览',
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
        *mapDataEffect ({ payload }, { call, put, select })
        {
            let thisModel = yield select(state => state.homeModel);

            if (thisModel.map)
            {
                thisModel.map.clearMapAllLayer();
            }
            yield put({
                type: 'buildNewMapModel/getShareAllMapLayerEffect',
                payload: payload,
            });
        },
        *mapJiaoyuDataEffect ({ payload }, { call, put, select })
        {
            let thisModel = yield select(state => state.homeModel);
            if (thisModel.map)
            {
                thisModel.map.clearMapAllLayer();
            }
            yield put({
                type: 'buildNewMapModel/getShareAllMapLayerEffect',
                payload: payload,
            });
        },
        /**
         * 框选
         * @param {*} param0
         * @param {*} param1
         */
        *drawFunEffect ({ payload }, { call, put, select })
        {
            let thisModel = yield select(state => state.homeModel);
            if (thisModel.map)
            {
                switch (payload)
                {
                    case 'polygon':
                        thisModel.map.draw.changeMode('draw_polygon');
                        break;
                    case 'point':
                        thisModel.map.draw.changeMode('draw_point');
                        break;
                    default:
                        thisModel.map.draw.trash();
                        break;
                }
            }
            yield put({
                type: 'setDrawActiveReducer',
                payload: payload,
            });
        },
        *search_scene ({ payload }, { call, put, select })
        {
            let { params } = payload;

            let res = yield call(homeService.getWeather, params);
            console.log(res);
        },
        //项目搜索的接口
        *getSearch ({ payload }, { call, put, select })
        {
            let { params } = payload;
            let res = yield call(homeService.getSearchFun, params);
            if (res)
            {
                if (res?.data?.code === 200)
                {
                    let { data } = res?.data;
                    console.log(data, 'datadatadata')
                    yield put({
                        type: 'setSearchListReducer',
                        payload: data,
                    });
                }
            }
        },

        //
        *getgongyezongchanzhi ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getgongyezongchanzhi, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return (
                    callback(data)
                )
            }
        },

        // 首次请求 全省-进规企业的数据
        *getFirstTableData ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getFirstTableData, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 全省-工业增加值增速
        *getjinguiqiye ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getjinguiqiye, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 全省-工业增加值增速
        *getgongyezengjiazhizengsu1 ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getgongyezengjiazhizengsu1, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 全省-工业投资增速
        *getquanshenggongyetouzizengsu1 ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getquanshenggongyetouzizengsu1, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 全省-工业技改投资增速
        *getgongyejigaitouzi1 ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getgongyejigaitouzi1, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 区县-工业总产值
        *getgongyezongchanzhi ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getgongyezongchanzhi, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 区县-工业增加值增速
        *getgongyezengjiazhizengsu2 ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getgongyezengjiazhizengsu2, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        // 区县-工业投资增速
        *getquanshenggongyetouzizengsu2 ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getquanshenggongyetouzizengsu2, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },

        // 区县-工业技改投资增速
        *getgongyejigaitouzi2 ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            let res = yield call(homeService.getgongyejigaitouzi2, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },

        // 左上角图表-规上工业总产值及增速
        *getguishanggongyezongchanzhijizengsu ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;

            let res = yield call(homeService.getguishanggongyezongchanzhijizengsu, params);
            console.log(params, 'getguishanggongyezongchanzhijizengsugetguishanggongyezongchanzhijizengsudsa', res);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        }
    },

    reducers: {
        //   当前主题ID
        setActiveThemeReducer (state, action)
        {
            state.activeTheme = action.payload;
            return { ...state };
        },
        //在这里改变对应的状态
        testReducer (state, action)
        {
            state.testData = action.payload;
            return { ...state, ...action.payload };
        },
        //在这里改变对应的状态
        themeShowReducer (state, action)
        {
            state.themeShow = !state.themeShow;
            return { ...state };
        },
        setCamreaReducer (state, action)
        {
            state.camera = action.payload;
            return { ...state };
        },
        //获取地图对象
        getMapReducer (state, action)
        {
            state.map = action.payload;
            return { ...state };
        },
        getConditionsReducer (state, action)
        {
            state.geoWhere = action.payload;
            return { ...state };
        },
        detDrawIsShowReducer (state, action)
        {
            state.drawIsShow = action.payload;
            return { ...state };
        },
        setDrawActiveReducer (state, action)
        {
            state.drawActive = action.payload;
            return { ...state };
        },
        setSearchListReducer (state, action)
        {
            state.searchList = action.payload;
            return { ...state };
        },

        getMenuActive (state, { payload })
        {
            state.menuActive = payload;
            return { ...state }
        },
    },
};
