import { visible } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function WarnImageLayer(layerCon) {
  console.log('AimatedImageLayer_layerCon', layerCon?.style?.warnImageStyle);
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
    mapType: 'WarnImageLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.warnImageStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
