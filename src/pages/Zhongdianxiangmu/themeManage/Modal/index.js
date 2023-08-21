import styles from './style.less'
import close from '@/assets/huangshi/common/close.png'
const index = ({ data, ModalFun }) =>
{
    const ModalClick = (e) =>
    {
        ModalFun(null)
        e.stopPropagation();
    }

    const { name, place, company, time, plan, completed } = data;
    return (
        <div className={styles.modal}>
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                {/* 头部 */}
                <div className={styles.cardHead}>
                    <div className={styles.headTitle}>
                        <span>项目概览</span>
                        <div className={styles.fade} ></div>
                    </div>
                    <div onClick={ModalClick} className={styles.close}> <img src={close} alt="" /></div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>项目名称：</div>
                        <div className={styles.value}>{name}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>建设地点：</div>
                        <div className={styles.value}>{place}</div>
                    </div>
                    {/* <div className={styles.itemList}>
                        <div className={styles.designation}>责任单位： </div>
                        <div className={styles.value}>{company}</div>
                    </div> */}
                    <div className={styles.itemList}>
                        <div className={styles.designation}>开工时间：</div>
                        <div className={styles.value}>{time}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>计划安排：</div>
                        <div className={styles.value}>{plan}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}>竣工时间：</div>
                        <div className={styles.value}>{completed}</div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default index
