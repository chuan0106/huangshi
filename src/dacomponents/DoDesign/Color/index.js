/**
 *
 * 文件功能: 测试颜色转换
 *
 */
// import { Input, message } from 'antd';
import styles from './styles.less';
import { rgbToHex, hexToRgb, hslToRgb, rgbToHsl } from '@/utils/object/color';

const ColorStr = () => {
  return (
    <div className={styles.nomore}>
      <div className={styles.title}>颜色转换</div>
      <div>rgbToHex('') {rgbToHex('RGB(255,48,64)')}</div>
      <div>hexToRgb('') {hexToRgb('#ff3040')}</div>
      <div>hslToRgb() {hslToRgb('hsl(0.9871175523349436,100%,59.411764705882355%)')}</div>
      <div>rgbToHsl('') {rgbToHsl('RGB(255,48,64)')}</div>
    </div>
  );
};
export default ColorStr;
