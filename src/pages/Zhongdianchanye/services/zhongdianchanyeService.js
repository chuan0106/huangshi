import networkRequest from '@/utils/network/XSRquest';
import { configPath } from "./servicePath";
// 重点产业Table
export function getZhongdianchanyeTable (params)
{
    return networkRequest(configPath.getZhongdianchanyeTable, params, 'get');
}

export function getMenuTableService (params)
{
    console.log(params, 'paramsparamsdsadsad');
    return networkRequest(configPath.getZhongdianchanyeTable, params, 'get');
}

export function getFindTableService (params)
{
    console.log(params, 'paramsparamsdsadsad');
    return networkRequest(configPath.getFindTablePath, params, 'postAutoGraph');
}

