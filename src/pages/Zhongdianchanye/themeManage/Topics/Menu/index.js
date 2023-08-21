import { useState, useEffect, useRef, Fragment, memo } from 'react';
import styles from './style.less'
import CountUp from 'react-countup'
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
const Index = ({ menuHandler, industrialHandler }) =>
{

    // 菜单高亮
    const [menu, setMenu] = useState([])

    const menuWarpRef = useRef(),
        scrollContainerRef = useRef()

    useEffect(() =>
    {
        // InitialScroll()
    }, [])

    const InitialScroll = () =>
    {
        let startingTime = 30
        let initScroll = menuWarpRef.current
        let scrollContainer = scrollContainerRef.current

        // copyNode.innerHTML = initScroll.innerHTML;
        timer = setInterval(() =>
        {

            if (initScroll.scrollTop >= scrollContainer?.scrollHeight)
            {
                initScroll.scrollTop = 0

            } else
            {
                initScroll.scrollTop++
            }

        }, startingTime)
    }



    useEffect(() =>
    {
        dispatch({
            type: 'zhongdianchanyeModel/getMenuTable',
            payload: {
                params: {
                    catalog: 'ce3382a0ae80407294b507a52a897cf4',
                    features: 'b73de1fb1ac14cf690d86441afccb2f3',
                    max_feature: 10000,
                    search_type: 2,
                }, callback: firstGetData
            }
        })
    }, [])
    // 首次请求重点产业-主导产业的数据
    const firstGetData = (dataArr) =>
    {
        // 更改菜单的数据
        setMenu(dataArr)
        // 获取首页菜单的名称
        // industrialHandler(dataArr[0].f0000)
    }

    // ! 点击控制底部表格展示内容 以及地图园区点位 企业热力图
    const menuClick = (data) =>
    {
        // 虚拟的 做个切换效果
        let REQUEST_url1 = "http://58.19.254.210:7000/hubble/common/v1/search?catalog=a6f5bb45afb84ee2a54188053412662e&features=bc620ebbdf46434b90af373e8bf23c30&max_feature=10000&search_type=1"  // github 电影数据接口
        let REQUEST_ur2 = "http://58.19.254.210:7000/hubble/common/v1/search?catalog=a6f5bb45afb84ee2a54188053412662e&features=f187434eea12494590fa655c64200896&max_feature=10000&search_type=1"



        console.log(data, 'dsadwadaczxd');

        industrialHandler(data.f0000)

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
    return (
        <Fragment>
            {/* 左侧菜单 */}
            <div ref={menuWarpRef} className={styles.menu}>
                <div ref={scrollContainerRef} className={styles.itemWarp} >
                    {menu.map((data, index) => (
                        <Fragment key={index}>
                            {/* 传递现有的数据 */}
                            <div className={styles.head}>
                                <p className={styles.title}>{index + 1} {data?.f0000}</p>
                            </div>

                            <div className={styles.center}>
                                <div onClick={() => { menuClick(data) }} className={styles.box}>
                                    <span className={styles.value}>
                                        <CountUp start={0} end={data?.f0002} decimals={strConvertRrr(data?.f0002)} duration={2.75} delay={0} suffix=""
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
                                        </CountUp> <span className={styles.unit}>{'亿元'}</span>
                                    </span>
                                    <span style={{ color: '#BBD9FB' }}>去年同期</span>
                                </div>
                                <div onClick={() => { menuClick(data) }} className={styles.box}>
                                    <span className={styles.value}>
                                        <CountUp start={0} end={data?.f0001} decimals={strConvertRrr(data?.f0001)} duration={2.75} delay={0} suffix=""
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
                                        </CountUp> <span className={styles.unit}>{'亿元'}</span>
                                    </span>
                                    <span style={{ color: '#B8E986' }}>产值</span>
                                </div>
                                <div onClick={() => { menuClick(data) }} className={styles.box}>
                                    <span className={styles.value}>
                                        <CountUp start={0} end={data?.f0003} decimals={strConvertRrr(data?.f0003)} duration={2.75} delay={0} suffix=""
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
                                        </CountUp> <span className={styles.unit}>{'%'}</span>
                                    </span>
                                    <span style={{ color: '#FFF687' }}>同比</span>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};
export default memo(Index)