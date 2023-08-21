import { ScatterplotLayer } from '@deck.gl/layers';
import BaseLayer from './base';
class Scatterplot extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super();
    const { fillColor, radius } = style;

    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = { ...style, getFillColor: d => fillColor, getRadius: d => radius };
    this.layer = ScatterplotLayer;
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
    const { fillColor, radius } = this.style;

    this.map.setProps({
      layers: [
        ...this._layers,
        new this.layer({
          id: this.id,
          ...this.style,
          data: this.data,
          getFillColor: d => fillColor,
          getRadius: d => radius,
          updateTriggers: {
            getFillColor: fillColor,
            getRadius: radius,
          },
        }),
      ],
    });
  }
}

export default Scatterplot;
