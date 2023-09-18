import { getAction, deleteAction, putAction, postAction, httpAction } from '@/api/manage'
import Vue from 'vue'
import {UI_CACHE_DB_DICT_DATA } from "@/store/mutation-types"

////根路径
// const doMian = "/jeecg-boot/";
////图片预览请求地址
// const imgView = "http://localhost:8080/jeecg-boot/sys/common/view/";

//角色管理
const addRole = (params)=>postAction("/sys/role/add",params);
const editRole = (params)=>putAction("/sys/role/edit",params);
// const getRoleList = (params)=>getAction("/sys/role/list",params);
// const deleteRole = (params)=>deleteAction("/sys/role/delete",params);
// const deleteRoleList = (params)=>deleteAction("/sys/role/deleteBatch",params);
const checkRoleCode = (params)=>getAction("/sys/role/checkRoleCode",params);
const queryall = (params)=>getAction("/sys/role/queryall",params);

//用户管理
const addUser = (params)=>postAction("/sys/user/add",params);
const editUser = (params)=>putAction("/sys/user/edit",params);
const queryUserRole = (params)=>getAction("/sys/user/queryUserRole",params);
const getUserList = (params)=>getAction("/sys/user/list",params);
// const deleteUser = (params)=>deleteAction("/sys/user/delete",params);
// const deleteUserList = (params)=>deleteAction("/sys/user/deleteBatch",params);
const frozenBatch = (params)=>putAction("/sys/user/frozenBatch",params);
//验证用户是否存在
const checkOnlyUser = (params)=>getAction("/sys/user/checkOnlyUser",params);
//改变密码
const changePassword = (params)=>putAction("/sys/user/changePassword",params);

//权限管理
const addPermission= (params)=>postAction("/sys/permission/add",params);
const editPermission= (params)=>putAction("/sys/permission/edit",params);
const getPermissionList = (params)=>getAction("/sys/permission/list",params);
/*update_begin author:wuxianquan date:20190908 for:添加查询一级菜单和子菜单查询api */
const getSystemMenuList = (params)=>getAction("/sys/permission/getSystemMenuList",params);
const getSystemSubmenu = (params)=>getAction("/sys/permission/getSystemSubmenu",params);
const getSystemSubmenuBatch = (params) => getAction('/sys/permission/getSystemSubmenuBatch', params)
/*update_end author:wuxianquan date:20190908 for:添加查询一级菜单和子菜单查询api */

// const deletePermission = (params)=>deleteAction("/sys/permission/delete",params);
// const deletePermissionList = (params)=>deleteAction("/sys/permission/deleteBatch",params);
const queryTreeList = (params)=>getAction("/sys/permission/queryTreeList",params);
const queryTreeListForRole = (params)=>getAction("/sys/role/queryTreeList",params);
const queryListAsync = (params)=>getAction("/sys/permission/queryListAsync",params);
const queryRolePermission = (params)=>getAction("/sys/permission/queryRolePermission",params);
const saveRolePermission = (params)=>postAction("/sys/permission/saveRolePermission",params);
//const queryPermissionsByUser = (params)=>getAction("/sys/permission/queryByUser",params);
const queryPermissionsByUser = ()=>getAction("/sys/permission/getUserPermissionByToken");
const loadAllRoleIds = (params)=>getAction("/sys/permission/loadAllRoleIds",params);
const getPermissionRuleList = (params)=>getAction("/sys/permission/getPermRuleListByPermId",params);
const queryPermissionRule = (params)=>getAction("/sys/permission/queryPermissionRule",params);

// 部门管理
const queryDepartTreeList = (params)=>getAction("/sys/sysDepart/queryTreeList",params);
const queryIdTree = (params)=>getAction("/sys/sysDepart/queryIdTree",params);
const queryParentName   = (params)=>getAction("/sys/sysDepart/queryParentName",params);
const searchByKeywords   = (params)=>getAction("/sys/sysDepart/searchBy",params);
const deleteByDepartId   = (params)=>deleteAction("/sys/sysDepart/delete",params);

