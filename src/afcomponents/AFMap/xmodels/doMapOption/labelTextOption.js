// 标签图层Option
export const labelTextOption = {
  icon: {
    imgSrc: '1',
    ImgArr: [],
  },
  feild: {
    name: '',
    value: '',
  },
  heightToGround: 0,
  size: 0.5,
  dataLevel: 0,
  textStyle: {
    // 默认
    defaultStyle: {
      color: '#ffffff',
      fontSize: '14px',
      fontFamily: 'MicrosoftYaHei',
      fontWeight: 500,
    },
    // 距离
    marginObj: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
  },
  numberStyle: {
    // 默认
    defaultStyle: {
      color: '#ffffff',
      fontSize: '16px',
      fontFamily: 'MicrosoftYaHei',
      fontWeight: 500,
    },
    // 距离
    marginObj: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    numSeparator: false,
  },
  unitStyle: {
    // 默认
    defaultStyle: {
      color: '#ffffff',
      fontSize: '14px',
      fontFamily: 'MicrosoftYaHei',
      fontWeight: 500,
    },
    // 距离
    marginObj: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    unit: '',
  },
  backgroundStyle: {
    status: true,
    type: 0,
    type1Default: {
      defaultColor: 'rgba(0,0,0,0.7)',
      gradientStatus: false,
      gradientDirection: 90,
      gradientColor1: 'rgba(0,0,0,0.7)',
      gradientColor2: 'rgba(0,0,0,0.7)',
    },
    type2Image: {
      displayType: 0,
      imgUrl: '',
      opacity: 100,
      imgWidth: 10,
      imgHeight: 10,
    },
  },
  borderStyle: {
    status: true,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#0055FF',
    boxShadow: {
      status: false,
      // ：阴影颜色 ------------ 可选
      color: '#eee',
      // ：水平偏移量 ----必选
      xShadow: 10,
      // ：垂直偏移量-----必选
      yShadow: 10,
      // ：模糊距离 -------------可选
      blur: 10,
    },
    borderRadius: 5,
  },
  //   牵引线
  tractionLineStyle: {
    status: true,
    location: 'center',
    lineStyle: 'solid',
    lineColor: '#C5C5C5',
    lineWidth: 1,
    lineHeight: 50,
  },
};

