/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月15日
 * @author lqq
 * @desc
 *
 */
import React, { PureComponent } from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { MapboxLayer } from '@deck.gl/mapbox';
import { Deck } from '@deck.gl/core';
import { ScatterplotLayer } from '@deck.gl/layers';
import mapboxgl from 'mapbox-gl';
import Popup from '@/components/DCMap/ReactDeckGL/Mapbox/Popup';

function mapStateToProps({ global }) {
  return {
    global: global,
  };
}
@connect(mapStateToProps)
class DMapBoxLayer extends PureComponent {
  state = {};
  constructor(props) {
    super(props);
    this.popup = null;
    this.map = null;
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoid2VpemhpbWluMjAwNyIsImEiOiJjajkzeHRhcWkyaWtsMzNucmZkZHBsbWtsIn0.Roa71zaPUY1M00OQ0X1WzA';
    this.map = new mapboxgl.Map({
      container: 'map1',
      style: 'https://www.dataojocloud.com/styles/china_V3_gray/style.json',
      center: [116, 39],
      zoom: 13,
      antialias: true, // Mapbox disables WebGL's antialiasing by default
      pitch: 60,
      maxZoom: 22,
      minZoom: 0,
    });

    const deck = new Deck({
      gl: this.map.painter.context.gl,
    });
    this.map.on('load', () => {
      // add to mapbox
      this.map.addLayer(new MapboxLayer({ id: 'my-scatterplot', deck }));
      this.map.addLayer(new MapboxLayer({ id: 'my-scatterplot1', deck }));

      // update the layer
      deck.setProps({
        layers: [
          new ScatterplotLayer({
            id: 'my-scatterplot',
            data: [{ position: [116, 39], size: 1000 }],
            getPosition: d => d.position,
            getRadius: d => d.size,
            getFillColor: [255, 0, 255],
            antialiasing: true,
            onClick: (a, b) => {
              console.log('sadfasffsafasdf', a, b);
            },
          }),
          new ScatterplotLayer({
            id: 'my-scatterplot1',
            data: [{ position: [116, 39], size: 500 }],
            getPosition: d => d.position,
            getRadius: d => d.size,
            getFillColor: [255, 255, 0],
            antialiasing: true,
          }),
        ],
      });
    });
  }

  UNSAFE_componentWillReceiveProps(preState, nextProps) {}

  componentDidUpdate(prevProps, preState) {
    if (this.state.domstate !== preState.domstate) {
    }
  }

  render() {
    return <div className={styles.normal1} id="map1"></div>;
  }
}
export default DMapBoxLayer;
