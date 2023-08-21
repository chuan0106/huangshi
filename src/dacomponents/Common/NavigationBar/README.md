``` js
/**
 * 导航支持的参数
 * @param onChange (data, key) => { } 一个触发选中后的回调函数，返回选项数据和key
 * @param data [{ content: 菜单, subText: 负文本 }]
 * @param mode: horizontal 横布局 | vertical 竖布局
 * @param bgColor '#eee' 主体背景色
 * @param bgImg 'img/bg.png' 主体背景图
 * @param height 主体高度
 * @param width 主体宽度
 * @param itemHeight 每一个导航项的高度
 * @param itemBgColor 每一个导航项的背景色
 * @param itemBgImg 每一个导航项的背景图片
 * @param itemHover 鼠标hover样式
 * {
 *   bgColor: 背景颜色, color: 字体颜色, bgImg: 背景图片, skew: 倾斜角度
 *   leftLine: { width: 宽度, height：高度, color: 颜色, left: 左边距 } 左边线
 *   borderLeft: { width: 宽度, color: 颜色, style: 'solid' } 左边框
 * }
 * @param itemBorder { borderRadius: 圆角, borderWidth: 宽度, borderStyle: 风格, borderColor: 颜色 } 边框样式
 * @param itemMargin { marginTop: 上, marginBottom: 下, marginRight: 右, marginLeft: 左 } 边距
 * @param selected 选中背景
 * {
 *   bgColor: 背景颜色, bgImg: 背景图片, skew: 倾斜角度, color: 字体颜色
 *   textShadow: { h: 水平阴影, v: 垂直阴影, blur: 模糊的距离, color: 颜色 } 文字阴影
 *   leftLine: { width: 宽度, height：高度, color: 颜色, left: 左边距 } 左边线
 *   borderLeft: { width: 宽度, color: 颜色, style: 'solid' } 左边框
 *   sideLine: 上|下边线
 *   {
 *     width: 宽度, height：高度, color: 颜色, bgImg: 背景图片, position: top | bottom, offset: 偏移量
 *     radius: 圆角
 *   }
 * }
 * @param fontSize 导航字体大小
 * @param color 导航字体颜色
 * @param subColor 导航子文本字体颜色
 * @param subFontSize 导航子字体大小
 * @param fontWeight 导航字体粗细
 * @param textShadow 导航字体阴影
 * { h: 水平阴影, v: 垂直阴影, blur: 模糊的距离, color: 颜色 }
 * @param itemSideLine 导航边线
 * { width: 宽度, height：高度, color: 颜色  }
 * @param containerSideLine 导航容器边线
 * { width: 宽度, height：高度, color: 颜色, position: top | bottom, offset: 偏移量  }
 * @returns
 */
 ```