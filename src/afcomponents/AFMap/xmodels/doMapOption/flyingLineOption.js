// aimatedImageOption -------  报警图层
// 飞线图层Option
export const flyingLineOption = {
  icon: {
    imgSrc: '1',
    ImgArr: [],
  },
  customColor: {
    status: true,
    color: 'rgb(0,85,255)',
  },
  color: 'rgb(249,249,249)',
  opacity: 1,
  //   展示模式
  billboard: true,
  //   大小模式
  sizeUnits: 'pixels',
  //   大小字段
  feild: '',
  //   长度
  height: 10,
  //   半径
  radius: 2,
  //   距地高度
  heightToGround: 0,
  //   显示范围
  displayRange: 13,
  //   密度（飞线个数）
  densityFly: 100,
  //   动效选择
  animateType: 1,
  //   动效速度
  animateSpeed: 5,
  //   跟随缩放
  zoomFollow: false,
  //   心跳动态
  heartbeat: false,
  //   自动避让
  autoAvoid: false,
  //   用于交换颜色
  colorList: null,
  //   展示类型
  styleType: 'toTop',
};

//构建MapTheme
export let buildFlyingLineOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.flyingLineStyle;
  } else {
    newOption = flyingLineOption;
  }
  newOption = { ...flyingLineOption, ...newOption };

  switch (action.payload.key) {
    case '飞线图标':
      newOption.icon.imgSrc =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '飞线图标集合':
      newOption.icon.ImgArr =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : [];
      break;
    // case '飞线自定义颜色开启':
    //   newOption.customColor.status = action.payload.e;
    //   break;
    case '飞线自定义颜色':
      newOption.customColor.color =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      break;
    // case '飞线颜色':
    //   newOption.color = action.payload.e;
    //   break;
    case '飞线展示模式':
      newOption.billboard =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '飞线展示类型':
      newOption.styleType =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'toTop';
      break;
    // case '飞线大小模式':
    //   newOption.sizeUnits = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'pixels';
    //   break;
    // case '飞线大小字段':
    //   newOption.feild = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
    //   break;
    case '飞线长度':
      newOption.height =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 100;
      break;
    case '飞线半径':
      newOption.radius =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '飞线距地高度':
      newOption.heightToGround =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
      break;
    // case '飞线显示范围':
    //   newOption.displayRange = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 13;
    //   break;
    // case '飞线密度':
    //   newOption.densityFly = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
    //   break;
    // case '飞线动效选择':
    //   newOption.animateType = action.payload.e;
    //   break;
    case '飞线动效速度':
      newOption.animateSpeed =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    // case '飞线跟随缩放':
    //   newOption.zoomFollow = action.payload.e;
    //   break;
    // case '飞线心跳动态':
    //   newOption.heartbeat = action.payload.e;
    //   break;
    case '飞线自动避让':
      newOption.autoAvoid =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '飞线透明度':
      newOption.opacity =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    default:
      break;
  }
  state.mapStyle.flyingLineStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
