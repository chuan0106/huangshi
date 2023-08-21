import { useState } from 'react';
import styles from './styles.less';
import classNames from 'classnames';
/**
 * 业务组件
 */

import { Table, Button } from 'antd';
import {
  tabData,
  dataSource,
  dataSource1,
  dataSource2,
  dataSource3,
  dataSource4,
  dataSource5,
} from './data';
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;
function open(data) {
  dispatch({
    type: 'tableModel/getTableTwoDataReducer',
    payload: data,
  });
  dispatch({
    type: 'tableModel/gettableTwoReducer',
    payload: true,
  });
}
export const Columns = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 100,
    align: 'center',
    className: styles.tabHead,
    render: (text, record) => {
      return <span className={styles.text1}>{record.name}</span>;
    },
  },
  {
    title: '案件类型',
    dataIndex: 'type',
    width: 100,
    align: 'center',
    className: styles.tabHead,
  },
  {
    title: '详情',
    dataIndex: 'detailes',
    width: 150,
    align: 'center',
    className: styles.tabHead,
    render: (text, record) => {
      return (
        <>
          <span className={styles.text}>{record.detailes}</span>
          <Button onClick={() => open(record)} size={'small'} type={'primary'}>
            案件详情
          </Button>
        </>
      );
    },
  },
];
const TabModel = ({ tableOne, style = {} }) => {
  const [tabIndex, settabIndex] = useState(1);
  function close() {
    dispatch({
      type: 'tableModel/gettableOneReducer',
      payload: false,
    });
    dispatch({
      type: 'tableModel/gettableTwoReducer',
      payload: false,
    });
  }
  function tabindexClick(id) {
    settabIndex(id);
    dispatch({
      type: 'tableModel/gettableTwoReducer',
      payload: false,
    });
  }
  function tabList() {
    return tabData.map((item, index) => {
      return (
        <div
          key={index}
          className={classNames(styles.tablist, tabIndex === item.id ? styles.activetab : '')}
          onClick={() => tabindexClick(item.id)}
        >
          {item.name}
        </div>
      );
    });
  }

  function TableChange() {}
  return (
    <div className={styles.normal} style={{ display: tableOne ? 'block' : 'none', ...style }}>
      <div onClick={() => close()} className={styles.close}>
        x
      </div>
      <div className={styles.tab}>{tabList()}</div>
      <div className={styles.table}>
        {tabIndex === 1 && (
          <Table
            columns={Columns}
            dataSource={dataSource}
            onChange={TableChange()}
            rowClassName={(record, idx) => {
              let className;
              if (idx % 2 === 1) {
                className = styles.drak_row;
              } else {
                className = styles.light_row;
              }
              return className;
            }}
          />
        )}
        {tabIndex === 2 && (
          <Table
            columns={Columns}
            dataSource={dataSource1}
            onChange={TableChange()}
            rowClassName={(record, idx) => {
              let className;
              if (idx % 2 === 1) {
                className = styles.drak_row;
              } else {
                className = styles.light_row;
              }
              return className;
            }}
          />
        )}
        {tabIndex === 3 && (
          <Table
            columns={Columns}
            dataSource={dataSource2}
            onChange={TableChange()}
            rowClassName={(record, idx) => {
              let className;
              if (idx % 2 === 1) {
                className = styles.drak_row;
              } else {
                className = styles.light_row;
              }
              return className;
            }}
          />
        )}
        {tabIndex === 4 && (
          <Table
            columns={Columns}
            dataSource={dataSource3}
            onChange={TableChange()}
            rowClassName={(record, idx) => {
              let className;
              if (idx % 2 === 1) {
                className = styles.drak_row;
              } else {
                className = styles.light_row;
              }
              return className;
            }}
          />
        )}
        {tabIndex === 5 && (
          <Table
            columns={Columns}
            dataSource={dataSource4}
            onChange={TableChange()}
            rowClassName={(record, idx) => {
              let className;
              if (idx % 2 === 1) {
                className = styles.drak_row;
              } else {
                className = styles.light_row;
              }
              return className;
            }}
          />
        )}
        {tabIndex === 6 && (
          <Table
            columns={Columns}
            dataSource={dataSource5}
            onChange={TableChange()}
            rowClassName={(record, idx) => {
              let className;
              if (idx % 2 === 1) {
                className = styles.drak_row;
              } else {
                className = styles.light_row;
              }
              return className;
            }}
          />
        )}
      </div>
    </div>
  );
};

function mapStateToProps({ tableModel }) {
  return {
    tableOne: tableModel.tableOne,
  };
}

export default connect(mapStateToProps)(TabModel);
