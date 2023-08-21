// textOption
// 文本图层Option
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
      let cTemp = 'rgb(' + r + ',' + g + ',' + b + ')';
      arr.push(cTemp);
      num++;
    }
  }
  return arr;
};
export const textOption = {
  fontStyle: {
    fontSize: 14,
    fontFamily: 'MicrosoftYaHei',
    fontWeight: 500,
    color: 'rgba(255,255,255,1)',
    opacity: 1,
    redirect: 1,
    lineHeight: 1,
  },
  size: {
    sizeUnits: 'pixels',
    sizeScale: 1,
  },
  angle: {
    angle: 0,
    textAnchor: 'middle',
    alignmentBaseline: 'center',
  },
  billboard: true,
  //地图方向显影
  control: true,
  color: {
    //type = 1 不选择字段 2 选择字段 3 纯色
    type: 1,
    feild: '',
    alias: '',
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
export let buildTextMapOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle.textStyle) {
    newOption = state.mapStyle.textStyle;
  } else {
    newOption = textOption;
  }
  newOption = { ...textOption, ...newOption };
  switch (action.payload.key) {
    case '文本图层字体大小':
      newOption.fontStyle.fontSize =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 18;
      break;
    case '文本图层字体颜色':
      newOption.color.color =
        action.payload.e !== undefined && action.payload.e !== null
          ? action.payload.e
          : 'rgba(255,255,255,1)';
      break;
    case '文本图层字体样式':
      newOption.fontStyle.fontFamily = action.payload.e;
      break;
    case '文本图层字体粗细':
      newOption.fontStyle.fontWeight =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 500;
      break;
    case '文本图层透明度':
      newOption.fontStyle.opacity =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '文本图层颜色字段':
      newOption.color.alias =
        action.payload.e.alias !== undefined && action.payload.e.alias !== null
          ? action.payload.e.alias
          : '';
      newOption.color.feild =
        action.payload.e.value !== undefined && action.payload.e.value !== null
          ? action.payload.e.value
          : '';
      break;
    case '文本图层大小模式':
      newOption.size.sizeUnits =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'pixels';
      break;
    case '文本展示模式':
      newOption.billboard =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : true;
      break;
    case '文本图层角度':
      newOption.angle.angle =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
      break;
    case '文本图层文本锚点':
      newOption.angle.textAnchor =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'middle';
      break;
    case '文本图层文本基线':
      newOption.angle.alignmentBaseline =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'center';
      break;
    case '文本图层文字方向':
      newOption.fontStyle.redirect =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '文本图层距地高度':
      newOption.fontStyle.lineHeight =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '文本图层颜色分组字段类型':
      newOption.color.type =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '文本图层颜色反序':
      newOption.color.antitone =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '文本图层色系长度选择':
      newOption.color.colorArray =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
      newOption.ColorList = newOption.color.colorArray;
      break;
    case '文本图层对应的分段方式':
      newOption.section.color.type =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '文本图层自定义颜色显隐控制':
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
    case '文本图层自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
    default:
      break;
  }
  state.mapStyle.textStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
