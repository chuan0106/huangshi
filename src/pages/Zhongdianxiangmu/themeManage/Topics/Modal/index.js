import styles from './style.less'

const index = ({ data, ModalFun }) =>
{
    const ModalClick = (e) =>
    {
        ModalFun({ type: 0 })
        e.stopPropagation();
    }

    const scheduling = () =>
    {
        const { name, company, result, schedule, type } = data;
        return (
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                <div className={styles.close}><img onClick={ModalClick} src={'https://img2.baidu.com/it/u=666935882,58434125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'} alt="" /></div>
                <div className={styles.cardHead}>
                    <div className={styles.cardHeadWrapper}>
                        {/* <div className={styles.cardHeadTitle}><p>{record?.f0009}</p></div> */}
                        <div className={styles.cardHeadTitle}><p>{name}</p></div>
                    </div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>项目名称</p></div>
                        <div className={styles.value}><p>{name}</p></div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>责任单位</p></div>
                        <div className={styles.value}><p>{company}</p></div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>完成率</p></div>
                        <div className={styles.value}>{parseInt(result)}%</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>计划安排</p></div>
                        <div className={styles.value}>{schedule}</div>
                    </div>
                </div>
            </div>
        )
    }
    const specific = () =>
    {
        const { head, name, company, timeStart, timeEnd, value, result, schedule } = data
        return (
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                <div className={styles.close}><img onClick={ModalClick} src={'https://img2.baidu.com/it/u=666935882,58434125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'} alt="" /></div>
                <div className={styles.cardHead}>
                    <div className={styles.cardHeadWrapper}>
                        {/* <div className={styles.cardHeadTitle}><p>{record?.f0009}</p></div> */}
                        {console.log(head.length, 'dsalkjdsaiocxzs')}
                        <div className={styles.cardHeadTitle}><p style={{ fontSize: head.length >= 18 ? '22px' : '26px' }}>{head}</p></div>
                    </div>
                </div>
                <div className={styles.cardCore}>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>项目名称</p></div>
                        <div className={styles.value}>{name}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>开工时间</p></div>
                        <div className={styles.value}>{timeStart}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>计划竣工</p></div>
                        <div className={styles.value}>{timeEnd}</div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>建设内容</p></div>
                        <div className={styles.value}>{value}</div>
                    </div>

                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>完成率</p></div>
                        <div className={styles.value}><p>{result}%</p></div>
                    </div>
                    <div className={styles.itemList}>
                        <div className={styles.designation}><p>计划安排</p></div>
                        <div className={styles.value}><p>{schedule}</p></div>
                    </div>
                </div>
            </div>
        )
    }
    const { type } = data
    return (
        <div onClick={ModalClick} className={styles.container}>
            <div onClick={e => { e.stopPropagation() }} className={`${styles.core} ${type !== 0 ? styles.fadeIn : null}`} >
                {type === 1 && specific()}
                {type === 2 && scheduling()}
            </div>
        </div>
    );
};
export default index
