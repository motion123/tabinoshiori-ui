/**
 * Created by tomihei on 17/05/31.
 */
import * as AppType from '../../constants/App';

const initialState = {
  isFetching: false,
  followList: [],
  followCount:0,
  page: 1,
  hasMore: true,
  open: false
};

export default function FollowList(state = initialState, action) {
  switch (action.type){
    case AppType.INIT_FOLLOW_LIST:
      return Object.assign({}, state ,{
        isFetching: true,
        followList:[],
        followCount:0,
        page:1,
        hasMore:true,
      });
    case AppType.FOLLOW_LIST_REQUEST:
      return Object.assign({}, state ,{
        isFetching: true,
      });
    case AppType.FOLLOW_LIST_RESULT:
      return Object.assign({}, state ,{
        followCount: action.data.itemCount,
        followList: state.followList.concat(action.data.followdata),
        page: action.data.currentPage + 1,
        isFetching:false
      });
    case AppType.FOLLOW_LIST_LAST_PAGE:
      return Object.assign({},state, {
        hasMore: false,
      });
    case AppType.FOLLOW_LIST_REQUEST_FAILED:
      return Object.assign({}, state, {
        isFetching:false,
      });
    case AppType.FOLLOW_LIST_OPEN:
      return Object.assign({},state, {
        open:true,

      });
    case AppType.FOLlOW_LIST_CLOSE:
      return Object.assign({}, state, {
        open:false,
      });
    default:
      return state
  }
}
