/**
 * Created by tomihei on 17/05/18.
 */
import * as AppType from '../constants/App';

export function followRequest(data) {
  return {
    type: AppType.FOLLOW_REQUEST,
    data: data,
  }
}

export function defollowRequest(data){
  return {
    type: AppType.DEFOLLOW_REQUEST,
    data: data
  }
}

export function defollowUserRequest(data){
  return{
    type: AppType.DEFOLLOW_USER_REQUEST,
    data: data
  }
}
export function followResult(data) {
  return {
    type: AppType.FOLLOW_RESULT,
    data:data,
  }
}

export function defollowResult(data) {
  return {
    type: AppType.DEFOLLOW_RESULT,
    data:data,
  }
}

export function defollowUserResult(data) {
  return{
    type: AppType.DEFOLLOW_USER_RESULT,
    data:data,
  }
}

export function requestFailed() {
  return{
    type: AppType.FOLLOW_REQUEST_FAILED,
  }
}

export function isFollowBoardRequest(id) {
  return{
    type: AppType.ISFOLLOW_BOARD_REQUEST,
    id:id
  }
}

export function isFollowBoardResult(data) {
  return{
    type: AppType.ISFOLLOW_BOARD_RESULT,
    data: data
  }
}

export function isFollowUserRequest(id) {
  return{
    type: AppType.ISFOLLOW_USER_REQUEST,
    id:id
  }
}

export function isFollowUserResult(data) {
  return{
    type: AppType.ISFOLLOW_USER_RESULT,
    data: data
  }
}

export function followListRequest(url,page){
  return{
    type: AppType.FOLLOW_LIST_REQUEST,
    url: url,
    page:page,
  }
}

export function followListResult(data){
  return {
    type: AppType.FOLLOW_LIST_RESULT,
    data:data,
  }
}

export function initFollowList(){
  return{
    type: AppType.INIT_FOLLOW_LIST,
  }
}

export function lastPage() {
  return{
    type: AppType.FOLLOW_LIST_LAST_PAGE,
  }
}

export function followListOpen() {
  return {
    type:AppType.FOLLOW_LIST_OPEN,
  }
}

export function followListClose() {
  return {
    type:AppType.FOLlOW_LIST_CLOSE,
  }
}

