import {
  // getSourceColor,
  // getIcon,
  // getSize,
  visible,
  // getAngle,
  // layerScaleOrdinal_z,
  // sizeLayerScalePoint,
  // colorLayerScaleOrdinal_Quantile,
  // getFeildArray,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function HeatBeatLayer(layerCon) {
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
    mapType: 'HeartBeatLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.heartBeatStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
