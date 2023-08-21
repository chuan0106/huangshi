import { useState, useEffect } from 'react';
import styles from './style.less'
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
];
const data = [
    {
        key: '1',
        name: 'f0000',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
let REQUEST_url = "https://www.dataojocloud.com/hubble/common/v1/search?catalog=c092aa0759be4413a7fc2d542934f635&features=339c50fb2808426ea34fb03934f1b5c9&max_feature=100&search_type=1"  // github 电影数据接口
const Index = () =>
{
    const [tableData, setTableData] = useState([])
    useEffect(() =>
    {
        fetchData()
    }, [])
    const fetchData = () =>
    {
        fetch(REQUEST_url)
            .then((response) => response.json())
            .then((responseJson) =>
            {
                console.log(responseJson, 'responseJson');
                setTableData(responseJson.data)
            }, error =>
            {
                console.warn(error);
            })
    }

    const onChange = (pagination, filters, sorter, extra) =>
    {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <div className={styles.table}>
            {/* <Table size='525px' columns={columns} dataSource={tableData} onChange={onChange} /> */}
        </div>
    );
};
export default Index