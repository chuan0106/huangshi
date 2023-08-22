import { rgbToColorArr, getAggregation } from '../../utils';
export default function SolidPolygonLayer(layerData) {
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
  let layerConfig = {
    id: `solidPolygon-layer${layerId}`,
    data: dataSource,
    pickable: true,
    // ...zoom,
    extruded: mapStyle.height.extruded,
    opacity: mapStyle.color.opacity,
    elevationScale: mapStyle.height.elevationScale * 100,
    getElevationValue: getAggregation.bind(this, mapStyle),
    getPosition: d => d.geometry.coordinates,
    getFillColor: antitone ? newColorArray : newColors,
    getLineColor: antitone ? newColorArray : newColors,
    getElevation: d => {
      let heightType = mapStyle.height.type;
      if (heightType === 1) {
        return mapStyle.height.heightScale * 5000;
      } else if (heightType === 2) {
        let feild = mapStyle.height.feild;
        let val = d.properties[feild];
        let radius = this.z(val);
        return radius * 17;
      }
    },
    coverage: mapStyle.radius.coverage,
    // visible:
    //     initialViewState?.zoom > zoom?.maxZoom || initialViewState?.zoom < zoom?.minZoom
    //         ? false
    //         : true,
    // 控制显隐
    visible: mapStyle.visible,
  };
  return layerConfig;
}
