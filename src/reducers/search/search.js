/**
 * Created by tomihei on 17/06/21.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  searchList:[],
  page:0,
  hasMore:true,
  word: "",
};

export default function videoList(state = initialState, action) {
  switch (action.type){
    case AppType.INIT_SEARCH_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        searchList:[],
        page:1,
        hasMore:true,
      });
    case AppType.CHANGE_WORD:
      return Object.assign({}, state, {
        word: action.word,
      });
    case AppType.SEARCH_LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
      });
    case AppType.SEARCH_LIST_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        page: action.data.currentPage + 1,
        searchList: state.searchList.concat(action.data.data),
      });
    case AppType.SEARCH_LIST_LAST_PAGE:
      return Object.assign({}, state, {
        hasMore: false,
      });
    default:
      return state
  }
}
