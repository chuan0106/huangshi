(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('deck.gl'), require('@luma.gl/core'), require('mapbox-gl'), require('@deck.gl/mapbox'), require('@deck.gl/core'), require('antd'), require('@deck.gl/layers'), require('@luma.gl/constants'), require('@deck.gl/mesh-layers'), require('@deck.gl/geo-layers'), require('@loaders.gl/3d-tiles'), require('react-dom'), require('d3-scale'), require('react-iframe'), require('@mapbox/mapbox-gl-draw'), require('mapbox-gl-draw-circle'), require('mapbox-gl/dist/mapbox-gl.css'), require('@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'), require('dva/fetch'), require('umi'), require('dva/router'), require('@turf/turf'), require('viewport-mercator-project')) :
  typeof define === 'function' && define.amd ? define(['react', 'deck.gl', '@luma.gl/core', 'mapbox-gl', '@deck.gl/mapbox', '@deck.gl/core', 'antd', '@deck.gl/layers', '@luma.gl/constants', '@deck.gl/mesh-layers', '@deck.gl/geo-layers', '@loaders.gl/3d-tiles', 'react-dom', 'd3-scale', 'react-iframe', '@mapbox/mapbox-gl-draw', 'mapbox-gl-draw-circle', 'mapbox-gl/dist/mapbox-gl.css', '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css', 'dva/fetch', 'umi', 'dva/router', '@turf/turf', 'viewport-mercator-project'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.afMap = factory(global.React, global.deck_gl, global.core, global.mapboxgl, global.mapbox, global.core$1, global.antd, global.layers, global.GL, global.meshLayers, global.geoLayers, global._3dTiles, global.ReactDOM, global.d3Scale, global.Iframe, global.MapboxDraw, global.mapboxGlDrawCircle, null, null, global.fetch, global.umi, global.router, global.turf, global.WebMercatorViewport));
})(this, (function (React, deck_gl, core, mapboxgl, mapbox, core$1, antd, layers, GL, meshLayers, geoLayers, _3dTiles, ReactDOM, d3Scale, Iframe, MapboxDraw, mapboxGlDrawCircle, mapboxGl_css, mapboxGlDraw_css, fetch, umi, router, turf, WebMercatorViewport) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var mapboxgl__default = /*#__PURE__*/_interopDefaultLegacy(mapboxgl);
  var GL__default = /*#__PURE__*/_interopDefaultLegacy(GL);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
  var Iframe__default = /*#__PURE__*/_interopDefaultLegacy(Iframe);
  var MapboxDraw__default = /*#__PURE__*/_interopDefaultLegacy(MapboxDraw);
  var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);
  var WebMercatorViewport__default = /*#__PURE__*/_interopDefaultLegacy(WebMercatorViewport);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var MAPBOX_STYLE = 'https://www.dataojocloud.com/styles/china_V3_gray/style.json'; //地图token

  var FlyToCamera = {
    transitionInterpolator: new deck_gl.FlyToInterpolator(),
    transitionDuration: 1000
  }; //图层名称

  var mapLayerName = {
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
    // 根据格式化的3D瓦片数据3D瓷砖规范和ESRI I3S，它是由支撑Tiles3DLoader。
    TILE3D_LAYER: 'Tile3DLayer',

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
    // 影像图层
    RATERIMAGELAYER: 'RaterImageLayer',
    // 地形图层
    RATERDEMLAYER: 'RaterDemLayer',
    // 模型
    UEMODELLAYER: 'UeModelLayer'
  }; //初始化视角

  var initialViewState = {
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
    transitionInterpolator: new deck_gl.FlyToInterpolator(),
    transitionDuration: 1000 //mapbox
    // zoom: 13,
    // center: [116.404844, 39.912943],
    // style: MAPBOX_STYLE,
    // pitch: 20,

  }; //运动视角

  ({
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
    transitionInterpolator: new deck_gl.FlyToInterpolator(),
    transitionDuration: 1000
  }); // 区分mapbox图层与deck.gl图层

  var layerTypeFiltter = {
    mapbox: 2,
    deckgl: 1
  };

  var layerMessage = {
    layerError: '图层格式错误',
    consoleWarning: [{
      type: 'ScatterplotLayer',
      id: 'x',
      layerProps: null,
      data: [{
        coordinates: [116.4029280280498, 39.911997188418674],
        size: 500
      }],
      color: [255, 255, 255],
      visible: true
    }]
  };
  function layerError(layers) {
    antd.message.destroy();
    antd.message.error(layerMessage.layerError);
    console.warn(layerMessage.layerError, layers, '正确格式', layerMessage.consoleWarning);
  }

  function GetFps(_x) {
    return _GetFps.apply(this, arguments);
  }

  function _GetFps() {
    _GetFps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(callbackFPS) {
      var rAF, frame, lastTime, lastFameTime, loop;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rAF = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
                  window.setTimeout(callback, 1000 / 60);
                };
              }();

              frame = 0;

              lastTime = Date.now();
              lastFameTime = Date.now();
              _context.next = 7;
              return function () {
                var now = Date.now();
                var fs = now - lastFameTime;
                var fps = Math.round(1000 / fs);
                lastFameTime = now;
                frame++;

                if (now > 1000 + lastTime) {
                  fps = Math.round(frame * 1000 / (now - lastTime)); // eslint-disable-line no-unused-vars
                  // console.log('DFFFFFFLL', fps);

                  // eslint-disable-line no-unused-vars
                  // console.log('DFFFFFFLL', fps);
                  frame = 0;
                  lastTime = now;
                  callbackFPS(60);
                  return fps; // callback(fps);
                  // console.log(`${new Date()} 1S内 FPS：`, fps)
                }

                rAF(loop);
              };

            case 7:
              loop = _context.sent;
              loop();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _GetFps.apply(this, arguments);
  }

  function ScatterplotLayerConfig(props) {
    //在这里判断key的存在
    var layerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐
      pickable: true,
      // 用于控制鼠标事件
      radiusUnits: 'meters',
      // 点半径的单位，“米”、“像素”之一。放大和缩小时，仪表尺寸与底图成比例，屏幕上的像素尺寸保持不变。
      radiusScale: 1,
      // 半径缩放比例
      // lineWidthUnits: 'meters', //
      // lineWidthScale: 1, // 所有点的全局线宽乘数。
      stroked: false,
      //  是否在磁盘周围画一个轮廓。
      // filled: true, // 是否绘制填充（实心填充）。
      opacity: 1,
      // 透明度
      radiusMinPixels: 0,
      // 以像素为单位的最小半径。这个道具可以用来防止圆缩小时变得太小。
      radiusManPixels: 0,
      // 以像素为单位的最大半径。这个道具可以用来防止圆放大时变得太大。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      } // 经纬度
      // getFillColor: [11, 34, 65], // 设置填充颜色
      // getLineColor: [11, 34, 65],  // 边线的颜色
      // getLineWidth: 1,  // 设置线宽
      // lineWidthMinPixels: 0,  // 以像素为单位的最小线宽。这个道具可以用来防止缩小时笔划变得太细。
      // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER, // 以像素为单位的最大线宽。这个道具可以用来防止放大时笔划变得太粗。
      // getRadius: d => d.size,  //  设置半径
      // getColor: [11, 34, 65], // 设置颜色
      // billboard: true, //面向相机还是朝上

    };

    var newConfig = _objectSpread2(_objectSpread2({}, layerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new layers.ScatterplotLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DScatterplotLayer(props) {
    return new layers.ScatterplotLayer(ScatterplotLayerConfig(props));
  }

  // 该层渲染表示车辆行程的动画路径。属性同pathLayer   ----------   轨迹图

  function TripsLayerConfig(props) {
    var tripsLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      getColor: [255, 71, 71],
      // 轨迹线颜色
      opacity: 1,
      // 轨迹线透明度
      widthMinPixels: 2,
      // 线最小宽度（像素）
      rounded: true,
      // 接头类型。如果为真，则绘制圆形接头。否则绘制斜接。
      trailLength: 2,
      // 一条路要花多长时间才能完全消失。此值的单位应与getPath中的时间戳相同。(步长)
      currentTime: props === null || props === void 0 ? void 0 : props.currentTime,
      // 帧的当前时间，即动画的播放头。此值的单位应与getPath中的时间戳相同。
      visible: props === null || props === void 0 ? void 0 : props.visible // 显隐控制
      // getPath: d => d.geometry.coordinates.map(p => p),  // 轨迹坐标
      // deduct start timestamp from each data point to avoid overflow
      // getTimestamps: d => d.geometry.timestamps.map(p => p - 1),   // 返回一个时间戳数组，getPath返回的几何体中的每个导航点对应一个时间戳，表示访问该点的时间。
      // fadeTrail: true, // 路径是否淡出。如果false，trailLength则无效。
      // capRounded: false, // 帽的类型。如果true，绘制圆帽。否则绘制方帽。
      // jointRounded: false, // 接头类型。如果true，绘制圆形关节。否则绘制斜接。
      // miterLimit:4, //与笔划宽度成比例的关节的最大范围。只有当作品jointRounded是false。
      // _pathType: null, //如果'loop'或'open'，将跳过归一化由返回的坐标getPath，而是假设所有路径都是循环或开放路径。
      // billboard: true, //如果true，则在屏幕空间中挤出路径（宽度始终面向相机）。如果false，宽度总是朝上。
      // getColor: d => [48, 128, 34], // 路径颜色
      // getWidth: d => 5, // 路径宽度

    };

    var newConfig = _objectSpread2(_objectSpread2({}, tripsLayerConfig), props); // console.log("newConfig", newConfig)


    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.TripsLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DTripsLayer(props) {
    return new deck_gl.TripsLayer(TripsLayerConfig(props));
  }

  function BitmapLayerConfig(props) {
    var _textureParameters;

    // const image='https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'
    // const data = [-122.5190, 37.7045, -122.355, 37.829]
    var BitmapLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      bounds: props === null || props === void 0 ? void 0 : props.data,
      // 位图边界框的坐标[左，下，右，上]
      image: props === null || props === void 0 ? void 0 : props.image,
      // 用于在边界渲染的位图地址
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      opacity: 1,
      // 透明度
      desaturate: 0,
      // 位图的去饱和。在[0，1]之间。0为原始颜色，1为灰度。
      transparentColor: [0, 0, 0, 0],
      // 用于透明像素的颜色，
      tintColor: [255, 255, 255],
      // 位图着色的颜色，在[r，g，b]中。每个组件都在[0，255]范围内。
      textureParameters: (_textureParameters = {}, _defineProperty(_textureParameters, GL__default["default"].TEXTURE_MIN_FILTER, GL__default["default"].LINEAR_MIPMAP_LINEAR), _defineProperty(_textureParameters, GL__default["default"].TEXTURE_MAG_FILTER, GL__default["default"].LINEAR), _defineProperty(_textureParameters, GL__default["default"].TEXTURE_WRAP_S, GL__default["default"].CLAMP_TO_EDGE), _defineProperty(_textureParameters, GL__default["default"].TEXTURE_WRAP_T, GL__default["default"].CLAMP_TO_EDGE), _textureParameters),
      // loadOptions: {},
      visible: props === null || props === void 0 ? void 0 : props.visible // 用于控制显隐

    };

    var newConfig = _objectSpread2(_objectSpread2({}, BitmapLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.BitmapLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DBitmapLayer(props) {
    return new deck_gl.BitmapLayer(BitmapLayerConfig(props));
  }

  function ArcLayerConfig(props) {
    var ArcLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      getColor: [255, 71, 71],
      // 获取颜色
      opacity: 1,
      // 透明度
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      getWidth: 5,
      // 每个对象的线宽，单位由widthUnits（默认像素）指定。
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 设置显隐
      widthMinPixels: 1,
      // 以像素为单位的最小线宽。此道具可用于防止线条在缩小时变得太细。
      widthMaxPixels: Number.MAX_SAFE_INTEGER,
      // 以像素为单位的最大线宽。这个道具可以用来防止放大时线条变得太粗。
      getSourcePosition: function getSourcePosition(d) {
        return d.from.coordinates;
      },
      //  为检索每个对象的源位置而调用的方法。
      getTargetPosition: function getTargetPosition(d) {
        return d.to.coordinates;
      },
      // 调用方法来检索每个对象的目标位置。
      getSourceColor: function getSourceColor(d) {
        return [Math.sqrt(d.inbound), 140, 0];
      },
      // 源目标处rgba颜色
      getTargetColor: function getTargetColor(d) {
        return [Math.sqrt(d.outbound), 140, 0];
      },
      // 目标的处rgba颜色
      autoHighlight: true // 自动高亮设置
      // getHeight: 1,    //层高的乘数。0将使图层平坦。
      // getTilt: 60,        // 如果您有多个具有相同源位置和目标位置的圆弧，则用于将圆弧倾斜到一侧。以度为单位，可以是正数或负数 ( -90 to +90)。
      // greatCircle: false,       // 如果为true，则沿地球表面上的最短路径创建圆弧,此选项仅对LNGLAT坐标系中的数据有效。
      // widthUnits: 'pixels',     // 'pixels',放大和缩小时，大小随底图缩放，屏幕上的像素大小保持不变 ||'meters',放大和缩小时，大小随底图缩放，屏幕上的像素大小随底图缩放变化。
      // widthScale: 1,            // 每条线的宽度的缩放倍数。与使用getWidth.
      // highlightColor: [255, 71, 71], // 高亮颜色
      // onHover: (info, event) => { },  // 鼠标hover事件，获取点击信息
      // onClick: (info, event) => { },  // 鼠标click事件

    };

    var newConfig = _objectSpread2(_objectSpread2({}, ArcLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.ArcLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DArcLayer(props) {
    return new deck_gl.ArcLayer(ArcLayerConfig(props));
  }

  function ColumnLayerConfig(props) {
    // const data = [{centroid: [-122.4, 37.7], value: 0.2}]
    var ColumnLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      diskResolution: 12,
      // 将磁盘渲染为的边数。圆盘是一个正多边形，适合给定的半径。更高的分辨率将产生更平滑的特写效果
      radius: 250,
      // 圆盘半径（米）
      angle: 0,
      //  圆盘旋转，以度为单位逆时针旋转。
      // vertices: [0, 0],  // 将默认几何体（位于单位圆内的正多边形）替换为自定义几何体。阵列的长度必须至少为diskResolution。每个顶点都是一个点[x，y]，它是相对于半径从实例位置的偏移。
      offset: [0, 0],
      //  设置偏移量
      coverage: 1,
      // 半径乘数，介于0-1之间。磁盘的半径由覆盖率*半径计算
      filled: true,
      // 是否绘制填充（实心填充）。
      elevationScale: 1,
      // 柱高程乘数。柱的标高由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有柱高程。
      stroked: false,
      //  是否在磁盘周围画一个轮廓。
      wireframe: false,
      // 是否生成列的线框。轮廓将有“水平”线封闭顶部和底部的多边形和垂直线（“支柱”）为每个顶点围绕磁盘。
      lineWidthUnits: 'meters',
      // 轮廓宽度的单位
      lineWidthScale: 1,
      // 如果笔划属性为真，则与所有轮廓相乘的线宽乘数。
      lineWidthMinPixels: 0,
      // 以像素为单位的最小轮廓宽度。
      lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
      // 以像素为单位的最大轮廓宽度。
      material: true,
      //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      opacity: 1,
      // 透明度
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 控制显隐
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 得到渲染的经纬度
      getFillColor: function getFillColor(d) {
        return [48, 128, 255, 255];
      },
      // 填充颜色
      getLineColor: [0, 0, 0],
      // 线的颜色
      getElevation: function getElevation(d) {
        return d.value;
      },
      // 每个单元的标高
      getLineWidth: 1 // 设置宽度

    };

    var newConfig = _objectSpread2(_objectSpread2({}, ColumnLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.ColumnLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DColumnLayer(props) {
    return new deck_gl.ColumnLayer(ColumnLayerConfig(props));
  }

  // 根据输入数组渲染网格热图。它采用固定的单元格大小，并将输入对象聚合到单元格中。单元格的颜色和高度取决于它所包含的对象。聚合在CPU上执行。

  function CPUGridLayerConfig(props) {
    var CPUGridLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      cellSize: 200,
      // 每个单元的大小（米）
      // 柱高程乘数。柱的标高由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有柱高程。
      elevationScale: 4,
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      opacity: 1,
      // 透明度
      // colorRange: [[255, 12, 34], [24, 12, 34], [45, 12, 34]], //指定为颜色数组[color1，color2，…]。每种颜色是由3或4个值[R，G，B]或[R，G，B，A]组成的数组
      colorRange: [[255, 12, 34], [24, 12, 34], [45, 12, 34]],
      //指定为颜色数组[color1，color2，…]。每种颜色是由3或4个值[R，G，B]或[R，G，B，A]组成的数组
      coverage: 1,
      // 半径乘数，介于0-1之间。磁盘的半径由覆盖率*半径计算
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 得到渲染的经纬度
      getColorValue: null,
      // 将数据对象聚合到单元格后，将对每个单元格调用此访问器，以获取其颜色所基于的值。如果提供，这将覆盖getColorWeight和colorAggregation属性的效果。
      getElevationValue: null // 数据对象聚合到单元格后，每个单元都会调用此访问器，以获取其高程所基于的值。如果提供，这将覆盖getElevationWeight和elevationAggregation props的效果。
      // elevationDomain: [0, 1000], // 高程比例输入域，默认设置为 0 和每个单元格中聚合权重的最大值之间。您可以通过传入任意高程域来控制单元的高程如何映射到权重。当您想要使用相同的高程比例渲染不同的数据输入以进行比较时，这非常有用。
      // elevationRange: [0, 1000], // 标高刻度输出范围
      // elevationUpperPercentile: 1000, // 过滤单元格并按ElevationUppercentile重新计算高程。高程值大于高程百分位的单元格将被隐藏。
      // elevationLowerPercentile: 900,  // 过滤单元格并按ElevationUppercentile重新计算高程。高程值小于高程百分位的单元格将被隐藏。
      // upperPercentile: 100, //  过滤单元格并按百分位重新计算颜色。值大于百分位的单元格将被隐藏。
      // lowerPercentile: 0, //  过滤单元格并按百分位重新计算颜色。值小于百分位的单元格将被隐藏。
      // colorScaleType: 'ordinal', // 缩放函数用于确定网格单元的颜色，默认值为“量化”。支持的值为“quantize”、“linear”、“quantile”和“ordinal”。
      // material: {},  //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      // colorAggregation: 'MEAN', // 定义用于聚合所有数据对象权重以计算单元格颜色值的操作。有效值为“SUM”、“MEAN”、“MIN”和“MAX”当提供的值无效时，使用“SUM”。
      // colorDomain:[min(colorWeight), max(colorWeight)], // 色阶域，默认设置为每个单元格中聚合权重的范围。通过传入任意颜色域，可以控制单元格的颜色如何映射到权重。
      // getElevationWeight: 1, // 用于计算单元高程值的数据对象的权重。
      // getColorWeight: 1, // 用于计算单元格颜色值的数据对象的权重。
      // elevationAggregation: "SUM", // 定义用于聚合所有数据对象权重以计算单元格高程值的操作。有效值为“SUM”、“MEAN”、“MIN”和“MAX”。提供无效值时使用“SUM”。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, CPUGridLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.CPUGridLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DCPUGridLayer(props) {
    return new deck_gl.CPUGridLayer(CPUGridLayerConfig(props));
  }

  function ContourLayerConfig(props) {
    // const data = [{ COORDINATES: [117.42177834, 37.78346622] }];
    // const CONTOURS = [
    //   { threshold: 1, color: [255, 0, 0, 255], strokeWidth: 1 }, // => Isoline for threshold 1
    //   { threshold: 5, color: [0, 255, 0], strokeWidth: 2 }, // => Isoline for threshold 5
    //   { threshold: [6, 10], color: [0, 0, 255, 128] }, // => Isoband for threshold range [6, 10)
    // ];
    var ContourLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      contours: [{
        threshold: 1,
        color: [255, 0, 0],
        strokeWidth: 2,
        zIndex: 1
      }, {
        threshold: [3, 10],
        color: [55, 0, 55],
        zIndex: 0
      }, {
        threshold: 5,
        color: [0, 255, 0],
        strokeWidth: 6,
        zIndex: 2
      }, {
        threshold: 15,
        color: [0, 0, 255],
        strokeWidth: 4,
        zIndex: 3
      }],
      // 等值线阈值
      opacity: 1,
      // 透明度
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 设置显隐
      cellSize: 2,
      // 每个单元的大小（米）
      gpuAggregation: false,
      // 当设置为true且浏览器支持GPU聚合时，将在GPU上执行聚合。GPU聚合速度可以快2到3倍，具体取决于点数和单元数。
      zOffset: 0.005,
      // 为等高线（等值线或等高线）的每个顶点添加的非常小的z偏移
      aggregation: 'SUM',
      // 定义聚合操作的类型，有效值为“SUM”、“MEAN”、“MIN”和“MAX”。如果未设置值或设置了无效值，则使用“SUM”作为聚合。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      } // 渲染每一个经纬度
      // getWeight: 1  // 对象的权重 NUmber || Function

    };

    var newConfig = _objectSpread2(_objectSpread2({}, ContourLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.ContourLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DContourLayer(props) {
    return new deck_gl.ContourLayer(ContourLayerConfig(props));
  }

  function GeoJsonLayerConfig(props) {
    /**
     * Data format:
     * Valid GeoJSON object(合法的Geojson格式)
     */
    var GeoJsonLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      stroked: false,
      //  是否在磁盘周围画一个轮廓。
      filled: true,
      // 是否绘制填充（实心填充）。
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      lineWidthUnits: 'meters',
      // 轮廓宽度的单位  ---线
      lineWidthScale: 1,
      // 如果笔划属性为真，则与所有轮廓相乘的线宽乘数。 ---线
      lineWidthMinPixels: 1,
      // 以像素为单位的最小轮廓宽度。 ---线
      lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
      // 以像素为单位的最大轮廓宽度。 ---线
      wireframe: false,
      // 是否生成六边形的线框。轮廓将有“水平”线封闭顶部和底部多边形，并为多边形上的每个顶点有一条垂直线（“支柱”）。
      lineJointRounded: false,
      // 接头类型。如果为真，则绘制圆形接头。否则绘制斜接。
      lineMiterLimit: 4,
      // 关节的最大范围，与笔划宽度之比。只有当LineJoinOutloaded为false时才起作用。
      // elevationScale: 1, // 高程乘数。最终高程由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有多边形高程。
      // pointRadiusUnits: 'meters',  // 轮廓宽度的单位  ---点
      // pointRadiusScale: 1,  // 如果笔划属性为真，则与所有轮廓相乘的线宽乘数。 ---点
      // pointRadiusMinPixels: 0,  // 以像素为单位的最小轮廓宽度。 ---点
      // pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER, // 以像素为单位的最大轮廓宽度。 ---点
      // material: true,  //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      getFillColor: function getFillColor(d) {
        return [48, 128, 255];
      },
      // 填充颜色
      getLineColor: [48, 128, 255],
      // 线的颜色
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 得到渲染的经纬度
      // getRadius: 100,  // 半径设置
      getLineWidth: 1,
      // 线宽设置
      getElevation: 30,
      // 每个单元的标高
      visible: props === null || props === void 0 ? void 0 : props.visible // 显隐

    };

    var newConfig = _objectSpread2(_objectSpread2({}, GeoJsonLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.GeoJsonLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DGeoJsonLayer(props) {
    return new deck_gl.GeoJsonLayer(GeoJsonLayerConfig(props));
  }

  function GPUGridLayerConfig(props) {
    var GPUGridLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      cellSize: 200,
      // 每个单元的大小（米）
      elevationScale: 4,
      // 柱高程乘数。柱的标高由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有柱高程。
      colorRange: [[24, 12, 34], [255, 12, 34], [45, 12, 34]],
      //指定为颜色数组[color1，color2，…]。每种颜色是由3或4个值[R，G，B]或[R，G，B，A]组成的数组
      coverage: 1,
      // 半径乘数，介于0-1之间。磁盘的半径由覆盖率*半径计算
      elevationDomain: [0, 100],
      // “高程比例输入域”，默认值设置为0到每个单元格中聚合权重的最大值之间。
      elevationRange: [0, 100],
      // 标高刻度输出范围
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      opacity: 1,
      // 透明度
      // material: true, //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      colorAggregation: 'SUM',
      // 定义用于聚合所有数据对象权重以计算单元格颜色值的操作。有效值为“SUM”、“MEAN”、“MIN”和“MAX”当提供的值无效时，使用“SUM”。
      elevationAggregation: 'SUM',
      // 定义用于聚合所有数据对象权重以计算单元高程值的操作。有效值为“SUM”、“MEAN”、“MIN”和“MAX”当提供的值无效时，使用“SUM”。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 得到渲染的经纬度
      getColorWeight: 1,
      // 用于计算单元格颜色值的数据对象的权重。
      getElevationWeight: 1,
      // 用于计算单元高程值的数据对象的权重。
      visible: props === null || props === void 0 ? void 0 : props.visible
    };

    var newConfig = _objectSpread2(_objectSpread2({}, GPUGridLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.GPUGridLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DGPUGridLayer(props) {
    return new deck_gl.GPUGridLayer(GPUGridLayerConfig(props));
  }

  function TextLayerConfig(props) {
    /**
     * Data format:
     * [
     *   {name: 'Colma (COLM)', address: '365 D Street, Colma CA 94014', coordinates: [-122.466233, 37.684638]}
     * ]
     */
    var TextLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      sizeScale: 1,
      //缩放尺寸
      sizeMinPixels: 0,
      //最小尺寸
      sizeMaxPixels: 200,
      //最大尺寸
      sizeUnits: 'pixels',
      // 放大和缩小时，仪表尺寸与底图成比例，屏幕上的像素尺寸保持不变。
      // characterSet: characterSet, // 字符集
      pickable: true,
      // 开启鼠标事件
      billboard: true,
      //面向相机还是朝上
      opacity: 1,
      // 透明度
      // backgroundColor: [0, 0, 0, 0], // 文本背景色
      fontFamily: 'Monaco',
      // 用于设置字体，支持CSS内置字体
      fontWeight: 'normal',
      // 用于设置字体粗细
      lineHeight: 1.0,
      // 用于设置字体行高
      wordBreak: 'break-word',
      // 可用的选项有break all和break word。必须提供有效的maxWidth才能使用wordBreak。
      // maxWidth: -1, // 文本最大行宽
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 位置
      // getText: d => d.properties.name, // 文本显示
      getSize: 8,
      // 每个文本标签的字体大小，以sizeUnits（默认像素）指定的单位表示。
      getColor: [255, 255, 255, 255],
      // 字体颜色
      getAngle: 0,
      // 设置角度
      getTextAnchor: 'start',
      // 文本锚点
      getAlignmentBaseline: 'center',
      // 文本基线。
      getPixelOffset: [0, 0],
      // 文本偏移量
      visible: props === null || props === void 0 ? void 0 : props.visible // 显隐

    };

    var newConfig = _objectSpread2(_objectSpread2({}, TextLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new layers.TextLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DTextLayer(props) {
    return new layers.TextLayer(TextLayerConfig(props));
  }

  function PathLayerConfig(props) {
    /**
     * Data format:
     * [
     *   {
     *     path: [[-122.4, 37.7], [-122.5, 37.8], [-122.6, 37.85]],
     *     name: 'Richmond - Millbrae',
     *     color: [255, 0, 0]
     *   }
     * ]
     */
    var PathLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      // widthUnits: 'pixels', // 放大和缩小时，仪表尺寸与底图成比例，屏幕上的像素尺寸保持不变。
      pickable: true,
      // 用于控制鼠标事件
      widthScale: 2,
      //  宽度的缩放倍数。
      widthMinPixels: 2,
      // 每行宽度的最小像素
      widthManPixels: 20,
      // 每行宽度的最大像素
      rounded: true,
      // 接头类型。如果为真，则绘制圆形接头。否则绘制斜接。
      capRounded: true,
      billboard: true,
      //如果true，则在屏幕空间中挤出路径（宽度始终面向相机）。如果false，宽度总是朝上。
      // miterLimit: 4, // 笔划宽度成比例的关节的最大范围
      getPath: function getPath(d) {
        return d.geometry.coordinates;
      },
      // 连接的经纬度
      getColor: function getColor(d) {
        return [48, 128, 34];
      },
      // 路径颜色
      getWidth: function getWidth(d) {
        return 5;
      },
      // 路径宽度
      visible: props === null || props === void 0 ? void 0 : props.visible // 显隐
      // capRounded: false, // 帽的类型。如果true，绘制圆帽。否则绘制方帽。
      // jointRounded: false, // 接头类型。如果true，绘制圆形关节。否则绘制斜接。
      // miterLimit:4, //与笔划宽度成比例的关节的最大范围。只有当作品jointRounded是false。
      // _pathType: null, //如果'loop'或'open'，将跳过归一化由返回的坐标getPath，而是假设所有路径都是循环或开放路径。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, PathLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.PathLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DPathLayer(props) {
    return new deck_gl.PathLayer(PathLayerConfig(props));
  }

  function LineLayerConfig(props) {
    /**
     * Data format:
     * [
     *   {
     *     inbound: 72633,
     *     outbound: 74735,
     *     from: {
     *       name: '19th St. Oakland (19TH)',
     *       coordinates: [-122.269029, 37.80787]
     *     },
     *     to: {
     *       name: '12th St. Oakland City Center (12TH)',
     *       coordinates: [-122.271604, 37.803664]
     *   },
     *   ...
     * ]
     */
    var LineLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      // widthUnits: 'pixels', // 放大和缩小时，仪表尺寸与底图成比例，屏幕上的像素尺寸保持不变。
      pickable: true,
      // 用于控制鼠标事件
      widthScale: 2,
      //  宽度的缩放倍数。
      widthMinPixels: 2,
      // 每行宽度的最小像素
      widthManPixels: 20,
      // 每行宽度的最大像素
      getSourcePosition: function getSourcePosition(d) {
        return d.from;
      },
      // 源目标经纬度
      getTargetPosition: function getTargetPosition(d) {
        return d.to;
      },
      // 目标经纬度
      getColor: [255, 255, 255],
      // 线的颜色
      getWidth: function getWidth(d) {
        return 5;
      },
      // 线的宽度
      visible: props === null || props === void 0 ? void 0 : props.visible // 显隐
      // widthUnits: 'pixels',     // 'pixels',放大和缩小时，大小随底图缩放，屏幕上的像素大小保持不变 ||'meters',放大和缩小时，大小随底图缩放，屏幕上的像素大小随底图缩放变化。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, LineLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.LineLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DLineLayer(props) {
    return new deck_gl.LineLayer(LineLayerConfig(props));
  }

  // 用于渲染图标（不支持.gif）

  function IconLayerConfig(props) {
    /**
     * Data format:
     * [
     *   {name: 'Colma (COLM)', address: '365 D Street, Colma CA 94014', exits: 4214, coordinates: [-122.466233, 37.684638]}
     * ]
     */
    var IconLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐控制
      pickable: true,
      // 用于控制鼠标事件
      sizeScale: 5,
      //缩放尺寸
      sizeMinPixels: 50,
      //最小尺寸
      sizeMaxPixels: 200,
      //最大尺寸
      billboard: true,
      //面向相机还是朝上
      opacity: 1,
      // 透明度
      // 用于获取图标，设置图标的属性
      // getIcon: d => ({
      //   url: '', // 地址、base64
      //   width: 100, // 图片宽
      //   height: 100, // 图片高
      //   anchorY: 100, // 锚点（Y向）
      //   x: 0,
      //   y: 0,
      //   state: false,
      // }),
      getSize: 5,
      // 每个对象的高度，以sizeUnits（默认像素）指定的单位表示。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 图标经纬度
      sizeUnits: 'pixels',
      // 放大和缩小时，仪表尺寸与底图成比例，屏幕上的像素尺寸保持不变。
      getAngle: function getAngle(d) {
        return 0;
      },
      // 角度设置
      getColor: [0, 0, 0, 0] // getPixelOffset: [0, 0] // 像素下设置的偏移量
      // 自定义纹理参数。
      // textureParameters: {
      //   [GL.TEXTURE_MIN_FILTER]: GL.LINEAR_MIPMAP_LINEAR,
      //   [GL.TEXTURE_MAG_FILTER]: GL.LINEAR,
      //   [GL.TEXTURE_WRAP_S]: GL.CLAMP_TO_EDGE,
      //   [GL.TEXTURE_WRAP_T]: GL.CLAMP_TO_EDGE
      // },
      // getIcon: d => 'marker',
      // 图集图像。
      // iconAtlas:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
      // 映射到图标定义的图标名称，或用于从 JSON 文件加载此类映射的 URL。每个图标都使用以下值定义：
      // iconMapping: {
      //   marker: {
      //     width: 128, // 图片宽
      //     height: 128, // 图片高
      //     anchorY: 128, // 锚点（Y向）
      //     anchorX: 100, // 锚点（x向）
      //     x: 0, // 图标在地图集图像上的 x 位置
      //     y: 0, // 图标在地图集图像上的 y 位置
      //     mask: true //图标是否被视为透明蒙版
      //   }
      // },
      // alphaCutoff:0.05 // 丢弃不透明度低于此阈值的像素。
      // loadOptions: {}

    };

    var newConfig = _objectSpread2(_objectSpread2({}, IconLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.IconLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DIconLayer(props) {
    return new deck_gl.IconLayer(IconLayerConfig(props));
  }

  function HeatmapLayerConfig(props) {
    /**
     * Data format:
     * [
     *   {COORDINATES: [-122.42177834, 37.78346622], WEIGHT: 10},
     *   ...
     * ]
     */
    var HeatmapLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      // radiusPixels: 30, // 以像素为单位的圆的半径，物体的重量分布到该半径上。
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      opacity: 1,
      // 透明度
      colorRange: [[255, 12, 34], [24, 12, 34], [45, 12, 34]],
      //指定为颜色数组[color1，color2，…]。每种颜色是由3或4个值[R，G，B]或[R，G，B，A]组成的数组
      // intensity: 1, // 与像素处的总权重相乘以获得最终权重的值。大于1的值使输出颜色偏向光谱的高端，小于1的值使输出颜色偏向光谱的低端。
      // threshold: 0.5, // 阈值定义为衰减权重与最大权重之比，介于0和1之间。例如，0.1会影响权重小于最大值10%的所有像素。指定colorDomain时忽略阈值。
      // colorDomain: null, // 将每个数据对象的权值分布到以对象位置为中心的圆上的所有像素上，像素所接受的权值与其到中心的距离成反比。
      aggregation: 'MEAN',
      // 用于聚合所有数据点权重以计算像素颜色值的操作。“SUM”或“MEAN”之一当提供的值无效时，使用“SUM”。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      getWeight: function getWeight(d) {
        return d.properties.weidget;
      },
      // 方法来检索每个点的权重。默认情况下，每个点的权重为1。
      visible: props === null || props === void 0 ? void 0 : props.visible // 控制显隐

    };

    var newConfig = _objectSpread2(_objectSpread2({}, HeatmapLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.HeatmapLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DHeatmapLayer(props) {
    return new deck_gl.HeatmapLayer(HeatmapLayerConfig(props));
  }

  function SolidPolygonLayerConfig(props) {
    var solidPolygonLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props.data,
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐控制。
      opacity: 1,
      // 透明度
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      filled: true,
      // 是否填充多边形（基于getFillColor访问器提供的颜色）。
      extruded: false,
      // 是否拉伸多边形（基于getElevation访问器提供的高程）。如果设置为false，所有多边形都将是平面的，这将生成较少的几何图形，并且比从getElevation返回0要快。
      wireframe: false,
      // 是否生成六边形的线框。轮廓将有“水平”线封闭顶部和底部多边形，并为多边形上的每个顶点有一条垂直线（“支柱”）。
      elevationScale: 1,
      // 高程乘数。最终高程由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以缩放所有高程而不更新数据。
      material: false,
      // 这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。
      _normalize: false,
      // 如果为false，将跳过对getPolygon返回的坐标进行规格化.仅当您将此层用于后端的预处理静态数据或验证时，才建议使用此属性
      _windingOrder: 'CW',
      // 仅在_normalize:false时有效。它指定多边形数据中环的缠绕顺序，可以是：“CW”：外圈为顺时针方向，孔为逆时针方向“逆时针”：外圈为逆时针方向，孔为顺时针方向
      getPolygon: function getPolygon(d) {
        return d.geometry.coordinates;
      },
      // 位置坐标
      getFillColor: [0, 0, 0, 0],
      // 如果提供了阵列，则它将用作所有多边形的填充颜色。如果提供了一个函数，则会对每个多边形调用该函数以检索其填充颜色。
      getLineColor: [0, 0, 0, 0],
      // 如果提供了一个数组，它将用作所有多边形的边颜色。
      getElevation: 100 // 用于拉伸每个多边形的高程。如果使用地图投影模式，高度将被解释为米，否则将以单位坐标表示。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, solidPolygonLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.SolidPolygonLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DSolidPolygonLayer(props) {
    return new deck_gl.SolidPolygonLayer(SolidPolygonLayerConfig(props));
  }

  function ScreenGridLayerConfig(props) {
    var screenGridLayerConfigConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props.data,
      visible: props === null || props === void 0 ? void 0 : props.visible,
      opacity: 1,
      // 透明度
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      cellSizePixels: 100,
      // 单位宽度/高度。(像素)
      cellMarginPixels: 2,
      // 单元格边距大小（像素）。
      // minColor: [0, 0, 0, 255], // 表示为rgba数组，是可由平铺渲染的最小颜色。在版本5.2.0中不推荐使用此属性，请改用colorRange和colorDomain。
      // maxColor: [0, 255, 0, 255], // // 表示为rgba数组，是可由平铺渲染的最小颜色。在版本5.2.0中不推荐使用此属性，请改用colorRange和colorDomain。
      colorDomain: [1, 100],
      // 色阶输入域。颜色比例贴图将数字域延续到离散的颜色范围。
      colorRange: [[12, 4, 67], [34, 76, 90], [67, 54, 23], [45, 78, 9]],
      // 颜色色阶
      gpuAggregation: true,
      // 当设置为true且浏览器支持GPU聚合时，将在GPU上执行聚合。不支持返回cpu
      aggregation: 'SUM',
      // 定义聚合操作的类型，有效值为“SUM”、“MEAN”、“MIN”和“MAX”。总和、平均值、最小值、最大值
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 位置经纬度
      getWeight: function getWeight(d) {
        return d.properties.weidget;
      } // 权重字段

    };

    var newConfig = _objectSpread2(_objectSpread2({}, screenGridLayerConfigConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.ScreenGridLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DScreenGridLayer(props) {
    return new deck_gl.ScreenGridLayer(ScreenGridLayerConfig(props));
  }

  function PolygonLayerConfig(props) {
    var PolygonLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 用于控制鼠标事件
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐
      opacity: 1,
      // 透明度
      stroked: false,
      //  是否在磁盘周围画一个轮廓。
      filled: true,
      // 是否绘制填充（实心填充）。
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      wireframe: false,
      // 是否生成六边形的线框。轮廓将有“水平”线封闭顶部和底部多边形，并为多边形上的每个顶点有一条垂直线（“支柱”）。
      lineWidthUnits: 'meters',
      // 轮廓宽度的单位  ---线
      autoHighlight: true,
      // 选中高亮突出显示
      lineWidthScale: 1,
      // 如果笔划属性为真，则与所有轮廓相乘的线宽乘数。
      lineWidthMinPixels: 1,
      // 以像素为单位的最小轮廓宽度.
      lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
      // 以像素为单位的最大轮廓宽度。
      getPolygon: function getPolygon(d) {
        return d.geometry.coordinates;
      },
      // 位置坐标
      getFillColor: [0, 0, 0, 0],
      // 如果提供了阵列，则它将用作所有多边形的填充颜色。如果提供了一个函数，则会对每个多边形调用该函数以检索其填充颜色。
      getLineColor: [0, 0, 0, 0],
      // 如果提供了一个数组，它将用作所有多边形的边颜色。
      getLineWidth: 1,
      // 多边形轮廓的宽度，单位由lineWidthUnits（默认米）指定。 number|function
      getElevation: 100 // 用于拉伸每个多边形的高程。如果使用地图投影模式，高度将被解释为米，否则将以单位坐标表示。
      // elevationScale: 1, // 高程乘数。最终高程由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有多边形高程。
      // material: true,  //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      // _normalize: false, // 如果为false，将跳过对getPolygon返回的坐标进行规格化.仅当您将此层用于后端的预处理静态数据或验证时，才建议使用此属性
      // _windingOrder: 'CW', // 仅在_normalize:false时有效。它指定多边形数据中环的缠绕顺序，可以是：“CW”：外圈为顺时针方向，孔为逆时针方向“逆时针”：外圈为逆时针方向，孔为顺时针方向
      // lineJointRounded: false, // 接头类型。如果为真，则绘制圆形接头。否则绘制斜接。
      // lineMiterLimit: 4, // 关节的最大范围，与笔划宽度之比。只有当LineJoinOutloaded为false时才起作用。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, PolygonLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.PolygonLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DPolygonLayer(props) {
    return new deck_gl.PolygonLayer(PolygonLayerConfig(props));
  }

  function GridCellLayerConfig(props) {
    var GridCellLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      cellSize: 200,
      // 每个单元的大小（米）
      elevationScale: 4,
      // 柱高程乘数。柱的标高由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有柱高程。
      coverage: 1,
      // 半径乘数，介于0-1之间。磁盘的半径由覆盖率*半径计算
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      opacity: 1,
      // 透明度
      // material: true,  //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 得到渲染的经纬度
      getColor: [0, 0, 0, 255],
      // 用于计算颜色值
      getElevation: 1,
      // 每个单元的标高（单位：米）。如果提供了数字，则该数字将用作所有对象的高程。如果提供了函数，则会对每个对象调用该函数以检索其高程。
      visible: props === null || props === void 0 ? void 0 : props.visible // 显隐控制

    };

    var newConfig = _objectSpread2(_objectSpread2({}, GridCellLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.GridCellLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DGridCellLayer(props) {
    return new deck_gl.GridCellLayer(GridCellLayerConfig(props));
  }

  function GridLayerConfig(props) {
    var GridLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      cellSize: 200,
      // 每个单元的大小（米）
      elevationScale: 4,
      // 柱高程乘数。柱的标高由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有柱高程。
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      opacity: 1,
      // 透明度
      colorRange: [[255, 12, 34], [24, 12, 34], [45, 12, 34]],
      //指定为颜色数组[color1，color2，…]。每种颜色是由3或4个值[R，G，B]或[R，G，B，A]组成的数组
      coverage: 1,
      // 半径乘数，介于0-1之间。磁盘的半径由覆盖率*半径计算
      elevationDomain: [0, 100],
      // “高程比例输入域”，默认值设置为0到每个单元格中聚合权重的最大值之间。
      elevationRange: [0, 100],
      // 标高刻度输出范围
      elevationUpperPercentile: 100,
      // 过滤单元格并按ElevationUppercentile重新计算高程。高程值大于高程百分位的单元格将被隐藏。
      elevationLowerPercentile: 10,
      // 过滤单元格并按ElevationUppercentile重新计算高程。高程值小于高程百分位的单元格将被隐藏。
      upperPercentile: 100,
      //  过滤单元格并按百分位重新计算颜色。值大于百分位的单元格将被隐藏。
      lowerPercentile: 0,
      //  过滤单元格并按百分位重新计算颜色。值小于百分位的单元格将被隐藏。
      colorScaleType: 'quantize',
      // 缩放函数用于确定网格单元的颜色，默认值为“量化”。支持的值为“quantize”、“linear”、“quantile”和“ordinal”。
      material: true,
      //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      gpuAggregation: false,
      // 如果设置为true，则在满足其他条件的情况下在GPU上执行聚合，只有在使用大型数据集时，GPU聚合速度才会更快。对于较小的数据集，GPU聚合可能比CPU聚合慢。
      colorAggregation: 'SUM',
      // 定义用于聚合所有数据对象权重以计算单元格颜色值的操作。有效值为“SUM”、“MEAN”、“MIN”和“MAX”当提供的值无效时，使用“SUM”。
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐
      // colorDomain:[min(colorWeight), max(colorWeight)], // 色阶域，默认设置为每个单元格中聚合权重的范围。通过传入任意颜色域，可以控制单元格的颜色如何映射到权重。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 得到渲染的经纬度
      getColorWeight: 1,
      // 用于计算单元格颜色值的数据对象的权重。
      // getColorValue: null, // 将数据对象聚合到单元格后，将对每个单元格调用此访问器，以获取其颜色所基于的值。如果提供，这将覆盖getColorWeight和colorAggregation属性的效果。
      getElevationWeight: 1,
      // 用于计算单元高程值的数据对象的权重。
      getElevationValue: null,
      // 数据对象聚合到单元格后，每个单元都会调用此访问器，以获取其高程所基于的值。如果提供，这将覆盖getElevationWeight和elevationAggregation props的效果。
      fp64: false //是否应在高精度64位模式下执行聚合。请注意，由于deck.glv6.1，默认的32位投影使用混合模式，该模式匹配64位精度，性能显著提高。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, GridLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.GridLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DGridLayer(props) {
    return new deck_gl.GridLayer(GridLayerConfig(props));
  }

  // HexagonLayer是一个合成层，目前仅适用于坐标系.LNGLAT。

  function HexagonLayerConfig(props) {
    var HexagonLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 是否响应鼠标指针拾取事件。
      opacity: 1,
      // 透明度
      fp64: false,
      //是否应在高精度64位模式下执行聚合。请注意，由于deck.glv6.1，默认的32位投影使用混合模式，该模式匹配64位精度，性能显著提高。
      radius: 10,
      // 六边形的半径，单位为米。六边形是尖顶的（而不是平顶的）。
      colorRange: [[12, 34, 67], [45, 67, 98], [123, 212, 12]],
      // colorDomain分为colorRange.length等长的段，每个段映射到colorRange中的一种颜色。
      coverage: 1,
      // 半径乘数，介于0-1之间。磁盘的半径由覆盖率*半径计算
      elevationScale: 4,
      // 柱高程乘数。柱的标高由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有柱高程。
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 得到渲染的经纬度
      getColorValue: null,
      // 将数据对象聚合到单元格后，将对每个单元格调用此访问器，以获取其颜色所基于的值。如果提供，这将覆盖getColorWeight和colorAggregation属性的效果。
      getElevationValue: null // 数据对象聚合到单元格后，每个单元都会调用此访问器，以获取其高程所基于的值。如果提供，这将覆盖getElevationWeight和elevationAggregation props的效果。
      // hexagonAggregator: 'd3-hexbin', // 六边形聚合器是将数据聚合到六边形容器中的函数。六边形聚合器将层和当前视口的道具作为参数。输出应该是{hexagons:[]，hexagonVertices:[]}。六边形是{centroid:[]，points:[]}的数组，其中centroid是六边形的中心，points是六边形所包含的点的数组。六边形顶点（可选）是定义基本六边形几何体的点数组。
      // colorDomain: [1, 100], // 色阶输入域。颜色比例贴图将数字域延续到离散的颜色范围。如果没有提供，层将设置colorDomain到每个六边形中聚合权重的范围。通过传入任意颜色域，可以控制六边形的颜色如何映射到权重。
      // elevationDomain: [0, 100], // “高程比例输入域”，默认值设置为0到每个单元格中聚合权重的最大值之间。
      // elevationRange: [0, 100], // 标高刻度输出范围
      // upperPercentile: 100, //  过滤单元格并按百分位重新计算颜色。值大于百分位的单元格将被隐藏。
      // lowerPercentile: 0, //  过滤单元格并按百分位重新计算颜色。值小于百分位的单元格将被隐藏。
      // elevationUpperPercentile: 100, // 过滤单元格并按ElevationUppercentile重新计算高程。高程值大于高程百分位的单元格将被隐藏。
      // elevationLowerPercentile: 10, // 过滤单元格并按ElevationUppercentile重新计算高程。高程值小于高程百分位的单元格将被隐藏。
      // material: true, //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      // colorAggregation: 'SUM', // 定义用于聚合所有数据对象权重以计算单元格颜色值的操作。有效值为“SUM”、“MEAN”、“MIN”和“MAX”当提供的值无效时，使用“SUM”。
      // getColorWeight: 1, // 用于计算单元格颜色值的数据对象的权重。
      // getElevationWeight: 1, // 用于计算单元高程值的数据对象的权重。
      // onSetColorDomain: () => {}, // 当计算完bin color domain时，将调用他的回调。
      // onSetElevationDomain: () => {}, // 当计算出bin提升域时，将调用此回调。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, HexagonLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.HexagonLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DHexagonLayer(props) {
    return new deck_gl.HexagonLayer(HexagonLayerConfig(props));
  }

  function H3ClusterLayerConfig(props) {
    var H3ClusterLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 用于控制鼠标事件
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐
      stroked: false,
      //  是否在磁盘周围画一个轮廓。
      filled: true,
      // 是否绘制填充（实心填充）。
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      wireframe: false,
      // 是否生成六边形的线框。轮廓将有“水平”线封闭顶部和底部多边形，并为多边形上的每个顶点有一条垂直线（“支柱”）。
      lineWidthUnits: 'meters',
      // 轮廓宽度的单位  ---线
      lineWidthScale: 1,
      // 如果笔划属性为真，则与所有轮廓相乘的线宽乘数。
      lineWidthMinPixels: 1,
      // 以像素为单位的最小轮廓宽度.
      lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
      // 以像素为单位的最大轮廓宽度。
      lineJointRounded: false,
      // 接头类型。如果为真，则绘制圆形接头。否则绘制斜接。
      lineMiterLimit: 4,
      // 关节的最大范围，与笔划宽度之比。只有当LineJoinOutloaded为false时才起作用。
      // elevationScale: 1, // 高程乘数。最终高程由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有多边形高程。
      // material: true,  //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      // _normalize: false, // 如果为false，将跳过对getPolygon返回的坐标进行规格化.仅当您将此层用于后端的预处理静态数据或验证时，才建议使用此属性
      // _windingOrder: 'CW', // 仅在_normalize:false时有效。它指定多边形数据中环的缠绕顺序，可以是：“CW”：外圈为顺时针方向，孔为逆时针方向“逆时针”：外圈为逆时针方向，孔为顺时针方向
      ggetHexagons: function ggetHexagons(d) {
        return d.hexIds;
      },
      // 方法调用以从每个对象中检索六边形簇，作为一个H3六角索引数组。这些六角体被连接到表示簇的地理空间轮廓的多边形中。
      getFillColor: [0, 0, 0, 0],
      // 如果提供了阵列，则它将用作所有多边形的填充颜色。如果提供了一个函数，则会对每个多边形调用该函数以检索其填充颜色。
      getLineColor: [0, 0, 0, 0],
      // 如果提供了一个数组，它将用作所有多边形的边颜色。
      getLineWidth: 1,
      // 多边形轮廓的宽度，单位由lineWidthUnits（默认米）指定。 number|function
      getElevation: 100 // 用于拉伸每个多边形的高程。如果使用地图投影模式，高度将被解释为米，否则将以单位坐标表示。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, H3ClusterLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.H3ClusterLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DH3ClusterLayer(props) {
    return new deck_gl.H3ClusterLayer(H3ClusterLayerConfig(props));
  }

  function H3HexagonLayerConfig(props) {
    var H3HexagonLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      pickable: true,
      // 用于控制鼠标事件
      visible: props === null || props === void 0 ? void 0 : props.visible,
      // 显隐
      stroked: false,
      //  是否在磁盘周围画一个轮廓。
      filled: true,
      // 是否绘制填充（实心填充）。
      extruded: true,
      // 是否要挤出列。如果设置为false，则所有列将渲染为平面多边形。
      wireframe: false,
      // 是否生成六边形的线框。轮廓将有“水平”线封闭顶部和底部多边形，并为多边形上的每个顶点有一条垂直线（“支柱”）。
      lineWidthUnits: 'meters',
      // 轮廓宽度的单位  ---线
      lineWidthScale: 1,
      // 如果笔划属性为真，则与所有轮廓相乘的线宽乘数。
      lineWidthMinPixels: 1,
      // 以像素为单位的最小轮廓宽度.
      lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
      // 以像素为单位的最大轮廓宽度。
      lineJointRounded: false,
      // 接头类型。如果为真，则绘制圆形接头。否则绘制斜接。
      highPrecision: false,
      // 选择切换到高精度模式，在这种模式下，它以性能换取精度
      lineMiterLimit: 4,
      // 关节的最大范围，与笔划宽度之比。只有当LineJoinOutloaded为false时才起作用。
      // elevationScale: 1, // 高程乘数。最终高程由elevationScale*getElevation（d）计算。elevationScale是一个方便的属性，可以在不更新数据的情况下缩放所有多边形高程。
      // material: true,  //  这是一个对象，其中包含应用于拉伸多边形的照明效果的材质道具。检查可配置设置的照明指南。
      // _normalize: false, // 如果为false，将跳过对getPolygon返回的坐标进行规格化.仅当您将此层用于后端的预处理静态数据或验证时，才建议使用此属性
      // _windingOrder: 'CW', // 仅在_normalize:false时有效。它指定多边形数据中环的缠绕顺序，可以是：“CW”：外圈为顺时针方向，孔为逆时针方向“逆时针”：外圈为逆时针方向，孔为顺时针方向
      ggetHexagons: function ggetHexagons(d) {
        return d.hexagon;
      },
      // 方法调用以从每个对象中检索六边形簇，作为一个H3六角索引数组。这些六角体被连接到表示簇的地理空间轮廓的多边形中。
      getFillColor: [0, 0, 0, 0],
      // 如果提供了阵列，则它将用作所有多边形的填充颜色。如果提供了一个函数，则会对每个多边形调用该函数以检索其填充颜色。
      getLineColor: [0, 0, 0, 0],
      // 如果提供了一个数组，它将用作所有多边形的边颜色。
      getLineWidth: 1,
      // 多边形轮廓的宽度，单位由lineWidthUnits（默认米）指定。 number|function
      getElevation: 100 // 用于拉伸每个多边形的高程。如果使用地图投影模式，高度将被解释为米，否则将以单位坐标表示。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, H3HexagonLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new deck_gl.H3HexagonLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DH3HexagonLayer(props) {
    return new deck_gl.H3HexagonLayer(H3HexagonLayerConfig(props));
  }

  function ScenegraphLayerConfig(props) {
    //在这里判断key的存在
    var layerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      data: props === null || props === void 0 ? void 0 : props.data,
      visible: true,
      // 显隐
      pickable: true,
      // 用于控制鼠标事件
      opacity: 1 // scenegraph:
      //   'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb',
      // getPosition: d => d.geometry.coordinates,
      // getOrientation: d => [0, Math.random() * 180, 90], // 对象方向定义为欧拉角的 vec3，[pitch, yaw, roll]以度为单位。
      // _animations: {
      //   '*': { speed: 1 },
      // },
      // sizeScale: 5000,
      // _lighting: 'pbr',
      // sizeMaxPixels: Number.MAX_SAFE_INTEGER, // 一个单位场景的最大尺寸（以像素为单位）。
      // sizeMinPixels: 1, // 一个单位场景的最小尺寸（以像素为单位）。
      // getTransformMatrix: null, // 为网格明确定义一个 4x4 列主模型矩阵。如果提供，将覆盖 getOrientation, getScale, getTranslation。
      // getTranslation: [0, 0, 0], // 网格沿每个轴的平移。从由 给出的中心位置偏移getPosition。[x, y, z]以米为单位。
      // getScale: [1, 1, 1], // 网格上沿每个轴的缩放因子。
      // getColor: [34, 45, 0, 255], // rgba 颜色的格式为[r, g, b, [a]]. 每个通道是 0-255 之间的数字，a如果不提供，则为 255。仅在texture为空时使用。

    };

    var newConfig = _objectSpread2(_objectSpread2({}, layerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new meshLayers.ScenegraphLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DScenegraphLayerConfig(props) {
    return new meshLayers.ScenegraphLayer(ScenegraphLayerConfig(props));
  }

  function Tile3DLayerConfig(props) {
    var Tile3DLayerConfig = {
      id: props === null || props === void 0 ? void 0 : props.id,
      pointSize: 1,
      opacity: 1,
      data: props === null || props === void 0 ? void 0 : props.data,
      loader: _3dTiles.CesiumIonLoader,
      loadOptions: {
        tileset: {
          throttleRequests: true
        },
        'cesium-ion': {
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWMxMzcyYy0zZjJkLTQwODctODNlNi01MDRkZmMzMjIxOWIiLCJpZCI6OTYyMCwic2NvcGVzIjpbImFzbCIsImFzciIsImdjIl0sImlhdCI6MTU2Mjg2NjI3M30.1FNiClUyk00YH_nWfSGpiQAjR5V2OvREDq1PJ5QMjWQ'
        }
      }
    };

    var newConfig = _objectSpread2(_objectSpread2({}, Tile3DLayerConfig), props);

    newConfig.updateLayer = function () {
      var newOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var oldNewLayerConfig = _objectSpread2(_objectSpread2({}, newConfig), newOption);

      return new geoLayers.Tile3DLayer(oldNewLayerConfig);
    };

    return newConfig;
  }
  function DTile3DLayer(props) {
    return new geoLayers.Tile3DLayer(Tile3DLayerConfig(props));
  }

  var styles$5 = {"normal":"styles_normal__Y9Dfe","titleBox":"styles_titleBox__TDXBO","leftBorder":"styles_leftBorder__RBudp","lineBox":"styles_lineBox__zA9G9"};

  /**
   *  正则添加千位分隔符
   * @param {数值} num
   * @returns
   */
  function numFormatRegExp(num) {
    var res = num.toString().replace(/\d+/, function (n) {
      // 先提取整数部分
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ',';
      });
    });
    return res;
  }

  function labelTextLayer(marker, node, mapStyle) {
    //   console.log(mapStyle, 'xxajximd');
    //   console.log(marker, 'womximsmnwidnfn');
    var size = mapStyle.size,
        backgroundStyle = mapStyle.backgroundStyle,
        borderStyle = mapStyle.borderStyle,
        textStyle = mapStyle.textStyle,
        numberStyle = mapStyle.numberStyle,
        unitStyle = mapStyle.unitStyle,
        tractionLineStyle = mapStyle.tractionLineStyle;

    function labelDom() {
      // ------------- 标签头部文字设置 start -------------
      var titleStyle = {
        background: backgroundStyle.status ? backgroundStyle.type1Default.gradientStatus ? "-webkit-linear-gradient(".concat(backgroundStyle.type1Default.gradientDirection, "deg,").concat(backgroundStyle.type1Default.gradientColor1, ", ").concat(backgroundStyle.type1Default.gradientColor2, ")") : backgroundStyle.type1Default.defaultColor : 'transparent',
        borderColor: borderStyle.borderColor,
        borderWidth: borderStyle.status ? borderStyle.borderWidth : 0,
        boxShadow: borderStyle.boxShadow.status ? "".concat(borderStyle.boxShadow.xShadow, "px ").concat(borderStyle.boxShadow.yShadow, "px ").concat(borderStyle.boxShadow.blur, "px ").concat(borderStyle.boxShadow.color) : 'none',
        borderRadius: "".concat(borderStyle.borderRadius, "px")
      };

      var feildNameStyle = _objectSpread2(_objectSpread2({}, textStyle.defaultStyle), textStyle.marginObj);

      var feildValueStyle = _objectSpread2(_objectSpread2({}, numberStyle.defaultStyle), numberStyle.marginObj);

      var feildUnitStyle = _objectSpread2(_objectSpread2({}, unitStyle.defaultStyle), unitStyle.marginObj); // ------------- 标签头部文字设置 end -------------
      // ------------- 牵引线设置 start -------------


      var lineStyle = {
        background: tractionLineStyle.lineStyle === 'solid' ? tractionLineStyle.lineColor : tractionLineStyle.lineStyle === 'gradient' ? "-webkit-linear-gradient(top,".concat(tractionLineStyle.lineColor, ", rgba(0, 0, 0, 0))") : "-webkit-linear-gradient(top,".concat(tractionLineStyle.lineColor, " 50%, rgba(0, 0, 0, 0) 50%)"),
        width: tractionLineStyle.lineWidth,
        height: tractionLineStyle.lineHeight * 2
      };
      var leftBorderStyle = {
        display: 'initial',
        width: tractionLineStyle.lineWidth,
        background: tractionLineStyle.lineColor,
        borderLeftColor: tractionLineStyle.lineColor,
        marginTop: "-".concat(titleStyle.borderWidth, "px"),
        height: "calc(100% + ".concat(titleStyle.borderWidth * 2, "px)")
      };

      if (tractionLineStyle.lineStyle === 'dotted') {
        lineStyle.backgroundSize = "100% 20px";
      } // 不需要显隐牵引线
      // if (!tractionLineStyle.status) {
      //   lineStyle.display = 'none';
      // }


      if (tractionLineStyle.location !== 'center') {
        titleStyle.transform = "translate(50%, -100%)";
        titleStyle.borderLeft = 0;
        titleStyle.borderTopLeftRadius = 0;
        titleStyle.borderBottomLeftRadius = 0;
      } // ------------- 牵引线设置 end -------------
      // -------------- 判断数据是否为number


      var dataNum = marker.properties[mapStyle.feild.value];

      if (Number(dataNum) && numberStyle.numSeparator) {
        dataNum = numFormatRegExp(dataNum);
      } // ------------- normal样式


      var normalStyle = {
        height: tractionLineStyle.lineHeight * 2,
        transform: "translate(0, -50%) scale(".concat(size, ")")
      };
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$5.normal,
        style: normalStyle
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$5.titleBox,
        style: titleStyle
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$5.leftBorder,
        style: tractionLineStyle.location !== 'center' ? leftBorderStyle : null
      }), /*#__PURE__*/React__default["default"].createElement("span", {
        style: feildNameStyle
      }, mapStyle.feild.name), /*#__PURE__*/React__default["default"].createElement("span", {
        style: feildValueStyle
      }, dataNum), /*#__PURE__*/React__default["default"].createElement("span", {
        style: unitStyle.unit ? feildUnitStyle : null
      }, mapStyle.unitStyle.unit)), /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$5.lineBox,
        style: lineStyle
      }));
    }

    return ReactDOM__default["default"].render(labelDom(), node);
  }

  var TextLabelLayers = /*#__PURE__*/function () {
    function TextLabelLayers(map, config) {
      var _config$option, _config$option2;

      _classCallCheck(this, TextLabelLayers);

      this.map = map;
      this.id = config === null || config === void 0 ? void 0 : config.id;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      this.mapType = 'textLabelLayer';
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.visibility = config === null || config === void 0 ? void 0 : config.visible;
      this.mapStyle = config === null || config === void 0 ? void 0 : config.mapStyle;
      this.option = {
        minZoom: config === null || config === void 0 ? void 0 : (_config$option = config.option) === null || _config$option === void 0 ? void 0 : _config$option.minZoom,
        maxZoom: (config === null || config === void 0 ? void 0 : (_config$option2 = config.option) === null || _config$option2 === void 0 ? void 0 : _config$option2.maxZoom) + 1
      };
      this.markerArr = [];
      this.popupArr = [];
    } //初始化图层


    _createClass(TextLabelLayers, [{
      key: "initLayer",
      value: function initLayer() {} //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata) {
        var _this = this;

        // const { imgSrc } = this.mapStyle?.icon;
        var heightToGround = this.mapStyle.heightToGround;
        var timestamp = new Date().getTime();
        var that = this;
        that.removeMapLayer();
        geoJsondata && geoJsondata.forEach(function (marker, index) {
          var idIndex = index + _this.id + timestamp;
          var newDom = document.createElement('div');
          newDom.id = idIndex;
          newDom.style.background = 'transparent'; // newDom.style.position = 'absolute';
          // newDom.style.width = '200px';
          // newDom.style.height = '120px';
          // newDom.style.background = 'orange';
          //图标

          var markers = new mapboxgl__default["default"].Marker({
            element: newDom,
            offset: [0, -heightToGround] //   anchor: 'bottom-left',

          }).setLngLat(marker.geometry.coordinates).addTo(_this.map);
          labelTextLayer(marker, document.getElementById(idIndex), that.mapStyle);

          _this.markerArr.push(markers);
        });
        this.setLayerVisible(this.visibility);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        for (var i in this.markerArr) {
          this.markerArr[i].remove();
        }

        this.markerArr = [];
      } //删除弹出框图层数据

    }, {
      key: "removePopupLayer",
      value: function removePopupLayer() {
        for (var i in this.popupArr) {
          this.popupArr[i].remove();
        }

        this.popupArr = [];
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        for (var i in this.markerArr) {
          if (visibility) {
            this.markerArr[i]._element.style.display = 'block';
          } else {
            this.markerArr[i]._element.style.display = 'none';
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];
        this.map.setFilter('heat', filters);
        this.map.setFilter(this.layername + '_point', filters);
      }
      /**
       *数据、样式更新
       */

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem, newVisible) {
        var _elem$option, _elem$option2;

        this.removeMapLayer();
        this.mapStyle = elem.mapStyle;
        this.visibility = elem === null || elem === void 0 ? void 0 : elem.visible;
        this.option = {
          minZoom: elem === null || elem === void 0 ? void 0 : (_elem$option = elem.option) === null || _elem$option === void 0 ? void 0 : _elem$option.minZoom,
          maxZoom: (elem === null || elem === void 0 ? void 0 : (_elem$option2 = elem.option) === null || _elem$option2 === void 0 ? void 0 : _elem$option2.maxZoom) + 1
        };
        this.addMapLayer(elem === null || elem === void 0 ? void 0 : elem.data);
        this.setLayerVisible(newVisible);
      }
    }]);

    return TextLabelLayers;
  }();

  function layerScaleOrdinal(weightArray, RangeArray) {
    return d3Scale.scaleOrdinal().domain(weightArray).range(RangeArray);
  }
  function layerScalePoint(weightArray, RangeArray) {
    return d3Scale.scalePoint().domain(weightArray).range(RangeArray);
  }
  function layerScaleQuantile(weightArray, RangeArray) {
    return d3Scale.scaleQuantile().domain(weightArray).range(RangeArray);
  }

  /**
   * 判断是否是函数
   * @method {isObject}
   * @param {object}  对象1
   * @param {object}  对象2
   */
  function isObject$1(obj) {
    return obj !== null && _typeof(obj) === 'object';
  }
  /**
   * 深度遍历两个对象是否相等
   * @method {looseEqual}
   * @param {object}  对象1
   * @param {object}  对象2
   */

  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }

    var isObjectA = isObject$1(a);
    var isObjectB = isObject$1(b);

    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);

        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }
  /**
   * @method rgbToColorArr
   * @params {color} 字符串
   * 将传入的"rgb(34,30,30)"转换 [34,30,30,255]格式
   */

  function rgbToColorArr$1(colors) {
    if (!colors) {
      return [255, 140, 0, 255];
    }

    var color = colors;

    if (color.indexOf('rgba') > -1) {
      color = color.replace('rgba', '');
      color = color.replace('(', '');
      color = color.replace(')', '');
      color = color.split(',');
      return [Number(color[0]), Number(color[1]), Number(color[2]), parseInt(255 * Number(color[3]))];
    } else {
      color = color.replace('rgb', '');
      color = color.replace('(', '');
      color = color.replace(')', '');
      color = color.split(',');
      return [Number(color[0]), Number(color[1]), Number(color[2]), 255];
    }
  }

  var HeatLayer = /*#__PURE__*/function () {
    function HeatLayer(map, config, spaceojoMapStyle) {
      var _config$option, _config$option2;

      _classCallCheck(this, HeatLayer);

      this.map = map;
      this.id = config === null || config === void 0 ? void 0 : config.id;
      this.mapType = 'HeatLayer';
      this.spaceojoMapStyle = spaceojoMapStyle;
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      this.mapStyle = config === null || config === void 0 ? void 0 : config.mapStyle;
      this.option = {
        minZoom: config === null || config === void 0 ? void 0 : (_config$option = config.option) === null || _config$option === void 0 ? void 0 : _config$option.minZoom,
        maxZoom: (config === null || config === void 0 ? void 0 : (_config$option2 = config.option) === null || _config$option2 === void 0 ? void 0 : _config$option2.maxZoom) + 1
      };
      this.data = config === null || config === void 0 ? void 0 : config.data;
      this.visibility = config === null || config === void 0 ? void 0 : config.visible;
      this.initLayer();
      this.setLayerVisible(config === null || config === void 0 ? void 0 : config.visible);
    } //初始化图层


    _createClass(HeatLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map, _this$map2;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getSource(this.layername))) {
          this.map.addSource(this.layername, {
            type: 'geojson',
            data: {
              type: 'Feature',
              features: []
            }
          });
        }

        if (!((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer(this.layername + '_heatmap'))) {
          var _this$mapStyle, _this$mapStyle$radius, _this$mapStyle2, _this$mapStyle2$color, _this$mapStyle3, _this$mapStyle3$color;

          var heatmapColor = this.getHeatmapColor();
          this.map.addLayer({
            id: this.layername + '_heatmap',
            type: 'heatmap',
            source: this.layername,
            minzoom: this.option.minZoom,
            maxzoom: this.option.maxZoom,
            paint: {
              // "heatmap-radius": ['get', 'radius'],
              'heatmap-radius': (_this$mapStyle = this.mapStyle) === null || _this$mapStyle === void 0 ? void 0 : (_this$mapStyle$radius = _this$mapStyle.radius) === null || _this$mapStyle$radius === void 0 ? void 0 : _this$mapStyle$radius.radius,
              // "heatmap-weight":this.mapStyle.color.feild?(()=>{console.log('weightColor',this.weightColor(['get', this.mapStyle.color.feild]),['get', this.mapStyle.color.feild]);return 1})():0.5,
              'heatmap-weight': (_this$mapStyle2 = this.mapStyle) !== null && _this$mapStyle2 !== void 0 && (_this$mapStyle2$color = _this$mapStyle2.color) !== null && _this$mapStyle2$color !== void 0 && _this$mapStyle2$color.feild ? ['interpolate', ['linear'], ['get', 'weight'], 1, 0, 10000, 1] : 1,
              'heatmap-intensity': {
                stops: [[0, 1], [18, 0]]
              },
              'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(33,102,172,0)'].concat(_toConsumableArray(heatmapColor)),
              'heatmap-opacity': (_this$mapStyle3 = this.mapStyle) === null || _this$mapStyle3 === void 0 ? void 0 : (_this$mapStyle3$color = _this$mapStyle3.color) === null || _this$mapStyle3$color === void 0 ? void 0 : _this$mapStyle3$color.opacity
            }
          });
        }
      } //获取对应的权重颜色

    }, {
      key: "getHeatmapColor",
      value: function getHeatmapColor() {
        var arr = []; //传入的颜色

        var color = this.mapStyle.color;
        var colorArray = color.color;
        var antitone = color.antitone; //拷贝一个颜色数组  做反序用

        var reversalColorArray = JSON.parse(JSON.stringify(colorArray));
        reversalColorArray = reversalColorArray.reverse();
        var multiplicationNum = 1 / colorArray.length; //根据颜色的的长度做权重的计算

        for (var i in colorArray) {
          arr.push((parseInt(i) + 1) * multiplicationNum);
          arr.push(antitone ? reversalColorArray[i] : colorArray[i]);
        }

        return arr;
      } //处理数组函数

    }, {
      key: "fildToArray",
      value: function fildToArray(dataSource, feild, isToFixed) {
        var weightArr = [];

        for (var i in dataSource) {
          var properties = dataSource[i].properties;
          var keys = feild;
          var item = properties[keys];
          var numberitem = Number(item);

          if (isNaN(numberitem) || !isToFixed) {
            item = isNaN(numberitem) ? item : numberitem;

            if (weightArr.indexOf(item) < 0) {
              weightArr.push(item);
            }
          } else {
            if (weightArr.indexOf(numberitem.toFixed(3)) < 0) {
              weightArr.push(numberitem.toFixed(3));
            }
          }
        }

        for (var j = 0; j < weightArr.length - 1; j++) {
          for (var _i = 0; _i < weightArr.length - j; _i++) {
            if (weightArr[_i] > weightArr[_i + 1]) {
              var num = weightArr[_i];
              weightArr[_i] = weightArr[_i + 1];
              weightArr[_i + 1] = num;
            }
          }
        }

        return weightArr;
      } //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata) {
        var _this$mapStyle4, _this$mapStyle4$color;

        var weightColors = null;
        var colorWidth = this.fildToArray(geoJsondata, (_this$mapStyle4 = this.mapStyle) === null || _this$mapStyle4 === void 0 ? void 0 : (_this$mapStyle4$color = _this$mapStyle4.color) === null || _this$mapStyle4$color === void 0 ? void 0 : _this$mapStyle4$color.feild, true);
        weightColors = layerScalePoint(colorWidth, [1, 10000]);

        for (var i in geoJsondata) {
          var _this$mapStyle5, _this$mapStyle5$color;

          geoJsondata[i].properties.weight = weightColors ? weightColors(geoJsondata[i].properties[(_this$mapStyle5 = this.mapStyle) === null || _this$mapStyle5 === void 0 ? void 0 : (_this$mapStyle5$color = _this$mapStyle5.color) === null || _this$mapStyle5$color === void 0 ? void 0 : _this$mapStyle5$color.feild]) : 0.5;
        }

        this.updateLayer(geoJsondata);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        var _this$map3;

        if ((_this$map3 = this.map) !== null && _this$map3 !== void 0 && _this$map3.getLayer(this.layername + '_heatmap')) {
          this.map.removeLayer(this.layername + '_heatmap');
          this.map.removeSource(this.layername);
        }
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        var _this$map4;

        if ((_this$map4 = this.map) !== null && _this$map4 !== void 0 && _this$map4.getLayer(this.layername + '_heatmap')) {
          if (visibility) {
            this.map.setLayoutProperty(this.layername + '_heatmap', 'visibility', 'visible');
          } else {
            this.map.setLayoutProperty(this.layername + '_heatmap', 'visibility', 'none');
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];
        this.map.setFilter('heat', filters);
        this.map.setFilter(this.layername + '_heatmap', filters);
      }
      /**
       *更新数据源
       */

    }, {
      key: "updateLayer",
      value: function updateLayer(data) {
        var _this$map5;

        if ((_this$map5 = this.map) !== null && _this$map5 !== void 0 && _this$map5.getLayer(this.layername + '_heatmap')) {
          var geojson = {
            type: 'FeatureCollection',
            features: data
          };
          this.map.getSource(this.layername).setData(geojson);
        }
      }
      /**
       * 属性更新
       */

    }, {
      key: "updataPropsBy",
      value: function updataPropsBy(elem) {
        var _this$map6;

        if ((_this$map6 = this.map) !== null && _this$map6 !== void 0 && _this$map6.getLayer(this.layername + '_heatmap')) {
          var _elem$mapStyle, _elem$mapStyle$radius, _elem$mapStyle2, _elem$mapStyle2$color, _elem$mapStyle3, _elem$mapStyle3$color, _elem$option, _elem$option2;

          var heatmapColor = this.getHeatmapColor(); // 半径

          this.map.setPaintProperty(this.layername + '_heatmap', 'heatmap-radius', elem === null || elem === void 0 ? void 0 : (_elem$mapStyle = elem.mapStyle) === null || _elem$mapStyle === void 0 ? void 0 : (_elem$mapStyle$radius = _elem$mapStyle.radius) === null || _elem$mapStyle$radius === void 0 ? void 0 : _elem$mapStyle$radius.radius); // 权重字段

          this.map.setPaintProperty(this.layername + '_heatmap', 'heatmap-weight', elem !== null && elem !== void 0 && (_elem$mapStyle2 = elem.mapStyle) !== null && _elem$mapStyle2 !== void 0 && (_elem$mapStyle2$color = _elem$mapStyle2.color) !== null && _elem$mapStyle2$color !== void 0 && _elem$mapStyle2$color.feild ? ['interpolate', ['linear'], ['get', 'weight'], 1, 0, 10000, 1] : 1); // 透明度

          this.map.setPaintProperty(this.layername + '_heatmap', 'heatmap-opacity', elem === null || elem === void 0 ? void 0 : (_elem$mapStyle3 = elem.mapStyle) === null || _elem$mapStyle3 === void 0 ? void 0 : (_elem$mapStyle3$color = _elem$mapStyle3.color) === null || _elem$mapStyle3$color === void 0 ? void 0 : _elem$mapStyle3$color.opacity); // 颜色

          this.map.setPaintProperty(this.layername + '_heatmap', 'heatmap-color', ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(33,102,172,0)'].concat(_toConsumableArray(heatmapColor)));
          this.map.setLayerZoomRange(this.layername + '_heatmap', elem === null || elem === void 0 ? void 0 : (_elem$option = elem.option) === null || _elem$option === void 0 ? void 0 : _elem$option.minZoom, elem === null || elem === void 0 ? void 0 : (_elem$option2 = elem.option) === null || _elem$option2 === void 0 ? void 0 : _elem$option2.maxZoom);
        }
      }
      /**
       *数据、样式更新
       */

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem, spaceojoMapStyle) {
        var _elem$option3, _elem$option4;

        this.mapStyle = elem === null || elem === void 0 ? void 0 : elem.mapStyle;
        this.option = {
          minZoom: elem === null || elem === void 0 ? void 0 : (_elem$option3 = elem.option) === null || _elem$option3 === void 0 ? void 0 : _elem$option3.minZoom,
          maxZoom: (elem === null || elem === void 0 ? void 0 : (_elem$option4 = elem.option) === null || _elem$option4 === void 0 ? void 0 : _elem$option4.maxZoom) + 1
        };

        if (this.spaceojoMapStyle !== spaceojoMapStyle) {
          var _elem$mapStyle4, _elem$option5, _elem$option6, _elem$mapStyle5, _elem$mapStyle5$radiu;

          this.removeMapLayer(); // 更新修改的属性

          this.mapStyle = elem === null || elem === void 0 ? void 0 : elem.mapStyle;
          this.spaceojoMapStyle = spaceojoMapStyle;
          this.visibility = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle4 = elem.mapStyle) === null || _elem$mapStyle4 === void 0 ? void 0 : _elem$mapStyle4.visible;
          this.option = {
            minZoom: elem === null || elem === void 0 ? void 0 : (_elem$option5 = elem.option) === null || _elem$option5 === void 0 ? void 0 : _elem$option5.minZoom,
            maxZoom: (elem === null || elem === void 0 ? void 0 : (_elem$option6 = elem.option) === null || _elem$option6 === void 0 ? void 0 : _elem$option6.maxZoom) + 1
          };
          this.size = parseInt((elem === null || elem === void 0 ? void 0 : (_elem$mapStyle5 = elem.mapStyle) === null || _elem$mapStyle5 === void 0 ? void 0 : (_elem$mapStyle5$radiu = _elem$mapStyle5.radius) === null || _elem$mapStyle5$radiu === void 0 ? void 0 : _elem$mapStyle5$radiu.radius) * 50);
          this.width = this.size;
          this.height = this.size;
          this.initLayer();
          this.setLayerVisible(elem === null || elem === void 0 ? void 0 : elem.visible);
          this.addMapLayer(elem === null || elem === void 0 ? void 0 : elem.data);
        } else {
          this.updataPropsBy(elem);
          this.setLayerVisible(elem === null || elem === void 0 ? void 0 : elem.visible);

          if (!looseEqual(this.data, elem === null || elem === void 0 ? void 0 : elem.data)) {
            this.updateLayer(elem === null || elem === void 0 ? void 0 : elem.data);
            this.data = elem === null || elem === void 0 ? void 0 : elem.data;
          }
        }
      }
    }]);

    return HeatLayer;
  }();

  var HeartbeatLayer = /*#__PURE__*/function () {
    function HeartbeatLayer(map, config) {
      var _config$option, _config$option2, _this$mapStyle, _this$mapStyle$radius;

      _classCallCheck(this, HeartbeatLayer);

      this.map = map;
      this.id = config === null || config === void 0 ? void 0 : config.id;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.mapStyle = config === null || config === void 0 ? void 0 : config.mapStyle;
      this.visibility = config === null || config === void 0 ? void 0 : config.visible;
      this.mapType = 'HeartBeatLayer';
      this.option = {
        minZoom: config === null || config === void 0 ? void 0 : (_config$option = config.option) === null || _config$option === void 0 ? void 0 : _config$option.minZoom,
        maxZoom: (config === null || config === void 0 ? void 0 : (_config$option2 = config.option) === null || _config$option2 === void 0 ? void 0 : _config$option2.maxZoom) + 1
      };
      this.size = parseInt(((_this$mapStyle = this.mapStyle) === null || _this$mapStyle === void 0 ? void 0 : (_this$mapStyle$radius = _this$mapStyle.radius) === null || _this$mapStyle$radius === void 0 ? void 0 : _this$mapStyle$radius.radius) * 50);
      this.width = this.size;
      this.height = this.size;
      this.iconStyleArr = [];
      this.initLayer();
      this.setLayerVisible(config === null || config === void 0 ? void 0 : config.visible);
    } //初始化图层


    _createClass(HeartbeatLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map,
            _this$map2,
            _this = this;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getSource(this.layername))) {
          this.map.addSource(this.layername, {
            type: 'geojson',
            data: {
              type: 'Feature',
              features: []
            }
          });
        }

        if (!((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer(this.layername + '_aimatedIcon'))) {
          var _this$map3;

          var that = this;
          var _this$mapStyle2 = this.mapStyle,
              billboard = _this$mapStyle2.billboard,
              autoAvoid = _this$mapStyle2.autoAvoid,
              color = _this$mapStyle2.color,
              animation = _this$mapStyle2.animation;
          var scatterStyleType = animation.scatterStyleType,
              scatterAimatedType = animation.scatterAimatedType,
              scatterSpeed = animation.scatterSpeed;
          var newColor = color.color.includes('rgba') ? color.color.split(')')[0].split('rgba')[1] : color.color.split(')')[0].split('rgb')[1]; // eslint-disable-line no-unused-vars

          var duration = 10000 / scatterSpeed;
          newColor = !color.color.includes('rgba') ? 'rgba' + newColor + ',' : 'rgba' + newColor.slice(0, newColor.length - 1); //类型1实心扩散图

          this.pulsingDot1 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              if (_this.canvas) {
                _this.canvas.remove();
              }

              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration;
              var radius = that.size / 4 * 0.4;
              var outerRadius = null;
              var styleColor = null;

              if (scatterAimatedType === 1) {
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + (1 - t) + ')';
              } else if (scatterAimatedType === 2) {
                outerRadius = that.size / 2 * 0.7 + radius;
                styleColor = newColor + (1 - t * 2 > 0 ? 1 - t * 2 : t * 2 - 1) + ')';
              } else if (scatterAimatedType === 3) {
                if (t > 0.5) {
                  t = 1 - t;
                }

                t = t * 2;
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + (1 - t) + ')';
              } else if (scatterAimatedType === 4) {
                outerRadius = that.size / 2 * 0.7 * (1 - t) + radius;
                styleColor = newColor + (1 - t) + ')';
              }

              var context = that.context;
              context.clearRect(0, 0, that.width, that.height);
              context.beginPath();
              context.arc(that.width / 2, that.height / 2, outerRadius, 0, Math.PI * 2);
              context.fillStyle = styleColor;
              context.fill();
              context.beginPath();
              context.crossOrigin = '';
              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          }; //类型2循环扩散图

          this.pulsingDot2 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              if (_this.canvas) {
                _this.canvas.remove();
              }

              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration;
              var radius = that.size / 4 * 0.4;
              var outerRadius = null;
              var styleColor = null;

              if (scatterAimatedType === 1) {
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + (1 - t) + ')';
              } else if (scatterAimatedType === 2) {
                outerRadius = that.size / 2 * 0.7 + radius;
                styleColor = newColor + (1 - t * 2 > 0 ? 1 - t * 2 : t * 2 - 1) + ')';
              } else if (scatterAimatedType === 3) {
                if (t > 0.5) {
                  t = 1 - t;
                }

                t = t * 2;
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + (1 - t) + ')';
              } else if (scatterAimatedType === 4) {
                outerRadius = that.size / 2 * 0.7 * (1 - t) + radius;
                styleColor = newColor + (1 - t) + ')';
              }

              var context = that.context;
              context.clearRect(0, 0, that.width, that.height);
              context.beginPath();
              context.arc(that.width / 2, that.height / 2, outerRadius, 0, Math.PI * 2);
              context.fillStyle = styleColor;
              context.fill();
              context.beginPath();
              context.crossOrigin = '';
              context.arc(that.width / 2, that.height / 2, radius, 0, Math.PI * 2);
              context.fillStyle = color.color;
              context.fill();
              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          }; //类型3无中心点扩散图

          this.pulsingDot3 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              if (_this.canvas) {
                _this.canvas.remove();
              }

              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration;
              var radius = that.size / 4 * 0.4;
              var outerRadius = null;
              var styleColor = null;

              if (scatterAimatedType === 1) {
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + 0.9 + ')';
              } else if (scatterAimatedType === 2) {
                outerRadius = that.size / 2 * 0.7 + radius;
                styleColor = newColor + (1 - t * 2 > 0 ? 1 - t * 2 : t * 2 - 1) + ')';
              } else if (scatterAimatedType === 3) {
                if (t > 0.5) {
                  t = 1 - t;
                }

                t = t * 2;
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + 0.9 + ')';
              } else if (scatterAimatedType === 4) {
                outerRadius = that.size / 2 * 0.7 * (1 - t) + radius;
                styleColor = newColor + 0.9 + ')';
              }

              var center = that.size / 2;
              var context = that.context;
              context.clearRect(0, 0, that.width, that.height);
              context.beginPath();
              var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
              grd.addColorStop(0, newColor + 0 + ')');
              grd.addColorStop(0.2, newColor + 0 + ')');
              grd.addColorStop(0.9, styleColor);
              grd.addColorStop(1, newColor + 0 + ')'); //使用经向渐变

              context.fillStyle = grd;
              context.fillRect(0, 0, that.width, that.height);
              context.fill();
              context.beginPath();
              context.crossOrigin = '';
              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          }; //类型4

          this.pulsingDot4 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              if (_this.canvas) {
                _this.canvas.remove();
              }

              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration;
              var radius = that.size / 4 * 0.4;
              var outerRadius = null;
              var styleColor = null;

              if (scatterAimatedType === 1) {
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = color.color;
              } else if (scatterAimatedType === 2) {
                outerRadius = that.size / 2 * 0.7 + radius;
                styleColor = newColor + (1 - t * 2 > 0 ? 1 - t * 2 : t * 2 - 1) + ')';
              } else if (scatterAimatedType === 3) {
                if (t > 0.5) {
                  t = 1 - t;
                }

                t = t * 2;
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = color.color;
              } else if (scatterAimatedType === 4) {
                outerRadius = that.size / 2 * 0.7 * (1 - t) + radius;
                styleColor = color.color;
              }

              var center = that.size / 2;
              var context = that.context;
              context.clearRect(0, 0, that.width, that.height);
              context.beginPath();
              var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
              grd.addColorStop(0, styleColor);
              grd.addColorStop(1, newColor + 0 + ')'); //使用经向渐变

              context.fillStyle = grd;
              context.fillRect(0, 0, that.width, that.height);
              context.fill();
              context.beginPath();
              context.crossOrigin = '';
              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          }; //类型5中心有点的扩散图

          this.pulsingDot5 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              if (_this.canvas) {
                _this.canvas.remove();
              }

              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration;
              var radius = that.size / 4 * 0.4;
              var outerRadius = null;
              var styleColor = null;

              if (scatterAimatedType === 1) {
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + 0.9 + ')';
              } else if (scatterAimatedType === 2) {
                outerRadius = that.size / 2 * 0.7 + radius;
                styleColor = newColor + (1 - t * 2 > 0 ? 1 - t * 2 : t * 2 - 1) + ')';
              } else if (scatterAimatedType === 3) {
                if (t > 0.5) {
                  t = 1 - t;
                }

                t = t * 2;
                outerRadius = that.size / 2 * 0.7 * t + radius;
                styleColor = newColor + 0.9 + ')';
              } else if (scatterAimatedType === 4) {
                outerRadius = that.size / 2 * 0.7 * (1 - t) + radius;
                styleColor = newColor + 0.9 + ')';
              }

              var center = that.size / 2;
              var context = that.context;
              context.clearRect(0, 0, that.width, that.height);
              context.beginPath();
              var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
              grd.addColorStop(0, newColor + 0 + ')');
              grd.addColorStop(0.2, newColor + 0 + ')');
              grd.addColorStop(0.9, styleColor);
              grd.addColorStop(1, newColor + 0 + ')'); //使用经向渐变

              context.fillStyle = grd;
              context.fillRect(0, 0, that.width, that.height);
              context.fill();
              context.beginPath();
              context.crossOrigin = '';
              context.arc(that.width / 2, that.height / 2, radius, 0, Math.PI * 2);
              context.fillStyle = color.color;
              context.fill();
              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          };
          this.iconStyleArr = [this.pulsingDot1, this.pulsingDot2, this.pulsingDot3, this.pulsingDot4, this.pulsingDot5];

          if ((_this$map3 = this.map) !== null && _this$map3 !== void 0 && _this$map3.hasImage("".concat(this.layername, "Icon"))) {
            this.map.removeImage("".concat(this.layername, "Icon"));
          }

          this.map.addImage("".concat(this.layername, "Icon"), this.iconStyleArr[scatterStyleType - 1], {
            pixelRatio: 2
          });
          this.map.addLayer({
            id: this.layername + '_aimatedIcon',
            type: 'symbol',
            source: this.layername,
            minzoom: this.option.minZoom,
            maxzoom: this.option.maxZoom,
            layout: {
              'icon-allow-overlap': !autoAvoid,
              'icon-image': "".concat(this.layername, "Icon"),
              'icon-keep-upright': true,
              'icon-pitch-alignment': billboard ? 'viewport' : 'map',
              //viewport
              'icon-size': 1
            },
            paint: {
              'icon-color': 'rgba(255,255,255,1)',
              // 'icon-halo-width': Math.random() * 200,
              'icon-halo-color': 'rgba(255,255,255,1)',
              'icon-halo-blur': 0,
              'icon-opacity': color.opacity
            }
          });
        }
      } //获取对应的权重颜色

    }, {
      key: "getHeatmapColor",
      value: function getHeatmapColor() {
        var arr = []; //传入的颜色

        var color = this.mapStyle.color;
        var colorArray = color.color;
        var antitone = color.antitone; //拷贝一个颜色数组  做反序用

        var reversalColorArray = JSON.parse(JSON.stringify(colorArray));
        reversalColorArray = reversalColorArray.reverse();
        var multiplicationNum = 1 / colorArray.length; //根据颜色的的长度做权重的计算

        for (var i in colorArray) {
          arr.push((parseInt(i) + 1) * multiplicationNum);
          arr.push(antitone ? reversalColorArray[i] : colorArray[i]);
        }

        return arr;
      } //处理数组函数

    }, {
      key: "fildToArray",
      value: function fildToArray(dataSource, feild, isToFixed) {
        var weightArr = [];

        for (var i in dataSource) {
          var properties = dataSource[i].properties;
          var keys = feild;
          var item = properties[keys];
          var numberitem = Number(item);

          if (isNaN(numberitem) || !isToFixed) {
            item = isNaN(numberitem) ? item : numberitem;

            if (weightArr.indexOf(item) < 0) {
              weightArr.push(item);
            }
          } else {
            if (weightArr.indexOf(numberitem.toFixed(3)) < 0) {
              weightArr.push(numberitem.toFixed(3));
            }
          }
        }

        for (var j = 0; j < weightArr.length - 1; j++) {
          for (var _i = 0; _i < weightArr.length - j; _i++) {
            if (weightArr[_i] > weightArr[_i + 1]) {
              var num = weightArr[_i];
              weightArr[_i] = weightArr[_i + 1];
              weightArr[_i + 1] = num;
            }
          }
        }

        return weightArr;
      } //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata) {
        var _this$mapStyle3, _this$mapStyle3$color;

        var weightColors = null;
        var colorWidth = this.fildToArray(geoJsondata, (_this$mapStyle3 = this.mapStyle) === null || _this$mapStyle3 === void 0 ? void 0 : (_this$mapStyle3$color = _this$mapStyle3.color) === null || _this$mapStyle3$color === void 0 ? void 0 : _this$mapStyle3$color.feild, true);
        weightColors = layerScalePoint(colorWidth, [1, 10000]);

        for (var i in geoJsondata) {
          geoJsondata[i].properties.weight = weightColors ? weightColors(geoJsondata[i].properties[this.mapStyle.color.feild]) : 0.5;
        }

        this.updateLayer(geoJsondata);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        var _this$map4;

        if ((_this$map4 = this.map) !== null && _this$map4 !== void 0 && _this$map4.getLayer(this.layername + '_aimatedIcon')) {
          this.map.removeLayer(this.layername + '_aimatedIcon');
          this.map.removeSource(this.layername);
        }
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        if (this.map.getLayer(this.layername + '_aimatedIcon')) {
          if (visibility) {
            this.map.setLayoutProperty(this.layername + '_aimatedIcon', 'visibility', 'visible');
          } else {
            this.map.setLayoutProperty(this.layername + '_aimatedIcon', 'visibility', 'none');
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];

        if (this.map) {
          this.map.setFilter('heat', filters);
          this.map.setFilter(this.layername + '_aimatedIcon', filters);
        }
      }
      /**
       * 属性更新
       */

    }, {
      key: "updataPropsBy",
      value: function updataPropsBy(elem) {
        if (this.map.getLayer(this.layername + '_aimatedIcon')) {
          var _elem$mapStyle = elem.mapStyle,
              billboard = _elem$mapStyle.billboard,
              autoAvoid = _elem$mapStyle.autoAvoid,
              color = _elem$mapStyle.color;
          this.map.setPaintProperty(this.layername + '_aimatedIcon', 'icon-color', 'rgba(255,255,255,1)');
          this.map.setPaintProperty(this.layername + '_aimatedIcon', 'icon-opacity', color.opacity);
          this.map.setLayoutProperty(this.layername + '_aimatedIcon', 'icon-allow-overlap', !autoAvoid);
          this.map.setLayoutProperty(this.layername + '_aimatedIcon', 'icon-image', "".concat(this.layername, "Icon"));
          this.map.setLayoutProperty(this.layername + '_aimatedIcon', 'icon-pitch-alignment', billboard ? 'viewport' : 'map');
        }
      }
      /**
       *更新数据源
       */

    }, {
      key: "updateLayer",
      value: function updateLayer(data) {
        var _this$map5;

        if (this !== null && this !== void 0 && (_this$map5 = this.map) !== null && _this$map5 !== void 0 && _this$map5.getLayer(this.layername + '_aimatedIcon')) {
          var geojson = {
            type: 'FeatureCollection',
            features: data
          };
          this.map.getSource(this.layername).setData(geojson);
        }
      }
      /**
       *数据、样式更新
       */

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem) {
        var _elem$mapStyle2, _elem$option, _elem$option2, _elem$mapStyle3, _elem$mapStyle3$radiu;

        this.removeMapLayer(); // 更新修改的属性

        this.mapStyle = elem === null || elem === void 0 ? void 0 : elem.mapStyle;
        this.visibility = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle2 = elem.mapStyle) === null || _elem$mapStyle2 === void 0 ? void 0 : _elem$mapStyle2.visible;
        this.option = {
          minZoom: elem === null || elem === void 0 ? void 0 : (_elem$option = elem.option) === null || _elem$option === void 0 ? void 0 : _elem$option.minZoom,
          maxZoom: (elem === null || elem === void 0 ? void 0 : (_elem$option2 = elem.option) === null || _elem$option2 === void 0 ? void 0 : _elem$option2.maxZoom) + 1
        };
        this.size = parseInt((elem === null || elem === void 0 ? void 0 : (_elem$mapStyle3 = elem.mapStyle) === null || _elem$mapStyle3 === void 0 ? void 0 : (_elem$mapStyle3$radiu = _elem$mapStyle3.radius) === null || _elem$mapStyle3$radiu === void 0 ? void 0 : _elem$mapStyle3$radiu.radius) * 50);
        this.width = this.size;
        this.height = this.size;
        this.iconStyleArr = [];
        this.initLayer();
        this.setLayerVisible(elem === null || elem === void 0 ? void 0 : elem.visible);
        this.addMapLayer(elem === null || elem === void 0 ? void 0 : elem.data);
      }
    }]);

    return HeartbeatLayer;
  }();

  var FlyingLineLayer$1 = /*#__PURE__*/function () {
    function FlyingLineLayer(map, config) {
      var _config$option, _config$option2, _config$mapStyle, _config$mapStyle2;

      _classCallCheck(this, FlyingLineLayer);

      this.map = map;
      this.id = config === null || config === void 0 ? void 0 : config.id;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.mapStyle = config === null || config === void 0 ? void 0 : config.mapStyle;
      this.visibility = config === null || config === void 0 ? void 0 : config.visible;
      this.mapType = 'FlyingLineLayer';
      this.option = {
        minZoom: config === null || config === void 0 ? void 0 : (_config$option = config.option) === null || _config$option === void 0 ? void 0 : _config$option.minZoom,
        maxZoom: (config === null || config === void 0 ? void 0 : (_config$option2 = config.option) === null || _config$option2 === void 0 ? void 0 : _config$option2.maxZoom) + 1
      };
      this.width = parseInt(config === null || config === void 0 ? void 0 : (_config$mapStyle = config.mapStyle) === null || _config$mapStyle === void 0 ? void 0 : _config$mapStyle.radius) || 2;
      this.height = parseInt((config === null || config === void 0 ? void 0 : (_config$mapStyle2 = config.mapStyle) === null || _config$mapStyle2 === void 0 ? void 0 : _config$mapStyle2.height) * 10);
      this.iconStyleArr = [];
      this.initLayer();
      this.setLayerVisible(config === null || config === void 0 ? void 0 : config.visible);
    } //初始化图层


    _createClass(FlyingLineLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map,
            _this$map2,
            _this = this;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getSource(this.layername))) {
          this.map.addSource(this.layername, {
            type: 'geojson',
            data: {
              type: 'Feature',
              features: []
            }
          });
        }

        if (!((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer(this.layername + '_aimatedLine'))) {
          var _this$map3, _layout;

          var that = this;
          var _this$mapStyle = this.mapStyle,
              billboard = _this$mapStyle.billboard,
              autoAvoid = _this$mapStyle.autoAvoid,
              animateSpeed = _this$mapStyle.animateSpeed,
              animateType = _this$mapStyle.animateType,
              heightToGround = _this$mapStyle.heightToGround,
              icon = _this$mapStyle.icon,
              styleType = _this$mapStyle.styleType,
              customColor = _this$mapStyle.customColor,
              opacity = _this$mapStyle.opacity;
          var imgSrc = icon.imgSrc; //   let newColor = color.split(')')[0].split('rgb')[1]; // eslint-disable-line no-unused-vars

          var duration = 10000 / animateSpeed; //   newColor = 'rgba' + newColor + ',';
          // 类型一:飞升

          this.pulsingDot1 = {
            width: this.width,
            height: this.height,
            data: new Uint8Array(this.width * this.height * 4),
            onAdd: function onAdd() {
              if (_this.canvas) {
                _this.canvas.remove();
              }

              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context1 = _this.canvas.getContext('2d');
            },
            render: function render() {
              if (styleType === 'toTop') {
                var t = performance.now() % duration / duration * that.height;
                var context = that.context1;
                context.clearRect(0, 0, that.width, that.height);
                context.beginPath();
                var gnt1 = context.createLinearGradient(0, that.height, 0, 0);
                gnt1.addColorStop(1, customColor === null || customColor === void 0 ? void 0 : customColor.color);
                gnt1.addColorStop(0.5, customColor === null || customColor === void 0 ? void 0 : customColor.color);
                gnt1.addColorStop(0, customColor === null || customColor === void 0 ? void 0 : customColor.color);
                context.strokeStyle = gnt1;
                context.moveTo(0, that.height);
                context.lineTo(0, that.height - t);

                if (Number(imgSrc) === 1) {
                  context.lineWidth = that.width;
                } else if (Number(imgSrc) === 2) {
                  context.lineWidth = that.width;
                  context.setLineDash([5, 10]);
                }

                context.stroke();
                context.crossOrigin = '';
                context.beginPath();
                this.data = context.getImageData(0, 0, that.width, that.height).data;
                that.map.triggerRepaint();
                return true;
              } else {
                var _t = performance.now() % duration / duration * that.height;

                var _context = that.context1;

                _context.clearRect(0, 0, that.width, that.height);

                _context.beginPath();

                var _gnt = _context.createLinearGradient(0, that.height, 0, 0);

                _gnt.addColorStop(1, customColor === null || customColor === void 0 ? void 0 : customColor.color);

                _gnt.addColorStop(0.5, customColor === null || customColor === void 0 ? void 0 : customColor.color);

                _gnt.addColorStop(0, customColor === null || customColor === void 0 ? void 0 : customColor.color);

                _context.strokeStyle = _gnt;

                _context.moveTo(0, 0);

                _context.lineTo(0, _t);

                if (Number(imgSrc) === 1) {
                  _context.lineWidth = that.width;
                } else if (Number(imgSrc) === 2) {
                  _context.lineWidth = that.width;

                  _context.setLineDash([5, 10]);
                }

                _context.stroke();

                _context.crossOrigin = '';

                _context.beginPath();

                this.data = _context.getImageData(0, 0, that.width, that.height).data;
                that.map.triggerRepaint();
                return true;
              }
            }
          }; // 类型一:渐隐渐显

          this.pulsingDot2 = {
            width: this.width,
            height: this.height,
            data: new Uint8Array(this.width * this.height * 4),
            onAdd: function onAdd() {
              if (_this.canvas) {
                _this.canvas.remove();
              }

              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context1 = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration * that.height;
              var context = that.context1;
              context.clearRect(0, 0, that.width, that.height);
              context.beginPath();
              var gnt1 = context.createLinearGradient(0, 1, 0, 0);
              gnt1.addColorStop(1, customColor === null || customColor === void 0 ? void 0 : customColor.color);
              gnt1.addColorStop(0.5, customColor === null || customColor === void 0 ? void 0 : customColor.color);
              gnt1.addColorStop(0, customColor === null || customColor === void 0 ? void 0 : customColor.color);
              context.strokeStyle = gnt1;
              context.moveTo(1, that.height);
              context.lineTo(1, that.height - t);
              context.lineWidth = that.width;
              context.stroke();
              context.crossOrigin = '';
              context.beginPath();
              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          };
          this.iconStyleArr = [this.pulsingDot1, this.pulsingDot2];

          if ((_this$map3 = this.map) !== null && _this$map3 !== void 0 && _this$map3.hasImage("".concat(this.layername, "Icon"))) {
            this.map.removeImage("".concat(this.layername, "Icon"));
          }

          this.map.addImage("".concat(this.layername, "Icon"), this.iconStyleArr[animateType - 1], {
            pixelRatio: 2
          });
          this.map.addLayer({
            id: this.layername + '_aimatedLine',
            type: 'symbol',
            source: this.layername,
            minzoom: this.option.minZoom,
            maxzoom: this.option.maxZoom,
            layout: (_layout = {
              'icon-allow-overlap': !autoAvoid,
              'icon-image': "".concat(this.layername, "Icon"),
              'icon-keep-upright': true,
              'icon-pitch-alignment': 'viewport'
            }, _defineProperty(_layout, "icon-pitch-alignment", billboard ? 'viewport' : 'map'), _defineProperty(_layout, 'icon-size', 1), _defineProperty(_layout, 'icon-offset', [0, -heightToGround]), _defineProperty(_layout, 'icon-anchor', 'bottom'), _layout),
            paint: {
              'icon-color': 'rgba(255,255,255,1)',
              'icon-halo-color': 'rgba(255,255,255,1)',
              'icon-halo-blur': 0,
              'icon-opacity': opacity,
              'text-color': ['get', 'color']
            }
          });
        }
      } //处理数组函数

    }, {
      key: "fildToArray",
      value: function fildToArray(dataSource, feild, isToFixed) {
        var weightArr = [];

        for (var i in dataSource) {
          var properties = dataSource[i].properties;
          var keys = feild;
          var item = properties[keys];
          var numberitem = Number(item);

          if (isNaN(numberitem) || !isToFixed) {
            item = isNaN(numberitem) ? item : numberitem;

            if (weightArr.indexOf(item) < 0) {
              weightArr.push(item);
            }
          } else {
            if (weightArr.indexOf(numberitem.toFixed(3)) < 0) {
              weightArr.push(numberitem.toFixed(3));
            }
          }
        }

        for (var j = 0; j < weightArr.length - 1; j++) {
          for (var _i = 0; _i < weightArr.length - j; _i++) {
            if (weightArr[_i] > weightArr[_i + 1]) {
              var num = weightArr[_i];
              weightArr[_i] = weightArr[_i + 1];
              weightArr[_i + 1] = num;
            }
          }
        }

        return weightArr;
      } //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata, weightColors) {
        for (var i in geoJsondata) {
          geoJsondata[i].properties.weight = weightColors ? weightColors(geoJsondata[i].properties[this.mapStyle.color.feild]) : 0.5;
        }

        this.updateLayer(geoJsondata);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        var _this$map4;

        if ((_this$map4 = this.map) !== null && _this$map4 !== void 0 && _this$map4.getLayer(this.layername + '_aimatedLine')) {
          this.map.removeLayer(this.layername + '_aimatedLine');
          this.map.removeSource(this.layername);
        }
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        if (this.map.getLayer(this.layername + '_aimatedLine')) {
          if (visibility) {
            this.map.setLayoutProperty(this.layername + '_aimatedLine', 'visibility', 'visible');
          } else {
            this.map.setLayoutProperty(this.layername + '_aimatedLine', 'visibility', 'none');
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];

        if (this.map) {
          this.map.setFilter('heat', filters);
          this.map.setFilter(this.layername + '_aimatedLine', filters);
        }
      }
      /**
       *更新数据源
       */

    }, {
      key: "updateLayer",
      value: function updateLayer(data) {
        var _this$map5;

        if (this !== null && this !== void 0 && (_this$map5 = this.map) !== null && _this$map5 !== void 0 && _this$map5.getLayer(this.layername + '_aimatedLine')) {
          var geojson = {
            type: 'FeatureCollection',
            features: data
          };
          this.map.getSource(this.layername).setData(geojson);
        }
      }
      /**
       *数据、样式更新
       */

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem) {
        var _elem$mapStyle, _elem$option, _elem$option2, _elem$mapStyle2, _elem$mapStyle3;

        this.removeMapLayer(); // 更新修改的属性

        this.mapStyle = elem === null || elem === void 0 ? void 0 : elem.mapStyle;
        this.visibility = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle = elem.mapStyle) === null || _elem$mapStyle === void 0 ? void 0 : _elem$mapStyle.visible;
        this.option = {
          minZoom: elem === null || elem === void 0 ? void 0 : (_elem$option = elem.option) === null || _elem$option === void 0 ? void 0 : _elem$option.minZoom,
          maxZoom: (elem === null || elem === void 0 ? void 0 : (_elem$option2 = elem.option) === null || _elem$option2 === void 0 ? void 0 : _elem$option2.maxZoom) + 1
        };
        this.width = parseInt(elem === null || elem === void 0 ? void 0 : (_elem$mapStyle2 = elem.mapStyle) === null || _elem$mapStyle2 === void 0 ? void 0 : _elem$mapStyle2.radius) || 2;
        this.iconStyleArr = [];
        this.height = parseInt((elem === null || elem === void 0 ? void 0 : (_elem$mapStyle3 = elem.mapStyle) === null || _elem$mapStyle3 === void 0 ? void 0 : _elem$mapStyle3.height) * 10);
        this.initLayer();
        this.setLayerVisible(elem === null || elem === void 0 ? void 0 : elem.visible);
        this.addMapLayer(elem === null || elem === void 0 ? void 0 : elem.data);
      }
    }]);

    return FlyingLineLayer;
  }();

  /* loaded by smart-asset */
  var icon_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA2LTEwVDE4OjEyOjI0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNi0xMlQyMjo0MDo0OCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNi0xMlQyMjo0MDo0OCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Y2UwYjM3ZC1iODBjLTQ0OWYtYmEzMi0zMWUxYjVhNWFhMzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyNTY4MmVmMy0zODViLWRmNGMtOWQxOS0yYTU1YTYxMmRmMTUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMDk0Mzc0ZS1iMmQyLTRmNzYtODBiNy0zMWY4NzU2MDY4MmUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwOTQzNzRlLWIyZDItNGY3Ni04MGI3LTMxZjg3NTYwNjgyZSIgc3RFdnQ6d2hlbj0iMjAyMC0wNi0xMFQxODoxMjoyNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMmU5ZjRiZC0xZDU5LTRmYjItYmE4ZS1hMzA4MWU1ZDI0ZDYiIHN0RXZ0OndoZW49IjIwMjAtMDYtMTJUMTg6NTA6NTArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2NlMGIzN2QtYjgwYy00NDlmLWJhMzItMzFlMWI1YTVhYTM5IiBzdEV2dDp3aGVuPSIyMDIwLTA2LTEyVDIyOjQwOjQ4KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7uGMIAAAGGNJREFUeJztnduPJNV9x7/V1fee+33YXcwuBmNAxkQOD0lkYjtRHMnC8YOjPMSPkfgHkHeJuVg2ImBhEccBLzKWkRMhB8V+WEXIiWUS2SLGEsTrQIady87Mzs5t59Yz0zPTPX2pPNSc6V/9+pzTlxl2l+rfR6qp7qrurqqe+vTvXH51yvE8D4Ig6Inc6B0QhJsZEUQQLIgggmBBBBEEC9EbvQPHxp/++Y3eg3o4TS5XmFpRbu7Wlf94/UbvwbEQHkFuPviJbxPBtM6r8z7+WuGYEUGOH4fNdeua/SyOTRwR5RgRQY4PnRiNFqsaPdnVc/56nTAiyjEgghwPDuxi6NbZIg3FI3MHwROfC8NFEUmOiAhyvJjEcKAXo5n6BRWFzuljR7NOOAIiyNFxoI8gXART5NCtoxLwyMHX0fW6IpjIcgREkKNhk4NPpnXQzG0y6KSwRRNAJGkZEeR4ceB3vpokqTdRdFI0MlUgQhwbIkjr6KJAhMxR53krglTIHOy5czCPkOUSRY6ICNI6vFjFT/4IgmJEEBSDr9cJQkVQJ79HntPtUzmoJGq9CNICIkhrmCraXA4uRgSAy16jiyK6yKFO+DJ5PxeFyqGk4HOhCUSQ1tBVyrkcLoKC8OdcFp0gVAoaRSqoisKLZzTSUDnU5wpNIII0jy5q8KKUi6oQLlvmQi+NSRAlA32s5KCiUMpkn6SodQREkOYxNdvqRNBNUdSKYxOkzOYlVKVScpQ1+0kjzGEUiV2cOxSkeN+p1r+FNkEEaQ5T0YpHDjXFEBSDzqks/lQuu/A8B9FoCdWIoaRQkUOJQUXRoU1RKd53yqGSCHZEkMYxdfoBtYJEG5yCRa53f/dnAID77v8ZaotUpYPJRVWOEtsfBY1ANVGkeN8piCSNIYK0Bo8evHKuBIiReYw8r5WkUEhiffUrAIBC4S0kEnnUyqGmIoLFMl40o829arnUP1pALrltjHqdgrrIoYSIA0iQKQkgTaYMgDTG3v0SyuU+lMt9GHv3S4F11SnJPisOm3S1fTOHx1K87xSv2AsaJII0D5VFV/fgcvApBn5i7+S6sL72hcMtrK99ATu5/0amYwvBqEHrMLxiD+h73GnulkSRJpEIUp9GoocuiighVNRQU+pgUhGiA5fGHkKlkjrcYqWSwqWxLwLoQDWKqPfRz0qQ7eiihzWKICiXoEEiSHOYUkp0xSpd0YoWjfwospkdxMb6H9VsaWP9D7GZ/Q26e1bgRw9ah1EdjBRT7pbaR4/MJYo0iEQQO6aWK173oJVzXvdQUUPNVeTwo8fEpc/D86IAcDGa3LkYTe4AADwviolLn0c1itBIQj+T1kWoQHz/bMciGJAIYseWkKhr2tVFD1q0osWjONZWTyC7ca/awN9mhq96AP5tc/ZjAIDsxr1YW/0t+gfmARQQ7DcxpaXQpmH1WL1HF0WkXmJBIoiZeomIvEOQNunyugdtsfIjB9CByfE/Vtv5z1hm82fxjty/xztyb8Qym4fbnhx/kLyHt2zxughvVtalt+hyvySKGBBBzNiKVqboQeWII1gpT6EqSAZLi3dge+tWAKgA3lc7hufVhs92DM9X1K/69tatWFq8I/De4Gcm2TZ5UYsnSdo6PAWGCKJHl1JCf3m5GKaWK1oHUb/8HfC8DkxPPqA28NNE1/o70dSeev5ONLX300TX+uEeXJ58AJ7nR51qFEmxbehatLgoPHrw4xQYIoieehVzUxFLVznnnYIZXJ27Ezs7fQCwD6fyaGZ4ge/Ao5nhhYLj+Nd67O704ercnQhW1tXEK+u2KFKvwi4wRJBabAmJup5zXdFKJ4l/clcqnZi9fFgxfyXZs3LZje/znbjsxvdfSfZeO1wwc/leVCqd0Ldo0e1SSWw967qORpGEIYIEqZeQyHvMTWklVIxgx+Ds9J3I59MAsOVEyk9khhZNO/NkenBpy4n4qeyFfBqz0yqK8M+1NflySZQo/Pik2VeDCGKmXqXc1u9Bp2r0KJW6cGXmjNrAd1P9iyuRqO5aDgDASiRa/odUf1WgKzNnUCp1IRhF+PZMlfV6lXZBgwhSxZZSwq8CpPUOU685/XX36wuXJ29HsRgDgKVIdP+Z9MBKvZ16Nj2wshSJ+kWwYjGGy5MfRbD+wSNIbW99sMnXdLmv7jtoe0QQPbaWK57OXq9z0D+ZC/kezM+dUBt4Nj2wsOtE6IALWnadSOWZ9EC1Ej8/dwsK+R7UVtL1qSz6uki9Fi3hABHEp5GERF3FXCcHTQWpCjI1eRrlcgQAptz43oupvmozbh2+l+pbn3LjfjNwuRzB1ORpBAWh2zRJwlu1JJGxAUSQWkwJibrKua54pSSpyrGT68XifL/awBOZofkSnIbTO0pwvCcyQ4cdiVic78dOrhe1kvD94P0itmtFqCTCASJI4wmJqt5B5eARhP6aV0/cyfGPwPMcAHgnmsr9ONGtUkka5seJ7s23o6kcAMDzHEyOfwRBEWnU4hGEp6Hoooi0aGkQQZpLSNR1CvKe8+AJm93ox8q1LsDPHTnbMXy11R091+EnMwIAVq51IbvRj1ohdT3rNjl0OVq676YtaXdBGklIpM2kvGilkyOYoDg5flJt7OfxjuwbscxOqzv7Riyz8/N4R/Zwgf/ZPHHRJImuqEVT4yWRUYMIUj8hkV4QRSu9pguiqk2vK9cGkd1IA0AZjncuU01IbJWzmeH5sqq/ZDfSWLk2iGBzbwK19RG+3+p4+HFKCgqjna8HqZdSYhrCx9akmwo8nxofVRt4LdG1djGazPOduKsC98Gil+bLx6MovOE6NSkov4sm868lulb/qrA5CACYHB/F4NAagDzZj33414/sH0zFg0ld3x5F8JoROqwpUDsKCn3cVrS7ILaUElPOFa170GzaYN/H/NwIcrkEAOQdp/I1TUIiADxY9NJPbpXv5MtfT0YW3+h0tO/5WmZ48S/2t/qTnhfBTi6B+bkRnDhVgC8Fn5LwJYmjeumuGohOjbNVPpgbx9JCmwrSrkWsRqIHjxy6opWSJNhzXqmkMT01pDbwcrJ3edaNFY9r52fdWPHlZO/y4YLpqSFUKrS5l0Yyvr+28bkkkZHRjoI00qzLK+m6y2l5DlRVlCszo8jnYwCQddzS1zND1ZP5mPh6Zmg567glAEA+H8PszChqL+s1jYDCe9fp8UqzL6EdBaE0kpCou9aD1z+qEaRY7MDs9IDawN+n+xc3HNeYkNgqG45bfj5NExmnB1AsdqI2/cQ02BzN0ZJERgPtJki9lBJdQqKuWdeU1p7EzNQtKBZdAJiPxArPpfrrJiS2yrdT/SvzkVgBAFAsupiZGtXuU3CfebOvLpFRUlAOaDdBKKaERN7vYbrWvHbK5zsxN9erNvB0emBhz4lYK7fnE862bvlbcf1yyp4T8Z6miYxzc73I57uM+2e+dp33i0gi4wHtJEijCYmq30PXamUfKXFq4gQqfkLiJTex+/1Ub8MJia3y/VTv+vtuYhcAUClHMDVxAo2NxKhLZOTfQ9tHkXYShFKvaGWqmPMOwWoWbW67B0sL3WoDj2eG5svX4Twqw8HjNJFxaaELue2ewL7V9q7bKuyNpKC0De0iiAN9kYqnldB6h6nfQzdSYhqT46MqIfHXsfT2TxJdW43u3FLE2eXL/itWu8zETxNdW7+Opf0imZ/IeAtqrxfhTb+6CKKrj+i+s7aJIu0kCH1sa72yJSTyKwb9k25jvRerK52A35v2aKa5hMQ9p/YWau9HtLdVM3IuQxIZV1c6sLHei9p+EdsVh/USGduyX6QdBNGVn3UJifU6BU1DiKYwWU0peT3eufHLWLrhX//j4lex9O7r8c5qncePIrV9NPqrD22dhzpJ2iaRsV0EaSQhUYlCmz9NKSXVotXy0hA2s2nAv7DpbEfzCYlrEQRyrrIOanKwGuFsx/DC4YVYm9kUlpeGUFvUosfCo4g6dh5B2jaRMeyCHEdCok4O/2TzvBSmJobVBl5Ndq+MuYlCszu5wpISNyJO058BAGNuovBqsrva7zI1MQzP45V1Lkkjd6pq2xSUdhDkKAmJpl5z/4SbnxvB7k4CAHadSPkxyxhX14vHMkOLu2osrd2dBK7OjUCfgmLrXTeNyAi0WRQJsyC26GGre5gq5cE+j3I5g+nLg2oDLyV7l+cjsVIrO5pzEHifrtLeKPORWOk8TWScmRpCuWy6S5Wp0m6ri7RVFAmrIPUSErkovGmXD37Am3aTmJ0eRcFPSFx33OJTmcHqMKFN8l7M2aPPZ6PB583yVGZwed1x/ezhQiGK2WmagkLn/Dh1Tb6N1kVCKUk7XA/SSEIijx66YXyqEaRY7MSVmcNRSp5LDyxmj5CQeD7hbJ8fjL7d6vs5m45beS49sPjUzvKtAIArM/04ees1xOMF+BdW0etE6BRH9Yah6hqRKIIXVdFbvDkI+XUiYYwgrUYPPkqJOffq8uQoSiUXAK5EYoXn0/2r1+XImuD5dP/qrHuQyFgquZieVFHElJvFR0GRKIJwCkLhvcBAbfTQDUStiyT+tLfbgfm5PrWBb2YG5/ebGONKx2fKXvxCtnzbm+vlOy9ky7d9puzFj/J5ALAPx/tmerDa5Dx/tQ97ux0w1z109Q/ddwXU9qyHlnYRBNCnTujksCUpJjA1cRKVigMA70UTOz9M9m4cZQe/XPTSP9go3/2potd/uux1fqro9f9go3z3lzXXqTfLK8nejfeiCX8UlUrFwdTESZijBm/F4hV0HoUBEeRDia6FxZR3xSceRYInztZWN5aXetQHP5YZnj9qAfzhXGU06R3+MgMAkh7ch3OVUdN7GsWDv4+HC5aXerC11Q39D4FpDF9d+okp9SR0soRNEJMYtjqISm+ncuhSTmKYvHQKnq/Er2LprQvxzrrXbNTj7pLX08zyZrkQ79z+ZSy9CQDwPGDy0inU/gDojp2mv9vqIKFu8g2bIJxG87B4VKkVZnWlD+tr3YDflHM2M9LyCImUvKHPw7S8Fc5lRuYPh5FfX+vG6kof9ELwaNH2+VhhFoT+A03p7bpOQy6K/3hq/Iz64AuJzrW3Yqkj9VUo3o062WaWt8JbsdTehUTn2uEC/1h0FXD+Pei+K13DR2glCaMgpnCvKybwZTyS+M8Xro5ie7sT8FuHzmVGtONVtcIjXe4cvx5kKeLsPtLlzh3XNgDgXGZk4bC1bXu7E/NXb0Ftuo2uOGX6rhShLV4B4ROkXh2EF7Noa5a+flKpRDA9dTiw2z8ne65NaG662SrvR1C+v98de77TnXo9GVl8vtOdur/fHWv2epB6TLjx/X9K9lR7+6en7kCloosQfBmPwKZJESpJwtqTbmpdsVXYdb+QEcxOn8HeXgYAcv5NN5c+iB1+JulkkTy+YpWOxzNDS39Z2Bzo8Cou8nsZzE6fwenbf4vGvg9T5yDI89D1qoctglB4+bjer1/t8lIxiiszd6sPfCHVt7QYibaUkHgzsByJll5I9VUFvzJzN0pF9SNZ7zsxSULnoSNMgtj+SbriFV9ey+T4PSgWUwCwEokWn063npB4s/B0evDatUjUT2QsFlOYGL/H8NL6PyBmQiNMmAShmP6punU6POztJbGw8Am14FvpgYVcAzfdvNnJOZHKt+hYWosLn8DeXhLm4pHtuwt9c29YBQH0/7B6/8xqpur42AOolOMAMO3G899N9a0Z3vOh4x9TfWvTbty/FUOlHMf42AMIZunqsH13oZQDCLcgFNs/kJ8YFWxmO7G6cr96wTfSg/PFIyYk3kwU4XjfoImMqyv3YzPbCb8PFKgvCxBiKShhF6R+pKhOFagbyoy//zl4ngsAF6PJnR8le7LXYV+vKz9K9mQvRpM5AIDnubg09jnQ70D/HekItShha+at98+qjRZBOcpYXhzBZvaT6g0vJ3tX7ioXEh/Avt5wXk72rn4nt9gBANja/CSWFkcwMnoJQUmaiSpAyJp7wyYIx2Nz9Vj949WkTogSJiceAhHtO7nF267Lnt54HExNPISR0acR/E74lYQK3XcbOsJexKIoKXRy+Lcjuzz5Mezt3nvjdvEGs7d7Ly5P3oXqLdp0kqh5WxC2CELvqUeX6YoKSg51Y8silhY+Czd6DQ4cwIn4czU5DhzVWeY4B+tw+Fxt17lhzZ7ewV/yy+55weUHzz1UyDrvYF0FHjwsLXwWZz76JqrfC6+TQPO8dj9CQtgEofAKuItg1FA3sFQnwj7+4NN/B/3oH3QUEN3tzExp4zSFo17nWivHRn/Zq5GQSu9PalAGOmhDHsCeYb6PoCBUFPVDwyvyoSSsgtjqHGVUk/GUJPvwT16aoEffr96nTjY6RA4fbE1dX6K2AQR77um81eOiv+RA8OSlJ3WRTfTW0FQUNdHbRu8jWMziRS5TnSRUhFUQoPYfxusgJdRm9drkKKEaNQqojvyhixw8yQ/4YCII3cfaOlVwoic+jSh8Uq8rIXhvdVsdJJRyAOEWBKgtZkXgnzxKCCWK6TprHj3UCWa7Ek9XtAL73KNGEPrYVNSqV+TSyUIjCK+DqM+jkoS6eAWEVxBdJ5f6xzqo/sOVECUE5dBV5GPwTxxenLLJAejFO+5jBOpLYip2cVG4HLz+YepEDKUoYRJE14KloGKoyEEl4Z+ja+VSxRR6oxnTwAY8PRyWfWsVGkFsTdi0XqIiIY2IfCqxx7zewTsQbfv2oSdMgiiUKPyXjUcRdV2HTRAqSRH+97UP/SWqKnro5AhuZ2vzBPb2Rpo6qlRqCV3d9N4jpoYI9Zie2LZiF69r0Of09Y1Ej9CIoQibIDyKeGSZEoNeylpmrwOCv8Dq15e3UNFruWmRqnolok2QcjmHleW/gddgR62DCk6c+ioAOsyQSRB+DFQWHlHonBarVJTRtWLp+pQooZIkbIJQeCQBgkUsXZHHQ3CwZjWAs2oOthWnaIXc3qzb2zeGpcVfoJD/k4aOJJH8BXr7xgz7S+f0xOXFIl7sstVT+HpdESvUkUMRZkEA8wmkW+/BP7HpCcWjhek67Uau2Q4yPPISpqc+Db+52MY+hkdeApCzvEZXlOQnM4+MPKroIoYuJ0tXzAotYRWERg+QuSpq0dd5qPayuwhW0HWje/BKuKmvw1457+ufwdUr/4J8/q+tR5JMvoa+/pk6x8rnvAlYV4mnx6nrR6FFM/o+uo3QR5GwCUJF0C2nrVn0dSp6qNeYik86KeoJYubkrS9i/P0vwvM6tesdJ4eTt74AoJG75toEoY9tsvA6i+49tsgRuogSNkEoPIpwKmQ9LVqZik+0XmGqhDfXGdjXv4dY7HvI5x/Rrk8mX0Rff6PDDOkq7fw57QXXnfi8CGVrtQp99ADCKQiNIryi7hgmjz1WxSv+OliW0XnjnL79PP7vf78Czws2+zrOMk7ffh5+jlQrmOolpmW0BayeFFw+vr3QEEZBFFQOWpSi63QnOy2GmSSwidGcJH39+4jGnkWh8O3A8kT8WfT1bzb1WT6mk1fNTcvqCaSLFhJBPqRwOXhU4a9T60x1CNty3ePm+Pg9r+B/3n4Y8A6GOHXG8fF7fohqZ2Yr6E5k+rheJNCJVO/zQkdYBQFq/2EmUXjFvtHocHypI909RbiRJ1AsvQoAiLlPorvnWEaPJzR6gttO+LYRQxFmQRSN/AN1wtB1utcfL7/3+z/BW2/+5uDxv2r24ziod9LXW2eSLLS0gyAK3T+X101Mvetg64//5Mh0AI5z7uDxsY7srqHe/tvEaCscz2vbYxeEurTTqCaC0DQiiCBYEEEEwYIIIggWRBBBsCCCCIIFEUQQLIgggmBBBBEECyKIIFgQQQTBgggiCBZEEEGwIIIIggURRBAsiCCCYEEEEQQLIoggWBBBBMGCCCIIFkQQQbAgggiCBRFEECyIIIJgQQQRBAsiiCBYEEEEwYIIIggWRBBBsCCCCIIFEUQQLIgggmBBBBEECyKIIFgQQQTBgggiCBZEEEGwIIIIggURRBAsiCCCYEEEEQQLIoggWBBBBMGCCCIIFkQQQbAgggiCBRFEECyIIIJgQQQRBAsiiCBYEEEEwYIIIggWRBBBsCCCCIIFEUQQLIgggmBBBBEECyKIIFgQQQTBgggiCBZEEEGwIIIIggURRBAsiCCCYEEEEQQLIoggWBBBBMGCCCIIFkQQQbAgggiCBRFEECyIIIJgQQQRBAsiiCBYEEEEwYIIIggWRBBBsCCCCIIFEUQQLIgggmBBBBEECyKIIFgQQQTBgggiCBZEEEGwIIIIggURRBAsiCCCYEEEEQQLIoggWBBBBMGCCCIIFkQQQbAgggiCBRFEECyIIIJgQQQRBAsiiCBY+H/GslkCy36d9AAAAABJRU5ErkJggg==";

  /* loaded by smart-asset */
  var icon_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAEyFJREFUeAHtXQuQHEd57p7du9NZOp0s2ehuZUL5AcIWwk4F6XQv+YxtYRWWCeUHhgRwFRSpygtsJSoSYpcCFQIpwBicSoUUVXGCy3JsU2A7CAmwz7qnTtggS3ZsgoNkdLtC0ulh+XTa253pfP/crbTTPbvTvTv7uPNM1d3O//fff//9f9M9/R7GoivyQOSByAORByIPRB6IPBB5IPJA5IHIA5EHIg9EHog8EHkg8kDkgcgDkQciD1TWA7yy6iPthTxwaE3n9Yzxa2INbFf78PCeQnLl8iOAy/VgCfHHO7rvE47z9xQVADiM88+tGBv+dgmqAqNUBOCJjr5LpsT0vzIm1iELo8288U+W7e4/FGhNCAJCCP677u5V2Sz/AyaclVC5Eg68nDPRivsWIVgLJcM5O42f04LxU0yI13D/KuPWq/G4eH750NBLnHNBcmFf4vbbY8kDh96A8gtyuglkbvE7EruHn8jxwvoNHeCJjo2Lz4qTo3DklTkj4aydeEI/kKPD/j1+ww2tU6cnb4WbNqBIXAeQ31ZOGrD3CBPsWWaJnc0tC59Y+tOfnipHX35csXWrlfzvHXiwzgPshnN+lsfE9StGRobz5cu9DxVg9+k8eOhpgHtTvmFIZHLFnpFF+bxy76mkHu7suclxnLtQCm9BKVxQrk7f+OR4Jp60LOvf20YGfxxGyU52dH8Rdt8rp4daZUKwWNclY4O/ksNKpa1SI/rFGz9w6GsyuCQnOB/zky+FRyVgvKPrzvG1XXtt2/kR0rujYuC6xosFlAalRWlS2mRDKbbn4rRvvHErHpQf5OjcL9JZxpnzfdF5e3OOV+5vaCU4tbbnE7awH5INwlP5Bo+xjsTIyCtymCmdXNv5ARTcBwQT9G6t2cUZfxWv6M8mxkZ2lGoEgThujz+DhxPtFO9lcf4vibHhP/VyS6NCATjZ1fUOkRUv4glcnG8GnlLbsvim9tGh7fl80/vZRtv9cMZtpnErKs/542hA3l1qAzLZ13eRcyY9gvf9FbKdFmcfxgOklHJZLoguq6oh5fQudDLiIRlcCsOT/tflgpvs6Lp1yknvrztwZzJ/G9lGNhJpeiX6+4/FePxDcNSUHNdh7LvHOt+/Quab0mUDjD7d3Uj0WiVhzv4jMTZ0v8LXZIiNG5vG13Q/6DjicUShLk69Xq1kI9lKNpsa2b574GWLWeRD7yXY0rPZsw94meZUWVX04bXrL82y7MsoXZ4WLKrmg40NfPXFQ0PU1zS+TvT1LTlzZvpJ1A69xpFrGAH5HrjggsZbLuzvP2lqxvjazu+jFvywHC/O+fVtY8PPyHxduqwSbLPMVxRwUWtbsdgnSwX3aG9v++RketdcA5ccTjaT7ZQHXQBycotiiz+Nl1oqR+d+bca+Jfr64jna9LdkgMc7O7vwxN0hJ4in+P72kYHnZL4OTY6ZTmeHILtaR75OZVZTHkxBbh3ZcdxCm0XOEx6aVamp9J/JfF26JICRKBc2+4aaCE9aSxbdp/KDOVQtp89md+ChuTRYur4lKA+UF8qTiaWJPUMP451JD7jngr57k5s2nRva9AQGECUBnOro+hCa9h2ybm6xv2vbuXNS5gfR1Dihdy7k5nLJlbO52m1HmDa84uwvADIa0ecvALyMHZ5AFW5+lQQwhgY3y0mhav5lYuOGh2S+Dp089sbX5+I7NyhvlCfKW5BcfjjGon+Bd7HiR8HZPaW8i40BTnX2roXhPflGufecb+Fbt3qePEXGh0F9SMGckt8xPirrikV5M+4nN/KvqqVYvCM1NX2naeaMAXay9j1yIlR6V+we+onMD6JphAp9yO8Gyc31cMoj5VU3HyuGhjB1yX4oywuHKb6XZWTaCOCj3d0JJKyM2mC82afBJSel0lPO9DfBredBDNXo0jits3nVjh2zYl+VhTEG//upNd2rZH4x2gjgTNa5HdWz1Cfjyfar37OtWCJ+YTRxgJ6j8rD4yc4Pnrh1Js96uWkbHdyNVQmjsrTNxcdkXjHaCGD0jj4iK0Pp/Tf+ne9kZH4xmqbbaFaomMx8DKM8m0w1Ysbqe7IfMDdtBDDe5XpXsqfn90TaPoCVCJ44VpxdaToV6M6pOuIRvZRLl7KWLWWL7vwIa1q7hsUTCcbiMWYnUyy9dy978z8fZnbqcOnKS4yJpTkfXbF7WKvGS/X2Xuyk7aRca/I469Zd+aFdgkXGvkMGF1C/aAoujOXCEX9bon+0o8Uvu4wtf2wba/nkx1njle9mVutiZi1cyBreeQVbdNutbPmjj7AG8Kt9Ud7JBzrptg8MHIWs0ngVWXazTnyS0QYYyzJulJViFuRRmRdE0zIbyFR8QGPJls3MWlR4lRBf0MRaN38uyNxKhK+e9YGWbpT4x2RBTMOqs3ey0CytBTCttYJ8p6zDigsafTK6aA2VUYQShXVKZ8O73lWi9vKimfjA4o3PyqmhNb1Gd+hSC+DU66lrUFW0eBLi7DgtL/XwAgha/egukAuQCyNYnH4zUI14M1gmUEkJAuQD8oVO1PbR/gMYZzgoyTaIoye6JJ4vqQUwujPKvCwXfBAJ47Wsf7lLW6W5Y/3YZpL20aOBEeyJiUCZigjAB64vNJWjxD4ni3Ih1ss8P1oLYDQMlIkFrBke8FNYlCcY+r7VuewjwQA7E8erY4xfKga+4MzaJatANa814KEFMFrL75QTsKz4HplXjJ5pOfK+YjJhhtnHggG2jx0LM0lDXbxPtzWNEvyyqpxrNSC0AIYhV8gJxC3nf2VeMZq2k0BPWTsOiumXw+q9BJMvyCey3f50868UPheX6zwggQBTZxvKPQ0CdOLOYElOUkm0CMPdK1QkPOygun4Hz2ZW1yeXjP1sAsOWJzw+EqwZ2Lzdw/MhAgG207ZSetFN/7WPruKsmY1gxWVCDHWOBle/9rEaNbJy+TTyiVBKMc+yy3KqCv0GAoyxZqVaRdtZbrYX0p/PX5lPVPpepwQ7tWpFn8+8tk8wuKGMqzrC8dSs59WevwsG2OHqcBDnb5xXoXmHLZyakqGI2ToluNYAG/gEy3aUJch4VXrHJnw8FwgwWtAKwGjVGY8QzO7P9TGhMiwxOcmcKWXDgCexmnaTYImJTyyu+twRPoXPk0ONsWhHCAVgbI4yBhjpBj5tkm1lk8Va0s6ZM0wEPABlGxCsQNsnQliKzzl3FGzkJINLMGN+WxmLFw05FdCoYrQz4xO9JJZTpJ9b69JLGTLxCbfEWdkJwuELZJ5MBwJcqmI5oVrQxUpwbQc5zL2BmnShHAs1aeAS5WCAhaW83LGf0Lg0ojWu6JENDpsu1pKuhxJs4hOM+6vVsVDfy7IPAwHGAne17mc+icmaVboGAB9TrZjl1GyiwWuRvk8c9RUnrOBCEwiwiPkoKeF9iimyU968VZ4qVoLrAWAjn/j1ZsIowRa3FGAwR2i8ew4titcqD6k3BafIlKFT61EsMtXAJ/C5MiyJozECp8MCS3CjE/MBRmjNZHjdjXOoqnxlDhQecMsefL3K1vgmp+UTmlTA/K86oxePB074BAK8dPTZcZpckMxrPdzVpQxhSjJeEoeMeRmVp8Tp0yz98+eVhLJYWTn9Stlnwih6jRmaPjm+7roVKMHS7kJ+khblBaUZCLC7aoNzZaDbsS2jUkwnyAUZU4nwE1/6B5b59flKiLpOx79wL2MZo6XclTCN6fokI6b9fB1YesloaZdCoXy4MxnXeEKxMRn0oIdXhKD1WzgA7Eg154TJHFr7fOTjd7HGq65krLGRZfa/xEQ6XcTS6gSh4Bxx17ShrxR0OVysRm/GcyGaUug8ArNEYAl25bilLK7DePS1fgoL8dyagI4HrMVl22x63342/fwLdQGu6wL4wvWJhj/wCu7zEXvRh6ewtADGMX7PyTExzNYn8wJpnP0YKPNWEdD0BTWwUJiUBXY4B6Vfx1VaALctWTSKFQXSWKhoH+/u1p7PJGPoYE9Vj46Z80wGvnR9oZGtIx2970X1vDRfFCX/dFtT7IV8XqF7LYD59u300hqRlYhp8X6ZV4ymU1vpYM9iMhUNwzu4Hi7yge4JthnmXC/bjFI9yPv7szLfj9YCmCLiqelXFQhlt6Eq4+XQqa1eTuUp66KL2LIHH2CJXc+wtu1Ps+YNyi6cyhuRl4KRDwRTdvX7Y5GXQN6tAcDW03nx3Fu0/9aPr1+vjLDIcvk0HckLel8+r9L3F269ly3ADkNuWSyGHYdExy+/rNLJFtK/b9YHhcLP8Y90rMfghlhzjjF7g3OltWtBbYATowMvoGn+P/mJoeXO+VTmj/J5QffUcsSGqi8HyYUVzrGjsGnN+zzqeDzOmtf3enjVIijv5AOd9DIiq/gWcZ832dGpDTAZhBX235MNwyDaH8u8IBqn8fwXHckbJBdKuINzYdDkly+BrlO1L8oz5V0nXbf1LJjiW+h4WCd+TsYIYBYXdFCXx1swZBVOkdmQU6jzS6fx4CH+rI5suTK0LOfsrgGPGjE9zaae7ffwqkFQnnVPInLPImPCs1ARpdduaLK2mdhqBHBiePgg0N0lJ4BTZP5G5gXRM4dp8yeC5MIIP/GlL7MzP97JHIxN07DlxOYtzP7toTBU6+vA2dImB4ij3vm8qlz85OKBgZTKL8wJHieT4o6v69mE6k15ycctq7Nt99CoJF6UdA/6prOgpZ0TRSPNzcBTzVbTe3QPDk91dF9nO84zPlm94ZI9Iz/z4RdkGZVg0pIYGUBrmhMonssW4gsehgZBGcaJ8J/SEJ3TIpRHXXApo1h/5eNLvscUXNJlDDC1AHEq6lcocv6Fd/HNOBzcuINJ3wpC4+2f83XNp3vKm8n3kMbXdd8CXyqDG1ZM9bmOn4wBJqXtCxseRZfpN0oCjvg2jnswHi5KXLR4Mx4cb0tIUT73GJQnypuu5TiLcgFzHDocznNR67v9pht/4GFqEiUBPDtMplQjGBRfmTw4frdm2ufEaCiUTkoHo6oDIOcMqMzNPsrT7DCvVgrJqcwW9OgulYVRaX5et/WtxJUZJjQ+sNgP+Wvz46DVNhlvir13+eDg/+Xzde5zB4L7ZVInfr3IUO3W2BTvNmnx0sSNyDi/QCfUs9EAtcAOfDXuplLzVlIJziUWb+B/DgM8g97oRi3MpJ1t4jOfacjJ6f6SQ8gxkJ/LJXmfKbjuxzwyYpsMLvwwLZj1l7r+85MrC+C24eH9aBA8qCoWa1J79/+jyg/mEMgLFzatn4vvZLKZbDcpueSR5PFT/wQ/elfMgA9995f7mbuyACbjmhqt+2DKa3Sff+HglntS67o35vN07+mrJYllrTfOpda121qGzaZfXHHHFRyhlFI0rF7hy5d9UddnheSMBzr8FCXXdr8Pm5GHECa1oPnJeAPrpZLuF0+HR4dpz54pHbjZWUdfBWROUT/XpCuUs+F3mMzPiuwA2hyLc7yZX55u4FbH8rHBvV6+OVV2CaYk8QGsn2OBvN/Q2pJsVmw3OQxbzgI5jkaBUEtUZVhTTr84zV3bSgGXplkxW0Qf15TAdavmvwoDXLI9lBJMivAO4RjoeAo3HyQ6/8K75CV0GXpMq698HXQ/Xz5OebKn58LJaXsQ4F4l5xG++iFazX8o80ulQynBlDgMEy2xlk/Ic8YUBvBX4QskRrMgFE++aLA+8cENV9GRvAirRUt7H6VNNphMHMj5mJx2HikALhWEu2T5cujQSnDOCDpX2kk7I4A1kePlfhus+NXLdw+8mKPL+aUaYy5+IJreuxknq75bORtv5k3rTMasdfynufBdR9WMTGJw8HVkYiMysQucijWMqMaA/u30d+4T7+7xgO4JcmbbamZMP/cfuo/gAe3HC2xHc8sF5z/xjuqp7AsPpo+OU/FYw8ZlI/2hz2H6JeaTvjmLprxwnuJTNPBBseG0p/Fu2WSuySwGlWw6Qc49ZGzmHKqVSPzy2QNPWlA1tszY426LPe1u4ZzZ5YcvnViv0nYS2nEw+wCZJa4pjS+JPwU7b3btwMgf1jjf3D462K8Z3UisYgCTFfR1UodnbsEirMOJtyce5489Vv11MkbuqI4wnb+d/G3yNhx932aJhifbxnb9pjopR6lEHog8EHkg8kDkgcgD1fJARRtZ1cpEUDo0VHpWTGPGhvWRLHo7/Qt445aw+5xBdtQifN4D7K7cFOm98g499HGPY2Dh6vkOcmhDlbV4OnXSpJKrgEsRsSXTDdNRModl5j3AuWrZD6NiYX7yc5E37wFGUW0vDEyxsMKx5lLIWwDguQRH+LZGAIfv07rSGAFcV3CEb0wEcPg+rSuNEcB1BUf4xkQAh+/TutIYAVxXcIRvTARw+D6tK40RwHUFR/jGRACH79O60hgBXFdwhG9MBHD4Pq0rjRHAdQVH+MZEAIfv07rSGAFcV3CEb8xbAGBe5GS4YmHhO7sWGuc9wLTArpBji4UVijPX+PMeYFo9SQvsFGDAc8OUgPnFmPcA06pJWj2JzWSPYMEsqmueovu3worK+fWoRrmJPBB5IPJA5IHIA5EHIg9EHog8EHkg8kAoHvh/DPHGKRfiAsIAAAAASUVORK5CYII=";

  var AimatedImageLayer = /*#__PURE__*/function () {
    function AimatedImageLayer(map, config) {
      var _config$option, _config$option2, _this$mapStyle;

      _classCallCheck(this, AimatedImageLayer);

      this.map = map;
      this.id = config === null || config === void 0 ? void 0 : config.id;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.mapStyle = config === null || config === void 0 ? void 0 : config.mapStyle;
      this.visibility = config === null || config === void 0 ? void 0 : config.visible;
      this.mapType = 'WarnImageLayer';
      this.option = {
        minZoom: config === null || config === void 0 ? void 0 : (_config$option = config.option) === null || _config$option === void 0 ? void 0 : _config$option.minZoom,
        maxZoom: (config === null || config === void 0 ? void 0 : (_config$option2 = config.option) === null || _config$option2 === void 0 ? void 0 : _config$option2.maxZoom) + 1
      };
      this.size = parseInt(((_this$mapStyle = this.mapStyle) === null || _this$mapStyle === void 0 ? void 0 : _this$mapStyle.size) * 100);
      this.width = this.size;
      this.height = this.size;
      this.iconStyleArr = [];
      this.initLayer();
      this.setLayerVisible(config === null || config === void 0 ? void 0 : config.visible);
    } //初始化图层


    _createClass(AimatedImageLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map,
            _this$map2,
            _this = this;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getSource(this.layername))) {
          this.map.addSource(this.layername, {
            type: 'geojson',
            data: {
              type: 'Feature',
              features: []
            }
          });
        }

        if (!((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer(this.layername + '_aimatedImage'))) {
          var _this$map3;

          var that = this;
          var _this$mapStyle2 = this.mapStyle,
              billboard = _this$mapStyle2.billboard,
              autoAvoid = _this$mapStyle2.autoAvoid,
              animateSpeed = _this$mapStyle2.animateSpeed,
              animateType = _this$mapStyle2.animateType,
              heightToGround = _this$mapStyle2.heightToGround,
              icon = _this$mapStyle2.icon,
              customColor = _this$mapStyle2.customColor,
              opacity = _this$mapStyle2.opacity;
          var imgSrc = icon.imgSrc;
          var status = customColor.status,
              color = customColor.color; //   let newColor = color.split(')')[0].split('rgb')[1];

          var duration = 10000 / animateSpeed; //   newColor = 'rgba' + newColor + ',';

          var newColorArray = rgbToColorArr$1(color);
          this.pulsingDot1 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var context = that.context;
              var t = performance.now() % duration / duration;
              var myImg = new Image();
              myImg.src = Number(imgSrc) === 1 ? icon_1 : icon_2;
              var imgh = that.height * t;
              var imgw = that.width * t;
              var x = that.width / 2 - imgw / 2;
              var y = that.height / 2 - imgh / 2;

              myImg.onload = function () {
                context.clearRect(0, 0, that.width, that.height);
                context.drawImage(myImg, x, y, imgw, imgh);

                if (status) {
                  // 获取画布图片颜色
                  var imageData = context.getImageData(x, y, imgw, imgh);
                  var length = imageData.data.length;

                  for (var index = 0; index < length; index += 4) {
                    //这里可以对 r g b 进行计算（这里的rgb是每个像素块的rgb颜色）
                    imageData.data[index] = newColorArray[0];
                    imageData.data[index + 1] = newColorArray[1];
                    imageData.data[index + 2] = newColorArray[2];
                  } // 清除画布图片


                  context.clearRect(0, 0, that.width, that.height); // 更新新数据

                  context.putImageData(imageData, 0, 0);
                }
              };

              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          };
          this.pulsingDot2 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width * 2;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration;
              var context = that.context;

              if (t > 0.5) {
                t = 1 - t;
              }

              t = t * 2;
              var myImg = new Image();
              myImg.src = Number(imgSrc) === 1 ? icon_1 : icon_2;
              var imgh = that.height * t;
              var imgw = that.width * t;
              var x = that.width / 2 - imgw / 2;
              var y = that.height / 2 - imgh / 2;

              myImg.onload = function () {
                context.clearRect(0, 0, that.width * 2, that.height);
                context.drawImage(myImg, x, y, imgw, imgh);

                if (status) {
                  // 获取画布图片颜色
                  var imageData = context.getImageData(x, y, imgw < 1 ? 1 : imgw, imgh < 1 ? 1 : imgh);
                  var length = imageData.data.length;

                  for (var index = 0; index < length; index += 4) {
                    //这里可以对 r g b 进行计算（这里的rgb是每个像素块的rgb颜色）
                    imageData.data[index] = newColorArray[0];
                    imageData.data[index + 1] = newColorArray[1];
                    imageData.data[index + 2] = newColorArray[2];
                  } // 清除画布图片


                  context.clearRect(0, 0, that.width, that.height); // 更新新数据

                  context.putImageData(imageData, 0, 0);
                }
              };

              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          };
          this.pulsingDot3 = {
            width: this.size,
            height: this.size,
            data: new Uint8Array(this.size * this.size * 4),
            onAdd: function onAdd() {
              _this.canvas = document.createElement('canvas');
              _this.canvas.width = _this.width;
              _this.canvas.height = _this.height;
              _this.context = _this.canvas.getContext('2d');
            },
            render: function render() {
              var t = performance.now() % duration / duration;
              var context = that.context;

              if (t > 0.5) {
                t = 1 - t;
              }

              t = t * 2;
              var myImg = new Image();
              myImg.src = Number(imgSrc) === 1 ? icon_1 : icon_2;
              var imgh = that.height * t;
              var imgw = that.width * t;
              var x = that.width / 2 - imgw / 2;
              var y = that.height / 2 - imgh / 2;

              myImg.onload = function () {
                context.clearRect(0, 0, that.width, that.height);
                context.drawImage(myImg, x, y, imgw < 1 ? 1 : imgw, imgh < 1 ? 1 : imgh);

                if (status) {
                  // 获取画布图片颜色
                  var imageData = context.getImageData(x, y, imgw < 1 ? 1 : imgw, imgh < 1 ? 1 : imgh);
                  var length = imageData.data.length;

                  for (var index = 0; index < length; index += 4) {
                    //这里可以对 r g b 进行计算（这里的rgb是每个像素块的rgb颜色）
                    imageData.data[index] = newColorArray[0];
                    imageData.data[index + 1] = newColorArray[1];
                    imageData.data[index + 2] = newColorArray[2];
                  } // 清除画布图片


                  context.clearRect(0, 0, that.width, that.height); // 更新新数据

                  context.putImageData(imageData, 0, 0);
                }
              };

              this.data = context.getImageData(0, 0, that.width, that.height).data;
              that.map.triggerRepaint();
              return true;
            }
          };
          this.iconStyleArr = [this.pulsingDot1, this.pulsingDot2, this.pulsingDot3];

          if ((_this$map3 = this.map) !== null && _this$map3 !== void 0 && _this$map3.hasImage("".concat(this.layername, "Image"))) {
            this.map.removeImage("".concat(this.layername, "Image"));
          }

          this.map.addImage("".concat(this.layername, "Image"), this.iconStyleArr[animateType - 1], {
            pixelRatio: 2
          });
          this.map.addLayer({
            id: this.layername + '_aimatedImage',
            type: 'symbol',
            source: this.layername,
            minzoom: this.option.minZoom,
            maxzoom: this.option.maxZoom,
            layout: {
              'icon-allow-overlap': !autoAvoid,
              'icon-image': "".concat(this.layername, "Image"),
              'icon-keep-upright': true,
              'icon-pitch-alignment': billboard ? 'viewport' : 'map',
              //viewport
              'icon-size': 1,
              'icon-offset': [0, -heightToGround]
            },
            paint: {
              'icon-color': 'rgba(255,255,255,1)',
              'icon-halo-color': 'rgba(255,255,255,1)',
              'icon-halo-blur': 0,
              'icon-opacity': opacity
            }
          });
        }
      } //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata, weightColors) {
        for (var i in geoJsondata) {
          geoJsondata[i].properties.weight = weightColors ? weightColors(geoJsondata[i].properties[this.mapStyle.color.feild]) : 0.5;
        }

        this.updateLayer(geoJsondata);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        var _this$map4;

        if ((_this$map4 = this.map) !== null && _this$map4 !== void 0 && _this$map4.getLayer(this.layername + '_aimatedImage')) {
          this.map.removeLayer(this.layername + '_aimatedImage');
          this.map.removeSource(this.layername);
        }
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        if (this.map.getLayer(this.layername + '_aimatedImage')) {
          if (visibility) {
            this.map.setLayoutProperty(this.layername + '_aimatedImage', 'visibility', 'visible');
          } else {
            this.map.setLayoutProperty(this.layername + '_aimatedImage', 'visibility', 'none');
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];

        if (this.map) {
          this.map.setFilter('heat', filters);
          this.map.setFilter(this.layername + '_aimatedImage', filters);
        }
      }
      /**
       *更新数据源
       */

    }, {
      key: "updateLayer",
      value: function updateLayer(data) {
        var _this$map5;

        if (this !== null && this !== void 0 && (_this$map5 = this.map) !== null && _this$map5 !== void 0 && _this$map5.getLayer(this.layername + '_aimatedImage')) {
          var geojson = {
            type: 'FeatureCollection',
            features: data
          };
          this.map.getSource(this.layername).setData(geojson);
        }
      }
      /**
       *数据、样式更新
       */

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem) {
        var _elem$mapStyle, _elem$option, _elem$option2, _elem$mapStyle2;

        this.removeMapLayer(); // 更新修改的属性

        this.mapStyle = elem === null || elem === void 0 ? void 0 : elem.mapStyle;
        this.visibility = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle = elem.mapStyle) === null || _elem$mapStyle === void 0 ? void 0 : _elem$mapStyle.visible;
        this.option = {
          minZoom: elem === null || elem === void 0 ? void 0 : (_elem$option = elem.option) === null || _elem$option === void 0 ? void 0 : _elem$option.minZoom,
          maxZoom: (elem === null || elem === void 0 ? void 0 : (_elem$option2 = elem.option) === null || _elem$option2 === void 0 ? void 0 : _elem$option2.maxZoom) + 1
        };
        this.size = parseInt((elem === null || elem === void 0 ? void 0 : (_elem$mapStyle2 = elem.mapStyle) === null || _elem$mapStyle2 === void 0 ? void 0 : _elem$mapStyle2.size) * 100);
        this.width = this.size;
        this.height = this.size;
        this.initLayer();
        this.setLayerVisible(elem === null || elem === void 0 ? void 0 : elem.visible);
        this.addMapLayer(elem === null || elem === void 0 ? void 0 : elem.data);
      }
    }]);

    return AimatedImageLayer;
  }();

  var ClusterLayer = /*#__PURE__*/function () {
    function ClusterLayer(map, config, spaceojoMapStyle) {
      var _config$option, _config$option2, _config$mapStyle, _config$mapStyle$radi;

      _classCallCheck(this, ClusterLayer);

      this.map = map;
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.id = config === null || config === void 0 ? void 0 : config.id;
      this.spaceojoMapStyle = spaceojoMapStyle;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      this.mapType = 'SizeScatterLayer';
      this.mapStyle = config === null || config === void 0 ? void 0 : config.mapStyle;
      this.visibility = config === null || config === void 0 ? void 0 : config.visible;
      this.dataLength = config === null || config === void 0 ? void 0 : config.dataLength;
      this.option = {
        minZoom: config === null || config === void 0 ? void 0 : (_config$option = config.option) === null || _config$option === void 0 ? void 0 : _config$option.minZoom,
        maxZoom: (config === null || config === void 0 ? void 0 : (_config$option2 = config.option) === null || _config$option2 === void 0 ? void 0 : _config$option2.maxZoom) + 1
      };
      this.data = config === null || config === void 0 ? void 0 : config.data;
      this.clusterRadius = config === null || config === void 0 ? void 0 : (_config$mapStyle = config.mapStyle) === null || _config$mapStyle === void 0 ? void 0 : (_config$mapStyle$radi = _config$mapStyle.radius) === null || _config$mapStyle$radi === void 0 ? void 0 : _config$mapStyle$radi.clusterRadius;
      this.initLayer();
      this.setLayerVisible(config === null || config === void 0 ? void 0 : config.visible);
    } //初始化图层


    _createClass(ClusterLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map, _this$map2, _this$map3;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getSource(this.layername))) {
          this.map.addSource(this.layername, {
            type: 'geojson',
            cluster: true,
            clusterRadius: this.mapStyle.radius.clusterRadius,
            //聚合半径
            clusterMaxZoom: 15,
            data: {
              type: 'Feature',
              features: []
            }
          });
        }

        var type = this.mapStyle.color.type;
        var pointCount = this.getPointCount().slice(1);
        var circleRadius = this.getCircleRadius().slice(1);
        var circleColor = null;

        if (type === 1) {
          circleColor = this.mapStyle.color.color;
        } else if (type === 2) {
          // circleColor = this.mapStyle.color.colorArray;
          circleColor = ['step', ['get', 'point_count']].concat(_toConsumableArray(pointCount));
        }

        if (!((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer(this.layername + '_point'))) {
          this.map.addLayer({
            id: this.layername + '_point',
            type: 'circle',
            source: this.layername,
            filter: ['has', 'point_count'],
            minzoom: this.option.minZoom,
            maxzoom: this.option.maxZoom,
            paint: {
              'circle-radius': ['step', ['get', 'point_count']].concat(_toConsumableArray(circleRadius)),
              'circle-color': circleColor,
              'circle-opacity': this.mapStyle.color.opacity
            }
          });
        }

        var fontShow = this.mapStyle.text.show;
        var fontSize = 12;

        if (fontShow) {
          fontSize = this.mapStyle.text.fontSize;
        } else {
          fontSize = 0;
        }

        if (!((_this$map3 = this.map) !== null && _this$map3 !== void 0 && _this$map3.getLayer(this.layername + '_symbol'))) {
          this.map.addLayer({
            id: this.layername + '_symbol',
            type: 'symbol',
            source: this.layername,
            minzoom: this.option.minZoom,
            maxzoom: this.option.maxZoom,
            filter: ['has', 'point_count'],
            layout: {
              'text-field': '{point_count_abbreviated}' ,
              'text-size': fontSize
            },
            paint: {
              'text-color': this.mapStyle.text.color
            }
          }); // console.log('circleRadius', circleRadius);
          // this.map.addLayer({
          //   id: 'unclustered-point',
          //   type: 'circle',
          //   source: this.layername,
          //   filter: ['!', ['has', 'point_count']],
          //   paint: {
          //     'circle-color': '#11b4da',
          //     'circle-radius': 4,
          //     'circle-stroke-width': 1,
          //     'circle-stroke-color': '#fff',
          //   },
          // });
        }
      } //获取对应的颜色分组结构

    }, {
      key: "getPointCount",
      value: function getPointCount() {
        var arr = [];
        var color = this.mapStyle.color;
        var colorArray = color.colorArray;
        var antitone = color.antitone;
        var reversalColorArray = JSON.parse(JSON.stringify(colorArray));
        reversalColorArray = reversalColorArray.reverse();
        var multiplicationNum = 1 / (colorArray.length - 1);

        for (var i in colorArray) {
          arr.push(parseInt(this.dataLength * (i * multiplicationNum)));
          arr.push(antitone ? reversalColorArray[i] : colorArray[i]);
        }

        return arr;
      } //获取对应的大小分组解雇

    }, {
      key: "getCircleRadius",
      value: function getCircleRadius() {
        var arr = [];
        var _this$mapStyle = this.mapStyle,
            color = _this$mapStyle.color,
            radius = _this$mapStyle.radius;
        var colorArray = color.colorArray;
        var radiusMinPixels = radius.radiusMinPixels,
            radiusMaxPixels = radius.radiusMaxPixels;
        var diff = (radiusMaxPixels - radiusMinPixels) / (colorArray.length - 1);
        var multiplicationNum = 1 / (colorArray.length - 1);

        for (var i in colorArray) {
          arr.push(this.dataLength * (i * multiplicationNum));
          arr.push(radiusMinPixels + diff * i);
        }

        return arr;
      } //更新图层数据

    }, {
      key: "updateLayer",
      value: function updateLayer(geoJsondata) {
        var _this$map4;

        if ((_this$map4 = this.map) !== null && _this$map4 !== void 0 && _this$map4.getLayer(this.layername + '_point')) {
          var geojson = {
            type: 'FeatureCollection',
            features: geoJsondata
          };
          this.map.getSource(this.layername).setData(geojson);
        }
      } //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata) {
        // let totalcount = geoJsondata.length;
        this.updateLayer(geoJsondata);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        var _this$map5, _this$map6;

        if ((_this$map5 = this.map) !== null && _this$map5 !== void 0 && _this$map5.getLayer(this.layername + '_point') && (_this$map6 = this.map) !== null && _this$map6 !== void 0 && _this$map6.getLayer(this.layername + '_symbol')) {
          this.map.removeLayer(this.layername + '_point');
          this.map.removeLayer(this.layername + '_symbol');
          this.map.removeSource(this.layername);
        }
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        if (this.map.getLayer(this.layername + '_point') && this.map.getLayer(this.layername + '_symbol')) {
          if (visibility) {
            this.map.setLayoutProperty(this.layername + '_point', 'visibility', 'visible');
            this.map.setLayoutProperty(this.layername + '_symbol', 'visibility', 'visible');
          } else {
            this.map.setLayoutProperty(this.layername + '_point', 'visibility', 'none');
            this.map.setLayoutProperty(this.layername + '_symbol', 'visibility', 'none');
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];
        this.map.setFilter(this.layername + '_point', filters);
        this.map.setFilter(this.layername + '_symbol', filters);
      }
      /**
       * 属性更新
       */

    }, {
      key: "updataPropsBy",
      value: function updataPropsBy(elem) {
        var _this$map7;

        if (this.map.getLayer(this.layername + '_point')) {
          var _elem$mapStyle, _elem$mapStyle$color, _elem$option, _elem$option2;

          var type = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle = elem.mapStyle) === null || _elem$mapStyle === void 0 ? void 0 : (_elem$mapStyle$color = _elem$mapStyle.color) === null || _elem$mapStyle$color === void 0 ? void 0 : _elem$mapStyle$color.type;
          var pointCount = this.getPointCount().slice(1);
          var circleRadius = this.getCircleRadius().slice(1);
          var circleColor = null;

          if (type === 1) {
            var _elem$mapStyle2, _elem$mapStyle2$color;

            circleColor = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle2 = elem.mapStyle) === null || _elem$mapStyle2 === void 0 ? void 0 : (_elem$mapStyle2$color = _elem$mapStyle2.color) === null || _elem$mapStyle2$color === void 0 ? void 0 : _elem$mapStyle2$color.color;
          } else if (type === 2) {
            circleColor = ['step', ['get', 'point_count']].concat(_toConsumableArray(pointCount));
          }

          this.map.setPaintProperty(this.layername + '_point', 'circle-radius', ['step', ['get', 'point_count']].concat(_toConsumableArray(circleRadius)));
          this.map.setPaintProperty(this.layername + '_point', 'circle-color', circleColor);
          this.map.setPaintProperty(this.layername + '_point', 'circle-opacity', elem.mapStyle.color.opacity);
          this.map.setLayerZoomRange(this.layername + '_point', elem === null || elem === void 0 ? void 0 : (_elem$option = elem.option) === null || _elem$option === void 0 ? void 0 : _elem$option.minZoom, elem === null || elem === void 0 ? void 0 : (_elem$option2 = elem.option) === null || _elem$option2 === void 0 ? void 0 : _elem$option2.maxZoom);
        }

        if ((_this$map7 = this.map) !== null && _this$map7 !== void 0 && _this$map7.getLayer(this.layername + '_symbol')) {
          var _elem$mapStyle3, _elem$mapStyle3$text, _elem$option3, _elem$option4;

          var fontShow = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle3 = elem.mapStyle) === null || _elem$mapStyle3 === void 0 ? void 0 : (_elem$mapStyle3$text = _elem$mapStyle3.text) === null || _elem$mapStyle3$text === void 0 ? void 0 : _elem$mapStyle3$text.show;
          var fontSize = 12;

          if (fontShow) {
            var _elem$mapStyle4, _elem$mapStyle4$text;

            fontSize = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle4 = elem.mapStyle) === null || _elem$mapStyle4 === void 0 ? void 0 : (_elem$mapStyle4$text = _elem$mapStyle4.text) === null || _elem$mapStyle4$text === void 0 ? void 0 : _elem$mapStyle4$text.fontSize;
          } else {
            fontSize = 0;
          }

          this.map.setPaintProperty(this.layername + '_symbol', 'text-color', elem.mapStyle.text.color);
          this.map.setLayoutProperty(this.layername + '_symbol', 'text-field', '{point_count_abbreviated}' );
          this.map.setLayoutProperty(this.layername + '_symbol', 'text-size', fontSize);
          this.map.setLayerZoomRange(this.layername + '_symbol', elem === null || elem === void 0 ? void 0 : (_elem$option3 = elem.option) === null || _elem$option3 === void 0 ? void 0 : _elem$option3.minZoom, elem === null || elem === void 0 ? void 0 : (_elem$option4 = elem.option) === null || _elem$option4 === void 0 ? void 0 : _elem$option4.maxZoom);
        }
      }
      /**
       *数据、样式更新
       */

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem, spaceojoMapStyle) {
        var _elem$option5, _elem$option6, _elem$mapStyle5, _elem$mapStyle5$radiu;

        this.mapStyle = elem === null || elem === void 0 ? void 0 : elem.mapStyle;
        this.option = {
          minZoom: elem === null || elem === void 0 ? void 0 : (_elem$option5 = elem.option) === null || _elem$option5 === void 0 ? void 0 : _elem$option5.minZoom,
          maxZoom: (elem === null || elem === void 0 ? void 0 : (_elem$option6 = elem.option) === null || _elem$option6 === void 0 ? void 0 : _elem$option6.maxZoom) + 1
        };

        if ((elem === null || elem === void 0 ? void 0 : (_elem$mapStyle5 = elem.mapStyle) === null || _elem$mapStyle5 === void 0 ? void 0 : (_elem$mapStyle5$radiu = _elem$mapStyle5.radius) === null || _elem$mapStyle5$radiu === void 0 ? void 0 : _elem$mapStyle5$radiu.clusterRadius) !== this.clusterRadius || this.spaceojoMapStyle !== spaceojoMapStyle) {
          var _elem$mapStyle6, _elem$mapStyle6$radiu;

          this.removeMapLayer();
          this.initLayer();
          this.setLayerVisible(elem === null || elem === void 0 ? void 0 : elem.visible);
          this.updateLayer(elem === null || elem === void 0 ? void 0 : elem.data);
          this.spaceojoMapStyle = spaceojoMapStyle;
          this.clusterRadius = elem === null || elem === void 0 ? void 0 : (_elem$mapStyle6 = elem.mapStyle) === null || _elem$mapStyle6 === void 0 ? void 0 : (_elem$mapStyle6$radiu = _elem$mapStyle6.radius) === null || _elem$mapStyle6$radiu === void 0 ? void 0 : _elem$mapStyle6$radiu.clusterRadius;
        } else {
          this.updataPropsBy(elem);
          this.setLayerVisible(elem === null || elem === void 0 ? void 0 : elem.visible);

          if (!looseEqual(this.data, elem === null || elem === void 0 ? void 0 : elem.data)) {
            this.updateLayer(elem === null || elem === void 0 ? void 0 : elem.data);
            this.data = elem === null || elem === void 0 ? void 0 : elem.data;
          }
        }
      }
    }]);

    return ClusterLayer;
  }();

  //影像
  var RaterImageLayer = /*#__PURE__*/function () {
    function RaterImageLayer(map, config) {
      var _this = this;

      _classCallCheck(this, RaterImageLayer);

      this.map = map;
      this.mapType = 'RaterImageLayer';
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.url = config === null || config === void 0 ? void 0 : config.url;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      setTimeout(function () {
        _this.initLayer();
      }, 1000);
    } //初始化图层


    _createClass(RaterImageLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map, _this$map2;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getSource(this.layername))) {
          this.map.addSource(this.layername, {
            type: 'raster',
            tiles: [this.url]
          });
        }

        if (!((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer(this.layername + '_raster'))) {
          this.map.addLayer({
            id: this.layername + '_raster',
            type: 'raster',
            source: this.layername
          });
        }
      } //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata) {
        this.updateLayer(geoJsondata);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        if (this.map.getLayer(this.layername + '_raster')) {
          this.map.removeLayer(this.layername + '_raster');
          this.map.removeSource(this.layername);
        }
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        if (this.map.getLayer(this.layername + '_raster')) {
          if (visibility) {
            this.map.setLayoutProperty(this.layername + '_raster', 'visibility', 'visible');
          } else {
            this.map.setLayoutProperty(this.layername + '_raster', 'visibility', 'none');
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];
        this.map.setFilter(this.layername + '_raster', filters);
      }
      /**
       * 更新数据源
       * @param {更新的数据} data
       */

    }, {
      key: "updateLayer",
      value: function updateLayer(data) {
        if (this.map.getLayer(this.layername + '_raster')) {
          var geojson = {
            type: 'raster',
            tiles: [data]
          };
          this.map.getSource(this.layername).setData(geojson);
        }
      }
    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem) {
        this.removeMapLayer();
      }
    }]);

    return RaterImageLayer;
  }();

  //地形文件
  var RaterDemLayer = /*#__PURE__*/function () {
    function RaterDemLayer(map, config) {
      var _this = this;

      _classCallCheck(this, RaterDemLayer);

      this.map = map;
      this.mapType = 'RaterDemLayer';
      this.layername = config === null || config === void 0 ? void 0 : config.id;
      this.url = config === null || config === void 0 ? void 0 : config.url;
      this.dataid = config === null || config === void 0 ? void 0 : config.dataid;
      this.titles = config === null || config === void 0 ? void 0 : config.titles;
      var timer = setTimeout(function () {
        _this.initLayer();

        clearTimeout(timer);
      }, 500);
    } //初始化图层


    _createClass(RaterDemLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map, _this$map2, _this$map3;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getSource('mapbox-dem'))) {
          this.map.addSource('mapbox-dem', {
            id: 'mapboxDem',
            type: 'raster-dem',
            url: this.titles,
            tileSize: 128,
            maxzoom: 20
          }); // add the DEM source as a terrain layer with exaggerated height

          this.map.setTerrain({
            source: 'mapbox-dem',
            exaggeration: 10
          });
        }

        if (!((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getSource(this.layername))) {
          this.map.addSource(this.layername, {
            type: 'raster',
            tiles: [this.url]
          });
        }

        if (!((_this$map3 = this.map) !== null && _this$map3 !== void 0 && _this$map3.getLayer(this.layername + '_raster'))) {
          this.map.addLayer({
            id: this.layername + '_raster',
            type: 'raster',
            source: this.layername
          });
        }
      } //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(geoJsondata) {
        this.updateLayer(geoJsondata);
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        var _this$map4;

        if (this.map.getLayer(this.layername + '_raster')) {
          this.map.removeLayer(this.layername + '_raster');
          this.map.removeSource(this.layername);
        }

        if ((_this$map4 = this.map) !== null && _this$map4 !== void 0 && _this$map4.getSource('mapbox-dem')) {
          this.map.setTerrain({
            source: 'mapbox-dem',
            exaggeration: 0
          });
          this.map.removeSource('mapbox-dem');
        }
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        if (this.map.getLayer(this.layername + '_raster')) {
          if (visibility) {
            this.map.setLayoutProperty(this.layername + '_raster', 'visibility', 'visible');
          } else {
            this.map.setLayoutProperty(this.layername + '_raster', 'visibility', 'none');
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];
        this.map.setFilter(this.layername + '_raster', filters);
      }
      /**
       * 更新数据源
       * @param {更新的数据} data
       */

    }, {
      key: "updateLayer",
      value: function updateLayer(data) {
        if (this.map.getLayer(this.layername + '_raster')) {
          var geojson = {
            type: 'raster',
            tiles: [data]
          };
          this.map.getSource(this.layername).setData(geojson);
        }
      }
    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem) {
        this.removeMapLayer();
      }
    }]);

    return RaterDemLayer;
  }();

  var THREE = window.THREE; //动态闪烁图

  var UEModelLayer = /*#__PURE__*/function () {
    function UEModelLayer(map, config) {
      var _this = this;

      _classCallCheck(this, UEModelLayer);

      this.map = map;
      this.modelUrl = config === null || config === void 0 ? void 0 : config.modelUrl;
      this.layerName = (config === null || config === void 0 ? void 0 : config.id) || '3dmodel';

      var _modelOrigin = (config === null || config === void 0 ? void 0 : config.modelOrigin) || [116.40833174826086, 39.857323712408508];

      var modelAltitude = 0;
      var modelRotate = [Math.PI / 2, 0, 0];
      var _modelScale = 5.41843220338983e-8; // transformation parameters to position, rotate and scale the 3D model onto the map

      this.modelTransform = {
        translateX: mapboxgl__default["default"].MercatorCoordinate.fromLngLat(_modelOrigin, modelAltitude).x,
        translateY: mapboxgl__default["default"].MercatorCoordinate.fromLngLat(_modelOrigin, modelAltitude).y,
        translateZ: mapboxgl__default["default"].MercatorCoordinate.fromLngLat(_modelOrigin, modelAltitude).z,
        rotateX: modelRotate[0],
        rotateY: modelRotate[1],
        rotateZ: modelRotate[2],
        scale: _modelScale
      };
      setTimeout(function () {
        _this.initLayer();
      }, 1000);
    } // 初始化图层


    _createClass(UEModelLayer, [{
      key: "initLayer",
      value: function initLayer() {
        var _this$map;

        if (!((_this$map = this.map) !== null && _this$map !== void 0 && _this$map.getLayer(this.layerName))) {
          var self = this;
          var customLayer = {
            id: this.layerName,
            type: 'custom',
            renderingMode: '3d',
            onAdd: function onAdd(map, gl) {
              this.camera = new THREE.Camera();
              this.scene = new THREE.Scene(); // create two three.js lights to illuminate the model

              var directionalLight = new THREE.DirectionalLight(0xffffff);
              directionalLight.position.set(0, -70, 100).normalize();
              this.scene.add(directionalLight);
              var directionalLight2 = new THREE.DirectionalLight(0xffffff);
              directionalLight2.position.set(0, 70, 100).normalize();
              this.scene.add(directionalLight2); // use the three.js GLTF loader to add the 3D model to the three.js scene

              var loader = new THREE.GLTFLoader();
              loader.requestHeader = {
                Authorization: localStorage.getItem('cookie')
              };
              loader.load(self.modelUrl, function (gltf) {
                this.scene.add(gltf.scene);
              }.bind(this));
              this.map = map; // use the Mapbox GL JS map canvas for three.js

              this.renderer = new THREE.WebGLRenderer({
                canvas: map.getCanvas(),
                context: gl
              });
              this.renderer.autoClear = false;
            },
            render: function render(gl, matrix) {
              var modelTransform = self.modelTransform;
              var rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
              var rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
              var rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);
              var m = new THREE.Matrix4().fromArray(matrix);
              var l = new THREE.Matrix4().makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ).scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale)).multiply(rotationX).multiply(rotationY).multiply(rotationZ);
              this.camera.projectionMatrix.elements = matrix;
              this.camera.projectionMatrix = m.multiply(l);
              this.renderer.state.reset();
              this.renderer.render(this.scene, this.camera);
              this.map.triggerRepaint();
            }
          };
          this.map.addLayer(customLayer);
        }
      } // 删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        var _this$map2;

        if ((_this$map2 = this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer(this.layerName)) {
          this.map.removeLayer(this.layerName);
        }
      } // 更新图层

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer() {
        this.removeMapLayer();
        this.initLayer();
      }
    }]);

    return UEModelLayer;
  }();

  var styles$4 = {"normal":"styles_normal__WOho2","textBox":"styles_textBox__2ve9w"};

  function PopOne$1(_ref) {
    var content = _ref.content,
        contentStyle = _ref.contentStyle;
    if (!contentStyle) return null;
    var interactionDefault = contentStyle.interactionDefault,
        fixedSize = contentStyle.fixedSize;
    var _interactionDefault$b = interactionDefault.boxStyle.style1,
        background = _interactionDefault$b.background,
        borderColor = _interactionDefault$b.borderColor,
        borderRadius = _interactionDefault$b.borderRadius,
        borderWidth = _interactionDefault$b.borderWidth,
        keyStyle = _interactionDefault$b.keyStyle,
        valueStyle = _interactionDefault$b.valueStyle; //   -------- 弹框样式 --------

    var boxStyleObj = {
      borderWidth: borderWidth,
      background: background,
      borderColor: borderColor,
      borderRadius: borderRadius
    }; //   -------- 弹框固定宽高 --------

    if (fixedSize.status) {
      boxStyleObj.width = fixedSize.width;
      boxStyleObj.height = fixedSize.height;
    } //   -------- 文字样式 --------
    //   10:可以调节默认行间距


    var textBoxObj = {
      height: (keyStyle.fontSize > valueStyle.fontSize ? keyStyle.fontSize : valueStyle.fontSize) + 10,
      lineHeight: "".concat((keyStyle.fontSize > valueStyle.fontSize ? keyStyle.fontSize : valueStyle.fontSize) + 10, "px")
    };

    var textKeyObj = _objectSpread2({}, keyStyle);

    var textValueObj = _objectSpread2({}, valueStyle);

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$4.normal //   onClick={() => {
      //     alert(1);
      //   }}
      ,
      style: _objectSpread2({}, boxStyleObj)
    }, content && content.map(function (elem, index) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$4.textBox,
        style: textBoxObj,
        key: index + 'popBoxLine'
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        style: textKeyObj
      }, elem === null || elem === void 0 ? void 0 : elem.key, "\uFF1A"), /*#__PURE__*/React__default["default"].createElement("span", {
        style: textValueObj
      }, elem === null || elem === void 0 ? void 0 : elem.value));
    }));
  }

  var styles$3 = {"normal":"styles_normal__tFSqV","textBox":"styles_textBox__4vogK"};

  function PopOne(_ref) {
    var content = _ref.content,
        contentStyle = _ref.contentStyle;
    if (!contentStyle) return null;
    var interactionDefault = contentStyle.interactionDefault,
        fixedSize = contentStyle.fixedSize;
    var _interactionDefault$b = interactionDefault.boxStyle.style2,
        background = _interactionDefault$b.background,
        borderColor = _interactionDefault$b.borderColor,
        borderRadius = _interactionDefault$b.borderRadius,
        borderWidth = _interactionDefault$b.borderWidth,
        keyStyle = _interactionDefault$b.keyStyle,
        valueStyle = _interactionDefault$b.valueStyle; //   -------- 弹框样式 --------

    var boxStyleObj = {
      borderWidth: borderWidth,
      background: background,
      borderColor: borderColor,
      borderRadius: borderRadius
    }; //   -------- 弹框固定宽高 --------

    if (fixedSize.status) {
      boxStyleObj.width = fixedSize.width;
      boxStyleObj.height = fixedSize.height;
    } //   -------- 文字样式 --------
    //   10:可以调节默认行间距


    var textBoxObj = {
      height: (keyStyle.fontSize > valueStyle.fontSize ? keyStyle.fontSize : valueStyle.fontSize) + 10,
      lineHeight: "".concat((keyStyle.fontSize > valueStyle.fontSize ? keyStyle.fontSize : valueStyle.fontSize) + 10, "px")
    };

    var textKeyObj = _objectSpread2({}, keyStyle);

    var textValueObj = _objectSpread2({}, valueStyle);

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$3.normal,
      style: _objectSpread2({}, boxStyleObj)
    }, content && content.map(function (elem, index) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles$3.textBox,
        style: textBoxObj,
        key: index + 'popBoxLine'
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        style: textKeyObj
      }, elem === null || elem === void 0 ? void 0 : elem.key, "\uFF1A"), /*#__PURE__*/React__default["default"].createElement("span", {
        style: textValueObj
      }, elem === null || elem === void 0 ? void 0 : elem.value));
    }));
  }

  var styles$2 = {"normal":"styles_normal__HNkV9"};

  /**
   * Copyright(C) 2018,by xskj,All rights reserved
   *
   * @date 2018年10月15日
   * @author lqq
   * @desc
   *
   */
  var IPConfig = _objectSpread2({}, externalConfig()); //开启外部配置，开启后ip配置需要在 public下面的projectconfig 配置

  function externalConfig() {
    //相数云api
    var API = window.ipconfig.API; //地图api1

    var MAP_API = window.ipconfig.MAP_API; //地图api2

    var PUB_MAP_API = window.ipconfig.PUB_MAP_API;
    var SOCKET_URL = window.ipconfig.SOCKET_URL; //socket api

    var SOCKET_API = window.ipconfig.SOCKET_API; //相数云线上地址

    var DOCLOUD_HOST = window.ipconfig.DOCLOUD_HOST; //相数云预览线上地址

    var REPORT_HOST = window.ipconfig.REPORT_HOST; //相数云线上字体地址

    var FONT_URL = window.ipconfig.FONT_URL; // 帮助文档

    var HELP_DOCUMENT = window.ipconfig.HELP_DOCUMENT;
    return {
      //用户相关服务
      userServiceDomain: API + '/docloud',
      //数据处理相关服务
      datafusionServiceDomain: API,
      //项目相关服务
      projectServiceDomain: API,
      //权限相关服务
      authServiceDomain: API + '/datamiddle',
      //地图
      // initMapStyle: MAP_API + '/styles/transparency/style.json',
      // publicInitMapStyle: MAP_API + '/styles/china_V3_gray/style.json',
      initMapStyle: MAP_API,
      publicInitMapStyle: PUB_MAP_API,
      //数据交换服务
      dataBaseDomain: API,
      //指标管理 api
      indexServiceDomain: API,
      //消息通讯socket地址
      socketDomain: SOCKET_API + '/message_transfer/websocket/zgyd1',
      //部署线上地址
      docloud: DOCLOUD_HOST,
      //预览路径
      reportPath: REPORT_HOST,
      sendSocketDomain: SOCKET_URL,
      //相数云字体线上地址
      fontUrl: FONT_URL,
      // 帮助文档
      helpDocument: HELP_DOCUMENT
    };
  } // const localConfig = {
  //   //用户相关服务
  //   userServiceDomain: 'https://www.dataojocloud.com' + '/docloud',
  //   //数据处理相关服务
  //   datafusionServiceDomain: 'https://www.dataojocloud.com',
  //   //项目相关服务
  //   projectServiceDomain: 'https://www.dataojocloud.com',
  //   //权限相关服务
  //   authServiceDomain: 'https://www.dataojocloud.com' + '/datamiddle',
  //   //地图
  //   // initMapStyle: MAP_API + '/styles/transparency/style.json',
  //   // publicInitMapStyle: MAP_API + '/styles/china_V3_gray/style.json',
  //   initMapStyle: 'https://www.dataojocloud.com/styles/transparency/style.json',
  //   publicInitMapStyle: 'https://www.dataojocloud.com/styles/china_V3_gray/style.json',
  //   //数据交换服务
  //   dataBaseDomain: 'https://www.dataojocloud.com',
  //   //指标管理 api
  //   indexServiceDomain: 'https://www.dataojocloud.com',
  //   //消息通讯socket地址
  //   socketDomain: 'SOCKET_API' + '/message_transfer/websocket/zgyd1',
  //   //部署线上地址
  //   docloud: 'DOCLOUD_HOST',
  //   //预览路径
  //   reportPath: 'REPORT_HOST',
  //   sendSocketDomain: 'SOCKET_URL',
  //   //相数云字体线上地址
  //   fontUrl: 'https://www.dataojo.com/docloudresource/font',
  //   // 帮助文档
  //   helpDocument: 'https://www.dataojo.com/',
  // };
  // export default localConfig;
  // window.ipconfig = {
  //   // 服务部署api地址
  //   API: 'https://www.dataojocloud.com',
  //   // 地图api1  私有化部署 地图api1 地图api2同一个地址
  //   MAP_API: 'https://www.dataojocloud.com/styles/transparency/style.json',
  //   // 地图api2
  //   PUB_MAP_API: 'https://www.dataojocloud.com/styles/china_V3_gray/style.json',
  //   // socket 全局socket已经被注释，这个保留配置即可
  //   SOCKET_URL: 'http://www.dataojo.com',
  //   SOCKET_API: 'wss://www.dataojo.com',
  //   // 相数云线上访问地址 *************  DOCLOUD_HOST REPORT_HOST 私有化部署同一个地址
  //   DOCLOUD_HOST: 'https://www.dataojo.com/docloud',
  //   // 相数云预览线上预览地址
  //   REPORT_HOST: 'https://www.dataojo.com/docloud',
  // };

  /**
   * Copyright(C) 2018,by xskj,All rights reserved
   *
   * @date 2021年9月9日
   * @author wx
   * @desc 弹框样式1
   *
   */
  // import DINWidget from '@/dccomponents/DCBCommon/dinwidget';

  function PopScreen(_ref) {
    var contentStyle = _ref.contentStyle,
        allFeild = _ref.allFeild;
    if (!contentStyle) return null;
    var fixedSize = contentStyle.fixedSize,
        interactionScreen = contentStyle.interactionScreen; //   -------- 弹框固定宽高 --------

    var screenBoxObj = {};

    if (fixedSize.status) {
      screenBoxObj.width = fixedSize.width;
      screenBoxObj.height = fixedSize.height;
    }

    var paramVal = '';

    if (interactionScreen.dataFilter) {
      for (var key in allFeild.table_head) {
        if (allFeild.table_head.hasOwnProperty(key)) {
          var element = allFeild.table_head[key];

          if (element.alias === interactionScreen.dataFilter) {
            paramVal = "&".concat(interactionScreen.dataFilter, "=").concat(allFeild[element.key]);
            break;
          }
        }
      }
    }

    console.log("".concat(IPConfig.reportPath, "/#/report?").concat(interactionScreen.selectScreen).concat(paramVal), 'iwmlxihkhsk');
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$2.normal,
      style: screenBoxObj
    }, /*#__PURE__*/React__default["default"].createElement(Iframe__default["default"], {
      url: "".concat(IPConfig.reportPath, "/#/report?").concat(interactionScreen.selectScreen).concat(paramVal),
      width: "100%",
      height: "100%",
      loading: "\u52A0\u8F7D\u4E2D...",
      id: "diframe"
    }));
  }

  var styles$1 = {"normal":"styles_normal__CV-fy"};

  /**
   * Copyright(C) 2018,by xskj,All rights reserved
   *
   * @date new Date()
   * @author handsome WenQi.Wang
   * @desc 弹框样式1
   *
   */
  // import DINWidget from '@/dccomponents/DCBCommon/dinwidget';

  function EFrame(_ref) {
    var contentStyle = _ref.contentStyle;
    console.log(contentStyle, 'contentStylemiowm');
    if (!contentStyle) return null;
    var fixedSize = contentStyle.fixedSize,
        interactionExternal = contentStyle.interactionExternal; //   -------- 弹框固定宽高 --------

    var screenBoxObj = {};

    if (fixedSize.status) {
      screenBoxObj.width = fixedSize.width;
      screenBoxObj.height = fixedSize.height;
    }

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles$1.normal,
      style: screenBoxObj
    }, /*#__PURE__*/React__default["default"].createElement(Iframe__default["default"], {
      url: interactionExternal === null || interactionExternal === void 0 ? void 0 : interactionExternal.url,
      width: "100%",
      height: "100%",
      loading: "\u52A0\u8F7D\u4E2D...",
      id: "diframe"
    }));
  }

  var styles = {"normal":"styles_normal__Ny772","closePop":"styles_closePop__rhM5S"};

  /**
   * 判断一个对象是否为dom对象
   */
  var isDomObj = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? function (obj) {
    return obj instanceof HTMLElement;
  } : function (obj) {
    return obj && _typeof(obj) === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  };

  function PopView(props, node) {
    var show = props.show,
        info = props.info,
        popType = props.popType,
        boxType = props.boxType,
        contentStyle = props.contentStyle,
        closePop = props.closePop;
    if (!contentStyle) return null;
    var interactionBoxPosition = contentStyle.interactionBoxPosition,
        closeBtn = contentStyle.closeBtn; //   -------- 弹框位置 --------

    var positionObj = {}; //   开启弹框位置

    if (interactionBoxPosition.status) {
      //   ------------- 固定位置 --------------
      if (!interactionBoxPosition.positionType) {
        positionObj.position = 'absolute';
        positionObj.left = info === null || info === void 0 ? void 0 : info.x;
        positionObj.top = info === null || info === void 0 ? void 0 : info.y;

        switch (interactionBoxPosition.placement) {
          case 'top':
            positionObj.transform = "translate(".concat("calc(-50% + ".concat(interactionBoxPosition.x, "px)"), ", ", "calc(-100% - ".concat(interactionBoxPosition.y, "px)"), ")");
            break;

          case 'bottom':
            positionObj.transform = "translate(".concat("calc(-50% + ".concat(interactionBoxPosition.x, "px)"), ", ", interactionBoxPosition.y, "px)");
            break;

          case 'left':
            positionObj.transform = "translate(".concat("calc(-100% - ".concat(interactionBoxPosition.x, "px)"), ", ", "calc(-50% + ".concat(interactionBoxPosition.y, "px)"), ")");
            break;

          case 'right':
            positionObj.transform = "translate(".concat(interactionBoxPosition.x, "px, ", "calc(-50% + ".concat(interactionBoxPosition.y, "px)"), ")");
            break;
        }
      } else if (interactionBoxPosition.positionType === 1) {
        // ------------- 追随对齐 -------------
        switch (interactionBoxPosition.placement) {
          case 'top':
            positionObj.transform = "translate(".concat(interactionBoxPosition.x, "px, ", "calc(-50% - ".concat(interactionBoxPosition.y, "px)"), ")");
            break;

          case 'bottom':
            positionObj.transform = "translate(".concat(interactionBoxPosition.x, "px, ", "calc(50% + ".concat(interactionBoxPosition.y, "px)"), ")");
            break;

          case 'left':
            positionObj.transform = "translate(".concat("calc(-50% - ".concat(interactionBoxPosition.x, "px)"), ", ", interactionBoxPosition.y, "px)");
            break;

          case 'right':
            positionObj.transform = "translate(".concat("calc(50% + ".concat(interactionBoxPosition.x, "px)"), ", ", interactionBoxPosition.y, "px)");
            break;
        }
      } else {
        positionObj.position = 'absolute'; // ------------- 固定屏幕 -------------

        switch (interactionBoxPosition.placement) {
          case 'leftTop':
            positionObj.left = interactionBoxPosition.x;
            positionObj.top = interactionBoxPosition.y;
            break;

          case 'rightTop':
            positionObj.right = interactionBoxPosition.x;
            positionObj.top = interactionBoxPosition.y;
            break;

          case 'leftBottom':
            positionObj.left = interactionBoxPosition.x;
            positionObj.bottom = interactionBoxPosition.y;
            break;

          case 'rightBottom':
            positionObj.right = interactionBoxPosition.x;
            positionObj.bottom = interactionBoxPosition.y;
            break;
        }
      }
    } //   固定位置的显隐


    if (!interactionBoxPosition.positionType || interactionBoxPosition.positionType === 2) {
      // positionObj.display = show ? 'block' : 'none';
      positionObj.visibility = show ? 'visible' : 'hidden';
      positionObj['pointer-events'] = show ? 'auto' : 'none';
    }

    function interactionBox() {
      // console.log(positionObj, 'positionObjsss');
      var tempDom = null;

      if (!popType) {
        if (boxType === 1) {
          tempDom = /*#__PURE__*/React__default["default"].createElement(PopOne$1, props);
        }

        if (boxType === 2) {
          tempDom = /*#__PURE__*/React__default["default"].createElement(PopOne, props);
        }
      } else if (popType === 1) {
        tempDom = /*#__PURE__*/React__default["default"].createElement(PopScreen, props);
      } else {
        tempDom = /*#__PURE__*/React__default["default"].createElement(EFrame, props);
      }

      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: styles.normal,
        style: _objectSpread2({}, positionObj)
      }, ((closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.status) || false) && /*#__PURE__*/React__default["default"].createElement("span", {
        className: styles.closePop,
        style: {
          fontSize: closeBtn !== null && closeBtn !== void 0 && closeBtn.size || (closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.size) === 0 ? closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.size : 12,
          color: (closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.color) || '#fff',
          marginRight: closeBtn !== null && closeBtn !== void 0 && closeBtn.marginRight || (closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.marginRight) === 0 ? closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.marginRight : 10,
          marginTop: closeBtn !== null && closeBtn !== void 0 && closeBtn.marginTop || (closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.marginTop) === 0 ? closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.marginTop : 10
        },
        onClick: closePop
      }, "\xD7"), tempDom);
    }

    return !interactionBoxPosition.positionType || interactionBoxPosition.positionType === 2 ? interactionBox() : isDomObj(node) && ReactDOM__default["default"].render(interactionBox(), node);
  }

  var Popup = /*#__PURE__*/function () {
    function Popup() {
      _classCallCheck(this, Popup);

      // this.map = map;
      // this.props = props;
      // console.log('asfasdfasdf', props);
      this.marker = null;
    } //初始化图层


    _createClass(Popup, [{
      key: "initLayer",
      value: function initLayer() {} //添加图层数据

    }, {
      key: "addMapLayer",
      value: function addMapLayer(map, dataProps) {
        var _info$layer, _info$layer$props;

        var info = dataProps.info; // console.log('asfsadfsadfsd', map.getLayers());

        this.removeMapLayer();
        var elem = document.createElement('div'); // elem.style.background = '#fff';

        elem.id = 'popMarkersss'; //图标

        if (((_info$layer = info.layer) === null || _info$layer === void 0 ? void 0 : (_info$layer$props = _info$layer.props) === null || _info$layer$props === void 0 ? void 0 : _info$layer$props.mapType) === 'PolygonLayer') {
          this.marker = new mapboxgl__default["default"].Marker({
            element: elem,
            offset: [0, 0] //   anchor: 'bottom-left',

          }).setLngLat(info === null || info === void 0 ? void 0 : info.coordinate).addTo(map);
          PopView(dataProps, document.getElementById(elem.id));
        } else {
          var _info$object, _info$object$geometry;

          this.marker = new mapboxgl__default["default"].Marker({
            element: elem,
            offset: [0, 0] //   anchor: 'bottom-left',

          }).setLngLat(info === null || info === void 0 ? void 0 : (_info$object = info.object) === null || _info$object === void 0 ? void 0 : (_info$object$geometry = _info$object.geometry) === null || _info$object$geometry === void 0 ? void 0 : _info$object$geometry.coordinates).addTo(map);
          PopView(dataProps, document.getElementById(elem.id));
        }
      } //删除图层数据图层

    }, {
      key: "removeMapLayer",
      value: function removeMapLayer() {
        if (this.marker) {
          this.marker.remove();
          this.marker = null;
        }
      } //删除弹出框图层数据

    }, {
      key: "removePopupLayer",
      value: function removePopupLayer() {
        for (var i in this.popupArr) {
          this.popupArr[i].remove();
        }

        this.popupArr = [];
      } //控制图层显隐

    }, {
      key: "setLayerVisible",
      value: function setLayerVisible(visibility) {
        for (var i in this.markerArr) {
          if (visibility) {
            this.markerArr[i]._element.style.display = 'block';
          } else {
            this.markerArr[i]._element.style.display = 'none';
          }
        }
      } //数据过滤显示

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {
        var filters = ['all', ['==', key, number]];
        this.map.setFilter('heat', filters);
        this.map.setFilter(this.layername + '_point', filters);
      }
      /**
       *数据、样式更新
       */

    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(elem) {
        console.log('elem?.visible8888', elem);
        this.removeMapLayer();
        this.visibility = elem === null || elem === void 0 ? void 0 : elem.visible;
        this.addMapLayer(elem === null || elem === void 0 ? void 0 : elem.data);
      }
    }]);

    return Popup;
  }();

  /**
   * Copyright(C) 2018,by xskj,All rights reserved
   *
   * @date 2018年10月15日
   * @author lqq
   * @desc
   *
   */

  ({
    // projectName: '相数云', //开启外部配置
    projectName: window.projectinfo.projectName,
    //开启外部配置
    type: 1,
    //1:DoCloud 2:DoInsight  3私有化 4: DoSpace
    websocketShow: true
  });
  ({
    favicon: window.projectlogo.favicon,
    logo_water: window.projectlogo.logo_water,
    logo_water_map: window.projectlogo.logo_water_map,
    logo: window.projectlogo.logo,
    logo_login: window.projectlogo.logo_login,
    logox: window.projectlogo.logox
  }); // 本地;
  // export const logoSource = {
  //   favicon: favicon,
  //   logo_water: logo_water,
  //   logo_water_map: logo_water_map,
  //   logo: logo,
  //   logo_login: logo_login,
  //   logox: logox,
  // };

  function parseJSON(response) {
    return response.json();
  }

  var codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
  };

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    var errortext = codeMessage[response.status] || response.statusText;
    antd.notification.error({
      message: "\u8BF7\u6C42\u9519\u8BEF ".concat(response.status, ": ").concat(response.url),
      description: errortext
    });
    var error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
  }
  /**
   * Requests a URL, returning a promise.
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   * @return {object}           An object containing either "data" or "err"
   */


  function request(url, options) {
    return fetch__default["default"](url, options).then(checkStatus).then(parseJSON).then(function (data) {
      // if (!data || data?.code || !data?.data) {
      //   return false;
      // }
      switch (data && data.code) {
        case 5:
          // let msgNode = document.querySelectorAll(".ant-message");
          // if (msgNode.length) {
          //   //假如提示框节点存在，就销毁，只保留最后一次点击效果
          //   message.destroy();
          // } else {
          //   message.config({
          //     top: 60
          //   });
          //   message.error(data.message);
          // }
          antd.message.destroy();
          antd.message.error(data.message);

          {
            umi.router.push('/user/login');
          }
          // console.log('服务认证过期', url);


          return data;

        case 10:
          antd.message.destroy();
          antd.message.error(data.message);

          window.g_app._store.dispatch({
            type: 'authModel/controlAuthModalVisiablelyReducer',
            payload: true
          });

          return data;
      }

      return {
        data: data
      };
    })["catch"](function (e) {
      console.log('catch', e); // let urlParams = {
      //   url: url,
      //   params: options?.body,
      // };
      // window.g_app._store.dispatch({
      //   type: 'netWorkErrorModel/getUrlAndParamsReducer',
      //   payload: urlParams,
      // });
      // window.g_app._store.dispatch({ type: 'netWorkErrorModel/reloadReportEffect' });
      // TypeError: Failed to fetch
      // const status = e.name;
      // if (status == 'TypeError') {
      //   window.g_app._store.dispatch(routerRedux.push('/404'));
      //   return;
      // }
      // if (status === 401) {
      //   window.g_app._store.dispatch({
      //     type: 'user/login',
      //   });
      //   return;
      // }
      // if (status === 403) {
      //   window.g_app._store.dispatch(routerRedux.push('/404'));
      //   return;
      // }
      // if (status <= 504 && status >= 500) {
      //   window.g_app._store.dispatch(routerRedux.push('/404'));
      //   return;
      // }
      // if (status >= 404 && status < 422) {
      //   window.g_app._store.dispatch(routerRedux.push('/404'));
      // }
    });
  }

  /**
   * 针对时间戳和参数对象，生成签名
   * @param {时间戳} timestamp
   * @param {参数对象} params
   */
  function signature(timestamp, params) {
    var strParam = _valueToString(params);

    var ret = timestamp + strParam;
    return _md5(ret);
  }

  function _valueToString(val) {
    if (val instanceof Array) {
      var _content = '';

      for (var item in val) {
        var itemString = _valueToString(val[item]);

        _content += itemString;
      }

      return _content;
    } else if (val instanceof Object) {
      var _content2 = '';
      var sdic = Object.keys(val).sort();

      for (var key in sdic) {
        var keyValue = sdic[key] + '=' + _valueToString(val[sdic[key]]);

        _content2 += keyValue;
      }

      return _content2;
    }

    var content = val !== null && val !== void 0 ? val : '';
    return content;
  }

  function _md5(string) {
    function md5_RotateLeft(lValue, iShiftBits) {
      return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
    }

    function md5_AddUnsigned(lX, lY) {
      var lX4, lY4, lX8, lY8, lResult;
      lX8 = lX & 0x80000000;
      lY8 = lY & 0x80000000;
      lX4 = lX & 0x40000000;
      lY4 = lY & 0x40000000;
      lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);

      if (lX4 & lY4) {
        return lResult ^ 0x80000000 ^ lX8 ^ lY8;
      }

      if (lX4 | lY4) {
        if (lResult & 0x40000000) {
          return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
        } else {
          return lResult ^ 0x40000000 ^ lX8 ^ lY8;
        }
      } else {
        return lResult ^ lX8 ^ lY8;
      }
    }

    function md5_F(x, y, z) {
      return x & y | ~x & z;
    }

    function md5_G(x, y, z) {
      return x & z | y & ~z;
    }

    function md5_H(x, y, z) {
      return x ^ y ^ z;
    }

    function md5_I(x, y, z) {
      return y ^ (x | ~z);
    }

    function md5_FF(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    }

    function md5_GG(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    }

    function md5_HH(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    }

    function md5_II(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    }

    function md5_ConvertToWordArray(string) {
      var lWordCount;
      var lMessageLength = string.length;
      var lNumberOfWords_temp1 = lMessageLength + 8;
      var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
      var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
      var lWordArray = Array(lNumberOfWords - 1);
      var lBytePosition = 0;
      var lByteCount = 0;

      while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
        lByteCount++;
      }

      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
      return lWordArray;
    }

    function md5_WordToHex(lValue) {
      var WordToHexValue = '',
          WordToHexValue_temp = '',
          lByte,
          lCount;

      for (lCount = 0; lCount <= 3; lCount++) {
        lByte = lValue >>> lCount * 8 & 255;
        WordToHexValue_temp = '0' + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
      }

      return WordToHexValue;
    }

    function md5_Utf8Encode(string) {
      string = string.replace(/\r\n/g, '\n');
      var utftext = '';

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128);
        }
      }

      return utftext;
    }

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22;
    var S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20;
    var S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23;
    var S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;
    string = md5_Utf8Encode(string);
    x = md5_ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xefcdab89;
    c = 0x98badcfe;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
      AA = a;
      BB = b;
      CC = c;
      DD = d;
      a = md5_FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
      d = md5_FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
      c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070db);
      b = md5_FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
      a = md5_FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
      d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
      c = md5_FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
      b = md5_FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
      a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
      d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
      c = md5_FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
      b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
      a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
      d = md5_FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
      c = md5_FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
      b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
      a = md5_GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
      d = md5_GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
      c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
      b = md5_GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
      a = md5_GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
      d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
      c = md5_GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
      b = md5_GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
      a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
      d = md5_GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
      c = md5_GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
      b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
      a = md5_GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
      d = md5_GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
      c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
      b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
      a = md5_HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
      d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
      c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
      b = md5_HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
      a = md5_HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
      d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
      c = md5_HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
      b = md5_HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
      a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
      d = md5_HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
      c = md5_HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
      b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
      a = md5_HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
      d = md5_HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
      c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
      b = md5_HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
      a = md5_II(a, b, c, d, x[k + 0], S41, 0xf4292244);
      d = md5_II(d, a, b, c, x[k + 7], S42, 0x432aff97);
      c = md5_II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
      b = md5_II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
      a = md5_II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
      d = md5_II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
      c = md5_II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
      b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
      a = md5_II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
      d = md5_II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
      c = md5_II(c, d, a, b, x[k + 6], S43, 0xa3014314);
      b = md5_II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
      a = md5_II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
      d = md5_II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
      c = md5_II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
      b = md5_II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
      a = md5_AddUnsigned(a, AA);
      b = md5_AddUnsigned(b, BB);
      c = md5_AddUnsigned(c, CC);
      d = md5_AddUnsigned(d, DD);
    }

    return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
  }

  /**
   *
   *
   * @param  {string} path  接口路径
   * @param  {object} [params]  参数
   * @param  {string} post 请求类型
   * @return {object}   返回请求值 data or err
   */

  function networkRequest(path, params, post, workspaceFilterStatus) {
    switch (post) {
      case 'get':
        return getRequst(path, params, post, workspaceFilterStatus);

      case 'post':
        return postRequst(path, params, post, workspaceFilterStatus);

      case 'postAutoGraph':
        return postAutoGraphRequst(path, params, post, workspaceFilterStatus);

      case 'post1':
        return postgetRequst(path, params, post, workspaceFilterStatus);

      case 'postArr':
        return postArrRequst(path, params, post);

      case 'login':
        return loginRequst(path, params, post, workspaceFilterStatus);

      case 'upImage':
        return upImageRequst(path, params, post, workspaceFilterStatus);

      case 'ydPost':
        return ydPostRequst(path, params, post, workspaceFilterStatus);

      case 'downloadPost':
        return postDownloadRequst(path, params, post, workspaceFilterStatus);
    }
  }
  function getRequst(_x, _x2, _x3, _x4) {
    return _getRequst.apply(this, arguments);
  } //getpost请求

  function _getRequst() {
    _getRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path, params, post, workspaceFilterStatus) {
      var accessToken, params2;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              accessToken = localStorage.getItem('cookie');

              if (workspaceFilterStatus) {
                params2 = _objectSpread2(_objectSpread2({}, params), {}, {
                  workspaceId: localStorage.getItem('workspaceListChoose') !== '' && localStorage.getItem('workspaceListChoose') !== undefined && localStorage.getItem('workspaceListChoose') !== null ? localStorage.getItem('workspaceListChoose') : ''
                });
              } else {
                params2 = _objectSpread2({}, params);
              }

              return _context.abrupt("return", request(path + dicToString(params2), {
                method: 'get',
                headers: {
                  'Cache-Control': 'no-cache',
                  Accept: 'application/json',
                  Authorization: accessToken
                }
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getRequst.apply(this, arguments);
  }

  function postgetRequst(_x5, _x6, _x7, _x8) {
    return _postgetRequst.apply(this, arguments);
  } //登录请求

  function _postgetRequst() {
    _postgetRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path, params, post, workspaceFilterStatus) {
      var accessToken, params2;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              accessToken = localStorage.getItem('cookie');

              if (workspaceFilterStatus) {
                params2 = _objectSpread2(_objectSpread2({}, params), {}, {
                  workspaceId: localStorage.getItem('workspaceListChoose') !== '' && localStorage.getItem('workspaceListChoose') !== undefined && localStorage.getItem('workspaceListChoose') !== null ? localStorage.getItem('workspaceListChoose') : ''
                });
              } else {
                params2 = _objectSpread2({}, params);
              }

              return _context2.abrupt("return", request(path + dicToString(params2), {
                method: 'post',
                headers: {
                  'Cache-Control': 'no-cache',
                  Accept: 'application/json',
                  Authorization: accessToken
                }
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _postgetRequst.apply(this, arguments);
  }

  function loginRequst(_x9, _x10, _x11, _x12) {
    return _loginRequst.apply(this, arguments);
  } //post请求   参数为数组

  function _loginRequst() {
    _loginRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path, params, post, workspaceFilterStatus) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", request(path, {
                method: 'post',
                'Cache-Control': 'no-cache',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(params)
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _loginRequst.apply(this, arguments);
  }

  function postArrRequst(_x13, _x14, _x15) {
    return _postArrRequst.apply(this, arguments);
  } //更新图片

  function _postArrRequst() {
    _postArrRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(path, params, post) {
      var accessToken;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // let postParams = params;
              accessToken = localStorage.getItem('cookie');
              return _context4.abrupt("return", request(path, {
                method: 'post',
                // credentials: 'include',
                'Cache-Control': 'no-cache',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  Authorization: accessToken
                },
                body: JSON.stringify(params)
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _postArrRequst.apply(this, arguments);
  }

  function upImageRequst(_x16, _x17, _x18, _x19) {
    return _upImageRequst.apply(this, arguments);
  } //post请求

  function _upImageRequst() {
    _upImageRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(path, params, post, workspaceFilterStatus) {
      var accessToken;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              accessToken = localStorage.getItem('cookie');
              return _context5.abrupt("return", request(path, {
                method: 'post',
                // credentials: 'include',
                'Cache-Control': 'no-cache',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  Authorization: accessToken
                },
                body: params
              }));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _upImageRequst.apply(this, arguments);
  }

  function postRequst(_x20, _x21, _x22, _x23) {
    return _postRequst.apply(this, arguments);
  } //带有参数签名的post请求

  function _postRequst() {
    _postRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path, params, post, workspaceFilterStatus) {
      var accessToken, params2;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // let postParams = params;
              accessToken = localStorage.getItem('cookie');

              if (workspaceFilterStatus) {
                params2 = _objectSpread2(_objectSpread2({}, params), {}, {
                  workspaceId: localStorage.getItem('workspaceListChoose') !== '' && localStorage.getItem('workspaceListChoose') !== undefined && localStorage.getItem('workspaceListChoose') !== null ? localStorage.getItem('workspaceListChoose') : ''
                });
              } else {
                params2 = params;
              }

              return _context6.abrupt("return", request(path, {
                method: 'post',
                // credentials: 'include',
                'Cache-Control': 'no-cache',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  Authorization: accessToken
                },
                body: JSON.stringify(params2)
              }));

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _postRequst.apply(this, arguments);
  }

  function postAutoGraphRequst(_x24, _x25, _x26, _x27) {
    return _postAutoGraphRequst.apply(this, arguments);
  } //post请求   参数为数组

  function _postAutoGraphRequst() {
    _postAutoGraphRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(path, params, post, workspaceFilterStatus) {
      var accessToken, params2, date;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              accessToken = localStorage.getItem('cookie');

              if (workspaceFilterStatus) {
                params2 = _objectSpread2(_objectSpread2({}, params), {}, {
                  workspaceId: localStorage.getItem('workspaceListChoose') !== '' && localStorage.getItem('workspaceListChoose') !== undefined && localStorage.getItem('workspaceListChoose') !== null ? localStorage.getItem('workspaceListChoose') : ''
                });
              } else {
                params2 = params;
              }

              date = new Date().getTime();
              return _context7.abrupt("return", request(path, {
                method: 'post',
                'Cache-Control': 'no-cache',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  Authorization: accessToken,
                  timestamp: date,
                  signature: signature(date, JSON.parse(JSON.stringify(params2)))
                },
                body: JSON.stringify(params2)
              }));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _postAutoGraphRequst.apply(this, arguments);
  }

  function ydPostRequst(_x28, _x29, _x30) {
    return _ydPostRequst.apply(this, arguments);
  }

  function _ydPostRequst() {
    _ydPostRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(path, params, post) {
      var accessToken;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // let postParams = params;
              accessToken = localStorage.getItem('ydtoken');
              return _context8.abrupt("return", request(path, {
                method: 'post',
                // credentials: 'include',
                'Cache-Control': 'no-cache',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  Authorization: accessToken
                },
                body: JSON.stringify(params)
              }));

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _ydPostRequst.apply(this, arguments);
  }

  function dicToString(params) {
    if (!params) {
      return '';
    }

    if (params instanceof Array) {
      return '';
    }

    var gerParam = '';

    for (var variable in params) {
      if (params.hasOwnProperty(variable)) {
        gerParam = gerParam + '&' + variable + '=' + params[variable];
      }
    }

    gerParam = gerParam.substring(1);
    return gerParam;
  } // 数据下载post

  function postDownloadRequst(_x31, _x32, _x33, _x34) {
    return _postDownloadRequst.apply(this, arguments);
  }

  function _postDownloadRequst() {
    _postDownloadRequst = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(path, params, post, workspaceFilterStatus) {
      var accessToken, params2;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              // let postParams = params;
              accessToken = localStorage.getItem('cookie');

              if (workspaceFilterStatus) {
                params2 = _objectSpread2(_objectSpread2({}, params), {}, {
                  workspaceId: localStorage.getItem('workspaceListChoose') !== '' && localStorage.getItem('workspaceListChoose') !== undefined && localStorage.getItem('workspaceListChoose') !== null ? localStorage.getItem('workspaceListChoose') : ''
                });
              } else {
                params2 = params;
              }

              return _context9.abrupt("return", fetch__default["default"](path, {
                method: 'post',
                'Cache-Control': 'no-cache',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  Authorization: accessToken
                },
                body: JSON.stringify(params2)
              }).then(function (res) {
                return res.blob().then(function (blob) {
                  var a = document.createElement('a');
                  var url = window.URL.createObjectURL(blob);
                  var filename = (params === null || params === void 0 ? void 0 : params.fileName) + '.' + (params === null || params === void 0 ? void 0 : params.type);
                  a.href = url;
                  a.download = filename;
                  a.click();
                  window.URL.revokeObjectURL(url);
                });
              }));

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return _postDownloadRequst.apply(this, arguments);
  }

  var configPath$1 = {
    //创建map
    createMapPath: IPConfig.projectServiceDomain + '/dataeye/v1/daslayer/create',
    //get
    //更新map
    updateMapPath: IPConfig.projectServiceDomain + '/dataeye/v1/daslayer/update',
    //get
    //获取某daslayer
    getMapPath: IPConfig.projectServiceDomain + '/dataeye/v1/daslayer/get?',
    //get
    //获取过滤地图数据
    getMapDataPath: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search_signature_filter',
    //获取某字段所有值
    getFeildValuesPath: IPConfig.projectServiceDomain + '/dataeye/v1/data/filter/sql',
    //获取地图风格样式
    mapStylePath: IPConfig.projectServiceDomain + '/dataeye/v1/map/list?',
    //获取公共数据
    mapPublickData: IPConfig.projectServiceDomain,
    //获取id对应的地图详情
    mapStyleMessagePath: IPConfig.projectServiceDomain + '/dataeye/v1/map/get?',
    //获取公共数据非POI类型的表头
    mapDataTabTitlePath: IPConfig.userServiceDomain + '/data/v1/find_properties?',
    //获取公共数据的过滤数据(上线后删掉)
    getMapPublickDataPath: IPConfig.datafusionServiceDomain + '/datafusion/common/v1/search_space_common?',
    //获取分享对应的图层数据
    //   getShareIdPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/daslayer/getbyshareurl?',
    getShareIdPath: IPConfig.datafusionServiceDomain + '/dataeye/v2/daslayer/getbyshareurl?',
    //获取地址编码对应的面图层的数据
    getSpaceTypeDataPath: IPConfig.datafusionServiceDomain + '/hubble/administrative_region/v/find_administrative_region?',
    //增加对应图层得关联图层
    addDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/add?',
    //更新关联图层
    upDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/update?',
    //删除关联图层
    deleteDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/delete?',
    //查询对应得关联图层得详情
    getDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/read?',
    //获取基础图层所有关联图层
    getAllDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/list?',
    //新增服务2021-7.23
    //获取所有图层
    getAllMapLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/daslayer/full_detail?',
    //新增关联图层
    create_das_link_layer_style_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/create',
    //post
    //更新关联图层
    update_das_link_layer_style_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/update',
    //post
    //删除关联图层
    remove_das_link_layer_style_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/remove?',
    //get
    //复制关联图层
    copy_daslayer_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/daslayer/copy_as_style?',
    //get
    //复制关联图层组
    copy_das_link_layer_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/copy_as_style?',
    //get
    //复制关联图层
    copy_das_link_layer_style_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/copy?',
    //get
    //移除关联图层
    getdetail_das_link_layer_style_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/list_by_link_layer_id?',
    //get
    //读取相关图层
    read_das_link_layer_style_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/read?',
    //批次更新图层样式z轴序
    updateOrderLayerServicePath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/batch_update_order',
    // 获取飞行镜头列表
    select_list_by_layer_id_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/list_by_layer_id?',
    // 查询图层飞行相机组
    select_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/read?',
    //新建图层飞行相机组
    create_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/create',
    //删除图层飞行相机组
    remove_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/remove?',
    //创建飞行镜头帧
    create_das_camera_frame_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_frame/create',
    // 创建中心点飞行镜头帧
    create_das_camera_center_frame_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_center_frame/create',
    // 删除镜头帧
    remove_das_camera_frame_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_frame/remove?',
    // 删除中心点镜头帧
    remove_das_camera_center_frame_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_center_frame/remove?',
    // 修改飞行相机组
    update_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/update',
    // 修改镜头帧
    update_das_camera_frame_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_frame/update',
    // 修改中心点
    update_das_camera_center_frame_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_center_frame/update',
    // 新增图层交互
    add_layer_interactionPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/create',
    //post
    //更新图层交互
    update_layer_interactionPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/update',
    //post
    //获取图层交互详情
    get_layer_interactionPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/read?',
    //get
    //删除图层交互配置
    delete_layer_interactionPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/remove?',
    //get
    //获取指定图层交互列表
    list_layer_interactionPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/list?',
    //get
    //获取指定图层默认交互
    default_layer_interactionPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/default?',
    //get
    // 删除图层组的关联图层样式
    delLinkStylesPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/remove_by_link_layer_id?' //get

  };

  function getTableFieldService(params) {
    return networkRequest(configPath$1.mapDataTabTitlePath, params, 'get');
  } //创建图层

  function createMapService(params, workspaceFilterStatus) {
    return networkRequest(configPath$1.createMapPath, params, 'post', workspaceFilterStatus);
  } //更新图层

  function updateMapService(params) {
    return networkRequest(configPath$1.updateMapPath, params, 'post');
  } //获取图层

  function getMapService(params) {
    return networkRequest(configPath$1.getMapPath, params, 'get');
  } //获取过滤地图数据

  function getMapDataService(params) {
    return networkRequest(configPath$1.getMapDataPath, params, 'postAutoGraph');
  } //获取某字段所有值

  function getMapDataTabTitleServer(params) {
    return networkRequest(configPath$1.mapDataTabTitlePath, params, 'get');
  } //获取公共数据过滤地图数据(上线删除掉)

  function getShareIdService(params) {
    return networkRequest(configPath$1.getShareIdPath, params, 'get');
  } //获取地区编码对应的面数据

  function getSpaceTypeDataService(params) {
    return networkRequest(configPath$1.getSpaceTypeDataPath, params, 'post');
  } //增加对应图层得关联图层

  function addDasLinkLayerService(params, workspaceFilterStatus) {
    return networkRequest(configPath$1.addDasLinkLayerPath, params, 'post', workspaceFilterStatus);
  } //更新关联图层

  function upDasLinkLayerService(params) {
    return networkRequest(configPath$1.upDasLinkLayerPath, params, 'post');
  } //删除关联图层

  function deleteDasLinkLayerService(params) {
    return networkRequest(configPath$1.deleteDasLinkLayerPath, params, 'get');
  } //查询对应得关联图层得详情

  function getAllDasLinkLayerService(params) {
    return networkRequest(configPath$1.getAllDasLinkLayerPath, params, 'get');
  } //获取所有图层

  function getAllMapLayerService(params) {
    return networkRequest(configPath$1.getAllMapLayerPath, params, 'get');
  } //新增关联图层

  function create_das_link_layer_style_service(params, workspaceFilterStatus) {
    return networkRequest(configPath$1.create_das_link_layer_style_path, params, 'post', workspaceFilterStatus);
  } //更新关联图层

  function update_das_link_layer_style_service(params) {
    return networkRequest(configPath$1.update_das_link_layer_style_path, params, 'post');
  } //删除关联图层样式风格

  function remove_das_link_layer_style_service(params) {
    return networkRequest(configPath$1.remove_das_link_layer_style_path, params, 'get');
  } // 复制图层组自身样式风格

  function copy_daslayer_service(params) {
    return networkRequest(configPath$1.copy_daslayer_path, params, 'get');
  } //复制关联图层自身样式风格

  function copy_das_link_layer_service(params) {
    return networkRequest(configPath$1.copy_das_link_layer_path, params, 'get');
  } //复制关联图层样式风格

  function copy_das_link_layer_style_service(params) {
    return networkRequest(configPath$1.copy_das_link_layer_style_path, params, 'get');
  } //批次更新图层样式z轴序

  function updateOrderLayerService(params) {
    return networkRequest(configPath$1.updateOrderLayerServicePath, params, 'post');
  } //获取飞行镜头列表

  function select_list_by_layer_id_Service(params) {
    return networkRequest(configPath$1.select_list_by_layer_id_Path, params, 'get');
  } //获取图层飞行相机组

  function select_das_camera_Service(params) {
    return networkRequest(configPath$1.select_das_camera_Path, params, 'get');
  } //新建图层飞行相机组

  function create_das_camera_Service(params, workspaceFilterStatus) {
    return networkRequest(configPath$1.create_das_camera_Path, params, 'post', workspaceFilterStatus);
  } //删除图层飞行相机组

  function remove_das_camera_Service(params) {
    return networkRequest(configPath$1.remove_das_camera_Path, params, 'get');
  } // 创建飞行镜头帧

  function create_das_camera_frame_Service(params) {
    return networkRequest(configPath$1.create_das_camera_frame_Path, params, 'post');
  } // 创建中心点飞行镜头帧

  function create_das_camera_center_frame_Service(params) {
    return networkRequest(configPath$1.create_das_camera_center_frame_Path, params, 'post');
  } //删除镜头帧

  function remove_das_camera_frame_Service(params) {
    return networkRequest(configPath$1.remove_das_camera_frame_Path, params, 'get');
  } //删除中心点镜头帧

  function remove_das_camera_center_frame_Service(params) {
    return networkRequest(configPath$1.remove_das_camera_center_frame_Path, params, 'get');
  } // 修改飞行相机组

  function update_das_camera_Service(params) {
    return networkRequest(configPath$1.update_das_camera_Path, params, 'post');
  } // 修改镜头帧

  function update_das_camera_frame_Service(params) {
    return networkRequest(configPath$1.update_das_camera_frame_Path, params, 'post');
  } // 修改中心点镜头帧

  function update_das_camera_center_frame_Service(params) {
    return networkRequest(configPath$1.update_das_camera_center_frame_Path, params, 'post');
  } //新建图层交互

  function delLinkStylesService(params) {
    return networkRequest(configPath$1.delLinkStylesPath, params, 'get');
  }

  var configPath = {
    /** ----------------------------------- 分组相关 ----------------------------------- **/
    // 检查同名分组 get
    checkGroupPath: IPConfig.projectServiceDomain + '/dataeye/v1/das_component_group/check_same_name?',
    //get
    // 创建图表分组 get
    createGroupPath: IPConfig.projectServiceDomain + '/dataeye/v1/das_component_group/create?',
    //get
    // 获取分组信息 get
    getGroupByIdPath: IPConfig.projectServiceDomain + '/dataeye/v1/das_component_group/read?',
    //get
    // 更新分组名称 get
    updateGroupByIdPath: IPConfig.projectServiceDomain + '/dataeye/v1/das_component_group/update?',
    //get
    // 删除指定分组 get
    deleteGroupByIdPath: IPConfig.projectServiceDomain + '/dataeye/v1/das_component_group/delete?',
    //get
    // 获取分组列表 get
    getGroupListPath: IPConfig.projectServiceDomain + '/dataeye/v1/das_component_group/list?',
    //get
    // 获取图片文件
    getImgByIdPath: IPConfig.projectServiceDomain + '/dataeye/v1/data/image/get?' //get

  };

  /**
   * @method rgbToColorArr
   * @params {color} 字符串
   * 将传入的"rgb(34,30,30)"转换 [34,30,30,255]格式
   */

  function rgbToColorArr(colors) {
    if (!colors) {
      return [255, 140, 0, 255];
    }

    var color = colors;

    if (color.indexOf('rgba') > -1) {
      color = color.replace('rgba', '');
      color = color.replace('(', '');
      color = color.replace(')', '');
      color = color.split(',');
      return [Number(color[0]), Number(color[1]), Number(color[2]), parseInt(255 * Number(color[3]))];
    } else {
      color = color.replace('rgb', '');
      color = color.replace('(', '');
      color = color.replace(')', '');
      color = color.split(',');
      return [Number(color[0]), Number(color[1]), Number(color[2]), 255];
    }
  }
  /**
   * @method sortAB
   * @params {array} 数组
   * 正序排序
   */
  // function sortAB(array) {
  //   return array.sort((a, b) => {
  //     return Number(a) - Number(b);
  //   });
  // }

  /**
   * @method unique
   * @params {arr} 数组
   * 去重
   */
  // function unique(arr) {
  //   //Set数据结构，它类似于数组，其成员的值都是唯一的
  //   return Array.from(new Set(arr)); // 利用Array.from将Set结构转换成数组
  // }

  /**
   * @method getFeildArray
   * @params {geojson}
   * @params {feild}
   * @params {isToFixed}
   * 获取字段存入数组 这里有三种情况 数字  字符串数组 字符串
   */

  function getFeildArray(geojson) {
    var feild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var isToFixed = arguments.length > 2 ? arguments[2] : undefined;
    // let weightArr = [];
    // for (let i in geojson) {
    //   const properties = geojson[i].properties;
    //   let item = properties[feild];
    //   let numberItem = Number(item);
    //   //非数字判断
    //   if (isNaN(numberItem) || !isToFixed) {
    //     item = isNaN(numberItem) ? item : numberItem;
    //     weightArr.push(item);
    //   } else {
    //     weightArr.push(numberItem);
    //   }
    // }
    // weightArr = unique(weightArr);
    // weightArr = sortAB(weightArr);
    // return weightArr;
    // 旧方法
    var weightArr = [];

    for (var i in geojson) {
      var properties = geojson[i].properties;
      var keys = feild;
      var item = properties[keys];
      var numberitem = Number(item);

      if (isNaN(numberitem) || !isToFixed) {
        item = isNaN(numberitem) ? item : numberitem;

        if (weightArr.indexOf(item) < 0) {
          weightArr.push(item);
        }
      } else {
        if (weightArr.indexOf(numberitem.toFixed(3)) < 0) {
          weightArr.push(numberitem.toFixed(3));
        }
      }
    }

    for (var j = 0; j < weightArr.length - 1; j++) {
      for (var _i = 0; _i < weightArr.length - j; _i++) {
        if (weightArr[_i] > weightArr[_i + 1]) {
          var num = weightArr[_i];
          weightArr[_i] = weightArr[_i + 1];
          weightArr[_i + 1] = num;
        }
      }
    }

    return weightArr;
  }
  /**
   * @method layerScaleOrdinal_x
   * @params {color}  颜色属性
   * @params {geojson}  geosin格式数据
   * 用指定的域和范围构造一个新的有序标度。
   */

  function colorLayerScaleOrdinal_Quantile(color, geojson) {
    var layerScaleOrdinal_Quantile = null;
    var colorArray = color === null || color === void 0 ? void 0 : color.colorArray;
    var antitone = color === null || color === void 0 ? void 0 : color.antitone;
    var newColorArray = JSON.parse(JSON.stringify(colorArray));
    var feildArray = getFeildArray(geojson, color === null || color === void 0 ? void 0 : color.feild, true);
    newColorArray = newColorArray.reverse();
    var useColorArray = antitone ? newColorArray : colorArray; //非数组

    if (isNaN(Number(feildArray[feildArray.length - 1]))) {
      layerScaleOrdinal_Quantile = layerScaleOrdinal(feildArray, useColorArray);
    } else {
      layerScaleOrdinal_Quantile = layerScaleQuantile(feildArray, useColorArray);
    }

    return layerScaleOrdinal_Quantile;
  }
  /**
   * @method sizeLayerScalePoint
   * @params {size}  大小属性
   * @params {geojson}  geosin格式数据
   * 构造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。
   */

  function sizeLayerScalePoint(size, geojson) {
    var sizeMinPixels = size.sizeMinPixels || 0;
    var sizeMaxPixels = size.sizeMaxPixels || 100;
    var feildArray = getFeildArray(geojson, size === null || size === void 0 ? void 0 : size.feild);
    return layerScalePoint(feildArray, [sizeMinPixels, sizeMaxPixels]);
  }
  /**
   * @method getSourceColor
   * @params {d}  每一条数据 object
   * @params {layerTypeStr}  图层类型 string
   * @params {mapStyle}  图层属性字段 object
   * @params {geojson}  geosin格式数据
   * @params {sectionColor}  颜色自定义分段
   * 用指定的域和范围构造一个新的有序标度，并用指定颜色域颜色显示对应数据。（起点处颜色）
   */

  function getSourceColor(d, layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal) {
    var commonSection = commonSectionColor(sectionColor);
    var sectionNumber = commonSection === null || commonSection === void 0 ? void 0 : commonSection.SectionNumber;
    var sectionColorArr = commonSection === null || commonSection === void 0 ? void 0 : commonSection.sectionColorArr;
    var colorArray = mapStyle.color.colorArray;
    var newColorArray = JSON.parse(JSON.stringify(colorArray));
    newColorArray = newColorArray.reverse();
    var antitone = mapStyle.color.antitone;
    var colorType = mapStyle.color.type; // console.log('askgfjasdhgfa', layerTypeStr, colorType, sectionColor);

    if (colorType === 1) {
      var color;

      if (layerTypeStr === 'ARCLayer' || layerTypeStr === 'ODLayer') {
        color = mapStyle.color.Ocolor;
      } else {
        color = mapStyle.color.color;
      }

      return rgbToColorArr(color);
    } else {
      var feild = mapStyle.color.feild;
      var val = d.properties[feild];

      if (sectionColor.type === 1) {
        var _mapStyle$color;

        // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
        if ((mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$color = mapStyle.color) === null || _mapStyle$color === void 0 ? void 0 : _mapStyle$color.type) === 2) {
          if (scaleOrdinal) {
            var _color = scaleOrdinal(val);

            return rgbToColorArr(_color);
          }
        }

        return [255, 140, 0, 255];
      } else if (sectionColor.type === 2) {
        var activeColor = null;

        for (var i in sectionNumber) {
          if (val < sectionNumber[i]) {
            var _sectionColorArr$i;

            activeColor = !((_sectionColorArr$i = sectionColorArr[i]) !== null && _sectionColorArr$i !== void 0 && _sectionColorArr$i.toString()) ? antitone ? newColorArray[i] : colorArray[i] : sectionColorArr[i];
            break;
          }
        }

        if (!activeColor) {
          var _sectionColorArr$slic;

          activeColor = !((_sectionColorArr$slic = sectionColorArr.slice(-1)) !== null && _sectionColorArr$slic !== void 0 && _sectionColorArr$slic.toString()) ? antitone ? newColorArray.slice(-1) : colorArray.slice(-1) : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);

          activeColor = activeColor.toString();
        }

        return rgbToColorArr(activeColor);
      }
    }
  }
  /**
   * @method getTargetColor
   * @params {d}  每一条数据 object
   * @params {layerTypeStr}  图层类型 string
   * @params {mapStyle}  图层属性字段 object
   * @params {geojson}  geosin格式数据
   * @params {sectionColor}  颜色自定义分段
   * 用指定的域和范围构造一个新的有序标度，并用指定颜色域颜色显示对应数据。（终点颜色）
   */

  function getTargetColor(d, layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal) {
    var commonSection = commonSectionColor(sectionColor);
    var sectionNumber = commonSection === null || commonSection === void 0 ? void 0 : commonSection.SectionNumber;
    var sectionColorArr = commonSection === null || commonSection === void 0 ? void 0 : commonSection.sectionColorArr;
    var colorArray = mapStyle.color.colorArray;
    var newColorArray = JSON.parse(JSON.stringify(colorArray));
    newColorArray = newColorArray.reverse();
    var antitone = mapStyle.color.antitone;
    var colorType = mapStyle.color.type;

    if (colorType === 1) {
      var color;

      if (layerTypeStr === 'ARCLayer' || layerTypeStr === 'ODLayer') {
        color = mapStyle.color.Dcolor;
      } else {
        color = mapStyle.color.color;
      }

      return rgbToColorArr(color);
    } else {
      var feild = mapStyle.color.feild;
      var val = d.properties[feild];

      if (sectionColor.type === 1) {
        var _mapStyle$color2;

        // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);
        if ((mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$color2 = mapStyle.color) === null || _mapStyle$color2 === void 0 ? void 0 : _mapStyle$color2.type) === 2) {
          if (scaleOrdinal) {
            var _color2 = scaleOrdinal(val);

            return rgbToColorArr(_color2);
          } // scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);

        }

        return [255, 140, 0, 255];
      } else if (sectionColor.type === 2) {
        var activeColor = null;

        for (var i in sectionNumber) {
          if (val < sectionNumber[i]) {
            var _sectionColorArr$i2;

            activeColor = !((_sectionColorArr$i2 = sectionColorArr[i]) !== null && _sectionColorArr$i2 !== void 0 && _sectionColorArr$i2.toString()) ? antitone ? newColorArray[i] : colorArray[i] : sectionColorArr[i];
            break;
          }
        }

        if (!activeColor) {
          var _sectionColorArr$slic2;

          activeColor = !((_sectionColorArr$slic2 = sectionColorArr.slice(-1)) !== null && _sectionColorArr$slic2 !== void 0 && _sectionColorArr$slic2.toString()) ? antitone ? newColorArray.slice(-1) : colorArray.slice(-1) : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);

          activeColor = activeColor.toString();
        }

        return rgbToColorArr(activeColor);
      }
    }
  }
  /**
   * @method getColor
   * @params {d}  每一条数据 object
   * @params {geojson}  图层数据 array
   * @params {mapStyle}  图层属性字段 object
   * 用指定的域和范围构造一个新的有序标度，并用指定颜色域颜色显示对应数据。
   */

  function getColor(d, mapStyle, geojson, scaleOrdinal) {
    var colorType = mapStyle.color.type; // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle?.color, geojson);

    if (colorType === 1) {
      var color = mapStyle.color.Ocolor;
      return rgbToColorArr(color);
    } else {
      var feild = mapStyle.color.feild;
      var val = d.properties[feild];

      if (scaleOrdinal) {
        var _color3 = scaleOrdinal(val);

        return rgbToColorArr(_color3);
      }

      return [255, 140, 0, 255];
    }
  }
  /**
   * @method getWidth
   * @params {mapStyleType}  图层类型 string
   * @params {radiusType}  半径类型 number
   * @params {mapStyle}  图层属性字段 object
   * @params {d}  每一条数据 object
   * @params {geojson}  图层数据 array
   * 用于设置宽度（线宽、边宽之类）
   */

  function getWidth(mapStyleType, radiusType, mapStyle, d, geojson, scalePoint) {
    var feild = null;

    if (radiusType === 1) {
      if (mapStyleType === 'LineLayer') {
        return mapStyle.radius.radiusScale;
      } else if (mapStyleType === 'ARCLayer') {
        return mapStyle.line.radiusScale;
      } else if (mapStyleType === 'RegionLayer') {
        return mapStyle.line.lineWidthScale;
      } else {
        return mapStyle.line.radiusScale;
      }
    } else if (radiusType === 2) {
      // let scalePoint = layerScaleOrdinal_y(mapStyle, mapStyleType, geojson);
      if (mapStyleType === 'RegionLayer' || mapStyleType === 'ARCLayer' || mapStyleType === 'ODLayer') {
        feild = mapStyle.line.feild;
      } else if (mapStyleType === 'LineLayer') {
        feild = mapStyle.radius.feild;
      }

      var val = d.properties[feild];
      var radius = scalePoint(val) || 0.1;
      return Number(radius);
    }
  }
  /**
   * @method visible
   * @params {layerCon} object
   * 设置图层显隐
   */

  function visible(layerCon) {
    console.log('asdfasdf234asdfasd', layerCon);

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably) === 2) {
      if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
        if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility) === 2) {
          return true;
        } else {
          return false;
        }
      } else {
        if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility) === 2) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    } // if (layerCon?.level === 2) {
    //   if (layerCon?.visibility === 2) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   if (!layerCon?.level) {
    //     if (layerCon?.visibility === 2) {
    //       if (layerCon?.layerVisibility === 2) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     } else {
    //       return false;
    //     }
    //   }
    // }

  }
  /**
   * @method arrayData
   * @params {geojson} 图层数据 array
   * @params {mapStyleType} 图层类型 string
   * 用于处理线（pathLayer）和面图层数据格式
   */

  function arrayData(geojson, mapStyleType) {
    var arrayData = [];

    for (var i = 0; i < (geojson === null || geojson === void 0 ? void 0 : geojson.length); i++) {
      var geoData = geojson[i].geometry;

      if (geoData.type === 'MultiPolygon') {
        if (mapStyleType === 'LineLayer') {
          for (var j in geoData.coordinates) {
            arrayData.push(_objectSpread2(_objectSpread2({}, geojson[i]), {}, {
              lonlat: geoData.coordinates[j][0]
            }));
          }
        } else if (mapStyleType === 'RegionLayer') {
          for (var _j in geoData.coordinates) {
            arrayData.push(_objectSpread2(_objectSpread2({}, geojson[i]), {}, {
              lonlat: geoData.coordinates[_j]
            }));
          }
        }
      } else {
        arrayData.push(_objectSpread2(_objectSpread2({}, geojson[i]), {}, {
          lonlat: geoData.coordinates[0]
        }));
      }
    }

    return arrayData;
  }
  /**
   * @method colorRange
   * @params {mapStyle} 图层属性 object
   * 用于处理颜色数组格式与颜色反序
   */

  function colorRange(mapStyle) {
    var _mapStyle$color5;

    var colors = mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$color5 = mapStyle.color) === null || _mapStyle$color5 === void 0 ? void 0 : _mapStyle$color5.color;
    var newColors = [];

    if (!colors) {
      return;
    }

    var antitone = mapStyle.color.antitone;

    for (var i = 0; i < colors.length; i++) {
      var color = colors[i];
      newColors.push(rgbToColorArr(color));
    }

    var newColorArray = JSON.parse(JSON.stringify(newColors));
    newColorArray = newColorArray.reverse();

    if (antitone) {
      return newColorArray;
    } else {
      return newColors;
    }
  }
  /**
   * @method getElevation
   * @params {mapStyle} 图层属性 object
   * @params {layerTypeStr} 图层类型 string
   * @params {d} 每一条数据 object
   * @params {geojson} 图层数据 array
   * 用于拉伸每个多边形的高程。如果使用地图投影模式，高度将被解释为米，否则将以单位坐标表示。
   */

  function getElevation(mapStyle, layerTypeStr, d, geojson, scalePoint_z) {
    var heightType = mapStyle.height.type; // let scalePoint_z = null;

    if (heightType === 1) {
      return mapStyle.height.heightScale * 5000;
    } else if (heightType === 2) {
      // scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerTypeStr);
      var feild = mapStyle.height.feild;
      var val = d.properties[feild];
      var radius = scalePoint_z(val);
      return radius * 17;
    }
  }
  /**
   * @method commonSectionColor
   * @params {Section} 自定义分段属性 object
   * 用于处理图层自定义分段函数
   */

  function commonSectionColor(Section) {
    var sectionColor = Section;
    var sectionNumber = [];
    var sectionColorArr = [];

    if (sectionColor.type === 2) {
      var colorSectionArr = sectionColor.colorSectionArr;

      for (var i in colorSectionArr) {
        sectionNumber.push(colorSectionArr[i].number);
      }

      sectionNumber.sort(function (val1, val2) {
        return val1 - val2;
      });

      for (var _i2 in sectionNumber) {
        for (var j in colorSectionArr) {
          if (sectionNumber[_i2] === colorSectionArr[j].number) {
            sectionColorArr.push(colorSectionArr[j].color);
            break;
          }
        }
      }
    }

    return {
      SectionNumber: sectionNumber,
      sectionColorArr: sectionColorArr
    };
  }
  /**
   * @method getFillColor
   * @params {d} 每一条数据 object
   * @params {Section} 自定义分段属性 object
   * @params {color} 颜色对象属性 object
   * @params {geojson} 数据 array
   * 多边形和点特征的纯色。格式为r, g, b， [a]。每个组件都在0-255范围内。
   */

  function getFillColor(d, Section, color, geojson, scaleOrdinal) {
    //颜色类型
    var colorType = color === null || color === void 0 ? void 0 : color.type; // 自定义分组颜色

    var sectionColor = Section === null || Section === void 0 ? void 0 : Section.color; // 是否反序

    var antitone = color === null || color === void 0 ? void 0 : color.antitone;
    var colorArray = color === null || color === void 0 ? void 0 : color.colorArray;
    var newColorArray = JSON.parse(JSON.stringify(colorArray));
    newColorArray = newColorArray.reverse();
    var commonSection = commonSectionColor(sectionColor); // let scaleOrdinal = colorLayerScaleOrdinal_Quantile(color, geojson);

    var sectionNumber = commonSection === null || commonSection === void 0 ? void 0 : commonSection.SectionNumber;
    var sectionColorArr = commonSection === null || commonSection === void 0 ? void 0 : commonSection.sectionColorArr;

    if (colorType === 1) {
      var colorNew = color === null || color === void 0 ? void 0 : color.color;
      return rgbToColorArr(colorNew);
    } else {
      var feild = color === null || color === void 0 ? void 0 : color.feild;
      var val = d.properties[feild];

      if (sectionColor.type === 1) {
        if (scaleOrdinal) {
          var _colorNew = scaleOrdinal(val);

          return rgbToColorArr(_colorNew);
        }

        return [255, 140, 0, 255];
      } else if (sectionColor.type === 2) {
        var activeColor = null;

        for (var i in sectionNumber) {
          if (val < sectionNumber[i]) {
            var _sectionColorArr$i3;

            activeColor = !((_sectionColorArr$i3 = sectionColorArr[i]) !== null && _sectionColorArr$i3 !== void 0 && _sectionColorArr$i3.toString()) ? antitone ? newColorArray[i] : colorArray[i] : sectionColorArr[i];
            break;
          }
        }

        if (!activeColor) {
          var _sectionColorArr$slic3;

          activeColor = !((_sectionColorArr$slic3 = sectionColorArr.slice(-1)) !== null && _sectionColorArr$slic3 !== void 0 && _sectionColorArr$slic3.toString()) ? antitone ? newColorArray.slice(-1) : colorArray.slice(-1) : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);

          activeColor = activeColor.toString();
        }

        return rgbToColorArr(activeColor);
      } else if (sectionColor.type === 3) {
        var _colorNew2 = color === null || color === void 0 ? void 0 : color.color;

        return rgbToColorArr(_colorNew2);
      }
    }
  }
  /**
   * @method layerScaleOrdinal_y
   * @params {mapStyle}  图层属性
   * @params {layerTypeStr}  图层类型
   * @params {dataSource}  geosin格式数据
   * 造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。
   */

  function layerScaleOrdinal_y(mapStyle, layerTypeStr, dataSource) {
    var _mapStyle$line, _mapStyle$line2, _mapStyle$radius, _mapStyle$radius2, _mapStyle$line3;

    var scalePoint = null;

    if ((mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line = mapStyle.line) === null || _mapStyle$line === void 0 ? void 0 : _mapStyle$line.type) === 2 && layerTypeStr === 'ARCLayer' || (mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line2 = mapStyle.line) === null || _mapStyle$line2 === void 0 ? void 0 : _mapStyle$line2.type) === 2 && layerTypeStr === 'ODLayer') {
      var radiusMinPixels = mapStyle.line.radiusMinPixels;
      var radiusMaxPixels = mapStyle.line.radiusMaxPixels;
      var radiusWidth = getFeildArray(dataSource, mapStyle.line.feild);
      scalePoint = layerScalePoint(radiusWidth, [radiusMinPixels, radiusMaxPixels]);
    }

    if ((mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$radius = mapStyle.radius) === null || _mapStyle$radius === void 0 ? void 0 : _mapStyle$radius.type) === 2 && layerTypeStr === 'ScatterLayer' || (mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$radius2 = mapStyle.radius) === null || _mapStyle$radius2 === void 0 ? void 0 : _mapStyle$radius2.type) === 2 && layerTypeStr === 'LineLayer') {
      var _mapStyle$radius3, _mapStyle$radius4;

      // 最小半径（以像素为单位）。
      var _radiusMinPixels = mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$radius3 = mapStyle.radius) === null || _mapStyle$radius3 === void 0 ? void 0 : _mapStyle$radius3.radiusMinPixels; // 最大半径（以像素为单位）。


      var _radiusMaxPixels = mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$radius4 = mapStyle.radius) === null || _mapStyle$radius4 === void 0 ? void 0 : _mapStyle$radius4.radiusMaxPixels; // 半径宽度


      var _radiusWidth = getFeildArray(dataSource, mapStyle.radius.feild);

      var arr = [_radiusMinPixels, _radiusMaxPixels * 6];
      scalePoint = layerScalePoint(_radiusWidth, arr);
    }

    if ((mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line3 = mapStyle.line) === null || _mapStyle$line3 === void 0 ? void 0 : _mapStyle$line3.type) === 2 && layerTypeStr === 'RegionLayer') {
      var _radiusMinPixels2 = mapStyle.line.lineWidthMinPixels;
      var _radiusMaxPixels2 = mapStyle.line.lineWidthMaxPixels;

      var _radiusWidth2 = getFeildArray(dataSource, mapStyle.line.feild);

      scalePoint = layerScalePoint(_radiusWidth2, [_radiusMinPixels2, _radiusMaxPixels2 * 10]);
    }

    return scalePoint;
  }
  /**
   * @method layerScaleOrdinal_z
   * @params {mapStyle}  图层属性
   * @params {layerTypeStr}  图层类型
   * @params {geojson}  geosin格式数据
   * 造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。（高度）
   */

  function layerScaleOrdinal_z(mapStyle, geojson, layerTypeStr) {
    var scalePoint_z;

    if (layerTypeStr === 'RegionLayer') {
      if (mapStyle.height.type === 2) {
        //根据高度字段的数据类型进行楼层高的计算
        var radiusMinPixels = mapStyle.height.heightMinPixels;
        var radiusMaxPixels = mapStyle.height.heightMaxPixels;
        var heightWidth = getFeildArray(geojson, mapStyle.height.feild);
        scalePoint_z = layerScalePoint(heightWidth, [radiusMinPixels, radiusMaxPixels * 10]);
      }
    } else if (layerTypeStr === 'IconLayer') {
      if (mapStyle.size.type === 3) {
        var heightMinPixels = mapStyle.anchorHeight.heightMinPixels;
        var heightMaxPixels = mapStyle.anchorHeight.heightMaxPixels;
        var anchorHeight = getFeildArray(geojson, mapStyle.anchorHeight.feild);
        var arr = [heightMinPixels, heightMaxPixels];
        scalePoint_z = layerScalePoint(anchorHeight, arr);
      }
    }

    return scalePoint_z;
  }
  /**
   * @method dataCollation_trips
   * @params {trips} 属性对象 object
   * @params {dataSource} 数据 array
   * 处理传入的数据(tripsLayer)
   */

  function dataCollation_trips(dataSource, trips) {
    var data = dataSource;
    var arr = [];
    var idArr = [];
    var timeArr = []; // for (let i in data) {
    //   let indexLength = idArr.indexOf(data[i].properties[trips.feild]);
    //   let time = new Date(data[i].properties['field_dtg']).getTime() / 1000;
    //   time = isNaN(time) ? 0 : time;
    //   if (indexLength > -1) {
    //     if (arr[indexLength].path[arr[indexLength].path.length - 1][1] !== time) {
    //       arr[indexLength].path.push([data[i].geometry.coordinates, time]);
    //     }
    //   } else {
    //     let obj = {
    //       id: data[i].properties[trips.feild],
    //       path: [[data[i].geometry.coordinates, time]],
    //       properties: data[i].properties,
    //     };
    //     arr.push(obj);
    //     idArr.push(data[i].properties[trips.feild]);
    //   }
    //   if (timeArr.indexOf(time) < 0) {
    //     timeArr.push(time);
    //   }
    // }

    var _iterator = _createForOfIteratorHelper(data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        var indexLength = idArr.indexOf(i.properties[trips.feild]);
        var time = new Date(i.properties['field_dtg']).getTime() / 1000;
        time = isNaN(time) ? 0 : time;

        if (indexLength > -1) {
          if (arr[indexLength].path[arr[indexLength].path.length - 1][1] !== time) {
            arr[indexLength].path.push([i.geometry.coordinates, time]);
          }
        } else {
          var obj = {
            id: i.properties[trips.feild],
            path: [[i.geometry.coordinates, time]],
            properties: i.properties
          };
          arr.push(obj);
          idArr.push(i.properties[trips.feild]);
        }

        if (timeArr.indexOf(time) < 0) {
          timeArr.push(time);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return {
      data: arr,
      timeArr: timeArr
    };
  }
  /**
   * @method getRadius
   * @params {d}  每一条数据 object
   * @params {radius} 半径属性对象 object
   * @params {geojson} 数据 array
   * 设置点的半径和多点特征，以米为单位。
   */

  function getRadius(d, radius, geojson, scalePoint) {
    // 半径类型
    var radiusType = radius.type; // 半径字段

    var radiusfeild = radius.feild; // let scalePoint = sacatterLayerScalePoint(radius, geojson);

    if (radiusType === 1) {
      return radius.radiusScale * 10;
    } else if (radiusType === 2) {
      var val = d.properties[radiusfeild];

      var _radius = scalePoint(val) || 0.1;

      return parseInt(_radius);
    }
  }
  /**
   * @method sacatterLayerScalePoint
   * @params {radius} 半径属性对象 object
   * @params {geojson} 数据 array
   * 构造具有指定域和范围、无填充、无舍入和中心对齐的新点比例。（散点）
   */

  function sacatterLayerScalePoint(radius, geojson) {
    var radiusMinPixels = radius.radiusMinPixels || 0;
    var radiusMaxPixels = radius.radiusMaxPixels || 100;
    var feildArray = getFeildArray(geojson, radius === null || radius === void 0 ? void 0 : radius.feild);
    return layerScalePoint(feildArray, [radiusMinPixels, radiusMaxPixels * 6]);
  }
  /**
   * @method getSize
   * @params {size} 大小属性对象 object
   * @params {d}  每一条数据 object
   * @params {geojson} 数据 array
   * 设置大小 （散点半径等）
   */

  function getSize(size, geojson, d, getSizeLayerScalePoint) {
    var sizeType = size === null || size === void 0 ? void 0 : size.type;
    var sizefeild = size === null || size === void 0 ? void 0 : size.feild; // let getSizeLayerScalePoint = sizeLayerScalePoint(size, geojson);

    if (sizeType === 1) {
      return size.size;
    } else if (sizeType === 2) {
      var val = d.properties[sizefeild];

      var _size = getSizeLayerScalePoint(val) || 0.1;

      return parseInt(_size);
    }
  }
  /**
   * @method getAngle
   * @params {d} 每一条数据 object
   * @params {angle} 角度属性 object
   * @params {geojson} 数据 array
   * 设置旋转角度
   */

  function getAngle(d, angle, geojson, ScalePoint) {
    var angleNum = angle === null || angle === void 0 ? void 0 : angle.angle;
    var angleType = angle === null || angle === void 0 ? void 0 : angle.type;
    var angleFeild = angle === null || angle === void 0 ? void 0 : angle.feild; // let angleMinPixels = angle.angleMinPixels;
    // let angleMaxPixels = angle.angleMaxPixels;
    // let feildArray = getFeildArray(geojson, angleFeild, true);
    // let arr = [angleMinPixels, angleMaxPixels];
    // let k = layerScalePoint(feildArray, arr);

    if (angleType === 1) {
      return angleNum;
    } else if (angleType === 2) {
      var val = d.properties[angleFeild];

      var _angle = ScalePoint(val) || 0.1;

      return parseInt(_angle);
    }
  }
  /**
   * @method data_Source
   * @params {mapStyle} 图层属性 object
   * @params {dataSource} 数据 array
   * 数据处理（针对于，OD,TRIPS）
   */

  function data_Source(mapStyle, dataSource) {
    var data = [];

    if (mapStyle.dataState.DXState && mapStyle.dataState.DYState && mapStyle.dataState.OXState && mapStyle.dataState.OYState) {
      for (var i in dataSource) {
        var properties = dataSource[i].properties;
        var DXState = properties[mapStyle.dataState.DXState];
        var DYState = properties[mapStyle.dataState.DYState];
        var OXState = properties[mapStyle.dataState.OXState];
        var OYState = properties[mapStyle.dataState.OYState];
        DXState = parseFloat(DXState);
        DYState = parseFloat(DYState);
        OXState = parseFloat(OXState);
        OYState = parseFloat(OYState);
        DXState = DXState ? DXState : 114;
        DYState = DYState ? DYState : 114;
        OXState = OXState ? OXState : 114;
        OYState = OYState ? OYState : 114;
        var obj = [OXState, OYState, DXState, DYState]; //   data[i].dataArr = obj;

        data.push(_objectSpread2(_objectSpread2({}, dataSource[i]), {}, {
          dataArr: obj
        }));
      }
    } else {
      data = [];
    }

    return data;
  }
  /**
   * @method data_Source_Reverse
   * @params {mapStyle} 图层属性 object
   * @params {dataSource} 数据 array
   * 对数据源数据正序排序、正序排序+反序
   */

  function data_Source_Reverse(mapStyle, dataSource) {
    var _mapStyle$line4;

    var data = dataSource;

    if (mapStyle !== null && mapStyle !== void 0 && (_mapStyle$line4 = mapStyle.line) !== null && _mapStyle$line4 !== void 0 && _mapStyle$line4.dataReverse) {
      var doState = true;

      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _mapStyle$line5;

          var elem = _step2.value;

          if (!isNaN(Number(elem.properties[[mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line5 = mapStyle.line) === null || _mapStyle$line5 === void 0 ? void 0 : _mapStyle$line5.feild]])) && doState) {
            data = data.sort(function (a, b) {
              var _mapStyle$line6, _mapStyle$line7;

              return a.properties[mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line6 = mapStyle.line) === null || _mapStyle$line6 === void 0 ? void 0 : _mapStyle$line6.feild] - b.properties[mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line7 = mapStyle.line) === null || _mapStyle$line7 === void 0 ? void 0 : _mapStyle$line7.feild];
            });
            data = data.reverse();
            doState = false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else {
      var _doState = true;

      var _iterator3 = _createForOfIteratorHelper(data),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _mapStyle$line8;

          var _elem = _step3.value;

          if (!isNaN(Number(_elem.properties[[mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line8 = mapStyle.line) === null || _mapStyle$line8 === void 0 ? void 0 : _mapStyle$line8.feild]])) && _doState) {
            data = data.sort(function (a, b) {
              var _mapStyle$line9, _mapStyle$line10;

              return a.properties[mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line9 = mapStyle.line) === null || _mapStyle$line9 === void 0 ? void 0 : _mapStyle$line9.feild] - b.properties[mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line10 = mapStyle.line) === null || _mapStyle$line10 === void 0 ? void 0 : _mapStyle$line10.feild];
            });
            _doState = false;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return data;
  }
  /**
   * @method getIcon
   * @params {d} 每一条数据 object
   * @params {anchorHeight} 锚点高度 object
   * @params {iconUrl} 图片地址 string
   * @params {state} 状态 string
   * @params {geojson} 数据 array
   * @params {mapStyle} 图层属性 object
   * @params {layerTypeStr} 图层类型 string
   * 用于处理图标地址、大小、位置、模式
   */

  function getIcon(d, anchorHeight, iconUrl, state, mapStyle, geojson, layerTypeStr, scalePoint_z, timestamp) {
    var anchorHeightFeild = anchorHeight.feild;
    var anchorHeightHeight = anchorHeight.height;
    var anchorHeightType = anchorHeight.type;
    var anchorY = anchorHeightHeight; // let scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerTypeStr);

    if (anchorHeightType === 1) {
      anchorY = anchorHeightHeight;
    } else if (anchorHeightType === 3) {
      var val = d.properties[anchorHeightFeild];
      var size = scalePoint_z(val) || 0.1;
      anchorY = parseInt(size);
    }

    return {
      id: timestamp,
      url: "".concat(configPath.getImgByIdPath, "imageid=").concat(iconUrl.url),
      width: 512,
      height: 512,
      anchorY: anchorY * 10,
      x: 0,
      y: 0,
      mask: state
    };
  }
  /**
   * @method getAggregation
   * @params {mapStyle} 图层属性 object
   * @params {points} 每一条数据的经纬度 array
   * 计算四边形和六边形网格聚合值(1:计数、2：求和、3：平均)
   */

  function getAggregation(mapStyle, points) {
    var aggregation = mapStyle.aggregation;

    if (!aggregation || (aggregation === null || aggregation === void 0 ? void 0 : aggregation.type) === 1 || !(aggregation !== null && aggregation !== void 0 && aggregation.feild) || !(aggregation !== null && aggregation !== void 0 && aggregation.type)) {
      return points.length;
    }

    var feildDataArr = [];
    var resultData = 1;
    delete points.x;
    delete points.y;

    for (var i in points) {
      var item = points[i].properties[aggregation.feild];

      if (isNaN(Number(item))) {
        feildDataArr.push(item);
      } else {
        feildDataArr.push(Number(item));
      }
    }

    if (aggregation.type === 2) {
      if (isNaN(Number(feildDataArr[0]))) {
        resultData = feildDataArr.length;
      } else {
        resultData = eval(feildDataArr.join('+'));
      }
    }

    if (aggregation.type === 3) {
      if (isNaN(Number(feildDataArr[0]))) {
        resultData = feildDataArr.length;
      } else {
        resultData = eval(feildDataArr.join('+')) / feildDataArr.length;
      }
    }

    resultData = Number(resultData.toFixed(4));
    return resultData;
  } // export function iconData(geojson, iconStyles) {
  /**
   * @method getText
   * @params {text} 文本
   *
   */

  function getText(text, fontStyle, angle) {
    if (text === undefined) {
      return '                                             ' + '         ' + '                                             ';
    }

    if ((fontStyle === null || fontStyle === void 0 ? void 0 : fontStyle.redirect) === 1) {
      if ((angle === null || angle === void 0 ? void 0 : angle.textAnchor) === 'middle') {
        return '                                             ' + text + '                                             ';
      } else if ((angle === null || angle === void 0 ? void 0 : angle.textAnchor) === 'start') {
        return text + '                                             ';
      } else {
        return '                                             ' + text;
      }
    } else {
      var oldText = null;
      var newText = '';
      oldText = typeof text === 'string' ? text : text.toString();
      oldText = oldText.split('');

      for (var key in oldText) {
        newText += oldText[key] + '\n';
      }

      if ((angle === null || angle === void 0 ? void 0 : angle.textAnchor) === 'middle') {
        return '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + newText + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
      } else if ((angle === null || angle === void 0 ? void 0 : angle.textAnchor) === 'start') {
        return newText + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
      } else {
        return '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + newText;
      }
    }
  }

  var getGlConst = function getGlConst(d) {
    return GL__default["default"][d];
  };

  var LAYER_BLENDINGS = {
    additive: {
      blendFunc: ['SRC_ALPHA', 'DST_ALPHA'],
      blendEquation: 'FUNC_ADD'
    },
    normal: {
      // reference to
      // https://limnu.com/webgl-blending-youre-probably-wrong/
      blendFunc: ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'ONE', 'ONE_MINUS_SRC_ALPHA'],
      blendEquation: ['FUNC_ADD', 'FUNC_ADD']
    },
    subtractive: {
      blendFunc: ['ONE', 'ONE_MINUS_DST_COLOR', 'SRC_ALPHA', 'DST_ALPHA'],
      blendEquation: ['FUNC_SUBTRACT', 'FUNC_ADD']
    }
  };
  function setLayerEveryBlending(layerBlending) {
    var blending = LAYER_BLENDINGS[layerBlending];
    var blendFunc = blending.blendFunc,
        blendEquation = blending.blendEquation;
    return _objectSpread2(_defineProperty({}, GL__default["default"].BLEND, true), blendFunc ? {
      blendFunc: blendFunc.map(getGlConst),
      blendEquation: Array.isArray(blendEquation) ? blendEquation.map(getGlConst) : getGlConst(blendEquation)
    } : {});
  }

  function ArcLayer(layerCon) {
    var _layerCon$style, _mapStyle$line, _layerCon$customGroup, _layerCon$customGroup2, _mapStyle$line2, _mapStyle$color, _mapStyle$line3, _mapStyle$line4, _mapStyle$line5;

    //图层样式
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.arcStyle;
    var radiusType = mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line = mapStyle.line) === null || _mapStyle$line === void 0 ? void 0 : _mapStyle$line.type;
    var sectionColor = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : (_layerCon$customGroup2 = _layerCon$customGroup.arcSection) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.color;
    var dataSource = data_Source(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures);
    var dataSourceReverse = data_Source_Reverse(mapStyle, dataSource);
    var scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.color, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures);
    var scalePoint = layerScaleOrdinal_y(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures);
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "arclayer@".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'ArcLayer',
      data: mapStyle !== null && mapStyle !== void 0 && (_mapStyle$line2 = mapStyle.line) !== null && _mapStyle$line2 !== void 0 && _mapStyle$line2.dataReverse ? dataSourceReverse : dataSource,
      opacity: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$color = mapStyle.color) === null || _mapStyle$color === void 0 ? void 0 : _mapStyle$color.opacity
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      widthUnits: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line3 = mapStyle.line) === null || _mapStyle$line3 === void 0 ? void 0 : _mapStyle$line3.widthUnits,
      widthMinPixels: radiusType === 1 ? 1 : mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line4 = mapStyle.line) === null || _mapStyle$line4 === void 0 ? void 0 : _mapStyle$line4.radiusMinPixels,
      widthMaxPixels: radiusType === 1 ? 100 : (mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line5 = mapStyle.line) === null || _mapStyle$line5 === void 0 ? void 0 : _mapStyle$line5.radiusMaxPixels) * 1,
      getSourcePosition: function getSourcePosition(d) {
        return [d === null || d === void 0 ? void 0 : d.dataArr[0], d === null || d === void 0 ? void 0 : d.dataArr[1]];
      },
      getTargetPosition: function getTargetPosition(d) {
        return [d === null || d === void 0 ? void 0 : d.dataArr[2], d === null || d === void 0 ? void 0 : d.dataArr[3]];
      },
      getSourceColor: function getSourceColor$1(d) {
        return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
      },
      getTargetColor: function getTargetColor$1(d) {
        return getTargetColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
      },
      getWidth: function getWidth$1(d) {
        return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scalePoint);
      },
      // 控制显隐
      visible: visible(layerCon),
      updateTriggers: {
        getSourceColor: function getSourceColor$1(d) {
          return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
        },
        getTargetColor: function getTargetColor$1(d) {
          return getTargetColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
        },
        getWidth: function getWidth$1(d) {
          return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scalePoint);
        }
      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  function LineLayer(layerCon) {
    var _layerCon$style, _mapStyle$line, _layerCon$customGroup, _layerCon$customGroup2, _mapStyle$line2, _mapStyle$line3;

    //图层样式
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.arcStyle;
    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id;
    var radiusType = mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line = mapStyle.line) === null || _mapStyle$line === void 0 ? void 0 : _mapStyle$line.type;
    var sectionColor = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : (_layerCon$customGroup2 = _layerCon$customGroup.arcSection) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.color;
    console.log('mapStyle.dataState', mapStyle.dataState);
    var dataSource = data_Source(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures);
    var dataSourceReverse = data_Source_Reverse(mapStyle, dataSource);
    var scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.color, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures);
    var scalePoint = layerScaleOrdinal_y(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures);
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "linelayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'LineLayer',
      data: mapStyle !== null && mapStyle !== void 0 && (_mapStyle$line2 = mapStyle.line) !== null && _mapStyle$line2 !== void 0 && _mapStyle$line2.dataReverse ? dataSourceReverse : dataSource,
      opacity: mapStyle.color.opacity,
      pickable: true,
      autoHighlight: true,
      widthScale: 1
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      widthUnits: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$line3 = mapStyle.line) === null || _mapStyle$line3 === void 0 ? void 0 : _mapStyle$line3.widthUnits,
      //   onHover: this._onHover.bind(this, mapStyle, 'ODLayer', layerId, layerOption.name),
      widthMinPixels: radiusType === 1 ? 1 : mapStyle.line.radiusMinPixels,
      widthMaxPixels: radiusType === 1 ? 100 : mapStyle.line.radiusMaxPixels * 1,
      getSourcePosition: function getSourcePosition(d) {
        return [d === null || d === void 0 ? void 0 : d.dataArr[0], d === null || d === void 0 ? void 0 : d.dataArr[1]];
      },
      getTargetPosition: function getTargetPosition(d) {
        return [d === null || d === void 0 ? void 0 : d.dataArr[2], d === null || d === void 0 ? void 0 : d.dataArr[3]];
      },
      getColor: function getColor$1(d) {
        return getColor(d, mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
      },
      getWidth: function getWidth$1(d) {
        return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scalePoint);
      },
      getSourceColor: function getSourceColor$1(d) {
        return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
      },
      getTargetColor: function getTargetColor$1(d) {
        return getTargetColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
      },
      visible: visible(layerCon),
      updateTriggers: {
        getColor: function getColor$1(d) {
          return getColor(d, mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
        },
        getWidth: function getWidth$1(d) {
          return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scalePoint);
        },
        getSourceColor: function getSourceColor$1(d) {
          return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
        },
        getTargetColor: function getTargetColor$1(d) {
          return getTargetColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
        }
      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  // import {
  //   layerScaleOrdinal,
  //   layerScalePoint,
  //   layerScaleQuantile,
  // } from '@/utils/layerutils/layerScale';

  function IconLayer(layerCon) {
    var _layerCon$customGroup, _layerCon$customGroup2;

    //图层样式
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : layerCon.style.iconStyle; //geojson数据源

    var geojson = layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures; //使用图层id给图层做标识符

    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id; // 颜色

    var _mapStyle$color = mapStyle.color,
        state = _mapStyle$color.state,
        opacity = _mapStyle$color.opacity; // 大小

    var sizeUnits = mapStyle.size.sizeUnits; // 属性

    var billboard = mapStyle.billboard,
        anchorHeight = mapStyle.anchorHeight,
        angle = mapStyle.angle,
        iconUrl = mapStyle.iconUrl; // 分段

    var sectionColor = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : (_layerCon$customGroup2 = _layerCon$customGroup.iconSection) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.color; // 高度

    var scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr); // 大小

    var getSizeLayerScalePoint = sizeLayerScalePoint(mapStyle.size, geojson); // 颜色域映射

    var scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.color, geojson); // 角度

    var angleFeild = angle === null || angle === void 0 ? void 0 : angle.feild;
    var angleMinPixels = angle.angleMinPixels;
    var angleMaxPixels = angle.angleMaxPixels;
    var feildArray = getFeildArray(layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, angleFeild);
    var arr = [angleMinPixels, angleMaxPixels];
    var ScalePoint = layerScalePoint(feildArray, arr);
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var timestamp = new Date().getTime();

    var layerConfig = _objectSpread2(_objectSpread2({
      mapType: 'IconLayer',
      id: "iconlayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      data: geojson
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      pickable: true,
      sizeScale: 10,
      //缩放尺寸
      sizeUnits: sizeUnits,
      //像素大小或者地理大小pixels/meters
      sizeMinPixels: 1,
      //最小尺寸
      sizeMaxPixels: 10000,
      //最大尺寸
      billboard: billboard,
      //面向相机还是朝上
      opacity: opacity,
      alphaCutoff: 0.05,
      //图标中间开孔
      // 控制显隐
      visible: visible(layerCon),
      getIcon: function getIcon$1(d) {
        return getIcon(d, anchorHeight, iconUrl, state, mapStyle, geojson, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, scalePoint_z, timestamp);
      },
      //获取每个数据的自定义的图标，可批量处理图标
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      //获取对应数据的经纬度和Z值
      getSize: function getSize$1(d) {
        return getSize(mapStyle.size, geojson, d, getSizeLayerScalePoint);
      },
      //获取对应图标的高度
      getColor: function getColor(d) {
        return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal);
      },
      //获取每个图标的饿颜色
      getAngle: function getAngle$1(d) {
        return getAngle(d, angle, geojson, ScalePoint);
      },
      //获取每个图标的旋转角度
      updateTriggers: {
        getIcon: function getIcon$1(d) {
          return getIcon(d, anchorHeight, iconUrl, state, mapStyle, geojson, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, scalePoint_z, timestamp);
        },
        getSize: function getSize$1(d) {
          return getSize(mapStyle.size, geojson, d, getSizeLayerScalePoint);
        },
        //获取对应图标的高度
        getColor: function getColor(d) {
          return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal);
        },
        getAngle: function getAngle$1(d) {
          return getAngle(d, angle, geojson, ScalePoint);
        } //获取每个图标的旋转角度

      },
      // ...mapEvent,
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  } // export default function IconLayer(layerCon) {
  //   //图层样式
  //   let mapStyle = JSON.parse(JSON.stringify(layerCon?.style.iconStyle));
  //   console.log("mapStylenew", mapStyle)
  //   let colorArray = mapStyle.color.colorArray;
  //   let antitone = mapStyle.color.antitone;
  //   let newColorArray = JSON.parse(JSON.stringify(colorArray));
  //   let { iconSection } = layerCon?.customGroup;
  //   let x = null;
  //   let y = null;
  //   let z = null;
  //   let k = null;
  //   let colorWidth = null;
  //   if (mapStyle.color.type === 2) {
  //     colorWidth = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.color.feild);
  //     newColorArray = newColorArray.reverse();
  //     if (isNaN(Number(colorWidth[0]))) {
  //       x = layerScaleOrdinal(colorWidth, antitone ? newColorArray : colorArray);
  //     } else {
  //       x = layerScaleQuantile(colorWidth, antitone ? newColorArray : colorArray);
  //     }
  //   }
  //   if (mapStyle.size.type === 2) {
  //     let sizeMinPixels = mapStyle.size.sizeMinPixels;
  //     let sizeMaxPixels = mapStyle.size.sizeMaxPixels;
  //     let sizeWidth = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.size.feild);
  //     let arr = [sizeMinPixels, sizeMaxPixels];
  //     y = layerScalePoint(sizeWidth, arr);
  //   }
  //   if (mapStyle.size.type === 3) {
  //     let heightMinPixels = mapStyle.anchorHeight.heightMinPixels;
  //     let heightMaxPixels = mapStyle.anchorHeight.heightMaxPixels;
  //     let anchorHeight = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.anchorHeight.feild);
  //     let arr = [heightMinPixels, heightMaxPixels];
  //     z = layerScalePoint(anchorHeight, arr);
  //   }
  //   if (mapStyle.angle.type === 2) {
  //     let angleMinPixels = mapStyle.angle.angleMinPixels;
  //     let angleMaxPixels = mapStyle.angle.angleMaxPixels;
  //     let angle = getFeildArray(layerCon?.LayerDataFeatures, mapStyle.angle.feild);
  //     let arr = [angleMinPixels, angleMaxPixels];
  //     k = layerScalePoint(angle, arr);
  //   }
  //   const { state, type, opacity } = mapStyle.color;
  //   let colorType = type;
  //   let { sizeUnits, size } = mapStyle.size;
  //   let sizeType = mapStyle.size.type;
  //   let sizefeild = mapStyle.size.feild;
  //   let { billboard, anchorHeight, angle, iconUrl } = mapStyle;
  //   let anchorHeightFeild = anchorHeight.feild;
  //   let anchorHeightHeight = anchorHeight.height;
  //   let anchorHeightType = anchorHeight.type;
  //   let angleNum = angle.angle;
  //   let angleType = angle.type;
  //   let angleFeild = angle.feild;
  //   let sectionColor = iconSection.color;
  //   let sectionNumber = [];
  //   let sectionColorArr = [];
  //   if (sectionColor.type === 2) {
  //     let colorSectionArr = sectionColor.colorSectionArr;
  //     for (let i in colorSectionArr) {
  //       sectionNumber.push(colorSectionArr[i].number);
  //     }
  //     sectionNumber.sort((val1, val2) => {
  //       return val1 - val2;
  //     });
  //     for (let i in sectionNumber) {
  //       for (let j in colorSectionArr) {
  //         if (sectionNumber[i] === colorSectionArr[j].number) {
  //           sectionColorArr.push(colorSectionArr[j].color);
  //           break;
  //         }
  //       }
  //     }
  //   }
  //   let layerConfig = {
  //     type: 'IconLayer',
  //     id: `iconlayer@${layerCon?.id}`,
  //     dataid: layerCon?.id,
  //     data: layerCon?.LayerDataFeatures,
  //     //iconAtlas:'https://deck.gl/images/icon-atlas.png',//图标
  //     // iconMapping: {
  //     //   marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
  //     // },
  //     ...layerCon?.zoom,
  //     pickable: true,
  //     sizeScale: 10, //缩放尺寸
  //     sizeUnits: sizeUnits, //像素大小或者地理大小pixels/meters
  //     sizeMinPixels: 0, //最小尺寸
  //     sizeMaxPixels: 10000, //最大尺寸
  //     billboard: billboard, //面向相机还是朝上
  //     opacity: opacity,
  //     //getIcon:(d)=>{return 'marker'},
  //     alphaCutoff: 0.05, //图标中间开孔
  //     visible: visible(layerCon),
  //     // upLayerDataFun: (newOption = {}) => {
  //     //   let oldNewLayerConfig = { ...layerConfig, ...newOption };
  //     //   return new IconLayer(oldNewLayerConfig);
  //     // },
  //     getIcon: d => {
  //       let anchorY = anchorHeightHeight;
  //       if (anchorHeightType === 1) {
  //         anchorY = anchorHeightHeight;
  //       } else if (anchorHeightType === 3) {
  //         let val = d.properties[anchorHeightFeild];
  //         let size = z(val) || 0.1;
  //         anchorY = parseInt(size);
  //       }
  //       console.log("statestate", state)
  //       return {
  //         url: `${configPath.getImgByIdPath}imageid=${iconUrl.url}`,
  //         width: 512,
  //         height: 512,
  //         anchorY: anchorY * 10,
  //         // anchorX: 0,
  //         x: 0,
  //         y: 0,
  //         mask: state,
  //       };
  //     },
  //     //获取每个数据的自定义的图标，可批量处理图标
  //     getPosition: d => {
  //       return d.geometry.coordinates;
  //     }, //获取对应数据的经纬度和Z值
  //     getSize: d => {
  //       if (sizeType === 1) {
  //         return size;
  //       } else if (sizeType === 2) {
  //         let val = d.properties[sizefeild];
  //         let size = y(val) || 0.1;
  //         return parseInt(size);
  //       }
  //     }, //获取对应图标的高度
  //     getColor: d => {
  //       if (colorType === 1) {
  //         let color = mapStyle.color.color;
  //         return rgbToColorArr(color);
  //       } else {
  //         let feild = mapStyle.color.feild;
  //         let val = d.properties[feild];
  //         if (sectionColor.type === 1) {
  //           if (x) {
  //             let color = x(val);
  //             return rgbToColorArr(color);
  //           }
  //           return [255, 140, 0, 255];
  //         } else if (sectionColor.type === 2) {
  //           let activeColor = null;
  //           for (let i in sectionNumber) {
  //             if (val < sectionNumber[i]) {
  //               activeColor = !sectionColorArr[i]?.toString()
  //                 ? antitone
  //                   ? newColorArray[i]
  //                   : colorArray[i]
  //                 : sectionColorArr[i];
  //               break;
  //             }
  //           }
  //           if (!activeColor) {
  //             activeColor = !sectionColorArr.slice(-1)?.toString()
  //               ? antitone
  //                 ? newColorArray.slice(-1)
  //                 : colorArray.slice(-1)
  //               : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);
  //             activeColor = activeColor.toString();
  //           }
  //           return rgbToColorArr(activeColor);
  //         }
  //       }
  //     },
  //     //获取每个图标的饿颜色
  //     getAngle: d => {
  //       if (angleType === 1) {
  //         return angleNum;
  //       } else if (angleType === 2) {
  //         let val = d.properties[angleFeild];
  //         let angle = k(val) || 0.1;
  //         return parseInt(angle);
  //       }
  //     }, //获取每个图标的旋转角度
  //     updateTriggers: {
  //       getIcon: d => {
  //         let anchorY = anchorHeightHeight;
  //         if (anchorHeightType === 1) {
  //           anchorY = anchorHeightHeight;
  //         } else if (anchorHeightType === 3) {
  //           let val = d.properties[anchorHeightFeild];
  //           let size = z(val) || 0.1;
  //           anchorY = parseInt(size);
  //         }
  //         console.log("statestate", state)
  //         return {
  //           url: `${configPath.getImgByIdPath}imageid=${iconUrl.url}`,
  //           width: 512,
  //           height: 512,
  //           anchorY: anchorY * 10,
  //           // anchorX: 0,
  //           x: 0,
  //           y: 0,
  //           mask: state,
  //         };
  //       },
  //       //获取每个数据的自定义的图标，可批量处理图标
  //       getSize: d => {
  //         if (sizeType === 1) {
  //           return size;
  //         } else if (sizeType === 2) {
  //           let val = d.properties[sizefeild];
  //           let size = y(val) || 0.1;
  //           return parseInt(size);
  //         }
  //       }, //获取对应图标的高度
  //       getColor: d => {
  //         if (colorType === 1) {
  //           let color = mapStyle.color.color;
  //           return rgbToColorArr(color);
  //         } else {
  //           let feild = mapStyle.color.feild;
  //           let val = d.properties[feild];
  //           if (sectionColor.type === 1) {
  //             if (x) {
  //               let color = x(val);
  //               return rgbToColorArr(color);
  //             }
  //             return [255, 140, 0, 255];
  //           } else if (sectionColor.type === 2) {
  //             let activeColor = null;
  //             for (let i in sectionNumber) {
  //               if (val < sectionNumber[i]) {
  //                 activeColor = !sectionColorArr[i]?.toString()
  //                   ? antitone
  //                     ? newColorArray[i]
  //                     : colorArray[i]
  //                   : sectionColorArr[i];
  //                 break;
  //               }
  //             }
  //             if (!activeColor) {
  //               activeColor = !sectionColorArr.slice(-1)?.toString()
  //                 ? antitone
  //                   ? newColorArray.slice(-1)
  //                   : colorArray.slice(-1)
  //                 : sectionColorArr.slice(-1); // antitone ? newColorArray.slice(-1) : colorArray.slice(-1);
  //               activeColor = activeColor.toString();
  //             }
  //             return rgbToColorArr(activeColor);
  //           }
  //         }
  //       },
  //       //获取每个图标的饿颜色
  //       getAngle: d => {
  //         if (angleType === 1) {
  //           return angleNum;
  //         } else if (angleType === 2) {
  //           let val = d.properties[angleFeild];
  //           let angle = k(val) || 0.1;
  //           return parseInt(angle);
  //         }
  //       }, //获取每个图标的旋转角度
  //     }
  //     // ...mapEvent,
  //   };
  //   return layerConfig;
  // }

  function HexagonLayer(layerCon) {
    var _layerCon$style;

    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.hexagonStyle; //geojson数据源

    var geojson = layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures;
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "hexagonlayer@".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'HexagonLayer',
      data: geojson,
      pickable: true
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      extruded: mapStyle.height.extruded,
      radius: mapStyle.radius.cellSize * 1000,
      opacity: mapStyle.color.opacity,
      elevationScale: mapStyle.height.elevationScale * 100,
      autoHighlight: true,
      getColorValue: getAggregation.bind(this, mapStyle),
      getElevationValue: getAggregation.bind(this, mapStyle),
      colorRange: colorRange(mapStyle),
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      coverage: mapStyle.radius.coverage,
      visible: visible(layerCon),
      updateTriggers: {
        getColorValue: getAggregation.bind(this, mapStyle),
        getElevationValue: getAggregation.bind(this, mapStyle),
        colorRange: colorRange(mapStyle)
      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  function GPUGridLayer(layerCon) {
    var id = layerCon.id;
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : layerCon.style.cubeStyle;
    var geojson = layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures;
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "gridlayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'CubeLayer',
      data: geojson,
      pickable: true
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      elevationScaleType: 'radial',
      // autoHighlight: true,
      extruded: mapStyle.height.extruded,
      // 如果设置为true，沿z轴挤压多边形和多多边形特征。绘制的特征的高度是通过getElevation访问器获得的
      cellSize: mapStyle.radius.cellSize * 1000,
      opacity: mapStyle.color.opacity,
      elevationScale: mapStyle.height.elevationScale * 100,
      // 六角海拔乘数
      colorRange: colorRange(mapStyle),
      // 颜色值数组,用来创建六边形因密度不同而形成的颜色区分;
      gpuAggregation: true,
      getColorValue: getAggregation.bind(this, mapStyle),
      // getColorValue是获取bin color所基于的值的访问器函数。
      getElevationValue: getAggregation.bind(this, mapStyle),
      // 类似于getColorValue, getElevationValue是获取bin elevation所基于的值的访问器函数。它将每个bin中的点数组作为参数，返回一个数字。默认情况下，getElevationValue返回点数组的长度
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 控制显隐
      visible: visible(layerCon),
      coverage: mapStyle.radius.coverage,
      updateTriggers: {
        colorRange: colorRange(mapStyle),
        // 颜色值数组,用来创建六边形因密度不同而形成的颜色区分;
        getColorValue: getAggregation.bind(this, mapStyle),
        // getColorValue是获取bin color所基于的值的访问器函数。
        getElevationValue: getAggregation.bind(this, mapStyle) // 类似于getColorValue, getElevationValue是获取bin elevation所基于的值的访问器函数。它将每个bin中的点数组作为参数，返回一个数字。默认情况下，getElevationValue返回点数组的长度

      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  function PolygonLayer(layerCon) {
    var _layerCon$customGroup, _layerCon$customGroup2;

    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : layerCon.style.regionStyle;
    var geojson = layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures;
    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id;
    var radiusType = mapStyle.line.type;
    var sectionColor = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : (_layerCon$customGroup2 = _layerCon$customGroup.regionSection) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.color;
    var scalePoint_z = layerScaleOrdinal_z(mapStyle, geojson, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr);
    var scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.color, geojson);
    var scalePoint = layerScaleOrdinal_y(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, geojson);
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "polygonlayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      // zOrder: layerCon?.zOrder,
      zOrder: -1,
      mapType: 'PolygonLayer',
      data: arrayData(geojson, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr),
      opacity: mapStyle.color.opacity,
      pickable: true
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      autoHighlight: true,
      stroked: true,
      filled: true,
      extruded: mapStyle.height.extruded,
      wireframe: true,
      lineWidthScale: 10,
      lineWidthMinPixels: radiusType === 1 ? 0 : mapStyle.line.lineWidthMinPixels,
      lineWidthMaxPixels: radiusType === 1 ? 100 : mapStyle.line.lineWidthMaxPixels * 10,
      getPolygon: function getPolygon(d) {
        return d.lonlat;
      },
      getElevation: function getElevation$1(d) {
        return getElevation(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, d, geojson, scalePoint_z);
      },
      getFillColor: function getFillColor(d) {
        return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal);
      },
      getLineColor: [80, 80, 80],
      getLineWidth: function getLineWidth(d) {
        return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint);
      },
      visible: visible(layerCon),
      updateTriggers: {
        getElevation: function getElevation$1(d) {
          return getElevation(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, d, geojson, scalePoint_z);
        },
        getFillColor: function getFillColor(d) {
          return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal);
        },
        getLineColor: [80, 80, 80],
        getLineWidth: function getLineWidth(d) {
          return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint);
        }
      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  function PathLayer(layerCon) {
    var _layerCon$style, _layerCon$customGroup, _layerCon$customGroup2, _mapStyle$radius;

    console.log('lllllllcccccc', layerCon); //图层样式

    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.lineStyle; //geojson数据源

    var geojson = layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures;
    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id;
    var radiusType = mapStyle.radius.type;
    var sectionColor = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : (_layerCon$customGroup2 = _layerCon$customGroup.lineSection) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.color;
    var scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.color, geojson);
    var scalePoint = layerScaleOrdinal_y(mapStyle, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, geojson);
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "pathlayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'PathLayer',
      widthUnits: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$radius = mapStyle.radius) === null || _mapStyle$radius === void 0 ? void 0 : _mapStyle$radius.widthUnits,
      data: arrayData(geojson, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr),
      pickable: true,
      autoHighlight: true,
      opacity: mapStyle.color.opacity,
      widthScale: 6
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      widthMinPixels: radiusType === 1 ? 1 : mapStyle.radius.radiusMinPixels,
      widthMaxPixels: radiusType === 1 ? 100 : mapStyle.radius.radiusMaxPixels * 6,
      getPath: function getPath(d) {
        return d.lonlat;
      },
      getColor: function getColor(d) {
        return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal);
      },
      getWidth: function getWidth$1(d) {
        return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint);
      },
      // 控制显隐
      visible: visible(layerCon),
      updateTriggers: {
        getColor: function getColor(d) {
          return getSourceColor(d, layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, mapStyle, sectionColor, geojson, scaleOrdinal);
        },
        getWidth: function getWidth$1(d) {
          return getWidth(layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr, radiusType, mapStyle, d, geojson, scalePoint);
        }
      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  function ScatterplotLayer(layerCon) {
    var _layerCon$style, _objectSpread2$1;

    // console.log('layerCon', layerCon);
    // 散点属性对象
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.scatterStyle;
    console.log('mapStyle444333', layerCon); // 半径类型

    var radiusType = mapStyle.radius.type; // 图层id

    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id; // 数据源

    var geojson = layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures;
    var scalePoint = sacatterLayerScalePoint(mapStyle.radius, geojson);
    var scaleOrdinal = null;

    if (mapStyle.color.type === 2) {
      scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle.color, geojson);
    }

    var viewport = localStorage.getItem('viewport');

    if (viewport) {
      viewport = JSON.parse(viewport);
    }

    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2((_objectSpread2$1 = {
      id: "scatterplotLayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably
    }, _defineProperty(_objectSpread2$1, "defaultInteraction", layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction), _defineProperty(_objectSpread2$1, "dataid", id), _defineProperty(_objectSpread2$1, "zOrder", layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder), _defineProperty(_objectSpread2$1, "mapType", 'ScatterplotLayer'), _defineProperty(_objectSpread2$1, "data", layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures), _defineProperty(_objectSpread2$1, "radiusUnits", mapStyle.radius.radiusUnits), _defineProperty(_objectSpread2$1, "pickable", true), _defineProperty(_objectSpread2$1, "stroked", false), _defineProperty(_objectSpread2$1, "opacity", mapStyle.color.opacity), _defineProperty(_objectSpread2$1, "radiusScale", 10), _objectSpread2$1), layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      // antialiasing: true,
      // 以像素为单位的最小半径。这个道具可以用来防止圆缩小时变得太小。
      radiusMinPixels: radiusType === 1 ? 1 : mapStyle.radius.radiusMinPixels || 0.01,
      // 以像素为单位的最大半径。这个道具可以用来防止圆放大时变得太大。
      radiusMaxPixels: radiusType === 1 ? 100000 : mapStyle.radius.radiusMaxPixels * 6,
      // 用于得到经纬度
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      //  点的半径和多点特征，以米为单位。
      getRadius: function getRadius$1(d) {
        return getRadius(d, mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.radius, geojson, scalePoint);
      },
      // GeoJson的多边形和点特征的纯色。格式为r, g, b， [a]。每个组件都在0-255范围内。
      getFillColor: function getFillColor$1(d) {
        var _layerCon$customGroup;

        return getFillColor(d, layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : _layerCon$customGroup.scatterSection, mapStyle.color, geojson, scaleOrdinal);
      },
      // 控制显隐
      visible: visible(layerCon),
      updateTriggers: {
        getRadius: function getRadius$1(d) {
          return getRadius(d, mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.radius, geojson, scalePoint);
        },
        // GeoJson的多边形和点特征的纯色。格式为r, g, b， [a]。每个组件都在0-255范围内。
        getFillColor: function getFillColor$1(d) {
          var _layerCon$customGroup2;

          return getFillColor(d, layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup2 = layerCon.customGroup) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.scatterSection, mapStyle.color, geojson, scaleOrdinal);
        }
      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  function TripsLayer(layerCon) {
    var _layerCon$style, _layerCon$option, _layerCon$option$data, _mapStyle$radius;

    // 基本样式
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.tripsStyle; //使用图层id给图层做标识符

    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id; // 时间字段键名

    var timeKey = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$option = layerCon.option) === null || _layerCon$option === void 0 ? void 0 : (_layerCon$option$data = _layerCon$option.dataSource) === null || _layerCon$option$data === void 0 ? void 0 : _layerCon$option$data.timeKey; // 源数据

    var dataSource = layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures; // 处理后的数据和时间数组

    var geojson = dataCollation_trips(dataSource, mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.trips); // 最小值

    var min = Math.min.apply(null, geojson === null || geojson === void 0 ? void 0 : geojson.timeArr);
    var scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle.color, geojson === null || geojson === void 0 ? void 0 : geojson.data);
    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "tripslayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'TripsLayer',
      data: geojson === null || geojson === void 0 ? void 0 : geojson.data,
      widthUnits: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$radius = mapStyle.radius) === null || _mapStyle$radius === void 0 ? void 0 : _mapStyle$radius.widthUnits,
      getColor: function getColor(d) {
        var _layerCon$customGroup;

        return getFillColor(d, layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : _layerCon$customGroup.tripsSection, mapStyle.color, geojson === null || geojson === void 0 ? void 0 : geojson.data, scaleOrdinal);
      },
      getWidth: function getWidth(d) {
        return mapStyle.radius.radiusScale;
      },
      getPath: function getPath(d) {
        return d.path.map(function (p) {
          return p[0];
        });
      },
      getTimestamps: function getTimestamps(d) {
        return d.path.map(function (p) {
          return p[1] - min;
        });
      },
      dashJustified: true,
      opacity: mapStyle.color.opacity,
      widthScale: 10,
      widthMinPixels: 1.5,
      timeKey: timeKey,
      fp64: true
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      trips: mapStyle.trips,
      widthMaxPixels: 1000,
      rounded: true,
      trailLength: mapStyle.size.sizeScale * 1000,
      currentTime: 0,
      frequencyTime: mapStyle.time.frequencyTime,
      //毫秒单位
      addtime: mapStyle.time.addtime,
      timeArr: geojson.timeArr,
      timer: null,
      // 控制显隐
      visible: visible(layerCon),
      updateTriggers: {
        getColor: function getColor(d) {
          var _layerCon$customGroup2;

          return getFillColor(d, layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup2 = layerCon.customGroup) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.tripsSection, mapStyle.color, geojson === null || geojson === void 0 ? void 0 : geojson.data, scaleOrdinal);
        },
        getWidth: function getWidth(d) {
          return mapStyle.radius.radiusScale;
        }
      },
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    });

    return layerConfig;
  }

  function ScenegraphLayer(layerCon) {
    var _layerCon$style, _mapStyle$color2, _mapStyle$animations, _mapStyle$animations2;

    // 散点属性对象
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.scenegraphStyle; //   console.log('layerConlayerCon', layerCon);

    var _mapStyle$color = mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.color,
        color = _mapStyle$color.color,
        status = _mapStyle$color.status; // 图层id


    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id;
    var viewport = localStorage.getItem('viewport');

    if (viewport) {
      viewport = JSON.parse(viewport);
    }

    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "scenegraphLayer@".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'ScenegraphLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      opacity: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$color2 = mapStyle.color) === null || _mapStyle$color2 === void 0 ? void 0 : _mapStyle$color2.opacity
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      pickable: true,
      // 控制显隐
      visible: visible(layerCon),
      scenegraph: mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.scenegraph,
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      getOrientation: function getOrientation(d) {
        return [0, 0, 90];
      },
      getTranslation: [0, 0, mapStyle.height],
      getColor: status ? rgbToColorArr(color) : [],
      _animations: {
        '*': {
          speed: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$animations = mapStyle.animations) === null || _mapStyle$animations === void 0 ? void 0 : _mapStyle$animations.speed,
          playing: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$animations2 = mapStyle.animations) === null || _mapStyle$animations2 === void 0 ? void 0 : _mapStyle$animations2.playing
        }
      },
      sizeScale: (mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.sizeScale) * 2,
      _lighting: 'pbr',
      // parameters: setLayerEveryBlending(layerCon?.renderMode || 'normal')
      updateTriggers: {
        getTranslation: [0, 0, mapStyle.height]
      }
    });

    return layerConfig;
  }

  function TextLayer(layerCon) {
    var _layerCon$style, _mapStyle$color, _mapStyle$fontStyle, _mapStyle$size, _mapStyle$fontStyle2, _mapStyle$fontStyle3, _mapStyle$fontStyle4, _mapStyle$fontStyle5, _mapStyle$angle, _mapStyle$angle2, _mapStyle$angle3, _mapStyle$angle4, _mapStyle$angle5;

    // 图层样式
    var mapStyle = layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.textStyle; // 图层id

    var id = layerCon === null || layerCon === void 0 ? void 0 : layerCon.id; //   文字字段

    var feild = mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$color = mapStyle.color) === null || _mapStyle$color === void 0 ? void 0 : _mapStyle$color.feild;
    var scaleOrdinal = null;

    if (mapStyle.color.type === 2) {
      scaleOrdinal = colorLayerScaleOrdinal_Quantile(mapStyle.color, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures);
    }

    var viewport = localStorage.getItem('viewport');

    if (viewport) {
      viewport = JSON.parse(viewport);
    }

    var visibility = 2;

    if ((layerCon === null || layerCon === void 0 ? void 0 : layerCon.level) === 2) {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.visibility;
    } else {
      visibility = layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerVisibility;
    }

    var layerConfig = _objectSpread2(_objectSpread2({
      id: "text-layer".concat(id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      visibility: visibility,
      dataVisiably: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataVisiably,
      dataid: id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'TextLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      pickable: true,
      opacity: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$fontStyle = mapStyle.fontStyle) === null || _mapStyle$fontStyle === void 0 ? void 0 : _mapStyle$fontStyle.opacity,
      sizeScale: 1,
      // characterSet: getCharacterSet(layerCon?.LayerDataFeatures, feild),
      characterSet: 'auto',
      sizeUnits: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$size = mapStyle.size) === null || _mapStyle$size === void 0 ? void 0 : _mapStyle$size.sizeUnits
    }, layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom), {}, {
      billboard: mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.billboard,
      fontFamily: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$fontStyle2 = mapStyle.fontStyle) === null || _mapStyle$fontStyle2 === void 0 ? void 0 : _mapStyle$fontStyle2.fontFamily,
      // 用于设置字体，支持CSS内置字体
      fontWeight: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$fontStyle3 = mapStyle.fontStyle) === null || _mapStyle$fontStyle3 === void 0 ? void 0 : _mapStyle$fontStyle3.fontWeight,
      // 用于设置字体粗细
      getSize: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$fontStyle4 = mapStyle.fontStyle) === null || _mapStyle$fontStyle4 === void 0 ? void 0 : _mapStyle$fontStyle4.fontSize,
      // 每个文本标签的字体大小，以sizeUnits（默认像素）指定的单位表示。
      // getColor: rgbToColorArr(mapStyle?.fontStyle?.color), // 字体颜色
      getColor: function getColor(d) {
        var _layerCon$customGroup;

        return getFillColor(d, layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup = layerCon.customGroup) === null || _layerCon$customGroup === void 0 ? void 0 : _layerCon$customGroup.textSection, mapStyle.color, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
      },
      getPixelOffset: [0, -(mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$fontStyle5 = mapStyle.fontStyle) === null || _mapStyle$fontStyle5 === void 0 ? void 0 : _mapStyle$fontStyle5.lineHeight)],
      getAngle: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$angle = mapStyle.angle) === null || _mapStyle$angle === void 0 ? void 0 : _mapStyle$angle.angle,
      // 角度
      getTextAnchor: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$angle2 = mapStyle.angle) === null || _mapStyle$angle2 === void 0 ? void 0 : _mapStyle$angle2.textAnchor,
      // 文本锚点
      getAlignmentBaseline: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$angle3 = mapStyle.angle) === null || _mapStyle$angle3 === void 0 ? void 0 : _mapStyle$angle3.alignmentBaseline,
      // 文本基线。
      getPosition: function getPosition(d) {
        var _d$geometry;

        return d === null || d === void 0 ? void 0 : (_d$geometry = d.geometry) === null || _d$geometry === void 0 ? void 0 : _d$geometry.coordinates;
      },
      getText: function getText$1(d) {
        return getText(d === null || d === void 0 ? void 0 : d.properties[feild], mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.fontStyle, mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.angle);
      },
      // 文本显示
      // 控制显隐
      visible: visible(layerCon),
      updateTriggers: {
        getPosition: function getPosition(d) {
          var _d$geometry2;

          return d === null || d === void 0 ? void 0 : (_d$geometry2 = d.geometry) === null || _d$geometry2 === void 0 ? void 0 : _d$geometry2.coordinates;
        },
        getText: function getText$1(d) {
          return getText(d === null || d === void 0 ? void 0 : d.properties[feild], mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.fontStyle, mapStyle === null || mapStyle === void 0 ? void 0 : mapStyle.angle);
        },
        // 文本显示
        getColor: function getColor(d) {
          var _layerCon$customGroup2;

          return getFillColor(d, layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$customGroup2 = layerCon.customGroup) === null || _layerCon$customGroup2 === void 0 ? void 0 : _layerCon$customGroup2.textSection, mapStyle.color, layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures, scaleOrdinal);
        },
        getTextAnchor: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$angle4 = mapStyle.angle) === null || _mapStyle$angle4 === void 0 ? void 0 : _mapStyle$angle4.textAnchor,
        // 文本锚点
        getAlignmentBaseline: mapStyle === null || mapStyle === void 0 ? void 0 : (_mapStyle$angle5 = mapStyle.angle) === null || _mapStyle$angle5 === void 0 ? void 0 : _mapStyle$angle5.alignmentBaseline // 文本基线。

      }
    });

    return layerConfig;
  }

  function HeatBeatLayer(layerCon) {
    var _layerCon$style;

    var layerConfig = {
      id: "".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'HeartBeatLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      mapStyle: layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.heartBeatStyle,
      option: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom,
      visible: visible(layerCon),
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    };
    return layerConfig;
  }

  function HeatMapBoxLayer(layerCon) {
    var _layerCon$style;

    var layerConfig = {
      id: "".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      dataId: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataId,
      mapType: 'HeatLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      mapStyle: layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.heatStyle,
      option: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom,
      visible: visible(layerCon),
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    };
    return layerConfig;
  }

  function SizeScatterLayer(layerCon) {
    var _layerCon$style, _layerCon$LayerDataFe;

    var layerConfig = {
      id: "sizescatterlayer@".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      dataId: layerCon === null || layerCon === void 0 ? void 0 : layerCon.dataId,
      mapType: 'SizeScatterLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      mapStyle: layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.sizeScatterStyle,
      option: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom,
      dataLength: (layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures.length) > 10 ? parseInt((layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$LayerDataFe = layerCon.LayerDataFeatures) === null || _layerCon$LayerDataFe === void 0 ? void 0 : _layerCon$LayerDataFe.length) * 0.1) : 10,
      visible: visible(layerCon),
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    };
    return layerConfig;
  }

  function TextLabelLayer(layerCon) {
    var _layerCon$style;

    console.log('labelTextStyle', layerCon);
    var layerConfig = {
      id: "".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'textLabelLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      mapStyle: layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.labelTextStyle,
      option: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom,
      visible: visible(layerCon),
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    };
    return layerConfig;
  }

  function FlyingLineLayer(layerCon) {
    var _layerCon$style, _layerCon$style2;

    console.log('FlyingLineLayer_layerCon', layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.flyingLineStyle);
    var layerConfig = {
      id: "".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'FlyingLineLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      mapStyle: layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style2 = layerCon.style) === null || _layerCon$style2 === void 0 ? void 0 : _layerCon$style2.flyingLineStyle,
      option: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom,
      visible: visible(layerCon),
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    };
    return layerConfig;
  }

  function WarnImageLayer(layerCon) {
    var _layerCon$style, _layerCon$style2;

    console.log('AimatedImageLayer_layerCon', layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style = layerCon.style) === null || _layerCon$style === void 0 ? void 0 : _layerCon$style.warnImageStyle);
    var layerConfig = {
      id: "".concat(layerCon === null || layerCon === void 0 ? void 0 : layerCon.id),
      level: layerCon === null || layerCon === void 0 ? void 0 : layerCon.level,
      defaultInteraction: layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction,
      dataid: layerCon === null || layerCon === void 0 ? void 0 : layerCon.id,
      zOrder: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zOrder,
      mapType: 'WarnImageLayer',
      data: layerCon === null || layerCon === void 0 ? void 0 : layerCon.LayerDataFeatures,
      mapStyle: layerCon === null || layerCon === void 0 ? void 0 : (_layerCon$style2 = layerCon.style) === null || _layerCon$style2 === void 0 ? void 0 : _layerCon$style2.warnImageStyle,
      option: layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom,
      visible: visible(layerCon),
      parameters: setLayerEveryBlending((layerCon === null || layerCon === void 0 ? void 0 : layerCon.renderMode) || 'normal')
    };
    return layerConfig;
  }

  // deck.gl
  function loadLayerFunction(layerCon) {
    console.log('layerConlayerCon333', layerCon); // if (layerCon?.visibility === 1 || layerCon?.layerVisibility === 1) {
    //   return false;
    // }

    switch (layerCon === null || layerCon === void 0 ? void 0 : layerCon.layerTypeStr) {
      case 'ARCLayer':
        return ArcLayer(layerCon);

      case 'IconLayer':
        return IconLayer(layerCon);

      case 'HexagonLayer':
        return HexagonLayer(layerCon);

      case 'CubeLayer':
        return GPUGridLayer(layerCon);

      case 'ScatterLayer':
        return ScatterplotLayer(layerCon);

      case 'ScenegraphLayer':
        return ScenegraphLayer(layerCon);

      case 'RegionLayer':
        return PolygonLayer(layerCon);

      case 'LineLayer':
        return PathLayer(layerCon);

      case 'ODLayer':
        return LineLayer(layerCon);

      case 'TripsLayer':
        return TripsLayer(layerCon);

      case 'HeartBeatLayer':
        return HeatBeatLayer(layerCon);

      case 'FlyingLineLayer':
        return FlyingLineLayer(layerCon);

      case 'WarnImageLayer':
        return WarnImageLayer(layerCon);

      case 'HeatMapLayer':
        return HeatMapBoxLayer(layerCon);
      // case 'HeatMapLayer':
      //   return heatLayer(layerCon);

      case 'SizeScatterLayer':
        return SizeScatterLayer(layerCon);

      case 'LabelLayer':
        return TextLabelLayer(layerCon);

      case 'TextLayer':
        return TextLayer(layerCon);
    }
  }

  // 0	CSV文件数据
  // 1	JSON文件数据
  // 2	MySQL数据库数据
  // 3	elasticSearch数据
  // 4	mapd数据库数据
  // 5	oracle数据库数据
  // 6	api

  var sourceType = {
    API: 3,
    //API 数据
    GEOMESA: 7,
    //geomesa 数据
    URL: 8,
    //URL数据
    LOCALDATA: 9
  }; //条件查找类型

  var mapLayerTypeName = {
    ScatterLayer: '散点图层',
    //散点图
    HeatMapLayer: '热力图层',
    //热力
    CubeLayer: '网格柱状图层',
    //柱状
    HeartBeatLayer: '心跳图层',
    //心跳
    SizeScatterLayer: '聚合点图层',
    //聚合点
    LineLayer: '线图层',
    //飞线
    RegionLayer: '面图层',
    //多边形
    ARCLayer: '弧图层',
    //od
    ODLayer: 'OD图层',
    //od
    GridLayer: '网格图层',
    //网格
    HexagonLayer: '六边形网格图层',
    //蜂窝
    TripsLayer: '动态轨迹图层',
    //动态轨迹图
    IconLayer: '图标图层',
    //图标图层
    LabelLayer: '标签图层',
    //标签图层
    WarnImageLayer: '警告图层',
    // 警告图层
    FlyingLineLayer: '飞线图层',
    //飞线图层
    TextLayer: '文本图层',
    // 文本图层
    ScenegraphLayer: '模型图层' // 模型图层

  }; //地图图层类型

  var mapLayerTypeConstant = {
    SCATTER_LAYER: 'ScatterLayer',
    //散点图
    HEATMAP_LAYER: 'HeatMapLayer',
    //热力
    CUBE_LAYER: 'CubeLayer',
    //柱状
    HEARTBEAT_LAYER: 'HeartBeatLayer',
    //心跳
    SIZESCATTER_LAYER: 'SizeScatterLayer',
    //聚合点
    LINE_LAYER: 'LineLayer',
    //飞线
    REGION_LAYER: 'RegionLayer',
    //多边形
    ARC_LAYER: 'ARCLayer',
    //od
    OD_LAYER: 'ODLayer',
    //od
    GRID_LAYER: 'GridLayer',
    //网格
    HEXAGON_LAYER: 'HexagonLayer',
    //蜂窝
    // ARC_LAYER: 'ARCLayer', //弧线
    TRIPS_LAYER: 'TripsLayer',
    //动态轨迹图
    ICON_LAYER: 'IconLayer',
    //图标图层
    LABEL_LAYER: 'LabelLayer',
    //标签图层
    WARNIMAGE_LAYER: 'WarnImageLayer',
    // 警告图层
    FLYINGLINE_LAYER: 'FlyingLineLayer',
    //飞线图层
    TEXT_LAYER: 'TextLayer',
    // 文本图层
    SCENEGRAPH_LAYER: 'ScenegraphLayer' // 模型图层

  }; //地图类型方法

  function mapTypeFun(mapNumberType) {
    var mapType = 'ScatterLayer';

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
  } //地图类型方法

  var layerDataType = [{
    name: 'ScatterLayer',
    id: 1,
    title: '散点图',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'SizeScatterLayer',
    id: 5,
    title: '聚合点',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'HeartBeatLayer',
    id: 4,
    title: '心跳图',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'IconLayer',
    id: 13,
    title: '图标图层',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'HeatMapLayer',
    id: 2,
    title: '热力图',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'CubeLayer',
    id: 3,
    title: '网格柱状',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'HexagonLayer',
    id: 10,
    title: '六边形网格',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'TripsLayer',
    id: 12,
    title: '动态轨迹图',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'ODLayer',
    id: 8,
    title: 'OD图',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'ARCLayer',
    id: 11,
    title: '弧图层',
    dataType: ['Point', 'MultiPoint']
  }, {
    name: 'LineLayer',
    id: 6,
    title: '线图层',
    dataType: ['LineString', 'MultiLineString', 'Polygon', 'MultiPolygon']
  }, {
    name: 'RegionLayer',
    id: 7,
    title: '面图层',
    dataType: ['LineString', 'MultiLineString', 'Polygon', 'MultiPolygon']
  } // {
  //   name: "GridLayer",
  //   id: 9,
  //   title:'网格图',
  //   dataType:'Point'
  // },
  ]; // 图表类型

  var initZoom = {
    minZoom: 0,
    maxZoom: 17
  }; //初始化底图的风格

  IPConfig.initMapStyle; //默认创建的底图风格

  var defaultDeckMapStyle = 1;

  /**
   * 本地文件
   * 数据类型csv shp geojson
   */

  function DataSearchType(data) {
    var type;

    if (data.data_type === 'MySQL' || data.data_type === 'MySql' || data.dataType === 'MySQL' || data.data_type === 'SqlServer' || data.data_type === 'Postgresql' || data.data_type === 'dm' || data.data_type === 'oracle' || data.data_type === 'Hive' || data.data_type === 'KingbaseES' || data.data_type === 'OSCAR' || data.data_type === 'Qcubic' || data.contentType === 'MySQL') {
      type = 2;
    } else if (data.data_type === 'api') {
      type = 3;
    } else if (data.data_type === 'model') {
      type = 5;
    } else {
      type = 1;
    }

    return type;
  }

  // 组件里面倒序排列

  function customColor1(chartColor, colourReversal) {
    for (var i = 0; i < chartColor.arrayColors.length; i++) {
      if (chartColor.arrayColors[i].selected === 1) {
        if (colourReversal) {
          var newColorArray = JSON.parse(JSON.stringify(chartColor.arrayColors[i].thisColorAll)); // newColorArray = newColorArray.reverse();

          return newColorArray;
        } else {
          return chartColor.arrayColors[i].thisColorAll;
        }
      }
    }
  }

  /*随机获取颜色*/

  var commonColor$b = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b;
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 弧图层Option


  var arcMapOption = {
    dataState: {
      OXState: '',
      OYState: '',
      DXState: '',
      DYState: ''
    },
    color: {
      type: 1,
      feild: '',
      Ocolor: 'rgb(0,85,255)',
      Dcolor: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    line: {
      type: 1,
      feild: '',
      radiusScale: 2,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      dataReverse: false,
      widthUnits: 'pixels'
    },
    // customColorState: false,
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$b(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildArcMapOption = function buildArcMapOption(state, action) {
    var _action$payload$e;

    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.arcStyle;
    } else {
      newOption = arcMapOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, arcMapOption), newOption);

    switch (action.payload.key) {
      case '弧图层OX':
        newOption.dataState.OXState = action.payload.e || '';
        break;

      case '弧图层OY':
        newOption.dataState.OYState = action.payload.e || '';
        break;

      case '弧图层DX':
        newOption.dataState.DXState = action.payload.e || '';
        break;

      case '弧图层DY':
        newOption.dataState.DYState = action.payload.e || '';
        break;

      case '弧图层颜色分组字段':
        newOption.color.type = action.payload.e || 1;
        break;

      case '弧图层颜色字段':
        newOption.color.feild = action.payload.e || '';
        break;

      case '弧图层单个颜色起点':
        newOption.color.Ocolor = action.payload.e || '';
        break;

      case '弧图层单个颜色终点':
        newOption.color.Dcolor = action.payload.e || '';
        break;

      case '弧图层分段方式':
        newOption.section.color.type = action.payload.e || 1;
        break;

      case '弧图层透明度':
        newOption.color.opacity = (_action$payload$e = action.payload.e) !== null && _action$payload$e !== void 0 ? _action$payload$e : 1;
        break;

      case '弧图层半径字段类型':
        newOption.line.type = action.payload.e || 1;
        break;

      case '弧图层半径字段':
        newOption.line.feild = action.payload.e || '';
        break;

      case '弧图层数据反序':
        newOption.line.dataReverse = action.payload.e || false;
        break;

      case '弧图层半径值':
        newOption.line.radiusScale = action.payload.e || 2;
        break;

      case '弧图层半径范围':
        newOption.line.radiusMinPixels = action.payload.e[0] || 0;
        newOption.line.radiusMaxPixels = action.payload.e[1] || 100;
        break;

      case '弧图层颜色反序':
        newOption.color.antitone = action.payload.e || false;
        break;

      case '弧图层色系长度选择':
        newOption.color.colorArray = action.payload.e.colors || '';
        newOption.ColorList = newOption.color.colorArray;
        break;

      case '弧图层大小模式':
        newOption.line.widthUnits = action.payload.e || 'pixels';
        break;

      case '弧图层自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
        }

        if (newOption.customColorState === false) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.colorArray = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '弧图层自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
        break;
    }

    state.mapStyle.arcStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$a = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b;
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 网格柱状Option


  var cubeLayerOption = {
    color: {
      opacity: 1,
      color: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      antitone: false
    },
    radius: {
      cellSize: 1,
      coverage: 0.9
    },
    height: {
      extruded: false,
      elevationScale: 0.1
    },
    aggregation: {
      feild: '',
      type: 1
    },
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$a(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildCubeLayerOption = function buildCubeLayerOption(state, action) {
    var _action$payload$e;

    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.cubeStyle;
    } else {
      newOption = cubeLayerOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, cubeLayerOption), newOption);

    switch (action.payload.key) {
      case '网格柱状透明度':
        newOption.color.opacity = (_action$payload$e = action.payload.e) !== null && _action$payload$e !== void 0 ? _action$payload$e : 1;
        break;

      case '网格柱状聚合字段':
        newOption.aggregation.feild = action.payload.e || '';
        break;

      case '网格柱状聚合模式':
        newOption.aggregation.type = action.payload.e || 1;
        break;

      case '网格柱状半径':
        newOption.radius.cellSize = action.payload.e || 1;
        break;

      case '网格柱状范围':
        newOption.radius.coverage = action.payload.e || 0.9;
        break;

      case '网格柱状显示高度':
        newOption.height.extruded = action.payload.e || false;
        break;

      case '网格柱状高度系数':
        newOption.height.elevationScale = action.payload.e || 0.1;
        break;

      case '网格柱状颜色反序':
        newOption.color.antitone = action.payload.e || false;
        break;

      case '网格柱状色系长度选择':
        newOption.color.color = action.payload.e.colors || '';
        newOption.ColorList = newOption.color.color;
        break;

      case '网格柱状自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.color = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.color = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '网格柱状自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        break;
    }

    state.mapStyle.cubeStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$9 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b + ')';
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 热力图层Option


  var heatMapOption = {
    color: {
      opacity: 1,
      feild: '',
      color: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)']
    },
    radius: {
      radius: 10
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$9(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildheatMapOption = function buildheatMapOption(state, action) {
    var newOption = {};

    if (state.mapStyle.heatStyle) {
      newOption = state.mapStyle.heatStyle;
    } else {
      newOption = heatMapOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, heatMapOption), newOption);

    switch (action.payload.key) {
      case '热力图色系长度选择':
        newOption.color.color = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
        newOption.ColorList = newOption.color.color;
        break;

      case '热力图颜色反序':
        newOption.color.antitone = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '热力图透明度':
        newOption.color.opacity = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '热力图半径值':
        newOption.radius.radius = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '热力图权重字段':
        newOption.color.feild = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
        break;

      case '热力图自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.color = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.color = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '热力图自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        break;
    }

    state.mapStyle.heatStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$8 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b;
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 心跳Option


  var hexagonOption = {
    color: {
      opacity: 1,
      color: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      antitone: false
    },
    radius: {
      cellSize: 1,
      coverage: 0.9
    },
    height: {
      extruded: false,
      elevationScale: 0.1
    },
    aggregation: {
      feild: '',
      type: 1
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$8(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildHexagonOption = function buildHexagonOption(state, action) {
    var _action$payload$e;

    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.hexagonStyle;
    } else {
      newOption = hexagonOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, hexagonOption), newOption);

    switch (action.payload.key) {
      case '六边形网格聚合字段':
        newOption.aggregation.feild = action.payload.e || '';
        break;

      case '六边形网格聚合模式':
        newOption.aggregation.type = action.payload.e || 1;
        break;

      case '六边形网格半径':
        newOption.radius.cellSize = action.payload.e || 1;
        break;

      case '六边形网格范围':
        newOption.radius.coverage = action.payload.e || 0;
        break;

      case '六边形网格显示高度':
        newOption.height.extruded = action.payload.e;
        break;

      case '六边形网格高度系数':
        newOption.height.elevationScale = action.payload.e || 0;
        break;

      case '六边形网格透明度':
        newOption.color.opacity = (_action$payload$e = action.payload.e) !== null && _action$payload$e !== void 0 ? _action$payload$e : 0;
        break;

      case '六边形网格颜色反序':
        newOption.color.antitone = action.payload.e || false;
        break;

      case '六边形网格色系长度选择':
        newOption.color.color = action.payload.e.colors || '';
        newOption.ColorList = newOption.color.color;
        break;

      case '六边形网格自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.color = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.color = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '六边形网格自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.color = customColor1(newOption.customColor, newOption.customColor);
        break;
    }

    state.mapStyle.hexagonStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$7 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b;
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 图标Option


  var iconLayerOption = {
    iconUrl: {
      type: 1,
      //图标的
      feild: '',
      url: '5dd28575c37b2a4fb5b612dc'
    },
    //贴地模式
    billboard: true,
    color: {
      state: false,
      type: 1,
      feild: '',
      color: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    //图标大小
    size: {
      sizeUnits: 'pixels',
      type: 1,
      feild: '',
      size: 5,
      sizeScale: 2,
      sizeMinPixels: 1,
      sizeMaxPixels: 100
    },
    //图标的距地高度
    anchorHeight: {
      height: 13,
      //距地高度
      type: 1,
      feild: '',
      heightScale: 2,
      heightMinPixels: 1,
      heightMaxPixels: 100
    },
    //图标的左右偏移
    anchorWidth: {
      width: 0,
      //距地高度
      type: 1,
      feild: '',
      widthScale: 2,
      widthMinPixels: 1,
      widthMaxPixels: 100
    },
    //旋转角度
    angle: {
      angle: 0,
      type: 1,
      feild: '',
      angleScale: 2,
      angleMinPixels: 1,
      angleMaxPixels: 360
    },
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$7(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildIconLayerOption = function buildIconLayerOption(state, action) {
    var _action$payload$e;

    console.log('sadfsdfa33421sdfsadf', state.mapStyle);
    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.iconStyle;
    } else {
      newOption = iconLayerOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, iconLayerOption), newOption);

    switch (action.payload.key) {
      case '图标透明度':
        newOption.color.opacity = (_action$payload$e = action.payload.e) !== null && _action$payload$e !== void 0 ? _action$payload$e : 1;
        break;

      case '图标颜色状态':
        newOption.color.state = action.payload.e;
        break;

      case '图标颜色分组字段':
        newOption.color.type = action.payload.e;
        break;

      case '图标颜色字段':
        newOption.color.feild = action.payload.e;
        break;

      case '图标单个颜色':
        newOption.color.color = action.payload.e;
        break;

      case '图标展示模式':
        newOption.billboard = action.payload.e;
        break;

      case '图标大小模式':
        newOption.size.sizeUnits = action.payload.e || 'pixels';
        break;

      case '图标大小字段':
        newOption.size.feild = action.payload.e || '';
        break;

      case '图标大小系数类型':
        newOption.size.type = action.payload.e;
        break;

      case '图标大小系数':
        newOption.size.size = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '图标大小系数范围':
        newOption.size.sizeMinPixels = action.payload.e[0] || 1;
        newOption.size.sizeMaxPixels = action.payload.e[1] || 100;
        break;

      case '图标距地高度系数':
        newOption.anchorHeight.height = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '图标距地高度系数范围':
        newOption.anchorHeight.heightMinPixels = action.payload.e[0] || 1;
        newOption.anchorHeight.heightMaxPixels = action.payload.e[1] || 100;
        break;

      case '图标图片旋转角度字段':
        newOption.angle.feild = action.payload.e || '';
        break;

      case '图标图片旋转角度系数类型':
        newOption.angle.type = action.payload.e || '';
        break;

      case '图标图片旋转角度系数':
        newOption.angle.angle = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '图标图片旋转角度系数范围':
        newOption.angle.angleMinPixels = action.payload.e[0] || 1;
        newOption.angle.angleMaxPixels = action.payload.e[1] || 100;
        break;

      case '图标图片类型':
        newOption.iconUrl.type = action.payload.e || '';
        break;

      case '':
        newOption.iconUrl.feild = action.payload.e || '';
        break;

      case '图标图片url':
        newOption.iconUrl.url = action.payload.e || '';
        break;

      case '图标颜色反序':
        newOption.color.antitone = action.payload.e || false;
        break;

      case '图标色系长度选择':
        newOption.color.colorArray = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
        newOption.ColorList = newOption.color.colorArray;
        break;

      case '图标自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.colorArray = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '图标自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        break;
    }

    state.mapStyle.iconStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$6 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b;
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 线图层Option


  var lineLayerOption = {
    color: {
      type: 1,
      feild: '',
      color: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    radius: {
      type: 1,
      feild: '',
      radiusScale: 0.2,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      widthUnits: 'meters'
    },
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$6(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildLineLayerOption = function buildLineLayerOption(state, action) {
    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.lineStyle;
    } else {
      newOption = lineLayerOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, lineLayerOption), newOption);

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
        newOption.color.antitone = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '线图层色系长度选择':
        newOption.color.colorArray = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
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
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
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
    }

    state.mapStyle.lineStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$5 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b;
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 面图层Option


  var regionOption = {
    color: {
      type: 1,
      feild: '',
      color: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    line: {
      type: 1,
      feild: '',
      lineWidthScale: 0.1,
      lineWidthMinPixels: 0,
      lineWidthMaxPixels: 10
    },
    height: {
      extruded: false,
      type: 1,
      feild: '',
      heightScale: 0.1,
      heightMinPixels: 0,
      heightMaxPixels: 1
    },
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$5(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildRegionLayerOption = function buildRegionLayerOption(state, action) {
    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.regionStyle;
    } else {
      newOption = regionOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, regionOption), newOption);

    switch (action.payload.key) {
      case '面图层透明度':
        newOption.color.opacity = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '面图层颜色类型':
        newOption.color.type = action.payload.e || '';
        break;

      case '面图层颜色字段':
        newOption.color.feild = action.payload.e || '';
        break;

      case '面图层单个颜色':
        newOption.color.color = action.payload.e || '';
        break;

      case '面图层线宽类型':
        newOption.line.type = action.payload.e || '';
        break;

      case '面图层线宽字段':
        newOption.line.feild = action.payload.e || '';
        break;

      case '面图层半径值':
        newOption.line.lineWidthScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '面图层半径值范围':
        newOption.line.lineWidthMinPixels = action.payload.e[0] || 0;
        newOption.line.lineWidthMaxPixels = action.payload.e[1] || 100;
        break;

      case '面图层高度系数类型':
        newOption.height.type = action.payload.e || false;
        break;

      case '面图层显示高度':
        newOption.height.extruded = action.payload.e || false;
        break;

      case '面图层高度字段':
        newOption.height.feild = action.payload.e || '';
        break;

      case '面图层高度系数':
        newOption.height.heightScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '面图层高度系数范围':
        newOption.height.heightMinPixels = action.payload.e[0] || 0;
        newOption.height.heightMaxPixels = action.payload.e[1] || 100;
        break;

      case '面图层颜色反序':
        newOption.color.antitone = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '面图层色系长度选择':
        newOption.color.colorArray = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
        newOption.ColorList = newOption.color.colorArray;
        break;

      case '面图层自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.colorArray = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '面图层自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        break;
    }

    state.mapStyle.regionStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$4 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b + ')';
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 热力图层Option


  var scatterMapOption = {
    color: {
      //type = 1 不选择字段 2 选择字段
      type: 1,
      feild: '',
      color: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    radius: {
      //type = 1 不选择字段 2 选择字段
      type: 1,
      feild: '',
      radius: 100,
      radiusScale: 1,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      radiusUnits: 'meters'
    },
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$4(6))
      }]
    },
    ColorList: null,
    //地图方向显影
    control: true
  }; //构建MapTheme

  var buildScatterMapOption = function buildScatterMapOption(state, action) {
    var _action$payload$e;

    var newOption = {};

    if (state.mapStyle.scatterStyle) {
      newOption = state.mapStyle.scatterStyle;
    } else {
      newOption = scatterMapOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, scatterMapOption), newOption);

    switch (action.payload.key) {
      case '散点图颜色反序':
        newOption.color.antitone = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '散点图色系长度选择':
        newOption.color.colorArray = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
        newOption.ColorList = newOption.color.colorArray;
        break;

      case '散点图对应的分段方式':
        newOption.section.color.type = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '散点图单个颜色':
        newOption.color.color = action.payload.e || '';
        break;

      case '散点图颜色分组字段类型':
        newOption.color.type = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '散点图颜色字段':
        newOption.color.feild = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
        break;

      case '散点图透明度':
        newOption.color.opacity = (_action$payload$e = action.payload.e) !== null && _action$payload$e !== void 0 ? _action$payload$e : 1;
        break;

      case '散点图大小模式':
        newOption.radius.radiusUnits = action.payload.e || 'meters';
        break;

      case '散点图半径字段':
        newOption.radius.feild = action.payload.e || '';
        break;

      case '散点图半径值类型':
        newOption.radius.type = action.payload.e || '';
        break;

      case '散点图半径值':
        newOption.radius.radiusScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '散点图半径值范围':
        newOption.radius.radiusMinPixels = action.payload.e[0] || 0;
        newOption.radius.radiusMaxPixels = action.payload.e[1] || 100;
        break;

      case '散点图自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.colorArray = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '散点图自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
        break;
    }

    state.mapStyle.scatterStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$3 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b + ')';
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 聚合点Option


  var sizeScatterOption = {
    color: {
      type: 2,
      feild: '',
      color: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    radius: {
      clusterRadius: 25,
      radiusMinPixels: 10,
      radiusMaxPixels: 50
    },
    text: {
      show: true,
      fontSize: 12,
      color: 'rgb(0,53,177)'
    },
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$3(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildSizeScatterOption = function buildSizeScatterOption(state, action) {
    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.sizeScatterStyle;
    } else {
      newOption = sizeScatterOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, sizeScatterOption), newOption);

    switch (action.payload.key) {
      case '聚合点透明度':
        newOption.color.opacity = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '聚合点聚合半径':
        newOption.radius.clusterRadius = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '聚合点半径范围':
        newOption.radius.radiusMinPixels = action.payload.e[0] || 1;
        newOption.radius.radiusMaxPixels = action.payload.e[1] || 100;
        break;

      case '聚合点显示文字':
        newOption.text.show = action.payload.e || false;
        break;

      case '聚合点文字颜色':
        newOption.text.color = action.payload.e || '';
        break;

      case '聚合点文字大小':
        newOption.text.fontSize = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '聚合点颜色反序':
        newOption.color.antitone = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '聚合点色系长度选择':
        newOption.color.colorArray = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
        newOption.ColorList = newOption.color.colorArray;
        break;

      case '聚合点自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.colorArray = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '聚合点自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        break;
    }

    state.mapStyle.sizeScatterStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$2 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b;
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 网格柱状Option


  var tripsOption = {
    //颜色
    color: {
      type: 1,
      feild: '',
      color: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    //线宽
    radius: {
      type: 1,
      feild: '',
      radius: 100,
      radiusScale: 2,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      widthUnits: 'meters'
    },
    //线段长度
    size: {
      type: 1,
      feild: '',
      size: 100,
      sizeScale: 2,
      sizeMinPixels: 1,
      sizeMaxPixels: 100
    },
    //播放时间
    time: {
      addtime: 100,
      frequencyTime: 20
    },
    trips: {
      feild: ''
    },
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$2(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildTripsLayerOption = function buildTripsLayerOption(state, action) {
    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.tripsStyle;
    } else {
      newOption = tripsOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, tripsOption), newOption);

    switch (action.payload.key) {
      case '动态轨迹图颜色反序':
        newOption.color.antitone = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '动态轨迹图轨迹分组字段':
        newOption.trips.feild = action.payload.e || '';
        break;

      case '动态轨迹图颜色分组字段':
        newOption.color.feild = action.payload.e || '';
        break;

      case '动态轨迹图分段类型':
        newOption.color.type = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '动态轨迹图单个颜色':
        newOption.color.color = action.payload.e || '';
        break;

      case '动态轨迹图色系长度选择':
        newOption.color.colorArray = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
        newOption.ColorList = newOption.color.colorArray;
        break;

      case '动态轨迹图分段方式':
        newOption.section.color.type = action.payload.e || 1;
        break;

      case '动态轨迹图透明度':
        newOption.color.opacity = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '动态轨迹图大小模式':
        newOption.radius.widthUnits = action.payload.e || 'meters';
        break;

      case '动态轨迹图轨迹宽度':
        newOption.radius.radiusScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '动态轨迹图轨迹长度':
        newOption.size.sizeScale = typeof action.payload.e === 'number' ? action.payload.e : 0;
        break;

      case '动态轨迹图播放速度':
        newOption.time.frequencyTime = action.payload.e || 20;
        break;

      case '动态轨迹图平均时间间隔':
        newOption.time.addtime = action.payload.e || 100;
        break;

      case '动态轨迹图自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.colorArray = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '动态轨迹图自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        break;
    }

    state.mapStyle.tripsStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor$1 = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  }; // 心跳Option


  var heartBeatOption = {
    billboard: true,
    autoAvoid: true,
    animation: {
      scatterStyleType: 2,
      scatterAimatedType: 1,
      scatterSpeed: 5
    },
    color: {
      type: 1,
      feild: '',
      color: 'rgb(0,85,255)',
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    radius: {
      type: 1,
      feild: '',
      radius: 2,
      radiusScale: 1,
      radiusMinPixels: 1,
      radiusMaxPixels: 100
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 1,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor$1(1))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildHeartBeatOption = function buildHeartBeatOption(state, action) {
    var _action$payload$e;

    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.heartBeatStyle;
    } else {
      newOption = heartBeatOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, heartBeatOption), newOption);

    switch (action.payload.key) {
      case '心跳图呼吸点样式':
        newOption.animation.scatterStyleType = action.payload.e.target.value || 2;
        break;

      case '心跳图透明度':
        newOption.color.opacity = (_action$payload$e = action.payload.e) !== null && _action$payload$e !== void 0 ? _action$payload$e : 1;
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
    }

    state.mapStyle.heartBeatStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  // 标签图层Option
  var labelTextOption = {
    icon: {
      imgSrc: '1',
      ImgArr: []
    },
    feild: {
      name: '',
      value: ''
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
        fontWeight: 500
      },
      // 距离
      marginObj: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
      }
    },
    numberStyle: {
      // 默认
      defaultStyle: {
        color: '#ffffff',
        fontSize: '16px',
        fontFamily: 'MicrosoftYaHei',
        fontWeight: 500
      },
      // 距离
      marginObj: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
      },
      numSeparator: false
    },
    unitStyle: {
      // 默认
      defaultStyle: {
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'MicrosoftYaHei',
        fontWeight: 500
      },
      // 距离
      marginObj: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
      },
      unit: ''
    },
    backgroundStyle: {
      status: true,
      type: 0,
      type1Default: {
        defaultColor: 'rgba(0,0,0,0.7)',
        gradientStatus: false,
        gradientDirection: 90,
        gradientColor1: 'rgba(0,0,0,0.7)',
        gradientColor2: 'rgba(0,0,0,0.7)'
      },
      type2Image: {
        displayType: 0,
        imgUrl: '',
        opacity: 100,
        imgWidth: 10,
        imgHeight: 10
      }
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
        blur: 10
      },
      borderRadius: 5
    },
    //   牵引线
    tractionLineStyle: {
      status: true,
      location: 'center',
      lineStyle: 'solid',
      lineColor: '#C5C5C5',
      lineWidth: 1,
      lineHeight: 50
    }
  }; //构建MapTheme

  var buildlabelTextOption = function buildlabelTextOption(state, action) {
    var _action$payload$e, _action$payload$e2;

    var newOption = {};

    if (state.mapStyle.labelTextStyle) {
      newOption = state.mapStyle.labelTextStyle;
    } else {
      newOption = labelTextOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, labelTextOption), newOption);

    switch (action.payload.key) {
      case '标签层样式类型':
        newOption.icon.imgSrc = action.payload.e;
        break;

      case '标签层样式类型集合':
        newOption.icon.ImgArr = action.payload.e;
        break;

      case '标签层字段':
        newOption.feild.name = (_action$payload$e = action.payload.e) === null || _action$payload$e === void 0 ? void 0 : _action$payload$e.name;
        newOption.feild.value = (_action$payload$e2 = action.payload.e) === null || _action$payload$e2 === void 0 ? void 0 : _action$payload$e2.value;
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
    }

    state.mapStyle.labelTextStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  // warnImageOption -------  报警图层
  // 动态报警图层Option
  var warnImageOption = {
    icon: {
      imgSrc: '1',
      ImgArr: []
    },
    customColor: {
      status: false,
      color: 'rgb(0,85,255)'
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
    ColorList: null
  }; //构建MapTheme

  var buildWarnImageOption = function buildWarnImageOption(state, action) {
    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.warnImageStyle;
    } else {
      newOption = warnImageOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, warnImageOption), newOption);

    switch (action.payload.key) {
      case '动态报警图标':
        newOption.icon.imgSrc = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '动态报警图标集合':
        newOption.icon.ImgArr = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : [];
        break;
      // case '动态报警颜色':
      //   newOption.color = action.payload.e;
      //   break;

      case '动态报警展示模式':
        newOption.billboard = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '动态报警大小模式':
        newOption.sizeUnits = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'pixels';
        break;
      // case '动态报警大小字段':
      //   newOption.feild = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      //   break;

      case '动态报警大小系数':
        newOption.size = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '动态报警距地高度':
        newOption.heightToGround = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
        break;
      // case '动态报警动画选择':
      //   newOption.animateType = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
      //   break;

      case '动态报警动画速度':
        newOption.animateSpeed = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;
      // case '动态报警跟随缩放':
      //   newOption.zoomFollow = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
      //   break;

      case '动态报警自动避让':
        newOption.autoAvoid = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '动态报警自定义颜色开启':
        newOption.customColor.status = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '动态报警自定义颜色':
        newOption.customColor.color = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
        break;

      case '动态报警透明度':
        newOption.opacity = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;
    }

    state.mapStyle.warnImageStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  // aimatedImageOption -------  报警图层
  // 飞线图层Option
  var flyingLineOption = {
    icon: {
      imgSrc: '1',
      ImgArr: []
    },
    customColor: {
      status: true,
      color: 'rgb(0,85,255)'
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
    styleType: 'toTop'
  }; //构建MapTheme

  var buildFlyingLineOption = function buildFlyingLineOption(state, action) {
    var newOption = {};

    if (state.mapStyle) {
      newOption = state.mapStyle.flyingLineStyle;
    } else {
      newOption = flyingLineOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, flyingLineOption), newOption);

    switch (action.payload.key) {
      case '飞线图标':
        newOption.icon.imgSrc = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '飞线图标集合':
        newOption.icon.ImgArr = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : [];
        break;
      // case '飞线自定义颜色开启':
      //   newOption.customColor.status = action.payload.e;
      //   break;

      case '飞线自定义颜色':
        newOption.customColor.color = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
        break;
      // case '飞线颜色':
      //   newOption.color = action.payload.e;
      //   break;

      case '飞线展示模式':
        newOption.billboard = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '飞线展示类型':
        newOption.styleType = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'toTop';
        break;
      // case '飞线大小模式':
      //   newOption.sizeUnits = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'pixels';
      //   break;
      // case '飞线大小字段':
      //   newOption.feild = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
      //   break;

      case '飞线长度':
        newOption.height = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 100;
        break;

      case '飞线半径':
        newOption.radius = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '飞线距地高度':
        newOption.heightToGround = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
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
        newOption.animateSpeed = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;
      // case '飞线跟随缩放':
      //   newOption.zoomFollow = action.payload.e;
      //   break;
      // case '飞线心跳动态':
      //   newOption.heartbeat = action.payload.e;
      //   break;

      case '飞线自动避让':
        newOption.autoAvoid = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '飞线透明度':
        newOption.opacity = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;
    }

    state.mapStyle.flyingLineStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  /*随机获取颜色*/

  var commonColor = function commonColor(param) {
    var num = 0,
        arr = [];

    if (param) {
      while (num < param) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var cTemp = 'rgb(' + r + ',' + g + ',' + b + ')';
        arr.push(cTemp);
        num++;
      }
    }

    return arr;
  };

  var textOption = {
    fontStyle: {
      fontSize: 14,
      fontFamily: 'MicrosoftYaHei',
      fontWeight: 500,
      color: 'rgba(255,255,255,1)',
      opacity: 1,
      redirect: 1,
      lineHeight: 1
    },
    size: {
      sizeUnits: 'pixels',
      sizeScale: 1
    },
    angle: {
      angle: 0,
      textAnchor: 'middle',
      alignmentBaseline: 'center'
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
      colorArray: ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'],
      opacity: 1,
      antitone: false
    },
    //新增对应的分段方式
    section: {
      color: {
        type: 1,
        colorSectionArr: [],
        colorSectionArr2: []
      }
    },
    // 自定义颜色按钮
    customColorState: false,
    customColor: {
      skin: "customColor1",
      arrayColors: [{
        colorLength: 6,
        id: 1,
        selected: 1,
        thisColorAll: _toConsumableArray(commonColor(6))
      }]
    },
    ColorList: null
  }; //构建MapTheme

  var buildTextMapOption = function buildTextMapOption(state, action) {
    var newOption = {};

    if (state.mapStyle.textStyle) {
      newOption = state.mapStyle.textStyle;
    } else {
      newOption = textOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, textOption), newOption);

    switch (action.payload.key) {
      case '文本图层字体大小':
        newOption.fontStyle.fontSize = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 18;
        break;

      case '文本图层字体颜色':
        newOption.color.color = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'rgba(255,255,255,1)';
        break;

      case '文本图层字体样式':
        newOption.fontStyle.fontFamily = action.payload.e;
        break;

      case '文本图层字体粗细':
        newOption.fontStyle.fontWeight = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 500;
        break;

      case '文本图层透明度':
        newOption.fontStyle.opacity = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '文本图层颜色字段':
        newOption.color.alias = action.payload.e.alias !== undefined && action.payload.e.alias !== null ? action.payload.e.alias : '';
        newOption.color.feild = action.payload.e.value !== undefined && action.payload.e.value !== null ? action.payload.e.value : '';
        break;

      case '文本图层大小模式':
        newOption.size.sizeUnits = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'pixels';
        break;

      case '文本展示模式':
        newOption.billboard = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : true;
        break;

      case '文本图层角度':
        newOption.angle.angle = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
        break;

      case '文本图层文本锚点':
        newOption.angle.textAnchor = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'middle';
        break;

      case '文本图层文本基线':
        newOption.angle.alignmentBaseline = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'center';
        break;

      case '文本图层文字方向':
        newOption.fontStyle.redirect = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '文本图层距地高度':
        newOption.fontStyle.lineHeight = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '文本图层颜色分组字段类型':
        newOption.color.type = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '文本图层颜色反序':
        newOption.color.antitone = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '文本图层色系长度选择':
        newOption.color.colorArray = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e.colors : '';
        newOption.ColorList = newOption.color.colorArray;
        break;

      case '文本图层对应的分段方式':
        newOption.section.color.type = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '文本图层自定义颜色显隐控制':
        if (newOption.customColorState === undefined) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        }

        if (newOption.customColorState === false) {
          newOption.color.colorArray = customColor1(newOption.customColor, newOption.customColor);
        } else if (newOption.customColorState === true) {
          if (newOption.ColorList === null) {
            newOption.color.colorArray = ['rgb(54,98,206)', 'rgb(156,185,244)', 'rgb(37,59,103)', 'rgb(204,88,73)', 'rgb(34,30,30)', 'rgb(76,159,236)'];
          } else {
            newOption.color.colorArray = newOption.ColorList;
          }
        }

        newOption.customColorState = action.payload.e;
        break;

      case '文本图层自定义颜色数组':
        newOption.customColor.arrayColors = action.payload.e;
        newOption.color.colorArray = customColor1(newOption.customColor, newOption.color.antitone);
    }

    state.mapStyle.textStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  // scenegraphOption
  // 模型图层Option
  var scenegraphOption = {
    icon: {
      imgSrc: 1,
      ImgArr: []
    },
    scenegraph: 'https://www.dataojo.com/docloudresource/models/docloud-model/002/002.gltf',
    modelType: false,
    color: {
      color: 'rgb(0,85,255)',
      status: false,
      opacity: 1
    },
    sizeScale: 25,
    height: 0,
    animations: {
      speed: 1,
      playing: true
    }
  }; //构建MapTheme

  var buildscenegraphOption = function buildscenegraphOption(state, action) {
    var newOption = {};

    if (state.mapStyle.scenegraphStyle) {
      newOption = state.mapStyle.scenegraphStyle;
    } else {
      newOption = scenegraphOption;
    }

    newOption = _objectSpread2(_objectSpread2({}, scenegraphOption), newOption);

    switch (action.payload.key) {
      case '选择模型样式':
        newOption.icon.imgSrc = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '模型图层模型地址':
        newOption.scenegraph = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : '';
        break;

      case '模型大小系数':
        newOption.sizeScale = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '模型是否开启动画':
        newOption.animations.playing = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : true;
        break;

      case '模型动画速度':
        newOption.animations.speed = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '模型自定义颜色':
        newOption.color.color = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 'rgb(0,53,177)';
        break;

      case '模型自定义颜色开关':
        newOption.color.status = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '是否自定义模型':
        newOption.modelType = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : false;
        break;

      case '模型透明度':
        newOption.color.opacity = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 1;
        break;

      case '模型距地高度':
        newOption.height = action.payload.e !== undefined && action.payload.e !== null ? action.payload.e : 0;
        break;
    }

    state.mapStyle.scenegraphStyle = newOption;
    state.selectDrawLayerData.style = state.mapStyle;
  };

  function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  function isArray(arr) {
    return Array.isArray(arr);
  }

  function merge(target) {
    for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }

    return arg.reduce(function (acc, cur) {
      return Object.keys(cur).reduce(function (subAcc, key) {
        var srcVal = cur[key];

        if (isObject(srcVal)) {
          subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal);
        } else if (isArray(srcVal)) {
          // series: []，下层数组直接赋值
          subAcc[key] = srcVal.map(function (item, idx) {
            if (isObject(item)) {
              var curAccVal = subAcc[key] ? subAcc[key] : [];
              return merge(curAccVal[idx] ? curAccVal[idx] : {}, item);
            } else {
              return item;
            }
          });
        } else {
          subAcc[key] = srcVal;
        }

        return subAcc;
      }, acc);
    }, target);
  } // 散点图

  var buildMapWidgetConfig = function buildMapWidgetConfig(_ref) {
    var _state$selectDrawLaye, _state$selectDrawLaye2;

    var state = _ref.state,
        action = _ref.action;
    console.log('sdfasdf11sadfsad', state === null || state === void 0 ? void 0 : (_state$selectDrawLaye = state.selectDrawLayerData) === null || _state$selectDrawLaye === void 0 ? void 0 : _state$selectDrawLaye.layerTypeStr);

    switch (state === null || state === void 0 ? void 0 : (_state$selectDrawLaye2 = state.selectDrawLayerData) === null || _state$selectDrawLaye2 === void 0 ? void 0 : _state$selectDrawLaye2.layerTypeStr) {
      /* <------ 散点图 ------> */
      case mapLayerTypeConstant.SCATTER_LAYER:
        buildScatterMapOption(state, action);
        break;

      /* <------ 热力 ------> */

      case mapLayerTypeConstant.HEATMAP_LAYER:
        buildheatMapOption(state, action);
        break;

      /* <------ 柱状 ------> */

      case mapLayerTypeConstant.CUBE_LAYER:
        buildCubeLayerOption(state, action);
        break;

      /* <------ 心跳 ------> */

      case mapLayerTypeConstant.HEARTBEAT_LAYER:
        buildHeartBeatOption(state, action);
        break;

      /* <------ 聚合点 ------> */

      case mapLayerTypeConstant.SIZESCATTER_LAYER:
        buildSizeScatterOption(state, action);
        break;

      /* <------ 飞线 ------> */

      case mapLayerTypeConstant.LINE_LAYER:
        buildLineLayerOption(state, action);
        break;

      /* <------ 多边形 ------> */

      case mapLayerTypeConstant.REGION_LAYER:
        buildRegionLayerOption(state, action);
        break;

      /* <------弧图层（迁徙图）------> */

      case mapLayerTypeConstant.ARC_LAYER:
        buildArcMapOption(state, action);
        break;

      /* <------ od ------> */

      case mapLayerTypeConstant.OD_LAYER:
        buildArcMapOption(state, action);
        break;

      /* <------ 蜂窝 ------> */

      case mapLayerTypeConstant.HEXAGON_LAYER:
        buildHexagonOption(state, action);
        break;

      /* <------ 动态轨迹图 ------> */

      case mapLayerTypeConstant.TRIPS_LAYER:
        buildTripsLayerOption(state, action);
        break;

      /* <------ 图标图层 ------> */

      case mapLayerTypeConstant.ICON_LAYER:
        buildIconLayerOption(state, action);
        break;

      /* <------ 标签图层 ------> */

      case mapLayerTypeConstant.LABEL_LAYER:
        buildlabelTextOption(state, action);
        break;

      /* <------ 报警图层 ------> */

      case mapLayerTypeConstant.WARNIMAGE_LAYER:
        buildWarnImageOption(state, action);
        break;

      /* <------ 飞线图层 ------> */

      case mapLayerTypeConstant.FLYINGLINE_LAYER:
        buildFlyingLineOption(state, action);
        break;

      /* <------ 文本图层 ------> */

      case mapLayerTypeConstant.TEXT_LAYER:
        buildTextMapOption(state, action);
        break;

      /* <------ 模型图层 ------> */

      case mapLayerTypeConstant.SCENEGRAPH_LAYER:
        buildscenegraphOption(state, action);
        break;
    }
  };
  function defaultMapOption() {
    var defaultStyle = {
      arcStyle: arcMapOption,
      cubeStyle: cubeLayerOption,
      gridStyle: '',
      heartBeatStyle: heartBeatOption,
      heatStyle: heatMapOption,
      hexagonStyle: hexagonOption,
      iconStyle: iconLayerOption,
      lineStyle: lineLayerOption,
      regionStyle: regionOption,
      scatterStyle: scatterMapOption,
      sizeScatterStyle: sizeScatterOption,
      tripsStyle: tripsOption,
      labelTextStyle: labelTextOption,
      warnImageStyle: warnImageOption,
      flyingLineStyle: flyingLineOption,
      textStyle: textOption,
      scenegraphStyle: scenegraphOption
    };
    return defaultStyle;
  }
  function initMapOption(style) {
    var defaultStyle = {
      arcStyle: arcMapOption,
      cubeStyle: cubeLayerOption,
      gridStyle: '',
      heartBeatStyle: heartBeatOption,
      heatStyle: heatMapOption,
      hexagonStyle: hexagonOption,
      iconStyle: iconLayerOption,
      lineStyle: lineLayerOption,
      regionStyle: regionOption,
      scatterStyle: scatterMapOption,
      sizeScatterStyle: sizeScatterOption,
      tripsStyle: tripsOption,
      labelTextStyle: labelTextOption,
      warnImageStyle: warnImageOption,
      flyingLineStyle: flyingLineOption,
      textStyle: textOption,
      scenegraphStyle: scenegraphOption
    };
    var newStyle = merge({}, defaultStyle, style);
    return newStyle;
  } //按需注册地图样式
  // export let initMapOption = (state, action) => {
  //   // if (state.layerType === mapLayerTypeConstant.HEATMAP_LAYER) {
  //   //   if (state.mapStyle) {
  //   //     //再执行一次默认属性,确保新值内部错误
  //   //     state.mapStyle = {
  //   //       ...heartMapOption,
  //   //       ...state.mapStyle,
  //   //     };
  //   //   } else {
  //   //     state.mapStyle = heartMapOption;
  //   //   }
  //   // }
  //   // if (state.layerType === mapLayerTypeConstant.SCATTER_LAYER) {
  //   //   if (state.mapStyle) {
  //   //     //再执行一次默认属性,确保新值内部错误
  //   //     state.mapStyle = {
  //   //       ...scatterMapOption,
  //   //       ...state.mapStyle,
  //   //     };
  //   //   } else {
  //   //     state.mapStyle = scatterMapOption;
  //   //   }
  //   // }
  //   // if (state.layerType === mapLayerTypeConstant.ARC_LAYER) {
  //   //   if (state.mapStyle) {
  //   //     //再执行一次默认属性,确保新值内部错误
  //   //     state.mapStyle = {
  //   //       ...arcMapOption,
  //   //       ...state.mapStyle,
  //   //     };
  //   //   } else {
  //   //     state.mapStyle = arcMapOption;
  //   //   }
  //   // }
  //   state.mapStyle = JSON.parse(JSON.stringify(state.mapStyle));
  // };
  // 修改自定义分段

  function changeCustomGroupConfig(state, action) {
    var _state$selectDrawLaye3;

    var tempObj = state.selectDrawLayerData.customGroup;

    switch (state === null || state === void 0 ? void 0 : (_state$selectDrawLaye3 = state.selectDrawLayerData) === null || _state$selectDrawLaye3 === void 0 ? void 0 : _state$selectDrawLaye3.layerTypeStr) {
      /* <------ 散点图 ------> */
      case mapLayerTypeConstant.SCATTER_LAYER:
        tempObj.scatterSection.color = action.customGroup;
        break;

      /* <------ 热力 ------> */

      case mapLayerTypeConstant.HEATMAP_LAYER:
        tempObj.heatSection.color = action.customGroup;
        break;

      /* <------ 柱状 ------> */

      case mapLayerTypeConstant.CUBE_LAYER:
        tempObj.cubeSection.color = action.customGroup;
        break;

      /* <------ 心跳 ------> */
      // case mapLayerTypeConstant.HEARTBEAT_LAYER:
      //   tempObj.heartbeatSection.color = action.customGroup;
      //   break;

      /* <------ 聚合点 ------> */

      case mapLayerTypeConstant.SIZESCATTER_LAYER:
        tempObj.sizeScatterSection.color = action.customGroup;
        break;

      /* <------ 飞线 ------> */

      case mapLayerTypeConstant.LINE_LAYER:
        tempObj.lineSection.color = action.customGroup;
        break;

      /* <------ 多边形 ------> */

      case mapLayerTypeConstant.REGION_LAYER:
        tempObj.regionSection.color = action.customGroup;
        break;

      /* <------弧图层（迁徙图）------> */

      case mapLayerTypeConstant.ARC_LAYER:
        tempObj.arcSection.color = action.customGroup;
        break;

      /* <------ od ------> */

      case mapLayerTypeConstant.OD_LAYER:
        tempObj.arcSection.color = action.customGroup;
        break;

      /* <------ 蜂窝 ------> */

      case mapLayerTypeConstant.HEXAGON_LAYER:
        tempObj.hexagonSection.color = action.customGroup;
        break;

      /* <------ 动态轨迹图 ------> */

      case mapLayerTypeConstant.TRIPS_LAYER:
        tempObj.tripsSection.color = action.customGroup;
        break;

      /* <------ 图标图层 ------> */

      case mapLayerTypeConstant.ICON_LAYER:
        tempObj.iconSection.color = action.customGroup;
        break;

      case mapLayerTypeConstant.TEXT_LAYER:
        tempObj.textSection.color = action.customGroup;
        break;
    }

    state.selectDrawLayerData.customGroup = tempObj;
  }

  ({
    transitionInterpolator: new deck_gl.FlyToInterpolator(),
    transitionDuration: 1000
  }); //数据请求体构建

  function doFortmatChart(tableHeaderData, fortmatChart, dataSource) {
    var dimension = [];

    for (var i in tableHeaderData) {
      if (tableHeaderData.hasOwnProperty(i)) {
        dimension.push(_objectSpread2(_objectSpread2({}, tableHeaderData[i]), {}, {
          //index 为number 类型
          index: Number(tableHeaderData[i].index)
        }));
      }
    }

    fortmatChart.dimension = dimension; //api的时候取值不一样

    if ((dataSource === null || dataSource === void 0 ? void 0 : dataSource.data_type) === 'api') {
      fortmatChart.catalog = dataSource === null || dataSource === void 0 ? void 0 : dataSource.id;
    } //共享数据 因为很多存储在一张表  所以需要特殊处理


    if (dataSource !== null && dataSource !== void 0 && dataSource.isPublic || dataSource !== null && dataSource !== void 0 && dataSource.is_public) {
      var _dataSource$dataCql;

      console.log('dataCql', dataSource === null || dataSource === void 0 ? void 0 : dataSource.dataCql); // let { dataUrl, dataCql, catalog, dataParam } = dataSource;

      if ((dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$dataCql = dataSource.dataCql) === null || _dataSource$dataCql === void 0 ? void 0 : _dataSource$dataCql.indexOf('%25')) > -1) {
        dataSource.dataCql = dataSource.dataCql.replace(/%25/, '%');
      }

      fortmatChart = _objectSpread2(_objectSpread2({}, fortmatChart), {}, {
        extraSql: dataSource.dataCql
      });
    } //删除无用


    for (var _i in fortmatChart.where.conditions) {
      delete fortmatChart.where.conditions[_i].type;
    }

    return fortmatChart;
  }
  function layerDataGeoJson(layerCon, tableHeaderData) {
    var features = []; //geojson geometry和properties 构建   LineString 和  MultiLineString 的区分

    layerCon.layerData.forEach(function (element) {
      var geojsondata = (element === null || element === void 0 ? void 0 : element.geojson) && JSON.parse(element === null || element === void 0 ? void 0 : element.geojson);

      if (geojsondata) {
        var feature = {
          type: 'Feature',
          geometry: {
            type: (geojsondata === null || geojsondata === void 0 ? void 0 : geojsondata.type) === 'LineString' ? 'MultiLineString' : geojsondata === null || geojsondata === void 0 ? void 0 : geojsondata.type,
            coordinates: (geojsondata === null || geojsondata === void 0 ? void 0 : geojsondata.type) === 'LineString' ? [geojsondata === null || geojsondata === void 0 ? void 0 : geojsondata.coordinates] : geojsondata === null || geojsondata === void 0 ? void 0 : geojsondata.coordinates
          },
          //构建所有属性  弹框使用
          properties: _objectSpread2(_objectSpread2({}, element), {}, {
            table_head: tableHeaderData,
            id: layerCon.id
          })
        };
        features.push(feature);
      }
    });
    return {
      type: 'FeatureCollection',
      features: features
    };
  } //默认层级

  var defaultZoom = {
    minZoom: 0,
    maxZoom: 17
  }; //默认分段

  var defaultSection = {
    lineSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    scatterSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    heatSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    cubeSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    gridSection: {
      color: {
        otype: 1,
        colorSectionArr: []
      }
    },
    hexagonSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    //迁徙图
    arcSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    regionSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    //聚合点
    sizeScatterSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    //图标图层样式
    iconSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    //动态轨迹图
    tripsSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    },
    //文本图层样式
    textSection: {
      color: {
        type: 1,
        colorSectionArr: []
      }
    }
  }; //图层属性兼容

  function layerProCon(layerCon) {
    console.log('sadfasdfsadfs', layerCon);
    var initialViewState = {
      bearing: -10.06711409395973,
      latitude: 39.699932837911874,
      longitude: 103.38593838598987,
      pitch: 0,
      zoom: 2.367807179059212
    }; //在这里进行兼容
    //地图样式配置

    if (layerCon !== null && layerCon !== void 0 && layerCon.style) {
      if (typeof (layerCon === null || layerCon === void 0 ? void 0 : layerCon.style) === 'string') {
        var mapStyle = JSON.parse(layerCon === null || layerCon === void 0 ? void 0 : layerCon.style);
        layerCon.style = initMapOption(mapStyle);
        console.log('mapStyleNEW', layerCon.style);
      } else {
        var _mapStyle = layerCon === null || layerCon === void 0 ? void 0 : layerCon.style;

        layerCon.style = initMapOption(_mapStyle);
        console.log('mapStyleNEW', layerCon.style);
      } //创建、获取时候进行全量兼容

    } else {
      layerCon.style = defaultMapOption();
    } //分段


    if (layerCon !== null && layerCon !== void 0 && layerCon.customGroup) {
      if (typeof (layerCon === null || layerCon === void 0 ? void 0 : layerCon.customGroup) === 'string') {
        var customGroup = JSON.parse(layerCon === null || layerCon === void 0 ? void 0 : layerCon.customGroup);
        layerCon.customGroup = customGroup;
        console.log('customGroup', customGroup);
      } else {
        var _customGroup = layerCon === null || layerCon === void 0 ? void 0 : layerCon.customGroup;

        layerCon.customGroup = _customGroup;
        console.log('customGroup', _customGroup);
      }
    } else {
      layerCon.customGroup = defaultSection;
    } //显示层级


    if (layerCon !== null && layerCon !== void 0 && layerCon.zoom) {
      if (typeof (layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom) === 'string') {
        var zoom = JSON.parse(layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom);
        layerCon.zoom = zoom;
        console.log('zoom', zoom);
      } else {
        var _zoom = layerCon === null || layerCon === void 0 ? void 0 : layerCon.zoom;

        layerCon.zoom = _zoom;
        console.log('zoom', _zoom);
      }
    } else {
      layerCon.zoom = defaultZoom;
    } //弹框信息


    if (layerCon !== null && layerCon !== void 0 && layerCon.slideTip) {
      if (typeof (layerCon === null || layerCon === void 0 ? void 0 : layerCon.slideTip) === 'string') {
        var slideTip = JSON.parse(layerCon === null || layerCon === void 0 ? void 0 : layerCon.slideTip);
        layerCon.slideTip = slideTip;
      } else {
        var _slideTip = layerCon === null || layerCon === void 0 ? void 0 : layerCon.slideTip;

        layerCon.slideTip = _slideTip;
      }
    } //数据


    if (layerCon !== null && layerCon !== void 0 && layerCon.option) {
      if (typeof (layerCon === null || layerCon === void 0 ? void 0 : layerCon.option) === 'string') {
        var option = JSON.parse(layerCon === null || layerCon === void 0 ? void 0 : layerCon.option);
        layerCon.option = option;
      } else {
        var _option = layerCon === null || layerCon === void 0 ? void 0 : layerCon.option;

        layerCon.option = _option;
      }
    } //图例


    if (layerCon !== null && layerCon !== void 0 && layerCon.legend && typeof (layerCon === null || layerCon === void 0 ? void 0 : layerCon.option) === 'string') {
      var legend = JSON.parse(layerCon === null || layerCon === void 0 ? void 0 : layerCon.legend);
      layerCon.legend = legend;
      console.log('legend', legend);
    } //相机


    if (layerCon.LayerDataFeatures[0]) {
      var bboxBounds = turf.bbox(layerCon.LayerDataGeoJson); // console.log('bboxData', bboxBounds);

      var viewport = new WebMercatorViewport__default["default"]({
        width: document.body.clientWidth - 613,
        height: document.body.clientHeight - 54 // width:
        //   document.body.clientWidth - 600 > 0
        //     ? document.body.clientWidth - 600
        //     : document.body.clientWidth,
        // height:
        //   document.body.clientHeight - 64 > 0
        //     ? document.body.clientHeight - 64
        //     : document.body.clientHeight,

      });

      if (bboxBounds[0] === bboxBounds[2] && bboxBounds[1] === bboxBounds[3]) {
        initialViewState = {
          latitude: bboxBounds[1],
          longitude: bboxBounds[0],
          // cameraLock: false,
          // cameraLockType: 1,
          zoom: 14,
          maxZoom: 17,
          pitch: 0,
          bearing: 0 // ...FlyToCamera,

        };
      } else {
        var _viewport$fitBounds = viewport.fitBounds([[bboxBounds[0] === -180 ? -179 : bboxBounds[0], bboxBounds[1] === -90 ? -89 : bboxBounds[1]], [bboxBounds[2] === 180 ? 179 : bboxBounds[2], bboxBounds[3] === 90 ? 89 : bboxBounds[3]]], {
          padding: 0
        }),
            longitude = _viewport$fitBounds.longitude,
            latitude = _viewport$fitBounds.latitude,
            _zoom2 = _viewport$fitBounds.zoom;

        initialViewState = {
          latitude: latitude,
          longitude: longitude,
          // cameraLock: false,
          // cameraLockType: 1,
          zoom: _zoom2,
          maxZoom: 17,
          pitch: 0,
          bearing: 0 // ...FlyToCamera,

        };
        layerCon.initialViewState = initialViewState;
        console.log('asDASDasdasdasD', _zoom2);
      }
    }

    if (layerCon !== null && layerCon !== void 0 && layerCon.camera) ; else {
      console.log('asdfas34353555', layerCon.initialViewState); // yield put({ type: 'getFirstViewCameraReducer', payload: newCamera });
    }

    if (layerCon !== null && layerCon !== void 0 && layerCon.defaultInteraction) {
      if (typeof (layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction) === 'string') {
        var defaultInteraction = JSON.parse(layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction); // layerCon.defaultInteraction = initMapOption(defaultInteraction);

        layerCon.defaultInteraction = defaultInteraction;
        console.log('defaultInteraction', layerCon.defaultInteraction);
      } else {
        layerCon === null || layerCon === void 0 ? void 0 : layerCon.defaultInteraction; // layerCon.style = initMapOption(defaultInteraction);


        console.log('defaultInteraction', layerCon.defaultInteraction);
      } //创建、获取时候进行全量兼容

    } else {
      // layerCon.defaultInteraction = defaultMapOption();
      layerCon.defaultInteraction = null;
    }

    return layerCon;
  } //图层属性兼容

  // import { PathUtil } from 'bizcharts';
  // const dispatch = window.g_app._store.dispatch;
  // onceIndex：区分是否为第一次执行filterDataModel的变量

  var onceIndex = 0;
  var buildNewMapModel = {
    namespace: 'buildNewMapModel',
    state: {
      daslayerId: null,
      firstViewCamera: null,
      allMapLayers: [],
      mapLayers: [],
      mapStyle: null,
      deckLayer: [],
      selectDataLayerData: null,
      selectDrawLayerData: null,
      //数据选中的对应的dataSource;
      linkDataSource: null,
      fortmatChartInit: {
        catalog: '',
        sourceType: sourceType.GEOMESA,
        features: '',
        dimension: [],
        where: {
          mode: 1,
          conditions: []
        }
      },
      //++++++
      //分组图层id
      groupLayerId: null,
      // 是否分享
      share: null,
      // 区分数据弹框功能 0:添加数据；1:更换数据；
      selectDataType: 0,
      // 自定义分段的弹框显隐
      customGroupShow: false,
      iviewState: null,
      deleteMapLayers: [],
      viewport: null,
      // 渲染模式
      renderMode: 'normal',
      // 场景设置相机设置相关（保存相机视角、指北针显隐、锁定相机位置）
      camera: null,
      // 当前选择的地图样式
      deckMapStyle: defaultDeckMapStyle,
      saveCamera: null,
      // 修改图层名称相关 start
      activeUpdate: null,
      layerName: '',
      // 修改图层名称相关 end
      interactiveData: [],
      //交互获取
      // loadingProgress: true,
      loadingLayerCount: 0,
      loadingCurLayerCount: 0,
      replaceSelectDataLayer: false,
      refreshModelShow: false,
      refresh: {
        time: 0
      }
    },
    subscriptions: {// setup({ dispatch, history }) {},
    },
    effects: {
      /**
       *@method getAllMapLayerEffect
       * 获取所有图层信息
       * @params {id}
       */
      getShareAllMapLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function getShareAllMapLayerEffect(_ref, _ref2) {
        var _res$data;

        var payload, call, put, params, res, _res$data2, data, camera, allLayers, layerCount, index, _allLayers$index, _allLayers$index3, _allLayers$index2, _allLayers$index2$lin, _res$data3;

        return regeneratorRuntime.wrap(function getShareAllMapLayerEffect$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = _ref.payload;
                call = _ref2.call, put = _ref2.put;
                // let thisModel = yield select(state => state.buildNewMapModel);
                //判断类型
                params = {
                  shareUrl: payload
                };
                _context.next = 5;
                return call(getShareIdService, params);

              case 5:
                res = _context.sent;

                if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.code) {
                  _context.next = 42;
                  break;
                }

                data = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data;
                console.log('获取所有分享图层', data);
                _context.next = 11;
                return put({
                  type: 'mapSceneModel/getIdMapStyle',
                  payload: data === null || data === void 0 ? void 0 : data.mapId
                });

              case 11:
                _context.next = 13;
                return put({
                  type: 'cameraFlightModel/select_list_by_layer_id_Effect',
                  payload: data === null || data === void 0 ? void 0 : data.id
                });

              case 13:
                if (!(data !== null && data !== void 0 && data.camera)) {
                  _context.next = 21;
                  break;
                }

                camera = JSON.parse(data.camera);
                _context.next = 17;
                return put({
                  type: 'saveCameraReducer',
                  payload: camera
                });

              case 17:
                _context.next = 19;
                return put({
                  type: 'defaultCameraReducer',
                  payload: camera
                });

              case 19:
                _context.next = 21;
                break;

              case 21:
                _context.next = 23;
                return put({
                  type: 'getRenderModeReducer',
                  payload: data === null || data === void 0 ? void 0 : data.renderMode
                });

              case 23:
                _context.next = 25;
                return put({
                  type: 'buildBaseSettingModel/editMapNameReducer',
                  payload: data.name
                });

              case 25:
                // -------- 基本设置 end --------
                allLayers = data !== null && data !== void 0 && data.linkLayers ? [data].concat(_toConsumableArray(data === null || data === void 0 ? void 0 : data.linkLayers)) : [data];
                console.log('获取所有分享图层1', allLayers); //所有图层计数

                layerCount = (allLayers === null || allLayers === void 0 ? void 0 : allLayers.length) || 0; //请求表头数据

                _context.t0 = regeneratorRuntime.keys(allLayers);

              case 29:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 40;
                  break;
                }

                index = _context.t1.value;

                if (!allLayers.hasOwnProperty(index)) {
                  _context.next = 38;
                  break;
                }

                if ((_allLayers$index = allLayers[index]) !== null && _allLayers$index !== void 0 && _allLayers$index.linkStyles) {
                  layerCount = layerCount + ((_allLayers$index2 = allLayers[index]) === null || _allLayers$index2 === void 0 ? void 0 : (_allLayers$index2$lin = _allLayers$index2.linkStyles) === null || _allLayers$index2$lin === void 0 ? void 0 : _allLayers$index2$lin.length) || 0;
                }

                if (((_allLayers$index3 = allLayers[index]) === null || _allLayers$index3 === void 0 ? void 0 : _allLayers$index3.isDelete) === 2) {
                  layerCount = layerCount - 1;
                }

                allLayers[index].option = JSON.parse(allLayers[index].option);

                if (!allLayers[0].option) {
                  allLayers[index].zIndex = index - 1;
                } else {
                  allLayers[index].zIndex = index;
                }

                _context.next = 38;
                return put({
                  type: 'getMapDataEffect',
                  payload: allLayers[index]
                });

              case 38:
                _context.next = 29;
                break;

              case 40:
                _context.next = 43;
                break;

              case 42:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.message) || '获取数据失败');

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, getShareAllMapLayerEffect);
      }),

      /**
       *@method getAllMapLayerEffect
       * 获取所有图层信息
       * @params {id}
       */
      getAllMapLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function getAllMapLayerEffect(_ref3, _ref4) {
        var _res$data4;

        var payload, call, put, select, thisModel, param, res, _res$data5, data, camera, getGroupListParam, allLayers, layerCount, index, _allLayers$index4, _allLayers$index5, _allLayers$index7, _allLayers$index8, _allLayers$index6, _allLayers$index6$lin, _res$data6;

        return regeneratorRuntime.wrap(function getAllMapLayerEffect$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = _ref3.payload;
                call = _ref4.call, put = _ref4.put, select = _ref4.select;
                _context2.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context2.sent;
                //判断类型
                param = {
                  id: payload.toString()
                };
                _context2.next = 8;
                return call(getAllMapLayerService, param);

              case 8:
                res = _context2.sent;

                if (res !== null && res !== void 0 && (_res$data4 = res.data) !== null && _res$data4 !== void 0 && _res$data4.code) {
                  _context2.next = 59;
                  break;
                }

                data = res === null || res === void 0 ? void 0 : (_res$data5 = res.data) === null || _res$data5 === void 0 ? void 0 : _res$data5.data;
                console.log('获取所有图层', data); //获取分组图层id

                _context2.next = 14;
                return put({
                  type: 'getGroupLayerIdReducer',
                  payload: data === null || data === void 0 ? void 0 : data.id
                });

              case 14:
                _context2.next = 16;
                return put({
                  type: 'getIsShareReducer',
                  payload: data
                });

              case 16:
                _context2.next = 18;
                return put({
                  type: 'widgetManageModel/getComponentTypeReducer',
                  payload: data.componentType
                });

              case 18:
                _context2.next = 20;
                return put({
                  type: 'mapSceneModel/getMapStyle',
                  payload: data === null || data === void 0 ? void 0 : data.mapId
                });

              case 20:
                _context2.next = 22;
                return put({
                  type: 'mapSceneModel/getIdMapStyle',
                  payload: data === null || data === void 0 ? void 0 : data.mapId
                });

              case 22:
                _context2.next = 24;
                return put({
                  type: 'cameraFlightModel/select_list_by_layer_id_Effect',
                  payload: data === null || data === void 0 ? void 0 : data.id
                });

              case 24:
                if (!(data !== null && data !== void 0 && data.camera)) {
                  _context2.next = 32;
                  break;
                }

                camera = JSON.parse(data.camera);
                _context2.next = 28;
                return put({
                  type: 'saveCameraReducer',
                  payload: camera
                });

              case 28:
                _context2.next = 30;
                return put({
                  type: 'defaultCameraReducer',
                  payload: camera
                });

              case 30:
                _context2.next = 32;
                break;

              case 32:
                _context2.next = 34;
                return put({
                  type: 'getRenderModeReducer',
                  payload: data === null || data === void 0 ? void 0 : data.renderMode
                });

              case 34:
                _context2.next = 36;
                return put({
                  type: 'buildBaseSettingModel/editMapNameReducer',
                  payload: data.name
                });

              case 36:
                //  获取分组列表
                getGroupListParam = {
                  groupId: data.groupId,
                  componentType: data.componentType
                };
                _context2.next = 39;
                return put({
                  type: 'groupModel/getGroupListEffect',
                  payload: getGroupListParam
                });

              case 39:
                _context2.next = 41;
                return put({
                  type: 'widgetManageModel/dasTagListFunEffect',
                  payload: {
                    componentId: data === null || data === void 0 ? void 0 : data.id,
                    componentType: data === null || data === void 0 ? void 0 : data.componentType
                  }
                });

              case 41:
                // -------- 基本设置 end --------
                allLayers = data !== null && data !== void 0 && data.linkLayers ? [data].concat(_toConsumableArray(data === null || data === void 0 ? void 0 : data.linkLayers)) : [data];
                console.log('获取所有图层1', allLayers); //所有图层计数

                layerCount = (allLayers === null || allLayers === void 0 ? void 0 : allLayers.length) || 0; //请求表头数据

                _context2.t0 = regeneratorRuntime.keys(allLayers);

              case 45:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 57;
                  break;
                }

                index = _context2.t1.value;

                if (!allLayers.hasOwnProperty(index)) {
                  _context2.next = 55;
                  break;
                }

                if (Number((_allLayers$index4 = allLayers[index]) === null || _allLayers$index4 === void 0 ? void 0 : _allLayers$index4.option) !== 0 && (_allLayers$index5 = allLayers[index]) !== null && _allLayers$index5 !== void 0 && _allLayers$index5.linkStyles) {
                  layerCount = layerCount + ((_allLayers$index6 = allLayers[index]) === null || _allLayers$index6 === void 0 ? void 0 : (_allLayers$index6$lin = _allLayers$index6.linkStyles) === null || _allLayers$index6$lin === void 0 ? void 0 : _allLayers$index6$lin.length) || 0;
                }

                if (((_allLayers$index7 = allLayers[index]) === null || _allLayers$index7 === void 0 ? void 0 : _allLayers$index7.isDelete) === 2 || Number((_allLayers$index8 = allLayers[index]) === null || _allLayers$index8 === void 0 ? void 0 : _allLayers$index8.option) === 0) {
                  layerCount = layerCount - 1;
                }

                allLayers[index].option = JSON.parse(allLayers[index].option);

                if (allLayers[index].refresh) {
                  allLayers[index].refresh = JSON.parse(allLayers[index].refresh);
                } else {
                  allLayers[index].refresh = thisModel.refresh;
                }

                if (!allLayers[0].option) {
                  allLayers[index].zIndex = index - 1;
                } else {
                  allLayers[index].zIndex = index;
                }

                _context2.next = 55;
                return put({
                  type: 'getMapDataEffect',
                  payload: allLayers[index]
                });

              case 55:
                _context2.next = 45;
                break;

              case 57:
                _context2.next = 60;
                break;

              case 59:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data6 = res.data) === null || _res$data6 === void 0 ? void 0 : _res$data6.message) || '获取数据失败');

              case 60:
              case "end":
                return _context2.stop();
            }
          }
        }, getAllMapLayerEffect);
      }),
      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

      /**
       *@method createMapEffect
       * 创建图层组
       * @params {id}
       */
      createMapEffect: /*#__PURE__*/regeneratorRuntime.mark(function createMapEffect(_ref5, _ref6) {
        var _res$data7;

        var call, put, select, thisModel, groupModel, option, dataType, dataTypeId, i, element, params, res, paramRouterRedux;
        return regeneratorRuntime.wrap(function createMapEffect$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                call = _ref6.call, put = _ref6.put, select = _ref6.select;
                _context3.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context3.sent;
                _context3.next = 7;
                return select(function (state) {
                  return state.groupModel;
                });

              case 7:
                groupModel = _context3.sent;

                if (thisModel.linkDataSource) {
                  _context3.next = 11;
                  break;
                }

                antd.message.warn('请选择数据');
                return _context3.abrupt("return");

              case 11:
                option = {
                  dataSource: thisModel.linkDataSource,
                  fortmatChart: thisModel.fortmatChartInit
                };
                dataType = (option === null || option === void 0 ? void 0 : option.dataSource.geo_type) || '';
                dataTypeId = 0;
                _context3.t0 = regeneratorRuntime.keys(layerDataType);

              case 15:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 24;
                  break;
                }

                i = _context3.t1.value;

                if (!Object.hasOwnProperty.call(layerDataType, i)) {
                  _context3.next = 22;
                  break;
                }

                element = layerDataType[i];

                if (!(element.dataType.indexOf(dataType) > -1)) {
                  _context3.next = 22;
                  break;
                }

                dataTypeId = element.id;
                return _context3.abrupt("break", 24);

              case 22:
                _context3.next = 15;
                break;

              case 24:
                params = {
                  name: thisModel.linkDataSource.name,
                  dataid: thisModel.linkDataSource.id,
                  option: JSON.stringify(option),
                  type: dataTypeId,
                  mapId: defaultDeckMapStyle.toString(),
                  style: JSON.stringify(defaultMapOption()),
                  zoom: JSON.stringify(initZoom),
                  customGroup: JSON.stringify(defaultSection),
                  groupId: Number(groupModel.groupId) || 0
                };
                _context3.next = 27;
                return call(createMapService, params, 'workspaceFilter');

              case 27:
                res = _context3.sent;

                if (res !== null && res !== void 0 && (_res$data7 = res.data) !== null && _res$data7 !== void 0 && _res$data7.code) {
                  _context3.next = 38;
                  break;
                }

                if (!res.data.data) {
                  _context3.next = 35;
                  break;
                }

                paramRouterRedux = {
                  id: res.data.data.id.toString(),
                  groupId: groupModel.groupId
                };
                _context3.next = 33;
                return put(router.routerRedux.push({
                  pathname: '/explore/build-map',
                  query: paramRouterRedux
                }));

              case 33:
                _context3.next = 36;
                break;

              case 35:
                antd.message.error(res.data.message);

              case 36:
                _context3.next = 39;
                break;

              case 38:
                antd.message.error(res.data.message);

              case 39:
              case "end":
                return _context3.stop();
            }
          }
        }, createMapEffect);
      }),

      /**
       *@method addDataLayerEffect
       * 新增关联图层
       * @params {xxx}
       */
      addDataLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function addDataLayerEffect(_ref7, _ref8) {
        var _res$data8;

        var call, put, select, thisModel, option, dataType, dataTypeId, i, element, param, res, data;
        return regeneratorRuntime.wrap(function addDataLayerEffect$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                call = _ref8.call, put = _ref8.put, select = _ref8.select;
                _context4.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context4.sent;

                if (thisModel.linkDataSource) {
                  _context4.next = 8;
                  break;
                }

                antd.message.warn('请选择数据');
                return _context4.abrupt("return");

              case 8:
                option = {
                  dataSource: thisModel.linkDataSource,
                  fortmatChart: thisModel.fortmatChartInit
                };
                dataType = (option === null || option === void 0 ? void 0 : option.dataSource.geo_type) || '';
                dataTypeId = 0;
                _context4.t0 = regeneratorRuntime.keys(layerDataType);

              case 12:
                if ((_context4.t1 = _context4.t0()).done) {
                  _context4.next = 21;
                  break;
                }

                i = _context4.t1.value;

                if (!Object.hasOwnProperty.call(layerDataType, i)) {
                  _context4.next = 19;
                  break;
                }

                element = layerDataType[i];

                if (!(element.dataType.indexOf(dataType) > -1)) {
                  _context4.next = 19;
                  break;
                }

                dataTypeId = element.id;
                return _context4.abrupt("break", 21);

              case 19:
                _context4.next = 12;
                break;

              case 21:
                param = {
                  layerId: Number(thisModel.groupLayerId),
                  name: thisModel.linkDataSource.name,
                  option: JSON.stringify(option),
                  style: JSON.stringify(defaultMapOption()),
                  customGroup: JSON.stringify(defaultSection),
                  type: dataTypeId,
                  //1:散点图
                  refresh: JSON.stringify(thisModel.refresh)
                };
                _context4.next = 24;
                return call(addDasLinkLayerService, param, 'workspaceFilter');

              case 24:
                res = _context4.sent;

                if (res !== null && res !== void 0 && (_res$data8 = res.data) !== null && _res$data8 !== void 0 && _res$data8.code) {
                  _context4.next = 32;
                  break;
                }

                data = res.data.data; // console.log('ASFSADFSAD', data);

                data.option = JSON.parse(data.option);
                data.refresh = JSON.parse(data.refresh);
                _context4.next = 31;
                return put({
                  type: 'getMapDataEffect',
                  payload: data
                });

              case 31:
                antd.message.success('添加成功！');

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, addDataLayerEffect);
      }),

      /**
       *@method replaceDataLayerEffect
       * 更换数据图层
       * @params {xxx}
       */
      replaceDataLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function replaceDataLayerEffect(_ref9, _ref10) {
        var _thisModel$selectData, _res$data9;

        var call, put, select, thisModel, option, dataType, dataTypeId, i, element, params, requestBody, res, data, oldDataLayer, _i, _element;

        return regeneratorRuntime.wrap(function replaceDataLayerEffect$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                call = _ref10.call, put = _ref10.put, select = _ref10.select;
                _context5.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context5.sent;

                if (thisModel.linkDataSource) {
                  _context5.next = 8;
                  break;
                }

                antd.message.warn('请选择数据');
                return _context5.abrupt("return");

              case 8:
                option = {
                  dataSource: thisModel.linkDataSource,
                  fortmatChart: thisModel.fortmatChartInit
                };
                dataType = (option === null || option === void 0 ? void 0 : option.dataSource.geo_type) || '';
                dataTypeId = 0;
                _context5.t0 = regeneratorRuntime.keys(layerDataType);

              case 12:
                if ((_context5.t1 = _context5.t0()).done) {
                  _context5.next = 21;
                  break;
                }

                i = _context5.t1.value;

                if (!Object.hasOwnProperty.call(layerDataType, i)) {
                  _context5.next = 19;
                  break;
                }

                element = layerDataType[i];

                if (!(element.dataType.indexOf(dataType) > -1)) {
                  _context5.next = 19;
                  break;
                }

                dataTypeId = element.id;
                return _context5.abrupt("break", 21);

              case 19:
                _context5.next = 12;
                break;

              case 21:
                params = null, requestBody = null;

                if (!((_thisModel$selectData = thisModel.selectDataLayerData) !== null && _thisModel$selectData !== void 0 && _thisModel$selectData.level)) {
                  params = {
                    layerId: thisModel.groupLayerId.toString(),
                    name: thisModel.linkDataSource.name,
                    //	图层名称
                    option: JSON.stringify(option),
                    type: dataTypeId
                  };
                  requestBody = updateMapService;
                } else {
                  params = {
                    id: thisModel.selectDataLayerData.id,
                    //关联图层id
                    name: thisModel.linkDataSource.name,
                    //	图层名称
                    option: JSON.stringify(option),
                    type: dataTypeId
                  };
                  requestBody = upDasLinkLayerService;
                }

                _context5.next = 25;
                return call(requestBody, params, 'workspaceFilter');

              case 25:
                res = _context5.sent;

                if (res !== null && res !== void 0 && (_res$data9 = res.data) !== null && _res$data9 !== void 0 && _res$data9.code) {
                  _context5.next = 57;
                  break;
                }

                data = res.data.data;
                console.log('ASFSADFSAD', data);
                _context5.next = 31;
                return put({
                  type: 'replaceSelectDataLayerReducer'
                });

              case 31:
                oldDataLayer = JSON.parse(JSON.stringify(thisModel.selectDataLayerData));
                oldDataLayer.createTime = data.createTime;
                oldDataLayer.name = data.name;
                oldDataLayer.option = JSON.parse(data.option);
                oldDataLayer.type = data.type;
                oldDataLayer.updateTime = data.updateTime;
                oldDataLayer.update_time = data.update_time;
                _context5.t2 = regeneratorRuntime.keys(oldDataLayer.linkStyles);

              case 39:
                if ((_context5.t3 = _context5.t2()).done) {
                  _context5.next = 50;
                  break;
                }

                _i = _context5.t3.value;

                if (!Object.hasOwnProperty.call(oldDataLayer.linkStyles, _i)) {
                  _context5.next = 48;
                  break;
                }

                oldDataLayer.linkStyles[_i].option = JSON.parse(data.option);
                oldDataLayer.linkStyles[_i].type = data.type;
                _element = oldDataLayer.linkStyles[_i];

                if (!(_element.id !== oldDataLayer.id)) {
                  _context5.next = 48;
                  break;
                }

                _context5.next = 48;
                return put({
                  type: 'updateLayerStyleEffect',
                  updateType: 4,
                  updateOption: _element
                });

              case 48:
                _context5.next = 39;
                break;

              case 50:
                // const fIndex = oldDataLayer.linkStyles.findIndex(e => e.id === oldDataLayer.id);
                // if (fIndex !== -1) {
                //   oldDataLayer.linkStyles.splice(fIndex, 1);
                // }
                console.log(oldDataLayer, 'nidongdedinghaoyu'); // 别删--believe me

                onceIndex = oldDataLayer.zIndex; // 待更新

                _context5.next = 54;
                return put({
                  type: 'getMapDataEffect',
                  payload: oldDataLayer
                });

              case 54:
                _context5.next = 56;
                return put({
                  type: 'filterDataModel/resetNullReducer'
                });

              case 56:
                antd.message.success('更换数据成功！');

              case 57:
              case "end":
                return _context5.stop();
            }
          }
        }, replaceDataLayerEffect);
      }),
      //删除对应的图层
      deleteDataLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function deleteDataLayerEffect(_ref11, _ref12) {
        var _res$data10;

        var payload, call, put, param, res;
        return regeneratorRuntime.wrap(function deleteDataLayerEffect$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                payload = _ref11.payload;
                call = _ref12.call, put = _ref12.put;
                // let thisModel = yield select(state => state.buildNewMapModel);
                param = {
                  id: payload === null || payload === void 0 ? void 0 : payload.id
                };
                _context6.next = 5;
                return call(deleteDasLinkLayerService, param);

              case 5:
                res = _context6.sent;

                if (res !== null && res !== void 0 && (_res$data10 = res.data) !== null && _res$data10 !== void 0 && _res$data10.code) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 9;
                return put({
                  type: 'deleteDataLayerReducer',
                  payload: payload
                });

              case 9:
                _context6.next = 11;
                return put({
                  type: 'deleteMapLayersReducer',
                  payload: payload
                });

              case 11:
                antd.message.success('删除成功');

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, deleteDataLayerEffect);
      }),
      //删除主图层(通过更新的方法删除主图层)
      deleteGroupLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function deleteGroupLayerEffect(_ref13, _ref14) {
        var _payload$linkStyles, _res$data11;

        var payload, call, put, params, res, res2;
        return regeneratorRuntime.wrap(function deleteGroupLayerEffect$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                payload = _ref13.payload;
                call = _ref14.call, put = _ref14.put;
                // let thisModel = yield select(state => state.buildNewMapModel);
                params = {
                  layerId: payload === null || payload === void 0 ? void 0 : payload.id.toString(),
                  option: '0',
                  style: '0',
                  isDelete: 2
                };
                _context7.next = 5;
                return call(updateMapService, params);

              case 5:
                res = _context7.sent;

                if (!(payload.linkStyles && ((_payload$linkStyles = payload.linkStyles) === null || _payload$linkStyles === void 0 ? void 0 : _payload$linkStyles.length) > 0)) {
                  _context7.next = 11;
                  break;
                }

                _context7.next = 9;
                return call(delLinkStylesService, {
                  layerType: 1,
                  linkLayerId: payload === null || payload === void 0 ? void 0 : payload.id
                });

              case 9:
                res2 = _context7.sent;

                if (res2.data.code) {
                  antd.message.error(res.data.message);
                }

              case 11:
                if (res !== null && res !== void 0 && (_res$data11 = res.data) !== null && _res$data11 !== void 0 && _res$data11.code) {
                  _context7.next = 18;
                  break;
                }

                _context7.next = 14;
                return put({
                  type: 'deleteDataLayerReducer',
                  payload: payload
                });

              case 14:
                _context7.next = 16;
                return put({
                  type: 'deleteMapLayersReducer',
                  payload: payload
                });

              case 16:
                _context7.next = 19;
                break;

              case 18:
                antd.message.error(res.data.message);

              case 19:
              case "end":
                return _context7.stop();
            }
          }
        }, deleteGroupLayerEffect);
      }),
      //删除主图层(通过更新的方法删除主图层)
      updateGroupLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function updateGroupLayerEffect(_ref15, _ref16) {
        var _res$data12;

        var payload, doType, updateKey, call, put, select, thisModel, params, requestBoy, res;
        return regeneratorRuntime.wrap(function updateGroupLayerEffect$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                payload = _ref15.payload, doType = _ref15.doType, updateKey = _ref15.updateKey;
                call = _ref16.call, put = _ref16.put, select = _ref16.select;
                _context8.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context8.sent;
                params = null, requestBoy = null;

                if (!doType) {
                  params = _objectSpread2({
                    layerId: payload === null || payload === void 0 ? void 0 : payload.id.toString()
                  }, updateKey);
                  requestBoy = updateMapService;
                } else {
                  params = _objectSpread2({
                    layerId: Number(thisModel.groupLayerId),
                    id: payload === null || payload === void 0 ? void 0 : payload.id
                  }, updateKey);
                  requestBoy = upDasLinkLayerService;
                }

                _context8.next = 9;
                return call(requestBoy, params);

              case 9:
                res = _context8.sent;

                if (res !== null && res !== void 0 && (_res$data12 = res.data) !== null && _res$data12 !== void 0 && _res$data12.code) {
                  _context8.next = 16;
                  break;
                }

                // const data = res.data.data;
                console.log('updateGroupLayerEffect', payload);
                _context8.next = 14;
                return put({
                  type: 'updateDataLayerReducer',
                  payload: payload
                });

              case 14:
                _context8.next = 17;
                break;

              case 16:
                antd.message.error(res.data.message);

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, updateGroupLayerEffect);
      }),

      /**
       *@method create_das_link_layer_style_effect
       * 新增关联图层
       * @params {id}
       */
      create_das_link_layer_style_effect: /*#__PURE__*/regeneratorRuntime.mark(function create_das_link_layer_style_effect(_ref17, _ref18) {
        var _thisModel$selectData2, _thisModel$selectData3, _thisModel$selectData4, _thisModel$selectData5, _thisModel$selectData6, _res$data13;

        var call, put, select, thisModel, temVal, option, zOrder, dataType, dataTypeId, i, element, param, res, _res$data14, data, resData, _res$data15;

        return regeneratorRuntime.wrap(function create_das_link_layer_style_effect$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                call = _ref18.call, put = _ref18.put, select = _ref18.select;
                _context9.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context9.sent;
                temVal = thisModel.selectDataLayerData.level === 0 ? 1 : 2;
                option = thisModel.selectDataLayerData.option;
                zOrder = (_thisModel$selectData2 = thisModel.selectDataLayerData) !== null && _thisModel$selectData2 !== void 0 && _thisModel$selectData2.linkStyles && ((_thisModel$selectData3 = thisModel.selectDataLayerData) === null || _thisModel$selectData3 === void 0 ? void 0 : _thisModel$selectData3.linkStyles.length) > 0 ? ((_thisModel$selectData4 = thisModel.selectDataLayerData) === null || _thisModel$selectData4 === void 0 ? void 0 : _thisModel$selectData4.linkStyles[((_thisModel$selectData5 = thisModel.selectDataLayerData) === null || _thisModel$selectData5 === void 0 ? void 0 : _thisModel$selectData5.linkStyles.length) - 1].zOrder) + 1 : 2;
                dataType = ((_thisModel$selectData6 = thisModel.selectDataLayerData.option) === null || _thisModel$selectData6 === void 0 ? void 0 : _thisModel$selectData6.dataSource.geo_type) || '';
                dataTypeId = 0;
                _context9.t0 = regeneratorRuntime.keys(layerDataType);

              case 11:
                if ((_context9.t1 = _context9.t0()).done) {
                  _context9.next = 20;
                  break;
                }

                i = _context9.t1.value;

                if (!Object.hasOwnProperty.call(layerDataType, i)) {
                  _context9.next = 18;
                  break;
                }

                element = layerDataType[i];

                if (!(element.dataType.indexOf(dataType) > -1)) {
                  _context9.next = 18;
                  break;
                }

                dataTypeId = element.id;
                return _context9.abrupt("break", 20);

              case 18:
                _context9.next = 11;
                break;

              case 20:
                //   option.fortmatChart.where = thisModel.fortmatChartInit.where;
                //判断类型
                param = {
                  name: '',
                  parentType: temVal,
                  //图层组
                  layerId: Number(thisModel.groupLayerId),
                  //图层组id
                  customGroup: JSON.stringify(defaultSection),
                  //默认自定义分组
                  style: JSON.stringify(defaultMapOption()),
                  //默认样式
                  workspaceId: '',
                  type: dataTypeId,
                  //1:散点图
                  option: JSON.stringify(option),
                  zOrder: zOrder,
                  zoom: JSON.stringify(initZoom)
                };

                if (temVal === 2) {
                  param.linkLayerId = thisModel.selectDataLayerData.id;
                }

                _context9.next = 24;
                return call(create_das_link_layer_style_service, param, 'workspaceFilter');

              case 24:
                res = _context9.sent;

                if (res !== null && res !== void 0 && (_res$data13 = res.data) !== null && _res$data13 !== void 0 && _res$data13.code) {
                  _context9.next = 40;
                  break;
                }

                data = res === null || res === void 0 ? void 0 : (_res$data14 = res.data) === null || _res$data14 === void 0 ? void 0 : _res$data14.data;
                console.log('渲染图层', data);
                console.log('selectD33rawLayerData', thisModel.selectDrawLayerData);
                resData = _objectSpread2(_objectSpread2({
                  LayerDataFeatures: thisModel.selectDataLayerData.LayerDataFeatures,
                  LayerDataGeoJson: thisModel.selectDataLayerData.LayerDataGeoJson,
                  dataVisiably: thisModel.selectDataLayerData.dataVisiably,
                  initialViewState: thisModel.selectDataLayerData.initialViewState,
                  layerData: thisModel.selectDataLayerData.layerData,
                  layerTypeStr: thisModel.selectDataLayerData.layerTypeStr,
                  tableHeaderData: thisModel.selectDataLayerData.tableHeaderData
                }, data), {}, {
                  option: JSON.parse(data.option),
                  customGroup: JSON.parse(data.customGroup),
                  style: JSON.parse(data === null || data === void 0 ? void 0 : data.style),
                  zoom: JSON.parse(data.zoom),
                  updateTime: data === null || data === void 0 ? void 0 : data.updateTime,
                  update_time: data === null || data === void 0 ? void 0 : data.update_time
                });

                if (temVal === 2) {
                  resData.linkLayerId = data === null || data === void 0 ? void 0 : data.linkLayerId;
                  resData.parentType = data === null || data === void 0 ? void 0 : data.parentType;
                }

                console.log(resData, 'opopixkjmx'); // ------ 选中新建图层 start ------

                _context9.next = 34;
                return put({
                  type: 'selectDrawLayerDataReducer',
                  payload: resData
                });

              case 34:
                _context9.next = 36;
                return put({
                  type: 'filterDataModel/selectDataLayerDataReducer',
                  payload: resData
                });

              case 36:
                _context9.next = 38;
                return put({
                  type: 'updateDrawLayerRedecer',
                  doType: 1,
                  payload: resData
                });

              case 38:
                _context9.next = 41;
                break;

              case 40:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data15 = res.data) === null || _res$data15 === void 0 ? void 0 : _res$data15.message) || '获取数据失败');

              case 41:
              case "end":
                return _context9.stop();
            }
          }
        }, create_das_link_layer_style_effect);
      }),

      /**
       *@method getMapLayerEffect
       * 获取第一个图层信息
       * @params {id}
       */

      /**  返回值说明
       * @params {camera} 相机
       * @params {componentType} 2  探索类型 空间探索
       * @params {customGroup} 自定义分段
       */
      getMapLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function getMapLayerEffect(_ref19, _ref20) {
        var _res$data16;

        var call, put, select, thisModel, param, res, _res$data17, data, allLayerData, index, _res$data18;

        return regeneratorRuntime.wrap(function getMapLayerEffect$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                call = _ref20.call, put = _ref20.put, select = _ref20.select;
                _context10.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context10.sent;
                //判断类型
                param = {
                  daslayerid: Number(thisModel.daslayerId)
                };
                _context10.next = 8;
                return call(getMapService, param);

              case 8:
                res = _context10.sent;

                if (res !== null && res !== void 0 && (_res$data16 = res.data) !== null && _res$data16 !== void 0 && _res$data16.code) {
                  _context10.next = 31;
                  break;
                }

                data = res === null || res === void 0 ? void 0 : (_res$data17 = res.data) === null || _res$data17 === void 0 ? void 0 : _res$data17.data;
                console.log('getNewMapEffect', data);
                console.log('tucengstyle', JSON.parse(data.style)); //相机设置，这个地方是一个特殊情况，目前只有第一个图层可以设置相机
                //但是当删除第一个图层以后、其他图层还是需要请求第一个图层获取id去请求，比较特殊
                // // //设置相机视角
                // if (data?.camera) {
                //   let camera = JSON.parse(data.camera);
                //   let newCamera = {
                //     ...camera,
                //     ...FlyToCamera,
                //   };
                //   yield put({ type: 'getFirstViewCameraReducer', payload: newCamera });
                // }
                //查询对应的关联图层（判断有没有对应的关联图层）
                //多图层加载  第一个图层单独加载 linkLayerCount为除去第一个图层 其他图层数量  > 0

                if (!(data !== null && data !== void 0 && data.linkLayerCount)) {
                  _context10.next = 18;
                  break;
                }

                _context10.next = 16;
                return put({
                  type: 'getOtherMapLayersEffect',
                  payload: data
                });

              case 16:
                _context10.next = 29;
                break;

              case 18:
                //如果只有第一个图层 总图层为1 array
                data.layerType = 1;
                allLayerData = [data]; //接下来请求数据
                //从这里开始有多个处理方法  一种  一条一条数据加载  加载完一条地图显示一条
                // 第二种 等所有数据加载完成一起去加载地图

                _context10.t0 = regeneratorRuntime.keys(allLayerData);

              case 21:
                if ((_context10.t1 = _context10.t0()).done) {
                  _context10.next = 29;
                  break;
                }

                index = _context10.t1.value;

                if (!allLayerData.hasOwnProperty(index)) {
                  _context10.next = 27;
                  break;
                }

                console.log('第一个图层', allLayerData[index]);
                _context10.next = 27;
                return put({
                  type: 'getMapDataEffect',
                  payload: allLayerData[index]
                });

              case 27:
                _context10.next = 21;
                break;

              case 29:
                _context10.next = 32;
                break;

              case 31:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data18 = res.data) === null || _res$data18 === void 0 ? void 0 : _res$data18.message) || '获取数据失败');

              case 32:
              case "end":
                return _context10.stop();
            }
          }
        }, getMapLayerEffect);
      }),

      /**
       *@method getOtherMapLayersEffect
       * 除第一图层外的其他图层
       * @params {layerId}
       */
      getOtherMapLayersEffect: /*#__PURE__*/regeneratorRuntime.mark(function getOtherMapLayersEffect(_ref21, _ref22) {
        var _res$data19;

        var payload, call, put, select, thisModel, firstLayerData, param, res, _res$data20, otherLayersData, allLayerData, index, _res$data21;

        return regeneratorRuntime.wrap(function getOtherMapLayersEffect$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                payload = _ref21.payload;
                call = _ref22.call, put = _ref22.put, select = _ref22.select;
                _context11.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context11.sent;
                firstLayerData = payload; // layerId 类型可查文档确定类型  最好校验下

                param = {
                  layerId: thisModel.groupLayerId.toString()
                };
                _context11.next = 9;
                return call(getAllDasLinkLayerService, param);

              case 9:
                res = _context11.sent;
                console.log('getOtherMapLayersEffect', res.data.data);

                if (res !== null && res !== void 0 && (_res$data19 = res.data) !== null && _res$data19 !== void 0 && _res$data19.code) {
                  _context11.next = 27;
                  break;
                }

                otherLayersData = (res === null || res === void 0 ? void 0 : (_res$data20 = res.data) === null || _res$data20 === void 0 ? void 0 : _res$data20.data) || []; //第一图层请求和其他图层不同，需要添加一个标识符 这个参数也可以服务端添加 目前是前端添加

                firstLayerData.layerType = 1; //第一个图层数据  和  第二个图层数据合并成一个数组

                allLayerData = [firstLayerData].concat(_toConsumableArray(otherLayersData));
                console.log('allLayerData', allLayerData); //接下来请求数据
                //从这里开始有多个处理方法  一种  一条一条数据加载  加载完一条地图显示一条
                // 第二种 等所有数据加载完成一起去加载地图

                _context11.t0 = regeneratorRuntime.keys(allLayerData);

              case 17:
                if ((_context11.t1 = _context11.t0()).done) {
                  _context11.next = 25;
                  break;
                }

                index = _context11.t1.value;

                if (!allLayerData.hasOwnProperty(index)) {
                  _context11.next = 23;
                  break;
                }

                console.log('其他图层', allLayerData[index]);
                _context11.next = 23;
                return put({
                  type: 'getMapDataEffect',
                  payload: allLayerData[index]
                });

              case 23:
                _context11.next = 17;
                break;

              case 25:
                _context11.next = 28;
                break;

              case 27:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data21 = res.data) === null || _res$data21 === void 0 ? void 0 : _res$data21.message) || '获取数据失败');

              case 28:
              case "end":
                return _context11.stop();
            }
          }
        }, getOtherMapLayersEffect);
      }),

      /**
       *@method getMapDataEffect
       * 获取表头数据
       * @params {dataSource}
       * 判断处理对应的公共数据和私有数据的请求
       */
      getMapDataEffect: /*#__PURE__*/regeneratorRuntime.mark(function getMapDataEffect(_ref23, _ref24) {
        var _res, _res$data22;

        var payload, call, put, oneLayerData, _oneLayerData$option, dataSource, fortmatChart, params, res, _res$data$data, data, i, orderObj;

        return regeneratorRuntime.wrap(function getMapDataEffect$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                payload = _ref23.payload;
                call = _ref24.call, put = _ref24.put;
                oneLayerData = payload;
                console.log('oneLayerData', oneLayerData); //容错 目前判断不完全  因为转json  所以也需要判断是不是object

                if (oneLayerData !== null && oneLayerData !== void 0 && oneLayerData.option) {
                  _context12.next = 6;
                  break;
                }

                return _context12.abrupt("return");

              case 6:
                _oneLayerData$option = oneLayerData.option, dataSource = _oneLayerData$option.dataSource, fortmatChart = _oneLayerData$option.fortmatChart;
                console.log('daaadadataSource', dataSource); //获取数据

                params = {
                  id: dataSource === null || dataSource === void 0 ? void 0 : dataSource.id,
                  search_type: DataSearchType(dataSource)
                };
                console.log('asfda33442sfsadf', params); //整理请求的数据  理论不应该在这里

                fortmatChart.search_type = DataSearchType(dataSource);
                fortmatChart.catalog = dataSource === null || dataSource === void 0 ? void 0 : dataSource.catalog;
                fortmatChart.features = (dataSource === null || dataSource === void 0 ? void 0 : dataSource.geomesa_name) || (dataSource === null || dataSource === void 0 ? void 0 : dataSource.geomesaName); //   oneLayerData.option = JSON.stringify({
                //     dataSource: dataSource,
                //     fortmatChart: fortmatChart,
                //   });
                //判断是不是共享数据

                res = null;

                if (!(dataSource !== null && dataSource !== void 0 && dataSource.isPublic && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.content) !== 'poi数据' && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.publisher) === '3ea670238dbf4041aa4d006aaee837e3')) {
                  _context12.next = 20;
                  break;
                }

                _context12.next = 17;
                return call(getMapDataTabTitleServer, params);

              case 17:
                res = _context12.sent;
                _context12.next = 23;
                break;

              case 20:
                _context12.next = 22;
                return call(getTableFieldService, params);

              case 22:
                res = _context12.sent;

              case 23:
                if ((_res = res) !== null && _res !== void 0 && (_res$data22 = _res.data) !== null && _res$data22 !== void 0 && _res$data22.code) {
                  _context12.next = 43;
                  break;
                }

                data = res.data.data;
                console.log('getMapDataEffect', data); // let curindex = 0;

                if (!(((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) < 1)) {
                  _context12.next = 28;
                  break;
                }

                return _context12.abrupt("return");

              case 28:
                _context12.t0 = regeneratorRuntime.keys(data);

              case 29:
                if ((_context12.t1 = _context12.t0()).done) {
                  _context12.next = 38;
                  break;
                }

                i = _context12.t1.value;

                if (!(data[i].key === 'field_dtg')) {
                  _context12.next = 36;
                  break;
                }

                fortmatChart.order = [];
                orderObj = {
                  name: 'field_dtg',
                  index: data[i].index,
                  type: 0,
                  operator: 1
                };
                fortmatChart.order.push(orderObj);
                return _context12.abrupt("break", 38);

              case 36:
                _context12.next = 29;
                break;

              case 38:
                oneLayerData.option = {
                  dataSource: dataSource,
                  fortmatChart: fortmatChart
                }; //请求头请求完成后需要请求数据体

                _context12.next = 41;
                return put({
                  type: 'getMapBodyDataEffect',
                  payload: {
                    oneLayerData: oneLayerData,
                    tableHeaderData: data
                  }
                });

              case 41:
                _context12.next = 44;
                break;

              case 43:
                if (res.data.message !== 'ok') {
                  antd.message.error(res.data.message);
                }

              case 44:
              case "end":
                return _context12.stop();
            }
          }
        }, getMapDataEffect);
      }),

      /**
       *@method getMapBodyDataEffect
       * 通过表头获取其他内容获取
       * @params {id}
       */
      getMapBodyDataEffect: /*#__PURE__*/regeneratorRuntime.mark(function getMapBodyDataEffect(_ref25, _ref26) {
        var _res$data23;

        var payload, call, put, tableHeaderData, oneLayerData, _oneLayerData$option2, dataSource, fortmatChart, res, data, table_head;

        return regeneratorRuntime.wrap(function getMapBodyDataEffect$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                payload = _ref25.payload;
                call = _ref26.call, put = _ref26.put;
                tableHeaderData = payload === null || payload === void 0 ? void 0 : payload.tableHeaderData;
                oneLayerData = payload === null || payload === void 0 ? void 0 : payload.oneLayerData; // let thisModel = yield select(state => state.buildNewMapModel);
                //这里也需要兼容

                _oneLayerData$option2 = oneLayerData.option, dataSource = _oneLayerData$option2.dataSource, fortmatChart = _oneLayerData$option2.fortmatChart;
                fortmatChart = doFortmatChart(tableHeaderData, fortmatChart, dataSource);
                _context13.next = 8;
                return call(getMapDataService, fortmatChart);

              case 8:
                res = _context13.sent;

                if (res !== null && res !== void 0 && (_res$data23 = res.data) !== null && _res$data23 !== void 0 && _res$data23.code) {
                  _context13.next = 29;
                  break;
                }

                data = res.data.data;
                table_head = dataSource !== null && dataSource !== void 0 && dataSource.table_head ? JSON.parse(dataSource.table_head) : {};

                if (!((table_head === null || table_head === void 0 ? void 0 : table_head.spaceType) === 'polygon' && table_head !== null && table_head !== void 0 && table_head.regionMapping)) {
                  _context13.next = 18;
                  break;
                }

                _context13.next = 16;
                return put({
                  type: 'getPolygonMapBodyDataEffect',
                  payload: _objectSpread2(_objectSpread2({}, oneLayerData), {}, {
                    layerData: data,
                    tableHeaderData: tableHeaderData
                  })
                });

              case 16:
                _context13.next = 27;
                break;

              case 18:
                console.log('getMapBodyDataEffect', payload);

                if (!((oneLayerData === null || oneLayerData === void 0 ? void 0 : oneLayerData.level) === 2)) {
                  _context13.next = 25;
                  break;
                }

                console.log('asdfa3sdfasdfsdaf', oneLayerData);
                _context13.next = 23;
                return put({
                  type: 'loadMapReducer1',
                  payload: _objectSpread2(_objectSpread2({}, oneLayerData), {}, {
                    layerData: data,
                    tableHeaderData: tableHeaderData
                  })
                });

              case 23:
                _context13.next = 27;
                break;

              case 25:
                _context13.next = 27;
                return put({
                  type: 'loadMapReducer',
                  payload: _objectSpread2(_objectSpread2({}, oneLayerData), {}, {
                    layerData: data,
                    tableHeaderData: tableHeaderData
                  })
                });

              case 27:
                _context13.next = 30;
                break;

              case 29:
                antd.message.error(res.data.message);

              case 30:
              case "end":
                return _context13.stop();
            }
          }
        }, getMapBodyDataEffect);
      }),
      //面图层
      getPolygonMapBodyDataEffect: /*#__PURE__*/regeneratorRuntime.mark(function getPolygonMapBodyDataEffect(_ref27, _ref28) {
        var _res$data24;

        var payload, call, put, tableHeaderData, layerData, oneLayerData, cityCode, i, params, res, adcode, initGeoJson, geojsonData, _i2, j, _geojsonData$index, index;

        return regeneratorRuntime.wrap(function getPolygonMapBodyDataEffect$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                payload = _ref27.payload;
                call = _ref28.call, put = _ref28.put;
                tableHeaderData = payload === null || payload === void 0 ? void 0 : payload.tableHeaderData;
                layerData = payload === null || payload === void 0 ? void 0 : payload.layerData;
                oneLayerData = payload; // let thisModel = yield select(state => state.buildNewMapModel);

                cityCode = [];

                for (i in layerData) {
                  if (layerData[i].field_adcode_polygon) {
                    if (cityCode.indexOf(layerData[i].field_adcode_polygon) < 0) {
                      cityCode.push(layerData[i].field_adcode_polygon);
                    }
                  }
                }

                params = {
                  adcodes: cityCode,
                  retType: 2
                };
                _context14.next = 10;
                return call(getSpaceTypeDataService, params);

              case 10:
                res = _context14.sent;

                if (res !== null && res !== void 0 && (_res$data24 = res.data) !== null && _res$data24 !== void 0 && _res$data24.code) {
                  _context14.next = 26;
                  break;
                }

                adcode = [];
                initGeoJson = JSON.stringify({
                  type: 'MultiPolygon',
                  coordinates: []
                });
                geojsonData = res.data.data;

                for (_i2 in geojsonData) {
                  adcode.push(geojsonData[_i2].adcode);
                }

                for (j in layerData) {
                  if (layerData[j].field_adcode_polygon) {
                    index = adcode.indexOf(layerData[j].field_adcode_polygon);
                    layerData[j].geojson = ((_geojsonData$index = geojsonData[index]) === null || _geojsonData$index === void 0 ? void 0 : _geojsonData$index.geojson) || initGeoJson;
                  } else {
                    layerData[j].geojson = initGeoJson;
                  }
                }

                if (!((oneLayerData === null || oneLayerData === void 0 ? void 0 : oneLayerData.level) === 2)) {
                  _context14.next = 22;
                  break;
                }

                _context14.next = 20;
                return put({
                  type: 'loadMapReducer1',
                  payload: _objectSpread2(_objectSpread2({}, oneLayerData), {}, {
                    layerData: layerData,
                    tableHeaderData: tableHeaderData
                  })
                });

              case 20:
                _context14.next = 24;
                break;

              case 22:
                _context14.next = 24;
                return put({
                  type: 'loadMapReducer',
                  payload: _objectSpread2(_objectSpread2({}, oneLayerData), {}, {
                    layerData: layerData,
                    tableHeaderData: tableHeaderData
                  })
                });

              case 24:
                _context14.next = 27;
                break;

              case 26:
                antd.message.error(res.data.message);

              case 27:
              case "end":
                return _context14.stop();
            }
          }
        }, getPolygonMapBodyDataEffect);
      }),
      //处理数据改变对应的图层
      loadMapReducer: /*#__PURE__*/regeneratorRuntime.mark(function loadMapReducer(_ref29, _ref30) {
        var _layerCon, _layerCon2, _layerCon3, _layerCon8, _layerCon9, _layerCon10;

        var payload, put, select, layerCon, layersConfig, thisModel, layerType, index, _layerCon4, _layerCon5, _layerCon6, _layerCon7, _linkLayerCon, linkLayerCon, _layerType, initialViewState;

        return regeneratorRuntime.wrap(function loadMapReducer$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                payload = _ref29.payload;
                put = _ref30.put, select = _ref30.select;
                layerCon = payload;
                layersConfig = null;
                _context15.next = 6;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 6:
                thisModel = _context15.sent;
                //地图数据
                // let layerData = layerCon.layerData;
                console.log('layerData222', payload); // let initialViewState = null;
                //geojson转换

                layerCon.LayerDataGeoJson = layerDataGeoJson(layerCon, payload === null || payload === void 0 ? void 0 : payload.tableHeaderData);
                layerCon.LayerDataFeatures = layerCon.LayerDataGeoJson.features; // console.log('FeatureCollection', geoJsonData);
                // alert(payload.layerType);

                layerType = mapTypeFun(layerCon.type); // alert(layerType);
                // let layerType = 'ScatterLayer';

                layerCon.layerTypeStr = layerType;
                console.log('loadMapReducer', layerCon);
                layerCon.dataVisiably = (_layerCon = layerCon) === null || _layerCon === void 0 ? void 0 : _layerCon.visibility; // 临时-wwq
                // yield put({
                //   type: 'buildTempModel/mapStyleOptionReducer',
                //   payload: layerCon.style,
                // });
                // yield put({
                //   type: 'buildTempModel/customGroupReducer',
                //   payload: layerCon.customGroup,
                // });
                // 临时-wwq----end

                layerCon = layerProCon(layerCon); // if (!layerCon?.level) {
                //   if (thisModel.saveCamera) {
                //     layerCon.initialViewState.latitude =
                //       thisModel.saveCamera?.latitude || layerCon.initialViewState?.latitude;
                //     layerCon.initialViewState.longitude =
                //       thisModel.saveCamera?.longitude || layerCon.initialViewState?.longitude;
                //     layerCon.initialViewState.pitch =
                //       thisModel.saveCamera?.pitch || layerCon.initialViewState?.pitch;
                //     layerCon.initialViewState.zoom =
                //       thisModel.saveCamera?.zoom || layerCon.initialViewState?.zoom;
                //     layerCon.initialViewState.bearing =
                //       thisModel.saveCamera?.bearing || layerCon.initialViewState?.bearing;
                //   }
                //   console.log('asdsfsfsadfasdfasdf', layerCon.initialViewState, 'ssss', thisModel.saveCamera);
                //   layerCon.initialViewState = { ...layerCon.initialViewState, ...thisModel.saveCamera };
                // }

                _context15.next = 17;
                return put({
                  type: 'getAllMapLayersReducer',
                  payload: layerCon
                });

              case 17:
                // setMapView;
                console.log('shuchukou', layerCon); // 加载图层临时

                if (!(((_layerCon2 = layerCon) === null || _layerCon2 === void 0 ? void 0 : _layerCon2.isDelete) === 2)) {
                  _context15.next = 21;
                  break;
                }

                _context15.next = 24;
                break;

              case 21:
                layersConfig = loadLayerFunction(layerCon); // console.log('asdfsadfsd', layersConfig);

                _context15.next = 24;
                return put({
                  type: 'addDeckerLayerReducers',
                  payload: [_objectSpread2({}, layersConfig)]
                });

              case 24:
                if (!((_layerCon3 = layerCon) !== null && _layerCon3 !== void 0 && _layerCon3.linkStyles)) {
                  _context15.next = 58;
                  break;
                }

                _context15.t0 = regeneratorRuntime.keys((_layerCon4 = layerCon) === null || _layerCon4 === void 0 ? void 0 : _layerCon4.linkStyles);

              case 26:
                if ((_context15.t1 = _context15.t0()).done) {
                  _context15.next = 58;
                  break;
                }

                index = _context15.t1.value;

                if (!((_layerCon5 = layerCon) !== null && _layerCon5 !== void 0 && _layerCon5.linkStyles.hasOwnProperty(index))) {
                  _context15.next = 56;
                  break;
                }

                linkLayerCon = (_layerCon6 = layerCon) === null || _layerCon6 === void 0 ? void 0 : _layerCon6.linkStyles[index];

                if (!(linkLayerCon.id === layerCon.id)) {
                  _context15.next = 33;
                  break;
                }

                layerCon.linkStyles[index] = layerCon;
                return _context15.abrupt("continue", 26);

              case 33:
                linkLayerCon.LayerDataGeoJson = layerCon.LayerDataGeoJson;
                linkLayerCon.LayerDataFeatures = layerCon.LayerDataFeatures;
                linkLayerCon.tableHeaderData = layerCon.tableHeaderData;
                linkLayerCon.layerData = layerCon.layerData;
                _layerType = mapTypeFun(linkLayerCon.type);
                linkLayerCon.layerTypeStr = _layerType; //在这里可以获取数据范围赋值视角

                initialViewState = {// ...FlyToCamera,
                };
                linkLayerCon.initialViewState = initialViewState;
                linkLayerCon.dataVisiably = (_layerCon7 = layerCon) === null || _layerCon7 === void 0 ? void 0 : _layerCon7.visibility;

                if (!((_linkLayerCon = linkLayerCon) !== null && _linkLayerCon !== void 0 && _linkLayerCon.option)) {
                  _context15.next = 49;
                  break;
                }

                console.log('asdfsdafsadfdsa', linkLayerCon);
                linkLayerCon = layerProCon(linkLayerCon);
                _context15.next = 47;
                return put({
                  type: 'getMapDataEffect',
                  payload: linkLayerCon
                });

              case 47:
                _context15.next = 56;
                break;

              case 49:
                //持续兼容
                linkLayerCon = layerProCon(linkLayerCon);
                _context15.next = 52;
                return put({
                  type: 'getAllMapLayersReducer',
                  payload: linkLayerCon
                });

              case 52:
                // 加载图层临时
                layersConfig = loadLayerFunction(linkLayerCon);
                _context15.next = 55;
                return put({
                  type: 'addDeckerLayerReducers',
                  payload: [_objectSpread2({}, layersConfig)]
                });

              case 55:
                // layerCon.linkStyles = linkLayerCon;
                console.log('shuchukou', linkLayerCon);

              case 56:
                _context15.next = 26;
                break;

              case 58:
                _context15.next = 60;
                return put({
                  type: 'setDeckMapStyle',
                  payload: (_layerCon8 = layerCon) !== null && _layerCon8 !== void 0 && _layerCon8.mapId ? parseInt((_layerCon9 = layerCon) === null || _layerCon9 === void 0 ? void 0 : _layerCon9.mapId) : parseInt(defaultDeckMapStyle)
                });

              case 60:
                _context15.next = 62;
                return put({
                  type: 'getMapLayersReducer',
                  payload: layerCon
                });

              case 62:
                if (!(onceIndex >= Number(layerCon.zIndex))) {
                  _context15.next = 66;
                  break;
                }

                onceIndex = layerCon.zIndex;
                _context15.next = 66;
                return put({
                  type: 'filterDataModel/getMapLayersReducer',
                  payload: layerCon.linkStyles[0]
                });

              case 66:
                if (thisModel.mapHandle && ((_layerCon10 = layerCon) === null || _layerCon10 === void 0 ? void 0 : _layerCon10.visibility) !== 1) ;
                /*++++++++++++临时注释+++++++++++++++*/
                // let { mapAllLayerOption, mapActiveLayerId } = thisModel;
                // for (let i in mapAllLayerOption) {
                //   if (
                //     mapAllLayerOption[i].id === payload.id &&
                //     mapAllLayerOption[i].layerType === payload.layerType
                //   ) {
                //     mapAllLayerOption[i] = payload;
                //   }
                // }
                // yield put({ type: 'setMapAllLayerOption', payload: mapAllLayerOption });
                // //判断当前加载是不是选中图层的数据  第一个默认图层
                // if (
                //   payload.id === mapActiveLayerId.layerId &&
                //   payload.layerType === mapActiveLayerId.layerType
                // ) {
                //   yield put({ type: 'setActiveMapStyle', payload: { cameraType: true } });
                // }
                //   }


              case 67:
              case "end":
                return _context15.stop();
            }
          }
        }, loadMapReducer);
      }),
      //处理数据改变对应的图层
      loadMapReducer1: /*#__PURE__*/regeneratorRuntime.mark(function loadMapReducer1(_ref31, _ref32) {
        var _layerCon11;

        var payload, put, select, layerCon, layersConfig, thisModel, layerType;
        return regeneratorRuntime.wrap(function loadMapReducer1$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                payload = _ref31.payload;
                put = _ref32.put, select = _ref32.select;
                layerCon = payload;
                layersConfig = null;
                _context16.next = 6;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 6:
                thisModel = _context16.sent;
                //地图数据
                // let layerData = layerCon.layerData;
                // let initialViewState = null;
                //geojson转换
                layerCon.LayerDataGeoJson = layerDataGeoJson(layerCon, payload === null || payload === void 0 ? void 0 : payload.tableHeaderData);
                layerCon.LayerDataFeatures = layerCon.LayerDataGeoJson.features;
                layerType = mapTypeFun(layerCon.type); // alert(layerType);
                // let layerType = 'ScatterLayer';

                console.log('loadMapReducer', layerCon);
                layerCon.layerTypeStr = layerType; // layerCon.dataVisiably = layerCon?.visibility;
                // alert(layerCon?.dataVisiably);

                layerCon = layerProCon(layerCon); // setMapView;

                console.log('shuchukou11111', layerCon);
                layersConfig = loadLayerFunction(layerCon);
                console.log('asdfsadfsd', layersConfig);
                _context16.next = 18;
                return put({
                  type: 'addDeckerLayerReducers',
                  payload: [_objectSpread2({}, layersConfig)]
                });

              case 18:
                _context16.next = 20;
                return put({
                  type: 'getMapLayersDefaultReducer',
                  payload: layerCon
                });

              case 20:
                if (!(onceIndex >= Number(layerCon.zIndex))) {
                  _context16.next = 24;
                  break;
                }

                onceIndex = layerCon.zIndex;
                _context16.next = 24;
                return put({
                  type: 'filterDataModel/getMapLayersReducer',
                  payload: layerCon.linkStyles[0]
                });

              case 24:
                if (thisModel.mapHandle && ((_layerCon11 = layerCon) === null || _layerCon11 === void 0 ? void 0 : _layerCon11.visibility) !== 1) ;

              case 25:
              case "end":
                return _context16.stop();
            }
          }
        }, loadMapReducer1);
      }),

      /**
       *@method update_das_link_layer_style_effect
       *  更新关联图层样式
       * @params {id}
       */
      update_das_link_layer_style_effect: /*#__PURE__*/regeneratorRuntime.mark(function update_das_link_layer_style_effect(_ref33, _ref34) {
        var _res$data25;

        var payload, updateKey, call, put, param, res, _res$data26;

        return regeneratorRuntime.wrap(function update_das_link_layer_style_effect$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                payload = _ref33.payload, updateKey = _ref33.updateKey;
                call = _ref34.call, put = _ref34.put;
                // let thisModel = yield select(state => state.buildNewMapModel);
                param = _objectSpread2({
                  id: Number(payload === null || payload === void 0 ? void 0 : payload.id)
                }, updateKey);
                _context17.next = 5;
                return call(update_das_link_layer_style_service, param);

              case 5:
                res = _context17.sent;

                if (res !== null && res !== void 0 && (_res$data25 = res.data) !== null && _res$data25 !== void 0 && _res$data25.code) {
                  _context17.next = 12;
                  break;
                }

                // let data = res?.data?.data;
                console.log('update_das_link_layer_style_service', payload);
                _context17.next = 10;
                return put({
                  type: 'updateDrawLayerRedecer',
                  doType: 3,
                  payload: payload
                });

              case 10:
                _context17.next = 13;
                break;

              case 12:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data26 = res.data) === null || _res$data26 === void 0 ? void 0 : _res$data26.message) || '更新关联图层失败');

              case 13:
              case "end":
                return _context17.stop();
            }
          }
        }, update_das_link_layer_style_effect);
      }),

      /**
       *@method remove_das_link_layer_style_effect
       *   删除关联图层样式风格
       * @params {id}
       */
      remove_das_link_layer_style_effect: /*#__PURE__*/regeneratorRuntime.mark(function remove_das_link_layer_style_effect(_ref35, _ref36) {
        var _res$data27;

        var payload, call, put, param, res, _res$data28, data, _res$data29;

        return regeneratorRuntime.wrap(function remove_das_link_layer_style_effect$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                payload = _ref35.payload;
                call = _ref36.call, put = _ref36.put;
                // let thisModel = yield select(state => state.buildNewMapModel);
                //判断类型
                param = {
                  id: payload === null || payload === void 0 ? void 0 : payload.id
                };
                _context18.next = 5;
                return call(remove_das_link_layer_style_service, param);

              case 5:
                res = _context18.sent;

                if (res !== null && res !== void 0 && (_res$data27 = res.data) !== null && _res$data27 !== void 0 && _res$data27.code) {
                  _context18.next = 15;
                  break;
                }

                data = res === null || res === void 0 ? void 0 : (_res$data28 = res.data) === null || _res$data28 === void 0 ? void 0 : _res$data28.data;
                console.log('remove_das_link_layer_style_effect', data);
                _context18.next = 11;
                return put({
                  type: 'updateDrawLayerRedecer',
                  doType: 2,
                  payload: payload
                });

              case 11:
                _context18.next = 13;
                return put({
                  type: 'deleteMapLayersReducer',
                  payload: payload
                });

              case 13:
                _context18.next = 16;
                break;

              case 15:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data29 = res.data) === null || _res$data29 === void 0 ? void 0 : _res$data29.message) || '删除关联图层失败');

              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, remove_das_link_layer_style_effect);
      }),

      /**
       *@method copy_das_link_layer_style_effect
       *   复制关联图层样式风格
       * @params {id}
       */
      copy_das_link_layer_style_effect: /*#__PURE__*/regeneratorRuntime.mark(function copy_das_link_layer_style_effect(_ref37, _ref38) {
        var _res$data30;

        var payload, call, put, select, thisModel, zOrder, param, requestBody, res, _res$data31, data, copyLayer, _res$data32;

        return regeneratorRuntime.wrap(function copy_das_link_layer_style_effect$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                payload = _ref37.payload;
                call = _ref38.call, put = _ref38.put, select = _ref38.select;
                _context19.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context19.sent;
                zOrder = thisModel.selectDataLayerData.linkStyles && thisModel.selectDataLayerData.linkStyles.length > 0 ? thisModel.selectDataLayerData.linkStyles[thisModel.selectDataLayerData.linkStyles.length - 1].zOrder + 1 : 2; //判断类型

                param = {
                  id: payload === null || payload === void 0 ? void 0 : payload.id,
                  name: "".concat(mapLayerTypeName[payload.layerTypeStr], "-\u526F\u672C"),
                  zOrder: zOrder
                }, requestBody = null;

                if (payload.level !== 2) {
                  if (!payload.level) {
                    requestBody = copy_daslayer_service;
                  } else {
                    requestBody = copy_das_link_layer_service;
                  }
                } else {
                  requestBody = copy_das_link_layer_style_service;
                }

                _context19.next = 10;
                return call(requestBody, param);

              case 10:
                res = _context19.sent;

                if (res !== null && res !== void 0 && (_res$data30 = res.data) !== null && _res$data30 !== void 0 && _res$data30.code) {
                  _context19.next = 29;
                  break;
                }

                data = res === null || res === void 0 ? void 0 : (_res$data31 = res.data) === null || _res$data31 === void 0 ? void 0 : _res$data31.data;
                copyLayer = JSON.parse(JSON.stringify(payload));
                console.log('copy_das_link_layer_style_effect', data);
                copyLayer.createTime = data.createTime;
                copyLayer.id = data.id;
                copyLayer.name = data.name;
                copyLayer.layerId = thisModel.groupLayerId;
                copyLayer.linkLayerId = data.linkLayerId;
                copyLayer.updateTime = data.updateTime;
                copyLayer.zOrder = data.zOrder;
                copyLayer.level = data.level;
                copyLayer.parentType = data.parentType;
                console.log('copyLayer', copyLayer);
                _context19.next = 27;
                return put({
                  type: 'updateDrawLayerRedecer',
                  doType: 1,
                  payload: copyLayer
                });

              case 27:
                _context19.next = 30;
                break;

              case 29:
                antd.message.error((res === null || res === void 0 ? void 0 : (_res$data32 = res.data) === null || _res$data32 === void 0 ? void 0 : _res$data32.message) || '复制关联图层失败');

              case 30:
              case "end":
                return _context19.stop();
            }
          }
        }, copy_das_link_layer_style_effect);
      }),

      /**
       *@method updateOrderLayerEffect
       *   批次更新图层样式z轴序
       * @params {id}
       */
      updateOrderLayerEffect: /*#__PURE__*/regeneratorRuntime.mark(function updateOrderLayerEffect(_ref39, _ref40) {
        var _res$data33;

        var payload, call, res, _res$data34;

        return regeneratorRuntime.wrap(function updateOrderLayerEffect$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                payload = _ref39.payload;
                call = _ref40.call;
                _context20.next = 4;
                return call(updateOrderLayerService, payload);

              case 4:
                res = _context20.sent;

                if (!(res !== null && res !== void 0 && (_res$data33 = res.data) !== null && _res$data33 !== void 0 && _res$data33.code)) ; else {
                  antd.message.error(res === null || res === void 0 ? void 0 : (_res$data34 = res.data) === null || _res$data34 === void 0 ? void 0 : _res$data34.message);
                }

              case 6:
              case "end":
                return _context20.stop();
            }
          }
        }, updateOrderLayerEffect);
      }),

      /**
       * 保存样式修改-----只做修改后的存储
       * @method updateLayerStyleEffect
       * @param {updateType} 0:图表样式；1:修改自定义分组；2:可见层级；3:渲染模式；4:修改option（针对更换数据统一修改图层option）
       */
      updateLayerStyleEffect: /*#__PURE__*/regeneratorRuntime.mark(function updateLayerStyleEffect(_ref41, _ref42) {
        var _res$data35;

        var updateType, updateOption, call, select, thisModel, updateObj, params, requestBody, updateKey, res;
        return regeneratorRuntime.wrap(function updateLayerStyleEffect$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                updateType = _ref41.updateType, updateOption = _ref41.updateOption;
                call = _ref42.call, select = _ref42.select;
                _context21.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context21.sent;
                updateObj = {};
                params = null, requestBody = null, updateKey = null; // 获取修改图层

                if (updateOption) {
                  updateObj = updateOption;
                } else {
                  updateObj = thisModel.selectDrawLayerData;
                } // 加工修改参数


                if (!updateType) {
                  updateKey = {
                    style: JSON.stringify(thisModel.mapStyle)
                  };
                } else if (updateType === 1) {
                  updateKey = {
                    customGroup: JSON.stringify(thisModel.selectDrawLayerData.customGroup)
                  };
                } else if (updateType === 2) {
                  updateKey = {
                    zoom: JSON.stringify(thisModel.selectDrawLayerData.zoom)
                  };
                } else if (updateType === 3) {
                  updateKey = {
                    renderMode: thisModel.selectDrawLayerData.renderMode
                  };
                } else {
                  updateKey = {
                    option: JSON.stringify({
                      dataSource: thisModel.linkDataSource,
                      fortmatChart: thisModel.fortmatChartInit
                    }),
                    type: updateOption.type
                  };
                }

                if (!updateObj.level) {
                  params = _objectSpread2({
                    layerId: thisModel.groupLayerId.toString()
                  }, updateKey);
                  requestBody = updateMapService;
                } else if (updateObj.level === 1) {
                  params = _objectSpread2({
                    layerId: Number(thisModel.groupLayerId),
                    id: updateObj.id
                  }, updateKey);
                  requestBody = upDasLinkLayerService;
                } else {
                  params = _objectSpread2({
                    id: Number(updateObj.id)
                  }, updateKey);
                  requestBody = update_das_link_layer_style_service;
                }

                _context21.next = 12;
                return call(requestBody, params);

              case 12:
                res = _context21.sent;

                if (!(res !== null && res !== void 0 && (_res$data35 = res.data) !== null && _res$data35 !== void 0 && _res$data35.code)) {
                  console.log("level\u4E3A".concat(updateObj.level, "\u7684\u6837\u5F0F\u4FDD\u5B58\u6210\u529F"));
                } else {
                  antd.message.error(res.data.message);
                }

              case 14:
              case "end":
                return _context21.stop();
            }
          }
        }, updateLayerStyleEffect);
      }),

      /**
       * 场景设置------保存视角
       * @method updateSceneEffect
       * @param {}
       */
      updateSceneEffect: /*#__PURE__*/regeneratorRuntime.mark(function updateSceneEffect(_ref43, _ref44) {
        var _res$data36;

        var payload, call, put, select, thisModel, params, res;
        return regeneratorRuntime.wrap(function updateSceneEffect$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                payload = _ref43.payload;
                call = _ref44.call, put = _ref44.put, select = _ref44.select;
                _context22.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                thisModel = _context22.sent;
                params = _objectSpread2({
                  layerId: thisModel.groupLayerId.toString()
                }, payload);
                _context22.next = 8;
                return call(updateMapService, params);

              case 8:
                res = _context22.sent;

                if (res !== null && res !== void 0 && (_res$data36 = res.data) !== null && _res$data36 !== void 0 && _res$data36.code) {
                  _context22.next = 16;
                  break;
                }

                console.log("\u4FDD\u5B58\u6210\u529F");
                console.log(JSON.parse(payload.camera), '1982u982'); // yield put({
                //   type: 'getIviewStateReducer',
                //   payload: JSON.parse(payload.camera),
                // });

                _context22.next = 14;
                return put({
                  type: 'setCameraReducer',
                  payload: JSON.parse(payload.camera)
                });

              case 14:
                _context22.next = 17;
                break;

              case 16:
                antd.message.error(res.data.message);

              case 17:
              case "end":
                return _context22.stop();
            }
          }
        }, updateSceneEffect);
      })
    },
    reducers: {
      //获取探索id
      getDaslayerIdReducer: function getDaslayerIdReducer(state, action) {
        state.daslayerId = action.payload;
        return _objectSpread2({}, state);
      },
      //第一个图层的视角，也是主视角
      getFirstViewCameraReducer: function getFirstViewCameraReducer(state, action) {
        state.firstViewCamera = action.payload;
        console.log('state.firstViewCamera', state.firstViewCamera);
        return _objectSpread2({}, state);
      },
      // 新增方法--用来加工mapLayers不同过滤数据---wangwenqi
      getMapLayersDefaultReducer: function getMapLayersDefaultReducer(state, action) {
        for (var i in state.mapLayers) {
          if (Object.hasOwnProperty.call(state.mapLayers, i)) {
            var element = state.mapLayers[i]; // 图层组的关联图层样式

            if (element.id === Number(element.layerId) && action.payload.parentType === 1) {
              for (var j in element.linkStyles) {
                if (Object.hasOwnProperty.call(element.linkStyles, j)) {
                  var elem = element.linkStyles[j];

                  if (elem.id === action.payload.id) {
                    state.mapLayers[i].linkStyles[j] = action.payload;
                  }
                }
              }
            } // 关联图层的关联图层样式


            if (action.payload.parentType === 2) {
              for (var _j in element.linkStyles) {
                if (Object.hasOwnProperty.call(element.linkStyles, _j)) {
                  var _elem = element.linkStyles[_j];

                  if (_elem.id === action.payload.id) {
                    state.mapLayers[i].linkStyles[_j] = action.payload;
                  }
                }
              }
            }
          }
        } // 更新选中的数据层


        for (var k in state.selectDataLayerData.linkStyles) {
          if (Object.hasOwnProperty.call(state.selectDataLayerData.linkStyles, k)) {
            var _element2 = state.selectDataLayerData.linkStyles[k];

            if (_element2.id === action.payload.id) {
              state.selectDataLayerData.linkStyles[k] = action.payload;
            }
          }
        } // 更新选中图层的数据


        if (action.payload.id === state.selectDrawLayerData.id) {
          state.selectDrawLayerData = action.payload;
        }

        console.log(state.mapLayers, 'ddfsdxx');
        return _objectSpread2({}, state);
      },
      getMapLayersReducer: function getMapLayersReducer(state, action) {
        var _action$payload5;

        console.log(action.payload, 'owijxnidsiwonimina');

        for (var i in state.mapLayers) {
          if (state.mapLayers.hasOwnProperty(i)) {
            var _action$payload, _state$mapLayers$i;

            if (Number((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.id) === Number((_state$mapLayers$i = state.mapLayers[i]) === null || _state$mapLayers$i === void 0 ? void 0 : _state$mapLayers$i.id)) {
              var _action$payload2, _state$mapLayers$i2, _action$payload3, _state$mapLayers$i3;

              if (((_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.updateTime) !== ((_state$mapLayers$i2 = state.mapLayers[i]) === null || _state$mapLayers$i2 === void 0 ? void 0 : _state$mapLayers$i2.updateTime) || ((_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.update_time) !== ((_state$mapLayers$i3 = state.mapLayers[i]) === null || _state$mapLayers$i3 === void 0 ? void 0 : _state$mapLayers$i3.update_time)) {
                console.log(action.payload.name, 'whatxjijmms');
                state.mapLayers[i].name = action.payload.name;
                state.mapLayers[i].LayerDataFeatures = action.payload.LayerDataFeatures;
                state.mapLayers[i].LayerDataGeoJson = action.payload.LayerDataGeoJson;
                state.mapLayers[i].tableHeaderData = action.payload.tableHeaderData;
                state.mapLayers[i].layerData = action.payload.layerData;
                state.mapLayers[i].initialViewState = action.payload.initialViewState;
                state.mapLayers[i].option = action.payload.option;
                state.mapLayers[i].type = action.payload.type;
                state.mapLayers[i].updateTime = action.payload.updateTime;
                state.mapLayers[i].update_time = action.payload.update_time;

                for (var j in state.mapLayers[i].linkStyles) {
                  if (state.mapLayers[i].linkStyles.hasOwnProperty(j)) {
                    var element = state.mapLayers[i].linkStyles[j];

                    if (state.mapLayers[i].id === element.id) {
                      state.mapLayers[i].linkStyles[j].name = action.payload.name;
                      state.mapLayers[i].linkStyles[j].LayerDataFeatures = action.payload.LayerDataFeatures;
                      state.mapLayers[i].linkStyles[j].LayerDataGeoJson = action.payload.LayerDataGeoJson;
                      state.mapLayers[i].linkStyles[j].tableHeaderData = action.payload.tableHeaderData;
                      state.mapLayers[i].linkStyles[j].layerData = action.payload.layerData;
                      state.mapLayers[i].linkStyles[j].initialViewState = action.payload.initialViewState;
                      state.mapLayers[i].linkStyles[j].option = action.payload.option;
                      state.mapLayers[i].linkStyles[j].type = action.payload.type;
                      state.mapLayers[i].linkStyles[j].updateTime = action.payload.updateTime;
                      state.mapLayers[i].linkStyles[j].update_time = action.payload.update_time;
                      break;
                    }
                  }
                }

                console.log(state.mapLayers, 'mxinlamnxiunsiojdflijas');

                if (state.replaceSelectDataLayer) {
                  var _action$payload4;

                  state.iviewState = (_action$payload4 = action.payload) === null || _action$payload4 === void 0 ? void 0 : _action$payload4.initialViewState;
                  state.replaceSelectDataLayer = false;
                }

                return _objectSpread2({}, state);
              }
            }
          }
        } // 构建空间图层数据


        var linkStyles = ((_action$payload5 = action.payload) === null || _action$payload5 === void 0 ? void 0 : _action$payload5.linkStyles) || [];

        if (action.payload.isDelete !== 2) {
          for (var key in linkStyles) {
            if (linkStyles.hasOwnProperty(key)) {
              var _action$payload8, _action$payload9;

              if (Number(key) !== linkStyles.length - 1) {
                var _action$payload6, _action$payload7;

                if (((_action$payload6 = action.payload) === null || _action$payload6 === void 0 ? void 0 : _action$payload6.zOrder) > linkStyles[key].zOrder && ((_action$payload7 = action.payload) === null || _action$payload7 === void 0 ? void 0 : _action$payload7.zOrder) < linkStyles[Number(key) + 1].zOrder) {
                  // 中间
                  linkStyles.splice(Number(key) + 1, 0, _objectSpread2(_objectSpread2({}, action.payload), {}, {
                    linkStyles: [],
                    layerLevel: 1
                  }));
                  break;
                }
              }

              if (((_action$payload8 = action.payload) === null || _action$payload8 === void 0 ? void 0 : _action$payload8.zOrder) > linkStyles[key].zOrder && Number(key) === linkStyles.length - 1) {
                // 最后
                linkStyles.splice(Number(key) + 1, 0, _objectSpread2(_objectSpread2({}, action.payload), {}, {
                  linkStyles: [],
                  layerLevel: 1
                }));
                break;
              }

              if (((_action$payload9 = action.payload) === null || _action$payload9 === void 0 ? void 0 : _action$payload9.zOrder) < linkStyles[key].zOrder) {
                // 最前
                linkStyles.splice(key, 0, _objectSpread2(_objectSpread2({}, action.payload), {}, {
                  linkStyles: [],
                  layerLevel: 1
                }));
                break;
              }
            }
          } // 初始化linkStyles中没有图层


          if (linkStyles.length === 0) {
            linkStyles.push(_objectSpread2(_objectSpread2({}, action.payload), {}, {
              linkStyles: []
            }));
          }
        }

        action.payload.linkStyles = linkStyles;
        state.mapLayers.push(action.payload);

        if (Number(action.payload.zIndex) === 0) {
          var _state$selectDataLaye, _state$selectDrawLaye;

          state.selectDataLayerData = action.payload;
          console.log('state.selectDataLayerData', state.selectDataLayerData);
          state.iviewState = _objectSpread2(_objectSpread2({}, (_state$selectDataLaye = state.selectDataLayerData) === null || _state$selectDataLaye === void 0 ? void 0 : _state$selectDataLaye.initialViewState), state.saveCamera); // if (!state.selectDrawLayerData) {
          //   if (state.selectDataLayerData?.linkStyles?.length > 0) {
          //     let selectDataAllLayer = [
          //       state.selectDataLayerData,
          //       ...state.selectDataLayerData?.linkStyles,
          //     ];
          //     state.selectDrawLayerData = selectDataAllLayer[0];
          //     state.mapStyle = state.selectDrawLayerData?.style;
          //   } else {
          //     state.selectDrawLayerData = state.selectDataLayerData;
          //     state.mapStyle = state.selectDrawLayerData?.style;
          //   }
          // }

          state.selectDrawLayerData = state.selectDataLayerData.linkStyles[0];
          state.mapStyle = (_state$selectDrawLaye = state.selectDrawLayerData) === null || _state$selectDrawLaye === void 0 ? void 0 : _state$selectDrawLaye.style;
        }

        // console.log('layerConall', state.mapLayers);
        return _objectSpread2({}, state);
      },
      getAllMapLayersReducer: function getAllMapLayersReducer(state, action) {
        var _state$allMapLayers;

        state.allMapLayers.push(action.payload);

        for (var i in state.allMapLayers) {
          if (state.allMapLayers.hasOwnProperty(i)) {
            var _action$payload10;

            if (Number(state.allMapLayers[i].id) === Number((_action$payload10 = action.payload) === null || _action$payload10 === void 0 ? void 0 : _action$payload10.id)) {
              state.allMapLayers[i] = action.payload;
              return _objectSpread2({}, state);
            }
          }
        }

        console.log('aaalllllll', state.allMapLayers);

        if (!state.mapStyle && ((_state$allMapLayers = state.allMapLayers) === null || _state$allMapLayers === void 0 ? void 0 : _state$allMapLayers.length) > 0) {
          state.mapStyle = state.allMapLayers[0].style;
          console.log('firstlayers', state.mapStyle);
        }

        return _objectSpread2({}, state);
      },
      //地图默认样式
      getMapStyleReducer: function getMapStyleReducer(state, action) {
        // let elem = action.payload;
        // console.log('getMapStyleReducer', elem);
        // if (elem.style) {
        //   state.mapStyle = JSON.parse(elem.style);
        //   //初始化默认样式配置
        //   // initMapOption(state, action);
        // }
        return _objectSpread2(_objectSpread2({}, state), action.payload);
      },
      //正在修改
      changeDoMapStyleReducer: function changeDoMapStyleReducer(state, action) {
        console.log('sdfasmapStyledfsadf', action);

        if (action.zoom) {
          state.selectDrawLayerData.zoom = action.payload;
          var layerType = mapTypeFun(state.selectDrawLayerData.type);
          state.selectDrawLayerData.layerTypeStr = layerType;

          var _layersConfig = loadLayerFunction(state.selectDrawLayerData);

          state.deckLayer = [_layersConfig];
          return _objectSpread2({}, state);
        }

        if (action.layerBlending) {
          state.renderMode = action.payload;

          var _layerType2 = mapTypeFun(state.selectDrawLayerData.type);

          state.selectDrawLayerData.renderMode = state.renderMode;
          state.selectDrawLayerData.layerTypeStr = _layerType2;

          var _layersConfig2 = loadLayerFunction(state.selectDrawLayerData);

          state.deckLayer = [_layersConfig2];
          return _objectSpread2({}, state);
        }

        if (action.customGroup) {
          // 修改自定义分段
          changeCustomGroupConfig(state, action);
        } else {
          buildMapWidgetConfig({
            state: state,
            action: action
          });
        }

        console.log(state.selectDrawLayerData, 'jkjkjkjk');
        var layersConfig = loadLayerFunction(state.selectDrawLayerData);
        state.deckLayer = [layersConfig];
        console.log('asdfasdfasdfas', state.deckLayer);
        return _objectSpread2({}, state);
      },
      //修改结束
      changeDidMapStyleReducer: function changeDidMapStyleReducer(state, action) {
        return _objectSpread2({}, state);
      },
      // 添加deckgl图层
      addDeckerLayerReducers: function addDeckerLayerReducers(state, action) {
        var _state$deckLayer$, _state$deckLayer$2, _state$deckLayer$3, _state$deckLayer$4, _state$deckLayer$5;

        state.loadingCurLayerCount++; // alert(state.loadingCurLayerCount);
        // if (state.loadingCurLayerCount === state.loadingLayerCount) {
        //   state.loadingProgress = false;
        // }

        state.deckLayer = action.payload;
        state.interactiveData.push({
          id: (_state$deckLayer$ = state.deckLayer[0]) === null || _state$deckLayer$ === void 0 ? void 0 : _state$deckLayer$.dataid,
          mapType: (_state$deckLayer$2 = state.deckLayer[0]) === null || _state$deckLayer$2 === void 0 ? void 0 : _state$deckLayer$2.mapType,
          level: (_state$deckLayer$3 = state.deckLayer[0]) === null || _state$deckLayer$3 === void 0 ? void 0 : _state$deckLayer$3.level,
          defaultInteraction: ((_state$deckLayer$4 = state.deckLayer[0]) === null || _state$deckLayer$4 === void 0 ? void 0 : _state$deckLayer$4.defaultInteraction) || null
        });
        console.log('state.deckLayer1111', (_state$deckLayer$5 = state.deckLayer[0]) === null || _state$deckLayer$5 === void 0 ? void 0 : _state$deckLayer$5.defaultInteraction);
        console.log('state.deckLayer', state.deckLayer);
        return _objectSpread2({}, state);
      },
      //添加对应的数据
      setLinkDataSource: function setLinkDataSource(state, action) {
        state.linkDataSource = action.payload;
        return _objectSpread2({}, state);
      },
      //+++++++++++++
      getGroupLayerIdReducer: function getGroupLayerIdReducer(state, action) {
        state.groupLayerId = action.payload;
        return _objectSpread2({}, state);
      },
      getIsShareReducer: function getIsShareReducer(state, action) {
        state.share = {
          id: action.payload.id,
          is_share: action.payload.is_share,
          componentType: action.payload.componentType
        };
        return _objectSpread2({}, state);
      },
      deleteDataLayerReducer: function deleteDataLayerReducer(state, action) {
        state.mapLayers = state.mapLayers.filter(function (elem) {
          return action.payload.id !== (elem === null || elem === void 0 ? void 0 : elem.id);
        });

        if (state.mapLayers.length > 0) {
          //   删除选中数据
          if (state.selectDrawLayerData.id === action.payload.id) {
            state.selectDataLayerData = state.mapLayers[0];
            state.selectDrawLayerData = state.mapLayers[0].linkStyles[0] || {};
          }
        } else {
          state.selectDrawLayerData = null;
          state.selectDataLayerData = null;
        }

        return _objectSpread2({}, state);
      },
      //选中数据层
      selectDataLayerDataReducer: function selectDataLayerDataReducer(state, action) {
        var _state$selectDrawLaye2, _state$selectDataLaye2;

        state.selectDataLayerData = action.payload; // if (state.selectDataLayerData?.linkStyles?.length > 0) {
        //   let selectDataAllLayer = [
        //     state.selectDataLayerData,
        //     ...state.selectDataLayerData?.linkStyles,
        //   ];
        //   state.selectDrawLayerData = selectDataAllLayer[0];
        // } else {
        //   state.selectDrawLayerData = state.selectDataLayerData;
        // }

        state.selectDrawLayerData = state.selectDataLayerData.linkStyles[0];
        state.mapStyle = (_state$selectDrawLaye2 = state.selectDrawLayerData) === null || _state$selectDrawLaye2 === void 0 ? void 0 : _state$selectDrawLaye2.style;
        state.iviewState = (_state$selectDataLaye2 = state.selectDataLayerData) === null || _state$selectDataLaye2 === void 0 ? void 0 : _state$selectDataLaye2.initialViewState;
        return _objectSpread2({}, state);
      },
      replaceSelectDataLayerReducer: function replaceSelectDataLayerReducer(state, action) {
        state.replaceSelectDataLayer = true;
        return _objectSpread2({}, state);
      },
      // 数据层刷新弹框
      refreshModelShowReducer: function refreshModelShowReducer(state, action) {
        state.refreshModelShow = action.payload;
        return _objectSpread2({}, state);
      },
      //选中渲染层
      selectDrawLayerDataReducer: function selectDrawLayerDataReducer(state, action) {
        var _state$selectDrawLaye3;

        state.selectDrawLayerData = action.payload;
        state.mapStyle = (_state$selectDrawLaye3 = state.selectDrawLayerData) === null || _state$selectDrawLaye3 === void 0 ? void 0 : _state$selectDrawLaye3.style;
        return _objectSpread2({}, state);
      },
      updateDrawLayerRedecer: function updateDrawLayerRedecer(state, action) {
        var createLayer = action.payload;
        console.log('asfdsa44fasdfsdaf', createLayer, state.mapLayers);

        for (var i in state.mapLayers) {
          if (state.mapLayers.hasOwnProperty(i)) {
            if ((action === null || action === void 0 ? void 0 : action.doType) === 1) {
              if (createLayer !== null && createLayer !== void 0 && createLayer.linkLayerId) {
                var _state$mapLayers$i4;

                if (Number((_state$mapLayers$i4 = state.mapLayers[i]) === null || _state$mapLayers$i4 === void 0 ? void 0 : _state$mapLayers$i4.id) === Number(createLayer === null || createLayer === void 0 ? void 0 : createLayer.linkLayerId)) {
                  var _state$deckLayer$6, _state$deckLayer$7, _state$deckLayer$8, _state$deckLayer$9;

                  if (!state.mapLayers[i].linkStyles) {
                    state.mapLayers[i].linkStyles = [];
                  }

                  state.mapLayers[i].linkStyles.push(createLayer);
                  var layerType = mapTypeFun(createLayer.type);
                  createLayer.layerTypeStr = layerType;
                  var layersConfig = loadLayerFunction(createLayer);
                  state.deckLayer = [layersConfig];
                  state.interactiveData.push({
                    id: (_state$deckLayer$6 = state.deckLayer[0]) === null || _state$deckLayer$6 === void 0 ? void 0 : _state$deckLayer$6.dataid,
                    mapType: (_state$deckLayer$7 = state.deckLayer[0]) === null || _state$deckLayer$7 === void 0 ? void 0 : _state$deckLayer$7.mapType,
                    level: (_state$deckLayer$8 = state.deckLayer[0]) === null || _state$deckLayer$8 === void 0 ? void 0 : _state$deckLayer$8.level,
                    defaultInteraction: ((_state$deckLayer$9 = state.deckLayer[0]) === null || _state$deckLayer$9 === void 0 ? void 0 : _state$deckLayer$9.defaultInteraction) || null
                  });
                }
              } else {
                var _state$mapLayers$i5;

                if (Number((_state$mapLayers$i5 = state.mapLayers[i]) === null || _state$mapLayers$i5 === void 0 ? void 0 : _state$mapLayers$i5.id) === Number(state.groupLayerId)) {
                  var _state$deckLayer$10, _state$deckLayer$11, _state$deckLayer$12, _state$deckLayer$13, _state$deckLayer$14;

                  state.mapLayers[i].linkStyles.push(createLayer);

                  var _layerType3 = mapTypeFun(createLayer.type);

                  createLayer.layerTypeStr = _layerType3;

                  var _layersConfig3 = loadLayerFunction(createLayer);

                  state.deckLayer = [_layersConfig3];
                  state.interactiveData.push({
                    id: (_state$deckLayer$10 = state.deckLayer[0]) === null || _state$deckLayer$10 === void 0 ? void 0 : _state$deckLayer$10.dataid,
                    mapType: (_state$deckLayer$11 = state.deckLayer[0]) === null || _state$deckLayer$11 === void 0 ? void 0 : _state$deckLayer$11.mapType,
                    level: (_state$deckLayer$12 = state.deckLayer[0]) === null || _state$deckLayer$12 === void 0 ? void 0 : _state$deckLayer$12.level,
                    defaultInteraction: ((_state$deckLayer$13 = state.deckLayer[0]) === null || _state$deckLayer$13 === void 0 ? void 0 : _state$deckLayer$13.defaultInteraction) || null
                  });
                  console.log('state.deckLayer2222', (_state$deckLayer$14 = state.deckLayer[0]) === null || _state$deckLayer$14 === void 0 ? void 0 : _state$deckLayer$14.defaultInteraction);
                  return _objectSpread2({}, state);
                }
              }
            } else if ((action === null || action === void 0 ? void 0 : action.doType) === 2) {
              var _state$mapLayers$i6;

              state.mapLayers[i].linkStyles = (_state$mapLayers$i6 = state.mapLayers[i]) === null || _state$mapLayers$i6 === void 0 ? void 0 : _state$mapLayers$i6.linkStyles.filter(function (elem) {
                return (elem === null || elem === void 0 ? void 0 : elem.id) !== (createLayer === null || createLayer === void 0 ? void 0 : createLayer.id);
              });
            } else {
              for (var j in state.mapLayers[i].linkStyles) {
                if (state.mapLayers[i].linkStyles.hasOwnProperty(j)) {
                  var _state$mapLayers$i$li;

                  if (((_state$mapLayers$i$li = state.mapLayers[i].linkStyles[j]) === null || _state$mapLayers$i$li === void 0 ? void 0 : _state$mapLayers$i$li.id) === (createLayer === null || createLayer === void 0 ? void 0 : createLayer.id)) {
                    var _state$deckLayer$15, _state$deckLayer$16, _state$deckLayer$17, _state$deckLayer$18, _state$deckLayer$19;

                    state.mapLayers[i].linkStyles[j] = createLayer;

                    var _layerType4 = mapTypeFun(createLayer.type);

                    createLayer.layerTypeStr = _layerType4;

                    var _layersConfig4 = loadLayerFunction(createLayer);

                    state.deckLayer = [_layersConfig4];
                    state.interactiveData.push({
                      id: (_state$deckLayer$15 = state.deckLayer[0]) === null || _state$deckLayer$15 === void 0 ? void 0 : _state$deckLayer$15.dataid,
                      mapType: (_state$deckLayer$16 = state.deckLayer[0]) === null || _state$deckLayer$16 === void 0 ? void 0 : _state$deckLayer$16.mapType,
                      level: (_state$deckLayer$17 = state.deckLayer[0]) === null || _state$deckLayer$17 === void 0 ? void 0 : _state$deckLayer$17.level,
                      defaultInteraction: ((_state$deckLayer$18 = state.deckLayer[0]) === null || _state$deckLayer$18 === void 0 ? void 0 : _state$deckLayer$18.defaultInteraction) || null
                    });
                    console.log('state.deckLayer3333', (_state$deckLayer$19 = state.deckLayer[0]) === null || _state$deckLayer$19 === void 0 ? void 0 : _state$deckLayer$19.defaultInteraction);
                    console.log('asfasdfsadfsdaf', state.deckLayer);
                    return _objectSpread2({}, state);
                  }
                }
              }
            }
          }
        }

        console.log(state.mapLayers, 'state.mapLayers'); // state.mapLayers = state.mapLayers
        // state.mapLayers = JSON.parse(JSON.stringify(state.mapLayers));

        return _objectSpread2({}, state);
      },
      updateDataLayerReducer: function updateDataLayerReducer(state, action) {
        var updateLayer = action.payload;

        for (var i in state.mapLayers) {
          if (state.mapLayers.hasOwnProperty(i)) {
            var _state$mapLayers$i7;

            if (((_state$mapLayers$i7 = state.mapLayers[i]) === null || _state$mapLayers$i7 === void 0 ? void 0 : _state$mapLayers$i7.id) === (updateLayer === null || updateLayer === void 0 ? void 0 : updateLayer.id)) {
              var newArr = [];
              var layerType = mapTypeFun(updateLayer.type);
              updateLayer.layerTypeStr = layerType;
              updateLayer.dataVisiably = updateLayer.visibility;
              state.mapLayers[i] = updateLayer; // let layersConfig = loadLayerFunction(updateLayer);
              // newArr.push(layersConfig);
              // state.deckLayer = [layersConfig];

              for (var j in updateLayer === null || updateLayer === void 0 ? void 0 : updateLayer.linkStyles) {
                if (updateLayer !== null && updateLayer !== void 0 && updateLayer.linkStyles.hasOwnProperty(j)) {
                  var _updateLayer$linkStyl;

                  console.log('asdfasdf32sadfad', updateLayer.linkStyles[j]);
                  var layerType1 = mapTypeFun(updateLayer === null || updateLayer === void 0 ? void 0 : (_updateLayer$linkStyl = updateLayer.linkStyles[j]) === null || _updateLayer$linkStyl === void 0 ? void 0 : _updateLayer$linkStyl.type);
                  updateLayer.linkStyles[j].layerTypeStr = layerType1;
                  updateLayer.linkStyles[j].dataVisiably = updateLayer.visibility;
                  var layersConfig1 = loadLayerFunction(updateLayer === null || updateLayer === void 0 ? void 0 : updateLayer.linkStyles[j]);
                  newArr.push(layersConfig1);
                }
              }

              console.log('asdfasdfnewArrasdf', newArr);
              state.deckLayer = newArr; // 兼容level !== 2 的删除

              if (updateLayer.isDelete === 2) {
                var indexAttr = updateLayer.linkStyles.findIndex(function (e) {
                  return e.id === updateLayer.id;
                });

                if (indexAttr !== -1) {
                  state.selectDataLayerData.linkStyles.splice(indexAttr, 1);
                }
              }
            }
          }
        }

        return _objectSpread2({}, state);
      },
      resetNullReducer: function resetNullReducer(state, action) {
        state.mapLayers = [];
        state.allMapLayers = [];
        state.deckLayer = [];
        state.iviewState = null;
        state.saveCamera = null;
        state.selectDataLayerData = null;
        state.selectDrawLayerData = null;
        state.loadingCurLayerCount = 0;
        state.loadingLayerCount = 0;
        return _objectSpread2({}, state);
      },
      setSelectDataTypeReducer: function setSelectDataTypeReducer(state, action) {
        state.selectDataType = action.payload;
        return _objectSpread2({}, state);
      },
      setCustomGroupShowReducer: function setCustomGroupShowReducer(state, action) {
        state.customGroupShow = action.payload;
        return _objectSpread2({}, state);
      },
      // 拖拽排序
      dragDropLayerRedecer: function dragDropLayerRedecer(state, action) {
        var _action$payload11 = action.payload,
            drag = _action$payload11.drag,
            drop = _action$payload11.drop; // let tempObj = JSON.parse(JSON.stringify(state.mapLayers));
        // debugger;
        // 生成循环体

        var forData = [];

        for (var i in state.selectDataLayerData.linkStyles) {
          if (Object.hasOwnProperty.call(state.selectDataLayerData.linkStyles, i)) {
            var element = state.selectDataLayerData.linkStyles[i];
            forData.push({
              zOrder: element.zOrder
            });
          }
        } // 从上往下拖----目标位置的的下方


        if (drag.zOrder < drop.zOrder) {
          for (var _i3 in forData) {
            if (Object.hasOwnProperty.call(forData, _i3)) {
              var _element3 = forData[_i3];

              if ((_element3 === null || _element3 === void 0 ? void 0 : _element3.zOrder) > (drag === null || drag === void 0 ? void 0 : drag.zOrder) && (_element3 === null || _element3 === void 0 ? void 0 : _element3.zOrder) <= (drop === null || drop === void 0 ? void 0 : drop.zOrder)) {
                state.selectDataLayerData.linkStyles[_i3].zOrder = forData[_i3 - 1].zOrder;
                state.selectDataLayerData.linkStyles[_i3 - 1] = state.selectDataLayerData.linkStyles[_i3];
              } // debugger;


              if ((_element3 === null || _element3 === void 0 ? void 0 : _element3.zOrder) === (drop === null || drop === void 0 ? void 0 : drop.zOrder)) {
                state.selectDataLayerData.linkStyles[_i3] = drag;
                state.selectDataLayerData.linkStyles[_i3].zOrder = drop === null || drop === void 0 ? void 0 : drop.zOrder;
              }
            }
          }
        } // 从下往上拖----目标位置的的上方


        if (drag.zOrder > drop.zOrder) {
          for (var j = forData.length - 1; j >= 0; j--) {
            var _forData$j, _forData$j2, _forData$j3;

            if (((_forData$j = forData[j]) === null || _forData$j === void 0 ? void 0 : _forData$j.zOrder) < (drag === null || drag === void 0 ? void 0 : drag.zOrder) && ((_forData$j2 = forData[j]) === null || _forData$j2 === void 0 ? void 0 : _forData$j2.zOrder) >= (drop === null || drop === void 0 ? void 0 : drop.zOrder)) {
              state.selectDataLayerData.linkStyles[j].zOrder = forData[j + 1].zOrder;
              state.selectDataLayerData.linkStyles[j + 1] = state.selectDataLayerData.linkStyles[j];
            } // debugger;


            if (((_forData$j3 = forData[j]) === null || _forData$j3 === void 0 ? void 0 : _forData$j3.zOrder) === (drop === null || drop === void 0 ? void 0 : drop.zOrder)) {
              state.selectDataLayerData.linkStyles[j] = drag;
              state.selectDataLayerData.linkStyles[j].zOrder = drop === null || drop === void 0 ? void 0 : drop.zOrder;
            }
          }
        } // 更新选中图层的zorder


        if (state.selectDrawLayerData.id === drag.id) {
          state.selectDrawLayerData.zOrder = drop.zOrder;
        } // 对应地图响应


        var tempArr = [];

        for (var key in state.selectDataLayerData.linkStyles) {
          if (Object.hasOwnProperty.call(state.selectDataLayerData.linkStyles, key)) {
            var _element4 = state.selectDataLayerData.linkStyles[key];
            var layersConfig = loadLayerFunction(_element4);
            tempArr.push(layersConfig);
          }
        }

        state.deckLayer = tempArr; // 对应地图响应 end

        for (var k in state.mapLayers) {
          if (Object.hasOwnProperty.call(state.mapLayers, k)) {
            var _element5 = state.mapLayers[k];

            if (_element5.id === state.selectDataLayerData.id) {
              state.mapLayers[k] = state.selectDataLayerData;
            }
          }
        }

        console.log(state.selectDataLayerData, '单个数据');
        console.log(state.selectDrawLayerData, 'selectDrawLayerData');
        return _objectSpread2({}, state);
      },
      deleteMapLayersReducer: function deleteMapLayersReducer(state, action) {
        var _action$payload$linkS;

        state.deleteMapLayers = [action.payload];

        if (((_action$payload$linkS = action.payload.linkStyles) === null || _action$payload$linkS === void 0 ? void 0 : _action$payload$linkS.length) > 0) {
          for (var key in action.payload.linkStyles) {
            if (action.payload.linkStyles.hasOwnProperty(key)) {
              var element = action.payload.linkStyles[key];
              state.deleteMapLayers.push(element);
            }
          }
        }

        return _objectSpread2({}, state);
      },
      // changeViewChangeReducer(state, action) {
      //   if (action.payload && state.selectDrawLayerData) {
      //     state.viewport = action.payload;
      //     state.selectDrawLayerData.viewport = state.viewport;
      //   }
      //   return { ...state };
      // },
      getViewportReducer: function getViewportReducer(state, action) {
        state.viewport = action.payload;
        return _objectSpread2({}, state);
      },
      getIviewStateReducer: function getIviewStateReducer(state, action) {
        state.iviewState = action.payload;
        return _objectSpread2(_objectSpread2({}, state), action.payload);
      },
      // 渲染模式
      getRenderModeReducer: function getRenderModeReducer(state, action) {
        state.renderMode = action.payload;
        return _objectSpread2({}, state);
      },
      // 正在修改名称的图层
      activeUpdateReducer: function activeUpdateReducer(state, action) {
        state.activeUpdate = action.payload;
        return _objectSpread2(_objectSpread2({}, state), action.payload);
      },
      //修改图层名称
      getLayerNameReducer: function getLayerNameReducer(state, action) {
        state.layerName = action.payload;
        return _objectSpread2(_objectSpread2({}, state), action.payload);
      },
      // ------------- 场景设置相关 -------------
      // 设置camera
      setCameraReducer: function setCameraReducer(state, action) {
        state.camera = action.payload; //   const i = state.mapLayers.findIndex(e => e.level === 0);
        //   state.selectDataLayerData

        state.mapLayers[0].camera = action.payload;
        console.log(state.mapLayers, action.payload, 'aishayebushi');
        return _objectSpread2({}, state);
      },
      defaultCameraReducer: function defaultCameraReducer(state, action) {
        state.camera = action.payload;
        return _objectSpread2({}, state);
      },
      //设置当前选择的地图样式
      setDeckMapStyle: function setDeckMapStyle(state, action) {
        state.deckMapStyle = action.payload;
        return _objectSpread2({}, state);
      },
      saveCameraReducer: function saveCameraReducer(state, action) {
        state.saveCamera = action.payload;
        return _objectSpread2({}, state);
      },
      updateInteractiveDataReducer: function updateInteractiveDataReducer(state, action) {
        state.interactiveData = action.payload;
        console.log('asfd34asdfasdfsad', state.interactiveData);
        return _objectSpread2({}, state);
      },
      // loadingLayerCountReducer(state, action) {
      //   state.loadingLayerCount = action.payload;
      //   if (!state.loadingLayerCount) {
      //     state.loadingProgress = false;
      //   }
      //   // alert(state.loadingLayerCount);
      //   return { ...state };
      // },
      setIviewStatePropsReducer: function setIviewStatePropsReducer(state, action) {
        state.iviewState = action.payload;
        return _objectSpread2({}, state);
      }
    }
  };

  var cameraFlightModel = {
    namespace: 'cameraFlightModel',
    state: {
      cameraList: [],
      flyCameraId: 0,
      //飞行组的id
      cameraOption: {
        flightType: 0,
        //沿线0，分段1
        flightTime: 10,
        //沿线时长
        backToStart: false,
        //回到原点
        loopFlight: false,
        // 循环飞行
        viewCamera: null,
        flightSetIsTrue: true
      },
      framesOption: {
        flightTime: 10,
        stayTime: 0,
        viewCamera: null
      },
      // 初始选中
      framesActive: {
        id: 0,
        flightTime: 0,
        stayTime: 0,
        option: {}
      },
      //是否开启飞行状态
      flyState: false,
      mapHandle: null
    },
    subscriptions: {// setup({ dispatch, history }) {},
    },
    effects: {
      /**
       *@method select_list_by_layer_id_Effect
       * 获取飞行镜头列表
       * @params {}
       */
      select_list_by_layer_id_Effect: /*#__PURE__*/regeneratorRuntime.mark(function select_list_by_layer_id_Effect(_ref, _ref2) {
        var _res$data;

        var payload, map, call, put, select, buildNewMapModel, param, res, data;
        return regeneratorRuntime.wrap(function select_list_by_layer_id_Effect$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = _ref.payload, map = _ref.map;
                call = _ref2.call, put = _ref2.put, select = _ref2.select;
                _context.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                buildNewMapModel = _context.sent;
                param = {
                  layerId: payload || buildNewMapModel.groupLayerId
                };
                _context.next = 8;
                return call(select_list_by_layer_id_Service, param);

              case 8:
                res = _context.sent;

                if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.code) {
                  _context.next = 17;
                  break;
                }

                data = res.data.data || [];
                console.log(data, 'cameraList');

                if (!(data && data.length > 0)) {
                  _context.next = 15;
                  break;
                }

                _context.next = 15;
                return put({
                  type: 'setCameraListReducer',
                  payload: data,
                  map: map
                });

              case 15:
                _context.next = 18;
                break;

              case 17:
                antd.message.error(res.data.message);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, select_list_by_layer_id_Effect);
      }),

      /**
       *@method select_das_camera_Effect
       * 查询图层飞行相机组
       * @params {}
       */
      select_das_camera_Effect: /*#__PURE__*/regeneratorRuntime.mark(function select_das_camera_Effect(_ref3, _ref4) {
        var _res$data2;

        var call, select, buildNewMapModel, param, res, data;
        return regeneratorRuntime.wrap(function select_das_camera_Effect$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                call = _ref4.call, select = _ref4.select;
                _context2.next = 4;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 4:
                buildNewMapModel = _context2.sent;
                param = {
                  id: buildNewMapModel.groupLayerId
                };
                _context2.next = 8;
                return call(select_das_camera_Service, param);

              case 8:
                res = _context2.sent;

                if (!(res !== null && res !== void 0 && (_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.code)) {
                  data = res.data.data;
                  console.log(data, 'jalksjdlfkjs');
                } else {
                  antd.message.success('获取图层飞行相机组失败');
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, select_das_camera_Effect);
      }),

      /**
       * 只走一次
       *@method create_das_camera_Effect
       * 新建图层飞行相机组
       * @params {}
       */
      create_das_camera_Effect: /*#__PURE__*/regeneratorRuntime.mark(function create_das_camera_Effect(_ref5, _ref6) {
        var _res$data3;

        var call, put, select, thisModel, buildNewMapModel, param, res, data;
        return regeneratorRuntime.wrap(function create_das_camera_Effect$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                call = _ref6.call, put = _ref6.put, select = _ref6.select;
                _context3.next = 4;
                return select(function (state) {
                  return state.cameraFlightModel;
                });

              case 4:
                thisModel = _context3.sent;
                _context3.next = 7;
                return select(function (state) {
                  return state.buildNewMapModel;
                });

              case 7:
                buildNewMapModel = _context3.sent;
                // localStorage.setItem('viewport', JSON.stringify(viewState));
                param = {
                  layerId: buildNewMapModel.groupLayerId,
                  option: JSON.stringify(thisModel.cameraOption)
                };
                _context3.next = 11;
                return call(create_das_camera_Service, param, 'workspaceFilter');

              case 11:
                res = _context3.sent;

                if (res !== null && res !== void 0 && (_res$data3 = res.data) !== null && _res$data3 !== void 0 && _res$data3.code) {
                  _context3.next = 16;
                  break;
                }

                data = res.data.data; // yield put({ type: 'create_das_camera_frame_Effect', payload: data.id });
                // yield put({ type: 'update_das_camera_Effect', payload: payload, id: data.id });

                _context3.next = 16;
                return put({
                  type: 'setCameraListReducer',
                  payload: [data]
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, create_das_camera_Effect);
      }),

      /**
       *@method create_das_camera_frame_Effect
       * 创建飞行镜头帧
       * @params {}
       */
      create_das_camera_frame_Effect: /*#__PURE__*/regeneratorRuntime.mark(function create_das_camera_frame_Effect(_ref7, _ref8) {
        var _res$data4;

        var payload, call, put, select, thisModel, option, param, requestBody, res, data;
        return regeneratorRuntime.wrap(function create_das_camera_frame_Effect$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                payload = _ref7.payload;
                call = _ref8.call, put = _ref8.put, select = _ref8.select;
                _context4.next = 4;
                return select(function (state) {
                  return state.cameraFlightModel;
                });

              case 4:
                thisModel = _context4.sent;
                // localStorage.setItem('viewport', JSON.stringify(viewState));
                option = _objectSpread2(_objectSpread2({}, thisModel.framesOption), {}, {
                  viewCamera: JSON.parse(localStorage.getItem('viewport'))
                });
                param = {
                  cameraGroupId: thisModel.cameraList[0].id || payload,
                  option: JSON.stringify(option)
                }, requestBody = null;

                if (thisModel.cameraList[0].option.flightType === 2) {
                  // 添加中心点巡航
                  requestBody = create_das_camera_center_frame_Service;
                } else {
                  // 添加其他镜头帧
                  requestBody = create_das_camera_frame_Service;
                }

                _context4.next = 10;
                return call(requestBody, param, 'workspaceFilter');

              case 10:
                res = _context4.sent;

                if (res !== null && res !== void 0 && (_res$data4 = res.data) !== null && _res$data4 !== void 0 && _res$data4.code) {
                  _context4.next = 16;
                  break;
                }

                data = res.data.data;
                data.option = JSON.parse(data.option);
                _context4.next = 16;
                return put({
                  type: 'setFramesReducer',
                  payload: data,
                  doType: 1
                });

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, create_das_camera_frame_Effect);
      }),

      /**
       *@method update_das_camera_Effect
       *  更新相机分组参数
       * @params {}
       */
      update_das_camera_Effect: /*#__PURE__*/regeneratorRuntime.mark(function update_das_camera_Effect(_ref9, _ref10) {
        var _res$data5;

        var payload, id, call, put, select, thisModel, param, res, data;
        return regeneratorRuntime.wrap(function update_das_camera_Effect$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                payload = _ref9.payload, id = _ref9.id;
                call = _ref10.call, put = _ref10.put, select = _ref10.select;
                _context5.next = 4;
                return select(function (state) {
                  return state.cameraFlightModel;
                });

              case 4:
                thisModel = _context5.sent;
                param = {
                  id: thisModel.flyCameraId || id,
                  option: JSON.stringify(payload)
                };
                _context5.next = 8;
                return call(update_das_camera_Service, param);

              case 8:
                res = _context5.sent;

                if (res !== null && res !== void 0 && (_res$data5 = res.data) !== null && _res$data5 !== void 0 && _res$data5.code) {
                  _context5.next = 14;
                  break;
                }

                data = res.data.data;
                data.option = JSON.parse(data.option);
                _context5.next = 14;
                return put({
                  type: 'setCameraReducer',
                  payload: data
                });

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, update_das_camera_Effect);
      }),

      /**
       *@method update_das_camera_frame_Effect
       *  更新镜头飞行帧
       * @params {}
       */
      update_das_camera_frame_Effect: /*#__PURE__*/regeneratorRuntime.mark(function update_das_camera_frame_Effect(_ref11, _ref12) {
        var _res$data6;

        var payload, call, put, select, thisModel, paramOption, requestBody, param, res;
        return regeneratorRuntime.wrap(function update_das_camera_frame_Effect$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                payload = _ref11.payload;
                call = _ref12.call, put = _ref12.put, select = _ref12.select;
                _context6.next = 4;
                return select(function (state) {
                  return state.cameraFlightModel;
                });

              case 4:
                thisModel = _context6.sent;
                paramOption = null, requestBody = null;

                if (thisModel.cameraList[0].option.flightType === 2) {
                  paramOption = thisModel.cameraList[0].centers.filter(function (elem) {
                    return elem.id === payload.id;
                  });
                  requestBody = update_das_camera_center_frame_Service;
                } else {
                  paramOption = thisModel.cameraList[0].frames.filter(function (elem) {
                    return elem.id === payload.id;
                  });
                  requestBody = update_das_camera_frame_Service;
                }

                param = {
                  id: payload.id,
                  option: JSON.stringify(_objectSpread2(_objectSpread2({}, paramOption[0].option), payload.updateData))
                };
                _context6.next = 10;
                return call(requestBody, param);

              case 10:
                res = _context6.sent;

                if (res !== null && res !== void 0 && (_res$data6 = res.data) !== null && _res$data6 !== void 0 && _res$data6.code) {
                  _context6.next = 14;
                  break;
                }

                _context6.next = 14;
                return put({
                  type: 'setCameraFramesReducer',
                  payload: param
                });

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, update_das_camera_frame_Effect);
      }),

      /**
       * 当前删除分组暂时界面不用，保留
       *@method remove_das_camera_Effect
       * 删除飞行分组信息
       * @params {}
       */
      remove_das_camera_Effect: /*#__PURE__*/regeneratorRuntime.mark(function remove_das_camera_Effect(_ref13, _ref14) {
        var _res$data7;

        var call, param, res;
        return regeneratorRuntime.wrap(function remove_das_camera_Effect$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                call = _ref14.call;
                param = {
                  id: 8
                };
                _context7.next = 5;
                return call(remove_das_camera_Service, param);

              case 5:
                res = _context7.sent;

                if (!(res !== null && res !== void 0 && (_res$data7 = res.data) !== null && _res$data7 !== void 0 && _res$data7.code)) {
                  antd.message.success('删除成功！');
                }

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, remove_das_camera_Effect);
      }),

      /**
       *@method remove_das_camera_frame_Effect
       *  删除镜头帧
       * @params {}
       */
      remove_das_camera_frame_Effect: /*#__PURE__*/regeneratorRuntime.mark(function remove_das_camera_frame_Effect(_ref15, _ref16) {
        var _res$data8;

        var payload, call, put, select, thisModel, param, requestBody, res;
        return regeneratorRuntime.wrap(function remove_das_camera_frame_Effect$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                payload = _ref15.payload;
                call = _ref16.call, put = _ref16.put, select = _ref16.select;
                _context8.next = 4;
                return select(function (state) {
                  return state.cameraFlightModel;
                });

              case 4:
                thisModel = _context8.sent;
                param = {
                  id: payload
                };
                requestBody = null; // 中心点巡航

                if (thisModel.cameraList[0].option.flightType === 2) {
                  requestBody = remove_das_camera_center_frame_Service;
                } else {
                  requestBody = remove_das_camera_frame_Service;
                }

                _context8.next = 10;
                return call(requestBody, param);

              case 10:
                res = _context8.sent;

                if (res !== null && res !== void 0 && (_res$data8 = res.data) !== null && _res$data8 !== void 0 && _res$data8.code) {
                  _context8.next = 14;
                  break;
                }

                _context8.next = 14;
                return put({
                  type: 'setFramesReducer',
                  payload: payload,
                  doType: 0
                });

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, remove_das_camera_frame_Effect);
      })
    },
    reducers: {
      setCameraListReducer: function setCameraListReducer(state, action) {
        var _action$payload$;

        state.cameraList = action.payload;
        state.flyCameraId = state.cameraList[0].id;
        state.cameraList[0].option = JSON.parse((_action$payload$ = action.payload[0]) === null || _action$payload$ === void 0 ? void 0 : _action$payload$.option);

        if (state.cameraList[0].frames && state.cameraList[0].frames.length > 0) {
          for (var i in state.cameraList[0].frames) {
            if (Object.hasOwnProperty.call(state.cameraList[0].frames, i)) {
              state.cameraList[0].frames[i].option = JSON.parse(state.cameraList[0].frames[i].option);
            }
          }
        } else {
          state.cameraList[0].frames = [];
        }

        if (state.cameraList[0].centers && state.cameraList[0].centers.length > 0) {
          for (var _i in state.cameraList[0].centers) {
            if (Object.hasOwnProperty.call(state.cameraList[0].centers, _i)) {
              state.cameraList[0].centers[_i].option = JSON.parse(state.cameraList[0].centers[_i].option);
            }
          }
        } else {
          state.cameraList[0].centers = [];
        }

        if (state.cameraList[0].frames.length > 0) {
          state.framesActive = {
            id: state.cameraList[0].frames[0].id,
            flightTime: state.cameraList[0].frames[0].option.flightTime,
            stayTime: state.cameraList[0].frames[0].option.stayTime,
            option: state.cameraList[0].frames[0].option
          };
        }

        if (action !== null && action !== void 0 && action.map) {
          action.map.setCameraList(state.cameraList);
        } // console.log('statramesActive', state.framesActive);


        return _objectSpread2({}, state);
      },
      setFramesActiveReducer: function setFramesActiveReducer(state, action) {
        state.framesActive = action.payload;
        return _objectSpread2({}, state);
      },
      setCameraReducer: function setCameraReducer(state, action) {
        var _action$payload;

        state.cameraList[0].option = action === null || action === void 0 ? void 0 : (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.option;
        return _objectSpread2({}, state);
      },
      setFramesReducer: function setFramesReducer(state, action) {
        if (action.doType) {
          if (state.cameraList[0].frames.length === 0) {
            // 默认选中第一个
            state.framesActive = {
              id: action.payload.id,
              flightTime: action.payload.option.flightTime,
              stayTime: action.payload.option.stayTime,
              option: action.payload.option
            };
          }

          console.log(state.cameraList[0], 'gjixnmman'); // 2:中心点巡航

          if (state.cameraList[0].option.flightType === 2) {
            state.cameraList[0].centers.push(action.payload);
          } else {
            state.cameraList[0].frames.push(action.payload);
          }
        } else {
          if (state.cameraList[0].option.flightType === 2) {
            state.cameraList[0].centers.length = 0;
          } else {
            for (var i in state.cameraList[0].frames) {
              if (Object.hasOwnProperty.call(state.cameraList[0].frames, i)) {
                var element = state.cameraList[0].frames[i];

                if (element.id === action.payload) {
                  state.cameraList[0].frames.splice(i, 1);
                  break;
                }
              }
            }
          }
        }

        return _objectSpread2({}, state);
      },
      setCameraFramesReducer: function setCameraFramesReducer(state, action) {
        // 2:中心点巡航
        if (state.cameraList[0].option.flightType === 2) {
          state.cameraList[0].centers[0].option = JSON.parse(action.payload.option);
        } else {
          for (var key in state.cameraList[0].frames) {
            if (Object.hasOwnProperty.call(state.cameraList[0].frames, key)) {
              var element = state.cameraList[0].frames[key];

              if (element.id === action.payload.id) {
                state.cameraList[0].frames[key].option = JSON.parse(action.payload.option);
                break;
              }
            }
          }
        }

        return _objectSpread2({}, state);
      },
      changeFlyStateReducer: function changeFlyStateReducer(state, action) {
        state.flyState = action.payload; // if (action?.map) {
        // action.map.setFlyState(state.flyState);
        // }

        if (state.mapHandle) {
          state.mapHandle.flyToCamera(state.cameraList);
        }

        return _objectSpread2({}, state);
      },
      getMapHandleReducer: function getMapHandleReducer(state, action) {
        state.mapHandle = action.payload;
        return _objectSpread2({}, state);
      },
      setPropsNullReducer: function setPropsNullReducer(state, action) {
        state.cameraList = [];
        state.flyCameraId = 0; //飞行组的id

        state.cameraOption = {
          flightType: 0,
          //沿线0，分段1
          flightTime: 10,
          //沿线时长
          backToStart: false,
          //回到原点
          loopFlight: false,
          // 循环飞行
          viewCamera: null,
          flightSetIsTrue: true
        };
        state.framesOption = {
          flightTime: 10,
          stayTime: 0,
          viewCamera: null
        }; // 初始选中

        state.framesActive = {
          id: 0,
          flightTime: 0,
          stayTime: 0,
          option: {}
        }; //是否开启飞行状态

        state.flyState = false;
        state.mapHandle = null;
        return _objectSpread2({}, state);
      }
    }
  };

  function screenApp() {
    //地图的models
    window.g_app.model(_objectSpread2({
      namespace: 'buildNewMapModel'
    }, buildNewMapModel));
    window.g_app.model(_objectSpread2({
      namespace: 'cameraFlightModel'
    }, cameraFlightModel));
  }

  screenApp();
  /**
   * 把二维数组转成 空格 ， 分隔的字符串
   * @param {[]} data 二维数组
   * @returns {string} 空格 ， 分隔的字符串
   */

  var flatArray = function flatArray(data) {
    if (Array.isArray(data[0])) {
      return data[0].map(function (item) {
        return item.join(' ');
      }).join(',');
    }
  };
  new core.SphereGeometry({
    radius: 20,
    nlat: 100,
    nlong: 100
  });
  new deck_gl.AmbientLight({
    color: [255, 255, 255],
    intensity: 1
  });
  new deck_gl.PointLight({
    color: [255, 255, 255],
    intensity: 1,
    position: [0, 0, 30]
  });
  new deck_gl.PointLight({
    color: [255, 255, 255],
    intensity: 1,
    position: [50, 50, 50]
  }); // const cameraLight = new _CameraLight({
  //   color: [255, 255, 255],
  //   intensity: 0.2,
  // });

  new deck_gl.DirectionalLight({
    color: [255, 255, 255],
    direction: [0, 0, -1],
    intensity: 1
  }); // import {
  //   onWebGLInitialized,
  //   setLayerBlending,
  // } from '@/utils/layerutils/gl-utils.js';
  // function isArray(array) {}
  // arr为删除前的数组，key为要删除的元素对象。
  //删除数组中某元素，返回含有剩余元素的数组------------------------------------

  function arrMove(arr, dataid) {
    var temp = [];

    for (var key in arr) {
      var _arr$key;

      if (Number((_arr$key = arr[key]) === null || _arr$key === void 0 ? void 0 : _arr$key.dataid) !== Number(dataid)) {
        temp.push(arr[key]);
      }
    }

    return temp;
  }
  /**
   * 克隆对象
   * @method {clone}
   * @param {object}  origin
   */
  // function clone(origin) {
  //   let originProto = Object.getPrototypeOf(origin);
  //   return Object.assign(Object.create(originProto), origin);
  // }

  /**
   * 判断为空
   * @method {isEmpty}
   * @param {object}  obj
   */
  // function isEmpty(obj) {
  //   if (obj) {
  //     return !Object.getOwnPropertyNames(obj).length && !Object.getOwnPropertySymbols(obj).length;
  //   }
  //   return true;
  // }

  /**
   * 数组去重
   * @method {arrayUnique}
   * @param {array}  arr 目标数组
   * @param {string} name 去重字段
   */


  function arrayUnique(arr) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
    // console.log("arrarr", arr)
    var hash = {};
    return arr.reduce(function (tarr, cru, index) {
      if (!hash[cru[key]]) {
        hash[cru[key]] = {
          index: index
        };
        tarr.push(cru);
      } else {
        tarr.splice(hash[cru[key]]['index'], 1, cru);
      } // console.log("tarrtarrtarr", tarr)


      return tarr;
    }, []);
  }

  function arrayUniqueData(arr, timers, callBack) {
    var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'dataid';
    var hash = {};
    var index_trips = null;
    return arr.reduce(function (tarr, cru, index) {
      if (!hash[cru['props'][key]]) {
        hash[cru['props'][key]] = {
          index: index
        };
        tarr.push(cru);
      } else {
        var _tarr$index_trips, _tarr$index_trips$pro;

        // 该判断用于切换图层时，清除trips图层
        index_trips = hash[cru['props'][key]]['index'];

        if (((_tarr$index_trips = tarr[index_trips]) === null || _tarr$index_trips === void 0 ? void 0 : (_tarr$index_trips$pro = _tarr$index_trips.props) === null || _tarr$index_trips$pro === void 0 ? void 0 : _tarr$index_trips$pro.mapType) === 'TripsLayer') {
          for (var time in timers) {
            if (timers.hasOwnProperty(time)) {
              var _timers$time, _tarr$index_trips2, _tarr$index_trips2$pr;

              if (((_timers$time = timers[time]) === null || _timers$time === void 0 ? void 0 : _timers$time.dataid) === ((_tarr$index_trips2 = tarr[index_trips]) === null || _tarr$index_trips2 === void 0 ? void 0 : (_tarr$index_trips2$pr = _tarr$index_trips2.props) === null || _tarr$index_trips2$pr === void 0 ? void 0 : _tarr$index_trips2$pr.dataid)) {
                var _timers$time2, _timers$time3;

                clearInterval((_timers$time2 = timers[time]) === null || _timers$time2 === void 0 ? void 0 : _timers$time2.timer);
                var timeNew = arrMove(timers, Number((_timers$time3 = timers[time]) === null || _timers$time3 === void 0 ? void 0 : _timers$time3.dataid));
                callBack(timeNew);
              }
            }
          }
        }

        tarr.splice(hash[cru['props'][key]]['index'], 1, cru);
      } // console.log("tarrtarrtarr", tarr)


      return tarr;
    }, []);
  }

  function arrayUniqueDataM(arr) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dataid';
    // console.log("arrarr", arr)
    var hash = {};
    return arr.reduce(function (tarr, cru, index) {
      if (!hash[cru[key]]) {
        hash[cru[key]] = {
          index: index
        };
        tarr.push(cru);
      } else {
        tarr.splice(hash[cru[key]]['index'], 1, cru);
      } // console.log("tarrtarrtarr", tarr)


      return tarr;
    }, []);
  }
  /**
   * 深拷贝(用于处理数据array and object)
   * @method {deepClone}
   * @param {array}  data 原数组
   * @param {hash} array WeakMap
   */


  function deepClone(data) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
    if (data === undefined || data === null) return data;
    if (_typeof(data) !== 'object') return data;
    if (data instanceof RegExp) return new RegExp(data);
    if (data instanceof Date) return new Date(data);
    var v = hash.get(data);
    if (v) return v;
    var instance = new data.constructor();
    hash.set(data, instance);

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        instance[key] = deepClone(data[key], hash);
      }
    }

    return instance;
  }
  /**
   * 合并对象(用于处理图层属性)
   * @method {getProps}
   * @param {array}  deckglLayers 原数组
   * @param {array} array 新数组
   */


  function getProps(deckglLayers, array) {
    var layerProps = array;

    for (var k in deckglLayers) {
      if (deckglLayers.hasOwnProperty(k)) {
        var _deckglLayers$k;

        if (((_deckglLayers$k = deckglLayers[k]) === null || _deckglLayers$k === void 0 ? void 0 : _deckglLayers$k.id) === (array === null || array === void 0 ? void 0 : array.id)) {
          var _deckglLayers$k$props, _deckglLayers$k2;

          // data
          var newData = deepClone((_deckglLayers$k$props = deckglLayers[k].props) === null || _deckglLayers$k$props === void 0 ? void 0 : _deckglLayers$k$props.data);
          layerProps = _objectSpread2(_objectSpread2({}, (_deckglLayers$k2 = deckglLayers[k]) === null || _deckglLayers$k2 === void 0 ? void 0 : _deckglLayers$k2.props), {}, {
            data: newData
          }, array); // console.log('layerProps', layerProps);
        }
      }
    }

    return layerProps;
  }
  /**
   * 过滤图层
   * @method {filterLayer}
   * @param {number}  type 类型
   * @param {array} array 所有图层
   */


  function filterLayer(type, layers) {
    //入口校验也是可以添加的
    if (!Array.isArray(layers)) {
      layerError(layers);
      return [];
    }

    if (type === layerTypeFiltter.deckgl) {
      return layers.filter(function (elem) {
        return (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.SCATTERPLOT_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.TRIPS_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.ARC_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.BITMAP_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.COLUMN_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.CPUGRID_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.CONTOUR_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.GEOJSON_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.GPUGRID_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.GREATCIRCLE_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.TEXT_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.PATH_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.LINE_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.ICON_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.HEATMAP_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.DTERRAIN_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.SOLIDPOLYGON_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.SCREENGRID_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.POLYGON_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.GRIDCELL_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.GRID_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.HEXAGON_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.H3CLUSTER_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.H3HEXAGON_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.SCENEGRAPH_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.TILE3D_LAYER;
      });
    } else {
      return layers.filter(function (elem) {
        return (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.TEXT_LABEL || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.HEAT_LAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.HEARTBEATLAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.FLYINGLINELAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.SIZESCATTERLAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.WARNIMAGELAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.RATERIMAGELAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.RATERDEMLAYER || (elem === null || elem === void 0 ? void 0 : elem.mapType) === mapLayerName.UEMODELLAYER;
      });
    }
  }

  var deck = null;

  var DMap = /*#__PURE__*/function (_PureComponent) {
    _inherits(DMap, _PureComponent);

    var _super = _createSuper(DMap);

    /**
     * 属性说明
     * @property {object} mapbox
     * @property {object} viewState
     * @property {array} mapboxLayers
     * @property {array} deckglLayers
     */
    function DMap(props) {
      var _this;

      _classCallCheck(this, DMap);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "state", {
        mapbox: null,
        iviewState: initialViewState,
        mapboxLayers: [],
        deckglLayers: [],
        dlayers: [],
        timers: [],
        animate: true,
        spaceojoMapStyle: MAPBOX_STYLE,
        info: null,
        tkContent: null,
        zoom: null,
        popShow: 1,
        popContentStyle: null,
        interactiveData: [],
        eventInfo: null,
        popType: 0,
        boxType: 1,
        mapController: null,
        defaultCamera: null,
        eventState: 'click',
        allFeild: null
      });

      _defineProperty(_assertThisInitialized(_this), "createMapboxDraw", function (mapbox) {
        var draw = new MapboxDraw__default["default"]({
          displayControlsDefault: false,
          controls: {
            polygon: true,
            point: true,
            //line_string: true, 暂时不要线
            trash: true
          },
          userProperties: true,
          modes: _objectSpread2(_objectSpread2({}, MapboxDraw__default["default"].modes), {}, {
            //draw_polygon: FreehandMode, 有bug暂时改用自带的
            draw_point: mapboxGlDrawCircle.DragCircleMode //
            //draw_line_string: MapboxDraw.modes.draw_polygon, 暂时不要线

          })
        });
        _this.draw = draw;

        if (mapbox) {
          mapbox.addControl(draw);
          mapbox.on('draw.create', _this.createArea);
          mapbox.on('draw.delete', _this.deleteArea);
          mapbox.on('draw.update', _this.updateArea);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "createArea", function (e) {
        if (_this.state.selectMap) {
          _this.deleteArea(e);

          var timer = setTimeout(function () {
            _this.updateArea(e);

            clearTimeout(timer);
          }, 3000);
        } else {
          _this.updateArea(e);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "updateArea", function (e) {
        var dragCallBack = _this.props.dragCallBack;

        if (Array.isArray(e.features)) {
          var _feature$geometry;

          _this.setState({
            selectMap: e.features[0].id
          });

          var feature = e.features[0];
          var geometry = (feature === null || feature === void 0 ? void 0 : (_feature$geometry = feature.geometry) === null || _feature$geometry === void 0 ? void 0 : _feature$geometry.coordinates) || [];
          var str = flatArray(geometry);
          dragCallBack && dragCallBack([{
            name: 'geom',
            operator: 43,
            value: "POLYGON((".concat(str, "))")
          }]);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "deleteArea", function (e) {
        var dragCallBack = _this.props.dragCallBack;

        _this.draw["delete"](_this.state.selectMap);

        _this.draw.getAll();

        if (Array.isArray(e.features)) {
          var _feature$geometry2;

          var feature = e.features[0];
          var geometry = (feature === null || feature === void 0 ? void 0 : (_feature$geometry2 = feature.geometry) === null || _feature$geometry2 === void 0 ? void 0 : _feature$geometry2.coordinates) || [];
          flatArray(geometry);
          dragCallBack && dragCallBack([], 'delete', _this.state.selectMap);
        }

        _this.setState({
          selectMap: null
        });
      });

      _defineProperty(_assertThisInitialized(_this), "selectMapDelete", function () {
        _this.draw.deleteAll(_this.state.selectMap);

        _this.setState({
          selectMap: null
        });
      });

      _defineProperty(_assertThisInitialized(_this), "_findTripsLayer", function (dTripsLayer) {
        var _dTripsLayer$props, _dTripsLayer$props$tr;

        _this._tripsClearTime(dTripsLayer);

        if ((dTripsLayer === null || dTripsLayer === void 0 ? void 0 : (_dTripsLayer$props = dTripsLayer.props) === null || _dTripsLayer$props === void 0 ? void 0 : (_dTripsLayer$props$tr = _dTripsLayer$props.trips) === null || _dTripsLayer$props$tr === void 0 ? void 0 : _dTripsLayer$props$tr.feild) !== '') {
          var timerSave = [];

          var _dTripsLayer$props2 = dTripsLayer === null || dTripsLayer === void 0 ? void 0 : dTripsLayer.props,
              frequencyTime = _dTripsLayer$props2.frequencyTime,
              currentTime = _dTripsLayer$props2.currentTime,
              addtime = _dTripsLayer$props2.addtime,
              timeArr = _dTripsLayer$props2.timeArr;

          addtime = isNaN(Number(addtime)) ? 1 : addtime;
          var maxnumber = Math.max.apply(null, timeArr) - Math.min.apply(null, timeArr);

          if (!_this.time) {
            var _dTripsLayer$props5, _dTripsLayer$props6;

            _this.time = setInterval(function () {
              var _dTripsLayer$props3, _dTripsLayer$props4;

              if (currentTime >= maxnumber) {
                currentTime = 0;
              } else {
                currentTime += addtime;
              }

              var tripsLayer = (_dTripsLayer$props3 = dTripsLayer.props) === null || _dTripsLayer$props3 === void 0 ? void 0 : _dTripsLayer$props3.updateLayer(_objectSpread2(_objectSpread2({}, dTripsLayer === null || dTripsLayer === void 0 ? void 0 : dTripsLayer.props), {}, {
                data: dTripsLayer === null || dTripsLayer === void 0 ? void 0 : (_dTripsLayer$props4 = dTripsLayer.props) === null || _dTripsLayer$props4 === void 0 ? void 0 : _dTripsLayer$props4.data,
                currentTime: currentTime
              })); // this.newDeckglLayersTrips.push(tripsLayer);
              // this.newDeckglLayersTrips = arrayUnique(this.newDeckglLayersTrips);

              _this.setStateP({
                deckglLayers: arrayUnique([].concat(_toConsumableArray(_this.state.deckglLayers), [tripsLayer]))
              }).then(function () {
                _this._addDeckLayer(_this.state.deckglLayers);
              });
            }, 1000 / frequencyTime);
            timerSave.push({
              id: dTripsLayer === null || dTripsLayer === void 0 ? void 0 : (_dTripsLayer$props5 = dTripsLayer.props) === null || _dTripsLayer$props5 === void 0 ? void 0 : _dTripsLayer$props5.id,
              dataid: dTripsLayer === null || dTripsLayer === void 0 ? void 0 : (_dTripsLayer$props6 = dTripsLayer.props) === null || _dTripsLayer$props6 === void 0 ? void 0 : _dTripsLayer$props6.dataid,
              timer: _this.time
            });
            _this.time = null; // this.setStateP({ timers: [...this.state.timers, ...timerSave] });

            _this.timers = [].concat(_toConsumableArray(_this.timers), timerSave);
          } else {
            clearInterval(_this.time);
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "_tripsClearTime", function (dTripsLayer) {
        var timers = _this.timers;
        var time = null;

        if ((timers === null || timers === void 0 ? void 0 : timers.length) > 0) {
          time = timers.filter(function (ele, index) {
            var _dTripsLayer$props7, _dTripsLayer$props8;

            return Number(ele === null || ele === void 0 ? void 0 : ele.dataid) === Number(dTripsLayer !== null && dTripsLayer !== void 0 && (_dTripsLayer$props7 = dTripsLayer.props) !== null && _dTripsLayer$props7 !== void 0 && _dTripsLayer$props7.dataid ? dTripsLayer === null || dTripsLayer === void 0 ? void 0 : (_dTripsLayer$props8 = dTripsLayer.props) === null || _dTripsLayer$props8 === void 0 ? void 0 : _dTripsLayer$props8.dataid : dTripsLayer === null || dTripsLayer === void 0 ? void 0 : dTripsLayer.dataid);
          });

          if (time) {
            var _time$2;

            for (var key in timers) {
              if (timers.hasOwnProperty(key)) {
                var _timers$key, _time$;

                if (Number((_timers$key = timers[key]) === null || _timers$key === void 0 ? void 0 : _timers$key.dataid) === Number((_time$ = time[0]) === null || _time$ === void 0 ? void 0 : _time$.dataid)) {
                  var _timers$key2;

                  clearInterval((_timers$key2 = timers[key]) === null || _timers$key2 === void 0 ? void 0 : _timers$key2.timer);
                }
              }
            }

            var newTimers = arrMove(timers, (_time$2 = time[0]) === null || _time$2 === void 0 ? void 0 : _time$2.dataid);
            _this.timers = newTimers;
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "_tripsdeleteTime", function (deckglLayers) {
        var timers = _this.timers;
        var isTrips = [];

        if (timers.length > 0 && deckglLayers.length > 0) {
          for (var key in deckglLayers) {
            if (deckglLayers.hasOwnProperty(key)) {
              var _deckglLayers$key, _deckglLayers$key$pro, _deckglLayers$key2, _deckglLayers$key2$pr, _deckglLayers$key3;

              isTrips.push(Number((_deckglLayers$key = deckglLayers[key]) !== null && _deckglLayers$key !== void 0 && (_deckglLayers$key$pro = _deckglLayers$key.props) !== null && _deckglLayers$key$pro !== void 0 && _deckglLayers$key$pro.dataid ? (_deckglLayers$key2 = deckglLayers[key]) === null || _deckglLayers$key2 === void 0 ? void 0 : (_deckglLayers$key2$pr = _deckglLayers$key2.props) === null || _deckglLayers$key2$pr === void 0 ? void 0 : _deckglLayers$key2$pr.dataid : (_deckglLayers$key3 = deckglLayers[key]) === null || _deckglLayers$key3 === void 0 ? void 0 : _deckglLayers$key3.dataid));
            }
          }

          for (var key1 in timers) {
            if (timers.hasOwnProperty(key1)) {
              var _timers$key3;

              if (isTrips.indexOf(Number((_timers$key3 = timers[key1]) === null || _timers$key3 === void 0 ? void 0 : _timers$key3.dataid)) === -1) {
                var _timers$key4, _timers$key5;

                clearInterval((_timers$key4 = timers[key1]) === null || _timers$key4 === void 0 ? void 0 : _timers$key4.timer);
                var timers11 = arrMove(timers, (_timers$key5 = timers[key1]) === null || _timers$key5 === void 0 ? void 0 : _timers$key5.dataid);
                _this.timers = timers11;
              }
            }
          }
        } else {
          for (var _key in timers) {
            if (timers.hasOwnProperty(_key)) {
              var _timers$_key, _timers$_key2;

              clearInterval((_timers$_key = timers[_key]) === null || _timers$_key === void 0 ? void 0 : _timers$_key.timer);
              var timers22 = arrMove(timers, (_timers$_key2 = timers[_key]) === null || _timers$_key2 === void 0 ? void 0 : _timers$_key2.dataid);
              _this.timers = timers22;
            }
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "_callBackTimers", function (timers) {
        _this.timers = timers;
      });

      _defineProperty(_assertThisInitialized(_this), "_addDeckLayer", function (layers) {
        var deckglLayers = _this.state.deckglLayers;
        var deckglLayersNew1 = deckglLayers; // console.log('asdfas232d34fsdf', deckglLayersNew1, '2323232', layers);

        var _loop = function _loop(i) {
          if (deckglLayersNew1.hasOwnProperty(i)) {
            for (var j in layers) {
              if (layers.hasOwnProperty(j)) {
                var _deckglLayersNew1$i, _deckglLayersNew1$i$p, _layers$j;

                if (Number((_deckglLayersNew1$i = deckglLayersNew1[i]) === null || _deckglLayersNew1$i === void 0 ? void 0 : (_deckglLayersNew1$i$p = _deckglLayersNew1$i.props) === null || _deckglLayersNew1$i$p === void 0 ? void 0 : _deckglLayersNew1$i$p.dataid) === Number((_layers$j = layers[j]) === null || _layers$j === void 0 ? void 0 : _layers$j.dataid)) {
                  var _layers$j2, _layers$j3, _layers$j4, _layers$j5, _layers$j6, _layers$j7, _layers$j8, _layers$j9, _layers$j10;

                  if (((_layers$j2 = layers[j]) === null || _layers$j2 === void 0 ? void 0 : _layers$j2.mapType) === mapLayerName.TEXT_LABEL || ((_layers$j3 = layers[j]) === null || _layers$j3 === void 0 ? void 0 : _layers$j3.mapType) === mapLayerName.HEAT_LAYER || ((_layers$j4 = layers[j]) === null || _layers$j4 === void 0 ? void 0 : _layers$j4.mapType) === mapLayerName.HEARTBEATLAYER || ((_layers$j5 = layers[j]) === null || _layers$j5 === void 0 ? void 0 : _layers$j5.mapType) === mapLayerName.FLYINGLINELAYER || ((_layers$j6 = layers[j]) === null || _layers$j6 === void 0 ? void 0 : _layers$j6.mapType) === mapLayerName.SIZESCATTERLAYER || ((_layers$j7 = layers[j]) === null || _layers$j7 === void 0 ? void 0 : _layers$j7.mapType) === mapLayerName.WARNIMAGELAYER || ((_layers$j8 = layers[j]) === null || _layers$j8 === void 0 ? void 0 : _layers$j8.mapType) === mapLayerName.RATERIMAGELAYER || ((_layers$j9 = layers[j]) === null || _layers$j9 === void 0 ? void 0 : _layers$j9.mapType) === mapLayerName.RATERDEMLAYER || ((_layers$j10 = layers[j]) === null || _layers$j10 === void 0 ? void 0 : _layers$j10.mapType) === mapLayerName.UEMODELLAYER) {
                    deckglLayersNew1 = deckglLayersNew1.filter(function (elem) {
                      var _elem$props, _deckglLayersNew1$i2, _deckglLayersNew1$i2$;

                      return Number(elem === null || elem === void 0 ? void 0 : (_elem$props = elem.props) === null || _elem$props === void 0 ? void 0 : _elem$props.dataid) !== Number((_deckglLayersNew1$i2 = deckglLayersNew1[i]) === null || _deckglLayersNew1$i2 === void 0 ? void 0 : (_deckglLayersNew1$i2$ = _deckglLayersNew1$i2.props) === null || _deckglLayersNew1$i2$ === void 0 ? void 0 : _deckglLayersNew1$i2$.dataid);
                    });
                  }
                }
              }
            }
          }
        };

        for (var i in deckglLayersNew1) {
          _loop(i);
        } // const { layers } = this.props;


        var arrLay = [];
        var deckArr = filterLayer(layerTypeFiltter.deckgl, layers);

        for (var _i in deckArr) {
          if (deckArr.hasOwnProperty(_i)) {
            var _deckArr$_i, _deckArr$_i2, _deckArr$_i3, _deckArr$_i4, _deckArr$_i5, _deckArr$_i6, _deckArr$_i7, _deckArr$_i8, _deckArr$_i9, _deckArr$_i10, _deckArr$_i11, _deckArr$_i12, _deckArr$_i13, _deckArr$_i14, _deckArr$_i15, _deckArr$_i16, _deckArr$_i17, _deckArr$_i18, _deckArr$_i19, _deckArr$_i20, _deckArr$_i21, _deckArr$_i22, _deckArr$_i23, _deckArr$_i24, _deckArr$_i25;

            if (((_deckArr$_i = deckArr[_i]) === null || _deckArr$_i === void 0 ? void 0 : _deckArr$_i.mapType) === mapLayerName.SCATTERPLOT_LAYER) {
              var dScatterplotLayer = DScatterplotLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(dScatterplotLayer);
            }

            if (((_deckArr$_i2 = deckArr[_i]) === null || _deckArr$_i2 === void 0 ? void 0 : _deckArr$_i2.mapType) === mapLayerName.TRIPS_LAYER) {
              var dTripsLayer = DTripsLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(dTripsLayer);

              _this._findTripsLayer(dTripsLayer);
            }

            if (((_deckArr$_i3 = deckArr[_i]) === null || _deckArr$_i3 === void 0 ? void 0 : _deckArr$_i3.mapType) === mapLayerName.ARC_LAYER) {
              var dArcLayer = DArcLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(dArcLayer);
            }

            if (((_deckArr$_i4 = deckArr[_i]) === null || _deckArr$_i4 === void 0 ? void 0 : _deckArr$_i4.mapType) === mapLayerName.BITMAP_LAYER) {
              var bitmapLayer = DBitmapLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(bitmapLayer);
            }

            if (((_deckArr$_i5 = deckArr[_i]) === null || _deckArr$_i5 === void 0 ? void 0 : _deckArr$_i5.mapType) === mapLayerName.COLUMN_LAYER) {
              var columnLayer = DColumnLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(columnLayer);
            }

            if (((_deckArr$_i6 = deckArr[_i]) === null || _deckArr$_i6 === void 0 ? void 0 : _deckArr$_i6.mapType) === mapLayerName.CPUGRID_LAYER) {
              var cpugridLayer = DCPUGridLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(cpugridLayer);
            }

            if (((_deckArr$_i7 = deckArr[_i]) === null || _deckArr$_i7 === void 0 ? void 0 : _deckArr$_i7.mapType) === mapLayerName.CONTOUR_LAYER) {
              var contourLayer = DContourLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(contourLayer);
            }

            if (((_deckArr$_i8 = deckArr[_i]) === null || _deckArr$_i8 === void 0 ? void 0 : _deckArr$_i8.mapType) === mapLayerName.GEOJSON_LAYER) {
              var geojsonLayer = DGeoJsonLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(geojsonLayer);
            }

            if (((_deckArr$_i9 = deckArr[_i]) === null || _deckArr$_i9 === void 0 ? void 0 : _deckArr$_i9.mapType) === mapLayerName.GPUGRID_LAYER) {
              var gpugridLayer = DGPUGridLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(gpugridLayer);
            }

            if (((_deckArr$_i10 = deckArr[_i]) === null || _deckArr$_i10 === void 0 ? void 0 : _deckArr$_i10.mapType) === mapLayerName.GREATCIRCLE_LAYER) ;

            if (((_deckArr$_i11 = deckArr[_i]) === null || _deckArr$_i11 === void 0 ? void 0 : _deckArr$_i11.mapType) === mapLayerName.TEXT_LAYER) {
              var textLayer = DTextLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(textLayer);
            }

            if (((_deckArr$_i12 = deckArr[_i]) === null || _deckArr$_i12 === void 0 ? void 0 : _deckArr$_i12.mapType) === mapLayerName.PATH_LAYER) {
              var pathLayer = DPathLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(pathLayer);
            }

            if (((_deckArr$_i13 = deckArr[_i]) === null || _deckArr$_i13 === void 0 ? void 0 : _deckArr$_i13.mapType) === mapLayerName.LINE_LAYER) {
              var lineLayer = DLineLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(lineLayer);
            }

            if (((_deckArr$_i14 = deckArr[_i]) === null || _deckArr$_i14 === void 0 ? void 0 : _deckArr$_i14.mapType) === mapLayerName.SCENEGRAPH_LAYER) {
              var scenegraphLayer = DScenegraphLayerConfig(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(scenegraphLayer);
            }

            if (((_deckArr$_i15 = deckArr[_i]) === null || _deckArr$_i15 === void 0 ? void 0 : _deckArr$_i15.mapType) === mapLayerName.ICON_LAYER) {
              var iconLayer = DIconLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(iconLayer);
            }

            if (((_deckArr$_i16 = deckArr[_i]) === null || _deckArr$_i16 === void 0 ? void 0 : _deckArr$_i16.mapType) === mapLayerName.HEATMAP_LAYER) {
              var heatmapLayer = DHeatmapLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(heatmapLayer);
            } // if (deckArr[i]?.mapType === mapLayerName.DTERRAIN_LAYER) {
            //   const terrainLayer = DTerrainLayer(getProps(deckglLayersNew1, deckArr[i]));
            //   arrLay.push(terrainLayer);
            // }


            if (((_deckArr$_i17 = deckArr[_i]) === null || _deckArr$_i17 === void 0 ? void 0 : _deckArr$_i17.mapType) === mapLayerName.SOLIDPOLYGON_LAYER) {
              var solidPolygonLayer = DSolidPolygonLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(solidPolygonLayer);
            }

            if (((_deckArr$_i18 = deckArr[_i]) === null || _deckArr$_i18 === void 0 ? void 0 : _deckArr$_i18.mapType) === mapLayerName.SCREENGRID_LAYER) {
              var screenGridLayer = DScreenGridLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(screenGridLayer);
            }

            if (((_deckArr$_i19 = deckArr[_i]) === null || _deckArr$_i19 === void 0 ? void 0 : _deckArr$_i19.mapType) === mapLayerName.POLYGON_LAYER) {
              var polygonLayer = DPolygonLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(polygonLayer);
            }

            if (((_deckArr$_i20 = deckArr[_i]) === null || _deckArr$_i20 === void 0 ? void 0 : _deckArr$_i20.mapType) === mapLayerName.GRIDCELL_LAYER) {
              var gridCellLayer = DGridCellLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(gridCellLayer);
            }

            if (((_deckArr$_i21 = deckArr[_i]) === null || _deckArr$_i21 === void 0 ? void 0 : _deckArr$_i21.mapType) === mapLayerName.GRID_LAYER) {
              var gridLayer = DGridLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(gridLayer);
            }

            if (((_deckArr$_i22 = deckArr[_i]) === null || _deckArr$_i22 === void 0 ? void 0 : _deckArr$_i22.mapType) === mapLayerName.HEXAGON_LAYER) {
              var hexagonLayer = DHexagonLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(hexagonLayer);
            }

            if (((_deckArr$_i23 = deckArr[_i]) === null || _deckArr$_i23 === void 0 ? void 0 : _deckArr$_i23.mapType) === mapLayerName.H3CLUSTER_LAYER) {
              var h3ClusterLayer = DH3ClusterLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(h3ClusterLayer);
            }

            if (((_deckArr$_i24 = deckArr[_i]) === null || _deckArr$_i24 === void 0 ? void 0 : _deckArr$_i24.mapType) === mapLayerName.H3HEXAGON_LAYER) {
              var h3HexagonLayer = DH3HexagonLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(h3HexagonLayer);
            }

            if (((_deckArr$_i25 = deckArr[_i]) === null || _deckArr$_i25 === void 0 ? void 0 : _deckArr$_i25.mapType) === mapLayerName.TILE3D_LAYER) {
              var dtile3Dlayer = DTile3DLayer(getProps(deckglLayersNew1, deckArr[_i]));
              arrLay.push(dtile3Dlayer);
            }
          }
        }

        var arrBw = [].concat(_toConsumableArray(deckglLayersNew1), arrLay);
        var newDeckglLayers = arrayUnique(arrBw);
        var newDeckglLayers1 = arrayUniqueData(newDeckglLayers, _this.timers, _this._callBackTimers.bind(_assertThisInitialized(_this)));
        newDeckglLayers1 = newDeckglLayers1.sort(function (a, b) {
          return (a === null || a === void 0 ? void 0 : a.props.zOrder) - (b === null || b === void 0 ? void 0 : b.props.zOrder);
        }); // this.setStateP({
        //   deckglLayers: [],
        // }).then(() => {

        console.log('newDeckglLayers1', newDeckglLayers1);

        _this.setStateP({
          deckglLayers: newDeckglLayers1
        });

        for (var index in newDeckglLayers1) {
          if (newDeckglLayers1.hasOwnProperty(index)) {
            if (_this.map) {
              var _newDeckglLayers1$ind;

              _this.map.addLayer(new mapbox.MapboxLayer({
                id: (_newDeckglLayers1$ind = newDeckglLayers1[index]) === null || _newDeckglLayers1$ind === void 0 ? void 0 : _newDeckglLayers1$ind.id,
                deck: deck
              }));
            }
          }
        }

        deck.setProps({
          layers: newDeckglLayers1
        });
        deck.redraw(true); // this.map.addLayer(new MapboxLayer({ id: 'my-scatterplot', deck }));
        // this.map.addLayer(new MapboxLayer({ id: 'my-scatterplot1', deck }));
        //
        // // update the layer
        // deck.setProps({
        //   layers: [
        //     new ScatterplotLayer({
        //       id: 'my-scatterplot',
        //       data: [{ position: [116, 39], size: 1000 }],
        //       getPosition: d => d.position,
        //       getRadius: d => d.size,
        //       getFillColor: [255, 0, 255],
        //       antialiasing: true,
        //     }),
        //     new ScatterplotLayer({
        //       id: 'my-scatterplot1',
        //       data: [{ position: [116, 39], size: 500 }],
        //       getPosition: d => d.position,
        //       getRadius: d => d.size,
        //       getFillColor: [255, 255, 0],
        //       antialiasing: true,
        //     }),
        //   ],
        // });
      });

      _defineProperty(_assertThisInitialized(_this), "_isMapboxExist", function (oldMapboxLayer, everyMArr) {
        if (oldMapboxLayer.length > 0) {
          for (var i in oldMapboxLayer) {
            if (oldMapboxLayer.hasOwnProperty(i)) {
              var _oldMapboxLayer$i;

              if (((_oldMapboxLayer$i = oldMapboxLayer[i]) === null || _oldMapboxLayer$i === void 0 ? void 0 : _oldMapboxLayer$i.id) === everyMArr.id) {
                return false;
              }
            }
          }
        }

        return true;
      });

      _defineProperty(_assertThisInitialized(_this), "_addMapboxLayer", function (layers) {
        // const { layers } = this.props;
        var _this$state = _this.state,
            mapboxLayers = _this$state.mapboxLayers,
            mapbox = _this$state.mapbox,
            spaceojoMapStyle = _this$state.spaceojoMapStyle;
        var mapboxLayersNew1 = mapboxLayers; // console.log('asdfasd34fsdf', mapboxLayersNew1, 'll', layers);

        var _loop2 = function _loop2(i) {
          if (mapboxLayersNew1.hasOwnProperty(i)) {
            for (var j in layers) {
              if (layers.hasOwnProperty(j)) {
                var _mapboxLayersNew1$i, _layers$j11;

                if (Number((_mapboxLayersNew1$i = mapboxLayersNew1[i]) === null || _mapboxLayersNew1$i === void 0 ? void 0 : _mapboxLayersNew1$i.dataid) === Number((_layers$j11 = layers[j]) === null || _layers$j11 === void 0 ? void 0 : _layers$j11.dataid)) {
                  var _mapboxLayersNew1$i2, _layers$j12;

                  if (((_mapboxLayersNew1$i2 = mapboxLayersNew1[i]) === null || _mapboxLayersNew1$i2 === void 0 ? void 0 : _mapboxLayersNew1$i2.mapType) !== ((_layers$j12 = layers[j]) === null || _layers$j12 === void 0 ? void 0 : _layers$j12.mapType)) {
                    mapboxLayersNew1[i].removeMapLayer();
                    mapboxLayersNew1 = mapboxLayersNew1.filter(function (elem) {
                      var _mapboxLayersNew1$i3;

                      return Number(elem === null || elem === void 0 ? void 0 : elem.dataid) !== Number((_mapboxLayersNew1$i3 = mapboxLayersNew1[i]) === null || _mapboxLayersNew1$i3 === void 0 ? void 0 : _mapboxLayersNew1$i3.dataid);
                    });
                  }
                }
              }
            }
          }
        };

        for (var i in mapboxLayersNew1) {
          _loop2(i);
        } //过滤出mapbox图层


        var mapboxArr = filterLayer(layerTypeFiltter.mapbox, layers); //对图层对象去重

        var mArr = arrayUnique(mapboxArr); // mArr = arrayUniqueDataM(mArr);
        // console.log('mapbo222Arr', mArr);
        // console.log("mArrmArr", mArr)
        //移除原有id相同的图层或者进行更新

        _this._updateMapboxLayer(mapboxArr, mArr, mapboxLayersNew1); // console.log('mapboxLayers444', mapboxLayers);


        var mapboxArrNew = [];

        for (var _i2 in mArr) {
          if (mArr.hasOwnProperty(_i2)) {
            _this._tripsClearTime(mArr[_i2]); // 判断图层是否存在


            if (_this._isMapboxExist(mapboxLayersNew1, mArr[_i2])) {
              var _mArr$_i, _mArr$_i3, _mArr$_i5, _mArr$_i7, _mArr$_i9, _mArr$_i11, _mArr$_i13, _mArr$_i15, _mArr$_i17;

              if (((_mArr$_i = mArr[_i2]) === null || _mArr$_i === void 0 ? void 0 : _mArr$_i.mapType) === mapLayerName.TEXT_LABEL) {
                var _mArr$_i2;

                var textLabel = new TextLabelLayers(mapbox, mArr[_i2]);
                textLabel.addMapLayer((_mArr$_i2 = mArr[_i2]) === null || _mArr$_i2 === void 0 ? void 0 : _mArr$_i2.data);
                mapboxArrNew.push(textLabel);
              }

              if (((_mArr$_i3 = mArr[_i2]) === null || _mArr$_i3 === void 0 ? void 0 : _mArr$_i3.mapType) === mapLayerName.HEAT_LAYER) {
                var _mArr$_i4;

                var heatLayer = new HeatLayer(mapbox, mArr[_i2], spaceojoMapStyle || MAPBOX_STYLE);
                heatLayer.addMapLayer((_mArr$_i4 = mArr[_i2]) === null || _mArr$_i4 === void 0 ? void 0 : _mArr$_i4.data);
                mapboxArrNew.push(heatLayer);
              }

              if (((_mArr$_i5 = mArr[_i2]) === null || _mArr$_i5 === void 0 ? void 0 : _mArr$_i5.mapType) === mapLayerName.HEARTBEATLAYER) {
                var _mArr$_i6;

                var aimatedIcon = new HeartbeatLayer(mapbox, mArr[_i2]);
                aimatedIcon.addMapLayer((_mArr$_i6 = mArr[_i2]) === null || _mArr$_i6 === void 0 ? void 0 : _mArr$_i6.data);
                mapboxArrNew.push(aimatedIcon);
              }

              if (((_mArr$_i7 = mArr[_i2]) === null || _mArr$_i7 === void 0 ? void 0 : _mArr$_i7.mapType) === mapLayerName.FLYINGLINELAYER) {
                var _mArr$_i8;

                var aimatedLine = new FlyingLineLayer$1(mapbox, mArr[_i2]);
                aimatedLine.addMapLayer((_mArr$_i8 = mArr[_i2]) === null || _mArr$_i8 === void 0 ? void 0 : _mArr$_i8.data);
                mapboxArrNew.push(aimatedLine);
              }

              if (((_mArr$_i9 = mArr[_i2]) === null || _mArr$_i9 === void 0 ? void 0 : _mArr$_i9.mapType) === mapLayerName.WARNIMAGELAYER) {
                var _mArr$_i10;

                var aimatedImage = new AimatedImageLayer(mapbox, mArr[_i2]);
                aimatedImage.addMapLayer((_mArr$_i10 = mArr[_i2]) === null || _mArr$_i10 === void 0 ? void 0 : _mArr$_i10.data);
                mapboxArrNew.push(aimatedImage);
              }

              if (((_mArr$_i11 = mArr[_i2]) === null || _mArr$_i11 === void 0 ? void 0 : _mArr$_i11.mapType) === mapLayerName.SIZESCATTERLAYER) {
                var _mArr$_i12;

                var clusterLayer = new ClusterLayer(mapbox, mArr[_i2], spaceojoMapStyle || MAPBOX_STYLE);
                clusterLayer.addMapLayer((_mArr$_i12 = mArr[_i2]) === null || _mArr$_i12 === void 0 ? void 0 : _mArr$_i12.data);
                mapboxArrNew.push(clusterLayer);
              }

              if (((_mArr$_i13 = mArr[_i2]) === null || _mArr$_i13 === void 0 ? void 0 : _mArr$_i13.mapType) === mapLayerName.RATERIMAGELAYER) {
                var _mArr$_i14;

                var raterImageLayer = new RaterImageLayer(mapbox, mArr[_i2]);
                raterImageLayer.addMapLayer((_mArr$_i14 = mArr[_i2]) === null || _mArr$_i14 === void 0 ? void 0 : _mArr$_i14.url);
                mapboxArrNew.push(raterImageLayer);
              }

              if (((_mArr$_i15 = mArr[_i2]) === null || _mArr$_i15 === void 0 ? void 0 : _mArr$_i15.mapType) === mapLayerName.RATERDEMLAYER) {
                var _mArr$_i16;

                var raterDemLayer = new RaterDemLayer(mapbox, mArr[_i2]);
                raterDemLayer.addMapLayer((_mArr$_i16 = mArr[_i2]) === null || _mArr$_i16 === void 0 ? void 0 : _mArr$_i16.url);
                mapboxArrNew.push(raterDemLayer);
              }

              if (((_mArr$_i17 = mArr[_i2]) === null || _mArr$_i17 === void 0 ? void 0 : _mArr$_i17.mapType) === mapLayerName.UEMODELLAYER) {
                var ueModelLayer = new UEModelLayer(mapbox, mArr[_i2]);
                mapboxArrNew.push(ueModelLayer);
              }
            }
          }
        } // console.log('mapboxArrNew', mapboxArrNew);
        // setMapboxLayers([...mapboxLayers, ...mapboxArrNew]);


        var newArr = [].concat(_toConsumableArray(mapboxLayersNew1), mapboxArrNew);
        console.log('newArr', newArr);

        _this.setState({
          mapboxLayers: newArr
        });
      });

      _defineProperty(_assertThisInitialized(_this), "_updateMapboxLayer", function (mapboxArr, mArr, mapboxLayers) {
        var spaceojoMapStyle = _this.state.spaceojoMapStyle; // alert(JSON.stringify(mapboxLayers));

        for (var i in mapboxLayers) {
          if (mapboxLayers.hasOwnProperty(i)) {
            var _mapboxLayers$i, _mapboxLayers$i3, _mapboxLayers$i5, _mapboxLayers$i7, _mapboxLayers$i9, _mapboxLayers$i11, _mapboxLayers$i13, _mapboxLayers$i15, _mapboxLayers$i17;

            if (((_mapboxLayers$i = mapboxLayers[i]) === null || _mapboxLayers$i === void 0 ? void 0 : _mapboxLayers$i.mapType) === mapLayerName.TEXT_LABEL) {
              for (var j in mArr) {
                if (mArr.hasOwnProperty(j)) {
                  var _mapboxLayers$i2, _mArr$j;

                  if (Number((_mapboxLayers$i2 = mapboxLayers[i]) === null || _mapboxLayers$i2 === void 0 ? void 0 : _mapboxLayers$i2.dataid) === Number((_mArr$j = mArr[j]) === null || _mArr$j === void 0 ? void 0 : _mArr$j.dataid)) {
                    var _this$state$iviewStat, _mArr$j2, _mArr$j2$option, _this$state$iviewStat2, _mArr$j3, _mArr$j3$option;

                    var visibility = mArr[j].visible;
                    var newVisible = ((_this$state$iviewStat = _this.state.iviewState) === null || _this$state$iviewStat === void 0 ? void 0 : _this$state$iviewStat.zoom) > ((_mArr$j2 = mArr[j]) === null || _mArr$j2 === void 0 ? void 0 : (_mArr$j2$option = _mArr$j2.option) === null || _mArr$j2$option === void 0 ? void 0 : _mArr$j2$option.maxZoom) || ((_this$state$iviewStat2 = _this.state.iviewState) === null || _this$state$iviewStat2 === void 0 ? void 0 : _this$state$iviewStat2.zoom) < ((_mArr$j3 = mArr[j]) === null || _mArr$j3 === void 0 ? void 0 : (_mArr$j3$option = _mArr$j3.option) === null || _mArr$j3$option === void 0 ? void 0 : _mArr$j3$option.minZoom) ? false : true;
                    newVisible = !visibility ? visibility : newVisible;
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[j], newVisible);
                  }
                }
              }
            }

            if (((_mapboxLayers$i3 = mapboxLayers[i]) === null || _mapboxLayers$i3 === void 0 ? void 0 : _mapboxLayers$i3.mapType) === mapLayerName.HEAT_LAYER) {
              for (var _j in mArr) {
                if (mArr.hasOwnProperty(_j)) {
                  var _mapboxLayers$i4, _mArr$_j;

                  if (Number((_mapboxLayers$i4 = mapboxLayers[i]) === null || _mapboxLayers$i4 === void 0 ? void 0 : _mapboxLayers$i4.dataid) === Number((_mArr$_j = mArr[_j]) === null || _mArr$_j === void 0 ? void 0 : _mArr$_j.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j], spaceojoMapStyle || MAPBOX_STYLE);
                  }
                }
              }
            }

            if (((_mapboxLayers$i5 = mapboxLayers[i]) === null || _mapboxLayers$i5 === void 0 ? void 0 : _mapboxLayers$i5.mapType) === mapLayerName.HEARTBEATLAYER) {
              for (var _j2 in mArr) {
                if (mArr.hasOwnProperty(_j2)) {
                  var _mapboxLayers$i6, _mArr$_j2;

                  if (Number((_mapboxLayers$i6 = mapboxLayers[i]) === null || _mapboxLayers$i6 === void 0 ? void 0 : _mapboxLayers$i6.dataid) === Number((_mArr$_j2 = mArr[_j2]) === null || _mArr$_j2 === void 0 ? void 0 : _mArr$_j2.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j2]);
                  }
                }
              }
            }

            if (((_mapboxLayers$i7 = mapboxLayers[i]) === null || _mapboxLayers$i7 === void 0 ? void 0 : _mapboxLayers$i7.mapType) === mapLayerName.FLYINGLINELAYER) {
              for (var _j3 in mArr) {
                if (mArr.hasOwnProperty(_j3)) {
                  var _mapboxLayers$i8, _mArr$_j3;

                  if (Number((_mapboxLayers$i8 = mapboxLayers[i]) === null || _mapboxLayers$i8 === void 0 ? void 0 : _mapboxLayers$i8.dataid) === Number((_mArr$_j3 = mArr[_j3]) === null || _mArr$_j3 === void 0 ? void 0 : _mArr$_j3.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j3]);
                  }
                }
              }
            }

            if (((_mapboxLayers$i9 = mapboxLayers[i]) === null || _mapboxLayers$i9 === void 0 ? void 0 : _mapboxLayers$i9.mapType) === mapLayerName.SIZESCATTERLAYER) {
              for (var _j4 in mArr) {
                if (mArr.hasOwnProperty(_j4)) {
                  var _mapboxLayers$i10, _mArr$_j4;

                  if (Number((_mapboxLayers$i10 = mapboxLayers[i]) === null || _mapboxLayers$i10 === void 0 ? void 0 : _mapboxLayers$i10.dataid) === Number((_mArr$_j4 = mArr[_j4]) === null || _mArr$_j4 === void 0 ? void 0 : _mArr$_j4.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j4], spaceojoMapStyle || MAPBOX_STYLE);
                  }
                }
              }
            }

            if (((_mapboxLayers$i11 = mapboxLayers[i]) === null || _mapboxLayers$i11 === void 0 ? void 0 : _mapboxLayers$i11.mapType) === mapLayerName.WARNIMAGELAYER) {
              for (var _j5 in mArr) {
                if (mArr.hasOwnProperty(_j5)) {
                  var _mapboxLayers$i12, _mArr$_j5;

                  if (Number((_mapboxLayers$i12 = mapboxLayers[i]) === null || _mapboxLayers$i12 === void 0 ? void 0 : _mapboxLayers$i12.dataid) === Number((_mArr$_j5 = mArr[_j5]) === null || _mArr$_j5 === void 0 ? void 0 : _mArr$_j5.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j5]);
                  }
                }
              }
            }

            if (((_mapboxLayers$i13 = mapboxLayers[i]) === null || _mapboxLayers$i13 === void 0 ? void 0 : _mapboxLayers$i13.mapType) === mapLayerName.RATERIMAGELAYER) {
              for (var _j6 in mArr) {
                if (mArr.hasOwnProperty(_j6)) {
                  var _mapboxLayers$i14, _mArr$_j6;

                  if (Number((_mapboxLayers$i14 = mapboxLayers[i]) === null || _mapboxLayers$i14 === void 0 ? void 0 : _mapboxLayers$i14.dataid) === Number((_mArr$_j6 = mArr[_j6]) === null || _mArr$_j6 === void 0 ? void 0 : _mArr$_j6.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j6]);
                  }
                }
              }
            }

            if (((_mapboxLayers$i15 = mapboxLayers[i]) === null || _mapboxLayers$i15 === void 0 ? void 0 : _mapboxLayers$i15.mapType) === mapLayerName.RATERDEMLAYER) {
              for (var _j7 in mArr) {
                if (mArr.hasOwnProperty(_j7)) {
                  var _mapboxLayers$i16, _mArr$_j7;

                  if (Number((_mapboxLayers$i16 = mapboxLayers[i]) === null || _mapboxLayers$i16 === void 0 ? void 0 : _mapboxLayers$i16.dataid) === Number((_mArr$_j7 = mArr[_j7]) === null || _mArr$_j7 === void 0 ? void 0 : _mArr$_j7.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j7]);
                  }
                }
              }
            }

            if (((_mapboxLayers$i17 = mapboxLayers[i]) === null || _mapboxLayers$i17 === void 0 ? void 0 : _mapboxLayers$i17.mapType) === mapLayerName.UEMODELLAYER) {
              for (var _j8 in mArr) {
                if (mArr.hasOwnProperty(_j8)) {
                  var _mapboxLayers$i18, _mArr$_j8;

                  if (Number((_mapboxLayers$i18 = mapboxLayers[i]) === null || _mapboxLayers$i18 === void 0 ? void 0 : _mapboxLayers$i18.dataid) === Number((_mArr$_j8 = mArr[_j8]) === null || _mArr$_j8 === void 0 ? void 0 : _mArr$_j8.dataid)) {
                    mapboxLayers[i] && mapboxLayers[i].updateMapboxLayer(mArr[_j8]);
                  }
                }
              }
            }
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "skyLayer", function () {
        var _this$map, _this$map2;

        if ((_this$map = _this.map) !== null && _this$map !== void 0 && _this$map.getLayer('labelLayerId_sky')) {
          _this.map.removeLayer('labelLayerId_sky');
        }

        if (!((_this$map2 = _this.map) !== null && _this$map2 !== void 0 && _this$map2.getLayer('labelLayerId_sky'))) {
          // add a sky layer that will show when the map is highly pitched
          _this.map.addLayer({
            id: 'labelLayerId_sky',
            type: 'sky',
            paint: {
              'sky-type': 'atmosphere',
              'sky-atmosphere-sun': [0.0, 0.0],
              'sky-atmosphere-sun-intensity': 15
            }
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "flyToCamera", function (cameraList) {
        _this.setStateP({
          animate: true
        }).then(function () {
          var _cameraList$, _cameraList$2, _cameraList$3;

          if (((_cameraList$ = cameraList[0]) === null || _cameraList$ === void 0 ? void 0 : _cameraList$.length) < 1) {
            return false;
          }

          var frames = (_cameraList$2 = cameraList[0]) === null || _cameraList$2 === void 0 ? void 0 : _cameraList$2.frames;

          if ((frames === null || frames === void 0 ? void 0 : frames.length) < 2) {
            return false;
          } // console.log('cameraList', cameraList[0]);


          var flyOption = (_cameraList$3 = cameraList[0]) === null || _cameraList$3 === void 0 ? void 0 : _cameraList$3.option;

          if (flyOption !== null && flyOption !== void 0 && flyOption.flightSetIsTrue) {
            if ((flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightType) === 0) {
              var allTime = flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightTime;

              _this.flightType0(cameraList[0], frames, allTime);
            } else if ((flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightType) === 1) {
              var _allTime = flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightTime;

              _this.flightType1(cameraList[0], frames, _allTime);
            } else if ((flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightType) === 2) {
              var _allTime2 = flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightTime;

              _this.flightType2(cameraList[0], frames, _allTime2);
            } else if ((flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightType) === 3) {
              var _allTime3 = flyOption === null || flyOption === void 0 ? void 0 : flyOption.flightTime;

              _this.flightType3(cameraList[0], frames, _allTime3);
            }
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "flightType3", function (camera, frames, allTime) {
        var _camera$option;

        console.log('hgjasdfhjbnsaas', camera, frames, allTime);
        frames = frames.sort(function (a, b) {
          return (a === null || a === void 0 ? void 0 : a.id) - (b === null || b === void 0 ? void 0 : b.id);
        });
        var lonlatArr = [];

        for (var i in frames) {
          if (frames.hasOwnProperty(i)) {
            var _frames$i, _frames$i$option;

            var camrea = (_frames$i = frames[i]) === null || _frames$i === void 0 ? void 0 : (_frames$i$option = _frames$i.option) === null || _frames$i$option === void 0 ? void 0 : _frames$i$option.viewCamera;

            if (camrea) {
              var _frames$i2, _frames$i2$option, _frames$i3, _frames$i3$option, _frames$i4;

              lonlatArr.push(_objectSpread2(_objectSpread2({}, camrea), {}, {
                flightTime: (_frames$i2 = frames[i]) === null || _frames$i2 === void 0 ? void 0 : (_frames$i2$option = _frames$i2.option) === null || _frames$i2$option === void 0 ? void 0 : _frames$i2$option.flightTime,
                stayTime: (_frames$i3 = frames[i]) === null || _frames$i3 === void 0 ? void 0 : (_frames$i3$option = _frames$i3.option) === null || _frames$i3$option === void 0 ? void 0 : _frames$i3$option.stayTime,
                id: (_frames$i4 = frames[i]) === null || _frames$i4 === void 0 ? void 0 : _frames$i4.id
              }));
            } else {
              return false;
            }
          }
        } //回到原点


        if (camera !== null && camera !== void 0 && (_camera$option = camera.option) !== null && _camera$option !== void 0 && _camera$option.backToStart) {
          var _frames$;

          lonlatArr.push((_frames$ = frames[0]) === null || _frames$ === void 0 ? void 0 : _frames$.option.viewCamera);
        } // FlyToCamera

      });

      _defineProperty(_assertThisInitialized(_this), "flightType1", function (camera, frames, allTime) {
        var _camera$option2;

        console.log('asfscameradfsda', camera);
        frames = frames.sort(function (a, b) {
          return (a === null || a === void 0 ? void 0 : a.id) - (b === null || b === void 0 ? void 0 : b.id);
        });
        var lonlatArr = [];

        for (var i in frames) {
          if (frames.hasOwnProperty(i)) {
            var _frames$i5, _frames$i5$option;

            var camrea = (_frames$i5 = frames[i]) === null || _frames$i5 === void 0 ? void 0 : (_frames$i5$option = _frames$i5.option) === null || _frames$i5$option === void 0 ? void 0 : _frames$i5$option.viewCamera;

            if (camrea) {
              var _frames$i6, _frames$i6$option, _frames$i7, _frames$i7$option, _frames$i8;

              lonlatArr.push(_objectSpread2(_objectSpread2({}, camrea), {}, {
                flightTime: (_frames$i6 = frames[i]) === null || _frames$i6 === void 0 ? void 0 : (_frames$i6$option = _frames$i6.option) === null || _frames$i6$option === void 0 ? void 0 : _frames$i6$option.flightTime,
                stayTime: (_frames$i7 = frames[i]) === null || _frames$i7 === void 0 ? void 0 : (_frames$i7$option = _frames$i7.option) === null || _frames$i7$option === void 0 ? void 0 : _frames$i7$option.stayTime,
                id: (_frames$i8 = frames[i]) === null || _frames$i8 === void 0 ? void 0 : _frames$i8.id
              }));
            } else {
              return false;
            }
          }
        } //回到原点


        if (camera !== null && camera !== void 0 && (_camera$option2 = camera.option) !== null && _camera$option2 !== void 0 && _camera$option2.backToStart) {
          var _frames$2;

          lonlatArr.push((_frames$2 = frames[0]) === null || _frames$2 === void 0 ? void 0 : _frames$2.option.viewCamera);
        }

        GetFps(function (fps) {
          var that = _assertThisInitialized(_this); // console.log('GetFps', fps, allTime);


          flyTo();

          function flyTo() {
            // let trend = (allTime / (frames?.length - 1)) * fps;
            var arrNew = [];

            for (var _i3 = 0; _i3 < lonlatArr.length; _i3++) {
              if (_i3 < lonlatArr.length - 1) {
                var _lonlatArr$_i, _lonlatArr$_i2, _lonlatArr, _lonlatArr$_i3, _lonlatArr2, _lonlatArr$_i4, _lonlatArr3, _lonlatArr$_i5, _lonlatArr$_i6, _lonlatArr4, _lonlatArr5, _lonlatArr$_i7, _lonlatArr$_i9, _lonlatArr7, _lonlatArr8, _lonlatArr$_i10, _lonlatArr10, _lonlatArr$_i12, _lonlatArr11, _lonlatArr$_i13;

                // console.log('asdflonlatArrasdfad', lonlatArr[i]);
                var trend = ((_lonlatArr$_i = lonlatArr[_i3]) === null || _lonlatArr$_i === void 0 ? void 0 : _lonlatArr$_i.flightTime) * fps;
                var trendStay = ((_lonlatArr$_i2 = lonlatArr[_i3]) === null || _lonlatArr$_i2 === void 0 ? void 0 : _lonlatArr$_i2.stayTime) * fps;
                var y = (((_lonlatArr = lonlatArr[_i3 + 1]) === null || _lonlatArr === void 0 ? void 0 : _lonlatArr.longitude) - ((_lonlatArr$_i3 = lonlatArr[_i3]) === null || _lonlatArr$_i3 === void 0 ? void 0 : _lonlatArr$_i3.longitude)) / trend;
                var x = (((_lonlatArr2 = lonlatArr[_i3 + 1]) === null || _lonlatArr2 === void 0 ? void 0 : _lonlatArr2.latitude) - ((_lonlatArr$_i4 = lonlatArr[_i3]) === null || _lonlatArr$_i4 === void 0 ? void 0 : _lonlatArr$_i4.latitude)) / trend;

                var _bearing = (((_lonlatArr3 = lonlatArr[_i3 + 1]) === null || _lonlatArr3 === void 0 ? void 0 : _lonlatArr3.bearing) - ((_lonlatArr$_i5 = lonlatArr[_i3]) === null || _lonlatArr$_i5 === void 0 ? void 0 : _lonlatArr$_i5.bearing)) / trend;

                if (((_lonlatArr$_i6 = lonlatArr[_i3]) === null || _lonlatArr$_i6 === void 0 ? void 0 : _lonlatArr$_i6.bearing) < 0 && ((_lonlatArr4 = lonlatArr[_i3 + 1]) === null || _lonlatArr4 === void 0 ? void 0 : _lonlatArr4.bearing) < 0 && ((_lonlatArr5 = lonlatArr[_i3 + 1]) === null || _lonlatArr5 === void 0 ? void 0 : _lonlatArr5.bearing) < ((_lonlatArr$_i7 = lonlatArr[_i3]) === null || _lonlatArr$_i7 === void 0 ? void 0 : _lonlatArr$_i7.bearing)) {
                  var _lonlatArr6, _lonlatArr$_i8;

                  _bearing = (((_lonlatArr6 = lonlatArr[_i3 + 1]) === null || _lonlatArr6 === void 0 ? void 0 : _lonlatArr6.bearing) - ((_lonlatArr$_i8 = lonlatArr[_i3]) === null || _lonlatArr$_i8 === void 0 ? void 0 : _lonlatArr$_i8.bearing)) / trend;
                }

                if (((_lonlatArr$_i9 = lonlatArr[_i3]) === null || _lonlatArr$_i9 === void 0 ? void 0 : _lonlatArr$_i9.bearing) < 0 && ((_lonlatArr7 = lonlatArr[_i3 + 1]) === null || _lonlatArr7 === void 0 ? void 0 : _lonlatArr7.bearing) > 0 && ((_lonlatArr8 = lonlatArr[_i3 + 1]) === null || _lonlatArr8 === void 0 ? void 0 : _lonlatArr8.bearing) > ((_lonlatArr$_i10 = lonlatArr[_i3]) === null || _lonlatArr$_i10 === void 0 ? void 0 : _lonlatArr$_i10.bearing)) {
                  var _lonlatArr9, _lonlatArr$_i11;

                  _bearing = (360 - (((_lonlatArr9 = lonlatArr[_i3 + 1]) === null || _lonlatArr9 === void 0 ? void 0 : _lonlatArr9.bearing) - ((_lonlatArr$_i11 = lonlatArr[_i3]) === null || _lonlatArr$_i11 === void 0 ? void 0 : _lonlatArr$_i11.bearing))) / trend;
                }

                var pitch = (((_lonlatArr10 = lonlatArr[_i3 + 1]) === null || _lonlatArr10 === void 0 ? void 0 : _lonlatArr10.pitch) - ((_lonlatArr$_i12 = lonlatArr[_i3]) === null || _lonlatArr$_i12 === void 0 ? void 0 : _lonlatArr$_i12.pitch)) / trend;
                var zoom = (((_lonlatArr11 = lonlatArr[_i3 + 1]) === null || _lonlatArr11 === void 0 ? void 0 : _lonlatArr11.zoom) - ((_lonlatArr$_i13 = lonlatArr[_i3]) === null || _lonlatArr$_i13 === void 0 ? void 0 : _lonlatArr$_i13.zoom)) / trend;

                for (var j = 0; j < trend; j++) {
                  var _lonlatArr$_i14, _lonlatArr$_i15, _lonlatArr$_i16, _lonlatArr$_i17;

                  arrNew.push({
                    longitude: ((_lonlatArr$_i14 = lonlatArr[_i3]) === null || _lonlatArr$_i14 === void 0 ? void 0 : _lonlatArr$_i14.longitude) + y * j,
                    latitude: ((_lonlatArr$_i15 = lonlatArr[_i3]) === null || _lonlatArr$_i15 === void 0 ? void 0 : _lonlatArr$_i15.latitude) + x * j,
                    bearing: Math.abs(_bearing),
                    pitch: ((_lonlatArr$_i16 = lonlatArr[_i3]) === null || _lonlatArr$_i16 === void 0 ? void 0 : _lonlatArr$_i16.pitch) + pitch * j,
                    zoom: ((_lonlatArr$_i17 = lonlatArr[_i3]) === null || _lonlatArr$_i17 === void 0 ? void 0 : _lonlatArr$_i17.zoom) + zoom * j
                  });
                }

                for (var _j9 = 0; _j9 < trendStay; _j9++) {
                  arrNew.push({});
                }
              }
            } // console.log('arrNew', arrNew);


            var n = 0;
            // let { animate } = this.state;

            var bearing = 0;

            function animateFly() {
              var viewport = arrNew[n++]; // const { iviewState } = that.state;

              if (viewport && (arrNew === null || arrNew === void 0 ? void 0 : arrNew.length) > 0) {
                if (that.state.animate) {
                  if (viewport !== null && viewport !== void 0 && viewport.longitude) {
                    that.setState({
                      iviewState: _objectSpread2(_objectSpread2({}, camera === null || camera === void 0 ? void 0 : camera.option.viewCamera), {}, {
                        longitude: viewport === null || viewport === void 0 ? void 0 : viewport.longitude,
                        latitude: viewport === null || viewport === void 0 ? void 0 : viewport.latitude,
                        pitch: viewport === null || viewport === void 0 ? void 0 : viewport.pitch,
                        zoom: viewport === null || viewport === void 0 ? void 0 : viewport.zoom,
                        bearing: 0 - bearing,
                        cameraLock: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLock,
                        cameraLockType: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLockType
                      })
                    });
                    that.cameraSc(_objectSpread2(_objectSpread2({}, camera === null || camera === void 0 ? void 0 : camera.option.viewCamera), {}, {
                      longitude: viewport === null || viewport === void 0 ? void 0 : viewport.longitude,
                      latitude: viewport === null || viewport === void 0 ? void 0 : viewport.latitude,
                      bearing: 0 - bearing,
                      pitch: viewport === null || viewport === void 0 ? void 0 : viewport.pitch,
                      zoom: viewport === null || viewport === void 0 ? void 0 : viewport.zoom,
                      cameraLock: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLock,
                      cameraLockType: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLockType
                    }));
                    bearing = bearing + (viewport === null || viewport === void 0 ? void 0 : viewport.bearing);
                  }

                  requestAnimationFrame(animateFly);
                } else {
                  n = 0;
                }
              } else {
                var _camera$option3;

                // console.log('jieshu', 111111111111);
                if (camera !== null && camera !== void 0 && (_camera$option3 = camera.option) !== null && _camera$option3 !== void 0 && _camera$option3.loopFlight) {
                  flyTo();
                } // n = 0;
                // animation = requestAnimationFrame(animateFly);


                cancelAnimationFrame(animateFly);
              }
            }

            animateFly();
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "flightType0", function (camera, frames, allTime) {
        var _camera$option4;

        frames = frames.sort(function (a, b) {
          return (a === null || a === void 0 ? void 0 : a.id) - (b === null || b === void 0 ? void 0 : b.id);
        });
        var lonlatArr = [];

        for (var i in frames) {
          if (frames.hasOwnProperty(i)) {
            var _frames$i9, _frames$i9$option;

            var camrea = (_frames$i9 = frames[i]) === null || _frames$i9 === void 0 ? void 0 : (_frames$i9$option = _frames$i9.option) === null || _frames$i9$option === void 0 ? void 0 : _frames$i9$option.viewCamera;

            if (camrea) {
              lonlatArr.push(camrea);
            } else {
              return false;
            }
          }
        } //回到原点


        if (camera !== null && camera !== void 0 && (_camera$option4 = camera.option) !== null && _camera$option4 !== void 0 && _camera$option4.backToStart) {
          var _frames$3;

          lonlatArr.push((_frames$3 = frames[0]) === null || _frames$3 === void 0 ? void 0 : _frames$3.option.viewCamera);
        }

        GetFps(function (fps) {
          var that = _assertThisInitialized(_this); // console.log('GetFps', fps, allTime);


          flyTo();

          function flyTo() {
            var _frames;

            var trend = allTime / (((_frames = frames) === null || _frames === void 0 ? void 0 : _frames.length) - 1) * fps;
            var arrNew = [];

            for (var _i4 = 0; _i4 < lonlatArr.length; _i4++) {
              if (_i4 < lonlatArr.length - 1) {
                var _lonlatArr12, _lonlatArr$_i18, _lonlatArr13, _lonlatArr$_i19, _lonlatArr14, _lonlatArr$_i20, _lonlatArr$_i21, _lonlatArr15, _lonlatArr16, _lonlatArr$_i22, _lonlatArr$_i24, _lonlatArr18, _lonlatArr19, _lonlatArr$_i25, _lonlatArr21, _lonlatArr$_i27, _lonlatArr22, _lonlatArr$_i28;

                var y = (((_lonlatArr12 = lonlatArr[_i4 + 1]) === null || _lonlatArr12 === void 0 ? void 0 : _lonlatArr12.longitude) - ((_lonlatArr$_i18 = lonlatArr[_i4]) === null || _lonlatArr$_i18 === void 0 ? void 0 : _lonlatArr$_i18.longitude)) / trend;
                var x = (((_lonlatArr13 = lonlatArr[_i4 + 1]) === null || _lonlatArr13 === void 0 ? void 0 : _lonlatArr13.latitude) - ((_lonlatArr$_i19 = lonlatArr[_i4]) === null || _lonlatArr$_i19 === void 0 ? void 0 : _lonlatArr$_i19.latitude)) / trend;

                var _bearing2 = (((_lonlatArr14 = lonlatArr[_i4 + 1]) === null || _lonlatArr14 === void 0 ? void 0 : _lonlatArr14.bearing) - ((_lonlatArr$_i20 = lonlatArr[_i4]) === null || _lonlatArr$_i20 === void 0 ? void 0 : _lonlatArr$_i20.bearing)) / trend;

                if (((_lonlatArr$_i21 = lonlatArr[_i4]) === null || _lonlatArr$_i21 === void 0 ? void 0 : _lonlatArr$_i21.bearing) < 0 && ((_lonlatArr15 = lonlatArr[_i4 + 1]) === null || _lonlatArr15 === void 0 ? void 0 : _lonlatArr15.bearing) < 0 && ((_lonlatArr16 = lonlatArr[_i4 + 1]) === null || _lonlatArr16 === void 0 ? void 0 : _lonlatArr16.bearing) < ((_lonlatArr$_i22 = lonlatArr[_i4]) === null || _lonlatArr$_i22 === void 0 ? void 0 : _lonlatArr$_i22.bearing)) {
                  var _lonlatArr17, _lonlatArr$_i23;

                  _bearing2 = (((_lonlatArr17 = lonlatArr[_i4 + 1]) === null || _lonlatArr17 === void 0 ? void 0 : _lonlatArr17.bearing) - ((_lonlatArr$_i23 = lonlatArr[_i4]) === null || _lonlatArr$_i23 === void 0 ? void 0 : _lonlatArr$_i23.bearing)) / trend;
                }

                if (((_lonlatArr$_i24 = lonlatArr[_i4]) === null || _lonlatArr$_i24 === void 0 ? void 0 : _lonlatArr$_i24.bearing) < 0 && ((_lonlatArr18 = lonlatArr[_i4 + 1]) === null || _lonlatArr18 === void 0 ? void 0 : _lonlatArr18.bearing) > 0 && ((_lonlatArr19 = lonlatArr[_i4 + 1]) === null || _lonlatArr19 === void 0 ? void 0 : _lonlatArr19.bearing) > ((_lonlatArr$_i25 = lonlatArr[_i4]) === null || _lonlatArr$_i25 === void 0 ? void 0 : _lonlatArr$_i25.bearing)) {
                  var _lonlatArr20, _lonlatArr$_i26;

                  _bearing2 = (360 - (((_lonlatArr20 = lonlatArr[_i4 + 1]) === null || _lonlatArr20 === void 0 ? void 0 : _lonlatArr20.bearing) - ((_lonlatArr$_i26 = lonlatArr[_i4]) === null || _lonlatArr$_i26 === void 0 ? void 0 : _lonlatArr$_i26.bearing))) / trend;
                }

                var pitch = (((_lonlatArr21 = lonlatArr[_i4 + 1]) === null || _lonlatArr21 === void 0 ? void 0 : _lonlatArr21.pitch) - ((_lonlatArr$_i27 = lonlatArr[_i4]) === null || _lonlatArr$_i27 === void 0 ? void 0 : _lonlatArr$_i27.pitch)) / trend;
                var zoom = (((_lonlatArr22 = lonlatArr[_i4 + 1]) === null || _lonlatArr22 === void 0 ? void 0 : _lonlatArr22.zoom) - ((_lonlatArr$_i28 = lonlatArr[_i4]) === null || _lonlatArr$_i28 === void 0 ? void 0 : _lonlatArr$_i28.zoom)) / trend;

                for (var j = 0; j < trend; j++) {
                  var _lonlatArr$_i29, _lonlatArr$_i30, _lonlatArr$_i31, _lonlatArr$_i32;

                  arrNew.push({
                    longitude: ((_lonlatArr$_i29 = lonlatArr[_i4]) === null || _lonlatArr$_i29 === void 0 ? void 0 : _lonlatArr$_i29.longitude) + y * j,
                    latitude: ((_lonlatArr$_i30 = lonlatArr[_i4]) === null || _lonlatArr$_i30 === void 0 ? void 0 : _lonlatArr$_i30.latitude) + x * j,
                    bearing: Math.abs(_bearing2),
                    pitch: ((_lonlatArr$_i31 = lonlatArr[_i4]) === null || _lonlatArr$_i31 === void 0 ? void 0 : _lonlatArr$_i31.pitch) + pitch * j,
                    zoom: ((_lonlatArr$_i32 = lonlatArr[_i4]) === null || _lonlatArr$_i32 === void 0 ? void 0 : _lonlatArr$_i32.zoom) + zoom * j
                  });
                }
              }
            } // console.log('arrNew', arrNew);


            var n = 0;
            // let { animate } = this.state;

            var bearing = 0;

            function animateFly() {
              var viewport = arrNew[n++]; // console.log('asdfsadfasdfsdfa', 111111);
              // const { iviewState } = that.state;

              if (viewport && (arrNew === null || arrNew === void 0 ? void 0 : arrNew.length) > 0) {
                if (that.state.animate) {
                  that.setState({
                    iviewState: _objectSpread2(_objectSpread2({}, camera === null || camera === void 0 ? void 0 : camera.option.viewCamera), {}, {
                      longitude: viewport === null || viewport === void 0 ? void 0 : viewport.longitude,
                      latitude: viewport === null || viewport === void 0 ? void 0 : viewport.latitude,
                      pitch: viewport === null || viewport === void 0 ? void 0 : viewport.pitch,
                      zoom: viewport === null || viewport === void 0 ? void 0 : viewport.zoom,
                      bearing: 0 - bearing,
                      cameraLock: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLock,
                      cameraLockType: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLockType
                    })
                  });
                  that.cameraSc(_objectSpread2(_objectSpread2({}, camera === null || camera === void 0 ? void 0 : camera.option.viewCamera), {}, {
                    longitude: viewport === null || viewport === void 0 ? void 0 : viewport.longitude,
                    latitude: viewport === null || viewport === void 0 ? void 0 : viewport.latitude,
                    bearing: 0 - bearing,
                    pitch: viewport === null || viewport === void 0 ? void 0 : viewport.pitch,
                    zoom: viewport === null || viewport === void 0 ? void 0 : viewport.zoom,
                    cameraLock: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLock,
                    cameraLockType: viewport === null || viewport === void 0 ? void 0 : viewport.cameraLockType
                  }));
                }

                bearing = bearing + (viewport === null || viewport === void 0 ? void 0 : viewport.bearing);
                requestAnimationFrame(animateFly);
              } else {
                var _camera$option5;

                // console.log('jieshu', 111111111111);
                if (camera !== null && camera !== void 0 && (_camera$option5 = camera.option) !== null && _camera$option5 !== void 0 && _camera$option5.loopFlight) {
                  flyTo();
                } // n = 0;
                // animation = requestAnimationFrame(animateFly);


                cancelAnimationFrame(animateFly);
              }
            }

            animateFly();
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "flightType2", function (camera, frames, allTime) {// let count = 0;
        // let count1 = 0;
        // this.setState({
        //   initialViewState: {
        //     bearing: count === 0 ? 180 - count1 : 0 - count1,
        //   },
        // });
        // count = count + 1;
        // count1 = count1 + 1;
        // // setTimeout(() => {
        // if (!this.interval) {
        //   this.interval = setInterval(() => {
        //     if (count === 2) {
        //       count = 0;
        //     }
        //     if (count1 === 180) {
        //       count1 = 0;
        //     }
        //     this.setState({
        //       initialViewState: {
        //         bearing: count === 0 ? 180 - count1 : 0 - count1,
        //       },
        //     });
        //     count = count + 1;
        //     count1 = count1 + 1;
        //   }, 10 * 60000);
        // }
      });

      _defineProperty(_assertThisInitialized(_this), "removeAllLayer", function (allMaplayer) {
        var _this$state2 = _this.state,
            deckglLayers = _this$state2.deckglLayers,
            mapboxLayers = _this$state2.mapboxLayers,
            dlayers = _this$state2.dlayers; // console.log('asdfasdfsd', deckglLayers);

        for (var i in deckglLayers) {
          if (deckglLayers.hasOwnProperty(i)) {
            var _loop3 = function _loop3(j) {
              if (allMaplayer.hasOwnProperty(j)) {
                var _deckglLayers$i, _deckglLayers$i$props, _allMaplayer$j;

                if (Number((_deckglLayers$i = deckglLayers[i]) === null || _deckglLayers$i === void 0 ? void 0 : (_deckglLayers$i$props = _deckglLayers$i.props) === null || _deckglLayers$i$props === void 0 ? void 0 : _deckglLayers$i$props.dataid) === Number((_allMaplayer$j = allMaplayer[j]) === null || _allMaplayer$j === void 0 ? void 0 : _allMaplayer$j.id)) {
                  // console.log('allMaplayer', allMaplayer[j]);
                  deckglLayers = deckglLayers.filter(function (elem) {
                    var _allMaplayer$j2;

                    return Number(elem.props.dataid) !== Number((_allMaplayer$j2 = allMaplayer[j]) === null || _allMaplayer$j2 === void 0 ? void 0 : _allMaplayer$j2.id);
                  });
                }
              }
            };

            for (var j in allMaplayer) {
              _loop3(j);
            }
          }
        }

        for (var _i5 in mapboxLayers) {
          if (mapboxLayers.hasOwnProperty(_i5)) {
            var _loop4 = function _loop4(_j10) {
              if (allMaplayer.hasOwnProperty(_j10)) {
                var _mapboxLayers$_i, _allMaplayer$_j;

                if (Number((_mapboxLayers$_i = mapboxLayers[_i5]) === null || _mapboxLayers$_i === void 0 ? void 0 : _mapboxLayers$_i.dataid) === Number((_allMaplayer$_j = allMaplayer[_j10]) === null || _allMaplayer$_j === void 0 ? void 0 : _allMaplayer$_j.id)) {
                  mapboxLayers[_i5].removeMapLayer(); // console.log('allMaplayer', allMaplayer[j]);


                  mapboxLayers = mapboxLayers.filter(function (elem) {
                    var _allMaplayer$_j2;

                    return Number(elem === null || elem === void 0 ? void 0 : elem.dataid) !== Number((_allMaplayer$_j2 = allMaplayer[_j10]) === null || _allMaplayer$_j2 === void 0 ? void 0 : _allMaplayer$_j2.id);
                  });
                  dlayers = dlayers.filter(function (elem) {
                    var _allMaplayer$_j3;

                    return Number(elem === null || elem === void 0 ? void 0 : elem.dataid) !== Number((_allMaplayer$_j3 = allMaplayer[_j10]) === null || _allMaplayer$_j3 === void 0 ? void 0 : _allMaplayer$_j3.id);
                  });
                }
              }
            };

            for (var _j10 in allMaplayer) {
              _loop4(_j10);
            }
          }
        }

        _this._tripsdeleteTime(deckglLayers);

        _this.setStateP({
          deckglLayers: deckglLayers,
          mapboxLayers: mapboxLayers,
          dlayers: dlayers
        }).then(function () {// this._findTripsLayer();
        }); // deckglLayers = deckglLayers.filter((elem)=>{
        //   return elem?.props.dataid !==
        // })

      });

      _defineProperty(_assertThisInitialized(_this), "clearMapAllLayer", function () {
        var _this$state3 = _this.state,
            deckglLayers = _this$state3.deckglLayers,
            mapboxLayers = _this$state3.mapboxLayers;
            _this$state3.dlayers;

        for (var i in mapboxLayers) {
          if (mapboxLayers.hasOwnProperty(i)) {
            mapboxLayers[i] && mapboxLayers[i].removeMapLayer();
          }
        }

        _this._tripsdeleteTime(deckglLayers);

        _this.setStateP({
          deckglLayers: [],
          mapboxLayers: [],
          dlayers: []
        }).then(function () {// this._findTripsLayer();
        }); // deckglLayers = deckglLayers.filter((elem)=>{
        //   return elem?.props.dataid !==
        // })

      });

      _defineProperty(_assertThisInitialized(_this), "_onViewStateChange", function (_ref) {
        var viewState = _ref.viewState;
        // console.log('viewState', viewState);
        localStorage.setItem('viewport', JSON.stringify(viewState));

        _this.cameraSc(viewState);
      });

      _defineProperty(_assertThisInitialized(_this), "cameraSc", function (viewState) {
        if (!viewState) {
          return false;
        }

        var zoom = viewState.zoom;
        var deckglLayersNew = [];
        var changeLayerType = false;
        var _this$state4 = _this.state,
            deckglLayers = _this$state4.deckglLayers,
            mapboxLayers = _this$state4.mapboxLayers; // console.log('asdfasdfasdfsd', deckglLayers);

        for (var i in deckglLayers) {
          var _deckglLayers$i$props2, _deckglLayers$i$props3, _deckglLayers$i$props4;

          if ((_deckglLayers$i$props2 = deckglLayers[i].props) !== null && _deckglLayers$i$props2 !== void 0 && _deckglLayers$i$props2.updateLayer && ((_deckglLayers$i$props3 = deckglLayers[i].props) === null || _deckglLayers$i$props3 === void 0 ? void 0 : _deckglLayers$i$props3.visibility) === 2 && ((_deckglLayers$i$props4 = deckglLayers[i].props) === null || _deckglLayers$i$props4 === void 0 ? void 0 : _deckglLayers$i$props4.dataVisiably) === 2) {
            var _deckglLayersTrip, _deckglLayersTrip$pro;

            var deckglLayersTrip = null;
            var _deckglLayers$i$props5 = deckglLayers[i].props,
                minZoom = _deckglLayers$i$props5.minZoom,
                maxZoom = _deckglLayers$i$props5.maxZoom,
                visible = _deckglLayers$i$props5.visible;
            var newVisible = zoom > maxZoom || zoom < minZoom ? false : true;

            if (newVisible !== visible) {
              changeLayerType = true;
            }

            deckglLayersNew.push(deckglLayers[i].props.updateLayer({
              visible: newVisible
            }));
            deckglLayersTrip = deckglLayers[i].props.updateLayer({
              visible: newVisible
            });

            if (((_deckglLayersTrip = deckglLayersTrip) === null || _deckglLayersTrip === void 0 ? void 0 : (_deckglLayersTrip$pro = _deckglLayersTrip.props) === null || _deckglLayersTrip$pro === void 0 ? void 0 : _deckglLayersTrip$pro.mapType) === 'TripsLayer') {
              if (changeLayerType) {
                _this._findTripsLayer(deckglLayersTrip);
              }

              if (!newVisible) {
                _this._tripsClearTime(deckglLayersTrip);
              }
            }
          } else {
            deckglLayersNew.push(deckglLayers[i]);
          }
        }

        for (var j in mapboxLayers) {
          var _mapboxLayers$j;

          if (((_mapboxLayers$j = mapboxLayers[j]) === null || _mapboxLayers$j === void 0 ? void 0 : _mapboxLayers$j.mapType) === 'textLabelLayer') {
            var _mapboxLayers$j$optio = mapboxLayers[j].option,
                _minZoom = _mapboxLayers$j$optio.minZoom,
                _maxZoom = _mapboxLayers$j$optio.maxZoom;
            var visibility = mapboxLayers[j].visibility;

            var _newVisible = zoom > _maxZoom || zoom < _minZoom ? false : true;

            _newVisible = !visibility ? visibility : _newVisible;
            mapboxLayers[j].setLayerVisible(_newVisible);
          }
        }

        if (changeLayerType) {
          _this.setStateP({
            iviewState: viewState,
            deckglLayers: deckglLayersNew
          });
        }

        _this.setStateP({
          iviewState: viewState
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onAfterRender", function (_ref2) {
        _ref2.gl;

        _this.cameraSc(_this.state.iviewState);
      });

      _defineProperty(_assertThisInitialized(_this), "layerClick", function (value, info, event) {
        var _this$state5 = _this.state;
            _this$state5.mapbox;
            var interactiveData = _this$state5.interactiveData;
            _this$state5.selectLayerDataId;
        console.log('interac34tiveData', value, '----------', info, '----------', event);

        _this.mapEvent(info, interactiveData, value, 1);
      });

      _defineProperty(_assertThisInitialized(_this), "layerHover", function (value, info, event) {
        var _this$state6 = _this.state;
            _this$state6.mapbox;
            var interactiveData = _this$state6.interactiveData;
        console.log('interac34tiveData', info, event);

        _this.mapEvent(info, interactiveData, value, 2);
      });

      _defineProperty(_assertThisInitialized(_this), "clearCommon", function () {
        if (_this.state.popShow) {
          _this.setState({
            popShow: false
          });
        }

        if (_this.popup) {
          _this.popup.removeMapLayer();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "mapEvent", function (info, interactiveData, value, jumpState) {
        var mapbox = _this.state.mapbox;

        if (info !== null && info !== void 0 && info.object) {
          var _info$object;

          info === null || info === void 0 ? void 0 : (_info$object = info.object) === null || _info$object === void 0 ? void 0 : _info$object.properties; // console.log(info.layer?.props?.dataid.replace(/[^0-9]/gi, ''), 'dsfadsf');

          console.log(interactiveData, 'dsfadsf', info);

          for (var variable in interactiveData) {
            if (interactiveData.hasOwnProperty(variable)) {
              var _info$layer, _info$layer$props, _info$layer2, _info$layer2$props, _info$layer3, _info$layer3$props, _info$layer4, _info$layer4$props, _info$layer5, _info$layer5$props;

              if (((_info$layer = info.layer) === null || _info$layer === void 0 ? void 0 : (_info$layer$props = _info$layer.props) === null || _info$layer$props === void 0 ? void 0 : _info$layer$props.mapType) === 'ScatterplotLayer' || ((_info$layer2 = info.layer) === null || _info$layer2 === void 0 ? void 0 : (_info$layer2$props = _info$layer2.props) === null || _info$layer2$props === void 0 ? void 0 : _info$layer2$props.mapType) === 'TextLayer' || ((_info$layer3 = info.layer) === null || _info$layer3 === void 0 ? void 0 : (_info$layer3$props = _info$layer3.props) === null || _info$layer3$props === void 0 ? void 0 : _info$layer3$props.mapType) === 'IconLayer' || ((_info$layer4 = info.layer) === null || _info$layer4 === void 0 ? void 0 : (_info$layer4$props = _info$layer4.props) === null || _info$layer4$props === void 0 ? void 0 : _info$layer4$props.mapType) === 'ScenegraphLayer' || ((_info$layer5 = info.layer) === null || _info$layer5 === void 0 ? void 0 : (_info$layer5$props = _info$layer5.props) === null || _info$layer5$props === void 0 ? void 0 : _info$layer5$props.mapType) === 'PolygonLayer') {
                var _info$layer6, _info$layer6$props, _interactiveData$vari;

                if (Number((_info$layer6 = info.layer) === null || _info$layer6 === void 0 ? void 0 : (_info$layer6$props = _info$layer6.props) === null || _info$layer6$props === void 0 ? void 0 : _info$layer6$props.dataid) === Number((_interactiveData$vari = interactiveData[variable]) === null || _interactiveData$vari === void 0 ? void 0 : _interactiveData$vari.id)) {
                  var _interactiveData$vari2, _interactiveData$vari3;

                  console.log('asfdas098dfasdfsdf', interactiveData[variable]);

                  if ((_interactiveData$vari2 = interactiveData[variable]) !== null && _interactiveData$vari2 !== void 0 && (_interactiveData$vari3 = _interactiveData$vari2.defaultInteraction) !== null && _interactiveData$vari3 !== void 0 && _interactiveData$vari3.eventOption) {
                    (function () {
                      var _info$object2, _info$object2$propert, _info$object3, _interactiveData$vari4, _interactiveData$vari5;

                      var allFeildetails = info === null || info === void 0 ? void 0 : (_info$object2 = info.object) === null || _info$object2 === void 0 ? void 0 : (_info$object2$propert = _info$object2.properties) === null || _info$object2$propert === void 0 ? void 0 : _info$object2$propert.table_head;
                      var allFeild = info === null || info === void 0 ? void 0 : (_info$object3 = info.object) === null || _info$object3 === void 0 ? void 0 : _info$object3.properties;
                      var eventOption = JSON.parse((_interactiveData$vari4 = interactiveData[variable]) === null || _interactiveData$vari4 === void 0 ? void 0 : (_interactiveData$vari5 = _interactiveData$vari4.defaultInteraction) === null || _interactiveData$vari5 === void 0 ? void 0 : _interactiveData$vari5.eventOption);
                      console.log(eventOption, 'eventOption');

                      if (value === (eventOption === null || eventOption === void 0 ? void 0 : eventOption.eventCondition)) {
                        //   alert(2);
                        // ( 如果不是弹框) {隐藏弹框}
                        if ((eventOption === null || eventOption === void 0 ? void 0 : eventOption.eventAction) !== '1') {
                          _this.clearCommon();
                        }

                        if (eventOption !== null && eventOption !== void 0 && eventOption.isShow) {
                          var _info$layer7, _info$layer7$props, _activeStyle$flightCa, _info$layer8, _info$layer8$props;

                          // coordinate 飞行
                          var activeStyle = eventOption === null || eventOption === void 0 ? void 0 : eventOption.activeStyle;
                          var flyTime = 0;
                          console.log('safmapTypeasfad', (_info$layer7 = info.layer) === null || _info$layer7 === void 0 ? void 0 : (_info$layer7$props = _info$layer7.props) === null || _info$layer7$props === void 0 ? void 0 : _info$layer7$props.mapType); // 暂时去除面图层的点击飞行

                          if (activeStyle !== null && activeStyle !== void 0 && (_activeStyle$flightCa = activeStyle.flightCamera) !== null && _activeStyle$flightCa !== void 0 && _activeStyle$flightCa.status && ((_info$layer8 = info.layer) === null || _info$layer8 === void 0 ? void 0 : (_info$layer8$props = _info$layer8.props) === null || _info$layer8$props === void 0 ? void 0 : _info$layer8$props.mapType) !== 'PolygonLayer') {
                            var _activeStyle$flightCa2, _activeStyle$flightCa3, _info$object4, _info$object4$geometr, _info$object5, _info$object5$geometr;

                            var zoom = activeStyle === null || activeStyle === void 0 ? void 0 : (_activeStyle$flightCa2 = activeStyle.flightCamera) === null || _activeStyle$flightCa2 === void 0 ? void 0 : _activeStyle$flightCa2.zoom;
                            flyTime = activeStyle === null || activeStyle === void 0 ? void 0 : (_activeStyle$flightCa3 = activeStyle.flightCamera) === null || _activeStyle$flightCa3 === void 0 ? void 0 : _activeStyle$flightCa3.time;

                            _this.setStateP({
                              iviewState: _objectSpread2(_objectSpread2({
                                longitude: info === null || info === void 0 ? void 0 : (_info$object4 = info.object) === null || _info$object4 === void 0 ? void 0 : (_info$object4$geometr = _info$object4.geometry) === null || _info$object4$geometr === void 0 ? void 0 : _info$object4$geometr.coordinates[0],
                                latitude: info === null || info === void 0 ? void 0 : (_info$object5 = info.object) === null || _info$object5 === void 0 ? void 0 : (_info$object5$geometr = _info$object5.geometry) === null || _info$object5$geometr === void 0 ? void 0 : _info$object5$geometr.coordinates[1],
                                zoom: zoom
                              }, FlyToCamera), {}, {
                                transitionDuration: flyTime * 1000
                              })
                            });
                          }

                          setTimeout(function () {
                            var _eventOption$interact, _eventOption$interact2;

                            // ------ 固定位置 ------
                            if (!(eventOption !== null && eventOption !== void 0 && (_eventOption$interact = eventOption.interactionBoxPosition) !== null && _eventOption$interact !== void 0 && _eventOption$interact.positionType) || (eventOption === null || eventOption === void 0 ? void 0 : (_eventOption$interact2 = eventOption.interactionBoxPosition) === null || _eventOption$interact2 === void 0 ? void 0 : _eventOption$interact2.positionType) === 2) {
                              if (_this.popup) {
                                _this.popup.removeMapLayer();
                              }

                              if (!(eventOption !== null && eventOption !== void 0 && eventOption.popType)) {
                                //   弹框字段为空
                                if (eventOption.interactionDefault.selectField.length === 0) {
                                  _this.clearCommon();
                                } else {
                                  (function () {
                                    var _eventOption$interact3, _eventOption$interact4;

                                    console.log('adfsds378adfsadf', allFeild);
                                    var selectField = eventOption === null || eventOption === void 0 ? void 0 : (_eventOption$interact3 = eventOption.interactionDefault) === null || _eventOption$interact3 === void 0 ? void 0 : _eventOption$interact3.selectField;
                                    console.log(selectField, 'dfaselectFielddsfads');
                                    var boxType = eventOption === null || eventOption === void 0 ? void 0 : (_eventOption$interact4 = eventOption.interactionDefault) === null || _eventOption$interact4 === void 0 ? void 0 : _eventOption$interact4.boxType;
                                    var arrayFeild = [];

                                    var _loop5 = function _loop5(i) {
                                      var keyObj = allFeildetails.filter(function (e) {
                                        return e.key === selectField[i];
                                      });
                                      arrayFeild.push({
                                        key: keyObj[0].alias,
                                        value: allFeild[selectField[i]]
                                      });
                                    };

                                    for (var i in selectField) {
                                      _loop5(i);
                                    }

                                    _this.setState({
                                      popType: eventOption === null || eventOption === void 0 ? void 0 : eventOption.popType,
                                      boxType: boxType,
                                      popShow: true,
                                      info: info,
                                      tkContent: arrayFeild,
                                      popContentStyle: eventOption,
                                      eventInfo: info,
                                      eventState: value
                                    });
                                  })();
                                }
                              } else if ((eventOption === null || eventOption === void 0 ? void 0 : eventOption.popType) === 1) {
                                _this.setState({
                                  popType: eventOption === null || eventOption === void 0 ? void 0 : eventOption.popType,
                                  popShow: true,
                                  info: info,
                                  eventInfo: info,
                                  popContentStyle: eventOption,
                                  eventState: value,
                                  allFeild: allFeild
                                }); //跟随
                                // this.popup.addMapLayer(mapbox, info);

                              } else {
                                _this.setState({
                                  popType: eventOption === null || eventOption === void 0 ? void 0 : eventOption.popType,
                                  popShow: true,
                                  info: info,
                                  eventInfo: info,
                                  popContentStyle: eventOption,
                                  eventState: value
                                });
                              }
                            } else {
                              var tempIsTrue = true; // 默认类型

                              if (!(eventOption !== null && eventOption !== void 0 && eventOption.popType)) {
                                //   弹框字段为空
                                if (eventOption.interactionDefault.selectField.length === 0) {
                                  _this.clearCommon();

                                  tempIsTrue = false;
                                }
                              }

                              if (tempIsTrue) {
                                (function () {
                                  var _eventOption$interact5, _eventOption$interact6;

                                  // ------ 跟随对齐 ------
                                  _this.setState({
                                    info: info,
                                    eventInfo: info,
                                    popContentStyle: eventOption,
                                    eventState: value,
                                    allFeild: allFeild
                                  });

                                  if (_this.state.popShow) {
                                    _this.setState({
                                      popShow: false
                                    });
                                  }

                                  console.log('adfsds378adfsadf', eventOption);
                                  var selectField = eventOption === null || eventOption === void 0 ? void 0 : (_eventOption$interact5 = eventOption.interactionDefault) === null || _eventOption$interact5 === void 0 ? void 0 : _eventOption$interact5.selectField;
                                  console.log(selectField, 'dfaselectFielddsfads');
                                  var boxType = eventOption === null || eventOption === void 0 ? void 0 : (_eventOption$interact6 = eventOption.interactionDefault) === null || _eventOption$interact6 === void 0 ? void 0 : _eventOption$interact6.boxType;
                                  var arrayFeild = [];

                                  var _loop6 = function _loop6(i) {
                                    var keyObj = allFeildetails.filter(function (e) {
                                      return e.key === selectField[i];
                                    });
                                    arrayFeild.push({
                                      key: keyObj[0].alias,
                                      value: allFeild[selectField[i]]
                                    });
                                  };

                                  for (var i in selectField) {
                                    _loop6(i);
                                  }

                                  var popType = eventOption === null || eventOption === void 0 ? void 0 : eventOption.popType;
                                  var popShow = _this.state.popShow;

                                  _this.popup.addMapLayer(mapbox, {
                                    popType: popType,
                                    boxType: boxType,
                                    show: popShow,
                                    info: info,
                                    content: arrayFeild,
                                    contentStyle: eventOption,
                                    allFeild: allFeild
                                  });
                                })();
                              }
                            }
                          }, flyTime * 1000);
                        } else {
                          if (_this.state.popShow) {
                            _this.setState({
                              popShow: false
                            });
                          }

                          if (_this.popup) {
                            _this.popup.removeMapLayer();
                          }
                        }

                        if ((eventOption === null || eventOption === void 0 ? void 0 : eventOption.eventCondition) === 'click' && (eventOption === null || eventOption === void 0 ? void 0 : eventOption.eventAction) === '4') {
                          // 跳转
                          if (jumpState === 1) {
                            window.open(eventOption.openNewPage.url);
                          }
                        }
                      }
                    })();
                  }
                }
              }
            }
          }
        } else {
          if (_this.state.eventState === value) {
            _this.setState({
              popShow: false
            });

            if (_this.popup) {
              _this.popup.removeMapLayer();
            }
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onInteractionStateChange", function (interactionState) {
        if (interactionState !== null && interactionState !== void 0 && interactionState.isDragging || interactionState !== null && interactionState !== void 0 && interactionState.isRotating || interactionState !== null && interactionState !== void 0 && interactionState.isZooming) {
          _this.setState({
            animate: false
          }); // this.props.flyToHandle(false);

        }
      });

      _defineProperty(_assertThisInitialized(_this), "getMapController", function () {
        var mapController = _this.state.mapController;

        if (!mapController) {
          return false;
        } //控制相机视角的方法


        var cameraLock = mapController.cameraLock,
            cameraLockType = mapController.cameraLockType;

        if (!cameraLock) {
          return null;
        }

        var newMapController = {
          //鼠标旋转
          dragRotate: false,
          //鼠标平移
          dragPan: false,
          //滚动缩放
          scrollZoom: false,
          //双击缩放
          doubleClickZoom: false,
          //多点触摸缩放
          touchZoom: false,
          //多点旋转
          touchRotate: false,
          //启用键盘交互
          keyboard: false
        };

        if (cameraLockType === 2) {
          newMapController.dragRotate = true;
          newMapController.dragPan = true;
          newMapController.touchRotate = true;
        }

        if (cameraLockType === 3) {
          newMapController.dragPan = true;
          newMapController.scrollZoom = true;
          newMapController.doubleClickZoom = true;
          newMapController.touchRotate = true;
        }

        return _objectSpread2({}, newMapController);
      });

      _defineProperty(_assertThisInitialized(_this), "viewStateHandle", function (viewState) {
        if (viewState !== null && viewState !== void 0 && viewState.longitude) {
          if (_this.props.setIviewStateProps) {
            _this.props.setIviewStateProps(viewState);
          } else {
            _this.setState({
              iviewState: viewState
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "removeMissingdivCss", function () {
        var missingdiv = document.querySelector('.mapboxgl-missing-css');
        var mapboxglcontrolcontainer = document.querySelector('.mapboxgl-control-container');
        var mapboxlogo = document.querySelector('.mapboxgl-ctrl-bottom-left');
        var draglogo = document.querySelector('.mapboxgl-ctrl-top-right');
        if (mapboxglcontrolcontainer) mapboxglcontrolcontainer.style.width = 'none';
        if (missingdiv) missingdiv.style.display = 'none';
        if (mapboxlogo) mapboxlogo.style.display = 'none';
        if (draglogo) draglogo.style.display = 'none';
      });

      _this.time = null;
      _this.newDeckglLayersTrips = [];
      _this.timers = [];

      _this.setStateP = function (state) {
        var _this2 = this;

        return new Promise(function (resolve) {
          return _this2.setState(state, resolve);
        });
      };

      _this.popup = new Popup();
      console.log('PointLight', core.SphereGeometry);
      (props === null || props === void 0 ? void 0 : props.dref) && props.dref(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(DMap, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this3 = this;

        var _this$state7 = this.state;
            _this$state7.deckglLayers;
            var iviewState = _this$state7.iviewState;
            _this$state7.spaceojoMapStyle;
            _this$state7.mapController;
            _this$state7.defaultCamera;
        mapboxgl__default["default"].accessToken = 'pk.eyJ1Ijoid2VpemhpbWluMjAwNyIsImEiOiJjajkzeHRhcWkyaWtsMzNucmZkZHBsbWtsIn0.Roa71zaPUY1M00OQ0X1WzA';
        this.map = new mapboxgl__default["default"].Map({
          container: 'map',
          style: 'https://www.dataojocloud.com/styles/china_V3_gray/style.json',
          center: [iviewState === null || iviewState === void 0 ? void 0 : iviewState.longitude, iviewState === null || iviewState === void 0 ? void 0 : iviewState.latitude],
          bearing: 0,
          zoom: 1,
          antialias: true,
          // Mapbox disables WebGL's antialiasing by default
          pitch: 0,
          maxZoom: 20,
          minZoom: 0,
          transformRequest: function transformRequest(url) {
            return {
              url: url,
              headers: {
                Authorization: localStorage.getItem('cookie')
              }
            };
          }
        });
        this.setState({
          mapbox: this.map
        });
        deck = new core$1.Deck({
          gl: this.map.painter.context.gl // initialViewState: initialViewState,
          // //动态视角
          // viewState: iviewState,
          // //控制器
          // controller: { type: MapController, ...this.getMapController() },
          // //视角变化
          // onViewStateChange: this._onViewStateChange,
          // // onWebGLInitialized={this._onWebGLInitialized}
          // onAfterRender: this.onAfterRender,
          // style: { position: 'absolute', zIndex: 0 },
          // onClick: this.layerClick.bind(this, 'click'),
          // // onHover={this.layerHover.bind(this, 'hover')}
          // onHover: debounce(this.layerHover.bind(this, 'hover'), 100),
          // onInteractionStateChange: this.onInteractionStateChange,

        });
        this.removeMissingdivCss();
        this.map.on('load', function () {
          _this3.createMapboxDraw(_this3.map);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var mapboxLayers = this.state.mapboxLayers;

        if (this.time) {
          clearInterval(this.time);
        }

        if (this.timers.length > 0) {
          for (var i = 0; i < this.timers.length; i++) {
            clearInterval(this.timers[i]);
          }
        } // 用于退出清掉marker点


        for (var key in mapboxLayers) {
          if (mapboxLayers.hasOwnProperty(key)) {
            // if (mapboxLayers[key]?.mapType === 'textLabelLayer') {
            mapboxLayers[key] && mapboxLayers[key].removeMapLayer(); // }
          }
        }

        this.setStateP({
          mapbox: null,
          iviewState: initialViewState,
          mapboxLayers: [],
          deckglLayers: [],
          dlayers: [],
          timers: [],
          animate: true,
          spaceojoMapStyle: MAPBOX_STYLE,
          info: null,
          tkContent: null,
          zoom: null,
          popShow: 1,
          popContentStyle: null,
          interactiveData: [],
          eventInfo: null,
          popType: 0,
          boxType: 1,
          mapController: null,
          defaultCamera: null,
          eventState: 'click',
          allFeild: null
        });

        if (this.popup) {
          this.popup.removeMapLayer();
        }

        if (this.map) {
          var _this$map3;

          this.map = null;

          if ((_this$map3 = this.map) !== null && _this$map3 !== void 0 && _this$map3.getLayer('labelLayerId')) {
            this.map.removeLayer('labelLayerId');
          }
        }
      }
      /**
       * 属性说明
       * @property {object} mapbox
       * 加载框选工具
       */

    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var _this$props2,
            _this4 = this;

        var _this$props = this.props,
            layers = _this$props.layers,
            cameraList = _this$props.cameraList,
            spaceojoMapStyle = _this$props.spaceojoMapStyle,
            deleteMapLayers = _this$props.deleteMapLayers,
            interactiveData = _this$props.interactiveData,
            mapController = _this$props.mapController,
            iviewState = _this$props.iviewState;
        var _this$state8 = this.state,
            dlayers = _this$state8.dlayers,
            mapbox = _this$state8.mapbox; // 用于设置显示数据范围

        if (((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.mapDataView) !== (nextProps === null || nextProps === void 0 ? void 0 : nextProps.mapDataView)) {
          if (this.map) {
            var _nextProps$mapDataVie, _nextProps$mapDataVie2, _nextProps$mapDataVie3, _nextProps$mapDataVie4, _nextProps$mapDataVie5;

            this.map.flyTo({
              center: [(nextProps === null || nextProps === void 0 ? void 0 : (_nextProps$mapDataVie = nextProps.mapDataView) === null || _nextProps$mapDataVie === void 0 ? void 0 : _nextProps$mapDataVie.longitude) || (initialViewState === null || initialViewState === void 0 ? void 0 : initialViewState.longitude), (nextProps === null || nextProps === void 0 ? void 0 : (_nextProps$mapDataVie2 = nextProps.mapDataView) === null || _nextProps$mapDataVie2 === void 0 ? void 0 : _nextProps$mapDataVie2.latitude) || (initialViewState === null || initialViewState === void 0 ? void 0 : initialViewState.latitude)],
              zoom: (nextProps === null || nextProps === void 0 ? void 0 : (_nextProps$mapDataVie3 = nextProps.mapDataView) === null || _nextProps$mapDataVie3 === void 0 ? void 0 : _nextProps$mapDataVie3.zoom) || 5,
              bearing: 0,
              pitch: (nextProps === null || nextProps === void 0 ? void 0 : (_nextProps$mapDataVie4 = nextProps.mapDataView) === null || _nextProps$mapDataVie4 === void 0 ? void 0 : _nextProps$mapDataVie4.pitch) || 0,
              maxZoom: (nextProps === null || nextProps === void 0 ? void 0 : (_nextProps$mapDataVie5 = nextProps.mapDataView) === null || _nextProps$mapDataVie5 === void 0 ? void 0 : _nextProps$mapDataVie5.maxZoom) || 20,
              speed: 2,
              curve: 1,
              easing: function easing(t) {
                return t;
              },
              essential: true
            });
          }
        } // 地图控制器


        if (mapController !== (nextProps === null || nextProps === void 0 ? void 0 : nextProps.mapController)) {
          if (nextProps !== null && nextProps !== void 0 && nextProps.mapController) {
            this.setState({
              mapController: nextProps === null || nextProps === void 0 ? void 0 : nextProps.mapController
            });
          }
        } // 用于加载底图


        if (spaceojoMapStyle !== (nextProps === null || nextProps === void 0 ? void 0 : nextProps.spaceojoMapStyle)) {
          this.setState({
            spaceojoMapStyle: nextProps === null || nextProps === void 0 ? void 0 : nextProps.spaceojoMapStyle
          });

          if (this.map) {
            this.map.setStyle(nextProps === null || nextProps === void 0 ? void 0 : nextProps.spaceojoMapStyle); //   天空盒子

            var sky_timer = setTimeout(function () {
              _this4.skyLayer();

              clearTimeout(sky_timer);
            }, 500);
          }
        } // 用于设置相机


        if (cameraList !== (nextProps === null || nextProps === void 0 ? void 0 : nextProps.cameraList)) {
          this.flyToCamera(nextProps === null || nextProps === void 0 ? void 0 : nextProps.cameraList);
        } // 用于控制视角


        if (iviewState !== nextProps.iviewState) {
          var _nextProps$iviewState;

          if (nextProps.iviewState && (_nextProps$iviewState = nextProps.iviewState) !== null && _nextProps$iviewState !== void 0 && _nextProps$iviewState.longitude) {
            this.setStateP({
              iviewState: _objectSpread2(_objectSpread2({}, nextProps.iviewState), FlyToCamera),
              defaultCamera: nextProps.iviewState
            });
          }
        } // 删除所有图层


        if (deleteMapLayers !== (nextProps === null || nextProps === void 0 ? void 0 : nextProps.deleteMapLayers)) {
          var _nextProps$deleteMapL;

          if ((nextProps === null || nextProps === void 0 ? void 0 : (_nextProps$deleteMapL = nextProps.deleteMapLayers) === null || _nextProps$deleteMapL === void 0 ? void 0 : _nextProps$deleteMapL.length) > 0) ;
        } // 用于关闭移除mapbox图层


        if (nextProps !== null && nextProps !== void 0 && nextProps.destoryMapbox) {
          for (var key in this.state.mapboxLayers) {
            if (this.state.mapboxLayers.hasOwnProperty(key)) {
              this.state.mapboxLayers[key].removeMapLayer();
            }
          }

          this.setState({
            mapboxLayers: [],
            dlayers: [],
            deckglLayers: []
          });
        } // 图层


        if (layers !== (nextProps === null || nextProps === void 0 ? void 0 : nextProps.layers)) {
          if (dlayers) {
            for (var _key2 in dlayers) {
              if (dlayers.hasOwnProperty(_key2)) {
                var _dlayers$_key;

                // 此处用于清除decklayer图层
                if (this.map.getLayer((_dlayers$_key = dlayers[_key2]) === null || _dlayers$_key === void 0 ? void 0 : _dlayers$_key.id)) {
                  var _dlayers$_key2;

                  this.map.removeLayer((_dlayers$_key2 = dlayers[_key2]) === null || _dlayers$_key2 === void 0 ? void 0 : _dlayers$_key2.id);
                }
              }
            }

            this.setState({
              deckglLayers: []
            });
          } //   用于删除框选工具


          if ((nextProps === null || nextProps === void 0 ? void 0 : nextProps.layers.length) <= 0 && this.state.selectMap) {
            this.selectMapDelete();
          } // this.cameraSc(this.state.iviewState);
          //   let allLayers = arrayUniqueDataM([...dlayers, ...nextProps?.layers]);


          var allLayers = arrayUniqueDataM(_toConsumableArray(nextProps === null || nextProps === void 0 ? void 0 : nextProps.layers));
          this.setStateP({
            dlayers: allLayers // 此处置空有问题, 会导致图层显隐

          });
          var timer = setTimeout(function () {
            _this4._addDeckLayer(nextProps === null || nextProps === void 0 ? void 0 : nextProps.layers);

            clearTimeout(timer);
          }, 500);

          if (mapbox && allLayers.length > 0) {
            this._addMapboxLayer(allLayers);
          } //   天空盒子


          var _sky_timer = setTimeout(function () {
            _this4.skyLayer();

            clearTimeout(_sky_timer);
          }, 500);
        }

        if (interactiveData !== (nextProps === null || nextProps === void 0 ? void 0 : nextProps.interactiveData)) {
          this.setState({
            interactiveData: nextProps === null || nextProps === void 0 ? void 0 : nextProps.interactiveData
          });
          this.mapEvent(this.state.eventInfo, nextProps === null || nextProps === void 0 ? void 0 : nextProps.interactiveData, this.state.eventState, 2);
        }
      } //   天空盒子

    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          style: {
            position: 'relative',
            width: '100%',
            height: '100%'
          },
          id: "map"
        });
      }
    }]);

    return DMap;
  }(React.PureComponent);

  return DMap;

}));
