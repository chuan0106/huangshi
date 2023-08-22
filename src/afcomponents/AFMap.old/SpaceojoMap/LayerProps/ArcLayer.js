import {
  getSourceColor,
  getTargetColor,
  visible,
  getWidth,
  data_Source,
  data_Source_Reverse,
  colorLayerScaleOrdinal_Quantile,
  layerScaleOrdinal_y,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function ArcLayer(layerCon) {
  //图层样式
  let mapStyle = layerCon?.style?.arcStyle;
  let radiusType = mapStyle?.line?.type;
  let sectionColor = layerCon?.customGroup?.arcSection?.color;
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
    id: `arclayer@${layerCon?.id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: layerCon?.id,
    zOrder: layerCon?.zOrder,
    mapType: 'ArcLayer',
    data: mapStyle?.line?.dataReverse ? dataSourceReverse : dataSource,
    opacity: mapStyle?.color?.opacity,
    ...layerCon?.zoom,
    widthUnits: mapStyle?.line?.widthUnits,
    widthMinPixels: radiusType === 1 ? 1 : mapStyle?.line?.radiusMinPixels,
    widthMaxPixels: radiusType === 1 ? 100 : mapStyle?.line?.radiusMaxPixels * 1,
    getSourcePosition: d => {
      return [d?.dataArr[0], d?.dataArr[1]];
    },
    getTargetPosition: d => {
      return [d?.dataArr[2], d?.dataArr[3]];
    },
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
    getWidth: d =>
      getWidth(
        layerCon?.layerTypeStr,
        radiusType,
        mapStyle,
        d,
        layerCon?.LayerDataFeatures,
        scalePoint,
      ),
    // 控制显隐
    visible: visible(layerCon),
    updateTriggers: {
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
      getWidth: d =>
        getWidth(
          layerCon?.layerTypeStr,
          radiusType,
          mapStyle,
          d,
          layerCon?.LayerDataFeatures,
          scalePoint,
        ),
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
