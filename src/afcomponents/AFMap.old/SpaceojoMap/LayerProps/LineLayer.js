import {
  getSourceColor,
  getTargetColor,
  visible,
  getColor,
  getWidth,
  data_Source,
  data_Source_Reverse,
  colorLayerScaleOrdinal_Quantile,
  layerScaleOrdinal_y,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function LineLayer(layerCon) {
  //图层样式
  let mapStyle = layerCon?.style?.arcStyle;
  let id = layerCon?.id;
  let radiusType = mapStyle?.line?.type;
  let sectionColor = layerCon?.customGroup?.arcSection?.color;
  console.log('mapStyle.dataState', mapStyle.dataState);
  let dataSource = data_Source(mapStyle, layerCon?.LayerDataFeatures);
  let dataSourceReverse = data_Source_Reverse(mapStyle, dataSource);
  let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, layerCon?.LayerDataFeatures);
  let scalePoint = layerScaleOrdinal_y(
    mapStyle,
    layerCon?.layerTypeStr,
    layerCon?.LayerDataFeatures,
  );
  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }
  //layerId
  let layerId = layerCon?.id;
  if (layerCon?.level) {
    layerId = layerCon?.layerId;
  }
  let layerConfig = {
    id: `linelayer@${id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'LineLayer',
    data: mapStyle?.line?.dataReverse ? dataSourceReverse : dataSource,
    opacity: mapStyle.color.opacity,
    pickable: true,
    autoHighlight: true,
    widthScale: 1,
    ...layerCon?.zoom,
    widthUnits: mapStyle?.line?.widthUnits,
    //   onHover: this._onHover.bind(this, mapStyle, 'ODLayer', layerId, layerOption.name),
    widthMinPixels: radiusType === 1 ? 1 : mapStyle.line.radiusMinPixels,
    widthMaxPixels: radiusType === 1 ? 100 : mapStyle.line.radiusMaxPixels * 1,
    getSourcePosition: d => {
      return [d?.dataArr[0], d?.dataArr[1]];
    },
    getTargetPosition: d => {
      return [d?.dataArr[2], d?.dataArr[3]];
    },
    getColor: d => getColor(d, mapStyle, layerCon?.LayerDataFeatures, scaleOrdinal),
    getWidth: d =>
      getWidth(
        layerCon?.layerTypeStr,
        radiusType,
        mapStyle,
        d,
        layerCon?.LayerDataFeatures,
        scalePoint,
      ),
    getSourceColor: d =>
      getSourceColor(
        d,
        layerCon?.layerTypeStr,
        mapStyle,
        sectionColor,
        layerCon?.LayerDataFeatures,
        scaleOrdinal,
      ),
    getTargetColor: d =>
      getTargetColor(
        d,
        layerCon?.layerTypeStr,
        mapStyle,
        sectionColor,
        layerCon?.LayerDataFeatures,
        scaleOrdinal,
      ),
    visible: visible(layerCon),
    updateTriggers: {
      getColor: d => getColor(d, mapStyle, layerCon?.LayerDataFeatures, scaleOrdinal),
      getWidth: d =>
        getWidth(
          layerCon?.layerTypeStr,
          radiusType,
          mapStyle,
          d,
          layerCon?.LayerDataFeatures,
          scalePoint,
        ),
      getSourceColor: d =>
        getSourceColor(
          d,
          layerCon?.layerTypeStr,
          mapStyle,
          sectionColor,
          layerCon?.LayerDataFeatures,
          scaleOrdinal,
        ),
      getTargetColor: d =>
        getTargetColor(
          d,
          layerCon?.layerTypeStr,
          mapStyle,
          sectionColor,
          layerCon?.LayerDataFeatures,
          scaleOrdinal,
        ),
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
