import mapboxgl from 'mapbox-gl';
import ReactDOM from 'react-dom';

import PopOne from '../PopOne';
import PopTwo from '../PopTwo';

import PopView from '../../Pop';

class Popup {
  constructor() {
    // this.map = map;
    // this.props = props;
    // console.log('asfasdfasdf', props);
    this.marker = null;
  }
  //初始化图层
  initLayer() {}
  //添加图层数据
  addMapLayer(map, dataProps) {
    const { info } = dataProps;
    // console.log('asfsadfsadfsd', map.getLayers());
    this.removeMapLayer();
    let elem = document.createElement('div');
    // elem.style.background = '#fff';
    elem.id = 'popMarkersss';
    //图标
    if (info.layer?.props?.mapType === 'PolygonLayer') {
      this.marker = new mapboxgl.Marker({
        element: elem,
        offset: [0, 0],
        //   anchor: 'bottom-left',
      })
        .setLngLat(info?.coordinate)
        .addTo(map);
      PopView(dataProps, document.getElementById(elem.id));
    } else {
      this.marker = new mapboxgl.Marker({
        element: elem,
        offset: [0, 0],
        //   anchor: 'bottom-left',
      })
        .setLngLat(info?.object?.geometry?.coordinates)
        .addTo(map);
      PopView(dataProps, document.getElementById(elem.id));
    }
  }
  //删除图层数据图层
  removeMapLayer() {
    if (this.marker) {
      this.marker.remove();
      this.marker = null;
    }
  }
  //删除弹出框图层数据
  removePopupLayer() {
    for (let i in this.popupArr) {
      this.popupArr[i].remove();
    }
    this.popupArr = [];
  }
  //控制图层显隐
  setLayerVisible(visibility) {
    for (let i in this.markerArr) {
      if (visibility) {
        this.markerArr[i]._element.style.display = 'block';
      } else {
        this.markerArr[i]._element.style.display = 'none';
      }
    }
  }
  //数据过滤显示
  filterBy(key, number) {
    let filters = ['all', ['==', key, number]];
    this.map.setFilter('heat', filters);
    this.map.setFilter(this.layername + '_point', filters);
  }
  /**
   *数据、样式更新
   */
  updateMapboxLayer(elem) {
    console.log('elem?.visible8888', elem);
    this.removeMapLayer();
    this.visibility = elem?.visible;
    this.addMapLayer(elem?.data);
  }
}
export default Popup;
