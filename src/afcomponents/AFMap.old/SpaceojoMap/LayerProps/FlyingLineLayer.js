import { visible } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function FlyingLineLayer(layerCon) {
  console.log('FlyingLineLayer_layerCon', layerCon?.style?.flyingLineStyle);
  //layerId
  let layerId = layerCon?.id;
  if (layerCon?.level) {
    layerId = layerCon?.layerId;
  }
  let layerConfig = {
    id: `${layerCon?.id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'FlyingLineLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.flyingLineStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
