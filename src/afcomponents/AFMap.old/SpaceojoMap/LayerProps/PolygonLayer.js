import {
  getSourceColor,
  visible,
  arrayData,
  getWidth,
  getElevation,
  layerScaleOrdinal_z,
  colorLayerScaleOrdinal_Quantile,
  layerScaleOrdinal_y,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function PolygonLayer(layerCon) {
  let mapStyle = layerCon?.style.regionStyle;
  let geojson = layerCon?.LayerDataFeatures;
  let id = layerCon?.id;
  let radiusType = mapStyle.line.type;
  let sectionColor = layerCon?.customGroup?.regionSection?.color;
  let scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerCon?.layerTypeStr);
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
    id: `polygonlayer@${id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    // zOrder: layerCon?.zOrder,
    zOrder: -1,
    mapType: 'PolygonLayer',
    data: arrayData(geojson, layerCon?.layerTypeStr),
    opacity: mapStyle.color.opacity,
    pickable: true,
    ...layerCon?.zoom,
    autoHighlight: true,
    stroked: true,
    filled: true,
    extruded: mapStyle.height.extruded,
    wireframe: true,
    lineWidthScale: 10,
    lineWidthMinPixels: radiusType === 1 ? 0 : mapStyle.line.lineWidthMinPixels,
    lineWidthMaxPixels: radiusType === 1 ? 100 : mapStyle.line.lineWidthMaxPixels * 10,
    getPolygon: d => d.lonlat,
    getElevation: d => 1,
    getFillColor: d =>
      getSourceColor(d, layerCon?.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal),
    getLineColor: [47, 111, 170],
    getLineWidth: d =>
      getWidth(layerCon?.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint),
    visible: visible(layerCon),
    updateTriggers: {
      //getElevation: d => getElevation(mapStyle, layerCon?.layerTypeStr, d, geojson, scalePoint_z),
      getFillColor: d =>
        getSourceColor(d, layerCon?.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal),
      getLineColor: [47, 111, 170],
      getLineWidth: d =>
        getWidth(layerCon?.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint),
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