//二级部门管理
const queryDepartPermission = (params)=>getAction("/sys/permission/queryDepartPermission",params);
const saveDepartPermission = (params)=>postAction("/sys/permission/saveDepartPermission",params);
const queryTreeListForDeptRole = (params)=>getAction("/sys/sysDepartPermission/queryTreeListForDeptRole",params);
const queryDeptRolePermission = (params)=>getAction("/sys/sysDepartPermission/queryDeptRolePermission",params);
const saveDeptRolePermission = (params)=>postAction("/sys/sysDepartPermission/saveDeptRolePermission",params);
const queryMyDepartTreeList = (params)=>getAction("/sys/sysDepart/queryMyDeptTreeList",params);

//日志管理
//const getLogList = (params)=>getAction("/sys/log/list",params);
const deleteLog = (params)=>deleteAction("/sys/log/delete",params);
const deleteLogList = (params)=>deleteAction("/sys/log/deleteBatch",params);

//数据字典
const addDict = (params)=>postAction("/sys/dict/add",params);
const editDict = (params)=>putAction("/sys/dict/edit",params);
//const getDictList = (params)=>getAction("/sys/dict/list",params);
const treeList = (params)=>getAction("/sys/dict/treeList",params);
// const delDict = (params)=>deleteAction("/sys/dict/delete",params);
//const getDictItemList = (params)=>getAction("/sys/dictItem/list",params);
const addDictItem = (params)=>postAction("/sys/dictItem/add",params);
const editDictItem = (params)=>putAction("/sys/dictItem/edit",params);
//const delDictItem = (params)=>deleteAction("/sys/dictItem/delete",params);
//const delDictItemList = (params)=>deleteAction("/sys/dictItem/deleteBatch",params);

// 设备管理
const getSystemCategoryList = (params)=>getAction("/deviceCategory/listDeviceCategoryTree",params);
const addSystemCategory = (params)=>postAction("/deviceCategory/save",params);
const editSystemCategory = (params)=>postAction("/deviceCategory/edit",params);
const getFunctionalCategoryList = (params)=>getAction("/deviceFunctionCategory/listDeviceFunctionCategoryTree",params);
const getFunctionalCategoryListNew = (params)=>getAction("/deviceFunctionCategory/listDeviceFunctionCategoryTreeNew",params);
const addFunctionalCategory = (params)=>postAction("/deviceFunctionCategory/save",params);
const editFunctionalCategory = (params)=>postAction("/deviceFunctionCategory/edit",params);
const getSiteCategoryList = (params)=>getAction("/deviceSiteCategory/listDeviceSiteCategoryTree",params);
const addSiteCategory = (params)=>postAction("/deviceSiteCategory/save",params);
const editSiteCategory = (params)=>postAction("/deviceSiteCategory/edit",params);

//虚拟属性
const  dapPointVirtualCheck= (params)=>getAction("/dapPointVirtual/listPointVirtualPage",params);
const  addDapPointVirtual= (params)=>postAction("/dapPointVirtual/saveVirtual",params);
const  delDapPointVirtual= (params)=>deleteAction("/dapPointVirtual/delVirtual",params);

//字典标签专用（通过code获取字典数组）
export const ajaxGetDictItems = (code, params)=>getAction(`/sys/dict/getDictItems/${code}`,params);
//从缓存中获取字典配置
function getDictItemsFromCache(dictCode) {
  if (Vue.ls.get(UI_CACHE_DB_DICT_DATA) && Vue.ls.get(UI_CACHE_DB_DICT_DATA)[dictCode]) {
    let dictItems = Vue.ls.get(UI_CACHE_DB_DICT_DATA)[dictCode];
    return dictItems;
  }
}

//系统通告
const doReleaseData = (params)=>getAction("/sys/annountCement/doReleaseData",params);
const doReovkeData = (params)=>getAction("/sys/annountCement/doReovkeData",params);
//获取系统访问量
const getLoginfo = (params)=>getAction("/sys/loginfo",params);
const getVisitInfo = (params)=>getAction("/sys/visitInfo",params);
//数据日志访问
// const getDataLogList = (params)=>getAction("/sys/dataLog/list",params);

// 根据部门主键查询用户信息
const queryUserByDepId = (params)=>getAction("/sys/user/queryUserByDepId",params);

