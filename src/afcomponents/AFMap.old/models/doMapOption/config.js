import { mapLayerTypeConstant } from '../constant';
// 热力图
// import { heartMapOption, buildheartMapOption } from './heartMapOption';
// 弧图层（迁徙图）
import { arcMapOption, buildArcMapOption } from './arcMapOption';
import { cubeLayerOption, buildCubeLayerOption } from './cubeLayerOption';
import { heatMapOption, buildheatMapOption } from './heatMapOption';
import { hexagonOption, buildHexagonOption } from './hexagonOption';
import { iconLayerOption, buildIconLayerOption } from './iconOption';
import { lineLayerOption, buildLineLayerOption } from './lineOption';
import { regionOption, buildRegionLayerOption } from './regionOption';
import { scatterMapOption, buildScatterMapOption } from './scatterMapOption';
import { sizeScatterOption, buildSizeScatterOption } from './sizeScatterOption';
import { tripsOption, buildTripsLayerOption } from './tripsOption';
import { heartBeatOption, buildHeartBeatOption } from './heartBeatOption';
import { labelTextOption, buildlabelTextOption } from './labelTextOption';
import { warnImageOption, buildWarnImageOption } from './warnImageOption';
import { flyingLineOption, buildFlyingLineOption } from './flyingLineOption';
import { textOption, buildTextMapOption } from './textOption';
import { scenegraphOption, buildscenegraphOption } from './scenegraphLayer';

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isArray(arr) {
  return Array.isArray(arr);
}
function merge(target, ...arg) {
  return arg.reduce((acc, cur) => {
    return Object.keys(cur).reduce((subAcc, key) => {
      const srcVal = cur[key];
      if (isObject(srcVal)) {
        subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal);
      } else if (isArray(srcVal)) {
        // series: []，下层数组直接赋值
        subAcc[key] = srcVal.map((item, idx) => {
          if (isObject(item)) {
            const curAccVal = subAcc[key] ? subAcc[key] : [];
            return merge(curAccVal[idx] ? curAccVal[idx] : {}, item);
          } else {
            return item;
          }
        });
      } else {
        subAcc[key] = srcVal;
      }
      return subAcc;
    }, acc);
  }, target);
}
// 散点图
// import { scatterMapOption, buildscatterMapOption } from './ScatterMapOption';
// 修改样式文件
export let loadMaptWidgetOption = (state, action) => {
  // if (state.layerType === mapLayerTypeConstant.HEATMAP_LAYER) {
  //   buildheartMapOption(state, action);
  // }
  // if (state.layerType === mapLayerTypeConstant.SCATTER_LAYER) {
  //   buildscatterMapOption(state, action);
  // }
  // if (state.layerType === mapLayerTypeConstant.ARC_LAYER) {
  //   buildArcMapOption(state, action);
  // }
};
// 构建map配置
export let buildMapWidgetConfig = ({ state, action }) => {
  console.log('sdfasdf11sadfsad', state?.selectDrawLayerData?.layerTypeStr);
  switch (state?.selectDrawLayerData?.layerTypeStr) {
    /* <------ 散点图 ------> */
    case mapLayerTypeConstant.SCATTER_LAYER:
      buildScatterMapOption(state, action);
      break;
    /* <------ 热力 ------> */
    case mapLayerTypeConstant.HEATMAP_LAYER:
      buildheatMapOption(state, action);
      break;
    /* <------ 柱状 ------> */
    case mapLayerTypeConstant.CUBE_LAYER:
      buildCubeLayerOption(state, action);
      break;
    /* <------ 心跳 ------> */
    case mapLayerTypeConstant.HEARTBEAT_LAYER:
      buildHeartBeatOption(state, action);
      break;
    /* <------ 聚合点 ------> */
    case mapLayerTypeConstant.SIZESCATTER_LAYER:
      buildSizeScatterOption(state, action);
      break;
    /* <------ 飞线 ------> */
    case mapLayerTypeConstant.LINE_LAYER:
      buildLineLayerOption(state, action);
      break;
    /* <------ 多边形 ------> */
    case mapLayerTypeConstant.REGION_LAYER:
      buildRegionLayerOption(state, action);
      break;
    /* <------弧图层（迁徙图）------> */
    case mapLayerTypeConstant.ARC_LAYER:
      buildArcMapOption(state, action);
      break;
    /* <------ od ------> */
    case mapLayerTypeConstant.OD_LAYER:
      buildArcMapOption(state, action);
      break;
    /* <------ 蜂窝 ------> */
    case mapLayerTypeConstant.HEXAGON_LAYER:
      buildHexagonOption(state, action);
      break;
    /* <------ 动态轨迹图 ------> */
    case mapLayerTypeConstant.TRIPS_LAYER:
      buildTripsLayerOption(state, action);
      break;
    /* <------ 图标图层 ------> */
    case mapLayerTypeConstant.ICON_LAYER:
      buildIconLayerOption(state, action);
      break;
    /* <------ 标签图层 ------> */
    case mapLayerTypeConstant.LABEL_LAYER:
      buildlabelTextOption(state, action);
      break;
    /* <------ 报警图层 ------> */
    case mapLayerTypeConstant.WARNIMAGE_LAYER:
      buildWarnImageOption(state, action);
      break;
    /* <------ 飞线图层 ------> */
    case mapLayerTypeConstant.FLYINGLINE_LAYER:
      buildFlyingLineOption(state, action);
      break;
    /* <------ 文本图层 ------> */
    case mapLayerTypeConstant.TEXT_LAYER:
      buildTextMapOption(state, action);
      break;
    /* <------ 模型图层 ------> */
    case mapLayerTypeConstant.SCENEGRAPH_LAYER:
      buildscenegraphOption(state, action);
      break;
    default:
      break;
  }
};

