/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-04-13 16:10:54
 * @LastEditors: yuchang
 * @LastEditTime: 2023-06-05 19:04:29
 * @Description: 
 */
import { useEffect, useState, useRef } from 'react';
import styles from './style.less'
import Screen from './Screen'
import Topics from './Topics';
import Carousels from './Carousel';
// import Mapmodel from '@/components/MapModel';
import Mapmodel from '@/components/HomeMapModel';
import Select from './Select'
import wuhai from '@/assets/home/wuhai1.png';
// import {IconLayer} from '../components/index'
import NewIconLayer from '../components/IconLayer'
import { connect } from 'dva';
import XzPolygonLayer from '../components/PolygonLayers';
import { qswc } from './data';
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

const Index = ({ Map }) => {
    const [yearAndMonth, setYearAndMonth] = useState({ year: getPastFiveYears()[1].value, month: '0', type: 1 });
    const [area, setArea] = useState('黄石市');
    const [qswcList, setQswcList] = useState([]);
    const containerRef = useRef(null);
    const tbodyRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolling, setIsScrolling] = useState(true);
    const requestIdRef = useRef();
    const selectHandler = (timeObj) => {
        setYearAndMonth(timeObj)
    }
    useEffect(() => {
        const newData = {
            ...qswc, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0003",
                        "index": 3,
                        "alias": "qy",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0003",
                        "operator": 14,
                        "value": "黄石市"
                    }
                ]
            }
        }
        // 筛选数据
        dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newData,
                callback: (data) => {
                    setQswcList(data)
                }
            }
        })

    }, []);
    useEffect(() => {
        const newData = {
            ...qswc, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0003",
                        "index": 3,
                        "alias": "qy",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0003",
                        "operator": 14,
                        "value": area
                    }
                ]
            }
        }
        // 筛选数据
        dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newData,
                callback: (data) => {
                    setQswcList(data)
                }
            }
        })

    }, area);
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
            requestIdRef.current = requestAnimationFrame(scroll);
        }
        if (isScrolling) {
            requestIdRef.current = requestAnimationFrame(scroll);
        }
        return () => {
            cancelAnimationFrame(requestIdRef.current);
        };
    }, [isScrolling]);
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

    function handleMouseEnter () {
        setIsScrolling(false);
        cancelAnimationFrame(requestIdRef.current);
    }

    function handleMouseLeave () {
        setIsScrolling(true);
        requestIdRef.current = requestAnimationFrame(() => {
        });
    }
    const rows = qswcList?.map((item) => (
        <tr className={styles.trBox} key={item?.f0000} >
            <td style={{ width: '50%' }}>{item?.f0000}</td>
            <td style={{ width: '30%' }}>{item?.f0001}</td>
            <td style={{ width: '20%' }}>{item?.f0002}</td>
        </tr>
    ));

    return (
        <div className={styles.IframeWarp} id="IframeWarp">
            <Select pastFiveYears={getPastFiveYears()} defaultValue={getPastFiveYears()[1].label} selectHandler={selectHandler} yearAndMonth={yearAndMonth} />
            <Topics yearAndMonth={yearAndMonth} />
            <Screen yearAndMonth={yearAndMonth} area={area} />
            <div id="myMap" className={styles.myIframe1}>
                <Mapmodel initCallback={() => { }} />
                <XzPolygonLayer clickMap={(data) => { setArea(data) }} />
            </div>
            <div className={styles.titleBox}>{area === '黄石市' ? '全省位次' : '全市位次'}</div>
            {/* <div className={styles.tableBox}>
                <div className={styles.thBox}>指标名称</div>
                <div className={styles.thBox}>完成数</div>
                <div className={styles.thBox}>{area === '黄石市' ? '全省位次（名）' : '全市位次（名）'}</div>
            </div> */}
            <div className={styles.tableBox} ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <div className={styles.tdBox}>
                    <div style={{ width: '872px', textAlign: 'left', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
                        <th className={styles.thBox} style={{ width: '50%' }}>指标名称</th>
                        <th className={styles.thBox} style={{ width: '30%' }}>完成数</th>
                        <th className={styles.thBox} style={{ width: '20%' }}>{area === '黄石市' ? '全省位次（名）' : '全市位次（名）'}</th>
                    </div>
                </div>
                <div className={styles.tbBox} id='tabId'>
                    <div className={styles.box} ref={tbodyRef} >
                        {rows}
                        {rows}
                    </div>
                </div>
            </div>
            <Carousels area={area} />
        </div>
    );
};
function mapStateToProps ({ globalMapModel }) {
    return {
        Map: globalMapModel.mapObj,
    }
}

export default connect(mapStateToProps)(Index);