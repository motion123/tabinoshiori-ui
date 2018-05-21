/**
 * Created by tomino on 18/05/15.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  open:false,
  error_message:"",
};

export default function PermissionList(state = initialState, action) {
  switch (action.type){
    case AppType.DEL_PERMISSION_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
      });
    case AppType.DEL_PERMISSION_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        open:false,
      });
    case AppType.DEL_PERMISSION_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        error_message:action.data,
      });
    case AppType.DEL_PERMISSION_DIALOG_OPEN:
      return Object.assign({}, state, {
        open:true,
      });
    case AppType.DEL_PERMISSION_DIALOG_CLOSE:
      return Object.assign({}, state, {
        open:false,
        error_message:"",
      });
    default:
      return state
  }
}

