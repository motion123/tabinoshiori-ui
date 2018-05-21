/**
 * Created by tomihei on 17/06/07.
 */
import * as AppType from '../../constants/App';

const initialState = {
  isFetching: false,
  followerList: [],
  followerCount:0,
  page: 1,
  hasMore: true,
  open: false
};

export default function FollowerList(state = initialState, action) {
  switch (action.type){
    case AppType.INIT_FOLLOWER_LIST:
      return Object.assign({}, state ,{
        isFetching: true,
        followerList:[],
        followerCount:0,
        page:1,
        hasMore:true,
      });
    case AppType.FOLLOWER_LIST_REQUEST:
      return Object.assign({}, state ,{
        isFetching: true,
      });
    case AppType.FOLLOWER_LIST_RESULT:
      return Object.assign({}, state ,{
        followerCount: action.data.itemCount,
        followerList: state.followerList.concat(action.data.followdata),
        page: action.data.currentPage + 1,
        isFetching:false
      });
    case AppType.DEFOLLOW_USER_RESULT:
      return Object.assign({}, state, {
        followerCount: state.followerCount - 1
      });
    case AppType.FOLLOW_RESULT:
      return Object.assign({}, state ,{
        followerCount: state.followerCount + 1
      });
    case AppType.FOLLOWER_LIST_LAST_PAGE:
      return Object.assign({},state, {
        hasMore: false,
      });
    case AppType.FOLLOWER_LIST_OPEN:
      return Object.assign({},state, {
        open:true,

      });
    case AppType.FOLLOWER_LIST_CLOSE:
      return Object.assign({}, state, {
        open:false,
      });
    default:
      return state
  }
}
