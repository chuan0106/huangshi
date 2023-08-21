import { visible, rgbToColorArr } from '../mapUtils';

export default function ScenegraphLayer(layerCon) {
  // 散点属性对象
  let mapStyle = layerCon?.style?.scenegraphStyle;
  //   console.log('layerConlayerCon', layerCon);
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
  //layerId
  let layerId = layerCon?.id;
  if (layerCon?.level) {
    layerId = layerCon?.layerId;
  }
  let layerConfig = {
    id: `scenegraphLayer@${id}`,
    layerId: layerId,
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
    scenegraph: mapStyle?.scenegraph,
    getPosition: d => d.geometry.coordinates,
    getOrientation: d => [0, 0, 90],
    getTranslation: [0, 0, mapStyle.height],
    getColor: status ? rgbToColorArr(color) : [],
    _animations: {
      '*': { speed: mapStyle?.animations?.speed, playing: mapStyle?.animations?.playing },
    },
    sizeScale: mapStyle?.sizeScale * 2,
    _lighting: 'pbr',
    // parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal')
    updateTriggers: {
      getTranslation: [0, 0, mapStyle.height],
    },
  };
  return layerConfig;
}
