// 项目配置文件
import AntDesignThemePlugin from "antd-theme-webpack-plugin";
import path from "path";

export default config => {
  // if (
  //   process.env.NODE_ENV !== 'production'
  // ) {
  config.plugin("xskj-jsnt").use(AntDesignThemePlugin, [
    {
      antDir: path.join(__dirname, "../node_modules/antd"), //antd包位置
      stylesDir: path.join(__dirname, "../src/"), //指定皮肤文件夹
      varFile: path.join(__dirname, "../src/utils/xsTheme/variables.less"), //自己设置默认的主题色
      indexFileName: "index.html",
      mainLessFile: path.join(__dirname, "../src/utils/xsTheme/index.less"),
      // outputFilePath: path.join(__dirname, '../dist/theme/color.less'),//输出到什么地方
      outputFilePath: path.join(__dirname, "../.temp/xscolor.less"), //输出到什么地方
      // themeVariables: [ //这里写要改变的主题变量
      //   '@primary-color', // 全局主色
      //   '@link-color', // 链接色
      //   '@success-color', // 成功色
      //   '@warning-color', // 警告色
      //   '@error-color', // 错误色
      //   '@font-size-base', // 主字号
      //   '@heading-color', // 标题色
      //   '@text-color', // 主文本色
      //   '@text-color-secondary', // 次文本色
      //   '@disabled-color', // 失效色
      //   '@border-radius-base', // 组件/浮层圆角
      //   '@border-color-base', // 边框色
      //   '@box-shadow-base' // 浮层阴影
      // ],
      generateOnce: false,
      lessUrl: "https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js"
    }
  ]);
};
