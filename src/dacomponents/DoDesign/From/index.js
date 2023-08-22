/**
 * Copyright(C) 2021,by wx,All rights reserved
 * 文件功能: 高阶From表单  链接地址: https://formilyjs.org/#/zoi8i0/6dt3t7FjI4
 *
 * 创建日期：2021年2月22日
 *
 * 作者: wx
 *
 */
import React from 'react';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  createFormActions,
  FormSpy,
  LifeCycleTypes,
} from '@formily/antd';
// import { setup } from '@formily/antd-components'
import styles from './styles.less';
// setup()
const actions = createFormActions();
const From = () => {
  return (
    <div className={styles.nomore}>
      <div className={styles.list}>
        <div className={styles.title}>1. 实现一个统计表单 values 改变的计数器</div>
        <SchemaForm actions={actions}>
          <Field type="string" title="username" name="username" />
          <FormSpy
            style={{ width: 200 }}
            selector={LifeCycleTypes.ON_FORM_VALUES_CHANGE}
            reducer={(state, action, form) => ({
              count: state.count ? state.count + 1 : 1,
            })}
          >
            {({ state, type, form }) => {
              return <div>count: {state.count || 0}</div>;
            }}
          </FormSpy>
        </SchemaForm>
      </div>
      <div className={styles.list}>
        <div className={styles.title}>2. 实现常用 combo 组件</div>
        <SchemaForm actions={actions}>
          <Field type="string" title="username" name="username" />
          <Field type="string" title="age" name="age" />
          <FormSpy>
            {({ state, form }) => {
              // 由于formSpy会监听所有周期，包括form未init之前，所以form实例可能为null
              return (
                <div>
                  name: {form && form.getFieldValue('username')}
                  <br />
                  age: {form && form.getFieldValue('age')}
                </div>
              );
            }}
          </FormSpy>
        </SchemaForm>
      </div>
    </div>
  );
};
export default From;
