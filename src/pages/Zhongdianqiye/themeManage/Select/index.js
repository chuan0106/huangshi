import { useState, Fragment } from 'react';
import styles from './style.less'
import { Select, Cascader } from 'antd'
import close from '@/assets/huangshi/quanjugailan/cllose1.png'
const Month = [
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
]

const options = [
    {
        value: '2023',
        label: '2023年',
        children: Month
    },
    {
        value: '2022',
        label: '2022年',
        children: Month
    },
    {
        value: '2021',
        label: '2021年',
        children: Month
    },
    {
        value: '2020',
        label: '2020年',
        children: Month
    },
    {
        value: '2019',
        label: '2019年',
        children: Month
    },
];

const type = [
    { value: '1', label: '同比' },
    { value: '2', label: '环比' },
]

const Index = ({ defaultValue, yearAndMonth, selectHandler, pastFiveYears }) =>
{
    const onChange = (year) =>
    {
        // 有值修改 无值回复默认
        if (year)
        {
            const newTime = { ...yearAndMonth, year }
            selectHandler(newTime)
        } else
        {
            const newTime = { ...yearAndMonth, year: '1101', month: '0' }
            selectHandler(newTime)
        }
    };
    const typeHandler = (type) =>
    {
        const newType = { ...yearAndMonth, type }
        selectHandler(newType)
    };
    const closeHandler = () =>
    {
        selectHandler({ year: '1101', month: '0', type: 1 })
    }

    const yearDom = () =>
    {
        return (
            <div className={styles.globalYear} id='globalYearAndMonth'>
                <Select defaultValue={"近五年"}
                    style={{ width: 120 }}
                    onChange={onChange}
                    options={pastFiveYears}
                    getPopupContainer={() => { return window.document.getElementById("globalYearAndMonth") }} />
            </div>
        )
    }

    const monthDom = () =>
    {
        return (
            <Fragment>
                <div className={styles.globalYear} id='globalYearAndMonth'>
                    <Select defaultValue={defaultValue}
                        style={{ width: 120 }}
                        onChange={onChange}
                        options={pastFiveYears}
                        getPopupContainer={() => { return window.document.getElementById("globalYearAndMonth") }} />
                </div>
                <div onClick={closeHandler} className={styles.close}>
                    <img src={close} alt="" />
                </div>

            </Fragment>
        )
    }

    return (
        <div className={styles.selectWarp}>
            <div className={styles.globalType} id='globalType'>
                <Select defaultValue="同比"
                    style={{ width: 120 }}
                    onChange={typeHandler}
                    options={type}
                    getPopupContainer={() => { return window.document.getElementById("globalType") }} />
            </div>
            {yearAndMonth.year === "1101" && yearDom()}
            {yearAndMonth.year !== "1101" && monthDom()}
        </div>
    );
};
export default Index