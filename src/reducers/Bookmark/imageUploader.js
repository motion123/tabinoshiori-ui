/**
 * Created by tomino on 18/05/14.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
};

export default function ImageUploader(state = initialState, action) {
  switch (action.type){
    case AppType.TRIP_IMAGE_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isFetching:true
      });
    case AppType.TRIP_IMAGE_UPDATE_RESULT:
      return Object.assign({}, state, {
        isFetching:false,
      });
    case AppType.TRIP_IMAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        isFetching:false,
      });
    default:
      return state
  }
}

