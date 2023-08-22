
import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { qswc } from './data';
function mapStateToProps ({ globalModel, globalMapModel, zhongdianchanyeModel }) {
    return {
        globalModel: globalModel,
        globalMapModel: globalMapModel,
        zhongdianchanyeModel: zhongdianchanyeModel
    };
}
@connect(mapStateToProps)
class TableBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qswcList: []
        };
    }
    //渲染前调用
    componentWillMount () {
        const newData = {
            ...qswc, where: {
                "mode": 1,
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0003",
                        "index": 3,
                        "alias": "qy",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0003",
                        "operator": 14,
                        "value": "黄石市"
                    }
                ]
            }
        }
        // 筛选数据
        this.props.dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newData,
                callback: this.getdata.bind(this)
            }
        })
    }

    getdata = (data) => {
        this.setState({
            qswcList:
        })
        console.log(data, 'changed');
    }

    //渲染后调用
    componentDidMount () {

    }

    //卸载时调用
    componentWillUnmount () { }

    componentDidUpdate (prevProps) {
        if (this.props.area !== prevProps.area) {
            console.log('Value changed:', this.props.area);

        }
    }



    render () {
        const { qswcList } = this.state;
        return (
            <React.Fragment>
                <div className={styles.normal}>

                </div>
            </React.Fragment>
        );
    }
}
export default TableBox;
