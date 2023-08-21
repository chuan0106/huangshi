class BaseLayer {
  constructor(map, baseLayerId, id, style, layer) {
    this.map = map;
    this.baseLayerId = baseLayerId;
    this.id = id;
    this.style = style;
    this.layer = layer;
  }

  get _layers() {
    return this.map.layerManager.layers.filter(item => item.id !== this.id);
  }

  /**
   * 添加图层数据
   * @param {*} layer
   * @param {*} data
   */
  addData(data) {
    this.updateData(data);
  }

  /**
   * 删除图层数据图层
   */
  removeLayer() {}

  /**
   * 控制图层显隐
   * @param {*} visibility
   */
  setLayerVisible(visibility) {}

  /**
   * 数据过滤显示
   * @param {*} key
   * @param {*} number
   */
  filterBy(key, number) {}

  /**
   * 更新数据源
   * @param {*} data
   */
  updateData(data) {
    if (data.layerId === this.id || data.layerId === this.style.layerId) {
      this.data = data?.features || data;

      if (!Array.isArray(this.data)) {
        console.error('数据格式有误请传入 geojson 数据', data);
        return;
      }

      this.map.setProps({
        layers: [
          ...this._layers,
          new this.layer({
            id: this.id,
            ...this.style,
            data: this.data,
          }),
        ],
      });
    } else {
      console.warn('当前图层id与数据图层id不匹配');
    }
  }

  /**
   * 更新图层
   * @param {*} data
   */
  update() {
    // todo 更新前需要判断数据和图层类型是否匹配
    if (!Array.isArray(this.data)) {
      console.error('数据格式有误请传入 geojson 数据', this.data);
      return;
    }

    this.map.setProps({
      layers: [
        ...this._layers,
        new this.layer({
          id: this.id,
          ...this.style,
          data: this.data,
        }),
      ],
    });
  }
}

export default BaseLayer;
