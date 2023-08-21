// 随机颜色
import { customColor1 } from '../mapConstant';
/*随机获取颜色*/
let commonColor = param => {
  let num = 0,
    arr = [];
  if (param) {
    while (num < param) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let cTemp = 'rgb(' + r + ',' + g + ',' + b;
      arr.push(cTemp);
      num++;
    }
  }
  return arr;
};
// 心跳Option
export const hexagonOption = {
  color: {
    opacity: 1,
    color: [
      'rgb(54,98,206)',
      'rgb(156,185,244)',
      'rgb(37,59,103)',
      'rgb(204,88,73)',
      'rgb(34,30,30)',
      'rgb(76,159,236)',
    ],
    antitone: false,
  },
  radius: {
    cellSize: 1,
    coverage: 0.9,
  },
  height: {
    extruded: false,
    elevationScale: 0.1,
  },
  aggregation: {
    feild: '',
    type: 1,
  },
  // 自定义颜色按钮
  customColorState: false,
  customColor: {
    skin: `customColor1`,
    arrayColors: [
      {
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: [...commonColor(6)],
      },
    ],
  },
  ColorList: null,
};

//构建MapTheme
export let buildHexagonOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.hexagonStyle;
  } else {
    newOption = hexagonOption;
  }
  newOption = { ...hexagonOption, ...newOption };

  switch (action.payload.key) {
    case '六边形网格聚合字段':
      newOption.aggregation.feild = action.payload.e || '';
      break;
    case '六边形网格聚合模式':
      newOption.aggregation.type = action.payload.e || 1;
      break;
    case '六边形网格半径':
      newOption.radius.cellSize = action.payload.e || 1;
      break;
    case '六边形网格范围':
      newOption.radius.coverage = action.payload.e || 0;
      break;
    case '六边形网格显示高度':
      newOption.height.extruded = action.payload.e;
      break;
    case '六边形网格高度系数':
      newOption.height.elevationScale = action.payload.e || 0;
      break;
    case '六边形网格透明度':
      newOption.color.opacity = action.payload.e || 0;
      break;
    case '六边形网格颜色反序':
      newOption.color.antitone = action.payload.e || false;
      break;
    case '六边形网格色系长度选择':
      newOption.color.color = action.payload.e.colors || '';
      newOption.ColorList = newOption.color.color;
      break;
    case '六边形网格自定义颜色显隐控制':
      if (newOption.customColorState === undefined) {
        newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
      }
      if (newOption.customColorState === false) {
        newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
      } else if (newOption.customColorState === true) {
        if (newOption.ColorList === null) {
          newOption.color.color = [
            'rgb(54,98,206)',
            'rgb(156,185,244)',
            'rgb(37,59,103)',
            'rgb(204,88,73)',
            'rgb(34,30,30)',
            'rgb(76,159,236)',
          ];
        } else {
          newOption.color.color = newOption.ColorList;
        }
      }
      newOption.customColorState = action.payload.e;
      break;
    case '六边形网格自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
      break;
    default:
  }
  state.mapStyle.hexagonStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
