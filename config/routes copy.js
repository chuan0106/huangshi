export default [
    // {
    //     path: '/two',
    //     component: '../layouts/Category',
    //     routes: [
    //         { path: '/two/zhongdianchanye', name: '重点产业', component: './Zhongdianchanye/App' },
    //         { path: '/two/zhongdianxiangmu', name: '重点项目', component: './Zhongdianxiangmu/App' },
    //         { path: '/two/zhongdianqiye', name: '重点企业', component: './Zhongdianqiye/App' },
    //         // { path: '/two/zhongdianqiye', name: '重点企业', component: () => import('./Zhongdianqiye/App') },
    //     ]
    // },
    {
        path: '/',
        component: '../layouts/HomeLayout/index',
        routes: [
            { path: '/', redirect: '/home' },
            { path: '/home', name: '全局概览', component: './Home/App' },
            { path: '/zhongdianchanye', name: '重点产业', component: './Zhongdianchanye/App' },
            { path: '/zhongdianxiangmu', name: '重点项目', component: './Zhongdianxiangmu/App' },
            { path: '/zhongdianqiye', name: '重点企业', component: './Zhongdianqiye/App' },
        ]
    },

    // {
    //     path: '/',
    //     routes: [
    //         { path: '/', redirect: '/home' },
    //         {
    //             path: '/home',
    //             component: '../layouts/HomeLayout/index',
    //             routes: [
    //                 { path: '/home', name: '重点产业', component: './Home/App' },
    //             ],
    //         },
    //         {
    //             path: '/zhongdianchanye',
    //             component: '../layouts/Category',
    //             routes: [
    //                 { path: '/zhongdianchanye', name: '重点产业', component: './Zhongdianchanye/App' },
    //             ],
    //         },
    //         {
    //             path: '/zhongdianxiangmu',
    //             component: '../layouts/Category',
    //             routes: [
    //                 { path: '/zhongdianxiangmu', name: '重点项目', component: './Zhongdianxiangmu/App' },
    //             ],
    //         },
    //         {
    //             path: '/zhongdianqiye',
    //             component: '../layouts/Category',
    //             routes: [
    //                 { path: '/zhongdianqiye', name: '重点企业', component: './Zhongdianqiye/App' },
    //             ],
    //         },
    //     ],
    // }
];
