import * as globalService from '@/services/globalService';
import { message } from 'antd';
import { getNavMenuItems } from '@/utils/commonFun';
export default {
  namespace: 'globalModel',
  state: {
    //导航信息
    menuList: [],
    //导航显示隐藏
    menuShow: false,
    //当前选中的对应模块的id和标题
    activeMenuItemName: '综合态势监测',
    activeMenuItemID: null,
    //设置当前主题的ID
    modelID: null,
    //设置当前不需要定制化开发的模块
    noDevelopment: [],
    //设置当前需要完全定制话开发的模块
    activeDevelopment: [],
    layername: '景区景点',
    rightBoxState: true,
    leftBoxState: true,
    baseScene: null,
    menuUrlObj:[],//菜单关联相数云对象
    leftIframeUrl:null,
    rightIframeUrl:null,
    imgbox:null
  },

  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

  effects: {
    *getMenuListEffects({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.globalModel);
      let { modelID } = thisModel;
      if (modelID) {
        yield put({
          type: 'setMenuList',
          payload: [],
        });
        yield put({
          type: 'checkEffects',
        });
        //let params = { appId: modelID };
        //let res = yield call(globalService.getMenuList, params);

        let menuList = [
          {
            "id": 947,
            "name": "综合态势监测",
            "icon": "",
            "appId": 148,
            "type": 1,
            "level": 1,
            "layout": "",
            "linkType": "",
            "linkUrl": "1916",
            "usercode": "c5b5c7c2349e4f34dd1babc8641f218",
            "parentId": -1,
            "workspaceId": "",
            "uid": "",
            "appUid": "47d1e990583c9c67424d369f3414728e",
            "children": null
          },
          {
            "id": 948,
            "name": "生态环境监测",
            "icon": "",
            "appId": 148,
            "type": 1,
            "level": 1,
            "layout": "",
            "linkType": "",
            "linkUrl": "1918",
            "usercode": "c5b5c7c2349e4f34dd1babc8641f218",
            "parentId": -1,
            "workspaceId": "",
            "uid": "",
            "appUid": "47d1e990583c9c67424d369f3414728e",
            "children": null
          },
          {
            "id": 949,
            "name": "日常执法管理",
            "icon": "",
            "appId": 148,
            "type": 1,
            "level": 1,
            "layout": "",
            "linkType": "",
            "linkUrl": "1924",
            "usercode": "c5b5c7c2349e4f34dd1babc8641f218",
            "parentId": -1,
            "workspaceId": "",
            "uid": "",
            "appUid": "47d1e990583c9c67424d369f3414728e",
            "children": null
          },
          {
            "id": 950,
            "name": "全景视频监控",
            "icon": "",
            "appId": 148,
            "type": 1,
            "level": 1,
            "layout": "",
            "linkType": "",
            "linkUrl": "11955",
            "usercode": "c5b5c7c2349e4f34dd1babc8641f218",
            "parentId": -1,
            "workspaceId": "",
            "uid": "",
            "appUid": "47d1e990583c9c67424d369f3414728e",
            "children": null
          },
          {
            "id": 997,
            "name": "历史数据分析",
            "icon": "",
            "appId": 148,
            "type": 1,
            "level": 1,
            "layout": "",
            "linkType": "",
            "linkUrl": "11964",
            "usercode": "c5b5c7c2349e4f34dd1babc8641f218",
            "parentId": -1,
            "workspaceId": "",
            "uid": "",
            "appUid": "47d1e990583c9c67424d369f3414728e",
            "children": null
          }
          
        ];


        //let arrID = getNavMenuItems(res.data.data);
        let newMenuList = [];
        newMenuList = menuList
        let id = newMenuList[0].children === [] || !newMenuList[0].children ? newMenuList[0].linkUrl : newMenuList[0].children[0].linkUrl;
       // if (res.data.code === 0 && res.data.message === 'ok') {
         // let { data } = res.data;
          yield put({
            type: 'setMenuList',
            payload: menuList,
          });
          // yield put({
          //   type: 'setActiveMenuItemID',
          //   payload: arrID[0],
          // });

          //if (!data[0].children) {
            yield put({
              type: 'setActiveMenuItemName',
              payload: newMenuList[0].name,
            });
            yield put({
              type: 'setmoudelId',
              payload: newMenuList[0].id,
            });
         // }
        // } else {
        //   message.error(res.data.message);
        // }
      }
    },
    //获取对应相数云对应的数据
    *getDoCloudEffects({ payload }, { call, put, select }) {
      let { callback, params } = payload;
      let res = yield call(globalService.getDoCloudMapServer, params);
      if (res.data.code === 0 && res.data.message === 'ok') {
        let data = res.data.data;
        if (callback) {
          callback(data);
        }
      }
    },
  },
  reducers: {
    //设计对应导航的列表
    setMenuList(state, action) {
      state.menuList = action.payload;
      return { ...state };
    },
    //设置对应导航的显示隐藏
    setMenuShow(state, action) {
      state.menuShow = action.payload;
      return { ...state };
    },
    //设置当前选中导航的id
    setActiveMenuItemName(state, action) {
      state.activeMenuItemName = action.payload;
      return { ...state };
    },
    //设置当前选中导航的id
    setActiveMenuItemID(state, action) {
      state.activeMenuItemID = action.payload;
      return { ...state };
    },
    //设置对应的模块的id
    setModelID(state, action) {
      state.modelID = action.payload;
      return { ...state };
    },
    //设置当前不用定制化开发的模块
    setNoDevelopment(state, action) {
      state.noDevelopment = action.payload;
      return { ...state };
    },
    //设置当前需要完全定制化开发的模块
    setActiveDevelopment(state, action) {
      state.activeDevelopment = action.payload;
      return { ...state };
    },
    setlayername(state, action) {
      state.layername = action.payload;
      return { ...state };
    },
    //设置对应左边阴影的状态
    setLeftBoxState(state, action) {
      state.leftBoxState = action.payload;
      return { ...state };
    },
    //设置对应右边阴影的状态
    setReftBoxState(state, action) {
      state.rightBoxState = action.payload;
      return { ...state };
    },
    setBaseScene(state, action) {
      state.baseScene = action.payload;
      return { ...state };
    },
    setleftIframeUrl(state, action) {
      state.leftIframeUrl = action.payload;
      return { ...state };
    },
    setrightIframeUrl(state, action) {
      state.rightIframeUrl = action.payload;
      return { ...state };
    },
    setimgbox(state, action) {
      state.imgbox = action.payload;
      return { ...state };
    },

    
  }
};
