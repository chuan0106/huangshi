//热力图
class HeatLayer {
  constructor(map, layername, mapStyle, option) {
    this.map = map;
    this.layername = layername;
    this.mapStyle = mapStyle;
    this.option = option;
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
    if (!this.map?.getLayer(this.layername + "_heatmap")) {
      let heatmapColor = this.getHeatmapColor(); 
      this.map.addLayer({
        id: this.layername + "_heatmap",
        type: "heatmap",
        source: this.layername,
        minzoom: 1,
        maxzoom: 24,
        paint: {
          "heatmap-radius": ["interpolate", ["linear"], ["get", "count"], 1, 5, 300, this.mapStyle.radius.radius],
          "heatmap-weight": ["interpolate", ["linear"], ["get", "count"], 1, 0, 60, 1],
          "heatmap-intensity": {
            stops: [
              [0, 1],
              [18, 0]
            ]
          },
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(33,102,172,0)",
            // ...heatmapColor
            0.2, "rgb(103,169,207)",
            0.4, "rgb(209,229,240)",
            0.6, "rgb(253,219,199)",
            0.8, "rgb(239,138,98)",
            1, "rgb(178,24,43)"
          ],
          "heatmap-opacity": this.mapStyle.color.opacity
        }
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
  //添加图层数据
  addMapLayer(geoJsondata) {
    // for (let i in geoJsondata) {
    //   geoJsondata[i].properties.weight =  geoJsondata[i].properties[this.mapStyle.color.feild]/300;

    // }
    this.updateLayer(geoJsondata);
  }
  //删除图层数据图层
  removeMapLayer() {
    if (this.map?.getLayer(this.layername + "_heatmap")) {
      this.map.removeLayer(this.layername + "_heatmap");
      this.map.removeSource(this.layername);
    }
  }
  //控制图层显隐
  setLayerVisible(visibility) {
    if (this.map?.getLayer(this.layername + "_heatmap")) {
      if (visibility) {
        this.map.setLayoutProperty(
          this.layername + "_heatmap",
          "visibility",
          "visible"
        );
      } else {
        this.map.setLayoutProperty(
          this.layername + "_heatmap",
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
    this.map.setFilter(this.layername + "_heatmap", filters);
  }

  /**
   *更新数据源
   */
  updateLayer(data) {
    if (this.map?.getLayer(this.layername + "_heatmap")) {
      let geojson = {
        type: "FeatureCollection",
        features: data
      };
      this.map.getSource(this.layername).setData(geojson);
    }
  }
}
export default HeatLayer;
