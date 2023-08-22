/**
 * Copyright(C) 2020,by lqq,All rights reserved
 * 文件功能: 动画
 *
 * 创建日期：2021年02月7日
 *
 * 作者: wuxin
 *
 *
 * visiable       控制显示隐藏(true || false)
 * duration       动画持续时间(s)  为 0 没有动画
 * width          盒子宽度(px)
 * height         盒子高度(px)
 * position       定位位置(left || right || center)
 * top            居上距离
 * left           居左距离
 * right          居右距离
 * startOpcity    开始透明度
 * endOpcity      结束透明度
 */
import styled, { keyframes } from 'styled-components';
const defaultValue = {
  width: 500,
  height: 1278,
  top: 120,
  left: 20,
  right: 20,
};
const processValue = (thisVal, defaultVal) => {
  return thisVal || thisVal === 0 ? thisVal : defaultVal;
};
const Rotate = styled.div.attrs({
  duration: props => props.duration || 1,
  position: props => props.position || 'left',
  widthFun: props => {
    if (props.position !== 'center') {
      return processValue(props.width, defaultValue.width);
    }
  },
  heightFun: props => {
    if (props.position !== 'center') {
      return processValue(props.height, defaultValue.height);
    }
  },
  leftFun: props => {
    if (props.position === 'left') {
      return processValue(props.left, defaultValue.left);
    } else if (props.position === 'center') {
      return 0;
    }
  },
  rightFun: props => {
    if (props.position === 'right') {
      return processValue(props.right, defaultValue.right);
    } else if (props.position === 'center') {
      return 0;
    }
  },
  rotateStylenew: props => {
    if (props.visiable) {
      if (props.position === 'left') {
        return keyframes`
             0% {
                 opacity: ${props => processValue(props.startOpcity, 0)};
                 transform: translateX(-${processValue(props.width, defaultValue.width) +
                   processValue(props.left, defaultValue.left)}px);
             }
             100% {
                opacity: ${props => processValue(props.endOpcity, 1)};
                transform: translateX(0px)
             }
             `;
      }
      if (props.position === 'right') {
        return keyframes`
         0% {
           opacity: ${props => processValue(props.startOpcity, 0)};
           transform: translateX(${processValue(props.width, defaultValue.width) +
             processValue(props.right, defaultValue.right)}px);
         }
      
          100% {
          opacity: ${props => processValue(props.endOpcity, 1)};
          transform: translateX(0px);
      
         }
        `;
      }
      if (props.position === 'center') {
        return keyframes`
         0% {
             opacity: ${props => processValue(props.startOpcity, 0)};
             transform: scale(0) rotate(0deg);
            }
       100% {
             opacity: ${props => processValue(props.endOpcity, 1)};
             transform: scale(1) rotate(0deg);
          }
        `;
      }
    } else {
      if (props.position === 'left') {
        return keyframes`
             0% {
                 opacity: ${props => processValue(props.endOpcity, 1)};
                 transform: translateX(0px);
             }
             100% {
                 opacity:  ${props => processValue(props.startOpcity, 0)};
                 transform: translateX(-${processValue(props.width, defaultValue.width) +
                   processValue(props.left, defaultValue.left)}px);
             }
             `;
      }
      if (props.position === 'right') {
        return keyframes`
           0% {
             opacity: ${props => processValue(props.endOpcity, 1)};
             transform: translateX(0px);
           }
      
            100% {
            opacity: ${props => processValue(props.startOpcity, 0)};
            transform: translateX(${processValue(props.width, defaultValue.width) +
              processValue(props.right, defaultValue.right)}px);
           }
          `;
      }
      if (props.position === 'center') {
        return keyframes`
           0% {
               opacity: ${props => processValue(props.endOpcity, 1)};
               transform: scale(1) rotate(0deg);
             }
             100% {
               opacity: ${props => processValue(props.startOpcity, 0)};
               transform: scale(0) rotate(0deg);
             }
          `;
      }
    }
  },
})`
  position: absolute;
  top: ${props => processValue(props.top, defaultValue.top)}px;
  left: ${props => props.leftFun}px;
  right: ${props => props.rightFun}px;
  width: ${props => props.widthFun}px;
  height: ${props => props.heightFun}px;
  margin: auto;
  animation: ${props => props.rotateStylenew} ${props => props.duration}s 0s;
  flex-shrink: 0; /**不能缩放*/
  flex-grow: 0; /**不能缩放*/
  box-sizing: border-box;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  z-index: 99999;
`;

export default Rotate;
