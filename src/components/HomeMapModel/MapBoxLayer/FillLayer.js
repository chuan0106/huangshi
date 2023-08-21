//热力图
class FillLayer {
    constructor(map, layername) {
      this.map = map;
      this.layername = layername;
      this.initLayer();
    }
    //初始化图层
    initLayer() {
      if (!this.map?.getSource(this.layername)) {
        this.map.addSource(this.layername, {
          type: "geojson",
          data: {
            type: "Feature",
            features: []
          }
        });
      }
      if (!this.map?.getLayer(this.layername + "_fillmap")) {
        this.map.addLayer({
          id: this.layername + "_fillmap",
          type: "fill",
          source: this.layername,
          minzoom: 1,
          maxzoom: 24,
          paint: {
            'fill-color': ['get', 'color'],
            'fill-outline-color': ['get', 'color'],
            'fill-opacity': 0.9,
          }
        },'china_L_city_line');
      }
    }
    //添加图层数据
    addMapLayer(geoJsondata) {
      this.updateLayer(geoJsondata);
    }
    //删除图层数据图层
    removeMapLayer() {
      if (this.map?.getLayer(this.layername + "_fillmap")) {
        this.map.removeLayer(this.layername + "_fillmap");
        this.map.removeSource(this.layername);
      }
    }
    //控制图层显隐
    setLayerVisible(visibility) {
      if (this.map?.getLayer(this.layername + "_fillmap")) {
        if (visibility) {
          this.map.setLayoutProperty(
            this.layername + "_fillmap",
            "visibility",
            "visible"
          );
        } else {
          this.map.setLayoutProperty(
            this.layername + "_fillmap",
            "visibility",
            "none"
          );
        }
      }
    }
    //数据过滤显示
    filterBy(key, number) {
      let filters = ["all", ["==", key, number]];
      this.map.setFilter("heat", filters);
      this.map.setFilter(this.layername + "_fillmap", filters);
    }
  
    /**
     *更新数据源
     */
    updateLayer(data) {
      if (this.map?.getLayer(this.layername + "_fillmap")) {
        let geojson = {
          type: "FeatureCollection",
          features: data
        };
        if(this.map.getSource(this.layername)){
          this.map.getSource(this.layername).setData(geojson);
        }
      }
    }
  }
  export default FillLayer;
  