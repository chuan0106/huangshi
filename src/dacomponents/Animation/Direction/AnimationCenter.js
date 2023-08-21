import styled, { keyframes } from 'styled-components';
const rotateStyleShow = keyframes`
   0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);

   }


    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);

    }
    `;

const rotateStyleHide = keyframes`
    0% {
      opacity: 1;
      transform: scale(1) rotate(0deg);

    }

    100% {
      opacity: 0;
      transform: scale(0) rotate(0deg);

    }
    `;
const ViewAnimationTop = styled.div.attrs({
  showState: props => {
    if (props.visiable) {
      return 1;
    } else {
      return 0.5;
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
  top:210px;
  width:${props => props.width}px;
  height:${props => props.scope}px;
  opacity: 1;
  transform: scale(1) rotate(0deg);
  /* 以下两种方式均可以*/
  /*transform: scale(${props => props.showState}) rotate(0deg);*/
  /*transition: all 0.2s cubic-bezier(0.42, 0, 1, 1);*/
  animation: ${props => props.rotateStylenew} .8s 0s;
  flex-shrink: 0; /**不能缩放*/
  flex-grow: 0; /**不能缩放*/
  box-sizing: border-box;
  /* border-right: 1px solid #e4e7ed; */
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  /*border: 1px solid red;*/
   z-index: 100001;
`;

export default ViewAnimationTop;
