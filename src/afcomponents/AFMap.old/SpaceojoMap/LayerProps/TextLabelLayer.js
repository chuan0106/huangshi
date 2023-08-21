import { visible } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function TextLabelLayer(layerCon) {
  console.log('labelTextStyle', layerCon);
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
    mapType: 'textLabelLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.labelTextStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
