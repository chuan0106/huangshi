/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-useless-constructor */

import React from "react";
import styles from "./styles.less";
import { connect } from "dva";
import IPConfig from "@/constants/IPConfig";
import Iframe from 'react-iframe';
function mapStateToProps({ globalModel }) {
    return {
        globalModel: globalModel
    };
}
@connect(mapStateToProps)
class IframeConfig extends React.Component {
    constructor(props) {
        super(props);
    }
    //点击完成之后回调
    componentDidMount() {
        let myIframeObj = document.getElementById('myIframe');
        let overCenterObj = document.getElementById('overCenter');
        let laueryDomObj = document.getElementById('sxkj');
        //滑动事件
        overCenterObj.addEventListener(
            'mousemove',
            this.overCenterMousemoveFun.bind(this, myIframeObj, overCenterObj),
            false,
        );
        //划入事件
        overCenterObj.addEventListener(
            'mouseenter',
            this.overCenterMousemoveFun.bind(this, myIframeObj, overCenterObj),
            false,
        );
        //划出事件
        // overCenterObj.addEventListener(
        //     'mouseout',
        //     this.myMapCenterMousemoveFun.bind(this, myIframeObj, overCenterObj),
        //     false,
        // );

        //滑动事件
        laueryDomObj.addEventListener(
            'mousemove',
            this.myMapCenterMousemoveFun.bind(this, myIframeObj, overCenterObj),
            false,
        );
        //划入事件
        laueryDomObj.addEventListener(
            'mouseenter',
            this.myMapCenterMousemoveFun.bind(this, myIframeObj, overCenterObj),
            false,
        );
        //划出事件
        // laueryDomObj.addEventListener(
        //     'mouseout',
        //     this.overCenterMousemoveFun.bind(this, myIframeObj, overCenterObj),
        //     false,
        // );
    }
    overCenterMousemoveFun = (myIframeObj, overCenterObj) => {
        let { activeMenuItemName, noDevelopment } = this.props.globalModel;
        if (myIframeObj) {
            if (noDevelopment.indexOf(activeMenuItemName) > -1) {
                myIframeObj.style.pointerEvents = 'auto';
                overCenterObj.style.zIndex = 6;
            } else {
                myIframeObj.style.pointerEvents = 'none';
                overCenterObj.style.zIndex = -1;
            }
        }
    }
    myMapCenterMousemoveFun = (myIframeObj, overCenterObj, e) => {
        let { activeMenuItemName, activeDevelopment } = this.props.globalModel;
        if ((e.offsetX > 1520 || e.offsetX < 410) && activeDevelopment.indexOf(activeMenuItemName) < 0) {
            if (myIframeObj) {
                myIframeObj.style.pointerEvents = 'auto';
                overCenterObj.style.zIndex = 6;
            }
        }
    }
    render() {
        let { activeMenuItemID } = this.props;
        let { activeMenuItemName, activeDevelopment, rightBoxState, leftBoxState } = this.props.globalModel;

        return (<React.Fragment>
            <div className={styles.overCenter} id="overCenter"></div>
            <Iframe
                id='myIframe'
                url={IPConfig.IFrameUrl + activeMenuItemID}
                className={styles.iframe}
                display={activeDevelopment.indexOf(activeMenuItemName) < 0 ? 'block' : 'none'}
                position="relative"
            />
            {leftBoxState ? <div className={styles.left}> 左侧</div> : null}
            {rightBoxState ? <div className={styles.right}>右侧</div> : null}
        </React.Fragment>);
    }
}
export default IframeConfig;
