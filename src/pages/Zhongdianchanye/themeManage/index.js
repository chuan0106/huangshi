import { useState } from 'react';
import styles from './style.less'
import { connect } from 'dva';
import HeadSelect from './Select'
import Screen from './Screen'
import Topics from './Topics'
import Mapmodel from '@/components/MapModel';
import NewIconLayer from '../components/IconLayer'
import Modal from './Modal'

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
const Index = ({ Map, activeLayerObj }) =>
{
    const [yearAndMonth, setYearAndMonth] = useState({ year: getPastFiveYears()[1].value, month: '0', type: 1 })
    // 点位弹框
    const [mapModal, setMapModal] = useState({ name: '', type: 0 })
    const selectHandler = (timeObj) =>
    {
        setYearAndMonth(timeObj)
    }
    // 弹框展示的内容
    const mapHandler = (data, modal) =>
    {
        if (modal)
        {
            const newModalObj = {
                name: '黄石经济开发区-铁山区',
                num: '463个',
                value: '黄石是莆田市城市规划“七大组团”之一，处于城、涵、笏三片城区之间。城秀、黄涵、黄北三条省道在黄石出口站，规划中的福厦铁路也将在此设站，交通本世纪的区位优势十分突出。1994年，黄石镇就已经开发了占地330亩的民营工业小区，并得到了一定程度的发展。2001年莆田县人民政府上报了占地2平方公里的“莆田县黄石工业园区”，2001年6月经福建省乡镇企业局批准，列入全省首批50个省级乡镇企业工业园区示范基地之一。园区内现有企业72家，从业人员9460人，总产值5.8亿元（含三资企业12家），形成了以制鞋业、石材石雕为特色的主导产业。',
            }
            setMapModal({ ...newModalObj, modal, type: 1 })
        } else
        {
            setMapModal({ type: 0 })
        }
    }
    return (
        <div className={styles.IframeWarp} id="IframeWarp">
            <HeadSelect pastFiveYears={getPastFiveYears()} defaultValue={getPastFiveYears()[1].label} yearAndMonth={yearAndMonth} selectHandler={selectHandler} />
            <Screen yearAndMonth={yearAndMonth} />
            <div className={styles.modalWarp} style={{
                position: 'absolute',
                top: activeLayerObj.y,
                left: activeLayerObj.x,
            }} >
                {mapModal.type !== 0 && <Modal data={mapModal} ModalFun={mapHandler}
                />}
            </div>
            <div id="myMap" className={`${styles.myIframe1} `} >
                <Mapmodel initCallback={() => { }} />
                {Map && <NewIconLayer mapHandler={mapHandler} />}
            </div>
            <Topics />
        </div>
    );
};


function mapStateToProps ({ globalMapModel })
{
    return {
        Map: globalMapModel.mapObj,
        activeLayerObj: globalMapModel.activeLayerObj,
    }
}
export default connect(mapStateToProps)(Index);