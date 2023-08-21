/* eslint-disable radix */
import BaseLayer from './base';
let ncount = false;
let hhhhhh = 0;
class RisingLine extends BaseLayer {
  constructor(map, layername, mapStyle, option, id) {
    super();
    this.id = id;
    this.map = map;
    this.layername = layername;
    this.mapStyle = mapStyle;
    this.option = option;
    this.size = parseInt(180);
    this.width = 3;
    this.height = this.size;
    this.iconStyleArr = [];
    this.color = mapStyle?.color?.color;
    this.initLayer();
  }
  //初始化图层
  initLayer() {
    if (!this.map?.getSource(this.layername)) {
      this.map.addSource(this.layername, {
        type: 'geojson',
        data: {
          type: 'Feature',
          features: [],
        },
      });
    }
    if (!this.map?.getLayer(this.layername + '_aimatedIcon')) {
      let that = this;
      let { billboard, autoAvoid, color, animation } = this.mapStyle;
      let { scatterStyleType, scatterAimatedType, scatterSpeed } = animation;
      let newColor = color.color.split(')')[0].split('rgb')[1];
      let duration = 2000 * scatterSpeed;

      newColor = 'rgba' + newColor + ',';

      this.pulsingDot = {
        width: this.width,
        height: this.size,
        data: new Uint8Array(3 * this.size * 4),
        onAdd: () => {
          if (this.canvas) {
            this.canvas.remove();
          }
          this.canvas = document.createElement('canvas');
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          this.context1 = this.canvas.getContext('2d');
        },
        render: function() {
          let t = ((performance.now() % duration) / duration) * 90;
          hhhhhh = t;

          if (ncount) {
            hhhhhh = 90;
          } else {
            if (t > 80) {
              ncount = true;
            } else {
              hhhhhh = t;
            }
          }

          let context = that.context1;
          context.clearRect(0, 0, that.width, that.height);
          context.beginPath();

          let gnt1 = context.createLinearGradient(0, 90, 0, 0);
          gnt1.addColorStop(1, color?.color);
          gnt1.addColorStop(0.5, color?.color);
          gnt1.addColorStop(0, color?.color1);
          context.strokeStyle = gnt1;
          context.moveTo(3, 90);
          context.lineTo(3, 90 - hhhhhh);
          context.lineWidth = 4;
          context.stroke();
          // context.fill();
          context.crossOrigin = '';
          context.beginPath();

          this.data = context.getImageData(0, 0, that.width, that.height).data;
          that.map.triggerRepaint();
          return true;
        },
      };

      // this.iconStyleArr = [this.pulsingDot1];
      if (this.map?.hasImage(`${this.layername}Icon`)) {
        this.map.removeImage(`${this.layername}Icon`);
      }

      this.map.addImage(`${this.layername}Icon`, this.pulsingDot, {
        pixelRatio: 2,
      });

      this.map.addLayer(
        {
          id: this.layername + '_aimatedIcon',
          type: 'symbol',
          source: this.layername,
          minzoom: this.option.minZoom,
          maxzoom: this.option.maxZoom,
          layout: {
            'icon-allow-overlap': true,
            'icon-image': `${this.layername}Icon`,
            'icon-keep-upright': true,
            'icon-pitch-alignment': 'viewport', //viewport
            // 'icon-pitch-alignment': billboard ? 'viewport' : 'map', //viewport
            'icon-size': 4,
            // 'text-field': ['get', 'aaa'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': -10,
            'text-justify': 'auto',
            // 'text-offset': [20, 100],
            // 'text-color': ['get', 'color'],
          },
          paint: {
            'icon-color': 'rgba(255,255,255,1)',
            // 'icon-halo-width': Math.random() * 300,
            'icon-halo-color': 'rgba(255,255,255,1)',
            'icon-halo-blur': 0,
            'icon-opacity': 1,
            'text-color': 'rgba(255,255,255,1)',
          },
        },
        'china_poi_province',
      );
    }
  }
  //获取对应的权重颜色
  getHeatmapColor() {
    let arr = [];
    //传入的颜色
    let { color } = this.mapStyle;
    let colorArray = color.color;
    let antitone = color.antitone;
    //拷贝一个颜色数组  做反序用
    let reversalColorArray = JSON.parse(JSON.stringify(colorArray));
    reversalColorArray = reversalColorArray.reverse();
    let multiplicationNum = 1 / colorArray.length;
    //根据颜色的的长度做权重的计算
    for (let i in colorArray) {
      arr.push((parseInt(i) + 1) * multiplicationNum);
      arr.push(antitone ? reversalColorArray[i] : colorArray[i]);
    }
    return arr;
  }
  /**
   *更新数据源
   */
  updateLayer(data) {
    ncount = false;
    super.updateLayer(data);
  }
}
export default RisingLine;
