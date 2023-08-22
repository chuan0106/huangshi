import { useState, useEffect, useCallback } from 'react';
import styles from './index.less';

/**
 * @param onChange (data, key) => { } 一个触发选中后的回调函数，返回选项数据和key
 * @param data [{ label: 显示文本, value: 值 }]
 * @param bgColor 主体背景色
 * @param width 主体宽度
 * @param height 选择框高度
 * @param listHeight 列表高度
 * @param itemHover 鼠标hover样式
 * {
 *   bgColor: 背景颜色
 * }
 * @param selected 选中
 * {
 *   bgColor: 背景颜色
 * }
 */
const Select = ({ onChange, data, bgColor, width, height, listHeight, itemHover, selected }) => {
  const [hoverState, setHoverState] = useState(-1);
  const [selectIndex, setSelectIndex] = useState(-1);
  const [selectLabel, setSelectLabel] = useState();
  const [menuVisible, setMenuVisible] = useState(false);

  const documentClick = useCallback(() => {
    setMenuVisible(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', documentClick);
    return () => {
      document.removeEventListener('click', documentClick);
    };
  }, [documentClick]);

  const itemBgColor = (cur, hover, select) => {
    if (cur === select) return selected?.bgColor || '#e6f7ff';
    if (cur === hover) return itemHover?.bgColor || '#f5f5f5';
  };

  return (
    <div
      className={styles.container}
      onClick={e => {
        e.nativeEvent.stopImmediatePropagation();
        setMenuVisible(true);
      }}
      style={{ width, backgroundColor: bgColor }}
    >
      <div className={styles.selector} style={{ height }}>
        {selectLabel ? (
          <span>{selectLabel}</span>
        ) : (
          <span className={styles.placeholder}>请选择</span>
        )}
        <span className={styles['select-arrow']}>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="down"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
          </svg>
        </span>
      </div>
      {menuVisible && (
        <ul style={{ top: height + 1, maxHeight: listHeight }}>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <li
                title={item.label}
                onMouseEnter={() => setHoverState(index)}
                onMouseLeave={() => setHoverState(-1)}
                onClick={() => {
                  setSelectIndex(index);
                  setSelectLabel(item.label);
                  onChange && onChange(item, index);
                }}
                style={{
                  backgroundColor: itemBgColor(index, hoverState, selectIndex),
                  fontWeight: index === selectIndex && 600,
                }}
              >
                {item.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
