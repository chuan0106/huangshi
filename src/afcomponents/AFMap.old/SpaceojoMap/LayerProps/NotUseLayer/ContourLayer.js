import { rgbToColorArr } from '../../utils';
export default function ContourLayer() {
  let mapStyle = mapStyleConfig;
  let colors = mapStyle.color.color;
  let newColors = [];
  if (!colors) {
    return;
  }
  // let antitone = mapStyle.color.antitone;
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    newColors.push(rgbToColorArr(color));
  }
  let newColorArray = JSON.parse(JSON.stringify(newColors));
  newColorArray = newColorArray.reverse();
  let layersConfig = {
    id: `contour-layer${layerId}`,
    data: dataSource,
    pickable: true,
    // ...zoom,
    extruded: mapStyle.height.extruded,
    opacity: mapStyle.color.opacity,
    // cellSize: mapStyle.radius.cellSize,
    coverage: mapStyle.radius.coverage,
    zOffset: mapStyle.radius.zOffset,
    aggregation: mapStyle.radius.aggregation,
    getWidth: mapStyle.height.radiusScale,
    visible: mapStyle.visible,
  };
  return layersConfig;
}
