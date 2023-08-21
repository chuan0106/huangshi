/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-03-15 18:24:59
 * @LastEditors: yuchang
 * @LastEditTime: 2023-07-14 16:40:06
 * @Description: 
 */
import { FlyToInterpolator } from "deck.gl";
//处理对应的导航模块文件
const getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.name)) {
        const { name } = item;
        return getNavMenuItems(item.children);
    }
    return item.linkUrl;
};

const getNavMenuItems = menuList => {
    if (!menuList) {
        return [];
    }
    return menuList.map(item => getSubMenuOrItem(item));
};
//获取当前模块对应的menu数据
const getMenuData = (data, activeMaodelName) => {
    let modelMenuData = [];
    if (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].name === activeMaodelName) {
                modelMenuData = data[i].data;
                break;
            }
        }
    }
    return modelMenuData;
}
//获取原始对象的key值
const getDataKey = (dataArr, key) => {
    let newKey = key;
    if (dataArr) {
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i].key === key && dataArr[i].name === key) {
                newKey = dataArr[i].alias;
                break;
            }
        }
    }
    return newKey;
}
//map飞行的方法
const flyTo = (viewState, callback) => {
    if (viewState.longitude && viewState.latitude) {
        viewState = {
            ...viewState,
            zoom: 10.609038392496105,
            // minZoom: 9.609038392496105, // 设置minZoom和maxZoom参数以禁用缩放
            // maxZoom: 9.609038392496105,
            transitionInterpolator: new FlyToInterpolator(),
            //时间
            //transitionDuration: 3000
        };
        if (callback) {
            console.log(viewState, 'viewStateviewState');
            callback(viewState)
        }
    }
}
//geojson转WKT格式（只支持单面）
const geoJsonToWkt = geojson => {
    geojson = JSON.parse(JSON.stringify(geojson));
    if (geojson) {
        let coordinates = geojson.geometry.coordinates[0];
        for (let i in coordinates) {
            if (coordinates[i] instanceof Array) {
                coordinates[i] = coordinates[i].join(' ');
            }
        }
        coordinates = coordinates.join(',');
        coordinates = `POLYGON((${coordinates}))`;
        return coordinates;
    }
};
//更新decklayer图层方法
const upLayerData = (deckLayerArr, newLayer) => {
    deckLayerArr = deckLayerArr || [];
    let layerObj = newLayer || [];
    let newType = true;
    for (let i in deckLayerArr) {
        if (deckLayerArr[i].props.id === layerObj.props.id) {
            newType = false;
            deckLayerArr[i] = layerObj;
        }
    }
    if (newType) {
        deckLayerArr.push(layerObj)
    }
    return deckLayerArr;
}
export { getSubMenuOrItem, getNavMenuItems, getMenuData, getDataKey, flyTo, geoJsonToWkt, upLayerData }