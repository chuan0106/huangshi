// 用于保存每一次修改的信息
let theme1Layers = [];
// 用于初始化图层函数
export function theme1Init(data = []) {
  let layers = [];
  return layers;
}
// 控制显示隐藏
export function setTheme1LayersVisible({ id, visible }) {
  if (id) {
    for (const key in theme1Layers) {
      if (theme1Layers.hasOwnProperty.call(theme1Layers, key)) {
        if (theme1Layers[key]?.id === id) {
          theme1Layers[key].visible = visible;
        }
      }
    }
  } else {
    for (const key in theme1Layers) {
      if (theme1Layers.hasOwnProperty.call(theme1Layers, key)) {
        theme1Layers[key].visible = visible;
      }
    }
  }
  return JSON.parse(JSON.stringify(theme1Layers));
}
// 控制更新
export function updateTheme1Layers({ id, data }) {
  for (const key in theme1Layers) {
    if (theme1Layers.hasOwnProperty(key)) {
      if (theme1Layers[key]?.id === id) {
        theme1Layers[key].data = data;
      }
    }
  }
  return JSON.parse(JSON.stringify(theme1Layers));
}
