class BaseLayer {
  constructor(map, baseLayerId, id, style, layer) {
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = layer;
  }

  //添加图层数据
  addMapLayer(geoJsondata, weightColors) {
    for (let i in geoJsondata) {
      geoJsondata[i].weight = weightColors
        ? weightColors(geoJsondata[i][this.mapStyle.color.feild])
        : 0.5;
    }
    this.updateLayer(geoJsondata);
  }

  //删除图层数据图层
  removeMapLayer() {
    if (this.map?.getLayer(this.layername + '_aimatedIcon')) {
      this.map.removeLayer(this.layername + '_aimatedIcon');
      this.map.removeSource(this.layername);
    }
  }

  //控制图层显隐
  setLayerVisible(visibility) {
    if (this.map.getLayer(this.layername + '_aimatedIcon')) {
      if (visibility) {
        this.map.setLayoutProperty(this.layername + '_aimatedIcon', 'visibility', 'visible');
      } else {
        this.map.setLayoutProperty(this.layername + '_aimatedIcon', 'visibility', 'none');
      }
    }
  }

  //数据过滤显示
  filterBy(key, number) {
    let filters = ['all', ['==', key, number]];
    if (this.map) {
      this.map.setFilter('heat', filters);
      this.map.setFilter(this.layername + '_aimatedIcon', filters);
    }
  }

  /**
   *更新数据源
   */
  updateData(data) {
    if (data.layerId !== this.id) {
      console.warn('当前图层id与数据图层id不匹配');
      return;
    }
    this.data = data?.features || data;

    if (!Array.isArray(this.data)) {
      console.error('数据格式有误请传入 geojson 数据', data);
      return;
    }

    if (this?.map?.getLayer(this.layername + '_aimatedIcon')) {
      let geojson = {
        type: 'FeatureCollection',
        features: this.data,
      };
      this.map.getSource(this.layername).setData(geojson);
    }
  }
}

export default BaseLayer;
