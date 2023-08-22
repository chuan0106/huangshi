import { visible, colorRange, getAggregation } from '../mapUtils';
import { setLayerEveryBlending } from '@/utils/layerutils/gl-utils';
export default function GPUGridLayer(layerCon) {
  const { id } = layerCon;
  let mapStyle = layerCon?.style.cubeStyle;
  let geojson = layerCon?.LayerDataFeatures;
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
    id: `gridlayer@${id}`,
    layerId: layerId,
    level: layerCon?.level,
    defaultInteraction: layerCon?.defaultInteraction,
    visibility: visibility,
    dataVisiably: layerCon?.dataVisiably,
    dataid: id,
    zOrder: layerCon?.zOrder,
    mapType: 'CubeLayer',
    data: geojson,
    pickable: true, // 允许发生拾取事件
    ...layerCon?.zoom,
    elevationScaleType: 'radial',
    // autoHighlight: true,
    extruded: mapStyle.height.extruded, // 如果设置为true，沿z轴挤压多边形和多多边形特征。绘制的特征的高度是通过getElevation访问器获得的
    cellSize: mapStyle.radius.cellSize * 1000,
    opacity: mapStyle.color.opacity,
    elevationScale: mapStyle.height.elevationScale * 100, // 六角海拔乘数
    colorRange: colorRange(mapStyle), // 颜色值数组,用来创建六边形因密度不同而形成的颜色区分;
    gpuAggregation: true,
    getColorValue: getAggregation.bind(this, mapStyle), // getColorValue是获取bin color所基于的值的访问器函数。
    getElevationValue: getAggregation.bind(this, mapStyle), // 类似于getColorValue, getElevationValue是获取bin elevation所基于的值的访问器函数。它将每个bin中的点数组作为参数，返回一个数字。默认情况下，getElevationValue返回点数组的长度
    getPosition: d => d.geometry.coordinates,
    // 控制显隐
    visible: visible(layerCon),
    coverage: mapStyle.radius.coverage,
    updateTriggers: {
      colorRange: colorRange(mapStyle), // 颜色值数组,用来创建六边形因密度不同而形成的颜色区分;
      getColorValue: getAggregation.bind(this, mapStyle), // getColorValue是获取bin color所基于的值的访问器函数。
      getElevationValue: getAggregation.bind(this, mapStyle), // 类似于getColorValue, getElevationValue是获取bin elevation所基于的值的访问器函数。它将每个bin中的点数组作为参数，返回一个数字。默认情况下，getElevationValue返回点数组的长度
    },
    parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal'),
  };
  return layerConfig;
}
