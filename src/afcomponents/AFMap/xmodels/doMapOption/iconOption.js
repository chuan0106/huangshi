// arcMapOption
// 随机颜色
// 空间里面倒序排列
function customColor1(chartColor, colourReversal) {
  for (let i = 0; i < chartColor.arrayColors.length; i++) {
    if (chartColor.arrayColors[i].selected === 1) {
      if (colourReversal) {
        let newColorArray = JSON.parse(JSON.stringify(chartColor.arrayColors[i].thisColorAll));
        // newColorArray = newColorArray.reverse();
        return newColorArray;
      } else {
        return chartColor.arrayColors[i].thisColorAll;
      }
    }
  }
}
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
// 图标Option
export const iconLayerOption = {
  iconUrl: {
    type: 1, //图标的
    feild: '',
    url: '5dd28575c37b2a4fb5b612dc',
  },
  //贴地模式
  billboard: true,
  color: {
    state: false,
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
  //图标大小
  size: {
    sizeUnits: 'pixels',
    type: 1,
    feild: '',
    size: 5,
    sizeScale: 2,
    sizeMinPixels: 1,
    sizeMaxPixels: 100,
  },
  //图标的距地高度
  anchorHeight: {
    height: 13, //距地高度
    type: 1,
    feild: '',
    heightScale: 2,
    heightMinPixels: 1,
    heightMaxPixels: 100,
  },
  //图标的左右偏移
  anchorWidth: {
    width: 0, //距地高度
    type: 1,
    feild: '',
    widthScale: 2,
    widthMinPixels: 1,
    widthMaxPixels: 100,
  },
  //旋转角度
  angle: {
    angle: 0,
    type: 1,
    feild: '',
    angleScale: 2,
    angleMinPixels: 1,
    angleMaxPixels: 360,
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
export let buildIconLayerOption = (state, action) => {
  console.log('sadfsdfa33421sdfsadf', state.mapStyle);
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.iconStyle;
  } else {
    newOption = iconLayerOption;
  }
  newOption = { ...iconLayerOption, ...newOption };

  switch (action.payload.key) {
    case '图标透明度':
      newOption.color.opacity = action.payload.e ?? 1;
      break;
    case '图标颜色状态':
      newOption.color.state = action.payload.e;
      break;
    case '图标颜色分组字段':
      newOption.color.type = action.payload.e;
      break;
    case '图标颜色字段':
      newOption.color.feild = action.payload.e;
      break;
    case '图标单个颜色':
      newOption.color.color = action.payload.e;
      break;
    case '图标展示模式':
      newOption.billboard = action.payload.e;
      break;
    case '图标大小模式':
      newOption.size.sizeUnits = action.payload.e || 'pixels';
      break;
    case '图标大小字段':
      newOption.size.feild = action.payload.e || '';
      break;
    case '图标大小系数类型':
      newOption.size.type = action.payload.e;
      break;
    case '图标大小系数':
      newOption.size.size = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '图标大小系数范围':
      newOption.size.sizeMinPixels = action.payload.e[0] || 1;
      newOption.size.sizeMaxPixels = action.payload.e[1] || 100;
      break;
    case '图标距地高度系数':
      newOption.anchorHeight.height = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '图标距地高度系数范围':
      newOption.anchorHeight.heightMinPixels = action.payload.e[0] || 1;
      newOption.anchorHeight.heightMaxPixels = action.payload.e[1] || 100;
      break;
    case '图标图片旋转角度字段':
      newOption.angle.feild = action.payload.e || '';
      break;
    case '图标图片旋转角度系数类型':
      newOption.angle.type = action.payload.e || '';
      break;
    case '图标图片旋转角度系数':
      newOption.angle.angle = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '图标图片旋转角度系数范围':
      newOption.angle.angleMinPixels = action.payload.e[0] || 1;
      newOption.angle.angleMaxPixels = action.payload.e[1] || 100;
      break;
    case '图标图片类型':
      newOption.iconUrl.type = action.payload.e || '';
      break;
    case '':
      newOption.iconUrl.feild = action.payload.e || '';
      break;
    case '图标图片url':
      newOption.iconUrl.url = action.payload.e || '';
      break;

    case '图标颜色反序':
      newOption.color.antitone = action.payload.e || false;
      break;
    case '图标色系长度选择':
      newOption.color.colorArray =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '图标自定义颜色显隐控制':
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
    case '图标自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
      break;
    default:
  }
  state.mapStyle.iconStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
