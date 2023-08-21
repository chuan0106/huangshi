import { rgbToColorArr } from '../../utils';
export default function BitmapLayer() {
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
    id: `bitmap-layer${layerId}`,
    // 位图显示边界限定左下右上坐标
    bounds: dataSource,
    // 要渲染的位图
    image: mapStyle.image,
    opacity: mapStyle.color.opacity, // 透明度
    desaturate: mapStyle.desaturate, // 位图的去饱和。在[0，1]之间。0为原始颜色，1为灰度。
    transparentColor: antitone ? newColorArray[0] : newColors[0], // 用于透明像素的颜色，
    tintColor: rgbToColorArr(mapStyle.color.tintColor), //  位图着色的颜色，在[r，g，b]中。每个组件都在[0，255]范围内。
    visible: mapStyle?.visible,
  };
  return layersConfig;
}
