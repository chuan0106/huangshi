// import * as exampleService from '../services/exampleService';
import * as zhongdianchanyeService from '../services/zhongdianchanyeService';
export default {
    namespace: 'zhongdianchanyeModel',

    state: {
        menuActive: '重点产业',
    },

    subscriptions: {
        setup ({ dispatch, history }) { },
    },

    effects: {
        /**
         * @method testEffect 测试服务请求
         *
         */
        // *getZhongdianchanyeTable ({ payload }, { call, put, select })
        // {
        //     let { params, callback } = payload;
        //     let res = yield call(zhongdianchanyeService.getFirstTableData, params);
        //     if (res.data.code === 0 && res.data.message === 'ok')
        //     {
        //         let data = res.data.data
        //         return callback(data)
        //     }
        // },
        *getMenuTable ({ payload }, { call, put, select })
        {
            console.log(payload, 'dsafasdasdqwed');
            let { params, callback } = payload;
            let res = yield call(zhongdianchanyeService.getMenuTableService, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
        *getFindTable ({ payload }, { call, put, select })
        {
            let { params, callback } = payload;
            console.log(params, callback, 'dsadwqeqwec');
            let res = yield call(zhongdianchanyeService.getFindTableService, params);
            if (res.data.code === 0 && res.data.message === 'ok')
            {
                let data = res.data.data
                return callback(data)
            }
        },
    },

    reducers: {
        //   当前主题ID
        setActiveThemeReducer (state, action)
        {
            state.activeTheme = action.payload;
            return { ...state };
        },

    },
};
