import { visible, rgbaString2rgbaArray } from './mapUtils';

const aggregationType = {
  1: 'count',
  2: 'sum',
  3: 'mean'
}

export default function GPUGridLayer(layerCon) {
  const { id } = layerCon;

  let mapStyle = layerCon?.style.cubeStyle;

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
    id: `gridlayer@${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'CubeLayer',
    data: layerCon?.LayerDataFeatures,
    pickable: true, // 允许发生拾取事件
    gpuAggregation: true,
    ...layerCon?.zoom,
    elevationScaleType: 'radial',
    extruded: mapStyle.height.extruded,
    cellSize: mapStyle.radius.cellSize * 1000,
    opacity: mapStyle.color.opacity,
    elevationScale: mapStyle.height.elevationScale * 100,
    colorRange: color,
    aggregation: aggregationType[mapStyle.aggregation.type], // count sum mean
    weight: mapStyle.aggregation.feild,
    // 控制显隐
    visible: visible(layerCon),
    coverage: mapStyle.radius.coverage,
    blending: layerCon?.renderMode,
  };
  return layerConfig;
}
