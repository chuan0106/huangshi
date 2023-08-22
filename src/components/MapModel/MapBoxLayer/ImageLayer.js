/*
 * @version: V1.0.0
 * @Author: dengtao
 * @Date: 2023-03-03 20:56:37
 * @LastEditors: dengtao
 * @LastEditTime: 2023-03-04 18:52:23
 * @FilePath: \cloud\src\components\MapModel\MapBoxLayer\ImageLayer.js
 * @Descripttion: 
 */
//图片图层
class ImageLayer
{
    constructor(map, layername, option)
    {
        this.map = map;
        this.layername = layername;
        this.option = option;
        this.initLayer();
    }
    //初始化图层
    initLayer ()
    {
        console.log(this.option.coordinates, 'geoJsondata');
        if (!this.map?.getSource(this.layername) && this.map)
        {
            this.map.addSource(this.layername, {
                'type': 'image',
                'url': this.option.url,
                'coordinates': this.option.coordinates
            });
        }
        if (!this.map?.getLayer(this.layername + "_image"))
        {
            this.map.addLayer({
                id: this.layername + "_image",
                type: "raster",
                source: this.layername,
                minzoom: 1,
                maxzoom: 24,
                paint: {
                    'raster-opacity': 1,
                    'raster-fade-duration': 0
                }
            });
        }
    }
    //添加图层数据
    addMapLayer (geoJsondata)
    {
        console.log(geoJsondata, 'geoJsondatageoJsondatageoJsondata1');
        this.updateLayer(geoJsondata);
    }
    //删除图层数据图层
    removeMapLayer ()
    {
        if (this.map?.getLayer(this.layername + "_image"))
        {
            this.map.removeLayer(this.layername + "_image");
            this.map.removeSource(this.layername);
        }
    }
    //控制图层显隐
    setLayerVisible (visibility)
    {
        if (this.map?.getLayer(this.layername + "_image"))
        {
            if (visibility)
            {
                this.map.setLayoutProperty(
                    this.layername + "_image",
                    "visibility",
                    "visible"
                );
            } else
            {
                this.map.setLayoutProperty(
                    this.layername + "_image",
                    "visibility",
                    "none"
                );
            }
        }
    }
    //数据过滤显示
    filterBy (key, number)
    {
        let filters = ["all", ["==", key, number]];
        this.map.setFilter("heat", filters);
        this.map.setFilter(this.layername + "_image", filters);
    }

    /**
     *更新数据源
     */
    updateLayer (data)
    {

        if (this.map?.getLayer(this.layername + "_image"))
        {
            let geojson = {
                'type': 'image',
                'url': this.option.url,
                'coordinates': this.option.coordinates
            };

            if (this.map.getSource(this.layername))
            {
                this.map.getSource(this.layername).updateImage(geojson);
                console.log(this.map.getSource(this.layername), this.map.getLayer(this.layername + "_image"), 'geojsongeojsongeojson')
            }

        }
    }
}
export default ImageLayer;
