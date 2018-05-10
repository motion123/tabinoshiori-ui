/**
 * Created by tomihei on 17/03/27.
 */
import * as AppType from '../../constants/App';

const initialState = {
  open: false,
  message:"",
};

export default function snackbar(state = initialState, action) {
  switch (action.type){
    case AppType.SNACBAR_OPEN:
      return Object.assign({}, state, {
        open: true,
        message: action.message,
      });
    case AppType.SNACBAR_CLOSE:
      return Object.assign({}, state, {
        open: false,
        message:"",
      });
    default:
      return state
  }
}
