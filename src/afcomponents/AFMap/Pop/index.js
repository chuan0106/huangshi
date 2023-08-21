import React from 'react';
import ReactDOM from 'react-dom';
import PopOne from './PopOne';
import PopTwo from './PopTwo';
import PopScreen from './PopScreen';
import EFrame from './EFrame';
import styles from './styles.less';
import { isDomObj } from '@/utils/object/domObj.js';

function InteractionBox({ boxType, info, popType, positionObj, closeBtn, closePop, ...props }) {
  let tempDom = null;
  if (!popType) {
    if (boxType === 1) {
      tempDom = <PopOne {...props}></PopOne>;
    }
    if (boxType === 2) {
      tempDom = <PopTwo {...props}></PopTwo>;
    }
  } else if (popType === 1) {
    tempDom = <PopScreen {...props}></PopScreen>;
  } else {
    tempDom = <EFrame {...props}></EFrame>;
  }
  return (
    <div
      className={styles.normal}
      style={{
        ...positionObj,
      }}
    >
      {(closeBtn?.status || false) && (
        <span
          className={styles.closePop}
          style={{
            fontSize: closeBtn?.size || closeBtn?.size === 0 ? closeBtn?.size : 12,
            color: closeBtn?.color || '#fff',
            marginRight:
              closeBtn?.marginRight || closeBtn?.marginRight === 0 ? closeBtn?.marginRight : 10,
            marginTop: closeBtn?.marginTop || closeBtn?.marginTop === 0 ? closeBtn?.marginTop : 10,
          }}
          onClick={closePop}
        >
          ×
        </span>
      )}

      {tempDom}
    </div>
  );
}

function PopView(props, node) {
  const { show, info, popType, boxType, contentStyle, closePop } = props;
  if (!contentStyle) return null;
  const { interactionBoxPosition, closeBtn } = contentStyle;
  //   -------- 弹框位置 --------
  const positionObj = {};
  //   开启弹框位置
  if (interactionBoxPosition.status) {
    //   ------------- 固定位置 --------------
    if (!interactionBoxPosition.positionType) {
      positionObj.position = 'absolute';
      positionObj.left = info?.x;
      positionObj.top = info?.y;
      switch (interactionBoxPosition.placement) {
        case 'top':
          positionObj.transform = `translate(${`calc(-50% + ${interactionBoxPosition.x}px)`}, ${`calc(-100% - ${interactionBoxPosition.y}px)`})`;
          break;
        case 'bottom':
          positionObj.transform = `translate(${`calc(-50% + ${interactionBoxPosition.x}px)`}, ${
            interactionBoxPosition.y
          }px)`;
          break;
        case 'left':
          positionObj.transform = `translate(${`calc(-100% - ${interactionBoxPosition.x}px)`}, ${`calc(-50% + ${interactionBoxPosition.y}px)`})`;
          break;
        case 'right':
          positionObj.transform = `translate(${
            interactionBoxPosition.x
          }px, ${`calc(-50% + ${interactionBoxPosition.y}px)`})`;

          break;
        default:
          break;
      }
    } else if (interactionBoxPosition.positionType === 1) {
      // ------------- 追随对齐 -------------
      switch (interactionBoxPosition.placement) {
        case 'top':
          positionObj.transform = `translate(${
            interactionBoxPosition.x
          }px, ${`calc(-50% - ${interactionBoxPosition.y}px)`})`;
          break;
        case 'bottom':
          positionObj.transform = `translate(${
            interactionBoxPosition.x
          }px, ${`calc(50% + ${interactionBoxPosition.y}px)`})`;
          break;
        case 'left':
          positionObj.transform = `translate(${`calc(-50% - ${interactionBoxPosition.x}px)`}, ${
            interactionBoxPosition.y
          }px)`;
          break;
        case 'right':
          positionObj.transform = `translate(${`calc(50% + ${interactionBoxPosition.x}px)`}, ${
            interactionBoxPosition.y
          }px)`;
          break;
        default:
          break;
      }
    } else {
      positionObj.position = 'absolute';
      // ------------- 固定屏幕 -------------
      switch (interactionBoxPosition.placement) {
        case 'leftTop':
          positionObj.left = interactionBoxPosition.x;
          positionObj.top = interactionBoxPosition.y;
          break;
        case 'rightTop':
          positionObj.right = interactionBoxPosition.x;
          positionObj.top = interactionBoxPosition.y;
          break;
        case 'leftBottom':
          positionObj.left = interactionBoxPosition.x;
          positionObj.bottom = interactionBoxPosition.y;
          break;
        case 'rightBottom':
          positionObj.right = interactionBoxPosition.x;
          positionObj.bottom = interactionBoxPosition.y;
          break;
        default:
          break;
      }
    }
  }
  //   固定位置的显隐
  if (!interactionBoxPosition.positionType || interactionBoxPosition.positionType === 2) {
    // positionObj.display = show ? 'block' : 'none';
    positionObj.visibility = show ? 'visible' : 'hidden';
    positionObj['pointer-events'] = show ? 'auto' : 'none';
  }

  return !interactionBoxPosition.positionType || interactionBoxPosition.positionType === 2 ? (
    <InteractionBox
      boxType={boxType}
      info={info}
      popType={popType}
      positionObj={positionObj}
      closeBtn={closeBtn}
      closePop={closePop}
      {...props}
    />
  ) : (
    isDomObj(node) &&
      ReactDOM.render(
        <InteractionBox
          boxType={boxType}
          info={info}
          popType={popType}
          positionObj={positionObj}
          closeBtn={closeBtn}
          closePop={closePop}
          {...props}
        />,
        node,
      )
  );
}
export default PopView;
