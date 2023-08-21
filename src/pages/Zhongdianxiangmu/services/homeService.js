import networkRequest from '@/utils/network/XSRquest';
import { configPath } from "./servicePath";

export function getPointData (params)
{
    return networkRequest(configPath.getPointData, params, 'get');
}
export function getMenuTableService (params)
{
    return networkRequest(configPath.getMenuTable, params, 'get');
}
