/*
 * @version: V1.0.0
 * @Author: dengtao
 * @Date: 2022-01-19 18:06:57
 * @LastEditors: dengtao
 * @LastEditTime: 2023-03-03 14:49:18
 * @FilePath: \cloud\config\config.js
 * @Descripttion: 
 */
import pageRoutes from './routes';
import myTheme from '../src/utils/theme/antd';
// import px2rem from 'postcss-plugin-px2rem';
const umiPluginReact = [
    //umi包含插件
    'umi-plugin-react',
    {
        //压缩减少尺寸
        treeShaking: true,


        //路由配置
        // routes: [...routes, ...dafRoutes],
        // routes: routes,
        history: 'hash',
        //开启antd
        antd: true,
        // hd: true,
        //开启dva
        dva: {
            hmr: true,
        },
        //国际化
        locale: {
            enable: true, // default false
            default: 'zh-CN', // default zh-CN
            baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        // es5ImcompatibleVersions: true,
        // extraBabelIncludes: [
        //     "node_modules",
        // ],
        // extraPostCSSPlugins: [
        //   //https://www.npmjs.com/package/postcss-plugin-px2rem
        //   px2rem({
        //     rootValue: 12, //开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
        //     propBlackList: [
        //       // 'border',
        //       // 'border-top',
        //       // 'border-left',
        //       // 'border-right',
        //       // 'border-bottom',
        //       // 'border-radius',
        //       'font-size',
        //     ], //这些属性不需要转换
        //     // selectorBlackList: ['t_npx'], //以包含t_npx的class不需要转换
        //   }),
        // ],
        //动态加载路由相关配置
        dynamicImport: true,
    },
];

export default {
    plugins: [umiPluginReact],
    theme: myTheme,
    history: 'hash',
    publicPath: './',
    targets: {
        ie: 11,
    },
    minimizer: 'terserjs',
    // 路由配置
    routes: pageRoutes,
    //主题配置
    ignoreMomentLocale: true,
    manifest: {
        basePath: '/',
    },
    outputPath: './huangshi',
};
