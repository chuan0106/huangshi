import { useState, useEffect, Fragment } from 'react';
import styles from './style.less'
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;
// import { Select } from 'antd';
import CountUp from 'react-countup'
// import dd from '../Components/'
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
const index = ({ zhongdianxiangmuModel, ModalFun }) =>
{
    const [active, setActive] = useState(arr[0])
    const [centerData, setCenterData] = useState(menuData)


    const [menuData1, setMenuData] = useState([])
    const [centerData1, setCenterData1] = useState(null)
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
        setCenterData1(newData[0])
    }
    const handleChange = (value) =>
    {
        console.log(`selected ${value}`);
    };
    // 菜单头部点击
    const titleHandler = (data) =>
    {
        // 因为要接收每个重点项目接收的数据 暂模拟数据
        const record = {
            name: '新兴管业绿色主色产业',
            company: '新兴管业绿色主色产业有限公司新港分公司',
            timeStart: '2021年4月1日',
            timeEnd: '2023年4月1日',
            result: '铸管生产线系统建设 铸造高绿 铸造烧结系统建设 铸件生产建设 铸管生产线系统建设 铸造高绿 铸造烧结系统建设 铸件生产建设',
        }

        ModalFun({ ...record, ...data, type: 1 })
    }
    console.log(centerData1, zhongdianxiangmuModel, 'zhongdianxiangmuModelzhongdianxiangmuModel', menuData1[0]);

    // 菜单内容点击
    const boxHandler = (data) =>
    {
        // 因为要接收每个重点项目接收的数据 暂模拟数据
        const record = {
            name: '新兴管业绿色主色产业',
            company: '新兴管业绿色主色产业有限公司新港分公司',
            result: '2021年4月1日',
            schedule: '3月底前完成配套辅助设备建设 4月完成验收后投入使用',
        }
        ModalFun({ ...record, ...data, type: 2 })
    }

    const tabClick = (data) =>
    {
        const newData = [
            {
                name: '大冶特钢特冶锻造三期项目', id: 1, children: [
                    { name: '总投资', value: 18.4, color: '#BBD9FB', unit: '万元' },
                    { name: '完成投资', value: 9, color: '#B8E986', unit: '万元' },
                    { name: '完成率', value: 78, color: '#FFF687', unit: '%' }]
            },
            {
                name: '大冶有色铜冶炼清洁生产改造项目', id: 2, children: [
                    { name: '总投资', value: 8.4, color: '#BBD9FB', unit: '万元' },
                    { name: '完成投资', value: 29, color: '#B8E986', unit: '万元' },
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
        setCenterData(newData)
        setActive(data)
    }
    return (
        <div className={styles.menu}>
            {/* 头部 */}
            <div className={styles.head}>
                <span className={styles.title}>全部重点项目</span>
                {/* <div className={styles.select} id='menuBox1'>
                    <Select
                        getPopupContainer={() => { return window.document.getElementById("menuBox1") }}
                        defaultValue="2023年"
                        style={{ width: 80, height: 30 }}
                        onChange={handleChange}
                        options={[
                            { value: '2023年', label: '2023年' },
                            { value: '2022年', label: '2022年' },
                            { value: '2021年', label: '2021年' },
                            { value: '2020年', label: '2020年' },
                            { value: '2019年', label: '2019年' },
                        ]}
                    />
                </div> */}
            </div>
            <div className={styles.ContentTop}>
                {
                    menuData1.map((data, index) =>
                    {
                        return (
                            <span onClick={() => tabClick(data)} key={index} className={active !== data ? styles.TopTitle : styles.CurrentTopTitle}>
                                {data.f0004}
                            </span>
                        )
                    })
                }
            </div>
            {/* 核心 */}
            <div className={styles.core}>
                <div className={styles.itemWarp} >
                    {centerData.map((data, index) => (
                        <Fragment key={index}>
                            {/* 传递现有的数据 */}
                            <p onClick={() => { titleHandler(data) }} className={styles.title}>{index + 1} {data?.name}</p>
                            <div className={styles.center}>
                                {data?.children?.map((item, i) => (
                                    <div onClick={() => { boxHandler(item) }} key={i} className={styles.box}>
                                        <span className={styles.value}>
                                            <CountUp start={0} end={item.value} duration={2.75} delay={0} suffix=""
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
                                            </CountUp> <span className={styles.unit}>{item.unit}</span>
                                        </span>
                                        <span style={{ color: item.color }}>{item.name}</span>
                                    </div>
                                ))}

                            </div>
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
export default connect(mapStateToProps)(index)