import { visible } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function SizeScatterLayer(layerCon) {
  //layerId
  let layerId = layerCon?.id;
  if (layerCon?.level) {
    layerId = layerCon?.layerId;
  }
  let layerConfig = {
    id: `sizescatterlayer@${layerCon?.id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    dataId: layerCon?.dataId,
    mapType: 'SizeScatterLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.sizeScatterStyle,
    option: layerCon?.zoom,
    dataLength:
      layerCon?.LayerDataFeatures.length > 10
        ? parseInt(layerCon?.LayerDataFeatures?.length * 0.1)
        : 10,
    visible: visible(layerCon),
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
