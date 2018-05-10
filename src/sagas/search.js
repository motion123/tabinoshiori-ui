/**
 * Created by tomihei on 17/06/21.
 */
import { call, put, fork} from 'redux-saga/effects'
import * as FetchFollow from '../ajax/video';
import {searchListResult,lastPage} from '../actions/search';
import {openSnackbar} from '../actions/snacbar';
import * as URL from '../constants/AjaxUrl';


export function* searchList(action) {
  let url = URL.SEARCH_VIDEO + action.word;
  const {response,error} = yield call(FetchFollow.get, action.page,url);
  if(error){
    yield put(openSnackbar("検索に失敗")); //修正
  } else if(response.data.success) {
    yield put(searchListResult(response.data));
    if(response.data.currentPage == response.data.pageCount) {
      yield put(lastPage());
    }
  }else {
    yield put(openSnackbar("検索に失敗")); //修正
  }
}
