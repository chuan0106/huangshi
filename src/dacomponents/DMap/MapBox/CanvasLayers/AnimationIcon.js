/* eslint-disable radix */
import BaseLayer from './base';
class AimatedIcon extends BaseLayer {
  constructor(map, layername, mapStyle, option, id) {
    super();
    this.id = id;
    this.map = map;
    this.layername = layername;
    this.mapStyle = mapStyle;
    this.option = option;
    this.size = parseInt(this.mapStyle.radius.radius * 50);
    this.width = this.size;
    this.height = this.size;
    this.iconStyleArr = [];
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
      let duration = 1000 * scatterSpeed;
      newColor = 'rgba' + newColor + ',';

      this.pulsingDot = {
        width: this.size,
        height: this.size,
        data: new Uint8Array(this.size * this.size * 4),
        onAdd: () => {
          this.canvas = document.createElement('canvas');
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          this.context = this.canvas.getContext('2d');
        },
        render: function() {
          let t = (performance.now() % duration) / duration;
          let context = that.context;

          if (t > 0.5) {
            t = 1 - t;
          }
          t = t * 2;

          var myImg = new Image();
          myImg.src = that.option.img;

          var imgh = that.height * t;
          var imgw = that.width * t;
          var x = that.width / 2 - imgw / 2;
          var y = that.height / 2 - imgh / 2;

          myImg.onload = function() {
            context.clearRect(0, 0, that.width, that.height);
            context.drawImage(myImg, x, y, imgw, imgh);
          };

          this.data = context.getImageData(0, 0, that.width, that.height).data;
          that.map.triggerRepaint();
          return true;
        },
      };

      if (this.map?.hasImage(`${this.layername}Icon`)) {
        this.map.removeImage(`${this.layername}Icon`);
      }

      this.map.addImage(`${this.layername}Icon`, this.pulsingDot, {
        pixelRatio: 2,
      });

      this.map.addLayer({
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
          'icon-size': 1,
        },
        paint: {
          'icon-color': 'rgba(255,255,255,1)',
          // 'icon-halo-width': Math.random() * 200,
          'icon-halo-color': 'rgba(255,255,255,1)',
          'icon-halo-blur': 0,
          'icon-opacity': color.opacity,
        },
      });
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
}
export default AimatedIcon;
