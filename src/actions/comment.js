/**
 * Created by tomihei on 17/04/05.
 */
import * as AppType from '../constants/App';

export function initComment() {
  return{
    type: AppType.INIT_COMMENT_LIST,
  }
}

export function postRequest(data) {
  return{
    type: AppType.COMMENT_POST_REQUEST,
    data: data,
  }
}

export function postResult(data) {
  return{
    type: AppType.COMMENT_POST_RESULT,
    data:data,
  }
}

export function postFailed() {
  return {
    type: AppType.COMMENT_POST_FAILED,
  }
}

export function listRequet(id,page) {
  return {
    type: AppType.COMMENT_LIST_REQUEST,
    id: id,
    page: page,
  }
}

export function listResult(data) {
  return {
    type: AppType.COMMENT_LIST_RESULT,
    data: data,
  }
}

export function listRequestFailed() {
  return {
    type: AppType.COMMENT_LIST_FAILED,
  }
}

export function lastPage() {
  return {
    type: AppType.COMMENT_LIST_LAST_PAGE,
  }
}

export function changeComment(comment) {
  return {
    type: AppType.CHANGE_COMMENT,
    comment: comment,
  }
}

export function openComment(id) {
  return {
    type: AppType.RES_COMMENT_OPEN,
    id:id,
  }
}export function closeComment() {
  return {
    type: AppType.RES_COMMENT_CLOSE,
  }
}