// 查询用户角色表里的所有信息
// const queryUserRoleMap = (params)=>getAction("/sys/user/queryUserRoleMap",params);
// 重复校验
const duplicateCheck = (params)=>getAction("/sys/duplicate/check",params);
// 加载分类字典
const loadCategoryData = (params)=>getAction("/sys/category/loadAllData",params);
const checkRuleByCode = (params) => getAction('/sys/checkRule/checkByCode', params)
//加载站点信息
const getSiteInfo= (params)=>getAction("/eoa/cms/eoaCmsSite/getSiteInfo",params);
//加载我的计划信息
const getPlanInfo= (params)=>getAction("/eoa/plan/queryMyCreationByDate",params);
//加载我的通告信息
const getUserNoticeInfo= (params)=>getAction("/sys/sysAnnouncementSend/getMyAnnouncementSend",params);
//查询图表数据
const getChartData= (params)=>getAction("/joa/dataStatistics/getChartDate",params);
const getPieData= (params)=>getAction("/joa/dataStatistics/getPieDate",params);
const getTransitURL = url => `/sys/common/transitRESTful?url=${encodeURIComponent(url)}`
// 中转HTTP请求
export const transitRESTful = {
  get: (url, parameter) => getAction(getTransitURL(url), parameter),
  post: (url, parameter) => postAction(getTransitURL(url), parameter),
  put: (url, parameter) => putAction(getTransitURL(url), parameter),
  http: (url, parameter) => httpAction(getTransitURL(url), parameter),
}
//查询会议室
const getMettingRoomList = (params)=>getAction("/eoa/metting/eoaMettingRoom/list",params);

// 文件上传
const uploadFile = (params)=>postAction("/sys/common/upload",params);
// 通讯管理-编辑
const saveCommunication = (params)=>postAction("/daqCommunication/saveCommunication",params);
// 属性列表（点位管理）-编辑
const savePoint = (params)=>postAction("/daqPoint/savePoint",params);
// 通讯管理-主健查询
const getCommunicationById = (params)=>getAction("/daqCommunication/getCommunicationById",params);
// 通讯管理-下拉列表
const selectCommunication = (params)=>getAction("/daqCommunication/selectCommunication",params);
// 属性列表（点位管理）-主键查询
const getPointById = (params)=>getAction("/daqPoint/getPointById",params);
// 属性列表（点位管理）- 导入
const importExcelPoint = (params)=>postAction("/daqPoint/importExcelPoint",params);
// 属性列表（点位管理）- 导入点位翻译
const importExcelPoint2 = (params)=>postAction("/daqPoint/importExcelDaqPointTranslate",params);
// 属性列表（点位管理）- 导出
const exportPointList = (params)=>getAction("/daqPoint/exportPointList",params);
// 点位管理-发送网关
const sendPointJsonToGateway = (params)=>postAction("/daqPoint/sendPointJsonToGateway",params);

// 图表管理-图表配置信息-通过字符串模糊查询
const searchPoint = (params) => getAction("/tschart/tsChartConfig/searchPoint", params);
// 图表展示
const groupTsChartConfigByTag = (params) => getAction("/tschart/tsChartConfig/groupTsChartConfigByTag", params);
// 图表管理-图表配置信息-编辑
const saveTsChartConfig = (params)=>postAction("/tschart/tsChartConfig/save",params);
// 图表管理-图表配置信息-通过id查询
const tsChartConfigQueryById = (params) => getAction("/tschart/tsChartConfig/queryById", params);

// 图表管理-已有的全部tag查询
const listChartTags = (params) => getAction("/tschart/tsChartConfig/listChartTags", params);
// 深总院项目: 功能分类-设备列表弹窗
const listDeviceBySiteAndFunction = (params) => getAction("/deviceFunctionCategory/listDeviceByFunction", params);
// 深总院项目: 建筑用能-数据流向图
const spaceSankey = (params) => getAction("/space/sankey", params);
//位置树-设备列表弹窗
const listDeviceSiteTreeWithDevice = (params) => getAction("/deviceSiteCategory/listDeviceSiteTreeWithDeviceByFunctionCategoryCode", params);
// 区域用能管理-区域用能概况
const areaEnergyOverview = (params) => getAction("/space/areaEnergyOverview", params);
// 区域用能管理-区域用能概况-能碳分布
const queryRegionEnergyCarbon = (params) => getAction("/space/queryRegionEnergyCarbon", params);
// 区域用能管理-区域用能概况-用水分布
const queryRegionEnergyWater = (params) => getAction("/space/queryRegionEnergyWater", params);
//能耗统计-区域用能概况-用能分布
const queryRegionEnergyCoal = (params) => getAction("/space/queryRegionEnergyCoal", params);

