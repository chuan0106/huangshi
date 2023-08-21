/**
 * Copyright(C) 2020,by lqq,All rights reserved
 * 文件功能: 动画案例
 *
 * 创建日期：2021年02月7日
 *
 * 作者: wuxin
 *
 */
import Rotate from './index';
const Test = () => {
  return (
    <Rotate
      duration={1} //动画持续时间(s)
      visiable={true} //控制显示隐藏(true || false)
      width={500} //盒子宽度(px)
      height={1278} //盒子高度(px)
      position={'left'} //定位位置(left || right || center)
      top={140} //居上距离(px)
      left={24} //居左距离(px)
      right={0} //居右距离(px)
      startOpcity={1} //开始透明度 (0-1)
      endOpcity={1} //结束透明度(0-1)
    />
  );
};
export default Test;
