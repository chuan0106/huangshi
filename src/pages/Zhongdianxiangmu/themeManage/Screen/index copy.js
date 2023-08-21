import { Fragment } from 'react'
import styles from './styles.less';
import { connect } from 'dva';
import { DIframe } from '@/dacomponents/DCommon';
const Indexy = () =>
{
    return (
        <Fragment>
            {
                (<div className={styles.normal}>
                    {/* <DIframe screenId={'f1352124a9044cca972168de405e5fd0'} width={2560} height={1080}></DIframe> */}
                    <DIframe screenId={'66a1a05777fc448a9ab0775bd64259e9'} width={2560} height={1080}></DIframe>
                </div>)}
        </Fragment>
    );
};
function mapStateToProps ({ })
{
    return {
    };
}
export default connect(mapStateToProps)(Indexy);
