/**
 * Created by tomihei on 17/02/11.
 */

import { combineReducers } from 'redux';
import loginFormInput from './login/loginform';
import loginInfo from './login/loginrequest';
import app from './app';
import createBookmark from './Bookmark/createBookmark';
import snackbar from './addVideo/snacbar';
import deleteData from './delete/daleteData';
import comment from './comment/comment';
import follow from './follow/follow';
import followList from './follow/followList';
import followerList from './follow/followerList';
import followeeList from './follow/followeeList';
import animation from './Animation/animation';
import search from './search/search';
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  loginFormInput,
  loginInfo,
  app,
  createBookmark,
  snackbar,
  deleteData,
  comment,
  follow,
  followList,
  animation,
  followerList,
  followeeList,
  search,
  routing: routerReducer
});

export default rootReducer;
