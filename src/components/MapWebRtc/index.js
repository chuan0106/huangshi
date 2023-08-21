//项目中心通用项目表头
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
// require('./airCity/ac_conf.js');
// require('./airCity/ac.min.js');
// require('./airCity/ac_int_test.js');
function mapStateToProps({ globalModel }) {
    return { globalModel: globalModel };
}
@connect(mapStateToProps)
class MapWebRtc extends React.Component {
    constructor(props) {
        super(props);

    }

    //渲染前调用
    componentDidMount() {
        console.log(window, 'window');
        let {init} = window;
        if(!init){
            window.addEventListener("load", function () {
                window.init(true, false);
            }, true);
        }else{
            window.init(true, false);
        }
      

    }

    render() {
        return (
            <div className={styles.normal} >
                {/* <script type="text/javascript" async={true} src={'./airCity/ac_conf.js'}></script>
                <script type="text/javascript" async={true} src={'./airCity/ac.min.js'}></script>
                <script type="text/javascript" async={true} src={'./airCity/ac_int_test.js'}></script> */}
                <div className={styles.airCity} id='player'>

                </div>
            </div>
        );
    }
}
export default MapWebRtc;