import styles from './style.less'
import titleBg from '@/assets/huangshi/zhongdianxiangmu/biaogetitle.png'
const index = ({ data, ModalFun }) => {
    const ModalClick = (e) => {
        ModalFun({ type: 0 })
        e.stopPropagation();
    }

    const scheduling = () => {
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
    const specific = () => {
        const { f0002, f0014, f0011, f0009, f0010, f0005, f0007, schedule } = data;
        console.log(data, 'ssssssssssssss');
        return (
            <div className={styles.cardWarp} style={{ width: '100%', height: '100%' }}>
                {/* <img src={'http://58.19.254.210:7000/dataeye/v1/data/image/get?imageid=63f477a3b5b1ce707071cbef'}
                    alt='titleBg' style={{ width: "100%" }} /> */}
                <div className={styles.titleBox}>项目信息</div>
                <div className={styles.compDetails}>
                    <div className={styles.compSon}>项目名称:<span style={{ marginLeft: '10px' }}>{f0002}</span></div>
                    <div className={styles.compSon}>项目建设地址:<span style={{ marginLeft: '10px' }}>{f0014}</span></div>
                    <div className={styles.compSon}>主要建设内容:<span style={{ marginLeft: '10px' }}>{f0011}</span></div>
                    <div className={styles.compSon}>开工时间:<span style={{ marginLeft: '10px' }}>{f0009}</span></div>
                    <div className={styles.compSon}>计划竣工时间:<span style={{ marginLeft: '10px' }}>{f0010}</span></div>
                    <div className={styles.compSon}>项目总投资:<span style={{ marginLeft: '10px' }}>{f0005}</span></div>
                    <div className={styles.compSon}>2023年计划投资及完成进度:</div>
                    <div className={styles.compSon}>项目进展情况:<span style={{ marginLeft: '10px' }}>{f0007}%</span></div>
                </div>
                {/* <div className={styles.close}><img onClick={ModalClick} src={'https://img2.baidu.com/it/u=666935882,58434125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'} alt="" /></div>
                <div className={styles.cardHead}>
                    <div className={styles.cardHeadWrapper}>
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
                </div> */}
            </div>
        )
    }
    const { type } = data
    return (
        <div onClick={e => { e.stopPropagation() }} className={`${styles.core} ${type !== 0 ? styles.fadeIn : null}`} >
            {type === 1 && specific()}
            {type === 2 && scheduling()}
        </div>
    );
};
export default index
