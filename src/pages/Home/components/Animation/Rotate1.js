import React, { useState, useEffect } from 'react';
import styles from './Rotate1.less';
import { Rotate } from '@/dacomponents/Animation';
import { projectType } from '@/constants/projectConfig';
const screenSizeType = projectType.screenSizeType;
// 浦口内网默认值
const defaultValue1 = {
  width: 860, //默认670*1440；532:是动画移动的范围
  height: 1096,
  top: 0,
  left: 0,
  right: 0,
  duration: 1,
};
// 外网默认值
const defaultValue2 = {
  width: 860,
  height: 1096,
  top: 120,
  left: 20,
  right: 20,
  duration: 1,
};
function Rotate1(props) {
  const [visiable, setVisiable] = useState(true);
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    if (props.visiable) {
      if (isShow) {
        setVisiable(true);
      } else {
        setVisiable(false);
      }
    } else {
      setVisiable(false);
    }
  }, [props.visiable, isShow]);
  //   动画默认参数
  const defaultValue = screenSizeType === 1 ? defaultValue1 : defaultValue2;
  const { children, position } = props;
  const propsParam = { ...defaultValue, ...props, children: [], visiable };

  function toggleShow() {
    if (props.visiable) {
      setIsShow(!isShow);
    }
  }

  const leftStyle = {
    screenStyle: {
      width: screenSizeType === 1 ? propsParam.width + 138 : propsParam.width,
    },
    buttonStyle: {
      left: propsParam.width,
    },
  };
  const rightStyle = {
    screenStyle: {
      width: screenSizeType === 1 ? propsParam.width + 138 : propsParam.width,
      //   marginLeft: screenSizeType === 1 ? -138 : 0,
      float: screenSizeType === 1 ? 'right' : 'left',
    },
    buttonStyle: {
      right: propsParam.width,
    },
  };
  const tempStyle = position === 'left' ? leftStyle : rightStyle;
  return (
    <Rotate {...propsParam}>
      <div className={styles.screenBox} style={tempStyle.screenStyle}>
        {children}
      </div>
      {!props.hiddenButton && (
        <div
          className={
            position === 'left'
              ? visiable
                ? styles.buttonBoxLeft
                : styles.buttonBoxRight
              : visiable
              ? styles.buttonBoxRight
              : styles.buttonBoxLeft
          }
          style={tempStyle.buttonStyle}
          onClick={() => {
            toggleShow();
          }}
        ></div>
      )}
    </Rotate>
  );
}
export default Rotate1;
