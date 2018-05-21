/**
 * Created by tomino on 18/05/10.
 */
import * as AppType from '../constants/App';

export function createBookmarkRequest(data) {
  return{
    type: AppType.CBRE,
    data: data,
  }
}

export function createBookmarkFaild(data){
  return{
    type: AppType.CBF,
    error:data,
  }
}

export function createBookmarkResult(data) {
  return{
    type: AppType.CBRS,
    data:data,
  }
}

export function changeBookmarkTitle(title) {
  return {
    type: AppType.CBT,
    title:title
  }
}

export function changeBookmarkDescription(desc) {
  return {
    type: AppType.CBD,
    desc: desc
  }
}

export function bookmarkInfoRequest(data) {
  return {
    type: AppType.BIRE,
    data:data
  }
}

export function bookmarkInfoResult(data){
  return{
    type: AppType.BIRS,
    data:data
  }
}


export function bookmarkInfoRequestFaild() {
  return{
    type: AppType.BIRF
  }
}


export function bookmarkTripInfoExchange(aId,bId){
  return{
    type: AppType.BTIE,
    aId: aId,
    bId: bId
  }
}

export function requestChangeTripInfo(trip_info){
  return{
    type: AppType.BTIR,
    data: trip_info
  }
}

export function tripInfoAdd(data){
  return{
    type:AppType.TRIP_INFO_RESULT,
    data:data
  }
}

export function requestAddTripInfo(data) {
  return{
    type: AppType.ADD_TRIP_INFO_REQUEST,
    data: data
  }
}

export function resultAddTripInfo() {
  return{
    type: AppType.ADD_TRIP_INFO_RESULT,
  }
}


export function changeLat(data) {
  return{
    type:AppType.CHANGE_LAT,
    data:data
  }
}


export function changeLng(data) {
  return{
    type:AppType.CHANGE_LNG,
    data:data
  }
}

export function changeTripInfoDesc(data){
  return{
    type:AppType.CHANGE_TRIP_INFO_DESC,
    data:data
  }
}

export function changeSiteName(data) {
  return{
    type:AppType.CHANGE_SITE_NAME,
    data:data
  }
}

export function openDialog(){
  return{
    type:AppType.TRIP_OPEN_DIALOG,
  }
}

export function closeDialog(){
  return{
    type:AppType.TRIP_CLOSE_DIALOG,
  }
}


export function failedAddPermission(data) {
  return{
    type:AppType.ADD_PERMISSION_FAILED,
    data:data
  }
}


export function resultAddPermission(data) {
  return{
    type:AppType.ADD_PERMISSION_RESULT,
    data:data
  }
}

export function requestAddPermission(data){
  return{
    type:AppType.ADD_PREMISSION_REQUEST,
    data:data
  }
}

export function changeUserName(data) {
  return{
    type:AppType.CHANGE_USER_NAME,
    data:data
  }
}

export function openAddPerDialog(){
  return{
    type:AppType.ADD_PREMISSION_DIALOG_OPEN,
  }
}

export function closeAddPerDialog(){
  return{
    type:AppType.ADD_PERMISSION_DIALOG_CLOSE,
  }
}

export function failedDelPermission(data) {
  return{
    type:AppType.DEL_PERMISSION_FAILED,
    data:data
  }
}

export function resultDelPermission(data) {
  return{
    type:AppType.DEL_PERMISSION_RESULT,
    data:data
  }
}

export function requestDelPermission(bookmark_id,user_id){
  return{
    type:AppType.DEL_PERMISSION_REQUEST,
    bookmark_id:bookmark_id,
    user_id:user_id
  }
}

export function openDelPerDialog(){
  return{
    type:AppType.DEL_PERMISSION_DIALOG_OPEN,
  }
}

export function closeDelPerDialog(){
  return{
    type:AppType.DEL_PERMISSION_DIALOG_CLOSE,
  }
}
