import React, { useState } from 'react';
import styles from './styles.less';
import { Modal } from 'antd';
import {CloseOutlined } from '@ant-design/icons'
const Xmxq = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };
  return (
    <div className={styles.normal}>
      <div
        className={styles.nr}
        onClick={() => {
          handleClick();
        }}
      >
        <span style={{ marginLeft: '20px' }}>详情</span>
      </div>
      <Modal
        visible={visible}
        title="刘村项目信息"
        className={styles.tk}
        onCancel={() => setVisible(false)}
        footer={null}
        mask={false}
        width={914}
        centered
        closeIcon={<CloseOutlined style={{color:"#fff"}}/>}
      >
        <div className={styles.modalBox}>
          <div className={styles.leftBox}>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
              <span className={styles.name}>项目名称</span>
              <span>刘村骑手之家</span>
            </div>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
              <span className={styles.name}>报送房源数量</span>
              <span>531</span>
            </div>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
              <span className={styles.name}>建筑面积</span>
              <span>7506㎡</span>
            </div>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span className={styles.name}>产权方名称</span>
            <span>北京兴业安民物业管理有限公司</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span className={styles.name}>合同期限</span>
            <span>8年</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span className={styles.name}>建筑类型</span>
            <span>单层、两层建筑</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span className={styles.name}>服务对象</span>
            <span>快递员、外卖员</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span className={styles.name}>水电供暖缴费方式</span>
            <span>项目公司预收租客水电及供暖费，水电费按实际使用量收取</span>
          </div>
          </div>

          <div className={styles.rightBox}>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
              <span>项目位置</span>
              <span>北京市大兴区黄村镇刘村</span>
            </div>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
              <span>租赁权转移付款方式</span>
              <span>半年付</span>
            </div>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
              <span>规划用途</span>
              <span>宅基地</span>
            </div>
                 <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span>运营方名称</span>
            <span>北京乐建企成公寓管理有限公司</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span>租客类型</span>
            <span>城市基本公服人员、基层劳动者员</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span>居室</span>
            <span>单间双人间</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span>供暖方式</span>
            <span>空气能</span>
          </div>
               <div className={styles.yi}>
              <div className={styles.colorBox}/>
            <span>公共服务空间</span>
            <span>健身房、共享办公、书吧、子女托管、咖啡区、公共厨房、餐厅</span>
          </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Xmxq;
