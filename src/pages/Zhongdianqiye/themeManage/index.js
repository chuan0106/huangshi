import { useState, useEffect } from 'react';
import styles from './style.less'
import HeadSelect from './Select'
import Screen from './Screen'
import Mapmodel from '@/components/MapModel';
import NewIconLayer from '../components/IconLayer'
import Modal from './Modal'
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;

// 获取近五年的年份
const getPastFiveYears = () =>
{
    let date = new Date();
    let startYear = date.getFullYear() - 4;//起始年份 
    let endYear = date.getFullYear();//结束年份
    let yearList = [];
    for (var i = endYear; i >= startYear; i--)
    {
        let obj = {
            value: i,
            label: i + "年",
        }
        yearList.push(obj);
    }
    return yearList
}
const Index = ({ activeLayerObj, Map, homeModel, globalMapModel }) =>
{
    const [activeLayerArr, setActiveLayerArr] = useState([])
    // 1101指的是近五年 type=1 同比 =2 环比
    const [yearAndMonth, setYearAndMonth] = useState({ year: getPastFiveYears()[1].value, month: '0', type: 1 })
    // 弹框数据
    const [mapModal, setMapModal] = useState({ name: '', type: 0 })

    const mapInit = (map) =>
    {
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
    const mapHandler = (data, modal) =>
    {
        console.log(data.coordinate, modal, 'data, modaldata, modal');
        setActiveLayerArr(data.coordinate)
        if (modal)
        {
            const newModalObj = {
                name: modal.f0001,
                time: modal.f0003,
                value: modal.f0010,
                code: modal.f0006,
                center: modal.f0036
            }
            setMapModal({ ...newModalObj, modal, type: 1 })
        } else
        {
            setMapModal({ type: 0 })
        }
    }
    // 下拉框选择事件
    const selectHandler = (timeObj) =>
    {
        setYearAndMonth(timeObj)
    }

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
                {Map && <NewIconLayer mapHandler={mapHandler} />}

            </div>
        </div>

    );
};


function mapStateToProps ({ globalMapModel, homeModel })
{
    return {
        activeLayerObj: globalMapModel.activeLayerObj,
        Map: globalMapModel.mapObj,
        homeModel: homeModel,
        globalMapModel: globalMapModel
    }
}

export default connect(mapStateToProps)(Index);