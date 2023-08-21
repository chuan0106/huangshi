import networkRequest from '@/utils/network/XSRquest';
import { configPath } from './servicePath';
export function getTableFieldService(params) {
  return networkRequest(configPath.getTableFeildPath, params, 'get');
}
//创建图层
export function createMapService(params, workspaceFilterStatus) {
  return networkRequest(configPath.createMapPath, params, 'post', workspaceFilterStatus);
}
//更新图层
export function updateMapService(params) {
  return networkRequest(configPath.updateMapPath, params, 'post');
}
//获取图层
export function getMapService(params) {
  return networkRequest(configPath.getMapPath, params, 'get');
}
//获取过滤地图数据
export function getMapDataService(params) {
  return networkRequest(configPath.getMapDataPath, params, 'postAutoGraph');
}
//获取某字段所有值
export function getFeildValuesService(params) {
  return networkRequest(configPath.getFeildValuesPath, params, 'post');
}
//获取地图风格样式
export function getMapStyleFun(params) {
  return networkRequest(configPath.mapStylePath, params, 'get');
}
//获取公共数据(需要从后端拿到钱请求的后半段路径)
export function getMapPublickDataServer(params, path) {
  return networkRequest(`${configPath.mapPublickData}${path}?`, params, 'get');
}
//通过ID获取地图风格的URL
export function getMapStyleMessageServer(params) {
  return networkRequest(configPath.mapStyleMessagePath, params, 'get');
}
//获取公共数据非POI类型的表头(上线删除掉)
export function getMapDataTabTitleServer(params) {
  return networkRequest(configPath.mapDataTabTitlePath, params, 'get');
}
//获取公共数据过滤地图数据(上线删除掉)
export function getMapPublickDataService(params) {
  return networkRequest(configPath.getMapPublickDataPath, params, 'post');
}
//获取分享对应的图层
export function getShareIdService(params) {
  return networkRequest(configPath.getShareIdPath, params, 'get');
}
//获取地区编码对应的面数据
export function getSpaceTypeDataService(params) {
  return networkRequest(configPath.getSpaceTypeDataPath, params, 'post');
}
//增加对应图层得关联图层
export function addDasLinkLayerService(params, workspaceFilterStatus) {
  return networkRequest(configPath.addDasLinkLayerPath, params, 'post', workspaceFilterStatus);
}
//更新关联图层
export function upDasLinkLayerService(params) {
  return networkRequest(configPath.upDasLinkLayerPath, params, 'post');
}
//删除关联图层
export function deleteDasLinkLayerService(params) {
  return networkRequest(configPath.deleteDasLinkLayerPath, params, 'get');
}
//查询对应得关联图层得详情
export function getDasLinkLayerService(params) {
  return networkRequest(configPath.getDasLinkLayerPath, params, 'get');
}
//获取基础图层所有关联图层
export function getAllDasLinkLayerService(params) {
  return networkRequest(configPath.getAllDasLinkLayerPath, params, 'get');
}
//获取所有图层
export function getAllMapLayerService(params) {
  return networkRequest(configPath.getAllMapLayerPath, params, 'get');
}
//新增关联图层
export function create_das_link_layer_style_service(params) {
  return networkRequest(configPath.create_das_link_layer_style_path, params, 'post');
}
//更新关联图层
export function update_das_link_layer_style_service(params) {
  return networkRequest(configPath.update_das_link_layer_style_path, params, 'post');
}
//删除关联图层样式风格
export function remove_das_link_layer_style_service(params) {
  return networkRequest(configPath.remove_das_link_layer_style_path, params, 'get');
}
// 复制图层组自身样式风格
export function copy_daslayer_service(params) {
  return networkRequest(configPath.copy_daslayer_path, params, 'get');
}
//复制关联图层自身样式风格
export function copy_das_link_layer_service(params) {
  return networkRequest(configPath.copy_das_link_layer_path, params, 'get');
}
//复制关联图层样式风格
export function copy_das_link_layer_style_service(params) {
  return networkRequest(configPath.copy_das_link_layer_style_path, params, 'get');
}
//批次更新图层样式z轴序
export function updateOrderLayerService(params) {
  return networkRequest(configPath.updateOrderLayerServicePath, params, 'post');
}
//获取飞行镜头列表
export function select_list_by_layer_id_Service(params) {
  return networkRequest(configPath.select_list_by_layer_id_Path, params, 'get');
}
//获取图层飞行相机组
export function select_das_camera_Service(params) {
  return networkRequest(configPath.select_das_camera_Path, params, 'get');
}
//新建图层飞行相机组
export function create_das_camera_Service(params) {
  return networkRequest(configPath.create_das_camera_Path, params, 'post');
}
//删除图层飞行相机组
export function remove_das_camera_Service(params) {
  return networkRequest(configPath.remove_das_camera_Path, params, 'get');
}
// 创建飞行镜头帧
export function create_das_camera_frame_Service(params) {
  return networkRequest(configPath.create_das_camera_frame_Path, params, 'post');
}
// 创建中心点飞行镜头帧
export function create_das_camera_center_frame_Service(params) {
  return networkRequest(configPath.create_das_camera_center_frame_Path, params, 'post');
}
//删除镜头帧
export function remove_das_camera_frame_Service(params) {
  return networkRequest(configPath.remove_das_camera_frame_Path, params, 'get');
}
//删除中心点镜头帧
export function remove_das_camera_center_frame_Service(params) {
  return networkRequest(configPath.remove_das_camera_center_frame_Path, params, 'get');
}

// 修改飞行相机组
export function update_das_camera_Service(params) {
  return networkRequest(configPath.update_das_camera_Path, params, 'post');
}
// 修改镜头帧
export function update_das_camera_frame_Service(params) {
  return networkRequest(configPath.update_das_camera_frame_Path, params, 'post');
}
// 修改中心点镜头帧
export function update_das_camera_center_frame_Service(params) {
  return networkRequest(configPath.update_das_camera_center_frame_Path, params, 'post');
}

//新建图层交互
export function addLayerInteractionService(params, workspaceFilterStatus) {
  return networkRequest(
    configPath.add_layer_interactionPath,
    params,
    'post',
    workspaceFilterStatus,
  );
}

//更新图层交互
export function updateLayerInteractionService(params, workspaceFilterStatus) {
  return networkRequest(
    configPath.update_layer_interactionPath,
    params,
    'post',
    workspaceFilterStatus,
  );
}

//获取图层交互详情
export function getLayerInteractionService(params) {
  return networkRequest(configPath.get_layer_interactionPath, params, 'get');
}

//删除图层交互配置
export function deleteLayerInteractionService(params) {
  return networkRequest(configPath.delete_layer_interactionPath, params, 'get');
}

//获取指定图层交互列表
export function listLayerInteractionService(params) {
  return networkRequest(configPath.list_layer_interactionPath, params, 'get');
}

//获取指定图层默认交互
export function defaultLayerInteractionService(params) {
  return networkRequest(configPath.default_layer_interactionPath, params, 'get');
}

//空间过滤
export function searchSignatureFilter(params) {
  return networkRequest(configPath.search_signature_filter, params, 'post');
}
