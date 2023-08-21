/*
 * @Version: 1.0
 * @Autor: yuchang
 * @Date: 2023-04-13 16:10:55
 * @LastEditors: yuchang
 * @LastEditTime: 2023-05-26 17:35:35
 * @Description: 
 */
import { Fragment } from 'react'
import styles from './styles.less';
import { connect } from 'dva';
import { DIframe } from '@/dacomponents/DCommon';
const Indexy = ({ menuName }) => {
    return (
        <Fragment>
            {
                (<div className={styles.normal}>
                    {/* 正常尺寸 */}
                    {/* <DIframe screenId={'f1352124a9044cca972168de405e5fd0'} width={2560} height={1080}></DIframe> */}
                    {/* 修改后的尺寸 */}
                    <DIframe screenId={'66a1a05777fc448a9ab0775bd64259e9'} menuName={menuName} width={2560} height={1080}></DIframe>
                </div>)}
        </Fragment>
    );
};
function mapStateToProps ({ }) {
    return {
    };
}
export default connect(mapStateToProps)(Indexy);
