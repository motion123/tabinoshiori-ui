/**
 * Created by tomino on 18/05/18.
 */

import * as AppType from '../../constants/App';

const initialState = {
  isFetching: false,
  bookmarkList: [],
  page: 1,
  hasMore: true,
  init: false
};


export default function bookmarkList(state = initialState, action) {
  switch (action.type){
    case AppType.BOOKMARK_LIST_INIT:
      return Object.assign({}, state, {
        bookmarkList: [],
        page:1,
        hasMore:true,
        init:true,
      });
    case AppType.BOOKMARK_LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case AppType.BOOKMARK_LIST_RESULT:
      return Object.assign({}, state, {
        isFetching: false,
        bookmarkList: state.bookmarkList.concat(action.data.bookmarkdata),
        page: action.data.currentPage + 1,
      });
    case AppType.BOOKMARK_LIST_LAST_PAGE:
      return Object.assign({}, state, {
        hasMore: false,
      });
    default:
      return state
  }
}
