import { visible } from './mapUtils';

export default function WarnImageLayer(layerCon) {
  let layerConfig = {
    id: `${layerCon?.id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'WarnImageLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.warnImageStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
  };
  return layerConfig;
}
