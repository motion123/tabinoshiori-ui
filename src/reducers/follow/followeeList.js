/**
 * Created by tomihei on 17/06/07.
 */
import * as AppType from '../../constants/App';

const initialState = {
  isFetching: false,
  followeeList: [],
  followeeCount:0,
  page: 1,
  hasMore: true,
  open: false
};

export default function FolloweeList(state = initialState, action) {
  switch (action.type){
    case AppType.INIT_FOLLOWEE_LIST:
      return Object.assign({}, state ,{
        isFetching: true,
        followeeList:[],
        followeeCount:0,
        page:1,
        hasMore:true,
      });
    case AppType.FOLLOWEE_LIST_REQUEST:
      return Object.assign({}, state ,{
        isFetching: true,
      });
    case AppType.FOLLOWEE_LIST_RESULT:
      return Object.assign({}, state ,{
        followeeCount: action.data.itemCount,
        followeeList: state.followeeList.concat(action.data.followdata),
        page: action.data.currentPage + 1,
        isFetching:false
      });
    case AppType.FOLLOWEE_LIST_LAST_PAGE:
      return Object.assign({},state, {
        hasMore: false,
      });
    case AppType.FOLLOWEE_LIST_OPEN:
      return Object.assign({},state, {
        open:true,

      });
    case AppType.FOLLOWEE_LIST_CLOSE:
      return Object.assign({}, state, {
        open:false,
      });
    default:
      return state
  }
}
