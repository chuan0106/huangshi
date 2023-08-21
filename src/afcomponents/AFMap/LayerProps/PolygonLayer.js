import { visible, rgbaString2rgbaArray } from './mapUtils';

export default function PolygonLayer(layerCon) {
  let mapStyle = layerCon?.style.regionStyle;

  let id = layerCon?.id;

  let color = mapStyle.color;
  // 统一颜色
  if (color?.type === 1) {
    color = rgbaString2rgbaArray(color.color);
  }
  // 颜色分段
  if (color?.type === 2) {
    const regionSection = layerCon?.customGroup?.regionSection;
    const { type, colorSectionArr } = regionSection.color;
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
  let outlineWidth = mapStyle.line;
  // 半径类型
  let outlineType = outlineWidth.type;
  if (outlineType === 1) {
    outlineWidth = outlineWidth.lineWidthScale;
  }
  if (outlineType === 2) {
    outlineWidth = {
      mappingType: 7,
      mappingField: outlineWidth.feild,
      mappingItems: [outlineWidth.lineWidthMinPixels, outlineWidth.lineWidthMaxPixels],
    };
  }

  // 高度
  let fenceHeight = mapStyle.height;
  // 高度类型
  let fenceHeightType = fenceHeight.type;
  if (fenceHeightType === 1) {
    fenceHeight = fenceHeight.heightScale;
  }
  if (fenceHeightType === 2) {
    fenceHeight = {
      mappingType: 7,
      mappingField: fenceHeight.feild,
      mappingItems: [fenceHeight.heightMinPixels, fenceHeight.heightMaxPixels],
    };
  }

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let layerConfig = {
    id: `polygonlayer@${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    // zOrder: layerCon?.zOrder,
    zOrder: -1,
    mapType: 'PolygonLayer',
    data: layerCon?.LayerDataFeatures,
    opacity: mapStyle.color.opacity,
    pickable: true,
    ...layerCon?.zoom,
    autoHighlight: true,
    stroked: true,
    filled: true,
    extruded: mapStyle.height.extruded,
    wireframe: true,
    lineWidthScale: 10,
    lineWidthMinPixels: outlineType === 1 ? 0 : mapStyle.line.lineWidthMinPixels,
    lineWidthMaxPixels: outlineType === 1 ? 100 : mapStyle.line.lineWidthMaxPixels * 10,
    outlineColor: [80, 80, 80], // 轮廓线颜色
    visible: visible(layerCon),
    color,
    outlineWidth,
    fenceHeight,
    elevationScale: 1000,
    blending: layerCon?.renderMode,
    ...layerCon.customProps,
  };
  return layerConfig;
}
