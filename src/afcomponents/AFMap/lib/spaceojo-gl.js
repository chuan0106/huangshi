(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('!mapbox-gl'), require('@deck.gl/core'), require('@deck.gl/mapbox'), require('@deck.gl/layers'), require('@luma.gl/core'), require('@luma.gl/constants'), require('d3-scale'), require('deck.gl'), require('@deck.gl/aggregation-layers'), require('@deck.gl/geo-layers'), require('@deck.gl/mesh-layers'), require('style-object-to-css-string'), require('./3dLayers'), require('mapbox-gl')) :
  typeof define === 'function' && define.amd ? define(['exports', '!mapbox-gl', '@deck.gl/core', '@deck.gl/mapbox', '@deck.gl/layers', '@luma.gl/core', '@luma.gl/constants', 'd3-scale', 'deck.gl', '@deck.gl/aggregation-layers', '@deck.gl/geo-layers', '@deck.gl/mesh-layers', 'style-object-to-css-string', './3dLayers', 'mapbox-gl'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.spaceojoGl = {}, global.mapboxgl, global.core, global.mapbox, global.layers$1, null, global.GL, global.d3Scale, global.deck_gl, global.aggregationLayers, global.geoLayers, global.meshLayers, global.styleToCss, global.layers3D, global.mapboxgl$1));
})(this, (function (exports, mapboxgl, core, mapbox, layers$1, core$1, GL, d3Scale, deck_gl, aggregationLayers, geoLayers, meshLayers, styleToCss, layers3D, mapboxgl$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var mapboxgl__default = /*#__PURE__*/_interopDefaultLegacy(mapboxgl);
  var GL__default = /*#__PURE__*/_interopDefaultLegacy(GL);
  var styleToCss__default = /*#__PURE__*/_interopDefaultLegacy(styleToCss);
  var layers3D__namespace = /*#__PURE__*/_interopNamespace(layers3D);
  var mapboxgl__default$1 = /*#__PURE__*/_interopDefaultLegacy(mapboxgl$1);

  /* eslint-disable no-multi-spaces */

  /* eslint-disable semi */

  /* eslint-disable space-in-parens */

  /* eslint-disable padded-blocks */

  /* eslint-disable indent */

  /* eslint-disable space-before-blocks */

  /* eslint-disable no-trailing-spaces */

  /**
   * DoCity SDK @version 1.0.0
  **/

  /**
  *@enum {number} CommandType     渲染引擎执行指令类型
  *@readonly
  **/
  var DoCity = {}; //DoCity命名空间
  //引擎指令类型

  var CommandType = {
    //_______________engine ：0--49：引擎相关指令_______________________________________
    Engine_CreateNew: 1,
    //新建数字孪生工程
    Engine_Open: 2,
    //打开数字孪生工程
    Engine_Save: 3,
    //保存数字孪生工程
    Engine_SaveAs: 4,
    //另存数字孪生工程
    Engine_Close: 5,
    //关闭当前数字孪生工程
    Engine_ImportBaseData: 6,
    //导入数字孪生数据文件
    Engine_QueryVersion: 7,
    //查询引擎版本信息和当前exe程序的路径
    Engine_ImportDataSource: 8,
    //导入数据文件
    //Engine_OpenFileDialog: 8,        //打开文件对话框
    Engine_SetWindowState: 9,
    //设置窗口最大化最小化
    Engine_SceneLoader: 10,
    //场景加载完成回调
    Engine_Quit: 11,
    //退出exe
    Engine_ExcuteBPCommond: 12,
    // 运行蓝图命令
    //_______________client ：49--99：渲染客户端相关指令_______________________________________
    Client_QueryDataSources: 49,
    //查询当前工程加载的数据源信息
    Client_QueryScenes: 50,
    //查询当前工程加载的项目场景信息
    Client_QueryBases: 51,
    //查询当前工程中的城市底座场景信息
    Client_CreateNew: 52,
    //基于系统中加载的城市底座场景创建一个新的项目场景
    Client_Save: 53,
    //保存项目场景
    Client_SaveAs: 54,
    //将当前项目场景另存为一个新场景
    Client_Open: 55,
    //打开当前数字孪生项目中的一个项目场景
    Client_Close: 56,
    //关闭场景，同时停止对应的服务端渲染线程
    Client_StartRender: 57,
    //启动服务端渲染线程
    Client_StopRender: 58,
    //停止服务端渲染线程
    Client_QueryAction: 59,
    //查询当前客户端鼠标交互行为
    Client_SetAction: 60,
    //设置当前客户端鼠标及其他输入交互行为
    Client_QuerySceneList: 61,
    //获取项目场景名称列表
    Client_RemoveScene: 62,
    //删除指定项目场景，不能删除当前打开的场景
    Client_RenameScene: 63,
    //项目场景重命名
    //_______________layers ：100--199：图层相关指令_______________________________________
    Layers_QueryLayers: 100,
    //查询场景中所有的图层
    Layers_AddLayer: 101,
    //在场景中添加新的图层
    Layers_UpdateLayerProp: 102,
    //更新场景中指定图层的样式属性，支持整体更新和局部更新
    Layers_QueryLayerDatasource: 103,
    //查询场景中图层对应的数据源
    Layers_UpdateLayerDatasource: 104,
    //修改场景中图层对应的数据源
    Layers_QueryLayerSetting: 105,
    //查询图层基本设置
    Layers_UpdateLayerSetting: 106,
    //修改场景中图层基本设置
    Layers_QueryLayerLabels: 107,
    //查询场景中图层的标签
    Layers_UpdateLayerLabels: 108,
    //修改图层标签
    Layers_QueryLayerRenderMode: 109,
    //查询图层当前渲染模式，实景、水晶体、X光
    Layers_UpdateLayerRenderMode: 110,
    //修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式
    Layers_UpdateLayersRenderMode: 111,
    //批量修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式，可以根据图层类型（底座图层、动态图层）、图层标签进行批量修改
    Layers_RenameLayer: 112,
    //修改图层名称
    Layers_RemoveLayer: 113,
    //删除场景中的图层
    Layers_Focus: 114,
    //在特定相机距离聚焦到指定的图层
    //_______________coord ：200--299：坐标设置转换相关指令_______________________________________
    Coord_World2Screen: 200,
    //经纬度（世界）坐标转为屏幕坐标
    Coord_Screen2Wrold: 201,
    //屏幕坐标转为经纬度（世界）坐标
    Coord_Latlong2Wrold: 203,
    //经纬坐标转为世界坐标
    Coord_World2latlong: 204,
    //世界坐标转为经纬坐标
    //_______________editor ：300--399：编辑图层相关指令_______________________________________
    Editor_AddObject: 300,
    //在场景中添加新的几何对象
    Editor_QueryObjects: 301,
    //查询编辑图层中的对象,返回符合条件的对象基本信息列表，此处不返回对象完整信息，可以通过getObjects方法来获取对象完整的坐标和属性数据
    Editor_GetObjects: 302,
    //获取编辑图层中对象完整的坐标和属性信息
    Editor_UpdateObjects: 303,
    //更新一个或多个场景中的几何对象坐标和属性
    Editor_RemoveObjects: 304,
    //删除一个或多个场景中的几何对象
    Editor_Clear: 305,
    //清空编辑图层中的几何对象
    Editor_QueryLabels: 306,
    //查询编辑图层中对象的标签
    Editor_UpdateLabels: 307,
    //修改几何对象标签
    Editor_ShowObjects: 308,
    //让一个或多个场景中的几何对象可见
    Editor_ShowAll: 309,
    //让编辑图层中的几何对象全部可见
    Editor_HideObjects: 310,
    //隐藏一个或多个场景中的几何对象
    Editor_HideAll: 311,
    //隐藏编辑图层中的几何对象
    Editor_FocusObjects: 312,
    //在特定相机距离聚焦到指定的几何对象
    Editor_Focus: 313,
    //在特定相机距离整体聚焦到编辑图层
    Editor_QueryObjectData: 314,
    //查询编辑图层中对象的关联数据
    Editor_UpdateObjectData: 315,
    //修改几何对象关联数据
    Editor_SetEditTool: 316,
    //设置当前编辑工具,便于通过鼠标交互操作在场景中添加新的几何对象
    Editor_GetEditTool: 317,
    //获得编辑工具信息
    //_______________measure ：400--499：量算分析相关指令_______________________________________
    Measure_SetMeasureTool: 400,
    //设置当前量算工具
    Measure_GetMeasureTool: 401,
    //获得当前量算工具
    Measure_GetMeasureResult: 402,
    //获取当前量算结果
    Measure_Focus: 403,
    //聚焦到当前量算操作对象
    Measure_Highlight: 404,
    //高亮当前量算对象
    Measure_Finish: 405,
    //完成并当前量算，并结束当前测量动作，下次鼠标动作将展开一次新的量算
    Measure_Cancel: 406,
    //取消当前量算，重新开始新的量算
    Measure_Clear: 407,
    //清空所有量算对象
    //_______________selection ：500--599：选择集相关指令_______________________________________
    Selection_SetObjects: 500,
    //将特定图层上的对象填充到选择集中，设置为选择状态，在设置完选择集时，选择集中原有的对象将被自动清空
    Selection_GetObjects: 501,
    //获取选择集中的对象信息
    Selection_getObjectsData: 502,
    //获取选中对象的业务属性数据，如：名称、编码、地址等
    Selection_Focus: 503,
    //在特定相机距离整体聚焦到选择对象
    Selection_Highlight: 504,
    //高亮选中对象
    Selection_Animate: 505,
    //播放选中对象动画
    Selection_Decompose: 506,
    //对选中对象进行拆解，主要针对类似建筑物等具有复杂结构的三维模型
    Selection_Combine: 507,
    //对选中拆解对象进行合并还原，主要针对类似建筑物等具有复杂结构的三维模型
    Selection_Clear: 508,
    //清空选择集
    //_______________environment ：600--699：环境相关指令_______________________________________
    Environment_Save: 600,
    //将当前环境参数保存为场景的默认环境
    Environment_Restore: 601,
    //快速恢复到之前存储的环境设置，便于从场景快照、导览路线锁定的环境中快速恢复到场景默认环境
    Environment_Reset: 602,
    //重设场景的环境参数，将环境参数恢复到场景最初的状态
    Environment_QueryTimeSetting: 603,
    //查询并获取场景的时间设置
    Environment_UpdateTimeSetting: 604,
    //修改场景当前时间设置
    Environment_QueryWeatherMode: 605,
    //查询并获取场景的天气模式设置，主要包括晴天、阴天、多云天、雨天、雪天、沙尘暴
    Environment_UpdateWeatherMode: 606,
    //快速设置场景天气模式
    Environment_QueryLightSetting: 607,
    //查询并获取场景的光照参数
    Environment_UpdateLightSetting: 608,
    //设置场景光照参数
    Environment_QuerySunSetting: 609,
    //查询并获取场景的太阳参数
    Environment_UpdateSunSetting: 610,
    //设置场景太阳参数
    Environment_QueryMoonSetting: 611,
    //查询并获取场景的月亮参数
    Environment_UpdateMoonSetting: 612,
    //设置场景月亮参数
    Environment_QueryCloudSetting: 613,
    //查询并获取场景的云层参数
    Environment_UpdateCloudSetting: 614,
    //设置场景云层参数
    Environment_QueryFogSetting: 615,
    //查询并获取场景的雾参数
    Environment_UpdateFogSetting: 616,
    //设置场景雾浓度参数
    Environment_QueryRainSetting: 617,
    //查询并获取场景的下雨参数
    Environment_UpdateRainSetting: 618,
    //设置场景下雨参数
    Environment_QuerySnowSetting: 619,
    //查询并获取场景的下雪参数
    Environment_UpdateSnowSetting: 620,
    //设置场景下雪参数
    Environment_QueryScaningSetting: 621,
    //查询并获取场景扫描特效设置
    Environment_UpdateScaningSetting: 622,
    //设置场景扫描参数
    Environment_QueryFloatingParticlesSetting: 623,
    //查询并获取场景漂浮粒子特效设置
    Environment_UpdateFloatingParticlesSetting: 624,
    //设置场景漂浮粒子参数
    Environment_QueryRasingLineslesSetting: 625,
    //查询并获取场景上升线条特效设置
    Environment_UpdateRasingLineslesSetting: 626,
    //设置场景上升线条参数
    Environment_QueryTrafficflowSetting: 627,
    //查询并获取场景道路流动线特效设置
    Environment_UpdateTrafficflowSetting: 628,
    //设置场景道路流动线特效参数
    Environment_QueryDayandNightSetting: 629,
    //查询并获取白天黑夜场景切换相关参数
    Environment_UpdateDayandNightSetting: 630,
    //设置白天黑夜场景切换参数
    Environment_PalyDayandNight: 631,
    //播放白天黑夜场景
    //_______________camera：700--799：相机相关指令__________________________________________
    Camera_Reset: 700,
    //将相机位置复位到初始位置
    Camera_QueryLocation: 701,
    //查询并获取场景中相机当前位置
    Camera_SetLocation: 702,
    //设置相机在场景中的位置
    Camera_Focus: 703,
    //设置相机聚焦点到特定空间位置
    Camera_Rotate: 704,
    //围绕场景中心点旋转相机
    Camera_PlaySnapshot: 705,
    //将场景切换到快照位置   
    Camera_PlayTour: 706,
    //相机按指定场景漫游路线进行飞行漫游
    Camera_TakeSnapshot: 707,
    //当前场景拍照保存图片
    Camera_SetOperationType: 708,
    //设置相机操作模式，0为原有模式，1为第一人称模式 参数：{"type":1}
    Camera_GetOperationType: 709,
    //获取相机操作模式，0为原有模式，1为第一人称模式
    //_______________tours：800--899：导览路线相关指令_______________________________________
    Tours_QueryTours: 800,
    //查询场景中所有的导览路线
    Tours_AddTour: 801,
    //为当前场景添加导览路线  
    Tours_SetTourTime: 802,
    //设置更改导览路线漫游时间   
    Tours_RenameTour: 803,
    //修改导览路线名称       
    Tours_RemoveTour: 804,
    //删除场景中的导览路线       
    Tours_QuerySnapshots: 805,
    //查询特定导览路线中中所有的快照             
    Tours_AddSnapshot: 806,
    //在指定的导览路线中生成场景快照        
    Tours_UpdateSnapshot: 807,
    //更新导览路线中生成场景快照            
    Tours_RemoveSnapshot: 808,
    //删除导览路线中生成场景快照      
    Tours_RenameSnapshot: 809,
    //修改导览路线中快照名称
    //_______________component：900--999：控件相关指令_______________________________________
    Component_SetPosition: 900,
    //设置组件的屏幕位置
    Component_GetPosition: 901,
    //获取组件的屏幕位置
    Component_SetVisible: 902,
    //设置组件的可见性
    Component_GetVisible: 903,
    //获取组件的可见性
    Component_SetStyle: 904,
    //设置组件的样式
    Component_GetStyle: 905,
    //获取组件的样式
    //_______________utlity：1000--1099：实用工具相关指令_______________________________________
    Utility_QueryConfig: 1000,
    //查询平台配置信息
    Utility_UpdateConfig: 1001,
    //修改平台配置信息
    Utility_CustomFunction: 1002,
    //调用平台自定义函数，主要是导入UE工程中的蓝图函数
    Model_SetVisible: 1003,
    //根据tags设置静态模型的可见性
    Model_GetVisible: 1004 //根据tags获取静态模型的可见性

  };

  /* eslint-disable no-multi-spaces */

  /* eslint-disable semi */

  /* eslint-disable space-in-parens */

  /* eslint-disable padded-blocks */

  /* eslint-disable indent */

  /* eslint-disable space-before-blocks */

  /* eslint-disable no-trailing-spaces */

  /**
   * DoCity SDK @version 1.0.0
  **/
  //引擎指令类型
  var EventType = {
    //_______________events：2000--2099：事件类型_______________________________________
    Events_OnCommand: 2000,
    //命令执行返回消息
    Events_OnSystemMsg: 2001,
    //系统消息
    Events_OnPrjCreated: 2002,
    //完成工程新建
    Events_OnPrjOpened: 2003,
    //完成工程打开
    Events_OnPrjClosed: 2004,
    //工程被关闭
    Events_OnSceneCreated: 2005,
    //完成场景新建
    Events_OnSceneOpened: 2006,
    //完成场景打开
    Events_OnSceneClosed: 2007,
    //场景关闭
    Events_OnLayerAdded: 2008,
    //完成图层加载
    Events_OnLayerRemoved: 2009,
    //完成图层移除
    Events_OnLayerUpdated: 2010,
    //完成图层数据更新
    Events_OnLayerModified: 2011,
    //完成图层样式更新
    Events_OnClick: 2012,
    //触发鼠标点击事件
    Events_OnHover: 2013,
    //触发鼠标悬停
    Events_OnSelected: 2014,
    //触发目标拾取
    Events_OnCameraStartMoving: 2015,
    //触发相机开始运动
    Events_OnCameraStopMoving: 2016,
    //触发相机停止运动
    Events_OnFocused: 2017,
    //触发目标聚焦
    Events_OnObjectAdded: 2018,
    //完成对象添加
    Events_OnObjectDeleted: 2019,
    //完成对象删除
    Events_OnObjectModified: 2020,
    //完成对象修改
    Events_OnActionStart: 2021,
    //客户端操作行为开始执行时触发
    Events_OnActionFinished: 2022,
    //客户端操作行为完成时触发
    Events_OnActionCanceled: 2023,
    //客户端操作行为取消时触发
    Events_OnEdit: 2024,
    //触发对象编辑事件
    Events_OnMeasure: 2025 //触发量算操作事件

  }; //____________________________________________________________________________________________________
  //系统事件消息
  //系统命令执行状态反馈，返回命令编号和执行结果,result之后为指令自定义返回信息，具体参考每个对象方法说明

  var onCommandEvent = {
    type: 2000,
    //事件类型，Events_OnCommand=2000
    command: 2,
    //执行的引擎指令，Engine_CreateNew=1
    time: 3000,
    //执行时间，以毫秒为单位
    result: 1,
    //执行是否成功
    //以下为对象方法自定义返回数据
    prjName: 'd:\docity\project1.dcp' //打开数字孪生工程名

  };
  /**
   * 系统状态事件，通过SysMsgType定义，包括：服务连接成功；服务异常断开；服务关闭；服务连接超时；用户认证错误,具体消息类型如下：
   *    ConnectFail: - 1,     //服务连接失败或异常
   *    Disconnect: 0,       //服务连接断开
   *    Connected: 1,        //服务连接成功
   *    Timeout: 2,          //连接超时
   *    InValidateToken: 3,  //无效的Token,认证失
   *    EmptyInstanse: 4,    //服务端没有加载工程
   *    EngineException: 5,  //引擎运行异常
  **/

  var onSystemMsgEvent = {
    type: 2001,
    //Events_OnSystemMsg=2001
    sysmsgType: 1,
    //系统消息类型，参考SysMsgType
    message: 'connect to server 192.168.0.1:8080...' //系统反馈消息

  }; //____________________________________________________________________________________________________
  //____________________________________________________________________________________________________
  //工程及场景管理事件
  //项目创建成功事件

  var onPrjCreatedEvent = {
    type: 2002,
    //Events_OnPrjCreated=2002
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    prjName: 'project1.dcp' //新建的工程的名称

  }; // 完成工程打开事件

  var onPrjOpenedEvent = {
    type: 2003,
    //Events_OnPrjOpened=2003
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    prjName: 'project1.dcp' //要打开的工程的名称

  }; // 关闭工程事件

  var onPrjClosedEvent = {
    type: 2004,
    //Events_OnPrjClosed=2004
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    prjName: 'project1.dcp' //关闭的工程的名称

  }; //项目场景创建成功事件

  var onSceneCreatedEvent = {
    type: 2005,
    //Events_OnSceneCreated=2005
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    sceneName: 'scene1' //新建的场景的名称

  }; // 完成二三维场景打开事件

  var onSceneOpenedEvent = {
    type: 2006,
    //Events_OnSceneOpened=2006
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    sceneName: 'scene1' //场景的名称

  }; // 关闭二三维场景事件

  var onSceneClosedEvent = {
    type: 2007,
    //Events_OnSceneClosed=2007
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    sceneName: 'scene1' //场景的名称

  }; // 完成图层加载后触发，消息返回图层名称

  var onLayerAddedEvent = {
    type: 2008,
    //Events_OnLayerAdded=2008
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    layerName: 'layer1' //图层名称

  }; //完成图层移除后触发，消息返回图层名称

  var onLayerRemovedEvent = {
    type: 2009,
    //Events_OnLayerRemoved=2009
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    layerName: 'layer1' //图层名称

  }; //完成图层数据更新后触发，消息返回图层名称

  var onLayerUpdatedEvent = {
    type: 2010,
    //Events_OnLayerUpdated=2010
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    layerName: 'layer1' //图层名称

  }; //图层风格属性修改完成后触发，消息返回图层名称

  var onLayerModifiedEvent = {
    type: 2011,
    //Events_OnLayerModified=2011
    result: 1,
    //是否成功，_Success=1，_FAILED=0
    layerName: 'layer1' //图层名称

  }; //____________________________________________________________________________________________________
  //____________________________________________________________________________________________________
  //场景交互事件     
  //鼠标点击三维场景时触发，消息返回场景点击点的经世界坐标（x,y,z），以米为单位

  var onClickEvent = {
    type: 2012,
    //Events_OnClick=2012
    x: 112.3,
    //点击x坐标
    y: 23.02,
    //点击y坐标
    z: 100 //点击z坐标

  }; //鼠标在特定几何对象上方停留时触发，消息返回鼠标当前停留热点对象的图层id和对象id

  var onHoverEvent = {
    type: 2013,
    //Events_OnHover=2013
    layer: 'layer1',
    //图层名称
    id: '23' //对象id

  }; //选中场景中的对象时触发，消息返回选中对象的图层id和对象id

  var onSelectedEvent = {
    type: 2014,
    //Events_OnSelected=2014
    layer: 'layer1',
    //图层名称
    id: '23' //对象id

  }; //相机开始移动时触发，消息返回当前相机的位置、朝向

  var onCameraStartMovingEvent = {
    type: 2015,
    //Events_OnCameraStartMoving=2015
    location: {
      x: 116.3,
      y: 39.9,
      z: 1000.0,
      yaw: 45.0,
      pitch: 30.0
    }
  }; //相机停止移动时触发，消息返回当前相机的位置、朝向

  var onCameraStopMovingEvent = {
    type: 2016,
    //Events_OnCameraStopMoving=2016
    location: {
      x: 116.3,
      y: 39.9,
      z: 1000.0,
      yaw: 45.0,
      pitch: 30.0
    }
  }; //当相机完成聚焦到特定场景对象时触发，消息返回聚焦对象图层id，对象id和相机的位置、朝向

  var onFocusedEvent = {
    type: 2017,
    //Events_OnFocused=2017
    location: {
      x: 116.3,
      y: 39.9,
      z: 1000.0,
      yaw: 45.0,
      pitch: 30.0
    },
    layer: 'layer1',
    //图层名称
    ids: [23, 15] //聚焦对象id

  }; //在完成对象添加后触发，消息返回添加对象的id

  var onObjectAddedEvent = {
    type: 2018,
    //Events_OnObjectAdded=2018
    objectID: 10 //对象id

  }; //在完成对象删除后触发，消息返回添加对象的id

  var onObjectDeletedEvent = {
    type: 2019,
    //Events_OnObjectDeleted=2019
    objectID: 10 //对象id

  }; //在完成对象修改后触发，消息返回添加对象的id

  var onObjectModifiedEvent = {
    type: 2020,
    //Events_OnObjectModified=2020
    objectID: 10 //对象id

  };
  /**
  *在设定编辑、量算动作后，生成编辑量算对象后触发，事件返回Action的类型及当前操作对象
  *编辑:可在设置添加、修改对象动作后，场景进入对象编辑状态后触发，修改对象包括移动、旋转、缩放对象，
  *量算：可在设置量算动作后，场景进入量算状态后触发，量算包括距离、面积、高度、可视域、通视
  **/

  var onActionStartEvent = {
    type: 2021,
    //Events_OnActionStart=2021
    action: 10 //当前客户端操作行为，具体参考ActionType

  }; //当完成对象添加、修改或量算操作后触发，事件返回Action的类型及当前操作对象

  var onActionFinishedEvent = {
    type: 2022,
    //Events_OnActionFinished=2022
    action: 10 //当前客户端操作行为，具体参考ActionType

  }; //当取消当前场景操作动作后触发，事件返回Action的类型及当前操作对象

  var onActionCanceledEvent = {
    type: 2023,
    //Events_OnActionCanceled=2023
    action: 10 //当前客户端操作行为，具体参考ActionType

  }; //对象编辑事件，所编辑的对象发生变化时触发，如在添加、删除、修改多边形节点时将触发

  var onEditEvent = {
    type: 2024,
    //Events_OnEdit=2024
    objectID: 10 //对象id

  }; //在量算交互操作过程中触发，消息返回当前量算结果

  var onMeasureEvent = {
    type: 2025,
    //Events_OnMeasure=2025
    measureType: 1,
    //量算类型
    distance: 3500,
    //距离
    area: 100,
    //面积
    height: 500 //高度

  }; //____________________________________________________________________________________________________

  /* eslint-disable no-multi-spaces */

  /* eslint-disable semi */

  /* eslint-disable space-in-parens */

  /* eslint-disable padded-blocks */

  /* eslint-disable indent */

  /* eslint-disable space-before-blocks */

  /* eslint-disable no-trailing-spaces */

  /**
   * DoCity SDK @version 1.0.0
  ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
           ;00000C. :888ff:                                                                                       
        ;0001 ,C :880: ,88Ci           :8888888:.        ,88888888           ,88888888.    ,8,   :8              
      ;0001    :888;     ,888i         88      :88,    :88.      :88.      ,88,      ,88.        88              
    ;0001    :888:  G00    ,888;       88        88,  :8:          88.    :8:              :8f :88888.8:      :8,
   0001     808:    .000,    :Gf8      88         88 ;88           .88    88               ,8,   88   :8:    :8, 
   0Cf;     888,     000:    .G88      88         88 ;88           .88    88               ,8,   88    :8   ,8,  
    1L88i    :88   0000,    8888       88        :8,  88,          88,    :8,              ,8,   88     88  8:   
      i888;      0000,    8088         88      ,88.    :88.      :88.      ,88,      ,88,  ,8,   88     .8888    
        i088i  8000. :  8888           ,8888888:         ,88888888           .88888888,    ,8,   ::      ,80     
          1ffC000, :088888                                                                               :8.     
             ,,       .                                                                                 ,8,      
                                                                                                                 
  *@copyright  ©2021 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有  
  ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  *DoObjects：定义了引擎、各类图层、几何对象及其他枚举类型
  *taody.2021.1.10
  **/

  /**
   * @enum {number} EngineType DoCity支持的前端渲染引擎类型
   * @readonly
   * @property EmptyEngine          空引擎
   * @property TestEngine           测试引擎
   * @property Spaceojo_Map         二维地图渲染引擎
   * @property Spaceojo_Web3D       三维WebGL渲染引擎
   * @property Spaceojo_CloudRender 云渲染引擎
   **/
  var EngineType = {
    EmptyEngine: 0,
    TestEngine: 1,
    Spaceojo_Map: 2019,
    Spaceojo_Web3D: 2020,
    Spaceojo_CloudRender: 2021
  };
  /**
   *@enum {number} MoveMode 相机移动类型
   *@readonly
   *@member Fly      飞行切换
   *@member Switch   直接快速切换
   **/

  var MoveMode = {
    Fly: 0,
    Switch: 1
  };
  /**
   *@enum {number} LayerType 图层类型
   *@readonly
   *@member BaseLayer            基础场景图层，不支持动态添加、修改、删除，仅支持显示/隐藏等基本图层属性控制
   *@member PointLayer           散点图层，简单的点对象，支持颜色、大小、发光等属性
   *@member LabelLayer           标签图层，提供图标、文字、背景框、图标和锚点牵引线等属性
   *@member BoardLayer           标牌图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member HeatMapLayer         热力图图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member ColomnLayer          柱状图层，提供柱子形状、粗细、基准高度、高度比例、自发光等属性
   *@member PolyLineLayer        线图层，提供线的颜色、粗细、线型、流动风格等属性
   *@member PolygonLayer         区域面图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member GridLayer            网格图层，提供网格颜色，边线颜色、网格高度等属性
   *@member ODLayer              OD飞线图层，提供文字、背景框、标题栏 、牵引线等属性
   *@member RadiationLayer       放射物图层，提供放射物样式、颜色、透明度、辐射半径、发射频率、消隐时长等属性
   *@member ModelSymbolLayer     三维模型符号图层，提供符号大小、旋转、发光、动画等属性
   *@member RTSignalLayer        实时信号图层，展示实时信号的触发到消隐的过程，提供信号样式、颜色、粗细、消隐时间等属性
   *@member RTTrackLayer         实时轨迹图层，展示实时移动目标一定时间内的随时间变化的空间轨迹，提供轨迹的目标样式（符号样式、颜色、大小）和轨迹样式（颜色、粗细、跟踪时间）等属性
   *@member WMSLayer             OGC标准WMS图层
   *@member WMTSLayer            OGC标准WMTS图层
   *@member IconLayer            图标图层
   *@member EditLayer    			   自由编辑图层
   *@member ClusterLayer         聚合点图层
   *@member HexagonLayer         六边形图层
   *@member Arc                  弧图层
   *@member GreatCircle          大圆弧图层
   *@member Text                 文本图层
   *@member FlyingLine           飞线图层
   *@member AnimationIcon        动画图标图层
   *@member Marker               标签图层
   *@member Line                 线图层渲染连接源点和目标点
   **/

  var LayerType = {
    EmptyLayer: 0,
    BaseSceneLayer: 1,
    BaseLayer: 2,
    PointLayer: 3,
    LabelLayer: 4,
    BoardLayer: 5,
    HeatMapLayer: 6,
    ColomnLayer: 7,
    PolyLineLayer: 8,
    PolygonLayer: 9,
    GridLayer: 10,
    ODLayer: 11,
    MotionEffectLayer: 12,
    ModelSymbolLayer: 13,
    RTSignalLayer: 14,
    RTTrackLayer: 15,
    WMSLayer: 16,
    WMTSLayer: 17,
    EditLayer: 18,
    IconLayer: 19,
    HexagonLayer: 20,
    RadiationLayer: 21,
    ClusterLayer: 22,
    Arc: 23,
    GreatCircle: 24,
    Text: 25,
    FlyingLine: 26,
    AnimationIcon: 27,
    Marker: 28,
    Line: 29
  };
  /**
   *@enum {number} BaseLayerType 城市底座图层类型
   *@description 当前版本设计暂不考虑在客户端提供城市底座图层（BaseLayer）的操作接口
   *后续版本会考虑通过queryBaseLayers、setBaseLayerProperty等接口支持对城市底座图层进行配置和操作
   *@readonly
   *@member Terrain            地形
   *@member Image              影像
   *@member Ground             地面
   *@member Road               道路
   *@member Building           建筑物
   *@member Vegetation         植被
   *@member Water              水面
   *@member OCean              海洋
   *@member Boundary           边界
   *@member POI                地标
   *@member Models             手工建筑模型
   *@member Facility           基础设施
   *@member Osgb               实景三维数据
   *@member PointCloud         点云数据
   *@member BIM                建筑信息模型
   **/

  var BaseLayerType = {
    Terrain: 2000,
    Image: 2001,
    Ground: 2002,
    Road: 2003,
    Building: 2004,
    Vegetation: 2005,
    Water: 2006,
    OCean: 2007,
    Boundary: 2008,
    POI: 2009,
    Models: 2010,
    Facility: 2011,
    Osgb: 2012,
    PointCloud: 2013,
    BIM: 2014
  };
  /**
   *@enum {number} GeometryType 几何对象类型
   *@readonly
   *@member Empty                将当前几何对象设置为空
   *@member Point                点，二维点对象（贴地面绘制），支持样式、颜色、大小、发光等属性
   *@member Label                标签，提供文字、背景框、图标和锚点牵引线等属性
   *@member Board                标牌，提供文字、背景框、标题栏 、牵引线等属性
   *@member PolyLine             折线线，提供线的颜色、粗细、线型、流动样式等属性
   *@member Polygon              区域面，提供文字、背景框、标题栏 、牵引线等属性
   *@member OD                   OD，提供OD点、OD线颜色、样式等属性
   *@member Radiation            放射物，提供放射物样式、颜色、透明度、辐射半径、发射频率、消隐时长等属性
   *@member Model                三维模型，提供符号大小、旋转、发光、动画等属性
   *@member HighLightAera        高亮区域，提供亮度、颜色等属性
   *@member Picture              图片，提供图片空间位置、缩放、旋转透明度等属性
   *@member Video                视频，提供视频空间位置、缩放、旋转透明度等属性
   **/

  var GeometryType = {
    Empty: 0,
    Point: 1,
    Label: 2,
    Board: 3,
    PolyLine: 7,
    Polygon: 8,
    OD: 9,
    Radiation: 11,
    Model: 12,
    HighLightAera: 20,
    Picture: 30,
    Video: 40
  };
  /**
   *@enum {number} LineType 线类型
   *@readonly
   *@member PolyLine             普通折线
   *@member Spline               样条曲线
   **/

  var LineType = {
    PolyLine: 0,
    Spline: 1
  };
  /**
   *@enum {number} LineStyle     线样式
   *@readonly
   *@member Solid                普通线   ————————
   *@member Arrow                流动箭头  >>>>>>>
   *@member DashArrow            冲击箭头  - - - ->
   *@member Dot                  点线      ● ● ● ●
   *@member DashDot              冲击点    --●--●--●
   *@member FlowLine             流动线    ≡≡≡≡≡≡≡≡≡  带轨道，随流动方向透明度渐弱，边缘发光
   *@member Beam                 光流      ▫▫▫▫▪▪▪▪  随着流动方向透明度减弱，边缘发光
   **/

  var LineStyle = {
    Solid: 0,
    Arrow: 1,
    DashArrow: 2,
    Dot: 3,
    DashDot: 4,
    FlowLine: 5,
    Beam: 6
  };
  /**
   *@enum {number} PolygonType   区域面类型
   *@readonly
   *@member Hollow            空心区域，没有顶，也没有底
   *@member Cover             顶部覆盖区域，多边形顶部填充，形状类似盖子
   *@member Sunken            底部覆盖区域，多边形底部填充，形状类似于凹槽
   **/

  var PolygonType = {
    Hollow: 0,
    Cover: 1,
    Sunken: 2
  };
  /**
   *@enum {number} FillStyle  区域面填充样式
   *@readonly
   *@member Solid             实填充     ■■■■■■■■■■■■
   *@member SolidOutLine      轮廓实填充 ‡‡‡‡‡‡‡‡‡‡‡‡
   *@member OutLine           轮廓       ▪══════════▪
   *@member Gradient          渐变       △△△△△△△
   *@member FlowGradient      流动渐变   △△△△△△△
   *@member RotateGradient    旋转渐变   △△△△△△△
   *@member Stripe            条纹      ============
   *@member FineRipple        细波纹    ≈≈≈≈≈≈≈≈≈≈≈≈
   *@member WideRipple        宽波浪    ≈≈≈≈≈≈≈≈≈≈≈≈
   *@member ScanLine          扫描线    ┃||┃||┃||┃||┃
   *@member Grid              网格      ♯♯♯♯♯♯♯♯♯♯♯♯
   *@member Direction         方向符    》》》》》》》
   *@member Dot               点        ● ● ● ● ● ● ●
   *@member Twill             斜纹      /////////////
   *@member FlowTwill         流动斜纹  /////////////
   *@member Arrow             箭头      → → → → → → →
   **/

  var FillStyle = {
    Solid: 0,
    SolidOutLine: 1,
    OutLine: 2,
    Gradient: 3,
    FlowGradient: 4,
    RotateGradient: 5,
    Stripe: 6,
    FineRipple: 7,
    WideRipple: 8,
    ScanLine: 9,
    Grid: 10,
    Direction: 11,
    Dot: 12,
    Twill: 13,
    FlowTwill: 14,
    Arrow: 15
  };
  /**
   *@enum {number} RadiationStyle  放射物样式
   *@readonly
   *@member Ripple            涟漪
   *@member SquareWave        方波
   *@member RadarWave         雷达波
   *@member Ray               射线
   *@member Target            锁定目标
   *@member Location          定位点
   *@member Fire              火焰
   *@member fountain          喷泉
   *@member Storm             风暴
   *@member Cone              椎体
   *@member Pyramid           金字塔
   **/

  var RadiationStyle = {
    Ripple: 1,
    SquareWave: 2,
    RadarWave: 3,
    Ray: 4,
    Target: 5,
    Location: 6,
    Fire: 7,
    fountain: 8,
    Storm: 9,
    Cone: 10,
    Pyramid: 11
  };
  /**
   *@enum {number} HighlightStyle  高亮区样式
   *@readonly
   *@member CenterHight       仅高亮中心区域
   *@member BlurOutside       高亮中心同时，模糊周边
   **/

  var HighlightStyle = {
    CenterHight: 1,
    BlurOutside: 2
  };
  /**
   *@enum {number} VideoType  视频类型
   *@readonly
   *@member VideoFile     视频文件
   *@member Stream        流媒体
   **/

  var VideoType = {
    VideoFile: 1,
    Stream: 2
  };
  /**
   *@enum {number} RTTargetType  实时目标点类型
   *@readonly
   *@member Point        用点符号来表达实时目标点
   *@member Model        用模型来表达实时目标点
   **/

  var RTTargetType = {
    Poin: 1,
    Model: 2
  };
  /**
   *@enum {number} HeatMapStyle  热力样式
   *@readonly
   *@member Solid         颜色填充
   *@member Dotted        点状填充
   *@member SolidDotted   混合填充
   **/

  var HeatMapStyle = {
    Solid: 0,
    Dotted: 1,
    SolidDotted: 3
  };
  /**
   *@enum {number} LatticeStyle  热图中点阵形状
   *@readonly
   *@member CircleDot      圆点
   *@member SquareDot      方点
   **/

  var LatticeStyle = {
    CircleDot: 0,
    SquareDot: 1
  };
  /**
   *@enum {number} ODPointStyle  OD点样式
   *@readonly
   *@member SolidPoint       实心点
   *@member Radiation        辐射圈
   **/

  var ODPointStyle = {
    SolidPoint: 0,
    Radiation: 1
  };
  /**
   *@enum {number} ODLineStyle  OD线样式
   *@readonly
   *@member Solid3D     三维实线
   *@member Dash3D      三维虚线
   *@member Solid2D     二维实线
   *@member Dash2D      二维虚线
   **/

  var ODLineStyle = {
    Solid3D: 0,
    Dash3D: 1,
    Solid2D: 2,
    Dash2D: 3
  };
  /**
   *@enum {number} CoordinateType 坐标系类型
   *@readonly
   *@member WGS84      经纬度坐标
   *@member World      世界坐标，以米为单位
   **/

  var CoordinateType = {
    WGS84: 0,
    World: 1
  };
  /**
   *@enum {number} ActionType 操作行为类型
   *@readonly
   *@member Pan         漫游模式，不支持鼠标拾取
   *@member PanSelect   漫游选取模式，支持漫游同时可用鼠标拾取对象
   *@member AddObject   新加对象模式，在场景中绘制新对象
   *@member EditObject  编辑对象模式，在场景中修改选中对象
   *@member Measure     量算分析模式，
   **/

  var ActionType = {
    Pan: 0,
    PanSelect: 1,
    AddObject: 2,
    EditObject: 3,
    Measure: 4
  };
  /**
   *@enum {number} MeasureType 编辑几何对象类型
   *@readonly
   *@member Distance      距离
   *@member Aera          面积
   *@member Height        高度
   *@member LineOfSight   通视
   *@member Viewshed      可视域分析
   *@member Excavation    开挖
   **/

  var MeasureType = {
    Empty: -1,
    Distance: 0,
    Aera: 1,
    Height: 2,
    Lineofsight: 3,
    Viewshed: 4,
    Excavation: 5
  };
  /**
   * @enum {number} RenderModeType 二三维场景渲染模式
   * @readonly
   * @property RealMode     真实模式
   * @property XRayMode     X光模式
   * @property CrystalMode  水晶体模式
   **/

  var RenderModeType = {
    RealMode: 0,
    XRayMode: 1,
    CrystalMode: 2
  };
  /**
   * @enum {number} AnimationMode 几何对象动画模式
   * @readonly
   * @property None     停止或清除动画效果
   * @property Flicker  闪烁模式，选中对象循环显隐切换
   * @property Zoom     缩放模式，选中对象大小循环变化
   * @property Fade     淡出模式，选中对象可见性随时间变化
   * @property Growing  生长模式，选中对象由小到大，由矮变高
   **/

  var AnimationMode = {
    None: -1,
    Flicker: 0,
    Zoom: 1,
    Fade: 2,
    Growing: 3
  };
  /**
   * @enum {number} DecomposeStyle 建筑等复杂结构模型插接方式
   * @readonly
   * @property Horizental     横向分解
   * @property Vertical       纵向分解
   * @property Explode        炸开
   **/

  var DecomposeStyle = {
    Horizental: 0,
    Vertical: 1,
    Explode: 2
  };
  /**
   * @enum {number} HighlightMode 高亮模式
   * @readonly
   * @property None        正常选中，不带附加特效
   * @property Glow        边缘发光
   * @property Emitter     边缘动态光，发光强度循环动态变化
   * @property Outline     轮廓线
   **/

  var HighlightMode = {
    None: -1,
    Glow: 0,
    Emitter: 1,
    Outline: 2
  };
  /**
   * @enum {number} FillMode X光、水晶体填充模式
   * @readonly
   * @property Solid      实填充
   * @property Gradient   渐变填充
   * @property Grid       网格填充
   **/

  var FillMode = {
    Solid: 0,
    Gradient: 1,
    Grid: 2
  };
  /**
   * @enum {number} WeatherMode 天气模式，包括晴天、阴天、多云天、雨天、雪天、雾天
   * @readonly
   * @property Custom          非系统预定义天气，当用户手动调整环境参数后，系统会将weatherMode设置为custom
   * @property SunnyDay        晴天
   * @property CloudyDay       阴天
   * @property RainyDay        雨天
   * @property SnowyDay        雪天
   * @property FoggyDay        雪天
   **/

  var WeatherMode = {
    Custom: 0,
    SunnyDay: 1,
    CloudyDay: 2,
    RainyDay: 3,
    SnowyDay: 4,
    FoggyDay: 5
  };
  /**
   *@enum {number} LayersQueryMode  图层的查询方式
   *@readonly
   *@member AllLayers             查询所有图层
   *@member DynamicLayersOnly     只查询动态图层
   *@member BaseLayersOnly        只查询底座图层
   **/

  var LayersQueryMode = {
    AllLayers: 0,
    DynamicLayersOnly: 1,
    BaseLayersOnly: 2
  };
  /**
   *@enum {number} DataSourceType  引擎支持的动态图层数据源格式类型
   *@readonly
   *@member GeoJSON             GeoJSON格式，支持本地文件和DoSpace在线服务
   *@member CSV                 CSV格式，仅支持本地文件
   *@member Stream              二进制流式数据，仅支持通过DoSpace在线服务接入
   *@member WebSocket           基于网络套接字的实时推送接口，仅支持通过DoSpace在线服务接入
   **/

  var DataSourceType = {
    GeoJSON: 0,
    CSV: 1,
    Stream: 2,
    Socket: 4
  };
  /**
   *@enum {number} SysMsgType 系统消息枚举类型
   *@readonly
   *@property ConnectFail 服务连接失败或异常断开
   *@property Disconnect  服务连接断开
   *@property Connected   服务连接成功
   *@property Timeout     连接超时
   *@property InValidateToken   无效的Token,认证失败
   *@property EmptyInstanse     服务端没有加载工程文件
   *@property EngineException   引擎运行异常
   **/

  var SysMsgType = {
    ConnectFail: -1,
    //服务连接失败或异常断开
    Disconnect: 0,
    //服务连接断开
    Connected: 1,
    //服务连接成功
    Timeout: 2,
    //连接超时
    InValidateToken: 3,
    //无效的Token,认证失败
    EmptyInstanse: 4,
    //服务端没有加载工程文件
    EngineException: 5 //引擎运行异常

  };
  /**
   *@enum {number} ComponentType 组件类型
   *@readonly
   *@member Compass       指北针
   *@member OverviewMap   总览地图
   *@member Scale         比例尺
   **/

  var ComponentType = {
    Compass: 1,
    OverviewMap: 2,
    Scale: 3
  };
  /**
   *@enum {number} TourMode 导览模式
   *@readonly
   *@member FullTour       全程导览，根据导览路线进行整体时间插值，按照全程统一时长进行导览
   *@member SegmentedTour  分段导览，每一个快照分别设置运动时长和停留时长
   **/

  var TourMode = {
    FullTour: 0,
    SegmentedTour: 1
  };
  /**
   *@enum {number} AlignStyle 组件对齐方式
   *@readonly
   *@member Top             顶部对齐
   *@member Bottom          底部对齐
   *@member Left            左边对齐
   *@member Right           右边对齐
   *@member TopCenter       上部对齐
   *@member BottomCenter    底部对齐
   **/

  var AlignStyle = {
    LeftTop: 1,
    LeftBottom: 2,
    RightTop: 3,
    RightBottom: 4,
    TopCenter: 5,
    BottomCenter: 6
  };
  /**
   *@enum {number} TextAnchor 文本锚点
   *@readonly   
   
    *@member UpperLeft   文本被固定在左上角。
    *@member UpperCenter 文本被固定在上方，并水平居中。
    *@member UpperRight  文本被固定在右上角。
    *@member MiddleLeft  文本被固定在左侧，并垂直居中。
    *@member MiddleCenter 文本水平垂直居中。
    *@member MiddleRight  文本被固定在右侧，并垂直居中。
    *@member LowerLeft    文本被固定在左下角。
    *@member LowerCenter  文本被固定在下方，并水平居中。
    *@member LowerRight   文本被固定在右下角。
  **/

  var TextAnchor = {
    UpperLeft: 1,
    //Text is anchored in upper left corner. 文本被固定在左上角。
    UpperCenter: 2,
    //Text is anchored in upper side, centered horizontally.文本被固定在上方，并水平居中。
    UpperRight: 3,
    //Text is anchored in upper right corner. 文本被固定在右上角。
    MiddleLeft: 4,
    //Text is anchored in left side, centered vertically.文本被固定在左侧，并垂直居中。
    MiddleCenter: 5,
    //Text is centered both horizontally and vertically.文本水平垂直居中。
    MiddleRight: 6,
    //Text is anchored in right side, centered vertically.文本被固定在右侧，并垂直居中。
    LowerLeft: 7,
    //Text is anchored in lower left corner.文本被固定在左下角。
    LowerCenter: 8,
    //Text is anchored in lower side, centered horizontally.文本被固定在下方，并水平居中。
    LowerRight: 9 //Text is anchored in lower right corner.文本被固定在右下角。

  };
  /**
   * 生成各类几何对象默认属性
   * @method
   * @param {GeometryType} goeType ：要生成默认属性的几何对象的类型
   * @returns {Json} : 以json形式返回特定类型几何对象默认属性集合
   **/

  function createGeometryProp(geoType) {
    switch (geoType) {
      case GeometryType.Point:
        //二维点符号
        return {
          style: 0,
          //点符号样式，0：自定义图标；1：圆点；>1:系统提供的图标库中图标的唯一编号
          customIcon: "",
          //自定义图标url地址，需要采用自定义图标是时可设置style=0；并设置customIcon='https://dataojo.com/docity/resourses/boat.icon'
          size: [40, 40],
          //点的大小
          rotation: 0,
          //点符号以正北方位起点旋转方向，以度为单位
          color: [0.0, 0.0, 0.95, 0.5],
          //点的颜色，蓝色半透明
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.Label:
        //标签
        return {
          style: "1",
          //标签样式，系统默认提供的标签样式，0：自定义样式，通过customImage属性定义；>1:从系统默认样式中选取一种
          //customBkImage: '',                //自定义标签背景图片地址，例如：customIImage='https://dataojo.com/docity/resourses/customLabelFrame.jpeg'
          //customBkImagesize: [ 80, 80 ],       //自定义背景大小，按此大小进行缩放
          size: 2,
          //当采用系统默认标签样式时标签的对象的大小,1:小号；2：中号；3：大号；4：超大号
          labelIcon: 1,
          //标签中图标样式，0：自定义图表，通过customIcon定义，>1:从系统默认样式中选取一种
          //customIcon: '',                   //自定义标签图标地址，例如：customIcon='https://dataojo.com/docity/resourses/customicon.jpeg'
          fieldName: "label1",
          //标签文本
          textColor: [1.0, 1.0, 1.0],
          //标签文本颜色
          showGuideLine: true,
          //是否显示指引线，用于连接标签和定位点
          guideLineSize: 1,
          //指引线的粗细，1~10
          guideLineColor: [0.0, 0.0, 0.95, 1],
          //指引线的颜色
          autoArrange: 0,
          //是否自动避让，1:支持自动避让，0：不支持自动避让
          glow: 0,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          maxTextVisDis: 0,
          //最远文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离大就隐藏文本，该属性为0,最远可见距离不起作用
          minTextVisDis: 0 //最近文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离小就隐藏文本，该属性为0,最近可见距离不起作用
          //  link: 'http://www.dataojo.com',   //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.Board:
        //标牌
        return {
          style: 1,
          //标牌样式，系统默认提供的标签样式，0：自定义样式，通过customImage属性定义；>1:从系统默认样式中选取一种
          customPage: "",
          //自定义标牌网页地址，例如：customPage='https://dataojo.com/docity/resourses/customboard.html'
          customPagesize: [120, 80],
          //自定义标牌大小，按此大小进行网页缩放
          size: 2,
          //当采用系统默认标牌样式时标牌的对象的大小,1:小号；2：中号；3：大号；4：超大号
          caption: "board1",
          //标牌的标题
          content: [{
            title: "title1...",
            content: "content..."
          }],
          //标牌内容，通过数组添加多项显示文本，每个项文本包含标题和内容，可添加的数量由标牌样式决定
          image: "",
          //标牌中嵌入的预览图片的url地址，如：image='https://dataojo.com/docity/resourses/plane.jpeg'，image和video不能同时嵌入
          video: "",
          //标牌中嵌入的预览视频的url地址，如：video='https://dataojo.com/docity/resourses/street.mp3'，image和video不能同时嵌入
          showGuideLine: true,
          //是否显示指引线，用于连接标签和定位点
          guideLineSize: 1,
          //指引线的粗细，1~10
          guideLineColor: [0.0, 0.0, 0.95, 1],
          //指引线的颜色
          autoArrange: 0,
          //是否自动避让，1:支持自动避让，0：不支持自动避让
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.PolyLine:
        //折线
        return {
          type: LineType.Spline,
          //线类型，0：折线；1:spline样条曲线
          style: LineStyle.Solid,
          //线样式，参考LineStyle枚举
          width: 10,
          //线宽度，以米为单位
          lineColor: [0.0, 0.0, 1.0, 0.8],
          //线条基本颜色
          flowColor: [0.0, 1.0, 1.0, 0.9],
          //流动物颜色
          flowSpeed: 5,
          //流动物流动速度，单位为米/秒
          flowFrequency: 0.5,
          //流动发射频率，每秒发射多少次,0.5代表每两秒发射一次
          flowDecayTime: 3,
          //流动物衰减时间，流动物从发射到消失的时间，和frequency一起决定了显示波纹等放射特征体的数量
          direction: 0,
          //流动物发射方向，1：正向，顺时针，由里二外，从左到右，由下至上；0：负向，逆时针，由外向里，从右到左，从上至下
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.Polygon:
        //区域面
        return {
          type: PolygonType.Hollow,
          //区域类型，参考PolygonType
          sideStyle: FillStyle.SolidOutLine,
          //侧面填充样式，参考FillStyle
          topStyle: FillStyle.Solid,
          //顶面填充样式，参考FillStyle
          outlineColor: [0.0, 0.0, 1.0, 1.0],
          //轮廓颜色
          sideColor: [0.0, 0.0, 1.0, 0.8],
          //侧面填充颜色
          topColor: [0.0, 1.0, 1.0, 0.9],
          //顶面填充颜色
          fenceHeight: 100,
          //侧面围栏高度，以米为单位，当fenceHeight=0时，不显示侧面
          glow: 0,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.OD:
        //OD对象
        return {
          oStyle: ODPointStyle.Radiation,
          //O点样式，参考ODPointStyle
          oSize: 100,
          //O点的大小，以米为单位
          oField: "",
          oColor: [0.0, 0.0, 0.95, 0.5],
          //O点的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          dStyle: ODPointStyle.Radiation,
          //D点样式，参考ODPointStyle
          dSize: 100,
          //D点的大小，以米为单位
          dColor: [0.0, 0.0, 0.95, 0.5],
          //D点的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          //lineStyle: ODLineStyle.Solid3D,  //OD线的样式，参考ODLineStyle
          lineColor: [0.0, 0.0, 0.95, 0.1],
          //OD线的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          lineWidth: 5,
          //OD线的宽度，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          frequency: 0.5,
          //OD线的粒子发射频率，每秒发射多少次,0.5代表每两秒发射一次
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定

        };

      case GeometryType.Radiation:
        //放射物
        return {
          style: RadiationStyle.Ripple,
          //放射物样式，参考RadiationStyle
          bkColor: [0.0, 0.0, 1.0, 1.0],
          //放射物背景颜色，RGBA
          Forecolor: [0.0, 0.0, 1.0, 1.0],
          //放射物前景颜色，RGBA
          size: 100,
          //辐射半径，以米为单位
          frequency: 0.5,
          //发射频率，每秒发射多少次,0.5代表每两秒发射一次
          lifeTime: 3,
          //衰减时间，发射物从发射到消失的时间，和frequency一起决定了显示波纹等放射特征体的数量
          rotation: 0,
          //相对正北方位旋转方向，以度为单位
          direction: 0,
          //发射方向，1：正向，顺时针，由里二外，从左到右，由下至上；0：负向，逆时针，由外向里，从右到左，从上至下
          text: "",
          //发射物关联文字，text=''时不显示文字
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          maxTextVisDis: 0,
          //最远文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离大就隐藏文本，该属性为0,最远可见距离不起作用
          minTextVisDis: 0,
          //最近文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离小就隐藏文本，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.Model:
        //三维模型
        return {
          modelName: "pineTree",
          //模型在模型库中的名称，如：‘car’、‘boat’、‘plane’、‘lamppost’、‘’或者模型文件的url地址如："https://dataojo.com/docity/resourses/building1.gltf"
          rotation: [0.0, 0.0, 0.0],
          //绕x,y,z轴旋转方向
          scale: [1.0, 1.0, 1.0],
          //在x,y,z轴上的缩放系数
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.HighLightAera:
        //高亮区
        return {
          style: HighlightStyle.BlurOutside,
          //高亮风格，参见HighlightStyle
          color: [0.0, 0.0, 1.0, 0.8],
          //高亮区颜色
          fenceHeight: 100,
          //高亮区高度，以米为单位，低于此高度的模型将被高亮
          intensity: 3,
          //高亮强度，0~5级
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.Picture:
        //地面贴图
        return {
          sourceURL: "Map1.jpeg",
          //图片在图片资源库中的位置，或者文件的url地址如："https://dataojo.com/docity/resourses/cad_map.png"
          rotation: [0.0, 0.0, 0.0],
          //绕x,y,z轴旋转方向
          aspectRatio: 1.77,
          //图像纵横比
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      case GeometryType.video:
        //视频投射
        return {
          type: VideoType.VideoFile,
          //视频类型，具体参考VideoType
          sourceURL: "traffic.mpeg",
          //视频在资源库中的位置，或者视频流的url地址如："https://dataojo.com/docity/resourses/traffic.mpeg"
          rotation: [0.0, 0.0, 0.0],
          //摄像头旋转方向
          aspectRatio: 1.77,
          //视频图像纵横比
          fovy: 45,
          //摄像头垂直方向上的视场角
          distance: 100,
          //摄像头投射高度
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com" //链接地址，便于点击后弹出链接网页弹框

        };

      default:
        return {};
    }
  }
  /**
   * 生成各类图层对象默认属性
   * @method
   * @param {LayerType} layerType ：要生成默认属性的图层对象的类型，具体类型参考LayerType
   * @returns {Json}} : 以json形式返回特定类型图层对象默认属性集合
   **/

  function createLayerProp(layerType) {
    switch (layerType) {
      case LayerType.PointLayer:
        //二维点符号图层
        return {
          style: 0,
          //点符号样式，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置：0：自定义图标；1：圆点；>1:系统提供的图标库中图标的唯一编号
          customIcon: "",
          //自定义图标url地址，需要采用自定义图标是时可设置style=0；并设置customIcon='https://dataojo.com/docity/resourses/boat.icon'
          size: [40, 40],
          //点的大小，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          rotation: 0,
          //点符号以正北方位起点旋转方向，以度为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          color: [0.0, 0.0, 0.95, 0.5],
          //点的颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.LabelLayer:
        //标签图层
        return {
          style: 1,
          //标签样式，0：自定义样式，通过customBKImage属性定义；≥1:从系统默认样式中选取一种
          customBkImage: "",
          //自定义标签背景图片地址，例如：customIImage='https://dataojo.com/docity/resourses/customLabelFrame.jpeg'
          customBkImagesize: [80, 80],
          //自定义背景大小，按此大小进行标签对象缩放
          size: 2,
          //当采用系统默认标签样式时标签的对象的大小,1:小号；2：中号；3：大号；4：超大号，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          labelIcon: 1,
          //标签中图标样式，0：自定义图表，通过customIcon定义，>1:从系统默认样式中选取一种，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          customIcon: "",
          //自定义标签图标地址，例如：customIcon='https://dataojo.com/docity/resourses/customicon.jpeg'
          text: "label1",
          //标签文本，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          textColor: [1.0, 1.0, 1.0],
          //标签文本颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          showGuideLine: true,
          //是否显示指引线，用于连接标签和定位点
          guideLineSize: 1,
          //指引线的粗细，1~10
          guideLineColor: [0.0, 0.0, 0.9, 0.8],
          //指引线的颜色
          autoArrange: 0,
          //是否自动避让，1:支持自动避让，0：不支持自动避让
          glow: 0,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          maxTextVisDis: 0,
          //最远文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离大就隐藏文本，该属性为0,最远可见距离不起作用
          minTextVisDis: 0,
          //最近文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离小就隐藏文本，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1,
          //距离地面的高度，以米为单位
          // textAnchor: TextAnchor.LowerCenter, //标签的锚点在下方居中，参考TextAnchor定义
          labelOffsetX: 0,
          //文字在x方向的偏移（-256----+256）
          labelOffsetY: 0 //文字在y方向的偏移（-256----+256）

        };

      case LayerType.BoardLayer:
        //标牌图层
        return {
          style: 1,
          //标牌样式，0：自定义样式，通过customImage属性定义；>1:从系统默认样式中选取一种
          customPage: "",
          //自定义标牌网页地址，例如：customPage='https://dataojo.com/docity/resourses/customboard.html'
          customPagesize: [120, 80],
          //自定义标牌大小，按此大小进行网页缩放
          size: 2,
          //当采用系统默认标牌样式时标牌的对象的大小,1:小号；2：中号；3：大号；4：超大号，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          caption: "board1",
          //标牌的标题，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          content: [{
            key: "title",
            value: "field",
            unit: "米"
          }],
          //标牌内容，通过数组添加多项显示文本，每个内容由标题和内容组件，标题直接输入文本，内容通过对应数据的字段名称来关联具体的文本数据
          image: "",
          //标牌中嵌入的预览图片的url地址，如：image='https://dataojo.com/docity/resourses/plane.jpeg'，image和video不能同时嵌入
          video: "",
          //标牌中嵌入的预览视频的url地址，如：video='https://dataojo.com/docity/resourses/street.mp3'，image和video不能同时嵌入
          showGuideLine: true,
          //是否显示指引线，用于连接标签和定位点
          guideLineSize: 1,
          //指引线的粗细，1~10
          guideLineColor: [0.0, 0.0, 0.95, 1],
          //指引线的颜色
          autoArrange: 0,
          //是否自动避让，1:支持自动避让，0：不支持自动避让
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1,
          //距离地面的高度，以米为单位
          textAnchor: TextAnchor.LowerCenter //标牌的锚点在下方居中，参考TextAnchor定义

        };

      case LayerType.ColomnLayer:
        //光柱图层
        return {
          style: 0,
          //光柱样式，0：圆形，1：方形，3：六边形，4：尖顶
          size: 40,
          //光柱的粗细，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          height: 500,
          //光柱的高度，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          color: [0.0, 0.0, 0.95, 0.5],
          //光柱的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          text: "",
          //光柱关联文字，text=''时不显示文字，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          maxTextVisDis: 0,
          //最远文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离大就隐藏文本，该属性为0,最远可见距离不起作用
          minTextVisDis: 0,
          //最近文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离小就隐藏文本，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.GridLayer:
        //网格图层
        return {
          style: 0,
          //网格样式，1：矩形，2：六边形
          size: 40,
          //网格的大小，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          height: 500,
          //网格的高度，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          color: [0.0, 0.0, 0.95, 0.5],
          //网格的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.HeatMapLayer:
        //热力图层
        return {
          style: HeatMapStyle.SolidDotted,
          //热力样式,参考HeatMapStyle
          projection: false,
          //是否投射到建筑等地面覆盖物上
          radius: 40,
          //热力半径，以米为单位
          intensity: 1,
          //热力强度，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          weightField: "",
          //热力值字段设置，默认为""，这时候每个点的热力值都是1，如果设置刘字段名称，如“count”，那每个点使用"count"字段的值作为热力值
          latticeStyle: LatticeStyle.CircleDot,
          //热力图点阵中点的形状,具体参考LatticeStyle
          latticeDensity: 2,
          //热力点阵密度，1~5
          transparency: 0.5,
          //热力图整体透明度
          chromatography: 1,
          //热力色谱，采用渐变样式映射表（GradientStyleMapping）进行热力关联配置,取值为0-7，代表不同的热力色谱
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.ODLayer:
        //OD图层
        return {
          oStyle: ODPointStyle.Radiation,
          //O点样式，参考ODPointStyle
          oSize: 100,
          //O点的大小，以米为单位
          oColor: [0.0, 0.0, 0.95, 0.5],
          //O点的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          dStyle: ODPointStyle.Radiation,
          //D点样式，参考ODPointStyle
          dSize: 100,
          //D点的大小，以米为单位
          dColor: [0.0, 0.0, 0.95, 0.5],
          //D点的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          lineStyle: ODLineStyle.Solid3D,
          //OD线的样式，参考ODLineStyle
          lineColor: [0.0, 0.0, 0.95, 0.1],
          //OD线的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          lineWidth: 5,
          //OD线的宽度，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          flowColor: [0.0, 0.6, 0.95, 1],
          //流动物的颜色，RGBA，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          frequency: 0.5,
          //OD线的粒子发射频率，每秒发射多少次,0.5代表每两秒发射一次
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.PolyLineLayer:
        //折线图层
        return {
          type: LineType.Spline,
          //线类型，0：折线；1:spline样条曲线
          style: LineStyle.Solid,
          //线样式，参考LineStyle枚举
          width: 10,
          //线宽度，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          lineColor: [0.0, 0.0, 1.0, 0.8],
          //线条基本颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          flowColor: [0.0, 1.0, 1.0, 0.9],
          //流动物颜色
          flowSpeed: 5,
          //流动物流动速度，单位为米/秒
          flowFrequency: 0.5,
          //流动发射频率，每秒发射多少次,0.5代表每两秒发射一次
          flowDecayTime: 3,
          //流动物衰减时间，流动物从发射到消失的时间，和frequency一起决定了显示波纹等放射特征体的数量
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.PolygonLayer:
        //区域面图层
        return {
          type: PolygonType.Hollow,
          //区域类型，参考PolygonType
          sideStyle: FillStyle.SolidOutLine,
          //侧面填充样式，参考FillStyle
          topStyle: FillStyle.Solid,
          //顶面填充样式，参考FillStyle
          outlineColor: [0.0, 0.0, 1.0, 1.0],
          //轮廓颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          sideColor: [0.0, 0.0, 1.0, 0.8],
          //侧面填充颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          topColor: [0.0, 1.0, 1.0, 0.9],
          //顶面填充颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          fenceHeight: 100,
          //侧面围栏高度，以米为单位，当fenceHeight=0时，不显示侧面，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          glow: 0,
          //发光系数(0~10)，0：不发光,10:最强光
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.MotionEffectLayer:
        //动态特效图层
        return {
          style: RadiationStyle.Ripple,
          //放射物样式，参考RadiationStyle
          bkColor: [0.0, 0.0, 1.0, 1.0],
          //放射物背景颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          Forecolor: [0.0, 0.0, 1.0, 1.0],
          //放射物前景颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          size: 100,
          //辐射半径，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          rate: 3,
          //发射频率，每秒发射多少次,0.5代表每两秒发射一次
          decayTime: 1,
          //衰减时间，发射物从发射到消失的时间，和frequency一起决定了显示波纹等放射特征体的数量
          rotation: 0,
          //相对正北方位旋转方向，以度为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          direction: 0,
          //发射方向，1：正向，顺时针，由里二外，从左到右，由下至上；0：负向，逆时针，由外向里，从右到左，从上至下
          text: "",
          //发射物关联文字，text=''时不显示文字，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          maxTextVisDis: 0,
          //最远文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离大就隐藏文本，该属性为0,最远可见距离不起作用
          minTextVisDis: 0,
          //最近文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离小就隐藏文本，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.ModelSymbolLayer:
        return {
          symbol: "boat",
          //模型符号样式,如果为''则采用外挂模型文件，否则指向模型符号库中的名称，如：‘car’、‘boat’、‘plane’、‘lamppost’，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          model: "",
          //模型文件的url地址如："https://dataojo.com/docity/resourses/building1.gltf"
          groundDistance: 1,
          //距离地面的高度，以米为单位
          rotation: [0.0, 0.0, 0.0],
          //绕x,y,z轴旋转方向，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          scale: [1.0, 1.0, 1.0],
          //在x,y,z轴上的缩放系数，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "" //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'

        };

      case LayerType.RTSignalLayer:
        //实时信号图层
        return {
          style: RadiationStyle.Ripple,
          //实时信号的样式，参考RadiationStyle
          bkColor: [0.0, 0.0, 1.0, 1.0],
          //实时信号的背景颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          Forecolor: [0.0, 0.0, 1.0, 1.0],
          //实时信号的前景颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          size: 100,
          //实时信号的辐射半径，以米为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          frequency: 0.5,
          //实时信号的发射频率，每秒发射多少次,0.5代表每两秒发射一次
          decayTime: 3,
          //实时信号的衰减时间，发射物从发射到消失的时间，和frequency一起决定了显示波纹等放射特征体的数量
          rotation: 0,
          //实时信号的相对正北方位旋转方向，以度为单位，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          direction: 0,
          //实时信号的发射方向，1：正向，顺时针，由里二外，从左到右，由下至上；0：负向，逆时针，由外向里，从右到左，从上至下
          text: "",
          //实时信号的发射物关联文字，text=''时不显示文字，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          fadeTime: 5,
          //实时信号消隐时间，即从触发到最后消失的时间，以秒为单位
          bufferSize: 1000,
          //实时信号图层缓冲区大小，由可能实时接收的动态目标的数量计算得到
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          maxTextVisDis: 0,
          //最远文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离大就隐藏文本，该属性为0,最远可见距离不起作用
          minTextVisDis: 0,
          //最近文本可见距离，以米为单位，可以根据距离单独控制文字部分显隐，相机和对象距离比这个距离小就隐藏文本，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      case LayerType.RTTrackLayer:
        //实时轨迹图层
        return {
          targetType: RTTargetType.Model,
          //实时目标类型，采用点或模型表达，参考RTTargetType
          targetStyle: 0,
          //实时目标采用点表达的样式，当targetType=RTTargetType.Point时有效，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置：0：自定义图标；1：圆点；>1:系统提供的图标库中图标的唯一编号
          targetCustomIcon: "",
          //实时目标采用点表达的自定义图标url地址，当targetType=RTTargetType.Point时有效，需要采用自定义图标是时可设置style=0；并设置customIcon='https://dataojo.com/docity/resourses/boat.icon'
          targetModel: "boat",
          //实时目标采用模型表达，当targetType=RTTargetType.Model时有效，指标对应模型在模型库中的名称，如：‘car’、‘boat’、‘plane’、‘lamppost’、‘’或者模型文件的url地址如："https://dataojo.com/docity/resourses/building1.gltf"
          targetScale: [1.0, 1.0, 1.0],
          //缩放比例，分别对应x，y，z方向上的缩放，当目标类型为Point时，采用x来决定Point的大小，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          targetRotation: [0.0, 0.0, 0.0],
          //目标旋转方向，分别对应pitch、yaw、roll，当目标类型为Point时，采用x来决定Point的大小，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          targetColor: [1.0, 1.0, 1.0],
          //目标的颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          trackStyle: 1,
          //尾迹类型，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          trackcolor: [0.0, 0.0, 1.0, 1.0],
          //实时信号尾迹颜色，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          trackWidth: 2,
          //实时信号尾迹的粗细，支持采用样式映射表（StyleMaping）进行数据属性关联配置，也可单独设置
          delayTime: 1,
          //延迟时间，实时信号渲染延迟时间
          trackingTime: 5,
          //轨迹跟踪时间，决定了实时轨迹长度
          glow: 5,
          //发光系数(0~10)，0：不发光,10:最强光
          bufferSize: 1000,
          //实时轨迹图层缓冲区大小，由可能实时接收的动态目标的数量计算得到
          maxVisDis: 0,
          //最远可见距离，以米为单位，相机和对象距离比这个距离大就隐藏对象，该属性为0,最远可见距离不起作用
          minVisDis: 0,
          //最近可见距离，以米为单位，相机和对象距离比这个距离小就隐藏对象，该属性为0,最近可见距离不起作用
          link: "http://www.dataojo.com",
          //链接地址，便于点击后弹出链接网页弹框，支持采用样式映射表（StyleMaping）进行链接地址参数设定
          filter: "",
          //图层过滤选项，可以对显示数据进行过滤，例如：可设置过滤条件为：'id>2 and id<100'
          groundDistance: 1 //距离地面的高度，以米为单位

        };

      default:
        return {};
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /* eslint-disable */

  /* eslint-disable no-multi-spaces */

  /* eslint-disable semi */

  /* eslint-disable space-in-parens */

  /* eslint-disable padded-blocks */

  /* eslint-disable indent */

  /* eslint-disable space-before-blocks */

  /* eslint-disable no-trailing-spaces */

  /**
   * DoCity SDK @version 1.0.0
  ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
           ;00000C. :888ff:                                                                                       
        ;0001 ,C :880: ,88Ci           :8888888:.        ,88888888           ,88888888.    ,8,   :8              
      ;0001    :888;     ,888i         88      :88,    :88.      :88.      ,88,      ,88.        88              
    ;0001    :888:  G00    ,888;       88        88,  :8:          88.    :8:              :8f :88888.8:      :8,
   0001     808:    .000,    :Gf8      88         88 ;88           .88    88               ,8,   88   :8:    :8, 
   0Cf;     888,     000:    .G88      88         88 ;88           .88    88               ,8,   88    :8   ,8,  
    1L88i    :88   0000,    8888       88        :8,  88,          88,    :8,              ,8,   88     88  8:   
      i888;      0000,    8088         88      ,88.    :88.      :88.      ,88,      ,88,  ,8,   88     .8888    
        i088i  8000. :  8888           ,8888888:         ,88888888           .88888888,    ,8,   ::      ,80     
          1ffC000, :088888                                                                               :8.     
             ,,       .                                                                                 ,8,      
                                                                                                                 
  *@copyright  ©2021 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有  
  ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  *StyleMapping：图层样式映射对象，用于设置图层样式与数据属性之间的映射关系
  *UniqueStyleMapping ： 图层风格单值映射对象
  *RangeStyleMapping ： 图层风格范围分段映射对象
  *LinearStyleMapping : 图层风格线性函数映射对象
  *ExponentialStyleMapping : 图层风格指数函数映射对象
  *LogStyleMapping : 图层风格对数函数映射对象
  *GradientStyleMapping : 图层风格渐变映射对象
  *taody.2021.1.20
  **/

  /**
   *@enum {number} StyleMappingType 样式映射类型
   *@readonly
   *@member Unknown        没有初始化
   *@member Unique         单值映射
   *@member Range          分段映射
   *@member Linear         线性映射
   *@member Exponential    指数映射
   *@member Log            对数映射
   *@member scale          D3 比例尺
   **/
  var StyleMappingType = {
    Unknown: 0,
    Unique: 1,
    Range: 2,
    Linear: 3,
    Exponential: 4,
    Log: 5,
    Gradient: 6,
    scale: 7
  };
  /**
   *@enum {number} RangeType 范围分段类型
   *@readonly
   *@member OpenInterval       开区间，例如：(0,1) = {x | 0 < x < 1}
   *@member CloseInterval      闭区间，例如：[0,1] = {x | 0 ≤ x ≤ 1}
   *@member LeftOpenInterval   左开右关区间,例如：(0,1] = {x | 0 < x ≤ 1}
   *@member RightOpenInterval  左关右开区间，例如：[0,1) = {x | 0 ≤ x < 1}
   **/

  var RangeType = {
    OpenInterval: 1,
    CloseInterval: 2,
    LeftOpenInterval: 3,
    RightOpenInterval: 4
  };
  /**
   * @class
   * @classdesc StyleMapping :
   * 图层样式映射对象，用于设置图层样式与数据属性之间的映射关系
   * @constructor
   * @param {string} mappingField 用于建立样式映射的数据属性关联字段
   * @returns {StyleMapping} 返回StyleMapping对象
   **/

  var StyleMapping = /*#__PURE__*/function () {
    function StyleMapping(mappingField) {
      _classCallCheck(this, StyleMapping);

      this.mappingField = mappingField;
      this.mappingArguments = [];
      this.type = StyleMappingType.Unknown;
      this.mappings = [];
    } //将样式映射信息输出为json对象

    /**
     * 将完整的样式映射输出为Json对象,，便于与图层属性进行关联设置
     * @method
     * @returns {Json} : 以json形式返回完整的样式映射
     **/


    _createClass(StyleMapping, [{
      key: "toJson",
      value: function toJson() {
        return {
          mappingType: this.type,
          mappingArguments: this.mappingArguments,
          mappingField: this.mappingField,
          mappingItems: this.mappings
        };
      }
    }]);

    return StyleMapping;
  }();
  var UniqueStyleMapping = /*#__PURE__*/function (_StyleMapping) {
    _inherits(UniqueStyleMapping, _StyleMapping);

    var _super = _createSuper(UniqueStyleMapping);

    function UniqueStyleMapping(mappingField) {
      var _this;

      _classCallCheck(this, UniqueStyleMapping);

      _this = _super.call(this, mappingField);
      _this.type = StyleMappingType.Unique;
      return _this;
    }
    /**
     * 添加数据单值分段样式映射项
     * @method
     * @param {string} uniqueData ：数据中进行样式映射的数据值
     * @param {any} uniqueStyle ：当前数据对应某一样式的取值
     **/


    _createClass(UniqueStyleMapping, [{
      key: "addMappingItem",
      value: function addMappingItem(uniqueData, uniqueStyle) {
        this.mappings.push({
          data: uniqueData,
          style: uniqueStyle
        });
      }
    }]);

    return UniqueStyleMapping;
  }(StyleMapping);
  /**
   * @class
   * @classdesc RangeStyleMapping :
   * 图层样式分段映射对象，以下是采用数据中Field1”的数据进行某种颜色类样式分段映射的例子：
   * {"mappingType":2,
   *  "mappingField":"Field1",
   *  "mappingItems":[
   *      {"start":10,"end":20,"rangeType":4,"style":[0.0,0.0,1.0,0.8]},
   *      {"start":20,"end":30,"rangeType":4,"style":[0.0,0.8,0.8,0.8]},
   *      {"start":30,"end":40,"rangeType":4,"style":[0.8,0.1,0.6,0.8]}
   *   ]
   * }
   * @constructor
   * @param {string} mappingField 用于建立样式映射的数据属性关联字段
   * @returns {RangeStyleMapping} 返回图层样式范围分段映射对象
   **/

  var RangeStyleMapping = /*#__PURE__*/function (_StyleMapping2) {
    _inherits(RangeStyleMapping, _StyleMapping2);

    var _super2 = _createSuper(RangeStyleMapping);

    function RangeStyleMapping(mappingField) {
      var _this2;

      _classCallCheck(this, RangeStyleMapping);

      _this2 = _super2.call(this, mappingField);
      _this2.type = StyleMappingType.Range;
      return _this2;
    }
    /**
     * 添加数据范围分段样式映射项
     * @method
     * @param {number} startData ：分段起始数据值
     * @param {number} endData ：分段结束数据值
     * @param {RangeType} rangeType ：分段类型，定义当前分段区间的开闭性，参见RangeType
     * @param {any} rangeStyle ：当前数据对应某一样式的取值，主要是颜色、大小、粗细等可以分段设置的值
     **/


    _createClass(RangeStyleMapping, [{
      key: "addMappingItem",
      value: function addMappingItem(startData, endData, rangeType, rangeStyle) {
        this.mappings.push({
          start: startData,
          end: endData,
          rangeType: rangeType,
          style: rangeStyle
        });
      }
    }]);

    return RangeStyleMapping;
  }(StyleMapping);
  /**
   * @class
   * @classdesc LinearStyleMapping : y=k*x+b
   * 图层样式线性函数映射对象，以下线性函数映射输出的例子：
   * {"mappingType":3,
   *  "mappingArguments":{"k":1.0,"b":1.0},
   *  "mappingField":"Field1",
   *  "mappingItems":[],
   * }
   * @constructor
   * @param {string} mappingField 用于建立样式映射的数据属性关联字段
   * @param {number} k 线性函数斜率参数
   * @param {number} b 线性函数初始值参数
   * @returns {LinearStyleMapping} 返回图层样式线性函数映射对象
   **/

  var LinearStyleMapping = /*#__PURE__*/function (_StyleMapping3) {
    _inherits(LinearStyleMapping, _StyleMapping3);

    var _super3 = _createSuper(LinearStyleMapping);

    function LinearStyleMapping(mappingField) {
      var _this3;

      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
      var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;

      _classCallCheck(this, LinearStyleMapping);

      _this3 = _super3.call(this, mappingField);
      _this3.type = StyleMappingType.Linear;
      _this3.mappingArguments = [k, b];
      return _this3;
    }

    return _createClass(LinearStyleMapping);
  }(StyleMapping);
  /**
   * @class
   * @classdesc ExponentialStyleMapping : y=a^x+c，默认为y=e^x
   * 图层样式指数函数映射对象，以下指数函数映射输出的例子：
   * {"mappingType":4,
   *  "mappingArguments":{"a":2.718281828,"c":0.0},
   *  "mappingField":"Field1",
   *  "mappingItems":[],
   * }
   * @constructor
   * @param {string} mappingField 用于建立样式映射的数据属性关联字段
   * @param {number} a 指数函数的底数
   * @param {number} c 指数函数初始值
   * @returns {ExponentialStyleMapping} 返回图层样式指数函数映射对象
   **/

  var ExponentialStyleMapping = /*#__PURE__*/function (_StyleMapping4) {
    _inherits(ExponentialStyleMapping, _StyleMapping4);

    var _super4 = _createSuper(ExponentialStyleMapping);

    function ExponentialStyleMapping(mappingField) {
      var _this4;

      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2.718281828;

      _classCallCheck(this, ExponentialStyleMapping);

      _this4 = _super4.call(this, mappingField);
      _this4.type = StyleMappingType.Exponential;
      _this4.mappingArguments = [a, e];
      return _this4;
    }

    return _createClass(ExponentialStyleMapping);
  }(StyleMapping);
  /**
   * @class
   * @classdesc LogStyleMapping :y=log(a,x)+c，默认为常数对数y=ln(x)
   * 图层样式对数函数映射对象，以下对数函数映射输出的例子：
   * {"mappingType":5,
   *  "mappingArguments":{"a":2.718281828,"c":0.0},
   *  "mappingField":"Field1",
   *  "mappingItems":[],
   * }
   * @constructor
   * @param {string} mappingField 用于建立样式映射的数据属性关联字段
   * @param {number} a 对数函数的底数
   * @param {number} c 对数函数初始值
   * @returns {LogStyleMapping} 返回图层样式对数函数映射对象
   **/

  var LogStyleMapping = /*#__PURE__*/function (_StyleMapping5) {
    _inherits(LogStyleMapping, _StyleMapping5);

    var _super5 = _createSuper(LogStyleMapping);

    function LogStyleMapping(mappingField) {
      var _this5;

      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2.718281828;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;

      _classCallCheck(this, LogStyleMapping);

      _this5 = _super5.call(this, mappingField);
      _this5.type = StyleMappingType.Log;
      _this5.mappingArguments = [a, c];
      return _this5;
    }

    return _createClass(LogStyleMapping);
  }(StyleMapping);
  /**
   * @class
   * @classdesc GradientStyleMapping :
   * 图层样式渐变映射对象，以下是采用数据中Field1”的数据进行某种颜色类样式渐变映射的例子：
   * {"mappingType":6,
   *  "mappingField":"Field1",
   *  "mappingItems":[
   *      {"sampleData":10,"samplePos":0.0,"style":[0.0,0.0,1.0,0.8]},
   *      {"sampleData":100,"samplePos":0.5,"style":[0.0,0.0,1.0,0.8]},
   *      {"sampleData":300,"samplePos":1.0,"style":[0.0,0.0,1.0,0.8]},
   *   ]
   * }
   * @constructor
   * @param {string} mappingField 用于建立样式映射的数据属性关联字段
   * @returns {GradientStyleMapping} 返回图层样式渐变映射对象
   **/

  var GradientStyleMapping = /*#__PURE__*/function (_StyleMapping6) {
    _inherits(GradientStyleMapping, _StyleMapping6);

    var _super6 = _createSuper(GradientStyleMapping);

    function GradientStyleMapping(mappingField) {
      var _this6;

      _classCallCheck(this, GradientStyleMapping);

      _this6 = _super6.call(this, mappingField);
      _this6.type = StyleMappingType.Gradient;
      return _this6;
    }
    /**
     * 添加数据范围分段样式映射项
     * @method
     * @param {number} sampleData ：渐变采样数据，为数据中进行样式映射的数据值
     * @param {number} samplePos ：渐变采用位置,取值范围[0.0~1.0]
     * @param {any} gradientStyle ：当前数据对应某一样式的取值,主要是颜色、大小、粗细等可以渐变设置的值
     **/


    _createClass(GradientStyleMapping, [{
      key: "addMappingItem",
      value: function addMappingItem(sampleData, samplePos, gradientStyle) {
        this.mappings.push({
          sampleData: sampleData,
          samplePos: samplePos,
          style: gradientStyle
        });
      }
    }]);

    return GradientStyleMapping;
  }(StyleMapping);

  /* eslint-disable no-multi-spaces */
  var _SUCCESS = 1; //函数或方法调用成功后返回值

  var _FAILED = 0; //函数或方法调用失败后返回值  

  /**
   * 全局变量：默认位置数据结构
  **/

  var defaultLocation = {
    x: 116.3,
    //经度
    y: 39.9,
    //纬度
    z: 1000.0,
    //高度，以米为单位
    yaw: 45.0,
    //左右旋转角度
    pitch: 30.0 //俯仰角度

  };
  /**
   * 全局变量：默认图层参数设置
  **/

  var defaultLayerSetting = {
    visible: 1,
    //图层是否可见
    pickable: 0,
    //图层是否可拾取
    hoverable: 0,
    //图层是否可悬停
    cacheable: 0 //是否允许缓存，主要对云渲染引擎起作用

  };
  /**
   * 全局变量：默认场景渲染模式
  **/

  var defaultRenderMode = {
    renderMode: RenderModeType.RealMode,
    //渲染模式
    outlineColor: [0.5, 0.5, 0.9, 0.8],
    //轮廓颜色及透明度
    filleColor: [0.5, 0.5, 0.9, 0.8],
    //填充颜色及透明度
    fillMode: FillMode.Gradient,
    //填充模式
    glow: 5 //边缘发光强度,0~10

  };
  /**
   * 全局变量：默认时间参数设置
  **/

  var defaultTimeSetting = {
    day: '2021.1.25',
    //日期设置
    time: '12:45:00',
    //时间设置
    autoLoop: false,
    //是否自动日夜循环
    dayLength: 180,
    //每3分钟完成一次白天循环
    nightLength: 60 //1分钟完成晚上循环

  };
  /**
   * 全局变量：默认场景光照参数设置
  **/

  var defaultLightSetting = {
    colorTemperature: 3000,
    //色温，以K为单位
    ambient: 5,
    //环境光，1~10
    shadowdistance: 2000 //阴影可见距离，以米为单文，相机与视觉中心点大于该距离不显示阴影

  };
  /**
   * 全局变量：默认太阳设置
  **/

  var defaultSunSetting = {
    size: 5,
    //太阳大小，1~10
    intensity: 5 //阳光强度，1~10

  };
  /**
   * 全局变量：默认月亮设置
  **/

  var defaultMoonSetting = {
    size: 5,
    //月亮大小，1~10
    intensity: 5 //月光强度，1~10

  };
  /**
   * 全局变量：默认云层设置
  **/

  var defaultCloudSetting = {
    density: 5,
    //云层密度，1~10
    thickness: 5,
    //云层厚度，1~10
    height: 5000,
    //云层高度，以米为单位
    windVelocity: 1,
    //风速，1~10
    windDirection: 90 //风向：与正北方向的夹角，0~360度

  };
  /**
   * 全局变量：默认雾设置
  **/

  var defaultFogSetting = {
    intensity: 5,
    //雾浓度，1~10
    visibleDistance: 300 //雾可见范围，以米为单位

  };
  /**
   * 全局变量：默认雨设置
  **/

  var defaultRainSetting = {
    size: 5,
    //雨滴大小，1~10
    velocity: 5,
    //雨下落速度，1~10
    intensity: 5 //下雨强度，1~10

  };
  /**
   * 全局变量：默认雨设置
  **/

  var defaultSnowSetting = {
    size: 5,
    //雪片大小，1~10
    velocity: 5,
    //雪下落速度，1~10
    intensity: 5 //雪强度，1~10

  };
  /**
   * 全局变量：默认扫描特效设置
  **/

  var defaultScanSetting = {
    style: 1,
    //扫描样式，0：圆形；1；雷达；2：矩形
    coordType: CoordinateType.WGS84,
    //扫描原点坐标类型，默认为WGS84
    origin: [116.5, 39.8, 0.0],
    //扫描原点，经纬度坐标或世界坐标，坐标类型由coordType决定
    velocity: 5 //扫描速度，1~10

  };
  /**
   * 全局变量：默认漂浮粒子特效设置
  **/

  var defaultFloatingParticlesSetting = {
    density: 3,
    //分布密度，1~10
    velocity: 5,
    //粒子运动速度，-5~5,<0向下运动，>0,向上运动，=0，原地不动
    color: [0.5, 0.5, 1.0, 0.8] //粒子颜色

  };
  /**
   * 全局变量：默认上升线条特效设置
  **/

  var defaultRasingLinesSetting = {
    density: 3,
    //分布密度，1~10
    velocity: 5,
    //线条运动速度，-5~5,<0向下运动，>0,向上运动，=0，原地不动
    color: [0.5, 0.5, 1.0, 0.8] //线条颜色

  };
  /**
   * 全局变量：默认道路流动线特效设置
  **/

  var defaultTrafficflowSetting = {
    density: 3,
    //分布密度，1~10
    velocity: 5,
    //线条运动速度，-5~5,<0向下运动，>0,向上运动，=0，原地不动
    color: [0.5, 0.5, 1.0, 0.8] //线条颜色

  };
  /**
   * 全局变量：默认日夜切换参数设置
  **/

  var defaultDayandNightSetting = {
    dayObjectTags: ["daygroup1", "daygroup2", "daygroup3"],
    //白天才显示物体的标签
    nightObjectTags: ["nightbroup1", "nightgroup2", "nightgroup3"],
    //夜景才显示物体的标签
    materialTags: "materialGroup",
    //白天夜晚需要改变材质的物体标签
    dawn: "043000",
    //设定黎明时间
    sunrise: "050000",
    //设定日出时间
    dusk: "173000",
    //设定黄昏时间
    sunset: "184000" //设定日落时间

  };
  /**
   测量对象默认显示样式
  **/

  var defaultMeasureStyle = {
    lineColor: [1.0, 0.0, 0.0, 1.0],
    //线颜色             
    LineStyle: 0,
    //线样式，0：实  现，1：虚线 
    FillColor: [1.0, 0.5, 0.5, 0.5],
    //填充颜色     
    TextSize: 3,
    //文字大小:1~5      
    TextColor: [0.95, 0.95, 0.95, 1.0],
    //文字颜色
    handleSize: 3,
    //量算拖动节点大小：1~5
    handleColor: [1.0, 0.0, 0.0, 1.0] //量算拖动节点颜色

  };
  /**
   * 全局变量：默认指南针位置
  **/

  var defaultCompassPos = {
    Align: AlignStyle.RightTop,
    //右上角
    margin: [100, 100],
    //由右边距100像素，上边距100像素
    size: [200, 200] //长200，宽200

  };
  /**
   * 全局变量：默认总览地图位置
  **/

  var defaultOverviewMapPos = {
    Align: AlignStyle.RightBottom,
    //右下角
    margin: [100, 100],
    //由右边距100像素，上边距100像素
    size: [500, 500] //长500，宽500

  };
  /**
   * 全局变量：默认比例尺位置
  **/

  var defaultScalePos = {
    Align: AlignStyle.LeftBottom,
    //左下角
    margin: [100, 100],
    //由右边距100像素，上边距100像素
    size: [300, 30] //长500，宽500

  };
  var HD = [1280, 720]; //标清720P

  var FHD = [1920, 1080]; //高清 1080P

  var QHD = [2560, 1440]; //超高清，4K

  var defaultConfig = {
    url: 'wwww.dataojo.com/docity/cloudrender',
    projectPath: 'd:\beijing.dcp',
    streamingPort: 8081,
    signallPort: 8088,
    websocketPort: 6000,
    Resolution: FHD,
    NvEncH264ConfigLevel: 52,
    //H.264的压缩级别：52(5.2)或51(5.1),不设置默认是5.2，5.2可解码高清分辨率，如3840x2160（4K）;解码较低的分辨率可以改成5.1
    NvEncAverageBitRate: 1000,
    //编码器的默认平均比特率
    NvEncFrameRateNum: 10 //编码器帧率

  };

  /**
  * @class
  * @classdesc DccCamera :
  * 二三维场景相机接口，用于设置镜头、执行镜头切换、场景飞行漫游
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccCamera} 返回DccCamera对象
  **/

  var DccCamera = /*#__PURE__*/function () {
    function DccCamera(engine) {
      _classCallCheck(this, DccCamera);

      this.engine = engine;
    }
    /**
    * 将相机位置复位到初始位置
    * @method
    * @param {function} fn ：回调函数，通过此函数返回是否成功和新的相机的位置信息
    * @fire DccEvents.onCameraMoveStart : 在相机开始移动前触发
    * @fire DccEvents.onCameraMoveEnd ： 在相机结束移动后触发，返回信息结构如下：
    * {
    *   command:Camera_Reset,
    *   result:_SUCCESS,
    *   location:{x:116.3,y:39.9, z:1000.0, yaw:45.0, pitch:30.0},
    * }
    * @example
    * dc.camera.reset(
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           //设置成功后输出新的相机位置
    *           console.log(e.Location);
    *         }
    *     }
    *   );
    **/


    _createClass(DccCamera, [{
      key: "reset",
      value: function reset(fn) {
        this.engine.excute(CommandType.Camera_Reset, {}, fn);
      }
      /**
      * 查询并获取场景中相机当前位置
      * @method
      * @param {CoordinateType} coordType ：坐标系类型，默认为WGS84投影的经纬度坐标
      * @param {function} fn ：查询回调函数，通过此函数返回相机的位置信息，信息结构如下：
      * {
      *   command:Camera_QueryLocation,
      *   result:_SUCCESS,
      *   location:{x:116.3,y:39.9, z:1000.0, yaw:45.0, pitch:30.0},
      * }
      * @example
      * dc.camera.queryLocation(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           //设置成功后输出新的相机位置
      *           console.log(e.Location);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "queryLocation",
      value: function queryLocation() {
        var coordType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CoordinateType.WGS84;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.engine.excute(CommandType.Camera_QueryLocation, {
          coordType: coordType
        }, fn);
      }
      /**
      * 设置相机在场景中的位置
      * @method
      * @param {string} location ： 相机位置,json对象,格式参考defaultLocation
      * @param {CoordinateType} coordType ：坐标系类型，默认为WGS84投影的经纬度坐标
      * @param {MoveMode} moveMode :  相机移动方式
      * @param {function} fn ：设置回调函数，通过此函数返回是否成功和新的相机的位置信息,返回信息结构如下
      * {
      *   command:Camera_SetLocation,
      *   result:_SUCCESS,
      *   location:{x:116.3,y:39.9, z:1000.0, yaw:45.0, pitch:30.0},
      * }
      * @fire DccEvents.onCameraMoveStart : 在相机开始移动前触发
      * @fire DccEvents.onCameraMoveEnd ： 在相机结束移动后触发
      * @example
      * dc.camera.setLocation(
      *     {x:116.21,y:39.92,1000.0},
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           //设置成功后输出新的相机位置
      *           console.log(e.Location);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "setLocation",
      value: function setLocation(location) {
        var coordType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CoordinateType.WGS84;
        var moveMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MoveMode.Fly;
        var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        this.engine.excute(CommandType.Camera_SetLocation, {
          coordType: coordType,
          location: location,
          moveMode: moveMode
        }, fn);
      }
      /**
      * 设置相机聚焦点到特定空间位置
      * @method
      * @param {json} targetPosition ： 聚焦目标点位置,{x,y,z}
      * @param {CoordinateType} coordType ：坐标系类型，默认为WGS84投影的经纬度坐标
      * @param {float} distance ：       相机与目标点距离
      * @param {float} pitch ：          相机俯仰角度，，以度为单位，0~90度
      * @param {float} yaw ：            相机方向，与正北方夹角0~360度，以度为单位
      * @param {MoveMode} moveMode :     相机移动方式
      * @param {function} fn ：设置回调函数，通过此函数返回是否成功和新的相机的位置信息
      * {
      *   command:Camera_Focus,
      *   result:_SUCCESS,
      *   location:{x:116.3,y:39.9, z:1000.0, yaw:45.0, pitch:30.0},
      * }
      * @fire DccEvents.onCameraMoveStart : 在相机开始移动前触发
      * @fire DccEvents.onCameraMoveEnd ： 在相机结束移动后触发
      * @example
      * dc.camera.focus(
      *     {x:116.21,y:39.92,0.0},  //地面坐标点
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           //设置成功后输出新的相机位置
      *           console.log(e.Location);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "focus",
      value: function focus(targetPosition) {
        var coordType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CoordinateType.WGS84;
        var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500.0;
        var pitch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
        var yaw = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var moveMode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : MoveMode.Fly;
        var fn = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        this.engine.excute(CommandType.Camera_Focus, {
          coordType: coordType,
          targetPosition: targetPosition,
          distance: distance,
          pitch: pitch,
          yaw: yaw,
          moveMode: moveMode
        }, fn);
      }
      /**
      * 围绕场景中心点旋转相机
      * @method
      * @param {integer} phaseTime ：旋转一周时间，以秒为单位
      * @param {float} angle ：旋转角度，以度为单位，>0：顺时针；<0:逆时针，一周为360度，如：设置为-720，则逆时针旋转两圈
      * @param {function} fn ：回调函数，通过此函数返回是否成功,返回信息结构如下：
      * {
      *   command:Camera_Rotate,
      *   result:_SUCCESS,
      * }
      * @fire DccEvents.onCameraMoveStart : 在相机开始旋转时触发
      * @fire DccEvents.onCameraMoveEnd ： 在相机结束旋转时触发
      * @example
      * dc.camera.rotate(
      *     2，180，
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log(‘用2秒时间顺时针旋转180度’);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "rotate",
      value: function rotate() {
        var phaseTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 360;
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Camera_Rotate, {
          phaseTime: phaseTime,
          angle: angle
        }, fn);
      }
      /**
      * 将场景切换到快照位置
      * @method
      * @param {string} snapshotName ：快照名称
      * @param {string} tourName ：快照所在的漫游路线名称
      * @param {MoveMode} moveMode :  相机移动方式
      * @param {function} fn ：回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Camera_PlaySnapshot,
      *   result:_SUCCESS,
      * }
      * @fire DccEvents.onCameraMoveStart : 在相机开始切换前触发
      * @fire DccEvents.onCameraMoveEnd ： 在相机结束切换后触发
      * @example
      * dc.camera.playSnapshot('snap1','tour1'
      *   (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('切换到快照(${e.snapshotName}:${e.snapshotName})成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "playSnapshot",
      value: function playSnapshot(snapshotName, tourName) {
        var moveMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MoveMode.Fly;
        var durationTime = arguments.length > 3 ? arguments[3] : undefined;
        var fn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        this.engine.excute(CommandType.Camera_PlaySnapshot, {
          snapshotName: snapshotName,
          tourName: tourName,
          moveMode: moveMode,
          durationTime: durationTime
        }, fn);
      }
      /**
      * 相机按指定场景漫游路线进行飞行漫游
      * @method
      * @param {string}  tourName ：快照所在的漫游路线名称
      * @param {TourMode} tourMode ：导览模式，分为全程导览和分段导览，详情参考TourMode
      * @param {function} fn ：回调函数，返回是否成功,返回信息结构如下：
      * {
      *   command:Camera_PlayTour,
      *   result:_SUCCESS,
      * }
      * @fire DccEvents.onCameraMoveStart : 在相机开始导览前触发
      * @fire DccEvents.onCameraMoveEnd ： 在相机结束导览后触发
      * @example
      * dc.camera.playTour('tour1',
      *   (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('执行导览(${e.tourName})成功！');
      *         }
      *     }
      *   );
      **/

    }, {
      key: "playTour",
      value: function playTour(tourName) {
        var tourMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TourMode.FullTour;
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Camera_PlayTour, {
          tourName: tourName,
          tourMode: tourMode
        }, fn);
      }
    }]);

    return DccCamera;
  }();

  /**
  * @class
  * @classdesc DccComponent:
  * 场景辅助组件接口，用于三维场景中可视化组件设置，包括指北针、比例尺、缩略图（鹰眼）
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccComponent} 返回DccComponent对象
  **/

  var DccComponent = /*#__PURE__*/function () {
    function DccComponent(engine) {
      _classCallCheck(this, DccComponent);

      this.engine = engine;
    }
    /**
    * 设置组件的屏幕位置
    * @method
    * @param {ComponentType} type :  组件类型
    * @param {json} position  ： 组件屏幕位置,json对象,格式参考defaultCompassPos、defaultOverviewMapPos、defaultScalePos
    * @param {function} fn ：设置回调函数，返回调用结果，信息结构如下：
    * {
    *   command:Component_SetPosition
    *   result:_SUCCESS,
    *   type:1,
    * }
    * @example
    * import {defaultCompassPos,defaultOverviewMapPos,defaultScalePos} from "./DccGlobal"
    * dc.component.SetPosition(
    *     ComponentType.Compass,
    *     defaultCompassPos,
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           console.log("设置组件位置。");
    *         }
    *     }
    *   );
    **/


    _createClass(DccComponent, [{
      key: "setPosition",
      value: function setPosition(type, position, fn) {
        this.engine.excute(CommandType.Component_SetPosition, {
          type: type,
          position: position
        }, fn);
      }
      /**
      * 获取组件的屏幕位置
      * @method
      * @param {ComponentType} type :  组件类型
      * @param {function} fn ：设置回调函数，返回是组件的屏幕位置信息，信息结构如下：
      * {
      *   command:Component_GetPosition，
      *   result:_SUCCESS,
      *   type:0,
      *   Align:2,
      *   margin:[100,100],         
      *   size:[200,200],           
      * }
      * @example
      * 
      * dc.component.getPosition(
      *     ComponentType.Compass,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           //获取组件位置
      *           console.log('组件的大小为\"宽：${e.margin[0],高：${e.margin[0]\"');
      *         }
      *     }
      *   );
      **/

    }, {
      key: "getPosition",
      value: function getPosition(type, fn) {
        this.engine.excute(CommandType.Component_GetPosition, {
          type: type
        }, fn);
      }
      /**
      * 设置组件的可见性
      * @method
      * @param {ComponentType} type :  组件类型
      * @param {boolean} visible  ： 是否可见
      * @param {function} fn ：设置回调函数，返回调用结果，信息结构如下：
      * {
      *   command:Component_SetVisible
      *   result:_SUCCESS,
      *   type:1,
      * }
      * @example
      * 
      * dc.component.setVisible(
      *     ComponentType.Compass,
      *     false,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log("设置指北针组件不可见。");
      *         }
      *     }
      *   );
      **/

    }, {
      key: "setVisible",
      value: function setVisible(type) {
        var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Component_SetVisible, {
          type: type,
          visible: visible
        }, fn);
      }
      /**
      * 获取组件的可见性
      * @method
      * @param {ComponentType} type :  组件类型
      * @param {function} fn ：设置回调函数，返回调用结果，信息结构如下：
      * {
      *   command:Component_GetVisible
      *   result:_SUCCESS,
      *   type:1,
      *   visible:false,
      * }
      * @example
      * 
      * dc.component.getVisible(
      *     ComponentType.Compass,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           if(e.visible)
      *           {
      *             console.log("指北针组件不可见。");
      *           }else
      *           {
      *             console.log("指北针组件可见。");
      *           }
      *         }
      *     }
      *   );
      **/

    }, {
      key: "getVisible",
      value: function getVisible(type, fn) {
        this.engine.excute(CommandType.Component_GetVisible, {
          type: type
        }, fn);
      }
      /**
      * 设置组件的样式
      * @method
      * @param {ComponentType} type :  组件类型
      * @param {number} style  ：组件样式属性：0,1,2,...
      * @param {function} fn ：设置回调函数，返回调用结果，信息结构如下：
      * {
      *   command:Component_SetStyle
      *   result:_SUCCESS,
      *   type:1,
      * }
      * @example
      * 
      * dc.component.setStyle(
      *     ComponentType.Compass,
      *     1,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log("设置指北针样式成功！。");
      *         }
      *     }
      *   );
      **/

    }, {
      key: "setStyle",
      value: function setStyle(type, style, fn) {
        this.engine.excute(CommandType.Component_SetStyle, {
          type: type,
          style: style
        }, fn);
      }
      /**
      * 获取组件的样式
      * @method
      * @param {ComponentType} type :  组件类型
      * @param {function} fn ：设置回调函数，返回调用结果，信息结构如下：
      * {
      *   command:Component_GetStyle
      *   result:_SUCCESS,
      *   type:1,
      *   style:0,
      * }
      * @example
      * 
      * dc.component.getStyle(
      *     ComponentType.Compass,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log("指北针样式为${e.style}！。");
      *         }
      *     }
      *   );
      **/

    }, {
      key: "getStyle",
      value: function getStyle(type, fn) {
        this.engine.excute(CommandType.Component_GetStyle, {
          type: type
        }, fn);
      }
    }]);

    return DccComponent;
  }();

  /**
  * @class
  * @classdesc DccCoord:
  * 坐标转换接口，用于地理坐标、世界坐标、屏幕坐标转换
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccCoord} DccCoord
  **/

  var DccCoord = /*#__PURE__*/function () {
    function DccCoord(engine) {
      _classCallCheck(this, DccCoord);

      this.engine = engine;
    }
    /**
    * 将屏幕坐标转换为经纬度或世界坐标
    * @method
    * @param {Array} screenPnts ： 要做换的屏幕坐标点数组
    * @param {CoordinateType} coordType ：转换结果点的坐标系类型，默认为WGS84投影的经纬度坐标
    * @param {function} fn ：回调函数，通过此函数返回转换坐标点，返回信息结构如下：
    * {
    *   command:Coord_Screen2Wrold
    *   result:_SUCCESS,
    *   coordType:0,
    *   coords:[{116.2,38.02,0.0},{116.11,38.076,0.0},{116.182,38.232,100.0}],
    * }
    * @example
    * dc.coord.screen2Wrold(
    *     [{x:0,y:0},{x:-100,y:100},{x:100,y:100}],
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           console.log(e.coords);
    *         }
    *     }
    *   );
    **/


    _createClass(DccCoord, [{
      key: "screen2Wrold",
      value: function screen2Wrold(screenPnts) {
        var coordType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CoordinateType.WGS84;
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Coord_Screen2Wrold, {
          coordType: coordType,
          screenPnts: screenPnts
        }, fn);
      }
      /**
      * 将地理坐标或世界坐标转换为屏幕坐标
      * @method
      * @param {Array} coords ： 要做换的坐标点数组
      * @param {CoordinateType} coordType ：要转换的点的坐标系类型，默认为WGS84投影的经纬度坐标
      * @param {function} fn ：回调函数，通过此函数返回转换坐标点，返回信息结构如下：
      * {
      *   command:Coord_World2Screen
      *   result:_SUCCESS,
      *   screenPnts:[{x:0,y:0},{x:-100,y:100},{x:100,y:100}],
      * }
      * @example
      * dc.coord.world2Screen(
      *     [{116.2,38.02,0.0},{116.11,38.076,0.0},{116.182,38.232,100.0}],
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log(e.screenPnts);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "world2Screen",
      value: function world2Screen(coords) {
        var coordType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CoordinateType.WGS84;
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Coord_World2Screen, {
          coordType: coordType,
          coords: coords
        }, fn);
      }
      /**
      * 将经纬度坐标转换为世界坐标
      * @method
      * @param {Array} LatlongPnts ： 要转换的经纬度坐标点数组
      * @param {function} fn ：回调函数，通过此函数返回转换坐标点，返回信息结构如下：
      * {
      *   command:Coord_Latlong2Wrold
      *   result:_SUCCESS,
      *   worldPnts:[{x:100,y:0，0},{x:-100,y:0，0},{x:100,y:100，0}],
      * }
      * @example
      * dc.coord.latlong2Wrold(
      *     [{x:116.2,y:39.2},{x:116.2,y:39.8},{x:115.93,y:38.9}],
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log(e.worldPnts);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "latlong2Wrold",
      value: function latlong2Wrold(latlongPnts, fn) {
        this.engine.excute(CommandType.latlong2Wrold, {
          latlongPnts: latlongPnts
        }, fn);
      }
      /**
       * 将世界坐标转为经纬度坐标
       * @method
       * @param {Array} worldPnts ： 要转换的坐标点数组
       * @param {function} fn ：回调函数，通过此函数返回转换坐标点，返回信息结构如下：
       * {
       *   command:Coord_World2latlong
       *   result:_SUCCESS,
       *   latlongPnts:[{x:116.2,y:39.2},{x:116.2,y:39.8},{x:115.93,y:38.9}],
       * }
       * @example
       * dc.coord.world2latlong(
       *     [{x:100,y:0，0},{x:-100,y:0，0},{x:100,y:100，0}],
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log(e.latlongPnts);
       *         }
       *     }
       *   );
       **/

    }, {
      key: "world2latlong",
      value: function world2latlong(worldPnts, fn) {
        this.engine.excute(CommandType.Coord_World2latlong, {
          worldPnts: worldPnts
        }, fn);
      }
    }]);

    return DccCoord;
  }();

  /**
  * @class
  * @classdesc DccEditor:
  * 编辑图层接口，用于在场景中添加、管理、修改各类几何对象
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccEditor} 返回DccEditor对象
  **/

  var DccEditor = /*#__PURE__*/function () {
    function DccEditor(engine) {
      _classCallCheck(this, DccEditor);

      this.engine = engine;
    }
    /**
    * 设置当前编辑工具,便于通过鼠标交互操作在场景中添加新的几何对象
    * @method
    * @param {GeometryType} geoType ：   编辑对象类型，具体参考GeometryType
    * @param {json} geoProp ：           当前编辑对象默认样式，根据geoType来设定样式
    * @param {function} fn ：            回调函数，返回是否成功，返回信息结构如下：
    * {
    *   command:Editor_SetEditTool,
    *   result:_SUCCESS,
    * }
    * @example
    * import {ActionType,GeometryType,createGeometryProp} from "./common/DccObjects"
    * 
    * dc.setAction(ActionType.AddObject);  //将当前action设置为在场景中添加新的几何对象
    * 
    * const geoProp=createGeometryProp(GeometryType.Board); //通过辅助工具来创建特定类型的几何对象属性
    * geoProp.caption='交通设施';
    * geoProp.content=[{{title:'设施编号：',content:'123456'},{title:'设备名称：',content:'智能灯杆'}}];
    * 
    * dc.editor.setEditTool(GeometryType.Board,geoProp,
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           console.log('设置编辑工具成功！');
    *        }
    *     }
    *   );
    **/


    _createClass(DccEditor, [{
      key: "setEditTool",
      value: function setEditTool() {
        var geoType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : GeometryType.Board;
        var geoProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Editor_SetEditTool, {
          geoType: geoType,
          geoProp: geoProp
        }, fn);
      }
      /**
      * 获取当前编辑工具信息
      * @method
      * @param {function} fn ：            回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_GetEditTool,
      *   result:_SUCCESS,
      *   geoType:0,
      * }
      * @example
      * dc.editor.getEditTool(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('当前编辑工具为${e.geoType}！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "getEditTool",
      value: function getEditTool(fn) {
        this.engine.excute(CommandType.Editor_GetEditTool, {}, fn);
      }
      /**
      * 在场景中添加新的几何对象
      * @method
      * @param {GeometryType} type ：  新加几何对象类型
      * @param {Array} coords ：       新加几何对象的空间坐标，格式为——>点：[x,y,z];线、面：[[x,y,z],[x,y,z],[x,y,z],..]，OD线[[x0,y0,z0,x1,y1,z1],[x0,y0,z0,x1,y1,z1],...]，以上为三维坐标点，也可以用二维平面坐标
      * @param {json} prop ：          新加几何对象样式属性，对象颜色、大小、文本等
      * @param {string} Name ：        新加几何对象名字，如果name为''，系统根据几何对象类型自动分配一个名字，如“Point120”
      * @param {CoordinateType} coordType ：   coords坐标类型，缺省情况为WGS84
      * @param {Array} labels ：       新加几何对象属性标签，主要用于按标签对几何对象进行分组管理和批量的显隐（显示/隐藏）控制
      * @param {function} fn ：        回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_AddObject,
      *   result:_SUCCESS,
      *   id:10,
      *   name:'object1'，
      *   type:7,
      * }
      * @example
      * import {GeometryType,createGeometryProp} from "./common/DccObjects"
      * 
      * const prop=createGeometryProp(GeometryType.Label);
      * prop.text='Beijing';
      * dc.editor.addObject(GeometryType.Label,  //创建一个新标签并添加到场景中
      *     [116.2,39.8],                            //标签对象的二维坐标，对象将贴地
      *     prop,                                    //几何对象属性 
      *     ['label','poi'],                         //为几何对象设置属性标签
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('添加几何对象：\"${e.id}\"成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "addObject",
      value: function addObject(type, coords, prop) {
        var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var coordType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : CoordinateType.WGS84;
        var labels = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
        var fn = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        this.engine.excute(CommandType.Editor_AddObject, {
          type: type,
          name: name,
          coordType: coordType,
          coords: coords,
          prop: prop,
          labels: labels
        }, fn);
      }
      /**
      * 查询编辑图层中的对象,返回符合条件的对象基本信息列表，此处不返回对象完整信息，可以通过getObjects方法来获取对象完整的坐标和属性数据
      * @method
      * @param {Array} labels ：对象标签过滤条件，通过标签对查询结果进行过滤，只有具备特定标签的图层才被返回；labels默认为[]，此时将返回所有对象。
      * @param {function} fn ：回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_QueryObjects,
      *   result:_SUCCESS,
      *   objects:[
      *     {id:0,name:'point1',type:1,visible:1,maxVisDis:30000,minVisDis:1000},
      *     {id:2,name:'label1',type:2,visible:1,maxVisDis:30000,minVisDis:1000},
      *     {id:3,name:'radiation2',type:11,visible:1,maxVisDis:30000,minVisDis:1000},
      *   ]
      * }
      * @example
      * dc.editor.queryObjects(['traffic','BeJing'],
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *             //输出对象列表
      *             console.table(e.objects);
      *        }
      *     }
      *   );
      **/

    }, {
      key: "queryObjects",
      value: function queryObjects() {
        var labels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.engine.excute(CommandType.Editor_QueryObjects, {
          labels: labels
        }, fn);
      }
      /**
      * 获取编辑图层中对象完整的坐标和属性信息
      * @method
      * @param {Array} ids ：  要查找的对象id
      * @param {function} fn ：回调函数，返回是否成功和结果信息，返回信息结构如下：
      * {
      *   command:Editor_GetObjects,
      *   result:_SUCCESS,
      *   objects:[
      *     {id:2,
      *      type:7,
      *      coords:[[116.21,39.802,0.0],[116.208,39.803,0.0],[116.208,39.802,0.0]],
      *      prop:{type:1,         
      *            style:0,        
      *            width:10,                     
      *            lineColor:[0.0,0.0,1.0,0.8],  
      *            flowColor:[0.0,1.0,1.0,0.9],  
      *            flowSpeed:5,                  
      *            flowFrequency:0.5,            
      *            flowDecayTime:3,              
      *            direction:0,                  
      *            glow:5,                       
      *            maxVisDis:0,                  
      *            minVisDis:0,                  
      *            link:'http://www.dataojo.com',
      *           }
      *    },
      *    {id:3,
      *      type:7,
      *      coords:[[116.205,39.811,0.0],[116.204,39.821,0.0]],
      *      prop:{type:1,         
      *            style:1,        
      *            width:10,                     
      *            lineColor:[0.0,0.0,1.0,0.8],  
      *            flowColor:[0.0,1.0,1.0,0.9],  
      *            flowSpeed:5,                  
      *            flowFrequency:0.5,            
      *            flowDecayTime:3,              
      *            direction:0,                  
      *            glow:5,                       
      *            maxVisDis:0,                  
      *            minVisDis:0,                  
      *            link:'http://www.dataojo.com',
      *           }
      *    },
      *   ]
      * }
      * @example
      * dc.editor.getObjects(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           for(const o in result.objects)
      *           {
      *             //输出对象详细信息
      *             console.log('对象${o.id}的坐标为${o.coords}');
      *           }
      *        }
      *     }
      *   );
      **/

    }, {
      key: "getObjects",
      value: function getObjects(ids, fn) {
        this.engine.excute(CommandType.Editor_GetObjects, {
          ids: ids
        }, fn);
      }
      /**
      * 更新一个或多个场景中的几何对象坐标和属性
      * @method
      * @param {Array} ids ：                  需要修改的对象的id集合
      * @param {CoordinateType} coordType ：   coords坐标类型，缺省情况为WGS84
      * @param {Array} coords ：               ids指向的几何对象的空间坐标数组，如果为[]，则不进行更新，单个对象坐标格式为——>点：[x,y,z];线、面：[[x,y,z],[x,y,z],[x,y,z],..]，OD线[[x0,y0,z0,x1,y1,z1],[x0,y0,z0,x1,y1,z1],...]，以上为三维坐标点，也可以用二维平面坐标
      * @param {json} props ：                 ids指向的几何对象样式属性数组，如果为[]，则不进行更新，对象属性包括颜色、大小、文本等
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_UpdateObjects,
      *   result:_SUCCESS,
      *   ids:[1,2,4,8],
      *   types:[7,7,7,7]
      * }
      * @example
      * dc.editor.updateObjects([1,2],                //要修改的对象id
      *     [[116.2,39.8，10.0],[116.1,39.6，10.0]],  //对象的坐标
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('修改几何对象：\"${e.ids}\"成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "updateObjects",
      value: function updateObjects(ids) {
        var coordType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CoordinateType.WGS84;
        var coords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var fn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        this.engine.excute(CommandType.Editor_UpdateObjects, {
          ids: ids,
          coordType: coordType,
          coords: coords,
          props: props
        }, fn);
      }
      /**
      * 删除一个或多个场景中的几何对象
      * @method
      * @param {Array} ids ：                  需要删除的对象的id集合
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_RemoveObjects,
      *   result:_SUCCESS,
      *   ids:[1,2,4,8],
      * }
      * @example
      * dc.editor.removeObjects([1,2],                //要删除的对象id
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('修改几何对象：\"${e.ids}\"成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "removeObjects",
      value: function removeObjects(ids, fn) {
        this.engine.excute(CommandType.Editor_RemoveObjects, {
          ids: ids
        }, fn);
      }
      /**
      * 清空编辑图层中的几何对象
      * @method
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_Clear,
      *   result:_SUCCESS,
      *   count:15,
      * }
      * @example
      * dc.editor.clear(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('清空编辑图层，共删除了${e.count}个几何对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "clear",
      value: function clear(fn) {
        this.engine.excute(CommandType.Editor_Clear, {}, fn);
      }
      /**
       * 查询编辑图层中对象的关联数据
       * @method
       * @param {number}   id ：    几何对象的id
       * @param {function} fn ：    回调函数，返回是否成功和调用结果信息，返回信息结构如下：
       * {
       *   command:Editor_QueryObjectData,
       *   result:_SUCCESS,
       *   id:0,
       *   data:{name:'object1',sex:'male',age:17}
       * }
       * @example
       * dc.editor.queryObjectData(5,
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('对象\"${e.id}\"的数据是\"${e.data}\"');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryObjectData",
      value: function queryObjectData(id, fn) {
        this.engine.excute(CommandType.Editor_QueryObjectData, {
          id: id
        }, fn);
      }
      /**
       * 修改几何对象关联数据
       * @method
       * @param {number}   id ：    几何对象的id
       * @param {json}  data ：    几何对象关联数据
       * @param {function} fn ：    回调函数，返回是否成功和操作结果信息，返回信息结构如下：
       * {
       *   command:Editor_UpdateObjectData,
       *   result:_SUCCESS,
       *   id:1,
       * }
       * @example
       * dc.editor.updateObjectData(1,{name:'object1',sex:'male',age:17},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改几何对象\"${e.id}\"数据成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateObjectData",
      value: function updateObjectData(id, data, fn) {
        this.engine.excute(CommandType.Editor_UpdateObjectData, {
          id: id,
          data: data
        }, fn);
      }
      /**
      * 查询编辑图层中对象的标签
      * @method
      * @param {number}   id ：    几何对象的id
      * @param {function} fn ：    回调函数，返回是否成功和调用结果信息，返回信息结构如下：
      * {
      *   command:Editor_QueryLabels,
      *   result:_SUCCESS,
      *   id:0,
      *   labels:['beijing','traffic']
      * }
      * @example
      * dc.editor.queryLayerLabels(1,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('对象\"${e.id}\"的标签是\"${e.labels}\"');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "queryLabels",
      value: function queryLabels(id, fn) {
        this.engine.excute(CommandType.Editor_QueryLabels, {
          id: id
        }, fn);
      }
      /**
      * 修改几何对象标签
      * @method
      * @param {number}   id ：    几何对象的id
      * @param {Array}  labels ：  为几何对象设置的标签
      * @param {function} fn ：    回调函数，返回是否成功和操作结果信息，返回信息结构如下：
      * {
      *   command:Editor_UpdatLabels,
      *   result:_SUCCESS,
      *   id:1,
      * }
      * @example
      * dc.editor.updatLabels(1,['beijing','traffic'],
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('修改几何对象\"${e.id}\"标签成功！');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "updateLabels",
      value: function updateLabels(id, labels, fn) {
        this.engine.excute(CommandType.Editor_UpdateLabels, {
          id: id,
          labels: labels
        }, fn);
      }
      /**
      * 让一个或多个场景中的几何对象可见
      * @method
      * @param {Array} ids ：                  需要设置为可见的对象的id集合
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_ShowObjects,
      *   result:_SUCCESS,
      *   ids:[1,2,4,8],
      * }
      * @example
      * dc.editor.showObjects([1,2],                //要显示的对象id
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('设置几何对象：\"${e.ids}\"可见成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "showObjects",
      value: function showObjects(ids, fn) {
        this.engine.excute(CommandType.Editor_ShowObjects, {
          ids: ids
        }, fn);
      }
      /**
      * 让编辑图层中的几何对象全部可见
      * @method
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_ShowAll,
      *   result:_SUCCESS,
      *   count:15,
      * }
      * @example
      * dc.editor.showAll(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('设置所有对象可见，共设置了${e.count}个几何对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "showAll",
      value: function showAll(fn) {
        this.engine.excute(CommandType.Editor_ShowAll, {}, fn);
      }
      /**
      * 隐藏一个或多个场景中的几何对象
      * @method
      * @param {Array} ids ：                  需要隐藏的对象的id集合
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_HideObjects,
      *   result:_SUCCESS,
      *   ids:[1,2,4,8],
      * }
      * @example
      * dc.editor.hideObjects([1,2],                //要隐藏的对象id
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('设置几何对象：\"${e.ids}\"可见成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "hideObjects",
      value: function hideObjects(ids, fn) {
        this.engine.excute(CommandType.Editor_HideObjects, {
          ids: ids
        }, fn);
      }
      /**
      * 隐藏编辑图层中的几何对象
      * @method
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_HideAll,
      *   result:_SUCCESS,
      *   count:15,
      * }
      * @example
      * dc.editor.hideAll(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('隐藏所有对象，共隐藏了${e.count}个几何对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "hideAll",
      value: function hideAll(fn) {
        this.engine.excute(CommandType.Editor_HideAll, {}, fn);
      }
      /**
      * 在特定相机距离聚焦到指定的几何对象
      * @method
      * @param {Array} ids ：                  需要聚焦的对象的id集合，以所有对象的外接包络的中心点作为聚焦点
      * @param {number} distance ：            相机到聚焦中心点的距离,以米为单位
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_FocusObjects,
      *   result:_SUCCESS,
      *   ids:[1,2],
      * }
      * @example
      * dc.editor.focusObjects([1,2],  //聚焦id为1、2的对象
      *     1000,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('聚焦到对象\"${e.ids}\"成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "focusObjects",
      value: function focusObjects(ids, distance, fn) {
        this.engine.excute(CommandType.Editor_FocusObjects, {
          ids: ids,
          diatanse: distance
        }, fn);
      }
      /**
      * 在特定相机距离整体聚焦到编辑图层
      * @method
      * @param {number} distance ：            相机到聚焦中心点的距离,以米为单位
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Editor_Focus,
      *   result:_SUCCESS,
      * }
      * @example
      * dc.editor.focus(1000,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('聚焦到编辑图层！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "focus",
      value: function focus(distance, fn) {
        this.engine.excute(CommandType.Editor_Focus, {
          distance: distance
        }, fn);
      }
    }]);

    return DccEditor;
  }();

  /**
   * @class
   * @classdesc DccEvents :
   * DoClient事件注册管理类，用于统一处理主要的三维场景触发的事件
   * 用于事件注册、消息处理机制的触发，可处理系统时间、场景管理事件、场景交互事件、场景编辑事件等
   * @event Web3DClient#DccEvents
   * @example
   * import {DCREngine,DCRClient} from "docity.cloudrender.js"
   *
   * var dcrEngine=new DCREngine();
   * if(dcrEngine.initialize(
   *    'https://www.dataojo.com/docity/dcrservice:8899',     //引擎对应服务地址，用于数据连接和合法性验证
   *    'xxxx-xxxx-xxxx'                                      //用户token信息，有相数DoCity平台授权生成
   *     ))
   *    {
   *       var dc = new DCRClient('divDcc',dcrEngine);
   *       dcrEngine.open((e)=>{
   *            if(e.result==_SUCCESS)
   *            {
   *                //添加对象选中事件监听
   *                dc.events.addEventListener(Events_OnSelected,
   *                   (event)=>{
   *                      console.log(event.layerid + ':' + event.id + "is selected");
   *                   }
   *                );
   *
   *                dc.startRender();
   *            }else
   *            {
   *               console.log('打开DCP工程失败！');
   *            }
   *       }
   *    }
   **/

  var DccEvents = /*#__PURE__*/function () {
    function DccEvents() {
      _classCallCheck(this, DccEvents);
    }

    _createClass(DccEvents, [{
      key: "addEventListener",
      value:
      /**
      * 为引擎和DoClient添加事件监听
      * @method
      * @param {EventType}  eventType ：监听事件类型，参考EventType
      * @param {function} listener ：事件监听回调函数，参数为event，相关事件回调event请参考Events.js
      * */
      function addEventListener(eventType, listener) {
        if (this._listeners === undefined) this._listeners = {};
        var listeners = this._listeners;

        if (listeners[eventType] === undefined) {
          listeners[eventType] = [];
        }

        if (listeners[eventType].indexOf(listener) === -1) {
          listeners[eventType].push(listener);
        }
      }
      /**
      * 检查事件监听是否添加
      * @method
      * @param {EventType}  eventType ：监听事件类型，参考EventType
      * @param {function} listener ：要检查的事件监听回调函数
      * */

    }, {
      key: "hasEventListener",
      value: function hasEventListener(eventType, listener) {
        if (this._listeners === undefined) return false;
        var listeners = this._listeners;
        return listeners[eventType] !== undefined && listeners[eventType].indexOf(listener) !== -1;
      }
      /**
      * 移除事件监听
      * @method
      * @param {EventType}  eventType ：监听事件类型，参考EventType
      * @param {function} listener ：要移除的事件监听回调函数
      * */

    }, {
      key: "removeEventListener",
      value: function removeEventListener(eventType, listener) {
        if (this._listeners === undefined) return;
        var listeners = this._listeners;
        var listenerArray = listeners[eventType];

        if (listenerArray !== undefined) {
          var index = listenerArray.indexOf(listener);

          if (index !== -1) {
            listenerArray.splice(index, 1);
          }
        }
      }
      /**
      * 触发监听事件
      * @method
      * @param {json} event ：事件回调处理数据包，event信息结构具体参考Events.js，下面为简单的示例
      * {
      *   type：2000,  //参考EventType枚举，Events_OnCommand、Events_OnSystemMsg、Events_OnSceneCreated等
      *   command:1,   //Engine_CreateNew=1
      *   excuteTime:500, //执行时间，以毫秒为单位
      *   result:1,    //_SUCCESS
      *   prjName:'d:\docity\project1.dcp',
      * }
      * */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (this._listeners === undefined) return;
        var listeners = this._listeners;
        var listenerArray = listeners[event.type];

        if (listenerArray !== undefined) {
          event.target = this; // Make a copy, in case listeners are removed while iterating.

          var array = listenerArray.slice(0);

          for (var i = 0, l = array.length; i < l; i++) {
            array[i].call(this, event);
          }
        }
      }
    }]);

    return DccEvents;
  }();

  /**
   * @class
   * @classdesc DccEnvironment:
   * 环境配置接口，环境配置接口，支持24小时光照、天气、太阳、月亮、天空、云层等设置,以及场景灯光、特效（区域扫光、屏幕粒子、道路流动线）设置
   * @constructor
   * @param {DCCEngine} engine 关联的渲染引擎对象
   * @returns {DccEnvironment} 返回DccEnvironment对象
   **/

  var DccEnvironment = /*#__PURE__*/function () {
    function DccEnvironment(engine) {
      _classCallCheck(this, DccEnvironment);

      this.engine = engine;
    }
    /**
     * 将当前环境参数保存为场景的默认环境
     * 指令代码：Environment_Save
     * @method
     * @param {function} fn ：回调函数，通过此函数返回环境参数保存是否成功
     * @example
     * dc.environment.save(
     *     (e)=>{
     *        if(e.result==_SUCCESS)
     *        {
     *           console.log('环境参数保存成功！');
     *         }
     *     }
     *   );
     **/


    _createClass(DccEnvironment, [{
      key: "save",
      value: function save(fn) {
        this.engine.excute(CommandType.Environment_Save, {}, fn);
      }
      /**
       * 快速恢复到之前存储的环境设置，便于从场景快照、导览路线锁定的环境中快速恢复到场景默认环境
       * 指令代码 ：Environment_Restore
       * @method
       * @param {function} fn ：回调函数，通过此函数返回环境参数恢复是否成功
       * @example
       * dc.environment.restore(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('环境参数恢复成功！');
       *         }
       *     }
       *   );
       **/

    }, {
      key: "restore",
      value: function restore(fn) {
        this.engine.excute(CommandType.Environment_Restore, {}, fn);
      }
      /**
       * 重设场景的环境参数，将环境参数恢复到场景最初的状态
       * 指令代码：Environment_Reset
       * @method
       * @param {function} fn ：回调函数，通过此函数返回环境重设是否成功
       * @example
       * dc.environment.reset(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('环境参数重设成功！');
       *         }
       *     }
       *   );
       **/

    }, {
      key: "reset",
      value: function reset(fn) {
        this.engine.excute(CommandType.Environment_Reset, {}, fn);
      }
      /**
       * 查询并获取场景的时间设置
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryTimeSetting,
       *   result:_SUCCESS,
       *   day:'2021.1.25',
       *   sunDawn': "06:20:00",
       *   sunDusk': "18:15:00",
       *   time:'12:45:00',
       *   autoLoop:false,
       *   dayLength:180,
       *   nightLength:60
       * }
       * @example
       * dc.environment.queryTimeSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前时间为:${e.time}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryTimeSetting",
      value: function queryTimeSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryTimeSetting, {}, fn);
      }
      /**
       * 修改场景当前时间设置
       * @method
       * @param {json} timeSetting ：  场景事件设置参数
       * @param {function} fn ：       回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateTimeSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultTimeSetting} from "./DccGlobal"
       *
       * const ts=defaultTimeSetting;
       * ts.time='18:30:00';   //设置为六点半
       * ts.sunDawn= '06:20:00', //黎明（日出）时间，格式为：时:分:秒
       * ts.sunDusk= '18:15:00',  //黄昏（日落）时间
       * ts.autoLoop=true;     //开启日夜循环
       * ts.dayLength=600;     //每10分钟完成一次白天循环
       * ts.nightLength=60;    //1分钟完成晚上循环
       * dc.environment.updateTimeSetting(ts,
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置时间参数成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateTimeSetting",
      value: function updateTimeSetting(timeSetting, fn) {
        var timeString = JSON.stringify(timeSetting);
        this.engine.excute(CommandType.Environment_UpdateTimeSetting, {
          timeSetting: timeString
        }, fn);
      }
      /**
       * 查询并获取场景的天气模式设置，主要包括晴天、阴天、多云天、雨天、雪天、沙尘暴
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryWeatherMode,
       *   result:_SUCCESS,
       *   weatherMode:1,
       * }
       * @example
       * dc.environment.queryWeatherMode(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前天气为:${e.weatherMode}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryWeatherMode",
      value: function queryWeatherMode(fn) {
        this.engine.excute(CommandType.Environment_QueryWeatherMode, {}, fn);
      }
      /**
       * 快速设置场景天气模式
       * @method
       * @param {WeatherMode} wm ：  天气模式
       * @param {function} fn ：     回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateWeatherMode,
       *   result:_SUCCESS,
       * }
       * @example
       * dc.environment.updateWeatherMode(wm,
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置天气模式成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateWeatherMode",
      value: function updateWeatherMode(wm, fn) {
        this.engine.excute(CommandType.Environment_UpdateWeatherMode, {
          wm: wm
        }, fn);
      }
      /**
       * 查询并获取场景的光照参数
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryLightSetting,
       *   result:_SUCCESS,
       *   colorTemperature:3000,
       *   ambient:5,
       *   shadowdistance:2000,
       * }
       * @example
       * dc.environment.queryLightSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前光照参数为——色温：${e.colorTemperature};环境光：${e.ambient};阴影可见距离：${e.Shadowdistance}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryLightSetting",
      value: function queryLightSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryLightSetting, {}, fn);
      }
      /**
       * 设置场景光照参数
       * @method
       * @param {json} ls ：     光照参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateLightSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultLightSetting} from "./DccGlobal"   //引用默认光照参数
       *
       * dc.environment.updateLightSetting({ColorTemperature:5000},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置光照参数成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateLightSetting",
      value: function updateLightSetting(ls, fn) {
        this.engine.excute(CommandType.Environment_UpdateLightSetting, ls, fn);
      }
      /**
       * 查询并获取场景的太阳参数
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QuerySunSetting,
       *   result:_SUCCESS,
       *   size:5,
       *   intensity:5,
       * }
       * @example
       * dc.environment.querySunSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前太阳参数为——太阳大小：${e.size};阳光强度：${e.intensity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "querySunSetting",
      value: function querySunSetting(fn) {
        this.engine.excute(CommandType.Environment_QuerySunSetting, {}, fn);
      }
      /**
       * 设置场景太阳参数
       * @method
       * @param {json} sun ：    太阳参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateSunSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultSunSetting} from "./DccGlobal"   //引用默认太阳参数
       *
       * dc.environment.updateSunSetting({size:6,intensity:8},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置太阳参数成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateSunSetting",
      value: function updateSunSetting(sun, fn) {
        this.engine.excute(CommandType.Environment_UpdateSunSetting, sun, fn);
      }
      /**
       * 查询并获取场景的月亮参数
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryMoonSetting,
       *   result:_SUCCESS,
       *   size:5,
       *   intensity:5,
       * }
       * @example
       * dc.environment.queryMoonSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前月亮参数为——月亮大小：${e.size};月亮强度：${e.intensity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryMoonSetting",
      value: function queryMoonSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryMoonSetting, {}, fn);
      }
      /**
       * 设置场景月亮参数
       * @method
       * @param {json} moon ：    月亮参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateMoonSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultMoonSetting} from "./DccGlobal"   //引用默认月亮参数
       *
       * dc.environment.updateMoonSetting({size:6,intensity:8},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置月亮参数成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateMoonSetting",
      value: function updateMoonSetting(moon, fn) {
        this.engine.excute(CommandType.Environment_UpdateMoonSetting, moon, fn);
      }
      /**
       * 查询并获取场景的云层参数
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryCloudSetting,
       *   result:_SUCCESS,
       *   density:5,
       *   thickness:5,
       *   height:5000,
       *   windVelocity:1,
       *   windDirection:90,
       * }
       * @example
       * dc.environment.queryCloudSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前云层参数为——云层厚度：${e.thickness}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryCloudSetting",
      value: function queryCloudSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryCloudSetting, {}, fn);
      }
      /**
       * 设置场景云层参数
       * @method
       * @param {json} cloud ：  云层参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateCloudSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultCloudSetting} from "./DccGlobal"   //引用默认云层参数
       *
       * dc.environment.updateCloudSetting({density:6,height:5,thickness:7000},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置云层参数成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateCloudSetting",
      value: function updateCloudSetting(cloud, fn) {
        this.engine.excute(CommandType.Environment_UpdateCloudSetting, cloud, fn);
      }
      /**
       * 查询并获取场景的雾参数
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryFogSetting,
       *   result:_SUCCESS,
       *   density:5,
       * }
       * @example
       * dc.environment.queryFogSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前雾参数为——雾浓度：${e.density}');
       *       }
       *     }
       *  );
       **/

    }, {
      key: "queryFogSetting",
      value: function queryFogSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryFogSetting, {}, fn);
      }
      /**
       * 设置场景雾浓度参数
       * @method
       * @param {json} fog ：  雾浓度
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateFogSetting,
       *   result:_SUCCESS,
       * }
       * @example
       *
       * dc.environment.updateFogSetting({intensity:6},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置雾浓度参数成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateFogSetting",
      value: function updateFogSetting(fog, fn) {
        this.engine.excute(CommandType.Environment_UpdateFogSetting, fog, fn);
      }
      /**
       * 查询并获取场景的下雨参数
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryRainSetting,
       *   result:_SUCCESS,
       *   size:5,
       *   velocity:5,
       *   intensity:5,
       * }
       * @example
       * dc.environment.queryRainSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前雨参数为——雨滴大小：${e.size}，下雨速度：${e.velocity}，强度：${e.intensity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryRainSetting",
      value: function queryRainSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryRainSetting, {}, fn);
      }
      /**
       * 设置场景下雨参数
       * @method
       * @param {json} rain ：  下雨参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateRainSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultRainSetting} from "./DccGlobal"   //引用默认下雨参数
       *
       * dc.environment.updateRainSetting({size:6},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置雨滴大小成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateRainSetting",
      value: function updateRainSetting(rain, fn) {
        this.engine.excute(CommandType.Environment_UpdateRainSetting, rain, fn);
      }
      /**
       * 查询并获取场景的下雪参数
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QuerySnowSetting,
       *   result:_SUCCESS,
       *   size:5,
       *   velocity:5,
       *   intensity:5,
       * }
       * @example
       * dc.environment.querySnowSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前雪参数为——雪片大小：${e.size}，下雪速度：${e.velocity}，强度：${e.intensity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "querySnowSetting",
      value: function querySnowSetting(fn) {
        this.engine.excute(CommandType.Environment_QuerySnowSetting, {}, fn);
      }
      /**
       * 设置场景下雪参数
       * @method
       * @param {json} snow ：  下雪参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateSnowSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultSnowSetting} from "./DccGlobal"   //引用默认下雪参数
       *
       * dc.environment.updateSnowSetting({size:6},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('设置雪片大小成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateSnowSetting",
      value: function updateSnowSetting(snow, fn) {
        this.engine.excute(CommandType.Environment_UpdateSnowSetting, snow, fn);
      }
      /**
       * 查询并获取场景扫描特效设置
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryScaningSetting,
       *   result:_SUCCESS,
       *   style:0,
       *   coordType:0,
       *   origin:[116.5,39.8,0.0],
       *   velocity:5,
       * }
       * @example
       * dc.environment.queryScaningSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前扫描参数为——样式：${e.style}，速度：${e.velocity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryScaningSetting",
      value: function queryScaningSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryScaningSetting, {}, fn);
      }
      /**
       * 设置场景扫描参数
       * @method
       * @param {json} scan ：  扫描参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateScaningSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultScanSetting} from "./DccGlobal"   //引用默认扫描参数
       *
       * dc.environment.updateScaningSetting({style:1},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改扫描样式成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateScaningSetting",
      value: function updateScaningSetting(scan, fn) {
        this.engine.excute(CommandType.Environment_UpdateScaningSetting, {
          scan: scan
        }, fn);
      }
      /**
       * 查询并获取场景漂浮粒子特效设置
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryFloatingParticlesSetting,
       *   result:_SUCCESS,
       *   density:3,
       *   velocity:5,
       *   color:[0.5,0.5,1.0,0.8]
       * }
       * @example
       * dc.environment.queryFloatingParticlesSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前漂浮粒子参数为——密度：${e.density}，速度：${e.velocity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryFloatingParticlesSetting",
      value: function queryFloatingParticlesSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryFloatingParticlesSetting, {}, fn);
      }
      /**
       * 设置场景漂浮粒子参数
       * @method
       * @param {json} fp ：  漂浮粒子参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateFloatingParticlesSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultFloatingParticlesSetting} from "./DccGlobal"   //引用默认漂浮粒子参数
       *
       * dc.environment.updateFloatingParticlesSetting({density:1},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改漂浮粒子密度成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateFloatingParticlesSetting",
      value: function updateFloatingParticlesSetting(fp, fn) {
        this.engine.excute(CommandType.Environment_UpdateFloatingParticlesSetting, {
          fp: fp
        }, fn);
      }
      /**
       * 查询并获取场景上升线条特效设置
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryRasingLineslesSetting,
       *   result:_SUCCESS,
       *   density:3,
       *   velocity:5,
       *   color:[0.5,0.5,1.0,0.8]
       * }
       * @example
       * dc.environment.queryRasingLineslesSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前上升线条参数为——密度：${e.density}，速度：${e.velocity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryRasingLineslesSetting",
      value: function queryRasingLineslesSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryRasingLineslesSetting, {}, fn);
      }
      /**
       * 设置场景上升线条参数
       * @method
       * @param {json} rl ：  上升线条参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateRasingLineslesSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultRasingLinesSetting} from "./DccGlobal"   //引用默认上升线条参数
       *
       * dc.environment.updateRasingLineslesSetting({density:1},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改上升线条密度成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateRasingLineslesSetting",
      value: function updateRasingLineslesSetting(rl, fn) {
        this.engine.excute(CommandType.Environment_UpdateRasingLineslesSetting, {
          rl: rl
        }, fn);
      }
      /**
       * 查询并获取场景道路流动线特效设置
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryTrafficflowSetting,
       *   result:_SUCCESS,
       *   density:3,
       *   velocity:5,
       *   color:[0.5,0.5,1.0,0.8]
       * }
       * @example
       * dc.environment.queryTrafficflowSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('当前道路流动线参数为——密度：${e.density}，速度：${e.velocity}');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryTrafficflowSetting",
      value: function queryTrafficflowSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryTrafficflowSetting, {}, fn);
      }
      /**
       * 设置场景道路流动线特效参数
       * @method
       * @param {json} tf ：  道路流动线条参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateTrafficflowSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultTrafficflowSetting} from "./DccGlobal"   //引用默认道路流动线参数
       *
       * dc.environment.updateTrafficflowSetting({density:1,velocity:2},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改道路流动线密度、速度成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateTrafficflowSetting",
      value: function updateTrafficflowSetting(tf, fn) {
        this.engine.excute(CommandType.Environment_UpdateTrafficflowSetting, {
          tf: tf
        }, fn);
      }
      /**
       * 查询并获取日夜场景切换设置
       * @method
       * @param {function} fn ：         回调函数，返回查询是否成功，返回信息结构如下：
       * {
       *   command:Environment_QueryDayandNightSetting,
       *   result:_SUCCESS,
       *   dayObjectTags:["daygroup1","daygroup2","daygroup3"],  //白天才显示物体的标签
       *   nightObjectTags:["nightbroup1","nightgroup2","nightgroup3"], //夜晚才显示物体的标签
       *   matirialTags:"grop1",                                     //白天夜晚需要改变材质的物体标签
       *   dawn: "HHMMSS",                                           //设定黎明时间
       *   sunrise:"HHMMSS",                                         //设定日出时间
       *   dusk:"HHMMSS",                                            //设定黄昏时间
       *   sunset:"HHMMSS",                                          //设定日落时间
       * }
       * @example
       * dc.environment.queryDayandNightSetting(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('_SUCCESS');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryDayandNightSetting",
      value: function queryDayandNightSetting(fn) {
        this.engine.excute(CommandType.Environment_QueryDayandNightSetting, {}, fn);
      }
      /**
       * 设置日夜场景切换参数
       * @method
       * @param {json} dayandNight ：  日夜参加切换参数
       * @param {function} fn ： 回调函数，返回是否设置成功：
       * {
       *   command:Environment_UpdateDayandNightSetting,
       *   result:_SUCCESS,
       * }
       * @example
       * import {defaultDayandNightSetting} from "./DccGlobal"   //引用默认日夜切换参数
       *
       * dc.environment.updateDayandNightSetting({density:1},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateDayandNightSetting",
      value: function updateDayandNightSetting(fp, fn) {
        this.engine.excute(CommandType.Environment_UpdateDayandNightSetting, {
          dayandNight: dayandNight
        }, fn);
      }
      /**
       * 播放日夜场景切换
       * @method
       * @param {json} pf ：  日夜参加切换 播放参数
       * pf = {
       *   startTime: "HHMMSS", //播放开始时间
       *   endTime: "HHMMSS",   //播放结束时间
       *   forward: "1",        //1：从开始到结束时间，0：从结束到开始时间
       *   timespan:2000,       //播放时长，以毫秒为单位
       * }
       * @param {function} fn ： 回调函数，返回是否播放成功：
       * {
       *   command:Environment_PalyDayandNight,
       *   result:_SUCCESS,
       * }
       * @example
       *
       * dc.environment.palyDayandNight({density:1},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('播放成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "palyDayandNight",
      value: function palyDayandNight(fp, fn) {
        this.engine.excute(CommandType.Environment_PalyDayandNight, {
          dayandNight: dayandNight
        }, fn);
      }
    }]);

    return DccEnvironment;
  }();

  /**
  * @class
  * @classdesc DccLayers:
  * 二三维场景图层接口，用于获取图层信息，对图层进行配置和管理
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccLayers} 返回DccLayers对象
  **/

  var DccLayers = /*#__PURE__*/function () {
    function DccLayers(engine) {
      _classCallCheck(this, DccLayers);

      this.engine = engine;
    }
    /**
    * 查询场景中所有的图层
    * @method
    * @param {LayersQueryMode} queryMode ：查询方式，详细参考：LayersQueryMode
    * @param {Array} labels ：图层标签过滤条件，通过标签对查询结果进行过滤，只有具备特定标签的图层才被返回；labels默认为[]，此时标签过滤失效，将依据其他查询条件返回所有满足要求的图层。
    * @param {function} fn ：回调函数，返回是否成功和图层信息，包括图层名称、图层类型、可见、可拾取、可悬停触发和图层标签，返回信息结构如下：
    * {
    *   result:_SUCCESS,
    *   command:Layers_QueryLayers,
    *   layers:[
    *     {layerName:'road',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base','主干道']},
    *     {layerName:'water',layerType:1000,visible:0,pickable=0,hoverable=0,cacheable:0,labels:['base']},
    *     {layerName:'building',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base']},
    *   ]
    * }
    * @example
    * dc.layers.queryLayers(
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           //输出图层名称及其他属性
    *           console.table(layers);
    *        }
    *     }
    *  );
    **/


    _createClass(DccLayers, [{
      key: "queryLayers",
      value: function queryLayers() {
        var queryMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LayersQueryMode.AllLayers;
        var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Layers_QueryLayers, {
          queryMode: queryMode,
          labels: labels
        }, fn);
      }
      /**
      * 在场景中添加新的图层
      * @method
      * @param {LayerType} layerType ： 图层类型
      * @param {string} layerName ：    图层名称
      * @param {json} layerProp ：      图层属性,包含图层显示风格、可见比例尺,过滤器和超链接等等
      * @param {string} datasource ：   图层数据,指向GeoJSON格式数据源文件或DoSpace空间数据查询下载服务地址,如：d:\data\station.json
      * @param {DataSourceType} dsType：添加的数据格式,参考DataSourceType
      * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_AddLayer,
      *   result:_SUCCESS,
      *   layerType:1001,
      *   layerName:'layer1'，
      * }
      * @example
      * import {LayerType,LineType,LineStyle,PolygonType,FillStyle,RadiationStyle,HighlightStyle,RTTargetType,} from "./common/DccObjects"
      * import {createLayerProp} from "./common/DccObjects"
      * import {UniqueStyleMapping} from "./common/StyleMapping"
      * 
      * const layerProp=createLayerProp(LayerType.PointLayer);  //创建点图层属性表
      * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
      * usm.addMappingItem('1',[5,5]);        //添加单值映射项
      * usm.addMappingItem('2',[10,10]);
      * usm.addMappingItem('3',[20,20]);
      * layerProp.size=usm.toJson();          //设置size的样式映射
      * 
      * dc.layers.addLayer(LayerType.PointLayer,'layer1',
      *                     'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',  //查询周边加油站
      *                     layerProp,
      *                     (e)=>{
      *                       if(e.result==_SUCCESS)
      *                       {
      *                           console.log('图层\"${e.layerName}\"添加成功!');
      *                       }
      *                     }
      *   );
      **/

    }, {
      key: "addLayer",
      value: function addLayer(layerType, layerName, LayerProp, datasource) {
        var dsType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DataSourceType.GeoJSON;
        var fn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        this.engine.excute(CommandType.Layers_AddLayer, {
          layerType: layerType,
          layerName: layerName,
          dsType: dsType,
          datasource: datasource,
          LayerProp: LayerProp
        }, fn);
      }
      /**
      * 更新场景中指定图层的样式属性，支持整体更新和局部更新
      * @method
      * @param {string} layerName ：    图层名称
      * @param {json} layerProp ：    图层属性，包含图层显示风格、可见比例尺，过滤器和超链接等等
      * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_UpdateLayerProp,
      *   result:_SUCCESS,
      *   layerType:1001,
      *   layerName:'layer1'，
      * }
      * @example
      * import {createLayerProp} from "./common/DccObjects"
      * import {UniqueStyleMapping} from "./common/StyleMapping"
      * 
      * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
      * usm.addMappingItem('1',[5,5]);        //添加单值映射项
      * usm.addMappingItem('2',[10,10]);
      * usm.addMappingItem('3',[20,20]);
      * 
      * //修改图层的size属性
      * dc.layers.updateLayerProp('layer1',{size:usm.toJson()},
      *      (e)=>{
      *         if(e.result==_SUCCESS)
      *         {
      *             console.log('图层\"${e.layerName}\"更新属性成功!');
      *         }
      *       }
      *   );
      **/

    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(layerName, LayerProp, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerProp, {
          layerName: layerName,
          LayerProp: LayerProp
        }, fn);
      }
      /**
      * 查询场景中图层对应的数据源
      * @method
      * @param {string} layerName ：    图层名称
      * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_QueryLayerDatasource,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      *   dataSource:'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation'
      * }
      * @example
      * dc.layers.queryLayerDatasource('layer1',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('图层\"${e.layerName}\"的数据源是\"${e.dataSource}\"');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "queryLayerDatasource",
      value: function queryLayerDatasource(layerName, fn) {
        this.engine.excute(CommandType.Layers_QueryLayerDatasource, {
          layerName: layerName
        }, fn);
      }
      /**
      * 修改场景中图层对应的数据源
      * @method
      * @param {string} layerName ：    图层名称
      * @param {string} datasource ：   要重新连接到图层的数据源
      * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_UpdateLayerDatasource,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      * }
      * @example
      * dc.layers.updateLayerDatasource('layer1','http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('图层\"${e.layerName}\"更新数据源成功！');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "updateLayerDatasource",
      value: function updateLayerDatasource(layerName, datasource, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerDatasource, {
          layerName: layerName,
          datasource: datasource
        }, fn);
      }
      /**
      * 查询图层基本设置
      * @method
      * @param {string} layerName ：    图层名称
      * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_QueryLayerSetting,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      *   visible:1,  
      *   pickable:0, 
      *   hoverable:0,
      *   cacheable:0,
      * }
      * @example
      * dc.layers.queryLayerSetting('layer1',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('图层\"${e.layerName}\"的设置是\"visible ：${e.visible} pickable ${e.pickable} hoverable：${e.hoverable} | cacheable ：${e.cacheable} |\"');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "queryLayerSetting",
      value: function queryLayerSetting(fn) {
        this.engine.excute(CommandType.Layers_QueryLayerSetting, {}, fn);
      }
      /**
      * 修改场景中图层基本设置
      * @method
      * @param {string} layerName ：    图层名称
      * @param {json} layerSetting ：   图层配置信息
      * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_UpdateLayerSetting,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      * }
      * @example
      * import {defaultLayerSetting} from "./DccGlobal"
      * 
      * const lyrSetting=defaultLayerSetting;
      * lyrSetting.visible=false;
      * dc.layers.updateLayerSetting('layer1',lyrSetting,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('修改图层\"${e.layerName}\"基本设置成功！');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "updateLayerSetting",
      value: function updateLayerSetting(layerName, LayerSetting, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerSetting, {
          layerName: layerName,
          LayerSetting: LayerSetting
        }, fn);
      }
      /**
      * 查询场景中图层的标签
      * @method
      * @param {string} layerName ：    图层名称
      * @param {function} fn ：         回调函数，返回是否成功和结果数据，返回信息结构如下：
      * {
      *   command:Layers_QueryLayerLabels,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      *   labels:['beijing','traffic']
      * }
      * @example
      * dc.layers.queryLayerLabels('layer1',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('图层\"${e.layerName}\"的标签是\"${e.labels}\"');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "queryLayerLabels",
      value: function queryLayerLabels(fn) {
        this.engine.excute(CommandType.Layers_QueryLayerLabels, {}, fn);
      }
      /**
      * 修改图层标签
      * @method
      * @param {string} layerName ：  图层名称
      * @param {Array}  labels ：     图层标签
      * @param {function} fn ：       回调函数，返回是否成功和操作图层信息，返回信息结构如下：
      * {
      *   command:Layers_UpdateLayerLabels,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      * }
      * @example
      * dc.layers.updateLayerLabels('layer1',['beijing','traffic'],
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('修改图层\"${e.layerName}\"标签成功！');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "updateLayerLabels",
      value: function updateLayerLabels(layerName, labels, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerLabels, {
          layerName: layerName,
          labels: labels
        }, fn);
      }
      /**
      * 查询图层当前渲染模式，实景、水晶体、X光
      * @method
      * @param {string} layerName ：    图层名称
      * @param {function} fn ：         回调函数，返回是否成功和查询结果信息，返回信息结构如下：
      * {
      *   command:Layers_QueryLayerRenderMode,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      *   renderMode:0,
      *   outlineColor:[0.5,0.5,0.9,0.8],
      *   filleColor:[0.5,0.5,0.9,0.8],
      *   fillMode:1,  
      *   glow:5,    
      * }
      * @example
      * dc.layers.queryLayerRenderMode('layer1',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('图层\"${e.layerName}\"的渲染模式是\"${e.renderMode}\"');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "queryLayerRenderMode",
      value: function queryLayerRenderMode(fn) {
        this.engine.excute(CommandType.Layers_QueryLayerRenderMode, {}, fn);
      }
      /**
      * 修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式
      * @method
      * @param {string} layerName ：  图层名称
      * @param {json}   renderMode ： 图层渲染模式
      * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_UpdateLayerRenderMode,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      * }
      * @example
      * import {RenderModeType} from "./common/DccObjects"
      * import {defaultRenderMode} from "./DccGlobal"
      * 
      * const renderMode=defaultRenderMode;
      * renderMode.renderMode=RenderModeType.XRayMode;
      * renderMode.filleColor=[1.0,0.5,0.5,0.8];
      * dc.layers.updateLayerRenderMode('layer1',renderMode,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('修改图层\"${e.layerName}\"渲染模式成功！');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "updateLayerRenderMode",
      value: function updateLayerRenderMode(layerName, renderMode, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerRenderMode, {
          layerName: layerName,
          renderMode: renderMode
        }, fn);
      }
      /**
      * 批量修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式，可以根据图层类型（底座图层、动态图层）、图层标签进行批量修改
      * @method
      * @param {LayersQueryMode} queryMode ：采用图层查询方式来确认修改图层是否底座图层、动态图层，详细参考：LayersQueryMode
      * @param {Array} labels ：      图层标签数据，通过标签定义修改具备特定标签的图层的渲染模式，当该属性为[]，则标签过滤不起作用，即修改所有图层
      * @param {json} renderMode ：   图层渲染模式
      * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
      * {
      *   command:Layers_UpdateLayersRenderMode,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      * }
      * @example
      * import {defaultRenderMode} from "./common/DccObjects"
      * 
      * const rm=defaultRenderMode;
      * rm.renderMode=RenderModeType.XRayMode;
      * rm.filleColor=[1.0,0.5,0.5,0.8];
      * dc.layers.updateLayersRenderMode(['building','terrain'],rm,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('批量修改图层渲染模式成功！');
      *        }
      *     }
      *  );
      **/

    }, {
      key: "updateLayersRenderMode",
      value: function updateLayersRenderMode() {
        var queryMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LayersQueryMode.BaseLayersOnly;
        var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var renderMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          renderMode: RenderModeType.RealMode
        };
        var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        this.engine.excute(CommandType.Layers_UpdateLayerLabels, {
          queryMode: queryMode,
          labels: labels,
          renderMode: renderMode
        }, fn);
      }
      /**
      *修改图层名称
      * @method
      * @param {string} layerName ：图层名称
      * @param {string} newlayerName ：图层新名称
      * @param {function} fn ：回调函数，返回是否成功和图层信息，返回信息结构如下：
      * {
      *   command:Layers_RenameLayer,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      *   newlayerName:'poiLayer',
      * }
      * @example
      * dc.layers.renameLayer('layer1','poiLayer',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('图层\"${e.layerName}\"改名成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "renameLayer",
      value: function renameLayer(layerName, newlayerName, fn) {
        this.engine.excute(CommandType.Layers_RenameLayer, {
          layerName: layerName,
          newlayerName: newlayerName
        }, fn);
      }
      /**
      * 删除场景中的图层
      * @method
      * @param {string} layerName ：要删除的图层的名称
      * @param {function} fn ：回调函数，返回是否成功和删除图层信息，返回信息结构如下：
      * {
      *   command:Layers_RemoveLayer,
      *   result:_SUCCESS,
      *   layerName:'layer1'，
      * }
      **/

    }, {
      key: "removeLayer",
      value: function removeLayer(layerName, fn) {
        this.engine.excute(CommandType.Layers_RemoveLayer, {
          layerName: layerName
        }, fn);
      }
      /**
      * 在特定相机距离聚焦到指定的图层
      * @method
      * @param {string} layerName ：需要聚焦的图层的名称
      * @param {number} diatanse ： 相机到聚焦中心点的距离,以米为单位
      * @param {function} fn ：     回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Layers_Focus,
      *   result:_SUCCESS,
      *   layerName:'layer1',
      * }
      * @example
      * dc.layers.focus(layerName,  //要聚焦的图层名称
      *     1000,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('聚焦到图层\"${e.layerName}\"成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "focus",
      value: function focus(layerName, distance, fn) {
        this.engine.excute(CommandType.Layers_Focus, {
          layerName: layerName,
          distance: distance
        }, fn);
      }
    }]);

    return DccLayers;
  }();

  /**
   * @class
   * @classdesc DccMeasure : 量算分析接口，用于进行场景量算、空间分析交互操作
   * @constructor
   * @param {DCCEngine} engine 关联的渲染引擎对象
   * @returns {DccMeasure} 返回DccMeasure对象 
  **/

  var DccMeasure = /*#__PURE__*/function () {
    function DccMeasure(engine) {
      _classCallCheck(this, DccMeasure);

      this.engine = engine;
    }
    /**
    * 设置当前量算工具
    * @method
    * @param {MeasureType} measureType ：         量算类型，包括距离、面积、高度、通视、可视域等，具体参考MeasureType
    * @param {json} measureStyle ：      量算对象显示样式，量算时的线样式、颜色、填充色、文字样式等
    * @param {function} fn ：            回调函数，返回是否成功，返回信息结构如下：
    * {
    *   command:Measure_SetMeasureTool,
    *   result:_SUCCESS,
    * }
    * @example
    * dc.measure.setMeasureTool(MeasureType.Aera,{LineStyle:1},
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           console.log('设置量算工具成功！');
    *        }
    *     }
    *   );
    **/


    _createClass(DccMeasure, [{
      key: "setMeasureTool",
      value: function setMeasureTool() {
        var measureType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MeasureType.distance;
        var measureStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMeasureStyle;
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Measure_SetMeasureTool, {
          measureType: measureType,
          measureStyle: measureStyle
        }, fn);
      }
      /**
      * 获取当前量算工具信息
      * @method
      * @param {function} fn ：            回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Measure_GetMeasureTool,
      *   result:_SUCCESS,
      *   measureType:0,
      * }
      * @example
      * dc.measure.getMeasureTool(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('当前量算工具为${e.measureType}！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "getMeasureTool",
      value: function getMeasureTool(fn) {
        this.engine.excute(CommandType.Measure_GetMeasureTool, {}, fn);
      }
      /**
      * 获取最新的量算结果
      * @method
      * @param {MeasureType} measureType ：         量算类型，包括距离、面积、高度、通视、可视域等，具体参考MeasureType
      * @param {function} fn ：            回调函数，返回是否成功，返回信息结构如下：
      * //距离，以米为单位,返回总长度和每一段长度
      * {
      *   command:Measure_GetMeasureResult,
      *   result:_SUCCESS,
      *   measureType:0,      
      *   distance:3500,
      *   segments:[{x:116.2,y:38.9,z:0.0,length:0.0},{x:116.23,y:38.91,z:0.0,length:1922.8},{x:116.203,y:38.61,z:0.0,length:1577.2}],
      * }
      * //面积，以平方米为单位
      * {
      *   command:Measure_GetMeasureResult,
      *   result:_SUCCESS,
      *   measureType:1,
      *   area:100,
      * }
      * //高度，以米为单位
      * {
      *   command:Measure_GetMeasureResult,
      *   result:_SUCCESS,
      *   measureType:2,
      *   height:500,
      * }
      * //通视，返回是否可见
      * {
      *   command:Measure_GetMeasureResult,
      *   result:_SUCCESS,
      *   measureType:3,
      *   isVisib:0,
      * }
      * //可视域，返回可见范围百分比
      * {
      *   command:Measure_GetMeasureResult,
      *   result:_SUCCESS,
      *   measureType:4,
      *   Viewshed:0.75,
      * }
      * @example
      * dc.measure.getMeasureResult(MeasureType.Aera,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           if(e.measureType==1)
      *           {
      *             console.log('量算结果为${e.area}平方米');
      *           }
      *        }
      *     }
      *   );
      **/

    }, {
      key: "getMeasureResult",
      value: function getMeasureResult(measureType, fn) {
        this.engine.excute(CommandType.Measure_GetMeasureResult, {
          measureType: measureType
        }, fn);
      }
      /**
      * 聚焦到当前量算操作对象
      * @method
      * @param {number} diatanse ：            相机到聚焦中心点的距离,以米为单位
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Measure_Focus,
      *   result:_SUCCESS,
      * }
      * @example
      * dc.measure.focus(1000,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('聚焦到量算对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "focus",
      value: function focus(diatanse, fn) {
        this.engine.excute(CommandType.Measure_Focus, {
          diatanse: diatanse
        }, fn);
      }
      /**
       * 高亮当前量算对象
       * @method
       * @param {HighlightMode} hm ：高亮模式，具体参考HighlightMode
       * @param {function} fn ：     回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Measure_Highlight,
       *   result:_SUCCESS,
       * }
       * @example
       * import {HighlightMode} from "./common/DccGlobal"
       * 
       * dc.measure.highlight(HighlightMode.Emitter,    //高亮模式为边缘动态光，发光强度循环动态变化
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('高亮量算对象！');
       *        }
       *     }
       *   );
      **/

    }, {
      key: "highlight",
      value: function highlight(hm, fn) {
        this.engine.excute(CommandType.Measure_Highlight, {
          hm: hm
        }, fn);
      }
      /**
      * 完成并当前量算，并结束当前测量动作，下次鼠标动作将展开一次新的量算
      * @method
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Measure_Finish,
      *   result:_SUCCESS,
      * }
      * @example
      * dc.measure.finish(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('当前量算操作已完成！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "finish",
      value: function finish(fn) {
        this.engine.excute(CommandType.Measure_Finish, {}, fn);
      }
      /**
      * 取消当前量算，重新开始新的量算
      * @method
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Measure_Cancel,
      *   result:_SUCCESS,
      * }
      * @example
      * dc.measure.cancel(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('取消了当前量算操作！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "cancel",
      value: function cancel(fn) {
        this.engine.excute(CommandType.Measure_Cancel, {}, fn);
      }
      /**
      * 清空所有量算对象
      * @method
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Measure_Clear,
      *   result:_SUCCESS,
      *   count:15,
      * }
      * @example
      * dc.measure.clear(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('清空所有量算对象，共删除了${e.count}个几何对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "clear",
      value: function clear(fn) {
        this.engine.excute(CommandType.Measure_Clear, {}, fn);
      }
    }]);

    return DccMeasure;
  }();

  /**
  * @class
  * @classdesc DccSelection :
  * 二三维场景选择集管理接口，用于对选取对象进行高亮、动画、分解、合并等操作，支持对选中高亮风格进行设置
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccSelection} 返回DccSelection对象
  **/

  var DccSelection = /*#__PURE__*/function () {
    function DccSelection(engine) {
      _classCallCheck(this, DccSelection);

      this.engine = engine;
    }
    /**
    * 将特定图层上的对象填充到选择集中，设置为选择状态，在设置完选择集时，选择集中原有的对象将被自动清空
    * @method
    * @param {string} layer ：     选择对象所在图层
    * @param {Array} ids ：        要选择的对象的id，通过数组设置同一个图层上的多个对象
    * @param {function} fn ：      回调函数，返回是否成功，返回信息结构如下：
    * {
    *   command:Selection_SetObjects,
    *   result:_SUCCESS,
    *   layer:'layer1',
    *   ids:[1,2],
    * }
    * @example
    * dc.selection.setObjects('layer1',[1,2],
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           console.log('选中\"${e.layer}\"图层中的\"${e.ids}\"！');
    *        }
    *     }
    *   );
    **/


    _createClass(DccSelection, [{
      key: "setObjects",
      value: function setObjects(layer, ids, fn) {
        this.engine.excute(CommandType.Selection_SetObjects, {
          layer: layer,
          ids: ids
        }, fn);
      }
      /**
      * 获取选择集中的对象信息
      * @method
      * @param {function} fn ：回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_GetObjects,
      *   result:_SUCCESS,
      *   layer:'layer1',
      *   ids:[1],
      * }
      * @example
      * dc.selection.getObjects(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *             console.log('选中\"${e.layer}\"图层中的\"${e.ids}\"！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "getObjects",
      value: function getObjects(fn) {
        this.engine.excute(CommandType.Selection_GetObjects, {}, fn);
      }
      /**
      * 获取选中对象的业务属性数据，如：名称、编码、地址等
      * @method
      * @param {function} fn ：回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_getObjectsData,
      *   result:_SUCCESS,
      *   layer:'layer1',
      *   data:[
      *     {id:0,name:'监测站1',type:1, province:'北京',district:'顺义'},
      *     {id:1,name:'监测站2',type:3, province:'北京',district:'昌平'},
      *     {id:2,name:'监测站3',type:1, province:'北京',district:'大兴'},
      *   ]
      * }
      * @example
      * dc.selection.getObjectsData(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *             //输出对象属性表
      *             console.table(e.data);
      *        }
      *     }
      *   );
      **/

    }, {
      key: "getObjectsData",
      value: function getObjectsData(fn) {
        this.engine.excute(CommandType.Selection_getObjectsData, {}, fn);
      }
      /**
      * 在特定相机距离整体聚焦到选择对象
      * @method
      * @param {number} diatanse ：            相机到聚焦中心点的距离,以米为单位
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_Focus,
      *   result:_SUCCESS,
      * }
      * @example
      * dc.selection.focus(1000,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('聚焦到选中对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "focus",
      value: function focus(diatanse, fn) {
        this.engine.excute(CommandType.Selection_Focus, {
          diatanse: diatanse
        }, fn);
      }
      /**
      * 高亮选中对象
      * @method
      * @param {HighlightMode} hm ：高亮模式，具体参考HighlightMode
      * @param {function} fn ：     回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_Highlight,
      *   result:_SUCCESS,
      * }
      * @example
      * import {HighlightMode} from "./DccGlobal"
      * 
      * dc.selection.highlight(HighlightMode.Emitter,    //高亮模式为边缘动态光，发光强度循环动态变化
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('高亮选中对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "highlight",
      value: function highlight(hm, fn) {
        this.engine.excute(CommandType.Selection_Highlight, {
          hm: hm
        }, fn);
      }
      /**
      * 播放选中对象动画
      * @method
      * @param {AnimationMode} aniMode  ：动画模式，具体参考AnimationMode
      * @param {number} loopTimes  ：动画循环次数，-1为无限循环，直至选择对象清空或重新设置动画
      * @param {number} loopPeriod ：动画循环周期，以秒为单位
      * @param {function} fn ：     回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_Animate,
      *   result:_SUCCESS,
      * }
      * @example
      * import {AnimationMode} from "./common/DccObjects"
      * 
      * dc.selection.animate(AnimationMode.Emitter,3,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('播放选中对象动画！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "animate",
      value: function animate() {
        var aniMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AnimationMode.Flicker;
        var loopTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var loopPeriod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
        var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        this.engine.excute(CommandType.Selection_Animate, {
          aniMode: aniMode,
          loopTimes: loopTimes,
          loopPeriod: loopPeriod
        }, fn);
      }
      /**
      * 对选中对象进行拆解，主要针对类似建筑物等具有复杂结构的三维模型
      * @method
      * @param {string} joint  ：          拆解位置，连接点，通过字符串传递
      * @param {DecomposeStyle} decStyle ：拆解方式，横向，纵向，炸开
      * @param {AnimationMode} aniMode：   拆解动画效果
      * @param {function} fn ：            回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_Decompose,
      *   result:_SUCCESS,
      * }
      * @example
      * import {AnimationMode,DecomposeStyle} from "./common/DccObjects"
      * 
      * dc.selection.decompose('floor3',           //从楼宇的第三层开始拆解
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('拆解楼宇成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "decompose",
      value: function decompose(joint) {
        var decStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DecomposeStyle.Vertical;
        var aniMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : AnimationMode.Growing;
        var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        this.engine.excute(CommandType.Selection_Decompose, {
          joint: joint,
          decStyle: decStyle,
          aniMode: aniMode
        }, fn);
      }
      /**
      * 对选中拆解对象进行合并还原，主要针对类似建筑物等具有复杂结构的三维模型
      * @method
      * @param {function} fn ：            回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_Combine,
      *   result:_SUCCESS,
      * }
      * @example
      * 
      * dc.selection.combine(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('合并楼宇成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "combine",
      value: function combine(fn) {
        this.engine.excute(CommandType.Selection_Combine, {}, fn);
      }
      /**
      * 清空选择集
      * @method
      * @param {function} fn ：                回调函数，返回是否成功，返回信息结构如下：
      * {
      *   command:Selection_Clear,
      *   result:_SUCCESS,
      *   count:1,
      * }
      * @example
      * dc.selection.clear(
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('清空选择集，请空前选择集中有${e.count}个几何对象！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "clear",
      value: function clear(fn) {
        this.engine.excute(CommandType.Selection_Clear, {}, fn);
      }
    }]);

    return DccSelection;
  }();
   // dyj修改web3d打包，将node_modules需要的spaceojo和three-full放到web3d下的public目录下，修改spaceojo的ip修改，由以前的engine初始化改为读取配置文件

  /**
  * @class
  * @classdesc DccTours:
  * 场景导览接口，用于采集、管理场景快照和漫游路线
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccTours} 返回DccTours对象
  **/

  var DccTours = /*#__PURE__*/function () {
    function DccTours(engine) {
      _classCallCheck(this, DccTours);

      this.engine = engine;
    }
    /**
    * 查询场景中所有的导览路线
    * @method
    * @param {function} fn ：回调函数，返回是否成功和导览路线信息，返回信息结构如下：
    * {
    *   command:Tours_QueryTours,
    *   result:_SUCCESS,
    *   tours:[
    *     {tourName:'tour1'},
    *     {tourName:'tour2'}, 
    *     {tourName:'tour3'},
    *   ]
    * }
    * @example
    * dc.tours.queryTours(
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           for(const t in result.tours)
    *           {
    *             //输出导览路线名称
    *             console.log(t.tourName);
    *           }
    *        }
    *     }
    *   );
    **/


    _createClass(DccTours, [{
      key: "queryTours",
      value: function queryTours(fn) {
        this.engine.excute(CommandType.Tours_QueryTours, {}, fn);
      }
      /**
      * 为当前场景添加导览路线
      * @method
      * @param {string} tourName ：导览路线名称
      * @param {string} tourTime ：路线漫游时间长度，该参数仅适用于沿线导览模式，参见
      * @param {function} fn ：回调函数，返回是否成功和导览路线信息，返回信息结构如下：
      * {
      *   command:Tours_AddTour,
      *   result:_SUCCESS,
      *   tourName:'tour1'，
      *   tourTime:10,
      * }
      * @example
      * dc.tours.addTour('tour1',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('添加导览路线成功');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "addTour",
      value: function addTour(tourName) {
        var tourTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Tours_AddTour, {
          tourName: tourName,
          tourTime: tourTime
        }, fn);
      }
      /**
      * 设置更改导览路线漫游时间
      * @method
      * @param {string} tourName ：览路线名称
      * @param {string} tourTime ：导览路线漫游时间长度
      * @param {function} fn ：回调函数，返回是否成功和导览路线信息，返回信息结构如下：
      * {
      *   command:Tours_SetTourTime,
      *   result:_SUCCESS,
      *   tourName:'tour1'，
      *   tourTime:10,
      * }
      * @example
      * dc.tours.setTourTime('tour1',30,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('设置导览路线${e.tourName}时间成功');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "setTourTime",
      value: function setTourTime(tourName, tourTime, fn) {
        this.engine.excute(CommandType.Tours_SetTourTime, {
          tourName: tourName,
          tourTime: tourTime
        }, fn);
      }
      /**
      * 修改导览路线名称
      * @method
      * @param {string} tourName ：览路线名称
      * @param {string} newTourName ：导览路线新名称
      * @param {function} fn ：回调函数，返回是否成功和导览路线信息，返回信息结构如下：
      * {
      *   command:Tours_RenameTour,
      *   result:_SUCCESS,
      *   oldTourName:'tour1'，
      *   newTourName:'StartPosition',
      * }
      * @example
      * dc.tours.renameTour('tour1','StartPosition',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('${e.tourName}导览路线改名成功');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "renameTour",
      value: function renameTour(tourName, newTourName, fn) {
        this.engine.excute(CommandType.Tours_RenameTour, {
          tourName: tourName,
          newTourName: newTourName
        }, fn);
      }
      /**
      * 删除场景中的导览路线
      * @method
      * @param {string} tourName ：要删除的览路线名称
      * @param {function} fn ：回调函数，返回是否成功和删除的导览路线信息，返回信息结构如下：
      * {
      *   command:Tours_RemoveTour,
      *   result:_SUCCESS,
      *   TourName:'tour1'，
      * }
      **/

    }, {
      key: "removeTour",
      value: function removeTour(tourName, fn) {
        this.engine.excute(CommandType.Tours_RemoveTour, {
          tourName: tourName
        }, fn);
      }
      /**
      * 查询特定导览路线中中所有的快照
      * @method
      * @param {string} tourName ：导览路线名称
      * @param {function} fn ：回调函数，返回是否成功和导览路线信息，返回信息结构如下：
      * {
      *   command:Tours_QuerySnapshots,
      *   result:_SUCCESS,
      *   snapshots:[
      *     {snapshotName:'tour1'，
      *      position：{x:116.3,y:39.9,z:1000.0, yaw:45.0,pitch:30.0},
      *      movingTime:2,
      *      stayingTime:1,
      *      thumb:'http//:www.dataojo.com/docity/thumbs/snap20210110_5577.jpg',
      *     },
      *     {snapshotName:'tour2'，
      *      position：{x:116.3,y:39.9,z:1000.0, yaw:45.0,pitch:30.0},
      *      movingTime:4,
      *      stayingTime:1,
      *      thumb:'http//:www.dataojo.com/docity/thumbs/snap20210110_5577.jpg',
      *     }, 
      *   ]
      * }
      * @example
      * dc.tours.querySnapshots('tour1',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           for(const snap in result.snapshots)
      *           {
      *             //输出导览路线名称
      *             console.log(snap.snapshotName);
      *           }
      *        }
      *     }
      *   );
      **/

    }, {
      key: "querySnapshots",
      value: function querySnapshots(tourName, fn) {
        this.engine.excute(CommandType.Tours_QuerySnapshots, {
          tourName: tourName
        }, fn);
      }
      /**
      * 在指定的导览路线中生成场景快照
      * @method
      * @param {string} tourName ：快照所属导览路线名称
      * @param {string} snapshotName ：快照名称
      * @param {string} position ：相机位置,json对象，格式参考defaultLocation
      * @param {CoordinateType} coordType ：坐标系类型，默认为WGS84投影的经纬度坐标
      * @param {string} movingTime ：从上一快照节点运动到本快照节点的时间长度，只适用于分段导览模式(导览模式分为全程导览模式和分段导览模式，具体参考TourMode)
      * @param {string} stayingTime ：在本快照节点滞留的时间长度，只适用于分段导览模式(导览模式分为全程导览模式和分段导览模式，具体参考TourMode)
      * @param {function} fn ：回调函数，返回是否成功和快照信息，信息结构如下：
      * {
      *   command:Tours_AddSnapshot,
      *   result:_SUCCESS,
      *   TourName:'tour1'，
      *   snapshotName:'newSnapshot',
      *   position：{x:116.3,y:39.9,z:1000.0, yaw:45.0,pitch:30.0},
      *   thumb:'http//:www.dataojo.com/docity/thumbs/snap20210110_5577.jpg',
      * }
      * @example
      * dc.tours.addSnapshot(
      *     'tour1','newSnapshot',defaultLocation,
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log(e.SnapName);
      * 
      *         }
      *     }
      *   );
      **/

    }, {
      key: "addSnapshot",
      value: function addSnapshot(tourName, snapshotName, position) {
        var coordType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CoordinateType.WGS84;
        var movingTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
        var stayingTime = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
        var isNotGenSnapshot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var fn = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        this.engine.excute(CommandType.Tours_AddSnapshot, {
          tourName: tourName,
          snapshotName: snapshotName,
          coordType: coordType,
          position: position,
          movingTime: movingTime,
          stayingTime: stayingTime,
          isNotGenSnapshot: isNotGenSnapshot
        }, fn);
      }
      /**
      * 更新导览路线中生成场景快照
      * @method
      * @param {string} tourName ：快照所属导览路线名称
      * @param {string} snapshotName ：快照名称
      * @param {string} position ：相机位置,json对象，格式参考defaultLocation
      * @param {CoordinateType} coordType ：坐标系类型，默认为WGS84投影的经纬度坐标
      * @param {string} movingTime ：从上一快照节点运动到本快照节点的时间长度,以秒为单位，只适用于分段导览模式(导览模式分为全程导览模式和分段导览模式，具体参考TourMode)
      * @param {string} stayingTime ：在本快照节点滞留的时间长度，以秒为单位，只适用于分段导览模式(导览模式分为全程导览模式和分段导览模式，具体参考TourMode)
      * @param {function} fn ：回调函数，返回是否成功和快照信息
      * {
      *   command:Tours_UpdateSnapshot,
      *   result:_SUCCESS,
      *   TourName:'tour1'，
      *   snapshotName:'snapshot1'
      *   position：{x:116.3,y:39.9,z:1000.0, yaw:45.0,pitch:30.0},
      *   thumb:'http//:www.dataojo.com/docity/thumbs/snap20210110_5577.jpg',
      * }
      * @example
      * dc.tours.updateSnapshot(
      *     'tour1','Snapshot1',
      *     {x:116.3,y:39.9,z:1000.0, yaw:45.0,pitch:30.0},
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log(e.SnapName);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "updateSnapshot",
      value: function updateSnapshot(tourName, snapshotName, position) {
        var coordType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CoordinateType.WGS84;
        var movingTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
        var stayingTime = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
        var fn = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        this.engine.excute(CommandType.Tours_UpdateSnapshot, {
          tourName: tourName,
          snapshotName: snapshotName,
          coordType: coordType,
          position: position,
          movingTime: movingTime,
          stayingTime: stayingTime
        }, fn);
      }
      /**
      * 删除一个导览路线中生成场景快照
      * @method
      * @param {string} tourName ：快照所属导览路线名称
      * @param {string} snapshotName ：快照名称
      * @param {function} fn ：回调函数，返回是否成功和快照信息
      * {
      *   command:Tours_RemoveSnapshot,
      *   result:_SUCCESS,
      *   TourName:'tour1'，
      *   snapshotName:'snapshot1'
      * }
      * @example
      * dc.tours.removeSnapshot(
      *     'tour1','Snapshot1',
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log(e.SnapName);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "removeSnapshot",
      value: function removeSnapshot(tourName, snapshotName, fn) {
        // eslint-disable-next-line space-in-parens
        this.engine.excute(CommandType.Tours_RemoveSnapshot, {
          tourName: tourName,
          snapshotName: snapshotName
        }, fn);
      }
    }]);

    return DccTours;
  }();

  /**
  * @class
  * @classdesc DccUtility:
  * 实用工具接口，应用开发中提供的辅助工具，包括蓝图命令、音效开关和其他配置命令
  * ？？？整体配置，包括符号、标签整体缩放率，以适应不同分辨率大屏
  * @constructor
  * @param {DCCEngine} engine 关联的渲染引擎对象
  * @returns {DccUtility} 返回DccUtility对象
  **/

  var DccUtility = /*#__PURE__*/function () {
    function DccUtility(engine) {
      _classCallCheck(this, DccUtility);

      this.engine = engine;
    }
    /**
    * 查询平台配置信息
    * @method
    * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
    * {
    *   command:Utility_QueryConfig,
    *   result:_SUCCESS,
    *   url:'wwww.dataojo.com/docity/cloudrender',
    *   projectPath:'d:\beijing.dcp',
    *   streamingPort:8081,
    *   signallPort:8088,
    *   websocketPort:6000,
    *   Resolution:FHD,
    *   NvEncH264ConfigLevel:52,  
    *   NvEncAverageBitRate:1000, 
    *   NvEncFrameRateNum:10,    
    * }
    * @example
    * dc.utility.queryConfig(
    *     (e)=>{
    *        if(e.result==_SUCCESS)
    *        {
    *           console.log(e.streamingPort);
    *        }
    *     }
    *   );
    **/


    _createClass(DccUtility, [{
      key: "queryConfig",
      value: function queryConfig(fn) {
        this.engine.excute(CommandType.Utility_QueryConfig, {}, fn);
      }
      /**
      * 修改平台配置信息
      * @method
      * @param {json} config ：平台配置参数,参数可设置内容参见defaultConfig
      * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
      * {
      *   command:Utility_UpdateConfig,
      *   result:_SUCCESS,
      * }
      * @example
      * import {HD,FHD,QHD,defaultConfig} from "./DccGlobal"  //可以引入系统默认参数，在此基础上进行修改
      * dc.utility.queryConfig({streamingPort：1234}，         //配置像素流传输端口
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('配置相数流传输端口成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "updateConfig",
      value: function updateConfig(config, fn) {
        this.engine.excute(CommandType.Utility_UpdateConfig, {
          config: config
        }, fn);
      }
      /**
      * 调用平台自定义函数，主要是导入UE工程中的蓝图函数
      * @method
      * @param {string} funcName ：函数路径名
      * @param {json}} params ：传入参数
      * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
      * {
      *   command:Utility_CustomFunction,
      *   result:_SUCCESS,
      * }
      * @example
      * dc.utility.customFunction('buildiing.autotransform'，{style:'merge'},
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           console.log('调用平台自定义函数成功！');
      *        }
      *     }
      *   );
      **/

    }, {
      key: "customFunction",
      value: function customFunction(funcName, params, fn) {
        this.engine.excute(CommandType.Utility_CustomFunction, {
          funcName: funcName,
          params: params
        }, fn);
      }
      /**
      * 按标签（tags）设置模型是否可见
      * @method
      * @param {visibleTags} ["ODLine","group1"] 设为可见的模型的tags
      * @param {invisibleTags} ["Heartbeat","group2"]  设为不可见的模型的tags
      * @param {function} fn ：设置回调函数，返回是否成功
      * {
      *   command:Model_SetVisible，
      *   result:_SUCCESS,
      * }
      * @example
      * 
      * dc.utility.setModelVisible(
      *     ["ODLine","group1"],
      *     ["Heartbeat","group2"，"group3"],
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *           //获取组件位置
      *           console.log(e.result);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "setModelVisible",
      value: function setModelVisible(visibleTags, invisibleTags, fn) {
        this.engine.excute(CommandType.Model_SetVisible, {
          "visibleTags": visibleTags,
          "invisibleTags": invisibleTags
        }, fn);
      }
      /**
      * 按标签（tags）获取模型是否可见
      * @method
      * @param {tags} ["ODLine","group1"] 模型的tags
       * @param {function} fn ：设置回调函数，返回是否成功
      * {
      *   command:Model_SetVisible，
      *   result:_SUCCESS,
      *   tags: ["ODLine","group1"],
      *   visible:[true,false],
      * }
      * @example
      * 
      * dc.utility.getModelVisible(
      *     ["ODLine","group1"],
      *   
      *     (e)=>{
      *        if(e.result==_SUCCESS)
      *        {
      *          for(visible in e.visible)
      *           console.log(visible);
      *         }
      *     }
      *   );
      **/

    }, {
      key: "getModelVisible",
      value: function getModelVisible(tags, fn) {
        this.engine.excute(CommandType.Model_GetVisible, {
          "tags": tags
        }, fn);
      }
    }]);

    return DccUtility;
  }();

  /**
   * @class
   * @classdesc DccEngine :
   * 二三维渲染引擎接口，提供工程文件管理、数据导入、指令解析执行渲染指令，触发事件消息处理等功能，所有基于DoCity SDK构建的渲染引擎均要遵守本接口规范
   * 可调用的引擎包括Spaceojo_Map；Web端三维：Spaceojo_Web3D；云渲染：Spaceojo_CloudRender
   * @property {EngineType} type             渲染引擎类型--二维地图：Spaceojo_Map；Web端三维：Spaceojo_Web3D；云渲染：Spaceojo_CloudRender
   * @constructor
   * @returns {DccEngine} 返回具体的渲染引擎对象
   **/

  var DccEngine = /*#__PURE__*/function () {
    function DccEngine() {
      _classCallCheck(this, DccEngine);

      this.type = EngineType.EmptyEngine; //初始化引擎类型

      this.msgHub = {}; //消息中枢，用于对调用返回消息进行统一转发

      this.camera = new DccCamera(this); //初始化相机对象，用于生成快照、定义镜头、飞行路线，执行镜头切换、场景飞行漫游

      this.component = new DccComponent(this); //初始化组件对象，包括指北针、比例尺、缩略图（鹰眼）、图例

      this.coord = new DccCoord(this); //初始化坐标转换对象

      this.editor = new DccEditor(this); //初始化编辑对象，用于在场景中添加、编辑各类几何对象

      this.environment = new DccEnvironment(this); //初始化环境对象

      this.events = new DccEvents(); //初始化事件回调接口

      this.layers = new DccLayers(this); //初始化图层对象，用于图层管理

      this.measure = new DccMeasure(this); //初始化量算对象

      this.selection = new DccSelection(this); //初始化选择集对象

      this.tours = new DccTours(this); //初始化导览路线

      this.utility = new DccUtility(this); //初始化实用工具

      this.init = false; //为初始化，则不能调用引擎相关接口
    }
    /**
     * 初始化渲染引擎验证合法性，并启动服务端渲染线程
     * @method
     * @param {string} url ：引擎对应服务端的URL
     * @param {string} _user：用户名
     * @param {string} _pwd ：口令
     * @param {string} token ：用于关联DoCity API用户授权
     * @returns {boolean} ： 返回引擎是否连接成功，通过授权验证，初始化成功
     **/
    // eslint-disable-next-line no-unused-vars


    _createClass(DccEngine, [{
      key: "initialize",
      value: function initialize(url) {
        var _this = this;
        var token = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        //连接到服务端，进行身份合法性验证
        fetch("".concat(url, "/autoLogin"), {
          method: 'POST',
          body: 'username=${UserName}&pwd=${Password}&token=${token}',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (e) {
          if (e.result == _SUCCESS) {
            _this.server = url;
            _this.token = token;
            _this.init = true;
          } else {
            confirm.log(e.error);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
      /**
       * 新建数字孪生工程,文件型工程文件为*.dcp，在线工程通过需提前部署DoSpace相关服务
       * @method
       * @param {string} prjName ：要新建的工程的全路径名称，如:'d:\docity\project1.dcp'
       * @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_CreateNew,
       *   result:_SUCCESS,
       *   prjName:'d:\docity\project1.dcp',
       * }
       * @example
       * dcrEngine.createNew('d:\docity\project1.dcp'
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('新建DCP工程成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "createNew",
      value: function createNew(prjName, fn) {
        this.excute(CommandType.Engine_CreateNew, {
          prjName: prjName
        }, fn);
      }
      /**
       * 打开数字孪生工程,文件型工程文件为*.dcp，在线工程通过url连接，如：https://www.dataojo.com/docity/projects:8000
       * @method
       * @param {string} prjName ：要打开的工程的全路径名称，可以是本地路径或在线路径如:'dcrservice:docity/Projects/beijing/project1'
       * @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_Open,
       *   result:_SUCCESS,
       *   prjName:'d:\docity\project1.dcp',
       * }
       * @example
       * dcrEngine.open('d:\docity\project1.dcp'
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('打开DCP工程成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "open",
      value: function open(prjName, fn) {
        this.excute(CommandType.Engine_Open, {
          prjName: prjName
        }, fn);
      }
      /**
       * 保存数字孪生工程
       * @method
       * @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_Save,
       *   result:_SUCCESS,
       *   prjName:'d:\docity\project1.dcp',
       * }
       * @example
       * dcrEngine.save(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('保存DCP工程成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "save",
      value: function save(fn) {
        this.excute(CommandType.Engine_Save, {}, fn);
      }
      /**
       * 另存数字孪生工程
       * @method
       * @param {string} prjName ：要另存的全路径工程名称
       * @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_SaveAs,
       *   result:_SUCCESS,
       *   prjName:'d:\docity\project1.dcp',
       * }
       * @example
       * dcrEngine.saveAs('d:\docity\project1.dcp'
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('将DCP工程保存为${e.prjName}！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "saveAs",
      value: function saveAs(prjName, fn) {
        this.excute(CommandType.Engine_SaveAs, {
          prjName: prjName
        }, fn);
      }
      /**
       * 关闭当前数字孪生工程
       * @method
       * @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_Close,
       *   result:_SUCCESS,
       * }
       * @example
       * dcrEngine.close(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('关闭DCP工程成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "close",
      value: function close(fn) {
        this.excute(CommandType.Engine_Close, {}, fn);
      }
      /**
       * 运行蓝图命令
       * @method
       * @param {string} ActorTag ：蓝图Actor的Tag信息
       * @param {string} functionName ：函数名称
       * @param {string} params ：函数对应参数
       *  @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_ExcuteBPCommand,
       *   result:_SUCCESS,
       * }
       * @example
       * dcrEngine.excuteBPCommond(
       * "TestActor",
       * "SetColor",
       * "(R=0.000000,G=1.0,B=0.0,A=1.000000)",
       * (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('运行蓝图命令成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "excuteBPCommond",
      value: function excuteBPCommond(ActorTag, functionName, params, fn) {
        this.excute(CommandType.Engine_ExcuteBPCommand, {
          ActorTag: ActorTag,
          functionName: functionName,
          params: params
        }, fn);
      }
      /**
       * 导入数字孪生数据文件（*.dcd）到工程中并形成一个独立的场景底座，用于在底座上加载动态数据来构建项目场景。此类文件由DoCity Builder生成，可以作为本地文件或在线服务方式发布。
       * @method
       * @param {string} baseName ：底座名称，每个导入的文件在数字孪生工程中名称唯一
       * @param {string} filePath ：数字孪生数据文件路径，本地文件或url，如：'https://www.dataojo.com/docity/citybase?baseName='base1'',或'd:\data\beijing.dcd'
       * @param {Array}  transform : 中心点经纬度坐标[x,y,z]，用于对底座重定位（rebase）,高度z以米为单位
       * @param {Array}  rotate  :   底座旋转参数[pitch,roll,yaw],默认为[0.0,0.0,0.0]
       * @param {Array}  scale   :   底座在x,y,z方向的缩放系数，默认为[1.0,1.0,1.0]
       * @param {Array}  origin  :   底座参考坐标原点，默认为[0.0,0.0,0.0]
       * @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_ImportBaseData,
       *   result:_SUCCESS,
       *   baseName:'base1',
       * }
       * @example
       * dcrEngine.importBaseData('beijingCDB','d:\docity\CBD.dcd',[116.102,38.09,20]
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('导入数据文件${e.filePath}成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "importBaseData",
      value: function importBaseData(baseName, filePath, transform) {
        var rotate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0.0, 0.0, 0.0];
        var scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [1.0, 1.0, 1.0];
        var origin = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [0.0, 0.0, 0.0];
        var fn = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        this.excute(CommandType.Engine_ImportBaseData, {
          baseName: baseName,
          filePath: filePath,
          transform: transform,
          rotate: rotate,
          scale: scale,
          origin: origin
        }, fn);
      }
      /**
       * 导入数据文件（*.json,.geojson,.csv或者是一个网络服务的url地址）到工程中并形成一个独立的场景底座，用于在底座上加载动态数据来构建项目场景。此类文件由DoCity Builder生成，可以作为本地文件或在线服务方式发布。
       * @method
       * @param {string} dataName ：数据源名称，每个导入的文件在数字孪生工程中名称唯一
       * @param {string} filePath ：数字孪生数据文件路径，本地文件或url，如：'https://www.dataojo.com/docity/citybase?baseName='base1'',或'd:\data\beijing.dcd'
       * @param {function} fn ：   回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Engine_ImportDataSource,
       *   result:_SUCCESS,
       *   baseName:'base1',
       * }
       * @example
       * dcrEngine.importDataSource('cbdPark','d:\docity\cbdPark.geojson')
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('导入数据文件${e.filePath}成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "importDataSource",
      value: function importDataSource(dataName, filePath) {
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.excute(CommandType.Engine_ImportDataSource, {
          dataSoureName: dataName,
          filePath: filePath
        }, fn);
      }
      /**
       * 查询引擎版本信息
       * @method
       * @param {function} fn ：查询回调函数，调用返回信息如下：
       * {
       *    command:Engine_QueryVersion,
       *    result:_SUCCESS,
       *    Name:'DoCity Cloud Render (Profession Version)',
       *    version:'1.0.0',
       *    EngineVersion:'4.25.4'
       *    token:??????????????
       * }
       * @example
       * dcrEngine.queryVersion(
       *  (e)=>{
       *      console.log(e); //输出平台版本信息
       *  });
       **/

    }, {
      key: "queryVersion",
      value: function queryVersion(fn) {
        this.excute(CommandType.Engine_QueryVersion, {}, fn);
      }
      /**
       * 执行引擎操作指令，通过引擎指令实现数据管理、场景交互、场景渲染等操作
       * @method
       * @param {CommandType} command ：指令编码，参考CommandType
       * @param {json} params ：指令参数构成的json对象
       * @param {function} msgFunc ：指令执行返回消息回调函数
       * @returns {json} : 返回指令数据包
       **/

    }, {
      key: "excute",
      value: function excute(command) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var msgFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (msgFunc !== null) {
          //注册返回消息处理回调函数
          this.msgHub[command] = msgFunc;
        }

        return Object.assign({
          command: command
        }, params, {
          token: this.token,
          excuteTime: new Date().getTime()
        });
      }
      /**
       * 处理引擎指令执行的返回消息
       * @method
       * @param {json} e ：指令编码及参数包
       **/

    }, {
      key: "onCommandMsg",
      value: function onCommandMsg(e) {
        if (e.type == EventType.Events_OnCommand) {
          //根据command值处理消息回调
          if (this.msgHub[e.command]) {
            //处理系统命令消息事件
            this.msgHub[e.command].call(this, e);
          }
        } //处理自定义事件，调用事件回调函数


        this.events.dispatchEvent(e);
      }
    }]);

    return DccEngine;
  }();

  var _objectSpread2;

  var ZOOM = {
    maxZoom: 24,
    minZoom: 0
  };
  var Scatterplot$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    stroked: false,
    // 是否描边
    filled: true,
    // 是否填充
    radiusMinPixels: 1,
    // 半径最小像素
    radiusMaxPixels: 100,
    // 半径最大像素
    radiusScale: 1,
    // 半径缩放
    getPosition: function getPosition(d) {
      return d.geometry.coordinates;
    },
    // 获取坐标
    // begin 可动态修改的属性
    opacity: 1,
    // 透明度
    size: 14,
    // 半径
    color: [255, 140, 0],
    // 颜色
    radiusUnits: 'pixels',
    // 单位
    visible: true,
    // 是否显示
    blending: 'normal' // 混合模式
    // end

  });
  var Icon$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getPosition: function getPosition(d) {
      return d.geometry.coordinates;
    },
    // begin 可动态修改的属性
    opacity: 1,
    // 透明度
    size: 14,
    url: '',
    color: [],
    mask: false,
    visible: true,
    // 是否显示
    billboard: true,
    // 是否平面显示
    sizeUnits: 'pixels',
    angle: 0,
    // 角度
    height: 128,
    // 高度
    blending: 'normal' // 混合模式
    // end

  });
  var Text = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getPosition: function getPosition(d) {
      return d.geometry.coordinates;
    },
    characterSet: 'auto',
    // begin 可动态修改的属性
    textField: 'name',
    opacity: 1,
    // 透明度
    size: 32,
    color: [0, 0, 0, 255],
    elevation: 0,
    billboard: true,
    fontFamily: 'Monaco, monospace',
    // 用于设置字体，支持CSS内置字体
    fontWeight: 400,
    textAnchor: 'middle',
    alignmentBaseline: 'center',
    angle: 0,
    writingMode: 'horizontal',
    // horizontal | vertical
    sizeUnits: 'pixels' // end

  });
  var Heartbeat$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    // begin 可动态修改的属性
    style: 'circular',
    // 图标样式 circular circle-dot ring ring-dot spot
    size: 100,
    forecolor: [76, 175, 80],
    // 只支持rbg
    bkColor: [139, 195, 74],
    // 只支持rbg
    opacity: 1,
    animationType: 'spread',
    // 动画类型 spread fadeShow breathing pulsation
    pitchAlignment: 'map',
    // 垂直对齐方式 map | viewport
    overlap: false,
    // 是否重叠
    duration: 3000,
    // 动画时长
    visible: true // 是否显示
    // end

  });
  var Path$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getPath: function getPath(d) {
      // 如果是面数据就返回面的边界
      if (d.geometry.type === 'Polygon') {
        return d.geometry.coordinates[0];
      }

      return d.geometry.coordinates;
    },
    // begin 可动态修改的属性
    opacity: 1,
    width: 1,
    lineColor: [255, 140, 0],
    widthUnits: 'meters',
    capRounded: true,
    jointRounded: true // end

  });
  var Arc$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getSourcePosition: function getSourcePosition(d) {
      return d.geometry.coordinates[0];
    },
    getTargetPosition: function getTargetPosition(d) {
      return d.geometry.coordinates[1];
    },
    widthMinPixels: 1,
    widthMaxPixels: 100,
    // begin 可动态修改的属性
    lineColor: [[244, 67, 54]],
    lineHeight: 1,
    lineWidth: 1,
    opacity: 1,
    widthUnits: 'pixels' // 单位 pixels | meters
    // end

  });
  var Line$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getSourcePosition: function getSourcePosition(d) {
      return d.geometry.coordinates[0];
    },
    getTargetPosition: function getTargetPosition(d) {
      return d.geometry.coordinates[1];
    },
    widthMinPixels: 1,
    widthMaxPixels: 100,
    // begin 可动态修改的属性
    lineColor: [244, 67, 54],
    lineWidth: 1,
    opacity: 1,
    widthUnits: 'pixels' // 单位 pixels | meters
    // end

  });
  var GreatCircle$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getSourcePosition: function getSourcePosition(d) {
      return d.geometry.coordinates[0];
    },
    getTargetPosition: function getTargetPosition(d) {
      return d.geometry.coordinates[1];
    },
    widthMinPixels: 1,
    widthMaxPixels: 100,
    // begin 可动态修改的属性
    lineColor: [[244, 67, 54]],
    lineHeight: 1,
    lineWidth: 1,
    opacity: 1,
    widthUnits: 'pixels' // 单位 pixels | meters
    // end

  });
  var Polygon$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, (_objectSpread2 = {
    extruded: true,
    filled: true,
    getPolygon: function getPolygon(d) {
      return d.geometry.coordinates;
    },
    stroked: true,
    wireframe: true,
    // begin 可动态修改的属性
    outlineColor: [180, 80, 80],
    // 轮廓线颜色
    outlineWidth: 1,
    // 轮廓线颜色宽度
    fenceHeight: 1000,
    // 侧面高度
    color: [255, 140, 0]
  }, _defineProperty(_objectSpread2, "extruded", false), _defineProperty(_objectSpread2, "lineWidthUnits", 'meters'), _objectSpread2));
  var Cluster$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    // begin 可动态修改的属性
    colors: ['#51bbd6', '#f1f075', '#f28cb1'],
    textSize: 14,
    minRadius: 14,
    maxRadius: 100,
    opacity: 1,
    textVisible: true,
    visible: true,
    clusterRadius: 50 // end

  });
  var Grid$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getPosition: function getPosition(d) {
      return d.geometry.coordinates;
    },
    // begin 可动态修改的属性
    opacity: 1,
    visible: true,
    colors: [[255, 255, 174], [255, 218, 110], [255, 179, 63], [255, 141, 46], [243, 57, 11], [191, 0, 32]],
    size: 1000,
    // 米
    coverage: 1,
    //
    aggregation: 'count',
    // count sum mean
    weight: 'weight',
    extruded: false,
    elevationScale: 1 // end

  });
  var Hexagon$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getPosition: function getPosition(d) {
      return d.geometry.coordinates;
    },
    // begin 可动态修改的属性
    opacity: 1,
    visible: true,
    colors: [[255, 255, 174], [255, 218, 110], [255, 179, 63], [255, 141, 46], [243, 57, 11], [191, 0, 32]],
    radius: 1000,
    // 米
    coverage: 1,
    //
    weight: 'weight',
    extruded: false,
    elevationScale: 1 // end

  });
  var Trips$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    currentTime: 0,
    getTimestamps: function getTimestamps(d) {
      return d.properties.timestamp.map(function (item) {
        return item;
      });
    },
    getPath: function getPath(d) {
      return d.geometry.coordinates;
    },
    widthMinPixels: 2,
    // begin 可动态修改的属性
    loopLength: 3000,
    // 一次循环的时长
    animationSpeed: 1,
    // 动画速度
    color: [253, 128, 93],
    // 轨迹颜色
    trailLength: 800,
    // 拖尾长度
    width: 1,
    // 轨迹宽度
    widthUnits: 'pixels' // 单位 pixels | meters
    // end

  });
  var Heatmap$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getPosition: function getPosition(d) {
      return d.geometry.coordinates;
    },
    // begin 可动态修改的属性
    opacity: 1,
    // 透明度
    radius: 30,
    // 半径
    weightField: 'weight',
    // 权重字段
    intensity: 1,
    // 强度
    chromatography: [[54, 98, 206], [156, 185, 244], [37, 59, 103], [204, 88, 73], [34, 30, 30], [76, 159, 236]] // end

  });
  var FlyingLine$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    // begin 可动态修改的属性
    opacity: 1,
    visible: true,
    animationType: 'lengthen',
    overlap: false,
    dash: 0,
    color: [[255, 255, 255]],
    // 只支持rbg
    width: 1,
    height: 100,
    duration: 2000,
    altitude: 0 // end

  });
  var AnimationIcon$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    // begin 可动态修改的属性
    opacity: 1,
    pitchAlignment: 'viewport',
    // map | viewport
    overlap: false,
    maxZoom: 24,
    minZoom: 0,
    visible: true,
    duration: 2000,
    altitude: 0,
    sizeScale: 1,
    image: '' // end

  });
  var Scenegraph$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    getPosition: function getPosition(d) {
      return d.geometry.coordinates;
    },
    // begin 可动态修改的属性
    opacity: 1,
    visible: true,
    sizeScale: 1,
    color: [255, 0, 0, 255],
    altitude: 0,
    url: '',
    speed: 0 // end

  });
  var Marker$1 = _objectSpread2$1(_objectSpread2$1({}, ZOOM), {}, {
    visible: true,
    altitude: 0,
    sizeScale: 1,
    fieldLabel: '名称：',
    fieldKey: 'name',
    textStyle: {
      // 默认
      defaultStyle: {
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'MicrosoftYaHei',
        fontWeight: 500
      },
      // 距离
      marginObj: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
      }
    },
    numberStyle: {
      // 默认
      defaultStyle: {
        color: '#ffffff',
        fontSize: '16px',
        fontFamily: 'MicrosoftYaHei',
        fontWeight: 500
      },
      // 距离
      marginObj: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
      },
      numSeparator: false
    },
    unitStyle: {
      // 默认
      defaultStyle: {
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'MicrosoftYaHei',
        fontWeight: 500
      },
      // 距离
      marginObj: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
      },
      unit: ''
    },
    backgroundStyle: {
      status: true,
      type: 0,
      type1Default: {
        defaultColor: 'rgba(0,0,0,0.7)',
        gradientStatus: false,
        gradientDirection: 90,
        gradientColor1: 'rgba(0,0,0,0.7)',
        gradientColor2: 'rgba(0,0,0,0.7)'
      },
      type2Image: {
        displayType: 0,
        imgUrl: '',
        opacity: 100,
        imgWidth: 10,
        imgHeight: 10
      }
    },
    borderStyle: {
      status: true,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#0055FF',
      boxShadow: {
        status: false,
        // ：阴影颜色 ------------ 可选
        color: '#eee',
        // ：水平偏移量 ----必选
        xShadow: 10,
        // ：垂直偏移量-----必选
        yShadow: 10,
        // ：模糊距离 -------------可选
        blur: 10
      },
      borderRadius: 5
    },
    //   牵引线
    tractionLineStyle: {
      status: true,
      location: 'center',
      lineStyle: 'solid',
      lineColor: '#C5C5C5',
      lineWidth: 1,
      lineHeight: 50
    }
  });

  var layerConf = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Scatterplot: Scatterplot$1,
    Icon: Icon$1,
    Text: Text,
    Heartbeat: Heartbeat$1,
    Path: Path$1,
    Arc: Arc$1,
    Line: Line$1,
    GreatCircle: GreatCircle$1,
    Polygon: Polygon$1,
    Cluster: Cluster$1,
    Grid: Grid$1,
    Hexagon: Hexagon$1,
    Trips: Trips$1,
    Heatmap: Heatmap$1,
    FlyingLine: FlyingLine$1,
    AnimationIcon: AnimationIcon$1,
    Scenegraph: Scenegraph$1,
    Marker: Marker$1
  });

  var getGlConst = function getGlConst(d) {
    return GL__default["default"][d];
  };

  var LAYER_BLENDINGS = {
    additive: {
      blendFunc: ["SRC_ALPHA", "DST_ALPHA"],
      blendEquation: "FUNC_ADD"
    },
    normal: {
      // reference to
      // https://limnu.com/webgl-blending-youre-probably-wrong/
      blendFunc: ["SRC_ALPHA", "ONE_MINUS_SRC_ALPHA", "ONE", "ONE_MINUS_SRC_ALPHA"],
      blendEquation: ["FUNC_ADD", "FUNC_ADD"]
    },
    subtractive: {
      blendFunc: ["ONE", "ONE_MINUS_DST_COLOR", "SRC_ALPHA", "DST_ALPHA"],
      blendEquation: ["FUNC_SUBTRACT", "FUNC_ADD"]
    }
  };
  function setLayerEveryBlending(layerBlending) {
    var blending = LAYER_BLENDINGS[layerBlending];
    var blendFunc = blending.blendFunc,
        blendEquation = blending.blendEquation;
    return _objectSpread2$1(_defineProperty({}, GL__default["default"].BLEND, true), blendFunc ? {
      blendFunc: blendFunc.map(getGlConst),
      blendEquation: Array.isArray(blendEquation) ? blendEquation.map(getGlConst) : getGlConst(blendEquation)
    } : {});
  }

  var BaseLayer$1 = /*#__PURE__*/function () {
    function BaseLayer(map, baseLayerId, id, style, layer) {
      _classCallCheck(this, BaseLayer);

      this._style = {
        visible_zoom: true,
        visible: true
      };
      this.map = map;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = style;
      this.layer = layer;
    }

    _createClass(BaseLayer, [{
      key: "_layers",
      get: function get() {
        var _this = this;

        if (Array.isArray(this.map._layers)) {
          return this.map._layers.filter(function (item) {
            return item.id !== _this.id;
          });
        }

        return [];
      }
    }, {
      key: "blending",
      get: function get() {
        return setLayerEveryBlending(this.style.blending || 'normal');
      }
    }, {
      key: "visible_zoom",
      get: function get() {
        var zoom = this.map.viewManager.viewState.zoom;
        var visible = this.style.visible_zoom;

        if (zoom < this.style.minZoom || zoom > this.style.maxZoom) {
          visible = false;
        } else {
          visible = true;
        }

        return visible;
      }
    }, {
      key: "setVisibleByZoom",
      value: function setVisibleByZoom() {
        this._setProps();
      }
      /**
       * 分段映射数据
       * @param {*} fieldValue 分段字段的值
       * @param {*} mappingItems 分段的条件、值
       * @returns
       */

    }, {
      key: "rangeMappingStyle",
      value: function rangeMappingStyle(fieldValue, mappingItems) {
        if (!Array.isArray(mappingItems)) {
          throw 'mappingItems 不是一个数组';
        }

        var res = mappingItems.find(function (item) {
          if (item.rangeType === RangeType.OpenInterval) {
            return fieldValue > item.start && fieldValue < item.end;
          }

          if (item.rangeType === RangeType.CloseInterval) {
            return fieldValue >= item.start && fieldValue <= item.end;
          }

          if (item.rangeType === RangeType.LeftOpenInterval) {
            return fieldValue > item.start && fieldValue <= item.end;
          }

          if (item.rangeType === RangeType.RightOpenInterval) {
            return fieldValue >= item.start && fieldValue < item.end;
          }
        });
        return (res === null || res === void 0 ? void 0 : res.style) || mappingItems[mappingItems.length - 1].style;
      }
      /**
       * d3-scale
       * @param {*} mappingField 分段字段
       * @param {*} mappingItems 分段的条件、值
       * @returns
       */

    }, {
      key: "scaleMappingStyle",
      value: function scaleMappingStyle(mappingField, mappingItems) {
        if (!Array.isArray(mappingItems)) {
          throw 'mappingItems 不是一个数组';
        }

        var _this$getFieldValues = this.getFieldValues(mappingField),
            fieldValues = _this$getFieldValues.fieldValues,
            isNumber = _this$getFieldValues.isNumber;

        var scale;

        if (isNumber) {
          scale = d3Scale.scaleQuantile().domain(fieldValues).range(mappingItems);
        } else {
          scale = d3Scale.scaleOrdinal().domain(fieldValues).range(mappingItems);
        }

        return [scale, isNumber];
      }
    }, {
      key: "getFieldValues",
      value: function getFieldValues(field) {
        var data = this.data || [];
        var fieldValues = data.map(function (item) {
          return item.properties[field];
        }) || [];
        fieldValues = Array.from(new Set(fieldValues));
        var noNumber = fieldValues.some(function (item) {
          return isNaN(Number(item));
        });

        if (!noNumber) {
          fieldValues = fieldValues.map(function (item) {
            return Number(item);
          });
        }

        return {
          fieldValues: fieldValues.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          }),
          isNumber: !noNumber
        };
      }
      /**
       * 获取颜色
       * @param {*} param 一个颜色值 或 一个对象包含分段的数据条件
       * @param {*} keyName deckgl 属性
       * @returns
       */

    }, {
      key: "color",
      value: function color(param, keyName) {
        var _this2 = this;

        if (+(param === null || param === void 0 ? void 0 : param.mappingType) === StyleMappingType.Range) {
          return _defineProperty({}, keyName, function (d) {
            var a = _this2.rangeMappingStyle(d.properties[param.mappingField], param.mappingItems);

            return a;
          });
        }

        if (+(param === null || param === void 0 ? void 0 : param.mappingType) === StyleMappingType.scale) {
          var _this$scaleMappingSty = this.scaleMappingStyle(param.mappingField, param.mappingItems),
              _this$scaleMappingSty2 = _slicedToArray(_this$scaleMappingSty, 2),
              scale = _this$scaleMappingSty2[0],
              isNumber = _this$scaleMappingSty2[1];

          return _defineProperty({}, keyName, function (d) {
            var field = d.properties[param.mappingField];
            field = isNumber ? Number(field) : field;
            return scale(field);
          });
        }

        return _defineProperty({}, keyName, function (d) {
          return param || [];
        });
      } // 获取大小

    }, {
      key: "size",
      value: function size(param, keyName) {
        var _this3 = this;

        if (+(param === null || param === void 0 ? void 0 : param.mappingType) === StyleMappingType.Range) {
          return _defineProperty({}, keyName, function (d) {
            return _this3.rangeMappingStyle(d.properties[param.mappingField], param.mappingItems);
          });
        }

        if (+(param === null || param === void 0 ? void 0 : param.mappingType) === StyleMappingType.scale) {
          var _this$getFieldValues2 = this.getFieldValues(param.mappingField),
              fieldValues = _this$getFieldValues2.fieldValues,
              isNumber = _this$getFieldValues2.isNumber;

          var scale = d3Scale.scalePoint().domain(fieldValues).range(param.mappingItems);
          return _defineProperty({}, keyName, function (d) {
            var field = d.properties[param.mappingField];
            field = isNumber ? Number(field) : field;
            return scale(field);
          });
        }

        return _defineProperty({}, keyName, function (d) {
          return param || [];
        });
      } // 角度目前和大小一个逻辑

    }, {
      key: "angle",
      value: function angle(param, keyName) {
        return this.size(param, keyName);
      }
    }, {
      key: "_setProps",
      value: function _setProps() {
        var blending = this.blending;
        var visible_zoom = this.visible_zoom;
        var _this$style = this.style,
            visible = _this$style.visible,
            parameters = _this$style.parameters;
        var layers = [].concat(_toConsumableArray(this._layers), [new this.layer(_objectSpread2$1(_objectSpread2$1({
          id: this.id,
          parameters: _objectSpread2$1(_objectSpread2$1({}, parameters), blending)
        }, this.style), {}, {
          visible: visible && visible_zoom,
          data: this.data
        }))]);
        this.map._layers = layers;
        this.map.setProps({
          layers: layers
        });
      }
      /**
       * 添加图层数据
       * @param {*} layer
       * @param {*} data
       */

    }, {
      key: "addData",
      value: function addData(data) {
        this.updateData(data);
      }
      /**
       * 删除图层数据图层
       */

    }, {
      key: "removeLayer",
      value: function removeLayer() {
        this.destroy && this.destroy();
        var layers = this._layers;
        this.map._layers = layers;
        this.map.setProps({
          layers: layers
        });
      }
      /**
       * 数据过滤显示
       * @param {*} key
       * @param {*} number
       */

    }, {
      key: "filterBy",
      value: function filterBy(key, number) {}
      /**
       * 更新数据源
       * @param {*} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        if (data.layerId === this.id || data.layerId === this.style.layerId) {
          this.data = (data === null || data === void 0 ? void 0 : data.features) || data;

          if (!Array.isArray(this.data)) {
            console.error('数据格式有误请传入 geojson 数据', data);
            return;
          }

          this._setProps();
        } else {
          console.warn('当前图层id与数据图层id不匹配');
        }
      }
      /**
       * 更新图层
       * @param {*} data
       */

    }, {
      key: "update",
      value: function update() {
        // todo 更新前需要判断数据和图层类型是否匹配
        if (!Array.isArray(this.data)) {
          console.error('数据格式有误请传入 geojson 数据', this.data);
          return;
        }

        this._setProps();
      }
      /**
       * 更新图层属性
       * @param {*} props
       */

    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(props) {
        if (!Object.prototype.toString.call(props) === '[object Object]') {
          console.error('图层属性格式有误请传入一个对象', props);
          return;
        }

        this.style = props;

        this._setProps();
      }
    }]);

    return BaseLayer;
  }();

  var Scatterplot = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Scatterplot, _BaseLayer);

    var _super = _createSuper(Scatterplot);

    function Scatterplot(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Scatterplot);

      return _super.call(this, map, baseLayerId, id, style, layers$1.ScatterplotLayer);
    }

    _createClass(Scatterplot, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            color = _this$_style.color,
            size = _this$_style.size;
            _this$_style.weight;
        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, this.color(color, "getFillColor")), this.size(size, "getRadius")), {}, {
          updateTriggers: {
            getFillColor: color,
            getRadius: size
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Scatterplot;
  }(BaseLayer$1);

  var Icon = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Icon, _BaseLayer);

    var _super = _createSuper(Icon);

    function Icon(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Icon);

      return _super.call(this, map, baseLayerId, id, style, layers$1.IconLayer);
    }

    _createClass(Icon, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            url = _this$_style.url,
            size = _this$_style.size,
            color = _this$_style.color,
            mask = _this$_style.mask,
            height = _this$_style.height,
            angle = _this$_style.angle;
        var time = new Date().getTime();
        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, this.color(color, 'getColor')), this.size(size, 'getSize')), this.angle(angle, 'getAngle')), {}, {
          getIcon: function getIcon() {
            return {
              id: time,
              url: url,
              width: 512,
              height: 512,
              anchorY: height,
              mask: mask
            };
          },
          updateTriggers: {
            getIcon: [mask, url, height],
            getColor: color,
            getSize: size,
            getAngle: angle
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Icon;
  }(BaseLayer$1);

  var animationTypeEnum = {
    spread: 1,
    fadeShow: 2,
    breathing: 3,
    pulsation: 4
  };

  function circular (_ref) {
    var _this = this;

    var size = _ref.size,
        forecolor = _ref.forecolor;
        _ref.bkColor;
        var _ref$animationType = _ref.animationType,
        animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return function (size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = performance.now() % duration / duration;
          var radius = size / 2 * 0.3;
          var outerRadius = size / 2 * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画


          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸


          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动


          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = size / 2 * 0.7 * t + radius;
          }

          var context = this.context; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + forecolor + ',' + t + ')';
          context.fill(); // // draw inner circle
          // context.beginPath();
          // context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          // context.fillStyle = "rgba(" + bkColor + ")";
          // //context.strokeStyle = "white";
          // //context.lineWidth = 2 + 4 * (1 - t);
          // context.fill();
          // //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        }
      };
    }(size, forecolor);
  }

  function circleDot (_ref) {
    var _this = this;

    var size = _ref.size,
        forecolor = _ref.forecolor,
        bkColor = _ref.bkColor,
        _ref$animationType = _ref.animationType,
        animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return function (size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var bkColor = bkColor || '255, 100, 100, 1';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = performance.now() % duration / duration;
          var radius = size / 4 * 0.4;
          var outerRadius = size / 2 * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画


          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸


          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动


          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = size / 2 * 0.7 * t + radius;
          }

          var context = this.context; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + forecolor + ',' + t + ')';
          context.fill(); // draw inner circle

          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + bkColor + ')'; //context.strokeStyle = "white";
          //context.lineWidth = 2 + 4 * (1 - t);

          context.fill(); //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        }
      };
    }(size, forecolor, bkColor);
  }

  function ring (_ref) {
    var _this = this;

    var size = _ref.size,
        forecolor = _ref.forecolor;
        _ref.bkColor;
        var _ref$animationType = _ref.animationType,
        animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return function (size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = performance.now() % duration / duration;
          var radius = size / 2 * 0.3;
          var outerRadius = size / 2 * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画


          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸


          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动


          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = size / 2 * 0.7 * t + radius;
          }

          var context = this.context;
          var center = size / 2; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
          grd.addColorStop(0, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.2, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.9, 'rgba(' + forecolor + ',' + t + ')');
          grd.addColorStop(1, 'rgba(' + forecolor + ',' + 0 + ')'); //使用经向渐变

          context.fillStyle = grd;
          context.fillRect(0, 0, this.width, this.height);
          context.fill(); // // draw inner circle
          // context.beginPath();
          // context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          // context.fillStyle = "rgba(" + bkColor + ")";
          // //context.strokeStyle = "white";
          // //context.lineWidth = 2 + 4 * (1 - t);
          // context.fill();
          // //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        }
      };
    }(size, forecolor);
  }

  function ringDot (_ref) {
    var _this = this;

    var size = _ref.size,
        forecolor = _ref.forecolor,
        bkColor = _ref.bkColor,
        _ref$animationType = _ref.animationType,
        animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return function (size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || '255, 200, 200';
      var bkColor = bkColor || '255, 100, 100, 1';
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },
        render: function render() {
          var t = performance.now() % duration / duration;
          var radius = size / 2 * 0.3;
          var outerRadius = size / 2 * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 渐隐渐显动画


          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸


          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = size / 2 * 0.7 * t + radius;
            t = 1 - t;
          } // 脉动


          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = size / 2 * 0.7 * t + radius;
          }

          var context = this.context;
          var center = size / 2; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
          grd.addColorStop(0, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.2, 'rgba(' + forecolor + ',' + 0 + ')');
          grd.addColorStop(0.9, 'rgba(' + forecolor + ',' + t + ')');
          grd.addColorStop(1, 'rgba(' + forecolor + ',' + 0 + ')'); //使用经向渐变

          context.fillStyle = grd;
          context.fillRect(0, 0, this.width, this.height);
          context.fill(); // draw inner circle

          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(' + bkColor + ')'; //context.strokeStyle = "white";
          //context.lineWidth = 2 + 4 * (1 - t);

          context.fill(); //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        }
      };
    }(size, forecolor, bkColor);
  }

  function spot (_ref) {
    var _this = this;

    var size = _ref.size,
        forecolor = _ref.forecolor;
        _ref.bkColor;
        var _ref$animationType = _ref.animationType,
        animationType = _ref$animationType === void 0 ? animationTypeEnum.spread : _ref$animationType,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 3000 : _ref$duration;
    return function (size, forecolor, bkColor) {
      var size = size || 200;
      var forecolor = forecolor || "255, 200, 200";
      var that = _this;
      size = size * 2;
      return {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext("2d");
        },
        render: function render() {
          var t = performance.now() % duration / duration;
          var radius = size / 2 * 0.3;
          var outerRadius = size / 2 * 0.7 * 1 + radius; // 循环扩散

          if (animationTypeEnum.spread === animationType) {
            outerRadius = size / 2 * 0.7 * t + radius;
          } // 渐隐渐显动画


          if (animationTypeEnum.fadeShow === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
          } // 呼吸


          if (animationTypeEnum.breathing === animationType) {
            if (t > 0.5) {
              t = 1 - t;
            }

            t = t * 2;
            outerRadius = size / 2 * 0.7 * t + radius;
          } // 脉动


          if (animationTypeEnum.pulsation === animationType) {
            t = 1 - t;
            outerRadius = size / 2 * 0.7 * t + radius;
          }

          var context = this.context;
          var center = size / 2; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          var grd = context.createRadialGradient(center, center, 1, center, center, outerRadius);
          grd.addColorStop(0, "rgba(" + forecolor + "," + t + ")");
          grd.addColorStop(1, "rgba(" + forecolor + "," + 0 + ")"); //使用经向渐变

          context.fillStyle = grd;
          context.fillRect(0, 0, this.width, this.height);
          context.fill(); // // draw inner circle
          // context.beginPath();
          // context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          // context.fillStyle = "rgba(" + bkColor + ")";
          // //context.strokeStyle = "white";
          // //context.lineWidth = 2 + 4 * (1 - t);
          // context.fill();
          // //context.stroke();
          // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

          that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        }
      };
    }(size, forecolor);
  }

  var style = {
    spot: spot,
    circleDot: circleDot,
    ringDot: ringDot,
    ring: ring,
    circular: circular,
    1: circular,
    2: circleDot,
    3: ring,
    4: spot,
    5: ringDot
  };

  var Heartbeat = /*#__PURE__*/function () {
    function Heartbeat(_ref) {
      var mapbox = _ref.mapbox,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Heartbeat);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1({
        style: 'circular',
        opacity: 1,
        animationType: 'spread',
        pitchAlignment: 'map',
        overlap: false,
        maxZoom: 24,
        minZoom: 0,
        visible: true
      }, style);
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */


    _createClass(Heartbeat, [{
      key: "addData",
      value: function addData(data) {
        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        var _this$style = this.style,
            animationType = _this$style.animationType,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            opacity = _this$style.opacity,
            pitchAlignment = _this$style.pitchAlignment,
            overlap = _this$style.overlap,
            visible = _this$style.visible;
        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.addImage(this.id, style[this.style.style].bind(this)(_objectSpread2$1(_objectSpread2$1({}, this.style), {}, {
          animationType: animationTypeEnum[animationType] || animationType
        })), {
          pixelRatio: 2
        });
        this.map.addLayer({
          id: this.id,
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: this.data
            }
          },
          minzoom: minZoom,
          maxzoom: maxZoom,
          paint: {
            'icon-opacity': opacity
          },
          layout: {
            'icon-image': this.id,
            'icon-pitch-alignment': pitchAlignment,
            'icon-allow-overlap': overlap,
            visibility: visible ? 'visible' : 'none'
          }
        });
      }
      /**
       * 更新数据源
       * @param {*} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.getSource(this.id).setData({
          type: 'FeatureCollection',
          features: this.data
        });
      }
    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(props) {
        this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

        if (props.visible === 1) {
          this.map.setLayoutProperty(this.id, 'visibility', 'visible');
        }

        if (props.visible === 0) {
          this.map.setLayoutProperty(this.id, 'visibility', 'none');
        }

        if (props.pitchAlignment) {
          this.map.setLayoutProperty(this.id, 'icon-pitch-alignment', this.style.pitchAlignment);
        }

        if (typeof props.overlap === 'boolean') {
          this.map.setLayoutProperty(this.id, 'icon-allow-overlap', this.style.overlap);
        }

        this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
        this.map.setPaintProperty(this.id, 'icon-opacity', this.style.opacity);

        if (props.size || props.forecolor || props.bkColor || props.style || props.animationType || props.duration) {
          this.map.removeImage(this.id);
          this.map.addImage(this.id, style[this.style.style].bind(this)(_objectSpread2$1(_objectSpread2$1({}, this.style), {}, {
            animationType: animationTypeEnum[this.style.animationType] || this.style.animationType
          })), {
            pixelRatio: 2
          });
        }
      }
    }, {
      key: "removeLayer",
      value: function removeLayer() {
        this.map.hasImage(this.id) && this.map.removeImage(this.id);
        this.map.getSource(this.id) && this.map.removeSource(this.id);
      }
    }]);

    return Heartbeat;
  }();

  var Heatmap = /*#__PURE__*/function () {
    function Heatmap(_ref) {
      var mapbox = _ref.mapbox,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Heatmap);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1({
        opacity: 1,
        maxZoom: 0,
        minZoom: 24,
        visible: true,
        colors: [],
        radius: 2,
        antitone: false
      }, style);
    }

    _createClass(Heatmap, [{
      key: "getHeatmapColor",
      value: function getHeatmapColor(colors, antitone) {
        var arr = [];
        var multiplicationNum = 1 / colors.length;

        if (antitone) {
          colors = _toConsumableArray(colors).reverse();
        }

        for (var i in colors) {
          arr.push((+i + 1) * multiplicationNum);
          arr.push(colors[i]);
        }

        return arr;
      }
      /**
       * 添加图层数据
       * @param {*} layer
       * @param {*} data
       */

    }, {
      key: "addData",
      value: function addData(data) {
        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        var _this$style = this.style,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            opacity = _this$style.opacity,
            visible = _this$style.visible,
            weightField = _this$style.weightField,
            radius = _this$style.radius,
            colors = _this$style.colors,
            antitone = _this$style.antitone;
        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.addSource(this.id, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: this.addWeightProp(this.data, weightField)
          }
        });
        this.map.addLayer({
          id: this.id,
          type: 'heatmap',
          source: this.id,
          minzoom: minZoom,
          maxzoom: maxZoom,
          paint: {
            'heatmap-radius': radius,
            'heatmap-weight': weightField ? ['interpolate', ['linear'], ['get', 'weight'], 0, 0, 1, 1] : 1,
            'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 24, 0],
            'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(0,0,0,0)'].concat(_toConsumableArray(this.getHeatmapColor(colors, antitone))),
            'heatmap-opacity': opacity
          },
          layout: {
            visibility: visible ? 'visible' : 'none'
          }
        });
      }
    }, {
      key: "getFieldValues",
      value: function getFieldValues(field) {
        var data = this.data || [];
        var fieldValues = data.map(function (item) {
          return item.properties[field];
        }) || [];
        fieldValues = Array.from(new Set(fieldValues));
        var noNumber = fieldValues.some(function (item) {
          return isNaN(Number(item));
        });

        if (!noNumber) {
          fieldValues = fieldValues.map(function (item) {
            return Number(item);
          });
        }

        return {
          fieldValues: fieldValues.sort(function (a, b) {
            return a - b;
          }),
          isNumber: !noNumber
        };
      }
    }, {
      key: "addWeightProp",
      value: function addWeightProp(geoJsondata, feild) {
        var _this$getFieldValues = this.getFieldValues(feild),
            fieldValues = _this$getFieldValues.fieldValues;

        var scale = d3Scale.scalePoint().domain(fieldValues).range([0, 1]);

        var _iterator = _createForOfIteratorHelper(geoJsondata),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.properties.weight = scale(item.properties[feild]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return geoJsondata;
      }
      /**
       * 更新数据源
       * @param {*} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.getSource(this.id).setData({
          type: 'FeatureCollection',
          features: this.addWeightProp(this.data, this.style.weightField)
        });
      }
    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(props) {
        this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);
        this.map.setLayoutProperty(this.id, 'visibility', this.style.visible ? 'visible' : 'none');
        this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
        this.map.setPaintProperty(this.id, 'heatmap-opacity', this.style.opacity);
        this.map.setPaintProperty(this.id, 'heatmap-radius', this.style.radius);
        this.map.setPaintProperty(this.id, 'heatmap-color', ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(0,0,0,0)'].concat(_toConsumableArray(this.getHeatmapColor(this.style.colors, this.style.antitone))));

        if (typeof props.weightField !== 'undefined') {
          this.updateData(this.data);
        }
      }
    }, {
      key: "removeLayer",
      value: function removeLayer() {
        if (this.map.getLayer(this.id)) {
          this.map.removeLayer(this.id);
        }

        this.map.getSource(this.id) && this.map.removeSource(this.id);
      }
    }]);

    return Heatmap;
  }();

  var Path = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Path, _BaseLayer);

    var _super = _createSuper(Path);

    function Path(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Path);

      return _super.call(this, map, baseLayerId, id, style, layers$1.PathLayer);
    }

    _createClass(Path, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            width = _this$_style.width;
        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, this.size(width, "getWidth")), this.color(lineColor, "getColor")), {}, {
          updateTriggers: {
            getColor: lineColor,
            getWidth: width
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Path;
  }(BaseLayer$1);

  var GreatCircle = /*#__PURE__*/function (_BaseLayer) {
    _inherits(GreatCircle, _BaseLayer);

    var _super = _createSuper(GreatCircle);

    function GreatCircle(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, GreatCircle);

      return _super.call(this, map, baseLayerId, id, style, deck_gl.GreatCircleLayer);
    }

    _createClass(GreatCircle, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            lineHeight = _this$_style.lineHeight,
            lineWidth = _this$_style.lineWidth;
        return _objectSpread2$1({
          getHeight: lineHeight,
          getStrokeWidth: lineWidth,
          getSourceColor: lineColor[0],
          getTargetColor: lineColor[1] || lineColor[0]
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return GreatCircle;
  }(BaseLayer$1);

  var Arc = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Arc, _BaseLayer);

    var _super = _createSuper(Arc);

    function Arc(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Arc);

      return _super.call(this, map, baseLayerId, id, style, layers$1.ArcLayer);
    }

    _createClass(Arc, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            lineHeight = _this$_style.lineHeight,
            lineWidth = _this$_style.lineWidth;
        var sourceColor = lineColor;
        var targetColor = lineColor;

        if (Array.isArray(lineColor)) {
          sourceColor = lineColor[0];
          targetColor = lineColor[1] || lineColor[0];
        }

        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
          getHeight: lineHeight
        }, this.color(sourceColor, 'getSourceColor')), this.color(targetColor, 'getTargetColor')), this.size(lineWidth, 'getWidth')), {}, {
          updateTriggers: {
            getTargetColor: targetColor,
            getSourceColor: sourceColor,
            getWidth: lineWidth
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Arc;
  }(BaseLayer$1);

  var Polygon = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Polygon, _BaseLayer);

    var _super = _createSuper(Polygon);

    function Polygon(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Polygon);

      return _super.call(this, map, baseLayerId, id, style, layers$1.PolygonLayer);
    }

    _createClass(Polygon, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            fenceHeight = _this$_style.fenceHeight,
            outlineColor = _this$_style.outlineColor,
            outlineWidth = _this$_style.outlineWidth,
            color = _this$_style.color;
        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
          getLineColor: outlineColor
        }, this.size(fenceHeight, "getElevation")), this.size(outlineWidth, "getLineWidth")), this.color(color, "getFillColor")), {}, {
          updateTriggers: {
            getFillColor: color,
            getLineWidth: outlineWidth,
            getElevation: fenceHeight
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Polygon;
  }(BaseLayer$1);

  var getCircleRadius = function getCircleRadius(pointCount, colors, minRadius, maxRadius) {
    if (typeof pointCount !== 'number') {
      console.error('pointCount: type error');
    }

    if (!Array.isArray(colors)) {
      console.error('colors: type error');
    }

    var arr = [];
    var intervals = colors.length - 1; // 间隔

    var diff = (maxRadius - minRadius) / intervals;

    for (var i in colors) {
      arr.push(parseInt(minRadius + diff * i));

      if (i < intervals) {
        arr.push(parseInt(pointCount / intervals * (+i + 1)));
      }
    }

    return arr;
  };

  var getCircleColor = function getCircleColor(pointCount, colors) {
    if (typeof pointCount !== 'number') {
      console.error('pointCount: type error');
    }

    if (!Array.isArray(colors)) {
      console.error('colors: type error');
    }

    var arr = [];
    var intervals = colors.length - 1; // 间隔

    for (var i in colors) {
      arr.push(colors[i]);

      if (i < intervals) {
        arr.push(parseInt(pointCount / intervals * (+i + 1)));
      }
    }

    return arr;
  };

  var Cluster = /*#__PURE__*/function () {
    function Cluster(_ref) {
      var mapbox = _ref.mapbox,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Cluster);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1({
        opacity: 1,
        maxZoom: 0,
        minZoom: 24,
        minRadius: 14,
        maxRadius: 100,
        textSize: 14,
        textColor: '#fff',
        textVisible: true,
        visible: true,
        clusterRadius: 50
      }, style);
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */


    _createClass(Cluster, [{
      key: "addData",
      value: function addData(data) {
        var _this = this;

        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        var _this$style = this.style,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            opacity = _this$style.opacity,
            colors = _this$style.colors,
            minRadius = _this$style.minRadius,
            maxRadius = _this$style.maxRadius,
            textSize = _this$style.textSize,
            textColor = _this$style.textColor,
            visible = _this$style.visible,
            textVisible = _this$style.textVisible,
            clusterRadius = _this$style.clusterRadius,
            dataLength = _this$style.dataLength;
        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.addSource(this.id, {
          type: 'geojson',
          // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
          // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
          data: {
            type: 'FeatureCollection',
            features: this.data
          },
          cluster: true,
          clusterMaxZoom: 14,
          // Max zoom to cluster points on
          clusterRadius: clusterRadius // Radius of each cluster when clustering points (defaults to 50)

        });
        this.map.addLayer({
          id: this.id + 'clusters',
          type: 'circle',
          source: this.id,
          filter: ['has', 'point_count'],
          minzoom: minZoom,
          maxzoom: maxZoom,
          paint: {
            'circle-opacity': opacity,
            // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            'circle-color': ['step', ['get', 'point_count']].concat(_toConsumableArray(getCircleColor(dataLength || this.data.length, colors))),
            'circle-radius': ['step', ['get', 'point_count']].concat(_toConsumableArray(getCircleRadius(dataLength || this.data.length, colors, minRadius, maxRadius)))
          },
          layout: {
            visibility: visible ? 'visible' : 'none'
          }
        });
        this.map.addLayer({
          id: this.id + 'cluster-count',
          type: 'symbol',
          source: this.id,
          filter: ['has', 'point_count'],
          minzoom: minZoom,
          maxzoom: maxZoom,
          paint: {
            'icon-opacity': opacity,
            'text-color': textColor
          },
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-size': textSize,
            visibility: visible && textVisible ? 'visible' : 'none'
          }
        });
        this.map.addLayer({
          id: this.id + 'unclustered-point',
          type: 'circle',
          source: this.id,
          filter: ['!', ['has', 'point_count']],
          minzoom: minZoom,
          maxzoom: maxZoom,
          paint: {
            'circle-opacity': opacity,
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
          },
          layout: {
            visibility: visible ? 'visible' : 'none'
          }
        }); // inspect a cluster on click

        this.map.on('click', this.id + 'clusters', function (e) {
          var features = _this.map.queryRenderedFeatures(e.point, {
            layers: [_this.id + 'clusters']
          });

          var clusterId = features[0].properties.cluster_id;

          _this.map.getSource(_this.id).getClusterExpansionZoom(clusterId, function (err, zoom) {
            if (err) return;

            _this.map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
            });
          });
        });
      }
      /**
       * 更新数据源
       * @param {*} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.getSource(this.id).setData({
          type: 'FeatureCollection',
          features: this.data
        });
      }
    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(props) {
        this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);
        this.map.setLayoutProperty(this.id + 'clusters', 'visibility', this.style.visible ? 'visible' : 'none');
        this.map.setLayoutProperty(this.id + 'cluster-count', 'visibility', this.style.visible && this.style.textVisible ? 'visible' : 'none');
        this.map.setLayoutProperty(this.id + 'unclustered-point', 'visibility', this.style.visible ? 'visible' : 'none');
        this.map.setLayerZoomRange(this.id + 'cluster-count', this.style.minZoom, this.style.maxZoom);
        this.map.setLayerZoomRange(this.id + 'unclustered-point', this.style.minZoom, this.style.maxZoom);
        this.map.setLayerZoomRange(this.id + 'clusters', this.style.minZoom, this.style.maxZoom);
        this.map.setPaintProperty(this.id + 'clusters', 'circle-opacity', this.style.opacity);
        this.map.setPaintProperty(this.id + 'cluster-count', 'icon-opacity', this.style.opacity);
        this.map.setPaintProperty(this.id + 'unclustered-point', 'circle-opacity', this.style.opacity);
        this.map.setLayoutProperty(this.id + 'cluster-count', 'text-size', this.style.textSize);
        this.map.setPaintProperty(this.id + 'cluster-count', 'text-color', this.style.textColor);

        if (typeof props.clusterRadius !== 'undefined') {
          this.removeLayer();
          this.addData({
            features: this.data,
            layerId: this.id
          });
        }
      }
    }, {
      key: "removeLayer",
      value: function removeLayer() {
        if (this.map.getLayer(this.id + 'clusters')) {
          this.map.removeLayer(this.id + 'clusters');
        }

        if (this.map.getLayer(this.id + 'cluster-count')) {
          this.map.removeLayer(this.id + 'cluster-count');
        }

        if (this.map.getLayer(this.id + 'unclustered-point')) {
          this.map.removeLayer(this.id + 'unclustered-point');
        }

        this.map.getSource(this.id) && this.map.removeSource(this.id);
      }
    }]);

    return Cluster;
  }();

  var isNumber$1 = function isNumber(value) {
    return !isNaN(+value);
  };

  var Grid = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Grid, _BaseLayer);

    var _super = _createSuper(Grid);

    function Grid(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Grid);

      return _super.call(this, map, baseLayerId, id, style, aggregationLayers.GridLayer);
    }

    _createClass(Grid, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            colors = _this$_style.colors,
            size = _this$_style.size,
            aggregation = _this$_style.aggregation,
            weight = _this$_style.weight;
        return _objectSpread2$1({
          colorRange: colors,
          cellSize: size,
          getColorValue: function getColorValue(points) {
            if (aggregation === 'count') {
              return points.length;
            }

            if (aggregation === 'sum') {
              var res = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0);
              return isNumber$1(res) ? res : points.length;
            }

            if (aggregation === 'mean') {
              var _res = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0) / points.length;

              return isNumber$1(_res) ? _res : points.length;
            }
          },
          getElevationValue: function getElevationValue(points) {
            if (aggregation === 'count') {
              return points.length;
            }

            if (aggregation === 'sum') {
              var res = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0);
              return isNumber$1(res) ? res : points.length;
            }

            if (aggregation === 'mean') {
              var _res2 = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0) / points.length;

              return isNumber$1(_res2) ? _res2 : points.length;
            }
          },
          updateTriggers: {
            getColorValue: [aggregation, weight],
            getElevationValue: [aggregation, weight]
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Grid;
  }(BaseLayer$1);

  var isNumber = function isNumber(value) {
    return !isNaN(+value);
  };

  var Hexagon = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Hexagon, _BaseLayer);

    var _super = _createSuper(Hexagon);

    function Hexagon(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Hexagon);

      return _super.call(this, map, baseLayerId, id, style, aggregationLayers.HexagonLayer);
    }

    _createClass(Hexagon, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            colors = _this$_style.colors,
            radius = _this$_style.radius,
            aggregation = _this$_style.aggregation,
            weight = _this$_style.weight;
        return _objectSpread2$1({
          radius: radius,
          colorRange: colors,
          getColorValue: function getColorValue(points) {
            if (aggregation === 'count') {
              return points.length;
            }

            if (aggregation === 'sum') {
              var res = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0);
              return isNumber(res) ? res : points.length;
            }

            if (aggregation === 'mean') {
              var _res = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0) / points.length;

              return isNumber(_res) ? _res : points.length;
            }
          },
          getElevationValue: function getElevationValue(points) {
            if (aggregation === 'count') {
              return points.length;
            }

            if (aggregation === 'sum') {
              var res = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0);
              return isNumber(res) ? res : points.length;
            }

            if (aggregation === 'mean') {
              var _res2 = points.reduce(function (sum, point) {
                return sum + point.properties[weight];
              }, 0) / points.length;

              return isNumber(_res2) ? _res2 : points.length;
            }
          },
          updateTriggers: {
            getColorValue: [aggregation, weight],
            getElevationValue: [aggregation, weight]
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Hexagon;
  }(BaseLayer$1);

  var Trips = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Trips, _BaseLayer);

    var _super = _createSuper(Trips);

    function Trips(_ref) {
      var _this;

      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Trips);

      _this = _super.call(this, map, baseLayerId, id, style, geoLayers.TripsLayer);
      _this.time = 0;
      _this.animation = {};
      _this.animate = _this.animate.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Trips, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            color = _this$_style.color,
            width = _this$_style.width;
        return _objectSpread2$1(_objectSpread2$1({}, this.color(color, 'getColor')), {}, {
          getWidth: width,
          updateTriggers: {
            getColor: color
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }, {
      key: "animate",
      value: function animate() {
        this.time = (this.time + this.style.animationSpeed) % this.style.loopLength;
        this.animation.id = window.requestAnimationFrame(this.animate);
        this.style = {
          currentTime: this.time
        };
        this.update();
      }
      /**
       * 添加图层数据
       * @param {*} layer
       * @param {*} data
       */

    }, {
      key: "addData",
      value: function addData(data) {
        var dataArray = data.features || data;
        var loopLength = this.style.loopLength;

        if (Array.isArray(dataArray)) {
          dataArray = dataArray.map(function (line) {
            if (!line.geometry) {
              return line;
            } // 根据一次循环的时长计算默认时间戳


            var num = line.geometry.coordinates.length;
            var interval = loopLength / num;
            var timestamp = line.geometry.coordinates.map(function (item, index) {
              return index * interval;
            });
            return _objectSpread2$1(_objectSpread2$1({}, line), {}, {
              properties: _objectSpread2$1({
                timestamp: timestamp
              }, line.properties)
            });
          });
        }

        data.features ? data.features = dataArray : data = dataArray;

        _get(_getPrototypeOf(Trips.prototype), "addData", this).call(this, data);

        if (this.animation.id) {
          window.cancelAnimationFrame(this.animation.id);
        }

        this.animation.id = window.requestAnimationFrame(this.animate);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        window.cancelAnimationFrame(this.animation.id);
      }
    }]);

    return Trips;
  }(BaseLayer$1);

  var Layer = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Layer, _BaseLayer);

    var _super = _createSuper(Layer);

    function Layer(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Layer);

      return _super.call(this, map, baseLayerId, id, style, layers$1.TextLayer);
    }

    _createClass(Layer, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            elevation = _this$_style.elevation,
            size = _this$_style.size,
            color = _this$_style.color,
            angle = _this$_style.angle,
            textAnchor = _this$_style.textAnchor,
            alignmentBaseline = _this$_style.alignmentBaseline,
            textField = _this$_style.textField,
            writingMode = _this$_style.writingMode;
        return _objectSpread2$1(_objectSpread2$1({
          getSize: size,
          getText: function getText(d) {
            var s = String(d.properties[textField] || "");

            if (writingMode === "vertical") {
              s = s.replaceAll("", "\n");
            }

            return " ".repeat(20) + s + " ".repeat(20);
          },
          getPixelOffset: [0, -elevation],
          getTextAnchor: textAnchor,
          // 文本锚点
          getAlignmentBaseline: alignmentBaseline
        }, this.color(color, "getColor")), {}, {
          getAngle: angle,
          updateTriggers: {
            getColor: color,
            getText: [textField, writingMode]
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Layer;
  }(BaseLayer$1);

  var lengthenLine = /*#__PURE__*/function () {
    function lengthenLine(map) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 2000 : _ref$duration,
          _ref$outerColor = _ref.outerColor,
          outerColor = _ref$outerColor === void 0 ? [255, 255, 255] : _ref$outerColor,
          _ref$innerColor = _ref.innerColor,
          innerColor = _ref$innerColor === void 0 ? [255, 255, 255] : _ref$innerColor,
          _ref$direction = _ref.direction,
          direction = _ref$direction === void 0 ? "top" : _ref$direction,
          _ref$width = _ref.width,
          width = _ref$width === void 0 ? 1 : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? 100 : _ref$height,
          _ref$dash = _ref.dash,
          dash = _ref$dash === void 0 ? 0 : _ref$dash;

      _classCallCheck(this, lengthenLine);

      this.map = map;
      this.width = width;
      this.height = height;
      this.data = new Uint8Array(this.width * height * 4);
      this.outerColor = outerColor;
      this.innerColor = innerColor;
      this.duration = duration;
      this.direction = direction;
      this.dash = dash;
    }

    _createClass(lengthenLine, [{
      key: "onAdd",
      value: function onAdd() {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
        this.context.setLineDash([this.dash, this.dash]);
      }
    }, {
      key: "render",
      value: function render() {
        var duration = this.duration;
        var t = performance.now() % duration / duration;
        var start = this.direction === "top" ? this.height : 0;
        var height = this.direction === "top" ? (1 - t) * this.height : t * this.height;
        var context = this.context;
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        var gnt = context.createLinearGradient(0, this.height - 5, 0, 0);
        gnt.addColorStop(1, "rgba(".concat(this.outerColor.join(","), ", 1)"));
        gnt.addColorStop(0, "rgba(".concat(this.innerColor.join(","), ", 0.5)"));
        context.strokeStyle = gnt;
        context.moveTo(0, start);
        context.lineTo(0, height);
        context.lineWidth = this.width;
        context.stroke();
        context.crossOrigin = "";
        this.data = context.getImageData(0, 0, this.width, this.height).data;
        this.map.triggerRepaint();
        return true;
      }
    }]);

    return lengthenLine;
  }();

  var risingLine = /*#__PURE__*/function () {
    function risingLine(map) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 2000 : _ref$duration,
          _ref$outerColor = _ref.outerColor,
          outerColor = _ref$outerColor === void 0 ? [255, 255, 255] : _ref$outerColor,
          _ref$innerColor = _ref.innerColor,
          innerColor = _ref$innerColor === void 0 ? [255, 255, 255] : _ref$innerColor,
          _ref$direction = _ref.direction,
          direction = _ref$direction === void 0 ? "bottom" : _ref$direction,
          _ref$width = _ref.width,
          width = _ref$width === void 0 ? 1 : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? 100 : _ref$height,
          _ref$dash = _ref.dash,
          dash = _ref$dash === void 0 ? 0 : _ref$dash;

      _classCallCheck(this, risingLine);

      this.map = map;
      this.width = width;
      this.height = height;
      this.data = new Uint8Array(this.width * height * 4);
      this.outerColor = outerColor;
      this.innerColor = innerColor;
      this.duration = duration;
      this.direction = direction;
      this.dash = dash;
    }

    _createClass(risingLine, [{
      key: "onAdd",
      value: function onAdd() {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
        this.context.setLineDash([this.dash, this.dash]);
      }
    }, {
      key: "render",
      value: function render() {
        var duration = this.duration;
        var t = performance.now() % duration / duration;
        var start = this.direction === "bottom" ? this.height : 0;
        var height = this.direction === "top" ? (1 - t) * this.height : t * this.height;
        var context = this.context;
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        var gnt = context.createLinearGradient(0, this.height - 5, 0, 0);
        gnt.addColorStop(1, "rgba(".concat(this.outerColor.join(","), ", 1)"));
        gnt.addColorStop(0, "rgba(".concat(this.innerColor.join(","), ", 0.5)"));
        context.strokeStyle = gnt;
        context.moveTo(0, start);
        context.lineTo(0, height);
        context.lineWidth = this.width;
        context.stroke();
        context.crossOrigin = "";
        this.data = context.getImageData(0, 0, this.width, this.height).data;
        this.map.triggerRepaint();
        return true;
      }
    }]);

    return risingLine;
  }();

  var animationTypes = {
    shorten: risingLine,
    lengthen: lengthenLine
  };

  var FlyingLine = /*#__PURE__*/function () {
    function FlyingLine(_ref) {
      var mapbox = _ref.mapbox,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, FlyingLine);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1({
        opacity: 1,
        animationType: "lengthen",
        maxZoom: 24,
        minZoom: 0,
        visible: true,
        overlap: false,
        dash: 0,
        color: [[255, 255, 255]],
        width: 1,
        height: 100,
        duration: 2000,
        altitude: 0
      }, style);
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */


    _createClass(FlyingLine, [{
      key: "addData",
      value: function addData(data) {
        if (data.layerId !== this.id) {
          console.warn("当前图层id与数据图层id不匹配");
          return;
        }

        var _this$style = this.style,
            opacity = _this$style.opacity,
            animationType = _this$style.animationType,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            visible = _this$style.visible,
            overlap = _this$style.overlap,
            dash = _this$style.dash,
            color = _this$style.color,
            width = _this$style.width,
            height = _this$style.height,
            duration = _this$style.duration,
            altitude = _this$style.altitude;
        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.addImage(this.id, new animationTypes[animationType](this.map, {
          outerColor: color[0],
          innerColor: color[1] || color[0],
          dash: dash,
          width: width,
          height: height,
          duration: duration
        }), {
          pixelRatio: 2
        });
        this.map.addLayer({
          id: this.id,
          type: "symbol",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: this.data
            }
          },
          minzoom: minZoom,
          maxzoom: maxZoom,
          paint: {
            "icon-opacity": opacity
          },
          layout: {
            "icon-image": this.id,
            "icon-size": 4,
            "icon-anchor": "bottom",
            visibility: visible ? "visible" : "none",
            "icon-offset": [0, -altitude],
            "icon-allow-overlap": overlap
          }
        });
      }
      /**
       * 更新数据源
       * @param {*} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        if (data.layerId !== this.id) {
          console.warn("当前图层id与数据图层id不匹配");
          return;
        }

        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.getSource(this.id).setData({
          type: "FeatureCollection",
          features: this.data
        });
      }
    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(props) {
        this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

        if (props.visible === 1) {
          this.map.setLayoutProperty(this.id, "visibility", "visible");
        }

        if (props.visible === 0) {
          this.map.setLayoutProperty(this.id, "visibility", "none");
        }

        if (typeof props.altitude !== "undefined") {
          this.map.setLayoutProperty(this.id, "icon-offset", [0, -props.altitude]);
        }

        if (typeof props.overlap === "boolean") {
          this.map.setLayoutProperty(this.id, "icon-allow-overlap", props.overlap);
        }

        this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
        this.map.setPaintProperty(this.id, "icon-opacity", this.style.opacity);

        if (props.animationType || props.color || props.dash || props.width || props.height || props.duration) {
          this.map.removeImage(this.id);
          this.map.addImage(this.id, new animationTypes[this.style.animationType](this.map, _objectSpread2$1(_objectSpread2$1({}, this.style), {}, {
            outerColor: this.style.color[0],
            innerColor: this.style.color[1] || this.style.color[0]
          })), {
            pixelRatio: 2
          });
        }
      }
    }, {
      key: "removeLayer",
      value: function removeLayer() {
        this.map.hasImage(this.id) && this.map.removeImage(this.id);
        this.map.getSource(this.id) && this.map.removeSource(this.id);
      }
    }]);

    return FlyingLine;
  }();

  function breathing (_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? 36 : _ref$size,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 3000 : _ref$duration,
        _ref$sizeScale = _ref.sizeScale,
        sizeScale = _ref$sizeScale === void 0 ? 1 : _ref$sizeScale,
        image = _ref.image;
    var that = this;

    var _size = parseInt(sizeScale * size * 2);

    return {
      width: _size,
      height: _size,
      data: new Uint8Array(_size * _size * 4),
      onAdd: function onAdd() {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
      },
      render: function render() {
        var _this = this;

        var t = performance.now() % duration / duration;

        if (t > 0.5) {
          t = 1 - t;
        }

        t = t * 2;
        var iamgeObject = new Image();
        iamgeObject.src = image;
        var imageHeight = this.height * t;
        var imageWidth = this.width * t;
        var x = this.width / 2 - imageWidth / 2;
        var y = this.height / 2 - imageHeight / 2;

        iamgeObject.onload = function () {
          _this.context.clearRect(0, 0, _this.width, _this.height);

          _this.context.drawImage(iamgeObject, x, y, imageWidth, imageHeight);
        }; // update this image's data with data from the canvas


        this.data = this.context.getImageData(0, 0, this.width, this.height).data; // keep the map repainting

        that.map.triggerRepaint(); // return `true` to let the map know that the image was updated

        return true;
      }
    };
  }

  var AnimationIcon = /*#__PURE__*/function () {
    function AnimationIcon(_ref) {
      var mapbox = _ref.mapbox,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, AnimationIcon);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1({
        opacity: 1,
        pitchAlignment: "viewport",
        overlap: false,
        maxZoom: 24,
        minZoom: 0,
        visible: true,
        duration: 2000,
        altitude: 0,
        sizeScale: 1,
        image: ""
      }, style);
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */


    _createClass(AnimationIcon, [{
      key: "addData",
      value: function addData(data) {
        if (data.layerId !== this.id) {
          console.warn("当前图层id与数据图层id不匹配");
          return;
        }

        var _this$style = this.style,
            opacity = _this$style.opacity,
            pitchAlignment = _this$style.pitchAlignment,
            overlap = _this$style.overlap,
            maxZoom = _this$style.maxZoom,
            minZoom = _this$style.minZoom,
            visible = _this$style.visible,
            duration = _this$style.duration,
            altitude = _this$style.altitude,
            sizeScale = _this$style.sizeScale,
            image = _this$style.image;
        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.addImage(this.id, breathing.bind(this)({
          duration: duration,
          sizeScale: sizeScale,
          image: image
        }), {
          pixelRatio: 2
        });
        this.map.addLayer({
          id: this.id,
          type: "symbol",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: this.data
            }
          },
          minzoom: minZoom,
          maxzoom: maxZoom,
          paint: {
            "icon-opacity": opacity
          },
          layout: {
            "icon-image": this.id,
            "icon-pitch-alignment": pitchAlignment,
            "icon-allow-overlap": overlap,
            visibility: visible ? "visible" : "none",
            "icon-offset": [0, -altitude]
          }
        });
      }
      /**
       * 更新数据源
       * @param {*} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        if (data.layerId !== this.id) {
          console.warn("当前图层id与数据图层id不匹配");
          return;
        }

        this.data = (data === null || data === void 0 ? void 0 : data.features) || data;
        this.map.getSource(this.id).setData({
          type: "FeatureCollection",
          features: this.data
        });
      }
    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(props) {
        this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

        if (props.visible === 1) {
          this.map.setLayoutProperty(this.id, "visibility", "visible");
        }

        if (props.visible === 0) {
          this.map.setLayoutProperty(this.id, "visibility", "none");
        }

        if (props.pitchAlignment) {
          this.map.setLayoutProperty(this.id, "icon-pitch-alignment", this.style.pitchAlignment);
        }

        if (typeof props.overlap === "boolean") {
          this.map.setLayoutProperty(this.id, "icon-allow-overlap", this.style.overlap);
        }

        this.map.setLayerZoomRange(this.id, this.style.minZoom, this.style.maxZoom);
        this.map.setPaintProperty(this.id, "icon-opacity", this.style.opacity);

        if (props.duration || props.altitude || props.sizeScale || props.image) {
          this.map.removeImage(this.id);
          this.map.addImage(this.id, breathing.bind(this)(_objectSpread2$1({}, this.style)), {
            pixelRatio: 2
          });
        }
      }
    }, {
      key: "removeLayer",
      value: function removeLayer() {
        this.map.hasImage(this.id) && this.map.removeImage(this.id);
        this.map.getSource(this.id) && this.map.removeSource(this.id);
      }
    }]);

    return AnimationIcon;
  }();

  var Scenegraph = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Scenegraph, _BaseLayer);

    var _super = _createSuper(Scenegraph);

    function Scenegraph(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Scenegraph);

      return _super.call(this, map, baseLayerId, id, style, meshLayers.ScenegraphLayer);
    }

    _createClass(Scenegraph, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            color = _this$_style.color,
            altitude = _this$_style.altitude,
            url = _this$_style.url,
            speed = _this$_style.speed,
            playing = _this$_style.playing;
        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
          _lighting: "pbr",
          getOrientation: [0, 0, 90]
        }, this._style), this.color(color, "getColor")), {}, {
          scenegraph: url,
          _animations: {
            "*": {
              speed: speed,
              playing: playing
            }
          },
          getTranslation: [0, 0, altitude],
          updateTriggers: {
            getColor: color
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Scenegraph;
  }(BaseLayer$1);

  var styles = {"normal":"styles_normal__KeKOE","titleBox":"styles_titleBox__NWxNf","leftBorder":"styles_leftBorder__aTM8w","lineBox":"styles_lineBox__jbZoq"};

  /**
   *  正则添加千位分隔符
   * @param {数值} num
   * @returns
   */

  function numFormatRegExp(num) {
    var res = num.toString().replace(/\d+/, function (n) {
      // 先提取整数部分
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ',';
      });
    });
    return res;
  }
  /**
   * @param {*} node 包裹标签的html对象
   * @param {*} mapStyle 自定义标签样式
   * @returns
   */


  function labelTextLayer(node, mapStyle) {
    var sizeScale = mapStyle.sizeScale,
        backgroundStyle = mapStyle.backgroundStyle,
        borderStyle = mapStyle.borderStyle,
        textStyle = mapStyle.textStyle,
        numberStyle = mapStyle.numberStyle,
        unitStyle = mapStyle.unitStyle,
        tractionLineStyle = mapStyle.tractionLineStyle,
        fieldLabel = mapStyle.fieldLabel,
        fieldVlaue = mapStyle.fieldVlaue;

    function labelDom() {
      var _borderStyle$boxShado;

      // ------------- 标签头部文字设置 start -------------
      var titleStyle = {
        background: backgroundStyle.status ? backgroundStyle.type1Default.gradientStatus ? "-webkit-linear-gradient(".concat(backgroundStyle.type1Default.gradientDirection, "deg,").concat(backgroundStyle.type1Default.gradientColor1, ", ").concat(backgroundStyle.type1Default.gradientColor2, ")") : backgroundStyle.type1Default.defaultColor : 'transparent',
        borderColor: borderStyle.borderColor,
        borderWidth: borderStyle.status ? borderStyle.borderWidth + 'px' : '1px',
        boxShadow: (_borderStyle$boxShado = borderStyle.boxShadow) !== null && _borderStyle$boxShado !== void 0 && _borderStyle$boxShado.status ? "".concat(borderStyle.boxShadow.xShadow, "px ").concat(borderStyle.boxShadow.yShadow, "px ").concat(borderStyle.boxShadow.blur, "px ").concat(borderStyle.boxShadow.color) : 'none',
        borderRadius: "".concat(borderStyle.borderRadius, "px")
      };

      var feildNameStyle = _objectSpread2$1(_objectSpread2$1({}, textStyle.defaultStyle), {}, {
        marginLeft: textStyle.marginObj.marginLeft + 'px',
        marginRight: textStyle.marginObj.marginRight + 'px',
        marginTop: textStyle.marginObj.marginTop + 'px',
        marginBottom: textStyle.marginObj.marginBottom + 'px',
        fontSize: textStyle.defaultStyle.fontSize + 'px'
      });

      var feildValueStyle = _objectSpread2$1(_objectSpread2$1({}, numberStyle.defaultStyle), {}, {
        marginLeft: numberStyle.marginObj.marginLeft + 'px',
        marginRight: numberStyle.marginObj.marginRight + 'px',
        marginTop: numberStyle.marginObj.marginTop + 'px',
        marginBottom: numberStyle.marginObj.marginBottom + 'px',
        fontSize: numberStyle.defaultStyle.fontSize + 'px'
      });

      var feildUnitStyle = _objectSpread2$1(_objectSpread2$1({}, unitStyle.defaultStyle), {}, {
        marginLeft: unitStyle.marginObj.marginLeft + 'px',
        marginRight: unitStyle.marginObj.marginRight + 'px',
        marginTop: unitStyle.marginObj.marginTop + 'px',
        marginBottom: unitStyle.marginObj.marginBottom + 'px',
        fontSize: unitStyle.defaultStyle.fontSize + 'px'
      }); // ------------- 标签头部文字设置 end -------------
      // ------------- 牵引线设置 start -------------


      var lineStyle = {
        background: tractionLineStyle.lineStyle === 'solid' ? tractionLineStyle.lineColor : tractionLineStyle.lineStyle === 'gradient' ? "linear-gradient(top,".concat(tractionLineStyle.lineColor, ", rgba(0, 0, 0, 0))") : "linear-gradient(top,".concat(tractionLineStyle.lineColor, " 50%, rgba(0, 0, 0, 0) 50%)"),
        width: tractionLineStyle.lineWidth + 'px',
        height: (tractionLineStyle.lineHeight || 12) * 2 + 'px'
      };
      var leftBorderStyle = {
        display: 'initial',
        width: tractionLineStyle.lineWidth + 'px',
        background: tractionLineStyle.lineColor,
        borderLeftColor: tractionLineStyle.lineColor,
        marginTop: "-".concat(titleStyle.borderWidth, "px"),
        height: "calc(100% + ".concat((titleStyle.borderWidth || 1) * 2, "px)")
      };

      if (tractionLineStyle.lineStyle === 'dotted') {
        lineStyle.backgroundSize = "100% 20px";
      } // 不需要显隐牵引线
      // if (!tractionLineStyle.status) {
      //   lineStyle.display = 'none';
      // }


      if (tractionLineStyle.location !== 'center') {
        titleStyle.transform = "translate(50%, -100%)";
        titleStyle.borderLeft = 0 + 'px';
        titleStyle.borderTopLeftRadius = 0 + 'px';
        titleStyle.borderBottomLeftRadius = 0 + 'px';
      } // ------------- 牵引线设置 end -------------
      // -------------- 判断数据是否为number


      var dataNum = fieldVlaue;

      if (Number(dataNum) && numberStyle.numSeparator) {
        dataNum = numFormatRegExp(dataNum);
      } // ------------- normal样式


      var normalStyle = {
        height: (tractionLineStyle.lineHeight || 12) * 2 + 'px',
        transform: "translate(0, -50%) scale(".concat(sizeScale, ")")
      };
      return "\n      <div class=".concat(styles.normal, " style='").concat(styleToCss__default["default"](normalStyle), "'>\n        <div class=").concat(styles.titleBox, " style='").concat(styleToCss__default["default"](titleStyle), "'>\n          <div\n          class=").concat(styles.leftBorder, "\n            style='").concat(tractionLineStyle.location !== 'center' ? styleToCss__default["default"](leftBorderStyle) : '', "\n            '></div>\n          <span style='").concat(styleToCss__default["default"](feildNameStyle), "'>").concat(fieldLabel, "</span>\n          <span style='").concat(styleToCss__default["default"](feildValueStyle), "'>").concat(dataNum, "</span>\n          <span style='").concat(unitStyle.unit ? styleToCss__default["default"](feildUnitStyle) : '', "'>").concat(unitStyle.unit, "</span>\n        </div>\n        <div class=").concat(styles.lineBox, " style='").concat(styleToCss__default["default"](lineStyle), "'></div>\n      </div>\n    ");
    }

    if (node) {
      node.innerHTML = labelDom();
    }
  }

  var Marker = /*#__PURE__*/function () {
    function Marker(_ref) {
      var _objectSpread2;

      var mapbox = _ref.mapbox,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Marker);

      this.map = mapbox;
      this.baseLayerId = baseLayerId;
      this.id = id;
      this.style = _objectSpread2$1((_objectSpread2 = {
        opacity: 1,
        maxZoom: 24,
        minZoom: 0,
        visible: true,
        visible_zoom: true,
        altitude: 0,
        sizeScale: 1
      }, _defineProperty(_objectSpread2, "sizeScale", 1), _defineProperty(_objectSpread2, "backgroundStyle", {}), _defineProperty(_objectSpread2, "borderStyle", {}), _defineProperty(_objectSpread2, "textStyle", {}), _defineProperty(_objectSpread2, "numberStyle", {}), _defineProperty(_objectSpread2, "unitStyle", {}), _defineProperty(_objectSpread2, "tractionLineStyle", {}), _defineProperty(_objectSpread2, "fieldLabel", '名称'), _defineProperty(_objectSpread2, "fieldKey", 'name'), _objectSpread2), style);
      this.markers = [];
    }
    /**
     * 添加图层数据
     * @param {*} layer
     * @param {*} data
     */


    _createClass(Marker, [{
      key: "addData",
      value: function addData(data) {
        var _this$data,
            _this = this;

        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        var zoom = this.map.getZoom();

        if (zoom > this.style.maxZoom || zoom < this.style.minZoom) {
          this.style.visible_zoom = false;
        } else {
          this.style.visible_zoom = true;
        }

        var _this$style = this.style;
            _this$style.opacity;
            _this$style.maxZoom;
            _this$style.minZoom;
            var visible = _this$style.visible,
            visible_zoom = _this$style.visible_zoom,
            altitude = _this$style.altitude,
            sizeScale = _this$style.sizeScale,
            backgroundStyle = _this$style.backgroundStyle,
            borderStyle = _this$style.borderStyle,
            textStyle = _this$style.textStyle,
            numberStyle = _this$style.numberStyle,
            unitStyle = _this$style.unitStyle,
            tractionLineStyle = _this$style.tractionLineStyle,
            fieldLabel = _this$style.fieldLabel,
            fieldKey = _this$style.fieldKey;
        this.data = (data === null || data === void 0 ? void 0 : data.features) || data; // eslint-disable-next-line no-unused-expressions

        (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.forEach(function (item, index) {
          var domID = "".concat(_this.id, "_").concat(index);
          var dom = document.createElement('div');
          dom.id = domID;
          dom.style.background = 'transparent';
          var marker = new mapboxgl__default["default"].Marker({
            element: dom,
            offset: [0, -altitude]
          }).setLngLat(item.geometry.coordinates).addTo(_this.map);
          labelTextLayer(document.getElementById(domID), {
            sizeScale: sizeScale,
            backgroundStyle: backgroundStyle,
            borderStyle: borderStyle,
            textStyle: textStyle,
            numberStyle: numberStyle,
            unitStyle: unitStyle,
            tractionLineStyle: tractionLineStyle,
            fieldLabel: fieldLabel,
            fieldVlaue: item.properties[fieldKey]
          });
          marker._element.style.display = visible && visible_zoom ? 'block' : 'none';

          _this.markers.push(marker);
        });
      }
      /**
       * 更新数据源
       * @param {*} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        if (data.layerId !== this.id) {
          console.warn('当前图层id与数据图层id不匹配');
          return;
        }

        this.removeLayer();
        this.addData(this.data);
      }
    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(props) {
        var _this2 = this;

        this.style = _objectSpread2$1(_objectSpread2$1({}, this.style), props);

        if (typeof props.visible !== 'undefined' || typeof props.visible_zoom !== 'undefined') {
          this.markers.forEach(function (item) {
            item._element.style.display = _this2.style.visible && _this2.style.visible_zoom ? 'block' : 'none';
          });
        }

        if (typeof props.altitude !== 'undefined') {
          this.markers.forEach(function (item) {
            item.setOffset([0, -props.altitude]);
          });
        }

        if (typeof props.maxZoom !== 'undefined' || typeof props.minZoom !== 'undefined') {
          var zoom = this.map.getZoom();

          if (zoom > this.style.maxZoom || zoom < this.style.minZoom) {
            this.style.visible_zoom = false;
          } else {
            this.style.visible_zoom = true;
          }

          this.markers.forEach(function (item) {
            item._element.style.display = _this2.style.visible && _this2.style.visible_zoom ? 'block' : 'none';
          });
        }

        if (props.sizeScale || props.backgroundStyle || props.borderStyle || props.textStyle || props.numberStyle || props.unitStyle || props.tractionLineStyle || props.fieldLabel || props.fieldKey) {
          this.removeLayer();
          this.addData(this.data);
        }
      }
    }, {
      key: "setVisibleByZoom",
      value: function setVisibleByZoom(zoom) {
        var _this$style2 = this.style,
            maxZoom = _this$style2.maxZoom,
            minZoom = _this$style2.minZoom;

        if (zoom > maxZoom || zoom < minZoom) {
          this.updateLayerProp({
            visible_zoom: false
          });
        } else {
          this.updateLayerProp({
            visible_zoom: true
          });
        }
      }
    }, {
      key: "removeLayer",
      value: function removeLayer() {
        this.markers.forEach(function (item) {
          item.remove();
        });
        this.markers = [];
      }
    }]);

    return Marker;
  }();

  var Line = /*#__PURE__*/function (_BaseLayer) {
    _inherits(Line, _BaseLayer);

    var _super = _createSuper(Line);

    function Line(_ref) {
      var map = _ref.map,
          baseLayerId = _ref.baseLayerId,
          id = _ref.id,
          style = _ref.style;

      _classCallCheck(this, Line);

      return _super.call(this, map, baseLayerId, id, style, layers$1.LineLayer);
    }

    _createClass(Line, [{
      key: "style",
      get: function get() {
        var _this$_style = this._style,
            lineColor = _this$_style.lineColor,
            lineWidth = _this$_style.lineWidth;
        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, this.color(lineColor, 'getColor')), this.size(lineWidth, 'getWidth')), {}, {
          updateTriggers: {
            getColor: lineColor,
            getWidth: lineWidth
          }
        }, this._style);
      },
      set: function set(value) {
        this._style = _objectSpread2$1(_objectSpread2$1({}, this._style), value);
      }
    }]);

    return Line;
  }(BaseLayer$1);

  var layers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Scatterplot: Scatterplot,
    Icon: Icon,
    Heartbeat: Heartbeat,
    Heatmap: Heatmap,
    Path: Path,
    GreatCircle: GreatCircle,
    Arc: Arc,
    Polygon: Polygon,
    Cluster: Cluster,
    Grid: Grid,
    Hexagon: Hexagon,
    Trips: Trips,
    Text: Layer,
    FlyingLine: FlyingLine,
    AnimationIcon: AnimationIcon,
    Scenegraph: Scenegraph,
    Marker: Marker,
    Line: Line
  });

  var _LayerEnum;

  var LayerEnum = (_LayerEnum = {}, _defineProperty(_LayerEnum, LayerType.PointLayer, 'Scatterplot'), _defineProperty(_LayerEnum, LayerType.IconLayer, 'Icon'), _defineProperty(_LayerEnum, LayerType.RadiationLayer, 'Heartbeat'), _defineProperty(_LayerEnum, LayerType.ClusterLayer, 'Cluster'), _defineProperty(_LayerEnum, LayerType.GridLayer, 'Grid'), _defineProperty(_LayerEnum, LayerType.HexagonLayer, 'Hexagon'), _defineProperty(_LayerEnum, LayerType.RTTrackLayer, 'Trips'), _defineProperty(_LayerEnum, LayerType.HeatMapLayer, 'Heatmap'), _defineProperty(_LayerEnum, LayerType.Arc, 'Arc'), _defineProperty(_LayerEnum, LayerType.GreatCircle, 'GreatCircle'), _defineProperty(_LayerEnum, LayerType.PolyLineLayer, 'Path'), _defineProperty(_LayerEnum, LayerType.PolygonLayer, 'Polygon'), _defineProperty(_LayerEnum, LayerType.Text, 'Text'), _defineProperty(_LayerEnum, LayerType.FlyingLine, 'FlyingLine'), _defineProperty(_LayerEnum, LayerType.AnimationIcon, 'AnimationIcon'), _defineProperty(_LayerEnum, LayerType.ModelSymbolLayer, 'Scenegraph'), _defineProperty(_LayerEnum, LayerType.Marker, 'Marker'), _defineProperty(_LayerEnum, LayerType.Line, 'Line'), _LayerEnum);
  /**
   * @class
   * @classdesc DccLayers:
   * 二三维场景图层接口，用于获取图层信息，对图层进行配置和管理
   * @constructor
   * @param {DCCEngine} engine 关联的渲染引擎对象
   * @returns {DccLayers} 返回DccLayers对象
   **/

  var MapLayers = /*#__PURE__*/function (_DccLayers) {
    _inherits(MapLayers, _DccLayers);

    var _super = _createSuper(MapLayers);

    function MapLayers(engine) {
      var _this;

      _classCallCheck(this, MapLayers);

      _this = _super.call(this, engine);
      _this.engine = engine;
      _this.layers = {};
      return _this;
    }
    /**
     * 查询场景中所有的图层
     * @method
     * @param {LayersQueryMode} queryMode ：查询方式，详细参考：LayersQueryMode
     * @param {Array} labels ：图层标签过滤条件，通过标签对查询结果进行过滤，只有具备特定标签的图层才被返回；labels默认为[]，此时标签过滤失效，将依据其他查询条件返回所有满足要求的图层。
     * @param {function} fn ：回调函数，返回是否成功和图层信息，包括图层名称、图层类型、可见、可拾取、可悬停触发和图层标签，返回信息结构如下：
     * {
     *   result:_SUCCESS,
     *   command:Layers_QueryLayers,
     *   layers:[
     *     {layerName:'road',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base','主干道']},
     *     {layerName:'water',layerType:1000,visible:0,pickable=0,hoverable=0,cacheable:0,labels:['base']},
     *     {layerName:'building',layerType:1000,visible:1,pickable=0,hoverable=0,cacheable:0,labels:['base']},
     *   ]
     * }
     * @example
     * dc.layers.queryLayers(
     *     (e)=>{
     *        if(e.result==_SUCCESS)
     *        {
     *           //输出图层名称及其他属性
     *           console.table(layers);
     *        }
     *     }
     *  );
     **/


    _createClass(MapLayers, [{
      key: "queryLayers",
      value: function queryLayers() {
        var queryMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LayersQueryMode.AllLayers;
        var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Layers_QueryLayers, {
          queryMode: queryMode,
          labels: labels
        }, fn);
      }
      /**
       * 在场景中添加新的图层
       * @method
       * @param {LayerType} layerType ： 图层类型
       * @param {string} layerName ：    图层名称
       * @param {json} layerProp ：      图层属性,包含图层显示风格、可见比例尺,过滤器和超链接等等
       * @param {string} datasource ：   图层数据,指向GeoJSON格式数据源文件或DoSpace空间数据查询下载服务地址,如：d:\data\station.json
       * @param {DataSourceType} dsType：添加的数据格式,参考DataSourceType
       * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_AddLayer,
       *   result:_SUCCESS,
       *   layerType:1001,
       *   layerName:'layer1'，
       * }
       * @example
       * import {LayerType,LineType,LineStyle,PolygonType,FillStyle,RadiationStyle,HighlightStyle,RTTargetType,} from "./common/DccObjects"
       * import {createLayerProp} from "./common/DccObjects"
       * import {UniqueStyleMapping} from "./common/StyleMapping"
       *
       * const layerProp=createLayerProp(LayerType.PointLayer);  //创建点图层属性表
       * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
       * usm.addMappingItem('1',[5,5]);        //添加单值映射项
       * usm.addMappingItem('2',[10,10]);
       * usm.addMappingItem('3',[20,20]);
       * layerProp.size=usm.toJson();          //设置size的样式映射
       *
       * dc.layers.addLayer(LayerType.PointLayer,'layer1',
       *                     'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',  //查询周边加油站
       *                     layerProp,
       *                     (e)=>{
       *                       if(e.result==_SUCCESS)
       *                       {
       *                           console.log('图层\"${e.layerName}\"添加成功!');
       *                       }
       *                     }
       *   );
       **/

    }, {
      key: "addLayer",
      value: function addLayer(layerType, layerName, LayerProp, datasource) {
        var dsType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DataSourceType.GeoJSON;
        var fn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

        //具体实现方法
        if (LayerEnum[layerType]) {
          if (!['Heartbeat', 'Cluster', 'FlyingLine', 'AnimationIcon', 'marker', 'Heatmap'].includes(LayerEnum[layerType])) {
            this.engine.map.addLayer(new mapbox.MapboxLayer({
              id: layerName,
              deck: this.engine.deck
            }));
          } // 添加图层


          var layer = new layers[LayerEnum[layerType]]({
            mapbox: this.engine.map,
            map: this.engine.deck,
            id: layerName,
            style: _objectSpread2$1(_objectSpread2$1({}, layerConf[LayerEnum[layerType]]), LayerProp)
          }); // 维护一个已添加图层数据

          this.layers[layer.id] = layer;
          var features = (datasource === null || datasource === void 0 ? void 0 : datasource.features) || datasource; // 添加数据

          if (Array.isArray(features)) {
            // 处理多点 多面 多线
            if (!datasource.noMulti) {
              var Multis = features.filter(function (item) {
                var _item$geometry;

                return (_item$geometry = item.geometry) === null || _item$geometry === void 0 ? void 0 : _item$geometry.type.startsWith('Multi');
              });
              features = features.filter(function (item) {
                var _item$geometry2;

                return !((_item$geometry2 = item.geometry) !== null && _item$geometry2 !== void 0 && _item$geometry2.type.startsWith('Multi'));
              });
              Multis.forEach(function (item) {
                var res = item.geometry.coordinates.map(function (coordinate) {
                  return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
                    geometry: {
                      type: item.geometry.type.replace('Multi', ''),
                      coordinates: coordinate
                    }
                  });
                });
                features = features.concat(res);
              });
            }

            features.layerId = layerName;
            layer.addData(features);
          } else {
            console.error('数据格式有误请传入 geojson 数据', this.data);
          }
        }

        this.engine.excute(CommandType.Layers_AddLayer, {
          layerType: layerType,
          layerName: layerName,
          dsType: dsType,
          datasource: datasource,
          LayerProp: LayerProp
        }, fn);
      }
      /**
       * 更新场景中指定图层的样式属性，支持整体更新和局部更新
       * @method
       * @param {string} layerName ：    图层名称
       * @param {json} layerProp ：    图层属性，包含图层显示风格、可见比例尺，过滤器和超链接等等
       * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_UpdateLayerProp,
       *   result:_SUCCESS,
       *   layerType:1001,
       *   layerName:'layer1'，
       * }
       * @example
       * import {createLayerProp} from "./common/DccObjects"
       * import {UniqueStyleMapping} from "./common/StyleMapping"
       *
       * const usm=UniqueStyleMapping('type')  //采用数据中的type字段生成点的大小样式单值映射表
       * usm.addMappingItem('1',[5,5]);        //添加单值映射项
       * usm.addMappingItem('2',[10,10]);
       * usm.addMappingItem('3',[20,20]);
       *
       * //修改图层的size属性
       * dc.layers.updateLayerProp('layer1',{size:usm.toJson()},
       *      (e)=>{
       *         if(e.result==_SUCCESS)
       *         {
       *             console.log('图层\"${e.layerName}\"更新属性成功!');
       *         }
       *       }
       *   );
       **/

    }, {
      key: "updateLayerProp",
      value: function updateLayerProp(layerName, LayerProp, fn) {
        if (!this.layers[layerName]) {
          console.error('图层不存在');
          return;
        }

        this.layers[layerName].updateLayerProp(LayerProp);
        this.engine.excute(CommandType.Layers_UpdateLayerProp, {
          layerName: layerName,
          LayerProp: LayerProp
        }, fn);
      }
      /**
       * 查询场景中图层对应的数据源
       * @method
       * @param {string} layerName ：    图层名称
       * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_QueryLayerDatasource,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       *   dataSource:'http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation'
       * }
       * @example
       * dc.layers.queryLayerDatasource('layer1',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('图层\"${e.layerName}\"的数据源是\"${e.dataSource}\"');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryLayerDatasource",
      value: function queryLayerDatasource(layerName, fn) {
        this.engine.excute(CommandType.Layers_QueryLayerDatasource, {
          layerName: layerName
        }, fn);
      }
      /**
       * 修改场景中图层对应的数据源
       * @method
       * @param {string} layerName ：    图层名称
       * @param {string} datasource ：   要重新连接到图层的数据源
       * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_UpdateLayerDatasource,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       * }
       * @example
       * dc.layers.updateLayerDatasource('layer1','http://www.dataojo.com/dospace/around?&location=116.473168,39.993015&radius=10000&types=gasstation',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('图层\"${e.layerName}\"更新数据源成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateLayerDatasource",
      value: function updateLayerDatasource(layerName, datasource, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerDatasource, {
          layerName: layerName,
          datasource: datasource
        }, fn);
      }
      /**
       * 查询图层基本设置
       * @method
       * @param {string} layerName ：    图层名称
       * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_QueryLayerSetting,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       *   visible:1,
       *   pickable:0,
       *   hoverable:0,
       *   cacheable:0,
       * }
       * @example
       * dc.layers.queryLayerSetting('layer1',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('图层\"${e.layerName}\"的设置是\"visible ：${e.visible} pickable ${e.pickable} hoverable：${e.hoverable} | cacheable ：${e.cacheable} |\"');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryLayerSetting",
      value: function queryLayerSetting(fn) {
        this.engine.excute(CommandType.Layers_QueryLayerSetting, {}, fn);
      }
      /**
       * 修改场景中图层基本设置
       * @method
       * @param {string} layerName ：    图层名称
       * @param {json} layerSetting ：   图层配置信息
       * @param {function} fn ：         回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_UpdateLayerSetting,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       * }
       * @example
       * import {defaultLayerSetting} from "./DccGlobal"
       *
       * const lyrSetting=defaultLayerSetting;
       * lyrSetting.visible=false;
       * dc.layers.updateLayerSetting('layer1',lyrSetting,
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改图层\"${e.layerName}\"基本设置成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateLayerSetting",
      value: function updateLayerSetting(layerName, LayerSetting, fn) {
        if (!this.layers[layerName]) {
          console.error('图层不存在');
          return;
        }

        this.layers[layerName].updateLayerProp(LayerSetting);
        this.engine.excute(CommandType.Layers_UpdateLayerSetting, {
          layerName: layerName,
          LayerSetting: LayerSetting
        }, fn);
      }
      /**
       * 查询场景中图层的标签
       * @method
       * @param {string} layerName ：    图层名称
       * @param {function} fn ：         回调函数，返回是否成功和结果数据，返回信息结构如下：
       * {
       *   command:Layers_QueryLayerLabels,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       *   labels:['beijing','traffic']
       * }
       * @example
       * dc.layers.queryLayerLabels('layer1',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('图层\"${e.layerName}\"的标签是\"${e.labels}\"');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryLayerLabels",
      value: function queryLayerLabels(fn) {
        this.engine.excute(CommandType.Layers_QueryLayerLabels, {}, fn);
      }
      /**
       * 修改图层标签
       * @method
       * @param {string} layerName ：  图层名称
       * @param {Array}  labels ：     图层标签
       * @param {function} fn ：       回调函数，返回是否成功和操作图层信息，返回信息结构如下：
       * {
       *   command:Layers_UpdateLayerLabels,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       * }
       * @example
       * dc.layers.updateLayerLabels('layer1',['beijing','traffic'],
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改图层\"${e.layerName}\"标签成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateLayerLabels",
      value: function updateLayerLabels(layerName, labels, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerLabels, {
          layerName: layerName,
          labels: labels
        }, fn);
      }
      /**
       * 查询图层当前渲染模式，实景、水晶体、X光
       * @method
       * @param {string} layerName ：    图层名称
       * @param {function} fn ：         回调函数，返回是否成功和查询结果信息，返回信息结构如下：
       * {
       *   command:Layers_QueryLayerRenderMode,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       *   renderMode:0,
       *   outlineColor:[0.5,0.5,0.9,0.8],
       *   filleColor:[0.5,0.5,0.9,0.8],
       *   fillMode:1,
       *   glow:5,
       * }
       * @example
       * dc.layers.queryLayerRenderMode('layer1',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('图层\"${e.layerName}\"的渲染模式是\"${e.renderMode}\"');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "queryLayerRenderMode",
      value: function queryLayerRenderMode(fn) {
        this.engine.excute(CommandType.Layers_QueryLayerRenderMode, {}, fn);
      }
      /**
       * 修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式
       * @method
       * @param {string} layerName ：  图层名称
       * @param {json}   renderMode ： 图层渲染模式
       * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_UpdateLayerRenderMode,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       * }
       * @example
       * import {RenderModeType} from "./common/DccObjects"
       * import {defaultRenderMode} from "./DccGlobal"
       *
       * const renderMode=defaultRenderMode;
       * renderMode.renderMode=RenderModeType.XRayMode;
       * renderMode.filleColor=[1.0,0.5,0.5,0.8];
       * dc.layers.updateLayerRenderMode('layer1',renderMode,
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('修改图层\"${e.layerName}\"渲染模式成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateLayerRenderMode",
      value: function updateLayerRenderMode(layerName, renderMode, fn) {
        this.engine.excute(CommandType.Layers_UpdateLayerRenderMode, {
          layerName: layerName,
          renderMode: renderMode
        }, fn);
      }
      /**
       * 批量修改场景中图层渲染模式，包括真实模式、X光模式、水晶体模式，可以根据图层类型（底座图层、动态图层）、图层标签进行批量修改
       * @method
       * @param {LayersQueryMode} queryMode ：采用图层查询方式来确认修改图层是否底座图层、动态图层，详细参考：LayersQueryMode
       * @param {Array} labels ：      图层标签数据，通过标签定义修改具备特定标签的图层的渲染模式，当该属性为[]，则标签过滤不起作用，即修改所有图层
       * @param {json} renderMode ：   图层渲染模式
       * @param {function} fn ：       回调函数，返回是否成功和相关信息，返回信息结构如下：
       * {
       *   command:Layers_UpdateLayersRenderMode,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       * }
       * @example
       * import {defaultRenderMode} from "./common/DccObjects"
       *
       * const rm=defaultRenderMode;
       * rm.renderMode=RenderModeType.XRayMode;
       * rm.filleColor=[1.0,0.5,0.5,0.8];
       * dc.layers.updateLayersRenderMode(['building','terrain'],rm,
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('批量修改图层渲染模式成功！');
       *        }
       *     }
       *  );
       **/

    }, {
      key: "updateLayersRenderMode",
      value: function updateLayersRenderMode() {
        var queryMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LayersQueryMode.BaseLayersOnly;
        var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var renderMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          renderMode: RenderModeType.RealMode
        };
        var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        this.engine.excute(CommandType.Layers_UpdateLayerLabels, {
          queryMode: queryMode,
          labels: labels,
          renderMode: renderMode
        }, fn);
      }
      /**
       *修改图层名称
       * @method
       * @param {string} layerName ：图层名称
       * @param {string} newlayerName ：图层新名称
       * @param {function} fn ：回调函数，返回是否成功和图层信息，返回信息结构如下：
       * {
       *   command:Layers_RenameLayer,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       *   newlayerName:'poiLayer',
       * }
       * @example
       * dc.layers.renameLayer('layer1','poiLayer',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('图层\"${e.layerName}\"改名成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "renameLayer",
      value: function renameLayer(layerName, newlayerName, fn) {
        this.engine.excute(CommandType.Layers_RenameLayer, {
          layerName: layerName,
          newlayerName: newlayerName
        }, fn);
      }
      /**
       * 删除场景中的图层
       * @method
       * @param {string} layerName ：要删除的图层的名称
       * @param {function} fn ：回调函数，返回是否成功和删除图层信息，返回信息结构如下：
       * {
       *   command:Layers_RemoveLayer,
       *   result:_SUCCESS,
       *   layerName:'layer1'，
       * }
       **/

    }, {
      key: "removeLayer",
      value: function removeLayer(layerName, fn) {
        if (!this.layers[layerName]) {
          console.error('图层不存在');
          return;
        }

        if (this.engine.map.getLayer(layerName)) {
          this.engine.map.removeLayer(layerName);
        }

        this.layers[layerName].removeLayer && this.layers[layerName].removeLayer();
        delete this.layers[layerName];
        this.engine.excute(CommandType.Layers_RemoveLayer, {
          layerName: layerName
        }, fn);
      }
      /**
       * 在特定相机距离聚焦到指定的图层
       * @method
       * @param {string} layerName ：需要聚焦的图层的名称
       * @param {number} diatanse ： 相机到聚焦中心点的距离,以米为单位
       * @param {function} fn ：     回调函数，返回是否成功，返回信息结构如下：
       * {
       *   command:Layers_Focus,
       *   result:_SUCCESS,
       *   layerName:'layer1',
       * }
       * @example
       * dc.layers.focus(layerName,  //要聚焦的图层名称
       *     1000,
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('聚焦到图层\"${e.layerName}\"成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "focus",
      value: function focus(layerName, distance, fn) {
        this.engine.excute(CommandType.Layers_Focus, {
          layerName: layerName,
          distance: distance
        }, fn);
      }
    }]);

    return MapLayers;
  }(DccLayers);

  // 地图 json 属性字段
  var _fieldObj = {
    background: {
      'background-color': {
        label: '填充颜色',
        type: 'color'
      },
      'background-pattern': {
        label: '填充图片',
        type: 'image'
      }
    },
    'fill-extrusion': {
      'fill-extrusion-color': {
        label: '填充（挤压）颜色',
        type: 'color'
      },
      'fill-extrusion-opacity': {
        label: '填充（挤压）透明度',
        type: 'slide'
      },
      'fill-extrusion-pattern': {
        label: '填充（挤压）图片',
        type: 'image'
      }
    },
    fill: {
      'fill-color': {
        label: '填充颜色',
        type: 'color'
      },
      'fill-outline-color': {
        label: '外边线颜色',
        type: 'color'
      },
      'fill-opacity': {
        label: '填充透明度',
        type: 'slide'
      },
      'fill-pattern': {
        label: '填充图片',
        type: 'image'
      }
    },
    line: {
      'line-color': {
        label: '填充颜色',
        type: 'color'
      },
      'line-pattern': {
        label: '填充图片',
        type: 'image'
      }
    }
  }; // 地图 json 属性名

  var fieldName = [].concat(_toConsumableArray(Object.keys(_fieldObj['fill-extrusion'])), _toConsumableArray(Object.keys(_fieldObj['fill'])), _toConsumableArray(Object.keys(_fieldObj['background'])), _toConsumableArray(Object.keys(_fieldObj['line']))); // 地图 json 属性对象

  _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, _fieldObj['background']), _fieldObj['fill-extrusion']), _fieldObj['fill']), _fieldObj['line']); // 根据图层类型获取地图 json 属性名


  var otherField = ['fill-pattern', 'fill-extrusion-pattern'];
  "*(".concat([].concat(_toConsumableArray(fieldName), otherField).join(','), ")");

  var Enum = {
    backgroundLayerId: 'background',
    backgroundIamgelayerId: 'background-img-layer',
    backgroundIamgeSourceId: 'background-img',
    buildingBaseSuffix: '_building-base',
    overlayLayer: ['-overlay', '-mapping', '-iamge'],
    image: 'image',
    cityPoiLayerId: 'poi_city',
    countyPoiLayerId: 'poi_county',
    townPoiLayerId: 'poi_town'
  };
  var setTypeEnum = {
    single: 'single',
    segment: 'segment'
  };

  var getColorA$3 = function getColorA(value) {
    if (typeof value === 'string' && value.includes('rgba')) {
      return parseFloat(value.split(',').pop());
    }

    return (value === null || value === void 0 ? void 0 : value.a) || 1;
  };
  var addDefaultSegment = function addDefaultSegment(props, threeBuilding) {
    toBuildingProps(threeBuilding);
    props.defaultSegment = {
      defaultSegmentEmissive: '#000'
    };

    for (var item in threeBuilding) {
      if (threeBuilding.hasOwnProperty(item) && !item.match(/segment/i)) {
        var key = item.substring(0, 1).toUpperCase() + item.substring(1);
        props.defaultSegment['defaultSegment' + key] = threeBuilding[item];
        props.defaultSegment.defaultSegmentImage = threeBuilding.mapUrl || null;
      }
    }
  };
  var toBuildingSegment = function toBuildingSegment(segment) {
    if (!Array.isArray(segment)) {
      return [];
    }

    return segment.map(function (item) {
      if (item.hasOwnProperty('color') && !item.hasOwnProperty('opacity')) {
        item.opacity = getColorA$3(item.color);
      }

      var segmentIsTop = item.segmentIsTop,
          segmentIsBottom = item.segmentIsBottom,
          segmentIsDynamic = item.segmentIsDynamic,
          segmentIsRoofColor = item.segmentIsRoofColor;

      if (item.hasOwnProperty('segmentIsTop') && typeof segmentIsTop === 'boolean') {
        item.segmentIsTop = segmentIsTop ? 2 : 1;
      }

      if (item.hasOwnProperty('segmentIsBottom') && typeof segmentIsBottom === 'boolean') {
        item.segmentIsBottom = segmentIsBottom ? 2 : 1;
      }

      if (item.hasOwnProperty('segmentIsDynamic') && typeof segmentIsDynamic === 'boolean') {
        item.segmentIsDynamic = segmentIsDynamic ? 2 : 1;
      }

      if (item.hasOwnProperty('segmentIsRoofColor') && typeof segmentIsRoofColor === 'boolean') {
        item.segmentIsRoofColor = segmentIsRoofColor ? 2 : 1;
      }

      return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
        weight: [item.start, item.end],
        segmentEmissive: '#000000' //自发光颜色

      });
    });
  };
  var toBuildingProps = function toBuildingProps(props) {
    if (props.hasOwnProperty('setType') && !props.hasOwnProperty('enableSegment')) {
      props.enableSegment = props.setType === setTypeEnum.segment ? 2 : 1;
    }

    if (props.hasOwnProperty('color') && !props.hasOwnProperty('opacity')) {
      props.opacity = getColorA$3(props.color);
    }

    var isTop = props.isTop,
        isBottom = props.isBottom,
        isDynamic = props.isDynamic,
        isRoofColor = props.isRoofColor;

    if (props.hasOwnProperty('isTop') && typeof isTop === 'boolean') {
      props.isTop = isTop ? 2 : 1;
    }

    if (props.hasOwnProperty('isBottom') && typeof isBottom === 'boolean') {
      props.isBottom = isBottom ? 2 : 1;
    }

    if (props.hasOwnProperty('isDynamic') && typeof isDynamic === 'boolean') {
      props.isDynamic = isDynamic ? 2 : 1;
    }

    if (props.hasOwnProperty('isRoofColor') && typeof isRoofColor === 'boolean') {
      props.isRoofColor = isRoofColor ? 2 : 1;
    } // 临时处理，没有纹理给默认图片


    if (!props.mapUrl) {
      props.mapUrl = './textures/buildings/get.png';
    }
  };
  /**
   * 添加和初始化的时候使用的转换
   * @param {*} props
   */

  var threeBuildingProps = function threeBuildingProps(props) {
    // 1.兼容旧版本的属性
    // 2.转换为three的属性
    addDefaultSegment(props, props);
    props.segment = toBuildingSegment(props.segment);
  };

  var _excluded$6 = ["beforeId", "extended", "layer"];

  var THREE = layers3D__namespace.THREE;
  var backgroundLayerId$1 = Enum.backgroundLayerId;

  var base64Img = require('base64-img');

  var map_fire_postNoBloomRender = '';
  var map_fire_post2DRender = '';
  var map_fire_postBloomRender = '';
  var map_fire_postIndependentLightRender = '';

  var toThreeColor$1 = function toThreeColor(props) {
    if (props.color) {
      return _objectSpread2$1(_objectSpread2$1({}, props), {}, {
        color: new THREE.Color(props.color)
      });
    }

    return props;
  }; // 贴图


  var mapping = function mapping(map, layerObj, image, beforeId) {
    var addLayer = function addLayer(src) {
      var imageObj = new Image();
      imageObj.src = src;

      imageObj.onload = function () {
        var width = imageObj.width;
        var height = imageObj.height;
        var img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.width = width;
        img.height = height;

        if (map.hasImage(layerObj.id)) {
          map.removeImage(layerObj.id);
        }

        map.addImage(layerObj.id, img);
        map.addLayer(layerObj, beforeId);
      };
    };

    if (image.includes('base64')) {
      addLayer(image);
    } else {
      base64Img.requestBase64(image, function (err, res, body) {
        addLayer(body);
      });
    }
  }; // 模型
  // const model = (map, layerObj) => {
  //   const t = new Date().getTime();
  //   const id = '3d-model_' + t;
  //   new Model(
  //     map,
  //     '3d-model-layer_' + t,
  //     null,
  //     {
  //       modelUrl: layerObj.url,
  //       modelOrigin: layerObj.origin,
  //       altitude: layerObj.altitude,
  //       light: layerObj.light,
  //     },
  //     layerObj.id || id,
  //   );
  //   return layerObj.id || id;
  // };
  // 模型

  var model = function model(map, layerObj) {
    var t = new Date().getTime();
    var id = layerObj.id || '3d-model_' + t;
    var url = layerObj.url;
    var data = [{
      modelId: id.replace('3d-model_', ''),
      type: 'gltf',
      url: layerObj.url,
      position: [].concat(_toConsumableArray(layerObj.origin), [layerObj.altitude || 0]),
      scaleX: layerObj.scale || 1,
      scaleY: layerObj.scale || 1,
      scaleZ: layerObj.scale || 1,
      rotationX: Math.PI / 2,
      rotationY: layerObj.rotationY || 0,
      rotationZ: layerObj.rotationZ || 0,
      visible: typeof layerObj.visible === 'undefined' ? true : layerObj.visible
    }];

    var addModelLayers = function addModelLayers(data) {
      var customModelLayer = {
        id: id,
        type: 'custom',
        renderingMode: '3d',
        onAdd: function onAdd(map, gl) {
          this.modelObject = new layers3D__namespace.modelLayer(map.DBox, {
            data: data
          }); //模型加载结束后的事件监听

          this.modelObject.addEventListener('modelLoad', function (event) {
            setTimeout(function () {
              window.modelLoadedCallback && window.modelLoadedCallback(event);
            }, 0);
          });
          this.modelObject.__position = [].concat(_toConsumableArray(layerObj.origin), [layerObj.altitude || 0]);
        },
        render: function render(gl, matrix) {
          if (!map.getLayer(map_fire_postIndependentLightRender) || map_fire_postIndependentLightRender === customModelLayer.id) {
            map_fire_postIndependentLightRender = customModelLayer.id;
            map.fire('postIndependentLightRender');
          }

          map.triggerRepaint();
        }
      };
      map.addLayer(customModelLayer);
    };

    if (url.endsWith('.json')) {
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        var models = res === null || res === void 0 ? void 0 : res.models;
        var data = models.map(function (item, index) {
          var info = item === null || item === void 0 ? void 0 : item.info;
          return {
            modelId: id + index,
            type: info.format.toLowerCase(),
            url: info.url,
            position: info.position,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            rotationX: info.rotation[0],
            rotationY: 0,
            rotationZ: 0,
            visible: true
          };
        });
        addModelLayers(data);
      });
    } else {
      addModelLayers(data);
    }

    return id;
  }; // 天空


  var threeSky = function threeSky(map, layerObj) {
    var customSkyLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '2d',
      onAdd: function onAdd() {
        this.skyObject = new layers3D__namespace.backBoxLayer(map.DBox, layerObj);
      },
      render: function render(gl, matrix) {
        if (!map.getLayer(map_fire_post2DRender) || map_fire_post2DRender === customSkyLayer.id) {
          map_fire_post2DRender = customSkyLayer.id;
          map.fire('post2DRender');
        }

        map.triggerRepaint();
      }
    };
    map.addLayer(customSkyLayer, backgroundLayerId$1);
  }; // 动态水


  var threeWater = function threeWater(map, layerObj, beforeId) {
    var customWaterLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function onAdd() {
        this.waterObject = new layers3D__namespace.waterLayer(map.DBox, layerObj);
      },
      render: function render(gl, matrix) {
        if (!map.getLayer(map_fire_postNoBloomRender) || map_fire_postNoBloomRender === customWaterLayer.id) {
          map_fire_postNoBloomRender = customWaterLayer.id;
          map.fire('postNoBloomRender');
        }

        map.triggerRepaint();
      }
    };
    map.addLayer(customWaterLayer, beforeId);
  }; // 上升线条


  var threeRisingLine = function threeRisingLine(map, layerObj, beforeId) {
    var bounds = map.data.bounds;

    if (!bounds) {
      var msg = 'bounds不存在,上升线无法显示';
      console.error(msg);
      alert(msg);
      return;
    } // 放到楼块后面


    var building = map.getStyle().layers.find(function (item) {
      return item.id.includes('building_R');
    });
    var viewRange = {
      left: bounds[0],
      top: bounds[1],
      right: bounds[2],
      bottom: bounds[3]
    };
    var risingLineLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function onAdd(map, gl) {
        this.risingLineObject = new layers3D__namespace.risingLineLayer(map.DBox, _objectSpread2$1(_objectSpread2$1({}, layerObj), {}, {
          viewRange: viewRange
        }), null);
      },
      render: function render(gl, matrix) {
        if (!map.getLayer(map_fire_postNoBloomRender) || map_fire_postNoBloomRender === risingLineLayer.id) {
          map_fire_postNoBloomRender = risingLineLayer.id;
          map.fire('postNoBloomRender');
        }

        map.triggerRepaint();
      }
    };
    map.addLayer(risingLineLayer, beforeId || building.id);
  }; // 楼块


  var threeBuilding = function threeBuilding(map, layerObj, beforeId) {
    threeBuildingProps(layerObj);
    var buildingLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      setType: layerObj.setType,
      onAdd: function onAdd(map, gl) {
        this.buildingObject = new layers3D__namespace.buildLayer(map.DBox, _objectSpread2$1({}, layerObj), null, '', '');
      },
      render: function render(gl, matrix) {
        if (!map.getLayer(map_fire_postBloomRender) || map_fire_postBloomRender === buildingLayer.id) {
          map_fire_postBloomRender = buildingLayer.id;
          map.fire('postBloomRender');
        }

        map.triggerRepaint();
      }
    };
    map.addLayer(buildingLayer, beforeId);
  }; // 流动线条


  var threeFlowVecLine = function threeFlowVecLine(map, layerObj, beforeId) {
    // 放到楼块后面(临时放到楼块后面，如果按照mapbox的层级关系放目前有bug)
    var building = map.getStyle().layers.find(function (item) {
      return item.id.includes('building_R');
    });
    var flowVecLineLayer = {
      id: layerObj.id,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function onAdd(map, gl) {
        this.flowVecLineObject = new layers3D__namespace.flowVecLineLayer(map.DBox, _objectSpread2$1(_objectSpread2$1({}, toThreeColor$1(layerObj)), {}, {
          lineWidth: layerObj.lineWidth / 100000
        }));
      },
      render: function render(gl, matrix) {
        if (!map.getLayer(map_fire_postBloomRender) || map_fire_postBloomRender === flowVecLineLayer.id) {
          map_fire_postBloomRender = flowVecLineLayer.id;
          map.fire('postBloomRender');
        }

        map.triggerRepaint();
      }
    };
    map.addLayer(flowVecLineLayer, building.id);
  }; // 标记模型


  var markerModel = function markerModel(map, layerObj) {
    var t = new Date().getTime();
    var id = '3d-model_' + t;
    var layer = new mapbox.MapboxLayer({
      id: layerObj.id || id,
      deck: map.deck
    });
    layer.deckProps = _objectSpread2$1({}, layerObj);

    layer.change = function (p) {
      var t = new Date().getTime();

      var props = _objectSpread2$1(_objectSpread2$1({}, layer.deckProps), p);

      layer.deckProps = _objectSpread2$1({}, props);
      map.deckLayers = map.deckLayers.filter(function (item) {
        return item.id !== props.id;
      });
      map.deckLayers = [].concat(_toConsumableArray(map.deckLayers), [new meshLayers.ScenegraphLayer({
        id: props.id,
        data: props.origin,
        getOrientation: [0, props.yaw || 0, 90],
        getPosition: function getPosition(d) {
          return d;
        },
        scenegraph: layerObj.url + '?' + t,
        sizeScale: props.scale || 1,
        pickable: true,
        onClick: function onClick(e) {
          var fn = map.layerClick;
          fn && fn(e);
        },
        _lighting: 'pbr'
      })]);
      map.deck.setProps({
        layers: _toConsumableArray(map.deckLayers)
      });
    };

    map.addLayer(layer);
    map.deckLayers = map.deckLayers || [];
    map.deckLayers = [].concat(_toConsumableArray(map.deckLayers), [new meshLayers.ScenegraphLayer({
      id: layerObj.id || id,
      data: layerObj.origin,
      getOrientation: [0, layerObj.yaw, 90],
      getPosition: function getPosition(d) {
        return d;
      },
      scenegraph: layerObj.url + '?' + t,
      sizeScale: layerObj.scale || 1,
      pickable: true,
      onClick: function onClick(e) {
        var fn = map.layerClick;
        fn && fn(e);
      },
      _lighting: 'pbr'
    })]);
    map.deck.setProps({
      layers: _toConsumableArray(map.deckLayers)
    });
    return layerObj.id || id;
  }; // 添加扩展图层


  var addExtendedLayer = function addExtendedLayer(map, layerObj) {
    var beforeId = layerObj.beforeId,
        extended = layerObj.extended,
        layer = layerObj.layer,
        _layerObj = _objectWithoutProperties(layerObj, _excluded$6);

    if (map.getLayer(layerObj.id)) {
      map.removeLayer(layerObj.id);
    }

    if (extended === 'mapbox') {
      map.addLayer(_layerObj, beforeId);
    }

    if (extended === 'deckgl') {
      // 自由标记模型
      if (layer === 'marker-model') {
        return markerModel(map, _layerObj);
      }
    }

    if (extended === 'three') {
      // 天空
      if (layer === 'sky') {
        threeSky(map, _layerObj);
        return;
      } // 动态水


      if (layer === 'water') {
        threeWater(map, _layerObj, beforeId);
        return;
      } // 上升线条


      if (layer === 'risingLine') {
        threeRisingLine(map, _layerObj, beforeId);
        return;
      } // 流动线条


      if (layer === 'flowVecLine') {
        threeFlowVecLine(map, _layerObj);
        return;
      } // 模型


      if (layer === 'model') {
        return model(map, _layerObj);
      } // 楼块


      if (layer === 'building') {
        threeBuilding(map, _layerObj, beforeId);
        return;
      }
    }

    return layerObj;
  };

  var mappingLayer = function mappingLayer(layer, fieldName, value, beforeId) {
    var _objectSpread2;

    var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    return _objectSpread2$1(_objectSpread2$1({}, layer), {}, {
      id: layer.id + '-mapping' + i,
      paint: _objectSpread2$1(_objectSpread2$1({}, layer.paint), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(layer.type, "-opacity"), 1), _defineProperty(_objectSpread2, fieldName, layer.id + '-mapping' + i), _objectSpread2)),
      image: value,
      beforeId: beforeId
    });
  };

  var filterMappingLayer = function filterMappingLayer(map, id) {
    var layers = map.getStyle().layers;
    layers.forEach(function (item, i) {
      if (item.id.includes(id + '-mapping')) {
        map.removeLayer(item.id);
      }
    });
  };

  var addMappingLayer = function addMappingLayer(map, jsonObj, id, fieldName, value, _ui) {
    // 过滤叠加图层
    var _filterOverlayLayer = filterOverlayLayer(map, jsonObj, id),
        _filterOverlayLayer2 = _slicedToArray(_filterOverlayLayer, 2),
        layer = _filterOverlayLayer2[0],
        index = _filterOverlayLayer2[1]; // 过滤掉贴图图层


    filterMappingLayer(map, id);

    if (!layer.overlay) {
      layer.overlay = [];
    } // 楼块需要处理楼顶的情况
    // 如果图层有楼顶，把楼顶id作为beforeId


    var beforeId = layer.roof ? layer.roof.id : jsonObj.layers[index + 1].id;
    var mapping$1 = mappingLayer(layer, fieldName, value, beforeId); // 从新添加贴图图层（单一贴图当做叠加图层方式处理）

    layer.overlay = [{
      fieldName: fieldName,
      fieldValue: value
    }];
    layer._ui = _objectSpread2$1(_objectSpread2$1({}, layer._ui), _ui);
    mapping(map, mapping$1, value, beforeId);
  };

  var getColorA$2 = function getColorA(type, value) {
    if (type.includes('-extrusion')) {
      if (typeof value === 'string' && value.includes('rgba')) {
        return parseFloat(value.split(',').pop());
      }

      return (value === null || value === void 0 ? void 0 : value.a) || 1;
    }

    return 1;
  };

  var transValue$1 = function transValue(fieldName, value) {
    if (Object.prototype.toString.call(value) === '[object Object]' && fieldName.includes('-color')) {
      var r = value.r,
          g = value.g,
          b = value.b,
          a = value.a;
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    }

    return value;
  };

  var filterOverlayLayer = function filterOverlayLayer(map, jsonObj, id) {
    var layer, index;
    jsonObj.layers = jsonObj.layers.map(function (item, i) {
      var _item$roof;

      if (item.id === id) {
        layer = _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          overlay: []
        });
        index = i;
        return layer;
      } // 处理楼顶


      if (((_item$roof = item.roof) === null || _item$roof === void 0 ? void 0 : _item$roof.id) === id) {
        layer = _objectSpread2$1(_objectSpread2$1({}, item.roof), {}, {
          overlay: []
        });
        index = i;
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          roof: layer
        });
      }

      return item;
    });
    var layers = map.getStyle().layers;
    layers.forEach(function (item, i) {
      if (item.id.includes(id + '-overlay')) {
        map.removeLayer(item.id);
      }
    });
    return [layer, index];
  };

  var addOverlayLayer = function addOverlayLayer(map, jsonObj, id, props, bounds, _ui) {
    // 过滤掉颜色叠加图层
    var _filterOverlayLayer = filterOverlayLayer(map, jsonObj, id),
        _filterOverlayLayer2 = _slicedToArray(_filterOverlayLayer, 2),
        layer = _filterOverlayLayer2[0],
        index = _filterOverlayLayer2[1];

    filterMappingLayer(map, id); // 楼块需要处理楼顶的情况
    // 如果图层有楼顶，把楼顶id作为beforeId

    var beforeId = layer.roof ? layer.roof.id : jsonObj.layers[index + 1].id;
    props.forEach(function (item, i) {
      var fieldName = item.fieldName,
          fieldValue = item.fieldValue; // 图片叠加

      if (fieldName.includes('-pattern')) {
        // 贴图叠加
        var mapping$1 = mappingLayer(layer, fieldName, fieldValue, beforeId, i);
        mapping(map, mapping$1, fieldValue, beforeId);
      } else {
        var _objectSpread2;

        // 颜色叠加
        var colorLayer = _objectSpread2$1(_objectSpread2$1({}, layer), {}, {
          id: layer.id + '-overlay' + i,
          paint: _objectSpread2$1(_objectSpread2$1({}, layer.paint), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(layer.type, "-opacity"), getColorA$2(layer.type, fieldValue)), _defineProperty(_objectSpread2, fieldName, transValue$1(fieldName, fieldValue)), _objectSpread2))
        }); // 添加图层


        map.addLayer(colorLayer, beforeId);
      }
    }); // 从新添加贴图图层（单一贴图当做叠加图层方式处理）

    layer.overlay = props;
    layer._ui = _objectSpread2$1(_objectSpread2$1({}, layer._ui), _ui);
  };

  var transValue = function transValue(fieldName, value) {
    if (Object.prototype.toString.call(value) === '[object Object]' && fieldName.includes('-color')) {
      var r = value.r,
          g = value.g,
          b = value.b,
          a = value.a;
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    }

    return value;
  };

  var filterSegmentLayer = function filterSegmentLayer(map, jsonObj, id) {
    var layer, index;
    jsonObj.layers = jsonObj.layers.map(function (item, i) {
      var _item$roof;

      if (item.id === id) {
        layer = _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          segment: []
        });
        index = i;
        return layer;
      } // 处理楼顶


      if (((_item$roof = item.roof) === null || _item$roof === void 0 ? void 0 : _item$roof.id) === id) {
        layer = _objectSpread2$1(_objectSpread2$1({}, item.roof), {}, {
          segment: []
        });
        index = i;
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          roof: layer
        });
      }

      return item;
    });
    var layers = map.getStyle().layers;
    layers.forEach(function (item, i) {
      if (item.id.includes(id + '-segment')) {
        map.removeLayer(item.id);
      }
    });
    return [layer, index];
  };

  var getColorA$1 = function getColorA(type, value) {
    if (type.includes('-extrusion')) {
      if (typeof value === 'string' && value.includes('rgba')) {
        return parseFloat(value.split(',').pop());
      }

      return (value === null || value === void 0 ? void 0 : value.a) || 1;
    }

    return 1;
  };

  var filter$3 = function filter(type, weight, item) {
    if (item.end) {
      return ['all', ['>=', ['to-number', ['get', weight]], Number(item.start)], ['<=', ['to-number', ['get', weight]], Number(item.end)]];
    }

    if (isNaN(Number(item.start))) {
      return [type, ['get', weight], item.start];
    }

    return [type, ['to-number', ['get', weight]], Number(item.start)];
  };

  var segmentLayer = function segmentLayer(map, jsonObj, id, props, weight, segmentType, _ui) {
    var _filterSegmentLayer = filterSegmentLayer(map, jsonObj, id),
        _filterSegmentLayer2 = _slicedToArray(_filterSegmentLayer, 2),
        layer = _filterSegmentLayer2[0],
        index = _filterSegmentLayer2[1]; // 楼块需要处理楼顶的情况
    // 如果图层有楼顶，把楼顶id作为beforeId


    var beforeId = layer.roof ? layer.roof.id : jsonObj.layers[index + 1].id;
    props.forEach(function (item, i) {
      item.value.forEach(function (value, ii) {
        var fieldName = value.fieldName,
            fieldValue = value.fieldValue; // 颜色叠加

        if (fieldName.includes('-color')) {
          var _objectSpread2;

          var colorLayer = _objectSpread2$1(_objectSpread2$1({}, layer), {}, {
            id: layer.id + '-segment-overlay' + i + ii,
            paint: _objectSpread2$1(_objectSpread2$1({}, layer.paint), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, fieldName, transValue(fieldName, fieldValue)), _defineProperty(_objectSpread2, "".concat(layer.type, "-opacity"), getColorA$1(layer.type, fieldValue)), _objectSpread2)),
            filter: filter$3(segmentType, weight, item)
          });

          map.addLayer(colorLayer, beforeId);
        } // 图片叠加


        if (fieldName.includes('-pattern')) {
          var _objectSpread3;

          var mapping$1 = _objectSpread2$1(_objectSpread2$1({}, layer), {}, {
            id: layer.id + '-segment-mapping' + i + ii,
            paint: _objectSpread2$1(_objectSpread2$1({}, layer.paint), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "".concat(layer.type, "-opacity"), 1), _defineProperty(_objectSpread3, fieldName, layer.id + '-segment-mapping' + i + ii), _objectSpread3)),
            beforeId: beforeId,
            extended: 'mapbox',
            image: fieldValue,
            filter: filter$3(segmentType, weight, item)
          });

          mapping(map, mapping$1, fieldValue, beforeId);
        }
      });
    });
    layer.segment = props;
    layer.weight = weight;
    layer.segmentType = segmentType;
    layer._ui = _objectSpread2$1(_objectSpread2$1({}, layer._ui), _ui);
  };

  var changeLayer = function changeLayer(map, jsonObj, id, paintItem, _ui, type) {
    if (Object.keys(paintItem).join(' ').includes('-color')) {
      // 删除贴图图层
      filterMappingLayer(map, id);
    } // 过滤掉叠加图层


    filterOverlayLayer(map, jsonObj, id); // 过滤掉分段图层

    filterSegmentLayer(map, jsonObj, id);
    Object.keys(paintItem).forEach(function (key) {
      if (type === 'layout') {
        map.setLayoutProperty(id, key, paintItem[key]);
      } else {
        map.setPaintProperty(id, key, paintItem[key]);
      }
    });
    jsonObj.layers = jsonObj.layers.map(function (item) {
      var _item$roof;

      if (item.id === id) {
        if (type === 'layout') {
          return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
            layout: _objectSpread2$1(_objectSpread2$1({}, item.layout), paintItem),
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          });
        } else {
          return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
            paint: _objectSpread2$1(_objectSpread2$1({}, item.paint), paintItem),
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          });
        }
      } // 处理楼顶


      if (((_item$roof = item.roof) === null || _item$roof === void 0 ? void 0 : _item$roof.id) === id && id.includes('building_R')) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          roof: _objectSpread2$1(_objectSpread2$1({}, item.roof), {}, {
            paint: _objectSpread2$1(_objectSpread2$1({}, item.roof.paint), paintItem),
            _ui: _objectSpread2$1(_objectSpread2$1({}, item.roof._ui), _ui)
          })
        });
      }

      return item;
    });
  };

  var getColor = function getColor(value) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
      var r = value.r,
          g = value.g,
          b = value.b,
          a = value.a;
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    }

    return value;
  };

  var getColorA = function getColorA(value) {
    if (typeof value === 'string' && value.includes('rgba')) {
      return parseFloat(value.split(',').pop());
    }

    return (value === null || value === void 0 ? void 0 : value.a) || 1;
  };

  var paintFn = {
    'background-color': function backgroundColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'background-color': getColor(value)
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-color': function fillExtrusionColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-opacity': getColorA(value),
        'fill-extrusion-color': getColor(value)
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-opacity': function fillExtrusionOpacity(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-opacity': value
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-base': function fillExtrusionBase(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-base': value
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-extrusion-height': function fillExtrusionHeight(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-extrusion-height': value
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-color': function fillColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-color': getColor(value)
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-outline-color': function fillOutlineColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-outline-color': getColor(value)
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'fill-opacity': function fillOpacity(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'fill-opacity': value
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'line-color': function lineColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'line-color': getColor(value)
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    },
    'text-size': function textSize(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'text-size': value
      };
      changeLayer(map, jsonObj, id, paintItem, _ui, 'layout');
    },
    'text-color': function textColor(map, jsonObj, id, value, _ui) {
      var paintItem = {
        'text-color': getColor(value)
      };
      changeLayer(map, jsonObj, id, paintItem, _ui);
    }
  };

  var modelLayer = function modelLayer(map, jsonObj, props) {
    var url = props.url,
        origin = props.origin,
        altitude = props.altitude,
        scale = props.scale,
        visible = props.visible,
        rotationY = props.rotationY,
        id = props.id,
        del = props.del,
        _ui = props._ui;
    var layer = map.getLayer(id); // 删除模型

    if (del) {
      filterModelLayer$1(jsonObj, id);

      if (map.getLayer(id)) {
        layer.implementation.modelObject.setProps({
          modelId: id.replace('3d-model_', ''),
          visible: false
        });
        map.removeLayer(id);
      }

      return;
    }

    var m = {
      url: url,
      origin: origin,
      altitude: altitude,
      scale: scale,
      visible: true,
      rotationY: rotationY,
      extended: 'three',
      layer: 'model',
      _ui: _ui
    }; // 修改模型

    if (layer) {
      var layerProps = {};
      var position = layer.implementation.modelObject.__position;

      if (origin) {
        layerProps.position = [].concat(_toConsumableArray(origin), [position[2]]);
        position[0] = origin[0];
        position[1] = origin[1];
      }

      if (typeof altitude !== 'undefined') {
        layerProps.position = [position[0], position[1], altitude];
        position[2] = altitude;
      }

      if (url) {
        layerProps.url = url;
      }

      if (scale) {
        layerProps.scaleX = scale;
        layerProps.scaleY = scale;
        layerProps.scaleZ = scale;
      }

      if (rotationY) {
        layerProps.rotationY = rotationY;
      }

      if (typeof visible === 'boolean') {
        layerProps.visible = visible;
      }

      layer.implementation.modelObject.setProps(_objectSpread2$1({
        modelId: id.replace('3d-model_', '')
      }, layerProps));
      jsonObj.layers = jsonObj.layers.map(function (item) {
        if (item.id === id) {
          return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, item), props), {}, {
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          });
        }

        return item;
      });
    } else {
      // 添加模型
      var _id = addExtendedLayer(map, m);

      jsonObj.layers.push(_objectSpread2$1(_objectSpread2$1({}, m), {}, {
        id: _id
      }));
      return _id;
    }
  };

  var filterModelLayer$1 = function filterModelLayer(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function (item) {
      return item.id !== id;
    });
  };

  var layerID$1 = 'three-sky';

  var skyLayer = function skyLayer(map, jsonObj, props) {
    var data = props.data,
        _props$del = props.del,
        del = _props$del === void 0 ? false : _props$del,
        _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _ui = props._ui; // 删除

    if (del) {
      filter$2(jsonObj);

      if (map.getLayer(layerID$1)) {
        map.removeLayer(layerID$1);
      }

      return;
    }

    var m = {
      id: layerID$1,
      data: data,
      visible: visible,
      extended: 'three',
      layer: 'sky',
      _ui: _ui
    };
    var layer = map.getLayer(layerID$1);

    if (layer) {
      // 修改
      layer.implementation.skyObject.setProps(props);
      jsonObj.layers = jsonObj.layers.map(function (item) {
        if (item.id === layerID$1) {
          return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, item), props), {}, {
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          });
        }

        return item;
      });
    } else {
      // 添加天空
      addExtendedLayer(map, m);
      jsonObj.layers.push(_objectSpread2$1({}, m));
    }
  };

  var filter$2 = function filter(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function (item) {
      return item.layer !== 'sky';
    });
  };

  var _excluded$5 = ["id", "del", "_ui"];
  var suffix$2 = '_three-water';

  var waterLayer = function waterLayer(map, jsonObj, props) {
    var _jsonObj$sources$sour, _jsonObj$sources$wate;

    var id = props.id,
        _props$del = props.del,
        del = _props$del === void 0 ? false : _props$del,
        _ui = props._ui,
        otherProps = _objectWithoutProperties(props, _excluded$5);

    var index = jsonObj.layers.findIndex(function (item) {
      return item.id === id;
    });
    var beforeId = jsonObj.layers[index + 1].id;
    var layerID = id + suffix$2;
    var level = Number(id.split('_').pop());
    var sourceKey = 'water';

    if (!isNaN(level)) {
      sourceKey = 'water_' + level;
    }

    var waterData = ((_jsonObj$sources$sour = jsonObj.sources[sourceKey]) === null || _jsonObj$sources$sour === void 0 ? void 0 : _jsonObj$sources$sour.data) || ((_jsonObj$sources$wate = jsonObj.sources.water) === null || _jsonObj$sources$wate === void 0 ? void 0 : _jsonObj$sources$wate.data);
    debugger; // 初始值

    var m = {
      id: layerID,
      waterType: 1,
      data: waterData,
      visible: true,
      dynamicColor: '#60cddc',
      //动态水颜色
      dynamicOpcity: 1,
      //动态水是反射系数
      dynamicWaveScale: 3.7,
      // 动态波纹扭曲度
      dynamicSize: 1,
      // 动态水纹比例
      dynamicSpeed: 1,
      // 动态水流速度
      dynamicMap: './textures/water/waternormals.jpg',
      // 动态水纹理
      extended: 'three',
      layer: 'water',
      beforeId: beforeId,
      _ui: _ui
    }; // 修改json

    jsonObj.layers = jsonObj.layers.map(function (item) {
      if (id === item.id) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          flowingWater: del ? null : _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, m), item.flowingWater), otherProps), {}, {
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          })
        });
      }

      return item;
    }); // 删除

    if (del) {
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
      }

      return;
    }

    var layer = map.getLayer(layerID);

    if (layer) {
      // 修改
      layer.implementation.waterObject.setProps(props);
    } else {
      if (!waterData) {
        var msg = '水geojson不存在';
        console.error(msg);
        alert(msg);
        return;
      } // 添加


      addExtendedLayer(map, _objectSpread2$1(_objectSpread2$1({}, m), otherProps));
    }
  };

  var filter$1 = function filter() {
    var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var id = arguments.length > 1 ? arguments[1] : undefined;
    return layers.filter(function (item) {
      return item.id !== id;
    });
  };

  var tilesLayer = function tilesLayer(map, jsonObj, _ref) {
    var url = _ref.url,
        id = _ref.id,
        del = _ref.del,
        _ui = _ref._ui;

    if (del) {
      map.removeLayer(id);

      var _layers = filter$1(jsonObj.layers, id);

      jsonObj.layers = _layers;
      return id;
    }

    var t = new Date().getTime(); // 添加数据源

    var sourceId = 'tiles_' + t;
    var source = {
      type: 'raster',
      tiles: [url]
    };
    var layerID = sourceId;
    map.addSource(sourceId, source);
    jsonObj.sources[sourceId] = source; // 添加图层

    var layers = jsonObj.layers;
    var beforeId = layers.find(function (item) {
      return item.id.includes('building_R');
    }).id;
    var layer = {
      id: layerID,
      type: 'raster',
      layout: {
        visibility: 'visible'
      },
      source: sourceId,
      extended: 'mapbox',
      layer: 'tiles',
      beforeId: beforeId,
      _ui: _ui
    };
    map.addLayer(layer, beforeId);
    jsonObj.layers.push(_objectSpread2$1({}, layer));
    return layerID;
  };

  var markerModelLayer = function markerModelLayer(map, jsonObj, props, _ui) {
    var url = props.url,
        origin = props.origin,
        delOrigin = props.delOrigin,
        scale = props.scale,
        light = props.light,
        altitude = props.altitude,
        yaw = props.yaw,
        id = props.id,
        del = props.del,
        group = props.group; // 删除图层

    if (del) {
      filterModelLayer(jsonObj, id);

      if (map.getLayer(id)) {
        map.removeLayer(id);
      }

      return;
    }

    var m = {
      url: url,
      origin: [origin],
      scale: scale || 1,
      light: light,
      altitude: altitude,
      yaw: yaw || 0,
      extended: 'deckgl',
      layer: 'marker-model',
      _ui: _ui
    }; // 修改模型

    var layer = map.getLayer(id);

    if (layer) {
      var implementation = layer.implementation;
      var deckProps = implementation.deckProps;

      var data = _toConsumableArray(deckProps.origin); // 添加模型


      if (Array.isArray(origin)) {
        data.push(origin);
      } // 删除模型


      if (Array.isArray(delOrigin)) {
        data = data.filter(function (item) {
          return delOrigin[0] !== item[0] && delOrigin[1] !== item[1];
        });
      }

      implementation.change(_objectSpread2$1(_objectSpread2$1({}, props), {}, {
        origin: data,
        id: id
      }));
      jsonObj.layers = jsonObj.layers.map(function (item) {
        if (item.id === id) {
          return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, item), props), {}, {
            origin: data,
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          });
        }

        return item;
      });
    } else {
      // 添加模型
      var _id = addExtendedLayer(map, m);

      jsonObj.layers.push(_objectSpread2$1(_objectSpread2$1({}, m), {}, {
        group: group,
        id: _id
      }));
      return _id;
    }
  };

  var filterModelLayer = function filterModelLayer(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function (item) {
      return item.id !== id;
    });
  };

  var layerID = 'three-risingLine';

  var risingLineLayer = function risingLineLayer(map, jsonObj, props) {
    if (!jsonObj.bounds) {
      var msg = 'bounds不存在,上升线无法显示';
      console.error(msg);
      alert(msg);
      return;
    }

    var _props$del = props.del,
        del = _props$del === void 0 ? false : _props$del,
        _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$bounds = props.bounds,
        bounds = _props$bounds === void 0 ? jsonObj.bounds : _props$bounds,
        _props$num = props.num,
        num = _props$num === void 0 ? 30 : _props$num,
        _props$lineWidth = props.lineWidth,
        lineWidth = _props$lineWidth === void 0 ? 2 : _props$lineWidth,
        _ui = props._ui; // 删除

    if (del) {
      filter(jsonObj);

      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
      }

      return;
    } // 添加/修改


    var m = {
      id: layerID,
      bounds: bounds,
      num: num,
      lineWidth: lineWidth,
      visible: visible,
      extended: 'three',
      layer: 'risingLine',
      _ui: _ui
    };
    var layer = map.getLayer(layerID);

    if (layer) {
      // 修改
      layer.implementation.risingLineObject.setProps(props);
      jsonObj.layers = jsonObj.layers.map(function (item) {
        if (item.id === layerID) {
          return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, item), props), {}, {
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          });
        }

        return item;
      });
    } else {
      // 添加
      addExtendedLayer(map, m);
      jsonObj.layers.push(_objectSpread2$1({}, m));
    }
  };

  var filter = function filter(jsonObj, id) {
    jsonObj.layers = jsonObj.layers.filter(function (item) {
      return item.layer !== 'risingLine';
    });
  };

  var _excluded$4 = ["id", "del", "_ui", "layer"];
  var suffix$1 = 'three-building';

  var getVisibility = function getVisibility(props) {
    if (props.del || props.visible === false) {
      return 'visible';
    }

    return 'none';
  };

  var buildingLayer = function buildingLayer(map, jsonObj, props) {
    var _jsonObj$json, _building$overlay$;

    var buildingData = (_jsonObj$json = jsonObj.json) === null || _jsonObj$json === void 0 ? void 0 : _jsonObj$json.building;

    if (!buildingData) {
      var msg = '楼json不存在';
      console.error(msg);
      alert(msg);
      return;
    }

    var id = props.id,
        _props$del = props.del,
        del = _props$del === void 0 ? false : _props$del,
        _ui = props._ui;
        props.layer;
        var otherProps = _objectWithoutProperties(props, _excluded$4);

    var building = jsonObj.layers.find(function (item) {
      return item.id === id;
    });
    var beforeId = id;
    var layerID = id + '_' + suffix$1;
    var image = Array.isArray(building.overlay) ? (_building$overlay$ = building.overlay[0]) === null || _building$overlay$ === void 0 ? void 0 : _building$overlay$.fieldValue : './textures/buildings/get.png'; // 初始值

    var m = {
      id: layerID,
      visible: true,
      isShiny: 1,
      num: 150,
      emissive: '#000000',
      colorOrMap: 1,
      //统一设置，1为颜色，2为纹理，3为颜色纹理混合，默认是1
      segment: [],
      color: building.paint['fill-extrusion-color'],
      mapUrl: image,
      // 纹理
      // modeMapping: 1, 已经废弃 // 1 颜色分段 2 图片分段
      isRoofColor: false,
      // 开启楼顶
      roofColor: '#ff0000',
      // 顶面颜色
      isTop: false,
      // 开启顶光
      topColor: '#fff',
      //顶光颜色
      topFading: 5,
      // 顶光衰减参数
      isBottom: false,
      // 开启底光,1是关闭，2是开启
      bottomColor: '#ff0000',
      // 底光颜色
      bottomFading: 5,
      // 底光衰减参数
      isDynamic: false,
      // 是否开启动态光
      dynamicColor: '#ff00a5',
      // 动态光颜色
      speedLoop: 5,
      // 动态光速度
      data: buildingData,
      extended: 'three',
      layer: 'building',
      beforeId: beforeId,
      setType: setTypeEnum.single,
      // 分段或统一
      _ui: {}
    }; // 修改json

    jsonObj.layers = jsonObj.layers.map(function (item) {
      if (id === item.id) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          // 控制楼原始楼的显隐
          layout: _objectSpread2$1(_objectSpread2$1({}, item.layout), {}, {
            visibility: getVisibility(props)
          }),
          // 控制楼原始楼顶的显隐
          roof: _objectSpread2$1(_objectSpread2$1({}, item.roof), {}, {
            layout: _objectSpread2$1(_objectSpread2$1({}, item.roof.layout), {}, {
              visibility: getVisibility(props)
            })
          }),
          threeBuilding: del ? null : _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, m), item.threeBuilding), otherProps),
          _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
        });
      }

      return item;
    }); // 删除

    if (del) {
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID); // 显示原始楼块与楼顶

        map.getStyle().layers.forEach(function (item) {
          if (item.id.includes(id)) {
            map.setLayoutProperty(item.id, 'visibility', 'visible');
          }
        });
      }

      return;
    }

    var buildingLayer = map.getLayer(layerID);

    if (buildingLayer) {
      var _props$segment;

      // 修改
      toBuildingProps(otherProps); // 添加分段默认值

      if (props.setType === setTypeEnum.segment) {
        var threeBuilding = jsonObj.layers.find(function (item, index) {
          return id === item.id;
        }).threeBuilding;
        addDefaultSegment(otherProps, _objectSpread2$1({}, threeBuilding));
      } // 控制原始楼块与楼顶的显示隐藏


      if (props.hasOwnProperty('visible')) {
        map.getStyle().layers.forEach(function (item) {
          if (item.id.includes(id)) {
            map.setLayoutProperty(item.id, 'visibility', props.visible ? 'none' : 'visible');
          }
        });
      }

      if (((_props$segment = props.segment) === null || _props$segment === void 0 ? void 0 : _props$segment.length) > 0) {
        otherProps.segment = toBuildingSegment(props.segment);
      }

      buildingLayer.implementation.buildingObject.setProps(otherProps);
      return;
    } // 添加


    addExtendedLayer(map, _objectSpread2$1(_objectSpread2$1({}, m), otherProps)); // 添加 three 楼时
    // 隐藏原始楼块与楼顶

    map.getStyle().layers.forEach(function (item) {
      if (item.id.includes(id)) {
        map.setLayoutProperty(item.id, 'visibility', 'none');
      }
    });
  };

  var _excluded$3 = ["id", "del", "_ui"];
  var suffix = 'three-flowVecLineLayer';

  var flowVecLineLayer = function flowVecLineLayer(map, jsonObj, props) {
    var _jsonObj$sources$sour;

    var id = props.id,
        _props$del = props.del,
        del = _props$del === void 0 ? false : _props$del,
        _ui = props._ui,
        otherProps = _objectWithoutProperties(props, _excluded$3);

    var index = jsonObj.layers.findIndex(function (item) {
      return item.id === id;
    });
    var beforeId = jsonObj.layers[index + 1].id;
    var layerID = id + '_' + suffix;
    var level = parseInt(id.split('_').pop());
    var sourceKey = 'road_' + level;
    var flowVecLineData = (_jsonObj$sources$sour = jsonObj.sources[sourceKey]) === null || _jsonObj$sources$sour === void 0 ? void 0 : _jsonObj$sources$sour.data;

    if (!flowVecLineData) {
      var msg = '流动线geojson不存在';
      console.error(msg);
      alert(msg);
      return;
    } // 初始值


    var m = {
      id: layerID,
      data: flowVecLineData,
      visible: true,
      color: '#00f548',
      //颜色
      lineWidth: 1,
      // 线宽
      speed: 1,
      //流动线速度
      traceTime: 50,
      //流动线长度
      height: 0,
      //高度
      bloomId: 0,
      //不发光: 0, 弱发光: 21, 中等发光: 22, 强发光: 23,
      extended: 'three',
      layer: 'flowVecLine',
      beforeId: beforeId,
      _ui: _ui
    }; // 修改json

    jsonObj.layers = jsonObj.layers.map(function (item) {
      if (id === item.id) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          flowingRoad: del ? null : _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, m), item.flowingRoad), otherProps), {}, {
            _ui: _objectSpread2$1(_objectSpread2$1({}, item._ui), _ui)
          })
        });
      }

      return item;
    }); // 删除

    if (del) {
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
      }

      return;
    }

    var layer = map.getLayer(layerID);

    if (layer) {
      // 修改
      layer.implementation.flowVecLineObject.setProps(props);
      return;
    } // 添加


    addExtendedLayer(map, _objectSpread2$1(_objectSpread2$1({}, m), otherProps));
  };

  var layersInfo = {
    background: {
      layer: 'background',
      label: '背景',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    outside_R: {
      layer: 'outside_R',
      label: '市域面',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    poi_city: {
      layer: 'poi_city',
      label: '城市 poi',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    poi_county: {
      layer: 'poi_city',
      label: '区县 poi',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    poi_town: {
      layer: 'poi_town',
      label: '乡镇 poi',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    poi_outside: {
      layer: 'poi_outside',
      label: '市域 poi',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    poi_community: {
      layer: 'poi_community',
      label: '社区 poi',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    poi_hospital: {
      layer: 'poi_hospital',
      label: '医院 poi',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    poi_school: {
      layer: 'poi_school',
      label: '学校 poi',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    boundary_R: {
      layer: 'boundary_R',
      label: '界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    boundary_province_R: {
      layer: 'boundary_province_R',
      label: '省界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    boundary_city_R: {
      layer: 'boundary_city_R',
      label: '市界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    boundary_county_R: {
      layer: 'boundary_county_R',
      label: '区县界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    boundary_town_R: {
      layer: 'boundary_town_R',
      label: '乡镇界面',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      _ui: {}
    },
    boundary_L: {
      layer: 'boundary_L',
      label: '界线',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    boundary_province_L: {
      layer: 'boundary_province_L',
      label: '省界线',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    boundary_city_L: {
      layer: 'boundary_city_L',
      label: '市界线',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    boundary_county_L: {
      layer: 'boundary_county_L',
      label: '区县界线',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    boundary_town_L: {
      layer: 'boundary_town_L',
      label: '乡镇界线',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    ocean_R: {
      layer: 'ocean_R',
      label: '海洋',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    water_R: {
      layer: 'water_R',
      label: '水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      flowingWater: {},
      overlay: [],
      segment: [],
      _ui: {}
    },
    water_R_1: {
      layer: 'water_R_1',
      label: '一级水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      flowingWater: {},
      overlay: [],
      segment: [],
      _ui: {}
    },
    water_R_2: {
      layer: 'water_R_2',
      label: '二级水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    water_R_3: {
      layer: 'water_R_3',
      label: '三级水系',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    greenland_R: {
      layer: 'greenland_R',
      label: '绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    greenland_R_1: {
      layer: 'greenland_R_1',
      label: '一级绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    greenland_R_2: {
      layer: 'greenland_R_2',
      label: '二级绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    greenland_R_3: {
      layer: 'greenland_R_3',
      label: '三级绿地',
      id: '',
      visibility: 'visible',
      'fill-color': '',
      'fill-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    road_L_1: {
      layer: 'road_L_1',
      label: '一级道路',
      id: '',
      visibility: 'visible',
      'line-color': 'rgba(14, 41, 90, 1)',
      'line-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    labelline_1: {
      layer: 'labelline_1',
      label: '一级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    // labelline_L_1 兼容以前的命名错误，正确的应该是labelline_1
    labelline_L_1: {
      layer: 'labelline_L_1',
      label: '一级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    road_L_2: {
      layer: 'road_L_2',
      label: '二级道路',
      id: '',
      visibility: 'visible',
      'line-color': 'rgba(14, 41, 90, 1)',
      'line-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    labelline_2: {
      layer: 'labelline_2',
      label: '二级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    road_L_3: {
      layer: 'road_L_3',
      label: '三级道路',
      id: '',
      visibility: 'visible',
      'line-color': 'rgba(14, 41, 90, 1)',
      'line-pattern': '',
      overlay: [],
      segment: [],
      _ui: {}
    },
    labelline_3: {
      layer: 'labelline_3',
      label: '三级道路标签',
      id: '',
      visibility: 'visible',
      _ui: {}
    },
    building_R: {
      layer: 'building_R',
      label: '建筑物',
      id: '',
      visibility: 'visible',
      'fill-extrusion-color': '',
      'fill-extrusion-pattern': '',
      roof: {
        id: ''
      },
      overlay: [],
      segment: [],
      _ui: {}
    },
    sky: {
      layer: 'sky',
      id: '',
      label: '天空',
      urls: [],
      visible: true,
      _ui: {},
      extended: 'three'
    },
    risingLine: {
      layer: 'risingLine',
      id: '',
      label: '上升线条',
      bounds: [],
      visible: true,
      _ui: {},
      extended: 'three'
    },
    model: {
      layer: 'model',
      id: '',
      label: '模型',
      url: '',
      origin: [],
      _ui: {},
      extended: 'mapbox'
    },
    'marker-model': {
      layer: 'marker-model',
      id: '',
      label: '自由标记',
      url: '',
      origin: [],
      scale: 1,
      _ui: {},
      extended: 'deckgl'
    },
    tiles: {
      layer: 'tiles',
      id: '',
      label: '影像',
      url: '',
      _ui: {},
      extended: 'mapbox'
    },
    image: {
      layer: 'image',
      id: '',
      label: '影像',
      type: 'raster',
      source: 'image',
      layout: {
        visibility: 'visible'
      }
    }
  };

  var _excluded$2 = ["layout", "paint", "roof"],
      _excluded2$1 = ["layout", "paint"];
  var backgroundLayerId = Enum.backgroundLayerId,
      image = Enum.image,
      cityPoiLayerId = Enum.cityPoiLayerId,
      countyPoiLayerId = Enum.countyPoiLayerId,
      townPoiLayerId = Enum.townPoiLayerId;
  /**
   * 检查格式
   * @param {*} jsonObj
   * @returns
   */

  var checkFormat = function checkFormat(jsonObj) {
    var name = jsonObj.name;
    var city = name === null || name === void 0 ? void 0 : name.split('_')[0];

    if (!city) {
      var msg = 'json 格式不正确，无法获取当前城市';
      console.error(msg);
      alert(msg);
      return false;
    }

    return city;
  };
  /**
   * 添加 layer, label 属性, 平铺 layout paint
   * @param {*} layer
   * @param {*} label
   * @returns
   */


  var tansformLayers = function tansformLayers(layers, city) {
    return layers.map(function (item) {
      var layout = item.layout,
          paint = item.paint,
          roof = item.roof,
          other = _objectWithoutProperties(item, _excluded$2); // 添加 layer, label 属性


      var zoom, layer, label;

      if (!other.extended) {
        var layerID = other.id.replace(city + '_', '');
        layer = layerID.split('-')[0];
        zoom = layerID.split('-')[1];
      } else {
        layer = other.layer;
      }

      if (zoom) {
        label = layersInfo[layer].label; //+ '-' + zoom || ''; 暂时去掉
      } else {
        label = layersInfo[layer].label;
      }

      var layerInfo = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, other), layout), paint), {}, {
        layer: layer,
        label: label
      });

      var layerOtherInfo = {
        overlay: [],
        segment: [],
        _ui: {}
      }; // 处理水

      if (layer.includes('water_R')) {
        return _objectSpread2$1(_objectSpread2$1({
          flowingWater: null
        }, layerInfo), layerOtherInfo);
      } // 处理楼顶


      if (roof) {
        var _layout = roof.layout,
            _paint = roof.paint,
            _other = _objectWithoutProperties(roof, _excluded2$1);

        return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, layerOtherInfo), layerInfo), {}, {
          roof: _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, layerOtherInfo), _other), _layout), _paint)
        });
      } // 处理非扩展图层


      if (!other.extended) {
        return _objectSpread2$1(_objectSpread2$1({}, layerOtherInfo), layerInfo);
      }

      return layerInfo;
    });
  };
  /**
   * 过滤掉扩展图层
   * @param {*} jsonObj
   * @returns
   */


  var filterExtendedLayers = function filterExtendedLayers(jsonObj) {
    var layers = jsonObj.layers.filter(function (layer) {
      return !layer.extended;
    });
    return _objectSpread2$1(_objectSpread2$1({}, jsonObj), {}, {
      layers: layers
    });
  };
  /**
   * 解析json
   * @param {*} jsonObj
   * @returns
   */


  var parseJson = function parseJson(jsonObj) {
    var city = checkFormat(jsonObj);

    if (!city) {
      return null;
    }

    var layers = jsonObj.layers;
    layers = layers.filter(function (layer) {
      var layerKeys = Object.keys(layersInfo);
      var isLayer = layerKeys.some(function (key) {
        return layer.id.includes(city + '_' + key);
      });
      return isLayer || layer.id === backgroundLayerId || layer.id === image || layer.id === cityPoiLayerId || layer.id === countyPoiLayerId || layer.id === townPoiLayerId || layer.extended;
    });
    return tansformLayers(layers, city);
  };

  var _excluded$1 = ["origin", "altitude"],
      _excluded2 = ["origin", "altitude"],
      _excluded3 = ["origin", "altitude"];

  var toThreeColor = function toThreeColor(props) {
    if (props !== null && props !== void 0 && props.color) {
      return _objectSpread2$1(_objectSpread2$1({}, props), {}, {
        color: new layers3D.THREE.Color(props.color)
      });
    }

    return props;
  };
  /**
   * 环境光
   * @param {*} light
   * @param {*} props { color intensity }
   */


  var setAmbientLightProps = function setAmbientLightProps(DBox, light, props) {
    if (props.host === 'model') {
      var _light$model;

      light.model = _objectSpread2$1(_objectSpread2$1({}, light.model), {}, {
        ambientLight: _objectSpread2$1(_objectSpread2$1({}, (_light$model = light.model) === null || _light$model === void 0 ? void 0 : _light$model.ambientLight), props)
      });
      DBox.lightSetting.setAmbientLightProps(toThreeColor(light.model.ambientLight), 'model');
    } else {
      light.ambientLight = _objectSpread2$1(_objectSpread2$1({}, light.ambientLight), props);
      DBox.lightSetting.setAmbientLightProps(toThreeColor(light.ambientLight), 'scene');
    }
  };
  /**
   * 方向光
   * @param {*} light
   * @param {*} props { color intensity }
   */


  var setDirectionalLightProps = function setDirectionalLightProps(DBox, light, props) {
    if (props.host === 'model') {
      var _light$model2;

      light.model = _objectSpread2$1(_objectSpread2$1({}, light.model), {}, {
        directionalLight: _objectSpread2$1(_objectSpread2$1({}, (_light$model2 = light.model) === null || _light$model2 === void 0 ? void 0 : _light$model2.directionalLight), props)
      });
      DBox.lightSetting.setDirectionalLightProps(toThreeColor(light.model.directionalLight), 'model');
    } else {
      light.directionalLight = _objectSpread2$1(_objectSpread2$1({}, light.directionalLight), props);
      DBox.lightSetting.setDirectionalLightProps(toThreeColor(light.directionalLight), 'scene');
    }
  };
  /**
   * 点光源
   */


  var pointLigh = function pointLigh(DBox, light, props, del) {
    // 删除
    if (del) {
      var _point2;

      var _point;

      light.pointLigh = light.pointLigh.filter(function (item) {
        if (item.id === props.id) {
          _point = item;
          return false;
        }

        return true;
      });
      DBox.lightSetting.removePointLight(props.id, ((_point2 = _point) === null || _point2 === void 0 ? void 0 : _point2.host) || 'scene');
      return;
    } // 修改


    if (props.id) {
      var preProps;
      light.pointLigh = light.pointLigh.map(function (item, index) {
        if (item.id === props.id) {
          preProps = item;
          return _objectSpread2$1(_objectSpread2$1({}, item), props);
        }

        return item;
      });

      var _preProps$props = _objectSpread2$1(_objectSpread2$1({}, preProps), props),
          origin = _preProps$props.origin,
          altitude = _preProps$props.altitude,
          otherProps = _objectWithoutProperties(_preProps$props, _excluded$1);

      var _origin = _slicedToArray(origin, 2),
          x = _origin[0],
          y = _origin[1];

      DBox.lightSetting.setPointLightProps(toThreeColor({
        color: otherProps.color,
        intensity: otherProps.intensity,
        distance: otherProps.distance / 100,
        lng: x,
        lat: y,
        height: altitude / 1000
      }), otherProps.id, otherProps.host || 'scene');
      return;
    } // 添加


    var point = DBox.lightSetting.addPointLight('scene');
    light.pointLigh.push(_objectSpread2$1(_objectSpread2$1({}, props), {}, {
      id: point.index,
      name: point.index,
      host: props.host || 'scene'
    }));
    return point;
  };
  /**
   * 聚光灯
   */


  var spotLight = function spotLight(DBox, light, props, del) {
    // 删除
    if (del) {
      var _point4;

      var _point3;

      light.spotLight = light.spotLight.filter(function (item) {
        if (item.id === props.id) {
          _point3 = item;
          return false;
        }

        return true;
      });
      DBox.lightSetting.removeSpotLight(props.id, ((_point4 = _point3) === null || _point4 === void 0 ? void 0 : _point4.host) || 'scene');
      return;
    } // 修改


    if (props.id) {
      var preProps;
      light.spotLight = light.spotLight.map(function (item, index) {
        if (item.id === props.id) {
          preProps = item;
          return _objectSpread2$1(_objectSpread2$1({}, item), props);
        }

        return item;
      });

      var _preProps$props2 = _objectSpread2$1(_objectSpread2$1({}, preProps), props),
          origin = _preProps$props2.origin,
          altitude = _preProps$props2.altitude,
          otherProps = _objectWithoutProperties(_preProps$props2, _excluded2);

      var _origin2 = _slicedToArray(origin, 2),
          x = _origin2[0],
          y = _origin2[1];

      DBox.lightSetting.setSpotLightProps(toThreeColor({
        color: otherProps.color,
        intensity: otherProps.intensity,
        distance: otherProps.distance / 100,
        lng: x,
        lat: y,
        height: altitude / 1000
      }), otherProps.id, otherProps.host || 'scene');
      return;
    } // 添加


    var point = DBox.lightSetting.addSpotLight('scene');
    light.spotLight.push(_objectSpread2$1(_objectSpread2$1({}, props), {}, {
      id: point.index,
      name: point.index,
      host: props.host || 'scene'
    }));
    return point;
  };
  /**
   * 初始化灯光
   */


  var init = function init(DBox, light) {
    var ambientLight = light.ambientLight,
        directionalLight = light.directionalLight,
        pointLigh = light.pointLigh,
        model = light.model;

    var addLight = function addLight(host) {
      DBox.lightSetting.setAmbientLightProps(toThreeColor(ambientLight), host);
      DBox.lightSetting.setDirectionalLightProps(toThreeColor(directionalLight), host);

      if ((pointLigh === null || pointLigh === void 0 ? void 0 : pointLigh.length) > 0) {
        pointLigh.forEach(function (item) {
          var origin = item.origin,
              altitude = item.altitude,
              otherProps = _objectWithoutProperties(item, _excluded3);

          var _origin3 = _slicedToArray(origin, 2),
              x = _origin3[0],
              y = _origin3[1];

          var point = DBox.lightSetting.addPointLight(host);
          DBox.lightSetting.setPointLightProps(toThreeColor({
            color: otherProps.color,
            intensity: otherProps.intensity,
            distance: otherProps.distance / 100,
            lng: x,
            lat: y,
            height: altitude / 100
          }), point.index, host);
        });
      }
    };

    if (model) {
      window.modelLoadedCallback = function () {
        addLight('model');
      };
    } else {
      addLight('scene');
    }
  };

  var download = function download(json) {
    var a = document.createElement('a');
    a.href = json && 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json));
    a.download = 'spaceojoStyle.json';
    document.documentElement.append(a);
    a.click();
    a.remove();
  };

  var buildingBaseSuffix$1 = Enum.buildingBaseSuffix;

  var BaseMap = /*#__PURE__*/function () {
    function BaseMap(map) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isFly = _ref.isFly,
          isFly = _ref$isFly === void 0 ? true : _ref$isFly;

      _classCallCheck(this, BaseMap);

      // 重写 map.addLayer 方法，添加beforeId的判断逻辑
      var addLayer = map.addLayer.bind(map);

      map.addLayer = function (layer, beforeId) {
        if (typeof beforeId === 'undefined' || beforeId.includes('three-')) {
          addLayer(layer);
        } else {
          addLayer(layer, beforeId);
        }
      };

      this.data = {
        settings: {
          isPopup: true
        }
      };
      this.map = map;
      this.onClick = null;
      this.markers = new Map();
      this.map.DBox = new layers3D__namespace.threeBox(map, map.painter.context.gl);
      this.layerClick = {};
      this.isFly = isFly;
    }
    /**
     * 提示框
     */


    _createClass(BaseMap, [{
      key: "isPopup",
      get: function get() {
        return this.data.settings.isPopup;
      }
      /**
       * 默认灯光
       */
      ,
      set: function set(isPopup) {
        this.data.settings.isPopup = isPopup;
      }
    }, {
      key: "defaultLight",
      get: function get() {
        return {
          ambientLight: {
            color: '#ccc',
            intensity: 0.35
          },
          directionalLight: {
            color: '#404040',
            intensity: 0.4
          },
          pointLigh: [],
          spotLight: []
        };
      }
      /**
       * 可编辑图层
       */

    }, {
      key: "layers",
      get: function get() {
        if (this.data.layers) {
          return parseJson(this.data);
        }

        return [];
      }
      /**
       * 给楼添加楼顶属性
       */

    }, {
      key: "addRoof",
      value: function addRoof() {
        var layers = this.data.layers;
        this.data.layers = layers.map(function (layer, index) {
          if (layer.id.includes('building_R') && layer.type === 'fill-extrusion' && layer.paint['fill-extrusion-base'] === void 0 && layer.paint['fill-extrusion-height'] && !layer.roof) {
            return _objectSpread2$1(_objectSpread2$1({}, layer), {}, {
              roof: _objectSpread2$1(_objectSpread2$1({}, layer), {}, {
                id: layer.id + buildingBaseSuffix$1,
                layout: _objectSpread2$1(_objectSpread2$1({}, layer.layout), {}, {
                  visibility: 'none'
                }),
                paint: _objectSpread2$1(_objectSpread2$1({}, layer.paint), {}, {
                  'fill-extrusion-base': _objectSpread2$1({}, layer.paint['fill-extrusion-height'])
                })
              })
            });
          }

          return layer;
        });
      }
      /**
       * 添加楼顶图层
       */

    }, {
      key: "addBuildingBase",
      value: function addBuildingBase(id, roof) {
        var buildingIndex = this.data.layers.findIndex(function (layer, key) {
          return layer.id === id;
        });
        this.map.addLayer(roof, this.data.layers[buildingIndex + 1].id);
      }
      /**
       * map click 事件
       */

    }, {
      key: "initClick",
      value: function initClick(callBack) {
        var map = this.map;
        var context = this;
        map.on('load', function () {
          var popup = new mapboxgl__default$1["default"].Popup({
            closeButton: true,
            closeOnClick: false,
            anchor: 'bottom'
          });
          context.popup = popup;
          map.on('click', function (e) {
            var _features$, _features$2;

            // set bbox as 5px reactangle area around clicked point
            var features = map.queryRenderedFeatures(e.point);
            var properties = features[0] && Object.keys((_features$ = features[0]) === null || _features$ === void 0 ? void 0 : _features$.properties);
            callBack && callBack(properties, e.lngLat);
            context.onClick && context.onClick(properties, e.lngLat);
            var description = (_features$2 = features[0]) === null || _features$2 === void 0 ? void 0 : _features$2.properties;

            if (description && Object.keys(description).length && context.isPopup) {
              var descriptionStr = JSON.stringify(description);
              descriptionStr = descriptionStr.replace(/{/, '<div>').replace(/}/, '</div>').replace(/,/g, '<br/>');
              popup.setLngLat(e.lngLat).setHTML('<div class="popup" style="color: #000">' + descriptionStr + '</div>').addTo(map);
            }
          });
        });
      }
      /**
       * 导航控制
       * @param { Boolean } visible
       * @param { Object } options { showCompass 指南针按钮 showZoom 放大和缩小按钮 visualizePitch 旋转指南针的Y轴来显示俯仰角度 }
       * @param { String } position 'top-left' ， 'top-right' ， 'bottom-left' ，和 'bottom-right' 。默认为 'top-right'
       */

    }, {
      key: "navigationControl",
      value: function navigationControl(param) {
        this.data.navigation = _objectSpread2$1(_objectSpread2$1({}, this.data.navigation), param);
        var _this$data$navigation = this.data.navigation,
            visible = _this$data$navigation.visible,
            options = _this$data$navigation.options,
            _this$data$navigation2 = _this$data$navigation.position,
            position = _this$data$navigation2 === void 0 ? 'top-right' : _this$data$navigation2;

        if (visible) {
          this.NavigationControl = new mapboxgl__default$1["default"].NavigationControl(options);
          this.map.addControl(this.NavigationControl, position);
        } else if (this.NavigationControl) {
          this.map.removeControl(this.NavigationControl);
        }
      }
      /**
       * logo 显示隐藏 | 图片地址
       * @param {visible, url, width, height, position: { right | left }}
       */

    }, {
      key: "logo",
      value: function logo(param) {
        this.data.logo = _objectSpread2$1(_objectSpread2$1({}, this.data.logo), param);
        var _this$data$logo = this.data.logo,
            visible = _this$data$logo.visible,
            url = _this$data$logo.url,
            width = _this$data$logo.width,
            height = _this$data$logo.height,
            position = _this$data$logo.position;

        if (typeof url === 'string') {
          var styleW = width ? "width:".concat(width, "px;") : '';
          var styleH = height ? "height:".concat(height, "px;") : '';
          var logoImg = document.querySelector('.mapboxgl-ctrl-logo');

          if (logoImg) {
            logoImg.outerHTML = '<img style=' + styleW + styleH + ' class="mapboxgl-ctrl-logo" src=' + url + ' />';
          }
        }

        if (typeof visible === 'boolean') {
          var _logoImg = document.getElementsByClassName('mapboxgl-ctrl-logo')[0];

          if (_logoImg) {
            _logoImg.style.visibility = visible ? 'visible' : 'hidden';
          }
        }

        if (position) {
          var logoBox = document.querySelector(".mapboxgl-ctrl-bottom-left");

          if (logoBox) {
            logoBox.className = "mapboxgl-ctrl-bottom-".concat(position);
          }
        }
      }
      /**
       * 添加标记
       * @param {*} coordinates
       * @param {*} el
       */

    }, {
      key: "addMarker",
      value: function addMarker(coordinates, el, offset) {
        var _el = document.createElement('div'); // _el.innerText = '标记';


        _el.className = 'marker';
        _el.style.width = '100px';
        _el.style.height = '100px';
        _el.style.border = '1px solid #fff';
        var marker = new mapboxgl__default$1["default"].Marker(el || _el, {
          anchor: 'center',
          offset: offset
        }).setLngLat(coordinates).addTo(this.map);
        var t = new Date().getTime();
        this.markers.set(t, marker);
        return t;
      }
      /**
       * 删除标记
       * @param {*} marker
       */

    }, {
      key: "removeMarker",
      value: function removeMarker(markerId) {
        this.markers.get(markerId).remove();
        this.markers["delete"](markerId);
      }
      /**
       * 飞到指定位置
       * @param {*} {center:[], zoom: 0}
       */

    }, {
      key: "flyTo",
      value: function flyTo(options) {
        this.map.flyTo(options);
      }
      /**
       * 飞到指定区域
       */

    }, {
      key: "fitBounds",
      value: function fitBounds(bounds, options) {
        this.map.fitBounds(bounds, options);
      }
      /**
       * 设置相机
       * { isPan = true, isZoom = true, isRotate = true }
       */

    }, {
      key: "setCamera",
      value: function setCamera(param) {
        var option = param || {}; // 旋转

        if (typeof option.isRotate === 'boolean') {
          this.data.isRotate = option.isRotate;

          if (option.isRotate) {
            this.map.dragRotate.enable();
          } else {
            this.map.dragRotate.disable();
          }
        } // 缩放


        if (typeof option.isZoom === 'boolean') {
          this.data.isZoom = option.isZoom;

          if (option.isZoom) {
            this.map.scrollZoom.enable();
          } else {
            this.map.scrollZoom.disable();
          }
        } // 平移


        if (typeof option.isPan === 'boolean') {
          this.data.isPan = option.isPan;

          if (option.isPan) {
            this.map.dragPan.enable();
          } else {
            this.map.dragPan.disable();
          }
        } // 相机位置


        if (!param) {
          var _this$map$getCenter = this.map.getCenter(),
              lng = _this$map$getCenter.lng,
              lat = _this$map$getCenter.lat;

          this.data.center = [lng, lat];
          this.data.zoom = this.map.getZoom();
          this.data.bearing = this.map.getBearing();
          this.data.pitch = this.map.getPitch();
        }
      }
      /**
       * 灯光设置
       * type ambientLight
       * props { color intensity: 0-1 }
       */

    }, {
      key: "setLightProps",
      value: function setLightProps(type, props, del) {
        if (type === 'ambientLight') {
          setAmbientLightProps(this.map.DBox, this.data.lights, props);
        }

        if (type === 'directionalLight') {
          setDirectionalLightProps(this.map.DBox, this.data.lights, props);
        }

        if (type === 'pointLigh') {
          return pointLigh(this.map.DBox, this.data.lights, props, del);
        }

        if (type === 'spotLight') {
          return spotLight(this.map.DBox, this.data.lights, props, del);
        }
      }
      /**
       * 下载地图样式json文件
       */

    }, {
      key: "downloadJson",
      value: function downloadJson() {
        download(this.data);
      }
      /**
       * 获取图层数据属性
       * @param {*} layerId
       * @returns
       */

    }, {
      key: "getLayerFeatureProps",
      value: function getLayerFeatureProps(layerId) {
        var props = [];
        var feature = this.map.queryRenderedFeatures({
          layers: [layerId]
        })[0];

        if (feature) {
          var properties = feature.properties;
          return Object.keys(properties);
        }

        return props;
      }
      /**
       * 删除 three 图层释放资源
       */

    }, {
      key: "destroy",
      value: function destroy() {// 此方法时不时会引起报错，不再执行，好像也没啥用，似乎并没有释放资源，如果出现内存泄漏，让底图开发人员排查问题
        // if (!this.data?.layers?.length) {
        //   return;
        // }
        // this.data.layers.forEach(item => {
        //   const { threeBuilding, flowingWater, flowingRoad } = item;
        //   const getItemProp = prop => {
        //     return (
        //       (threeBuilding && threeBuilding[prop]) ||
        //       (flowingWater && flowingWater[prop]) ||
        //       (flowingRoad && flowingRoad[prop]) ||
        //       (item.extended === 'three' && item[prop])
        //     );
        //   };
        //   const id = getItemProp('id');
        //   const layer = this.map.getLayer(id);
        //   if (layer) {
        //     const type = getItemProp('layer');
        //     const threeObject = layer.implementation[type + 'Object'];
        //     threeObject ? threeObject.remove() : console.error(`layer: ${type} not found`);
        //   }
        // });
      }
    }]);

    return BaseMap;
  }();

  var _excluded = ["id", "layer", "_ui"];
  var buildingBaseSuffix = Enum.buildingBaseSuffix;

  var BaseLayer = /*#__PURE__*/function (_BaseMap) {
    _inherits(BaseLayer, _BaseMap);

    var _super = _createSuper(BaseLayer);

    function BaseLayer() {
      _classCallCheck(this, BaseLayer);

      return _super.apply(this, arguments);
    }

    _createClass(BaseLayer, [{
      key: "init",
      value:
      /**
       * 初始化图层样式和基本参数
       */
      function init$1(d, callBack) {
        var _this = this;

        // 检查格式
        if (!checkFormat(d)) {
          return;
        }

        var mapboxLayers = d.layers.filter(function (item) {
          return !item.extended;
        });
        var extendedLayers = d.layers.filter(function (item) {
          return item.extended;
        }); // 把扩展图层放到最后

        d.layers = [].concat(_toConsumableArray(mapboxLayers), _toConsumableArray(extendedLayers)); // 密封对象禁止外部增、删

        this.data = Object.seal(_objectSpread2$1(_objectSpread2$1({}, d), {}, {
          logo: _objectSpread2$1({}, d.logo),
          navigation: _objectSpread2$1({}, d.navigation),
          markerGroups: d.markerGroups || [],
          lights: d.lights || this.defaultLight,
          settings: d.settings || this.data.settings
        }));
        var map = this.map;
        var data = this.data;
        map.data = data; // 需要在解析之前加上楼顶属性

        this.addRoof(); // 飞到默认位置

        this.isFly && map.flyTo(_objectSpread2$1({}, data)); // 此处强制更新，为了让下面styledata保证一定执行

        map.setStyle(filterExtendedLayers(data), {
          diff: false
        }); // 初始化扩展图层

        map.once('styledata', function (e) {
          _this.initExtendedLayers(_this.layers);

          callBack && callBack();
        }); // 初始化logo

        this.logo(this.data.log); // 初始化导航

        this.navigationControl(this.data.navigation); // 初始化相机

        this.setCamera(d); // 初始化灯光

        init(this.map.DBox, this.data.lights);
        return data;
      }
      /**
       * 控制图层显示隐藏（目前只操作mapbox图层，不支持扩展图层）
       * @param { String } id 图层id
       * @param { Boolean } d 图层显示|隐藏
       */

    }, {
      key: "changeLayerVisibility",
      value: function changeLayerVisibility(id, d) {
        var _item = null;
        var visibility = d ? 'visible' : 'none'; // 修改 json

        this.data.layers.forEach(function (item) {
          var _item$roof;

          if (id === item.id) {
            _item = item;

            if (item.layout) {
              item.layout.visibility = visibility;
            } else {
              item.layout = {
                visibility: visibility
              };
            }
          } // 处理楼顶


          if (((_item$roof = item.roof) === null || _item$roof === void 0 ? void 0 : _item$roof.id) === "".concat(id).concat(buildingBaseSuffix) && id.includes('building_R')) {
            if (item.roof.layout) {
              item.roof.layout.visibility = visibility;
            } else {
              item.roof.layout = {
                visibility: visibility
              };
            }
          }
        });
        this.map.setLayoutProperty(id, 'visibility', visibility); // 楼隐藏时把楼顶隐藏

        if (_item && _item.id.includes('building_R') && _item.type === 'fill-extrusion' && !_item.paint['fill-extrusion-base']) {
          this.map.setLayoutProperty(_item.id + buildingBaseSuffix, 'visibility', visibility);
        }
      }
      /**
       *
       * @param {*} layerId
       * @param {*} props
       * @param {*} { weight, bounds }
       * @returns
       */

    }, {
      key: "changeLayerProps",
      value: function changeLayerProps() {
        // 处理图层的颜色、贴图的叠加、分段
        if (Array.isArray(arguments[1])) {
          var layerId = arguments[0];
          var props = arguments[1];

          var _ref = arguments[2] || {},
              weight = _ref.weight,
              bounds = _ref.bounds,
              segmentType = _ref.segmentType,
              _ui = _ref._ui;

          this.changeColorImage({
            layerId: layerId,
            props: props,
            weight: weight,
            bounds: bounds,
            segmentType: segmentType,
            _ui: _ui
          });
        }

        if (Object.prototype.toString.call(arguments[0]) === '[object Object]') {
          var _arguments$ = arguments[0],
              id = _arguments$.id,
              layer = _arguments$.layer,
              _ui2 = _arguments$._ui,
              _props = _objectWithoutProperties(_arguments$, _excluded); // 添加修改影像


          if (layer === 'tiles') {
            var _id = tilesLayer(this.map, this.data, arguments[0]);

            return _id;
          } // 添加修改模型


          if (layer === 'model') {
            return modelLayer(this.map, this.data, arguments[0]);
          } // 添加修改标记-模型


          if (layer === 'marker-model') {
            return markerModelLayer(this.map, this.data, arguments[0]);
          } // 添加修改天空


          if (layer === 'sky') {
            skyLayer(this.map, this.data, arguments[0]);
            return;
          } // 添加修改动态水


          if (layer === 'water') {
            waterLayer(this.map, this.data, arguments[0]);
            return;
          } // 添加修改上升线


          if (layer === 'risingLine') {
            risingLineLayer(this.map, this.data, arguments[0]);
            return;
          } // 添加修改楼块


          if (layer === 'building') {
            buildingLayer(this.map, this.data, arguments[0]);
            return;
          } // 添加修改流动线


          if (layer === 'flowVecLine') {
            flowVecLineLayer(this.map, this.data, arguments[0]);
            return;
          }

          this.changeColorImage({
            layerId: id,
            props: [_props],
            _ui: _ui2
          });
        }

        return this.data;
      } // 处理图层的颜色、贴图的叠加、分段

    }, {
      key: "changeColorImage",
      value: function changeColorImage(_ref2) {
        var layerId = _ref2.layerId,
            props = _ref2.props,
            weight = _ref2.weight,
            bounds = _ref2.bounds,
            segmentType = _ref2.segmentType,
            _ui = _ref2._ui;

        // 分段设置
        if (Array.isArray(props) && weight) {
          // 新分段方式通过添加新图层加过滤属性实现
          segmentLayer(this.map, this.data, layerId, props, weight, segmentType, _ui);
        } else {
          // 统一设置
          if ((props === null || props === void 0 ? void 0 : props.length) === 1) {
            // 单属性设置
            var _props2 = _slicedToArray(props, 1),
                _props2$ = _props2[0],
                fieldName = _props2$.fieldName,
                fieldValue = _props2$.fieldValue; // 添加贴图


            if (fieldName.includes('-pattern')) {
              addMappingLayer(this.map, this.data, layerId, fieldName, fieldValue, _ui);
            } else {
              // 修改非贴图图层属性
              paintFn[fieldName](this.map, this.data, layerId, fieldValue, _ui);
            }
          }

          if ((props === null || props === void 0 ? void 0 : props.length) > 1) {
            // 处理叠加
            addOverlayLayer(this.map, this.data, layerId, props, bounds, _ui);
          }
        }
      }
      /**
       * 从styleJson读取自定图层添加到map
       */

    }, {
      key: "initExtendedLayers",
      value: function initExtendedLayers(layers) {
        var _this2 = this;

        var context = this;

        if (Array.isArray(layers)) {
          // eslint-disable-next-line no-unused-vars
          var _iterator = _createForOfIteratorHelper(layers),
              _step;

          try {
            var _loop = function _loop() {
              var layer = _step.value;

              // 楼顶
              if (layer.id.includes('building_R') && layer.roof) {
                // 因为 this.layers 里面的属性被扁平化了，需要从this.data.layers取数据
                var roof = _this2.data.layers.find(function (item) {
                  return item.id === layer.id;
                }).roof;

                _this2.addBuildingBase(layer.id, roof);

                overlay_segment(layer.roof);
              } // three 楼块


              if (layer.id.includes('building_R') && layer.threeBuilding) {
                addExtendedLayer(_this2.map, layer.threeBuilding);
              } // 流动水


              if (layer.id.includes('water_R') && layer.flowingWater) {
                addExtendedLayer(_this2.map, layer.flowingWater);
              } // 流动线


              if (layer.id.includes('road_') && layer.flowingRoad) {
                addExtendedLayer(_this2.map, layer.flowingRoad);
              } // 第三方图层


              if (layer.extended) {
                addExtendedLayer(_this2.map, layer);
              }

              overlay_segment(layer);

              function overlay_segment(layer) {
                // 叠加图层
                if (Array.isArray(layer.overlay) && layer.overlay.length > 0) {
                  addOverlayLayer(context.map, context.data, layer.id, layer.overlay);
                } // 分段图层


                if (Array.isArray(layer.segment) && layer.segment.length > 0) {
                  segmentLayer(context.map, context.data, layer.id, layer.segment, layer.weight, layer.segmentType);
                }
              }
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      /**
       * 添加图层点击事件
       */

    }, {
      key: "initLayerClick",
      value: function initLayerClick(fn) {
        this.layerClick = fn;
        this.map.layerClick = fn;
      }
      /**
       * 设置标记分组
       */

    }, {
      key: "setMarkerGroups",
      value: function setMarkerGroups(name, remove) {
        if (remove) {
          this.data.markerGroups = this.data.markerGroups.filter(function (item) {
            return item !== name;
          });
        } else {
          this.data.markerGroups.push(name);
        }
      }
    }]);

    return BaseLayer;
  }(BaseMap);

  var accessToken = 'pk.eyJ1Ijoid2VpemhpbWluMjAwNyIsImEiOiJjajkzeHRhcWkyaWtsMzNucmZkZHBsbWtsIn0.Roa71zaPUY1M00OQ0X1WzA'; // 默认视口

  var defaultCamera = {
    maxZoom: 18,
    minZoom: 4,
    center: [116, 39]
  };

  var MapEngine = /*#__PURE__*/function (_DccEngine) {
    _inherits(MapEngine, _DccEngine);

    var _super = _createSuper(MapEngine);

    function MapEngine() {
      var _this;

      _classCallCheck(this, MapEngine);

      //调用父类引擎进行初始化
      _this = _super.call(this); //初始化mapbox对象

      mapboxgl__default["default"].accessToken = accessToken; // mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.1/mapbox-gl-rtl-text.js');
      // mapbox

      var map = new mapboxgl__default["default"].Map(_objectSpread2$1({
        container: 'mapContainer'
      }, defaultCamera));

      var _defaultCamera$center = _slicedToArray(defaultCamera.center, 2),
          longitude = _defaultCamera$center[0],
          latitude = _defaultCamera$center[1]; // deck gl


      var deck = new core.Deck({
        viewState: {
          longitude: longitude,
          latitude: latitude,
          zoom: defaultCamera.zoom
        },
        gl: map.painter.context.gl
      });
      _this.map = map;
      _this.deck = deck;
      _this.type = EngineType.Spaceojo_Map; //设置引擎类型
      // this.msgHub = {}; //消息中枢，用于对调用返回消息进行统一转发
      // this.camera = new DccCamera( this ); //初始化相机对象，用于生成快照、定义镜头、飞行路线，执行镜头切换、场景飞行漫游
      // this.component = new DccComponent( this ); //初始化组件对象，包括指北针、比例尺、缩略图（鹰眼）、图例
      // this.coord = new DccCoord( this ); //初始化坐标转换对象
      // this.editor = new DccEditor( this ); //初始化编辑对象，用于在场景中添加、编辑各类几何对象
      // this.environment = new DccEnvironment( this );//初始化环境对象
      // this.events = new DccEvents(); //初始化事件回调接口

      _this.layers = new MapLayers(_assertThisInitialized(_this)); //初始化图层对象，用于图层管理
      // this.measure = new DccMeasure( this ); //初始化量算对象
      // this.selection = new DccSelection( this ); //初始化选择集对象
      // this.tours = new DccTours( this ); //初始化导览路线
      // this.utility = new DccUtility( this ); //初始化实用工具
      // this.init = false; //为初始化，则不能调用引擎相关接口

      map.on('zoom', function (e, e1) {
        Object.values(_this.layers.layers).forEach(function (layer) {
          layer.setVisibleByZoom && layer.setVisibleByZoom(map.getZoom());
        });
      });
      return _this;
    }

    _createClass(MapEngine, [{
      key: "initialize",
      value: function initialize(url) {
        var _this2 = this;

        fetch(url).then(function (res) {
          return res.json();
        }).then(function (json) {
          var baseLayer = new BaseLayer(_this2.map);
          baseLayer.init(json, function () {});
        })["catch"](function (error) {
          console.error(error);
        }); //初始化测试引擎状态

        this.engineState = {
          project: {
            //工程信息
            name: '',
            //工程名称
            pathfile: '',
            //工程路径文件名
            state: 0 //0：没有项目被创建或打开，1：创建了新工程，但还未保存，2：工程已保存为文件，3：工程发生修改，未保存

          },
          scenes: [],
          //工程管理的项目场景
          baseScenes: [] //工程中打开的城市底座

        };
      }
    }, {
      key: "excute",
      value: function excute(command) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var msgFunc = arguments.length > 2 ? arguments[2] : undefined;

        var cmdpak = _get(_getPrototypeOf(MapEngine.prototype), "excute", this).call(this, command, params, msgFunc);

        if (cmdpak) {
          //处理引擎调用命令
          switch (cmdpak.command) {
            case CommandType.Engine_QueryVersion:
              this.onCommandMsg({
                type: EventType.Events_OnCommand,
                command: CommandType.Engine_QueryVersion,
                time: new Date().getTime() - cmdpak.excuteTime,
                result: _SUCCESS,
                Name: 'DoCity Test Engine',
                version: '1.0.0',
                EngineVersion: '4.26.4'
              });
              break;
          }
        }
      }
    }, {
      key: "workhard",
      value: function workhard(milliSeconds) {
        var startTime = new Date().getTime();

        while (new Date().getTime() < startTime + milliSeconds) {
        }
      }
    }]);

    return MapEngine;
  }(DccEngine);

  /**
   * @class
   * @classdesc DoClient :
   * DoClient是相数数字孪生城市平台客户端对象,是Web端对渲染引擎进行调用和事件反馈的核心对象
   * 支持打开加载三维场景，以及对本地渲染引擎或云渲染服务端进行功能调用和事件通信
   * @property {Web3DEngine} engine            当前客户端关联的渲染引擎
   * @property {Web3DLayers} layers            三维场景中图层集合，用于获取图层信息，对图层进行操作和管理
   * @property {Web3DCoord} coord              三维场景坐标系，提供坐标设置、转换相关支持
   * @property {Web3DEditor} editor            编辑图层接口，用于在场景中添加、管理、修改各类几何对象
   * @property {Web3DMeasure} measure          场景中的可编辑图层，用于在场景中添加、编辑临时对象
   * @property {Web3DSelection} selection      三维场景中被选取的对象，用于对选取对象进行高亮、动画、聚焦、分解、合并等操作，支持对选中高亮风格进行设置
   * @property {Web3DCamera} camera            二三维场景相机接口，用于生成快照、定义镜头、导览路线，执行镜头切换、场景飞行漫游
   * @property {Web3DTours} tours              场景导览接口，用于采集、管理场景快照和漫游路线
   * @property {Web3DEnvironment} environment  场景环境管理，包括24小时光照、天气、太阳、月亮、天空、云层等设置
   * @property {Web3DComponent} component      三维场景中可视化组件设置，包括指北针、比例尺、缩略图（鹰眼）、图例
   * @property {Web3DUtility} utlity           在应用开发中提供的辅助工具，包括蓝图指令、特效开关（区域扫光、屏幕粒子、道路流动线）、灯光开关和配置指令、音效开关和配置指令
   * @property {Web3DEvents} events            用于客户端事件管理，注册事件消息处理函数，包括场景管理消息、场景交互消息等
   * ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
   * @constructor
   * @param {string} clientID 绑定场景的DOM节点的ID
   * @param {object} engine 渲染引擎，渲染类型包括二维地图（Spaceojo_Map）、Web端三维（Spaceojo_Web3D）或云渲染引擎（Spaceojo_CloudRender），具体参见EngineType
   * @returns {DoClient} 返回DoClient对象
   * @example
   * import {DCREngine,DCRClient} from "docity.cloudrender.js"
   *
   * var dcrEngine=new DCREngine();
   * if(dcrEngine.initialize(
   *    'https://www.dataojo.com/docity/dcrservice:8899',     //引擎对应服务地址，用于数据连接和合法性验证
   *    'xxxx-xxxx-xxxx'                                      //用户token信息，有相数DoCity平台授权生成
   *     ))
   *    {
   *       var dc = new DCRClient('divDcc',dcrEngine);
   *       dcrEngine.open('Prj1',(e)=>{
   *            if(e.result==_SUCCESS)
   *            {
   *                dc.startRender();
   *            }else
   *            {
   *               console.log('打开DCP工程失败！');
   *            }
   *       }
   *    }
   *
   **/

  var DoClient = /*#__PURE__*/function () {
    function DoClient(clientID, engine) {
      _classCallCheck(this, DoClient);

      this.clientID = clientID;
      this.engine = engine; //配置渲染引擎，用于解析、执行渲染命令，接收触发事件消息，用户根据渲染方式实例化为二维地图（）、Web端三维或云渲染引擎

      this.camera = engine.camera; //初始化相机对象，用于生成快照、定义镜头、飞行路线，执行镜头切换、场景飞行漫游

      this.component = engine.component; //初始化组件对象，包括指北针、比例尺、缩略图（鹰眼）、图例

      this.coord = engine.coord; //初始化坐标转换对象

      this.editor = engine.editor; //初始化编辑对象，用于在场景中添加、编辑各类几何对象

      this.environment = engine.environment; //初始化环境对象

      this.layers = engine.layers; //初始化图层对象，用于图层管理

      this.measure = engine.measure; //初始化量算对象

      this.selection = engine.selection; //初始化选择集对象

      this.tours = engine.tours; //初始化导览路线

      this.utility = engine.utility; //初始化实用工具
      //(ps:通过实验发现，js中这种对象拷贝是一种引用拷贝，任意一边属性发生变化，两边都会同步，所以不用担心后面修改了DoClient中回调函数，engine中无法调用的情况)

      this.events = engine.events; //初始化事件回调接口
    }
    /**
     * 查询当前工程加载的项目场景信息
     * @method
     * @param {function} fn ：查询回调函数，返回工程中的场景信息
     * {
     *   command:Client_QueryScenes
     *   result:_SUCCESS,
     *   name: "default",
     * }
     * @example
     * dc.queryScenes(
     *   (e)=>{
     *       console.table(e.scense);   //输出场景信息
     *   }
     * );
     **/


    _createClass(DoClient, [{
      key: "queryScenes",
      value: function queryScenes(fn) {
        this.engine.excute(CommandType.Client_QueryScenes, {}, fn);
      }
      /**
       * 查询当前工程中的城市底座场景信息
       * @method
       * @param {function} fn ：查询回调函数，返回调用结果
       * {
       *   command:Client_QueryBases
       *   result:_SUCCESS,
       *   bases:[{id:'xxxxxxxxx',name:'北京',style:'绿水青山'},
       *          {id:'xxxxxxxxx',name:'上海',style:'火星'},
       *          {id:'xxxxxxxxx',name:'CBD',style:'未来星球'}],
       * }
       * @example
       * dc.queryBases(
       *   (e)=>{
       *       console.table(e.bases);   //输出场景信息
       *   }
       * );
       **/

    }, {
      key: "queryBases",
      value: function queryBases(fn) {
        this.engine.excute(CommandType.Client_QueryBases, {}, fn);
      }
      /**
       * 基于系统中加载的城市底座场景创建一个新的项目场景
       * 城市底座对应的场景是通过数据生产工具制作、生产并发布的场景，项目开发者只能使用（可以对其进行显示尺度、风格的调节），但不能对其进行数据更改
       * 项目场景可由开发者基于应用需求，在城市底座场景上自行创建的三维场景，可以通过编程对其进行修改、删除、保存管理
       * 新建项目场景后，系统会自动地为项目分配一个缺省的名称，当用户调用save方法保存场景时，系统将用save中指定的名称来保存场景
       * @method
       * @param {string} baseid ：工程中城市底座场景唯一编码，如果不指定，系统自动选取一个已有的场景
       * @param {string} sceneName ：场景名称,当场景名称为''时，系统会自动生成一个为场景命名，此时场景为临时场景，如果后面不调用保存函数系统将定期清理临时场景，在保存场景时可以为场景正式确定名称
       * @param {function} fn ：回调函数，范围新建场景结果信息，返回结构如下
       * {
       *   command:Client_CreateNew
       *   result:_SUCCESS,
       *   scene:'scene1'
       * }
       * @example
       * dc.createNew('scene1',
       *   (e)=>{
       *       console.log('新建场景${e.scene}成功！');
       *   }
       * );
       **/

    }, {
      key: "createNew",
      value: function createNew(baseid) {
        var sceneName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.engine.excute(CommandType.Client_CreateNew, {
          sceneName: sceneName,
          baseid: baseid
        }, fn);
      }
      /**
       * 保存项目场景，项目场景将序列化到当前数字孪生项目中，便于下次打开
       * @method
       * @param {function} fn ：回调函数，返回调用结果，信息返回结构如下：
       * {
       *   command:Client_Save,
       *   result:_SUCCESS,
       *   scene:'经济运行',
       * }
       * @example
       * dc.save(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('保存场景${e.scene}成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "save",
      value: function save(fn) {
        this.engine.excute(CommandType.Client_Save, {}, fn);
      }
      /**
       * 将当前项目场景另存为一个新场景，新场景将序列化到当前数字孪生项目中，便于下次打开
       * @method
       * @param {string} sceneName ：场景名称
       * @param {function} fn ：回调函数，返回调用结果,返回信息结构如下：
       * {
       *   command:Client_SaveAs,
       *   result:_SUCCESS,
       *   scene:'交通',
       * }
       * @example
       * dc.saveAs('交通',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('保存场景${e.scene}成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "saveAs",
      value: function saveAs(scenName, fn) {
        this.engine.excute(CommandType.Client_SaveAs, {
          sceneName: sceneName
        }, fn);
      }
      /**
       * 打开当前数字孪生项目中的一个项目场景
       * @method
       * @param {string} sceneName ：项目场景名称
       * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
       * {
       *   command:Client_Open,
       *   result:_SUCCESS,
       *   scene:'交通',
       * }
       * @example
       * dc.open('交通',
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('打开场景${e.scene}成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "open",
      value: function open(scenName, fn) {
        this.engine.excute(CommandType.Client_Open, {
          sceneName: sceneName
        }, fn);
      }
      /**
       * 关闭场景，同时停止对应的服务端渲染线程
       * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
       * {
       *   command:Client_Close,
       *   result:_SUCCESS,
       * }
       * @example
       * dc.close(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('关闭场景成功！');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "close",
      value: function close(fn) {
        this.engine.excute(CommandType.Client_Close, {}, fn);
      }
      /**
       * 启动服务端渲染线程
       * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
       * {
       *   command:Client_StartRender,
       *   result:_SUCCESS,
       * }
       * @example
       * dc.startRender(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('渲染线程已启动...');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "startRender",
      value: function startRender(fn) {
        this.engine.excute(CommandType.Client_StartRender, {}, fn);
      }
      /**
       * 停止服务端渲染线程
       * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
       * {
       *   command:Client_StopRender,
       *   result:_SUCCESS,
       * }
       * @example
       * dc.stopRender(
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('渲染线程已停止...');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "stopRender",
      value: function stopRender(fn) {
        this.engine.excute(CommandType.Client_StopRender, {}, fn);
      }
      /**
       * 查询当前客户端鼠标交互行为
       * @method
       * @param {function} fn ：查询回调函数，返回信息结构如下：
       * {
       *   command:Client_QueryAction,
       *   result:_SUCCESS,
       *   action:1,
       * }
       * @example
       * dc.queryAction(
       *   (e)=>{
       *     console.log('当前客户端action是${e.action}');
       *   });
       **/

    }, {
      key: "queryAction",
      value: function queryAction(fn) {
        this.engine.excute(CommandType.Client_QueryAction, {}, fn);
      }
      /**
       * 设置当前客户端鼠标及其他输入交互行为
       * @method
       * @param {ActionType} action   当前场景鼠标及其他交互输入操作行为，如：漫游、漫游拾取、编辑、分析
       * @param {function} fn ：查询回调函数，客户端通过此函数获取action设置结果
       * {
       *   command:Client_SetAction,
       *   result:_SUCCESS,
       *   previousAction:0,     //此次设置之前的action
       *   action:1,
       * }
       * @example
       * import {ActionType } from "./common/DccObjects";
       *
       * dc.setAction(ActionType.AddObject,
       *   (e)=>{
       *     console.log('当前客户端action是${e.action}');
       *   });
       **/

    }, {
      key: "setAction",
      value: function setAction() {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ActionType.PanSelect;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.engine.excute(CommandType.Client_SetAction, {
          action: action
        }, fn);
      } // Client_QuerySceneList:61,         //获取项目场景名称列表
      // Client_RemoveScene:	62,	          //删除指定项目场景，不能删除当前打开的场景
      // Client_RenameScene:	63,	          //项目场景重命名

      /**
       * 获取项目场景名称列表
       * @method
       * @param
       * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
       * {
       *   command: 61,
       *   result: 1,
       *   timestamp: 1625148416,
       *   lists: ["default", "scene1", "scene2"]
       * }
       * @example
       * dc.querySceneList({},
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('e.lists');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "querySceneList",
      value: function querySceneList(fn) {
        this.engine.excute(CommandType.Client_QuerySceneList, {}, fn);
      }
      /**
       * 删除指定项目场景，不能删除当前打开的场景
       * @method
       * @param {string} sceneName ：项目场景名称
       * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
       * {
       *   command: 62,
       *   result: 1,
       *   timestamp: 1625148416,
       * }
       * @example
       * dc.removeScene("sceneName1",
       *     (e)=>{
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('e.result');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "removeScene",
      value: function removeScene(sceneName, fn) {
        this.engine.excute(CommandType.Client_RemoveScene, {
          name: sceneName
        }, fn);
      }
      /**
       * 重命名指定项目场景
       * @method
       * @param {string} sceneName ：项目场景名称
       * @param {string} newName ：新的项目场景名称
       * @param {function} fn ：回调函数，返回调用结果，返回信息结构如下：
       * {
       *   command: 63,
       *   result: 1,
       *   timestamp: 1625148416,
       * }
       * @example
       * dc.renameScene("sceneName1","交通"
       *        if(e.result==_SUCCESS)
       *        {
       *           console.log('e.result');
       *        }
       *     }
       *   );
       **/

    }, {
      key: "renameScene",
      value: function renameScene(sceneName, newName, fn) {
        this.engine.excute(CommandType.Client_RenameScene, {
          sceneName: sceneName,
          newName: newName
        }, fn);
      }
    }]);

    return DoClient;
  }();

  var MapClient = /*#__PURE__*/function (_DoClient) {
    _inherits(MapClient, _DoClient);

    var _super = _createSuper(MapClient);

    function MapClient(clientID, engine) {
      var _this;

      _classCallCheck(this, MapClient);

      _this = _super.call(this, clientID, engine);
      _this.engine = engine; // this.layers = new MapLayers(this); //初始化图层对象，用于图层管理

      _this.layers = engine.layers; //this.container.jsonViewer(this.render(0));

      return _this;
    } //将客户端状态或引擎状态输出到客户绘制区


    return _createClass(MapClient);
  }(DoClient);

  /* eslint-disable eol-last */
  var ENGINE_NAME = "Spaceojo_Map";
  var ENGINE_VERION = "v1.0.0";

  exports.ActionType = ActionType;
  exports.AlignStyle = AlignStyle;
  exports.AnimationMode = AnimationMode;
  exports.BaseLayerType = BaseLayerType;
  exports.CommandType = CommandType;
  exports.ComponentType = ComponentType;
  exports.CoordinateType = CoordinateType;
  exports.DataSourceType = DataSourceType;
  exports.DccCamera = DccCamera;
  exports.DccComponent = DccComponent;
  exports.DccCoord = DccCoord;
  exports.DccEditor = DccEditor;
  exports.DccEnvironment = DccEnvironment;
  exports.DccEvents = DccEvents;
  exports.DccMeasure = DccMeasure;
  exports.DccSelection = DccSelection;
  exports.DccTours = DccTours;
  exports.DecomposeStyle = DecomposeStyle;
  exports.DoCity = DoCity;
  exports.ENGINE_NAME = ENGINE_NAME;
  exports.ENGINE_VERION = ENGINE_VERION;
  exports.EngineType = EngineType;
  exports.EventType = EventType;
  exports.ExponentialStyleMapping = ExponentialStyleMapping;
  exports.FHD = FHD;
  exports.FillMode = FillMode;
  exports.FillStyle = FillStyle;
  exports.GeometryType = GeometryType;
  exports.GradientStyleMapping = GradientStyleMapping;
  exports.HD = HD;
  exports.HeatMapStyle = HeatMapStyle;
  exports.HighlightMode = HighlightMode;
  exports.HighlightStyle = HighlightStyle;
  exports.LatticeStyle = LatticeStyle;
  exports.LayerType = LayerType;
  exports.LayersQueryMode = LayersQueryMode;
  exports.LineStyle = LineStyle;
  exports.LineType = LineType;
  exports.LinearStyleMapping = LinearStyleMapping;
  exports.LogStyleMapping = LogStyleMapping;
  exports.MapClient = MapClient;
  exports.MapEngine = MapEngine;
  exports.MapLayers = MapLayers;
  exports.MeasureType = MeasureType;
  exports.MoveMode = MoveMode;
  exports.ODLineStyle = ODLineStyle;
  exports.ODPointStyle = ODPointStyle;
  exports.PolygonType = PolygonType;
  exports.QHD = QHD;
  exports.RTTargetType = RTTargetType;
  exports.RadiationStyle = RadiationStyle;
  exports.RangeStyleMapping = RangeStyleMapping;
  exports.RangeType = RangeType;
  exports.RenderModeType = RenderModeType;
  exports.StyleMappingType = StyleMappingType;
  exports.SysMsgType = SysMsgType;
  exports.TextAnchor = TextAnchor;
  exports.TourMode = TourMode;
  exports.UniqueStyleMapping = UniqueStyleMapping;
  exports.VideoType = VideoType;
  exports.WeatherMode = WeatherMode;
  exports._FAILED = _FAILED;
  exports._SUCCESS = _SUCCESS;
  exports.createGeometryProp = createGeometryProp;
  exports.createLayerProp = createLayerProp;
  exports.defaultCloudSetting = defaultCloudSetting;
  exports.defaultCompassPos = defaultCompassPos;
  exports.defaultConfig = defaultConfig;
  exports.defaultDayandNightSetting = defaultDayandNightSetting;
  exports.defaultFloatingParticlesSetting = defaultFloatingParticlesSetting;
  exports.defaultFogSetting = defaultFogSetting;
  exports.defaultLayerSetting = defaultLayerSetting;
  exports.defaultLightSetting = defaultLightSetting;
  exports.defaultLocation = defaultLocation;
  exports.defaultMeasureStyle = defaultMeasureStyle;
  exports.defaultMoonSetting = defaultMoonSetting;
  exports.defaultOverviewMapPos = defaultOverviewMapPos;
  exports.defaultRainSetting = defaultRainSetting;
  exports.defaultRasingLinesSetting = defaultRasingLinesSetting;
  exports.defaultRenderMode = defaultRenderMode;
  exports.defaultScalePos = defaultScalePos;
  exports.defaultScanSetting = defaultScanSetting;
  exports.defaultSnowSetting = defaultSnowSetting;
  exports.defaultSunSetting = defaultSunSetting;
  exports.defaultTimeSetting = defaultTimeSetting;
  exports.defaultTrafficflowSetting = defaultTrafficflowSetting;
  exports.onActionCanceledEvent = onActionCanceledEvent;
  exports.onActionFinishedEvent = onActionFinishedEvent;
  exports.onActionStartEvent = onActionStartEvent;
  exports.onCameraStartMovingEvent = onCameraStartMovingEvent;
  exports.onCameraStopMovingEvent = onCameraStopMovingEvent;
  exports.onClickEvent = onClickEvent;
  exports.onCommandEvent = onCommandEvent;
  exports.onEditEvent = onEditEvent;
  exports.onFocusedEvent = onFocusedEvent;
  exports.onHoverEvent = onHoverEvent;
  exports.onLayerAddedEvent = onLayerAddedEvent;
  exports.onLayerModifiedEvent = onLayerModifiedEvent;
  exports.onLayerRemovedEvent = onLayerRemovedEvent;
  exports.onLayerUpdatedEvent = onLayerUpdatedEvent;
  exports.onMeasureEvent = onMeasureEvent;
  exports.onObjectAddedEvent = onObjectAddedEvent;
  exports.onObjectDeletedEvent = onObjectDeletedEvent;
  exports.onObjectModifiedEvent = onObjectModifiedEvent;
  exports.onPrjClosedEvent = onPrjClosedEvent;
  exports.onPrjCreatedEvent = onPrjCreatedEvent;
  exports.onPrjOpenedEvent = onPrjOpenedEvent;
  exports.onSceneClosedEvent = onSceneClosedEvent;
  exports.onSceneCreatedEvent = onSceneCreatedEvent;
  exports.onSceneOpenedEvent = onSceneOpenedEvent;
  exports.onSelectedEvent = onSelectedEvent;
  exports.onSystemMsgEvent = onSystemMsgEvent;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
