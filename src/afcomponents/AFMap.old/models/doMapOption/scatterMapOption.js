// scatterMapOption
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
export const scatterMapOption = {
  color: {
    //type = 1 不选择字段 2 选择字段
    type: 1,
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
    //type = 1 不选择字段 2 选择字段
    type: 1,
    feild: '',
    radius: 100,
    radiusScale: 1,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    radiusUnits: 'meters',
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
  //地图方向显影
  control: true,
};

//构建MapTheme
export let buildScatterMapOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle.scatterStyle) {
    newOption = state.mapStyle.scatterStyle;
  } else {
    newOption = scatterMapOption;
  }
  newOption = { ...scatterMapOption, ...newOption };

  switch (action.payload.key) {
    case '散点图颜色反序':
      newOption.color.antitone =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '散点图色系长度选择':
      newOption.color.colorArray =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '散点图对应的分段方式':
      newOption.section.color.type =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '散点图单个颜色':
      newOption.color.color = action.payload.e || '';
      break;
    case '散点图颜色分组字段类型':
      newOption.color.type =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '散点图颜色字段':
      newOption.color.feild =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      break;
    case '散点图透明度':
      newOption.color.opacity = action.payload.e || 1;
      break;
    case '散点图大小模式':
      newOption.radius.radiusUnits = action.payload.e || 'meters';
      break;
    case '散点图半径字段':
      newOption.radius.feild = action.payload.e || '';
      break;
    case '散点图半径值类型':
      newOption.radius.type = action.payload.e || '';
      break;
    case '散点图半径值':
      newOption.radius.radiusScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '散点图半径值范围':
      newOption.radius.radiusMinPixels = action.payload.e[0] || 0;
      newOption.radius.radiusMaxPixels = action.payload.e[1] || 100;
      break;
    case '散点图自定义颜色显隐控制':
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
    case '散点图自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
      break;
    default:
  }
  state.mapStyle.scatterStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
