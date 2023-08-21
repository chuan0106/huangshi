import { PathLayer } from '@deck.gl/layers';
import BaseLayer from './base';

class Path extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super();
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = PathLayer;
  }
}

export default Path;