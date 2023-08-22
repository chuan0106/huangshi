import IPConfig from '@/constants/IPConfig';
export const configPath = {
  //创建map
  createMapPath: IPConfig.projectServiceDomain + '/dataeye/v1/daslayer/create', //get
  //更新map
  updateMapPath: IPConfig.projectServiceDomain + '/dataeye/v1/daslayer/update', //get
  //获取某daslayer
  getMapPath: IPConfig.projectServiceDomain + '/dataeye/v1/daslayer/get?', //get
  //获取过滤地图数据
  getMapDataPath: IPConfig.datafusionServiceDomain + '/hubble/common/v1/search_signature_filter',
  //获取某字段所有值
  getFeildValuesPath: IPConfig.projectServiceDomain + '/dataeye/v1/data/filter/sql',
  //获取地图风格样式
  mapStylePath: IPConfig.projectServiceDomain + '/dataeye/v1/map/list?',
  //获取公共数据
  mapPublickData: IPConfig.projectServiceDomain,
  //获取id对应的地图详情
  mapStyleMessagePath: IPConfig.projectServiceDomain + '/dataeye/v1/map/get?',
  //获取公共数据非POI类型的表头
  mapDataTabTitlePath: IPConfig.userServiceDomain + '/data/v1/find_properties?',
  //获取公共数据的过滤数据(上线后删掉)
  getMapPublickDataPath:
    IPConfig.datafusionServiceDomain + '/datafusion/common/v1/search_space_common?',
  //获取分享对应的图层数据
  //   getShareIdPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/daslayer/getbyshareurl?',
  getShareIdPath: IPConfig.datafusionServiceDomain + '/dataeye/v2/daslayer/getbyshareurl?',
  //获取地址编码对应的面图层的数据
  getSpaceTypeDataPath:
    IPConfig.datafusionServiceDomain +
    '/hubble/administrative_region/v/find_administrative_region?',
  //增加对应图层得关联图层
  addDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/add?',
  //更新关联图层
  upDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/update?',
  //删除关联图层
  deleteDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/delete?',
  //查询对应得关联图层得详情
  getDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/read?',
  //获取基础图层所有关联图层
  getAllDasLinkLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/list?',

  //新增服务2021-7.23
  //获取所有图层
  getAllMapLayerPath: IPConfig.datafusionServiceDomain + '/dataeye/v1/daslayer/full_detail?',
  //新增关联图层
  create_das_link_layer_style_path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/create', //post
  //更新关联图层
  update_das_link_layer_style_path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/update', //post
  //删除关联图层
  remove_das_link_layer_style_path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/remove?', //get
  //复制关联图层
  copy_daslayer_path: IPConfig.datafusionServiceDomain + '/dataeye/v1/daslayer/copy_as_style?', //get
  //复制关联图层组
  copy_das_link_layer_path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer/copy_as_style?', //get
  //复制关联图层
  copy_das_link_layer_style_path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/copy?', //get

  //移除关联图层
  getdetail_das_link_layer_style_path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/list_by_link_layer_id?', //get
  //读取相关图层
  read_das_link_layer_style_path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/read?',
  //批次更新图层样式z轴序
  updateOrderLayerServicePath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/batch_update_order',
  // 获取飞行镜头列表
  select_list_by_layer_id_Path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/list_by_layer_id?',
  // 查询图层飞行相机组
  select_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/read?',
  //新建图层飞行相机组
  create_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/create',
  //删除图层飞行相机组
  remove_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/remove?',
  //创建飞行镜头帧
  create_das_camera_frame_Path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_frame/create',
  // 创建中心点飞行镜头帧
  create_das_camera_center_frame_Path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_center_frame/create',
  // 删除镜头帧
  remove_das_camera_frame_Path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_frame/remove?',
  // 删除中心点镜头帧
  remove_das_camera_center_frame_Path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_center_frame/remove?',
  // 修改飞行相机组
  update_das_camera_Path: IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera/update',
  // 修改镜头帧
  update_das_camera_frame_Path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_frame/update',
  // 修改中心点
  update_das_camera_center_frame_Path:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_camera_center_frame/update',

  // 新增图层交互
  add_layer_interactionPath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/create', //post

  //更新图层交互
  update_layer_interactionPath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/update', //post

  //获取图层交互详情
  get_layer_interactionPath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/read?', //get

  //删除图层交互配置
  delete_layer_interactionPath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/remove?', //get

  //获取指定图层交互列表
  list_layer_interactionPath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/list?', //get

  //获取指定图层默认交互
  default_layer_interactionPath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_layer_interaction/default?', //get
  // 删除图层组的关联图层样式
  delLinkStylesPath:
    IPConfig.datafusionServiceDomain + '/dataeye/v1/das_link_layer_style/remove_by_link_layer_id?', //get
};
