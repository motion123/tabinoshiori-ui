/**
 * Created by tomino on 17/02/21.
 */
import { takeEvery } from 'redux-saga/effects'
import * as AppType from '../constants/App';
import * as User from './user';
import * as Bookmark from './bookmark';
import * as Delete from './delete';
import * as Comment from './comment';
import * as Follow from './follow';
import * as Search from './search';

export default function* rootSaga() {
  yield takeEvery(AppType.AUTH_REQUEST, User.isTokenPrepare);
  yield takeEvery(AppType.LOGIN_INFO_REQUEST, User.fetchUserLogin);
  yield takeEvery(AppType.LOGOUT, User.onLogout);

  yield takeEvery(AppType.CBRE, Bookmark.postCreateBookmark);

  yield takeEvery(AppType.DELETE_DATA_REQUEST,Delete.deleteData);
  yield takeEvery(AppType.COMMENT_LIST_REQUEST,Comment.fetchCommentList);
  yield takeEvery(AppType.COMMENT_POST_REQUEST,Comment.postComment);
  yield takeEvery(AppType.FOLLOW_REQUEST,Follow.follow);
  yield takeEvery(AppType.DEFOLLOW_REQUEST,Follow.deFollow);
  yield takeEvery(AppType.DEFOLLOW_USER_REQUEST,Follow.deFollowUser);
  yield takeEvery(AppType.ISFOLLOW_USER_REQUEST,Follow.followUserInfo);
  yield takeEvery(AppType.ISFOLLOW_BOARD_REQUEST,Follow.followBoardInfo);
  yield takeEvery(AppType.FOLLOW_LIST_REQUEST,Follow.followList);
  yield takeEvery(AppType.FOLLOWER_LIST_REQUEST,Follow.followerList);
  yield takeEvery(AppType.FOLLOWEE_LIST_REQUEST,Follow.followeeList);
  yield takeEvery(AppType.SEARCH_LIST_REQUEST, Search.searchList);

}