//构建MapTheme
export let buildlabelTextOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle.labelTextStyle) {
    newOption = state.mapStyle.labelTextStyle;
  } else {
    newOption = labelTextOption;
  }
  newOption = { ...labelTextOption, ...newOption };

  switch (action.payload.key) {
    case '标签层样式类型':
      newOption.icon.imgSrc = action.payload.e;
      break;
    case '标签层样式类型集合':
      newOption.icon.ImgArr = action.payload.e;
      break;
    case '标签层字段':
      newOption.feild.name = action.payload.e?.name;
      newOption.feild.value = action.payload.e?.value;
      break;
    case '标签层距地高度系数':
      newOption.heightToGround = action.payload.e;
      break;
    case '标签层大小系数':
      newOption.size = action.payload.e;
      break;
    case '标签层数据量层级显示设置':
      newOption.dataLevel = action.payload.e;
      break;

    // ------------- 文本设置 -------------
    case '文本字体大小':
      newOption.textStyle.defaultStyle.fontSize = action.payload.e;
      break;
    case '文本字体颜色':
      newOption.textStyle.defaultStyle.color = action.payload.e;
      break;
    case '文本字体粗细':
      newOption.textStyle.defaultStyle.fontWeight = action.payload.e;
      break;
    case '文本字体样式':
      newOption.textStyle.defaultStyle.fontFamily = action.payload.e;
      break;
    case '文本距离左边距':
      newOption.textStyle.marginObj.marginLeft = action.payload.e;
      break;
    case '文本距离右边距':
      newOption.textStyle.marginObj.marginRight = action.payload.e;
      break;
    case '文本距离上边距':
      newOption.textStyle.marginObj.marginTop = action.payload.e;
      break;
    case '文本距离下边距':
      newOption.textStyle.marginObj.marginBottom = action.payload.e;
      break;

    // ------------- 数字设置 -------------
    case '数值字体大小':
      newOption.numberStyle.defaultStyle.fontSize = action.payload.e;
      break;
    case '数值字体颜色':
      newOption.numberStyle.defaultStyle.color = action.payload.e;
      break;
    case '数值字体粗细':
      newOption.numberStyle.defaultStyle.fontWeight = action.payload.e;
      break;
    case '数值字体样式':
      newOption.numberStyle.defaultStyle.fontFamily = action.payload.e;
      break;
    case '数值距离左边距':
      newOption.numberStyle.marginObj.marginLeft = action.payload.e;
      break;
    case '数值距离右边距':
      newOption.numberStyle.marginObj.marginRight = action.payload.e;
      break;
    case '数值距离上边距':
      newOption.numberStyle.marginObj.marginTop = action.payload.e;
      break;
    case '数值距离下边距':
      newOption.numberStyle.marginObj.marginBottom = action.payload.e;
      break;
    case '数值分隔符':
      newOption.numberStyle.numSeparator = action.payload.e;
      break;

    // ------------- 单位设置 -------------
    case '单位字体大小':
      newOption.unitStyle.defaultStyle.fontSize = action.payload.e;
      break;
    case '单位字体颜色':
      newOption.unitStyle.defaultStyle.color = action.payload.e;
      break;
    case '单位字体粗细':
      newOption.unitStyle.defaultStyle.fontWeight = action.payload.e;
      break;
    case '单位字体样式':
      newOption.unitStyle.defaultStyle.fontFamily = action.payload.e;
      break;
    case '单位距离左边距':
      newOption.unitStyle.marginObj.marginLeft = action.payload.e;
      break;
    case '单位距离右边距':
      newOption.unitStyle.marginObj.marginRight = action.payload.e;
      break;
    case '单位距离上边距':
      newOption.unitStyle.marginObj.marginTop = action.payload.e;
      break;
    case '单位距离下边距':
      newOption.unitStyle.marginObj.marginBottom = action.payload.e;
      break;
    case '单位内容':
      newOption.unitStyle.unit = action.payload.e;
      break;

    //   ------------- 背景样式--系统默认 -------------
    case '背景显隐':
      newOption.backgroundStyle.status = action.payload.e;
      break;
    case '背景显示类型':
      newOption.backgroundStyle.type = action.payload.e;
      break;
    case '背景默认颜色':
      newOption.backgroundStyle.type1Default.defaultColor = action.payload.e;
      break;
    case '背景默认是否渐变':
      newOption.backgroundStyle.type1Default.gradientStatus = action.payload.e;
      break;
    case '背景默认渐变方向':
      newOption.backgroundStyle.type1Default.gradientDirection = action.payload.e;
      break;
    case '背景默认渐变开始颜色':
      newOption.backgroundStyle.type1Default.gradientColor1 = action.payload.e;
      break;
    case '背景默认渐变结束颜色':
      newOption.backgroundStyle.type1Default.gradientColor2 = action.payload.e;
      break;
    //   ------------- 背景样式--使用图片 -------------
    case '背景图片显示尺寸':
      newOption.backgroundStyle.type2Image.displayType = action.payload.e;
      break;
    case '背景图片地址':
      newOption.backgroundStyle.type2Image.imgUrl = action.payload.e;
      break;
    case '背景图片透明度':
      newOption.backgroundStyle.type2Image.opacity = action.payload.e;
      break;
    case '背景图片宽度':
      newOption.backgroundStyle.type2Image.imgWidth = action.payload.e;
      break;
    case '背景图片高度':
      newOption.backgroundStyle.type2Image.imgHeight = action.payload.e;
      break;
    //   ------------- 边框设置 -------------
    case '边框显隐':
      newOption.borderStyle.status = action.payload.e;
      break;
    case '边框宽度':
      newOption.borderStyle.borderWidth = action.payload.e;
      break;
    case '边框颜色':
      newOption.borderStyle.borderColor = action.payload.e;
      break;
    case '边框投影显隐':
      newOption.borderStyle.boxShadow.status = action.payload.e;
      break;
    case '边框投影颜色':
      newOption.borderStyle.boxShadow.color = action.payload.e;
      break;
    case '边框投影水平偏移量':
      newOption.borderStyle.boxShadow.xShadow = action.payload.e;
      break;
    case '边框投影垂直偏移量':
      newOption.borderStyle.boxShadow.yShadow = action.payload.e;
      break;
    case '边框投影模糊距离':
      newOption.borderStyle.boxShadow.blur = action.payload.e;
      break;
    case '边框圆角':
      newOption.borderStyle.borderRadius = action.payload.e;
      break;
    // ------------- 牵引线样式 -------------
    case '牵引线显隐':
      newOption.tractionLineStyle.status = action.payload.e;
      break;
    case '牵引线位置':
      newOption.tractionLineStyle.location = action.payload.e;
      break;
    case '牵引线样式':
      newOption.tractionLineStyle.lineStyle = action.payload.e;
      break;
    case '牵引线颜色':
      newOption.tractionLineStyle.lineColor = action.payload.e;
      break;
    case '牵引线宽度':
      newOption.tractionLineStyle.lineWidth = action.payload.e;
      break;
    case '牵引线高度':
      newOption.tractionLineStyle.lineHeight = action.payload.e;
      break;
    default:
  }
  state.mapStyle.labelTextStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
