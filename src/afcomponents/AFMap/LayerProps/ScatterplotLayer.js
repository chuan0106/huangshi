import { visible, rgbaString2rgbaArray } from './mapUtils';

export default function ScatterplotLayer(layerCon) {
  // 散点属性对象
  let mapStyle = layerCon?.style?.scatterStyle;
  // 图层id
  let id = layerCon?.id;

  let color = mapStyle.color;
  // 统一颜色
  if (color?.type === 1) {
    color = rgbaString2rgbaArray(color.color);
  }
  // 颜色分段
  if (color?.type === 2) {
    const scatterSection = layerCon?.customGroup?.scatterSection;
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
  // 半径
  let size = mapStyle.radius;
  // 半径类型
  let radiusType = size.type;
  if (radiusType === 1) {
    size = size.radiusScale * size.radius;
  }
  if (radiusType === 2) {
    size = {
      mappingType: 7,
      mappingField: size.feild,
      mappingItems: [size.radiusMinPixels * size.radius, size.radiusMaxPixels * size.radius],
    };
  }

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let layerConfig = {
    id: `scatterplotLayer@${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'ScatterplotLayer',
    data: layerCon?.LayerDataFeatures,
    radiusUnits: mapStyle.radius.radiusUnits,
    pickable: true,
    // 是否绘制多边形的轮廓(固体填充)
    stroked: false,
    opacity: mapStyle.color.opacity,
    // 半径缩放
    ...layerCon?.zoom,
    // 以像素为单位的最小半径。这个道具可以用来防止圆缩小时变得太小。
    radiusMinPixels: radiusType === 1 ? 1 : mapStyle.radius.radiusMinPixels || 0.01,
    // 以像素为单位的最大半径。这个道具可以用来防止圆放大时变得太大。
    radiusMaxPixels: radiusType === 1 ? 100000 : mapStyle.radius.radiusMaxPixels * 6,
    // 点的半径和多点特征，以米为单位
    size,
    // GeoJson的多边形和点特征的纯色。格式为r, g, b， [a]。每个组件都在0-255范围内。
    color,
    // 控制显隐
    visible: visible(layerCon),
    blending: layerCon?.renderMode,
    ...layerCon.customProps,
  };
  return layerConfig;
}
