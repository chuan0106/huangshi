// 框选工具
import MapboxDraw from '@mapbox/mapbox-gl-draw';
// import FreehandMode from 'mapbox-gl-draw-freehand-mode';
import { DragCircleMode } from 'mapbox-gl-draw-circle';

/**
 * 把二维数组转成 空格 ， 分隔的字符串
 * @param {[]} data 二维数组
 * @returns {string} 空格 ， 分隔的字符串
 */
const flatArray = data => {
    if (Array.isArray(data[0])) {
        return data[0].map(item => item.join(' ')).join(',');
    }
};

/**
   * 属性说明
   * @property {object} mapbox
   * 加载框选工具
   */
export function createMapboxDraw(mapbox) {
    const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            point: true,
            //line_string: true, 暂时不要线
            trash: true,
        },
        userProperties: true,
        modes: {
            ...MapboxDraw.modes,
            //draw_polygon: FreehandMode, 有bug暂时改用自带的
            draw_point: DragCircleMode, //
            //draw_line_string: MapboxDraw.modes.draw_polygon, 暂时不要线
        },
    });
    this.draw = draw;
    mapbox.addControl(draw);
    // bounds(data, (minLon, maxLon, minLat, maxLat) => {
    // this.mapbox.fitBounds([[minLon, minLat], [maxLon, maxLat]]);
    // });
    mapbox.on('draw.create', this.createArea);
    mapbox.on('draw.delete', this.deleteArea);
    mapbox.on('draw.update', this.updateArea);
};

/**
 * 属性说明
 * @property {object} e
 * 框选工具,创建操作
 */
export function createArea(e) {
    const { onDraw } = this.props;
    onDraw && onDraw('create', e);
    if (this.state.selectMap) {
        this.deleteArea(e);
        let timer = setTimeout(() => {
            this.updateArea(e);
            clearTimeout(timer);
        }, 3000);
    } else {
        this.updateArea(e);
    }
};

/**
 * 属性说明
 * @property {object} e
 * 框选工具,更新操作
 */
export function updateArea(e) {
    const { onDragCallBack, onDraw } = this.props;
    onDraw && onDraw('update', e);
    if (Array.isArray(e.features)) {
        this.setState({ selectMap: e.features[0].id });
        const feature = e.features[0];
        const geometry = feature?.geometry?.coordinates || [];
        const str = flatArray(geometry);
        // onDragCallBack 历史遗留，保留向后兼容
        onDragCallBack &&
            onDragCallBack([
                {
                    name: 'f0000',
                    index: 0,
                    operator: 43,
                    value: `POLYGON((${str}))`,
                },
            ]);
    }
};

/**
 * 属性说明
 * @property {object} e
 * 框选工具,删除操作
 */
export function deleteArea(e) {
    const { onDragCallBack, onDraw } = this.props;
    onDraw && onDraw('delete', e);
    this.draw.delete(this.state.selectMap);
    this.draw.getAll();
    if (Array.isArray(e.features)) {
        onDragCallBack && onDragCallBack([], 'delete', this.state.selectMap);
    }
    this.setState({ selectMap: null });
};

/**
 * 属性说明
 * 框选工具,退出删除操作
 */
export function selectMapDelete() {
    this.draw.deleteAll(this.state.selectMap);
    this.setState({ selectMap: null });
};