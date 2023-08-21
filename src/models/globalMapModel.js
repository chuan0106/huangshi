import { INITIAL_VIEW_STATE } from '@/utils/publickPage';
import { message } from 'antd';
import * as globalService from '@/services/globalService';
import { connectAdvanced } from 'dva';
export default {
    namespace: 'globalMapModel',
    state: {
        //当前地图视角
        viewState: INITIAL_VIEW_STATE,
        //当前deck.gl拥有的所有图层
        deckLayerArr: [],
        newLayerThreeArr: [],
        //当前的绘画图层
        trackingLayerArr: [],
        //当前的动态图层
        activeLayerArr: [],
        //底图对象
        mapObj: null,
        parameters: false,
        //选中要素的数据
        activeLayerObj: {
            lngLat: [0, 0],
            x: null,
            y: null,
            object: null
        },
        newViewState: null,
        //三维场景对象
        threeBox:null,
        baseScene:null
    },

    subscriptions: {
        setup({ dispatch, history }) {

        },
    },

    effects: {
        //获取相数云的数据
        *getDoCloudEffects({ payload }, { call, put, select }) {
            let { callback, params } = payload;
            let globalModel = yield select(state => state.globalModel);
            let oldlayername = globalModel.layername;
            let { dimension } = params;
            let keyAll = [];
            let nameAll = [];
            for (let i in dimension) {
                keyAll.push(dimension[i].key);
                nameAll.push(dimension[i].alias)
            }
            let res = yield call(globalService.getDoCloudMapServer, params);
            if (res.data.code === 0 && res.data.message === 'ok') {
                let globalModel = yield select(state => state.globalModel);
                let newlayername = globalModel.layername;
                if (newlayername !== oldlayername) {
                    return;
                }
                let data = res.data.data;
                let geoJson = {
                    type: 'FeatureCollection',
                    features: [],
                };
                for (let i in data) {
                    if(data[i].geojson!=''){
                        let dataItem = { geometry: JSON.parse(data[i].geojson) };
                        dataItem.properties = {};
                        for (let j in data[i]) {
                            if (j !== 'geojson') {
                                let indexOfType = keyAll.indexOf(j);
                                dataItem.properties[j] = data[i][j];
                                dataItem.properties[nameAll[indexOfType]] = data[i][j];
                            }
                        }
                        geoJson.features.push(dataItem);
                    }
                    
                }
                if (callback) {
                    callback(geoJson);
                }
            }
        }
    },
    reducers: {
        //设计对应导航的列表
        setViewState(state, action) {
            state.viewState = action.payload;
            return { ...state };
        },
        //设置当前deckgl的对应图层
        setDeckLayerArr(state, action) {
            state.deckLayerArr = action.payload;
            return { ...state };
        },
        //设置底图对象
        setMapObj(state, action) {
            state.mapObj = action.payload;
            return { ...state };
        },
        //设置对应的数据
        setActiveLayerObj(state, action) {
            state.activeLayerObj = action.payload;
            return { ...state };
        },
        //设置对应的追踪数据
        setTrackingLayerArr(state, action) {
            state.trackingLayerArr = action.payload;
            return { ...state };
        },
        //设置当前对应的动态图层
        setactiveLayerArr(state, action) {
            state.activeLayerArr = action.payload;
            return { ...state };
        },
        //设置对应的渲染模式
        setParameters(state, action) {
            state.parameters = action.payload;
            return { ...state };
        },
        //设置新的视角
        setnewViewState(state, action) {
            state.newViewState = action.payload;
            return { ...state }
        },
        //存储setthreeBox
        setthreeBox(state, action){
            state.threeBox = action.payload;
            return { ...state }
        },
        //存储setthreeBox
        setBaseScene(state, action){
            state.baseScene = action.payload;
            return { ...state }
        }
    },
};