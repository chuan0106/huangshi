export const eventOption = {
  isShow: false,
  eventCondition: '', //交互触发条件
  eventAction: '0', //交互动作响应
  popType: 0, //弹框3种类别（0:系统默认；1:大屏页面；2:外部地址）
  //   explorationType: null, //探索类型 ------（暂时不用）
  //   selectivExploration: '', //选择探索 ------（暂时不用）
  //   系统默认
  interactionDefault: {
    selectField: [], //选择字段
    boxType: 1, //默认弹框样式选择
    boxStyle: {
      style1: {
        background: 'rgba(255,255,255,0.7)',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 3,
        keyStyle: {
          color: 'rgba(0,0,0,0.8)',
          fontSize: 12,
          fontFamily: 'MicrosoftYaHei',
          fontWeight: 500,
        },
        valueStyle: {
          color: '#000000',
          fontSize: 14,
          fontFamily: 'MicrosoftYaHei',
          fontWeight: 500,
        },
      },
      style2: {
        background: 'rgba(0,0,0,0.7)',
        borderWidth: 1,
        borderColor: '#0055FF',
        borderRadius: 3,
        keyStyle: {
          color: 'rgba(255,255,255,0.7)',
          fontSize: 12,
          fontFamily: 'MicrosoftYaHei',
          fontWeight: 500,
        },
        valueStyle: {
          color: '#ffffff',
          fontSize: 14,
          fontFamily: 'MicrosoftYaHei',
          fontWeight: 500,
        },
      },
    },
  },
  //   大屏页面
  interactionScreen: {
    selectScreen: '', //选择大屏
    dataFilter: [], //数据筛选
  },
  //   外部地址
  interactionExternal: {
    url: '',
  },
  //   固定大小
  fixedSize: {
    status: false,
    width: 300, //弹框宽度
    height: 200, //弹框高度
  },
  //弹框位置配置项
  interactionBoxPosition: {
    status: true, //弹窗位置是否开启
    positionType: 0, //弹窗位置类型 0:追随对齐；1:固定位置
    placement: 'top', //追随对齐 top right bottom left leftTop rightTop leftBottom rightBottom
    x: 0, //固定位置x
    y: 0, //固定位置y
  },
  //   选中样式
  activeStyle: {
    status: true, // 是否开启选中样式
    selectColor: '', //选中颜色
    isTwinkle: true, //是否选中闪烁
    isEnlarge: true, //选中是否放大
    //   是否飞行
    flightCamera: {
      status: false,
      zoom: -1,
      time: 0.5,
    },
  },
  //   关闭按钮
  closeBtn: {
    status: true, // 是否开启
    size: 20,
    color: '#ffffff',
    marginTop: 10,
    marginRight: 10,
  },
  //   实现动作 ------ 跳转
  openNewPage: {
    url: '', //跳转外部地址
  },
};

