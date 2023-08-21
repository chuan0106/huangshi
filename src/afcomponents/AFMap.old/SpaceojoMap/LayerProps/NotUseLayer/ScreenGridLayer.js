import { rgbToColorArr } from '../../utils';
export default function SolidPolygonLayer() {
  let mapStyle = mapStyleConfig;
  let colors = mapStyle.color.color;
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
    id: `screengrid-layer${layerId}`,
    data: dataSource,
    pickable: true,
    // ...zoom,
    opacity: mapStyle.color.opacity,
    colorDomain: mapStyle.size.colorDomain,
    colorRange: antitone ? newColorArray : newColors,
    cellSizePixels: mapStyle.size.cellSizePixels,
    cellMarginPixels: mapStyle.size.cellMarginPixels,
    aggregation: mapStyle.size.aggregation,
  };
  return layersConfig;
}
