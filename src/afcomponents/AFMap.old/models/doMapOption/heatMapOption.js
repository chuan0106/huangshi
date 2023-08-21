// heartMapOption
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
      let cTemp = 'rgb(' + r + ',' + g + ',' + b + ')';
      arr.push(cTemp);
      num++;
    }
  }
  return arr;
};
// 热力图层Option
export const heatMapOption = {
  color: {
    opacity: 1,
    feild: '',
    color: [
      'rgb(54,98,206)',
      'rgb(156,185,244)',
      'rgb(37,59,103)',
      'rgb(204,88,73)',
      'rgb(34,30,30)',
      'rgb(76,159,236)',
    ],
  },
  radius: {
    radius: 10,
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
export let buildheatMapOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle.heatStyle) {
    newOption = state.mapStyle.heatStyle;
  } else {
    newOption = heatMapOption;
  }
  newOption = { ...heatMapOption, ...newOption };
  switch (action.payload.key) {
    case '热力图色系长度选择':
      newOption.color.color =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.color;
      break;
    case '热力图颜色反序':
      newOption.color.antitone =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '热力图透明度':
      newOption.color.opacity =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '热力图半径值':
      newOption.radius.radius =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '热力图权重字段':
      newOption.color.feild =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      break;
    case '热力图自定义颜色显隐控制':
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
    case '热力图自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
      break;
    default:
  }
  state.mapStyle.heatStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
