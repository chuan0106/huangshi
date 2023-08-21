import * as buildMapService from '../services/buildMapService';
// import { FlyToInterpolator } from 'deck.gl';
import { routerRedux } from 'dva/router';
import loadLayerFunction from './doMapOption/loadLayerFunction';
import IPConfig from '@/constants/IPConfig';
import { projectType } from '@/constants/projectConfig';
import {
  sourceType,
  // mapLayerTypeConstant,
  // mapLayerTypeNumberConstant,
  // filterType,
  // operatorType,
  // deckMapStyle,
  defaultDeckMapStyle,
  mapTypeFun,
  mapLayerTypeName,
  // mapNumberTypeFun,
  // mapLayerStyle,
  // initialViewState,
  initZoom,
  layerDataType,
  //   mapLayerSection,
} from '@/constants/screenConstant';
import { DataSearchType } from '@/constants/dataConstant';
import {
  // FlyToCamera,
  doFortmatChart,
  layerDataGeoJson,
  layerProCon,
  defaultSection,
} from './mapConstant';
import {
  // initMapOption,
  defaultMapOption,
  buildMapWidgetConfig,
  changeCustomGroupConfig,
} from './doMapOption/config';
// import { getType } from '@turf/turf';
// import WebMercatorViewport from 'viewport-mercator-project';
import { message } from 'antd';
// import { router } from 'umi';
// import { PathUtil } from 'bizcharts';
// const dispatch = window.g_app._store.dispatch;

