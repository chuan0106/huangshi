import styled, { keyframes } from 'styled-components';
const rotateStyleShow = keyframes`
   0% {
     opacity: 1;
     transform: translateX(-530px);

   }

    100% {
    opacity: 1;
    transform: translateX(0px);

   }
  `;

const rotateStyleHide = keyframes`
     0% {
       opacity: 1;
       transform: translateX(0px);
     }

      100% {
      opacity: 1;
      transform: translateX(-530px);
     }
    `;
const AnimationLeft = styled.div.attrs({
  showState: props => {
    if (props.visiable) {
      return 0;
    } else {
      return -530;
    }
  },
  rotateStylenew: props => {
    return props.visiable ? rotateStyleShow : rotateStyleHide;
  },
  //居上距离
  top: props => {
    return props.top || 100;
  },
  //居左距离
  left: props => {
    return props.left ? props.left : 20;
  },
})`
  float: left;
  margin-top: ${props => props.top}px;
  margin-left: ${props => props.left}px;
  opacity: 1;
  transform: translateX(-510px);
  /* 以下两种方式均可以*/
  /*transform: translateX(${props => props.showState}px);*/
  /*transition: all 0.2s cubic-bezier(0.42, 0, 1, 1);*/
  animation: ${props => props.rotateStylenew} 1s 0s;
  /* width: 500px; */
  /* height: 100%; */
  flex-shrink: 0; /**不能缩放*/
  flex-grow: 0; /**不能缩放*/
  box-sizing: border-box;
  /* border-right: 1px solid #e4e7ed; */
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  z-index: 99999;

`;

export default AnimationLeft;
