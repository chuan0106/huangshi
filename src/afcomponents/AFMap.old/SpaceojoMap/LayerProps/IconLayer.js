/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月15日
 * @author lqq
 * @desc 图标图层属性
 *
 */
import {
  getSourceColor,
  getIcon,
  getSize,
  visible,
  getAngle,
  layerScaleOrdinal_z,
  sizeLayerScalePoint,
  colorLayerScaleOrdinal_Quantile,
  getFeildArray,
  // rgbToColorArr,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
import { layerScalePoint } from '@/utils/layerutils/layerScale';
// import { configPath } from '@/pages/WidgetManage/services/groupServicePath';
// import {
//   layerScaleOrdinal,
//   layerScalePoint,
//   layerScaleQuantile,
// } from '@/utils/layerutils/layerScale';

export default function IconLayer(layerCon) {
  //图层样式
  let mapStyle = layerCon?.style.iconStyle;
  //geojson数据源
  let geojson = layerCon?.LayerDataFeatures;
  //使用图层id给图层做标识符
  let id = layerCon?.id;
  // 颜色
  let { state, opacity } = mapStyle.color;
  // 大小
  let { sizeUnits } = mapStyle.size;
  // 属性
  let { billboard, anchorHeight, angle, iconUrl } = mapStyle;
  // 分段
  let sectionColor = layerCon?.customGroup?.iconSection?.color;
  // 高度
  let scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerCon?.layerTypeStr);
  // 大小
  let getSizeLayerScalePoint = sizeLayerScalePoint(mapStyle.size, geojson);
  // 颜色域映射
  let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
  // 角度
  let angleFeild = angle?.feild;
  let angleMinPixels = angle.angleMinPixels;
  let angleMaxPixels = angle.angleMaxPixels;
  let feildArray = getFeildArray(geojson, angleFeild, true);
  let arr = [angleMinPixels, angleMaxPixels];
  let ScalePoint = layerScalePoint(feildArray, arr);
  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }
  let timestamp = new Date().getTime();
  //layerId
  let layerId = layerCon?.id;
  if (layerCon?.level) {
    layerId = layerCon?.layerId;
  }
  let layerConfig = {
    mapType: 'IconLayer',
    id: `iconlayer@${id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    data: geojson,
    ...layerCon?.zoom,
    pickable: true,
    sizeScale: 10, //缩放尺寸
    sizeUnits: sizeUnits, //像素大小或者地理大小pixels/meters
    sizeMinPixels: 1, //最小尺寸
    sizeMaxPixels: 10000, //最大尺寸
    billboard: billboard, //面向相机还是朝上
    opacity: opacity,
    alphaCutoff: 0.05, //图标中间开孔
    // 控制显隐
    visible: visible(layerCon),
    getIcon: d =>
      getIcon(
        d,
        anchorHeight,
        iconUrl,
        state,
        mapStyle,
        geojson,
        layerCon?.layerTypeStr,
        scalePoint_z,
        timestamp,
      ),
    //获取每个数据的自定义的图标，可批量处理图标
    getPosition: d => {
      return d.geometry.coordinates;
    }, //获取对应数据的经纬度和Z值
    getSize: d => getSize(mapStyle.size, geojson, d, getSizeLayerScalePoint), //获取对应图标的高度
    getColor: d =>
      getSourceColor(d, layerCon?.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal),
    //获取每个图标的饿颜色
    getAngle: d => getAngle(d, angle, geojson, ScalePoint), //获取每个图标的旋转角度
    updateTriggers: {
      getIcon: d =>
        getIcon(
          d,
          anchorHeight,
          iconUrl,
          state,
          mapStyle,
          geojson,
          layerCon?.layerTypeStr,
          scalePoint_z,
          timestamp,
        ),
      getSize: d => getSize(mapStyle.size, geojson, d, getSizeLayerScalePoint), //获取对应图标的高度
      getColor: d =>
        getSourceColor(d, layerCon?.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal),
      getAngle: d => getAngle(d, angle, geojson, ScalePoint), //获取每个图标的旋转角度
    },
    // ...mapEvent,
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
// export default function IconLayer(layerCon) {
//   //图层样式
//   let mapStyle = JSON.parse(JSON.stringify(layerCon?.style.iconStyle));
//   console.log("mapStylenew", mapStyle)
//   let colorArray = mapStyle.color.colorArray;
//   let antitone = mapStyle.color.antitone;
//   let newColorArray = JSON.parse(JSON.stringify(colorArray));
//   let { iconSection } = layerCon?.customGroup;
//   let x = null;
//   let y = null;
//   let z = null;
//   let k = null;
//   let colorWidth = null;
//   if (mapStyle.color.type === 2) {
//     colorWidth = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.color.feild);
//     newColorArray = newColorArray.reverse();
//     if (isNaN(Number(colorWidth[0]))) {
//       x = layerScaleOrdinal(colorWidth, antitone ? newColorArray : colorArray);
//     } else {
//       x = layerScaleQuantile(colorWidth, antitone ? newColorArray : colorArray);
//     }
//   }
//   if (mapStyle.size.type === 2) {
//     let sizeMinPixels = mapStyle.size.sizeMinPixels;
//     let sizeMaxPixels = mapStyle.size.sizeMaxPixels;
//     let sizeWidth = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.size.feild);
//     let arr = [sizeMinPixels, sizeMaxPixels];
//     y = layerScalePoint(sizeWidth, arr);
//   }
//   if (mapStyle.size.type === 3) {
//     let heightMinPixels = mapStyle.anchorHeight.heightMinPixels;
//     let heightMaxPixels = mapStyle.anchorHeight.heightMaxPixels;
//     let anchorHeight = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.anchorHeight.feild);
//     let arr = [heightMinPixels, heightMaxPixels];
//     z = layerScalePoint(anchorHeight, arr);
//   }
//   if (mapStyle.angle.type === 2) {
//     let angleMinPixels = mapStyle.angle.angleMinPixels;
//     let angleMaxPixels = mapStyle.angle.angleMaxPixels;
//     let angle = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.angle.feild);
//     let arr = [angleMinPixels, angleMaxPixels];
//     k = layerScalePoint(angle, arr);
//   }
//   const { state, type, opacity } = mapStyle.color;
//   let colorType = type;
//   let { sizeUnits, size } = mapStyle.size;
//   let sizeType = mapStyle.size.type;
//   let sizefeild = mapStyle.size.feild;
//   let { billboard, anchorHeight, angle, iconUrl } = mapStyle;
//   let anchorHeightFeild = anchorHeight.feild;
//   let anchorHeightHeight = anchorHeight.height;
//   let anchorHeightType = anchorHeight.type;
//   let angleNum = angle.angle;
//   let angleType = angle.type;
//   let angleFeild = angle.feild;
//   let sectionColor = iconSection.color;
//   let sectionNumber = [];
//   let sectionColorArr = [];
//   if (sectionColor.type === 2) {
//     let colorSectionArr = sectionColor.colorSectionArr;
//     for (let i in colorSectionArr) {
//       sectionNumber.push(colorSectionArr[i].number);
//     }
//     sectionNumber.sort((val1, val2) => {
//       return val1 - val2;
//     });
//     for (let i in sectionNumber) {
//       for (let j in colorSectionArr) {
//         if (sectionNumber[i] === colorSectionArr[j].number) {
//           sectionColorArr.push(colorSectionArr[j].color);
//           break;
//         }
//       }
//     }
//   }
//   let layerConfig = {
//     type: 'IconLayer',
//     id: `iconlayer@${layerCon?.id}`,
//     dataid: layerCon?.id,
//     data: layerCon?.LayerDataFeatures,
//     //iconAtlas:'https://deck.gl/images/icon-atlas.png',//图标
//     // iconMapping: {
//     //   marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
//     // },
//     ...layerCon?.zoom,
//     pickable: true,
//     sizeScale: 10, //缩放尺寸
//     sizeUnits: sizeUnits, //像素大小或者地理大小pixels/meters
//     sizeMinPixels: 0, //最小尺寸
//     sizeMaxPixels: 10000, //最大尺寸
//     billboard: billboard, //面向相机还是朝上
//     opacity: opacity,
//     //getIcon:(d)=>{return 'marker'},
//     alphaCutoff: 0.05, //图标中间开孔
//     visible: visible(layerCon),
//     // upLayerDataFun: (newOption = {}) => {
//     //   let oldNewLayerConfig = { ...layerConfig, ...newOption };
//     //   return new IconLayer(oldNewLayerConfig);
//     // },
//     getIcon: d => {
//       let anchorY = anchorHeightHeight;
//       if (anchorHeightType === 1) {
//         anchorY = anchorHeightHeight;
//       } else if (anchorHeightType === 3) {
//         let val = d.properties[anchorHeightFeild];
//         let size = z(val) || 0.1;
//         anchorY = parseInt(size);
//       }
//       console.log("statestate", state)
//       return {
//         url: `${configPath.getImgByIdPath}imageid=${iconUrl.url}`,
//         width: 512,
//         height: 512,
//         anchorY: anchorY * 10,
//         // anchorX: 0,
//         x: 0,
//         y: 0,
//         mask: state,
//       };
//     },
//     //获取每个数据的自定义的图标，可批量处理图标
//     getPosition: d => {
//       return d.geometry.coordinates;
//     }, //获取对应数据的经纬度和Z值
//     getSize: d => {
//       if (sizeType === 1) {
//         return size;
//       } else if (sizeType === 2) {
//         let val = d.properties[sizefeild];
//         let size = y(val) || 0.1;
//         return parseInt(size);
//       }
//     }, //获取对应图标的高度
//     getColor: d => {
//       if (colorType === 1) {
//         let color = mapStyle.color.color;
//         return rgbToColorArr(color);
//       } else {
//         let feild = mapStyle.color.feild;
//         let val = d.properties[feild];
//         if (sectionColor.type === 1) {
//           if (x) {
//             let color = x(val);
//             return rgbToColorArr(color);
//           }
//           return [255, 140, 0, 255];
//         } else if (sectionColor.type === 2) {
//           let activeColor = null;
//           for (let i in sectionNumber) {
//             if (val < sectionNumber[i]) {
//               activeColor = !sectionColorArr[i]?.toString()
//                 ? antitone
//                   ? newColorArray[i]
//                   : colorArray[i]
//                 : sectionColorArr[i];
//               break;
//             }
//           }
//           if (!activeColor) {
//             activeColor = !sectionColorArr.slice(-1)?.toString()
//               ? antitone
//                 ? newColorArray.slice(-1)
//                 : colorArray.slice(-1)
//               : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);
//             activeColor = activeColor.toString();
//           }
//           return rgbToColorArr(activeColor);
//         }
//       }
//     },
//     //获取每个图标的饿颜色
//     getAngle: d => {
//       if (angleType === 1) {
//         return angleNum;
//       } else if (angleType === 2) {
//         let val = d.properties[angleFeild];
//         let angle = k(val) || 0.1;
//         return parseInt(angle);
//       }
//     }, //获取每个图标的旋转角度
//     updateTriggers: {
//       getIcon: d => {
//         let anchorY = anchorHeightHeight;
//         if (anchorHeightType === 1) {
//           anchorY = anchorHeightHeight;
//         } else if (anchorHeightType === 3) {
//           let val = d.properties[anchorHeightFeild];
//           let size = z(val) || 0.1;
//           anchorY = parseInt(size);
//         }
//         console.log("statestate", state)
//         return {
//           url: `${configPath.getImgByIdPath}imageid=${iconUrl.url}`,
//           width: 512,
//           height: 512,
//           anchorY: anchorY * 10,
//           // anchorX: 0,
//           x: 0,
//           y: 0,
//           mask: state,
//         };
//       },
//       //获取每个数据的自定义的图标，可批量处理图标
//       getSize: d => {
//         if (sizeType === 1) {
//           return size;
//         } else if (sizeType === 2) {
//           let val = d.properties[sizefeild];
//           let size = y(val) || 0.1;
//           return parseInt(size);
//         }
//       }, //获取对应图标的高度
//       getColor: d => {
//         if (colorType === 1) {
//           let color = mapStyle.color.color;
//           return rgbToColorArr(color);
//         } else {
//           let feild = mapStyle.color.feild;
//           let val = d.properties[feild];
//           if (sectionColor.type === 1) {
//             if (x) {
//               let color = x(val);
//               return rgbToColorArr(color);
//             }
//             return [255, 140, 0, 255];
//           } else if (sectionColor.type === 2) {
//             let activeColor = null;
//             for (let i in sectionNumber) {
//               if (val < sectionNumber[i]) {
//                 activeColor = !sectionColorArr[i]?.toString()
//                   ? antitone
//                     ? newColorArray[i]
//                     : colorArray[i]
//                   : sectionColorArr[i];
//                 break;
//               }
//             }
//             if (!activeColor) {
//               activeColor = !sectionColorArr.slice(-1)?.toString()
//                 ? antitone
//                   ? newColorArray.slice(-1)
//                   : colorArray.slice(-1)
//                 : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);
//               activeColor = activeColor.toString();
//             }
//             return rgbToColorArr(activeColor);
//           }
//         }
//       },
//       //获取每个图标的饿颜色
//       getAngle: d => {
//         if (angleType === 1) {
//           return angleNum;
//         } else if (angleType === 2) {
//           let val = d.properties[angleFeild];
//           let angle = k(val) || 0.1;
//           return parseInt(angle);
//         }
//       }, //获取每个图标的旋转角度
//     }
//     // ...mapEvent,
//   };
//   return layerConfig;
// }
