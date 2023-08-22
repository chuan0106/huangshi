import { visible } from './mapUtils';

export default function HeatMapBoxLayer(layerCon) {
  let layerConfig = {
    id: `${layerCon?.id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    dataId: layerCon?.dataId,
    mapType: 'HeatLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.heatStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
    parameters: layerCon?.renderMode,
  };
  return layerConfig;
}
