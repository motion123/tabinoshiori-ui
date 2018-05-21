/**
 * Created by tomihei on 17/02/12.
 */
import * as AppType from '../constants/App';

const initialState = {
  isLogin: false,
  isPrepared: false,
  isFetching: false,
  isReLogin: false,
  user_id:"",
};

export default function auth(state = initialState, action) {
  switch (action.type){
    case AppType.AUTH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isPrepared: false
      });
    case AppType.AUTH_RESULT:
      return Object.assign({}, state, {
        isFetching: false,
        isLogin: true,
        isPrepared: true,
        user_id: action.user_id,
      });
    case AppType.LOGIN_INFO_RESULT:
      return Object.assign({}, state, {
        user_id:action.user_id,
      });
    case AppType.AUTH_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        isLogin: false,
        isPrepared:true,
      });
    case AppType.TOKEN_NOTFOUND:
      return Object.assign({}, state, {
        isPrepared: true
      });
    case AppType.LOGOUT:
      return Object.assign({}, state, {
        isPrepared: true,
        isLogin: false
      });
    default:
      return state
  }
}