//构建MapTheme
export let buildeventOption = (state, action) => {
  let newOption = {};
  if (state.eventOption) {
    newOption = state.eventOption;
  } else {
    newOption = eventOption;
  }
  newOption = { ...eventOption, ...newOption };
  switch (action.payload.key) {
    case '是否显示':
      newOption.isShow = action.payload.e;
      break;
    case '触发条件':
      newOption.eventCondition = action.payload.e;
      break;
    case '实现动作':
      newOption.eventAction = action.payload.e;
      break;
    case '弹框类别':
      newOption.popType = action.payload.e;
      break;
    case '系统默认选择字段':
      newOption.interactionDefault.selectField = action.payload.e;
      break;
    case '系统默认弹框样式':
      newOption.interactionDefault.boxType = action.payload.e;
      break;
    //   ----- 系统默认_字段名称_样式 ------
    case '系统默认字段名字体大小':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.keyStyle.fontSize = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.keyStyle.fontSize = action.payload.e;
      }
      break;
    case '系统默认字段名字体粗细':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.keyStyle.fontWeight = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.keyStyle.fontWeight = action.payload.e;
      }
      break;
    case '系统默认字段名字体样式':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.keyStyle.fontFamily = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.keyStyle.fontFamily = action.payload.e;
      }
      break;
    case '系统默认字段名字体颜色':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.keyStyle.color = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.keyStyle.color = action.payload.e;
      }
      break;
    //   ----- 系统默认_字段值_样式 ------
    case '系统默认字段值字体大小':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.valueStyle.fontSize = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.valueStyle.fontSize = action.payload.e;
      }
      break;
    case '系统默认字段值字体粗细':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.valueStyle.fontWeight = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.valueStyle.fontWeight = action.payload.e;
      }
      break;
    case '系统默认字段值字体样式':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.valueStyle.fontFamily = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.valueStyle.fontFamily = action.payload.e;
      }
      break;
    case '系统默认字段值字体颜色':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.valueStyle.color = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.valueStyle.color = action.payload.e;
      }
      break;
    //   ----- 系统默认_其他样式 ------
    case '系统默认弹框半径':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.borderRadius = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.borderRadius = action.payload.e;
      }
      break;
    case '系统默认弹框背景色':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.background = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.background = action.payload.e;
      }
      break;
    case '系统默认弹框边框宽':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.borderWidth = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.borderWidth = action.payload.e;
      }
      break;
    case '系统默认弹框边框色':
      if (newOption.interactionDefault.boxType === 1) {
        newOption.interactionDefault.boxStyle.style1.borderColor = action.payload.e;
      } else if (newOption.interactionDefault.boxType === 2) {
        newOption.interactionDefault.boxStyle.style2.borderColor = action.payload.e;
      }
      break;

    //   ------------ 大屏页面 ------------
    case '大屏页面选择大屏':
      newOption.interactionScreen.selectScreen = action.payload.e;
      break;
    case '大屏页面数据筛选':
      newOption.interactionScreen.dataFilter = action.payload.e;
      break;

    //   ------------ 外部地址 ------------
    case '外部地址url':
      newOption.interactionExternal.url = action.payload.e;
      break;

    //   ------------ 固定弹框大小 ------------
    case '弹框大小是否开启':
      newOption.fixedSize.status = action.payload.e;
      break;
    case '弹框大小宽度':
      newOption.fixedSize.width = action.payload.e;
      break;
    case '弹框大小高度':
      newOption.fixedSize.height = action.payload.e;
      break;

    //   ------------ 弹框位置配置项 ------------
    case '弹框位置是否开启':
      newOption.interactionBoxPosition.status = action.payload.e;
      break;
    case '弹框位置类型':
      newOption.interactionBoxPosition.positionType = action.payload.e;
      break;
    case '弹框位置放置方位':
      newOption.interactionBoxPosition.placement = action.payload.e;
      break;
    case '弹框位置固定x':
      newOption.interactionBoxPosition.x = action.payload.e;
      break;
    case '弹框位置固定y':
      newOption.interactionBoxPosition.y = action.payload.e;
      break;

    //   ------------ 选中样式配置项 ------------
    case '选中样式是否开启':
      newOption.activeStyle.status = action.payload.e;
      break;
    case '选中样式颜色':
      newOption.activeStyle.activeColor = action.payload.e;
      break;
    case '选中样式是否闪烁':
      newOption.activeStyle.isTwinkle = action.payload.e;
      break;
    case '选中样式是否放大':
      newOption.activeStyle.isEnlarge = action.payload.e;
      break;
    case '选中样式是否飞行':
      //   if (!newOption.activeStyle.flightCamera) {
      //     newOption.activeStyle.flightCamera = { status: false, zoom: 1 };
      //   }
      let viewstate = localStorage.getItem('viewport');
      if (viewstate && newOption.activeStyle?.flightCamera?.zoom === -1) {
        viewstate = JSON.parse(viewstate);
        newOption.activeStyle.flightCamera.zoom = parseInt(viewstate?.zoom);
      }
      newOption.activeStyle.flightCamera.status = action.payload.e;
      break;
    case '选中样式飞行zoom':
      newOption.activeStyle.flightCamera.zoom = action.payload.e;
      break;
    case '选中样式飞行时间':
      newOption.activeStyle.flightCamera.time = action.payload.e;
      break;

    //   ------------ 关闭按钮配置项 ------------
    case '关闭按钮是否开启':
      newOption.closeBtn.status = action.payload.e;
      break;
    case '关闭按钮大小':
      newOption.closeBtn.size = action.payload.e;
      break;
    case '关闭按钮颜色':
      newOption.closeBtn.color = action.payload.e;
      break;
    case '关闭按钮距上':
      newOption.closeBtn.marginTop = action.payload.e;
      break;
    case '关闭按钮距右':
      newOption.closeBtn.marginRight = action.payload.e;
      break;
    //   ------------ 跳转配置项 ------------
    case '跳转url':
      newOption.openNewPage.url = action.payload.e;
      break;
    default:
  }
  state.eventOption = newOption;
};
