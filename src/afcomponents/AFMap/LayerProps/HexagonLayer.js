import { visible, rgbaString2rgbaArray } from './mapUtils';

const aggregationType = {
  1: 'count',
  2: 'sum',
  3: 'mean'
}

export default function HexagonLayer(layerCon) {

  let mapStyle = layerCon?.style?.hexagonStyle;

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let color = mapStyle.color;

  const colorArray = color.color.map((item) => rgbaString2rgbaArray(item))

  color = !color.antitone ? colorArray : colorArray.reverse();

  let layerConfig = {
    id: `hexagonlayer@${layerCon?.id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'HexagonLayer',
    data: layerCon?.LayerDataFeatures,
    pickable: true,
    autoHighlight: true,
    ...layerCon?.zoom,
    extruded: mapStyle.height.extruded,
    radius: mapStyle.radius.cellSize * 1000,
    opacity: mapStyle.color.opacity,
    elevationScale: mapStyle.height.elevationScale * 100,
    colorRange: color,
    aggregation: aggregationType[mapStyle.aggregation.type], // count sum mean
    weight: mapStyle.aggregation.feild,
    coverage: mapStyle.radius.coverage,
    visible: visible(layerCon),
    blending: layerCon?.renderMode,
  };
  return layerConfig;
}
