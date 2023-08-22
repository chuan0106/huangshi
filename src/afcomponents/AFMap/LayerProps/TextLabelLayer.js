import { visible } from './mapUtils';

export default function TextLabelLayer(layerCon) {

  let layerConfig = {
    id: `${layerCon?.id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'textLabelLayer',
    data: layerCon?.LayerDataFeatures,
    mapStyle: layerCon?.style?.labelTextStyle,
    option: layerCon?.zoom,
    visible: visible(layerCon),
  };
  return layerConfig;
}
