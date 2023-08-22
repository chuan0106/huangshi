import { useState } from 'react';
import styles from './style.less'
import { Select } from 'antd'

const year = [
    { value: '2023年', label: '2023年' },
    { value: '2022年', label: '2022年' },
    { value: '2021年', label: '2021年' },
    { value: '2020年', label: '2020年' },
    { value: '2019年', label: '2019年' },
]
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

const type = [
    { value: '同比', label: '同比' },
    { value: '环比', label: '环比' },
]
const index = () =>
{
    const yearHandler = (value) =>
    {
        console.log(value);
    };
    return (
        <div className={styles.selectWarp}>
            <div className={styles.globalYear} id='globalYear'>
                <Select defaultValue="2023年"
                    style={{ width: 120 }}
                    onChange={yearHandler}
                    options={year}
                    getPopupContainer={() => { return window.document.getElementById("globalYear") }}
                />
            </div>
            <div className={styles.globalMonth} id='globalMonth'>
                <Select defaultValue="月份"
                    style={{ width: 120 }}
                    onChange={yearHandler}
                    options={Month}
                    getPopupContainer={() => { return window.document.getElementById("globalMonth") }}
                />
            </div>
            <div className={styles.globalType} id='globalType'>
                <Select defaultValue="同比"
                    style={{ width: 120 }}
                    onChange={yearHandler}
                    options={type}
                    getPopupContainer={() => { return window.document.getElementById("globalType") }}
                />
            </div>

        </div>
    );
};
export default index