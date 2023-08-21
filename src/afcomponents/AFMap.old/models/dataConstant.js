//我的、公共数据类型
export const dataTypeConstant = {
  POI_DATA: 'a85a1dbf-5f5b-480b-9e62-ffad25f513a3', //POI数据
  CITY_BOUNDARY_DATA: '20e03e70-1a2d-493e-91d6-0e6e81edbf0f', //城市边界
  TRAFFIC_DATA: '6c5cc5f15b344c53aa333ffa249715a9', //交通数据
  GEOGRAPHY_DATA: '41f75fe2fd57440cbf853a4adebd1d33', //基础地理数据
  ENTER_PERSON_DATA: '34983225-476a-40c2-bd6b-9a6217a0277f', //企业法人
  DEM_DATA: '40ea28a6-2db4-4178-a3a7-49d5452e7443', //DEM数据
  ENV_DATA: '44c64377-0a20-49d7-9b96-4c090910ff40', //环境数据
  DRID_DATA: '6661fa7e-7994-4576-a292-691a2a090395', //栅格数据
  PHONE_SIGNAL_DATA: '77ddb9d9-8e45-4d07-bf46-a5394f5b6ec6', //手机信令
  PLAN_DATA: 'd983330c-5706-4211-aa0f-bb064e3b2172', //规划数据
  HOUSE_PRICE_DATA: 'e18ab1f7-9d03-4208-9af3-5236ea0b0613', //房价数据
  POPULATION_MOVE_DATA: 'c2ff0293-5d7b-4d89-83f0-2437e1722447', //人口流动数据
  ENTERPRISE_DATA: '34983225-476a-40c2-bd6b-9a6217a0277f', //企业法人
};

export const dataManageTypeConstant = {
  MY_DATA: '1',
  PUBLIC_DADA: '2',
};

export function getTableHeight(type) {
  if (type === 1) {
    return 20;
  }
}

export const userParams = {
  get getTableHeight() {
    return getTableHeight;
  },
};

//数据管理search_type
export function DataSearchType(data) {
  let type;
  if (
    data.data_type === 'MySQL' ||
    data.data_type === 'MySql' ||
    data.dataType === 'MySQL' ||
    data.data_type === 'SqlServer' ||
    data.data_type === 'Postgresql' ||
    data.data_type === 'dm' ||
    data.data_type === 'oracle' ||
    data.data_type === 'Hive' ||
    data.data_type === 'KingbaseES' ||
    data.data_type === 'OSCAR' ||
    data.data_type === 'Qcubic' ||
    data.contentType === 'MySQL'
  ) {
    type = 2;
  } else if (data.data_type === 'api') {
    type = 3;
  } else if (data.data_type === 'model') {
    type = 5;
  } else {
    type = 1;
  }
  return type;
}
