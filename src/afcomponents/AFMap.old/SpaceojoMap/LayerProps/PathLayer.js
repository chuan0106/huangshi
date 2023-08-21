import {
  getSourceColor,
  visible,
  arrayData,
  getWidth,
  colorLayerScaleOrdinal_Quantile,
  layerScaleOrdinal_y,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function PathLayer(layerCon) {
  console.log('lllllllcccccc', layerCon);
  //图层样式
  let mapStyle = layerCon?.style?.lineStyle;
  //geojson数据源
  let geojson = layerCon?.LayerDataFeatures;
  let id = layerCon?.id;
  let radiusType = mapStyle.radius.type;
  let sectionColor = layerCon?.customGroup?.lineSection?.color;
  let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
  let scalePoint = layerScaleOrdinal_y(mapStyle, layerCon?.layerTypeStr, geojson);
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
    id: `pathlayer@${id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'PathLayer',
    widthUnits: mapStyle?.radius?.widthUnits,
    data: arrayData(geojson, layerCon?.layerTypeStr),
    pickable: true,
    autoHighlight: true,
    opacity: mapStyle.color.opacity,
    widthScale: 6,
    ...layerCon?.zoom,
    widthMinPixels: radiusType === 1 ? 1 : mapStyle.radius.radiusMinPixels,
    widthMaxPixels: radiusType === 1 ? 100 : mapStyle.radius.radiusMaxPixels * 6,
    getPath: d => d.lonlat,
    getColor: d =>
      getSourceColor(d, layerCon?.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal),
    getWidth: d => getWidth(layerCon?.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint),
    // 控制显隐
    visible: visible(layerCon),
    updateTriggers: {
      getColor: d =>
        getSourceColor(d, layerCon?.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal),
      getWidth: d => getWidth(layerCon?.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint),
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
