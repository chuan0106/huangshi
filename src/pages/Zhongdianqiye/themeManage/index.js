/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-04-13 16:10:55
 * @LastEditors: yuchang
 * @LastEditTime: 2023-07-18 15:19:38
 * @Description: 
 */
import { useState, useEffect, useRef } from 'react';
import styles from './style.less'
import HeadSelect from './Select'
import Screen from './Screen'
import Mapmodel from '@/components/MapModel';
import NewIconLayer from '../components/IconLayer'
import Modal from './Modal';
import params from '../../../../public/data/prmasr.json';
import { connect } from 'dva';
import XzPolygonLayer from '../components/PolygonLayers';
import { flyTo } from '@/utils/commonFun/index.js';

const dispatch = window.g_app._store.dispatch;

// 获取近五年的年份
const getPastFiveYears = () => {
    let date = new Date();
    let startYear = date.getFullYear() - 4;//起始年份 
    let endYear = date.getFullYear();//结束年份
    let yearList = [];
    for (var i = endYear; i >= startYear; i--) {
        let obj = {
            value: i,
            label: i + "年",
        }
        yearList.push(obj);
    }
    return yearList
}
const Index = ({ activeLayerObj, Map, homeModel, globalMapModel }) => {
    const [activeLayerArr, setActiveLayerArr] = useState([])
    // 1101指的是近五年 type=1 同比 =2 环比
    const [yearAndMonth, setYearAndMonth] = useState({ year: getPastFiveYears()[1].value, month: '0', type: 1 })
    // 弹框数据
    const [mapModal, setMapModal] = useState({ name: '', type: 0 })
    const [data, setData] = useState([]);
    const [compData, setCompData] = useState(null);
    const containerRef = useRef(null);
    const tbodyRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolling, setIsScrolling] = useState(true);
    const requestIdRef = useRef();
    useEffect(() => {
        dispatch({
            type: 'zhongdianxiangmuModel/getMenuTable',
            payload: {
                params: {
                    catalog: 'ce3382a0ae80407294b507a52a897cf4',
                    features: 'e0b31b55deb5449791dbb838ce4f1a2b',
                    max_feature: 10000,
                    search_type: 2,
                }, callback: (data) => {
                    setData(data)
                }
            }
        });
        const newData = {
            ...params, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0001",
                        "index": 1,
                        "alias": "name",
                        "anotherName": null,
                        "key": "f0001",
                        "operator": 14,
                        "value": "大冶有色金属集团控股有限公司"
                    }
                ]
            }
        }
        // 筛选数据
        dispatch({
            type: 'globalMapModel/getDoCloudEffects',
            payload: {
                params: newData,
                callback: (res) => {
                    setCompData(res)
                    console.log(res, 'sssss');
                }
            }
        });

    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const tabDiv = document.getElementById('tabId');
            if (tabDiv) {
                const scrollTop = tabDiv.scrollTop;
                setScrollPosition(scrollTop)
            }
        };

        const tabDiv = document.getElementById('tabId');
        if (tabDiv) {
            tabDiv.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (tabDiv) {
                tabDiv.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    useEffect(() => {
        const containerHeight = containerRef.current.offsetHeight;
        const tbodyHeight = tbodyRef.current.offsetHeight;
        const rowHeight = tbodyRef.current.querySelector("tr")?.offsetHeight;
        const scrollableHeight = tbodyHeight - containerHeight + rowHeight;
        function scroll () {
            setScrollPosition((scrollPosition) => {
                const tabDiv = document.getElementById('tabId');
                tabDiv.scrollTop = scrollPosition;
                const newPosition = scrollPosition + 0.5;
                if (newPosition > scrollableHeight) {
                    return newPosition - scrollableHeight;
                }
                return newPosition;
            });
            // const tabDiv = document.getElementById('tabId');
            // tabDiv.scrollTop = scrollPosition;
            requestIdRef.current = requestAnimationFrame(scroll);
        }

        if (isScrolling) {
            requestIdRef.current = requestAnimationFrame(scroll);
        }

        return () => {
            cancelAnimationFrame(requestIdRef.current);
        };
    }, [isScrolling]);

    function handleMouseEnter () {
        setIsScrolling(false);
        cancelAnimationFrame(requestIdRef.current);
    }

    function handleMouseLeave () {
        setIsScrolling(true);
        requestIdRef.current = requestAnimationFrame(() => {
            // scroll();
        });
    }
    const mapInit = (map) => {
        // map.flyTo({
        //     zoom: 5.818177907246239, center: [112.09275817871094, 31.21311378479004], speed: 2.4, easing (t)
        //     {
        //         if (t === 1)
        //         {
        //             const viewState = {
        //                 longitude: map._easeOptions.center[0],
        //                 latitude: map._easeOptions.center[1],
        //                 zoom: map._easeOptions.zoom
        //             }
        //             dispatch({
        //                 type: 'globalMapModel/setViewState',
        //                 payload: viewState,
        //             });
        //         }
        //         return t;
        //     }
        // });
    }
    const mapHandler = (data, modal) => {
        console.log(data.coordinate, modal, 'data, modaldata, modal');
        setActiveLayerArr(data.coordinate)
        if (modal) {
            const newModalObj = {
                name: modal.f0023,
                time: modal.f0003,
                value: modal.f0010,
                code: modal.f0006,
                center: modal.f0036,
                history: modal.f0045
            }
            setMapModal({ ...newModalObj, modal, type: 1 })
        } else {
            setMapModal({ type: 0 })
        }
    }
    // 下拉框选择事件
    const selectHandler = (timeObj) => {
        setYearAndMonth(timeObj)
    }

    const handleClick = (data) => {
        console.log(data, 'datadatadata');
        const newData = {
            ...params, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0001",
                        "index": 1,
                        "alias": "name",
                        "anotherName": null,
                        "key": "f0001",
                        "operator": 14,
                        "value": data.f0002
                    }
                ]
            }
        }
        // 筛选数据
        dispatch({
            type: 'globalMapModel/getDoCloudEffects',
            payload: {
                params: newData,
                callback: (res) => {
                    setCompData(res)
                    let obj = null;
                    obj = {
                        zoom: 13,
                        altitude: 1.5,
                        longitude: res?.features[0]?.geometry?.coordinates[0],
                        latitude: res?.features[0]?.geometry?.coordinates[1],
                        transitionDuration: 2000,
                    };
                    flyTo(obj, fly);
                    console.log(res, 'sssss');
                }
            }
        })
    }
    const fly = (viewState) => {
        dispatch({
            type: 'globalMapModel/setViewState',
            payload: viewState,
        });
    }
    const rows = data.map((item) => (
        <tr className={styles.trBox} key={item?.f0000} onClick={() => handleClick(item)}>
            <td style={{ width: '7%' }}>{item?.f0000}</td>
            <td style={{ width: '45%' }}>{item?.f0002}</td>
            <td style={{ width: '20%' }}>{item?.f0001}</td>
            <td style={{ width: '15%' }}>{item?.f0006}</td>
            <td style={{ width: '13%' }}>{item?.f0008}</td>
        </tr>
    ));

    return (
        <div className={styles.IframeWarp} >
            <HeadSelect pastFiveYears={getPastFiveYears()} defaultValue={getPastFiveYears()[1].label} yearAndMonth={yearAndMonth} selectHandler={selectHandler} />
            <Screen yearAndMonth={yearAndMonth} />
            {/* <div className={styles.modalWarp} style={{
                position: 'absolute',
                top: activeLayerObj.y - 20,
                left: activeLayerObj.x + 20,
            }} >
                {mapModal.type !== 0 && <Modal data={mapModal} ModalFun={mapHandler}
                />}
            </div> */}
            <div className={styles.modalWarp} style={{
                position: 'absolute',
                top: activeLayerObj.y - 20,
                left: activeLayerObj.x + 20,
            }} >
                {mapModal.type !== 0 && <Modal data={mapModal} ModalFun={mapHandler}
                />}
            </div>

            {/* <div className={styles.overCenter}
                onMouseEnter={handleMouse(true)}
                onMouseLeave={handleMouse(false)} >
            </div> */}
            <div id="myMap" className={`${styles.myIframe1} `} >
                <Mapmodel initCallback={(e) => { mapInit(e) }} />
                {Map && <NewIconLayer mapHandler={mapHandler} compData={compData} mapModal={mapModal} />}
                <XzPolygonLayer />
            </div>
            <div className={styles.tableBox} ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <div className={styles.tdBox}>
                    <div style={{ width: '572px', textAlign: 'left' }}>
                        <th style={{ width: '7%' }}>序号</th>
                        <th style={{ width: '45%' }}>企业名称</th>
                        <th style={{ width: '20%' }}>县市区</th>
                        <th style={{ width: '15%' }}>产值（万元）</th>
                        <th style={{ width: '13%' }}>同比（%）</th>
                    </div>
                </div>
                <div className={styles.tbBox} id='tabId'>
                    <div className={styles.box} ref={tbodyRef} >
                        {rows}
                        {rows}
                    </div>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.connectBox}>企业名称：{compData?.features[0]?.properties.name} </div>
                <div className={styles.connectBox}>企业logo: {
                    compData?.features[0]?.properties.logo_url ? <img src={compData?.features[0]?.properties.logo_url} style={{ height: "30px", width: "auto" }} alt='企业logo' /> : '无'}
                </div>
                <div className={styles.connectBox}>企业地址：{compData?.features[0]?.properties.address}  </div>
                <div className={styles.connectBox}>企业邮箱：{compData?.features[0]?.properties.value}  </div>
                <div className={styles.connectBox}>企业电话：{compData?.features[0]?.properties.value1}  </div>
                <div className={styles.connectBox}>企业网址：{compData?.features[0]?.properties.web_name}  </div>
                <div className={styles.connectBox} title={compData?.features[0]?.properties.scope} >经营范围：{compData?.features[0]?.properties.scope}  </div>
                <div className={styles.connectBox}>企业类型：{compData?.features[0]?.properties.econ_kind}  </div>
                <div className={styles.connectBox}>行业代码：{compData?.features[0]?.properties.industry_code}  </div>
                <div className={styles.connectBox}>法定代表人：{compData?.features[0]?.properties.oper_name}  </div>
                <div className={styles.connectBox}>登记机关：{compData?.features[0]?.properties.belong_org}  </div>
                <div className={styles.connectBox}>统一社会信用代码：{compData?.features[0]?.properties.credit_no}  </div>
                <div className={styles.connectBox}>组织机构代码：{compData?.features[0]?.properties.org_no}  </div>
                <div className={styles.connectBox}>注册资本：{compData?.features[0]?.properties.regist_capi}  </div>
                <div className={styles.connectBox}>注册号：{compData?.features[0]?.properties.eid}  </div>
                <div className={styles.connectBox}>成立日期：无  </div>
                <div className={styles.connectBox}>核准日期：无</div>
                <div className={styles.connectBox}>纳税A级年份： {compData?.features[0]?.properties.year} </div>
            </div>
        </div>

    );
};


function mapStateToProps ({ globalMapModel, homeModel }) {
    return {
        activeLayerObj: globalMapModel.activeLayerObj,
        Map: globalMapModel.mapObj,
        homeModel: homeModel,
        globalMapModel: globalMapModel
    }
}

export default connect(mapStateToProps)(Index);