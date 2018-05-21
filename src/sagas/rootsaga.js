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
import * as UserPage from './userPage';

export default function* rootSaga() {
  yield takeEvery(AppType.AUTH_REQUEST, User.isTokenPrepare);
  yield takeEvery(AppType.LOGIN_INFO_REQUEST, User.fetchUserLogin);
  yield takeEvery(AppType.LOGOUT, User.onLogout);

  yield takeEvery(AppType.USER_PAGE_AUTH_REQUEST, UserPage.requestUserPageAuth);

  yield takeEvery(AppType.CBRE, Bookmark.postCreateBookmark);
  yield takeEvery(AppType.BIRE, Bookmark.getBookmarkInfo);
  yield takeEvery(AppType.BTIR, Bookmark.postChangeTripInfo);
  yield takeEvery(AppType.ADD_TRIP_INFO_REQUEST, Bookmark.postAddTripInfo);
  yield takeEvery(AppType.TRIP_INFO_EDIT_REQUEST, Bookmark.postEditTripInfo);
  yield takeEvery(AppType.TRIP_INFO_DELETE_REQUEST, Bookmark.deleteTripInfo);

  yield takeEvery(AppType.TRIP_IMAGE_UPDATE_REQUEST, Bookmark.uploadImage);

  yield takeEvery(AppType.ADD_PREMISSION_REQUEST, Bookmark.addPermission);
  yield takeEvery(AppType.DEL_PERMISSION_REQUEST, Bookmark.delPermission);

  yield takeEvery(AppType.BOOKMARK_LIST_REQUEST, UserPage.fetchBookmarkList);

  yield takeEvery(AppType.DELETE_DATA_REQUEST,Delete.deleteData);
  yield takeEvery(AppType.COMMENT_LIST_REQUEST,Comment.fetchCommentList);
  yield takeEvery(AppType.COMMENT_POST_REQUEST,Comment.postComment);
  yield takeEvery(AppType.FOLLOW_REQUEST,Follow.follow);
  yield takeEvery(AppType.DEFOLLOW_USER_REQUEST,Follow.deFollowUser);
  yield takeEvery(AppType.ISFOLLOW_USER_REQUEST,Follow.followUserInfo);
  yield takeEvery(AppType.FOLLOW_LIST_REQUEST,Follow.followList);
  yield takeEvery(AppType.FOLLOWER_LIST_REQUEST,Follow.followerList);
  yield takeEvery(AppType.FOLLOWEE_LIST_REQUEST,Follow.followeeList);
  yield takeEvery(AppType.SEARCH_LIST_REQUEST, Search.searchList);

}
