/**
 * Created by tomihei on 17/02/11.
 */
import * as AppType from '../constants/App';

export function changeEmail(email) {
  return {
    type:AppType.CHANGE_EMAIL,
    email:email,
    mailAddressNotExist: false
  }
}


export  function changePassword(password) {
  return {
    type: AppType.CHANGE_PASSWORD,
    password:password,
    passwordNotExist: false
  }
}

export function changeName(name) {
  return {
    type: AppType.CHANGE_NAME,
    name:name
  }
}

export function createUser() {
  return {
    type: AppType.CREATE_USER,
    buttonLabel: "新規登録",
    newUser: true
  }
}


export function loginInfoRequest(data) {
  return {
    type: AppType.LOGIN_INFO_REQUEST,
    data: data
  };
}

export function loginInfoResult(data) {
  return{
    type: AppType.LOGIN_INFO_RESULT,
    login: data.success,
    token: data.token
  }
}

export function loginFailed(message) {
  return{
    type: AppType.LOGIN_FAILED,
    login: false,
    error: message
  }
}

export function successLogin(){
  return{
    type: AppType.SUCCESS_LOGIN,
  }
}
