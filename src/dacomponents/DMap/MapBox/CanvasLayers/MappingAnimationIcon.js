import BaseLayer from './base';

/**
 * 心跳图标动画
 */
class PulsingDot {
  constructor(map, size, imgUrl, duration) {
    this.map = map;
    this.imgUrl = imgUrl;
    this.width = size.width;
    this.height = size.height;
    this.data = new Uint8Array(size.width * size.height * 4);
    this.ingLoad = false;
    this.duration = duration;
  }

  onAdd() {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
  }

  render() {
    const duration = this.duration;
    let t = (performance.now() % duration) / duration;
    const context = this.context;

    if (t > 0.5) {
      t = 1 - t;
    }
    t = t * 2;

    const myImg = new Image();
    myImg.src = this.imgUrl;

    const imgh = this.height * t;
    const imgw = this.width * t;
    const x = this.width / 2 - imgw / 2;
    const y = this.height / 2 - imgh / 2;

    myImg.onload = () => {
      context.clearRect(0, 0, this.width, this.height);
      context.drawImage(myImg, x, y, imgw, imgh);
      this.data = context.getImageData(0, 0, this.width, this.height).data;
      this.map.triggerRepaint();
      this.ingLoad = true;
    };

    return this.ingLoad;
  }
}

class MappingAnimationIcon extends BaseLayer {
  constructor(map, layername, mapStyle, option, id) {
    super();
    this.id = id;
    this.map = map;
    this.layername = layername;
    this.mapStyle = mapStyle;
    this.initLayer(map, layername, mapStyle, option);
  }
  //初始化图层
  initLayer(map, layername, mapStyle, option) {
    if (!map.getSource(layername)) {
      map.addSource(layername, {
        type: 'geojson',
        data: {
          type: 'Feature',
          features: [],
        },
      });
    }

    map.on('styleimagemissing', function(e) {
      const id = e.id; // id of the missing image

      // Check if this missing icon is
      // one this function can generate.
      const prefix = 'mapping-animation-icon-';
      if (id.indexOf(prefix) !== 0) return;

      // Get the color from the id.
      const imgUrl = id.replace(prefix, '');
      let { animation, size } = mapStyle;
      let { scatterSpeed } = animation;
      let duration = 1000 * scatterSpeed;

      const pulsingDot = new PulsingDot(map, size, imgUrl, duration);

      map.addImage(id, pulsingDot, { pixelRatio: 2 });
    });

    map.addLayer({
      id: layername + '_aimatedIcon',
      type: 'symbol',
      source: layername,
      minzoom: option.minZoom,
      maxzoom: option.maxZoom,
      layout: {
        'icon-image': ['concat', 'mapping-animation-icon-', ['get', 'img']],
      },
    });
  }
}
export default MappingAnimationIcon;
