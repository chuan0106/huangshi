//标签图层
class IconLayer {
    constructor(map, layername, option) {
        this.map = map;
        this.layername = layername;
        this.option = option || {};
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
        console.log(this.option.data, 'this.option.data')
        if (!this.map?.getLayer(this.layername + "_iconmap")) {
            if (!this.map?.hasImage(this.layername + "_iconmap")) {
                this.map.loadImage(
                    this.option.imgUrl,
                    (error, image) => {
                        this.map.addImage(this.layername + "_iconmap", image);
                        this.map.addLayer({
                            id: this.layername + "_iconmap",
                            type: "symbol",
                            source: this.layername,
                            minzoom: 1,
                            maxzoom: 24,
                            layout: {
                                "icon-anchor": 'center',
                                'icon-image': this.layername + "_iconmap",
                                'icon-size': 1,
                                'icon-offset': [0, 1],
                                'text-field': ['get', 'name'],
                                'text-font': [
                                    'Open Sans Semibold',
                                    'Arial Unicode MS Bold'
                                ],
                                'text-offset': [0, -2.3],
                                'text-anchor': 'top',
                                'text-size': 24,

                            },
                            paint: {
                                'text-color': "rgba(255,255,255,1)"
                            }
                        });
                        this.updateLayer(this.option.data);
                    }
                );
            } else {
                this.map.addLayer({
                    id: this.layername + "_iconmap",
                    type: "symbol",
                    source: this.layername,
                    minzoom: 1,
                    maxzoom: 24,
                    layout: {
                        "icon-anchor": 'center',
                        'icon-image': this.layername + "_iconmap",
                        'icon-size': 1,
                        'icon-offset': [0, 1],
                        'text-field': ['get', 'name'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, -2.3],
                        'text-anchor': 'top',
                        'text-size': 24,

                    },
                    paint: {
                        'text-color': "rgba(255,255,255,1)"
                    }
                });
                this.updateLayer(this.option.data);
            }

        }
    }
    //添加图层数据
    addMapLayer(geoJsondata) {
        this.updateLayer(geoJsondata);
    }
    //删除图层数据图层
    removeMapLayer() {
        if (this.map?.getLayer(this.layername + "_iconmap")) {
            this.map.removeLayer(this.layername + "_iconmap");
            this.map.removeSource(this.layername);
        }
    }
    //控制图层显隐
    setLayerVisible(visibility) {
        if (this.map?.getLayer(this.layername + "_iconmap")) {
            if (visibility) {
                this.map.setLayoutProperty(
                    this.layername + "_iconmap",
                    "visibility",
                    "visible"
                );
            } else {
                this.map.setLayoutProperty(
                    this.layername + "_iconmap",
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
        this.map.setFilter(this.layername + "_iconmap", filters);
    }

    /**
     *更新数据源
     */
    updateLayer(data) {

        if (this.map?.getLayer(this.layername + "_iconmap")) {
            let geojson = {
                type: "FeatureCollection",
                features: data
            };

            this.map.getSource(this.layername).setData(data);
        }
    }
}
export default IconLayer;
