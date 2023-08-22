import BaseLayer from '../base';
import ClusterLayer from './icon-cluster-layer';

class Cluster extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super();
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = ClusterLayer;
  }

  /**
   * 更新图层属性
   * @param {*} props
   */
   updateLayerProp(props) {
    if (!Object.prototype.toString.call(props) === '[object Object]') {
      console.error('图层属性格式有误请传入一个对象', props);
      return;
    }

    this.style = { ...this.style, ...props };

    this.map.setProps({
      layers: [
        new this.layer({
          id: this.id,
          ...this.style,
          data: this.data,
        }),
      ],
    });
  }
}

export default Cluster;