//公共请求
import networkRequest from '@/utils/network/XSRquest';
import { configPath } from './servicePath';
// 查询用户菜单权限
export function getMenuList (params)
{
    return networkRequest(configPath.menulist, params, 'get');
}
//请求相数云底图数据
export function getDoCloudMapServer (params)
{
    return networkRequest(configPath.doCloudMapPath, params, 'postAutoGraph');
}