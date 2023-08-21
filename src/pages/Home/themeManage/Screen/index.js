/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-03-15 18:24:58
 * @LastEditors: yuchang
 * @LastEditTime: 2023-05-23 10:51:59
 * @Description: 
 */
import { Fragment } from 'react'
import styles from './styles.less';
import { connect } from 'dva';
import { DIframe } from '@/dacomponents/DCommon';
const Indexy = ({ yearAndMonth, area }) => {
    return (
        <Fragment>
            {
                (<div className={styles.normal}>
                    <DIframe screenId={'a757819a1bea4810bf74c35f2cff0cca'} params={yearAndMonth} area={area} width={3520} height={1080}></DIframe>
                </div>)}
        </Fragment>
    );
};
function mapStateToProps ({ }) {
    return {
    };
}
export default connect(mapStateToProps)(Indexy);
