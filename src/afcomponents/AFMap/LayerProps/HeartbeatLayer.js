import {
  visible,
} from './mapUtils';

export default function HeatBeatLayer(layerCon) {
  let layerConfig = {
    id: `${layerCon?.id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'HeartBeatLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.heartBeatStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
  };
  return layerConfig;
}
