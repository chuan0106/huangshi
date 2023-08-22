import styles from './style.less'
import close from '@/assets/huangshi/common/close.png'
const index = ({ data, ModalFun }) =>
{
    const ModalClick = (e) =>
    {
        ModalFun({ type: 0 })
        e.stopPropagation();
    }

    const specific = () =>
    {
        const { name, num, value } = data
        return (
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                <div className={styles.close}><img onClick={ModalClick} src={'https://img2.baidu.com/it/u=666935882,58434125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'} alt="" /></div>
                <div className={styles.cardHead}>
                    <div className={styles.headTitle}>
                        详情
                    </div>
                    <div className={styles.fade} ></div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>企业名称： </p></div>
                        <div className={styles.value}><p>{name}</p></div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>企业数量： </p></div>
                        <div className={styles.value}><p>{num}</p></div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>园区介绍： </p></div>
                        <div className={styles.value}>{value}</div>
                    </div>

                </div>
            </div>
        )
    }
    const { type } = data


    const { name, num, value } = data
    return (
        <div className={styles.modal}>
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                {/* 头部 */}
                <div className={styles.cardHead}>
                    <div className={styles.headTitle}>
                        <span>产业详情</span>
                        <div className={styles.fade} ></div>
                    </div>
                    <div onClick={ModalClick} className={styles.close}> <img src={close} alt="" /></div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>企业名称:</div>
                        <div className={styles.value}>{name}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>企业数量：</div>
                        <div className={styles.value}>{num}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>园区介绍：</div>
                        <div className={styles.value}>{value}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index
