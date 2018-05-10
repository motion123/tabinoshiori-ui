/**
 * Created by tomihei on 17/06/11.
 */
import * as AppType from '../constants/App';

export function followeeListRequest(url,page){
  return{
    type: AppType.FOLLOWEE_LIST_REQUEST,
    url: url,
    page:page,
  }
}

export function followeeListResult(data){
  return {
    type: AppType.FOLLOWEE_LIST_RESULT,
    data:data,
  }
}

export function initFolloweeList(){
  return{
    type: AppType.INIT_FOLLOWEE_LIST,
  }
}

export function lastPager() {
  return{
    type: AppType.FOLLOWEE_LIST_LAST_PAGE,
  }
}

export function followeeListOpen() {
  return {
    type:AppType.FOLLOWEE_LIST_OPEN,
  }
}

export function followeeListClose() {
  return {
    type:AppType.FOLLOWEE_LIST_CLOSE,
  }
}
