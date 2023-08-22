import { visible, rgbaString2rgbaArray } from './mapUtils';

export default function ScenegraphLayer(layerCon) {
  // 散点属性对象
  let mapStyle = layerCon?.style?.scenegraphStyle;

  let { color, status } = mapStyle?.color;
  // 图层id
  let id = layerCon?.id;

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
    id: `scenegraphLayer@${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'ScenegraphLayer',
    data: layerCon?.LayerDataFeatures,
    opacity: mapStyle?.color?.opacity,
    ...layerCon?.zoom,
    pickable: true,
    // 控制显隐
    visible: visible(layerCon),
    url: mapStyle?.scenegraph,
    altitude: mapStyle.height,
    color: status ? rgbaString2rgbaArray(color) : [],
    speed: mapStyle?.animations?.speed,
    playing: mapStyle?.animations?.playing,
    sizeScale: mapStyle?.sizeScale * 2,
  };
  return layerConfig;
}
