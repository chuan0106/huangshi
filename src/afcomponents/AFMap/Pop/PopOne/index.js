/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2021年9月9日
 * @author wx
 * @desc 弹框样式1
 *
 */
import React from 'react';
import styles from './styles.less';
function PopOne({ content, contentStyle }) {
  if (!contentStyle) return null;
  const { interactionDefault, fixedSize } = contentStyle;
  const {
    background,
    borderColor,
    borderRadius,
    borderWidth,
    keyStyle,
    valueStyle,
  } = interactionDefault.boxStyle.style1;
  //   -------- 弹框样式 --------
  const boxStyleObj = {
    borderWidth,
    background,
    borderColor,
    borderRadius,
  };
  //   -------- 弹框固定宽高 --------
  if (fixedSize.status) {
    boxStyleObj.width = fixedSize.width;
    boxStyleObj.height = fixedSize.height;
  }
  //   -------- 文字样式 --------
  //   10:可以调节默认行间距
  const textBoxObj = {
    height:
      (keyStyle.fontSize > valueStyle.fontSize ? keyStyle.fontSize : valueStyle.fontSize) + 10,
    lineHeight: `${(keyStyle.fontSize > valueStyle.fontSize
      ? keyStyle.fontSize
      : valueStyle.fontSize) + 10}px`,
  };
  const textKeyObj = {
    ...keyStyle,
  };
  const textValueObj = {
    ...valueStyle,
  };

  return (
    <div
      className={styles.normal}
      //   onClick={() => {
      //     alert(1);
      //   }}
      style={{
        ...boxStyleObj,
      }}
    >
      {content &&
        content.map((elem, index) => {
          return (
            <div className={styles.textBox} style={textBoxObj} key={index + 'popBoxLine'}>
              <span style={textKeyObj}>{elem?.key}：</span>
              <span style={textValueObj}>{elem?.value}</span>
            </div>
          );
        })}
    </div>
  );
}

export default PopOne;
