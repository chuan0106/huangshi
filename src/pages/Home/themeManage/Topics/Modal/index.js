import { useState } from 'react';
import styles from './style.less'
import close from '@/assets/huangshi/common/close.png'
const index = ({ modalData, modalHandler }) =>
{
    const { name, number } = modalData
    // console.log(name, number, '23213141412321321');
    const ModalClick = () =>
    {
        modalHandler(null)
    }
    return (
        <div className={styles.modal}>
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                {/* 头部 */}
                <div className={styles.cardHead}>
                    <div className={styles.headTitle}>
                        <span>详情概览</span>
                        <div className={styles.fade} ></div>
                    </div>
                    <div onClick={ModalClick} className={styles.close}> <img src={close} alt="" /></div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>县市区: </p></div>
                        <div className={styles.value}>{name}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>同期(亿元):</div>
                        <div className={styles.value}>{number}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>占全市比:</div>
                        <div className={styles.value}>8.53</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>同比: </div>
                        <div className={styles.value}>46.8</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>排名:</div>
                        <div className={styles.value}>2</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index