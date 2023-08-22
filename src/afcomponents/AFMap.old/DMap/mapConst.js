import { FlyToInterpolator } from 'deck.gl';
//底图样式
export const MAPBOX_STYLE = 'https://www.dataojocloud.com/styles/china_V3_gray/style.json';
//地图token
export const MAPBOX_TOKEN =
  'pk.eyJ1Ijoid2VpemhpbWluMjAwNyIsImEiOiJjajkzeHRhcWkyaWtsMzNucmZkZHBsbWtsIn0.Roa71zaPUY1M00OQ0X1WzA';

//飞行动画
export const FlyToCamera = {
  transitionInterpolator: new FlyToInterpolator(),
  transitionDuration: 1000,
};
//图层名称
export const mapLayerName = {
  /**
   * deckgl图层
   */
  //散点图层
  SCATTERPLOT_LAYER: 'ScatterplotLayer',
  //动态轨迹图层
  TRIPS_LAYER: 'TripsLayer',
  //od线
  ARC_LAYER: 'ArcLayer',
  // 在指定的边界处渲染位图
  BITMAP_LAYER: 'BitmapLayer',
  // 垂直圆柱体的热图
  COLUMN_LAYER: 'ColumnLayer',
  // CPUGridLayer根据输入数组渲染网格热图
  CPUGRID_LAYER: 'CubeLayer',

  // 等值线图层
  CONTOUR_LAYER: 'ContourLayer',
  // 点线面图层
  GEOJSON_LAYER: 'GeoJsonLayer',
  // GPUGridLayer根据输入数组渲染网格热图。(仅在使用支持WebGL2的浏览器时才受支持。)
  GPUGRID_LAYER: 'GPUGridLayer',
  // 大圆弧图层
  GREATCIRCLE_LAYER: 'GreatCircleLayer',
  // 文本图层
  TEXT_LAYER: 'TextLayer',
  // 路径图层
  PATH_LAYER: 'PathLayer',
  // 线图层
  LINE_LAYER: 'LineLayer',
  // 图标图层
  ICON_LAYER: 'IconLayer',
  // 热力图层
  HEATMAP_LAYER: 'HeatmapLayer',
  // 地形图层
  DTERRAIN_LAYER: 'DTerrainLayer',
  // 多边形（带孔）
  SOLIDPOLYGON_LAYER: 'SolidPolygonLayer',
  // 屏幕网格图层
  SCREENGRID_LAYER: 'ScreenGridLayer',
  // 渲染面数据
  POLYGON_LAYER: 'PolygonLayer',
  // 基于网格的热图图层
  GRIDCELL_LAYER: 'GridCellLayer',
  // 网格热图
  GRID_LAYER: 'GridLayer',
  //  六边形热图图层
  HEXAGON_LAYER: 'HexagonLayer',
  // H3ClusterLayer渲染由H3地理空间索引系统的六边形集表示的区域
  H3CLUSTER_LAYER: 'H3ClusterLayer',
  // H3HexagonLayer渲染H3地理空间索引系统中的六边形。
  H3HEXAGON_LAYER: 'H3HexagonLayer',
  // ScenegraphLayer渲染完整luma.gl scenegraph的多个实例。虽然可以通过编程方式创建场景图，但它们通常是通过加载glTF文件获得的。
  SCENEGRAPH_LAYER: 'ScenegraphLayer',
  /**
   * mapbox图层
   */
  //标签图层
  TEXT_LABEL: 'textLabelLayer',
  //热力图层
  HEAT_LAYER: 'HeatLayer',
  // 动态心跳闪烁图层
  HEARTBEATLAYER: 'HeartBeatLayer',
  // 聚合点图层
  SIZESCATTERLAYER: 'SizeScatterLayer',
  // 动态飞线图层
  FLYINGLINELAYER: 'FlyingLineLayer',
  // 报警点图层
  WARNIMAGELAYER: 'WarnImageLayer',
};

//初始化视角
export const initialViewState = {
  altitude: 1.5,
  bearing: 0,
  latitude: 39.912943,
  longitude: 116.404844,
  maxPitch: 60,
  maxZoom: 17,
  minPitch: 0,
  minZoom: 0,
  pitch: 0,
  zoom: 5,
  transitionInterpolator: new FlyToInterpolator(),
  transitionDuration: 1000,
  //mapbox
  // zoom: 13,
  // center: [116.404844, 39.912943],
  // style: MAPBOX_STYLE,
  // pitch: 20,
};

//运动视角
export const viewState = {
  altitude: 1.5,
  bearing: 0,
  latitude: 39.912943,
  longitude: 116.404844,
  maxPitch: 60,
  maxZoom: 17,
  minPitch: 0,
  minZoom: 0,
  pitch: 0,
  zoom: 5,
  transitionInterpolator: new FlyToInterpolator(),
  transitionDuration: 1000,
};

// 区分mapbox图层与deck.gl图层
export const layerTypeFiltter = {
  mapbox: 2,
  deckgl: 1,
};
