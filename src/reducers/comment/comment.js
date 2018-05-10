/**
 * Created by tomihei on 17/04/05.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  hasMore:true,
  page: 1,
  commentList: [],
  comment: "",
  resFormOpen: false,
  resFormId: "",
};

export default function videoList(state = initialState, action) {
  switch (action.type){
    case AppType.INIT_COMMENT_LIST:
      return Object.assign({}, state, {
        hasMore:true,
        page:1,
        commentList:[],
        comment:"",
        resFormOpen:false,
      });
    case AppType.CHANGE_COMMENT:
      return Object.assign({}, state, {
        comment: action.comment,
      });
    case AppType.COMMENT_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
      });
    case AppType.COMMENT_POST_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
      });
    case AppType.COMMENT_LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
      });
    case AppType.COMMENT_LIST_RESULT:
      return Object.assign({}, state, {
        isFetching: false,
        page: action.data.currentPage + 1,
        commentList: state.commentList.concat(action.data.comments),
      });
    case AppType.COMMENT_LIST_LAST_PAGE:
      return Object.assign({}, state, {
        hasMore: false
      });
    case AppType.RES_COMMENT_OPEN:
      return Object.assign({}, state, {
        resFormOpen: true,
        resFormId: action.id
      });
    case AppType.RES_COMMENT_CLOSE:
      return Object.assign({}, state, {
        resFormOpen:false,
        resFormId:"",
      });
    default:
      return state
  }
}
