import { visible, rgbaString2rgbaArray } from './mapUtils';

const getTripData = (data = [], groupKey, timeKey) => {
  const features = [];

  data.forEach(item => {
    // 如果是点数据，则转换成线数据
    if (item.geometry.type === 'Point') {
      const group = item.properties[groupKey];

      if (!features[`_group_${group}`]) {
        features[`_group_${group}`] = group;

        features[`_coordinates_${group}`] = [];
        features[`_coordinates_${group}`].push(item.geometry.coordinates);

        features[`_timestamp_${group}`] = [];
        features[`_timestamp_${group}`].push(item.properties[timeKey]);

        const feature = {
          geometry: {
            coordinates: features[`_coordinates_${group}`],
            type: 'LineString',
          },
          properties: {
            ...item.properties,
            timestamp: features[`_timestamp_${group}`],
          },
          type: 'Feature',
        };

        features.push(feature);
      } else {
        features[`_coordinates_${group}`].push(item.geometry.coordinates);
        features[`_timestamp_${group}`].push(item.properties[timeKey]);
      }
    } else {
      features.push(item);
    }
  });

  features.forEach(item => {
    const timestamps = item.properties.timestamp.map(
      timestamp => new Date(timestamp).getTime() / 1000,
    );

    const min = Math.min.apply(null, timestamps);

    // timestamp 从零开始累计
    item.properties.timestamp = item.properties.timestamp.map(
      timestamp => new Date(timestamp).getTime() / 1000 - min,
    );
  });

  return {
    type: 'FeatureCollection',
    features,
  };
};

export default function TripsLayer(layerCon) {
  // 基本样式
  let mapStyle = layerCon?.style?.tripsStyle;
  //使用图层id给图层做标识符
  let id = layerCon?.id;
  // 时间字段键名
  let timeKey = layerCon?.option?.dataSource?.timeKey;
  // 源数据
  let dataSource = layerCon?.LayerDataFeatures;

  let color = mapStyle.color;
  // 统一颜色
  if (color?.type === 1) {
    color = rgbaString2rgbaArray(color.color);
  }
  // 颜色分段
  if (color?.type === 2) {
    const tripsSection = layerCon?.customGroup?.tripsSection;
    const { type, colorSectionArr } = tripsSection.color;
    // 默认分段，D3
    if (type === 1) {
      const colorArray = color.colorArray.map(item => rgbaString2rgbaArray(item));
      color = {
        mappingType: 7,
        mappingField: color.feild,
        mappingItems: !color.antitone ? colorArray : colorArray.reverse(),
      };
    }
    // 自定义分段
    if (type === 2) {
      const mappingItems = colorSectionArr.map((item, index, array) => {
        let start = 0;
        if (index === 0) {
          start = 0;
        } else {
          start = array[index - 1].number;
        }
        return {
          start,
          end: item.number,
          rangeType: 3,
          style: rgbaString2rgbaArray(item.color) || rgbaString2rgbaArray(color.color),
        };
      });
      color = {
        mappingType: 2,
        mappingField: color.feild,
        mappingItems,
      };
    }
  }

  let visibility = 2;
  if (layerCon?.level === 2) {
    visibility = layerCon?.visibility;
  } else {
    visibility = layerCon?.layerVisibility;
  }

  let layerConfig = {
    id: `tripslayer@${id}`,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'TripsLayer',
    data: getTripData(dataSource, mapStyle.trips.feild, 'field_dtg'),
    widthUnits: mapStyle?.radius?.widthUnits,
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
    animationSpeed: mapStyle.time.frequencyTime, //毫秒单位
    loopLength: mapStyle.time.addtime * 1000,
    width: mapStyle.radius.radiusScale,
    color,
    // 控制显隐
    visible: visible(layerCon),
    parameters: layerCon?.renderMode,
  };
  return layerConfig;
}
