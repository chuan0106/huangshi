import styled, { keyframes } from 'styled-components';
const rotateStyleShow = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    60% {
      opacity: 0.2;
    }
    70% {
    opacity: 0.5;
    }
    80% {
    opacity: 0.8;
    }
    100% {
    opacity: 1;
   }
  `;

const rotateStyleHide = keyframes`
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
    `;
const ViewAnimationRight = styled.div.attrs({
  showState: props => {
    if (props.visiable) {
      return 0;
    } else {
      return 364;
    }
  },
  rotateStylenew: props => {
    return props.visiable ? rotateStyleShow : rotateStyleHide;
  },
})`
  float: right;
  margin-top: 0px;
  margin-right: 20px;
  opacity: 1;
  transform: translateX(0px);
  /* 以下两种方式均可以*/
  /*transform: translateX(${props => props.showState}px);*/
  /*transition: all 0.2s cubic-bezier(0.42, 0, 1, 1);*/
  animation: ${props => props.rotateStylenew} ${props => (props.visiable ? 1.2 : 0.6)}s 0s;
  flex-shrink: 0; /**不能缩放*/
  flex-grow: 0; /**不能缩放*/
  box-sizing: border-box;
  /* border-right: 1px solid #e4e7ed; */
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
`;

export default ViewAnimationRight;
