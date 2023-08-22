import { Fragment, useState, useEffect } from 'react';
import styles from './style.less'
import { connect } from 'dva';
import Menu from './Menu'
import Modal from './Modal'
import TableLeft from './TableLeft'
import TableRight from './TableRight'
import { left, right, cyqy } from './params';
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
const Index = ({ clickCy, area, industry }) => {
    // 筛选字段 九大主导产业名称
    const [industrialName, setIndustrialName] = useState('')
    const [tableDataSource, setTableDataSource] = useState([])
    const [isModal, setIsModal] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    const [option, setOption] = useState({})
    // 左侧表格
    const [tableDataLeft, setTableDataLeft] = useState([])
    // 右侧表格
    const [tableDataRight, setTableDataRight] = useState([])
    let REQUEST_url = "http://58.19.254.210:7000/hubble/common/v1/search?catalog=a6f5bb45afb84ee2a54188053412662e&features=f187434eea12494590fa655c64200896&max_feature=10000&search_type=1"

    // 获取左侧表格的数据
    useEffect(() => {
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
    useEffect(() => {
        const newData = {
            ...right, where: {
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
                callback: firstGetData2
            }
        })
    }, [industrialName])
    const firstGetData = (dataArr) => {
        setTableDataLeft(dataArr)
    }
    const firstGetData2 = (dataArr) => {
        setTableDataRight(dataArr)
    }



    const fetchData = () => {
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
    const getData = (data) => {
        setTableDataSource(data)
    }

    useEffect(() => {
        setTableDataSource(dataSource)
    }, [dataSource])
    // 修改弹窗数据
    const modalHandler = (dataObj) => {
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
            dataIndex: 'f0001',
            key: 'f0001',
            render: (text, record) => <div onClick={() => { examine(text, record) }} title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '企业名称',
            dataIndex: 'f0002',
            key: 'f0002',
            render: (text, record) => <div onClick={() => { examine(text, record) }} title={text} style={contentStyle}>{text}</div>,
        },
        {
            title: '所在区域',
            dataIndex: 'f0003',
            key: 'f0003',
            render: (text, record) => <div onClick={() => { examine(text, record) }} title={text} style={contentStyle}>{text}</div>,
        },
    ];


    // 表格的按钮
    const examine = (_, record) => {
        // 弹出窗需要的数据 暂时模拟
        console.log(record, 'sssss');
        setCompanyData(record)
        setIsModal(true)
    }

    // 根据左侧重点产业的点击 展示相应表格数据
    const menuHandler = (tabArr) => {
        setTableDataSource(tabArr)
    }

    // 修改产业名称
    const industrialHandler = (nameStr) => {
        setIndustrialName(nameStr)
        if (clickCy) {
            clickCy(nameStr);
        }
    }
    return (
        <Fragment>
            <Menu industrialHandler={industrialHandler} menuHandler={menuHandler} modalHandler={modalHandler} area={area} industrialName={industry} />
            {/* 由于时间问题 还需要修改 弹窗目前在Menu组件里面 */}
            {isModal && <Modal modalHandler={modalHandler} isModal={isModal} companyData={companyData} />}
            <div className={styles.tableRight}>
                {tableDataRight?.length >= 1 && <TableRight dataSource={tableDataRight} columns={columnsRight} isScroll={true} rowClassName={{ oddStyle: { color: '#fff', background: '#103066', fontSize: '18px' }, evenStyle: { color: '#FFF2D6', background: '#0D2954', fontSize: '18px' } }} />}
            </div>
            <div className={styles.rightBox}>
                {industry === '全部' ? '' : industry}产业总产值及增速
            </div>
            <div className={styles.rightBox} style={{ top: '432px' }} >
                {area === '黄石市' ?
                    industry === '全部' ? '主导产业产值比重' : `${industry}产业规上企业分布`
                    : `主导产业产值比重`}
            </div>
            <div className={styles.rightBox} style={{ top: '737px' }} >
                {industry === '全部' ? '' : industry}产业创新能力
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({ zhongdianchanyeModel }) => {
    return {
        zhongdianchanyeModel: zhongdianchanyeModel
    };
}
export default connect(mapStateToProps)(Index)