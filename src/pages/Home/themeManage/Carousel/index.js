/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-06-04 19:04:48
 * @LastEditors: yuchang
 * @LastEditTime: 2023-06-04 22:24:06
 * @Description: 
 */
import React from 'react';
import { Carousel } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import { zdcp } from './data'
function mapStateToProps ({ globalModel, globalMapModel, zhongdianchanyeModel }) {
    return {
        globalModel: globalModel,
        globalMapModel: globalMapModel,
        zhongdianchanyeModel: zhongdianchanyeModel
    };
}
@connect(mapStateToProps)
class Carousels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cpList: []
        };
    }
    //渲染前调用
    componentWillMount () {
        const newCyData = {
            ...zdcp, where: {
                "conditions": [
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0007",
                        "index": 7,
                        "alias": "qy",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0007",
                        "operator": 14,
                        "value": "黄石市"
                    },
                    {
                        "unit": null,
                        "des": null,
                        "name": "f0001",
                        "index": 1,
                        "alias": "nd",
                        "anotherName": null,
                        "type": "String",
                        "key": "f0001",
                        "operator": 14,
                        "value": "202212"
                    }
                ]
            }
        }
        this.props.dispatch({
            type: 'zhongdianchanyeModel/getFindTable',
            payload: {
                params: newCyData,
                callback: this.getdata.bind(this)
            }
        })
    }

    getdata = (data) => {
        const groupSize = 4;

        // 将输入数组分组
        let groupedArray = [];
        for (let i = 0; i < data.length; i += groupSize) {
            groupedArray.push(data.slice(i, i + groupSize));
        }
        this.setState({
            cpList: groupedArray
        })
        console.log(data, groupedArray, 'datadatadatadatadata');

    }

    //渲染后调用
    componentDidMount () { }

    //卸载时调用
    componentWillUnmount () { }

    componentDidUpdate (prevProps) {
        if (this.props.area !== prevProps.area) {
            console.log('Value changed:', this.props.area);
            const newCyData = {
                ...zdcp, where: {
                    "conditions": [
                        {
                            "unit": null,
                            "des": null,
                            "name": "f0007",
                            "index": 7,
                            "alias": "qy",
                            "anotherName": null,
                            "type": "String",
                            "key": "f0007",
                            "operator": 14,
                            "value": this.props.area
                        },
                        {
                            "unit": null,
                            "des": null,
                            "name": "f0001",
                            "index": 1,
                            "alias": "nd",
                            "anotherName": null,
                            "type": "String",
                            "key": "f0001",
                            "operator": 14,
                            "value": "202212"
                        }
                    ]
                }
            }
            this.props.dispatch({
                type: 'zhongdianchanyeModel/getFindTable',
                payload: {
                    params: newCyData,
                    callback: this.getdata.bind(this)
                }
            })
        }
    }

    onChange = (currentSlide) => {
        console.log(currentSlide);
    }

    render () {
        const { cpList } = this.state;
        // 
        return (
            <React.Fragment>
                <div className={styles.normal}>
                    <Carousel autoplay dotPosition={'bottom'} afterChange={this.onChange}>
                        {
                            cpList?.map((item, index) => {
                                return (
                                    <div className={styles.box} key={index + 'cp'}>
                                        {item?.map((elem, inx) => {
                                            return (
                                                <div className={styles.boxSon} key={inx + 'cpSon'}>
                                                    <div className={styles.imgbox}>
                                                        <img style={{ width: '60px' }} src='http://58.19.254.210:7000/dataeye/v1/data/image/get?imageid=63f820c4b5b1ce707071cc2a' alt='图片' />
                                                    </div>
                                                    <div className={styles.rightBox}>
                                                        <div className={styles.name} title={elem?.f0004} >{elem?.f0004}</div>
                                                        <div className={styles.valueBox}>
                                                            <div className={styles.valueSon1} title={elem?.f0005}>{elem?.f0005}</div>
                                                            <div className={Number(elem?.f0006) > 0 ? styles.sjxTop : styles.sjx}></div>
                                                            <div className={styles.valueSon2} title={elem?.f0006}>{elem?.f0006}%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </React.Fragment>
        );
    }
}
export default Carousels;
