import { FlyToInterpolator } from 'deck.gl';
import { bbox } from '@turf/turf';
import WebMercatorViewport from 'viewport-mercator-project';
import { initMapOption, defaultMapOption } from './doMapOption/config';

//飞行动画
export const FlyToCamera = {
  transitionInterpolator: new FlyToInterpolator(),
  transitionDuration: 1000,
};

//数据请求体构建
export function doFortmatChart(tableHeaderData, fortmatChart, dataSource) {
  let dimension = [];
  for (const i in tableHeaderData) {
    if (tableHeaderData.hasOwnProperty(i)) {
      dimension.push({
        ...tableHeaderData[i],
        //index 为number 类型
        index: Number(tableHeaderData[i].index),
      });
    }
  }

  fortmatChart.dimension = dimension;
  //api的时候取值不一样
  if (dataSource?.data_type === 'api') {
    fortmatChart.catalog = dataSource?.id;
  }
  //共享数据 因为很多存储在一张表  所以需要特殊处理
  if (dataSource?.isPublic || dataSource?.is_public) {
    console.log('dataCql', dataSource?.dataCql);
    // let { dataUrl, dataCql, catalog, dataParam } = dataSource;
    if (dataSource?.dataCql?.indexOf('%25') > -1) {
      dataSource.dataCql = dataSource.dataCql.replace(/%25/, '%');
    }
    fortmatChart = {
      ...fortmatChart,
      extraSql: dataSource.dataCql,
    };
  }
  //删除无用
  for (let i in fortmatChart.where.conditions) {
    delete fortmatChart.where.conditions[i].type;
  }
  return fortmatChart;
}

export function layerDataGeoJson(layerCon, tableHeaderData) {
  let features = [];
  //geojson geometry和properties 构建   LineString 和  MultiLineString 的区分
  layerCon.layerData.forEach(element => {
    var geojsondata = element?.geojson && JSON.parse(element?.geojson);
    if (geojsondata) {
      var feature = {
        type: 'Feature',
        geometry: {
          type: geojsondata?.type === 'LineString' ? 'MultiLineString' : geojsondata?.type,
          coordinates:
            geojsondata?.type === 'LineString'
              ? [geojsondata?.coordinates]
              : geojsondata?.coordinates,
        },
        //构建所有属性  弹框使用
        properties: {
          ...element,
          table_head: tableHeaderData,
          id: layerCon.id,
        },
      };
      features.push(feature);
    }
  });
  return {
    type: 'FeatureCollection',
    features: features,
  };
}

//默认层级
export const defaultZoom = {
  minZoom: 0,
  maxZoom: 17,
};
//默认分段
export const defaultSection = {
  lineSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  scatterSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  heatSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  cubeSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  gridSection: {
    color: {
      otype: 1,
      colorSectionArr: [],
    },
  },
  hexagonSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  //迁徙图
  arcSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  regionSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  //聚合点
  sizeScatterSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  //图标图层样式
  iconSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  //动态轨迹图
  tripsSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
  //文本图层样式
  textSection: {
    color: {
      type: 1,
      colorSectionArr: [],
    },
  },
};

