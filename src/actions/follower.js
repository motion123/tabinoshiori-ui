/**
 * Created by tomihei on 17/06/07.
 */
import * as AppType from '../constants/App';

export function followerListRequest(url,page){
  return{
    type: AppType.FOLLOWER_LIST_REQUEST,
    url: url,
    page:page,
  }
}

export function followerListResult(data){
  return {
    type: AppType.FOLLOWER_LIST_RESULT,
    data:data,
  }
}

export function initFollowerList(){
  return{
    type: AppType.INIT_FOLLOWER_LIST,
  }
}

export function lastPagee() {
  return{
    type: AppType.FOLLOWER_LIST_LAST_PAGE,
  }
}

export function followerListOpen() {
  return {
    type:AppType.FOLLOWER_LIST_OPEN,
  }
}

export function followerListClose() {
  return {
    type:AppType.FOLLOWER_LIST_CLOSE,
  }
}
