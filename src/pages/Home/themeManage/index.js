import { useState } from 'react';
import styles from './style.less'
import Screen from './Screen'
import Topics from './Topics'
// import Mapmodel from '@/components/MapModel';
import Mapmodel from '@/components/HomeMapModel'
import Select from './Select'
import wuhai from '@/assets/home/wuhai1.png';
// import {IconLayer} from '../components/index'
import NewIconLayer from '../components/IconLayer'
import { connect } from 'dva';

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

const Index = ({ Map }) =>
{
    const [yearAndMonth, setYearAndMonth] = useState({ year: getPastFiveYears()[1].value, month: '0', type: 1 })
    const selectHandler = (timeObj) =>
    {
        setYearAndMonth(timeObj)
    }

    return (
        <div className={styles.IframeWarp} id="IframeWarp">
            <Select pastFiveYears={getPastFiveYears()} defaultValue={getPastFiveYears()[1].label} selectHandler={selectHandler} yearAndMonth={yearAndMonth} />
            <Topics yearAndMonth={yearAndMonth} />
            <Screen yearAndMonth={yearAndMonth} />
            <div id="myMap" className={styles.myIframe1}>
                <Mapmodel initCallback={() => { }} />
            </div>
        </div>
    );
};
function mapStateToProps ({ globalMapModel })
{
    return {
        Map: globalMapModel.mapObj,
    }
}

export default connect(mapStateToProps)(Index);