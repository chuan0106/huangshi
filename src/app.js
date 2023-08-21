export const dva = {
    config: {
        onError (err)
        {
            err.preventDefault();
            console.error(err.message);
        },
    },
};


export function render (oldRender)
{
    // 登录
    // window.g_app.model({
    //   namespace: 'login',
    //   ...require('@/pages/DAFPages/Admin/Users/xmodels/login').default,
    // });

    // window.g_app.model({
    //   namespace: 'buildNewMapModel',
    //   ...require('@/afcomponents/AFMap.old/models/buildNewMapModel').default,
    // });
    // window.g_app.model({
    //   namespace: 'cameraFlightModel',
    //   ...require('@/afcomponents/AFMap.old/models/cameraFlightModel').default,
    // });

    window.g_app.model({
        namespace: 'homeModel',
        ...require('./pages/Home/xmodels/homeModel').default,
    });
    // 重点产业
    window.g_app.model({
        namespace: 'zhongdianchanyeModel',
        ...require('./pages/Zhongdianchanye/xmodels/zhongdianchanyeModel').default,
    });
    // 重点项目
    window.g_app.model({
        namespace: 'zhongdianxiangmuModel',
        ...require('./pages/Zhongdianxiangmu/xmodels/zhongdianxiangmuModel').default,
    });
    // // 重点企业
    window.g_app.model({
        namespace: 'zhongdianqiyeModal',
        ...require('@/pages/Zhongdianqiye/xmodels/zhongdianqiyeModal').default,
    });


    oldRender();
}
