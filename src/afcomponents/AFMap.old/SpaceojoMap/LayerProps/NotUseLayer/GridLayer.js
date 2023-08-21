import { rgbToColorArr, getAggregation } from '../../utils';
export default function GridLayer() {
  let mapStyle = mapStyleConfig;
  let colors = mapStyle.color.color;
  let antitone = mapStyle.color.antitone;
  let newColors = [];
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    newColors.push(rgbToColorArr(color));
  }
  let newColorArray = JSON.parse(JSON.stringify(newColors));
  newColorArray = newColorArray.reverse();
  let layerConfig = {
    id: `grid-layer${layerId}`,
    data: dataSource,
    // 允许发生拾取事件
    pickable: true,
    // ...zoom,
    // autoHighlight: true,
    // 如果设置为true，沿z轴挤压多边形和多多边形特征。绘制的特征的高度是通过getElevation访问器获得的
    extruded: mapStyle.height.extruded,
    cellSize: mapStyle.radius.cellSize * 1000,
    opacity: mapStyle.color.opacity,
    // 六角海拔乘数
    elevationScale: mapStyle.height.elevationScale * 100,
    // 颜色值数组,用来创建六边形因密度不同而形成的颜色区分;
    colorRange: antitone ? newColorArray : newColors,
    gpuAggregation: true,
    // getColorValue是获取bin color所基于的值的访问器函数。
    getColorValue: getAggregation.bind(this, mapStyle),
    // 类似于getColorValue, getElevationValue是获取bin elevation所基于的值的访问器函数。它将每个bin中的点数组作为参数，返回一个数字。默认情况下，getElevationValue返回点数组的长度
    getElevationValue: getAggregation.bind(this, mapStyle),
    getPosition: d => d.geometry.coordinates,
    // visible:
    //     initialViewState?.zoom > zoom?.maxZoom || initialViewState?.zoom < zoom?.minZoom
    //         ? false
    //         : true,
    // 控制显隐
    visible: mapStyle.visible,
    // upLayerDataFun: (newOption = {}) => {
    //     let oldNewLayerConfig = { ...layerConfig, ...newOption };
    //     return new XSGridLayer(oldNewLayerConfig);
    // },
    coverage: mapStyle.radius.coverage,
    // onHover: this._onHover.bind(this, mapStyle, 'CubeLayer', layerId, layerOption.name),
  };
  return layerConfig;
}
