import { useState, Fragment, useEffect } from 'react';
import { IconLayer } from '@deck.gl/layers';
import styles from './style.less';
import Table from './Table';
import huangshi from '../../../../../assets/huangshi/common/huangshi.png';
// import wuhai from '@/assets/home/wuhai.png';
import wuhai from '../../../../../assets/huangshi/common/hubei/hubei.png'
// import wuhai from '../../../../../assets/huangshi/common/hubei.png'
import huangguan from '@/assets/huangshi/quanjugailan/huangguan.png'
import yinguan from '@/assets/huangshi/quanjugailan/yinguan.png'
import tongguan from '@/assets/huangshi/quanjugailan/tongguan.png'
import { connect } from 'dva';
import ImageLayer from '../../../../../components/MapModel/MapBoxLayer/ImageLayer';
import NewIconLayer from '../../../components/IconLayer'
import QuanshangIcon from '../../../components/QuanshangIcon'
import { geoJson, shiGeoJson, quanshengGeoJson } from '../../../../../utils/publickPage/geoJson'
const dispatch = window.g_app._store.dispatch;
// import wuhai from '../../assets/home/wuhai1.png'
// 全省的 Columns
// 进规企业
const jinguiColumns = [
    // {
    //     title: '时间',
    //     dataIndex: 'duration',
    //     key: 'duration',
    // },
    {
        title: '市州',
        dataIndex: 'grade',
        key: 'grade',

        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '累计进规数',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '规上企业总数',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: '排名',
        dataIndex: 'ranking',
        key: 'ranking',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },

]
// 工业增加值增速
const gongyezengjiaColumns = [

    // {
    //     title: '时间',
    //     dataIndex: 'duration',
    //     key: 'duration',
    // },
    {
        title: '市州',
        dataIndex: 'grade',
        key: 'grade',

        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '增速(%)',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '排名',
        dataIndex: 'ranking',
        key: 'ranking',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },

]
// 工业投资增速
const gonggyetouziColumns = [

    // {
    //     title: '时间',
    //     dataIndex: 'duration',
    //     key: 'duration',
    // },
    {
        title: '市州',
        dataIndex: 'grade',
        key: 'grade',

        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '增速(%)',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '排名',
        dataIndex: 'ranking',
        key: 'ranking',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },

]
// 工业技改投资增速
const gonggyejigaiColumns = [
    // {
    //     title: '时间',
    //     dataIndex: 'duration',
    //     key: 'duration',
    // },
    {
        title: '市州',
        dataIndex: 'grade',
        key: 'grade',

        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '增速(%)',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '排名',
        dataIndex: 'ranking',
        key: 'ranking',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },

]

// 本市区的 Columns
// 工业总产值
const gongyezongchanzhiColumns = [
    {
        title: '县市区',
        dataIndex: 'f0005',
        key: 'f0005',
    },

    {
        title: '同期(亿元)',
        dataIndex: 'f0001',
        key: 'f0001',

        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '占全市比',
        dataIndex: 'f0002',
        key: 'f0002',
    },
    {
        title: '同比',
        dataIndex: 'f0003',
        key: 'f0003',
    },
    {
        title: '排名',
        dataIndex: 'f0006',
        key: 'f0006',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },

]
// 工业增加值增速
const gongyezengjiaColumns2 = [

    {
        title: '县市区',
        dataIndex: 'f0001',
        key: 'f0001',
        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '增速(%)',
        dataIndex: 'f0002',
        key: 'f0002',
    },
    {
        title: '与全市比较',
        dataIndex: 'f0004',
        key: 'f0004',
    },
    {
        title: '排名',
        dataIndex: 'f0003',
        key: 'f0003',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },
]
// 工业投资增速
const gonggyetouziColumns2 = [

    {
        title: '县市区',
        dataIndex: 'f0001',
        key: 'f0001',

        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '增速(%)',
        dataIndex: 'f0002',
        key: 'f0002',
    },
    {
        title: '排名',
        dataIndex: 'f0003',
        key: 'ranking',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },
]
// 工业技改投资增速
const gonggyejigaiColumns2 = [
    {
        title: '县市区',
        dataIndex: 'f0001',
        key: 'f0001',

        render: text => <div title={text} style={contentStyle}>{text}</div>,
    },
    {
        title: '增速(%)',
        dataIndex: 'f0002',
        key: 'f0002',
    },
    {
        title: '排名',
        dataIndex: 'f0003',
        key: 'ranking',
        render: text => <div title={text} className={styles.ranking} style={contentStyle}>
            {text == 1 || text == 2 || text == 3 ? (<img src={text == 1 ? huangguan : text == 2 ? yinguan : text == 3 ? tongguan : null} />) : text}
        </div>
    },
]

