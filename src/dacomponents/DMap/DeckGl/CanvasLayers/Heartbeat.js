import { IconLayer } from '@deck.gl/layers';
import BaseLayer from './base';

class Heartbeat extends BaseLayer {
  constructor({ map, baseLayerId, id, style }) {
    super(map, baseLayerId, id, style, IconLayer);
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = IconLayer;
    this.animate = true;
    this.startAnimate();
  }

  /**
   * 添加图层数据
   * @param {*} layer
   * @param {*} data
   */
  addData(data) {
    if (data.layerId !== this.id) {
      console.warn('当前图层id与数据图层id不匹配');
      return;
    }

    this.data = data?.features || data;
  }

  /**
   * 更新数据源
   * @param {*} data
   */
  updateData(data) {
    if (data.layerId !== this.id) {
      console.warn('当前图层id与数据图层id不匹配');
      return;
    }

    this.data = data?.features || data;
  }

  startAnimate() {
    const that = this;
    const size = 200;
    const width = size;
    const height = size;
    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');

    function getImg() {
      var duration = 1000;
      var t = (performance.now() % duration) / duration;
      var radius = (size / 2) * 0.3;
      var outerRadius = (size / 2) * 0.7 * t + radius;

      // draw outer circle
      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.arc(width / 2, height / 2, outerRadius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
      context.fill();

      // draw inner circle
      context.beginPath();
      context.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(255, 100, 100, 1)';
      context.strokeStyle = 'white';
      context.lineWidth = 2 + 4 * (1 - t);
      context.fill();
      context.stroke();

      return canvas.toDataURL();
    }

    function animate() {
      if (that.animate) {
        render();
        requestAnimationFrame(animate);
      }
    }

    function render() {
      if (!Array.isArray(that.data)) {
        return;
      }

      that.style = {
        ...that.style,
        iconAtlas: getImg(),
      };

      that.update();
    }

    animate();
  }

  destory() {
    this.animate = false;
  }
}

export default Heartbeat;
