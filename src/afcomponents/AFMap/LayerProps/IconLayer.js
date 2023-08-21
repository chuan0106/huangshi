/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月15日
 * @author lqq
 * @desc 图标图层属性
 *
 */
import { rgbaString2rgbaArray, visible } from './mapUtils';
import IPConfig from '@/constants/IPConfig';

export const configPath = {
  // 获取图片文件
  getImgByIdPath: IPConfig.projectServiceDomain + '/dataeye/v1/data/image/get?', //get
};

export default function IconLayer(layerCon) {
  //图层样式
  let mapStyle = layerCon?.style.iconStyle;

  //使用图层id给图层做标识符
  let id = layerCon?.id;

  // 属性
  let { billboard, anchorHeight, iconUrl } = mapStyle;

  // 颜色
  let color = mapStyle.color;
  // 统一颜色
  if (color?.type === 1) {
    color = rgbaString2rgbaArray(color.color);
  }
  // 颜色分段
  if (color?.type === 2) {
    const scatterSection = layerCon?.customGroup?.iconSection;
    const { type, colorSectionArr } = scatterSection.color;
    // 默认分段，D3
    if (type === 1) {
      const colorArray = color.colorArray.map(item => rgbaString2rgbaArray(item));
      color = {
        mappingType: 7,
        mappingField: color.feild,
        mappingItems: !color.antitone ? colorArray : colorArray.reverse(),
      };
    }
    // 自定义分段
    if (type === 2) {
      const mappingItems = colorSectionArr.map((item, index, array) => {
        let start = 0;
        if (index === 0) {
          start = 0;
        } else {
          start = array[index - 1].number;
        }
        return {
          start,
          end: item.number,
          rangeType: 3,
          style: rgbaString2rgbaArray(item.color) || rgbaString2rgbaArray(color.color),
        };
      });
      color = {
        mappingType: 2,
        mappingField: color.feild,
        mappingItems,
      };
    }
  }

  // 大小
  let size = mapStyle.size;
  // 类型
  let sizeType = size.type;
  if (sizeType === 1) {
    size = size.size;
  }
  if (sizeType === 2) {
    size = {
      mappingType: 7,
      mappingField: size.feild,
      mappingItems: [size.sizeMinPixels, size.sizeMaxPixels],
    };
  }

  // 角度
  let angle = mapStyle.angle;
  // 半径类型
  let angleType = angle.type;
  if (angleType === 1) {
    angle = angle.angle;
  }
  if (angleType === 2) {
    angle = {
      mappingType: 7,
      mappingField: angle.feild,
      mappingItems: [angle.angleMinPixels, angle.angleMaxPixels],
    };
  }

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let layerConfig = {
    mapType: 'IconLayer',
    id: `iconlayer@${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    data: layerCon?.LayerDataFeatures,
    ...layerCon?.zoom,
    pickable: true,
    sizeUnits: mapStyle.size.sizeUnits, // 像素大小或者地理大小pixels/meters
    sizeScale: 10, //缩放尺寸
    sizeMinPixels: 1, // 最小尺寸
    sizeMaxPixels: 10000, // 最大尺寸
    billboard: billboard, // 面向相机还是朝上
    opacity: mapStyle.color.opacity,
    alphaCutoff: 0.05, // 图标中间开孔
    // 控制显隐
    visible: visible(layerCon),
    url: `${configPath.getImgByIdPath}imageid=${iconUrl.url}`,
    mask: mapStyle.color.state,
    height: anchorHeight.height,
    angle,
    color,
    size,
    blending: layerCon?.renderMode,
  };
  return layerConfig;
}
