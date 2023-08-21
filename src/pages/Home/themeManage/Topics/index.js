import { useState, Fragment } from 'react';
import styles from './style.less'
import LineChart from './LineChart'
import Core from './Core'
import Modal from './Modal'
import { connect } from 'dva';
const Index = ({ activeLayerObj, Map, yearAndMonth }) =>
{
    const [modalData, setModalData] = useState(null)
    const modalHandler = (dataObj) =>
    {
        // 地图的弹窗 目前没数据 写死
        setModalData(dataObj)


        // if (dataObj === 1)
        // {
        //     setModalData({ name: '阳新县', number: 192 })

        // } else
        // {
        //     setModalData(null)
        // }

    }
    console.log(activeLayerObj, 'activeLayerObjactiveLayerObj');
    return (
        <Fragment>
            {/* <LineChart yearAndMonth={yearAndMonth} /> */}
            <Core modalHandler={modalHandler} />
            <div className={styles.modalWarp} style={{
                position: 'absolute',
                top: activeLayerObj.y - 20,
                left: activeLayerObj.x + 20,
            }} >
                {modalData && <Modal modalHandler={modalHandler} modalData={modalData} />}
            </div>

        </Fragment>
    );
};
function mapStateToProps ({ globalMapModel, homeModel })
{
    return {
        activeLayerObj: globalMapModel.activeLayerObj,
        Map: globalMapModel.mapObj,
        homeModel: homeModel,
        globalMapModel: globalMapModel
    }
}

export default connect(mapStateToProps)(Index);