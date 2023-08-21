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
      let cTemp = 'rgb(' + r + ',' + g + ',' + b;
      arr.push(cTemp);
      num++;
    }
  }
  return arr;
};
// 弧图层Option
export const arcMapOption = {
  dataState: {
    OXState: '',
    OYState: '',
    DXState: '',
    DYState: '',
  },
  color: {
    type: 1,
    feild: '',
    Ocolor: 'rgb(0,85,255)',
    Dcolor: 'rgb(0,85,255)',
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
  line: {
    type: 1,
    feild: '',
    radiusScale: 2,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    dataReverse: false,
    widthUnits: 'pixels',
  },
  // customColorState: false,
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
export let buildArcMapOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.arcStyle;
  } else {
    newOption = arcMapOption;
  }
  newOption = { ...arcMapOption, ...newOption };

  switch (action.payload.key) {
    case '弧图层OX':
      newOption.dataState.OXState = action.payload.e || '';
      break;
    case '弧图层OY':
      newOption.dataState.OYState = action.payload.e || '';
      break;
    case '弧图层DX':
      newOption.dataState.DXState = action.payload.e || '';
      break;
    case '弧图层DY':
      newOption.dataState.DYState = action.payload.e || '';
      break;
    case '弧图层颜色分组字段':
      newOption.color.type = action.payload.e || 1;
      break;
    case '弧图层颜色字段':
      newOption.color.feild = action.payload.e || '';
      break;
    case '弧图层单个颜色起点':
      newOption.color.Ocolor = action.payload.e || '';
      break;
    case '弧图层单个颜色终点':
      newOption.color.Dcolor = action.payload.e || '';
      break;
    case '弧图层分段方式':
      newOption.section.color.type = action.payload.e || 1;
      break;
    case '弧图层透明度':
      newOption.color.opacity = action.payload.e || 1;
      break;
    case '弧图层半径字段类型':
      newOption.line.type = action.payload.e || 1;
      break;
    case '弧图层半径字段':
      newOption.line.feild = action.payload.e || '';
      break;
    case '弧图层数据反序':
      newOption.line.dataReverse = action.payload.e || false;
      break;
    case '弧图层半径值':
      newOption.line.radiusScale = action.payload.e || 2;
      break;
    case '弧图层半径范围':
      newOption.line.radiusMinPixels = action.payload.e[0] || 0;
      newOption.line.radiusMaxPixels = action.payload.e[1] || 100;
      break;
    case '弧图层颜色反序':
      newOption.color.antitone = action.payload.e || false;
      break;
    case '弧图层色系长度选择':
      newOption.color.colorArray = action.payload.e.colors || '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '弧图层大小模式':
      newOption.line.widthUnits = action.payload.e || 'pixels';
      break;
    case '弧图层自定义颜色显隐控制':
      if (newOption.customColorState === undefined) {
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
      }
      if (newOption.customColorState === false) {
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
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
    case '弧图层自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
      break;
    default:
  }
  state.mapStyle.arcStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
