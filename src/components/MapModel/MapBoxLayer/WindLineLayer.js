//风线的图层
class WindLineLayer {
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
        if (!this.map?.getLayer(this.layername + "_windLinemap")) {
            this.map.addLayer({
                id: this.layername + "_windLinemap",
                type: "line",
                source: this.layername,
                minzoom: 1,
                maxzoom: 24,
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': 'rgba(255,255,255,0.9)',
                    'line-width': 1.5
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
        if (this.map?.getLayer(this.layername + "_windLinemap")) {
            this.map.removeLayer(this.layername + "_windLinemap");
            this.map.removeSource(this.layername);
        }
    }
  
    //控制图层显隐
    setLayerVisible(visibility) {
        if (this.map?.getLayer(this.layername + "_windLinemap")) {
            if (visibility) {
                this.map.setLayoutProperty(
                    this.layername + "_windLinemap",
                    "visibility",
                    "visible"
                );
            } else {
                this.map.setLayoutProperty(
                    this.layername + "_windLinemap",
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
        this.map.setFilter(this.layername + "_windLinemap", filters);
    }

    /**
     *更新数据源
     */
    updateLayer(data) {
        if (this.map?.getLayer(this.layername + "_windLinemap")) {
            let geojson = {
                type: "FeatureCollection",
                features: data
            };
            this.map.getSource(this.layername).setData(geojson);
        }
    }
}
export default WindLineLayer;