// onceIndex：区分是否为第一次执行filterDataModel的变量
let onceIndex = 0;
export default {
  namespace: 'buildNewMapModel',
  state: {
    daslayerId: null,
    firstViewCamera: null,
    allMapLayers: [],
    mapLayers: [],
    mapStyle: null,
    deckLayer: [],
    selectDataLayerData: null,
    selectDrawLayerData: null,
    //数据选中的对应的dataSource;
    linkDataSource: null,
    fortmatChartInit: {
      catalog: '',
      sourceType: sourceType.GEOMESA,
      features: '',
      dimension: [],
      where: {
        mode: 1,
        conditions: [],
      },
    },
    //++++++
    //分组图层id
    groupLayerId: null,
    // 是否分享
    share: null,
    // 区分数据弹框功能 0:添加数据；1:更换数据；
    selectDataType: 0,
    // 自定义分段的弹框显隐
    customGroupShow: false,
    iviewState: null,
    deleteMapLayers: [],
    viewport: null,
    // 渲染模式
    renderMode: 'normal',
    // 场景设置相机设置相关（保存相机视角、指北针显隐、锁定相机位置）
    camera: null,
    // 当前选择的地图样式
    deckMapStyle: defaultDeckMapStyle,
    saveCamera: null,
    // 修改图层名称相关 start
    activeUpdate: null,
    layerName: '',
    // 修改图层名称相关 end

    interactiveData: [], //交互获取
    // loadingProgress: true,
    loadingLayerCount: 0,
    loadingCurLayerCount: 0,
    replaceSelectDataLayer: false,
    refreshModelShow: false,
    refresh: {
      time: 0,
    },
  },

  subscriptions: {
    // setup({ dispatch, history }) {},
  },
  effects: {
    /**
     *@method getAllMapLayerEffect
     * 获取所有图层信息
     * @params {id}
     */
    *getShareAllMapLayerEffect({ payload }, { call, put, select }) {
      // let thisModel = yield select(state => state.buildNewMapModel);
      //判断类型
      let params = { shareUrl: payload };
      let res = yield call(buildMapService.getShareIdService, params);
      if (!res?.data?.code) {
        let data = res?.data?.data;
        console.log('获取所有分享图层', data);
        yield put({
          type: 'mapSceneModel/getIdMapStyle',
          payload: data?.mapId,
        });
        // 获取飞行相机组
        yield put({
          type: 'cameraFlightModel/select_list_by_layer_id_Effect',
          payload: data?.id,
        });
        if (data?.camera) {
          let camera = JSON.parse(data.camera);
          yield put({
            type: 'saveCameraReducer',
            payload: camera,
          });
          yield put({
            type: 'defaultCameraReducer',
            payload: camera,
          });
        } else {
        }
        // 获取渲染模式
        yield put({
          type: 'getRenderModeReducer',
          payload: data?.renderMode,
        });
        // -------- 基本设置 --------
        // 地图图层名称
        yield put({ type: 'buildBaseSettingModel/editMapNameReducer', payload: data.name });
        // -------- 基本设置 end --------
        let allLayers = data?.linkLayers ? [data, ...data?.linkLayers] : [data];
        console.log('获取所有分享图层1', allLayers);
        //所有图层计数
        let layerCount = allLayers?.length || 0;
        //请求表头数据
        for (const index in allLayers) {
          if (allLayers.hasOwnProperty(index)) {
            if (allLayers[index]?.linkStyles) {
              layerCount = layerCount + allLayers[index]?.linkStyles?.length || 0;
            }
            if (allLayers[index]?.isDelete === 2) {
              layerCount = layerCount - 1;
            }
            allLayers[index].option = JSON.parse(allLayers[index].option);
            if (!allLayers[0].option) {
              allLayers[index].zIndex = index - 1;
            } else {
              allLayers[index].zIndex = index;
            }
            yield put({
              type: 'getMapDataEffect',
              payload: allLayers[index],
            });
          }
        }
        // alert(layerCount);
        // yield put({
        //   type: 'loadingLayerCountReducer',
        //   payload: layerCount,
        // });
      } else {
        message.error(res?.data?.message || '获取数据失败');
      }
    },

    /**
     *@method getAllMapLayerEffect
     * 获取所有图层信息
     * @params {id}
     */
    *getAllMapLayerEffect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      //判断类型
      let param = {
        id: payload.toString(),
      };
      let res = yield call(buildMapService.getAllMapLayerService, param);
      if (!res?.data?.code) {
        let data = res?.data?.data;
        console.log('获取所有图层', data);
        //获取分组图层id
        yield put({
          type: 'getGroupLayerIdReducer',
          payload: data?.id,
        });
        //获取是否分享
        yield put({
          type: 'getIsShareReducer',
          payload: data,
        });
        // 记录当前编辑组件的类型
        yield put({
          type: 'widgetManageModel/getComponentTypeReducer',
          payload: data.componentType,
        });
        //将mapId传给新model
        yield put({
          type: 'mapSceneModel/getMapStyle',
          payload: data?.mapId,
        });
        // 新追加服务
        if (!projectType.isHWPoc) {
          yield put({ type: 'mapSceneModel/getDocityBuilderMapList' });
        }
        //当底图为Docity时，赋值
        yield put({
          type: 'mapSceneModel/getIdMapStyle',
          payload: data?.mapId,
        });
        // 获取飞行相机组
        yield put({
          type: 'cameraFlightModel/select_list_by_layer_id_Effect',
          payload: data?.id,
        });
        if (data?.camera) {
          let camera = JSON.parse(data.camera);
          yield put({
            type: 'saveCameraReducer',
            payload: camera,
          });
          yield put({
            type: 'defaultCameraReducer',
            payload: camera,
          });
        } else {
        }
        // 获取渲染模式
        yield put({
          type: 'getRenderModeReducer',
          payload: data?.renderMode,
        });
        // -------- 基本设置 --------
        // 地图图层名称
        yield put({ type: 'buildBaseSettingModel/editMapNameReducer', payload: data.name });
        //  获取分组列表
        let getGroupListParam = {
          groupId: data.groupId,
          componentType: data.componentType,
        };
        yield put({
          type: 'groupModel/getGroupListEffect',
          payload: getGroupListParam,
        });
        // 获取图层选中标签
        yield put({
          type: 'widgetManageModel/dasTagListFunEffect',
          payload: {
            componentId: data?.id,
            componentType: data?.componentType,
          },
        });
        // -------- 基本设置 end --------
        let allLayers = data?.linkLayers ? [data, ...data?.linkLayers] : [data];
        //所有图层计数
        let layerCount = allLayers?.length || 0;
        //请求表头数据
        for (const index in allLayers) {
          if (allLayers.hasOwnProperty(index)) {
            if (Number(allLayers[index]?.option) !== 0 && allLayers[index]?.linkStyles) {
              layerCount = layerCount + allLayers[index]?.linkStyles?.length || 0;
            }
            if (allLayers[index]?.isDelete === 2 || Number(allLayers[index]?.option) === 0) {
              layerCount = layerCount - 1;
            }
            allLayers[index].option = JSON.parse(allLayers[index].option);
            if (allLayers[index].refresh) {
              allLayers[index].refresh = JSON.parse(allLayers[index].refresh);
            } else {
              allLayers[index].refresh = thisModel.refresh;
            }
            if (!allLayers[0].option) {
              allLayers[index].zIndex = index - 1;
            } else {
              allLayers[index].zIndex = index;
            }
            yield put({
              type: 'getMapDataEffect',
              payload: allLayers[index],
            });
          }
        }
        // yield put({
        //   type: 'loadingLayerCountReducer',
        //   payload: layerCount,
        // });
      } else {
        message.error(res?.data?.message || '获取数据失败');
      }
    },
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /**
     *@method createMapEffect
     * 创建图层组
     * @params {id}
     */
    *createMapEffect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      let groupModel = yield select(state => state.groupModel);
      // let workspaceModel = yield select(state => state.workspaceModel);
      if (!thisModel.linkDataSource) {
        message.warn('请选择数据');
        return;
      }
      let option = {
        dataSource: thisModel.linkDataSource,
        fortmatChart: thisModel.fortmatChartInit,
      };
      let dataType = option?.dataSource.geo_type || '';
      let dataTypeId = 0;
      for (const i in layerDataType) {
        if (Object.hasOwnProperty.call(layerDataType, i)) {
          const element = layerDataType[i];
          if (element.dataType.indexOf(dataType) > -1) {
            dataTypeId = element.id;
            break;
          }
        }
      }
      let params = {
        name: thisModel.linkDataSource.name,
        dataid: thisModel.linkDataSource.id,
        option: JSON.stringify(option),
        type: dataTypeId,
        mapId: defaultDeckMapStyle.toString(),
        style: JSON.stringify(defaultMapOption()),
        zoom: JSON.stringify(initZoom),
        customGroup: JSON.stringify(defaultSection),
        groupId: Number(groupModel.groupId) || 0,
      };
      let res = yield call(buildMapService.createMapService, params, 'workspaceFilter');
      if (!res?.data?.code) {
        if (res.data.data) {
          let paramRouterRedux = {
            id: res.data.data.id.toString(),
            groupId: groupModel.groupId,
          };
          yield put(
            routerRedux.push({
              pathname: '/explore/build-map',
              query: paramRouterRedux,
            }),
          );
        } else {
          message.error(res.data.message);
        }
      } else {
        message.error(res.data.message);
      }
    },
    /**
     *@method addDataLayerEffect
     * 新增关联图层
     * @params {xxx}
     */
    *addDataLayerEffect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      if (!thisModel.linkDataSource) {
        message.warn('请选择数据');
        return;
      }
      let option = {
        dataSource: thisModel.linkDataSource,
        fortmatChart: thisModel.fortmatChartInit,
      };
      let dataType = option?.dataSource.geo_type || '';
      let dataTypeId = 0;
      for (const i in layerDataType) {
        if (Object.hasOwnProperty.call(layerDataType, i)) {
          const element = layerDataType[i];
          if (element.dataType.indexOf(dataType) > -1) {
            dataTypeId = element.id;
            break;
          }
        }
      }
      let param = {
        layerId: Number(thisModel.groupLayerId),
        name: thisModel.linkDataSource.name,
        option: JSON.stringify(option),
        style: JSON.stringify(defaultMapOption()),
        customGroup: JSON.stringify(defaultSection),
        type: dataTypeId, //1:散点图
        refresh: JSON.stringify(thisModel.refresh),
      };
      let res = yield call(buildMapService.addDasLinkLayerService, param, 'workspaceFilter');
      if (!res?.data?.code) {
        let data = res.data.data;
        // console.log('ASFSADFSAD', data);
        data.option = JSON.parse(data.option);
        data.refresh = JSON.parse(data.refresh);
        yield put({
          type: 'getMapDataEffect',
          payload: data,
        });
        message.success('添加成功！');
      }
    },

    /**
     *@method replaceDataLayerEffect
     * 更换数据图层
     * @params {xxx}
     */
    *replaceDataLayerEffect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      if (!thisModel.linkDataSource) {
        message.warn('请选择数据');
        return;
      }
      let option = {
        dataSource: thisModel.linkDataSource,
        fortmatChart: thisModel.fortmatChartInit,
      };
      let dataType = option?.dataSource.geo_type || '';
      let dataTypeId = 0;
      for (const i in layerDataType) {
        if (Object.hasOwnProperty.call(layerDataType, i)) {
          const element = layerDataType[i];
          if (element.dataType.indexOf(dataType) > -1) {
            dataTypeId = element.id;
            break;
          }
        }
      }
      let params = null,
        requestBody = null;
      if (!thisModel.selectDataLayerData?.level) {
        params = {
          layerId: thisModel.groupLayerId.toString(),
          name: thisModel.linkDataSource.name, //	图层名称
          option: JSON.stringify(option),
          type: dataTypeId,
        };
        requestBody = buildMapService.updateMapService;
      } else {
        params = {
          id: thisModel.selectDataLayerData.id, //关联图层id
          name: thisModel.linkDataSource.name, //	图层名称
          option: JSON.stringify(option),
          type: dataTypeId,
        };
        requestBody = buildMapService.upDasLinkLayerService;
      }

      let res = yield call(requestBody, params, 'workspaceFilter');
      if (!res?.data?.code) {
        let data = res.data.data;
        console.log('ASFSADFSAD', data);
        yield put({
          type: 'replaceSelectDataLayerReducer',
        });
        const oldDataLayer = JSON.parse(JSON.stringify(thisModel.selectDataLayerData));
        oldDataLayer.createTime = data.createTime;
        oldDataLayer.name = data.name;
        oldDataLayer.option = JSON.parse(data.option);
        oldDataLayer.type = data.type;
        oldDataLayer.updateTime = data.updateTime;
        oldDataLayer.update_time = data.update_time;
        for (const i in oldDataLayer.linkStyles) {
          if (Object.hasOwnProperty.call(oldDataLayer.linkStyles, i)) {
            oldDataLayer.linkStyles[i].option = JSON.parse(data.option);
            oldDataLayer.linkStyles[i].type = data.type;
            const element = oldDataLayer.linkStyles[i];
            if (element.id !== oldDataLayer.id) {
              // 更新保存option
              yield put({
                type: 'updateLayerStyleEffect',
                updateType: 4,
                updateOption: element,
              });
            }
          }
        }
        // const fIndex = oldDataLayer.linkStyles.findIndex(e => e.id === oldDataLayer.id);
        // if (fIndex !== -1) {
        //   oldDataLayer.linkStyles.splice(fIndex, 1);
        // }
        console.log(oldDataLayer, 'nidongdedinghaoyu');
        // 别删--believe me
        onceIndex = oldDataLayer.zIndex;
        // 待更新
        yield put({
          type: 'getMapDataEffect',
          payload: oldDataLayer,
        });
        // 更新数据维度
        yield put({
          type: 'filterDataModel/resetNullReducer',
        });

        message.success('更换数据成功！');
      }
    },

    //删除对应的图层
    *deleteDataLayerEffect({ payload }, { call, put, select }) {
      // let thisModel = yield select(state => state.buildNewMapModel);
      let param = {
        id: payload?.id,
      };
      let res = yield call(buildMapService.deleteDasLinkLayerService, param);
      if (!res?.data?.code) {
        // let data = res.data?.data;
        yield put({
          type: 'deleteDataLayerReducer',
          payload: payload,
        });
        yield put({
          type: 'deleteMapLayersReducer',
          payload: payload,
        });
        message.success('删除成功');
      }
    },

    //删除主图层(通过更新的方法删除主图层)
    *deleteGroupLayerEffect({ payload }, { call, put, select }) {
      // let thisModel = yield select(state => state.buildNewMapModel);
      let params = {
        layerId: payload?.id.toString(),
        option: '0',
        style: '0',
        isDelete: 2,
      };
      let res = yield call(buildMapService.updateMapService, params);
      if (payload.linkStyles && payload.linkStyles?.length > 0) {
        //   删除图层组的关联图层样式
        let res2 = yield call(buildMapService.delLinkStylesService, {
          layerType: 1,
          linkLayerId: payload?.id,
        });
        if (res2.data.code) {
          message.error(res.data.message);
        }
      }

      if (!res?.data?.code) {
        // const data = res.data.data;
        yield put({
          type: 'deleteDataLayerReducer',
          payload: payload,
        });
        yield put({
          type: 'deleteMapLayersReducer',
          payload: payload,
        });
      } else {
        message.error(res.data.message);
      }
    },

    //删除主图层(通过更新的方法删除主图层)
    *updateGroupLayerEffect({ payload, doType, updateKey }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      let params = null,
        requestBoy = null;
      if (!doType) {
        params = {
          layerId: payload?.id.toString(),
          ...updateKey,
        };
        requestBoy = buildMapService.updateMapService;
      } else {
        params = {
          layerId: Number(thisModel.groupLayerId),
          id: payload?.id,
          ...updateKey,
        };
        requestBoy = buildMapService.upDasLinkLayerService;
      }

      let res = yield call(requestBoy, params);
      if (!res?.data?.code) {
        // const data = res.data.data;
        console.log('updateGroupLayerEffect', payload);
        yield put({
          type: 'updateDataLayerReducer',
          payload: payload,
        });
      } else {
        message.error(res.data.message);
      }
    },

    /**
     *@method create_das_link_layer_style_effect
     * 新增关联图层
     * @params {id}
     */
    *create_das_link_layer_style_effect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      let temVal = thisModel.selectDataLayerData.level === 0 ? 1 : 2;
      let option = thisModel.selectDataLayerData.option;
      let zOrder =
        thisModel.selectDataLayerData?.linkStyles &&
          thisModel.selectDataLayerData?.linkStyles.length > 0
          ? thisModel.selectDataLayerData?.linkStyles[
            thisModel.selectDataLayerData?.linkStyles.length - 1
          ].zOrder + 1
          : 2;
      let dataType = thisModel.selectDataLayerData.option?.dataSource.geo_type || '';
      let dataTypeId = 0;
      for (const i in layerDataType) {
        if (Object.hasOwnProperty.call(layerDataType, i)) {
          const element = layerDataType[i];
          if (element.dataType.indexOf(dataType) > -1) {
            dataTypeId = element.id;
            break;
          }
        }
      }
      //   option.fortmatChart.where = thisModel.fortmatChartInit.where;

      //判断类型
      let param = {
        name: '',
        parentType: temVal, //图层组
        layerId: Number(thisModel.groupLayerId), //图层组id
        customGroup: JSON.stringify(defaultSection), //默认自定义分组
        style: JSON.stringify(defaultMapOption()), //默认样式
        workspaceId: '',
        type: dataTypeId, //1:散点图
        option: JSON.stringify(option),
        zOrder,
        zoom: JSON.stringify(initZoom),
      };
      if (temVal === 2) {
        param.linkLayerId = thisModel.selectDataLayerData.id;
      }
      let res = yield call(
        buildMapService.create_das_link_layer_style_service,
        param,
        'workspaceFilter',
      );
      if (!res?.data?.code) {
        let data = res?.data?.data;
        console.log('渲染图层', data);
        console.log('selectD33rawLayerData', thisModel.selectDrawLayerData);
        let resData = {
          LayerDataFeatures: thisModel.selectDataLayerData.LayerDataFeatures,
          LayerDataGeoJson: thisModel.selectDataLayerData.LayerDataGeoJson,
          dataVisiably: thisModel.selectDataLayerData.dataVisiably,
          initialViewState: thisModel.selectDataLayerData.initialViewState,
          layerData: thisModel.selectDataLayerData.layerData,
          layerTypeStr: thisModel.selectDataLayerData.layerTypeStr,
          tableHeaderData: thisModel.selectDataLayerData.tableHeaderData,
          ...data,
          option: JSON.parse(data.option),
          customGroup: JSON.parse(data.customGroup),
          style: JSON.parse(data?.style),
          zoom: JSON.parse(data.zoom),
          updateTime: data?.updateTime,
          update_time: data?.update_time,
        };
        if (temVal === 2) {
          resData.linkLayerId = data?.linkLayerId;
          resData.parentType = data?.parentType;
        }
        console.log(resData, 'opopixkjmx');
        // ------ 选中新建图层 start ------
        yield put({
          type: 'selectDrawLayerDataReducer',
          payload: resData,
        });
        yield put({
          type: 'filterDataModel/selectDataLayerDataReducer',
          payload: resData,
        });
        // ------ 选中新建图层 end ------
        yield put({
          type: 'updateDrawLayerRedecer',
          doType: 1,
          payload: resData,
        });
      } else {
        message.error(res?.data?.message || '获取数据失败');
      }
    },

    /**
     *@method getMapLayerEffect
     * 获取第一个图层信息
     * @params {id}
     */

    /**  返回值说明
     * @params {camera} 相机
     * @params {componentType} 2  探索类型 空间探索
     * @params {customGroup} 自定义分段
     */
    *getMapLayerEffect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      //判断类型
      let param = {
        daslayerid: Number(thisModel.daslayerId),
      };
      let res = yield call(buildMapService.getMapService, param);
      if (!res?.data?.code) {
        let data = res?.data?.data;
        console.log('getNewMapEffect', data);
        console.log('tucengstyle', JSON.parse(data.style));
        //相机设置，这个地方是一个特殊情况，目前只有第一个图层可以设置相机
        //但是当删除第一个图层以后、其他图层还是需要请求第一个图层获取id去请求，比较特殊
        // // //设置相机视角
        // if (data?.camera) {
        //   let camera = JSON.parse(data.camera);
        //   let newCamera = {
        //     ...camera,
        //     ...FlyToCamera,
        //   };
        //   yield put({ type: 'getFirstViewCameraReducer', payload: newCamera });
        // }
        //查询对应的关联图层（判断有没有对应的关联图层）
        //多图层加载  第一个图层单独加载 linkLayerCount为除去第一个图层 其他图层数量  > 0
        if (data?.linkLayerCount) {
          yield put({
            type: 'getOtherMapLayersEffect',
            payload: data,
          });
        } else {
          //如果只有第一个图层 总图层为1 array
          data.layerType = 1;
          let allLayerData = [data];
          //接下来请求数据
          //从这里开始有多个处理方法  一种  一条一条数据加载  加载完一条地图显示一条
          // 第二种 等所有数据加载完成一起去加载地图
          for (const index in allLayerData) {
            if (allLayerData.hasOwnProperty(index)) {
              console.log('第一个图层', allLayerData[index]);
              yield put({
                type: 'getMapDataEffect',
                payload: allLayerData[index],
              });
            }
          }
        }
        // //获取mapstyle  也就是  data.style
        // yield put({
        //   type: 'getMapStyleReducer',
        //   payload: data,
        // });
        // /**
        //  *兼容以前  style === "0"  为空的时候默认样式
        //  *有可能  data.style里面的其中一项为空
        //  * mapLayerStyle 也应该是最全面的 目前应该包含12个图层
        //  */
        // if (data.style === '0' || !data.style) {
        //   data.style = JSON.stringify(mapLayerStyle);
        // } else {
        //   if (data?.style) {
        //     let style = JSON.parse(style);
        //     for (let i in mapLayerStyle) {
        //       if (typeof style[i] === 'object') {
        //         for (let j in mapLayerStyle[i]) {
        //           if (!style[i][j]) {
        //             style[i][j] = mapLayerStyle[i][j];
        //           }
        //         }
        //       }
        //       if (!style[i]) {
        //         style[i] = mapLayerStyle[i];
        //       }
        //     }
        //     data.style = JSON.stringify(style);
        //   }
        // }
        // //初始化多图层分段 customGroup  zoom
        // //以前创建的图层里面没有 所以获取的时候给默认值  也就是你初始化赋值
        // if (!data.customGroup) {
        //   data.customGroup = JSON.stringify(mapLayerSection);
        // }
        // if (!data.zoom) {
        //   data.zoom = JSON.stringify(initZoom);
        // }
        // //设置默认的样式
        // yield put({
        //   type: 'setMapActiveLayerId',
        //   payload: { layerId: data?.id, layerType: 1 },
        // });
        // //设置默认的渲染模式 通用
        // yield put({
        //   type: 'setLayerBLlending',
        //   payload: data?.renderMode || 'normal',
        // });
        // //统计所有数据的属性
        // yield put({
        //   type: 'setMapAllLayerOption',
        //   payload: [{ ...data, layerType: 1 }],
        // });
        // //统计总共有多少图层
        // yield put({
        //   type: 'setMapLayerAllArr',
        //   payload: [
        //     {
        //       layerId: data?.id,
        //       layerName: data?.name,
        //       layerType: 1,
        //     },
        //   ],
        // });
        // //获取主图层对应的表头
        // yield put({
        //   type: 'getTableFeildEffect',
        //   payload: { ...data, layerType: 1 },
        // });
        // //设置相机视角
        // if (data.camera) {
        //   let camera = JSON.parse(data.camera);
        //   //设置后的相机位置
        //   yield put({ type: 'setViewCamera', payload: camera });
        //   //更新初次加载的视角
        //   let initialViewState = {
        //     ...camera,
        //     ...{
        //       transitionInterpolator: new FlyToInterpolator(),
        //       transitionDuration: 3000,
        //     },
        //   };
        //   //更新后的位置
        //   yield put({ type: 'setinitialViewState', payload: initialViewState });
        // }
        // // -------------------- 分组相关 start --------------------
        // // 分组id
        // // yield put({
        // //   type: 'groupModel/groupIdReducer',
        // //   payload: res.data.data.groupId,
        // // });
        // // 获取分组列表
        // // let getGroupListParam = {
        // //   groupId: res.data.data.groupId,
        // //   componentType: 2,
        // // };
        // // yield put({
        // //   type: 'groupModel/getGroupListEffect',
        // //   payload: getGroupListParam,
        // // });
        // // -------------------- 分组相关 end --------------------
        // // 获取标签
        // // let param = {
        // //   componentId: res.data.data.id,
        // //   componentType: 2,
        // // };
        // // yield put({
        // //   type: 'widgetManageModel/dasTagListFunEffect',
        // //   payload: param,
        // // });
        // //设置图层样式
        // yield put({
        //   type: 'setDeckMapStyle',
        //   payload: data?.mapId ? parseInt(data?.mapId) : parseInt(defaultDeckMapStyle),
        // });
        // let mapAllStyleArr = thisModel.mapAllStyleArr;
        // let region = '世界';
        // for (let i in mapAllStyleArr) {
        //   if (mapAllStyleArr[i].id === parseInt(data.mapId)) {
        //     //设置对应的地图地址
        //     yield put({
        //       type: 'setRegionStyle',
        //       payload: mapAllStyleArr[i].region,
        //     });
        //     region = mapAllStyleArr[i].region;
        //     break;
        //   }
        // }
        // //设置对应世界的地图风格
        // let mapStyleArr = [];
        // for (let i in mapAllStyleArr) {
        //   if (mapAllStyleArr[i].region === region) {
        //     mapStyleArr.push(mapAllStyleArr[i]);
        //   }
        // }
        // yield put({ type: 'setMapStyle', payload: mapStyleArr });
        // //设置图层名称
        // yield put({ type: 'editMapNameReducer', payload: data.name });
      } else {
        message.error(res?.data?.message || '获取数据失败');
      }
    },

    /**
     *@method getOtherMapLayersEffect
     * 除第一图层外的其他图层
     * @params {layerId}
     */
    *getOtherMapLayersEffect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      let firstLayerData = payload;
      // layerId 类型可查文档确定类型  最好校验下
      let param = {
        layerId: thisModel.groupLayerId.toString(),
      };
      let res = yield call(buildMapService.getAllDasLinkLayerService, param);
      console.log('getOtherMapLayersEffect', res.data.data);
      if (!res?.data?.code) {
        let otherLayersData = res?.data?.data || [];
        //第一图层请求和其他图层不同，需要添加一个标识符 这个参数也可以服务端添加 目前是前端添加
        firstLayerData.layerType = 1;
        //第一个图层数据  和  第二个图层数据合并成一个数组
        let allLayerData = [firstLayerData, ...otherLayersData];
        console.log('allLayerData', allLayerData);
        //接下来请求数据
        //从这里开始有多个处理方法  一种  一条一条数据加载  加载完一条地图显示一条
        // 第二种 等所有数据加载完成一起去加载地图
        for (const index in allLayerData) {
          if (allLayerData.hasOwnProperty(index)) {
            console.log('其他图层', allLayerData[index]);
            yield put({
              type: 'getMapDataEffect',
              payload: allLayerData[index],
            });
          }
        }

        // let linkData = res.data.data;
        // let { mapLayerAllArr, mapAllLayerOption, mapActiveLayerId } = thisModel;
        // //如果主图层被删除设置默认的样式
        // if (!mapActiveLayerId) {
        //   yield put({
        //     type: 'buildMapModel/setMapActiveLayerId',
        //     payload: { layerId: linkData[0].id, layerType: 2 },
        //   });
        // }
        // //循环请求多图层
        // for (let i in linkData) {
        //   //统计关联的图层
        //   let option = JSON.parse(linkData[i].option);
        //   let { fortmatChart, dataSource } = option;
        //   fortmatChart.catalog = dataSource.catalog;
        //   fortmatChart.features = dataSource.geomesa_name;
        //   option.fortmatChart = fortmatChart;
        //   linkData[i].option = JSON.stringify(option);
        //   thisModel = yield select(state => state.buildMapModel);
        //   mapLayerAllArr.push({
        //     layerId: linkData[i].id,
        //     layerName: linkData[i].name,
        //     layerType: 2,
        //   });
        //   if (linkData[i].style) {
        //     let style = JSON.parse(linkData[i].style);
        //     for (let i in thisModel.style) {
        //       if (typeof style[i] === 'object') {
        //         for (let j in thisModel.style[i]) {
        //           if (!style[i][j]) {
        //             style[i][j] = thisModel.style[i][j];
        //           }
        //         }
        //       }
        //       if (!style[i]) {
        //         style[i] = thisModel.style[i];
        //       }
        //     }
        //     linkData[i].style = JSON.stringify(style);
        //   }
        //   if (!linkData[i].customGroup) {
        //     linkData[i].customGroup = JSON.stringify(mapLayerSection);
        //   }
        //   mapAllLayerOption.push({ ...linkData[i], layerType: 2 });
        //   yield put({
        //     type: 'getTableFeildEffect',
        //     payload: { ...linkData[i], layerType: 2 },
        //   });
        // }
        // yield put({
        //   type: 'setMapLayerAllArr',
        //   payload: mapLayerAllArr,
        // });
        // yield put({ type: 'setMapAllLayerOption', payload: mapAllLayerOption });
      } else {
        message.error(res?.data?.message || '获取数据失败');
      }
    },

    /**
     *@method getMapDataEffect
     * 获取表头数据
     * @params {dataSource}
     * 判断处理对应的公共数据和私有数据的请求
     */
    *getMapDataEffect({ payload }, { call, put, select }) {
      let oneLayerData = payload;
      console.log('oneLayerData', oneLayerData);
      //容错 目前判断不完全  因为转json  所以也需要判断是不是object
      if (!oneLayerData?.option) {
        return;
      }
      let { dataSource, fortmatChart } = oneLayerData.option;
      console.log('daaadadataSource', dataSource);
      //获取数据
      let params = {
        id: dataSource?.id,
        search_type: DataSearchType(dataSource),
      };
      console.log('asfda33442sfsadf', params);
      //整理请求的数据  理论不应该在这里
      fortmatChart.search_type = DataSearchType(dataSource);
      fortmatChart.catalog = dataSource?.catalog;
      fortmatChart.features = dataSource?.geomesa_name || dataSource?.geomesaName;
      //   oneLayerData.option = JSON.stringify({
      //     dataSource: dataSource,
      //     fortmatChart: fortmatChart,
      //   });
      //判断是不是共享数据
      let res = null;
      if (
        dataSource?.isPublic &&
        dataSource?.content !== 'poi数据' &&
        dataSource?.publisher === '3ea670238dbf4041aa4d006aaee837e3'
      ) {
        res = yield call(buildMapService.getMapDataTabTitleServer, params);
      } else {
        res = yield call(buildMapService.getTableFieldService, params);
      }
      if (!res?.data?.code) {
        let data = res.data.data;
        console.log('getMapDataEffect', data);
        // let curindex = 0;
        if (res.data.data?.length < 1) {
          return;
        }
        // if (oneLayerData.zIndex > curindex) {
        //   oneLayerData.zIndex = oneLayerData.zIndex - 1;
        // }
        //od线按时间排序
        for (let i in data) {
          if (data[i].key === 'field_dtg') {
            fortmatChart.order = [];
            let orderObj = {
              name: 'field_dtg',
              index: data[i].index,
              type: 0,
              operator: 1,
            };
            fortmatChart.order.push(orderObj);
            break;
          }
        }
        oneLayerData.option = {
          dataSource: dataSource,
          fortmatChart: fortmatChart,
        };
        //请求头请求完成后需要请求数据体
        yield put({
          type: 'getMapBodyDataEffect',
          payload: { oneLayerData: oneLayerData, tableHeaderData: data },
        });
        //od线按时间排序
        // for (let i in data) {
        //   if (data[i].key === 'field_dtg') {
        //     fortmatChart.order = [];
        //     let orderObj = {
        //       name: 'field_dtg',
        //       index: data[i].index,
        //       type: 0,
        //       operator: 1,
        //     };
        //     fortmatChart.order.push(orderObj);
        //     break;
        //   }
        // }
        // payload.option = JSON.stringify({
        //   dataSource: dataSource,
        //   fortmatChart: fortmatChart,
        // });
        // console.log('getTableFeildEffect', data);
        // yield put({
        //   type: 'loadMapEffect',
        //   payload: { ...payload, layerTableArr: data },
        // });
      } else {
        if (res.data.message !== 'ok') {
          message.error(res.data.message);
        }
      }
    },
    /**
     *@method getMapBodyDataEffect
     * 通过表头获取其他内容获取
     * @params {id}
     */
    *getMapBodyDataEffect({ payload }, { call, put, select }) {
      let tableHeaderData = payload?.tableHeaderData;
      let oneLayerData = payload?.oneLayerData;
      // let thisModel = yield select(state => state.buildNewMapModel);
      //这里也需要兼容
      let { dataSource, fortmatChart } = oneLayerData.option;
      fortmatChart = doFortmatChart(tableHeaderData, fortmatChart, dataSource);
      let res = yield call(buildMapService.getMapDataService, fortmatChart);
      if (!res?.data?.code) {
        let data = res.data.data;
        let table_head = dataSource?.table_head ? JSON.parse(dataSource.table_head) : {};
        if (table_head?.spaceType === 'polygon' && table_head?.regionMapping) {
          //面数据需要特殊处理
          yield put({
            type: 'getPolygonMapBodyDataEffect',
            payload: { ...oneLayerData, layerData: data, tableHeaderData: tableHeaderData },
          });
        } else {
          console.log('getMapBodyDataEffect', payload);
          if (oneLayerData?.level === 2) {
            console.log('asdfa3sdfasdfsdaf', oneLayerData);
            yield put({
              type: 'loadMapReducer1',
              payload: { ...oneLayerData, layerData: data, tableHeaderData: tableHeaderData },
            });
          } else {
            //加载地图
            yield put({
              type: 'loadMapReducer',
              payload: { ...oneLayerData, layerData: data, tableHeaderData: tableHeaderData },
            });
          }
        }
      } else {
        message.error(res.data.message);
      }
    },

    //面图层
    *getPolygonMapBodyDataEffect({ payload }, { call, put, select }) {
      let tableHeaderData = payload?.tableHeaderData;
      let layerData = payload?.layerData;
      let oneLayerData = payload;
      // let thisModel = yield select(state => state.buildNewMapModel);
      let cityCode = [];
      for (let i in layerData) {
        if (layerData[i].field_adcode_polygon) {
          if (cityCode.indexOf(layerData[i].field_adcode_polygon) < 0) {
            cityCode.push(layerData[i].field_adcode_polygon);
          }
        }
      }
      let params = {
        adcodes: cityCode,
        retType: 2,
      };
      let res = yield call(buildMapService.getSpaceTypeDataService, params);
      if (!res?.data?.code) {
        let adcode = [];
        let initGeoJson = JSON.stringify({ type: 'MultiPolygon', coordinates: [] });
        let geojsonData = res.data.data;
        for (let i in geojsonData) {
          adcode.push(geojsonData[i].adcode);
        }
        for (let j in layerData) {
          if (layerData[j].field_adcode_polygon) {
            let index = adcode.indexOf(layerData[j].field_adcode_polygon);
            layerData[j].geojson = geojsonData[index]?.geojson || initGeoJson;
          } else {
            layerData[j].geojson = initGeoJson;
          }
        }
        if (oneLayerData?.level === 2) {
          yield put({
            type: 'loadMapReducer1',
            payload: { ...oneLayerData, layerData: layerData, tableHeaderData: tableHeaderData },
          });
        } else {
          yield put({
            type: 'loadMapReducer',
            payload: { ...oneLayerData, layerData: layerData, tableHeaderData: tableHeaderData },
          });
        }
      } else {
        message.error(res.data.message);
      }
    },

    //处理数据改变对应的图层
    *loadMapReducer({ payload }, { call, put, select }) {
      let layerCon = payload;
      let layersConfig = null;
      let thisModel = yield select(state => state.buildNewMapModel);
      //地图数据
      // let layerData = layerCon.layerData;
      console.log('layerData222', payload);
      // let initialViewState = null;
      //geojson转换
      layerCon.LayerDataGeoJson = layerDataGeoJson(layerCon, payload?.tableHeaderData);
      layerCon.LayerDataFeatures = layerCon.LayerDataGeoJson.features;
      // console.log('FeatureCollection', geoJsonData);
      // alert(payload.layerType);
      let layerType = mapTypeFun(layerCon.type);
      // alert(layerType);
      // let layerType = 'ScatterLayer';
      layerCon.layerTypeStr = layerType;
      console.log('loadMapReducer', layerCon);
      layerCon.dataVisiably = layerCon?.visibility;

      // 临时-wwq
      // yield put({
      //   type: 'buildTempModel/mapStyleOptionReducer',
      //   payload: layerCon.style,
      // });
      // yield put({
      //   type: 'buildTempModel/customGroupReducer',
      //   payload: layerCon.customGroup,
      // });
      // 临时-wwq----end
      layerCon = layerProCon(layerCon);
      // if (!layerCon?.level) {
      //   if (thisModel.saveCamera) {
      //     layerCon.initialViewState.latitude =
      //       thisModel.saveCamera?.latitude || layerCon.initialViewState?.latitude;
      //     layerCon.initialViewState.longitude =
      //       thisModel.saveCamera?.longitude || layerCon.initialViewState?.longitude;
      //     layerCon.initialViewState.pitch =
      //       thisModel.saveCamera?.pitch || layerCon.initialViewState?.pitch;
      //     layerCon.initialViewState.zoom =
      //       thisModel.saveCamera?.zoom || layerCon.initialViewState?.zoom;
      //     layerCon.initialViewState.bearing =
      //       thisModel.saveCamera?.bearing || layerCon.initialViewState?.bearing;
      //   }
      //   console.log('asdsfsfsadfasdfasdf', layerCon.initialViewState, 'ssss', thisModel.saveCamera);
      //   layerCon.initialViewState = { ...layerCon.initialViewState, ...thisModel.saveCamera };
      // }

      yield put({
        type: 'getAllMapLayersReducer',
        payload: layerCon,
      });
      // setMapView;
      console.log('shuchukou', layerCon);
      // 加载图层临时
      if (layerCon?.isDelete === 2) {
      } else {
        layersConfig = loadLayerFunction(layerCon);
        // console.log('asdfsadfsd', layersConfig);
        yield put({
          type: 'addDeckerLayerReducers',
          payload: [{ ...layersConfig }],
        });
      }

      //构建渲染图层
      if (layerCon?.linkStyles) {
        for (const index in layerCon?.linkStyles) {
          if (layerCon?.linkStyles.hasOwnProperty(index)) {
            let linkLayerCon = layerCon?.linkStyles[index];
            if (linkLayerCon.id === layerCon.id) {
              layerCon.linkStyles[index] = layerCon;
              continue;
            }
            linkLayerCon.LayerDataGeoJson = layerCon.LayerDataGeoJson;
            linkLayerCon.LayerDataFeatures = layerCon.LayerDataFeatures;
            linkLayerCon.tableHeaderData = layerCon.tableHeaderData;
            linkLayerCon.layerData = layerCon.layerData;
            let layerType = mapTypeFun(linkLayerCon.type);
            linkLayerCon.layerTypeStr = layerType;
            //在这里可以获取数据范围赋值视角
            let initialViewState = {
              // ...FlyToCamera,
            };
            linkLayerCon.initialViewState = initialViewState;
            linkLayerCon.dataVisiably = layerCon?.visibility;
            if (linkLayerCon?.option) {
              console.log('asdfsdafsadfdsa', linkLayerCon);
              linkLayerCon = layerProCon(linkLayerCon);
              yield put({
                type: 'getMapDataEffect',
                payload: linkLayerCon,
              });
            } else {
              //持续兼容
              linkLayerCon = layerProCon(linkLayerCon);
              yield put({
                type: 'getAllMapLayersReducer',
                payload: linkLayerCon,
              });
              // 加载图层临时
              layersConfig = loadLayerFunction(linkLayerCon);
              yield put({
                type: 'addDeckerLayerReducers',
                payload: [{ ...layersConfig }],
              });
              // layerCon.linkStyles = linkLayerCon;
              console.log('shuchukou', linkLayerCon);
            }
          }
        }
      }
      //设置图层样式
      yield put({
        type: 'setDeckMapStyle',
        payload: layerCon?.mapId ? parseInt(layerCon?.mapId) : parseInt(defaultDeckMapStyle),
      });

      //获取数据图层
      yield put({
        type: 'getMapLayersReducer',
        payload: layerCon,
      });
      //关联 filterDataModel
      //   console.log(onceIndex, ',owoijxiilwnljkslkjslkj');
      //   当前判断是确保初始化过滤回显的是当前选中数据
      if (onceIndex >= Number(layerCon.zIndex)) {
        onceIndex = layerCon.zIndex;
        yield put({
          type: 'filterDataModel/getMapLayersReducer',
          payload: layerCon.linkStyles[0],
        });
      }

      if (thisModel.mapHandle && layerCon?.visibility !== 1) {
        // 添加图层  这里传一个最大的参数就可以了
        // thisModel.mapHandle.changeLayer(
        //   layerType,
        //   mapStyle,
        //   layerDataSource,
        //   `${layerCon.id}_${layerCon.layerType}`,
        //   layerCon,
        // );
      }
      /*++++++++++++临时注释+++++++++++++++*/
      // let { mapAllLayerOption, mapActiveLayerId } = thisModel;
      // for (let i in mapAllLayerOption) {
      //   if (
      //     mapAllLayerOption[i].id === payload.id &&
      //     mapAllLayerOption[i].layerType === payload.layerType
      //   ) {
      //     mapAllLayerOption[i] = payload;
      //   }
      // }
      // yield put({ type: 'setMapAllLayerOption', payload: mapAllLayerOption });
      // //判断当前加载是不是选中图层的数据  第一个默认图层
      // if (
      //   payload.id === mapActiveLayerId.layerId &&
      //   payload.layerType === mapActiveLayerId.layerType
      // ) {
      //   yield put({ type: 'setActiveMapStyle', payload: { cameraType: true } });
      // }
      //   }
    },

    //处理数据改变对应的图层
    *loadMapReducer1({ payload }, { call, put, select }) {
      let layerCon = payload;
      let layersConfig = null;
      let thisModel = yield select(state => state.buildNewMapModel);
      //地图数据
      // let layerData = layerCon.layerData;
      // let initialViewState = null;
      //geojson转换
      layerCon.LayerDataGeoJson = layerDataGeoJson(layerCon, payload?.tableHeaderData);
      layerCon.LayerDataFeatures = layerCon.LayerDataGeoJson.features;
      let layerType = mapTypeFun(layerCon.type);
      // alert(layerType);
      // let layerType = 'ScatterLayer';
      console.log('loadMapReducer', layerCon);
      layerCon.layerTypeStr = layerType;
      // layerCon.dataVisiably = layerCon?.visibility;
      // alert(layerCon?.dataVisiably);
      layerCon = layerProCon(layerCon);
      // setMapView;
      console.log('shuchukou11111', layerCon);
      layersConfig = loadLayerFunction(layerCon);
      console.log('asdfsadfsd', layersConfig);
      yield put({
        type: 'addDeckerLayerReducers',
        payload: [{ ...layersConfig }],
      });
      //获取数据图层
      yield put({
        type: 'getMapLayersDefaultReducer',
        payload: layerCon,
      });
      //   当前判断是确保初始化过滤回显的是当前选中数据
      if (onceIndex >= Number(layerCon.zIndex)) {
        onceIndex = layerCon.zIndex;
        yield put({
          type: 'filterDataModel/getMapLayersReducer',
          payload: layerCon.linkStyles[0],
        });
      }
      if (thisModel.mapHandle && layerCon?.visibility !== 1) {
      }
    },
    /**
     *@method update_das_link_layer_style_effect
     *  更新关联图层样式
     * @params {id}
     */
    *update_das_link_layer_style_effect({ payload, updateKey }, { call, put, select }) {
      // let thisModel = yield select(state => state.buildNewMapModel);
      let param = {
        id: Number(payload?.id),
        ...updateKey,
      };
      let res = yield call(buildMapService.update_das_link_layer_style_service, param);
      if (!res?.data?.code) {
        // let data = res?.data?.data;
        console.log('update_das_link_layer_style_service', payload);
        yield put({
          type: 'updateDrawLayerRedecer',
          doType: 3,
          payload: payload,
        });
        // let layerType = mapTypeFun(payload.type);
        // payload.layerTypeStr = layerType;
        // let layersConfig = loadLayerFunction(payload);
        // yield put({
        //   type: 'addDeckerLayerReducers',
        //   payload: [{ ...layersConfig }],
        // });
        // console.log("payssdsd",);
      } else {
        message.error(res?.data?.message || '更新关联图层失败');
      }
    },
    /**
     *@method remove_das_link_layer_style_effect
     *   删除关联图层样式风格
     * @params {id}
     */
    *remove_das_link_layer_style_effect({ payload }, { call, put, select }) {
      // let thisModel = yield select(state => state.buildNewMapModel);
      //判断类型
      let param = {
        id: payload?.id,
      };
      let res = yield call(buildMapService.remove_das_link_layer_style_service, param);
      if (!res?.data?.code) {
        let data = res?.data?.data;
        console.log('remove_das_link_layer_style_effect', data);
        yield put({
          type: 'updateDrawLayerRedecer',
          doType: 2,
          payload: payload,
        });
        yield put({
          type: 'deleteMapLayersReducer',
          payload: payload,
        });
      } else {
        message.error(res?.data?.message || '删除关联图层失败');
      }
    },
    /**
     *@method copy_das_link_layer_style_effect
     *   复制关联图层样式风格
     * @params {id}
     */
    *copy_das_link_layer_style_effect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      let zOrder =
        thisModel.selectDataLayerData.linkStyles &&
          thisModel.selectDataLayerData.linkStyles.length > 0
          ? thisModel.selectDataLayerData.linkStyles[
            thisModel.selectDataLayerData.linkStyles.length - 1
          ].zOrder + 1
          : 2;
      //判断类型
      let param = {
        id: payload?.id,
        name: `${mapLayerTypeName[payload.layerTypeStr]}-副本`,
        zOrder,
      },
        requestBody = null;
      if (payload.level !== 2) {
        if (!payload.level) {
          requestBody = buildMapService.copy_daslayer_service;
        } else {
          requestBody = buildMapService.copy_das_link_layer_service;
        }
      } else {
        requestBody = buildMapService.copy_das_link_layer_style_service;
      }
      let res = yield call(requestBody, param);
      if (!res?.data?.code) {
        let data = res?.data?.data;
        let copyLayer = JSON.parse(JSON.stringify(payload));
        console.log('copy_das_link_layer_style_effect', data);
        copyLayer.createTime = data.createTime;
        copyLayer.id = data.id;
        copyLayer.name = data.name;
        copyLayer.layerId = thisModel.groupLayerId;
        copyLayer.linkLayerId = data.linkLayerId;
        copyLayer.updateTime = data.updateTime;
        copyLayer.zOrder = data.zOrder;
        copyLayer.level = data.level;
        copyLayer.parentType = data.parentType;
        console.log('copyLayer', copyLayer);
        yield put({
          type: 'updateDrawLayerRedecer',
          doType: 1,
          payload: copyLayer,
        });
      } else {
        message.error(res?.data?.message || '复制关联图层失败');
      }
    },
    /**
     *@method updateOrderLayerEffect
     *   批次更新图层样式z轴序
     * @params {id}
     */
    *updateOrderLayerEffect({ payload }, { call, put, select }) {
      let res = yield call(buildMapService.updateOrderLayerService, payload);
      if (!res?.data?.code) {
      } else {
        message.error(res?.data?.message);
      }
    },
    /**
     * 保存样式修改-----只做修改后的存储
     * @method updateLayerStyleEffect
     * @param {updateType} 0:图表样式；1:修改自定义分组；2:可见层级；3:渲染模式；4:修改option（针对更换数据统一修改图层option）
     */
    *updateLayerStyleEffect({ updateType, updateOption }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      let updateObj = {};
      let params = null,
        requestBody = null,
        updateKey = null;
      // 获取修改图层
      if (updateOption) {
        updateObj = updateOption;
      } else {
        updateObj = thisModel.selectDrawLayerData;
      }
      // 加工修改参数
      if (!updateType) {
        updateKey = { style: JSON.stringify(thisModel.mapStyle) };
      } else if (updateType === 1) {
        updateKey = { customGroup: JSON.stringify(thisModel.selectDrawLayerData.customGroup) };
      } else if (updateType === 2) {
        updateKey = { zoom: JSON.stringify(thisModel.selectDrawLayerData.zoom) };
      } else if (updateType === 3) {
        updateKey = { renderMode: thisModel.selectDrawLayerData.renderMode };
      } else {
        updateKey = {
          option: JSON.stringify({
            dataSource: thisModel.linkDataSource,
            fortmatChart: thisModel.fortmatChartInit,
          }),
          type: updateOption.type,
        };
      }
      if (!updateObj.level) {
        params = {
          layerId: thisModel.groupLayerId.toString(),
          ...updateKey,
        };
        requestBody = buildMapService.updateMapService;
      } else if (updateObj.level === 1) {
        params = {
          layerId: Number(thisModel.groupLayerId),
          id: updateObj.id,
          ...updateKey,
        };
        requestBody = buildMapService.upDasLinkLayerService;
      } else {
        params = {
          id: Number(updateObj.id),
          ...updateKey,
        };
        requestBody = buildMapService.update_das_link_layer_style_service;
      }

      let res = yield call(requestBody, params);
      if (!res?.data?.code) {
        console.log(`level为${updateObj.level}的样式保存成功`);
      } else {
        message.error(res.data.message);
      }
    },
    /**
     * 场景设置------保存视角
     * @method updateSceneEffect
     * @param {}
     */
    *updateSceneEffect({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.buildNewMapModel);
      let params = {
        layerId: thisModel.groupLayerId.toString(),
        ...payload,
      };
      let res = yield call(buildMapService.updateMapService, params);
      if (!res?.data?.code) {
        console.log(`保存成功`);
        console.log(JSON.parse(payload.camera), '1982u982');
        // yield put({
        //   type: 'getIviewStateReducer',
        //   payload: JSON.parse(payload.camera),
        // });
        yield put({
          type: 'setCameraReducer',
          payload: JSON.parse(payload.camera),
        });
      } else {
        message.error(res.data.message);
      }
    },
  },
  reducers: {
    //获取探索id
    getDaslayerIdReducer(state, action) {
      state.daslayerId = action.payload;
      return { ...state };
    },
    //第一个图层的视角，也是主视角
    getFirstViewCameraReducer(state, action) {
      state.firstViewCamera = action.payload;
      console.log('state.firstViewCamera', state.firstViewCamera);
      return { ...state };
    },
    // 新增方法--用来加工mapLayers不同过滤数据---wangwenqi
    getMapLayersDefaultReducer(state, action) {
      for (const i in state.mapLayers) {
        if (Object.hasOwnProperty.call(state.mapLayers, i)) {
          const element = state.mapLayers[i];
          // 图层组的关联图层样式
          if (element.id === Number(element.layerId) && action.payload.parentType === 1) {
            for (const j in element.linkStyles) {
              if (Object.hasOwnProperty.call(element.linkStyles, j)) {
                const elem = element.linkStyles[j];
                if (elem.id === action.payload.id) {
                  state.mapLayers[i].linkStyles[j] = action.payload;
                }
              }
            }
          }
          // 关联图层的关联图层样式
          if (action.payload.parentType === 2) {
            for (const j in element.linkStyles) {
              if (Object.hasOwnProperty.call(element.linkStyles, j)) {
                const elem = element.linkStyles[j];
                if (elem.id === action.payload.id) {
                  state.mapLayers[i].linkStyles[j] = action.payload;
                }
              }
            }
          }
        }
      }
      // 更新选中的数据层
      for (const k in state.selectDataLayerData.linkStyles) {
        if (Object.hasOwnProperty.call(state.selectDataLayerData.linkStyles, k)) {
          const element = state.selectDataLayerData.linkStyles[k];
          if (element.id === action.payload.id) {
            state.selectDataLayerData.linkStyles[k] = action.payload;
          }
        }
      }
      // 更新选中图层的数据
      if (action.payload.id === state.selectDrawLayerData.id) {
        state.selectDrawLayerData = action.payload;
      }
      console.log(state.mapLayers, 'ddfsdxx');
      return { ...state };
    },
    getMapLayersReducer(state, action) {
      console.log(action.payload, 'owijxnidsiwonimina');
      for (const i in state.mapLayers) {
        if (state.mapLayers.hasOwnProperty(i)) {
          if (Number(action.payload?.id) === Number(state.mapLayers[i]?.id)) {
            if (
              action.payload?.updateTime !== state.mapLayers[i]?.updateTime ||
              action.payload?.update_time !== state.mapLayers[i]?.update_time
            ) {
              console.log(action.payload.name, 'whatxjijmms');
              state.mapLayers[i].name = action.payload.name;
              state.mapLayers[i].LayerDataFeatures = action.payload.LayerDataFeatures;
              state.mapLayers[i].LayerDataGeoJson = action.payload.LayerDataGeoJson;
              state.mapLayers[i].tableHeaderData = action.payload.tableHeaderData;
              state.mapLayers[i].layerData = action.payload.layerData;
              state.mapLayers[i].initialViewState = action.payload.initialViewState;
              state.mapLayers[i].option = action.payload.option;
              state.mapLayers[i].type = action.payload.type;
              state.mapLayers[i].updateTime = action.payload.updateTime;
              state.mapLayers[i].update_time = action.payload.update_time;
              for (const j in state.mapLayers[i].linkStyles) {
                if (state.mapLayers[i].linkStyles.hasOwnProperty(j)) {
                  const element = state.mapLayers[i].linkStyles[j];
                  if (state.mapLayers[i].id === element.id) {
                    state.mapLayers[i].linkStyles[j].name = action.payload.name;
                    state.mapLayers[i].linkStyles[j].LayerDataFeatures =
                      action.payload.LayerDataFeatures;
                    state.mapLayers[i].linkStyles[j].LayerDataGeoJson =
                      action.payload.LayerDataGeoJson;
                    state.mapLayers[i].linkStyles[j].tableHeaderData =
                      action.payload.tableHeaderData;
                    state.mapLayers[i].linkStyles[j].layerData = action.payload.layerData;
                    state.mapLayers[i].linkStyles[j].initialViewState =
                      action.payload.initialViewState;
                    state.mapLayers[i].linkStyles[j].option = action.payload.option;
                    state.mapLayers[i].linkStyles[j].type = action.payload.type;
                    state.mapLayers[i].linkStyles[j].updateTime = action.payload.updateTime;
                    state.mapLayers[i].linkStyles[j].update_time = action.payload.update_time;
                    break;
                  }
                }
              }
              console.log(state.mapLayers, 'mxinlamnxiunsiojdflijas');
              if (state.replaceSelectDataLayer) {
                state.iviewState = action.payload?.initialViewState;
                state.replaceSelectDataLayer = false;
              }
              return { ...state };
            }
          }
        }
      }

      // 构建空间图层数据
      let linkStyles = action.payload?.linkStyles || [];
      if (action.payload.isDelete !== 2) {
        for (const key in linkStyles) {
          if (linkStyles.hasOwnProperty(key)) {
            if (Number(key) !== linkStyles.length - 1) {
              if (
                action.payload?.zOrder > linkStyles[key].zOrder &&
                action.payload?.zOrder < linkStyles[Number(key) + 1].zOrder
              ) {
                // 中间
                linkStyles.splice(Number(key) + 1, 0, {
                  ...action.payload,
                  linkStyles: [],
                  layerLevel: 1,
                });
                break;
              }
            }
            if (
              action.payload?.zOrder > linkStyles[key].zOrder &&
              Number(key) === linkStyles.length - 1
            ) {
              // 最后
              linkStyles.splice(Number(key) + 1, 0, {
                ...action.payload,
                linkStyles: [],
                layerLevel: 1,
              });
              break;
            }
            if (action.payload?.zOrder < linkStyles[key].zOrder) {
              // 最前
              linkStyles.splice(key, 0, { ...action.payload, linkStyles: [], layerLevel: 1 });
              break;
            }
          }
        }
        // 初始化linkStyles中没有图层
        if (linkStyles.length === 0) {
          linkStyles.push({ ...action.payload, linkStyles: [] });
        }
      }
      action.payload.linkStyles = linkStyles;
      state.mapLayers.push(action.payload);
      if (Number(action.payload.zIndex) === 0) {
        state.selectDataLayerData = action.payload;
        // console.log('state.selectDataLayerData', state.selectDataLayerData);
        state.iviewState = { ...state.selectDataLayerData?.initialViewState, ...state.saveCamera };
        // if (!state.selectDrawLayerData) {
        //   if (state.selectDataLayerData?.linkStyles?.length > 0) {
        //     let selectDataAllLayer = [
        //       state.selectDataLayerData,
        //       ...state.selectDataLayerData?.linkStyles,
        //     ];
        //     state.selectDrawLayerData = selectDataAllLayer[0];
        //     state.mapStyle = state.selectDrawLayerData?.style;
        //   } else {
        //     state.selectDrawLayerData = state.selectDataLayerData;
        //     state.mapStyle = state.selectDrawLayerData?.style;
        //   }
        // }
        state.selectDrawLayerData = state.selectDataLayerData.linkStyles[0];
        state.mapStyle = state.selectDrawLayerData?.style;
      }
      // console.log('layerConall', state.mapLayers);
      return { ...state };
    },
    getAllMapLayersReducer(state, action) {
      state.allMapLayers.push(action.payload);
      for (const i in state.allMapLayers) {
        if (state.allMapLayers.hasOwnProperty(i)) {
          if (Number(state.allMapLayers[i].id) === Number(action.payload?.id)) {
            state.allMapLayers[i] = action.payload;
            return { ...state };
          }
        }
      }
      console.log('aaalllllll', state.allMapLayers);
      if (!state.mapStyle && state.allMapLayers?.length > 0) {
        state.mapStyle = state.allMapLayers[0].style;
        console.log('firstlayers', state.mapStyle);
      }
      return { ...state };
    },
    //地图默认样式
    getMapStyleReducer(state, action) {
      // let elem = action.payload;
      // console.log('getMapStyleReducer', elem);
      // if (elem.style) {
      //   state.mapStyle = JSON.parse(elem.style);
      //   //初始化默认样式配置
      //   // initMapOption(state, action);
      // }
      return { ...state, ...action.payload };
    },

    //正在修改
    changeDoMapStyleReducer(state, action) {
      console.log('sdfasmapStyledfsadf', action);
      if (action.zoom) {
        state.selectDrawLayerData.zoom = action.payload;
        let layerType = mapTypeFun(state.selectDrawLayerData.type);
        state.selectDrawLayerData.layerTypeStr = layerType;
        let layersConfig = loadLayerFunction(state.selectDrawLayerData);
        state.deckLayer = [layersConfig];
        return { ...state };
      }
      if (action.layerBlending) {
        state.renderMode = action.payload;
        let layerType = mapTypeFun(state.selectDrawLayerData.type);
        state.selectDrawLayerData.renderMode = state.renderMode;
        state.selectDrawLayerData.layerTypeStr = layerType;
        let layersConfig = loadLayerFunction(state.selectDrawLayerData);
        state.deckLayer = [layersConfig];
        return { ...state };
      }
      if (action.customGroup) {
        // 修改自定义分段
        changeCustomGroupConfig(state, action);
      } else {
        buildMapWidgetConfig({ state, action });
      }
      console.log(state.selectDrawLayerData, 'jkjkjkjk');
      let layersConfig = loadLayerFunction(state.selectDrawLayerData);
      state.deckLayer = [layersConfig];
      console.log('asdfasdfasdfas', state.deckLayer);
      return { ...state };
    },
    //修改结束
    changeDidMapStyleReducer(state, action) {
      return { ...state };
    },
    // 添加deckgl图层
    addDeckerLayerReducers(state, action) {
      state.loadingCurLayerCount++;
      // alert(state.loadingCurLayerCount);
      // if (state.loadingCurLayerCount === state.loadingLayerCount) {
      //   state.loadingProgress = false;
      // }
      state.deckLayer = action.payload;
      state.interactiveData.push({
        id: state.deckLayer[0]?.dataid,
        mapType: state.deckLayer[0]?.mapType,
        level: state.deckLayer[0]?.level,
        defaultInteraction: state.deckLayer[0]?.defaultInteraction || null,
      });
      console.log('state.deckLayer1111', state.deckLayer[0]?.defaultInteraction);
      console.log('state.deckLayer', state.deckLayer);
      return { ...state };
    },



    addDeckerLayer(state, action) {
      state.deckLayer = [...state.deckLayer, ...action.payload];
      return { ...state };
    },

    changeDeckerLayer(state, action) {
      state.deckLayer = [...action.payload];
      return { ...state };
    },
    //添加对应的数据
    setLinkDataSource(state, action) {
      state.linkDataSource = action.payload;
      return { ...state };
    },

    //+++++++++++++
    getGroupLayerIdReducer(state, action) {
      state.groupLayerId = action.payload;
      return { ...state };
    },
    getIsShareReducer(state, action) {
      state.share = {
        id: action.payload.id,
        is_share: action.payload.is_share,
        componentType: action.payload.componentType,
      };
      return { ...state };
    },
    deleteDataLayerReducer(state, action) {
      state.mapLayers = state.mapLayers.filter(elem => {
        return action.payload.id !== elem?.id;
      });
      if (state.mapLayers.length > 0) {
        //   删除选中数据
        if (state.selectDrawLayerData.id === action.payload.id) {
          state.selectDataLayerData = state.mapLayers[0];
          state.selectDrawLayerData = state.mapLayers[0].linkStyles[0] || {};
        }
      } else {
        state.selectDrawLayerData = null;
        state.selectDataLayerData = null;
      }
      return { ...state };
    },

    //选中数据层
    selectDataLayerDataReducer(state, action) {
      state.selectDataLayerData = action.payload;
      // if (state.selectDataLayerData?.linkStyles?.length > 0) {
      //   let selectDataAllLayer = [
      //     state.selectDataLayerData,
      //     ...state.selectDataLayerData?.linkStyles,
      //   ];
      //   state.selectDrawLayerData = selectDataAllLayer[0];
      // } else {
      //   state.selectDrawLayerData = state.selectDataLayerData;
      // }
      state.selectDrawLayerData = state.selectDataLayerData.linkStyles[0];
      state.mapStyle = state.selectDrawLayerData?.style;
      state.iviewState = state.selectDataLayerData?.initialViewState;
      return { ...state };
    },

    replaceSelectDataLayerReducer(state, action) {
      state.replaceSelectDataLayer = true;
      return { ...state };
    },
    // 数据层刷新弹框
    refreshModelShowReducer(state, action) {
      state.refreshModelShow = action.payload;
      return { ...state };
    },

    //选中渲染层
    selectDrawLayerDataReducer(state, action) {
      state.selectDrawLayerData = action.payload;
      state.mapStyle = state.selectDrawLayerData?.style;
      return { ...state };
    },
    updateDrawLayerRedecer(state, action) {
      let createLayer = action.payload;
      console.log('asfdsa44fasdfsdaf', createLayer, state.mapLayers);
      for (const i in state.mapLayers) {
        if (state.mapLayers.hasOwnProperty(i)) {
          if (action?.doType === 1) {
            if (createLayer?.linkLayerId) {
              if (Number(state.mapLayers[i]?.id) === Number(createLayer?.linkLayerId)) {
                if (!state.mapLayers[i].linkStyles) {
                  state.mapLayers[i].linkStyles = [];
                }
                state.mapLayers[i].linkStyles.push(createLayer);
                let layerType = mapTypeFun(createLayer.type);
                createLayer.layerTypeStr = layerType;
                let layersConfig = loadLayerFunction(createLayer);
                state.deckLayer = [layersConfig];
                state.interactiveData.push({
                  id: state.deckLayer[0]?.dataid,
                  mapType: state.deckLayer[0]?.mapType,
                  level: state.deckLayer[0]?.level,
                  defaultInteraction: state.deckLayer[0]?.defaultInteraction || null,
                });
              }
            } else {
              if (Number(state.mapLayers[i]?.id) === Number(state.groupLayerId)) {
                state.mapLayers[i].linkStyles.push(createLayer);
                let layerType = mapTypeFun(createLayer.type);
                createLayer.layerTypeStr = layerType;
                let layersConfig = loadLayerFunction(createLayer);
                state.deckLayer = [layersConfig];
                state.interactiveData.push({
                  id: state.deckLayer[0]?.dataid,
                  mapType: state.deckLayer[0]?.mapType,
                  level: state.deckLayer[0]?.level,
                  defaultInteraction: state.deckLayer[0]?.defaultInteraction || null,
                });
                console.log('state.deckLayer2222', state.deckLayer[0]?.defaultInteraction);

                return { ...state };
              }
            }
          } else if (action?.doType === 2) {
            state.mapLayers[i].linkStyles = state.mapLayers[i]?.linkStyles.filter(elem => {
              return elem?.id !== createLayer?.id;
            });
          } else {
            for (const j in state.mapLayers[i].linkStyles) {
              if (state.mapLayers[i].linkStyles.hasOwnProperty(j)) {
                if (state.mapLayers[i].linkStyles[j]?.id === createLayer?.id) {
                  state.mapLayers[i].linkStyles[j] = createLayer;
                  let layerType = mapTypeFun(createLayer.type);
                  createLayer.layerTypeStr = layerType;
                  let layersConfig = loadLayerFunction(createLayer);
                  state.deckLayer = [layersConfig];
                  state.interactiveData.push({
                    id: state.deckLayer[0]?.dataid,
                    mapType: state.deckLayer[0]?.mapType,
                    level: state.deckLayer[0]?.level,
                    defaultInteraction: state.deckLayer[0]?.defaultInteraction || null,
                  });
                  console.log('state.deckLayer3333', state.deckLayer[0]?.defaultInteraction);
                  console.log('asfasdfsadfsdaf', state.deckLayer);
                  return { ...state };
                }
              }
            }
          }
        }
      }
      console.log(state.mapLayers, 'state.mapLayers');
      // state.mapLayers = state.mapLayers
      // state.mapLayers = JSON.parse(JSON.stringify(state.mapLayers));
      return { ...state };
    },

    updateDataLayerReducer(state, action) {
      let updateLayer = action.payload;
      for (const i in state.mapLayers) {
        if (state.mapLayers.hasOwnProperty(i)) {
          if (state.mapLayers[i]?.id === updateLayer?.id) {
            let newArr = [];
            let layerType = mapTypeFun(updateLayer.type);
            updateLayer.layerTypeStr = layerType;
            updateLayer.dataVisiably = updateLayer.visibility;
            state.mapLayers[i] = updateLayer;
            // let layersConfig = loadLayerFunction(updateLayer);
            // newArr.push(layersConfig);
            // state.deckLayer = [layersConfig];
            for (const j in updateLayer?.linkStyles) {
              if (updateLayer?.linkStyles.hasOwnProperty(j)) {
                console.log('asdfasdf32sadfad', updateLayer.linkStyles[j]);
                let layerType1 = mapTypeFun(updateLayer?.linkStyles[j]?.type);
                updateLayer.linkStyles[j].layerTypeStr = layerType1;
                updateLayer.linkStyles[j].dataVisiably = updateLayer.visibility;
                let layersConfig1 = loadLayerFunction(updateLayer?.linkStyles[j]);
                newArr.push(layersConfig1);
              }
            }
            console.log('asdfasdfnewArrasdf', newArr);
            state.deckLayer = newArr;
            // 兼容level !== 2 的删除
            if (updateLayer.isDelete === 2) {
              const indexAttr = updateLayer.linkStyles.findIndex(e => e.id === updateLayer.id);
              if (indexAttr !== -1) {
                state.selectDataLayerData.linkStyles.splice(indexAttr, 1);
              }
            }
          }
        }
      }
      return { ...state };
    },

    resetNullReducer(state, action) {
      state.mapLayers = [];
      state.allMapLayers = [];
      state.deckLayer = [];
      state.iviewState = null;
      state.saveCamera = null;
      state.selectDataLayerData = null;
      state.selectDrawLayerData = null;
      state.loadingCurLayerCount = 0;
      state.loadingLayerCount = 0;
      return { ...state };
    },
    setSelectDataTypeReducer(state, action) {
      state.selectDataType = action.payload;
      return { ...state };
    },
    setCustomGroupShowReducer(state, action) {
      state.customGroupShow = action.payload;
      return { ...state };
    },
    // 拖拽排序
    dragDropLayerRedecer(state, action) {
      const { drag, drop } = action.payload;
      // let tempObj = JSON.parse(JSON.stringify(state.mapLayers));
      // debugger;

      // 生成循环体
      let forData = [];
      for (const i in state.selectDataLayerData.linkStyles) {
        if (Object.hasOwnProperty.call(state.selectDataLayerData.linkStyles, i)) {
          const element = state.selectDataLayerData.linkStyles[i];
          forData.push({
            zOrder: element.zOrder,
          });
        }
      }

      // 从上往下拖----目标位置的的下方
      if (drag.zOrder < drop.zOrder) {
        for (const i in forData) {
          if (Object.hasOwnProperty.call(forData, i)) {
            const element = forData[i];
            if (element?.zOrder > drag?.zOrder && element?.zOrder <= drop?.zOrder) {
              state.selectDataLayerData.linkStyles[i].zOrder = forData[i - 1].zOrder;
              state.selectDataLayerData.linkStyles[i - 1] = state.selectDataLayerData.linkStyles[i];
            }
            // debugger;
            if (element?.zOrder === drop?.zOrder) {
              state.selectDataLayerData.linkStyles[i] = drag;
              state.selectDataLayerData.linkStyles[i].zOrder = drop?.zOrder;
            }
          }
        }
      }
      // 从下往上拖----目标位置的的上方
      if (drag.zOrder > drop.zOrder) {
        for (let j = forData.length - 1; j >= 0; j--) {
          if (forData[j]?.zOrder < drag?.zOrder && forData[j]?.zOrder >= drop?.zOrder) {
            state.selectDataLayerData.linkStyles[j].zOrder = forData[j + 1].zOrder;
            state.selectDataLayerData.linkStyles[j + 1] = state.selectDataLayerData.linkStyles[j];
          }
          // debugger;
          if (forData[j]?.zOrder === drop?.zOrder) {
            state.selectDataLayerData.linkStyles[j] = drag;
            state.selectDataLayerData.linkStyles[j].zOrder = drop?.zOrder;
          }
        }
      }
      // 更新选中图层的zorder
      if (state.selectDrawLayerData.id === drag.id) {
        state.selectDrawLayerData.zOrder = drop.zOrder;
      }
      // 对应地图响应
      let tempArr = [];
      for (const key in state.selectDataLayerData.linkStyles) {
        if (Object.hasOwnProperty.call(state.selectDataLayerData.linkStyles, key)) {
          const element = state.selectDataLayerData.linkStyles[key];
          let layersConfig = loadLayerFunction(element);
          tempArr.push(layersConfig);
        }
      }
      state.deckLayer = tempArr;
      // 对应地图响应 end
      for (const k in state.mapLayers) {
        if (Object.hasOwnProperty.call(state.mapLayers, k)) {
          const element = state.mapLayers[k];
          if (element.id === state.selectDataLayerData.id) {
            state.mapLayers[k] = state.selectDataLayerData;
          }
        }
      }
      console.log(state.selectDataLayerData, '单个数据');
      console.log(state.selectDrawLayerData, 'selectDrawLayerData');
      return { ...state };
    },

    deleteMapLayersReducer(state, action) {
      state.deleteMapLayers = [action.payload];
      if (action.payload.linkStyles?.length > 0) {
        for (const key in action.payload.linkStyles) {
          if (action.payload.linkStyles.hasOwnProperty(key)) {
            const element = action.payload.linkStyles[key];
            state.deleteMapLayers.push(element);
          }
        }
      }
      return { ...state };
    },
    // changeViewChangeReducer(state, action) {
    //   if (action.payload && state.selectDrawLayerData) {
    //     state.viewport = action.payload;
    //     state.selectDrawLayerData.viewport = state.viewport;
    //   }
    //   return { ...state };
    // },
    getViewportReducer(state, action) {
      state.viewport = action.payload;
      return { ...state };
    },
    getIviewStateReducer(state, action) {
      state.iviewState = action.payload;
      return { ...state, ...action.payload };
    },
    // 渲染模式
    getRenderModeReducer(state, action) {
      state.renderMode = action.payload;
      return { ...state };
    },
    addDoCloudMapLayer(state, action) {
      return { ...state, deckLayer: [...action.payload] };
    },
    // 正在修改名称的图层
    activeUpdateReducer(state, action) {
      state.activeUpdate = action.payload;
      return { ...state, ...action.payload };
    },
    //修改图层名称
    getLayerNameReducer(state, action) {
      state.layerName = action.payload;
      return { ...state, ...action.payload };
    },

    // ------------- 场景设置相关 -------------
    // 设置camera
    setCameraReducer(state, action) {
      state.camera = action.payload;
      //   const i = state.mapLayers.findIndex(e => e.level === 0);
      //   state.selectDataLayerData
      state.mapLayers[0].camera = action.payload;
      console.log(state.mapLayers, action.payload, 'aishayebushi');
      return { ...state };
    },
    defaultCameraReducer(state, action) {
      state.camera = action.payload;
      return { ...state };
    },
    //设置当前选择的地图样式
    setDeckMapStyle(state, action) {
      state.deckMapStyle = action.payload;
      return { ...state };
    },
    saveCameraReducer(state, action) {
      state.saveCamera = action.payload;
      return { ...state };
    },
    updateInteractiveDataReducer(state, action) {
      state.interactiveData = action.payload;
      console.log('asfd34asdfasdfsad', state.interactiveData);
      return { ...state };
    },
    // loadingLayerCountReducer(state, action) {
    //   state.loadingLayerCount = action.payload;
    //   if (!state.loadingLayerCount) {
    //     state.loadingProgress = false;
    //   }
    //   // alert(state.loadingLayerCount);
    //   return { ...state };
    // },
    setIviewStatePropsReducer(state, action) {
      state.iviewState = action.payload;
      return { ...state };
    },
  },
};
