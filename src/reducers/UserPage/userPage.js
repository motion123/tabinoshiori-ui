/**
 * Created by tomino on 17/03/14.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: true,
  user: [],
};

export default function UserPage(state = initialState, action) {
  switch (action.type){
    case AppType.USER_PAGE_AUTH_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
        user:[],
      });
    case AppType.USER_PAGE_AUTH_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        user: action.data.data,
      });
    default:
      return state
  }
}
