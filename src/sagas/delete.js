/**
 * Created by tomihei on 17/04/03.
 */
import { call, put, fork} from 'redux-saga/effects'
import * as deleteReq from '../ajax/delete';
import {deleteDataFailed,closeDialog} from '../actions/deleteData'
import {openSnackbar} from '../actions/snacbar';

export function* deleteData (action) {
  const {response,error} = yield call(deleteReq.deleteData,action.url);
  if(error){
    yield fork(deleteDataFailed); //修正
    yield put(openSnackbar("削除に失敗しました"));
  } else if(response.data.success){
    let message = response.data.video.video_title + "を" + response.data.video.board_title + "から削除しました";
    yield put(closeDialog());
    yield put(openSnackbar(message));
  }else {
    yield put(closeDialog());
    yield put(openSnackbar("削除に失敗しました"));
  }
}
