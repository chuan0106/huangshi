import HelmetTitle from '@/components/HelmetTitle';
import styles from './App.less'
import ThemeManage from './themeManage'; //业务组件
const App = () =>
{
    return (
        <div className={styles.normal}>
            <HelmetTitle title="黄石-工业概览" >
                <ThemeManage></ThemeManage>
            </HelmetTitle>
        </div>
    );
};
export default App