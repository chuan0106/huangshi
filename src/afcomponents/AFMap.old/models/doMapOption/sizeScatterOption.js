// arcMapOption
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
// 聚合点Option
export const sizeScatterOption = {
  color: {
    type: 2,
    feild: '',
    color: 'rgb(0,85,255)',
    colorArray: [
      'rgb(54,98,206)',
      'rgb(156,185,244)',
      'rgb(37,59,103)',
      'rgb(204,88,73)',
      'rgb(34,30,30)',
      'rgb(76,159,236)',
    ],
    opacity: 1,
    antitone: false,
  },
  radius: {
    clusterRadius: 25,
    radiusMinPixels: 10,
    radiusMaxPixels: 50,
  },
  text: {
    show: true,
    fontSize: 12,
    color: 'rgb(0,53,177)',
  },
  //新增对应的分段方式
  section: {
    color: {
      type: 1,
      colorSectionArr: [],
      colorSectionArr2: [],
    },
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
export let buildSizeScatterOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.sizeScatterStyle;
  } else {
    newOption = sizeScatterOption;
  }
  newOption = { ...sizeScatterOption, ...newOption };

  switch (action.payload.key) {
    case '聚合点透明度':
      newOption.color.opacity = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '聚合点聚合半径':
      newOption.radius.clusterRadius = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '聚合点半径范围':
      newOption.radius.radiusMinPixels = action.payload.e[0] || 1;
      newOption.radius.radiusMaxPixels = action.payload.e[1] || 100;
      break;
    case '聚合点显示文字':
      newOption.text.show = action.payload.e || false;
      break;
    case '聚合点文字颜色':
      newOption.text.color = action.payload.e || '';
      break;
    case '聚合点文字大小':
      newOption.text.fontSize = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '聚合点颜色反序':
      newOption.color.antitone =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '聚合点色系长度选择':
      newOption.color.colorArray =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '聚合点自定义颜色显隐控制':
      if (newOption.customColorState === undefined) {
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
      }
      if (newOption.customColorState === false) {
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
      } else if (newOption.customColorState === true) {
        if (newOption.ColorList === null) {
          newOption.color.colorArray = [
            'rgb(54,98,206)',
            'rgb(156,185,244)',
            'rgb(37,59,103)',
            'rgb(204,88,73)',
            'rgb(34,30,30)',
            'rgb(76,159,236)',
          ];
        } else {
          newOption.color.colorArray = newOption.ColorList;
        }
      }
      newOption.customColorState = action.payload.e;
      break;
    case '聚合点自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
      break;
    default:
  }
  state.mapStyle.sizeScatterStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
