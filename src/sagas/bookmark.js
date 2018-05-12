/**
 * Created by tomino on 18/05/10.
 */
import { call, put, fork} from 'redux-saga/effects'
import { push } from 'react-router-redux';
import * as getBookmark from '../ajax/user';
import * as FetchBookmark from '../ajax/video';
import {createBookmarkResult, createBookmarkFaild
        ,bookmarkInfoResult,bookmarkInfoRequestFaild
        ,tripInfoAdd} from '../actions/bookmark';
import * as URL from '../constants/AjaxUrl';


export function* postCreateBookmark(action) {
  let url = URL.CBR;
  const {response} = yield call(FetchBookmark.add, action.data,url);
  if(response.data.success) {
    yield put(createBookmarkResult());
    yield put(push('/bookmark/'+ response.bookmark._id));
  }else {
    yield fork(errorMessage,response.data.error.errors); //修正
  }
}

export function* getBookmarkInfo(action) {
  let url = URL.BOOKMARK + action.data;
  const {response} = yield call(getBookmark.get,url);
  if(response.data.success) {
    yield put(bookmarkInfoResult(response.data.bookmark));
  }else {
    yield put(bookmarkInfoRequestFaild());
  }
}

// あとで変更しましょう
export function* postChangeTripInfo(action) {
  let url = URL.CHANGE_TRIP_INFO;
  const {response} = yield call(FetchBookmark.add, action.data,url);
  if(response.data.success){
    console.log("変更");
    //後で変えよう
  }else {
    console.log("失敗");
  }
}

function* errorMessage(error){
  const message = {
    title: error.title ? error.title.message : "",
    description: error.description ? error.description.message : "",
  };
  yield put(createBookmarkFaild(message));
}

//atode
export function* postAddTripInfo(action) {
  let url = URL.ADD_TRIP_INFO;
  const {response} = yield call(FetchBookmark.add,action.data,url);
  if(response.data.success) {
    console.log("追加成功");
    yield put(tripInfoAdd(response.data.info));
  }else {
    console.log("追加失敗")
  }
}
