import { rgbToColorArr } from '../../utils';
export default function DTerrainLayer() {
  let mapStyle = mapStyleConfig;
  let colors = mapStyle.color.color;
  let url_type = mapStyle.terrain.type;
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
    id: `terrain-layer${layerId}`,
    bounds: dataSource,
    pickable: true,
    elevationData: url_type === 2 ? mapStyle.terrain.imageurl : '',
    texture: url_type === 1 ? mapStyle.terrain.imageurl : '',
    // ...zoom,
    opacity: mapStyle.color.opacity,
    color: antitone ? newColorArray : newColors,
    meshMaxError: mapStyle.terrain.meshMaxError,
  };
  return layersConfig;
}
