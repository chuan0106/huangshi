//公共请求路径
import IPConfig from '@/constants/IPConfig';
export const configPath = {
    //获取导航菜单的数据
    menulist: IPConfig.doCloudService + '/dataeye/v1/app_menu/full_menu?',
    //请求底图服务的路径
    doCloudMapPath: IPConfig.doCloudService + '/hubble/common/v1/search_signature_filter'
};

