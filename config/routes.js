//  ! 分辨率的问题还需调整 先不要删 还没决定留哪个

export default [
    // {
    //     path: '/',
    //     component: '../layouts/HomeLayout/index',
    //     routes: [
    //         { path: '/', redirect: '/home' },
    //         { path: '/home', name: '工业概览', component: './Home/App' },
    //         { path: '/zhongdianchanye', name: '重点产业', component: './Zhongdianchanye/App' },
    //         { path: '/zhongdianxiangmu', name: '重点项目', component: './Zhongdianxiangmu/App' },
    //         { path: '/zhongdianqiye', name: '重点企业', component: './Zhongdianqiye/App' },
    //     ]
    // },

    {
        path: '/',
        routes: [
            { path: '/', redirect: '/home' },
            {
                path: '/home',
                component: '../layouts/HomeLayout/index',
                routes: [
                    { path: '/home', name: '工业概览', component: './Home/App' },
                ],
            },
            {
                path: '/zhongdianchanye',
                // component: '../layouts/Category',
                component: '../layouts/HomeLayout/index',
                routes: [
                    { path: '/zhongdianchanye', name: '重点产业', component: './Zhongdianchanye/App' },
                ],
            },
            {
                path: '/zhongdianxiangmu',
                // component: '../layouts/Category',
                component: '../layouts/HomeLayout/index',
                routes: [
                    { path: '/zhongdianxiangmu', name: '重点项目', component: './Zhongdianxiangmu/App' },
                ],
            },
            {
                path: '/zhongdianqiye',
                // component: '../layouts/Category',
                component: '../layouts/HomeLayout/index',
                routes: [
                    { path: '/zhongdianqiye', name: '重点企业', component: './Zhongdianqiye/App' },
                ],
            },
        ],
    }
];
