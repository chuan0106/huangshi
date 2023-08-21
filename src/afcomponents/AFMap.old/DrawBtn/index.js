import React, { useState } from 'react';
import styles from './styles.less';

/**
 * 静态文件
 */
import polygon from '@/assets/pukou/draw_icon/polygon.png';
import polygon_active from '@/assets/pukou/draw_icon/polygon_active.png';
import point from '@/assets/pukou/draw_icon/point.png';
import point_active from '@/assets/pukou/draw_icon/point_active.png';
import del from '@/assets/pukou/draw_icon/delete.png';
import del_active from '@/assets/pukou/draw_icon/delete_active.png';

/**
 * 框选工具
 * @param {*} param0
 * @returns
 */
function DrawBtn({ active = '', onClick = () => {} }) {
  const [delActive, setDelActive] = useState(0);
  return (
    <div className={styles.normal}>
      <div
        className={styles.drawBtn}
        onClick={() => {
          onClick('polygon');
        }}
      >
        <img alt={''} src={active === 'polygon' ? polygon_active : polygon} />
      </div>
      <div
        className={styles.drawBtn}
        onClick={() => {
          onClick('point');
        }}
      >
        <img alt={''} src={active === 'point' ? point_active : point} />
      </div>
      <div
        className={styles.drawBtn}
        onClick={() => {
          onClick('delete');
        }}
        onMouseOver={() => {
          setDelActive(1);
        }}
        onMouseOut={() => {
          setDelActive(0);
        }}
      >
        <img alt={''} src={delActive ? del_active : del} />
      </div>
    </div>
  );
}
export default DrawBtn;
