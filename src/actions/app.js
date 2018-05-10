/**
 * Created by tomihei on 17/02/12.
 */
import * as AppType from '../constants/App';

export function auth_request(token) {
  return {
    type: AppType.AUTH_REQUEST,
    token: token,
  }
}

export function auth_result(success) {
  return {
    type: AppType.AUTH_RESULT,
    id: success._id,
    user_id: success.user_id
  }
}

export function auth_failed() {
  return {
    type: AppType.AUTH_FAILED,
  }
}

export function tokenNotFound(){
  return {
    type: AppType.TOKEN_NOTFOUND,
  }
}

export function requestLogout() {
  return {
    type: AppType.LOGOUT,
  }
}
