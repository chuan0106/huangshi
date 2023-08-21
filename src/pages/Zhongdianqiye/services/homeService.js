import networkRequest from '@/utils/network/XSRquest';
import { configPath } from "./servicePath";

export function getPointData (params)
{
    return networkRequest(configPath.getPointData, params, 'get');
}
