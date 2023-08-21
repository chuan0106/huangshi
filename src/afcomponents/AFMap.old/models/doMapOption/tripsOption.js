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
export const tripsOption = {
  //颜色
  color: {
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
  //线宽
  radius: {
    type: 1,
    feild: '',
    radius: 100,
    radiusScale: 2,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    widthUnits: 'meters',
  },
  //线段长度
  size: {
    type: 1,
    feild: '',
    size: 100,
    sizeScale: 2,
    sizeMinPixels: 1,
    sizeMaxPixels: 100,
  },
  //播放时间
  time: {
    addtime: 100,
    frequencyTime: 20,
  },
  trips: {
    feild: '',
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
export let buildTripsLayerOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.tripsStyle;
  } else {
    newOption = tripsOption;
  }
  newOption = { ...tripsOption, ...newOption };

  switch (action.payload.key) {
    case '动态轨迹图颜色反序':
      newOption.color.antitone =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '动态轨迹图轨迹分组字段':
      newOption.trips.feild = action.payload.e || '';
      break;
    case '动态轨迹图颜色分组字段':
      newOption.color.feild = action.payload.e || '';
      break;
    case '动态轨迹图分段类型':
      newOption.color.type =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '动态轨迹图单个颜色':
      newOption.color.color = action.payload.e || '';
      break;
    case '动态轨迹图色系长度选择':
      newOption.color.colorArray =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '动态轨迹图分段方式':
      newOption.section.color.type = action.payload.e || 1;
      break;
    case '动态轨迹图透明度':
      newOption.color.opacity = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '动态轨迹图大小模式':
      newOption.radius.widthUnits = action.payload.e || 'meters';
      break;
    case '动态轨迹图轨迹宽度':
      newOption.radius.radiusScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '动态轨迹图轨迹长度':
      newOption.size.sizeScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '动态轨迹图播放速度':
      newOption.time.frequencyTime = action.payload.e || 20;
      break;
    case '动态轨迹图平均时间间隔':
      newOption.time.addtime = action.payload.e || 100;
      break;
    case '动态轨迹图自定义颜色显隐控制':
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
    case '动态轨迹图自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
      break;
    default:
  }
  state.mapStyle.tripsStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
