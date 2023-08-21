import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react'
import styles from './style.less'
import { Select } from 'antd'
import params from './params.json'
import close from '@/assets/huangshi/quanjugailan/cllose1.png'
const dispatch = window.g_app._store.dispatch;
const year = [
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
]
const lineData = {
    dangyue: [
        1200, 1300, 1400, 1500, 1600, 1700, 1800
    ],
    accumulate: [
        1600, 1500, 1400, 1300, 1200, 100, 1800
    ],

    dangyuevalue: [20, 22, 33, 45, 63, 10, 20, 34, 23, 65, 12, 62],
    accumulatevalue: [30, 22, 33, 45, 63, 10, 20, 234, 23, 65, 12, 62]
}
const lineX = ['2019', '2020', '2021', '2022', '2023']
const Index = ({ yearAndMonth }) =>
{
    const [lineData1, setLineData1] = useState({
        dimension: [],
        metric: [],
        metric_meta: []
    })

    console.log(lineData1, 'lineData1lineData1lineData1dsa');
    const [chartData, setChartData] = useState(lineData)
    const [x, setX] = useState(lineX)
    console.log(chartData, 'chartDatachartData');
    // 默认先拿到第一个年份
    const [yearSelect, setYearSelect] = useState(year[0].value)

    const [isShow, setIsShow] = useState(false)


    const getData = (data) =>
    {
        const { dimension, metric, metric_meta } = data

        const newMetric_meta = metric_meta.sort((a, b) => a.index - b.index).map(item => item.alias)
        const newCharts = {
            dimension: dimension[0],
            metric,
            metric_meta: newMetric_meta

        }
        setLineData1(newCharts)
    }

    useEffect(() =>
    {
        const { year, month, type } = yearAndMonth
        // 筛选功能
        const newParams = {
            ...params, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0000",
                        "index": 0,
                        "alias": "nd",
                        "anotherName": null,
                        "key": "f0000",
                        "operator": 14,
                        "value": year
                    },
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0001",
                        "index": 1,
                        "alias": "yd",
                        "anotherName": null,
                        "key": "f0001",
                        "operator": 14,
                        "value": `${month}`
                    },
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0008",
                        "index": 8,
                        "alias": "lb",
                        "anotherName": null,
                        "key": "f0008",
                        "operator": 14,
                        "value": `${type}`
                    },
                    {
                        alias: "xz",
                        anotherName: null,
                        des: null,
                        index: 2,
                        key: "f0002",
                        name: "f0002",
                        operator: 2,
                        unit: null,
                        value: "1"
                    }

                ]
            }
        }
        dispatch({
            type: 'homeModel/getguishanggongyezongchanzhijizengsu',
            payload: {
                params: newParams,
                callback: getData
            }
        })

    }, [yearAndMonth])
    useEffect(() =>
    {
        let myChart = echarts.init(reset.current);
        let option;
        option = {
            animation: true,  //控制动画示否开启
            // animationDuration: 5000, // 动画的时长，它是以毫秒为单位
            // animationDuration: (arg) =>
            // {
            //     console.log(arg);
            //     return 1000 * arg
            // },
            animationEasing: 'bounceOut', //缓动动画
            animationThreshold: 8,//动画元素的阈值
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        // 线的样式
                        color: '#999'
                    }
                },
                textStyle: {
                    // 弹窗字体颜色
                    color: '#fff'
                },
                backgroundColor: 'rgba(50, 50, 50,.7)',
                borderWidth: 0
                // shadowColor: 'red',
            },

            toolbox: {
                feature: {
                    dataView: { show: false, readOnly: false },
                    magicType: { show: false, type: ['line', 'bar'] },
                    restore: { show: false },
                    saveAsImage: { show: false }
                }
            },
            legend: {
                data: lineData1.metric_meta,
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: '#fff'
                },
                top: 10
            },
            xAxis: [
                {
                    type: 'category',
                    data: lineData1.dimension,
                    axisPointer: {
                        type: 'shadow',
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: '14px'
                        }
                    }
                }
            ],

            yAxis: [
                {
                    type: 'value',
                    name: '亿元',
                    color: '#fff',

                    position: 'left',
                    nameTextStyle: {
                        color: '#fff',
                        align: 'center',
                    },
                    splitLine: { show: false },
                    alignTicks: true,
                    min: 0,
                    max: 3000,
                    interval: 600,
                    axisLabel: {
                        formatter: '{value} ml'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        }
                    }

                },

                {
                    type: 'value',
                    name: '%',
                    splitLine: { show: false },
                    nameTextStyle: {
                        color: '#fff',
                        align: 'center',
                    },

                    min: 0,
                    // max: 35,
                    // interval: 5,
                    axisLabel: {
                        show: true,
                        formatter: '{value}',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }

                },

            ],
            series: [
                {
                    name: lineData1.metric_meta[0],
                    type: 'bar',
                    color: '#2573CE',
                    tooltip: {
                        valueFormatter: function (value)
                        {
                            return value
                        }
                    },
                    data: lineData1.metric[0],
                    barWidth: '20%'
                },
                {
                    name: lineData1.metric_meta[1],
                    type: 'line',
                    color: '#2573CE',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value)
                        {
                            return value
                        }
                    },
                    data: lineData1.metric[2],
                    symbol: "none",
                    barWidth: '20%'
                },

                {
                    name: lineData1.metric_meta[2],
                    type: 'bar',
                    color: '#B9E6FF',
                    tooltip: {
                        valueFormatter: function (value)
                        {
                            return value
                        }
                    },
                    data: lineData1.metric[1],
                    barWidth: '20%'
                },

                {
                    name: lineData1.metric_meta[3],
                    type: 'line',
                    color: '#B9E6FF',
                    symbol: "none",
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value)
                        {
                            return value
                        }
                    },
                    data: lineData1.metric[3],
                    barWidth: '20%'
                },






                // {
                //     name: lineData1.metric_meta[2],
                //     type: 'bar',
                //     color: '#2573CE',
                //     yAxisIndex: 1,
                //     symbol: "none",
                //     tooltip: {
                //         valueFormatter: function (value)
                //         {
                //             return value + '';
                //         }
                //     },
                //     data: lineData1.metric[1]
                // },

                // {
                //     name: lineData1.metric_meta[3],
                //     type: 'line',
                //     color: '#B9E6FF',
                //     yAxisIndex: 1,
                //     symbol: "none",
                //     tooltip: {
                //         valueFormatter: function (value)
                //         {
                //             return value + '';
                //         }
                //     },
                //     data: lineData1.metric[3]
                // },



            ]
        };

        option && myChart.setOption(option);
        // 自适应屏幕大小
        window.addEventListener("resize", function ()
        {
            myChart.resize();
        })
        // myChart.on('click', (data) =>
        // {
        //     console.log(data, 'datadatadsadawq');
        //     chartClick(data)
        // })

    }, [lineData1])







    // useEffect(() =>
    // {
    //     let myChart = echarts.init(reset.current);
    //     let option;
    //     option = {
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'cross',
    //                 crossStyle: {
    //                     // 线的样式
    //                     color: '#999'
    //                 }
    //             },
    //             textStyle: {
    //                 // 弹窗字体颜色
    //                 color: '#fff'
    //             },
    //             backgroundColor: 'rgba(50, 50, 50,.7)',
    //             borderWidth: 0
    //             // shadowColor: 'red',
    //         },

    //         toolbox: {
    //             feature: {
    //                 dataView: { show: false, readOnly: false },
    //                 magicType: { show: false, type: ['line', 'bar'] },
    //                 restore: { show: false },
    //                 saveAsImage: { show: false }
    //             }
    //         },
    //         legend: {
    //             data: ['当月产值（亿元）', '累计产值（亿元）', '当月增速(%)', '累计增速(%)'],
    //             itemWidth: 10,
    //             itemHeight: 10,
    //             textStyle: {
    //                 color: '#fff'
    //             },
    //             top: 10
    //         },
    //         xAxis: [
    //             {
    //                 type: 'category',
    //                 data: x,
    //                 axisPointer: {
    //                     type: 'shadow',
    //                 },
    //                 axisLabel: {
    //                     show: true,
    //                     textStyle: {
    //                         color: '#fff',
    //                         fontSize: '16px'
    //                     }
    //                 }
    //             }
    //         ],

    //         yAxis: [
    //             {
    //                 type: 'value',
    //                 name: '亿元',
    //                 color: '#fff',

    //                 position: 'left',
    //                 nameTextStyle: {
    //                     color: '#fff',
    //                     align: 'center',
    //                 },
    //                 splitLine: { show: false },
    //                 alignTicks: true,
    //                 min: 0,
    //                 max: 2500,
    //                 interval: 500,
    //                 axisLabel: {
    //                     formatter: '{value} ml'
    //                 },
    //                 axisLabel: {
    //                     show: true,
    //                     textStyle: {
    //                         color: '#ffffff',
    //                     }
    //                 }

    //             },

    //             {
    //                 type: 'value',
    //                 name: '%',
    //                 splitLine: { show: false },
    //                 nameTextStyle: {
    //                     color: '#fff',
    //                     align: 'center',
    //                 },

    //                 min: 0,
    //                 max: 100,
    //                 interval: 20,
    //                 axisLabel: {
    //                     show: true,
    //                     formatter: '{value}',
    //                     textStyle: {
    //                         color: '#ffffff'
    //                     }
    //                 }

    //             },

    //         ],
    //         series: [
    //             {
    //                 name: '当月产值（亿元）',
    //                 type: 'bar',
    //                 color: '#2573CE',
    //                 tooltip: {
    //                     valueFormatter: function (value)
    //                     {
    //                         return value + ' 亿元';
    //                     }
    //                 },
    //                 data: chartData.dangyue,
    //                 barWidth: '20%'
    //             },
    //             {
    //                 name: '累计产值（亿元）',
    //                 type: 'bar',
    //                 color: '#4986A8',
    //                 tooltip: {
    //                     valueFormatter: function (value)
    //                     {
    //                         return value + '亿元';
    //                     }
    //                 },
    //                 data: chartData.accumulate,
    //                 barWidth: '20%'
    //             },
    //             {
    //                 name: '当月增速(%)',
    //                 type: 'line',
    //                 color: '#4986A8',
    //                 yAxisIndex: 1,
    //                 symbol: "none",
    //                 tooltip: {
    //                     valueFormatter: function (value)
    //                     {
    //                         return value + '%';
    //                     }
    //                 },
    //                 data: chartData.dangyuevalue
    //             },
    //             {
    //                 name: '累计增速(%)',
    //                 type: 'line',
    //                 color: '#B9E6FF',
    //                 yAxisIndex: 1,
    //                 symbol: "none",
    //                 tooltip: {
    //                     valueFormatter: function (value)
    //                     {
    //                         return value + '%';
    //                     }
    //                 },
    //                 data: chartData.accumulatevalue
    //             }
    //         ]
    //     };

    //     option && myChart.setOption(option);
    //     // 自适应屏幕大小
    //     window.addEventListener("resize", function ()
    //     {
    //         myChart.resize();
    //     })
    //     myChart.on('click', (data) =>
    //     {
    //         console.log(data, 'datadatadsadawq');
    //         chartClick(data)
    //     })

    // }, [chartData, x])




    const reset = useRef();

    const yearHandler = (a, b) =>
    {
        // const newData = {
        //     dangyue: [
        //         1600, 1500, 1400, 1300, 1200, 100, 1800
        //     ],
        //     accumulate: [
        //         1200, 1300, 1400, 1500, 1600, 1700, 1800
        //     ],

        //     dangyuevalue: [230, 22, 33, 45, 63, 102, 203, 234, 230, 165, 120, 262],
        //     accumulatevalue: [50, 22, 33, 45, 63, 102, 203, 234, 230, 165, 120, 162]
        // }

        // setChartData(newData)
        // // 修改图表右上方年份
        // setYearSelect(a)
    }
    const monthHandler = (a, b) =>
    {
        // const newData = {
        //     dangyue: [
        //         1600, 1500, 800, 1300, 1200, 100, 1800
        //     ],
        //     accumulate: [
        //         2200, 1300, 1400, 1500, 1600, 1700, 1800
        //     ],

        //     dangyuevalue: [30, 22, 33, 45, 63, 32, 97, 22, 10, 12, 20, 22],
        //     accumulatevalue: [25, 22, 33, 45, 63, 12, 13, 34, 30, 65, 20, 62]
        // }

        // setChartData(newData)
    }
    // 图表的点击
    const chartClick = (data) =>
    {
        // 读取到点击的某个年份
        const { name } = data
        const newX = [`1月`, '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

        setX(newX)

        setIsShow(true)
    }

    // 返回隐藏按钮并且返回之前的数据
    const closeChange = () =>
    {
        setIsShow(false)
        setX(lineX)
    }

    const headDom = () =>
    {
        return (<>
            <div className={styles.selectBox_left} id={"selectBoxLeft"}>
                <Select defaultValue="2023"
                    style={{ width: 55 }}
                    onChange={yearHandler}
                    options={year}
                    getPopupContainer={() => { return window.document.getElementById("selectBoxLeft") }}
                />
            </div>
            <div className={styles.selectBox_center} id={"selectBoxCenter"}>
                <Select defaultValue="月份"
                    // getPopupContainer={() =>document.getElementById('roottwo')}
                    // dropdownStyle={{transform:'scale(0.7)'}}
                    style={{ width: 55, height: 100 }}
                    onChange={monthHandler}
                    // dropdownStyle={{ transform:' scale(0.6)'}}
                    getPopupContainer={() => { return window.document.getElementById("selectBoxCenter") }}
                    options={[
                        { value: '1月', label: '1月' },
                        { value: '2月', label: '2月' },
                        { value: '3月', label: '3月' },
                        { value: '4月', label: '4月' },
                        { value: '5月', label: '5月' },
                        { value: '6月', label: '6月' },
                        { value: '7月', label: '7月' },
                        { value: '8月', label: '8月' },
                        { value: '9月', label: '9月' },
                        { value: '10月', label: '10月' },
                        { value: '11月', label: '11月' },
                        { value: '12月', label: '12月' },
                    ]} />
            </div>
            <div className={styles.selectBox_right} id={"selectBoxRight"}>
                <Select defaultValue="环比"
                    // getPopupContainer={() =>document.getElementById('roottwo')}
                    // dropdownStyle={{transform:'scale(0.7)'}}
                    style={{ width: 55, height: 100 }}
                    onChange={monthHandler}
                    // dropdownStyle={{ transform:' scale(0.6)'}}
                    getPopupContainer={() => { return window.document.getElementById("selectBoxRight") }}
                    options={[
                        { value: '环比', label: '环比' },
                        { value: '同比', label: '同比' },
                    ]} />
            </div>
        </>)
    }
    return (
        <div className={styles.content} >
            {/* 图片暂时还没切 临时找了一个用 */}
            {isShow ? (
                <img className={styles.imgClose} onClick={closeChange} src={close} />
            ) :
                // { headDom () }}
                null}


            <div ref={reset} className={styles.echrts} id='main'></div>
        </div>
    );
};

export default Index

