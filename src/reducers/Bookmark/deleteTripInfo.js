/**
 * Created by tomino on 18/05/14.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  open:false,
  info_id:"",
};

export default function DeleteTripInfo(state = initialState, action) {
  switch (action.type){
    case AppType.TRIP_INFO_DELETE_REQUEST:
      return Object.assign({}, state, {
        isFetching:true
      });
    case AppType.TRIP_INFO_DELETE_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        open:false,
      });
    case AppType.TRIP_INFO_DELETE_FAILED:
      return Object.assign({}, state, {
        isFetching:false,
        open:false,
      });
    case AppType.TRIP_DELETE_DIALOG_OPEN:
      return Object.assign({}, state, {
        open:true,
        info_id:action.data,
      });
    case AppType.TRIP_DELETE_DIALOG_CLOSE:
      return Object.assign({}, state, {
        open:false,
        info_id:"",
      });
    default:
      return state
  }
}

