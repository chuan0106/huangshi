/*
 * @version: V1.0.0
 * @Author: dengtao
 * @Date: 2022-01-19 18:06:57
 * @LastEditors: yuchang
 * @LastEditTime: 2023-05-23 22:39:38
 * @FilePath: \cloud\src\utils\publickPage\index.js
 * @Descripttion: 
 */
/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2020年9月2日
 * @author xskj
 * @desc  静态配置文件
 * 
 *
 */
//deck.gl默认视角
import mapstyle from '../../../public/mapstyle/mapstyles.json'
const INITIAL_VIEW_STATE = {
    // width: 3680,//根据大屏尺寸定
    // height: 1680,//根据大屏尺寸定
    // latitude: 30.59,//视角的纬度
    // longitude: 114.30,//视角的经度
    // zoom: 9,//地图当前的缩放层级
    // bearing: 0,//地图旋转角度,
    // minZoom: 0,//地图最小层级
    // maxZoom: 21,//地图最大层级
    // pitch: 30,//地图倾斜角度


    //   altitude: 1.5,
    //   bearing: 2.045454545454543,
    //   height: 1080,
    //   latitude: 30.34868293224569,
    //   longitude: 111.66786003403719,
    //   maxPitch: 60,
    //   maxZoom: 21,
    //   minPitch: 0,
    //   minZoom: 0,
    //   pitch: 1.0387223297918269,
    //   width: 3520,
    //     zoom: 7.818177907246239,



    // altitude: 1.5,
    // bearing: 2.045454545454543,
    // height: 1080,
    // latitude: 29.94868293224569,
    // longitude: 111.66786003403719,
    // maxPitch: 60,
    // maxZoom: 21,
    // minPitch: 0,
    // minZoom: 0,
    // pitch: 1.0387223297918269,
    // width: 3520,
    // zoom: 5.818177907246239,


    // altitude: 1.5,
    // bearing: 2.045454545454543,
    // height: 1080,
    // latitude: 31.21311378479004,
    // longitude: 112.09275817871094,
    // maxPitch: 60,
    // maxZoom: 21,
    // minPitch: 0,
    // minZoom: 0,
    // pitch: 1.0387223297918269,
    // width: 3520,
    // zoom: 5.818177907246239,


    altitude: 1.5,
    bearing: -13.071753421384551,
    height: 1080,
    latitude: 29.813937905958735,
    longitude: 114.99761789082964,
    maxPitch: 60,
    maxZoom: 28,
    minPitch: 0,
    minZoom: 0,
    pitch: 42.19170172749507,
    width: 3520,
    zoom: 10.018099209327202,

};

//地图的密钥
const MAPBOX_TOKEN = 'pk.eyJ1Ijoid2VpemhpbWluMjAwNyIsImEiOiJjajkzeHRhcWkyaWtsMzNucmZkZHBsbWtsIn0.Roa71zaPUY1M00OQ0X1WzA';
//地图样式
const MAP_STYLE = mapstyle;
// const MAP_STYLE = "../mapstyle/mapstyles.json";

export {
    INITIAL_VIEW_STATE,
    MAPBOX_TOKEN,
    MAP_STYLE
};
