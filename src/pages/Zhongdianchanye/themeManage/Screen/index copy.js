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
                    {/* <DIframe screenId={'9f53c4134a6a41cfaab76e16e45db6d0'} params={yearAndMonth} width={2560} height={1080}></DIframe> */}
                    <DIframe screenId={'2802f059cfbb4be699b0c4bb2bebfff9'} params={yearAndMonth} width={2560} height={1080}></DIframe>
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
