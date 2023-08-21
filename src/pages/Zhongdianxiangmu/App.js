import styles from './App.less'
import HelmetTitle from '@/components/HelmetTitle';

import ThemeManage from './themeManage'; //业务组件
const App = () =>
{
    return (
        <div>
            <HelmetTitle title="黄石-重点项目" >
                <ThemeManage></ThemeManage>
            </HelmetTitle>
        </div>
    );
};
export default App