const CoreMenu1 = [

    { name: '工业增加值增速', id: 2, difference: '全省-工业增加值增速', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: 'a4b2e58137684f4a8537bbbd9c23808e', columns: gongyezengjiaColumns },
    { name: '工业投资增速', id: 3, difference: '全省-工业投资增速', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: 'b86132e000024dfaabb8e4e42a28daf4', columns: gonggyetouziColumns },
    { name: '工业技改投资增速', id: 4, difference: '全省-工业技改投资增速', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: '397ba1a95a7449499ea58487da4ee78a', columns: gonggyejigaiColumns },
    { name: '进规企业', id: 1, difference: '全省-进规企业', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: 'dd1458580286438b8e1c6632409fb3fd', columns: jinguiColumns },
]

const CoreMenu2 = [
    { name: '工业总产值', id: 1, difference: '区县-工业总产值', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: '09abc4610d274c02ba357705924150fc', columns: gongyezongchanzhiColumns },
    { name: '工业增加值增速', id: 2, difference: '区县-工业增加值增速', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: 'c17aaa5f98b84a62bb3857b5c706230d', columns: gongyezengjiaColumns2 },
    { name: '工业投资增速', id: 3, difference: '区县-工业投资增速', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: 'a0a33668f7084910bb7176005dd399a3', columns: gonggyetouziColumns2 },
    { name: '工业技改投资增速', id: 4, difference: '区县-工业技改投资增速', catalog: 'ce3382a0ae80407294b507a52a897cf4', features: '408e493327b0474eab77b7fa66293fd2', columns: gonggyejigaiColumns2 },
]

const contentStyle = {
    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
};

