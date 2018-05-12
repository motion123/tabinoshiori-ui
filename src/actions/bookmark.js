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
