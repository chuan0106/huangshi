import styled, { keyframes } from 'styled-components';
const rotateStyleShow = keyframes`
   0% {
     opacity: 1;
     transform: translateX(530px);

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
      transform: translateX(530px);
     }
    `;
const ViewAnimationRight = styled.div.attrs({
  showState: props => {
    if (props.visiable) {
      return 0;
    } else {
      return 530;
    }
  },
  rotateStylenew: props => {
    return props.visiable ? rotateStyleShow : rotateStyleHide;
  },
})`
  float: right;
  margin-top: 140px;
  margin-right: 24px;
  /* margin-top: 140px;
  margin-right: 0px; */
  opacity: 1;
  transform: translateX(510px);
  /* 以下两种方式均可以*/
  /*transform: translateX(${props => props.showState}px);*/
  /*transition: all 0.2s cubic-bezier(0.42, 0, 1, 1);*/
  animation: ${props => props.rotateStylenew} 1s 0s;
  width: 500px;
  height: 100%;
  flex-shrink: 0; /**不能缩放*/
  flex-grow: 0; /**不能缩放*/
  box-sizing: border-box;
  /* border-right: 1px solid #e4e7ed; */
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  z-index: 99999;
`;

export default ViewAnimationRight;
