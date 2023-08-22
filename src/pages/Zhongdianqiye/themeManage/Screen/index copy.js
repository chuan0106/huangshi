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
                    {/* <DIframe screenId={'648c2f98c0ed47f0b1b7889f8284ae0f'} params={yearAndMonth} width={2560} height={1080}></DIframe> */}
                    <DIframe screenId={'80a5813edced46d2b092e615382d759a'} params={yearAndMonth} width={2560} height={1080}></DIframe>
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
