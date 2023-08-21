// scenegraphOption
// 模型图层Option
export const scenegraphOption = {
  icon: {
    imgSrc: 1,
    ImgArr: [],
  },
  scenegraph: 'https://www.dataojo.com/docloudresource/models/docloud-model/002/002.gltf',
  modelType: false,
  color: {
    color: 'rgb(0,85,255)',
    status: false,
    opacity: 1,
  },
  sizeScale: 25,
  height: 0,
  animations: {
    speed: 1,
    playing: true,
  },
};

//构建MapTheme
export let buildscenegraphOption = (state, action) => {
  let newOption = {};
  if (state.mapStyle.scenegraphStyle) {
    newOption = state.mapStyle.scenegraphStyle;
  } else {
    newOption = scenegraphOption;
  }
  newOption = { ...scenegraphOption, ...newOption };

  switch (action.payload.key) {
    case '选择模型样式':
      newOption.icon.imgSrc =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '模型图层模型地址':
      newOption.scenegraph =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      break;
    case '模型大小系数':
      newOption.sizeScale =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '模型是否开启动画':
      newOption.animations.playing =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : true;
      break;
    case '模型动画速度':
      newOption.animations.speed =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '模型自定义颜色':
      newOption.color.color =
        action.payload.e !== undefined && action.payload.e !== null
          ? action.payload.e
          : 'rgb(0,53,177)';
      break;
    case '模型自定义颜色开关':
      newOption.color.status =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '是否自定义模型':
      newOption.modelType =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      break;
    case '模型透明度':
      newOption.color.opacity =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      break;
    case '模型距地高度':
      newOption.height =
        action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
      break;
    default:
      break;
  }
  state.mapStyle.scenegraphStyle = newOption;
  state.selectDrawLayerData.style = state.mapStyle;
};
