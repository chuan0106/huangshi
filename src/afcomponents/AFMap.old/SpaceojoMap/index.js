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
// import { connect } from 'dva';
import DMap from '../DMap';
const dispatch = window.g_app._store.dispatch;
class SpaceojoMap extends PureComponent {
  constructor(props) {
    super(props);
    this.time = 0;
  }
  state = {
    layers: [],
  };
  componentDidMount() {
    dispatch({ type: 'exampleModel/getLocalDataPointEffect' });
    dispatch({ type: 'exampleModel/getLocalPoygenEffect' });
    dispatch({ type: 'exampleModel/getLocalTripEffect' });
    // setInterval(() => {
    //   this.animate();
    // }, 200);
  }

  animate = () => {
    if (this.time > 4) {
      this.time = 0;
    }
    this.setState({
      layers: [
        {
          type: 'TripsLayer',
          id: 'y555',
          currentTime: this.time++ % 1800,
          getFillColor: [244, 67, 54],
          // data: [{ coordinates: [116.40238226845041, 39.93055524208768], size: 400 }],
          visible: true,
        },
      ],
    });
  };

  render() {
    const { layers } = this.state;

    return (
      <div className={styles.normal2} id="mapContainer">
        <DMap layers={layers}></DMap>
      </div>
    );
  }
}
export default SpaceojoMap;
