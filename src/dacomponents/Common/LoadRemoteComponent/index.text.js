import LoadRemoteComponent from './index';
import Loading from './loading';

/**
 * delay 延迟加载组件，时间毫秒
 * loading 等待动画组件
 * js 组件js文件地址
 * css 组件css文件地址
 * componentProps 组件接收的参数
 */
export default () => {
  return (
    <div style={{ width: 300, height: 200, position: 'relative' }}>
      <LoadRemoteComponent
        delay={100}
        loading={<Loading color="#999" />}
        js={window.location.origin + '/remote-component/index.umd.js'}
        css={window.location.origin + '/remote-component/index.css'}
        componentProps={{
          text: 'Create React Library Example 😄',
        }}
      />
    </div>
  );
};
