import { visible } from './mapUtils';

export default function FlyingLineLayer(layerCon) {
 
  let layerConfig = {
    id: `${layerCon?.id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'FlyingLineLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.flyingLineStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
  };
  return layerConfig;
}
