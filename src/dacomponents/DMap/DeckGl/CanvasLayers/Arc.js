import { ArcLayer } from '@deck.gl/layers';
import BaseLayer from './base';

class Arc extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super();
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = ArcLayer;
  }
}

export default Arc;
