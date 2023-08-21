import {
  visible,
  getFillColor,
  dataCollation_trips,
  colorLayerScaleOrdinal_Quantile,
} from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function TripsLayer(layerCon) {
  // 基本样式
  let mapStyle = layerCon?.style?.tripsStyle;
  //使用图层id给图层做标识符
  let id = layerCon?.id;
  // 时间字段键名
  let timeKey = layerCon?.option?.dataSource?.timeKey;
  // 源数据
  let dataSource = layerCon?.LayerDataFeatures;
  // 处理后的数据和时间数组
  let geojson = dataCollation_trips(dataSource, mapStyle?.trips);
  // 最小值
  let min = Math.min.apply(null, geojson?.timeArr);
  let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle.color, geojson?.data);
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
    id: `tripslayer@${id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'TripsLayer',
    data: geojson?.data,
    widthUnits: mapStyle?.radius?.widthUnits,
    getColor: d =>
      getFillColor(
        d,
        layerCon?.customGroup?.tripsSection,
        mapStyle.color,
        geojson?.data,
        scaleOrdinal,
      ),
    getWidth: d => {
      return mapStyle.radius.radiusScale;
    },
    getPath: d => d.path.map(p => p[0]),
    getTimestamps: d => d.path.map(p => p[1] - min),
    dashJustified: true,
    opacity: mapStyle.color.opacity,
    widthScale: 10,
    widthMinPixels: 1.5,
    timeKey: timeKey,
    fp64: true,
    ...layerCon?.zoom,
    trips: mapStyle.trips,
    widthMaxPixels: 1000,
    rounded: true,
    trailLength: mapStyle.size.sizeScale * 1000,
    currentTime: 0,
    frequencyTime: mapStyle.time.frequencyTime, //毫秒单位
    addtime: mapStyle.time.addtime,
    timeArr: geojson.timeArr,
    timer: null,
    // 控制显隐
    visible: visible(layerCon),
    updateTriggers: {
      getColor: d =>
        getFillColor(
          d,
          layerCon?.customGroup?.tripsSection,
          mapStyle.color,
          geojson?.data,
          scaleOrdinal,
        ),
      getWidth: d => {
        return mapStyle.radius.radiusScale;
      },
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
