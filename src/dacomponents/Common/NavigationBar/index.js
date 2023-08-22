import { useState } from 'react';
import styles from './index.less';

/**
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
 * @param itemIcon: { url: 图片地址, height: 高度 }
 * @param itemHover 鼠标hover样式
 * {
 *   bgColor: 背景颜色, color: 字体颜色, bgImg: 背景图片, skew: 倾斜角度
 *   leftLine: { width: 宽度, height：高度, color: 颜色, left: 左边距 } 左边线
 *   borderLeft: { width: 宽度, color: 颜色, style: 'solid' } 左边框
 * }
 * @param itemBorder { borderRadius: 圆角, borderWidth: 宽度, borderStyle: 风格, borderColor: 颜色 } 边框样式
 * @param itemMargin { marginTop: 上, marginBottom: 下, marginRight: 右, marginLeft: 左 } 边距
 * @param selected 选中
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
export default function NavigationBar({
  onChange,
  data,
  mode,
  bgColor,
  bgImg,
  height,
  width,
  itemHeight,
  itemBgColor,
  itemBgImg,
  itemIcon,
  itemHover,
  itemBorder,
  itemMargin,
  selected,
  fontSize,
  color,
  subColor,
  subFontSize,
  fontWeight,
  textShadow,
  itemSideLine,
  containerSideLine,
}) {
  const [hoverState, setHoverState] = useState(-1);
  const [selectIndex, setSelectIndex] = useState(-1);

  // item 背景图片
  const getBgImg = (index, selectIndex, hoverState) => {
    if (index === selectIndex && selected?.bgImg) {
      return `url(${selected?.bgImg})`;
    }

    if (index === hoverState && itemHover?.bgImg) {
      return `url(${itemHover?.bgImg})`;
    }

    if (itemBgImg) {
      return `url(${itemBgImg})`;
    }

    let selectColor = selected?.bgColor;
    if (Array.isArray(selectColor)) {
      selectColor = selectColor.join(',');
    } else if (selectColor) {
      selectColor = `${selectColor},${selectColor}`;
    }

    let hoverColor = itemHover?.bgColor;
    if (Array.isArray(hoverColor)) {
      hoverColor = hoverColor.join(',');
    } else if (hoverColor) {
      hoverColor = `${hoverColor},${hoverColor}`;
    }

    let _itemBgColor = itemBgColor;
    if (Array.isArray(_itemBgColor)) {
      _itemBgColor = _itemBgColor.join(',');
    } else if (_itemBgColor) {
      _itemBgColor = `${_itemBgColor},${_itemBgColor}`;
    }

    if (index === selectIndex && selectColor) {
      return `linear-gradient(to right, ${selectColor})`;
    }

    if (index === hoverState && hoverColor) {
      return `linear-gradient(to right, ${hoverColor})`;
    }

    if (_itemBgColor) {
      return `linear-gradient(to right, ${_itemBgColor})`;
    }
  };

  // 选中、hover时 item 倾斜角
  const getSkew = (index, selectIndex, hoverState, sign = 1) => {
    if (index === selectIndex && selected) {
      return `skew(${selected.skew * sign}deg)`;
    }

    if (index === hoverState && itemHover) {
      return `skew(${itemHover.skew * sign}deg)`;
    }
  };

  // 选中时 item 左侧线
  const getLeftLine = (index, selectIndex) => {
    if (index === selectIndex && selected?.leftLine) {
      return styles['selected-left-line'];
    }
    return '';
  };

  // 选中时 item 顶、底侧线
  const getTopBottomLine = (index, selectIndex) => {
    if (index === selectIndex && selected?.sideLine) {
      if (selected.sideLine.position === 'top') {
        return styles['selected-top-line'];
      }
      if (selected.sideLine.position === 'bottom') {
        return styles['selected-bottom-line'];
      }
    }
    return '';
  };

  // 选中、hover时 item 顶、底侧线背景图片
  const getTopBottomLineImg = (index, selectIndex, hoverState) => {
    if (index === selectIndex && selected?.sideLine?.bgImg) {
      return `url(${selected.sideLine.bgImg})`;
    }

    // if (index === hoverState && itemHover?.bgImg) {
    //   return `url(${itemHover?.bgImg})`;
    // }

    let selectColor = selected?.sideLine?.color;
    if (Array.isArray(selectColor)) {
      selectColor = selectColor.join(',');
    } else {
      selectColor = `${selectColor},${selectColor}`;
    }

    // let hoverColor = itemHover?.bgColor;
    // if (Array.isArray(hoverColor)) {
    //   hoverColor = hoverColor.join(',');
    // } else {
    //   hoverColor = `${hoverColor},${hoverColor}`;
    // }

    if (index === selectIndex && selectColor) {
      return `linear-gradient(to right, ${selectColor})`;
    }

    // if (index === hoverState && hoverColor) {
    //   return `linear-gradient(to right, ${hoverColor})`;
    // }
  };

  // 导航项边线
  const getSideLine = () => {
    if (itemSideLine) {
      return styles['item-side-line'];
    }
    return '';
  };

  // 容器边线
  const getContainerSideLine = () => {
    if (containerSideLine?.position === 'top') {
      return styles['container-top-line'];
    }
    if (containerSideLine?.position === 'bottom') {
      return styles['container-bottom-line'];
    }
    return '';
  };

  // 选中 item 时的字体颜色
  const getColor = (index, selectIndex) => {
    if (index === selectIndex && selected?.color) {
      return selected?.color;
    }
  };

  // item 字体阴影
  const getTextShadow = (index, selectIndex) => {
    if (index === selectIndex && selected?.textShadow) {
      const textShadow = selected?.textShadow;
      return `${textShadow?.h}px ${textShadow?.v}px ${textShadow?.blur}px ${textShadow?.color}`;
    }
    if (textShadow) {
      return `${textShadow?.h}px ${textShadow?.v}px ${textShadow?.blur}px ${textShadow?.color}`;
    }
  };

  const hoverLeftLine = itemHover?.leftLine; // hover时左边线
  const selectedLeftLine = selected?.leftLine; // 选中时左边线
  const hoverBorderLeft = itemHover?.borderLeft; // hover 时左边框
  const selectedBorderLeft = selected?.borderLeft; // 选中时左边框
  const selectedSideLine = selected?.sideLine; // 选中时边线

  // hover 时左边线偏移量
  const hoverLeftLineOffset =
    hoverLeftLine?.width + (hoverBorderLeft?.width || 0) + hoverLeftLine?.left;

  // 选中时左边线偏移量
  const selectedLeftLineMargin =
    selectedLeftLine?.width + (selectedBorderLeft?.width || 0) + selectedLeftLine?.left;

  // 容器边线偏移量
  const containerSideLineOffset = (containerSideLine?.height || 0) + containerSideLine?.offset;

  // 容器边线宽度
  let containerSideLineWidth = containerSideLine?.width;
  if (!containerSideLineWidth) {
    containerSideLineWidth = '100%';
  } else {
    containerSideLineWidth = containerSideLineWidth + 'px';
  }

  // 选择时边线宽度
  let selectedSideLineWidth = selectedSideLine?.width;
  if (!selectedSideLineWidth) {
    selectedSideLineWidth = '100%';
  } else {
    selectedSideLineWidth = selectedSideLineWidth + 'px';
  }

  // 选择时边线偏移量
  const selectedSideLineOffset = (selectedSideLine?.height || 0) + selectedSideLine?.offset;

  return (
    <div
      className={`${styles.container} ${styles[mode + '-container']}`}
      style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImg})`, height, width }}
    >
      <ul
        className={`${styles[mode || 'horizontal']} ${getContainerSideLine()}`}
        style={{
          '--container-side-line-width': containerSideLineWidth,
          '--container-side-line-height': containerSideLine?.height + 'px',
          '--container-side-line-color': containerSideLine?.color,
          '--container-side-line-offset': -containerSideLineOffset + 'px',
        }}
      >
        {Array.isArray(data) &&
          data.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoverState(index)}
              onMouseLeave={() => setHoverState(-1)}
              onClick={() => {
                setSelectIndex(index);
                onChange && onChange(item, index);
              }}
              className={
                `${styles['item-hover']} ` +
                `${getLeftLine(index, selectIndex, hoverState)} ` +
                `${getSideLine()} `
              }
              style={{
                '--hover-color': itemHover?.color,
                '--hover-left-line-width': hoverLeftLine?.width + 'px',
                '--hover-left-line-height': hoverLeftLine?.height + 'px',
                '--hover-left-line-color': hoverLeftLine?.color,
                '--hover-left-line-left': -hoverLeftLineOffset + 'px',
                '--hover-border-left-color': hoverBorderLeft?.color,
                '--hover-border-left-width': hoverBorderLeft?.width + 'px',
                '--hover-border-left-style': hoverBorderLeft?.style,
                '--selected-left-line-width': selectedLeftLine?.width + 'px',
                '--selected-left-line-height': selectedLeftLine?.height + 'px',
                '--selected-left-line-color': selectedLeftLine?.color,
                '--selected-left-line-left': -selectedLeftLineMargin + 'px',
                '--selected-border-left-color': selectedBorderLeft?.color,
                '--selected-border-left-width': selectedBorderLeft?.width + 'px',
                '--selected-border-left-style': selectedBorderLeft?.style,
                '--item-side-line-width': itemSideLine?.width + 'px',
                '--item-side-line-height': itemSideLine?.height + 'px',
                '--item-side-line-color': itemSideLine?.color,
                height: itemHeight,
                backgroundImage: getBgImg(index, selectIndex, hoverState),
                transform: getSkew(index, selectIndex, hoverState),
                ...itemBorder,
                ...itemMargin,
              }}
            >
              {itemIcon ? (
                <img
                  className={styles['item-icon']}
                  src={itemIcon.url}
                  alt=""
                  style={{
                    maxHeight: itemIcon.height || itemHeight,
                  }}
                />
              ) : null}

              <div
                className={styles.content}
                style={{
                  fontSize,
                  color,
                  fontWeight,
                  transform: getSkew(index, selectIndex, hoverState, -1),
                }}
              >
                {/* 导航顶部/底部线 */}
                <div
                  className={`${getTopBottomLine(index, selectIndex)} `}
                  style={{
                    backgroundImage: getTopBottomLineImg(index, selectIndex),
                    '--selected-side-line-width': selectedSideLineWidth,
                    '--selected-side-line-height': selectedSideLine?.height + 'px',
                    '--selected-side-line-radius': selectedSideLine?.radius + 'px',
                    '--selected-side-line-offset': -selectedSideLineOffset + 'px',
                  }}
                />
                {/* 导航主文本 */}
                <div
                  style={{
                    color: getColor(index, selectIndex),
                    textShadow: getTextShadow(index, selectIndex),
                  }}
                >
                  {item.content}
                </div>
                {/* 导航子文本 */}
                {item.subText && (
                  <div style={{ color: subColor, fontSize: subFontSize }}>{item.subText}</div>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
