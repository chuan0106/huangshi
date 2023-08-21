import IPConfig from "@/constants/IPConfig";
export const configPath = {
    testPath: IPConfig.userServiceDomainTest + "",//get

    Weather: IPConfig.Weather + "/tianqi",//get
    getSearchPath: IPConfig.YSPath + '/cloud-vision/scene_api/search_scene?', //get

    // 首次请求 全省-进规企业的数据
    getFirstTableData: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 全省-进规企业的数据
    getjinguiqiye: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 全省-工业增加值增速
    getgongyezengjiazhizengsu1: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 全省-工业投资增速
    getquanshenggongyetouzizengsu1: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 全省-工业技改投资增速
    getgongyejigaitouzi1: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 区县-工业总产值
    getgongyezongchanzhi: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 区县-工业增加值增速
    getgongyezengjiazhizengsu2: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 区县-工业投资增速
    getquanshenggongyetouzizengsu2: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 区县-工业技改投资增速
    getgongyejigaitouzi2: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search?',//get
    // 左上角图表-规上工业总产值及增速
    getguishanggongyezongchanzhijizengsu: IPConfig.datafusionServiceDomain + '/dataeye/v1/data/filter/signature_format_chart'  // post
};
