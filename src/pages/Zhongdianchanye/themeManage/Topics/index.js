import { Fragment, useState, useEffect } from 'react';
import styles from './style.less'
import { connect } from 'dva';
import Menu from './Menu'
import Modal from './Modal'
import TableLeft from './TableLeft'
import TableRight from './TableRight'
import { left, right } from './params'
// import params2 from './params2.json'
const dispatch = window.g_app._store.dispatch;
const contentStyle = {
    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
};
const dataSource = [

    {
        key: 1,
        name: '大冶有色金属集团控股有限公司',
        value: '金属采矿',
        city: '大治市',
        output: '81.56',
        add: '31.32',

    },
    {
        name: '大冶特殊钢有限公司',
        value: '大冶有色金属集团控股有限公司',
        time: '16',
        detail: '21.2',
        key: 2
    },
    {
        name: '大冶华叁实业有限公司',
        value: '大冶有色金属集团控股有限公司',
        time: '16',
        detail: '21.2',
        key: 3
    },
    {
        name: '劲牌有限公司',
        value: '大冶有色金属集团控股有限公司',
        time: '16',
        detail: '21.2',
        key: 4
    },
    {
        name: '黄石晟祥铜业有限公司',
        value: '大冶有色金属集团控股有限公司',
        time: '16',
        detail: '21.2',
        key: 5
    },
    {
        name: '中钢华中铜业有限公司',
        value: '黄石港区',
        time: '16',
        detail: '21.2',
        key: 6
    },
    {
        name: '湖北西冬山发电有限公司',
        value: '西寨山区',
        time: '16',
        detail: '21.2',
        key: 7
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '黄石东贝压缩机有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 8
    },
    {
        name: '定颖电子（黄石）有限公司',
        value: '塔寨',
        time: '16',
        detail: '21.2',
        key: 22
    },
];
const dataSourceLeft = [

    {
        name: '全市',
        value: '54',
        key: 1,
    },
    {
        name: '大冶市',
        value: '27',
        key: 2
    },
    {
        name: '下陆区',
        value: '7',
        key: 3
    },
    {
        name: '西塞山区',
        value: '',
        key: 4
    },
    {
        name: '开发区·铁山区',
        value: '',
        key: 5
    },
    {
        name: '阳新县',
        value: '8',
        key: 6
    },
    {
        name: '新港园区',
        value: '12',
        key: 7
    },
    {
        name: '黄石港区',
        value: '',
        key: 8
    },
];
const dataSourceRight = [

    {
        industrial: '有色金属',
        name: '大冶市兴红矿业有限公司',
        region: '大冶市',
    },
    {
        industrial: '有色金属',
        name: '大冶市金成矿业有限责任公司',
        region: '大冶市',
    },
    {
        industrial: '有色金属',
        name: '武钢资源集团金山店矿业有限公司',
        region: '大冶市',
    },
    {
        industrial: '有色金属',
        name: '大冶市陈贵大广山矿业有限公司',
        region: '大冶市',
    },
    {
        industrial: '有色金属',
        name: '黄石市陈贵铜山口矿业股份有限公司',
        region: '大冶市',
    },
    {
        industrial: '有色金属',
        name: '湖北永志矿建工程有限责任公司',
        region: '开发区-铁山区',
    },
    {
        industrial: '有色金属',
        name: '武钢资源集团大冶铁矿有限公司',
        region: '开发区-铁山区',
    },

];
const Index = ({ }) =>
{
    // 筛选字段 九大主导产业名称
    const [industrialName, setIndustrialName] = useState('')
    const [tableDataSource, setTableDataSource] = useState([])
    const [isModal, setIsModal] = useState(null)
    // 左侧表格
    const [tableDataLeft, setTableDataLeft] = useState([])
    // 右侧表格
    const [tableDataRight, setTableDataRight] = useState([])
    let REQUEST_url = "http://58.19.254.210:7000/hubble/common/v1/search?catalog=a6f5bb45afb84ee2a54188053412662e&features=f187434eea12494590fa655c64200896&max_feature=10000&search_type=1"

    // 获取左侧表格的数据
    useEffect(() =>
    {
        const newData = {
            ...left, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0001",
                        "index": 1,
                        "alias": "cymc",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0001",
                        "operator": 14,
                        "value": `${industrialName}`
                    }
                ]
            }
        }
        dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newData,
                callback: firstGetData
            }
        })


        fetchData()  // 请求网络数据
    }, [industrialName])
    // 获取右侧表格的数据
    useEffect(() =>
    {
        const newData = {
            ...right, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0000",
                        "index": 0,
                        "alias": "cymc",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0000",
                        "operator": 14,
                        "value": `${industrialName}`
                    }
                ]
            }
        }
        dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newData,
                callback: firstGetData2
            }
        })
    }, [industrialName])
    const firstGetData = (dataArr) =>
    {
        setTableDataLeft(dataArr)
    }
    const firstGetData2 = (dataArr) =>
    {
        setTableDataRight(dataArr)
    }



    const fetchData = () =>
    {
        // 暂时使用本地数据 数据进来再替换
        // dispatch({
        //     type: 'zhongdianchanyeModel/getZhongdianchanyeTable',
        //     payload: {
        //         params: {
        //             catalog: 'ce3382a0ae80407294b507a52a897cf4',
        //             features: 'dd1458580286438b8e1c6632409fb3fd',
        //             max_feature: 10000,
        //             search_type: 2,
        //         }, callback: getData
        //     }
        // })
        // fetch(REQUEST_url)
        //     .then((response) => response.json())
        //     .then((responseJson) =>
        //     {
        //         setTableDataSource(responseJson?.data)
        //     }, error =>
        //     {
        //         console.warn(error);
        //     })
    }
    const getData = (data) =>
    {
        setTableDataSource(data)
    }

    useEffect(() =>
    {
        setTableDataSource(dataSource)
    }, [dataSource])
    // 修改弹窗数据
    const modalHandler = (dataObj) =>
    {
        setIsModal(dataObj)
    }
    const columns = [
        {
            title: '编号',
            dataIndex: 'f0000',
            key: 'f0000',
            render: text => <div title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '企业名称',
            dataIndex: 'f0001',
            key: 'f0001',

            render: text => <div title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '所属产值',
            dataIndex: 'f0002',
            key: 'f0002',
        },
        {
            title: '所在区域',
            dataIndex: 'f0003',
            key: 'f0003',
        },
        {
            title: '产值(千万元)',
            dataIndex: 'f0004',
            key: 'f0004',
        },
        {
            title: '增加值(万元)',
            dataIndex: 'f0005',
            key: 'f0005',
        },
        {
            title: '操作',
            width: 120,
            render: (_, record) => (
                <a className={styles.operation} onClick={() => { examine(_, record) }}>查看详情</a>
            ),
        }
    ];
    // 左侧
    const columnsLeft = [
        {
            title: '序号',
            dataIndex: 'f0000',
            key: 'f0000',
            render: text => <div title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '县市区',
            dataIndex: 'f0003',
            key: 'f0003',

            render: text => <div title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '规上企业数量(家)',
            dataIndex: 'f0002',
            key: 'f0002',
        },
    ];
    const columnsRight = [
        {
            title: '产业',
            dataIndex: 'f0000',
            key: 'f0000',
            render: (text, record) => <div onClick={() => { examine(text, record) }} title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '企业名称',
            dataIndex: 'f0001',
            key: 'f0001',
            render: (text, record) => <div onClick={() => { examine(text, record) }} title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '所在区域',
            dataIndex: 'f0002',
            key: 'f0002',
            render: (text, record) => <div onClick={() => { examine(text, record) }} title={text} style={contentStyle}>{text}</div>,
        },
    ];


    // 表格的按钮
    const examine = (_, record) =>
    {
        // 弹出窗需要的数据 暂时模拟
        setIsModal(true)
    }

    // 根据左侧重点产业的点击 展示相应表格数据
    const menuHandler = (tabArr) =>
    {
        setTableDataSource(tabArr)
    }

    // 修改产业名称
    const industrialHandler = (nameStr) =>
    {
        setIndustrialName(nameStr)
    }
    return (
        <Fragment>
            <Menu industrialHandler={industrialHandler} menuHandler={menuHandler} modalHandler={modalHandler} />
            {/* 由于时间问题 还需要修改 弹窗目前在Menu组件里面 */}
            {isModal && <Modal modalHandler={modalHandler} isModal={isModal} />}
            <div className={styles.tableRight}>
                {tableDataRight?.length >= 1 && <TableRight dataSource={tableDataRight} columns={columnsRight} isScroll={true} rowClassName={{ oddStyle: { color: '#fff', background: '#103066', fontSize: '18px' }, evenStyle: { color: '#FFF2D6', background: '#0D2954', fontSize: '18px' } }} />}
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({ zhongdianchanyeModel }) =>
{
    return {
        zhongdianchanyeModel: zhongdianchanyeModel
    };
}
export default connect(mapStateToProps)(Index)