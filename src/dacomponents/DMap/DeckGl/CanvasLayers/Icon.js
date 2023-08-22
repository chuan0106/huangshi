import { IconLayer } from '@deck.gl/layers';
import BaseLayer from './base';

class Icon extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super();
    const { size } = style;

    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = { ...style, getSize: size };
    this.layer = IconLayer;
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
    const { size } = this.style;

    this.map.setProps({
      layers: [
        ...this._layers,
        new this.layer({
          id: this.id,
          ...this.style,
          data: this.data,
          getSize: size,
        }),
      ],
    });
  }
}

export default Icon;
