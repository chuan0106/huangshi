import {
  getFillColor,
  visible,
  getRadius,
  sacatterLayerScalePoint,
  colorLayerScaleOrdinal_Quantile,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';

export default function ScatterplotLayer(layerCon) {
  // console.log('layerCon', layerCon);
  // 散点属性对象
  let mapStyle = layerCon?.style?.scatterStyle;
  // 半径类型
  let radiusType = mapStyle.radius.type;
  // 图层id
  let id = layerCon?.id;
  // 数据源
  let geojson = layerCon?.LayerDataFeatures;
  let scalePoint = sacatterLayerScalePoint(mapStyle.radius, geojson);
  let scaleOrdinal = null;
  if (mapStyle.color.type === 2) {
    scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle.color, geojson);
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
  // alert(555);
  let layerConfig = {
    id: `scatterplotLayer@${id}`,
    layerId: layerId,
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
    // autoHighlight: true,
    opacity: mapStyle.color.opacity,
    // lineWidthUnits: 'meters',
    // radiusUnits: 'meters',
    // 半径缩放
    radiusScale: 10,
    ...layerCon?.zoom,
    // antialiasing: true,
    // 以像素为单位的最小半径。这个道具可以用来防止圆缩小时变得太小。
    radiusMinPixels: radiusType === 1 ? 1 : mapStyle.radius.radiusMinPixels || 0.01,
    // 以像素为单位的最大半径。这个道具可以用来防止圆放大时变得太大。
    radiusMaxPixels: radiusType === 1 ? 100000 : mapStyle.radius.radiusMaxPixels * 6,
    // 用于得到经纬度
    getPosition: d => {
      return d.geometry.coordinates;
    },
    //  点的半径和多点特征，以米为单位。
    getRadius: d => getRadius(d, mapStyle?.radius, geojson, scalePoint),
    // GeoJson的多边形和点特征的纯色。格式为r, g, b， [a]。每个组件都在0-255范围内。
    getFillColor: d =>
      getFillColor(d, layerCon?.customGroup?.scatterSection, mapStyle.color, geojson, scaleOrdinal),
    // 控制显隐
    visible: visible(layerCon),
    updateTriggers: {
      getRadius: d => getRadius(d, mapStyle?.radius, geojson, scalePoint),
      // GeoJson的多边形和点特征的纯色。格式为r, g, b， [a]。每个组件都在0-255范围内。
      getFillColor: d =>
        getFillColor(
          d,
          layerCon?.customGroup?.scatterSection,
          mapStyle.color,
          geojson,
          scaleOrdinal,
        ),
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
