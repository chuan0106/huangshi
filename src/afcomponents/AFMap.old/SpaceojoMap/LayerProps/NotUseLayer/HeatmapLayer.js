import { rgbToColorArr } from '../../utils';
export default function HeatmapLayer() {
  let mapStyle = mapStyleConfig;
  let colors = mapStyle.color.colorArray;
  let newColors = [];
  if (!colors) {
    return;
  }
  let antitone = mapStyle.color.antitone;
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    newColors.push(rgbToColorArr(color));
  }
  let newColorArray = JSON.parse(JSON.stringify(newColors));
  newColorArray = newColorArray.reverse();
  let layersConfig = {
    id: `heatmap-layer${layerId}`,
    data: dataSource,
    pickable: true,
    // ...zoom,
    opacity: mapStyle.color.opacity,
    radiusPixels: mapStyle.radius.radiusPixels,
    colorRange: antitone ? newColorArray : newColors,
    intensity: mapStyle.radius.intensity,
    threshold: mapStyle.radius.threshold,
    aggregation: mapStyle.radius.aggregation,
    visible: mapStyle.visible,
  };
  return layersConfig;
}
