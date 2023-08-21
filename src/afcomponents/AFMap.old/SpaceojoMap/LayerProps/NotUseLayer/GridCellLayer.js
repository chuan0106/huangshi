import { rgbToColorArr } from '../../utils';
export default function GridCellLayer() {
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
    id: `gridCell-layer${layerId}`,
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
    getColor: antitone ? newColorArray : newColors,
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
