import styled, { keyframes } from 'styled-components';
const rotateStyleShow = keyframes`
   0% {
     opacity: 1;
     transform: translateY(-280px);

   }

    100% {
    opacity: 1;
    transform: translateY(0px);

   }
  `;

const rotateStyleHide = keyframes`
     0% {
       opacity: 1;
       transform: translateY(0px);
     }

      100% {
      opacity: 1;
      transform: translateY(-280px);
     }
    `;
const ViewAnimationTop = styled.div.attrs({
  showState: props => {
    if (props.visiable) {
      return 0;
    } else {
      return -280;
    }
  },
  rotateStylenew: props => {
    return props.visiable ? rotateStyleShow : rotateStyleHide;
  },
})`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 40px;
  opacity: 1;
  transform: translateY(-280px);
  /* 以下两种方式均可以*/
  /*transform: translateX(${props => props.showState}px);*/
  /*transition: all 0.2s cubic-bezier(0.42, 0, 1, 1);*/
  animation: ${props => props.rotateStylenew} 3s 0s;
  width: 720px;
  height: 180px;
  flex-shrink: 0; /**不能缩放*/
  flex-grow: 0; /**不能缩放*/
  box-sizing: border-box;
  /* border-right: 1px solid #e4e7ed; */
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  /*border: 1px solid red;*/
  z-index: 99999;

`;

export default ViewAnimationTop;
