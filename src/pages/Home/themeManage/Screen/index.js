import { Fragment } from 'react'
import styles from './styles.less';
import { connect } from 'dva';
import { DIframe } from '@/dacomponents/DCommon';
const Indexy = ({ yearAndMonth }) =>
{
    return (
        <Fragment>
            {
                (<div className={styles.normal}>
                    <DIframe screenId={'a757819a1bea4810bf74c35f2cff0cca'} params={yearAndMonth} width={3520} height={1080}></DIframe>
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
