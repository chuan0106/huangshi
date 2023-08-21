//热力图-带参数高度
class FillExtrusionLayer {
    constructor(map, layername,height) {
      this.map = map;
      this.layername = layername;
      this.height = height;
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
      if (!this.map?.getLayer(this.layername + "_fillextrusionmap")) {
        this.map.addLayer({
          id: this.layername + "_fillextrusionmap",
          type: "fill-extrusion",
          source: this.layername,
          minzoom: 1,
          maxzoom: 24,
          paint: {
            'fill-extrusion-color': ['get', 'color'],
            // 'fill-extrusion-outline-color': ['get', 'color'],
            'fill-extrusion-opacity': 1,
            'fill-extrusion-base': this.height,
            'fill-extrusion-height': this.height,
          }
        });
      }
    }
    //添加图层数据
    addMapLayer(geoJsondata) {
      this.updateLayer(geoJsondata);
    }
    //删除图层数据图层
    removeMapLayer() {
      if (this.map?.getLayer(this.layername + "_fillextrusionmap")) {
        this.map.removeLayer(this.layername + "_fillextrusionmap");
        this.map.removeSource(this.layername);
      }
    }
    //控制图层显隐
    setLayerVisible(visibility) {
      if (this.map?.getLayer(this.layername + "_fillextrusionmap")) {
        if (visibility) {
          this.map.setLayoutProperty(
            this.layername + "_fillextrusionmap",
            "visibility",
            "visible"
          );
        } else {
          this.map.setLayoutProperty(
            this.layername + "_fillextrusionmap",
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
      this.map.setFilter(this.layername + "_fillextrusionmap", filters);
    }
  
    /**
     *更新数据源
     */
    updateLayer(data) {
      if (this.map?.getLayer(this.layername + "_fillextrusionmap")) {
        let geojson = {
          type: "FeatureCollection",
          features: data
        };
        this.map.getSource(this.layername).setData(geojson);
      }
    }
  }
  export default FillExtrusionLayer;
  