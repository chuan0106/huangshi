import styled, { keyframes } from 'styled-components';
const rotateStyle = keyframes`
   0% {
     opacity: 1;
     transform: translateX(-200px);

   }

    100% {
    opacity: 1;
    transform: translateX(0px);

   }
  `;

const rotateStyle1 = keyframes`
     0% {
       opacity: 1;
       transform: translateX(0px);
     }

      100% {
        opacity: 1;
      transform: translateX(-200px);
     }
    `;
const ViewAnimation = styled.div.attrs({
  showState: props => {
    if (props.visiable) {
      return 0;
    } else {
      return -200;
    }
  },
  scaleq: props => {
    return props.scale;
  },
  rotateStylenew: props => {
    return props.visiable ? rotateStyle : rotateStyle1;
  },
})`
  top: 0px;
  left: 0px;
  opacity: 1;
  transform: translateX(200px) scale(${props => props.scaleq});
  /* 以下两种方式均可以*/
  /*transform: translateX(${props => props.showState}px);*/
  /*transition: all 0.2s cubic-bezier(0.42, 0, 1, 1);*/
  animation: ${props => props.rotateStylenew} 0s 0s;
  flex: 1;
  height: 100%;
  z-index: 999;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  z-index: 99999;
`;

export default ViewAnimation;
