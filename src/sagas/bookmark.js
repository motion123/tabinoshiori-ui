/**
 * Created by tomino on 18/05/10.
 */
import { call, put, fork} from 'redux-saga/effects'
import * as FetchBookmark from '../ajax/video';
import {createBookmarkResult, createBookmarkFaild} from '../actions/bookmark';
import * as URL from '../constants/AjaxUrl';


export function* postCreateBookmark(action) {
  let url = URL.CBR;
  const {response} = yield call(FetchBookmark.add, action.data,url);
  if(response.data.success) {
    yield put(createBookmarkResult());
  }else {
    yield fork(errorMessage,response.data.error.errors); //修正
  }
}

function* errorMessage(error){
  const message = {
    title: error.title ? error.title.message : "",
    description: error.description ? error.description.message : "",
  };
  yield put(createBookmarkFaild(message));
}
