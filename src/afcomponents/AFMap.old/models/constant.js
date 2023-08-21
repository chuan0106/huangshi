import IPConfig from '@/constants/IPConfig';
//组件类型
export const commonColor = param => {
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

/*随机获取颜色*/
let commonColor1 = param => {
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

export const widgetType = {
  ALL_WIDGET: '0', //所有组件
  CHART_WIDGET: '1', //图表组件
  MAP_WIDGET: '2', //地图组件
  OTHER_WIDGET: '3', //其他组件
  JINNIU_WIDGET: '4',
  Earth3D_WIDGET: '5', // 3d球组件
};

//组件类型
export const widgetTypeString = {
  CHART_WIDGET: 'chart', //图表组件
  MAP_WIDGET: 'layer', //地图组件
  OTHER_WIDGET: 'widget', //其他组件
};

//数据源类型
// 0	CSV文件数据
// 1	JSON文件数据
// 2	MySQL数据库数据
// 3	elasticSearch数据
// 4	mapd数据库数据
// 5	oracle数据库数据
// 6	api
export const sourceType = {
  API: 3, //API 数据
  GEOMESA: 7, //geomesa 数据
  URL: 8, //URL数据
  LOCALDATA: 9,
};

//条件查找类型
export const filterType = {
  ACCURATE_FILTER: 1, //精确查找
  CONDITION_FILTER: 2, //条件查找
  SQL_FILTER: 3, //表达式, //条件查找
  DATE_FILTER: 4, //日期筛选
};

//操作符类型
export const operatorType = {
  //条件查询
  // 1	等于
  // 2	不等于
  // 3	大于
  // 4	大于等于
  // 5	小于
  // 6	小于等于
  // 7	区间
  OPERATOR_ONE: 1,
  OPERATOR_TWO: 2,
  OPERATOR_THREE: 3,
  OPERATOR_FOUR: 4,
  OPERATOR_FIVE: 5,
  OPERATOR_SIX: 6,
  OPERATOR_SEVEN: 7,

  //精确查询
  OPERATOR_FOURTY: 14,
  OPERATOR_FIFTY: 15,
  OPERATOR_TWENTY_SEVEN: 27,
  //sql查询
};

//专题风格类型
export const themeStyleTypeConstant = {
  THEME_ONE: 1,
  THEME_TWO: 2,
  THEME_THREE: 3,
};

//地图图层类型
export const mapLayerTypeNumberConstant = {
  SCATTER_LAYER: 1,
  HEATMAP_LAYER: 2,
  CUBE_LAYER: 3,
  HEARTBEAT_LAYER: 4,
  SIZESCATTER_LAYER: 5,
  LINE_LAYER: 6,
  REGION_LAYER: 7,
  OD_LAYER: 8,
  GRID_LAYER: 9,
  HEXAGON_LAYER: 10,
  ARC_LAYER: 11,
  TRIPS_LAYER: 12,
  ICON_LAYER: 13,
};
//地图图层类型名称对应
export const mapLayerTypeName = {
  ScatterLayer: '散点图层', //散点图
  HeatMapLayer: '热力图层', //热力
  CubeLayer: '网格柱状图层', //柱状
  HeartBeatLayer: '心跳图层', //心跳
  SizeScatterLayer: '聚合点图层', //聚合点
  LineLayer: '线图层', //飞线
  RegionLayer: '面图层', //多边形
  ARCLayer: '弧图层', //od
  ODLayer: 'OD图层', //od
  GridLayer: '网格图层', //网格
  HexagonLayer: '六边形网格图层', //蜂窝
  TripsLayer: '动态轨迹图层', //动态轨迹图
  IconLayer: '图标图层', //图标图层
  LabelLayer: '标签图层', //标签图层
  WarnImageLayer: '警告图层', // 警告图层
  FlyingLineLayer: '飞线图层', //飞线图层
  TextLayer: '文本图层', // 文本图层
  ScenegraphLayer: '模型图层', // 模型图层
};
//地图图层类型
export const mapLayerTypeConstant = {
  SCATTER_LAYER: 'ScatterLayer', //散点图
  HEATMAP_LAYER: 'HeatMapLayer', //热力
  CUBE_LAYER: 'CubeLayer', //柱状
  HEARTBEAT_LAYER: 'HeartBeatLayer', //心跳
  SIZESCATTER_LAYER: 'SizeScatterLayer', //聚合点
  LINE_LAYER: 'LineLayer', //飞线
  REGION_LAYER: 'RegionLayer', //多边形
  ARC_LAYER: 'ARCLayer', //od
  OD_LAYER: 'ODLayer', //od
  GRID_LAYER: 'GridLayer', //网格
  HEXAGON_LAYER: 'HexagonLayer', //蜂窝
  // ARC_LAYER: 'ARCLayer', //弧线
  TRIPS_LAYER: 'TripsLayer', //动态轨迹图
  ICON_LAYER: 'IconLayer', //图标图层
  LABEL_LAYER: 'LabelLayer', //标签图层
  WARNIMAGE_LAYER: 'WarnImageLayer', // 警告图层
  FLYINGLINE_LAYER: 'FlyingLineLayer', //飞线图层
  TEXT_LAYER: 'TextLayer', // 文本图层
  SCENEGRAPH_LAYER: 'ScenegraphLayer', // 模型图层
};

//地图类型方法
export function mapTypeFun(mapNumberType) {
  let mapType = 'ScatterLayer';
  if (mapNumberType === 1) {
    mapType = 'ScatterLayer';
  }
  if (mapNumberType === 2) {
    mapType = 'HeatMapLayer';
  }
  if (mapNumberType === 3) {
    mapType = 'CubeLayer';
  }
  if (mapNumberType === 4) {
    mapType = 'HeartBeatLayer';
  }
  if (mapNumberType === 5) {
    mapType = 'SizeScatterLayer';
  }
  if (mapNumberType === 6) {
    mapType = 'LineLayer';
  }
  if (mapNumberType === 7) {
    mapType = 'RegionLayer';
  }
  if (mapNumberType === 8) {
    mapType = 'ODLayer';
  }
  if (mapNumberType === 9) {
    mapType = 'GridLayer';
  }
  if (mapNumberType === 10) {
    mapType = 'HexagonLayer';
  }
  if (mapNumberType === 11) {
    mapType = 'ARCLayer';
  }
  if (mapNumberType === 12) {
    mapType = 'TripsLayer';
  }
  if (mapNumberType === 13) {
    mapType = 'IconLayer';
  }
  if (mapNumberType === 14) {
    mapType = 'LabelLayer';
  }
  if (mapNumberType === 15) {
    mapType = 'FlyingLineLayer';
  }
  if (mapNumberType === 16) {
    mapType = 'WarnImageLayer';
  }
  if (mapNumberType === 17) {
    mapType = 'ScenegraphLayer';
  }
  if (mapNumberType === 18) {
    mapType = 'TextLayer';
  }
  return mapType;
}

//地图类型方法
export function mapNumberTypeFun(mapNumberType) {
  let mapType = 1;
  if (mapNumberType === 'ScatterLayer') {
    mapType = 1;
  }
  if (mapNumberType === 'HeatMapLayer') {
    mapType = 2;
  }
  if (mapNumberType === 'CubeLayer') {
    mapType = 3;
  }
  if (mapNumberType === 'HeartBeatLayer') {
    mapType = 4;
  }
  if (mapNumberType === 'SizeScatterLayer') {
    mapType = 5;
  }
  if (mapNumberType === 'LineLayer') {
    mapType = 6;
  }
  if (mapNumberType === 'RegionLayer') {
    mapType = 7;
  }
  if (mapNumberType === 'ODLayer') {
    mapType = 8;
  }
  if (mapNumberType === 'GridLayer') {
    mapType = 9;
  }
  if (mapNumberType === 'HexagonLayer') {
    mapType = 10;
  }
  if (mapNumberType === 'ARCLayer') {
    mapType = 11;
  }
  if (mapNumberType === 'TripsLayer') {
    mapType = 12;
  }
  if (mapNumberType === 'IconLayer') {
    mapType = 13;
  }
  if (mapNumberType === 'LabelLayer') {
    mapType = 14;
  }
  if (mapNumberType === 'FlyingLineLayer') {
    mapType = 15;
  }
  if (mapNumberType === 'WarnImageLayer') {
    mapType = 16;
  }
  if (mapNumberType === 'ScenegraphLayer') {
    mapType = 17;
  }
  if (mapNumberType === 'TextLayer') {
    mapType = 18;
  }
  return mapType;
}

//通过图层名获取地图风格的key
export function layerStyleKeyFun(mapNumberType) {
  let mapstylekey = null;
  if (mapNumberType === 'ScatterLayer') {
    mapstylekey = 'scatterStyle';
  }
  if (mapNumberType === 'HeatMapLayer') {
    mapstylekey = 'heatStyle';
  }
  if (mapNumberType === 'CubeLayer') {
    mapstylekey = 'cubeStyle';
  }
  if (mapNumberType === 'HeartBeatLayer') {
    mapstylekey = 'heartBeatStyle';
  }
  if (mapNumberType === 'SizeScatterLayer') {
    mapstylekey = 'sizeScatterStyle';
  }
  if (mapNumberType === 'LineLayer') {
    mapstylekey = 'lineStyle';
  }
  if (mapNumberType === 'RegionLayer') {
    mapstylekey = 'regionStyle';
  }
  if (mapNumberType === 'ODLayer') {
    mapstylekey = 'arcStyle';
  }
  if (mapNumberType === 'GridLayer') {
    mapstylekey = 'gridStyle';
  }
  if (mapNumberType === 'HexagonLayer') {
    mapstylekey = 'hexagonStyle';
  }
  if (mapNumberType === 'ARCLayer') {
    mapstylekey = 'arcStyle';
  }
  if (mapNumberType === 'TripsLayer') {
    mapstylekey = 'tripsStyle';
  }
  if (mapNumberType === 'IconLayer') {
    mapstylekey = 'iconStyle';
  }
  if (mapNumberType === 'LabelLayer') {
    mapstylekey = 'labelTextStyle';
  }
  if (mapNumberType === 'FlyingLineLayer') {
    mapstylekey = 'flyingLineStyle';
  }
  if (mapNumberType === 'WarnImageLayer') {
    mapstylekey = 'warnImageOption';
  }
  if (mapNumberType === 'ScenegraphLayer') {
    mapstylekey = 'scenegraphStyle';
  }
  if (mapNumberType === 'TextLayer') {
    mapstylekey = 'textStyle';
  }
  return mapstylekey;
}

// 各地图类型支持的数据格式
export const layerDataType = [
  {
    name: 'ScatterLayer',
    id: 1,
    title: '散点图',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'SizeScatterLayer',
    id: 5,
    title: '聚合点',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'HeartBeatLayer',
    id: 4,
    title: '心跳图',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'IconLayer',
    id: 13,
    title: '图标图层',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'HeatMapLayer',
    id: 2,
    title: '热力图',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'CubeLayer',
    id: 3,
    title: '网格柱状',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'HexagonLayer',
    id: 10,
    title: '六边形网格',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'TripsLayer',
    id: 12,
    title: '动态轨迹图',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'ODLayer',
    id: 8,
    title: 'OD图',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'ARCLayer',
    id: 11,
    title: '弧图层',
    dataType: ['Point', 'MultiPoint'],
  },
  {
    name: 'LineLayer',
    id: 6,
    title: '线图层',
    dataType: ['LineString', 'MultiLineString', 'Polygon', 'MultiPolygon'],
  },
  {
    name: 'RegionLayer',
    id: 7,
    title: '面图层',
    dataType: ['LineString', 'MultiLineString', 'Polygon', 'MultiPolygon'],
  },
  // {
  //   name: "GridLayer",
  //   id: 9,
  //   title:'网格图',
  //   dataType:'Point'
  // },
];

// 图表类型
export const chartTypeConstant = {
  // 折线图
  BASELINE_CHART: 'baseLineChart',
  //阶梯折线图
  STEPLINE_CHART: 'stepLineChart',
  // 柱状图
  GROUPBAR_CHART: 'groupBarChart',
  // 直方图
  HISTOGRAM_CHART: 'histogramChart',
  // 堆叠直方图
  HISTOGRAMSTACK_CHART: 'histogramStackChart',
  // 饼图
  BASEPIE_CHART: 'basePieChart',
  // 多层饼图
  MULTILEVELPIE_CHART: 'multiLevelPieChart',
  // 面积图
  AREALINE_CHART: 'areaLineChart',
  // 百分比面积图
  PERCENTAREA_CHART: 'percentAreaChart',
  // 条形图
  COLUMN_CHART: 'columnChart',
  // 正负条形图
  PYRAMID_CHART: 'pyramidChart',
  // 正负堆叠条形图
  PYRAMIDSTACK_CHART: 'pyramidStackChart',
  // 堆叠柱状图
  STACK_CHART: 'stackChart',
  // 百分比柱状图
  PERCENTBAR_CHART: 'percentBarChart',
  // 横向堆叠柱状图
  STACKTRANSVERSE_CHART: 'stackTransverseChart',
  // 环形饼图
  RINGPIE_CHART: 'ringPieChart',
  // 雷达图
  BASERADAR_CHART: 'baseRadarChart',
  // 折线柱状混合图
  MIXLINEBAR_CHART: 'mixLineBarChart',
  // 散点图
  SCATTER_CHART: 'baseScatterChart',
  // 矩形图
  BASETREEMAP_CHART: 'baseTreeMapChart',
  // 漏斗图
  BASEFUNNEL_CHART: 'baseFunnelChart',
  // 桑基图
  BASESANKEY_CHART: 'baseSankeyChart',
  // 极坐标堆叠柱状图
  ARCCOLUMNAR_CHART: 'arcColumnarChart',
  // 极坐标柱状图
  GROUPARCCOLUMNAR_CHART: 'groupArcColumnarChart',
  //列表
  LIST_CHART: 'listChart',
  //南丁戈尔图
  NG_CHART: 'ngChart',
  //气泡图
  DBUBBLE: 'dbubble',
  // 词云
  DWORDCLOUD: 'DWordCloud',
  // 地图
  BASEMAP_CHART: 'baseMapChart',
  //河流图
  THEMERIVER_CHART: 'themeRiverChart',
  //热力图
  HEATMAP_CHART: 'heatMapChart',
};

// 图表类型方法
export function chartTypeFun(chartType) {
  let type = 'line';
  if (chartType === 'baseLineChart') {
    type = 'line';
  }
  if (chartType === 'stepLineChart') {
    type = 'line';
  }
  if (chartType === 'groupBarChart') {
    type = 'bar';
  }
  if (chartType === 'histogramChart') {
    type = 'bar';
  }
  if (chartType === 'histogramStackChart') {
    type = 'bar';
  }
  if (chartType === 'basePieChart') {
    type = 'pie';
  }
  if (chartType === 'areaLineChart') {
    type = 'line';
  }
  if (chartType === 'percentAreaChart') {
    type = 'line';
  }
  if (chartType === 'columnChart') {
    type = 'bar';
  }
  if (chartType === 'pyramidChart') {
    type = 'bar';
  }
  if (chartType === 'pyramidStackChart') {
    type = 'bar';
  }
  if (chartType === 'stackChart') {
    type = 'bar';
  }
  if (chartType === 'percentBarChart') {
    type = 'bar';
  }
  if (chartType === 'stackTransverseChart') {
    type = 'bar';
  }
  if (chartType === 'ringPieChart') {
    type = 'pie';
  }
  if (chartType === 'multiLevelPieChart') {
    type = 'pie';
  }
  if (chartType === 'baseRadarChart') {
    type = 'radar';
  }
  if (chartType === 'mixLineBarChart') {
    type = 'bar';
  }

  if (chartType === 'baseScatterChart') {
    type = 'scatter';
  }
  if (chartType === 'baseTreeMapChart') {
    type = 'treemap';
  }
  if (chartType === 'baseFunnelChart') {
    type = 'funnel';
  }
  if (chartType === 'themeRiverChart') {
    type = 'themeRiver';
  }
  if (chartType === 'baseSankeyChart') {
    type = 'sankey';
  }
  if (chartType === 'arcColumnarChart') {
    type = 'bar';
  }
  if (chartType === 'groupArcColumnarChart') {
    type = 'bar';
  }
  if (chartType === 'baseMapChart') {
    type = 'map';
  }
  if (chartType === 'heatMapChart') {
    type = 'heatmap';
  }
  return { type, chartType };
}

// 3d球组件类型
export const earth3DWidgetType = {
  // 3D地球组件（散点）
  Earth3DScatterPoint_WIDGET: 1,
  Earth3DODPoint_WIDGET: 2,
  Earth3DBarPoint_WIDGET: 3,
  Earth3DMap_WIDGET: 4,
};
//判断添加次轴是否显示
export function isYesChartFunc(params) {
  let arr = [
    chartTypeConstant.BASELINE_CHART,
    chartTypeConstant.STEPLINE_CHART,
    chartTypeConstant.PYRAMIDSTACK_CHART,
    chartTypeConstant.MIXLINEBAR_CHART,
    chartTypeConstant.GROUPBAR_CHART,
    chartTypeConstant.COLUMN_CHART,
  ];
  if (arr.indexOf(params) > -1) {
    return true;
  } else {
    return false;
  }
}

//其他组件类型
export const otherWidgetType = {
  // 预警指标组件
  WARNINDEX_WIDGET: 1,
  // 带同比环比趋势的指标组件
  TRENDWIDGETWITHRATIO: 4,
  // 专题面板组件
  THEMATICPANEL_WIDGET: 7,
  //仪表盘指标组件
  DASHBOARD_WIDGET: 10,
  // 外部应用组件
  EXTERNALAPP: 15,
  // 文本组件
  LABEL_WIDGET: 16,
  // 普通指标组件
  LABELINDEXGROUP_WIDGET: 17,
  // 表格组件
  TABLE_WIDGET: 18,
  // 事件列表
  EVENT_LIST_WIDGET: 19,
  // 时间线组件
  TIMELINE_WIDGET: 20,
  //天气组件
  WEATHER_WIDGET: 21,
  //图片组件
  IMG_WIDGET: 22,
  //数值指标
  NUMBER_WIDGET: 23,
  //标题文本框组件
  TEXT_WIDGET: 24,
  // 轮播列表组件
  CAROUSEL_WIDGET: 25,
  // 视频组件
  VIDEO_WIDGET: 26,
  // 图片轮播组件
  WHEELPLANTING_WIDGET: 27,
  // 跑马灯
  CAROUSEL_TRANS_WIDGET: 28,
  // 时间器组件
  Time_Widget: 29,
  // 进度条组件
  Progress_Widget: 30,
  // 文本组件
  ParagraphText_Widget: 31,
  // 水位图组件
  LiquidFillChart_Widget: 32,
  // 新表格组件
  NEWTABLE_WIDGET: 34,
  // 百分比环图组件
  PERCENTAGERING_WIDGET: 35,

  // 企业组件常量

  // 标签页组件
  TabChart_widget: 33,
  // 信息面板翻牌器
  INFORDRAW_WIDGET: 36,
  // 指标翻牌器组件
  COMPANY_NUMBERWIDGET: 37,
  // 新天气情况组件
  NEWWEATHER_WIDGET: 38,
  //占比数值组件
  RATIONUMBER_WIDGET: 42,
  //时序组件
  SEQUENCE_WIDGET: 43,
  //流程组件
  FLOWCHART_WIDGET: 44,
  //条形排名组件
  BAR_RANKING_WIDGET: 45,
  //分割线
  DIVIDINGLINE_WIDGET: 47,
  //信息播报
  INFORBROADCAST_WIDGET: 48,
  //下拉菜单
  SELECT_WIDGET: 49,
  //倒计时组件
  COUNTDOWN_WIDGET: 50,
  // 指标记分牌
  INDICATORMARHER_WIDGET: 51,
  //形状填充
  COLORBLOCK_WIDGET: 55,
  //外部应用组件
  EXTRENAL_WIDGET: 101,
  //内部应用组件
  IN_WIDGET: 102,
  //点击跳转链接（热区）
  BUTTON_WIDGET: 103,
  //智慧金牛组件
  JINNIU_WIDGET: 1000,
  //过滤组件
  FILTER_WIDGET: 2000,

  //控件类型
  //显示隐藏组件
  SHOWHIDDEN_WIDGET: 5000,
  //导航栏
  NAVIGATIONBAR: 5001,
  //自定义组件类型
  CUSTOM_WIDGET: 10000,
};

//地图色系的色系长度选择
export const mapColorArraySize = [
  {
    key: 1,
    value: 6,
    name: '6色',
  },
  {
    key: 2,
    value: 8,
    name: '8色',
  },
  {
    key: 3,
    value: 10,
    name: '10色',
  },
  {
    key: 4,
    value: 12,
    name: '12色',
  },
  {
    key: 5,
    value: 14,
    name: '14色',
  },
  {
    key: 6,
    value: 16,
    name: '16色',
  },
];
//对应的单色图标的颜色
export const mapColorRadio = [
  'rgb(0,85,255)',
  'rgb(249,249,249)',
  'rgb(201,201,201)',
  'rgb(123,123,123)',
  'rgb(50,50,50)',
  'rgb(0,53,177)',
  'rgb(0,73,244)',
  'rgb(0,164,235)',
  'rgb(116,216,25516)',
  'rgb(22,165,165)',
  'rgb(7,179,5)',
  'rgb(118,209,8',
  'rgb(184,217,0)',
  'rgb(114,91,221)',
  'rgb(171,20,158)',
  'rgb(251,25,120)',
  'rgb(238,99,39)',
  'rgb(255,168,31)',
  'rgb(246,203,71)',
  'rgb(255,237,42)',
  'rgb(176,143,88)',
];
// 色块颜色值
export const colorBlockArray = [
  '#ffffff',
  '#CACACA',
  '#818181',
  '#181818',
  '#0035B1',
  '#0049F4',
  '#05AFF9',
  '#3ADCFA',
  '#0CA875',
  '#07B305',
  '#1DEC65',
  '#76D108',
  '#725BDD',
  '#AB149E',
  '#FA29FF',
  '#F12B09',
  '#F3850A',
  '#FFB64E',
  '#FFFF10',
  '#B38408',
];
//初始的默认视角
export const initialViewState = {
  latitude: 40.0,
  longitude: 116.3912667309142,
  zoom: 8,
  maxZoom: 17,
  pitch: 0,
  bearing: 0,
};
//初始的层级控制
export const initZoom = {
  minZoom: 0,
  maxZoom: 17,
};
//初始化底图的风格
export const deckMapStyleUrl = IPConfig.initMapStyle;
//默认创建的底图风格
export const defaultDeckMapStyle = 1;
