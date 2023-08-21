import { rgbaString2rgbaArray, visible } from './mapUtils';

const getODData = (data = [], odField = {}) => {
  const { OXState = 'f0001', OYState = 'f0002', DXState = 'f0004', DYState = 'f0005' } = odField;

  return data.map(item => {
    const properties = item.properties;
    const ox = Number(properties[OXState || 'f0001']) || 0;
    const oy = Number(properties[OYState || 'f0002']) || 0;
    const dx = Number(properties[DXState || 'f0004']) || 0;
    const dy = Number(properties[DYState || 'f0005']) || 0;

    return {
      ...item,
      geometry: {
        ...item.geometry,
        coordinates: [
          [ox, oy],
          [dx, dy],
        ],
      },
    };
  });
};

export default function LineLayer(layerCon) {
  //图层样式
  let mapStyle = layerCon?.style?.arcStyle;
  let radiusType = mapStyle?.line?.type;

  let dataSource = getODData(layerCon?.LayerDataFeatures, mapStyle.dataState);

  let color = mapStyle.color;
  // 统一颜色
  if (color?.type === 1) {
    color = rgbaString2rgbaArray(color.Ocolor);
  }
  // 颜色分段
  if (color?.type === 2) {
    const arcSection = layerCon?.customGroup?.arcSection;
    const { type, colorSectionArr } = arcSection.color;
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
  let lineWidth = mapStyle.line;
  // 类型
  let lineWidthType = lineWidth.type;
  if (lineWidthType === 1) {
    lineWidth = lineWidth.radiusScale;
  }
  if (lineWidthType === 2) {
    lineWidth = {
      mappingType: 7,
      mappingField: lineWidth.feild,
      mappingItems: [lineWidth.radiusMinPixels, lineWidth.radiusMaxPixels],
    };
  }

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let layerConfig = {
    id: `linelayer@${layerCon?.id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'LineLayer',
    data: dataSource,
    opacity: mapStyle?.color?.opacity,
    ...layerCon?.zoom,
    widthUnits: mapStyle?.line?.widthUnits,
    widthMinPixels: radiusType === 1 ? 1 : mapStyle?.line?.radiusMinPixels,
    widthMaxPixels: radiusType === 1 ? 100 : mapStyle?.line?.radiusMaxPixels * 1,
    lineWidth,
    lineColor: color,
    // 控制显隐
    visible: visible(layerCon),
    blending: layerCon?.renderMode,
  };
  return layerConfig;
}
