``` js
/**
/**
 * delay 延迟加载组件，时间毫秒
 * loading 等待动画组件
 * js 组件js文件地址
 * css 组件css文件地址
 * componentProps 组件接收的参数
 */
export default () => {
  return (
    <LoadRemoteComponent
      delay={100}
      loading={<Loading color="#999" />}
      js="http://localhost:8003/remote-component/index.umd.js"
      css="http://localhost:8003/remote-component/index.css"
      componentProps={{
         text: 'Create React Library Example 😄',
      }}
    />;
  )
};
 ```