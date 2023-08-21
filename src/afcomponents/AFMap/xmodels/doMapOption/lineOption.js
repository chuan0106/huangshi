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
// 线图层Option
export const lineLayerOption = {
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
  radius: {
    type: 1,
    feild: '',
    radiusScale: 0.2,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    widthUnits: 'meters',
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
export let buildLineLayerOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.lineStyle;
  } else {
    newOption = lineLayerOption;
  }
  newOption = { ...lineLayerOption, ...newOption };

  switch (action.payload.key) {
    case '线图层透明度':
      newOption.color.opacity = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '线图层大小模式':
      newOption.radius.widthUnits = action.payload.e || 'meters';
      break;
    case '线图层颜色类型':
      newOption.color.type = action.payload.e || '';
      break;
    case '线图层颜色字段':
      newOption.color.feild = action.payload.e || '';
      break;
    case '线图层单个颜色':
      newOption.color.color = action.payload.e || '';
      break;

    case '线图层半径字段类型':
      newOption.radius.type = action.payload.e || '';
      break;
    case '线图层半径字段':
      newOption.radius.feild = action.payload.e || '';
      break;
    case '线图层半径值':
      newOption.radius.radiusScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
      break;
    case '线图层半径值范围':
      newOption.radius.radiusMinPixels = action.payload.e[0] || 0;
      newOption.radius.radiusMaxPixels = action.payload.e[1] || 100;
      break;
    case '线图层颜色反序':
      newOption.color.antitone =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '线图层色系长度选择':
      newOption.color.colorArray =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '线图层自定义颜色显隐控制':
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
    case '线图层自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
      break;
    default:
  }
  state.mapStyle.lineStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
