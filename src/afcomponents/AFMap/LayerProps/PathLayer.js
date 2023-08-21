import { rgbaString2rgbaArray, visible } from './mapUtils';

export default function PathLayer(layerCon) {
  //图层样式
  let mapStyle = layerCon?.style?.lineStyle;
  let id = layerCon?.id;

  let color = mapStyle.color;
  // 统一颜色
  if (color?.type === 1) {
    color = rgbaString2rgbaArray(color.color);
  }
  // 颜色分段
  if (color?.type === 2) {
    const lineSection = layerCon?.customGroup?.lineSection;
    const { type, colorSectionArr } = lineSection.color;
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

  // 边线
  let width = mapStyle.radius;
  // 半径类型
  let widthType = width.type;
  if (widthType === 1) {
    width = width.radiusScale;
  }
  if (widthType === 2) {
    width = {
      mappingType: 7,
      mappingField: width.feild,
      mappingItems: [width.radiusMinPixels, width.radiusMaxPixels],
    };
  }

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let layerConfig = {
    id: `pathlayer@${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'PathLayer',
    widthUnits: mapStyle?.radius?.widthUnits,
    data: layerCon?.LayerDataFeatures,
    pickable: true,
    autoHighlight: true,
    opacity: mapStyle.color.opacity,
    widthScale: 6,
    ...layerCon?.zoom,
    widthMinPixels: widthType === 1 ? 1 : mapStyle.radius.radiusMinPixels,
    widthMaxPixels: widthType === 1 ? 100 : mapStyle.radius.radiusMaxPixels * 6,
    lineColor: color,
    width,
    // 控制显隐
    visible: visible(layerCon),
    blending: layerCon?.renderMode,
    ...layerCon.customProps,
  };
  return layerConfig;
}
