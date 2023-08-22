import networkRequest from '@/utils/network/XSRquest';
import { configPath } from "./servicePath";

/**
 * @class models/homeModel  effects函数内部统一调用
 * @method function 请求服务函数
 * @param params 统一为url参数
 * @return 返回json对象 里面包含......
 */

/**
 * 测试服务请求
 * @method testService
 * @for models/Home
 * @param {object}  params 参数集合
 * 详细参数说明
 * @param {string}  usercode
 * @return {object} Promise
 */
export function testService (params)
{
    // return networkRequest(configPath.testPath, params, "get");
}
export function getWeather (params)
{
    return networkRequest(configPath.Weather, params, "get");
}
//建信项目搜索
export function getSearchFun (params)
{
    return networkRequest(configPath.getSearchPath, params, 'get');
}

// 首次请求 全省-进规企业的数据
export function getFirstTableData (params)
{
    return networkRequest(configPath.getFirstTableData, params, 'get');
}

// 全省-进规企业
export function getjinguiqiye (params)
{
    return networkRequest(configPath.getjinguiqiye, params, 'get');
}


// 全省-工业增加值增速
export function getgongyezengjiazhizengsu1 (params)
{
    return networkRequest(configPath.getgongyezengjiazhizengsu1, params, 'get');
}

// 全省-工业投资增速
export function getquanshenggongyetouzizengsu1 (params)
{
    return networkRequest(configPath.getquanshenggongyetouzizengsu1, params, 'get');
}

// 全省-工业技改投资增速
export function getgongyejigaitouzi1 (params)
{
    return networkRequest(configPath.getgongyejigaitouzi1, params, 'get');
}


// 区县-工业总产值
export function getgongyezongchanzhi (params)
{
    return networkRequest(configPath.getgongyezongchanzhi, params, 'get');
}

// 区县-工业增加值增速
export function getgongyezengjiazhizengsu2 (params)
{
    return networkRequest(configPath.getgongyezengjiazhizengsu2, params, 'get');
}

// 区县-工业投资增速
export function getquanshenggongyetouzizengsu2 (params)
{
    return networkRequest(configPath.getquanshenggongyetouzizengsu2, params, 'get');
}


// 区县-工业技改投资增速
export function getgongyejigaitouzi2 (params)
{
    return networkRequest(configPath.getgongyejigaitouzi2, params, 'get');
}

// 左上角图表-规上工业总产值及增速
export function getguishanggongyezongchanzhijizengsu (params)
{
    return networkRequest(configPath.getguishanggongyezongchanzhijizengsu, params, 'postAutoGraph');
}
