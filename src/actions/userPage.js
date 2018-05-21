/**
 * Created by tomino on 17/03/14.
 */
import * as AppType from '../constants/App';

export function userAuthRequest(id) {
  return {
    type: AppType.USER_PAGE_AUTH_REQUEST,
    id: id,
  }
}

export function userAuthResult(data) {
  return {
    type: AppType.USER_PAGE_AUTH_RESULT,
    data: data
  }
}

export function userBoardRequest(id, page) {
  return {
    type: AppType.USER_PAGE_BOARD_REQUEST,
    id:id,
    page:page
  }
}

export function userBoardResult(data) {
  return {
    type: AppType.USER_PAGE_BOARD_RESULT,
    data:data,
  }
}

export function userBoardLastPage(){
  return {
    type: AppType.USER_PAGE_BOARD_LAST_PAGE,
  }
}
