/**
 * Created by tomihei on 17/03/24.
 */
import * as AppType from "../constants/App";

export function bookmarkListInit() {
  return {
    type:AppType.BOOKMARK_LIST_INIT,
  }
}

export function bookmarkListRequest(id,page) {
  return {
    type: AppType.BOOKMARK_LIST_REQUEST,
    id:id,
    page: page
  }
}

export function bookmarkListResult(data) {
  return {
    type: AppType.BOOKMARK_LIST_RESULT,
    data: data
  }
}

export function bookmarkListLastPage() {
  return {
    type: AppType.BOOKMARK_LIST_LAST_PAGE,
  }
}

