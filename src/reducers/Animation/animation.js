/**
 * Created by tomihei on 17/06/04.
 */
import * as AppType from '../../constants/App';

const initialState = {
  onMenuFixed: false,
};

export default function Animation(state = initialState, action) {
  switch (action.type){
    case AppType.INIT_MENU_FIXED:
      return Object.assign({}, state, {
        onMenuFixed: false,
      });
    case AppType.MENU_FIXED:
      return Object.assign({}, state, {
        onMenuFixed: action.data
      });
    default:
      return state
  }
}