//图层属性兼容
export function layerProCon(layerCon) {
  console.log('sadfasdfsadfs', layerCon);
  let initialViewState = {
    bearing: -10.06711409395973,
    latitude: 39.699932837911874,
    longitude: 103.38593838598987,
    pitch: 0,
    zoom: 2.367807179059212,
  };
  //在这里进行兼容
  //地图样式配置
  if (layerCon?.style) {
    if (typeof layerCon?.style === 'string') {
      let mapStyle = JSON.parse(layerCon?.style);
      layerCon.style = initMapOption(mapStyle);
      console.log('mapStyleNEW', layerCon.style);
    } else {
      let mapStyle = layerCon?.style;
      layerCon.style = initMapOption(mapStyle);
      console.log('mapStyleNEW', layerCon.style);
    }
    //创建、获取时候进行全量兼容
  } else {
    layerCon.style = defaultMapOption();
  }
  //分段
  if (layerCon?.customGroup) {
    if (typeof layerCon?.customGroup === 'string') {
      let customGroup = JSON.parse(layerCon?.customGroup);
      layerCon.customGroup = customGroup;
      console.log('customGroup', customGroup);
    } else {
      let customGroup = layerCon?.customGroup;
      layerCon.customGroup = customGroup;
      console.log('customGroup', customGroup);
    }
  } else {
    layerCon.customGroup = defaultSection;
  }
  //显示层级
  if (layerCon?.zoom) {
    if (typeof layerCon?.zoom === 'string') {
      let zoom = JSON.parse(layerCon?.zoom);
      layerCon.zoom = zoom;
      console.log('zoom', zoom);
    } else {
      let zoom = layerCon?.zoom;
      layerCon.zoom = zoom;
      console.log('zoom', zoom);
    }
  } else {
    layerCon.zoom = defaultZoom;
  }
  //弹框信息
  if (layerCon?.slideTip) {
    if (typeof layerCon?.slideTip === 'string') {
      let slideTip = JSON.parse(layerCon?.slideTip);
      layerCon.slideTip = slideTip;
    } else {
      let slideTip = layerCon?.slideTip;
      layerCon.slideTip = slideTip;
    }
  } else {
  }
  //数据
  if (layerCon?.option) {
    if (typeof layerCon?.option === 'string') {
      let option = JSON.parse(layerCon?.option);
      layerCon.option = option;
    } else {
      let option = layerCon?.option;
      layerCon.option = option;
    }
  } else {
  }
  //图例
  if (layerCon?.legend && typeof layerCon?.option === 'string') {
    let legend = JSON.parse(layerCon?.legend);
    layerCon.legend = legend;
    console.log('legend', legend);
  } else {
  }

  //相机
  if (layerCon.LayerDataFeatures[0]) {
    let bboxBounds = bbox(layerCon.LayerDataGeoJson);
    // console.log('bboxData', bboxBounds);
    let viewport = new WebMercatorViewport({
      width: document.body.clientWidth - 613,
      height: document.body.clientHeight - 54,
      // width:
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
        bearing: 0,
        // ...FlyToCamera,
      };
    } else {
      let { longitude, latitude, zoom } = viewport.fitBounds(
        [
          [
            bboxBounds[0] === -180 ? -179 : bboxBounds[0],
            bboxBounds[1] === -90 ? -89 : bboxBounds[1],
          ],
          [bboxBounds[2] === 180 ? 179 : bboxBounds[2], bboxBounds[3] === 90 ? 89 : bboxBounds[3]],
        ],
        { padding: 0 },
      );
      initialViewState = {
        latitude: latitude,
        longitude: longitude,
        // cameraLock: false,
        // cameraLockType: 1,
        zoom: zoom,
        maxZoom: 17,
        pitch: 0,
        bearing: 0,
        // ...FlyToCamera,
      };
      layerCon.initialViewState = initialViewState;
      console.log('asDASDasdasdasD', zoom);
    }
  }
  if (layerCon?.camera) {
    // if (typeof layerCon?.camera === 'string') {
    //   let camera = JSON.parse(layerCon.camera);
    //   let newCamera = {
    //     ...initialViewState,
    //     ...camera,
    //     // ...FlyToCamera,
    //   };
    //   layerCon.initialViewState = newCamera;
    // } else {
    //   let newCamera = {
    //     ...initialViewState,
    //     ...layerCon.camera,
    //     // ...FlyToCamera,
    //   };
    //   layerCon.initialViewState = newCamera;
    // }
  } else {
    console.log('asdfas34353555', layerCon.initialViewState);
    // yield put({ type: 'getFirstViewCameraReducer', payload: newCamera });
  }
  if (layerCon?.defaultInteraction) {
    if (typeof layerCon?.defaultInteraction === 'string') {
      let defaultInteraction = JSON.parse(layerCon?.defaultInteraction);
      // layerCon.defaultInteraction = initMapOption(defaultInteraction);
      layerCon.defaultInteraction = defaultInteraction;
      console.log('defaultInteraction', layerCon.defaultInteraction);
    } else {
      let defaultInteraction = layerCon?.defaultInteraction;
      // layerCon.style = initMapOption(defaultInteraction);
      console.log('defaultInteraction', layerCon.defaultInteraction);
    }
    //创建、获取时候进行全量兼容
  } else {
    // layerCon.defaultInteraction = defaultMapOption();
    layerCon.defaultInteraction = null;
  }
  return layerCon;
}

