/**
 * Created by tomino on 18/05/10.
 */
import { call, put, fork} from 'redux-saga/effects'
import { push } from 'react-router-redux';
import * as Rest from '../ajax/rest';
import * as Image from '../ajax/imgur';
import {createBookmarkResult, createBookmarkFaild
        ,bookmarkInfoResult,bookmarkInfoRequestFaild
        ,tripInfoAdd,resultAddTripInfo,closeDialog
        ,resultAddPermission,failedAddPermission,
          resultDelPermission,failedDelPermission} from '../actions/bookmark';
import {requestEditTripInfo,resultEditTripInfo,requestDeleteTripInfo,
  resultDeleteTripInfo,failedDeleteTripInfo,failedEditTripInfo,
  requestImageUpdate,resultImageUpdate,failedImageUpdate} from '../actions/tripinfo';
import {openSnackbar} from '../actions/snacbar';
import * as URL from '../constants/AjaxUrl';


export function* postCreateBookmark(action) {
  let url = URL.CBR;
  const {response} = yield call(Rest.post, action.data,url);
  if(response.data.success) {
    yield put(createBookmarkResult());
    yield put(push('/bookmark/'+ response.data.bookmark._id));
  }else {
    yield fork(errorMessage,response.data.error.errors); //修正
  }
}

export function* getBookmarkInfo(action) {
  let url = URL.BOOKMARK + action.data;
  const {response,error} = yield call(Rest.get,url);
  if(response) {
    yield put(bookmarkInfoResult(response.data.bookmark));
  }else if(error.response) {
    yield put(bookmarkInfoRequestFaild());
  }
}

// あとで変更しましょう
export function* postChangeTripInfo(action) {
  let url = URL.CHANGE_TRIP_INFO;
  const {response,error} = yield call(Rest.put, action.data,url);
  if(response){
    //後で変えよう
  }else if(error) {
    yield put(openSnackbar(error.response.data.message))
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
  const {response,error} = yield call(Rest.post,action.data,url);
  if(response) {
    console.log("追加成功");
    yield put(resultAddTripInfo());
    yield put(tripInfoAdd(response.data.info));
    yield put(closeDialog());
  }else if(error.response){
    console.log("追加失敗")
  }
}


export function* postEditTripInfo(action){
  let url = URL.EDIT_TRIP_INFO;
  const {response,error} = yield call(Rest.put,action.data,url);
  if(response.data.success){
    yield put(resultEditTripInfo(response.data.trip_info));
  }else if(error.response){
    //後でエラー内容表示するように修正
    yield put(failedEditTripInfo());
  }
}


export function* deleteTripInfo(action) {
  let url = URL.DELETE_TRIP_INFO + "/" + action.data.bookmark_id + "/" + action.data.info_id;
  const {response,error} = yield call(Rest.del,url);
  if(response){
    yield put (resultDeleteTripInfo(response.data.info_id))
  }else if(error.response){
    yield put(failedDeleteTripInfo());
    yield put(openSnackbar(error.response.data.message));
  }
}


export function* uploadImage(action) {
  const{response,error} = yield call(Image.post,action.data);
  if(response){
    let val = action.trip_info;
    val.thumbnail.small = response.data.data.link.replace('.jpg','m.jpg');
    val.thumbnail.medium = response.data.data.link.replace('.jpg','l.jpg');
    val.thumbnail.large = response.data.data.link.replace('.jpg','h.jpg');
    yield put(resultImageUpdate());
    yield put(requestEditTripInfo(val));
  }else if(error){
    yield put(failedImageUpdate());
    yield put(openSnackbar("画像の追加に失敗しました。"))
  }
}


export function* addPermission(action) {
  let url = URL.ADD_PERMISSION;
  const {response,error} = yield call(Rest.put,action.data,url);
  if(response){
    yield put(resultAddPermission(response.data.other_user))
  }else if(error.response){
    yield put(failedAddPermission(error.response.data.message))
  }
}


export function* delPermission(action) {
  let url = URL.ADD_PERMISSION + "/" + action.bookmark_id + "/" + action.user_id;
  const {response,error} = yield call(Rest.del,url);
  if(response){
    yield put(resultDelPermission(response.data.otherUser));
  }else if(error.response){
    yield put(failedDelPermission(error.response.data.message));
    yield put(openSnackbar(error.response.data.message));
  }
}
