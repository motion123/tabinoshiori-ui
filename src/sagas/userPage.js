/**
 * Created by tomino on 17/03/14.
 */
import { call, put} from 'redux-saga/effects'
import * as Rest from '../ajax/rest';
import {userAuthResult} from '../actions/userPage';
import {bookmarkListLastPage,bookmarkListResult} from '../actions/bookmarkList';
import * as URL from '../constants/AjaxUrl';

export function* requestUserPageAuth (action) {
  let url = URL.USER_PAGE_REQUEST + action.id;
  const {response} = yield call(Rest.get,url);
  if(response.data.success){
    yield put(userAuthResult(response.data));
  }else {
    yield put(userAuthResult(null));
  }
}


export function* fetchBookmarkList(action) {
  let url = URL.BOOKMARK_LIST + "/" + action.id;
  const {response} = yield call(Rest.getPage, action.page,url);
  if(response.data.success) {
    yield put(bookmarkListResult(response.data));
    if(response.data.currentPage == response.data.pageCount) {
      yield put(bookmarkListLastPage());
    }
  }else {
    yield put(bookmarkListResult()); //修正
  }
}
