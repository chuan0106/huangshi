import styles from './styles.less';
/**
 * 业务组件
 */
import icon from './img/1.jpg';
import { connect } from 'dva';
const dispatch = window.g_app._store.dispatch;
const TabModel1 = ({ tableTwo, tableTwoData, style = {} }) => {
  function close() {
    dispatch({
      type: 'tableModel/gettableTwoReducer',
      payload: false,
    });
  }
  return (
    <div className={styles.normal} style={{ display: tableTwo ? 'block' : 'none', ...style }}>
      <div onClick={() => close()} className={styles.close}>
        x
      </div>
      <div className={styles.tabbox}>
        <div className={styles.tab}>
          <div className={styles.tablist}>
            <div className={styles.onebox}>所属街乡：</div>
            <div className={styles.twobox}>{tableTwoData?.street_township || 'XXXXXXX'}</div>
            <div className={styles.onebox}>所属社区：</div>
            <div className={styles.twobox}>{tableTwoData?.community || 'XXXXXXX'}</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.onebox}>所属网格：</div>
            <div className={styles.twobox}>{tableTwoData?.grid || 'XXXXXXX'}</div>
            <div className={styles.onebox}>坐标：</div>
            <div className={styles.twobox}>118.2233444333322</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.onebox}>详细位置：</div>
            <div className={styles.threebox}>{tableTwoData?.detailed_location || 'XXXXXXX'}</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.onebox}>标准地址：</div>
            <div className={styles.threebox}>{tableTwoData?.street_township || 'XXXXXXX'}</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.onebox}>事件类别：</div>
            <div className={styles.twobox}>{tableTwoData?.event_category1 || 'XXXXXXX'}</div>
            <div className={styles.onebox}>{tableTwoData?.event_category2 || 'XXXXXXX'}</div>
            <div className={styles.twobox}>{tableTwoData?.event_category3 || 'XXXXXXX'}</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.onebox}>事项小类：</div>
            <div className={styles.twobox}>{tableTwoData?.event_category3 || 'XXXXXXX'}</div>
            <div className={styles.onebox}>XXXXXXX</div>
            <div className={styles.twobox}>XXXXXXX</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.onebox}>上报来源：</div>
            <div className={styles.twobox}>{tableTwoData?.reporting_source || 'XXXXXXX'}</div>
            <div className={styles.onebox}>XXXXXXX</div>
            <div className={styles.twobox}>XXXXXXX</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.onebox}>诉求人：</div>
            <div className={styles.twobox}>XXXXXXX</div>
            <div className={styles.onebox}>XXXXXXX</div>
            <div className={styles.twobox}>XXXXXXX</div>
          </div>
          <div className={styles.tablist}>
            <div className={styles.fourbox}>事件描述：</div>
            <div className={styles.fivebox}>{tableTwoData?.event_description || 'XXXXXXX'}</div>
          </div>
        </div>
        <div className={styles.img}>
          <img src={icon} alt=""></img>
        </div>
      </div>
      <div className={styles.btnbox}>
        <div className={styles.primary}>确认派发</div>
        <div className={styles.default} onClick={() => close()}>
          取消
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ tableModel }) {
  return {
    tableTwo: tableModel.tableTwo,
    tableTwoData: tableModel.tableTwoData,
  };
}

export default connect(mapStateToProps)(TabModel1);
