/**
 * Created by tomino on 18/05/12.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  lat:"",
  lng:"",
  description:"",
  site_name:"",
  open:false,
};

export default function addTripInfo(state = initialState, action) {
  switch (action.type){
    case AppType.CHANGE_SITE_NAME:
      return Object.assign({}, state, {
        site_name: action.data,
      });
    case AppType.CHANGE_TRIP_INFO_DESC:
      return Object.assign({}, state, {
        description: action.data,
      });
    case AppType.CHANGE_LNG:
      return Object.assign({}, state, {
        lng: action.data
      });
    case AppType.CHANGE_LAT:
      return Object.assign({}, state, {
        lat: action.data
      });
    case AppType.ADD_TRIP_INFO_REQUEST:
      return Object.assign({}, state, {
        isFetching:true
      });
    case AppType.ADD_TRIP_INFO_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
        lat:"",
        lng:"",
        description:"",
        site_name:"",
      });
    case AppType.ADD_TRIP_INFO_FAILD:
      return Object.assign({}, state, {
        isFetching:false
      });
    case AppType.TRIP_OPEN_DIALOG:
      return Object.assign({}, state, {
        open:true,
      });
    case AppType.TRIP_CLOSE_DIALOG:
      return Object.assign({}, state, {
        open:false,
      });
    default:
      return state
  }
}

