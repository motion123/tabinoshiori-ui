/**
 * Created by tomihei on 17/05/18.
 */
import { call, put, fork} from 'redux-saga/effects'
import * as FetchFollow from '../ajax/video';
import * as DeFollow from '../ajax/delete';
import {followResult,defollowResult,defollowUserResult,
  requestFailed,isFollowBoardResult,isFollowUserResult,
  initFollowList,followListResult,lastPage
} from '../actions/follow';
import {followerListResult,lastPagee} from '../actions/follower';
import {followeeListResult,lastPager} from '../actions/followee';
import {openSnackbar} from '../actions/snacbar';
import * as URL from '../constants/AjaxUrl';

export function* followBoardInfo(action) {
  const url = URL.FOLLOW_INFO_BOARD + action.id;
  const {response,error} = yield call(FetchFollow.get,0,url);
  if(error){
    yield put(requestFailed());
  } else if(response.data.success){
    yield put(isFollowBoardResult(response.data));
  }
}

export function* followUserInfo(action) {
  const url = URL.FOLLOW_INFO_USER + action.id;
  const {response,error} = yield call(FetchFollow.get,0,url);
  if(error){
    yield put(requestFailed());
  } else if(response.data.success){
    yield put(isFollowUserResult(response.data));
  }
}

export function* follow(action) {
  const {response,error} = yield call(FetchFollow.add,action.data,URL.FOLLOW);
  if(error){
    yield put(requestFailed());
    yield put(openSnackbar("フォローに失敗しました"));
  } else if(response.data.success){
    yield put(followResult(response.data.board));
    yield put(openSnackbar("フォローしました"));
  }
}

export function* deFollow (action) {
  const url = URL.DEFOLLOW + action.data;
  const {response,error} = yield call(DeFollow.deleteData,url);
  if(error){
    yield put(requestFailed());
    yield put(openSnackbar("フォロー解除に失敗しました"));
  } else if(response.data.success){
    yield put(defollowResult(action.data));
    yield put(openSnackbar("フォロー解除しました"));
  }
}

export function* deFollowUser (action) {
  const url = URL.DEFOLLOW_USER + action.data;
  const {response,error} = yield call(DeFollow.deleteData,url);
  if(error){
    yield put(requestFailed());
    yield put(openSnackbar("フォロー解除に失敗しました"));
  } else if(response.data.success){
    yield put(defollowUserResult(action.data));
    yield put(openSnackbar("フォロー解除しました"));
  }
}

export function* followList(action) {
  let url = action.url;
  const {response} = yield call(FetchFollow.get, action.page,url);
  if(response.data.success) {
    yield put(followListResult(response.data));
    if(response.data.currentPage == response.data.pageCount) {
      yield put(lastPage());
    }
  }else {
    yield put(openSnackbar("フォローリストの取得に失敗")); //修正
  }
}


export function* followerList(action) {
  let url = action.url;
  const {response} = yield call(FetchFollow.get, action.page,url);
  if(response.data.success) {
    yield put(followerListResult(response.data));
    if(response.data.currentPage == response.data.pageCount) {
      yield put(lastPager());
    }
  }else {
    yield put(openSnackbar("フォローリストの取得に失敗")); //修正
  }
}


export function* followeeList(action) {
  let url = action.url;
  const {response} = yield call(FetchFollow.get, action.page,url);
  if(response.data.success) {
    yield put(followeeListResult(response.data));
    if(response.data.currentPage == response.data.pageCount) {
      yield put(lastPagee());
    }
  }else {
    yield put(openSnackbar("フォローリストの取得に失敗")); //修正
  }
}
