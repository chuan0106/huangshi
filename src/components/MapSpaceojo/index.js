/**
 *
 */
import React from 'react';
import { connect } from 'dva';
import styles from './styles.less';
import mapbox from 'mapbox-gl';
import * as spaceojogl from 'spaceojogl';

function mapStateToProps(state) {
    return {};
}

@connect(mapStateToProps)

class BaseMap extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    //在生命周期中当render完以后  运行一次  可以做一些dom加载完的初始化操作
    componentDidMount() {
        setTimeout(this.initMap, 5000)
    }
    componentWillReceiveProps() {

    }

    initMap = () => {
        let { mapContainer, mapStyle, getMap, viewport } = this.props;
        let map = new spaceojogl.DoMap({
            center: [104.0520224223585, 30.70692895408729],
            maxPitch: 86,
            zoom: 12.9,
            pitch: 6.500000000000005,
            bearing: -1.4996254046830018
        });
        this.removeMissingdivCss();
        getMap(map);
        this.map = map;
    };
    removeMissingdivCss = () => {
        const missingdiv = document.querySelector('.mapboxgl-missing-css');
        const mapboxglcontrolcontainer = document.querySelector('.mapboxgl-control-container');
        if (mapboxglcontrolcontainer)
            mapboxglcontrolcontainer.style.width = 'none';
        if (missingdiv)
            missingdiv.style.display = 'none';
    };

    render() {
        return (
            <div id={this.props.mapContainer} className={styles.normal}>
            </div>
        );
    }
}

export default BaseMap;

