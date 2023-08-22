import { visible } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function HeatMapBoxLayer(layerCon) {
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
    dataId: layerCon?.dataId,
    mapType: 'HeatLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.heatStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
