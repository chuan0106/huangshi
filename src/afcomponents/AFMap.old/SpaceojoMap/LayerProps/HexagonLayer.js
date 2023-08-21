import { visible, colorRange, getAggregation } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function HexagonLayer(layerCon) {
  let mapStyle = layerCon?.style?.hexagonStyle;
  //geojson数据源
  let geojson = layerCon?.LayerDataFeatures;
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
    id: `hexagonlayer@${layerCon?.id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'HexagonLayer',
    data: geojson,
    pickable: true,
    ...layerCon?.zoom,
    extruded: mapStyle.height.extruded,
    radius: mapStyle.radius.cellSize * 1000,
    opacity: mapStyle.color.opacity,
    elevationScale: mapStyle.height.elevationScale * 100,
    autoHighlight: true,
    getColorValue: getAggregation.bind(this, mapStyle),
    getElevationValue: getAggregation.bind(this, mapStyle),
    colorRange: colorRange(mapStyle),
    getPosition: d => d.geometry.coordinates,
    coverage: mapStyle.radius.coverage,
    visible: visible(layerCon),
    updateTriggers: {
      getColorValue: getAggregation.bind(this, mapStyle),
      getElevationValue: getAggregation.bind(this, mapStyle),
      colorRange: colorRange(mapStyle),
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
