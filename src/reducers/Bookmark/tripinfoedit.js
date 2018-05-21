/**
 * Created by tomino on 18/05/13.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  open:false,
  description:"",
  info_id:"",
  initDescription:"",
};

export default function bookmarkInfo(state = initialState, action) {
  switch (action.type){
    case AppType.TRIP_INFO_EDIT_REQUEST:
      return Object.assign({}, state, {
        isFetching:true
      });
    case AppType.TRIP_INFO_EDIT_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        open:false,
      });
    case AppType.TRIP_INFO_EDIT_FAILED:
      return Object.assign({}, state, {
        isFetching:false,
      });
    case AppType.CHANGE_TRIP_INFO:
      return Object.assign({}, state, {
        description:action.data,
      });
    case AppType.TRIP_EDIT_DIALOG_OPEN:
      return Object.assign({}, state, {
        open:true,
        info_id:action.data,
        initDescription:action.description,
      });
    case AppType.TRIP_EDIT_DIALOG_CLOSE:
      return Object.assign({}, state, {
        open:false,
        info_id:"",
        description:"",
        initDescription:"",
      });
    default:
      return state
  }
}

