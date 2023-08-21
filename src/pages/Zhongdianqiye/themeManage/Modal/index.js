/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-03-15 20:28:35
 * @LastEditors: yuchang
 * @LastEditTime: 2023-07-18 18:47:33
 * @Description: 
 */
import { Fragment } from 'react';
import styles from './style.less'
import close from '@/assets/huangshi/common/close.png'
const index = ({ data, ModalFun }) => {
    const ModalClick = (e) => {
        ModalFun({ type: 0 })
        e.stopPropagation();
    }
    const specific = () => {
        const { name, history, value, code, center } = data
        return (
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                <div className={styles.close}><img onClick={ModalClick} src={'https://img2.baidu.com/it/u=666935882,58434125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'} alt="" /></div>
                <div className={styles.cardHead}>
                    <div className={styles.headTitle}>
                        企业概览
                    </div>
                    <div className={styles.fade} ></div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>企业名称： </p></div>
                        <div className={styles.value}><p>{name}</p></div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>2022年产值： </p></div>
                        <div className={styles.value}><p>{history}万元</p></div>
                    </div>
                    {/* <div className={styles.itemList}>
                        <div className={styles.designation}><p>企业类型： </p></div>
                        <div className={styles.value}>{value}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>统一社会信用代码： </p></div>
                        <div className={styles.value}>{code}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>经营范围： </p></div>
                        <div className={styles.value}>{center}</div>
                    </div> */}

                </div>
            </div>
        )
    }
    const { type } = data
    // return (
    //     <div onClick={ModalClick} className={styles.container}>
    //         <div onClick={e => { e.stopPropagation() }} className={`${styles.core} ${type !== 0 ? styles.fadeIn : null}`} >
    //             {type === 1 && specific()}
    //         </div>
    //     </div>
    // );
    const { name, history, value, code, center } = data
    return (
        <div className={styles.modal}>
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                {/* 头部 */}
                <div className={styles.cardHead}>
                    <div className={styles.headTitle}>
                        <span>企业概览</span>
                        <div className={styles.fade} ></div>
                    </div>
                    <div onClick={ModalClick} className={styles.close}> <img src={close} alt="" /></div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>企业名称： </p></div>
                        <div className={styles.value}><p>{name}</p></div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>2022年产值： </p></div>
                        <div className={styles.value}><p>{history}万元</p></div>
                    </div>
                    {/* <div className={styles.itemList}>
                        <div className={styles.designation}>企业类型： </div>
                        <div className={styles.value}>{value}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>信用代码：</div>
                        <div className={styles.value}>{code}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>经营范围：</p></div>
                        <div className={styles.value}>{center}</div>
                    </div> */}

                </div>
            </div>
        </div>
    );

};
export default index
