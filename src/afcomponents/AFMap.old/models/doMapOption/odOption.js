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
// 网格柱状Option
export const cubeLayerOption = {
  colorSystemCube: '',
  // 透明度
  transparencyCube: 0,
  // 半径
  radiusNumCube: 0,
  // 范围
  rangeCube: 0,
  // 显示高度开关
  switchCube: true,
  // 高度系数
  heightNumCube: 0,
  aggregation: {
    feild: '',
    type: 1,
  },
  cubeStyle: {
    color: {
      opacity: 1,
      color: [
        'rgb(134,114,213)',
        'rgb(35,68,254)',
        'rgb(46,162,170)',
        'rgb(209,209,211)',
        'rgb(5,168,209)',
        'rgb(255,201,14)',
      ],
    },
    radius: {
      cellSize: 1,
      coverage: 1,
    },
    height: {
      extruded: false,
      elevationScale: 0.1,
    },
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
export let buildCubeLayerOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.cubeStyle;
  } else {
    newOption = cubeLayerOption;
  }
  newOption = { ...cubeLayerOption, ...newOption };

  switch (action.payload.key) {
    case '网格柱状透明度':
      newOption.transparencyCube = action.payload.e || 0;
      break;
    case '网格柱状聚合字段':
      newOption.aggregation.feild = action.payload.e || '';
      break;
    case '网格柱状聚合模式':
      newOption.aggregation.type = action.payload.e || 1;
      break;
    case '网格柱状半径':
      newOption.dataState.DYState =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '网格柱状范围':
      newOption.color.type =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '网格柱状显示高度':
      newOption.color.feild =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      break;
    case '网格柱状高度系数':
      newOption.section.color.type =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '网格柱状颜色反序':
      newOption.color.antitone =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '网格柱状色系长度选择':
      newOption.color.colorArray =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '网格柱状自定义颜色显隐控制':
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
    case '网格柱状自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
      break;
    default:
  }
  state.mapStyle = newOption;
};
