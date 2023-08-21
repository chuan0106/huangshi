/**
 * Copyright(C) 2018,by leiqiqi,All rights reserved
 *
 * @date 2018年11月27日
 * @author lqq
 * @version 0.1
 * @desc
 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.less';
/**/
const DCard = ({
  className,
  hoverable,
  cover,
  cardStyle,
  iconName,
  iconStyle,
  title,
  description,
  data,
  onClick = () => {},
}) => {
  let classHover = styles.normal;
  let classNoHover = styles.normalNoHover;
  return (
    <div
      className={classNames(
        {
          [`${classHover}`]: hoverable,
          [`${classNoHover}`]: !hoverable,
        },
        className,
      )}
      onClick={onClick(data)}
      style={cardStyle}
    >
      <div className={styles.body}>
        {iconName && <img src={iconName} className={cover ? styles.imgCover : styles.img} />}
        {title || description ? (
          <div className={cover ? styles.contentCover : styles.content}>
            {title && <div className={styles.title}>{title}</div>}
            {description && <div className={styles.description}>{description}</div>}
          </div>
        ) : null}
      </div>
    </div>
  );
};

DCard.defaultProps = {
  iconName: null,
  title: null,
  description: null,
  hoverable: false,
  cover: false,
  onClick: () => {},
};

DCard.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
  hoverable: PropTypes.bool,
  cover: PropTypes.bool,
  onClick: PropTypes.func,
};
export default DCard;
