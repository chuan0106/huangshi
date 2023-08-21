import React, { createElement } from 'react';
import classNames from 'classnames';
import config from './config';
import styles from './index.less';
import { projectType } from '@/constants/projectConfig';

/**
 * 全局常量
 */
const projetcName = projectType.projectName;

const Exception = ({ className, linkElement = 'a', type, title, desc, img, actions, ...rest }) => {
  const pageType = type in config ? type : '404';
  let pageName = '请联系管理员';
  let path = '/datas/manag';
  if (pageType === '403') {
    pageName = '请联系管理员';
    path = '/datas/manage';
  }
  if (pageType === '404') {
    pageName = '返回平台首页';
    path = '/datas/manage';
  }
  if (pageType === '500') {
    pageName = '返回' + projetcName + '首页';
    path = '/datas/manage';
  }
  const clsString = classNames(styles.exception, className);
  return (
    <div className={clsString} {...rest}>
      <div>
        <div className={styles.imgBlock}>
          <div
            className={styles.imgEle}
            style={{ backgroundImage: `url(${img || config[pageType].img})` }}
          />
        </div>
        <div className={styles.content}>
          {/*<h1>{title || config[pageType].title}</h1>*/}
          <div className={styles.desc}>{desc || config[pageType].desc}</div>
          <div className={styles.actions}>
            {actions ||
              createElement(
                linkElement,
                {
                  to: path,
                  href: path,
                },
                <div className={styles.link}>{pageName}</div>,
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
