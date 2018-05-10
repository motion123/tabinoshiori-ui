/**
 * Created by tomihei on 17/04/05.
 */
import { call, put, fork} from 'redux-saga/effects'
import * as FetchCommentList from '../ajax/video';
import {lastPage, listResult, postResult,initComment} from '../actions/comment';
import * as URL from '../constants/AjaxUrl';


export function* fetchCommentList(action) {
  let url = URL.COMMENT + action.id;
  const {response} = yield call(FetchCommentList.get, action.page,url);
  if(response.data.success) {
    yield put(listResult(response.data));
    if(response.data.currentPage == response.data.pageCount) {
      yield put(lastPage());
    }
  }else {
    yield put(listResult()); //修正
  }
}

export function* postComment(action) {
  let mediaUrl = URL.COMMENT + "new";
  const {response,error} = yield call(FetchCommentList.add,action.data,mediaUrl);
  if(error){
    yield put(postResult());
  }else if(response.data.success) {
    yield put(postResult(response.data));
    yield put(initComment());
  }else {
    yield put(postResult());

  }
}
