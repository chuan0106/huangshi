/**
 * @method visible
 * @params {layerCon} object
 * 设置图层显隐
 */
export function visible(layerCon) {
  if (layerCon?.dataVisiably === 2) {
    if (layerCon?.level === 2) {
      if (layerCon?.visibility === 2) {
        return true;
      } else {
        return false;
      }
    } else {
      if (layerCon?.layerVisibility === 2) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

/**
 * rgba 字符串转 rgba 数组
 * deckgl 的标准
 * @param {string} string
 * @returns
 */
export function rgbaString2rgbaArray(string) {
  const color = string?.match(/\d+/g)?.map(item => +item);
  if (Array.isArray(color) && color[3]) {
    color[3] = color[3] * 255;
  }
  return color;
}
