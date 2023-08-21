/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月15日
 * @author lqq
 * @desc
 *
 */
//相数云
const logo_water = 'logo/logo_water@2x.png';
const logo_water_map = 'logo/logo.png';
const logo = 'logo/newlogo.png';
const logo_login = 'logo/logo_login@2x.png';
const logox = 'logo/iconlogo@2x.png';
const favicon = 'logo/favicon.png';
// import logo_water from '@/assets/common/logo_water@2x.png';
// import logo_water_map from '@/assets/NavgationControl/logo.png';
// import logo from '@/assets/logo/newlogo.png';
// import logo_login from '@/assets/newLogin/logo_login@2x.png';
// import logox from '@/assets/newFunction/iconlogo@2x.png';
// import favicon from '@/assets/common/favicon.png';
// import touming from '@/assets/common/touming.png';
export const privateType = ''; //1私有化 空为默认
export const projectType = {
    projectName: '', //开启外部配置
    // projectName: '相数云',
    // projectName: '家庭中心家庭大数据',
    type: 1, //1:DoCloud 2:docity
    screenSizeType: 2, // 1:浦口内网   2:浦口外网
};

export const logoSource = {
    favicon: favicon,
    logo_water: logo_water,
    logo_water_map: logo_water_map,
    logo: logo,
    logo_login: logo_login,
    logox: logox,
};
//分辨率配置
export const screenSize = {
    //浦口
    width: 1920,
    height: 1080,
    //探险家
    // width: 1920,
    // height: 1080,
    //淄博
    // width: 3840,
    // height: 1080,
};
export function screenRatio ()
{
    // alert(document.body.clientWidth / screenSize.width);
    return document.body.clientWidth / screenSize.width;
}
// dcp文件名(项目id)