const titleArr = [

    {
        name: '县市区工业', id: 1, children: CoreMenu2
    },
    {
        name: '全省市州情况', id: 2, children: CoreMenu1
    },
]
const Index = (props) => {

    // 顶部导航栏
    const [active, setActive] = useState(titleArr[0])
    // 底部导航栏
    const [listActive, setListActive] = useState(active.children[0])

    const [imgurl, setimgurl] = useState(wuhai)
    const [tableDataSource, setTableDataSource] = useState([])


    // 切换本市与全省 清除点位数据
    useEffect(() => {
        let { deckLayerArr, mapObj } = props.globalMapModel;

        if (active.id === 2) {
            let layerobj = new IconLayer({
                id: '全省-icon',
                data: quanshengGeoJson.features,
                pickable: true,
                billboard: true,
                getIcon: d => {
                    let obj = {
                        url: d.geometry.img,
                        width: d.geometry.width,
                        height: d.geometry.height,
                        anchorX: d.geometry.width / 2,
                        anchorY: d.geometry.height,
                    };
                    return obj;
                },
                sizeMinPixels: 80,
                sizeMaxPixels: 150,
                getSize: d => 1,
                sizeUnits: 'meters',
                getPosition: d => {
                    return d.geometry.coordinates;
                },
                //   getPixelOffset:(d) => {
                //     return [0, 10]
                //   }
            });
            if (mapObj) {
                dispatch({
                    type: 'globalMapModel/setDeckLayerArr',
                    // payload: [...deckLayerArr, layerobj],
                    payload: [layerobj],
                    // payload: [],
                });
            }

        } else {
            let layerobj = new IconLayer({
                id: '市区-icon',
                data: shiGeoJson.features,
                pickable: true,
                billboard: true,
                getIcon: d => {
                    let obj = {
                        url: d.geometry.img,
                        width: d.geometry.width,
                        height: d.geometry.height,
                        anchorX: d.geometry.width / 2,
                        anchorY: d.geometry.height,
                    };
                    return obj;
                },
                sizeMinPixels: 80,
                sizeMaxPixels: 150,
                getSize: d => 1,
                sizeUnits: 'meters',
                getPosition: d => {
                    return d.geometry.coordinates;
                },
                //   getPixelOffset:(d) => {
                //     return [0, 10]
                //   }
            });
            if (mapObj) {
                dispatch({
                    type: 'globalMapModel/setDeckLayerArr',
                    // payload: [...deckLayerArr, layerobj],
                    payload: [layerobj],
                    // payload: [],
                });
            }
        }

        return () => {
            dispatch({
                type: 'globalMapModel/setDeckLayerArr',
                payload: []
            })
        }
    }, [active])
    // 首次加载请求 全省-进规企业表格
    useEffect(() => {
        const { id } = active
        if (id == 1) {
            props.dispatch({
                type: 'homeModel/getgongyezongchanzhi',
                payload: {
                    params: {
                        catalog: 'ce3382a0ae80407294b507a52a897cf4',
                        features: '09abc4610d274c02ba357705924150fc',
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getDataThree
                }
            })
        }
        if (id == 2) {
            // props.dispatch({
            //     type: 'homeModel/getFirstTableData',
            //     payload: {
            //         params: {
            //             catalog: 'ce3382a0ae80407294b507a52a897cf4',
            //             features: 'dd1458580286438b8e1c6632409fb3fd',
            //             max_feature: 10000,
            //             search_type: 2,
            //         }, callback: firstGetData
            //     }
            // })

            // 之前首次加载进规企业 现在首次加载工业增加值增速
            props.dispatch({
                type: 'homeModel/getFirstTableData',
                payload: {
                    params: {
                        catalog: 'ce3382a0ae80407294b507a52a897cf4',
                        features: 'a4b2e58137684f4a8537bbbd9c23808e',
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: firstGetData
                }
            })
        }

        setListActive(active.children[0])
    }, [active])

    useEffect(() => {
        // setListActive(1)
    }, [active])
    const firstGetData = (data) => {
        let dataArr = []
        for (let i in data) {
            let dataParams = {
                duration: data[i].f0000,
                grade: data[i].f0001,
                number: data[i].f0002,
                ranking: data[i].f0003,
            }
            dataArr.push(dataParams)
        }
        setTableDataSource(dataArr)
    }

    const getData = (data) => {
        let dataArr = []
        for (let i in data) {
            let dataParams = {
                duration: data[i].f0000,
                grade: data[i].f0001,
                number: data[i].f0002,
                ranking: data[i].f0003,
                total: data[i].f0004,
            }
            dataArr.push(dataParams)
        }
        setTableDataSource(dataArr)
    }


    const getdatatwo = (data) => {
        let dataArry = [];
        for (let i in data) {
            let dataparams = {
                name: data[i].f0006,
                grade: data[i].f0005,
                time: data[i].f0006,
                detail: data[i].f0003,
                detail: data[i].f0006
            }
            dataArry.push(dataparams)
        }
        setTableDataSource(dataArry)
    }
    // 顶部导航栏切换
    const titleHandler = (itemObj) => {
        props.modalHandler(null)

        const { id } = itemObj;
        if (itemObj.name === '县市区工业') {
            let option = {
                // coordinates: [
                //     [114.50, 30.35],
                //     [115.586667, 30.35],
                //     [115.586667, 29.51],
                //     [114.50, 29.51]

                // ],
                coordinates: [
                    [114.526517, 30.332979],
                    [115.505685, 30.332979],
                    [115.505685, 29.509487],
                    [114.526517, 29.509487]
                ],
                url: huangshi
            }

            let { mapObj } = props.globalMapModel
            let newimglayer = new ImageLayer(mapObj, 'imglayer', option)
            newimglayer.addMapLayer()
        } else if (itemObj.name === '全省市州情况') {
            let option = {
                coordinates: [
                    [114.526517, 30.332979],
                    [115.505685, 30.332979],
                    [115.505685, 29.509487],
                    [114.526517, 29.509487]
                ],
                url: wuhai
            }

            let { mapObj } = props.globalMapModel
            let newimglayer = new ImageLayer(mapObj, 'imglayer', option)
            newimglayer.addMapLayer()
            // mapObj.flyTo({ zoom: 6.818177907246239, center: [113.09275817871094, 31.21311378479004] });
        }
        if (id === 1) {
            props.dispatch({
                type: 'homeModel/getgongyezongchanzhi',
                payload: {
                    params: {
                        catalog: 'ce3382a0ae80407294b507a52a897cf4',
                        features: '09abc4610d274c02ba357705924150fc',
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getDataThree
                }
            })
        }
        if (id === 2) {
            props.dispatch({
                type: 'homeModel/getFirstTableData',
                payload: {
                    params: {
                        catalog: 'ce3382a0ae80407294b507a52a897cf4',
                        features: 'dd1458580286438b8e1c6632409fb3fd',
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: firstGetData
                }
            })
            let { mapObj } = props.globalMapModel

        }


        setActive(itemObj)
    }
    // 获取工业总产值的数据
    const getDataThree = (data) => {

        setTableDataSource(data)
    }
    // 底部导航栏切换
    const coreHandler = (itemObj) => {
        // ! 重点注意 这里其实可以不用写if的 为了以防万一后面改动页面会有变化
        setListActive(itemObj)
        const { difference } = itemObj
        if (difference === '全省-进规企业') {
            props.dispatch({
                type: 'homeModel/getjinguiqiye',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getData
                }
            })
        }
        if (difference === '全省-工业增加值增速') {
            props.dispatch({
                type: 'homeModel/getgongyezengjiazhizengsu1',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getData
                }
            })
        }
        if (difference === '全省-工业投资增速') {
            props.dispatch({
                type: 'homeModel/getquanshenggongyetouzizengsu1',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getData
                }
            })
        }
        if (difference === '全省-工业技改投资增速') {
            props.dispatch({
                type: 'homeModel/getgongyejigaitouzi1',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getData
                }
            })
        }
        if (difference === '区县-工业总产值') {
            props.dispatch({
                type: 'homeModel/getgongyezongchanzhi',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getDataThree
                }
            })
        }
        if (difference === '区县-工业增加值增速') {
            props.dispatch({
                type: 'homeModel/getgongyezengjiazhizengsu2',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getDataThree
                }
            })
        }
        if (difference === '区县-工业投资增速') {
            props.dispatch({
                type: 'homeModel/getgongyezengjiazhizengsu2',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getDataThree
                }
            })
        }
        if (difference === '区县-工业技改投资增速') {
            props.dispatch({
                type: 'homeModel/getgongyejigaitouzi2',
                payload: {
                    params: {
                        catalog: itemObj?.catalog,
                        features: itemObj?.features,
                        max_feature: 10000,
                        search_type: 2,
                    }, callback: getDataThree
                }
            })
        }
    }
    console.log(active.id, 'dsd props.globalMapModel?.mapObj');
    return (
        <Fragment>
            {/* <div className={styles.core}>
                {titleArr.map(item => (
                    <div key={item.id} onClick={() => { titleHandler(item) }} style={{ color: active.id === item.id ? '#fff' : 'rgba(148,155,170)' }} className={styles.title}>{item.name}</div>
                ))}
            </div> */}
            {/* {active.name === '全市地区概况' && ( */}
            {/* <div className={styles.menu}>
                {active?.children?.map(item => (
                    (
                        <div key={item.id} className={styles.menuList}>
                            <img src="https://www.dataojocloud.com/dataeye/v1/data/image/get?imageid=63f4a70d2ee1bd18f69074b5" alt="" />
                            <span onClick={() => { coreHandler(item) }} style={{ color: listActive.id === item.id ? '#fff' : ' rgba(148,155,170)' }}> {item.name}</span>
                        </div>
                    )
                ))}
            </div> */}
            {props?.globalMapModel?.mapObj && (
                <Fragment>
                    {active.id === 1 && <NewIconLayer modalHandler={props.modalHandler} />}
                    {active.id === 2 && <QuanshangIcon modalHandler={props.modalHandler} />}
                </Fragment>
            )}

            {/* <div className={active.id == 1 ? styles.mapimg : styles.mapimgtwo}>
                <img src={imgurl} />
            </div> */}
            {/* <div className={styles.tableWarp}>
                <div className={styles.titleWarp}>
                    <p className={styles.title}>{active.id === 1 ? '县市区比较' : '市州比较'} </p>
                </div>

                {tableDataSource?.length > 1 && <Table dataSource={tableDataSource} columns={listActive?.columns} isScroll={true} rowClassName={{ oddStyle: { color: '#fff', background: '#103066', fontSize: '14px' }, evenStyle: { color: '#FFF2D6', background: '#0D2954', fontSize: '14px' } }} />}
            </div> */}
        </Fragment>

    );
};
function mapStateToProps ({ homeModel, globalMapModel }) {
    return {
        homeModel: homeModel,
        globalMapModel: globalMapModel
    };
}
export default connect(mapStateToProps)(Index);