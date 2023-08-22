import { useState, useEffect, useRef, Fragment, memo } from 'react';
import styles from './style.less'
import CountUp from 'react-countup';
import { jdzdcy, cyqy } from '../params';
import ChartsBox from '../../../../../components/ChartsBox';

const dispatch = window.g_app._store.dispatch;
const menuData = [
    {
        name: '大冶市兴红矿业有限公司', id: 1, children: [
            { name: '企业数量', value: 3331, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 8156, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 3132, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '大冶市金成矿业有限责任公司', id: 2, children: [
            { name: '企业数量', value: 4890, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 9135, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 4365, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '武钢资源集团金山店矿业有限公司', id: 3, children: [
            { name: '企业数量', value: 1188, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 7465, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 1623, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '华新(阳新)大冶市陈贵大广山矿业有限公司', id: 4, children: [
            { name: '企业数量', value: 2021, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 5528, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 4675, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '黄石市陈贵铜山口矿业股份有限公司', id: 5, children: [
            { name: '企业数量', value: 1497, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 8338, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 1056, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '湖北永志矿建工程有限责任公司', id: 6, children: [
            { name: '企业数量', value: 3331, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 8156, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 3132, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '武钢资源集团大冶铁矿有限公司', id: 7, children: [
            { name: '企业数量', value: 4890, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 9135, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 4365, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '黄石市鑫溢新材料科技有限公司', id: 8, children: [
            { name: '企业数量', value: 1188, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 7465, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 1623, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '阳新县银山矿产品加工有限公司', id: 9, children: [
            { name: '企业数量', value: 2021, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 5528, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 4675, color: '#FFF687', unit: '千万元' }]
    },
    {
        name: '阳新县兴达矿业有限公司', id: 10, children: [
            { name: '企业数量', value: 1497, color: '#BBD9FB', unit: '家' },
            { name: '产值', value: 8338, color: '#B8E986', unit: '千万元' },
            { name: '增加值', value: 1056, color: '#FFF687', unit: '千万元' }]
    }
]
let timer;

/**
 * 得到小数点后面的长度
 * @param {string} str 数据字符串  
 * @return {string} 处理后的结果
 */
const strConvertRrr = (str) => {
    if (str.includes('.')) {
        const newStr = str.split('.')[1].length
        return newStr
    } else {
        return ''
    }
}
const Index = ({ menuHandler, industrialHandler, area, industrialName }) => {

    // 菜单高亮
    const [menu, setMenu] = useState([])
    const [option, setOption] = useState(null);
    const [option2, setOption2] = useState(null);
    const [count, setCount] = useState(1)
    const menuWarpRef = useRef(),
        scrollContainerRef = useRef()

    useEffect(() => {
        // InitialScroll()
    }, [])

    const InitialScroll = () => {
        let startingTime = 30
        let initScroll = menuWarpRef.current
        let scrollContainer = scrollContainerRef.current

        // copyNode.innerHTML = initScroll.innerHTML;
        timer = setInterval(() => {

            if (initScroll.scrollTop >= scrollContainer?.scrollHeight) {
                initScroll.scrollTop = 0

            } else {
                initScroll.scrollTop++
            }

        }, startingTime)
    }



    useEffect(() => {
        const newCyData = {
            ...jdzdcy, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0005",
                        "index": 5,
                        "alias": "qy",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0005",
                        "operator": 14,
                        "value": "黄石市"
                    }
                ]
            }
        }
        dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newCyData,
                callback: firstGetData
            }
        })
    }, [])
    useEffect(() => {
        const newCyData = {
            ...jdzdcy, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0005",
                        "index": 5,
                        "alias": "qy",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0005",
                        "operator": 14,
                        "value": area
                    }
                ]
            }
        }
        dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newCyData,
                callback: firstGetData
            }
        })

    }, [area])
    // 首次请求重点产业-主导产业的数据
    const firstGetData = (dataArr) => {
        // 更改菜单的数据
        console.log(dataArr, 'dataArrdataArr');
        setMenu(dataArr)
        setOption2(
            {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    right: 'right',
                    top: 'center',
                    align: 'right',
                    textStyle: {
                        color: 'white' // 可自定义文本颜色
                    },
                },
                series: [
                    {
                        name: '产值',
                        type: 'pie',
                        radius: '70%',
                        center: ['40%', '50%'],
                        data: dataArr?.map((elem) => {
                            return ({ value: elem.f0002, name: elem.f0001 })
                        }),
                        label: {
                            color: '#fff',
                            formatter: '{d}%'
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        )
        setOption(null)
        setCount(count + 1)
        // 获取首页菜单的名称
        // industrialHandler(dataArr[0].f0000)
    }

    // ! 点击控制底部表格展示内容 以及地图园区点位 企业热力图
    const menuClick = (data) => {
        // 虚拟的 做个切换效果
        let REQUEST_url1 = "http://58.19.254.210:7000/hubble/common/v1/search?catalog=a6f5bb45afb84ee2a54188053412662e&features=bc620ebbdf46434b90af373e8bf23c30&max_feature=10000&search_type=1"  // github 电影数据接口
        let REQUEST_ur2 = "http://58.19.254.210:7000/hubble/common/v1/search?catalog=a6f5bb45afb84ee2a54188053412662e&features=f187434eea12494590fa655c64200896&max_feature=10000&search_type=1"


        console.log(area, 'areaarea')

        console.log(data, 'dsadwadaczxd');

        industrialHandler(data.f0001)
        const newCyData = {
            ...cyqy, where: {
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0002",
                        "index": 2,
                        "alias": "cy",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0002",
                        "operator": 14,
                        "value": data?.f0001
                    }
                ]
            }
        }
        dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newCyData,
                callback: getCyData
            }
        })

        const randomBoolean = () => Math.random() >= 0.5;

        // fetch(randomBoolean() ? REQUEST_url1 : REQUEST_ur2)
        //     .then((response) => response.json())
        //     .then((responseJson) =>
        //     {
        //         menuHandler(responseJson?.data)
        //     }, error =>
        //     {
        //         console.warn(error);
        //     })
        // menuHandler([])
    }
    const getCyData = (data) => {
        setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                top: 'center',
                align: 'right',
                textStyle: {
                    color: 'white' // 可自定义文本颜色
                },
            },
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: '70%',
                    center: ['40%', '50%'],
                    data: data?.map((elem) => {
                        return ({ value: elem.f0004, name: elem.f0003 })
                    }),
                    label: {
                        color: '#fff',
                        formatter: '{c}'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
        setCount(count + 1)

    }
    return (
        <Fragment>
            {/* 左侧菜单 */}
            <div ref={menuWarpRef} className={styles.menu}>
                <div ref={scrollContainerRef} className={styles.itemWarp} >
                    {menu.map((data, index) => (
                        <Fragment key={index}>
                            {/* 传递现有的数据 */}


                            <div className={styles.center}>
                                <div onClick={() => { menuClick(data) }} className={styles.box2}>
                                    <div className={styles.head}>
                                        <p className={styles.title}>{index + 1} {data?.f0001}</p>
                                    </div>
                                    {/* <span className={styles.value}>
                                        <CountUp start={0} end={data?.f0002} decimals={strConvertRrr(data?.f0002)} duration={2.75} delay={0} suffix=""
                                            separator=",">
                                            {({ countUpRef, reset, start }) => (
                                                <span className={styles.item_num} ref={countUpRef}>
                                                    {setInterval(() => {
                                                        reset();
                                                        start();
                                                    }, 10000)}
                                                </span>
                                            )}
                                        </CountUp> <span className={styles.unit}>{'亿元'}</span>
                                    </span>
                                    <span style={{ color: 'rgba(0,0,0,0)' }}>去年同期</span> */}
                                </div>
                                <div onClick={() => { menuClick(data) }} className={styles.box}>
                                    <span className={styles.value}>
                                        <CountUp start={0} end={Number(data?.f0002)?.toFixed(2)} decimals={strConvertRrr(Number(data?.f0002)?.toFixed(2))} duration={2.75} delay={0} suffix=""
                                            separator=",">
                                            {/* {({ countUpRef, reset, start }) => (
                                                <span className={styles.item_num} ref={countUpRef}>
                                                    {setInterval(() => {
                                                        reset();
                                                        start();
                                                    }, 10000)}
                                                </span>
                                            )} */}
                                        </CountUp> <span className={styles.unit}>{'亿元'}</span>
                                    </span>
                                    <span style={{ color: '#B8E986' }}>产值</span>
                                </div>
                                <div onClick={() => { menuClick(data) }} className={styles.box}>
                                    <span className={styles.value}>
                                        <CountUp start={0} end={Number(data?.f0003)?.toFixed(1)} decimals={strConvertRrr(Number(data?.f0003)?.toFixed(1))} duration={2.75} delay={0} suffix=""
                                            separator=",">
                                            {/* {({ countUpRef, reset, start }) => (
                                                <span className={styles.item_num} ref={countUpRef}>
                                                    {setInterval(() => {
                                                        reset();
                                                        start();
                                                    }, 10000)}
                                                </span>
                                            )} */}
                                        </CountUp> <span className={styles.unit}>{'%'}</span>
                                    </span>
                                    <span style={{ color: '#FFF687' }}>同比</span>
                                </div>
                                <div onClick={() => { menuClick(data) }} className={styles.box}>
                                    <span className={styles.value}>
                                        <CountUp start={0} end={parseFloat(data?.f0004)?.toFixed(1)} decimals={strConvertRrr(parseFloat(data?.f0004)?.toFixed(1))} duration={2.75} delay={0} suffix=""
                                            separator=",">
                                            {/* {({ countUpRef, reset, start }) => (
                                                <span className={styles.item_num} ref={countUpRef}>
                                                    {setInterval(() => {
                                                        reset();
                                                        start();
                                                    }, 10000)}
                                                </span>
                                            )} */}
                                        </CountUp> <span className={styles.unit}>{'%'}</span>
                                    </span>
                                    <span style={{ color: 'rgba(221,162,126,1)' }}>全市占比</span>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>

            </div>
            <div className={styles.cyTiltle}>{area === '黄石市' ? '九大主导产业' : '主导产业'}</div>
            {/* <div className={styles.cyTiltle2} >{industrialName === '全部' ? '' : industrialName}产业产值比重</div> */}
            <div className={styles.charts} key={industrialName + area + count} >
                {
                    option && area === '黄石市' ? <ChartsBox option={option} /> : option2 ? <ChartsBox option={option2} /> : null
                }
            </div>
        </Fragment>
    );
};
export default memo(Index)