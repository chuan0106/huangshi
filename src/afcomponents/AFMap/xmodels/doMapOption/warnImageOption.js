// warnImageOption -------  报警图层
// 动态报警图层Option
export const warnImageOption = {
  icon: {
    imgSrc: '1',
    ImgArr: [],
  },
  customColor: {
    status: false,
    color: 'rgb(0,85,255)',
  },
  color: 'rgb(0,85,255)',
  opacity: 1,
  //   展示模式
  billboard: true,
  //   大小模式
  //   sizeUnits: 'pixels',
  //   大小字段
  //   feild: '',
  //   大小系数
  size: 3,
  //   距地高度
  heightToGround: 0,
  //   动画选择
  animateType: 2,
  //   动画速度
  animateSpeed: 5,
  //   跟随缩放
  //   zoomFollow: false,
  //   自动避让
  autoAvoid: false,
  //   用于交换颜色
  ColorList: null,
};

//构建MapTheme
export let buildWarnImageOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle) {
    newOption = state.mapStyle.warnImageStyle;
  } else {
    newOption = warnImageOption;
  }
  newOption = { ...warnImageOption, ...newOption };

  switch (action.payload.key) {
    case '动态报警图标':
      newOption.icon.imgSrc =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '动态报警图标集合':
      newOption.icon.ImgArr =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : [];
      break;
    // case '动态报警颜色':
    //   newOption.color = action.payload.e;
    //   break;
    case '动态报警展示模式':
      newOption.billboard =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '动态报警大小模式':
      newOption.sizeUnits =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'pixels';
      break;
    // case '动态报警大小字段':
    //   newOption.feild = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
    //   break;
    case '动态报警大小系数':
      newOption.size =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '动态报警距地高度':
      newOption.heightToGround =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
      break;
    // case '动态报警动画选择':
    //   newOption.animateType = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
    //   break;
    case '动态报警动画速度':
      newOption.animateSpeed =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    // case '动态报警跟随缩放':
    //   newOption.zoomFollow = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
    //   break;
    case '动态报警自动避让':
      newOption.autoAvoid =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '动态报警自定义颜色开启':
      newOption.customColor.status =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '动态报警自定义颜色':
      newOption.customColor.color =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      break;
    case '动态报警透明度':
      newOption.opacity =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    default:
      break;
  }
  state.mapStyle.warnImageStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
