/* eslint-disable */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('@deck.gl/mapbox'),
        require('@deck.gl/mesh-layers'),
        require('./3dLayers'),
        require('mapbox-gl'),
      )
    : typeof define === 'function' && define.amd
    ? define([
        'exports',
        '@deck.gl/mapbox',
        '@deck.gl/mesh-layers',
        './3dLayers',
        'mapbox-gl',
      ], factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        (global.spaceojoGlBaseLayers = {}),
        global.mapbox,
        global.meshLayers,
        global.layers3D,
        global.mapboxgl,
      ));
})(this, function(exports, mapbox, meshLayers, layers3D, mapboxgl) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
  }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(
            n,
            k,
            d.get
              ? d
              : {
                  enumerable: true,
                  get: function() {
                    return e[k];
                  },
                },
          );
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var layers3D__namespace = /*#__PURE__*/ _interopNamespace(layers3D);
  var mapboxgl__default = /*#__PURE__*/ _interopDefaultLegacy(mapboxgl);

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

  function _objectSpread2(target) {
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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
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

  // 地图 json 属性字段
  var _fieldObj = {
    background: {
      'background-color': {
        label: '填充颜色',
        type: 'color',
      },
      'background-pattern': {
        label: '填充图片',
        type: 'image',
      },
    },
    'fill-extrusion': {
      'fill-extrusion-color': {
        label: '填充（挤压）颜色',
        type: 'color',
      },
      'fill-extrusion-opacity': {
        label: '填充（挤压）透明度',
        type: 'slide',
      },
      'fill-extrusion-pattern': {
        label: '填充（挤压）图片',
        type: 'image',
      },
    },
    fill: {
      'fill-color': {
        label: '填充颜色',
        type: 'color',
      },
      'fill-outline-color': {
        label: '外边线颜色',
        type: 'color',
      },
      'fill-opacity': {
        label: '填充透明度',
        type: 'slide',
      },
      'fill-pattern': {
        label: '填充图片',
        type: 'image',
      },
    },
    line: {
      'line-color': {
        label: '填充颜色',
        type: 'color',
      },
      'line-pattern': {
        label: '填充图片',
        type: 'image',
      },
    },
  }; // 地图 json 属性名

  var fieldName = [].concat(
    _toConsumableArray(Object.keys(_fieldObj['fill-extrusion'])),
    _toConsumableArray(Object.keys(_fieldObj['fill'])),
    _toConsumableArray(Object.keys(_fieldObj['background'])),
    _toConsumableArray(Object.keys(_fieldObj['line'])),
  ); // 地图 json 属性对象

  var fieldObj = _objectSpread2(
    _objectSpread2(
      _objectSpread2(_objectSpread2({}, _fieldObj['background']), _fieldObj['fill-extrusion']),
      _fieldObj['fill'],
    ),
    _fieldObj['line'],
  ); // 根据图层类型获取地图 json 属性名

  var getFieldName = function getFieldName(type, layerId) {
    var fieldNames = Object.keys(_fieldObj[type] || {}); // 非绿地 楼块 背景 去掉贴图属性

    if (
      (layerId === null || layerId === void 0
        ? void 0
        : layerId.search(/greenland_R|building_R|background|road_L/)) === -1
    ) {
      // 去掉贴图属性
      return fieldNames.filter(function(item) {
        return !item.includes('-pattern');
      });
    }

    return fieldNames;
  }; // 其他表单字段

  var otherField = ['fill-pattern', 'fill-extrusion-pattern'];
  '*('.concat([].concat(_toConsumableArray(fieldName), otherField).join(','), ')');

  var Enum = {
    backgroundLayerId: 'background',
    backgroundIamgelayerId: 'background-img-layer',
    backgroundIamgeSourceId: 'background-img',
    buildingBaseSuffix: '_building-base',
    overlayLayer: ['-overlay', '-mapping', '-iamge'],
    image: 'image',
    cityPoiLayerId: 'poi_city',
    countyPoiLayerId: 'poi_county',
    townPoiLayerId: 'poi_town',
  };
  var setTypeEnum = {
    single: 'single',
    segment: 'segment',
  };

  var getColorA$3 = function getColorA(value) {
    if (typeof value === 'string' && value.includes('rgba')) {
      return parseFloat(value.split(',').pop());
    }

    return (value === null || value === void 0 ? void 0 : value.a) || 1;
  };
  var addDefaultSegment = function addDefaultSegment(props, threeBuilding) {
    toBuildingProps(threeBuilding);
    props.defaultSegment = {
      defaultSegmentEmissive: '#000',
    };

    for (var item in threeBuilding) {
      if (threeBuilding.hasOwnProperty(item) && !item.match(/segment/i)) {
        var key = item.substring(0, 1).toUpperCase() + item.substring(1);
        props.defaultSegment['defaultSegment' + key] = threeBuilding[item];
        props.defaultSegment.defaultSegmentImage = threeBuilding.mapUrl || null;
      }
    }
  };
  var toBuildingSegment = function toBuildingSegment(segment) {
    if (!Array.isArray(segment)) {
      return [];
    }

    return segment.map(function(item) {
      if (item.hasOwnProperty('color') && !item.hasOwnProperty('opacity')) {
        item.opacity = getColorA$3(item.color);
      }

      var segmentIsTop = item.segmentIsTop,
        segmentIsBottom = item.segmentIsBottom,
        segmentIsDynamic = item.segmentIsDynamic,
        segmentIsRoofColor = item.segmentIsRoofColor;

      if (item.hasOwnProperty('segmentIsTop') && typeof segmentIsTop === 'boolean') {
        item.segmentIsTop = segmentIsTop ? 2 : 1;
      }

      if (item.hasOwnProperty('segmentIsBottom') && typeof segmentIsBottom === 'boolean') {
        item.segmentIsBottom = segmentIsBottom ? 2 : 1;
      }

      if (item.hasOwnProperty('segmentIsDynamic') && typeof segmentIsDynamic === 'boolean') {
        item.segmentIsDynamic = segmentIsDynamic ? 2 : 1;
      }

      if (item.hasOwnProperty('segmentIsRoofColor') && typeof segmentIsRoofColor === 'boolean') {
        item.segmentIsRoofColor = segmentIsRoofColor ? 2 : 1;
      }

      return _objectSpread2(
        _objectSpread2({}, item),
        {},
        {
          weight: [item.start, item.end],
          segmentEmissive: '#000000', //自发光颜色
        },
      );
    });
  };
  var toBuildingProps = function toBuildingProps(props) {
    if (props.hasOwnProperty('setType') && !props.hasOwnProperty('enableSegment')) {
      props.enableSegment = props.setType === setTypeEnum.segment ? 2 : 1;
    }

    if (props.hasOwnProperty('color') && !props.hasOwnProperty('opacity')) {
      props.opacity = getColorA$3(props.color);
    }

    var isTop = props.isTop,
      isBottom = props.isBottom,
      isDynamic = props.isDynamic,
      isRoofColor = props.isRoofColor;

    if (props.hasOwnProperty('isTop') && typeof isTop === 'boolean') {
      props.isTop = isTop ? 2 : 1;
    }

    if (props.hasOwnProperty('isBottom') && typeof isBottom === 'boolean') {
      props.isBottom = isBottom ? 2 : 1;
    }

    if (props.hasOwnProperty('isDynamic') && typeof isDynamic === 'boolean') {
      props.isDynamic = isDynamic ? 2 : 1;
    }

    if (props.hasOwnProperty('isRoofColor') && typeof isRoofColor === 'boolean') {
      props.isRoofColor = isRoofColor ? 2 : 1;
    } // 临时处理，没有纹理给默认图片

    if (!props.mapUrl) {
      props.mapUrl = './textures/buildings/get.png';
    }
  };
  /**
   * 添加和初始化的时候使用的转换
   * @param {*} props
   */

  var threeBuildingProps = function threeBuildingProps(props) {
    // 1.兼容旧版本的属性
    // 2.转换为three的属性
    addDefaultSegment(props, props);
    props.segment = toBuildingSegment(props.segment);
  };

  var _excluded$6 = ['beforeId', 'extended', 'layer'];

  var THREE = layers3D__namespace.THREE;
  var backgroundLayerId$1 = Enum.backgroundLayerId;

  var base64Img = require('base64-img');

  var map_fire_postNoBloomRender = '';
  var map_fire_post2DRender = '';
  var map_fire_postBloomRender = '';
  var map_fire_postIndependentLightRender = '';

  var toThreeColor$1 = function toThreeColor(props) {
    if (props.color) {
      return _objectSpread2(
        _objectSpread2({}, props),
        {},
        {
          color: new THREE.Color(props.color),
        },
      );
    }

    return props;
  }; // 贴图

  var mapping = function mapping(map, layerObj, image, beforeId) {
    var addLayer = function addLayer(src) {
      var imageObj = new Image();
      imageObj.src = src;

      imageObj.onload = function() {
        var width = imageObj.width;
        var height = imageObj.height;
        var img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.width = width;
        img.height = height;

        if (map.hasImage(layerObj.id)) {
          map.removeImage(layerObj.id);
        }

        map.addImage(layerObj.id, img);
        map.addLayer(layerObj, beforeId);
      };
    };

    if (image.includes('base64')) {
      addLayer(image);
    } else {
      base64Img.requestBase64(image, function(err, res, body) {
        addLayer(body);
      });
    }
  }; // 模型
  // const model = (map, layerObj) => {
  //   const t = new Date().getTime();
  //   const id = '3d-model_' + t;
  //   new Model(
  //     map,
  //     '3d-model-layer_' + t,
  //     null,
  //     {
  //       modelUrl: layerObj.url,
  //       modelOrigin: layerObj.origin,
  //       altitude: layerObj.altitude,
  //       light: layerObj.light,
  //     },
  //     layerObj.id || id,
  //   );
  //   return layerObj.id || id;
  // };
  // 模型

  var model = function model(map, layerObj) {
    var t = new Date().getTime();
    var id = layerObj.id || '3d-model_' + t;
    var url = layerObj.url;
    var data = [
      {
        modelId: id.replace('3d-model_', ''),
        type: 'gltf',
        url: layerObj.url,
        position: [].concat(_toConsumableArray(layerObj.origin), [layerObj.altitude || 0]),
        scaleX: layerObj.scale || 1,
        scaleY: layerObj.scale || 1,
        scaleZ: layerObj.scale || 1,
        rotationX: Math.PI / 2,
        rotationY: layerObj.rotationY || 0,
        rotationZ: layerObj.rotationZ || 0,
        visible: typeof layerObj.visible === 'undefined' ? true : layerObj.visible,
      },
    ];

    var addModelLayers = function addModelLayers(data) {
      var customModelLayer = {
        id: id,
        type: 'custom',
        renderingMode: '3d',
        onAdd: function onAdd(map, gl) {
          this.modelObject = new layers3D__namespace.modelLayer(map.DBox, {
            data: data,
          }); //模型加载结束后的事件监听

          this.modelObject.addEventListener('modelLoad', function(event) {
            setTimeout(function() {
              window.modelLoadedCallback && window.modelLoadedCallback(event);
            }, 0);
          });
          this.modelObject.__position = [].concat(_toConsumableArray(layerObj.origin), [
            layerObj.altitude || 0,
          ]);
        },
        render: function render(gl, matrix) {
          if (
            !map.getLayer(map_fire_postIndependentLightRender) ||
            map_fire_postIndependentLightRender === customModelLayer.id
          ) {
            map_fire_postIndependentLightRender = customModelLayer.id;
            map.fire('postIndependentLightRender');
          }

          map.triggerRepaint();
        },
      };
      map.addLayer(customModelLayer);
    };

    if (url.endsWith('.json')) {
      fetch(url)
        .then(function(res) {
          return res.json();
        })
        .then(function(res) {
          var models = res === null || res === void 0 ? void 0 : res.models;
          var data = models.map(function(item, index) {
            var info = item === null || item === void 0 ? void 0 : item.info;
            return {
              modelId: id + index,
              type: info.format.toLowerCase(),
              url: info.url,
              position: info.position,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              rotationX: info.rotation[0],
              rotationY: 0,
              rotationZ: 0,
              visible: true,
            };
          });
          addModelLayers(data);
        });
    } else {
      addModelLayers(data);
    }

    return id;
  }; // 天空

  var threeSky = function threeSky(map, layerObj) {
    var customSkyLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '2d',
      onAdd: function onAdd() {
        this.skyObject = new layers3D__namespace.backBoxLayer(map.DBox, layerObj);
      },
      render: function render(gl, matrix) {
        if (!map.getLayer(map_fire_post2DRender) || map_fire_post2DRender === customSkyLayer.id) {
          map_fire_post2DRender = customSkyLayer.id;
          map.fire('post2DRender');
        }

        map.triggerRepaint();
      },
    };
    map.addLayer(customSkyLayer, backgroundLayerId$1);
  }; // 动态水

  var threeWater = function threeWater(map, layerObj, beforeId) {
    var customWaterLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function onAdd() {
        this.waterObject = new layers3D__namespace.waterLayer(map.DBox, layerObj);
      },
      render: function render(gl, matrix) {
        if (
          !map.getLayer(map_fire_postNoBloomRender) ||
          map_fire_postNoBloomRender === customWaterLayer.id
        ) {
          map_fire_postNoBloomRender = customWaterLayer.id;
          map.fire('postNoBloomRender');
        }

        map.triggerRepaint();
      },
    };
    map.addLayer(customWaterLayer, beforeId);
  }; // 上升线条

  var threeRisingLine = function threeRisingLine(map, layerObj, beforeId) {
    var bounds = map.data.bounds;

    if (!bounds) {
      var msg = 'bounds不存在,上升线无法显示';
      console.error(msg);
      alert(msg);
      return;
    } // 放到楼块后面

    var building = map.getStyle().layers.find(function(item) {
      return item.id.includes('building_R');
    });
    var viewRange = {
      left: bounds[0],
      top: bounds[1],
      right: bounds[2],
      bottom: bounds[3],
    };
    var risingLineLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function onAdd(map, gl) {
        this.risingLineObject = new layers3D__namespace.risingLineLayer(
          map.DBox,
          _objectSpread2(
            _objectSpread2({}, layerObj),
            {},
            {
              viewRange: viewRange,
            },
          ),
          null,
        );
      },
      render: function render(gl, matrix) {
        if (
          !map.getLayer(map_fire_postNoBloomRender) ||
          map_fire_postNoBloomRender === risingLineLayer.id
        ) {
          map_fire_postNoBloomRender = risingLineLayer.id;
          map.fire('postNoBloomRender');
        }

        map.triggerRepaint();
      },
    };
    map.addLayer(risingLineLayer, beforeId || building.id);
  }; // 楼块

  var threeBuilding = function threeBuilding(map, layerObj, beforeId) {
    threeBuildingProps(layerObj);
    var buildingLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      setType: layerObj.setType,
      onAdd: function onAdd(map, gl) {
        this.buildingObject = new layers3D__namespace.buildLayer(
          map.DBox,
          _objectSpread2({}, layerObj),
          null,
          '',
          '',
        );
      },
      render: function render(gl, matrix) {
        if (
          !map.getLayer(map_fire_postBloomRender) ||
          map_fire_postBloomRender === buildingLayer.id
        ) {
          map_fire_postBloomRender = buildingLayer.id;
          map.fire('postBloomRender');
        }

        map.triggerRepaint();
      },
    };
    map.addLayer(buildingLayer, beforeId);
  }; // 流动线条

  var threeFlowVecLine = function threeFlowVecLine(map, layerObj, beforeId) {
    // 放到楼块后面(临时放到楼块后面，如果按照mapbox的层级关系放目前有bug)
    var building = map.getStyle().layers.find(function(item) {
      return item.id.includes('building_R');
    });
    var flowVecLineLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function onAdd(map, gl) {
        this.flowVecLineObject = new layers3D__namespace.flowVecLineLayer(
          map.DBox,
          _objectSpread2(
            _objectSpread2({}, toThreeColor$1(layerObj)),
            {},
            {
              lineWidth: layerObj.lineWidth / 100000,
            },
          ),
        );
      },
      render: function render(gl, matrix) {
        if (
          !map.getLayer(map_fire_postBloomRender) ||
          map_fire_postBloomRender === flowVecLineLayer.id
        ) {
          map_fire_postBloomRender = flowVecLineLayer.id;
          map.fire('postBloomRender');
        }

        map.triggerRepaint();
      },
    };
    map.addLayer(flowVecLineLayer, building.id);
  }; // 标记模型

  var markerModel = function markerModel(map, layerObj) {
    var t = new Date().getTime();
    var id = '3d-model_' + t;
    var layer = new mapbox.MapboxLayer({
      id: layerObj.id || id,
      deck: map.deck,
    });
    layer.deckProps = _objectSpread2({}, layerObj);

    layer.change = function(p) {
      var t = new Date().getTime();

      var props = _objectSpread2(_objectSpread2({}, layer.deckProps), p);

      layer.deckProps = _objectSpread2({}, props);
      map.deckLayers = map.deckLayers.filter(function(item) {
        return item.id !== props.id;
      });
      map.deckLayers = [].concat(_toConsumableArray(map.deckLayers), [
        new meshLayers.ScenegraphLayer({
          id: props.id,
          data: props.origin,
          getOrientation: [0, props.yaw || 0, 90],
          getPosition: function getPosition(d) {
            return d;
          },
          scenegraph: layerObj.url + '?' + t,
          sizeScale: props.scale || 1,
          pickable: true,
          onClick: function onClick(e) {
            var fn = map.layerClick;
            fn && fn(e);
          },
          _lighting: 'pbr',
        }),
      ]);
      map.deck.setProps({
        layers: _toConsumableArray(map.deckLayers),
      });
    };

    map.addLayer(layer);
    map.deckLayers = map.deckLayers || [];
    map.deckLayers = [].concat(_toConsumableArray(map.deckLayers), [
      new meshLayers.ScenegraphLayer({
        id: layerObj.id || id,
        data: layerObj.origin,
        getOrientation: [0, layerObj.yaw, 90],
        getPosition: function getPosition(d) {
          return d;
        },
        scenegraph: layerObj.url + '?' + t,
        sizeScale: layerObj.scale || 1,
        pickable: true,
        onClick: function onClick(e) {
          var fn = map.layerClick;
          fn && fn(e);
        },
        _lighting: 'pbr',
      }),
    ]);
    map.deck.setProps({
      layers: _toConsumableArray(map.deckLayers),
    });
    return layerObj.id || id;
  }; // 添加扩展图层

  var addExtendedLayer = function addExtendedLayer(map, layerObj) {
    var beforeId = layerObj.beforeId,
      extended = layerObj.extended,
      layer = layerObj.layer,
      _layerObj = _objectWithoutProperties(layerObj, _excluded$6);

    if (map.getLayer(layerObj.id)) {
      map.removeLayer(layerObj.id);
    }

    if (extended === 'mapbox') {
      map.addLayer(_layerObj, beforeId);
    }

    if (extended === 'deckgl') {
      // 自由标记模型
      if (layer === 'marker-model') {
        return markerModel(map, _layerObj);
      }
    }

    if (extended === 'three') {
      // 天空
      if (layer === 'sky') {
        threeSky(map, _layerObj);
        return;
      } // 动态水

      if (layer === 'water') {
        threeWater(map, _layerObj, beforeId);
        return;
      } // 上升线条

      if (layer === 'risingLine') {
        threeRisingLine(map, _layerObj, beforeId);
        return;
      } // 流动线条

      if (layer === 'flowVecLine') {
        threeFlowVecLine(map, _layerObj);
        return;
      } // 模型

      if (layer === 'model') {
        return model(map, _layerObj);
      } // 楼块

      if (layer === 'building') {
        threeBuilding(map, _layerObj, beforeId);
        return;
      }
    }

    return layerObj;
  };

  var label = {
    background: '背景',
    town: '乡镇',
    county: '区县',
    vegetation: '绿地、植被',
    water: '湖泊江河',
    road_R_3: '3级道路',
    road_R_2: '2级道路',
    road_R_1: '1级道路',
    'building-base': '建筑物楼顶',
    building: '建筑物',
    //静态
    PointSpecies: 'PointSpecies',
    MapBase: 'MapBase',
    SkyBox: 'SkyBox',
    Ground: 'Ground',
    FreeTag: 'FreeTag',
    ThreeDimensionalModel: 'ThreeDimensionalModel',
    Image: 'Image',
  };
  /**
   *
   * @param {*} layerId
   * @returns
   * @deprecated
   */

  var getLabel = function getLabel() {
    var layerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    alert('getLabel 方法已经过时，即将废弃');
    console.error('getLabel 方法已经过时，即将废弃');
    var labels = Object.keys(label);
    var key =
      labels.find(function(item) {
        return layerId.includes(item);
      }) || {};
    return label[key];
  };

  var mappingLayer = function mappingLayer(layer, fieldName, value, beforeId) {
    var _objectSpread2$1;

    var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    return _objectSpread2(
      _objectSpread2({}, layer),
      {},
      {
        id: layer.id + '-mapping' + i,
        paint: _objectSpread2(
          _objectSpread2({}, layer.paint),
          {},
          ((_objectSpread2$1 = {}),
          _defineProperty(_objectSpread2$1, ''.concat(layer.type, '-opacity'), 1),
          _defineProperty(_objectSpread2$1, fieldName, layer.id + '-mapping' + i),
          _objectSpread2$1),
        ),
        image: value,
        beforeId: beforeId,
      },
    );
  };

  var filterMappingLayer = function filterMappingLayer(map, id) {
    var layers = map.getStyle().layers;
    layers.forEach(function(item, i) {
      if (item.id.includes(id + '-mapping')) {
        map.removeLayer(item.id);
      }
    });
  };

  var addMappingLayer = function addMappingLayer(map, jsonObj, id, fieldName, value, _ui) {
    // 过滤叠加图层
    var _filterOverlayLayer = filterOverlayLayer(map, jsonObj, id),
      _filterOverlayLayer2 = _slicedToArray(_filterOverlayLayer, 2),
      layer = _filterOverlayLayer2[0],
      index = _filterOverlayLayer2[1]; // 过滤掉贴图图层

    filterMappingLayer(map, id);

    if (!layer.overlay) {
      layer.overlay = [];
    } // 楼块需要处理楼顶的情况
    // 如果图层有楼顶，把楼顶id作为beforeId

    var beforeId = layer.roof ? layer.roof.id : jsonObj.layers[index + 1].id;
    var mapping$1 = mappingLayer(layer, fieldName, value, beforeId); // 从新添加贴图图层（单一贴图当做叠加图层方式处理）

    layer.overlay = [
      {
        fieldName: fieldName,
        fieldValue: value,
      },
    ];
    layer._ui = _objectSpread2(_objectSpread2({}, layer._ui), _ui);
    mapping(map, mapping$1, value, beforeId);
  };

  var getColorA$2 = function getColorA(type, value) {
    if (type.includes('-extrusion')) {
      if (typeof value === 'string' && value.includes('rgba')) {
        return parseFloat(value.split(',').pop());
      }

      return (value === null || value === void 0 ? void 0 : value.a) || 1;
    }

    return 1;
  };

  var transValue$1 = function transValue(fieldName, value) {
    if (
      Object.prototype.toString.call(value) === '[object Object]' &&
      fieldName.includes('-color')
    ) {
      var r = value.r,
        g = value.g,
        b = value.b,
        a = value.a;
      return 'rgba('
        .concat(r, ', ')
        .concat(g, ', ')
        .concat(b, ', ')
        .concat(a, ')');
    }

    return value;
  };

  var filterOverlayLayer = function filterOverlayLayer(map, jsonObj, id) {
    var layer, index;
    jsonObj.layers = jsonObj.layers.map(function(item, i) {
      var _item$roof;

      if (item.id === id) {
        layer = _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            overlay: [],
          },
        );
        index = i;
        return layer;
      } // 处理楼顶

      if (
        ((_item$roof = item.roof) === null || _item$roof === void 0 ? void 0 : _item$roof.id) === id
      ) {
        layer = _objectSpread2(
          _objectSpread2({}, item.roof),
          {},
          {
            overlay: [],
          },
        );
        index = i;
        return _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            roof: layer,
          },
        );
      }

      return item;
    });
    var layers = map.getStyle().layers;
    layers.forEach(function(item, i) {
      if (item.id.includes(id + '-overlay')) {
        map.removeLayer(item.id);
      }
    });
    return [layer, index];
  };

  var addOverlayLayer = function addOverlayLayer(map, jsonObj, id, props, bounds, _ui) {
    // 过滤掉颜色叠加图层
    var _filterOverlayLayer = filterOverlayLayer(map, jsonObj, id),
      _filterOverlayLayer2 = _slicedToArray(_filterOverlayLayer, 2),
      layer = _filterOverlayLayer2[0],
      index = _filterOverlayLayer2[1];

    filterMappingLayer(map, id); // 楼块需要处理楼顶的情况
    // 如果图层有楼顶，把楼顶id作为beforeId

    var beforeId = layer.roof ? layer.roof.id : jsonObj.layers[index + 1].id;
    props.forEach(function(item, i) {
      var fieldName = item.fieldName,
        fieldValue = item.fieldValue; // 图片叠加

      if (fieldName.includes('-pattern')) {
        // 贴图叠加
        var mapping$1 = mappingLayer(layer, fieldName, fieldValue, beforeId, i);
        mapping(map, mapping$1, fieldValue, beforeId);
      } else {
        var _objectSpread2$1;

        // 颜色叠加
        var colorLayer = _objectSpread2(
          _objectSpread2({}, layer),
          {},
          {
            id: layer.id + '-overlay' + i,
            paint: _objectSpread2(
              _objectSpread2({}, layer.paint),
              {},
              ((_objectSpread2$1 = {}),
              _defineProperty(
                _objectSpread2$1,
                ''.concat(layer.type, '-opacity'),
                getColorA$2(layer.type, fieldValue),
              ),
              _defineProperty(_objectSpread2$1, fieldName, transValue$1(fieldName, fieldValue)),
              _objectSpread2$1),
            ),
          },
        ); // 添加图层

        map.addLayer(colorLayer, beforeId);
      }
    }); // 从新添加贴图图层（单一贴图当做叠加图层方式处理）

    layer.overlay = props;
    layer._ui = _objectSpread2(_objectSpread2({}, layer._ui), _ui);
  };

  var transValue = function transValue(fieldName, value) {
    if (
      Object.prototype.toString.call(value) === '[object Object]' &&
      fieldName.includes('-color')
    ) {
      var r = value.r,
        g = value.g,
        b = value.b,
        a = value.a;
      return 'rgba('
        .concat(r, ', ')
        .concat(g, ', ')
        .concat(b, ', ')
        .concat(a, ')');
    }

    return value;
  };

  var filterSegmentLayer = function filterSegmentLayer(map, jsonObj, id) {
    var layer, index;
    jsonObj.layers = jsonObj.layers.map(function(item, i) {
      var _item$roof;

      if (item.id === id) {
        layer = _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            segment: [],
          },
        );
        index = i;
        return layer;
      } // 处理楼顶

      if (
        ((_item$roof = item.roof) === null || _item$roof === void 0 ? void 0 : _item$roof.id) === id
      ) {
        layer = _objectSpread2(
          _objectSpread2({}, item.roof),
          {},
          {
            segment: [],
          },
        );
        index = i;
        return _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            roof: layer,
          },
        );
      }

      return item;
    });
    var layers = map.getStyle().layers;
    layers.forEach(function(item, i) {
      if (item.id.includes(id + '-segment')) {
        map.removeLayer(item.id);
      }
    });
    return [layer, index];
  };

  var getColorA$1 = function getColorA(type, value) {
    if (type.includes('-extrusion')) {
      if (typeof value === 'string' && value.includes('rgba')) {
        return parseFloat(value.split(',').pop());
      }

      return (value === null || value === void 0 ? void 0 : value.a) || 1;
    }

    return 1;
  };

  var filter$3 = function filter(type, weight, item) {
    if (item.end) {
      return [
        'all',
        ['>=', ['to-number', ['get', weight]], Number(item.start)],
        ['<=', ['to-number', ['get', weight]], Number(item.end)],
      ];
    }

    if (isNaN(Number(item.start))) {
      return [type, ['get', weight], item.start];
    }

    return [type, ['to-number', ['get', weight]], Number(item.start)];
  };

  var segmentLayer = function segmentLayer(map, jsonObj, id, props, weight, segmentType, _ui) {
    var _filterSegmentLayer = filterSegmentLayer(map, jsonObj, id),
      _filterSegmentLayer2 = _slicedToArray(_filterSegmentLayer, 2),
      layer = _filterSegmentLayer2[0],
      index = _filterSegmentLayer2[1]; // 楼块需要处理楼顶的情况
    // 如果图层有楼顶，把楼顶id作为beforeId

    var beforeId = layer.roof ? layer.roof.id : jsonObj.layers[index + 1].id;
    props.forEach(function(item, i) {
      item.value.forEach(function(value, ii) {
        var fieldName = value.fieldName,
          fieldValue = value.fieldValue; // 颜色叠加

        if (fieldName.includes('-color')) {
          var _objectSpread2$1;

          var colorLayer = _objectSpread2(
            _objectSpread2({}, layer),
            {},
            {
              id: layer.id + '-segment-overlay' + i + ii,
              paint: _objectSpread2(
                _objectSpread2({}, layer.paint),
                {},
                ((_objectSpread2$1 = {}),
                _defineProperty(_objectSpread2$1, fieldName, transValue(fieldName, fieldValue)),
                _defineProperty(
                  _objectSpread2$1,
                  ''.concat(layer.type, '-opacity'),
                  getColorA$1(layer.type, fieldValue),
                ),
                _objectSpread2$1),
              ),
              filter: filter$3(segmentType, weight, item),
            },
          );

          map.addLayer(colorLayer, beforeId);
        } // 图片叠加

        if (fieldName.includes('-pattern')) {
          var _objectSpread3;

          var mapping$1 = _objectSpread2(
            _objectSpread2({}, layer),
            {},
            {
              id: layer.id + '-segment-mapping' + i + ii,
              paint: _objectSpread2(
                _objectSpread2({}, layer.paint),
                {},
                ((_objectSpread3 = {}),
                _defineProperty(_objectSpread3, ''.concat(layer.type, '-opacity'), 1),
                _defineProperty(_objectSpread3, fieldName, layer.id + '-segment-mapping' + i + ii),
                _objectSpread3),
              ),
              beforeId: beforeId,
              extended: 'mapbox',
              image: fieldValue,
              filter: filter$3(segmentType, weight, item),
            },
          );

          mapping(map, mapping$1, fieldValue, beforeId);
        }
      });
    });
    layer.segment = props;
    layer.weight = weight;
    layer.segmentType = segmentType;
    layer._ui = _objectSpread2(_objectSpread2({}, layer._ui), _ui);
  };

  var changeLayer = function changeLayer(map, jsonObj, id, paintItem, _ui, type) {
    if (
      Object.keys(paintItem)
        .join(' ')
        .includes('-color')
    ) {
      // 删除贴图图层
      filterMappingLayer(map, id);
    } // 过滤掉叠加图层

    filterOverlayLayer(map, jsonObj, id); // 过滤掉分段图层

    filterSegmentLayer(map, jsonObj, id);
    Object.keys(paintItem).forEach(function(key) {
      if (type === 'layout') {
        map.setLayoutProperty(id, key, paintItem[key]);
      } else {
        map.setPaintProperty(id, key, paintItem[key]);
      }
    });
    jsonObj.layers = jsonObj.layers.map(function(item) {
      var _item$roof;

      if (item.id === id) {
        if (type === 'layout') {
          return _objectSpread2(
            _objectSpread2({}, item),
            {},
            {
              layout: _objectSpread2(_objectSpread2({}, item.layout), paintItem),
              _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
            },
          );
        } else {
          return _objectSpread2(
            _objectSpread2({}, item),
            {},
            {
              paint: _objectSpread2(_objectSpread2({}, item.paint), paintItem),
              _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
            },
          );
        }
      } // 处理楼顶

      if (
        ((_item$roof = item.roof) === null || _item$roof === void 0 ? void 0 : _item$roof.id) ===
          id &&
        id.includes('building_R')
      ) {
        return _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            roof: _objectSpread2(
              _objectSpread2({}, item.roof),
              {},
              {
                paint: _objectSpread2(_objectSpread2({}, item.roof.paint), paintItem),
                _ui: _objectSpread2(_objectSpread2({}, item.roof._ui), _ui),
              },
            ),
          },
        );
      }

      return item;
    });
  };

  var getColor = function getColor(value) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
      var r = value.r,
        g = value.g,
        b = value.b,
        a = value.a;
      return 'rgba('
        .concat(r, ', ')
        .concat(g, ', ')
        .concat(b, ', ')
        .concat(a, ')');
    }

    return value;
  };

  var getColorA = function getColorA(value) {
    if (typeof value === 'string' && value.includes('rgba')) {
      return parseFloat(value.split(',').pop());
    }

    return (value === null || value === void 0 ? void 0 : value.a) || 1;
  };

  var paintFn = {
    'background-color': function backgroundColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'background-color': getColor(value),
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-color': function fillExtrusionColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-opacity': getColorA(value),
        'fill-extrusion-color': getColor(value),
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-opacity': function fillExtrusionOpacity(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-opacity': value,
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-base': function fillExtrusionBase(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-base': value,
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-height': function fillExtrusionHeight(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-height': value,
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-color': function fillColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-color': getColor(value),
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-outline-color': function fillOutlineColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-outline-color': getColor(value),
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-opacity': function fillOpacity(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-opacity': value,
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'line-color': function lineColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'line-color': getColor(value),
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'text-size': function textSize(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'text-size': value,
      };
      changeLayer(map, jsonObj, id, paintItem, _ui, 'layout');
    },
    'text-color': function textColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'text-color': getColor(value),
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
  };

  var modelLayer = function modelLayer(map, jsonObj, props) {
    var url = props.url,
      origin = props.origin,
      altitude = props.altitude,
      scale = props.scale,
      visible = props.visible,
      rotationY = props.rotationY,
      id = props.id,
      del = props.del,
      _ui = props._ui;
    var layer = map.getLayer(id); // 删除模型

    if (del) {
      filterModelLayer$1(jsonObj, id);

      if (map.getLayer(id)) {
        layer.implementation.modelObject.setProps({
          modelId: id.replace('3d-model_', ''),
          visible: false,
        });
        map.removeLayer(id);
      }

      return;
    }

    var m = {
      url: url,
      origin: origin,
      altitude: altitude,
      scale: scale,
      visible: true,
      rotationY: rotationY,
      extended: 'three',
      layer: 'model',
      _ui: _ui,
    }; // 修改模型

    if (layer) {
      var layerProps = {};
      var position = layer.implementation.modelObject.__position;

      if (origin) {
        layerProps.position = [].concat(_toConsumableArray(origin), [position[2]]);
        position[0] = origin[0];
        position[1] = origin[1];
      }

      if (typeof altitude !== 'undefined') {
        layerProps.position = [position[0], position[1], altitude];
        position[2] = altitude;
      }

      if (url) {
        layerProps.url = url;
      }

      if (scale) {
        layerProps.scaleX = scale;
        layerProps.scaleY = scale;
        layerProps.scaleZ = scale;
      }

      if (rotationY) {
        layerProps.rotationY = rotationY;
      }

      if (typeof visible === 'boolean') {
        layerProps.visible = visible;
      }

      layer.implementation.modelObject.setProps(
        _objectSpread2(
          {
            modelId: id.replace('3d-model_', ''),
          },
          layerProps,
        ),
      );
      jsonObj.layers = jsonObj.layers.map(function(item) {
        if (item.id === id) {
          return _objectSpread2(
            _objectSpread2(_objectSpread2({}, item), props),
            {},
            {
              _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
            },
          );
        }

        return item;
      });
    } else {
      // 添加模型
      var _id = addExtendedLayer(map, m);

      jsonObj.layers.push(
        _objectSpread2(
          _objectSpread2({}, m),
          {},
          {
            id: _id,
          },
        ),
      );
      return _id;
    }
  };

  var filterModelLayer$1 = function filterModelLayer(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function(item) {
      return item.id !== id;
    });
  };

  var layerID$1 = 'three-sky';

  var skyLayer = function skyLayer(map, jsonObj, props) {
    var data = props.data,
      _props$del = props.del,
      del = _props$del === void 0 ? false : _props$del,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _ui = props._ui; // 删除

    if (del) {
      filter$2(jsonObj);

      if (map.getLayer(layerID$1)) {
        map.removeLayer(layerID$1);
      }

      return;
    }

    var m = {
      id: layerID$1,
      data: data,
      visible: visible,
      extended: 'three',
      layer: 'sky',
      _ui: _ui,
    };
    var layer = map.getLayer(layerID$1);

    if (layer) {
      // 修改
      layer.implementation.skyObject.setProps(props);
      jsonObj.layers = jsonObj.layers.map(function(item) {
        if (item.id === layerID$1) {
          return _objectSpread2(
            _objectSpread2(_objectSpread2({}, item), props),
            {},
            {
              _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
            },
          );
        }

        return item;
      });
    } else {
      // 添加天空
      addExtendedLayer(map, m);
      jsonObj.layers.push(_objectSpread2({}, m));
    }
  };

  var filter$2 = function filter(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function(item) {
      return item.layer !== 'sky';
    });
  };

  var _excluded$5 = ['id', 'del', '_ui'];
  var suffix$2 = '_three-water';

  var waterLayer = function waterLayer(map, jsonObj, props) {
    var _jsonObj$sources$sour, _jsonObj$sources$wate;

    var id = props.id,
      _props$del = props.del,
      del = _props$del === void 0 ? false : _props$del,
      _ui = props._ui,
      otherProps = _objectWithoutProperties(props, _excluded$5);

    var index = jsonObj.layers.findIndex(function(item) {
      return item.id === id;
    });
    var beforeId = jsonObj.layers[index + 1].id;
    var layerID = id + suffix$2;
    var level = Number(id.split('_').pop());
    var sourceKey = 'water';

    if (!isNaN(level)) {
      sourceKey = 'water_' + level;
    }

    var waterData =
      ((_jsonObj$sources$sour = jsonObj.sources[sourceKey]) === null ||
      _jsonObj$sources$sour === void 0
        ? void 0
        : _jsonObj$sources$sour.data) ||
      ((_jsonObj$sources$wate = jsonObj.sources.water) === null || _jsonObj$sources$wate === void 0
        ? void 0
        : _jsonObj$sources$wate.data);
    debugger; // 初始值

    var m = {
      id: layerID,
      waterType: 1,
      data: waterData,
      visible: true,
      dynamicColor: '#60cddc',
      //动态水颜色
      dynamicOpcity: 1,
      //动态水是反射系数
      dynamicWaveScale: 3.7,
      // 动态波纹扭曲度
      dynamicSize: 1,
      // 动态水纹比例
      dynamicSpeed: 1,
      // 动态水流速度
      dynamicMap: './textures/water/waternormals.jpg',
      // 动态水纹理
      extended: 'three',
      layer: 'water',
      beforeId: beforeId,
      _ui: _ui,
    }; // 修改json

    jsonObj.layers = jsonObj.layers.map(function(item) {
      if (id === item.id) {
        return _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            flowingWater: del
              ? null
              : _objectSpread2(
                  _objectSpread2(
                    _objectSpread2(_objectSpread2({}, m), item.flowingWater),
                    otherProps,
                  ),
                  {},
                  {
                    _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
                  },
                ),
          },
        );
      }

      return item;
    }); // 删除

    if (del) {
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
      }

      return;
    }

    var layer = map.getLayer(layerID);

    if (layer) {
      // 修改
      layer.implementation.waterObject.setProps(props);
    } else {
      if (!waterData) {
        var msg = '水geojson不存在';
        console.error(msg);
        alert(msg);
        return;
      } // 添加

      addExtendedLayer(map, _objectSpread2(_objectSpread2({}, m), otherProps));
    }
  };

  var filter$1 = function filter() {
    var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var id = arguments.length > 1 ? arguments[1] : undefined;
    return layers.filter(function(item) {
      return item.id !== id;
    });
  };

  var tilesLayer = function tilesLayer(map, jsonObj, _ref) {
    var url = _ref.url,
      id = _ref.id,
      del = _ref.del,
      _ui = _ref._ui;

    if (del) {
      map.removeLayer(id);

      var _layers = filter$1(jsonObj.layers, id);

      jsonObj.layers = _layers;
      return id;
    }

    var t = new Date().getTime(); // 添加数据源

    var sourceId = 'tiles_' + t;
    var source = {
      type: 'raster',
      tiles: [url],
    };
    var layerID = sourceId;
    map.addSource(sourceId, source);
    jsonObj.sources[sourceId] = source; // 添加图层

    var layers = jsonObj.layers;
    var beforeId = layers.find(function(item) {
      return item.id.includes('building_R');
    }).id;
    var layer = {
      id: layerID,
      type: 'raster',
      layout: {
        visibility: 'visible',
      },
      source: sourceId,
      extended: 'mapbox',
      layer: 'tiles',
      beforeId: beforeId,
      _ui: _ui,
    };
    map.addLayer(layer, beforeId);
    jsonObj.layers.push(_objectSpread2({}, layer));
    return layerID;
  };

  var markerModelLayer = function markerModelLayer(map, jsonObj, props, _ui) {
    var url = props.url,
      origin = props.origin,
      delOrigin = props.delOrigin,
      scale = props.scale,
      light = props.light,
      altitude = props.altitude,
      yaw = props.yaw,
      id = props.id,
      del = props.del,
      group = props.group; // 删除图层

    if (del) {
      filterModelLayer(jsonObj, id);

      if (map.getLayer(id)) {
        map.removeLayer(id);
      }

      return;
    }

    var m = {
      url: url,
      origin: [origin],
      scale: scale || 1,
      light: light,
      altitude: altitude,
      yaw: yaw || 0,
      extended: 'deckgl',
      layer: 'marker-model',
      _ui: _ui,
    }; // 修改模型

    var layer = map.getLayer(id);

    if (layer) {
      var implementation = layer.implementation;
      var deckProps = implementation.deckProps;

      var data = _toConsumableArray(deckProps.origin); // 添加模型

      if (Array.isArray(origin)) {
        data.push(origin);
      } // 删除模型

      if (Array.isArray(delOrigin)) {
        data = data.filter(function(item) {
          return delOrigin[0] !== item[0] && delOrigin[1] !== item[1];
        });
      }

      implementation.change(
        _objectSpread2(
          _objectSpread2({}, props),
          {},
          {
            origin: data,
            id: id,
          },
        ),
      );
      jsonObj.layers = jsonObj.layers.map(function(item) {
        if (item.id === id) {
          return _objectSpread2(
            _objectSpread2(_objectSpread2({}, item), props),
            {},
            {
              origin: data,
              _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
            },
          );
        }

        return item;
      });
    } else {
      // 添加模型
      var _id = addExtendedLayer(map, m);

      jsonObj.layers.push(
        _objectSpread2(
          _objectSpread2({}, m),
          {},
          {
            group: group,
            id: _id,
          },
        ),
      );
      return _id;
    }
  };

  var filterModelLayer = function filterModelLayer(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function(item) {
      return item.id !== id;
    });
  };

  var layerID = 'three-risingLine';

  var risingLineLayer = function risingLineLayer(map, jsonObj, props) {
    if (!jsonObj.bounds) {
      var msg = 'bounds不存在,上升线无法显示';
      console.error(msg);
      alert(msg);
      return;
    }

    var _props$del = props.del,
      del = _props$del === void 0 ? false : _props$del,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$bounds = props.bounds,
      bounds = _props$bounds === void 0 ? jsonObj.bounds : _props$bounds,
      _props$num = props.num,
      num = _props$num === void 0 ? 30 : _props$num,
      _props$lineWidth = props.lineWidth,
      lineWidth = _props$lineWidth === void 0 ? 2 : _props$lineWidth,
      _ui = props._ui; // 删除

    if (del) {
      filter(jsonObj);

      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
      }

      return;
    } // 添加/修改

    var m = {
      id: layerID,
      bounds: bounds,
      num: num,
      lineWidth: lineWidth,
      visible: visible,
      extended: 'three',
      layer: 'risingLine',
      _ui: _ui,
    };
    var layer = map.getLayer(layerID);

    if (layer) {
      // 修改
      layer.implementation.risingLineObject.setProps(props);
      jsonObj.layers = jsonObj.layers.map(function(item) {
        if (item.id === layerID) {
          return _objectSpread2(
            _objectSpread2(_objectSpread2({}, item), props),
            {},
            {
              _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
            },
          );
        }

        return item;
      });
    } else {
      // 添加
      addExtendedLayer(map, m);
      jsonObj.layers.push(_objectSpread2({}, m));
    }
  };

  var filter = function filter(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function(item) {
      return item.layer !== 'risingLine';
    });
  };

  var _excluded$4 = ['id', 'del', '_ui', 'layer'];
  var suffix$1 = 'three-building';

  var getVisibility = function getVisibility(props) {
    if (props.del || props.visible === false) {
      return 'visible';
    }

    return 'none';
  };

  var buildingLayer = function buildingLayer(map, jsonObj, props) {
    var _jsonObj$json, _building$overlay$;

    var buildingData =
      (_jsonObj$json = jsonObj.json) === null || _jsonObj$json === void 0
        ? void 0
        : _jsonObj$json.building;

    if (!buildingData) {
      var msg = '楼json不存在';
      console.error(msg);
      alert(msg);
      return;
    }

    var id = props.id,
      _props$del = props.del,
      del = _props$del === void 0 ? false : _props$del,
      _ui = props._ui;
    props.layer;
    var otherProps = _objectWithoutProperties(props, _excluded$4);

    var building = jsonObj.layers.find(function(item) {
      return item.id === id;
    });
    var beforeId = id;
    var layerID = id + '_' + suffix$1;
    var image = Array.isArray(building.overlay)
      ? (_building$overlay$ = building.overlay[0]) === null || _building$overlay$ === void 0
        ? void 0
        : _building$overlay$.fieldValue
      : './textures/buildings/get.png'; // 初始值

    var m = {
      id: layerID,
      visible: true,
      isShiny: 1,
      num: 150,
      emissive: '#000000',
      colorOrMap: 1,
      //统一设置，1为颜色，2为纹理，3为颜色纹理混合，默认是1
      segment: [],
      color: building.paint['fill-extrusion-color'],
      mapUrl: image,
      // 纹理
      // modeMapping: 1, 已经废弃 // 1 颜色分段 2 图片分段
      isRoofColor: false,
      // 开启楼顶
      roofColor: '#ff0000',
      // 顶面颜色
      isTop: false,
      // 开启顶光
      topColor: '#fff',
      //顶光颜色
      topFading: 5,
      // 顶光衰减参数
      isBottom: false,
      // 开启底光,1是关闭，2是开启
      bottomColor: '#ff0000',
      // 底光颜色
      bottomFading: 5,
      // 底光衰减参数
      isDynamic: false,
      // 是否开启动态光
      dynamicColor: '#ff00a5',
      // 动态光颜色
      speedLoop: 5,
      // 动态光速度
      data: buildingData,
      extended: 'three',
      layer: 'building',
      beforeId: beforeId,
      setType: setTypeEnum.single,
      // 分段或统一
      _ui: {},
    }; // 修改json

    jsonObj.layers = jsonObj.layers.map(function(item) {
      if (id === item.id) {
        return _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            // 控制楼原始楼的显隐
            layout: _objectSpread2(
              _objectSpread2({}, item.layout),
              {},
              {
                visibility: getVisibility(props),
              },
            ),
            // 控制楼原始楼顶的显隐
            roof: _objectSpread2(
              _objectSpread2({}, item.roof),
              {},
              {
                layout: _objectSpread2(
                  _objectSpread2({}, item.roof.layout),
                  {},
                  {
                    visibility: getVisibility(props),
                  },
                ),
              },
            ),
            threeBuilding: del
              ? null
              : _objectSpread2(
                  _objectSpread2(_objectSpread2({}, m), item.threeBuilding),
                  otherProps,
                ),
            _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
          },
        );
      }

      return item;
    }); // 删除

    if (del) {
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID); // 显示原始楼块与楼顶

        map.getStyle().layers.forEach(function(item) {
          if (item.id.includes(id)) {
            map.setLayoutProperty(item.id, 'visibility', 'visible');
          }
        });
      }

      return;
    }

    var buildingLayer = map.getLayer(layerID);

    if (buildingLayer) {
      var _props$segment;

      // 修改
      toBuildingProps(otherProps); // 添加分段默认值

      if (props.setType === setTypeEnum.segment) {
        var threeBuilding = jsonObj.layers.find(function(item, index) {
          return id === item.id;
        }).threeBuilding;
        addDefaultSegment(otherProps, _objectSpread2({}, threeBuilding));
      } // 控制原始楼块与楼顶的显示隐藏

      if (props.hasOwnProperty('visible')) {
        map.getStyle().layers.forEach(function(item) {
          if (item.id.includes(id)) {
            map.setLayoutProperty(item.id, 'visibility', props.visible ? 'none' : 'visible');
          }
        });
      }

      if (
        ((_props$segment = props.segment) === null || _props$segment === void 0
          ? void 0
          : _props$segment.length) > 0
      ) {
        otherProps.segment = toBuildingSegment(props.segment);
      }

      buildingLayer.implementation.buildingObject.setProps(otherProps);
      return;
    } // 添加

    addExtendedLayer(map, _objectSpread2(_objectSpread2({}, m), otherProps)); // 添加 three 楼时
    // 隐藏原始楼块与楼顶

    map.getStyle().layers.forEach(function(item) {
      if (item.id.includes(id)) {
        map.setLayoutProperty(item.id, 'visibility', 'none');
      }
    });
  };

  var _excluded$3 = ['id', 'del', '_ui'];
  var suffix = 'three-flowVecLineLayer';

  var flowVecLineLayer = function flowVecLineLayer(map, jsonObj, props) {
    var _jsonObj$sources$sour;

    var id = props.id,
      _props$del = props.del,
      del = _props$del === void 0 ? false : _props$del,
      _ui = props._ui,
      otherProps = _objectWithoutProperties(props, _excluded$3);

    var index = jsonObj.layers.findIndex(function(item) {
      return item.id === id;
    });
    var beforeId = jsonObj.layers[index + 1].id;
    var layerID = id + '_' + suffix;
    var level = parseInt(id.split('_').pop());
    var sourceKey = 'road_' + level;
    var flowVecLineData =
      (_jsonObj$sources$sour = jsonObj.sources[sourceKey]) === null ||
      _jsonObj$sources$sour === void 0
        ? void 0
        : _jsonObj$sources$sour.data;

    if (!flowVecLineData) {
      var msg = '流动线geojson不存在';
      console.error(msg);
      alert(msg);
      return;
    } // 初始值

    var m = {
      id: layerID,
      data: flowVecLineData,
      visible: true,
      color: '#00f548',
      //颜色
      lineWidth: 1,
      // 线宽
      speed: 1,
      //流动线速度
      traceTime: 50,
      //流动线长度
      height: 0,
      //高度
      bloomId: 0,
      //不发光: 0, 弱发光: 21, 中等发光: 22, 强发光: 23,
      extended: 'three',
      layer: 'flowVecLine',
      beforeId: beforeId,
      _ui: _ui,
    }; // 修改json

    jsonObj.layers = jsonObj.layers.map(function(item) {
      if (id === item.id) {
        return _objectSpread2(
          _objectSpread2({}, item),
          {},
          {
            flowingRoad: del
              ? null
              : _objectSpread2(
                  _objectSpread2(
                    _objectSpread2(_objectSpread2({}, m), item.flowingRoad),
                    otherProps,
                  ),
                  {},
                  {
                    _ui: _objectSpread2(_objectSpread2({}, item._ui), _ui),
                  },
                ),
          },
        );
      }

      return item;
    }); // 删除

    if (del) {
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
      }

      return;
    }

    var layer = map.getLayer(layerID);

    if (layer) {
      // 修改
      layer.implementation.flowVecLineObject.setProps(props);
      return;
    } // 添加

    addExtendedLayer(map, _objectSpread2(_objectSpread2({}, m), otherProps));
  };

  var layersInfo = {
    background: {
      layer: 'background',
      label: '背景',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    outside_R: {
      layer: 'outside_R',
      label: '市域面',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    poi_city: {
      layer: 'poi_city',
      label: '城市 poi',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    poi_county: {
      layer: 'poi_city',
      label: '区县 poi',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    poi_town: {
      layer: 'poi_town',
      label: '乡镇 poi',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    poi_outside: {
      layer: 'poi_outside',
      label: '市域 poi',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    poi_community: {
      layer: 'poi_community',
      label: '社区 poi',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    poi_hospital: {
      layer: 'poi_hospital',
      label: '医院 poi',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    poi_school: {
      layer: 'poi_school',
      label: '学校 poi',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    boundary_R: {
      layer: 'boundary_R',
      label: '界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    boundary_province_R: {
      layer: 'boundary_province_R',
      label: '省界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    boundary_city_R: {
      layer: 'boundary_city_R',
      label: '市界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    boundary_county_R: {
      layer: 'boundary_county_R',
      label: '区县界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    boundary_town_R: {
      layer: 'boundary_town_R',
      label: '乡镇界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      _ui: {},
    },
    boundary_L: {
      layer: 'boundary_L',
      label: '界线',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    boundary_province_L: {
      layer: 'boundary_province_L',
      label: '省界线',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    boundary_city_L: {
      layer: 'boundary_city_L',
      label: '市界线',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    boundary_county_L: {
      layer: 'boundary_county_L',
      label: '区县界线',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    boundary_town_L: {
      layer: 'boundary_town_L',
      label: '乡镇界线',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    ocean_R: {
      layer: 'ocean_R',
      label: '海洋',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    water_R: {
      layer: 'water_R',
      label: '水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      flowingWater: {},
      overlay: [],
      segment: [],
      _ui: {},
    },
    water_R_1: {
      layer: 'water_R_1',
      label: '一级水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      flowingWater: {},
      overlay: [],
      segment: [],
      _ui: {},
    },
    water_R_2: {
      layer: 'water_R_2',
      label: '二级水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    water_R_3: {
      layer: 'water_R_3',
      label: '三级水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    greenland_R: {
      layer: 'greenland_R',
      label: '绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    greenland_R_1: {
      layer: 'greenland_R_1',
      label: '一级绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    greenland_R_2: {
      layer: 'greenland_R_2',
      label: '二级绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    greenland_R_3: {
      layer: 'greenland_R_3',
      label: '三级绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    road_L_1: {
      layer: 'road_L_1',
      label: '一级道路',
      id: '',
      visibility: 'visible',
      'line-color': 'rgba(14, 41, 90, 1)',
      'line-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    labelline_1: {
      layer: 'labelline_1',
      label: '一级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    // labelline_L_1 兼容以前的命名错误，正确的应该是labelline_1
    labelline_L_1: {
      layer: 'labelline_L_1',
      label: '一级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    road_L_2: {
      layer: 'road_L_2',
      label: '二级道路',
      id: '',
      visibility: 'visible',
      'line-color': 'rgba(14, 41, 90, 1)',
      'line-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    labelline_2: {
      layer: 'labelline_2',
      label: '二级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    road_L_3: {
      layer: 'road_L_3',
      label: '三级道路',
      id: '',
      visibility: 'visible',
      'line-color': 'rgba(14, 41, 90, 1)',
      'line-pattern': '',
      overlay: [],
      segment: [],
      _ui: {},
    },
    labelline_3: {
      layer: 'labelline_3',
      label: '三级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {},
    },
    building_R: {
      layer: 'building_R',
      label: '建筑物',
      id: '',
      visibility: 'visible',
      'fill-extrusion-color': '',
      'fill-extrusion-pattern': '',
      roof: {
        id: '',
      },
      overlay: [],
      segment: [],
      _ui: {},
    },
    sky: {
      layer: 'sky',
      id: '',
      label: '天空',
      urls: [],
      visible: true,
      _ui: {},
      extended: 'three',
    },
    risingLine: {
      layer: 'risingLine',
      id: '',
      label: '上升线条',
      bounds: [],
      visible: true,
      _ui: {},
      extended: 'three',
    },
    model: {
      layer: 'model',
      id: '',
      label: '模型',
      url: '',
      origin: [],
      _ui: {},
      extended: 'mapbox',
    },
    'marker-model': {
      layer: 'marker-model',
      id: '',
      label: '自由标记',
      url: '',
      origin: [],
      scale: 1,
      _ui: {},
      extended: 'deckgl',
    },
    tiles: {
      layer: 'tiles',
      id: '',
      label: '影像',
      url: '',
      _ui: {},
      extended: 'mapbox',
    },
    image: {
      layer: 'image',
      id: '',
      label: '影像',
      type: 'raster',
      source: 'image',
      layout: {
        visibility: 'visible',
      },
    },
  };

  var _excluded$2 = ['layout', 'paint', 'roof'],
    _excluded2$1 = ['layout', 'paint'];
  var backgroundLayerId = Enum.backgroundLayerId,
    image = Enum.image,
    cityPoiLayerId = Enum.cityPoiLayerId,
    countyPoiLayerId = Enum.countyPoiLayerId,
    townPoiLayerId = Enum.townPoiLayerId;
  /**
   * 检查格式
   * @param {*} jsonObj
   * @returns
   */

  var checkFormat = function checkFormat(jsonObj) {
    var name = jsonObj.name;
    var city = name === null || name === void 0 ? void 0 : name.split('_')[0];

    if (!city) {
      var msg = 'json 格式不正确，无法获取当前城市';
      console.error(msg);
      alert(msg);
      return false;
    }

    return city;
  };
  /**
   * 添加 layer, label 属性, 平铺 layout paint
   * @param {*} layer
   * @param {*} label
   * @returns
   */

  var tansformLayers = function tansformLayers(layers, city) {
    return layers.map(function(item) {
      var layout = item.layout,
        paint = item.paint,
        roof = item.roof,
        other = _objectWithoutProperties(item, _excluded$2); // 添加 layer, label 属性

      var zoom, layer, label;

      if (!other.extended) {
        var layerID = other.id.replace(city + '_', '');
        layer = layerID.split('-')[0];
        zoom = layerID.split('-')[1];
      } else {
        layer = other.layer;
      }

      if (zoom) {
        label = layersInfo[layer].label; //+ '-' + zoom || ''; 暂时去掉
      } else {
        label = layersInfo[layer].label;
      }

      var layerInfo = _objectSpread2(
        _objectSpread2(_objectSpread2(_objectSpread2({}, other), layout), paint),
        {},
        {
          layer: layer,
          label: label,
        },
      );

      var layerOtherInfo = {
        overlay: [],
        segment: [],
        _ui: {},
      }; // 处理水

      if (layer.includes('water_R')) {
        return _objectSpread2(
          _objectSpread2(
            {
              flowingWater: null,
            },
            layerInfo,
          ),
          layerOtherInfo,
        );
      } // 处理楼顶

      if (roof) {
        var _layout = roof.layout,
          _paint = roof.paint,
          _other = _objectWithoutProperties(roof, _excluded2$1);

        return _objectSpread2(
          _objectSpread2(_objectSpread2({}, layerOtherInfo), layerInfo),
          {},
          {
            roof: _objectSpread2(
              _objectSpread2(_objectSpread2(_objectSpread2({}, layerOtherInfo), _other), _layout),
              _paint,
            ),
          },
        );
      } // 处理非扩展图层

      if (!other.extended) {
        return _objectSpread2(_objectSpread2({}, layerOtherInfo), layerInfo);
      }

      return layerInfo;
    });
  };
  /**
   * 过滤掉扩展图层
   * @param {*} jsonObj
   * @returns
   */

  var filterExtendedLayers = function filterExtendedLayers(jsonObj) {
    var layers = jsonObj.layers.filter(function(layer) {
      return !layer.extended;
    });
    return _objectSpread2(
      _objectSpread2({}, jsonObj),
      {},
      {
        layers: layers,
      },
    );
  };
  /**
   * 解析json
   * @param {*} jsonObj
   * @returns
   */

  var parseJson = function parseJson(jsonObj) {
    var city = checkFormat(jsonObj);

    if (!city) {
      return null;
    }

    var layers = jsonObj.layers;
    layers = layers.filter(function(layer) {
      var layerKeys = Object.keys(layersInfo);
      var isLayer = layerKeys.some(function(key) {
        return layer.id.includes(city + '_' + key);
      });
      return (
        isLayer ||
        layer.id === backgroundLayerId ||
        layer.id === image ||
        layer.id === cityPoiLayerId ||
        layer.id === countyPoiLayerId ||
        layer.id === townPoiLayerId ||
        layer.extended
      );
    });
    return tansformLayers(layers, city);
  };

  var _excluded$1 = ['origin', 'altitude'],
    _excluded2 = ['origin', 'altitude'],
    _excluded3 = ['origin', 'altitude'];

  var toThreeColor = function toThreeColor(props) {
    if (props !== null && props !== void 0 && props.color) {
      return _objectSpread2(
        _objectSpread2({}, props),
        {},
        {
          color: new layers3D.THREE.Color(props.color),
        },
      );
    }

    return props;
  };
  /**
   * 环境光
   * @param {*} light
   * @param {*} props { color intensity }
   */

  var setAmbientLightProps = function setAmbientLightProps(DBox, light, props) {
    if (props.host === 'model') {
      var _light$model;

      light.model = _objectSpread2(
        _objectSpread2({}, light.model),
        {},
        {
          ambientLight: _objectSpread2(
            _objectSpread2(
              {},
              (_light$model = light.model) === null || _light$model === void 0
                ? void 0
                : _light$model.ambientLight,
            ),
            props,
          ),
        },
      );
      DBox.lightSetting.setAmbientLightProps(toThreeColor(light.model.ambientLight), 'model');
    } else {
      light.ambientLight = _objectSpread2(_objectSpread2({}, light.ambientLight), props);
      DBox.lightSetting.setAmbientLightProps(toThreeColor(light.ambientLight), 'scene');
    }
  };
  /**
   * 方向光
   * @param {*} light
   * @param {*} props { color intensity }
   */

  var setDirectionalLightProps = function setDirectionalLightProps(DBox, light, props) {
    if (props.host === 'model') {
      var _light$model2;

      light.model = _objectSpread2(
        _objectSpread2({}, light.model),
        {},
        {
          directionalLight: _objectSpread2(
            _objectSpread2(
              {},
              (_light$model2 = light.model) === null || _light$model2 === void 0
                ? void 0
                : _light$model2.directionalLight,
            ),
            props,
          ),
        },
      );
      DBox.lightSetting.setDirectionalLightProps(
        toThreeColor(light.model.directionalLight),
        'model',
      );
    } else {
      light.directionalLight = _objectSpread2(_objectSpread2({}, light.directionalLight), props);
      DBox.lightSetting.setDirectionalLightProps(toThreeColor(light.directionalLight), 'scene');
    }
  };
  /**
   * 点光源
   */

  var pointLigh = function pointLigh(DBox, light, props, del) {
    // 删除
    if (del) {
      var _point2;

      var _point;

      light.pointLigh = light.pointLigh.filter(function(item) {
        if (item.id === props.id) {
          _point = item;
          return false;
        }

        return true;
      });
      DBox.lightSetting.removePointLight(
        props.id,
        ((_point2 = _point) === null || _point2 === void 0 ? void 0 : _point2.host) || 'scene',
      );
      return;
    } // 修改

    if (props.id) {
      var preProps;
      light.pointLigh = light.pointLigh.map(function(item, index) {
        if (item.id === props.id) {
          preProps = item;
          return _objectSpread2(_objectSpread2({}, item), props);
        }

        return item;
      });

      var _preProps$props = _objectSpread2(_objectSpread2({}, preProps), props),
        origin = _preProps$props.origin,
        altitude = _preProps$props.altitude,
        otherProps = _objectWithoutProperties(_preProps$props, _excluded$1);

      var _origin = _slicedToArray(origin, 2),
        x = _origin[0],
        y = _origin[1];

      DBox.lightSetting.setPointLightProps(
        toThreeColor({
          color: otherProps.color,
          intensity: otherProps.intensity,
          distance: otherProps.distance / 100,
          lng: x,
          lat: y,
          height: altitude / 1000,
        }),
        otherProps.id,
        otherProps.host || 'scene',
      );
      return;
    } // 添加

    var point = DBox.lightSetting.addPointLight('scene');
    light.pointLigh.push(
      _objectSpread2(
        _objectSpread2({}, props),
        {},
        {
          id: point.index,
          name: point.index,
          host: props.host || 'scene',
        },
      ),
    );
    return point;
  };
  /**
   * 聚光灯
   */

  var spotLight = function spotLight(DBox, light, props, del) {
    // 删除
    if (del) {
      var _point4;

      var _point3;

      light.spotLight = light.spotLight.filter(function(item) {
        if (item.id === props.id) {
          _point3 = item;
          return false;
        }

        return true;
      });
      DBox.lightSetting.removeSpotLight(
        props.id,
        ((_point4 = _point3) === null || _point4 === void 0 ? void 0 : _point4.host) || 'scene',
      );
      return;
    } // 修改

    if (props.id) {
      var preProps;
      light.spotLight = light.spotLight.map(function(item, index) {
        if (item.id === props.id) {
          preProps = item;
          return _objectSpread2(_objectSpread2({}, item), props);
        }

        return item;
      });

      var _preProps$props2 = _objectSpread2(_objectSpread2({}, preProps), props),
        origin = _preProps$props2.origin,
        altitude = _preProps$props2.altitude,
        otherProps = _objectWithoutProperties(_preProps$props2, _excluded2);

      var _origin2 = _slicedToArray(origin, 2),
        x = _origin2[0],
        y = _origin2[1];

      DBox.lightSetting.setSpotLightProps(
        toThreeColor({
          color: otherProps.color,
          intensity: otherProps.intensity,
          distance: otherProps.distance / 100,
          lng: x,
          lat: y,
          height: altitude / 1000,
        }),
        otherProps.id,
        otherProps.host || 'scene',
      );
      return;
    } // 添加

    var point = DBox.lightSetting.addSpotLight('scene');
    light.spotLight.push(
      _objectSpread2(
        _objectSpread2({}, props),
        {},
        {
          id: point.index,
          name: point.index,
          host: props.host || 'scene',
        },
      ),
    );
    return point;
  };
  /**
   * 初始化灯光
   */

  var init = function init(DBox, light) {
    var ambientLight = light.ambientLight,
      directionalLight = light.directionalLight,
      pointLigh = light.pointLigh,
      model = light.model;

    var addLight = function addLight(host) {
      DBox.lightSetting.setAmbientLightProps(toThreeColor(ambientLight), host);
      DBox.lightSetting.setDirectionalLightProps(toThreeColor(directionalLight), host);

      if ((pointLigh === null || pointLigh === void 0 ? void 0 : pointLigh.length) > 0) {
        pointLigh.forEach(function(item) {
          var origin = item.origin,
            altitude = item.altitude,
            otherProps = _objectWithoutProperties(item, _excluded3);

          var _origin3 = _slicedToArray(origin, 2),
            x = _origin3[0],
            y = _origin3[1];

          var point = DBox.lightSetting.addPointLight(host);
          DBox.lightSetting.setPointLightProps(
            toThreeColor({
              color: otherProps.color,
              intensity: otherProps.intensity,
              distance: otherProps.distance / 100,
              lng: x,
              lat: y,
              height: altitude / 100,
            }),
            point.index,
            host,
          );
        });
      }
    };

    if (model) {
      window.modelLoadedCallback = function() {
        addLight('model');
      };
    } else {
      addLight('scene');
    }
  };

  var download = function download(json) {
    var a = document.createElement('a');
    a.href = json && 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json));
    a.download = 'spaceojoStyle.json';
    document.documentElement.append(a);
    a.click();
    a.remove();
  };

  var buildingBaseSuffix$1 = Enum.buildingBaseSuffix;

  var BaseMap = /*#__PURE__*/ (function() {
    function BaseMap(map) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$isFly = _ref.isFly,
        isFly = _ref$isFly === void 0 ? true : _ref$isFly;

      _classCallCheck(this, BaseMap);

      // 重写 map.addLayer 方法，添加beforeId的判断逻辑
      var addLayer = map.addLayer.bind(map);

      map.addLayer = function(layer, beforeId) {
        if (typeof beforeId === 'undefined' || beforeId.includes('three-')) {
          addLayer(layer);
        } else {
          addLayer(layer, beforeId);
        }
      };

      this.data = {
        settings: {
          isPopup: true,
        },
      };
      this.map = map;
      this.onClick = null;
      this.markers = new Map();
      this.map.DBox = new layers3D__namespace.threeBox(map, map.painter.context.gl);
      this.layerClick = {};
      this.isFly = isFly;
    }
    /**
     * 提示框
     */

    _createClass(BaseMap, [
      {
        key: 'isPopup',
        get: function get() {
          return this.data.settings.isPopup;
        },
        /**
         * 默认灯光
         */
        set: function set(isPopup) {
          this.data.settings.isPopup = isPopup;
        },
      },
      {
        key: 'defaultLight',
        get: function get() {
          return {
            ambientLight: {
              color: '#ccc',
              intensity: 0.35,
            },
            directionalLight: {
              color: '#404040',
              intensity: 0.4,
            },
            pointLigh: [],
            spotLight: [],
          };
        },
        /**
         * 可编辑图层
         */
      },
      {
        key: 'layers',
        get: function get() {
          if (this.data.layers) {
            return parseJson(this.data);
          }

          return [];
        },
        /**
         * 给楼添加楼顶属性
         */
      },
      {
        key: 'addRoof',
        value: function addRoof() {
          var layers = this.data.layers;
          this.data.layers = layers.map(function(layer, index) {
            if (
              layer.id.includes('building_R') &&
              layer.type === 'fill-extrusion' &&
              layer.paint['fill-extrusion-base'] === void 0 &&
              layer.paint['fill-extrusion-height'] &&
              !layer.roof
            ) {
              return _objectSpread2(
                _objectSpread2({}, layer),
                {},
                {
                  roof: _objectSpread2(
                    _objectSpread2({}, layer),
                    {},
                    {
                      id: layer.id + buildingBaseSuffix$1,
                      layout: _objectSpread2(
                        _objectSpread2({}, layer.layout),
                        {},
                        {
                          visibility: 'none',
                        },
                      ),
                      paint: _objectSpread2(
                        _objectSpread2({}, layer.paint),
                        {},
                        {
                          'fill-extrusion-base': _objectSpread2(
                            {},
                            layer.paint['fill-extrusion-height'],
                          ),
                        },
                      ),
                    },
                  ),
                },
              );
            }

            return layer;
          });
        },
        /**
         * 添加楼顶图层
         */
      },
      {
        key: 'addBuildingBase',
        value: function addBuildingBase(id, roof) {
          var buildingIndex = this.data.layers.findIndex(function(layer, key) {
            return layer.id === id;
          });
          this.map.addLayer(roof, this.data.layers[buildingIndex + 1].id);
        },
        /**
         * map click 事件
         */
      },
      {
        key: 'initClick',
        value: function initClick(callBack) {
          var map = this.map;
          var context = this;
          map.on('load', function() {
            var popup = new mapboxgl__default['default'].Popup({
              closeButton: true,
              closeOnClick: false,
              anchor: 'bottom',
            });
            context.popup = popup;
            map.on('click', function(e) {
              var _features$, _features$2;

              // set bbox as 5px reactangle area around clicked point
              var features = map.queryRenderedFeatures(e.point);
              var properties =
                features[0] &&
                Object.keys(
                  (_features$ = features[0]) === null || _features$ === void 0
                    ? void 0
                    : _features$.properties,
                );
              callBack && callBack(properties, e.lngLat);
              context.onClick && context.onClick(properties, e.lngLat);
              var description =
                (_features$2 = features[0]) === null || _features$2 === void 0
                  ? void 0
                  : _features$2.properties;

              if (description && Object.keys(description).length && context.isPopup) {
                var descriptionStr = JSON.stringify(description);
                descriptionStr = descriptionStr
                  .replace(/{/, '<div>')
                  .replace(/}/, '</div>')
                  .replace(/,/g, '<br/>');
                popup
                  .setLngLat(e.lngLat)
                  .setHTML('<div class="popup" style="color: #000">' + descriptionStr + '</div>')
                  .addTo(map);
              }
            });
          });
        },
        /**
         * 导航控制
         * @param { Boolean } visible
         * @param { Object } options { showCompass 指南针按钮 showZoom 放大和缩小按钮 visualizePitch 旋转指南针的Y轴来显示俯仰角度 }
         * @param { String } position 'top-left' ， 'top-right' ， 'bottom-left' ，和 'bottom-right' 。默认为 'top-right'
         */
      },
      {
        key: 'navigationControl',
        value: function navigationControl(param) {
          this.data.navigation = _objectSpread2(_objectSpread2({}, this.data.navigation), param);
          var _this$data$navigation = this.data.navigation,
            visible = _this$data$navigation.visible,
            options = _this$data$navigation.options,
            _this$data$navigation2 = _this$data$navigation.position,
            position = _this$data$navigation2 === void 0 ? 'top-right' : _this$data$navigation2;

          if (visible) {
            this.NavigationControl = new mapboxgl__default['default'].NavigationControl(options);
            this.map.addControl(this.NavigationControl, position);
          } else if (this.NavigationControl) {
            this.map.removeControl(this.NavigationControl);
          }
        },
        /**
         * logo 显示隐藏 | 图片地址
         * @param {visible, url, width, height, position: { right | left }}
         */
      },
      {
        key: 'logo',
        value: function logo(param) {
          this.data.logo = _objectSpread2(_objectSpread2({}, this.data.logo), param);
          var _this$data$logo = this.data.logo,
            visible = _this$data$logo.visible,
            url = _this$data$logo.url,
            width = _this$data$logo.width,
            height = _this$data$logo.height,
            position = _this$data$logo.position;

          if (typeof url === 'string') {
            var styleW = width ? 'width:'.concat(width, 'px;') : '';
            var styleH = height ? 'height:'.concat(height, 'px;') : '';
            var logoImg = document.querySelector('.mapboxgl-ctrl-logo');

            if (logoImg) {
              logoImg.outerHTML =
                '<img style=' + styleW + styleH + ' class="mapboxgl-ctrl-logo" src=' + url + ' />';
            }
          }

          if (typeof visible === 'boolean') {
            var _logoImg = document.getElementsByClassName('mapboxgl-ctrl-logo')[0];

            if (_logoImg) {
              _logoImg.style.visibility = visible ? 'visible' : 'hidden';
            }
          }

          if (position) {
            var logoBox = document.querySelector('.mapboxgl-ctrl-bottom-left');

            if (logoBox) {
              logoBox.className = 'mapboxgl-ctrl-bottom-'.concat(position);
            }
          }
        },
        /**
         * 添加标记
         * @param {*} coordinates
         * @param {*} el
         */
      },
      {
        key: 'addMarker',
        value: function addMarker(coordinates, el, offset) {
          var _el = document.createElement('div'); // _el.innerText = '标记';

          _el.className = 'marker';
          _el.style.width = '100px';
          _el.style.height = '100px';
          _el.style.border = '1px solid #fff';
          var marker = new mapboxgl__default['default'].Marker(el || _el, {
            anchor: 'center',
            offset: offset,
          })
            .setLngLat(coordinates)
            .addTo(this.map);
          var t = new Date().getTime();
          this.markers.set(t, marker);
          return t;
        },
        /**
         * 删除标记
         * @param {*} marker
         */
      },
      {
        key: 'removeMarker',
        value: function removeMarker(markerId) {
          this.markers.get(markerId).remove();
          this.markers['delete'](markerId);
        },
        /**
         * 飞到指定位置
         * @param {*} {center:[], zoom: 0}
         */
      },
      {
        key: 'flyTo',
        value: function flyTo(options) {
          this.map.flyTo(options);
        },
        /**
         * 飞到指定区域
         */
      },
      {
        key: 'fitBounds',
        value: function fitBounds(bounds, options) {
          this.map.fitBounds(bounds, options);
        },
        /**
         * 设置相机
         * { isPan = true, isZoom = true, isRotate = true }
         */
      },
      {
        key: 'setCamera',
        value: function setCamera(param) {
          var option = param || {}; // 旋转

          if (typeof option.isRotate === 'boolean') {
            this.data.isRotate = option.isRotate;

            if (option.isRotate) {
              this.map.dragRotate.enable();
            } else {
              this.map.dragRotate.disable();
            }
          } // 缩放

          if (typeof option.isZoom === 'boolean') {
            this.data.isZoom = option.isZoom;

            if (option.isZoom) {
              this.map.scrollZoom.enable();
            } else {
              this.map.scrollZoom.disable();
            }
          } // 平移

          if (typeof option.isPan === 'boolean') {
            this.data.isPan = option.isPan;

            if (option.isPan) {
              this.map.dragPan.enable();
            } else {
              this.map.dragPan.disable();
            }
          } // 相机位置

          if (!param) {
            var _this$map$getCenter = this.map.getCenter(),
              lng = _this$map$getCenter.lng,
              lat = _this$map$getCenter.lat;

            this.data.center = [lng, lat];
            this.data.zoom = this.map.getZoom();
            this.data.bearing = this.map.getBearing();
            this.data.pitch = this.map.getPitch();
          }
        },
        /**
         * 灯光设置
         * type ambientLight
         * props { color intensity: 0-1 }
         */
      },
      {
        key: 'setLightProps',
        value: function setLightProps(type, props, del) {
          if (type === 'ambientLight') {
            setAmbientLightProps(this.map.DBox, this.data.lights, props);
          }

          if (type === 'directionalLight') {
            setDirectionalLightProps(this.map.DBox, this.data.lights, props);
          }

          if (type === 'pointLigh') {
            return pointLigh(this.map.DBox, this.data.lights, props, del);
          }

          if (type === 'spotLight') {
            return spotLight(this.map.DBox, this.data.lights, props, del);
          }
        },
        /**
         * 下载地图样式json文件
         */
      },
      {
        key: 'downloadJson',
        value: function downloadJson() {
          download(this.data);
        },
        /**
         * 获取图层数据属性
         * @param {*} layerId
         * @returns
         */
      },
      {
        key: 'getLayerFeatureProps',
        value: function getLayerFeatureProps(layerId) {
          var props = [];
          var feature = this.map.queryRenderedFeatures({
            layers: [layerId],
          })[0];

          if (feature) {
            var properties = feature.properties;
            return Object.keys(properties);
          }

          return props;
        },
        /**
         * 删除 three 图层释放资源
         */
      },
      {
        key: 'destroy',
        value: function destroy() {
          // 此方法时不时会引起报错，不再执行，好像也没啥用，似乎并没有释放资源，如果出现内存泄漏，让底图开发人员排查问题
          // if (!this.data?.layers?.length) {
          //   return;
          // }
          // this.data.layers.forEach(item => {
          //   const { threeBuilding, flowingWater, flowingRoad } = item;
          //   const getItemProp = prop => {
          //     return (
          //       (threeBuilding && threeBuilding[prop]) ||
          //       (flowingWater && flowingWater[prop]) ||
          //       (flowingRoad && flowingRoad[prop]) ||
          //       (item.extended === 'three' && item[prop])
          //     );
          //   };
          //   const id = getItemProp('id');
          //   const layer = this.map.getLayer(id);
          //   if (layer) {
          //     const type = getItemProp('layer');
          //     const threeObject = layer.implementation[type + 'Object'];
          //     threeObject ? threeObject.remove() : console.error(`layer: ${type} not found`);
          //   }
          // });
        },
      },
    ]);

    return BaseMap;
  })();

  var _excluded = ['id', 'layer', '_ui'];
  var buildingBaseSuffix = Enum.buildingBaseSuffix;

  var BaseLayer = /*#__PURE__*/ (function(_BaseMap) {
    _inherits(BaseLayer, _BaseMap);

    var _super = _createSuper(BaseLayer);

    function BaseLayer() {
      _classCallCheck(this, BaseLayer);

      return _super.apply(this, arguments);
    }

    _createClass(BaseLayer, [
      {
        key: 'init',
        value:
          /**
           * 初始化图层样式和基本参数
           */
          function init$1(d, callBack) {
            var _this = this;

            // 检查格式
            if (!checkFormat(d)) {
              return;
            }

            var mapboxLayers = d.layers.filter(function(item) {
              return !item.extended;
            });
            var extendedLayers = d.layers.filter(function(item) {
              return item.extended;
            }); // 把扩展图层放到最后

            d.layers = [].concat(
              _toConsumableArray(mapboxLayers),
              _toConsumableArray(extendedLayers),
            ); // 密封对象禁止外部增、删

            this.data = Object.seal(
              _objectSpread2(
                _objectSpread2({}, d),
                {},
                {
                  logo: _objectSpread2({}, d.logo),
                  navigation: _objectSpread2({}, d.navigation),
                  markerGroups: d.markerGroups || [],
                  lights: d.lights || this.defaultLight,
                  settings: d.settings || this.data.settings,
                },
              ),
            );
            var map = this.map;
            var data = this.data;
            map.data = data; // 需要在解析之前加上楼顶属性

            this.addRoof(); // 飞到默认位置

            this.isFly && map.flyTo(_objectSpread2({}, data)); // 此处强制更新，为了让下面styledata保证一定执行

            map.setStyle(filterExtendedLayers(data), {
              diff: false,
            }); // 初始化扩展图层

            map.once('styledata', function(e) {
              console.log('styledata');
              try {
                _this.initExtendedLayers(_this.layers);
              } catch(e) {
                console.log(e, 'catch initExtendedLayers')
              }
              console.log(callBack, 'callBack');
              callBack && callBack();
            }); // 初始化logo

            this.logo(this.data.log); // 初始化导航

            this.navigationControl(this.data.navigation); // 初始化相机

            this.setCamera(d); // 初始化灯光

            init(this.map.DBox, this.data.lights);
            return data;
          },
        /**
         * 控制图层显示隐藏（目前只操作mapbox图层，不支持扩展图层）
         * @param { String } id 图层id
         * @param { Boolean } d 图层显示|隐藏
         */
      },
      {
        key: 'changeLayerVisibility',
        value: function changeLayerVisibility(id, d) {
          var _item = null;
          var visibility = d ? 'visible' : 'none'; // 修改 json

          this.data.layers.forEach(function(item) {
            var _item$roof;

            if (id === item.id) {
              _item = item;

              if (item.layout) {
                item.layout.visibility = visibility;
              } else {
                item.layout = {
                  visibility: visibility,
                };
              }
            } // 处理楼顶

            if (
              ((_item$roof = item.roof) === null || _item$roof === void 0
                ? void 0
                : _item$roof.id) === ''.concat(id).concat(buildingBaseSuffix) &&
              id.includes('building_R')
            ) {
              if (item.roof.layout) {
                item.roof.layout.visibility = visibility;
              } else {
                item.roof.layout = {
                  visibility: visibility,
                };
              }
            }
          });
          this.map.setLayoutProperty(id, 'visibility', visibility); // 楼隐藏时把楼顶隐藏

          if (
            _item &&
            _item.id.includes('building_R') &&
            _item.type === 'fill-extrusion' &&
            !_item.paint['fill-extrusion-base']
          ) {
            this.map.setLayoutProperty(_item.id + buildingBaseSuffix, 'visibility', visibility);
          }
        },
        /**
         *
         * @param {*} layerId
         * @param {*} props
         * @param {*} { weight, bounds }
         * @returns
         */
      },
      {
        key: 'changeLayerProps',
        value: function changeLayerProps() {
          // 处理图层的颜色、贴图的叠加、分段
          if (Array.isArray(arguments[1])) {
            var layerId = arguments[0];
            var props = arguments[1];

            var _ref = arguments[2] || {},
              weight = _ref.weight,
              bounds = _ref.bounds,
              segmentType = _ref.segmentType,
              _ui = _ref._ui;

            this.changeColorImage({
              layerId: layerId,
              props: props,
              weight: weight,
              bounds: bounds,
              segmentType: segmentType,
              _ui: _ui,
            });
          }

          if (Object.prototype.toString.call(arguments[0]) === '[object Object]') {
            var _arguments$ = arguments[0],
              id = _arguments$.id,
              layer = _arguments$.layer,
              _ui2 = _arguments$._ui,
              _props = _objectWithoutProperties(_arguments$, _excluded); // 添加修改影像

            if (layer === 'tiles') {
              var _id = tilesLayer(this.map, this.data, arguments[0]);

              return _id;
            } // 添加修改模型

            if (layer === 'model') {
              return modelLayer(this.map, this.data, arguments[0]);
            } // 添加修改标记-模型

            if (layer === 'marker-model') {
              return markerModelLayer(this.map, this.data, arguments[0]);
            } // 添加修改天空

            if (layer === 'sky') {
              skyLayer(this.map, this.data, arguments[0]);
              return;
            } // 添加修改动态水

            if (layer === 'water') {
              waterLayer(this.map, this.data, arguments[0]);
              return;
            } // 添加修改上升线

            if (layer === 'risingLine') {
              risingLineLayer(this.map, this.data, arguments[0]);
              return;
            } // 添加修改楼块

            if (layer === 'building') {
              buildingLayer(this.map, this.data, arguments[0]);
              return;
            } // 添加修改流动线

            if (layer === 'flowVecLine') {
              flowVecLineLayer(this.map, this.data, arguments[0]);
              return;
            }

            this.changeColorImage({
              layerId: id,
              props: [_props],
              _ui: _ui2,
            });
          }

          return this.data;
        }, // 处理图层的颜色、贴图的叠加、分段
      },
      {
        key: 'changeColorImage',
        value: function changeColorImage(_ref2) {
          var layerId = _ref2.layerId,
            props = _ref2.props,
            weight = _ref2.weight,
            bounds = _ref2.bounds,
            segmentType = _ref2.segmentType,
            _ui = _ref2._ui;

          // 分段设置
          if (Array.isArray(props) && weight) {
            // 新分段方式通过添加新图层加过滤属性实现
            segmentLayer(this.map, this.data, layerId, props, weight, segmentType, _ui);
          } else {
            // 统一设置
            if ((props === null || props === void 0 ? void 0 : props.length) === 1) {
              // 单属性设置
              var _props2 = _slicedToArray(props, 1),
                _props2$ = _props2[0],
                fieldName = _props2$.fieldName,
                fieldValue = _props2$.fieldValue; // 添加贴图

              if (fieldName.includes('-pattern')) {
                addMappingLayer(this.map, this.data, layerId, fieldName, fieldValue, _ui);
              } else {
                // 修改非贴图图层属性
                paintFn[fieldName](this.map, this.data, layerId, fieldValue, _ui);
              }
            }

            if ((props === null || props === void 0 ? void 0 : props.length) > 1) {
              // 处理叠加
              addOverlayLayer(this.map, this.data, layerId, props, bounds, _ui);
            }
          }
        },
        /**
         * 从styleJson读取自定图层添加到map
         */
      },
      {
        key: 'initExtendedLayers',
        value: function initExtendedLayers(layers) {
          var _this2 = this;

          var context = this;

          if (Array.isArray(layers)) {
            // eslint-disable-next-line no-unused-vars
            var _iterator = _createForOfIteratorHelper(layers),
              _step;

            try {
              var _loop = function _loop() {
                var layer = _step.value;

                // 楼顶
                if (layer.id.includes('building_R') && layer.roof) {
                  // 因为 this.layers 里面的属性被扁平化了，需要从this.data.layers取数据
                  var roof = _this2.data.layers.find(function(item) {
                    return item.id === layer.id;
                  }).roof;

                  _this2.addBuildingBase(layer.id, roof);

                  overlay_segment(layer.roof);
                } // three 楼块

                if (layer.id.includes('building_R') && layer.threeBuilding) {
                  addExtendedLayer(_this2.map, layer.threeBuilding);
                } // 流动水

                if (layer.id.includes('water_R') && layer.flowingWater) {
                  addExtendedLayer(_this2.map, layer.flowingWater);
                } // 流动线

                if (layer.id.includes('road_') && layer.flowingRoad) {
                  addExtendedLayer(_this2.map, layer.flowingRoad);
                } // 第三方图层

                if (layer.extended) {
                  addExtendedLayer(_this2.map, layer);
                }

                overlay_segment(layer);

                function overlay_segment(layer) {
                  // 叠加图层
                  if (Array.isArray(layer.overlay) && layer.overlay.length > 0) {
                    addOverlayLayer(context.map, context.data, layer.id, layer.overlay);
                  } // 分段图层

                  if (Array.isArray(layer.segment) && layer.segment.length > 0) {
                    segmentLayer(
                      context.map,
                      context.data,
                      layer.id,
                      layer.segment,
                      layer.weight,
                      layer.segmentType,
                    );
                  }
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        },
        /**
         * 添加图层点击事件
         */
      },
      {
        key: 'initLayerClick',
        value: function initLayerClick(fn) {
          this.layerClick = fn;
          this.map.layerClick = fn;
        },
        /**
         * 设置标记分组
         */
      },
      {
        key: 'setMarkerGroups',
        value: function setMarkerGroups(name, remove) {
          if (remove) {
            this.data.markerGroups = this.data.markerGroups.filter(function(item) {
              return item !== name;
            });
          } else {
            this.data.markerGroups.push(name);
          }
        },
      },
    ]);

    return BaseLayer;
  })(BaseMap);

  exports['default'] = BaseLayer;
  exports.getLayerFieldsName = getFieldName;
  exports.getLayerLabel = getLabel;
  exports.layerfieldsObj = fieldObj;

  Object.defineProperty(exports, '__esModule', { value: true });
});
