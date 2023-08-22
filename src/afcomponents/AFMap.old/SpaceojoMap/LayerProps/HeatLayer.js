import { visible, getHeatColor, heatLayerData } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';

export default function HeatLayer(layerCon) {
  // 热力属性对象
  let mapStyle = layerCon?.style?.heatStyle;
  // 图层id
  let id = layerCon?.id;
  // 数据源
  let geojson = layerCon?.LayerDataFeatures;
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
    id: `HeatmapLayer@${id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    type: 'HeatmapLayer',
    data: heatLayerData(geojson, mapStyle),
    opacity: mapStyle?.color?.opacity,
    pickable: true,
    // 是否绘制多边形的轮廓(固体填充)
    stroked: false,
    colorRange: getHeatColor(mapStyle?.color?.color),
    // 半径缩放
    radiusPixels: mapStyle?.radius?.radius,
    getPosition: d => d.geometry.coordinates,
    // colorRange: (d) => getColor(d, mapStyle, geojson, scaleOrdinal),
    ...layerCon?.zoom,
    visible: visible(layerCon),
    getWeight: d => d.properties.weight, // 方法来检索每个点的权重。默认情况下，每个点的权重为1。
    updateTriggers: {
      colorRange: getHeatColor(mapStyle?.color?.color),
      getPosition: d => d.geometry.coordinates,
      getWeight: d => d.properties.weight,
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
