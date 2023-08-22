/**
 * Copyright(C) 2020,by lqq,All rights reserved
 * 文件功能: 包含动画的iframe
 *
 * 创建日期：2021年12月8日
 *
 * 作者: wuxin
 *
 */
import { DIframe } from './DCommon';
import { Rotate } from './Animation';
const AFIframe = ({
  screenId, //大屏id
  duration, //动画持续时间(s)
  visiable, //控制显示隐藏(true || false)
  width, //盒子宽度(px)
  height, //盒子高度(px)
  position, //定位位置(left || right || center)
  top, //居上距离(px)
  left, //居左距离(px)
  right, //居右距离(px)
  startOpcity, //开始透明度 (0-1)
  endOpcity, //结束透明度 (0-1)
  type, //iframe 类型区分 (1-3)
  params, //iframe 地址拼接参数 {}
}) => {
  return (
    <Rotate
      duration={duration}
      visiable={visiable}
      width={width}
      height={height}
      position={position}
      top={top}
      left={left}
      right={right}
      startOpcity={startOpcity}
      endOpcity={endOpcity}
    >
      <DIframe
        type={type}
        params={params}
        screenId={screenId}
        width={width}
        height={height}
      ></DIframe>
    </Rotate>
  );
};
export default AFIframe;
