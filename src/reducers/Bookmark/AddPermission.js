/**
 * Created by tomino on 18/05/14.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  name:"",
  open:false,
  error_message:"",
};

export default function AddPermission(state = initialState, action) {
  switch (action.type){
    case AppType.CHANGE_USER_NAME:
      return Object.assign({}, state, {
        name: action.data,
      });
    case AppType.ADD_PREMISSION_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
        error_message:"",
      });
    case AppType.ADD_PERMISSION_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        open:false,
      });
    case AppType.ADD_PERMISSION_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        error_message:action.data,
      });
    case AppType.ADD_PREMISSION_DIALOG_OPEN:
      return Object.assign({}, state, {
        open:true,
      });
    case AppType.ADD_PERMISSION_DIALOG_CLOSE:
      return Object.assign({}, state, {
        open:false,
        error_message:"",
        name:"",
      });
    default:
      return state
  }
}

