import { GreatCircleLayer } from '@deck.gl/geo-layers';
import BaseLayer from './base';

class GreatCircle extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super();
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = GreatCircleLayer;
  }
}

export default GreatCircle;
