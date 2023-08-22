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
      let cTemp = 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
      arr.push(cTemp);
      num++;
    }
  }
  return arr;
};
// 心跳Option
export const heartBeatOption = {
  billboard: true,
  autoAvoid: true,
  animation: {
    scatterStyleType: 2,
    scatterAimatedType: 1,
    scatterSpeed: 5,
  },
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
    radius: 2,
    radiusScale: 1,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
  },
  // 自定义颜色按钮
  customColorState: false,
  customColor: {
    skin: `customColor1`,
    arrayColors: [
      {
        colorLength: 1,
        id: 1,
        selected: 1,
        thisColorAll: [...commonColor(1)],
      },
    ],
  },
  ColorList: null,
};

//构建MapTheme
export let buildHeartBeatOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.heartBeatStyle;
  } else {
    newOption = heartBeatOption;
  }
  newOption = { ...heartBeatOption, ...newOption };

  switch (action.payload.key) {
    case '心跳图呼吸点样式':
      newOption.animation.scatterStyleType = action.payload.e.target.value || 2;
      break;
    case '心跳图透明度':
      newOption.color.opacity = action.payload.e ?? 1;
      break;
    case '心跳图单个颜色':
      newOption.color.color = action.payload.e;
      newOption.ColorList = newOption.color.color;
      break;
    case '心跳图展示模式':
      newOption.billboard = action.payload.e;
      break;
    case '心跳图自动避让':
      newOption.autoAvoid = action.payload.e;
      break;
    case '心跳图半径值':
      newOption.radius.radius = action.payload.e || 0;
      break;
    case '心跳图动效选择':
      newOption.animation.scatterAimatedType = action.payload.e || 1;
      break;
    case '心跳图动效速度':
      newOption.animation.scatterSpeed = action.payload.e || 0;
      break;
    case '心跳图颜色反序':
      newOption.color.antitone = action.payload.e || false;
      break;
    case '心跳图色系长度选择':
      newOption.color.colorArray = action.payload.e.colors || '';
      break;
    case '心跳图自定义颜色显隐控制':
      if (newOption.customColorState === undefined) {
        newOption.color.color = customColor1(newOption.customColor, newOption.customColor)[0];
      }
      if (newOption.customColorState === false) {
        newOption.color.color = customColor1(newOption.customColor, newOption.customColor)[0];
      } else if (newOption.customColorState === true) {
        if (newOption.ColorList === null) {
          newOption.color.color = 'rgb(54,98,206)';
        } else {
          newOption.color.color = newOption.ColorList;
        }
      }
      newOption.customColorState = action.payload.e;
      break;
    case '心跳图自定义颜色数组':
      newOption.customColor.arrayColors = action.payload.e;
      newOption.color.color = customColor1(newOption.customColor, newOption.customColor)[0];
      break;
    default:
  }
  state.mapStyle.heartBeatStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
