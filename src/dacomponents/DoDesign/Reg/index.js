/**
 * Copyright(C) 2021,by wx,All rights reserved
 * 文件功能: 测试正则
 *
 * 创建日期：2021年2月22日
 *
 * 作者: wx
 *
 */
import { Input, message } from 'antd';
import styles from './styles.less';
import { checkMobile } from '@/utils/object/reg';

function onBlur(val) {
  if (checkMobile(val)) {
    message.success('可以使用当前手机号');
  } else {
    message.error('当前手机号输入有误');
  }
}
const Reg = () => {
  return (
    <div className={styles.nomore}>
      <div className={styles.title}>正则实例</div>
      <Input
        style={{ width: 200 }}
        placeholder="请输入手机号"
        onBlur={value => onBlur(value.target.value)}
      ></Input>
    </div>
  );
};
export default Reg;
