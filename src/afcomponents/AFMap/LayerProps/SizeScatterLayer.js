import { visible } from './mapUtils';

export default function SizeScatterLayer(layerCon) {
  let layerConfig = {
    id: `sizescatterlayer@${layerCon?.id}`,
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
  };
  return layerConfig;
}
