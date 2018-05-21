/**
 * Created by tomino on 17/02/21.
 */
import { call, put, fork} from 'redux-saga/effects'
import * as FetchUser from '../ajax/user';
import { push } from 'react-router-redux';
import {auth_result, auth_failed,tokenNotFound} from '../actions/app';
import {loginInfoResult, loginFailed} from '../actions/login';

export function* isTokenPrepare () {
  const token = localStorage.getItem("token");
  if(token){
    yield fork(fetchUserAuth,token);
  }else {
    yield put(tokenNotFound());
    yield put(push('/login'));
  }
}

function* fetchUserAuth(token) {
  const {response,error} = yield call(FetchUser.userAuth, token);
  if (response) {
    yield put(auth_result(response.data));
  } else if(error) {
    yield put(auth_failed());
    yield put(push('/login'));
  }
}


export function* fetchUserLogin (action) {
  const {response} = yield call(FetchUser.userLogin, action.data);
  if(response.data.success) {
    localStorage.setItem("token",response.data.token);
    yield put(loginInfoResult(response.data));
    yield put(push('/user/' + response.data.user_id));
  }else if(response.data.error){
    yield fork(errorMessage,response.data.error.errors)
  }
}

function* errorMessage(error){
  const message = {
    email: error.email ? error.email.message : "",
    password: error.password ? error.password.message : "",
    name: error.name ? error.name.message : "",
  };
  yield put(loginFailed(message));
}

export function* onLogout() {
  localStorage.removeItem("token");
  yield put(push('/login'));
}