export function defaultMapOption() {
  let defaultStyle = {
    arcStyle: arcMapOption,
    cubeStyle: cubeLayerOption,
    gridStyle: '',
    heartBeatStyle: heartBeatOption,
    heatStyle: heatMapOption,
    hexagonStyle: hexagonOption,
    iconStyle: iconLayerOption,
    lineStyle: lineLayerOption,
    regionStyle: regionOption,
    scatterStyle: scatterMapOption,
    sizeScatterStyle: sizeScatterOption,
    tripsStyle: tripsOption,
    labelTextStyle: labelTextOption,
    warnImageStyle: warnImageOption,
    flyingLineStyle: flyingLineOption,
    textStyle: textOption,
    scenegraphStyle: scenegraphOption,
  };
  return defaultStyle;
}
export function initMapOption(style) {
  let defaultStyle = {
    arcStyle: arcMapOption,
    cubeStyle: cubeLayerOption,
    gridStyle: '',
    heartBeatStyle: heartBeatOption,
    heatStyle: heatMapOption,
    hexagonStyle: hexagonOption,
    iconStyle: iconLayerOption,
    lineStyle: lineLayerOption,
    regionStyle: regionOption,
    scatterStyle: scatterMapOption,
    sizeScatterStyle: sizeScatterOption,
    tripsStyle: tripsOption,
    labelTextStyle: labelTextOption,
    warnImageStyle: warnImageOption,
    flyingLineStyle: flyingLineOption,
    textStyle: textOption,
    scenegraphStyle: scenegraphOption,
  };
  let newStyle = merge({}, defaultStyle, style);
  return newStyle;
}
//按需注册地图样式
// export let initMapOption = (state, action) => {
//   // if (state.layerType === mapLayerTypeConstant.HEATMAP_LAYER) {
//   //   if (state.mapStyle) {
//   //     //再执行一次默认属性,确保新值内部错误
//   //     state.mapStyle = {
//   //       ...heartMapOption,
//   //       ...state.mapStyle,
//   //     };
//   //   } else {
//   //     state.mapStyle = heartMapOption;
//   //   }
//   // }
//   // if (state.layerType === mapLayerTypeConstant.SCATTER_LAYER) {
//   //   if (state.mapStyle) {
//   //     //再执行一次默认属性,确保新值内部错误
//   //     state.mapStyle = {
//   //       ...scatterMapOption,
//   //       ...state.mapStyle,
//   //     };
//   //   } else {
//   //     state.mapStyle = scatterMapOption;
//   //   }
//   // }
//   // if (state.layerType === mapLayerTypeConstant.ARC_LAYER) {
//   //   if (state.mapStyle) {
//   //     //再执行一次默认属性,确保新值内部错误
//   //     state.mapStyle = {
//   //       ...arcMapOption,
//   //       ...state.mapStyle,
//   //     };
//   //   } else {
//   //     state.mapStyle = arcMapOption;
//   //   }
//   // }
//   state.mapStyle = JSON.parse(JSON.stringify(state.mapStyle));
// };

// 修改自定义分段
export function changeCustomGroupConfig(state, action) {
  let tempObj = state.selectDrawLayerData.customGroup;
  switch (state?.selectDrawLayerData?.layerTypeStr) {
    /* <------ 散点图 ------> */
    case mapLayerTypeConstant.SCATTER_LAYER:
      tempObj.scatterSection.color = action.customGroup;
      break;
    /* <------ 热力 ------> */
    case mapLayerTypeConstant.HEATMAP_LAYER:
      tempObj.heatSection.color = action.customGroup;
      break;
    /* <------ 柱状 ------> */
    case mapLayerTypeConstant.CUBE_LAYER:
      tempObj.cubeSection.color = action.customGroup;
      break;
    /* <------ 心跳 ------> */
    // case mapLayerTypeConstant.HEARTBEAT_LAYER:
    //   tempObj.heartbeatSection.color = action.customGroup;
    //   break;
    /* <------ 聚合点 ------> */
    case mapLayerTypeConstant.SIZESCATTER_LAYER:
      tempObj.sizeScatterSection.color = action.customGroup;
      break;
    /* <------ 飞线 ------> */
    case mapLayerTypeConstant.LINE_LAYER:
      tempObj.lineSection.color = action.customGroup;
      break;
    /* <------ 多边形 ------> */
    case mapLayerTypeConstant.REGION_LAYER:
      tempObj.regionSection.color = action.customGroup;
      break;
    /* <------弧图层（迁徙图）------> */
    case mapLayerTypeConstant.ARC_LAYER:
      tempObj.arcSection.color = action.customGroup;
      break;
    /* <------ od ------> */
    case mapLayerTypeConstant.OD_LAYER:
      tempObj.arcSection.color = action.customGroup;
      break;
    /* <------ 蜂窝 ------> */
    case mapLayerTypeConstant.HEXAGON_LAYER:
      tempObj.hexagonSection.color = action.customGroup;
      break;
    /* <------ 动态轨迹图 ------> */
    case mapLayerTypeConstant.TRIPS_LAYER:
      tempObj.tripsSection.color = action.customGroup;
      break;
    /* <------ 图标图层 ------> */
    case mapLayerTypeConstant.ICON_LAYER:
      tempObj.iconSection.color = action.customGroup;
      break;
    case mapLayerTypeConstant.TEXT_LAYER:
      tempObj.textSection.color = action.customGroup;
      break;
    default:
      break;
  }
  state.selectDrawLayerData.customGroup = tempObj;
}
