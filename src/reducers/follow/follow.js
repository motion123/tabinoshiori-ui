/**
 * Created by tomihei on 17/05/18.
 */
import * as AppType from '../../constants/App';

const initialState = {
  isFetching: false,
  followList: [],
};

export default function Follow(state = initialState, action) {
  switch (action.type){
    case AppType.FOLLOW_REQUEST:
      return Object.assign({}, state ,{
        isFetching: true,
      });
    case AppType.DEFOLLOW_REQUEST:
      return Object.assign({}, state ,{
        isFetching:true,
      });
    case AppType.DEFOLLOW_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
      });
    case AppType.ISFOLLOW_BOARD_REQUEST:
      return Object.assign({}, state ,{
        isFetching:true,
      });
    case AppType.ISFOLLOW_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
      });
    case AppType.FOLLOW_RESULT:
      return Object.assign({}, state ,{
        isFetching: false,
        followList: state.followList.concat(action.data),
      });
    case AppType.DEFOLLOW_RESULT:
      return Object.assign({}, state ,{
        isFetching:false,
        followList: state.followList.filter((obj,index) => obj != action.data),
      });
    case AppType.DEFOLLOW_USER_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        followList: state.followList.filter((obj,index) => obj != action.data),
      });
    case AppType.ISFOLLOW_BOARD_RESULT:
      return Object.assign({}, state ,{
        isFetching:false,
        followList: state.followList.concat(action.data.follow_board),
      });
    case AppType.ISFOLLOW_USER_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        followList: state.followList.concat(action.data.followee),
      });
    default:
      return state
  }
}



