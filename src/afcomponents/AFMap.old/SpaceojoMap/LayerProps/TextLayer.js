import {
  visible,
  rgbToColorArr,
  getText,
  getCharacterSet,
  colorLayerScaleOrdinal_Quantile,
  getFillColor,
} from '../mapUtils';
export default function TextLayer(layerCon) {
  // 图层样式
  let mapStyle = layerCon?.style?.textStyle;
  // 图层id
  let id = layerCon?.id;
  //   文字字段
  let feild = mapStyle?.color?.feild;
  let scaleOrdinal = null;
  if (mapStyle.color.type === 2) {
    scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle.color, layerCon?.LayerDataFeatures);
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
  //layerId
  let layerId = layerCon?.id;
  if (layerCon?.level) {
    layerId = layerCon?.layerId;
  }
  let layerConfig = {
    id: `text-layer${id}`,
    layerId: layerId,
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
    // characterSet: getCharacterSet(layerCon?.LayerDataFeatures, feild),
    characterSet: 'auto',
    sizeUnits: mapStyle?.size?.sizeUnits,
    ...layerCon?.zoom,
    billboard: mapStyle?.billboard,
    fontFamily: mapStyle?.fontStyle?.fontFamily, // 用于设置字体，支持CSS内置字体
    fontWeight: mapStyle?.fontStyle?.fontWeight, // 用于设置字体粗细
    getSize: mapStyle?.fontStyle?.fontSize, // 每个文本标签的字体大小，以sizeUnits（默认像素）指定的单位表示。
    // getColor: rgbToColorArr(mapStyle?.fontStyle?.color), // 字体颜色
    getColor: d =>
      getFillColor(
        d,
        layerCon?.customGroup?.textSection,
        mapStyle.color,
        layerCon?.LayerDataFeatures,
        scaleOrdinal,
      ),
    getPixelOffset: [0, -mapStyle?.fontStyle?.lineHeight],
    getAngle: mapStyle?.angle?.angle, // 角度
    getTextAnchor: mapStyle?.angle?.textAnchor, // 文本锚点
    getAlignmentBaseline: mapStyle?.angle?.alignmentBaseline, // 文本基线。
    getPosition: d => d?.geometry?.coordinates,
    getText: d => getText(d?.properties[feild], mapStyle?.fontStyle, mapStyle?.angle), // 文本显示
    // 控制显隐
    visible: visible(layerCon),
    updateTriggers: {
      getPosition: d => d?.geometry?.coordinates,
      getText: d => getText(d?.properties[feild], mapStyle?.fontStyle, mapStyle?.angle), // 文本显示
      getColor: d =>
        getFillColor(
          d,
          layerCon?.customGroup?.textSection,
          mapStyle.color,
          layerCon?.LayerDataFeatures,
          scaleOrdinal,
        ),
      fontFamily: mapStyle?.fontStyle?.fontFamily, // 用于设置字体，支持CSS内置字体
      getTextAnchor: mapStyle?.angle?.textAnchor, // 文本锚点
      getAlignmentBaseline: mapStyle?.angle?.alignmentBaseline, // 文本基线。
    },
  };
  return layerConfig;
}
