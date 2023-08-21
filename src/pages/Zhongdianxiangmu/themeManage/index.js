/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-04-13 16:10:55
 * @LastEditors: yuchang
 * @LastEditTime: 2023-05-23 16:48:59
 * @Description: 
 */
import { useState } from 'react';
import styles from './style.less'
import Screen from './Screen'
import Topics from './Topics'
import Mapmodel from '@/components/MapModel';
import NewIconLayer from '../components/IconLayer'
import Modal from './Modal'
import { connect } from 'dva';
import XzPolygonLayer from '../components/PolygonLayers';

const Index = ({ Map, activeLayerObj }) => {
    // menuName 首次加载的地图点位
    const [menuName, setMenuName] = useState('十大开工项目')
    // 某个项目点击获取的名称
    const [projectName, setProjectName] = useState(null)
    // 点位弹框数据
    const [mapModal, setMapModal] = useState(null)
    const menuNameHandler = (nameStr) => {
        setMenuName(nameStr)
    }
    const listNameHandler = (nameStr) => {
        console.log(nameStr, 'nameStrnameStr');
        setProjectName(nameStr)
    }
    // 修改地图点位弹窗数据
    const mapHandler = (modalObj) => {
        if (modalObj) {
            const newModalObj = {
                name: modalObj.properties.项目名称,
                place: modalObj.properties.建设地点,
                company: modalObj.properties.责任单位,
                time: modalObj.properties.开工时间,
                plan: modalObj.properties.计划安排,
                completed: modalObj.properties.计划竣工
            }
            setMapModal(newModalObj)
        } else {
            setMapModal(modalObj)
        }
    }
    return (
        <div className={styles.IframeWarp} id="IframeWarp">
            {/* <HeadSelect /> */}
            <Screen menuName={menuName} />
            <div className={styles.modalWarp} style={{
                position: 'absolute',
                top: activeLayerObj.y - 20,
                left: activeLayerObj.x + 20,
            }} >
                {mapModal && < Modal data={mapModal} ModalFun={mapHandler}
                />}
            </div>
            <div id="myMap" className={styles.myIframe1}>
                <Mapmodel initCallback={() => { }} />
                {Map && <NewIconLayer mapHandler={mapHandler} menuName={menuName} projectName={projectName} />}
                <XzPolygonLayer />

            </div>
            <Topics listNameHandler={listNameHandler} menuNameHandler={menuNameHandler} />
            <div className={styles.rightBox}>
                {menuName}
            </div>
        </div>

    );
};

function mapStateToProps ({ globalMapModel }) {
    return {
        Map: globalMapModel.mapObj,
        activeLayerObj: globalMapModel.activeLayerObj,
    }
}
export default connect(mapStateToProps)(Index);