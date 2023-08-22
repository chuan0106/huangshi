//深圳数据
// const urlConfig={
//   origin:[114.1001,22.6141],
//   tempStyle2Url:"http://114.255.136.222:9200/styles/shenzhen_building_aquamarine_separation/style.json",
//   tempWaterUrl:"./json/shenzhen/shenzhen_water_R.json",
//   tempOdUrl:"./json/shenzhen/od_test.json",
//   tempFlowVecLineUrl:"./json/shenzhen/shenzhen_road_L_1.json",
//   tempskyUrl:[
//     "http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/posx.jpg",
//     "http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/negx.jpg",
//     "http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/posy.jpg",
//     "http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/negy.jpg",
//     "http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/posz.jpg",
//     "http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/negz.jpg"
//   ],
//   addLayerNameBackground:"background",
//   addLayerNameBuilding:"shenzhen_building_R-11",
// };

//浦口数据
const urlConfig = {
  origin: [118.570986, 32.115588],
  tempStyle1Url: './json/pukou/nanjing_pukou_blue_small.json',
  tempStyle2Url: './json/pukou/nanjing_pukou_blue.json',
  tempWaterUrl: './json/pukou/pukou_water_R.json',
  tempOdUrl: './json/pukou/od_test.json',
  tempFlowVecLineUrl: './json/pukou/pukou_flowline_L.json',
  tempRoad1Url: './json/pukou/pukou_road_L_12.json',
  tempBuildingUrl : "http://114.255.136.222:7000/nanjing_pukou/bounds_file_pukou/pukouConfig.json",
  tempskyUrl: [
    'http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/posx.jpg',
    'http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/negx.jpg',
    'http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/posy.jpg',
    'http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/negy.jpg',
    'http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/posz.jpg',
    'http://120.53.224.45:8000/image/baseSceneEditor/sky/sky13/negz.jpg',
  ],
  tempBuildingTextureUrl : {
    mapUrl: 'http://120.53.224.45:8000/dataeye/v1/data/image/get?imageid=5f8d0da2d9ddfa353d8bae9c',
    specularTex: 'http://120.53.224.45:8000/dataeye/v1/data/image/get?imageid=601fb0fa355fff7798fef65e',
  },
  addLayerNameBackground: 'background',
  addLayerNameBuilding: 'pukou_building_R-14',
};

export { urlConfig };