//图层属性兼容
export function layerProCon1(layerCon) {
  console.log('sadfasdf111sadfs11111', layerCon?.layout);
  let initialViewState = {
    bearing: -10.06711409395973,
    latitude: 39.699932837911874,
    longitude: 103.38593838598987,
    pitch: 0,
    zoom: 2.367807179059212,
  };
  //在这里进行兼容
  //地图样式配置
  if (layerCon?.style) {
    if (typeof layerCon?.style === 'string') {
      let mapStyle = JSON.parse(layerCon?.style);
      layerCon.style = initMapOption(mapStyle);
      console.log('mapStyleNEW', layerCon.style);
    } else {
      let mapStyle = layerCon?.style;
      layerCon.style = initMapOption(mapStyle);
      console.log('mapStyleNEW', layerCon.style);
    }
    //创建、获取时候进行全量兼容
  } else {
    layerCon.style = defaultMapOption();
  }
  //分段
  if (layerCon?.customGroup) {
    if (typeof layerCon?.customGroup === 'string') {
      let customGroup = JSON.parse(layerCon?.customGroup);
      layerCon.customGroup = customGroup;
      console.log('customGroup', customGroup);
    } else {
      let customGroup = layerCon?.customGroup;
      layerCon.customGroup = customGroup;
      console.log('customGroup', customGroup);
    }
  } else {
    layerCon.customGroup = defaultSection;
  }
  //显示层级
  if (layerCon?.zoom) {
    if (typeof layerCon?.zoom === 'string') {
      let zoom = JSON.parse(layerCon?.zoom);
      layerCon.zoom = zoom;
      console.log('zoom', zoom);
    } else {
      let zoom = layerCon?.zoom;
      layerCon.zoom = zoom;
      console.log('zoom', zoom);
    }
  } else {
    layerCon.zoom = defaultZoom;
  }
  //弹框信息
  if (layerCon?.slideTip) {
    if (typeof layerCon?.slideTip === 'string') {
      let slideTip = JSON.parse(layerCon?.slideTip);
      layerCon.slideTip = slideTip;
    } else {
      let slideTip = layerCon?.slideTip;
      layerCon.slideTip = slideTip;
    }
  } else {
  }
  //数据
  if (layerCon?.option) {
    if (typeof layerCon?.option === 'string') {
      let option = JSON.parse(layerCon?.option);
      layerCon.option = option;
    } else {
      let option = layerCon?.option;
      layerCon.option = option;
    }
  } else {
  }
  //图例
  if (layerCon?.legend && typeof layerCon?.option === 'string') {
    let legend = JSON.parse(layerCon?.legend);
    layerCon.legend = legend;
    console.log('legend', legend);
  } else {
  }

  //相机
  if (layerCon.LayerDataFeatures[0]) {
    let bboxBounds = bbox(layerCon.LayerDataGeoJson);
    // console.log('bboxData', bboxBounds);
    console.log('layerCon?.layout?.width', layerCon?.layout?.width, layerCon?.layout?.height);
    let width = layerCon?.layout?.width;
    let height = layerCon?.layout?.height;
    let viewport = new WebMercatorViewport({
      width: width,
      height: height,
      // width: document.body.clientWidth,
      // height: document.body.clientHeight,
      // width:
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
        bearing: 0,
        // ...FlyToCamera,
      };
    } else {
      let { longitude, latitude, zoom } = viewport.fitBounds(
        [
          [
            bboxBounds[0] === -180 ? -179 : bboxBounds[0],
            bboxBounds[1] === -90 ? -89 : bboxBounds[1],
          ],
          [bboxBounds[2] === 180 ? 179 : bboxBounds[2], bboxBounds[3] === 90 ? 89 : bboxBounds[3]],
        ],
        { padding: 0 },
      );
      initialViewState = {
        latitude: latitude,
        longitude: longitude,
        // cameraLock: false,
        // cameraLockType: 1,
        zoom: zoom,
        maxZoom: 17,
        pitch: 0,
        bearing: 0,
        // ...FlyToCamera,
      };
      layerCon.initialViewState = initialViewState;
      console.log('asDASDasdasdasD', zoom);
    }
  }
  if (layerCon?.camera) {
    if (typeof layerCon?.camera === 'string') {
      let camera = JSON.parse(layerCon.camera);
      let newCamera = {
        ...initialViewState,
        ...camera,
        // ...FlyToCamera,
      };
      layerCon.initialViewState = newCamera;
    } else {
      let newCamera = {
        ...initialViewState,
        ...layerCon.camera,
        // ...FlyToCamera,
      };
      layerCon.initialViewState = newCamera;
    }
  } else {
    console.log('asdfas34353555', layerCon.initialViewState);
    // yield put({ type: 'getFirstViewCameraReducer', payload: newCamera });
  }
  if (layerCon?.defaultInteraction) {
    if (typeof layerCon?.defaultInteraction === 'string') {
      let defaultInteraction = JSON.parse(layerCon?.defaultInteraction);
      // layerCon.defaultInteraction = initMapOption(defaultInteraction);
      layerCon.defaultInteraction = defaultInteraction;
      console.log('defaultInteraction', layerCon.defaultInteraction);
    } else {
      let defaultInteraction = layerCon?.defaultInteraction;
      // layerCon.style = initMapOption(defaultInteraction);
      console.log('defaultInteraction', layerCon.defaultInteraction);
    }
    //创建、获取时候进行全量兼容
  } else {
    // layerCon.defaultInteraction = defaultMapOption();
    layerCon.defaultInteraction = null;
  }
  return layerCon;
}
