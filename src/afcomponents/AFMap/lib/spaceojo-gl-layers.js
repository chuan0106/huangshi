/* eslint-disable */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('@deck.gl/mapbox'),
        require('@deck.gl/layers'),
        require('@luma.gl/core'),
        require('@luma.gl/constants'),
        require('d3-scale'),
        require('deck.gl'),
        require('@deck.gl/aggregation-layers'),
        require('@deck.gl/geo-layers'),
        require('@deck.gl/mesh-layers'),
        require('!mapbox-gl'),
        require('style-object-to-css-string'),
      )
    : typeof define === 'function' && define.amd
    ? define([
        'exports',
        '@deck.gl/mapbox',
        '@deck.gl/layers',
        '@luma.gl/core',
        '@luma.gl/constants',
        'd3-scale',
        'deck.gl',
        '@deck.gl/aggregation-layers',
        '@deck.gl/geo-layers',
        '@deck.gl/mesh-layers',
        '!mapbox-gl',
        'style-object-to-css-string',
      ], factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        (global.spaceojoGlLayers = {}),
        global.mapbox,
        global.layers$1,
        null,
        global.GL,
        global.d3Scale,
        global.deck_gl,
        global.aggregationLayers,
        global.geoLayers,
        global.meshLayers,
        global.mapboxgl,
        global.styleToCss,
      ));
})(this, function(
  exports,
  mapbox,
  layers$1,
  core,
  GL,
  d3Scale,
  deck_gl,
  aggregationLayers,
  geoLayers,
  meshLayers,
  mapboxgl,
  styleToCss,
) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
  }

  var GL__default = /*#__PURE__*/ _interopDefaultLegacy(GL);
  var mapboxgl__default = /*#__PURE__*/ _interopDefaultLegacy(mapboxgl);
  var styleToCss__default = /*#__PURE__*/ _interopDefaultLegacy(styleToCss);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
        : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', {
      writable: false,
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true,
      },
    });
    Object.defineProperty(subClass, 'prototype', {
      writable: false,
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
    if (call && (typeof call === 'object' || typeof call === 'function')) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError('Derived constructors may only return object or undefined');
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

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== 'undefined' && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    );
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
      iter['@@iterator'] != null
    )
      return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i =
      arr == null
        ? null
        : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];

    if (!it) {
      if (
        Array.isArray(o) ||
        (it = _unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === 'number')
      ) {
        if (it) o = it;
        var i = 0;

        var F = function() {};

        return {
          s: F,
          n: function() {
            if (i >= o.length)
              return {
                done: true,
              };
            return {
              done: false,
              value: o[i++],
            };
          },
          e: function(e) {
            throw e;
          },
          f: F,
        };
      }

      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }

    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      },
    };
  }

  /* eslint-disable no-multi-spaces */
  //引擎指令类型

  var CommandType = {
    //_______________engine ：0--49：引擎相关指令_______________________________________
    Engine_CreateNew: 1,
    //新建数字孪生工程
    Engine_Open: 2,
    //打开数字孪生工程
    Engine_Save: 3,
    //保存数字孪生工程
    Engine_SaveAs: 4,
    //另存数字孪生工程
    Engine_Close: 5,
    //关闭当前数字孪生工程
    Engine_ImportBaseData: 6,
    //导入数字孪生数据文件
    Engine_QueryVersion: 7,
    //查询引擎版本信息和当前exe程序的路径
    Engine_ImportDataSource: 8,
    //导入数据文件
    //Engine_OpenFileDialog: 8,        //打开文件对话框
    Engine_SetWindowState: 9,
    //设置窗口最大化最小化
    Engine_SceneLoader: 10,
    //场景加载完成回调
    Engine_Quit: 11,
    //退出exe
    Engine_ExcuteBPCommond: 12,
    // 运行蓝图命令
    //_______________client ：49--99：渲染客户端相关指令_______________________________________
    Client_QueryDataSources: 49,
    //查询当前工程加载的数据源信息
    Client_QueryScenes: 50,
    //查询当前工程加载的项目场景信息
    Client_QueryBases: 51,
    //查询当前工程中的城市底座场景信息
    Client_CreateNew: 52,
    //基于系统中加载的城市底座场景创建一个新的项目场景
    Client_Save: 53,
    //保存项目场景
    Client_SaveAs: 54,
    //将当前项目场景另存为一个新场景
    Client_Open: 55,
    //打开当前数字孪生项目中的一个项目场景
    Client_Close: 56,
    //关闭场景，同时停止对应的服务端渲染线程
    Client_StartRender: 57,
    //启动服务端渲染线程
    Client_StopRender: 58,
    //停止服务端渲染线程
    Client_QueryAction: 59,
    //查询当前客户端鼠标交互行为
    Client_SetAction: 60,
    //设置当前客户端鼠标及其他输入交互行为
    Client_QuerySceneList: 61,
    //获取项目场景名称列表
    Client_RemoveScene: 62,
    //删除指定项目场景，不能删除当前打开的场景
    Client_RenameScene: 63,
    //项目场景重命名
    //_______________layers ：100--199：图层相关指令_______________________________________
    Layers_QueryLayers: 100,
    //查询场景中所有的图层
    Layers_AddLayer: 101,
    //在场景中添加新的图层
    Layers_UpdateLayerProp: 102,
    //更新场景中指定图层的样式属性，支持整体更新和局部更新
    Layers_QueryLayerDatasource: 103,
    //查询场景中图层对应的数据源
    Layers_UpdateLayerDatasource: 104,
    //修改场景中图层对应的数据源
    Layers_QueryLayerSetting: 105,
    //查询图层基本设置
    Layers_UpdateLayerSetting: 106,
    //修改场景中图层基本设置
    Layers_QueryLayerLabels: 107,
    //查询场景中图层的标签
    Layers_UpdateLayerLabels: 108,
    //修改图层标签
    Layers_QueryLayerRenderMode: 109,
    //查询图层当前渲染模式，实景、水晶体、X光
    Layers_UpdateLayerRenderMode: 110,
    //修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式
    Layers_UpdateLayersRenderMode: 111,
    //批量修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式，可以根据图层类型（底座图层、动态图层）、图层标签进行批量修改
    Layers_RenameLayer: 112,
    //修改图层名称
    Layers_RemoveLayer: 113,
    //删除场景中的图层
    Layers_Focus: 114,
    //在特定相机距离聚焦到指定的图层
    //_______________coord ：200--299：坐标设置转换相关指令_______________________________________
    Coord_World2Screen: 200,
    //经纬度（世界）坐标转为屏幕坐标
    Coord_Screen2Wrold: 201,
    //屏幕坐标转为经纬度（世界）坐标
    Coord_Latlong2Wrold: 203,
    //经纬坐标转为世界坐标
    Coord_World2latlong: 204,
    //世界坐标转为经纬坐标
    //_______________editor ：300--399：编辑图层相关指令_______________________________________
    Editor_AddObject: 300,
    //在场景中添加新的几何对象
    Editor_QueryObjects: 301,
    //查询编辑图层中的对象,返回符合条件的对象基本信息列表，此处不返回对象完整信息，可以通过getObjects方法来获取对象完整的坐标和属性数据
    Editor_GetObjects: 302,
    //获取编辑图层中对象完整的坐标和属性信息
    Editor_UpdateObjects: 303,
    //更新一个或多个场景中的几何对象坐标和属性
    Editor_RemoveObjects: 304,
    //删除一个或多个场景中的几何对象
    Editor_Clear: 305,
    //清空编辑图层中的几何对象
    Editor_QueryLabels: 306,
    //查询编辑图层中对象的标签
    Editor_UpdateLabels: 307,
    //修改几何对象标签
    Editor_ShowObjects: 308,
    //让一个或多个场景中的几何对象可见
    Editor_ShowAll: 309,
    //让编辑图层中的几何对象全部可见
    Editor_HideObjects: 310,
    //隐藏一个或多个场景中的几何对象
    Editor_HideAll: 311,
    //隐藏编辑图层中的几何对象
    Editor_FocusObjects: 312,
    //在特定相机距离聚焦到指定的几何对象
    Editor_Focus: 313,
    //在特定相机距离整体聚焦到编辑图层
    Editor_QueryObjectData: 314,
    //查询编辑图层中对象的关联数据
    Editor_UpdateObjectData: 315,
    //修改几何对象关联数据
    Editor_SetEditTool: 316,
    //设置当前编辑工具,便于通过鼠标交互操作在场景中添加新的几何对象
    Editor_GetEditTool: 317,
    //获得编辑工具信息
    //_______________measure ：400--499：量算分析相关指令_______________________________________
    Measure_SetMeasureTool: 400,
    //设置当前量算工具
    Measure_GetMeasureTool: 401,
    //获得当前量算工具
    Measure_GetMeasureResult: 402,
    //获取当前量算结果
    Measure_Focus: 403,
    //聚焦到当前量算操作对象
    Measure_Highlight: 404,
    //高亮当前量算对象
    Measure_Finish: 405,
    //完成并当前量算，并结束当前测量动作，下次鼠标动作将展开一次新的量算
    Measure_Cancel: 406,
    //取消当前量算，重新开始新的量算
    Measure_Clear: 407,
    //清空所有量算对象
    //_______________selection ：500--599：选择集相关指令_______________________________________
    Selection_SetObjects: 500,
    //将特定图层上的对象填充到选择集中，设置为选择状态，在设置完选择集时，选择集中原有的对象将被自动清空
    Selection_GetObjects: 501,
    //获取选择集中的对象信息
    Selection_getObjectsData: 502,
    //获取选中对象的业务属性数据，如：名称、编码、地址等
    Selection_Focus: 503,
    //在特定相机距离整体聚焦到选择对象
    Selection_Highlight: 504,
    //高亮选中对象
    Selection_Animate: 505,
    //播放选中对象动画
    Selection_Decompose: 506,
    //对选中对象进行拆解，主要针对类似建筑物等具有复杂结构的三维模型
    Selection_Combine: 507,
    //对选中拆解对象进行合并还原，主要针对类似建筑物等具有复杂结构的三维模型
    Selection_Clear: 508,
    //清空选择集
    //_______________environment ：600--699：环境相关指令_______________________________________
    Environment_Save: 600,
    //将当前环境参数保存为场景的默认环境
    Environment_Restore: 601,
    //快速恢复到之前存储的环境设置，便于从场景快照、导览路线锁定的环境中快速恢复到场景默认环境
    Environment_Reset: 602,
    //重设场景的环境参数，将环境参数恢复到场景最初的状态
    Environment_QueryTimeSetting: 603,
    //查询并获取场景的时间设置
    Environment_UpdateTimeSetting: 604,
    //修改场景当前时间设置
    Environment_QueryWeatherMode: 605,
    //查询并获取场景的天气模式设置，主要包括晴天、阴天、多云天、雨天、雪天、沙尘暴
    Environment_UpdateWeatherMode: 606,
    //快速设置场景天气模式
    Environment_QueryLightSetting: 607,
    //查询并获取场景的光照参数
    Environment_UpdateLightSetting: 608,
    //设置场景光照参数
    Environment_QuerySunSetting: 609,
    //查询并获取场景的太阳参数
    Environment_UpdateSunSetting: 610,
    //设置场景太阳参数
    Environment_QueryMoonSetting: 611,
    //查询并获取场景的月亮参数
    Environment_UpdateMoonSetting: 612,
    //设置场景月亮参数
    Environment_QueryCloudSetting: 613,
    //查询并获取场景的云层参数
    Environment_UpdateCloudSetting: 614,
    //设置场景云层参数
    Environment_QueryFogSetting: 615,
    //查询并获取场景的雾参数
    Environment_UpdateFogSetting: 616,
    //设置场景雾浓度参数
    Environment_QueryRainSetting: 617,
    //查询并获取场景的下雨参数
    Environment_UpdateRainSetting: 618,
    //设置场景下雨参数
    Environment_QuerySnowSetting: 619,
    //查询并获取场景的下雪参数
    Environment_UpdateSnowSetting: 620,
    //设置场景下雪参数
    Environment_QueryScaningSetting: 621,
    //查询并获取场景扫描特效设置
    Environment_UpdateScaningSetting: 622,
    //设置场景扫描参数
    Environment_QueryFloatingParticlesSetting: 623,
    //查询并获取场景漂浮粒子特效设置
    Environment_UpdateFloatingParticlesSetting: 624,
    //设置场景漂浮粒子参数
    Environment_QueryRasingLineslesSetting: 625,
    //查询并获取场景上升线条特效设置
    Environment_UpdateRasingLineslesSetting: 626,
    //设置场景上升线条参数
    Environment_QueryTrafficflowSetting: 627,
    //查询并获取场景道路流动线特效设置
    Environment_UpdateTrafficflowSetting: 628,
    //设置场景道路流动线特效参数
    Environment_QueryDayandNightSetting: 629,
    //查询并获取白天黑夜场景切换相关参数
    Environment_UpdateDayandNightSetting: 630,
    //设置白天黑夜场景切换参数
    Environment_PalyDayandNight: 631,
    //播放白天黑夜场景
    //_______________camera：700--799：相机相关指令__________________________________________
    Camera_Reset: 700,
    //将相机位置复位到初始位置
    Camera_QueryLocation: 701,
    //查询并获取场景中相机当前位置
    Camera_SetLocation: 702,
    //设置相机在场景中的位置
    Camera_Focus: 703,
    //设置相机聚焦点到特定空间位置
    Camera_Rotate: 704,
    //围绕场景中心点旋转相机
    Camera_PlaySnapshot: 705,
    //将场景切换到快照位置
    Camera_PlayTour: 706,
    //相机按指定场景漫游路线进行飞行漫游
    Camera_TakeSnapshot: 707,
    //当前场景拍照保存图片
    Camera_SetOperationType: 708,
    //设置相机操作模式，0为原有模式，1为第一人称模式 参数：{"type":1}
    Camera_GetOperationType: 709,
    //获取相机操作模式，0为原有模式，1为第一人称模式
    //_______________tours：800--899：导览路线相关指令_______________________________________
    Tours_QueryTours: 800,
    //查询场景中所有的导览路线
    Tours_AddTour: 801,
    //为当前场景添加导览路线
    Tours_SetTourTime: 802,
    //设置更改导览路线漫游时间
    Tours_RenameTour: 803,
    //修改导览路线名称
    Tours_RemoveTour: 804,
    //删除场景中的导览路线
    Tours_QuerySnapshots: 805,
    //查询特定导览路线中中所有的快照
    Tours_AddSnapshot: 806,
    //在指定的导览路线中生成场景快照
    Tours_UpdateSnapshot: 807,
    //更新导览路线中生成场景快照
    Tours_RemoveSnapshot: 808,
    //删除导览路线中生成场景快照
    Tours_RenameSnapshot: 809,
    //修改导览路线中快照名称
    //_______________component：900--999：控件相关指令_______________________________________
    Component_SetPosition: 900,
    //设置组件的屏幕位置
    Component_GetPosition: 901,
    //获取组件的屏幕位置
    Component_SetVisible: 902,
    //设置组件的可见性
    Component_GetVisible: 903,
    //获取组件的可见性
    Component_SetStyle: 904,
    //设置组件的样式
    Component_GetStyle: 905,
    //获取组件的样式
    //_______________utlity：1000--1099：实用工具相关指令_______________________________________
    Utility_QueryConfig: 1000,
    //查询平台配置信息
    Utility_UpdateConfig: 1001,
    //修改平台配置信息
    Utility_CustomFunction: 1002,
    //调用平台自定义函数，主要是导入UE工程中的蓝图函数
    Model_SetVisible: 1003,
    //根据tags设置静态模型的可见性
    Model_GetVisible: 1004, //根据tags获取静态模型的可见性
  };

  /* eslint-disable no-multi-spaces */
  /**
   *@enum {number} LayerType 图层类型
   *@readonly
   *@member BaseLayer            基础场景图层，不支持动态添加、修改、删除，仅支持显示/隐藏等基本图层属性控制
   *@member PointLayer           散点图层，简单的点对象，支持颜色、大小、发光等属性
   *@member LabelLayer           标签图层，提供图标、文字、背景框、图标和锚点牵引线等属性
   *@member BoardLayer           标牌图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member HeatMapLayer         热力图图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member ColomnLayer          柱状图层，提供柱子形状、粗细、基准高度、高度比例、自发光等属性
   *@member PolyLineLayer        线图层，提供线的颜色、粗细、线型、流动风格等属性
   *@member PolygonLayer         区域面图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member GridLayer            网格图层，提供网格颜色，边线颜色、网格高度等属性
   *@member ODLayer              OD飞线图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member RadiationLayer       放射物图层，提供放射物样式、颜色、透明度、辐射半径、发射频率、消隐时长等属性
   *@member ModelSymbolLayer     三维模型符号图层，提供符号大小、旋转、发光、动画等属性
   *@member RTSignalLayer        实时信号图层，展示实时信号的触发到消隐的过程，提供信号样式、颜色、粗细、消隐时间等属性
   *@member RTTrackLayer         实时轨迹图层，展示实时移动目标一定时间内的随时间变化的空间轨迹，提供轨迹的目标样式（符号样式、颜色、大小）和轨迹样式（颜色、粗细、跟踪时间）等属性
   *@member WMSLayer             OGC标准WMS图层
   *@member WMTSLayer            OGC标准WMTS图层
   *@member IconLayer            图标图层
   *@member EditLayer    			   自由编辑图层
   *@member ClusterLayer         聚合点图层
   *@member HexagonLayer         六边形图层
   *@member Arc                  弧图层
   *@member GreatCircle          大圆弧图层
   *@member Text                 文本图层
   *@member FlyingLine           飞线图层
   *@member AnimationIcon        动画图标图层
   *@member Marker               标签图层
   *@member Line                 线图层渲染连接源点和目标点
   **/

  var LayerType = {
    EmptyLayer: 0,
    BaseSceneLayer: 1,
    BaseLayer: 2,
    PointLayer: 3,
    LabelLayer: 4,
    BoardLayer: 5,
    HeatMapLayer: 6,
    ColomnLayer: 7,
    PolyLineLayer: 8,
    PolygonLayer: 9,
    GridLayer: 10,
    ODLayer: 11,
    MotionEffectLayer: 12,
    ModelSymbolLayer: 13,
    RTSignalLayer: 14,
    RTTrackLayer: 15,
    WMSLayer: 16,
    WMTSLayer: 17,
    EditLayer: 18,
    IconLayer: 19,
    HexagonLayer: 20,
    RadiationLayer: 21,
    ClusterLayer: 22,
    Arc: 23,
    GreatCircle: 24,
    Text: 25,
    FlyingLine: 26,
    AnimationIcon: 27,
    Marker: 28,
    Line: 29,
  };
  /**
   * @enum {number} RenderModeType 二三维场景渲染模式
   * @readonly
   * @property RealMode     真实模式
   * @property XRayMode     X光模式
   * @property CrystalMode  水晶体模式
   **/

  var RenderModeType = {
    RealMode: 0,
    XRayMode: 1,
    CrystalMode: 2,
  };
  /**
   *@enum {number} LayersQueryMode  图层的查询方式
   *@readonly
   *@member AllLayers             查询所有图层
   *@member DynamicLayersOnly     只查询动态图层
   *@member BaseLayersOnly        只查询底座图层
   **/

  var LayersQueryMode = {
    AllLayers: 0,
    DynamicLayersOnly: 1,
    BaseLayersOnly: 2,
  };
  /**
   *@enum {number} DataSourceType  引擎支持的动态图层数据源格式类型
   *@readonly
   *@member GeoJSON             GeoJSON格式，支持本地文件和DoSpace在线服务
   *@member CSV                 CSV格式，仅支持本地文件
   *@member Stream              二进制流式数据，仅支持通过DoSpace在线服务接入
   *@member WebSocket           基于网络套接字的实时推送接口，仅支持通过DoSpace在线服务接入
   **/

  var DataSourceType = {
    GeoJSON: 0,
    CSV: 1,
    Stream: 2,
    Socket: 4,
  };

  /**
   * @class
   * @classdesc DccLayers:
   * 二三维场景图层接口，用于获取图层信息，对图层进行配置和管理
   * @constructor
   * @param {DCCEngine} engine 关联的渲染引擎对象
   * @returns {DccLayers} 返回DccLayers对象
   **/

  var DccLayers = /*#__PURE__*/ (function() {
    function DccLayers(engine) {
      _classCallCheck(this, DccLayers);

      this.engine = engine;
    }
    /**
     * 查询场景中所有的图层
     * @method
     * @param {LayersQueryMode} queryMode ：查询方式，详细参考：LayersQueryMode
     * @param {Array} labels ：图层标签过滤条件，通过标签对查询结果进行过滤，只有具备特定标签的图层才被返回；labels默认为[]，此时标签过滤失效，将依据其他查询条件返回所有满足要求的图层。
     * @param {function} fn ：回调函数，返回是否成功和图层信息，包括图层名称、图层类型、可见、可拾取、可悬停触发和图层标签，返回信息结构如下：
     * {
     *   result:_SUCCESS,
     *   command:Layers_QueryLayers,
     *   layers:[
     *     {layerName:'road',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base','主干道']},
     *     {layerName:'water',layerType:1000,visible:0,pickable=0,hoverable=0,cacheable:0,labels:['base']},
     *     {layerName:'building',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base']},
     *   ]
     * }
     * @example
     * dc.layers.queryLayers(
     *     (e)=>{
     *        if(e.result==_SUCCESS)
     *        {
     *           //输出图层名称及其他属性
     *           console.table(layers);
     *        }
     *     }
     *  );
     **/

    _createClass(DccLayers, [
      {
        key: 'queryLayers',
        value: function queryLayers() {
          var queryMode =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : LayersQueryMode.AllLayers;
          var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          this.engine.excute(
            CommandType.Layers_QueryLayers,
            {
              queryMode: queryMode,
              labels: labels,
            },
            fn,
          );
        },
        /**
         * 在场景中添加新的图层
         * @method
         * @param {LayerType} layerType ： 图层类型
         * @param {string} layerName ：    图层名称
         * @param {json} layerProp ：      图层属性,包含图层显示风格、可见比例尺,过滤器和超链接等等
         * @param {string} datasource ：   图层数据,指向GeoJSON格式数据源文件或DoSpace空间数据查询下载服务地址,如：d:\data\station.json
         * @param {DataSourceType} dsType：添加的数据格式,参考DataSourceType
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_AddLayer,
         *   result:_SUCCESS,
         *   layerType:1001,
         *   layerName:'layer1'，
         * }
         * @example
         * import {LayerType,LineType,LineStyle,PolygonType,FillStyle,RadiationStyle,HighlightStyle,RTTargetType,} from "./common/DccObjects"
         * import {createLayerProp} from "./common/DccObjects"
         * import {UniqueStyleMapping} from "./common/StyleMapping"
         *
         * const layerProp=createLayerProp(LayerType.PointLayer);  //创建点图层属性表
         * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
         * usm.addMappingItem('1',[5,5]);        //添加单值映射项
         * usm.addMappingItem('2',[10,10]);
         * usm.addMappingItem('3',[20,20]);
         * layerProp.size=usm.toJson();          //设置size的样式映射
         *
         * dc.layers.addLayer(LayerType.PointLayer,'layer1',
         *                     'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',  //查询周边加油站
         *                     layerProp,
         *                     (e)=>{
         *                       if(e.result==_SUCCESS)
         *                       {
         *                           console.log('图层\"${e.layerName}\"添加成功!');
         *                       }
         *                     }
         *   );
         **/
      },
      {
        key: 'addLayer',
        value: function addLayer(layerType, layerName, LayerProp, datasource) {
          var dsType =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : DataSourceType.GeoJSON;
          var fn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
          this.engine.excute(
            CommandType.Layers_AddLayer,
            {
              layerType: layerType,
              layerName: layerName,
              dsType: dsType,
              datasource: datasource,
              LayerProp: LayerProp,
            },
            fn,
          );
        },
        /**
         * 更新场景中指定图层的样式属性，支持整体更新和局部更新
         * @method
         * @param {string} layerName ：    图层名称
         * @param {json} layerProp ：    图层属性，包含图层显示风格、可见比例尺，过滤器和超链接等等
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerProp,
         *   result:_SUCCESS,
         *   layerType:1001,
         *   layerName:'layer1'，
         * }
         * @example
         * import {createLayerProp} from "./common/DccObjects"
         * import {UniqueStyleMapping} from "./common/StyleMapping"
         *
         * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
         * usm.addMappingItem('1',[5,5]);        //添加单值映射项
         * usm.addMappingItem('2',[10,10]);
         * usm.addMappingItem('3',[20,20]);
         *
         * //修改图层的size属性
         * dc.layers.updateLayerProp('layer1',{size:usm.toJson()},
         *      (e)=>{
         *         if(e.result==_SUCCESS)
         *         {
         *             console.log('图层\"${e.layerName}\"更新属性成功!');
         *         }
         *       }
         *   );
         **/
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(layerName, LayerProp, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerProp,
            {
              layerName: layerName,
              LayerProp: LayerProp,
            },
            fn,
          );
        },
        /**
         * 查询场景中图层对应的数据源
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerDatasource,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   dataSource:'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation'
         * }
         * @example
         * dc.layers.queryLayerDatasource('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的数据源是\"${e.dataSource}\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerDatasource',
        value: function queryLayerDatasource(layerName, fn) {
          this.engine.excute(
            CommandType.Layers_QueryLayerDatasource,
            {
              layerName: layerName,
            },
            fn,
          );
        },
        /**
         * 修改场景中图层对应的数据源
         * @method
         * @param {string} layerName ：    图层名称
         * @param {string} datasource ：   要重新连接到图层的数据源
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerDatasource,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * dc.layers.updateLayerDatasource('layer1','http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"更新数据源成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerDatasource',
        value: function updateLayerDatasource(layerName, datasource, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerDatasource,
            {
              layerName: layerName,
              datasource: datasource,
            },
            fn,
          );
        },
        /**
         * 查询图层基本设置
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerSetting,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   visible:1,
         *   pickable:0,
         *   hoverable:0,
         *   cacheable:0,
         * }
         * @example
         * dc.layers.queryLayerSetting('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的设置是\"visible ：${e.visible} pickable ${e.pickable} hoverable：${e.hoverable} | cacheable ：${e.cacheable} |\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerSetting',
        value: function queryLayerSetting(fn) {
          this.engine.excute(CommandType.Layers_QueryLayerSetting, {}, fn);
        },
        /**
         * 修改场景中图层基本设置
         * @method
         * @param {string} layerName ：    图层名称
         * @param {json} layerSetting ：   图层配置信息
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerSetting,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * import {defaultLayerSetting} from "./DccGlobal"
         *
         * const lyrSetting=defaultLayerSetting;
         * lyrSetting.visible=false;
         * dc.layers.updateLayerSetting('layer1',lyrSetting,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('修改图层\"${e.layerName}\"基本设置成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerSetting',
        value: function updateLayerSetting(layerName, LayerSetting, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerSetting,
            {
              layerName: layerName,
              LayerSetting: LayerSetting,
            },
            fn,
          );
        },
        /**
         * 查询场景中图层的标签
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和结果数据，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerLabels,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   labels:['beijing','traffic']
         * }
         * @example
         * dc.layers.queryLayerLabels('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的标签是\"${e.labels}\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerLabels',
        value: function queryLayerLabels(fn) {
          this.engine.excute(CommandType.Layers_QueryLayerLabels, {}, fn);
        },
        /**
         * 修改图层标签
         * @method
         * @param {string} layerName ：  图层名称
         * @param {Array}  labels ：     图层标签
         * @param {function} fn ：       回调函数，返回是否成功和操作图层信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerLabels,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * dc.layers.updateLayerLabels('layer1',['beijing','traffic'],
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('修改图层\"${e.layerName}\"标签成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerLabels',
        value: function updateLayerLabels(layerName, labels, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerLabels,
            {
              layerName: layerName,
              labels: labels,
            },
            fn,
          );
        },
        /**
         * 查询图层当前渲染模式，实景、水晶体、X光
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和查询结果信息，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerRenderMode,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   renderMode:0,
         *   outlineColor:[0.5,0.5,0.9,0.8],
         *   filleColor:[0.5,0.5,0.9,0.8],
         *   fillMode:1,
         *   glow:5,
         * }
         * @example
         * dc.layers.queryLayerRenderMode('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的渲染模式是\"${e.renderMode}\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerRenderMode',
        value: function queryLayerRenderMode(fn) {
          this.engine.excute(CommandType.Layers_QueryLayerRenderMode, {}, fn);
        },
        /**
         * 修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式
         * @method
         * @param {string} layerName ：  图层名称
         * @param {json}   renderMode ： 图层渲染模式
         * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerRenderMode,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * import {RenderModeType} from "./common/DccObjects"
         * import {defaultRenderMode} from "./DccGlobal"
         *
         * const renderMode=defaultRenderMode;
         * renderMode.renderMode=RenderModeType.XRayMode;
         * renderMode.filleColor=[1.0,0.5,0.5,0.8];
         * dc.layers.updateLayerRenderMode('layer1',renderMode,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('修改图层\"${e.layerName}\"渲染模式成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerRenderMode',
        value: function updateLayerRenderMode(layerName, renderMode, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerRenderMode,
            {
              layerName: layerName,
              renderMode: renderMode,
            },
            fn,
          );
        },
        /**
         * 批量修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式，可以根据图层类型（底座图层、动态图层）、图层标签进行批量修改
         * @method
         * @param {LayersQueryMode} queryMode ：采用图层查询方式来确认修改图层是否底座图层、动态图层，详细参考：LayersQueryMode
         * @param {Array} labels ：      图层标签数据，通过标签定义修改具备特定标签的图层的渲染模式，当该属性为[]，则标签过滤不起作用，即修改所有图层
         * @param {json} renderMode ：   图层渲染模式
         * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayersRenderMode,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * import {defaultRenderMode} from "./common/DccObjects"
         *
         * const rm=defaultRenderMode;
         * rm.renderMode=RenderModeType.XRayMode;
         * rm.filleColor=[1.0,0.5,0.5,0.8];
         * dc.layers.updateLayersRenderMode(['building','terrain'],rm,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('批量修改图层渲染模式成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayersRenderMode',
        value: function updateLayersRenderMode() {
          var queryMode =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : LayersQueryMode.BaseLayersOnly;
          var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var renderMode =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {
                  renderMode: RenderModeType.RealMode,
                };
          var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          this.engine.excute(
            CommandType.Layers_UpdateLayerLabels,
            {
              queryMode: queryMode,
              labels: labels,
              renderMode: renderMode,
            },
            fn,
          );
        },
        /**
         *修改图层名称
         * @method
         * @param {string} layerName ：图层名称
         * @param {string} newlayerName ：图层新名称
         * @param {function} fn ：回调函数，返回是否成功和图层信息，返回信息结构如下：
         * {
         *   command:Layers_RenameLayer,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   newlayerName:'poiLayer',
         * }
         * @example
         * dc.layers.renameLayer('layer1','poiLayer',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"改名成功！');
         *        }
         *     }
         *   );
         **/
      },
      {
        key: 'renameLayer',
        value: function renameLayer(layerName, newlayerName, fn) {
          this.engine.excute(
            CommandType.Layers_RenameLayer,
            {
              layerName: layerName,
              newlayerName: newlayerName,
            },
            fn,
          );
        },
        /**
         * 删除场景中的图层
         * @method
         * @param {string} layerName ：要删除的图层的名称
         * @param {function} fn ：回调函数，返回是否成功和删除图层信息，返回信息结构如下：
         * {
         *   command:Layers_RemoveLayer,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         **/
      },
      {
        key: 'removeLayer',
        value: function removeLayer(layerName, fn) {
          this.engine.excute(
            CommandType.Layers_RemoveLayer,
            {
              layerName: layerName,
            },
            fn,
          );
        },
        /**
         * 在特定相机距离聚焦到指定的图层
         * @method
         * @param {string} layerName ：需要聚焦的图层的名称
         * @param {number} diatanse ： 相机到聚焦中心点的距离,以米为单位
         * @param {function} fn ：     回调函数，返回是否成功，返回信息结构如下：
         * {
         *   command:Layers_Focus,
         *   result:_SUCCESS,
         *   layerName:'layer1',
         * }
         * @example
         * dc.layers.focus(layerName,  //要聚焦的图层名称
         *     1000,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('聚焦到图层\"${e.layerName}\"成功！');
         *        }
         *     }
         *   );
         **/
      },
      {
        key: 'focus',
        value: function focus(layerName, distance, fn) {
          this.engine.excute(
            CommandType.Layers_Focus,
            {
              layerName: layerName,
              distance: distance,
            },
            fn,
          );
        },
      },
    ]);

    return DccLayers;
  })();

  var _objectSpread2;

  var ZOOM = {
    maxZoom: 24,
    minZoom: 0,
  };
  var Scatterplot$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      stroked: false,
      // 是否描边
      filled: true,
      // 是否填充
      radiusMinPixels: 1,
      // 半径最小像素
      radiusMaxPixels: 100,
      // 半径最大像素
      radiusScale: 1,
      // 半径缩放
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // 获取坐标
      // begin 可动态修改的属性
      opacity: 1,
      // 透明度
      size: 14,
      // 半径
      color: [255, 140, 0],
      // 颜色
      radiusUnits: 'pixels',
      // 单位
      visible: true,
      // 是否显示
      blending: 'normal', // 混合模式
      // end
    },
  );
  var Icon$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // begin 可动态修改的属性
      opacity: 1,
      // 透明度
      size: 14,
      url: '',
      color: [],
      mask: false,
      visible: true,
      // 是否显示
      billboard: true,
      // 是否平面显示
      sizeUnits: 'pixels',
      angle: 0,
      // 角度
      height: 128,
      // 高度
      blending: 'normal', // 混合模式
      // end
    },
  );
  var Text = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      characterSet: 'auto',
      // begin 可动态修改的属性
      textField: 'name',
      opacity: 1,
      // 透明度
      size: 32,
      color: [0, 0, 0, 255],
      elevation: 0,
      billboard: true,
      fontFamily: 'Monaco, monospace',
      // 用于设置字体，支持CSS内置字体
      fontWeight: 400,
      textAnchor: 'middle',
      alignmentBaseline: 'center',
      angle: 0,
      writingMode: 'horizontal',
      // horizontal | vertical
      sizeUnits: 'pixels', // end
    },
  );
  var Heartbeat$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      // begin 可动态修改的属性
      style: 'circular',
      // 图标样式 circular circle-dot ring ring-dot spot
      size: 100,
      forecolor: [76, 175, 80],
      // 只支持rbg
      bkColor: [139, 195, 74],
      // 只支持rbg
      opacity: 1,
      animationType: 'spread',
      // 动画类型 spread fadeShow breathing pulsation
      pitchAlignment: 'map',
      // 垂直对齐方式 map | viewport
      overlap: false,
      // 是否重叠
      duration: 3000,
      // 动画时长
      visible: true, // 是否显示
      // end
    },
  );
  var Path$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getPath: function getPath(d) {
        // 如果是面数据就返回面的边界
        if (d.geometry.type === 'Polygon') {
          return d.geometry.coordinates[0];
        }

        return d.geometry.coordinates;
      },
      // begin 可动态修改的属性
      opacity: 1,
      width: 1,
      lineColor: [255, 140, 0],
      widthUnits: 'meters',
      capRounded: true,
      jointRounded: true, // end
    },
  );
  var Arc$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getSourcePosition: function getSourcePosition(d) {
        return d.geometry.coordinates[0];
      },
      getTargetPosition: function getTargetPosition(d) {
        return d.geometry.coordinates[1];
      },
      widthMinPixels: 1,
      widthMaxPixels: 100,
      // begin 可动态修改的属性
      lineColor: [[244, 67, 54]],
      lineHeight: 1,
      lineWidth: 1,
      opacity: 1,
      widthUnits: 'pixels', // 单位 pixels | meters
      // end
    },
  );
  var Line$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getSourcePosition: function getSourcePosition(d) {
        return d.geometry.coordinates[0];
      },
      getTargetPosition: function getTargetPosition(d) {
        return d.geometry.coordinates[1];
      },
      widthMinPixels: 1,
      widthMaxPixels: 100,
      // begin 可动态修改的属性
      lineColor: [244, 67, 54],
      lineWidth: 1,
      opacity: 1,
      widthUnits: 'pixels', // 单位 pixels | meters
      // end
    },
  );
  var GreatCircle$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getSourcePosition: function getSourcePosition(d) {
        return d.geometry.coordinates[0];
      },
      getTargetPosition: function getTargetPosition(d) {
        return d.geometry.coordinates[1];
      },
      widthMinPixels: 1,
      widthMaxPixels: 100,
      // begin 可动态修改的属性
      lineColor: [[244, 67, 54]],
      lineHeight: 1,
      lineWidth: 1,
      opacity: 1,
      widthUnits: 'pixels', // 单位 pixels | meters
      // end
    },
  );
  var Polygon$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    ((_objectSpread2 = {
      extruded: true,
      filled: true,
      getPolygon: function getPolygon(d) {
        return d.geometry.coordinates;
      },
      stroked: true,
      wireframe: true,
      // begin 可动态修改的属性
      outlineColor: [180, 80, 80],
      // 轮廓线颜色
      outlineWidth: 1,
      // 轮廓线颜色宽度
      fenceHeight: 1000,
      // 侧面高度
      color: [255, 140, 0],
    }),
    _defineProperty(_objectSpread2, 'extruded', false),
    _defineProperty(_objectSpread2, 'lineWidthUnits', 'meters'),
    _objectSpread2),
  );
  var Cluster$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      // begin 可动态修改的属性
      colors: ['#51bbd6', '#f1f075', '#f28cb1'],
      textSize: 14,
      minRadius: 14,
      maxRadius: 100,
      opacity: 1,
      textVisible: true,
      visible: true,
      clusterRadius: 50, // end
    },
  );
  var Grid$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // begin 可动态修改的属性
      opacity: 1,
      visible: true,
      colors: [
        [255, 255, 174],
        [255, 218, 110],
        [255, 179, 63],
        [255, 141, 46],
        [243, 57, 11],
        [191, 0, 32],
      ],
      size: 1000,
      // 米
      coverage: 1,
      //
      aggregation: 'count',
      // count sum mean
      weight: 'weight',
      extruded: false,
      elevationScale: 1, // end
    },
  );
  var Hexagon$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // begin 可动态修改的属性
      opacity: 1,
      visible: true,
      colors: [
        [255, 255, 174],
        [255, 218, 110],
        [255, 179, 63],
        [255, 141, 46],
        [243, 57, 11],
        [191, 0, 32],
      ],
      radius: 1000,
      // 米
      coverage: 1,
      //
      weight: 'weight',
      extruded: false,
      elevationScale: 1, // end
    },
  );
  var Trips$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      currentTime: 0,
      getTimestamps: function getTimestamps(d) {
        return d.properties.timestamp.map(function(item) {
          return item;
        });
      },
      getPath: function getPath(d) {
        return d.geometry.coordinates;
      },
      widthMinPixels: 2,
      // begin 可动态修改的属性
      loopLength: 3000,
      // 一次循环的时长
      animationSpeed: 1,
      // 动画速度
      color: [253, 128, 93],
      // 轨迹颜色
      trailLength: 800,
      // 拖尾长度
      width: 1,
      // 轨迹宽度
      widthUnits: 'pixels', // 单位 pixels | meters
      // end
    },
  );
  var Heatmap$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // begin 可动态修改的属性
      opacity: 1,
      // 透明度
      radius: 30,
      // 半径
      weightField: 'weight',
      // 权重字段
      intensity: 1,
      // 强度
      chromatography: [
        [54, 98, 206],
        [156, 185, 244],
        [37, 59, 103],
        [204, 88, 73],
        [34, 30, 30],
        [76, 159, 236],
      ], // end
    },
  );
  var FlyingLine$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      // begin 可动态修改的属性
      opacity: 1,
      visible: true,
      animationType: 'lengthen',
      overlap: false,
      dash: 0,
      color: [[255, 255, 255]],
      // 只支持rbg
      width: 1,
      height: 100,
      duration: 2000,
      altitude: 0, // end
    },
  );
  var AnimationIcon$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      // begin 可动态修改的属性
      opacity: 1,
      pitchAlignment: 'viewport',
      // map | viewport
      overlap: false,
      maxZoom: 24,
      minZoom: 0,
      visible: true,
      duration: 2000,
      altitude: 0,
      sizeScale: 1,
      image: '', // end
    },
  );
  var Scenegraph$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      getPosition: function getPosition(d) {
        return d.geometry.coordinates;
      },
      // begin 可动态修改的属性
      opacity: 1,
      visible: true,
      sizeScale: 1,
      color: [255, 0, 0, 255],
      altitude: 0,
      url: '',
      speed: 0, // end
    },
  );
  var Marker$1 = _objectSpread2$1(
    _objectSpread2$1({}, ZOOM),
    {},
    {
      visible: true,
      altitude: 0,
      sizeScale: 1,
      fieldLabel: '名称：',
      fieldKey: 'name',
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
    },
  );

  var layerConf = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Scatterplot: Scatterplot$1,
    Icon: Icon$1,
    Text: Text,
    Heartbeat: Heartbeat$1,
    Path: Path$1,
    Arc: Arc$1,
    Line: Line$1,
    GreatCircle: GreatCircle$1,
    Polygon: Polygon$1,
    Cluster: Cluster$1,
    Grid: Grid$1,
    Hexagon: Hexagon$1,
    Trips: Trips$1,
    Heatmap: Heatmap$1,
    FlyingLine: FlyingLine$1,
    AnimationIcon: AnimationIcon$1,
    Scenegraph: Scenegraph$1,
    Marker: Marker$1,
  });

  /* eslint-disable */

  /* eslint-disable no-multi-spaces */

  /* eslint-disable semi */

  /* eslint-disable space-in-parens */

  /* eslint-disable padded-blocks */

  /* eslint-disable indent */

  /* eslint-disable space-before-blocks */

  /* eslint-disable no-trailing-spaces */

  /**
   * DoCity SDK @version 1.0.0
  ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
           ;00000C. :888ff:                                                                                       
        ;0001 ,C :880: ,88Ci           :8888888:.        ,88888888           ,88888888.    ,8,   :8              
      ;0001    :888;     ,888i         88      :88,    :88.      :88.      ,88,      ,88.        88              
    ;0001    :888:  G00    ,888;       88        88,  :8:          88.    :8:              :8f :88888.8:      :8,
   0001     808:    .000,    :Gf8      88         88 ;88           .88    88               ,8,   88   :8:    :8, 
   0Cf;     888,     000:    .G88      88         88 ;88           .88    88               ,8,   88    :8   ,8,  
    1L88i    :88   0000,    8888       88        :8,  88,          88,    :8,              ,8,   88     88  8:   
      i888;      0000,    8088         88      ,88.    :88.      :88.      ,88,      ,88,  ,8,   88     .8888    
        i088i  8000. :  8888           ,8888888:         ,88888888           .88888888,    ,8,   ::      ,80     
          1ffC000, :088888                                                                               :8.     
             ,,       .                                                                                 ,8,      
                                                                                                                 
  *@copyright  ©2021 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有  
  ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  *StyleMapping：图层样式映射对象，用于设置图层样式与数据属性之间的映射关系
  *UniqueStyleMapping ： 图层风格单值映射对象
  *RangeStyleMapping ： 图层风格范围分段映射对象
  *LinearStyleMapping : 图层风格线性函数映射对象
  *ExponentialStyleMapping : 图层风格指数函数映射对象
  *LogStyleMapping : 图层风格对数函数映射对象
  *GradientStyleMapping : 图层风格渐变映射对象
  *taody.2021.1.20
  **/

  /**
   *@enum {number} StyleMappingType 样式映射类型
   *@readonly
   *@member Unknown        没有初始化
   *@member Unique         单值映射
   *@member Range          分段映射
   *@member Linear         线性映射
   *@member Exponential    指数映射
   *@member Log            对数映射
   *@member scale          D3 比例尺
   **/
  var StyleMappingType = {
    Unknown: 0,
    Unique: 1,
    Range: 2,
    Linear: 3,
    Exponential: 4,
    Log: 5,
    Gradient: 6,
    scale: 7,
  };
  /**
   *@enum {number} RangeType 范围分段类型
   *@readonly
   *@member OpenInterval       开区间，例如：(0,1) = {x | 0 < x < 1}
   *@member CloseInterval      闭区间，例如：[0,1] = {x | 0 ≤ x ≤ 1}
   *@member LeftOpenInterval   左开右关区间,例如：(0,1] = {x | 0 < x ≤ 1}
   *@member RightOpenInterval  左关右开区间，例如：[0,1) = {x | 0 ≤ x < 1}
   **/

  var RangeType = {
    OpenInterval: 1,
    CloseInterval: 2,
    LeftOpenInterval: 3,
    RightOpenInterval: 4,
  };

  var getGlConst = function getGlConst(d) {
    return GL__default['default'][d];
  };

  var LAYER_BLENDINGS = {
    additive: {
      blendFunc: ['SRC_ALPHA', 'DST_ALPHA'],
      blendEquation: 'FUNC_ADD',
    },
    normal: {
      // reference to
      // https://limnu.com/webgl-blending-youre-probably-wrong/
      blendFunc: ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'ONE', 'ONE_MINUS_SRC_ALPHA'],
      blendEquation: ['FUNC_ADD', 'FUNC_ADD'],
    },
    subtractive: {
      blendFunc: ['ONE', 'ONE_MINUS_DST_COLOR', 'SRC_ALPHA', 'DST_ALPHA'],
      blendEquation: ['FUNC_SUBTRACT', 'FUNC_ADD'],
    },
  };
  function setLayerEveryBlending(layerBlending) {
    var blending = LAYER_BLENDINGS[layerBlending];
    var blendFunc = blending.blendFunc,
      blendEquation = blending.blendEquation;
    return _objectSpread2$1(
      _defineProperty({}, GL__default['default'].BLEND, true),
      blendFunc
        ? {
            blendFunc: blendFunc.map(getGlConst),
            blendEquation: Array.isArray(blendEquation)
              ? blendEquation.map(getGlConst)
              : getGlConst(blendEquation),
          }
        : {},
    );
  }

  var BaseLayer = /*#__PURE__*/ (function() {
    function BaseLayer(map, baseLayerId, id, style, layer) {
      _classCallCheck(this, BaseLayer);

      this._style = {
        visible_zoom: true,
        visible: true,
      };
      this.map = map;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = style;
      this.layer = layer;
    }

    _createClass(BaseLayer, [
      {
        key: '_layers',
        get: function get() {
          var _this = this;

          if (Array.isArray(this.map._layers)) {
            return this.map._layers.filter(function(item) {
              return item.id !== _this.id;
            });
          }

          return [];
        },
      },
      {
        key: 'blending',
        get: function get() {
          return setLayerEveryBlending(this.style.blending || 'normal');
        },
      },
      {
        key: 'visible_zoom',
        get: function get() {
          var zoom = this.map.viewManager.viewState.zoom;
          var visible = this.style.visible_zoom;

          if (zoom < this.style.minZoom || zoom > this.style.maxZoom) {
            visible = false;
          } else {
            visible = true;
          }

          return visible;
        },
      },
      {
        key: 'setVisibleByZoom',
        value: function setVisibleByZoom() {
          this._setProps();
        },
        /**
         * 分段映射数据
         * @param {*} fieldValue 分段字段的值
         * @param {*} mappingItems 分段的条件、值
         * @returns
         */
      },
      {
        key: 'rangeMappingStyle',
        value: function rangeMappingStyle(fieldValue, mappingItems) {
          if (!Array.isArray(mappingItems)) {
            throw 'mappingItems 不是一个数组';
          }

          var res = mappingItems.find(function(item) {
            if (item.rangeType === RangeType.OpenInterval) {
              return fieldValue > item.start && fieldValue < item.end;
            }

            if (item.rangeType === RangeType.CloseInterval) {
              return fieldValue >= item.start && fieldValue <= item.end;
            }

            if (item.rangeType === RangeType.LeftOpenInterval) {
              return fieldValue > item.start && fieldValue <= item.end;
            }

            if (item.rangeType === RangeType.RightOpenInterval) {
              return fieldValue >= item.start && fieldValue < item.end;
            }
          });
          return (
            (res === null || res === void 0 ? void 0 : res.style) ||
            mappingItems[mappingItems.length - 1].style
          );
        },
        /**
         * d3-scale
         * @param {*} mappingField 分段字段
         * @param {*} mappingItems 分段的条件、值
         * @returns
         */
      },
      {
        key: 'scaleMappingStyle',
        value: function scaleMappingStyle(mappingField, mappingItems) {
          if (!Array.isArray(mappingItems)) {
            throw 'mappingItems 不是一个数组';
          }

          var _this$getFieldValues = this.getFieldValues(mappingField),
            fieldValues = _this$getFieldValues.fieldValues,
            isNumber = _this$getFieldValues.isNumber;

          var scale;

          if (isNumber) {
            scale = d3Scale
              .scaleQuantile()
              .domain(fieldValues)
              .range(mappingItems);
          } else {
            scale = d3Scale
              .scaleOrdinal()
              .domain(fieldValues)
              .range(mappingItems);
          }

          return [scale, isNumber];
        },
      },
      {
        key: 'getFieldValues',
        value: function getFieldValues(field) {
          var data = this.data || [];
          var fieldValues =
            data.map(function(item) {
              return item.properties[field];
            }) || [];
          fieldValues = Array.from(new Set(fieldValues));
          var noNumber = fieldValues.some(function(item) {
            return isNaN(Number(item));
          });

          if (!noNumber) {
            fieldValues = fieldValues.map(function(item) {
              return Number(item);
            });
          }

          return {
            fieldValues: fieldValues.sort(function(a, b) {
              if (a < b) return -1;
              if (a > b) return 1;
              return 0;
            }),
            isNumber: !noNumber,
          };
        },
        /**
         * 获取颜色
         * @param {*} param 一个颜色值 或 一个对象包含分段的数据条件
         * @param {*} keyName deckgl 属性
         * @returns
         */
      },
      {
        key: 'color',
        value: function color(param, keyName) {
          var _this2 = this;

          if (
            +(param === null || param === void 0 ? void 0 : param.mappingType) ===
            StyleMappingType.Range
          ) {
            return _defineProperty({}, keyName, function(d) {
              var a = _this2.rangeMappingStyle(
                d.properties[param.mappingField],
                param.mappingItems,
              );

              return a;
            });
          }

          if (
            +(param === null || param === void 0 ? void 0 : param.mappingType) ===
            StyleMappingType.scale
          ) {
            var _this$scaleMappingSty = this.scaleMappingStyle(
                param.mappingField,
                param.mappingItems,
              ),
              _this$scaleMappingSty2 = _slicedToArray(_this$scaleMappingSty, 2),
              scale = _this$scaleMappingSty2[0],
              isNumber = _this$scaleMappingSty2[1];

            return _defineProperty({}, keyName, function(d) {
              var field = d.properties[param.mappingField];
              field = isNumber ? Number(field) : field;
              return scale(field);
            });
          }

          return _defineProperty({}, keyName, function(d) {
            return param || [];
          });
        }, // 获取大小
      },
      {
        key: 'size',
        value: function size(param, keyName) {
          var _this3 = this;

          if (
            +(param === null || param === void 0 ? void 0 : param.mappingType) ===
            StyleMappingType.Range
          ) {
            return _defineProperty({}, keyName, function(d) {
              return _this3.rangeMappingStyle(d.properties[param.mappingField], param.mappingItems);
            });
          }

          if (
            +(param === null || param === void 0 ? void 0 : param.mappingType) ===
            StyleMappingType.scale
          ) {
            var _this$getFieldValues2 = this.getFieldValues(param.mappingField),
              fieldValues = _this$getFieldValues2.fieldValues,
              isNumber = _this$getFieldValues2.isNumber;

            var scale = d3Scale
              .scalePoint()
              .domain(fieldValues)
              .range(param.mappingItems);
            return _defineProperty({}, keyName, function(d) {
              var field = d.properties[param.mappingField];
              field = isNumber ? Number(field) : field;
              return scale(field);
            });
          }

          return _defineProperty({}, keyName, function(d) {
            return param || [];
          });
        }, // 角度目前和大小一个逻辑
      },
      {
        key: 'angle',
        value: function angle(param, keyName) {
          return this.size(param, keyName);
        },
      },
      {
        key: '_setProps',
        value: function _setProps() {
          var blending = this.blending;
          var visible_zoom = this.visible_zoom;
          var _this$style = this.style,
            visible = _this$style.visible,
            parameters = _this$style.parameters;
          var layers = [].concat(_toConsumableArray(this._layers), [
            new this.layer(
              _objectSpread2$1(
                _objectSpread2$1(
                  {
                    id: this.id,
                    parameters: _objectSpread2$1(_objectSpread2$1({}, parameters), blending),
                  },
                  this.style,
                ),
                {},
                {
                  visible: visible && visible_zoom,
                  data: this.data,
                },
              ),
            ),
          ]);
          this.map._layers = layers;
          this.map.setProps({
            layers: layers,
          });
        },
        /**
         * 添加图层数据
         * @param {*} layer
         * @param {*} data
         */
      },
      {
        key: 'addData',
        value: function addData(data) {
          this.updateData(data);
        },
        /**
         * 删除图层数据图层
         */
      },
      {
        key: 'removeLayer',
        value: function removeLayer() {
          this.destroy && this.destroy();
          var layers = this._layers;
          this.map._layers = layers;
          this.map.setProps({
            layers: layers,
          });
        },
        /**
         * 数据过滤显示
         * @param {*} key
         * @param {*} number
         */
      },
      {
        key: 'filterBy',
        value: function filterBy(key, number) {},
        /**
         * 更新数据源
         * @param {*} data
         */
      },
      {
        key: 'updateData',
        value: function updateData(data) {
          if (data.layerId === this.id || data.layerId === this.style.layerId) {
            this.data = (data === null || data === void 0 ? void 0 : data.features) || data;

            if (!Array.isArray(this.data)) {
              console.error('数据格式有误请传入 geojson 数据', data);
              return;
            }

            this._setProps();
          } else {
            console.warn('当前图层id与数据图层id不匹配');
          }
        },
        /**
         * 更新图层
         * @param {*} data
         */
      },
      {
        key: 'update',
        value: function update() {
          // todo 更新前需要判断数据和图层类型是否匹配
          if (!Array.isArray(this.data)) {
            console.error('数据格式有误请传入 geojson 数据', this.data);
            return;
          }

          this._setProps();
        },
        /**
         * 更新图层属性
         * @param {*} props
         */
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(props) {
          if (!Object.prototype.toString.call(props) === '[object Object]') {
            console.error('图层属性格式有误请传入一个对象', props);
            return;
          }

          this.style = props;

          this._setProps();
        },
      },
    ]);

    return BaseLayer;
  })();

  var Scatterplot = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Scatterplot, _BaseLayer);

    var _super = _createSuper(Scatterplot);

    function Scatterplot(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Scatterplot);

      return _super.call(this, map, baseLayerId, id, style, layers$1.ScatterplotLayer);
    }

    _createClass(Scatterplot, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            color = _this$_style.color,
            size = _this$_style.size;
          _this$_style.weight;
          return _objectSpread2$1(
            _objectSpread2$1(
              _objectSpread2$1({}, this.color(color, 'getFillColor')),
              this.size(size, 'getRadius'),
            ),
            {},
            {
              updateTriggers: {
                getFillColor: color,
                getRadius: size,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Scatterplot;
  })(BaseLayer);

  var Icon = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Icon, _BaseLayer);

    var _super = _createSuper(Icon);

    function Icon(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Icon);

      return _super.call(this, map, baseLayerId, id, style, layers$1.IconLayer);
    }

    _createClass(Icon, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            url = _this$_style.url,
            size = _this$_style.size,
            color = _this$_style.color,
            mask = _this$_style.mask,
            height = _this$_style.height,
            angle = _this$_style.angle;
          var time = new Date().getTime();
          return _objectSpread2$1(
            _objectSpread2$1(
              _objectSpread2$1(
                _objectSpread2$1({}, this.color(color, 'getColor')),
                this.size(size, 'getSize'),
              ),
              this.angle(angle, 'getAngle'),
            ),
            {},
            {
              getIcon: function getIcon() {
                return {
                  id: time,
                  url: url,
                  width: 512,
                  height: 512,
                  anchorY: height,
                  mask: mask,
                };
              },
              updateTriggers: {
                getIcon: [mask, url, height],
                getColor: color,
                getSize: size,
                getAngle: angle,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Icon;
  })(BaseLayer);

  var animationTypeEnum = {
    spread: 1,
    fadeShow: 2,
    breathing: 3,
    pulsation: 4,
  };

  function circular(_ref) {
    var _this = this;

    var size = _ref.size,
      forecolor = _ref.forecolor;
    _ref.bkColor;
    var _ref$animationType = _ref.animationType,
      animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return (function(size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = (performance.now() % duration) / duration;
          var radius = (size / 2) * 0.3;
          var outerRadius = (size / 2) * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画

          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸

          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动

          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = (size / 2) * 0.7 * t + radius;
          }

          var context = this.context; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + forecolor + ',' + t + ')';
          context.fill(); // // draw inner circle
          // context.beginPath();
          // context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          // context.fillStyle = "rgba(" + bkColor + ")";
          // //context.strokeStyle = "white";
          // //context.lineWidth = 2 + 4 * (1 - t);
          // context.fill();
          // //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        },
      };
    })(size, forecolor);
  }

  function circleDot(_ref) {
    var _this = this;

    var size = _ref.size,
      forecolor = _ref.forecolor,
      bkColor = _ref.bkColor,
      _ref$animationType = _ref.animationType,
      animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return (function(size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var bkColor = bkColor || '255, 100, 100, 1';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = (performance.now() % duration) / duration;
          var radius = (size / 4) * 0.4;
          var outerRadius = (size / 2) * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画

          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸

          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动

          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = (size / 2) * 0.7 * t + radius;
          }

          var context = this.context; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + forecolor + ',' + t + ')';
          context.fill(); // draw inner circle

          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + bkColor + ')'; //context.strokeStyle = "white";
          //context.lineWidth = 2 + 4 * (1 - t);

          context.fill(); //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        },
      };
    })(size, forecolor, bkColor);
  }

  function ring(_ref) {
    var _this = this;

    var size = _ref.size,
      forecolor = _ref.forecolor;
    _ref.bkColor;
    var _ref$animationType = _ref.animationType,
      animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return (function(size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = (performance.now() % duration) / duration;
          var radius = (size / 2) * 0.3;
          var outerRadius = (size / 2) * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画

          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸

          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动

          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = (size / 2) * 0.7 * t + radius;
          }

          var context = this.context;
          var center = size / 2; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
          grd.addColorStop(0, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.2, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.9, 'rgba(' + forecolor + ',' + t + ')');
          grd.addColorStop(1, 'rgba(' + forecolor + ',' + 0 + ')'); //使用经向渐变

          context.fillStyle = grd;
          context.fillRect(0, 0, this.width, this.height);
          context.fill(); // // draw inner circle
          // context.beginPath();
          // context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          // context.fillStyle = "rgba(" + bkColor + ")";
          // //context.strokeStyle = "white";
          // //context.lineWidth = 2 + 4 * (1 - t);
          // context.fill();
          // //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        },
      };
    })(size, forecolor);
  }

  function ringDot(_ref) {
    var _this = this;

    var size = _ref.size,
      forecolor = _ref.forecolor,
      bkColor = _ref.bkColor,
      _ref$animationType = _ref.animationType,
      animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return (function(size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var bkColor = bkColor || '255, 100, 100, 1';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = (performance.now() % duration) / duration;
          var radius = (size / 2) * 0.3;
          var outerRadius = (size / 2) * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画

          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸

          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = (size / 2) * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动

          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = (size / 2) * 0.7 * t + radius;
          }

          var context = this.context;
          var center = size / 2; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
          grd.addColorStop(0, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.2, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.9, 'rgba(' + forecolor + ',' + t + ')');
          grd.addColorStop(1, 'rgba(' + forecolor + ',' + 0 + ')'); //使用经向渐变

          context.fillStyle = grd;
          context.fillRect(0, 0, this.width, this.height);
          context.fill(); // draw inner circle

          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + bkColor + ')'; //context.strokeStyle = "white";
          //context.lineWidth = 2 + 4 * (1 - t);

          context.fill(); //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        },
      };
    })(size, forecolor, bkColor);
  }

  function spot(_ref) {
    var _this = this;

    var size = _ref.size,
      forecolor = _ref.forecolor;
    _ref.bkColor;
    var _ref$animationType = _ref.animationType,
      animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return (function(size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = (performance.now() % duration) / duration;
          var radius = (size / 2) * 0.3;
          var outerRadius = (size / 2) * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = (size / 2) * 0.7 * t + radius;
          } // 渐隐渐显动画

          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸

          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = (size / 2) * 0.7 * t + radius;
          } // 脉动

          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = (size / 2) * 0.7 * t + radius;
          }

          var context = this.context;
          var center = size / 2; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
          grd.addColorStop(0, 'rgba(' + forecolor + ',' + t + ')');
          grd.addColorStop(1, 'rgba(' + forecolor + ',' + 0 + ')'); //使用经向渐变

          context.fillStyle = grd;
          context.fillRect(0, 0, this.width, this.height);
          context.fill(); // // draw inner circle
          // context.beginPath();
          // context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          // context.fillStyle = "rgba(" + bkColor + ")";
          // //context.strokeStyle = "white";
          // //context.lineWidth = 2 + 4 * (1 - t);
          // context.fill();
          // //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        },
      };
    })(size, forecolor);
  }

  var style = {
    spot: spot,
    circleDot: circleDot,
    ringDot: ringDot,
    ring: ring,
    circular: circular,
    1: circular,
    2: circleDot,
    3: ring,
    4: spot,
    5: ringDot,
  };

  var Heartbeat = /*#__PURE__*/ (function() {
    function Heartbeat(_ref) {
      var mapbox = _ref.mapbox,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Heartbeat);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1(
        {
          style: 'circular',
          opacity: 1,
          animationType: 'spread',
          pitchAlignment: 'map',
          overlap: false,
          maxZoom: 24,
          minZoom: 0,
          visible: true,
        },
        style,
      );
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */

    _createClass(Heartbeat, [
      {
        key: 'addData',
        value: function addData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          var _this$style = this.style,
            animationType = _this$style.animationType,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            opacity = _this$style.opacity,
            pitchAlignment = _this$style.pitchAlignment,
            overlap = _this$style.overlap,
            visible = _this$style.visible;
          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.addImage(
            this.id,
            style[this.style.style].bind(this)(
              _objectSpread2$1(
                _objectSpread2$1({}, this.style),
                {},
                {
                  animationType: animationTypeEnum[animationType] || animationType,
                },
              ),
            ),
            {
              pixelRatio: 2,
            },
          );
          this.map.addLayer({
            id: this.id,
            type: 'symbol',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: this.data,
              },
            },
            minzoom: minZoom,
            maxzoom: maxZoom,
            paint: {
              'icon-opacity': opacity,
            },
            layout: {
              'icon-image': this.id,
              'icon-pitch-alignment': pitchAlignment,
              'icon-allow-overlap': overlap,
              visibility: visible ? 'visible' : 'none',
            },
          });
        },
        /**
         * 更新数据源
         * @param {*} data
         */
      },
      {
        key: 'updateData',
        value: function updateData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.getSource(this.id).setData({
            type: 'FeatureCollection',
            features: this.data,
          });
        },
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(props) {
          this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

          if (props.visible === 1) {
            this.map.setLayoutProperty(this.id, 'visibility', 'visible');
          }

          if (props.visible === 0) {
            this.map.setLayoutProperty(this.id, 'visibility', 'none');
          }

          if (props.pitchAlignment) {
            this.map.setLayoutProperty(this.id, 'icon-pitch-alignment', this.style.pitchAlignment);
          }

          if (typeof props.overlap === 'boolean') {
            this.map.setLayoutProperty(this.id, 'icon-allow-overlap', this.style.overlap);
          }

          this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
          this.map.setPaintProperty(this.id, 'icon-opacity', this.style.opacity);

          if (
            props.size ||
            props.forecolor ||
            props.bkColor ||
            props.style ||
            props.animationType ||
            props.duration
          ) {
            this.map.removeImage(this.id);
            this.map.addImage(
              this.id,
              style[this.style.style].bind(this)(
                _objectSpread2$1(
                  _objectSpread2$1({}, this.style),
                  {},
                  {
                    animationType:
                      animationTypeEnum[this.style.animationType] || this.style.animationType,
                  },
                ),
              ),
              {
                pixelRatio: 2,
              },
            );
          }
        },
      },
      {
        key: 'removeLayer',
        value: function removeLayer() {
          this.map.hasImage(this.id) && this.map.removeImage(this.id);
          this.map.getSource(this.id) && this.map.removeSource(this.id);
        },
      },
    ]);

    return Heartbeat;
  })();

  var Heatmap = /*#__PURE__*/ (function() {
    function Heatmap(_ref) {
      var mapbox = _ref.mapbox,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Heatmap);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1(
        {
          opacity: 1,
          maxZoom: 0,
          minZoom: 24,
          visible: true,
          colors: [],
          radius: 2,
          antitone: false,
        },
        style,
      );
    }

    _createClass(Heatmap, [
      {
        key: 'getHeatmapColor',
        value: function getHeatmapColor(colors, antitone) {
          var arr = [];
          var multiplicationNum = 1 / colors.length;

          if (antitone) {
            colors = _toConsumableArray(colors).reverse();
          }

          for (var i in colors) {
            arr.push((+i + 1) * multiplicationNum);
            arr.push(colors[i]);
          }

          return arr;
        },
        /**
         * 添加图层数据
         * @param {*} layer
         * @param {*} data
         */
      },
      {
        key: 'addData',
        value: function addData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          var _this$style = this.style,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            opacity = _this$style.opacity,
            visible = _this$style.visible,
            weightField = _this$style.weightField,
            radius = _this$style.radius,
            colors = _this$style.colors,
            antitone = _this$style.antitone;
          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.addSource(this.id, {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: this.addWeightProp(this.data, weightField),
            },
          });
          this.map.addLayer({
            id: this.id,
            type: 'heatmap',
            source: this.id,
            minzoom: minZoom,
            maxzoom: maxZoom,
            paint: {
              'heatmap-radius': radius,
              'heatmap-weight': weightField
                ? ['interpolate', ['linear'], ['get', 'weight'], 0, 0, 1, 1]
                : 1,
              'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 24, 0],
              'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(0,0,0,0)',
              ].concat(_toConsumableArray(this.getHeatmapColor(colors, antitone))),
              'heatmap-opacity': opacity,
            },
            layout: {
              visibility: visible ? 'visible' : 'none',
            },
          });
        },
      },
      {
        key: 'getFieldValues',
        value: function getFieldValues(field) {
          var data = this.data || [];
          var fieldValues =
            data.map(function(item) {
              return item.properties[field];
            }) || [];
          fieldValues = Array.from(new Set(fieldValues));
          var noNumber = fieldValues.some(function(item) {
            return isNaN(Number(item));
          });

          if (!noNumber) {
            fieldValues = fieldValues.map(function(item) {
              return Number(item);
            });
          }

          return {
            fieldValues: fieldValues.sort(function(a, b) {
              return a - b;
            }),
            isNumber: !noNumber,
          };
        },
      },
      {
        key: 'addWeightProp',
        value: function addWeightProp(geoJsondata, feild) {
          var _this$getFieldValues = this.getFieldValues(feild),
            fieldValues = _this$getFieldValues.fieldValues;

          var scale = d3Scale
            .scalePoint()
            .domain(fieldValues)
            .range([0, 1]);

          var _iterator = _createForOfIteratorHelper(geoJsondata),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              item.properties.weight = scale(item.properties[feild]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return geoJsondata;
        },
        /**
         * 更新数据源
         * @param {*} data
         */
      },
      {
        key: 'updateData',
        value: function updateData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.getSource(this.id).setData({
            type: 'FeatureCollection',
            features: this.addWeightProp(this.data, this.style.weightField),
          });
        },
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(props) {
          this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);
          this.map.setLayoutProperty(
            this.id,
            'visibility',
            this.style.visible ? 'visible' : 'none',
          );
          this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
          this.map.setPaintProperty(this.id, 'heatmap-opacity', this.style.opacity);
          this.map.setPaintProperty(this.id, 'heatmap-radius', this.style.radius);
          this.map.setPaintProperty(
            this.id,
            'heatmap-color',
            ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(0,0,0,0)'].concat(
              _toConsumableArray(this.getHeatmapColor(this.style.colors, this.style.antitone)),
            ),
          );

          if (typeof props.weightField !== 'undefined') {
            this.updateData(this.data);
          }
        },
      },
      {
        key: 'removeLayer',
        value: function removeLayer() {
          if (this.map.getLayer(this.id)) {
            this.map.removeLayer(this.id);
          }

          this.map.getSource(this.id) && this.map.removeSource(this.id);
        },
      },
    ]);

    return Heatmap;
  })();

  var Path = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Path, _BaseLayer);

    var _super = _createSuper(Path);

    function Path(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Path);

      return _super.call(this, map, baseLayerId, id, style, layers$1.PathLayer);
    }

    _createClass(Path, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            width = _this$_style.width;
          return _objectSpread2$1(
            _objectSpread2$1(
              _objectSpread2$1({}, this.size(width, 'getWidth')),
              this.color(lineColor, 'getColor'),
            ),
            {},
            {
              updateTriggers: {
                getColor: lineColor,
                getWidth: width,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Path;
  })(BaseLayer);

  var GreatCircle = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(GreatCircle, _BaseLayer);

    var _super = _createSuper(GreatCircle);

    function GreatCircle(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, GreatCircle);

      return _super.call(this, map, baseLayerId, id, style, deck_gl.GreatCircleLayer);
    }

    _createClass(GreatCircle, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            lineHeight = _this$_style.lineHeight,
            lineWidth = _this$_style.lineWidth;
          return _objectSpread2$1(
            {
              getHeight: lineHeight,
              getStrokeWidth: lineWidth,
              getSourceColor: lineColor[0],
              getTargetColor: lineColor[1] || lineColor[0],
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return GreatCircle;
  })(BaseLayer);

  var Arc = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Arc, _BaseLayer);

    var _super = _createSuper(Arc);

    function Arc(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Arc);

      return _super.call(this, map, baseLayerId, id, style, layers$1.ArcLayer);
    }

    _createClass(Arc, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            lineHeight = _this$_style.lineHeight,
            lineWidth = _this$_style.lineWidth;
          var sourceColor = lineColor;
          var targetColor = lineColor;

          if (Array.isArray(lineColor)) {
            sourceColor = lineColor[0];
            targetColor = lineColor[1] || lineColor[0];
          }

          return _objectSpread2$1(
            _objectSpread2$1(
              _objectSpread2$1(
                _objectSpread2$1(
                  {
                    getHeight: lineHeight,
                  },
                  this.color(sourceColor, 'getSourceColor'),
                ),
                this.color(targetColor, 'getTargetColor'),
              ),
              this.size(lineWidth, 'getWidth'),
            ),
            {},
            {
              updateTriggers: {
                getTargetColor: targetColor,
                getSourceColor: sourceColor,
                getWidth: lineWidth,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Arc;
  })(BaseLayer);

  var Polygon = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Polygon, _BaseLayer);

    var _super = _createSuper(Polygon);

    function Polygon(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Polygon);

      return _super.call(this, map, baseLayerId, id, style, layers$1.PolygonLayer);
    }

    _createClass(Polygon, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            fenceHeight = _this$_style.fenceHeight,
            outlineColor = _this$_style.outlineColor,
            outlineWidth = _this$_style.outlineWidth,
            color = _this$_style.color;
          return _objectSpread2$1(
            _objectSpread2$1(
              _objectSpread2$1(
                _objectSpread2$1(
                  {
                    getLineColor: outlineColor,
                  },
                  this.size(fenceHeight, 'getElevation'),
                ),
                this.size(outlineWidth, 'getLineWidth'),
              ),
              this.color(color, 'getFillColor'),
            ),
            {},
            {
              updateTriggers: {
                getFillColor: color,
                getLineWidth: outlineWidth,
                getElevation: fenceHeight,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Polygon;
  })(BaseLayer);

  var getCircleRadius = function getCircleRadius(pointCount, colors, minRadius, maxRadius) {
    if (typeof pointCount !== 'number') {
      console.error('pointCount: type error');
    }

    if (!Array.isArray(colors)) {
      console.error('colors: type error');
    }

    var arr = [];
    var intervals = colors.length - 1; // 间隔

    var diff = (maxRadius - minRadius) / intervals;

    for (var i in colors) {
      arr.push(parseInt(minRadius + diff * i));

      if (i < intervals) {
        arr.push(parseInt((pointCount / intervals) * (+i + 1)));
      }
    }

    return arr;
  };

  var getCircleColor = function getCircleColor(pointCount, colors) {
    if (typeof pointCount !== 'number') {
      console.error('pointCount: type error');
    }

    if (!Array.isArray(colors)) {
      console.error('colors: type error');
    }

    var arr = [];
    var intervals = colors.length - 1; // 间隔

    for (var i in colors) {
      arr.push(colors[i]);

      if (i < intervals) {
        arr.push(parseInt((pointCount / intervals) * (+i + 1)));
      }
    }

    return arr;
  };

  var Cluster = /*#__PURE__*/ (function() {
    function Cluster(_ref) {
      var mapbox = _ref.mapbox,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Cluster);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1(
        {
          opacity: 1,
          maxZoom: 0,
          minZoom: 24,
          minRadius: 14,
          maxRadius: 100,
          textSize: 14,
          textColor: '#fff',
          textVisible: true,
          visible: true,
          clusterRadius: 50,
        },
        style,
      );
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */

    _createClass(Cluster, [
      {
        key: 'addData',
        value: function addData(data) {
          var _this = this;

          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          var _this$style = this.style,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            opacity = _this$style.opacity,
            colors = _this$style.colors,
            minRadius = _this$style.minRadius,
            maxRadius = _this$style.maxRadius,
            textSize = _this$style.textSize,
            textColor = _this$style.textColor,
            visible = _this$style.visible,
            textVisible = _this$style.textVisible,
            clusterRadius = _this$style.clusterRadius,
            dataLength = _this$style.dataLength;
          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.addSource(this.id, {
            type: 'geojson',
            // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
            // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
            data: {
              type: 'FeatureCollection',
              features: this.data,
            },
            cluster: true,
            clusterMaxZoom: 14,
            // Max zoom to cluster points on
            clusterRadius: clusterRadius, // Radius of each cluster when clustering points (defaults to 50)
          });
          this.map.addLayer({
            id: this.id + 'clusters',
            type: 'circle',
            source: this.id,
            filter: ['has', 'point_count'],
            minzoom: minZoom,
            maxzoom: maxZoom,
            paint: {
              'circle-opacity': opacity,
              // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
              // with three steps to implement three types of circles:
              //   * Blue, 20px circles when point count is less than 100
              //   * Yellow, 30px circles when point count is between 100 and 750
              //   * Pink, 40px circles when point count is greater than or equal to 750
              'circle-color': ['step', ['get', 'point_count']].concat(
                _toConsumableArray(getCircleColor(dataLength || this.data.length, colors)),
              ),
              'circle-radius': ['step', ['get', 'point_count']].concat(
                _toConsumableArray(
                  getCircleRadius(dataLength || this.data.length, colors, minRadius, maxRadius),
                ),
              ),
            },
            layout: {
              visibility: visible ? 'visible' : 'none',
            },
          });
          this.map.addLayer({
            id: this.id + 'cluster-count',
            type: 'symbol',
            source: this.id,
            filter: ['has', 'point_count'],
            minzoom: minZoom,
            maxzoom: maxZoom,
            paint: {
              'icon-opacity': opacity,
              'text-color': textColor,
            },
            layout: {
              'text-field': '{point_count_abbreviated}',
              'text-size': textSize,
              visibility: visible && textVisible ? 'visible' : 'none',
            },
          });
          this.map.addLayer({
            id: this.id + 'unclustered-point',
            type: 'circle',
            source: this.id,
            filter: ['!', ['has', 'point_count']],
            minzoom: minZoom,
            maxzoom: maxZoom,
            paint: {
              'circle-opacity': opacity,
              'circle-color': '#11b4da',
              'circle-radius': 4,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff',
            },
            layout: {
              visibility: visible ? 'visible' : 'none',
            },
          }); // inspect a cluster on click

          this.map.on('click', this.id + 'clusters', function(e) {
            var features = _this.map.queryRenderedFeatures(e.point, {
              layers: [_this.id + 'clusters'],
            });

            var clusterId = features[0].properties.cluster_id;

            _this.map.getSource(_this.id).getClusterExpansionZoom(clusterId, function(err, zoom) {
              if (err) return;

              _this.map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom,
              });
            });
          });
        },
        /**
         * 更新数据源
         * @param {*} data
         */
      },
      {
        key: 'updateData',
        value: function updateData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.getSource(this.id).setData({
            type: 'FeatureCollection',
            features: this.data,
          });
        },
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(props) {
          this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);
          this.map.setLayoutProperty(
            this.id + 'clusters',
            'visibility',
            this.style.visible ? 'visible' : 'none',
          );
          this.map.setLayoutProperty(
            this.id + 'cluster-count',
            'visibility',
            this.style.visible && this.style.textVisible ? 'visible' : 'none',
          );
          this.map.setLayoutProperty(
            this.id + 'unclustered-point',
            'visibility',
            this.style.visible ? 'visible' : 'none',
          );
          this.map.setLayerZoomRange(
            this.id + 'cluster-count',
            this.style.minZoom,
            this.style.maxZoom,
          );
          this.map.setLayerZoomRange(
            this.id + 'unclustered-point',
            this.style.minZoom,
            this.style.maxZoom,
          );
          this.map.setLayerZoomRange(this.id + 'clusters', this.style.minZoom, this.style.maxZoom);
          this.map.setPaintProperty(this.id + 'clusters', 'circle-opacity', this.style.opacity);
          this.map.setPaintProperty(this.id + 'cluster-count', 'icon-opacity', this.style.opacity);
          this.map.setPaintProperty(
            this.id + 'unclustered-point',
            'circle-opacity',
            this.style.opacity,
          );
          this.map.setLayoutProperty(this.id + 'cluster-count', 'text-size', this.style.textSize);
          this.map.setPaintProperty(this.id + 'cluster-count', 'text-color', this.style.textColor);

          if (typeof props.clusterRadius !== 'undefined') {
            this.removeLayer();
            this.addData({
              features: this.data,
              layerId: this.id,
            });
          }
        },
      },
      {
        key: 'removeLayer',
        value: function removeLayer() {
          if (this.map.getLayer(this.id + 'clusters')) {
            this.map.removeLayer(this.id + 'clusters');
          }

          if (this.map.getLayer(this.id + 'cluster-count')) {
            this.map.removeLayer(this.id + 'cluster-count');
          }

          if (this.map.getLayer(this.id + 'unclustered-point')) {
            this.map.removeLayer(this.id + 'unclustered-point');
          }

          this.map.getSource(this.id) && this.map.removeSource(this.id);
        },
      },
    ]);

    return Cluster;
  })();

  var isNumber$1 = function isNumber(value) {
    return !isNaN(+value);
  };

  var Grid = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Grid, _BaseLayer);

    var _super = _createSuper(Grid);

    function Grid(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Grid);

      return _super.call(this, map, baseLayerId, id, style, aggregationLayers.GridLayer);
    }

    _createClass(Grid, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            colors = _this$_style.colors,
            size = _this$_style.size,
            aggregation = _this$_style.aggregation,
            weight = _this$_style.weight;
          return _objectSpread2$1(
            {
              colorRange: colors,
              cellSize: size,
              getColorValue: function getColorValue(points) {
                if (aggregation === 'count') {
                  return points.length;
                }

                if (aggregation === 'sum') {
                  var res = points.reduce(function(sum, point) {
                    return sum + point.properties[weight];
                  }, 0);
                  return isNumber$1(res) ? res : points.length;
                }

                if (aggregation === 'mean') {
                  var _res =
                    points.reduce(function(sum, point) {
                      return sum + point.properties[weight];
                    }, 0) / points.length;

                  return isNumber$1(_res) ? _res : points.length;
                }
              },
              getElevationValue: function getElevationValue(points) {
                if (aggregation === 'count') {
                  return points.length;
                }

                if (aggregation === 'sum') {
                  var res = points.reduce(function(sum, point) {
                    return sum + point.properties[weight];
                  }, 0);
                  return isNumber$1(res) ? res : points.length;
                }

                if (aggregation === 'mean') {
                  var _res2 =
                    points.reduce(function(sum, point) {
                      return sum + point.properties[weight];
                    }, 0) / points.length;

                  return isNumber$1(_res2) ? _res2 : points.length;
                }
              },
              updateTriggers: {
                getColorValue: [aggregation, weight],
                getElevationValue: [aggregation, weight],
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Grid;
  })(BaseLayer);

  var isNumber = function isNumber(value) {
    return !isNaN(+value);
  };

  var Hexagon = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Hexagon, _BaseLayer);

    var _super = _createSuper(Hexagon);

    function Hexagon(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Hexagon);

      return _super.call(this, map, baseLayerId, id, style, aggregationLayers.HexagonLayer);
    }

    _createClass(Hexagon, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            colors = _this$_style.colors,
            radius = _this$_style.radius,
            aggregation = _this$_style.aggregation,
            weight = _this$_style.weight;
          return _objectSpread2$1(
            {
              radius: radius,
              colorRange: colors,
              getColorValue: function getColorValue(points) {
                if (aggregation === 'count') {
                  return points.length;
                }

                if (aggregation === 'sum') {
                  var res = points.reduce(function(sum, point) {
                    return sum + point.properties[weight];
                  }, 0);
                  return isNumber(res) ? res : points.length;
                }

                if (aggregation === 'mean') {
                  var _res =
                    points.reduce(function(sum, point) {
                      return sum + point.properties[weight];
                    }, 0) / points.length;

                  return isNumber(_res) ? _res : points.length;
                }
              },
              getElevationValue: function getElevationValue(points) {
                if (aggregation === 'count') {
                  return points.length;
                }

                if (aggregation === 'sum') {
                  var res = points.reduce(function(sum, point) {
                    return sum + point.properties[weight];
                  }, 0);
                  return isNumber(res) ? res : points.length;
                }

                if (aggregation === 'mean') {
                  var _res2 =
                    points.reduce(function(sum, point) {
                      return sum + point.properties[weight];
                    }, 0) / points.length;

                  return isNumber(_res2) ? _res2 : points.length;
                }
              },
              updateTriggers: {
                getColorValue: [aggregation, weight],
                getElevationValue: [aggregation, weight],
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Hexagon;
  })(BaseLayer);

  var Trips = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Trips, _BaseLayer);

    var _super = _createSuper(Trips);

    function Trips(_ref) {
      var _this;

      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Trips);

      _this = _super.call(this, map, baseLayerId, id, style, geoLayers.TripsLayer);
      _this.time = 0;
      _this.animation = {};
      _this.animate = _this.animate.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Trips, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            color = _this$_style.color,
            width = _this$_style.width;
          return _objectSpread2$1(
            _objectSpread2$1({}, this.color(color, 'getColor')),
            {},
            {
              getWidth: width,
              updateTriggers: {
                getColor: color,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
      {
        key: 'animate',
        value: function animate() {
          this.time = (this.time + this.style.animationSpeed) % this.style.loopLength;
          this.animation.id = window.requestAnimationFrame(this.animate);
          this.style = {
            currentTime: this.time,
          };
          this.update();
        },
        /**
         * 添加图层数据
         * @param {*} layer
         * @param {*} data
         */
      },
      {
        key: 'addData',
        value: function addData(data) {
          var dataArray = data.features || data;
          var loopLength = this.style.loopLength;

          if (Array.isArray(dataArray)) {
            dataArray = dataArray.map(function(line) {
              if (!line.geometry) {
                return line;
              } // 根据一次循环的时长计算默认时间戳

              var num = line.geometry.coordinates.length;
              var interval = loopLength / num;
              var timestamp = line.geometry.coordinates.map(function(item, index) {
                return index * interval;
              });
              return _objectSpread2$1(
                _objectSpread2$1({}, line),
                {},
                {
                  properties: _objectSpread2$1(
                    {
                      timestamp: timestamp,
                    },
                    line.properties,
                  ),
                },
              );
            });
          }

          data.features ? (data.features = dataArray) : (data = dataArray);

          _get(_getPrototypeOf(Trips.prototype), 'addData', this).call(this, data);

          if (this.animation.id) {
            window.cancelAnimationFrame(this.animation.id);
          }

          this.animation.id = window.requestAnimationFrame(this.animate);
        },
      },
      {
        key: 'destroy',
        value: function destroy() {
          window.cancelAnimationFrame(this.animation.id);
        },
      },
    ]);

    return Trips;
  })(BaseLayer);

  var Layer = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Layer, _BaseLayer);

    var _super = _createSuper(Layer);

    function Layer(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Layer);

      return _super.call(this, map, baseLayerId, id, style, layers$1.TextLayer);
    }

    _createClass(Layer, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            elevation = _this$_style.elevation,
            size = _this$_style.size,
            color = _this$_style.color,
            angle = _this$_style.angle,
            textAnchor = _this$_style.textAnchor,
            alignmentBaseline = _this$_style.alignmentBaseline,
            textField = _this$_style.textField,
            writingMode = _this$_style.writingMode;
          return _objectSpread2$1(
            _objectSpread2$1(
              {
                getSize: size,
                getText: function getText(d) {
                  var s = String(d.properties[textField] || '');

                  if (writingMode === 'vertical') {
                    s = s.replaceAll('', '\n');
                  }

                  return ' '.repeat(20) + s + ' '.repeat(20);
                },
                getPixelOffset: [0, -elevation],
                getTextAnchor: textAnchor,
                // 文本锚点
                getAlignmentBaseline: alignmentBaseline,
              },
              this.color(color, 'getColor'),
            ),
            {},
            {
              getAngle: angle,
              updateTriggers: {
                getColor: color,
                getText: [textField, writingMode],
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Layer;
  })(BaseLayer);

  var lengthenLine = /*#__PURE__*/ (function() {
    function lengthenLine(map) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 2000 : _ref$duration,
        _ref$outerColor = _ref.outerColor,
        outerColor = _ref$outerColor === void 0 ? [255, 255, 255] : _ref$outerColor,
        _ref$innerColor = _ref.innerColor,
        innerColor = _ref$innerColor === void 0 ? [255, 255, 255] : _ref$innerColor,
        _ref$direction = _ref.direction,
        direction = _ref$direction === void 0 ? 'top' : _ref$direction,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 1 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 100 : _ref$height,
        _ref$dash = _ref.dash,
        dash = _ref$dash === void 0 ? 0 : _ref$dash;

      _classCallCheck(this, lengthenLine);

      this.map = map;
      this.width = width;
      this.height = height;
      this.data = new Uint8Array(this.width * height * 4);
      this.outerColor = outerColor;
      this.innerColor = innerColor;
      this.duration = duration;
      this.direction = direction;
      this.dash = dash;
    }

    _createClass(lengthenLine, [
      {
        key: 'onAdd',
        value: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
          this.context.setLineDash([this.dash, this.dash]);
        },
      },
      {
        key: 'render',
        value: function render() {
          var duration = this.duration;
          var t = (performance.now() % duration) / duration;
          var start = this.direction === 'top' ? this.height : 0;
          var height = this.direction === 'top' ? (1 - t) * this.height : t * this.height;
          var context = this.context;
          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var gnt = context.createLinearGradient(0, this.height - 5, 0, 0);
          gnt.addColorStop(1, 'rgba('.concat(this.outerColor.join(','), ', 1)'));
          gnt.addColorStop(0, 'rgba('.concat(this.innerColor.join(','), ', 0.5)'));
          context.strokeStyle = gnt;
          context.moveTo(0, start);
          context.lineTo(0, height);
          context.lineWidth = this.width;
          context.stroke();
          context.crossOrigin = '';
          this.data = context.getImageData(0, 0, this.width, this.height).data;
          this.map.triggerRepaint();
          return true;
        },
      },
    ]);

    return lengthenLine;
  })();

  var risingLine = /*#__PURE__*/ (function() {
    function risingLine(map) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 2000 : _ref$duration,
        _ref$outerColor = _ref.outerColor,
        outerColor = _ref$outerColor === void 0 ? [255, 255, 255] : _ref$outerColor,
        _ref$innerColor = _ref.innerColor,
        innerColor = _ref$innerColor === void 0 ? [255, 255, 255] : _ref$innerColor,
        _ref$direction = _ref.direction,
        direction = _ref$direction === void 0 ? 'bottom' : _ref$direction,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 1 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 100 : _ref$height,
        _ref$dash = _ref.dash,
        dash = _ref$dash === void 0 ? 0 : _ref$dash;

      _classCallCheck(this, risingLine);

      this.map = map;
      this.width = width;
      this.height = height;
      this.data = new Uint8Array(this.width * height * 4);
      this.outerColor = outerColor;
      this.innerColor = innerColor;
      this.duration = duration;
      this.direction = direction;
      this.dash = dash;
    }

    _createClass(risingLine, [
      {
        key: 'onAdd',
        value: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
          this.context.setLineDash([this.dash, this.dash]);
        },
      },
      {
        key: 'render',
        value: function render() {
          var duration = this.duration;
          var t = (performance.now() % duration) / duration;
          var start = this.direction === 'bottom' ? this.height : 0;
          var height = this.direction === 'top' ? (1 - t) * this.height : t * this.height;
          var context = this.context;
          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var gnt = context.createLinearGradient(0, this.height - 5, 0, 0);
          gnt.addColorStop(1, 'rgba('.concat(this.outerColor.join(','), ', 1)'));
          gnt.addColorStop(0, 'rgba('.concat(this.innerColor.join(','), ', 0.5)'));
          context.strokeStyle = gnt;
          context.moveTo(0, start);
          context.lineTo(0, height);
          context.lineWidth = this.width;
          context.stroke();
          context.crossOrigin = '';
          this.data = context.getImageData(0, 0, this.width, this.height).data;
          this.map.triggerRepaint();
          return true;
        },
      },
    ]);

    return risingLine;
  })();

  var animationTypes = {
    shorten: risingLine,
    lengthen: lengthenLine,
  };

  var FlyingLine = /*#__PURE__*/ (function() {
    function FlyingLine(_ref) {
      var mapbox = _ref.mapbox,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, FlyingLine);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1(
        {
          opacity: 1,
          animationType: 'lengthen',
          maxZoom: 24,
          minZoom: 0,
          visible: true,
          overlap: false,
          dash: 0,
          color: [[255, 255, 255]],
          width: 1,
          height: 100,
          duration: 2000,
          altitude: 0,
        },
        style,
      );
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */

    _createClass(FlyingLine, [
      {
        key: 'addData',
        value: function addData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          var _this$style = this.style,
            opacity = _this$style.opacity,
            animationType = _this$style.animationType,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            visible = _this$style.visible,
            overlap = _this$style.overlap,
            dash = _this$style.dash,
            color = _this$style.color,
            width = _this$style.width,
            height = _this$style.height,
            duration = _this$style.duration,
            altitude = _this$style.altitude;
          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.addImage(
            this.id,
            new animationTypes[animationType](this.map, {
              outerColor: color[0],
              innerColor: color[1] || color[0],
              dash: dash,
              width: width,
              height: height,
              duration: duration,
            }),
            {
              pixelRatio: 2,
            },
          );
          this.map.addLayer({
            id: this.id,
            type: 'symbol',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: this.data,
              },
            },
            minzoom: minZoom,
            maxzoom: maxZoom,
            paint: {
              'icon-opacity': opacity,
            },
            layout: {
              'icon-image': this.id,
              'icon-size': 4,
              'icon-anchor': 'bottom',
              visibility: visible ? 'visible' : 'none',
              'icon-offset': [0, -altitude],
              'icon-allow-overlap': overlap,
            },
          });
        },
        /**
         * 更新数据源
         * @param {*} data
         */
      },
      {
        key: 'updateData',
        value: function updateData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.getSource(this.id).setData({
            type: 'FeatureCollection',
            features: this.data,
          });
        },
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(props) {
          this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

          if (props.visible === 1) {
            this.map.setLayoutProperty(this.id, 'visibility', 'visible');
          }

          if (props.visible === 0) {
            this.map.setLayoutProperty(this.id, 'visibility', 'none');
          }

          if (typeof props.altitude !== 'undefined') {
            this.map.setLayoutProperty(this.id, 'icon-offset', [0, -props.altitude]);
          }

          if (typeof props.overlap === 'boolean') {
            this.map.setLayoutProperty(this.id, 'icon-allow-overlap', props.overlap);
          }

          this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
          this.map.setPaintProperty(this.id, 'icon-opacity', this.style.opacity);

          if (
            props.animationType ||
            props.color ||
            props.dash ||
            props.width ||
            props.height ||
            props.duration
          ) {
            this.map.removeImage(this.id);
            this.map.addImage(
              this.id,
              new animationTypes[this.style.animationType](
                this.map,
                _objectSpread2$1(
                  _objectSpread2$1({}, this.style),
                  {},
                  {
                    outerColor: this.style.color[0],
                    innerColor: this.style.color[1] || this.style.color[0],
                  },
                ),
              ),
              {
                pixelRatio: 2,
              },
            );
          }
        },
      },
      {
        key: 'removeLayer',
        value: function removeLayer() {
          this.map.hasImage(this.id) && this.map.removeImage(this.id);
          this.map.getSource(this.id) && this.map.removeSource(this.id);
        },
      },
    ]);

    return FlyingLine;
  })();

  function breathing(_ref) {
    var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 36 : _ref$size,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 3000 : _ref$duration,
      _ref$sizeScale = _ref.sizeScale,
      sizeScale = _ref$sizeScale === void 0 ? 1 : _ref$sizeScale,
      image = _ref.image;
    var that = this;

    var _size = parseInt(sizeScale * size * 2);

    return {
      width: _size,
      height: _size,
      data: new Uint8Array(_size * _size * 4),
      onAdd: function onAdd() {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },
      render: function render() {
        var _this = this;

        var t = (performance.now() % duration) / duration;

        if (t > 0.5) {
          t = 1 - t;
        }

        t = t * 2;
        var iamgeObject = new Image();
        iamgeObject.src = image;
        var imageHeight = this.height * t;
        var imageWidth = this.width * t;
        var x = this.width / 2 - imageWidth / 2;
        var y = this.height / 2 - imageHeight / 2;

        iamgeObject.onload = function() {
          _this.context.clearRect(0, 0, _this.width, _this.height);

          _this.context.drawImage(iamgeObject, x, y, imageWidth, imageHeight);
        }; // update this image's data with data from the canvas

        this.data = this.context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

        that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

        return true;
      },
    };
  }

  var AnimationIcon = /*#__PURE__*/ (function() {
    function AnimationIcon(_ref) {
      var mapbox = _ref.mapbox,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, AnimationIcon);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1(
        {
          opacity: 1,
          pitchAlignment: 'viewport',
          overlap: false,
          maxZoom: 24,
          minZoom: 0,
          visible: true,
          duration: 2000,
          altitude: 0,
          sizeScale: 1,
          image: '',
        },
        style,
      );
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */

    _createClass(AnimationIcon, [
      {
        key: 'addData',
        value: function addData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          var _this$style = this.style,
            opacity = _this$style.opacity,
            pitchAlignment = _this$style.pitchAlignment,
            overlap = _this$style.overlap,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            visible = _this$style.visible,
            duration = _this$style.duration,
            altitude = _this$style.altitude,
            sizeScale = _this$style.sizeScale,
            image = _this$style.image;
          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.addImage(
            this.id,
            breathing.bind(this)({
              duration: duration,
              sizeScale: sizeScale,
              image: image,
            }),
            {
              pixelRatio: 2,
            },
          );
          this.map.addLayer({
            id: this.id,
            type: 'symbol',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: this.data,
              },
            },
            minzoom: minZoom,
            maxzoom: maxZoom,
            paint: {
              'icon-opacity': opacity,
            },
            layout: {
              'icon-image': this.id,
              'icon-pitch-alignment': pitchAlignment,
              'icon-allow-overlap': overlap,
              visibility: visible ? 'visible' : 'none',
              'icon-offset': [0, -altitude],
            },
          });
        },
        /**
         * 更新数据源
         * @param {*} data
         */
      },
      {
        key: 'updateData',
        value: function updateData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
          this.map.getSource(this.id).setData({
            type: 'FeatureCollection',
            features: this.data,
          });
        },
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(props) {
          this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

          if (props.visible === 1) {
            this.map.setLayoutProperty(this.id, 'visibility', 'visible');
          }

          if (props.visible === 0) {
            this.map.setLayoutProperty(this.id, 'visibility', 'none');
          }

          if (props.pitchAlignment) {
            this.map.setLayoutProperty(this.id, 'icon-pitch-alignment', this.style.pitchAlignment);
          }

          if (typeof props.overlap === 'boolean') {
            this.map.setLayoutProperty(this.id, 'icon-allow-overlap', this.style.overlap);
          }

          this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
          this.map.setPaintProperty(this.id, 'icon-opacity', this.style.opacity);

          if (props.duration || props.altitude || props.sizeScale || props.image) {
            this.map.removeImage(this.id);
            this.map.addImage(this.id, breathing.bind(this)(_objectSpread2$1({}, this.style)), {
              pixelRatio: 2,
            });
          }
        },
      },
      {
        key: 'removeLayer',
        value: function removeLayer() {
          this.map.hasImage(this.id) && this.map.removeImage(this.id);
          this.map.getSource(this.id) && this.map.removeSource(this.id);
        },
      },
    ]);

    return AnimationIcon;
  })();

  var Scenegraph = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Scenegraph, _BaseLayer);

    var _super = _createSuper(Scenegraph);

    function Scenegraph(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Scenegraph);

      return _super.call(this, map, baseLayerId, id, style, meshLayers.ScenegraphLayer);
    }

    _createClass(Scenegraph, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            color = _this$_style.color,
            altitude = _this$_style.altitude,
            url = _this$_style.url,
            speed = _this$_style.speed,
            playing = _this$_style.playing;
          return _objectSpread2$1(
            _objectSpread2$1(
              _objectSpread2$1(
                {
                  _lighting: 'pbr',
                  getOrientation: [0, 0, 90],
                },
                this._style,
              ),
              this.color(color, 'getColor'),
            ),
            {},
            {
              scenegraph: url,
              _animations: {
                '*': {
                  speed: speed,
                  playing: playing,
                },
              },
              getTranslation: [0, 0, altitude],
              updateTriggers: {
                getColor: color,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Scenegraph;
  })(BaseLayer);

  var styles = {
    normal: 'styles_normal__KeKOE',
    titleBox: 'styles_titleBox__NWxNf',
    leftBorder: 'styles_leftBorder__aTM8w',
    lineBox: 'styles_lineBox__jbZoq',
  };

  /**
   *  正则添加千位分隔符
   * @param {数值} num
   * @returns
   */

  function numFormatRegExp(num) {
    var res = num.toString().replace(/\d+/, function(n) {
      // 先提取整数部分
      return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
        return $1 + ',';
      });
    });
    return res;
  }
  /**
   * @param {*} node 包裹标签的html对象
   * @param {*} mapStyle 自定义标签样式
   * @returns
   */

  function labelTextLayer(node, mapStyle) {
    var sizeScale = mapStyle.sizeScale,
      backgroundStyle = mapStyle.backgroundStyle,
      borderStyle = mapStyle.borderStyle,
      textStyle = mapStyle.textStyle,
      numberStyle = mapStyle.numberStyle,
      unitStyle = mapStyle.unitStyle,
      tractionLineStyle = mapStyle.tractionLineStyle,
      fieldLabel = mapStyle.fieldLabel,
      fieldVlaue = mapStyle.fieldVlaue;

    function labelDom() {
      var _borderStyle$boxShado;

      // ------------- 标签头部文字设置 start -------------
      var titleStyle = {
        background: backgroundStyle.status
          ? backgroundStyle.type1Default.gradientStatus
            ? '-webkit-linear-gradient('
                .concat(backgroundStyle.type1Default.gradientDirection, 'deg,')
                .concat(backgroundStyle.type1Default.gradientColor1, ', ')
                .concat(backgroundStyle.type1Default.gradientColor2, ')')
            : backgroundStyle.type1Default.defaultColor
          : 'transparent',
        borderColor: borderStyle.borderColor,
        borderWidth: borderStyle.status ? borderStyle.borderWidth + 'px' : '1px',
        boxShadow:
          (_borderStyle$boxShado = borderStyle.boxShadow) !== null &&
          _borderStyle$boxShado !== void 0 &&
          _borderStyle$boxShado.status
            ? ''
                .concat(borderStyle.boxShadow.xShadow, 'px ')
                .concat(borderStyle.boxShadow.yShadow, 'px ')
                .concat(borderStyle.boxShadow.blur, 'px ')
                .concat(borderStyle.boxShadow.color)
            : 'none',
        borderRadius: ''.concat(borderStyle.borderRadius, 'px'),
      };

      var feildNameStyle = _objectSpread2$1(
        _objectSpread2$1({}, textStyle.defaultStyle),
        {},
        {
          marginLeft: textStyle.marginObj.marginLeft + 'px',
          marginRight: textStyle.marginObj.marginRight + 'px',
          marginTop: textStyle.marginObj.marginTop + 'px',
          marginBottom: textStyle.marginObj.marginBottom + 'px',
          fontSize: textStyle.defaultStyle.fontSize + 'px',
        },
      );

      var feildValueStyle = _objectSpread2$1(
        _objectSpread2$1({}, numberStyle.defaultStyle),
        {},
        {
          marginLeft: numberStyle.marginObj.marginLeft + 'px',
          marginRight: numberStyle.marginObj.marginRight + 'px',
          marginTop: numberStyle.marginObj.marginTop + 'px',
          marginBottom: numberStyle.marginObj.marginBottom + 'px',
          fontSize: numberStyle.defaultStyle.fontSize + 'px',
        },
      );

      var feildUnitStyle = _objectSpread2$1(
        _objectSpread2$1({}, unitStyle.defaultStyle),
        {},
        {
          marginLeft: unitStyle.marginObj.marginLeft + 'px',
          marginRight: unitStyle.marginObj.marginRight + 'px',
          marginTop: unitStyle.marginObj.marginTop + 'px',
          marginBottom: unitStyle.marginObj.marginBottom + 'px',
          fontSize: unitStyle.defaultStyle.fontSize + 'px',
        },
      ); // ------------- 标签头部文字设置 end -------------
      // ------------- 牵引线设置 start -------------

      var lineStyle = {
        background:
          tractionLineStyle.lineStyle === 'solid'
            ? tractionLineStyle.lineColor
            : tractionLineStyle.lineStyle === 'gradient'
            ? 'linear-gradient(top,'.concat(tractionLineStyle.lineColor, ', rgba(0, 0, 0, 0))')
            : 'linear-gradient(top,'.concat(
                tractionLineStyle.lineColor,
                ' 50%, rgba(0, 0, 0, 0) 50%)',
              ),
        width: tractionLineStyle.lineWidth + 'px',
        height: (tractionLineStyle.lineHeight || 12) * 2 + 'px',
      };
      var leftBorderStyle = {
        display: 'initial',
        width: tractionLineStyle.lineWidth + 'px',
        background: tractionLineStyle.lineColor,
        borderLeftColor: tractionLineStyle.lineColor,
        marginTop: '-'.concat(titleStyle.borderWidth, 'px'),
        height: 'calc(100% + '.concat((titleStyle.borderWidth || 1) * 2, 'px)'),
      };

      if (tractionLineStyle.lineStyle === 'dotted') {
        lineStyle.backgroundSize = '100% 20px';
      } // 不需要显隐牵引线
      // if (!tractionLineStyle.status) {
      //   lineStyle.display = 'none';
      // }

      if (tractionLineStyle.location !== 'center') {
        titleStyle.transform = 'translate(50%, -100%)';
        titleStyle.borderLeft = 0 + 'px';
        titleStyle.borderTopLeftRadius = 0 + 'px';
        titleStyle.borderBottomLeftRadius = 0 + 'px';
      } // ------------- 牵引线设置 end -------------
      // -------------- 判断数据是否为number

      var dataNum = fieldVlaue;

      if (Number(dataNum) && numberStyle.numSeparator) {
        dataNum = numFormatRegExp(dataNum);
      } // ------------- normal样式

      var normalStyle = {
        height: (tractionLineStyle.lineHeight || 12) * 2 + 'px',
        transform: 'translate(0, -50%) scale('.concat(sizeScale, ')'),
      };
      return '\n      <div class='
        .concat(styles.normal, " style='")
        .concat(styleToCss__default['default'](normalStyle), "'>\n        <div class=")
        .concat(styles.titleBox, " style='")
        .concat(styleToCss__default['default'](titleStyle), "'>\n          <div\n          class=")
        .concat(styles.leftBorder, "\n            style='")
        .concat(
          tractionLineStyle.location !== 'center'
            ? styleToCss__default['default'](leftBorderStyle)
            : '',
          "\n            '></div>\n          <span style='",
        )
        .concat(styleToCss__default['default'](feildNameStyle), "'>")
        .concat(fieldLabel, "</span>\n          <span style='")
        .concat(styleToCss__default['default'](feildValueStyle), "'>")
        .concat(dataNum, "</span>\n          <span style='")
        .concat(unitStyle.unit ? styleToCss__default['default'](feildUnitStyle) : '', "'>")
        .concat(unitStyle.unit, '</span>\n        </div>\n        <div class=')
        .concat(styles.lineBox, " style='")
        .concat(styleToCss__default['default'](lineStyle), "'></div>\n      </div>\n    ");
    }

    if (node) {
      node.innerHTML = labelDom();
    }
  }

  var Marker = /*#__PURE__*/ (function() {
    function Marker(_ref) {
      var _objectSpread2;

      var mapbox = _ref.mapbox,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Marker);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1(
        ((_objectSpread2 = {
          opacity: 1,
          maxZoom: 24,
          minZoom: 0,
          visible: true,
          visible_zoom: true,
          altitude: 0,
          sizeScale: 1,
        }),
        _defineProperty(_objectSpread2, 'sizeScale', 1),
        _defineProperty(_objectSpread2, 'backgroundStyle', {}),
        _defineProperty(_objectSpread2, 'borderStyle', {}),
        _defineProperty(_objectSpread2, 'textStyle', {}),
        _defineProperty(_objectSpread2, 'numberStyle', {}),
        _defineProperty(_objectSpread2, 'unitStyle', {}),
        _defineProperty(_objectSpread2, 'tractionLineStyle', {}),
        _defineProperty(_objectSpread2, 'fieldLabel', '名称'),
        _defineProperty(_objectSpread2, 'fieldKey', 'name'),
        _objectSpread2),
        style,
      );
      this.markers = [];
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */

    _createClass(Marker, [
      {
        key: 'addData',
        value: function addData(data) {
          var _this$data,
            _this = this;

          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          var zoom = this.map.getZoom();

          if (zoom > this.style.maxZoom || zoom < this.style.minZoom) {
            this.style.visible_zoom = false;
          } else {
            this.style.visible_zoom = true;
          }

          var _this$style = this.style;
          _this$style.opacity;
          _this$style.maxZoom;
          _this$style.minZoom;
          var visible = _this$style.visible,
            visible_zoom = _this$style.visible_zoom,
            altitude = _this$style.altitude,
            sizeScale = _this$style.sizeScale,
            backgroundStyle = _this$style.backgroundStyle,
            borderStyle = _this$style.borderStyle,
            textStyle = _this$style.textStyle,
            numberStyle = _this$style.numberStyle,
            unitStyle = _this$style.unitStyle,
            tractionLineStyle = _this$style.tractionLineStyle,
            fieldLabel = _this$style.fieldLabel,
            fieldKey = _this$style.fieldKey;
          this.data = (data === null || data === void 0 ? void 0 : data.features) || data; // eslint-disable-next-line no-unused-expressions

          (_this$data = this.data) === null || _this$data === void 0
            ? void 0
            : _this$data.forEach(function(item, index) {
                var domID = ''.concat(_this.id, '_').concat(index);
                var dom = document.createElement('div');
                dom.id = domID;
                dom.style.background = 'transparent';
                var marker = new mapboxgl__default['default'].Marker({
                  element: dom,
                  offset: [0, -altitude],
                })
                  .setLngLat(item.geometry.coordinates)
                  .addTo(_this.map);
                labelTextLayer(document.getElementById(domID), {
                  sizeScale: sizeScale,
                  backgroundStyle: backgroundStyle,
                  borderStyle: borderStyle,
                  textStyle: textStyle,
                  numberStyle: numberStyle,
                  unitStyle: unitStyle,
                  tractionLineStyle: tractionLineStyle,
                  fieldLabel: fieldLabel,
                  fieldVlaue: item.properties[fieldKey],
                });
                marker._element.style.display = visible && visible_zoom ? 'block' : 'none';

                _this.markers.push(marker);
              });
        },
        /**
         * 更新数据源
         * @param {*} data
         */
      },
      {
        key: 'updateData',
        value: function updateData(data) {
          if (data.layerId !== this.id) {
            console.warn('当前图层id与数据图层id不匹配');
            return;
          }

          this.removeLayer();
          this.addData(this.data);
        },
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(props) {
          var _this2 = this;

          this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

          if (typeof props.visible !== 'undefined' || typeof props.visible_zoom !== 'undefined') {
            this.markers.forEach(function(item) {
              item._element.style.display =
                _this2.style.visible && _this2.style.visible_zoom ? 'block' : 'none';
            });
          }

          if (typeof props.altitude !== 'undefined') {
            this.markers.forEach(function(item) {
              item.setOffset([0, -props.altitude]);
            });
          }

          if (typeof props.maxZoom !== 'undefined' || typeof props.minZoom !== 'undefined') {
            var zoom = this.map.getZoom();

            if (zoom > this.style.maxZoom || zoom < this.style.minZoom) {
              this.style.visible_zoom = false;
            } else {
              this.style.visible_zoom = true;
            }

            this.markers.forEach(function(item) {
              item._element.style.display =
                _this2.style.visible && _this2.style.visible_zoom ? 'block' : 'none';
            });
          }

          if (
            props.sizeScale ||
            props.backgroundStyle ||
            props.borderStyle ||
            props.textStyle ||
            props.numberStyle ||
            props.unitStyle ||
            props.tractionLineStyle ||
            props.fieldLabel ||
            props.fieldKey
          ) {
            this.removeLayer();
            this.addData(this.data);
          }
        },
      },
      {
        key: 'setVisibleByZoom',
        value: function setVisibleByZoom(zoom) {
          var _this$style2 = this.style,
            maxZoom = _this$style2.maxZoom,
            minZoom = _this$style2.minZoom;

          if (zoom > maxZoom || zoom < minZoom) {
            this.updateLayerProp({
              visible_zoom: false,
            });
          } else {
            this.updateLayerProp({
              visible_zoom: true,
            });
          }
        },
      },
      {
        key: 'removeLayer',
        value: function removeLayer() {
          this.markers.forEach(function(item) {
            item.remove();
          });
          this.markers = [];
        },
      },
    ]);

    return Marker;
  })();

  var Line = /*#__PURE__*/ (function(_BaseLayer) {
    _inherits(Line, _BaseLayer);

    var _super = _createSuper(Line);

    function Line(_ref) {
      var map = _ref.map,
        baseLayerId = _ref.baseLayerId,
        id = _ref.id,
        style = _ref.style;

      _classCallCheck(this, Line);

      return _super.call(this, map, baseLayerId, id, style, layers$1.LineLayer);
    }

    _createClass(Line, [
      {
        key: 'style',
        get: function get() {
          var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            lineWidth = _this$_style.lineWidth;
          return _objectSpread2$1(
            _objectSpread2$1(
              _objectSpread2$1({}, this.color(lineColor, 'getColor')),
              this.size(lineWidth, 'getWidth'),
            ),
            {},
            {
              updateTriggers: {
                getColor: lineColor,
                getWidth: lineWidth,
              },
            },
            this._style,
          );
        },
        set: function set(value) {
          this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
        },
      },
    ]);

    return Line;
  })(BaseLayer);

  var layers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Scatterplot: Scatterplot,
    Icon: Icon,
    Heartbeat: Heartbeat,
    Heatmap: Heatmap,
    Path: Path,
    GreatCircle: GreatCircle,
    Arc: Arc,
    Polygon: Polygon,
    Cluster: Cluster,
    Grid: Grid,
    Hexagon: Hexagon,
    Trips: Trips,
    Text: Layer,
    FlyingLine: FlyingLine,
    AnimationIcon: AnimationIcon,
    Scenegraph: Scenegraph,
    Marker: Marker,
    Line: Line,
  });

  var _LayerEnum;

  var LayerEnum =
    ((_LayerEnum = {}),
    _defineProperty(_LayerEnum, LayerType.PointLayer, 'Scatterplot'),
    _defineProperty(_LayerEnum, LayerType.IconLayer, 'Icon'),
    _defineProperty(_LayerEnum, LayerType.RadiationLayer, 'Heartbeat'),
    _defineProperty(_LayerEnum, LayerType.ClusterLayer, 'Cluster'),
    _defineProperty(_LayerEnum, LayerType.GridLayer, 'Grid'),
    _defineProperty(_LayerEnum, LayerType.HexagonLayer, 'Hexagon'),
    _defineProperty(_LayerEnum, LayerType.RTTrackLayer, 'Trips'),
    _defineProperty(_LayerEnum, LayerType.HeatMapLayer, 'Heatmap'),
    _defineProperty(_LayerEnum, LayerType.Arc, 'Arc'),
    _defineProperty(_LayerEnum, LayerType.GreatCircle, 'GreatCircle'),
    _defineProperty(_LayerEnum, LayerType.PolyLineLayer, 'Path'),
    _defineProperty(_LayerEnum, LayerType.PolygonLayer, 'Polygon'),
    _defineProperty(_LayerEnum, LayerType.Text, 'Text'),
    _defineProperty(_LayerEnum, LayerType.FlyingLine, 'FlyingLine'),
    _defineProperty(_LayerEnum, LayerType.AnimationIcon, 'AnimationIcon'),
    _defineProperty(_LayerEnum, LayerType.ModelSymbolLayer, 'Scenegraph'),
    _defineProperty(_LayerEnum, LayerType.Marker, 'Marker'),
    _defineProperty(_LayerEnum, LayerType.Line, 'Line'),
    _LayerEnum);
  /**
   * @class
   * @classdesc DccLayers:
   * 二三维场景图层接口，用于获取图层信息，对图层进行配置和管理
   * @constructor
   * @param {DCCEngine} engine 关联的渲染引擎对象
   * @returns {DccLayers} 返回DccLayers对象
   **/

  var MapLayers = /*#__PURE__*/ (function(_DccLayers) {
    _inherits(MapLayers, _DccLayers);

    var _super = _createSuper(MapLayers);

    function MapLayers(engine) {
      var _this;

      _classCallCheck(this, MapLayers);

      _this = _super.call(this, engine);
      _this.engine = engine;
      _this.layers = {};
      return _this;
    }
    /**
     * 查询场景中所有的图层
     * @method
     * @param {LayersQueryMode} queryMode ：查询方式，详细参考：LayersQueryMode
     * @param {Array} labels ：图层标签过滤条件，通过标签对查询结果进行过滤，只有具备特定标签的图层才被返回；labels默认为[]，此时标签过滤失效，将依据其他查询条件返回所有满足要求的图层。
     * @param {function} fn ：回调函数，返回是否成功和图层信息，包括图层名称、图层类型、可见、可拾取、可悬停触发和图层标签，返回信息结构如下：
     * {
     *   result:_SUCCESS,
     *   command:Layers_QueryLayers,
     *   layers:[
     *     {layerName:'road',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base','主干道']},
     *     {layerName:'water',layerType:1000,visible:0,pickable=0,hoverable=0,cacheable:0,labels:['base']},
     *     {layerName:'building',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base']},
     *   ]
     * }
     * @example
     * dc.layers.queryLayers(
     *     (e)=>{
     *        if(e.result==_SUCCESS)
     *        {
     *           //输出图层名称及其他属性
     *           console.table(layers);
     *        }
     *     }
     *  );
     **/

    _createClass(MapLayers, [
      {
        key: 'queryLayers',
        value: function queryLayers() {
          var queryMode =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : LayersQueryMode.AllLayers;
          var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          this.engine.excute(
            CommandType.Layers_QueryLayers,
            {
              queryMode: queryMode,
              labels: labels,
            },
            fn,
          );
        },
        /**
         * 在场景中添加新的图层
         * @method
         * @param {LayerType} layerType ： 图层类型
         * @param {string} layerName ：    图层名称
         * @param {json} layerProp ：      图层属性,包含图层显示风格、可见比例尺,过滤器和超链接等等
         * @param {string} datasource ：   图层数据,指向GeoJSON格式数据源文件或DoSpace空间数据查询下载服务地址,如：d:\data\station.json
         * @param {DataSourceType} dsType：添加的数据格式,参考DataSourceType
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_AddLayer,
         *   result:_SUCCESS,
         *   layerType:1001,
         *   layerName:'layer1'，
         * }
         * @example
         * import {LayerType,LineType,LineStyle,PolygonType,FillStyle,RadiationStyle,HighlightStyle,RTTargetType,} from "./common/DccObjects"
         * import {createLayerProp} from "./common/DccObjects"
         * import {UniqueStyleMapping} from "./common/StyleMapping"
         *
         * const layerProp=createLayerProp(LayerType.PointLayer);  //创建点图层属性表
         * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
         * usm.addMappingItem('1',[5,5]);        //添加单值映射项
         * usm.addMappingItem('2',[10,10]);
         * usm.addMappingItem('3',[20,20]);
         * layerProp.size=usm.toJson();          //设置size的样式映射
         *
         * dc.layers.addLayer(LayerType.PointLayer,'layer1',
         *                     'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',  //查询周边加油站
         *                     layerProp,
         *                     (e)=>{
         *                       if(e.result==_SUCCESS)
         *                       {
         *                           console.log('图层\"${e.layerName}\"添加成功!');
         *                       }
         *                     }
         *   );
         **/
      },
      {
        key: 'addLayer',
        value: function addLayer(layerType, layerName, LayerProp, datasource) {
          var dsType =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : DataSourceType.GeoJSON;
          var fn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

          //具体实现方法
          if (LayerEnum[layerType]) {
            if (
              ![
                'Heartbeat',
                'Cluster',
                'FlyingLine',
                'AnimationIcon',
                'marker',
                'Heatmap',
              ].includes(LayerEnum[layerType])
            ) {
              this.engine.map.addLayer(
                new mapbox.MapboxLayer({
                  id: layerName,
                  deck: this.engine.deck,
                }),
              );
            } // 添加图层

            var layer = new layers[LayerEnum[layerType]]({
              mapbox: this.engine.map,
              map: this.engine.deck,
              id: layerName,
              style: _objectSpread2$1(
                _objectSpread2$1({}, layerConf[LayerEnum[layerType]]),
                LayerProp,
              ),
            }); // 维护一个已添加图层数据

            this.layers[layer.id] = layer;
            var features =
              (datasource === null || datasource === void 0 ? void 0 : datasource.features) ||
              datasource; // 添加数据

            if (Array.isArray(features)) {
              // 处理多点 多面 多线
              
              if (!datasource.noMulti) {
                var Multis = features.filter(function(item) {
                  var _item$geometry;

                  return (_item$geometry = item.geometry) === null || _item$geometry === void 0
                    ? void 0
                    : _item$geometry.type.startsWith('Multi');
                });
                features = features.filter(function(item) {
                  var _item$geometry2;

                  return !(
                    (_item$geometry2 = item.geometry) !== null &&
                    _item$geometry2 !== void 0 &&
                    _item$geometry2.type.startsWith('Multi')
                  );
                });
                console.log(Multis, '--Multis--');
                Multis.forEach(function(item) {
                  var res = item.geometry.coordinates.map(function(coordinate) {
                    return _objectSpread2$1(
                      _objectSpread2$1({}, item),
                      {},
                      {
                        geometry: {
                          type: item.geometry.type.replace('Multi', ''),
                          coordinates: coordinate,
                        },
                      },
                    );
                  });
                  features = features.concat(res);
                });
                
              }

              features.layerId = layerName;
              layer.addData(features);
            } else {
              console.error('数据格式有误请传入 geojson 数据', this.data);
            }
          }

          this.engine.excute(
            CommandType.Layers_AddLayer,
            {
              layerType: layerType,
              layerName: layerName,
              dsType: dsType,
              datasource: datasource,
              LayerProp: LayerProp,
            },
            fn,
          );
        },
        /**
         * 更新场景中指定图层的样式属性，支持整体更新和局部更新
         * @method
         * @param {string} layerName ：    图层名称
         * @param {json} layerProp ：    图层属性，包含图层显示风格、可见比例尺，过滤器和超链接等等
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerProp,
         *   result:_SUCCESS,
         *   layerType:1001,
         *   layerName:'layer1'，
         * }
         * @example
         * import {createLayerProp} from "./common/DccObjects"
         * import {UniqueStyleMapping} from "./common/StyleMapping"
         *
         * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
         * usm.addMappingItem('1',[5,5]);        //添加单值映射项
         * usm.addMappingItem('2',[10,10]);
         * usm.addMappingItem('3',[20,20]);
         *
         * //修改图层的size属性
         * dc.layers.updateLayerProp('layer1',{size:usm.toJson()},
         *      (e)=>{
         *         if(e.result==_SUCCESS)
         *         {
         *             console.log('图层\"${e.layerName}\"更新属性成功!');
         *         }
         *       }
         *   );
         **/
      },
      {
        key: 'updateLayerProp',
        value: function updateLayerProp(layerName, LayerProp, fn) {
          if (!this.layers[layerName]) {
            console.error('图层不存在');
            return;
          }

          this.layers[layerName].updateLayerProp(LayerProp);
          this.engine.excute(
            CommandType.Layers_UpdateLayerProp,
            {
              layerName: layerName,
              LayerProp: LayerProp,
            },
            fn,
          );
        },
        /**
         * 查询场景中图层对应的数据源
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerDatasource,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   dataSource:'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation'
         * }
         * @example
         * dc.layers.queryLayerDatasource('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的数据源是\"${e.dataSource}\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerDatasource',
        value: function queryLayerDatasource(layerName, fn) {
          this.engine.excute(
            CommandType.Layers_QueryLayerDatasource,
            {
              layerName: layerName,
            },
            fn,
          );
        },
        /**
         * 修改场景中图层对应的数据源
         * @method
         * @param {string} layerName ：    图层名称
         * @param {string} datasource ：   要重新连接到图层的数据源
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerDatasource,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * dc.layers.updateLayerDatasource('layer1','http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"更新数据源成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerDatasource',
        value: function updateLayerDatasource(layerName, datasource, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerDatasource,
            {
              layerName: layerName,
              datasource: datasource,
            },
            fn,
          );
        },
        /**
         * 查询图层基本设置
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerSetting,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   visible:1,
         *   pickable:0,
         *   hoverable:0,
         *   cacheable:0,
         * }
         * @example
         * dc.layers.queryLayerSetting('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的设置是\"visible ：${e.visible} pickable ${e.pickable} hoverable：${e.hoverable} | cacheable ：${e.cacheable} |\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerSetting',
        value: function queryLayerSetting(fn) {
          this.engine.excute(CommandType.Layers_QueryLayerSetting, {}, fn);
        },
        /**
         * 修改场景中图层基本设置
         * @method
         * @param {string} layerName ：    图层名称
         * @param {json} layerSetting ：   图层配置信息
         * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerSetting,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * import {defaultLayerSetting} from "./DccGlobal"
         *
         * const lyrSetting=defaultLayerSetting;
         * lyrSetting.visible=false;
         * dc.layers.updateLayerSetting('layer1',lyrSetting,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('修改图层\"${e.layerName}\"基本设置成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerSetting',
        value: function updateLayerSetting(layerName, LayerSetting, fn) {
          if (!this.layers[layerName]) {
            console.error('图层不存在');
            return;
          }

          this.layers[layerName].updateLayerProp(LayerSetting);
          this.engine.excute(
            CommandType.Layers_UpdateLayerSetting,
            {
              layerName: layerName,
              LayerSetting: LayerSetting,
            },
            fn,
          );
        },
        /**
         * 查询场景中图层的标签
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和结果数据，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerLabels,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   labels:['beijing','traffic']
         * }
         * @example
         * dc.layers.queryLayerLabels('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的标签是\"${e.labels}\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerLabels',
        value: function queryLayerLabels(fn) {
          this.engine.excute(CommandType.Layers_QueryLayerLabels, {}, fn);
        },
        /**
         * 修改图层标签
         * @method
         * @param {string} layerName ：  图层名称
         * @param {Array}  labels ：     图层标签
         * @param {function} fn ：       回调函数，返回是否成功和操作图层信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerLabels,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * dc.layers.updateLayerLabels('layer1',['beijing','traffic'],
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('修改图层\"${e.layerName}\"标签成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerLabels',
        value: function updateLayerLabels(layerName, labels, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerLabels,
            {
              layerName: layerName,
              labels: labels,
            },
            fn,
          );
        },
        /**
         * 查询图层当前渲染模式，实景、水晶体、X光
         * @method
         * @param {string} layerName ：    图层名称
         * @param {function} fn ：         回调函数，返回是否成功和查询结果信息，返回信息结构如下：
         * {
         *   command:Layers_QueryLayerRenderMode,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   renderMode:0,
         *   outlineColor:[0.5,0.5,0.9,0.8],
         *   filleColor:[0.5,0.5,0.9,0.8],
         *   fillMode:1,
         *   glow:5,
         * }
         * @example
         * dc.layers.queryLayerRenderMode('layer1',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"的渲染模式是\"${e.renderMode}\"');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'queryLayerRenderMode',
        value: function queryLayerRenderMode(fn) {
          this.engine.excute(CommandType.Layers_QueryLayerRenderMode, {}, fn);
        },
        /**
         * 修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式
         * @method
         * @param {string} layerName ：  图层名称
         * @param {json}   renderMode ： 图层渲染模式
         * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayerRenderMode,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * import {RenderModeType} from "./common/DccObjects"
         * import {defaultRenderMode} from "./DccGlobal"
         *
         * const renderMode=defaultRenderMode;
         * renderMode.renderMode=RenderModeType.XRayMode;
         * renderMode.filleColor=[1.0,0.5,0.5,0.8];
         * dc.layers.updateLayerRenderMode('layer1',renderMode,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('修改图层\"${e.layerName}\"渲染模式成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayerRenderMode',
        value: function updateLayerRenderMode(layerName, renderMode, fn) {
          this.engine.excute(
            CommandType.Layers_UpdateLayerRenderMode,
            {
              layerName: layerName,
              renderMode: renderMode,
            },
            fn,
          );
        },
        /**
         * 批量修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式，可以根据图层类型（底座图层、动态图层）、图层标签进行批量修改
         * @method
         * @param {LayersQueryMode} queryMode ：采用图层查询方式来确认修改图层是否底座图层、动态图层，详细参考：LayersQueryMode
         * @param {Array} labels ：      图层标签数据，通过标签定义修改具备特定标签的图层的渲染模式，当该属性为[]，则标签过滤不起作用，即修改所有图层
         * @param {json} renderMode ：   图层渲染模式
         * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
         * {
         *   command:Layers_UpdateLayersRenderMode,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         * @example
         * import {defaultRenderMode} from "./common/DccObjects"
         *
         * const rm=defaultRenderMode;
         * rm.renderMode=RenderModeType.XRayMode;
         * rm.filleColor=[1.0,0.5,0.5,0.8];
         * dc.layers.updateLayersRenderMode(['building','terrain'],rm,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('批量修改图层渲染模式成功！');
         *        }
         *     }
         *  );
         **/
      },
      {
        key: 'updateLayersRenderMode',
        value: function updateLayersRenderMode() {
          var queryMode =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : LayersQueryMode.BaseLayersOnly;
          var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var renderMode =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {
                  renderMode: RenderModeType.RealMode,
                };
          var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          this.engine.excute(
            CommandType.Layers_UpdateLayerLabels,
            {
              queryMode: queryMode,
              labels: labels,
              renderMode: renderMode,
            },
            fn,
          );
        },
        /**
         *修改图层名称
         * @method
         * @param {string} layerName ：图层名称
         * @param {string} newlayerName ：图层新名称
         * @param {function} fn ：回调函数，返回是否成功和图层信息，返回信息结构如下：
         * {
         *   command:Layers_RenameLayer,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         *   newlayerName:'poiLayer',
         * }
         * @example
         * dc.layers.renameLayer('layer1','poiLayer',
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('图层\"${e.layerName}\"改名成功！');
         *        }
         *     }
         *   );
         **/
      },
      {
        key: 'renameLayer',
        value: function renameLayer(layerName, newlayerName, fn) {
          this.engine.excute(
            CommandType.Layers_RenameLayer,
            {
              layerName: layerName,
              newlayerName: newlayerName,
            },
            fn,
          );
        },
        /**
         * 删除场景中的图层
         * @method
         * @param {string} layerName ：要删除的图层的名称
         * @param {function} fn ：回调函数，返回是否成功和删除图层信息，返回信息结构如下：
         * {
         *   command:Layers_RemoveLayer,
         *   result:_SUCCESS,
         *   layerName:'layer1'，
         * }
         **/
      },
      {
        key: 'removeLayer',
        value: function removeLayer(layerName, fn) {
          if (!this.layers[layerName]) {
            console.error('图层不存在');
            return;
          }

          if (this.engine.map.getLayer(layerName)) {
            this.engine.map.removeLayer(layerName);
          }

          this.layers[layerName].removeLayer && this.layers[layerName].removeLayer();
          delete this.layers[layerName];
          this.engine.excute(
            CommandType.Layers_RemoveLayer,
            {
              layerName: layerName,
            },
            fn,
          );
        },
        /**
         * 在特定相机距离聚焦到指定的图层
         * @method
         * @param {string} layerName ：需要聚焦的图层的名称
         * @param {number} diatanse ： 相机到聚焦中心点的距离,以米为单位
         * @param {function} fn ：     回调函数，返回是否成功，返回信息结构如下：
         * {
         *   command:Layers_Focus,
         *   result:_SUCCESS,
         *   layerName:'layer1',
         * }
         * @example
         * dc.layers.focus(layerName,  //要聚焦的图层名称
         *     1000,
         *     (e)=>{
         *        if(e.result==_SUCCESS)
         *        {
         *           console.log('聚焦到图层\"${e.layerName}\"成功！');
         *        }
         *     }
         *   );
         **/
      },
      {
        key: 'focus',
        value: function focus(layerName, distance, fn) {
          this.engine.excute(
            CommandType.Layers_Focus,
            {
              layerName: layerName,
              distance: distance,
            },
            fn,
          );
        },
      },
    ]);

    return MapLayers;
  })(DccLayers);

  exports.MapLayers = MapLayers;
  exports['default'] = MapLayers;

  Object.defineProperty(exports, '__esModule', { value: true });
});
