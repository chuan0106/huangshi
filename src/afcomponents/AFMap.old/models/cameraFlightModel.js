import * as buildMapService from '../services/buildMapService';
// import {
//   sourceType,
//   mapLayerTypeConstant,
//   // mapLayerTypeNumberConstant,
//   filterType,
//   operatorType,
//   // deckMapStyle,
//   defaultDeckMapStyle,
//   mapTypeFun,
//   mapNumberTypeFun,
//   mapLayerStyle,
//   initialViewState,
//   initZoom,
//   mapLayerSection,
// } from '@/pages/Report/constant';
import { message } from 'antd';
export default {
  namespace: 'cameraFlightModel',
  state: {
    cameraList: [],
    flyCameraId: 0, //飞行组的id
    cameraOption: {
      flightType: 0, //沿线0，分段1
      flightTime: 10, //沿线时长
      backToStart: false, //回到原点
      loopFlight: false, // 循环飞行
      viewCamera: null,
      flightSetIsTrue: true,
    },
    framesOption: {
      flightTime: 10,
      stayTime: 0,
      viewCamera: null,
    },
    // 初始选中
    framesActive: {
      id: 0,
      flightTime: 0,
      stayTime: 0,
      option: {},
    },
    //是否开启飞行状态
    flyState: false,
    mapHandle: null,
  },

  subscriptions: {
    // setup({ dispatch, history }) {},
  },
  effects: {
    /**
     *@method select_list_by_layer_id_Effect
     * 获取飞行镜头列表
     * @params {}
     */
    *select_list_by_layer_id_Effect({ payload, map }, { call, put, select }) {
      let buildNewMapModel = yield select(state => state.buildNewMapModel);
      let param = {
        layerId: payload || buildNewMapModel.groupLayerId,
      };
      let res = yield call(buildMapService.select_list_by_layer_id_Service, param);
      if (!res.data.code) {
        let data = res.data.data || [];
        console.log(data, 'cameraList');
        if (data && data.length > 0) {
          yield put({
            type: 'setCameraListReducer',
            payload: data,
            map: map,
          });
        }
      } else {
        message.error(res.data.message);
      }
    },
    /**
     *@method select_das_camera_Effect
     * 查询图层飞行相机组
     * @params {}
     */
    *select_das_camera_Effect({ payload }, { call, put, select }) {
      let buildNewMapModel = yield select(state => state.buildNewMapModel);
      let param = {
        id: buildNewMapModel.groupLayerId,
      };
      let res = yield call(buildMapService.select_das_camera_Service, param);
      if (!res.data.code) {
        let data = res.data.data;
        console.log(data, 'jalksjdlfkjs');
      } else {
        message.success('获取图层飞行相机组失败');
      }
    },
    /**
     * 只走一次
     *@method create_das_camera_Effect
     * 新建图层飞行相机组
     * @params {}
     */
    *create_das_camera_Effect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.cameraFlightModel);
      let buildNewMapModel = yield select(state => state.buildNewMapModel);
      // localStorage.setItem('viewport', JSON.stringify(viewState));
      let param = {
        layerId: buildNewMapModel.groupLayerId,
        option: JSON.stringify(thisModel.cameraOption),
      };
      let res = yield call(buildMapService.create_das_camera_Service, param, 'workspaceFilter');
      if (!res.data.code) {
        let data = res.data.data;
        // yield put({ type: 'create_das_camera_frame_Effect', payload: data.id });
        // yield put({ type: 'update_das_camera_Effect', payload: payload, id: data.id });
        yield put({ type: 'setCameraListReducer', payload: [data] });
      }
    },
    /**
     *@method create_das_camera_frame_Effect
     * 创建飞行镜头帧
     * @params {}
     */
    *create_das_camera_frame_Effect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.cameraFlightModel);
      // localStorage.setItem('viewport', JSON.stringify(viewState));
      let option = {
        ...thisModel.framesOption,
        viewCamera: JSON.parse(localStorage.getItem('viewport')),
      };
      let param = {
          cameraGroupId: thisModel.cameraList[0].id || payload,
          option: JSON.stringify(option),
        },
        requestBody = null;

      if (thisModel.cameraList[0].option.flightType === 2) {
        // 添加中心点巡航
        requestBody = buildMapService.create_das_camera_center_frame_Service;
      } else {
        // 添加其他镜头帧
        requestBody = buildMapService.create_das_camera_frame_Service;
      }
      let res = yield call(requestBody, param, 'workspaceFilter');
      if (!res.data.code) {
        let data = res.data.data;
        data.option = JSON.parse(data.option);
        yield put({ type: 'setFramesReducer', payload: data, doType: 1 });
      }
    },
    /**
     *@method update_das_camera_Effect
     *  更新相机分组参数
     * @params {}
     */
    *update_das_camera_Effect({ payload, id }, { call, put, select }) {
      let thisModel = yield select(state => state.cameraFlightModel);
      let param = {
        id: thisModel.flyCameraId || id,
        option: JSON.stringify(payload),
      };
      let res = yield call(buildMapService.update_das_camera_Service, param);
      if (!res.data.code) {
        let data = res.data.data;
        data.option = JSON.parse(data.option);
        yield put({ type: 'setCameraReducer', payload: data });
      }
    },
    /**
     *@method update_das_camera_frame_Effect
     *  更新镜头飞行帧
     * @params {}
     */
    *update_das_camera_frame_Effect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.cameraFlightModel);
      let paramOption = null,
        requestBody = null;
      if (thisModel.cameraList[0].option.flightType === 2) {
        paramOption = thisModel.cameraList[0].centers.filter(elem => elem.id === payload.id);
        requestBody = buildMapService.update_das_camera_center_frame_Service;
      } else {
        paramOption = thisModel.cameraList[0].frames.filter(elem => elem.id === payload.id);
        requestBody = buildMapService.update_das_camera_frame_Service;
      }
      let param = {
        id: payload.id,
        option: JSON.stringify({ ...paramOption[0].option, ...payload.updateData }),
      };
      let res = yield call(requestBody, param);
      if (!res.data.code) {
        // message.success('更新成功！');
        yield put({ type: 'setCameraFramesReducer', payload: param });
      }
    },
    /**
     * 当前删除分组暂时界面不用，保留
     *@method remove_das_camera_Effect
     * 删除飞行分组信息
     * @params {}
     */
    *remove_das_camera_Effect({ payload }, { call, put, select }) {
      let param = {
        id: 8,
      };
      let res = yield call(buildMapService.remove_das_camera_Service, param);
      if (!res.data.code) {
        message.success('删除成功！');
      }
    },
    /**
     *@method remove_das_camera_frame_Effect
     *  删除镜头帧
     * @params {}
     */
    *remove_das_camera_frame_Effect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.cameraFlightModel);
      let param = {
        id: payload,
      };
      let requestBody = null;
      // 中心点巡航
      if (thisModel.cameraList[0].option.flightType === 2) {
        requestBody = buildMapService.remove_das_camera_center_frame_Service;
      } else {
        requestBody = buildMapService.remove_das_camera_frame_Service;
      }
      let res = yield call(requestBody, param);
      if (!res.data.code) {
        // message.success('删除成功！');
        yield put({ type: 'setFramesReducer', payload, doType: 0 });
      }
    },
  },
  reducers: {
    setCameraListReducer(state, action) {
      state.cameraList = action.payload;
      state.flyCameraId = state.cameraList[0].id;
      state.cameraList[0].option = JSON.parse(action.payload[0]?.option);
      if (state.cameraList[0].frames && state.cameraList[0].frames.length > 0) {
        for (const i in state.cameraList[0].frames) {
          if (Object.hasOwnProperty.call(state.cameraList[0].frames, i)) {
            state.cameraList[0].frames[i].option = JSON.parse(state.cameraList[0].frames[i].option);
          }
        }
      } else {
        state.cameraList[0].frames = [];
      }
      if (state.cameraList[0].centers && state.cameraList[0].centers.length > 0) {
        for (const i in state.cameraList[0].centers) {
          if (Object.hasOwnProperty.call(state.cameraList[0].centers, i)) {
            state.cameraList[0].centers[i].option = JSON.parse(
              state.cameraList[0].centers[i].option,
            );
          }
        }
      } else {
        state.cameraList[0].centers = [];
      }
      if (state.cameraList[0].frames.length > 0) {
        state.framesActive = {
          id: state.cameraList[0].frames[0].id,
          flightTime: state.cameraList[0].frames[0].option.flightTime,
          stayTime: state.cameraList[0].frames[0].option.stayTime,
          option: state.cameraList[0].frames[0].option,
        };
      }
      if (action?.map) {
        action.map.setCameraList(state.cameraList);
      }

      // console.log('statramesActive', state.framesActive);
      return { ...state };
    },
    setFramesActiveReducer(state, action) {
      state.framesActive = action.payload;
      return { ...state };
    },
    setCameraReducer(state, action) {
      state.cameraList[0].option = action?.payload?.option;
      return { ...state };
    },
    setFramesReducer(state, action) {
      if (action.doType) {
        if (state.cameraList[0].frames.length === 0) {
          // 默认选中第一个
          state.framesActive = {
            id: action.payload.id,
            flightTime: action.payload.option.flightTime,
            stayTime: action.payload.option.stayTime,
            option: action.payload.option,
          };
        }
        console.log(state.cameraList[0], 'gjixnmman');
        // 2:中心点巡航
        if (state.cameraList[0].option.flightType === 2) {
          state.cameraList[0].centers.push(action.payload);
        } else {
          state.cameraList[0].frames.push(action.payload);
        }
      } else {
        if (state.cameraList[0].option.flightType === 2) {
          state.cameraList[0].centers.length = 0;
        } else {
          for (const i in state.cameraList[0].frames) {
            if (Object.hasOwnProperty.call(state.cameraList[0].frames, i)) {
              const element = state.cameraList[0].frames[i];
              if (element.id === action.payload) {
                state.cameraList[0].frames.splice(i, 1);
                break;
              }
            }
          }
        }
      }
      return { ...state };
    },
    setCameraFramesReducer(state, action) {
      // 2:中心点巡航
      if (state.cameraList[0].option.flightType === 2) {
        state.cameraList[0].centers[0].option = JSON.parse(action.payload.option);
      } else {
        for (const key in state.cameraList[0].frames) {
          if (Object.hasOwnProperty.call(state.cameraList[0].frames, key)) {
            const element = state.cameraList[0].frames[key];
            if (element.id === action.payload.id) {
              state.cameraList[0].frames[key].option = JSON.parse(action.payload.option);
              break;
            }
          }
        }
      }
      return { ...state };
    },
    changeFlyStateReducer(state, action) {
      state.flyState = action.payload;
      // if (action?.map) {
      // action.map.setFlyState(state.flyState);
      // }
      if (state.mapHandle) {
        state.mapHandle.flyToCamera(state.cameraList);
      }
      return { ...state };
    },
    getMapHandleReducer(state, action) {
      state.mapHandle = action.payload;
      return { ...state };
    },
    setPropsNullReducer(state, action) {
      state.cameraList = [];
      state.flyCameraId = 0; //飞行组的id
      state.cameraOption = {
        flightType: 0, //沿线0，分段1
        flightTime: 10, //沿线时长
        backToStart: false, //回到原点
        loopFlight: false, // 循环飞行
        viewCamera: null,
        flightSetIsTrue: true,
      };
      state.framesOption = {
        flightTime: 10,
        stayTime: 0,
        viewCamera: null,
      };
      // 初始选中
      state.framesActive = {
        id: 0,
        flightTime: 0,
        stayTime: 0,
        option: {},
      };
      //是否开启飞行状态
      state.flyState = false;
      state.mapHandle = null;
      return { ...state };
    },
  },
};
