/**
 * Created by tomihei on 17/04/03.
 */
import * as AppType from '../../constants/App';

const initialState = {
  isFetching: false,
  url: "",
  open: false,
};

export default function deleteData(state = initialState, action) {
  switch (action.type){
    case AppType.DELETE_DATA_OPEN:
      return Object.assign({}, state ,{
        open:true,
        url: action.url,
      });
    case AppType.DELETE_DATA_CLOSE:
      return Object.assign({}, state, {
        open:false,
        isFetching:false,
        url:"",
      });
    case AppType.DELETE_DATA_REQUEST:
      return Object.assign({}, state, {
        isFetching:true,
      });
    default:
      return state
  }
}