// 超标报警数据设置-表单查询
const queryCarbonWarnConfig = (params) => getAction("/energyCarbonWarnConfig/queryCarbonWarnConfig", params);
// 超标报警数据设置-修改
const updateCarbonWarnConfig = (params) => postAction("/energyCarbonWarnConfig/updateCarbonWarnConfig", params);

//能耗统计图接口
const energyDeviceView = (params) => getAction("/space/energyDeviceView", params);
//总量阈值接口
///添加或修改 
const saveThresholdTotal = (params) => postAction("/thresholdTotal/saveThresholdTotal", params);
//查询阈值
const queryThresholdTotal = (params) => getAction("/thresholdTotal/queryThresholdTotal", params);

// 碳预测
const carbonForecast = (params) => getAction("/carbon/carbonForecast", params);
// 碳告警
const carbonWarn = (params) => getAction("/carbon/carbonWarn", params);

// 物理区域管理
const addRegionCategory = (params)=>postAction("/system/sysRealRegion/saveRealRegion",params);
const editRegionCategory = (params)=>postAction("/system/sysRealRegion/editRealRegion",params);
const getRegionList = (params)=>getAction("/system/sysRealRegion/listRealRegionTree",params);
const getSiteList = (params)=>getAction("/deviceSiteCategory/listDeviceSiteCategoryTree",params);

// 获取类型下一级分类
const getClassNextlevel = (params)=>getAction("/deviceFunctionCategory/listDeviceFunctionCategorySubbranch",params);

const categorySubbranch = (params)=>getAction("/deviceFunctionCategory/listDeviceFunctionCategorySubbranch",params);


export {
  // imgView,
  // doMian,
  addRole,
  categorySubbranch,
  editRole,
  checkRoleCode,
  addUser,
  editUser,
  queryUserRole,
  getUserList,
  queryall,
  frozenBatch,
  checkOnlyUser,
  changePassword,
  getPermissionList,
  addPermission,
  editPermission,
  queryTreeList,
  queryListAsync,
  queryRolePermission,
  saveRolePermission,
  queryPermissionsByUser,
  loadAllRoleIds,
  getPermissionRuleList,
  queryPermissionRule,
  queryDepartTreeList,
  queryIdTree,
  queryParentName,
  searchByKeywords,
  deleteByDepartId,
  deleteLog,
  deleteLogList,
  addDict,
  editDict,
  treeList,
  addDictItem,
  editDictItem,
  doReleaseData,
  doReovkeData,
  getLoginfo,
  getVisitInfo,
  queryUserByDepId,
  duplicateCheck,
  queryTreeListForRole,
  getSystemMenuList,
  getSystemSubmenu,
  getSystemSubmenuBatch,
  loadCategoryData,
  checkRuleByCode,
  queryDepartPermission,
  saveDepartPermission,
  queryTreeListForDeptRole,
  queryDeptRolePermission,
  saveDeptRolePermission,
  queryMyDepartTreeList,
  getSiteInfo,
  getUserNoticeInfo,
  getPlanInfo,
  getChartData,
  getPieData,
  dapPointVirtualCheck,
  addDapPointVirtual,
  delDapPointVirtual,
  getMettingRoomList,
  getDictItemsFromCache,
  getSystemCategoryList,
  addSystemCategory,
  editSystemCategory,
  getFunctionalCategoryList,
  getFunctionalCategoryListNew,
  addFunctionalCategory,
  editFunctionalCategory,
  getSiteCategoryList,
  addSiteCategory,
  editSiteCategory,
  uploadFile,
  saveCommunication,
  getCommunicationById,
  selectCommunication,
  getPointById,
  savePoint,
  importExcelPoint,
  importExcelPoint2,
  exportPointList,
  sendPointJsonToGateway,
  searchPoint,
  groupTsChartConfigByTag,
  saveTsChartConfig,
  tsChartConfigQueryById,
  listChartTags,
  listDeviceBySiteAndFunction,
  spaceSankey,
  listDeviceSiteTreeWithDevice,
  areaEnergyOverview,
  queryRegionEnergyCarbon,
  queryRegionEnergyCoal,
  queryCarbonWarnConfig,
  updateCarbonWarnConfig,
  energyDeviceView,
  saveThresholdTotal,
  queryThresholdTotal,
  carbonForecast,
  carbonWarn,
  queryRegionEnergyWater,
  addRegionCategory,
  editRegionCategory,
  getRegionList,
  getSiteList,
  getClassNextlevel,
}


