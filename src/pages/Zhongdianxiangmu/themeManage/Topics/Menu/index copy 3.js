// 完成投资 跟完成率还没字段 
import { useState, useEffect, Fragment } from 'react';
import styles from './style.less'
import { connect } from 'dva';
import CountUp from 'react-countup'
const dispatch = window.g_app._store.dispatch;
// import { Select } from 'antd';

const menuData = [
    {
        name: '大冶特钢特冶锻造三期项目', id: 1, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
    {
        name: '大冶有色铜冶炼清洁生产改造项目', id: 2, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
    {
        name: '新兴管业绿色智能制造产业园项目', id: 3, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
    {
        name: '华新(阳新)新材产业园项目', id: 4, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
    {
        name: '娲石水泥熟料生产线和机制砂项目', id: 5, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
    {
        name: '华鑫钢铁智能制造技改项目', id: 6, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
    {
        name: '宝钢黄石绿色精品板材项目(宝钢二期)', id: 7, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
    {
        name: '长城汽车科技产业园', id: 8, children: [
            { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
            { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
            { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
    },
]

const arr = [
    { name: '十大开工项目', id: 1, },
    { name: '十大续建项目', id: 2, },
    { name: '十大投资项目', id: 3, },
]

/**
 * 得到小数点后面的长度
 * @param {string} str 数据字符串  
 * @return {string} 处理后的结果
 */
const strConvertRrr = (str) =>
{
    if (str.includes('.'))
    {
        const newStr = str.split('.')[1].length
        return newStr
    } else
    {
        return ''
    }
}
// 分类函数
const abilitySort = (arr, property) =>
{
    let map = {};
    for (let i = 0; i < arr.length; i++)
    {
        const ai = arr[i];
        if (!map[ai[property]]) map[ai[property]] = [ai];
        else map[ai[property]].push(ai);
    }
    let res = [];
    Object.keys(map).forEach((key) =>
    {
        res.push({ [property]: key, data: map[key] });
    });
    return res;
}
const Index = ({ zhongdianxiangmuModel, ModalFun, modalData, menuNameHandler }) =>
{

    const [centerData, setCenterData] = useState(menuData)


    const [menuData1, setMenuData] = useState([])
    const [centerData1, setCenterData1] = useState([])
    const [active, setActive] = useState(0)

    console.log(active, 'menuData1menuData1menuData1');
    useEffect(() =>
    {
        // 重点项目左侧菜单
        dispatch({
            type: 'zhongdianxiangmuModel/getMenuTable',
            payload: {
                params: {
                    catalog: 'ce3382a0ae80407294b507a52a897cf4',
                    features: 'e72887753b2c49b1a3265f96a0e7a70e',
                    max_feature: 10000,
                    search_type: 2,
                }, callback: firstGetData
            }
        })
    }, [])
    // 首次获取数据
    const firstGetData = (data) =>
    {
        // 分类之后的数据
        const newData = abilitySort(data, 'f0004')
        setMenuData(newData)
        setCenterData1(newData[0]?.data)
    }
    const handleChange = (value) =>
    {
        console.log(`selected ${value}`);
    };
    // 菜单头部点击
    const titleHandler = (data) =>
    {
        console.log(data, 'resultresult');
        // 因为要接收每个重点项目接收的数据 暂模拟数据
        const record = {
            head: data?.f0002,
            name: data?.f0003,
            company: data?.f0008,
            timeStart: data?.f0009,
            timeEnd: data?.f0010,
            result: data?.f0011,
        }
        ModalFun({ ...record, type: 1 })
    }

    // 菜单内容点击
    const boxHandler = (data) =>
    {
        const record = {
            head: data?.f0002,
            name: data?.f0003,
            company: data?.f0008,
            result: data?.f0007,
            schedule: data?.f0013,
        }
        ModalFun({ ...record, ...data, type: 2 })
        console.log(data, 'data');
    }

    const tabClick = (dataObj, activeId) =>
    {
        console.log(dataObj, 'dsadasdataObj');
        setActive(activeId)
        setCenterData1(dataObj?.data)
        // 更改首页的标题Name
        menuNameHandler(dataObj?.f0004)
    }
    return (
        <div className={styles.menu}>
            {/* 头部 */}
            <div className={styles.head}>
                <span className={styles.title}>重点项目</span>
            </div>
            <div className={styles.ContentTop}>
                {
                    menuData1.map((data, index) =>
                    {
                        return (
                            <span onClick={() => tabClick(data, index)} key={index} className={active !== index ? styles.TopTitle : styles.CurrentTopTitle}>
                                {data.f0004}
                            </span>
                        )
                    })}
            </div>
            {/* 核心 */}
            <div className={styles.core}>
                <div className={styles.itemWarp} >
                    {centerData1.map((data, index) => (
                        <Fragment key={index}>
                            {/* 传递现有的数据 */}
                            <p onClick={() => { titleHandler(data) }} className={styles.title}>{index + 1} {data?.f0003}</p>
                            {active === 0 && (
                                <div className={styles.center}>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data.f0005 || ''} duration={2.75} delay={0} decimals={strConvertRrr(data?.f0005)} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>亿元</span>
                                        </span>
                                        <span style={{ color: '#BBD9FB' }}>总投资</span>
                                    </div>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data?.f0006 || ''} duration={2.75} delay={0} decimals={strConvertRrr(data?.f0006)} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>{data?.f0007 && '亿元'}</span>
                                        </span>
                                        <span style={{ color: '#B8E986' }}>完成投资</span>
                                    </div>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data?.f0007 || ''} duration={2.75} decimals={strConvertRrr(data?.f0007)} delay={0} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>{data?.f0007 && '%'}</span>
                                        </span>
                                        <span style={{ color: '#FFF687' }}>完成率</span>
                                    </div>
                                </div>
                            )}
                            {active === 1 && (
                                <div className={styles.center}>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data.f0005 || ''} duration={2.75} delay={0} decimals={strConvertRrr(data?.f0005)} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>亿元</span>
                                        </span>
                                        <span style={{ color: '#BBD9FB' }}>总投资</span>
                                    </div>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data?.f0006 || ''} duration={2.75} delay={0} decimals={strConvertRrr(data?.f0006)} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>{data?.f0007 && '亿元'}</span>
                                        </span>
                                        <span style={{ color: '#B8E986' }}>完成投资</span>
                                    </div>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data?.f0007 || ''} duration={2.75} decimals={strConvertRrr(data?.f0007)} delay={0} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>{data?.f0007 && '%'}</span>
                                        </span>
                                        <span style={{ color: '#FFF687' }}>完成率</span>
                                    </div>
                                </div>
                            )}
                            {active === 2 && (
                                <div className={styles.center}>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data.f0005 || ''} duration={2.75} delay={0} decimals={strConvertRrr(data?.f0005)} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>亿元</span>
                                        </span>
                                        <span style={{ color: '#BBD9FB' }}>总投资</span>
                                    </div>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data?.f0006 || ''} duration={2.75} delay={0} decimals={strConvertRrr(data?.f0006)} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>{data?.f0007 && '亿元'}</span>
                                        </span>
                                        <span style={{ color: '#B8E986' }}>完成投资</span>
                                    </div>
                                    <div onClick={() => { boxHandler(data) }} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={data?.f0007 || ''} duration={2.75} decimals={strConvertRrr(data?.f0007)} delay={0} suffix=""
                                                separator=",">
                                                {({ countUpRef, reset, start }) => (
                                                    <span className={styles.item_num} ref={countUpRef}>
                                                        {setInterval(() =>
                                                        {
                                                            reset();
                                                            start();
                                                        }, 10000)}
                                                    </span>
                                                )}
                                            </CountUp> <span className={styles.unit}>{data?.f0007 && '%'}</span>
                                        </span>
                                        <span style={{ color: '#FFF687' }}>完成率</span>
                                    </div>
                                </div>
                            )}


                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = ({ zhongdianxiangmuModel }) =>
{
    return {
        zhongdianxiangmuModel: zhongdianxiangmuModel
    };
}
export default connect(mapStateToProps)(Index)