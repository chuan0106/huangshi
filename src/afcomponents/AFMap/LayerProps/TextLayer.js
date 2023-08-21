import {
  visible,
  rgbaString2rgbaArray,
} from './mapUtils';
export default function TextLayer(layerCon) {
  debugger
  // 图层样式
  let mapStyle = layerCon?.style?.textStyle;
  // 图层id
  let id = layerCon?.id;
  //   文字字段
  let feild = mapStyle?.color?.feild;
  let scaleOrdinal = null;

  let color = mapStyle.color;
  // 统一颜色
  if (color?.type === 1) {
    color = rgbaString2rgbaArray(color.color);
  }
  // 颜色分段
  if (color?.type === 2) {
    const scatterSection = layerCon?.customGroup?.textSection;
    const { type, colorSectionArr } = scatterSection.color;
    // 默认分段，D3
    if (type === 1) {
      const colorArray = color.colorArray.map((item) => rgbaString2rgbaArray(item))
      color = {
        mappingType: 7,
        mappingField: color.feild,
        mappingItems: !color.antitone ? colorArray : colorArray.reverse(),
      }
    }
    // 自定义分段
    if (type === 2) {
      const mappingItems = colorSectionArr.map((item, index, array) => {
        let start = 0;
        if (index === 0) {
          start = 0
        } else {
          start = array[index - 1].number
        }
        return {
          start,
          end: item.number,
          rangeType: 3,
          style: rgbaString2rgbaArray(item.color) || rgbaString2rgbaArray(color.color),
        }
      })
      color = {
        mappingType: 2,
        mappingField: color.feild,
        mappingItems,
      }
    }

    if (type === 3) {
      color = rgbaString2rgbaArray(color.color);
    }
  }

  let viewport = localStorage.getItem('viewport');
  if (viewport) {
    viewport = JSON.parse(viewport);
  }

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let layerConfig = {
    id: `text-layer${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'TextLayer',
    data: layerCon?.LayerDataFeatures,
    pickable: true,
    opacity: mapStyle?.fontStyle?.opacity,
    sizeScale: 1,
    sizeUnits: mapStyle?.size?.sizeUnits,
    ...layerCon?.zoom,
    billboard: mapStyle?.billboard,
    fontFamily: mapStyle?.fontStyle?.fontFamily, // 用于设置字体，支持CSS内置字体
    fontWeight: mapStyle?.fontStyle?.fontWeight, // 用于设置字体粗细
    size: mapStyle?.fontStyle?.fontSize, // 每个文本标签的字体大小，以sizeUnits（默认像素）指定的单位表示。
    color,
    elevation: mapStyle?.fontStyle?.lineHeight,
    angle: mapStyle?.angle?.angle, // 角度
    textAnchor: mapStyle?.angle?.textAnchor, // 文本锚点
    alignmentBaseline: mapStyle?.angle?.alignmentBaseline, // 文本基线。
    writingMode: mapStyle?.fontStyle?.redirect === 1 ? 'horizontal' : 'vertical',
    textField: feild, // 文本显示
    // 控制显隐
    visible: visible(layerCon),
  };
  return layerConfig;
}
