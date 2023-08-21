import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import BaseLayer from './base';

class Heatmap extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super();
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = HeatmapLayer;
  }
}

export default Heatmap;
