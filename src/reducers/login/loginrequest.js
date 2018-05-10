/**
 * Created by tomihei on 17/02/11.
 */

import * as AppType from '../../constants/App';

const initialState = {
    loginInfoRequest: false,
    loginInfoResult: false,
    nowLogin: false,
    token: "",
    error:false,
    message: {
      email: "",
      password: "",
      name: ""
    }
};

export default function loginInfo(state = initialState, action) {
  switch(action.type) {
    case AppType.LOGIN_INFO_REQUEST:
      return Object.assign({}, state, {
        loginInfoRequest: true,
        loginInfoResult: false,
        error: false,
        message: {
          email: "",
          password: "",
          name: ""
        }
      });
    case AppType.LOGIN_INFO_RESULT:
      return Object.assign({}, state, {
        loginInfoRequest: false,
        loginInfoResult: true,
        nowLogin: action.login,
        token: action.token,
      });
    case AppType.LOGIN_FAILED:
      return Object.assign({}, state, {
        loginInfoRequest: false,
        loginInfoResult: true,
        error: true,
        message: {
          email: action.error.email,
          password: action.error.password,
          name: action.error.name,
        }
      });
    default:
      return state
  }
}

