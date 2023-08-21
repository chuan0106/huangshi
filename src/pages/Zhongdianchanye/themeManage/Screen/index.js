/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-04-13 16:10:54
 * @LastEditors: yuchang
 * @LastEditTime: 2023-05-24 19:45:33
 * @Description: 
 */
import { Fragment } from 'react'
import styles from './styles.less';
import { connect } from 'dva';
import { DIframe } from '@/dacomponents/DCommon';
const Indexy = ({ yearAndMonth, area ,industry}) => {
    return (
        <Fragment>
            {
                (<div className={styles.normal}>
                    {/* 正常尺寸 */}
                    {/* <DIframe screenId={'9f53c4134a6a41cfaab76e16e45db6d0'} params={yearAndMonth} width={2560} height={1080}></DIframe> */}
                    {/* 修改后的尺寸 */}
                    <DIframe screenId={'2802f059cfbb4be699b0c4bb2bebfff9'} params={yearAndMonth} area={area} industry={industry} width={2560} height={1080}></DIframe>
                </div>)}
        </Fragment>
    );
};
function mapStateToProps ({ }) {
    return {
    };
}
export default connect(mapStateToProps)(Indexy);
